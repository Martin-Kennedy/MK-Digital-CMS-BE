const dotenv = require('dotenv').config();
const {Keystone} = require('@keystonejs/keystone');
const { GraphQLApp } = require('temp-ks-app-graphql');
const {AdminUIApp} = require('@keystonejs/app-admin-ui');
const {PasswordAuthStrategy} = require('@keystonejs/auth-password');
const {MongooseAdapter: Adapter} = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'MK-Digital-CMS-BE';

const adapterConfig = {
    mongoUri: process.env.MONGO_URI
};

const ProjectSchema = require('./lists/Project');
const UserSchema = require('./lists/User');
const SurfAppJsonSchema = require('./lists/SurfAppStaticJson');

const isAdmin = ({
    authentication: {
        item: user
    }
}) => {
    return !!user && user.isAdmin;
}

const isLoggedIn = ({
    authentication: {
        item: user
    }
}) => {
    return !!user;
}

const keystone = new Keystone({adapter: new Adapter(adapterConfig), cookieSecret: process.env.COOKIE_SECRET});

keystone.createList('Project', {
    fields: ProjectSchema.fields,
    access: {
        read: true,
        create: isLoggedIn,
        update: isLoggedIn,
        delete: isLoggedIn
    }
});
keystone.createList('User', {
    fields: UserSchema.fields,
    access: {
        read: true,
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin
    }
});

keystone.createList('SurfAppJsonUrl', {
    fields: SurfAppJsonSchema.fields,
    access: {
        read: true,
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin
    }
});

const authStrategy = keystone.createAuthStrategy({
    type: PasswordAuthStrategy,
    list: 'User',
    config: {
        identityField: 'email',
        secretField: 'password'

    }
})

module.exports = {
    keystone,
    apps: [
        new GraphQLApp({
            apollo: {
                maxFiles: 10
            }
        }),
        new AdminUIApp({
            name: PROJECT_NAME,
            enableDefaultRoute: true,
            authStrategy,
            hooks: require.resolve('./adminHooks/hooks.js'),
            isAccessAllowed: isLoggedIn
        })
    ]
};
