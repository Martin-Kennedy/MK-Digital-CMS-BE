const { Text, Select, Relationship  } = require('@keystonejs/fields');

const contactFields = {
    fields: {
        h1: {
            type: Text,
        },
        h2: {
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

module.exports = contactFields;