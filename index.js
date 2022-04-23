const dotenv = require('dotenv').config();
const {Keystone} = require('@keystonejs/keystone');
const {GraphQLApp} = require('@keystonejs/app-graphql');
const {AdminUIApp} = require('@keystonejs/app-admin-ui');
const {MongooseAdapter: Adapter} = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'MK-Digital-CMS-BE';
const adapterConfig = {
    mongoUri: process.env.MONGO_URI
};

const ProjectsSchema = require('./lists/Project');

const keystone = new Keystone({
    adapter: new Adapter(adapterConfig),
    cookieSecret: process.env.COOKIE_SECRET
  });

keystone.createList('Project', ProjectsSchema); 

module.exports = {
    keystone,
    apps: [
        new GraphQLApp(),
        new AdminUIApp({name: PROJECT_NAME, enableDefaultRoute: true})
    ]
};
