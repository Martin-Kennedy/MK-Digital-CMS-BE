const dotenv = require('dotenv').config();
const {Keystone} = require('@keystonejs/keystone');
const { GraphQLApp } = require('temp-ks-app-graphql');
const {AdminUIApp} = require('@keystonejs/app-admin-ui');
const {PasswordAuthStrategy} = require('@keystonejs/auth-password');
const {MongooseAdapter: Adapter} = require('@keystonejs/adapter-mongoose');
const { singleton } = require('@keystonejs/list-plugins');
const expressSession = require('express-session');

const MongoStore = require('connect-mongo')(expressSession);

const PROJECT_NAME = 'MK-Digital-CMS-BE';

const adapterConfig = {
    mongoUri: process.env.MONGO_URI
};

const HomepageCarouselSchema = require('./lists/HomepageCarousel')
const HomepageSchema = require('./lists/Homepage')
const ProjectSchema = require('./lists/Project');
const UserSchema = require('./lists/User');
const SurfAppJsonSchema = require('./lists/SurfAppStaticJson');
const BlogSchema = require('./lists/Blog');
const AboutSchema = require('./lists/About');
const ContactSchema = require('./lists/Contact');
const ProjectLandingSchema = require('./lists/ProjectLanding')
const BlogLandingSchema = require('./lists/ProjectLanding');



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

const keystone = new Keystone({
    adapter: new Adapter(adapterConfig),
    cookie: {
        secure: false,
    },
    sessionStore: new MongoStore({ url: process.env.MONGO_URI }),
    cookieSecret: process.env.COOKIE_SECRET
});

keystone.createList('HomepageCarousel', { 
    fields: HomepageCarouselSchema.fields,
    plugins: [
        singleton(),
    ],
    access: {
        read: isLoggedIn,
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin,
    }
});

keystone.createList('Homepage', {
    fields: HomepageSchema.fields,
    plugins: [
        singleton(),
    ],
    access: {
        read: isLoggedIn,
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin,
    }
});

keystone.createList('Project', {
    fields: ProjectSchema.fields,
    labelField: 'client',
    access: {
        read: isLoggedIn,
        create: isLoggedIn,
        update: isLoggedIn,
        delete: isLoggedIn,
    }
});
keystone.createList('Blog', {
    fields: BlogSchema.fields,
    labelField: 'title',
    access: {
        read: isLoggedIn,
        create: isLoggedIn,
        update: isLoggedIn,
        delete: isLoggedIn,
    }
});
keystone.createList('About', {
    fields: AboutSchema.fields,
    plugins: [
        singleton(),
    ],
    access: {
        read: isLoggedIn,
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin
    }
});
keystone.createList('Contact', {
    fields: ContactSchema.fields,
    plugins: [
        singleton(),
    ],
    access: {
        read: isLoggedIn,
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin
    }
});
keystone.createList('ProjectLanding', {
    fields: ProjectLandingSchema.fields,
    plugins: [
        singleton(),
    ],
    access: {
        read: isLoggedIn,
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin
    }
});
keystone.createList('BlogLanding', {
    fields: BlogLandingSchema.fields,
    plugins: [
        singleton(),
    ],
    access: {
        read: isLoggedIn,
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin
    }
});
keystone.createList('User', {
    fields: UserSchema.fields,
    access: {
        read: isLoggedIn,
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin
    }
});

keystone.createList('SurfAppJsonUrl', {
    fields: SurfAppJsonSchema.fields,
    plugins: [
        singleton(),
    ],
    access: {
        read: isLoggedIn,
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
    ],
    configureExpress: app => {
        app.set('trust proxy', true);
    }
};
