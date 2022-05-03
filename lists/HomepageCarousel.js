const { Text, Select, Url, DateTime, Slug, Integer, Relationship } = require('@keystonejs/fields');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');

const homepageCarouselFields = {
    fields: {
        listType: {
            type: Select,
            options: [
                { value: 'PROJECT', label: 'Project' },
                { value: 'BLOG', label: 'Blog' },
                { value: 'OPEN-SOURCE', label: 'Contributions' },
            ],
            dataType: 'string',
        },
        clientName: {
            type: Relationship,
            ref: 'Project',
            isMany: false,
            dependsOn: {listType: 'PROJECT'},
        },
        blogTitle: {
            type: Relationship,
            ref: 'Blog',
            isMany: false,
            dependsOn: { listType: 'BLOG' }
        },
        status: {
            type: Select,
            options: [
                { value: 'PUBLISHED', label: 'Published' },
                { value: 'UNPUBLISHED', label: 'Unpublished' }
            ],
            defaultValue: 'PUBLISHED'
        },
    }
}

module.exports = homepageCarouselFields;