const { Text, Select, Url, DateTime, Relationship } = require('@keystonejs/fields');

const projectFields  = {
    fields: {
        client: {
            type: Text,
            isRequired: true
        },
        expertise: {
            type: Select,
            options: [
                { value: 'Digital', label: 'Digital' },
                { value: 'Branding', label: 'Branding' },
                { value: 'Digital & Branding', label: 'Digital & Branding' }
            ],
            dataType: 'string',
            defaultValue: 'Digital',
            isRequired: true
        },
        subject: {
            type: Text,
            isRequired: true
        },
        aboutClient: {
            type: Text,
            isMultiline: true,
            isRequired: true
        },
        heroImg: {
            type: Text,
            isRequired: true
        }, 
        launchDate: {
            type: DateTime, 
            format: 'dd/MM/yyyy HH:mm O',
            isRequired: true
        },
        status: {
            type: Select,
            options: [
                {value: 'PUBLISHED', label: 'Published'},
                { value: 'UNPUBLISHED', label: 'Unpublished' }
            ],
            defaultValue: 'PUBLISHED'
        },
        author: {
            type: Text,
            isRequired: true
        }
    }
}

module.exports = projectFields;