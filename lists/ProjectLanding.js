const { Text, Select, Relationship } = require('@keystonejs/fields');

const projectLandingFields = {
    fields: {
        h1: {
            type: Text,
        },
        paragraphLineOne: {
            type: Text,
        },
        paragraph: {
            type: Text,
            isMultiline: true,
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

module.exports = projectLandingFields;