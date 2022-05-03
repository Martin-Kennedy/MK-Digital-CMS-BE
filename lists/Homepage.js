const { Text, Select, Url, DateTime, Slug, Integer, Relationship } = require('@keystonejs/fields');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');

const homepageFields = {
    fields: {
        sectionOneTitle: {
            type: Text,
        },
        sectionOneBlurbOne: {
            type: Text,
            isMultiline: true,
        },
        sectionOneLink: {
            type: Url,
        },
        sectionTwoTitle: {
            type: Text,
        },
        sectionOneLinkLabel: {
            type: Text,
        },

        sectionTwoBlurbOne: {
            type: Text,
            isMultiline: true,
        },
        sectionTwoBlurbTwo: {
            type: Text,
            isMultiline: true,
        },
        sectionThreeTitle: {
            type: Text,
        },
        sectionThreeBlurbOne: {
            type: Text,
            isMultiline: true,
        },
       
        sectionFourTitle: {
            type: Text,
        },
        sectionFourBlurb: {
            type: Text,
            isMultiline: true,
        },
        sectionFourLink: {
            type: Url,
        },
        sectionFourLinkLabel: {
            type: Text,
        },
        status: {
            type: Select,
            options: [
                { value: 'PUBLISHED', label: 'Published' },
                { value: 'UNPUBLISHED', label: 'Unpublished' }
            ],
            defaultValue: 'PUBLISHED'
        }
    }
}

module.exports = homepageFields;