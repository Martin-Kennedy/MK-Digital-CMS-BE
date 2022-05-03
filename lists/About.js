const { Text, Select, Url, DateTime, Slug, Integer, Relationship } = require('@keystonejs/fields');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');

const aboutFields = {
    fields: {
        aboutHeroLineOne: {
            type: Text,
        },
        aboutHeroLineTwo: {
            type: Text,
        },
        aboutHeroLineThree: {
            type: Text,
        },
        introBlurbOne: {
            type: Text,
            isMultiline: true,
        },
        introBlurbTwo: {
            type: Text,
            isMultiline: true,
        },
        aboutInitialDescription: {
            type: Wysiwyg,
        },
        aboutSectionOneShort: {
            type: Text,
        },
        aboutSectionOneLong: {
            type: Text,
            isMultiline: true,
        },
        aboutSectionTwoLong: {
            type: Text,
            isMultiline: true,
        },
        dragComponentText: {
            type: Text,
        },
        servicesInitialDescription: {
            type: Wysiwyg,
        },
       
        serviceOneName: {
            type: Text,
        },
        serviceOneValue: {
            type: Text,
        },
        serviceOneDescription: {
            type: Text,
            isMultiline: true,
        },
        serviceOneListOne: {
            type: Wysiwyg,
        },
        serviceOneListTwo: {
            type: Wysiwyg,
        },
        serviceTwoName: {
            type: Text,
        },
        serviceTwoValue: {
            type: Text,
        },
        serviceTwoDescription: {
            type: Text,
            isMultiline: true,
        },
        serviceTwoListOne: {
            type: Wysiwyg,
        },
        serviceTwoListTwo: {
            type: Wysiwyg,
        },
        parallaxVideoEmbed: {
            type: Text,
        },
        parallaxVideoPlaylist: {
            type: Text,
        },
        status: {
            type: Select,
            options: [
                { value: 'PUBLISHED', label: 'Published' },
                { value: 'UNPUBLISHED', label: 'Unpublished' }
            ],
            defaultValue: 'PUBLISHED'
        },
        author: {
            type: Relationship,
            ref: 'User',
            isMany: false,
            isRequired: true
        }
    }
}

module.exports = aboutFields;