const { Text, Select, Integer, Relationship } = require('@keystonejs/fields');
const { Color } = require('@keystonejs/fields-color');
const { CloudinaryAdapter } = require('@keystonejs/file-adapters');
const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image');

const fileAdapter = new CloudinaryAdapter({
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_KEY,
    apiSecret: process.env.CLOUDINARY_SECRET,
    folder: 'MK-Digital-CMS',
});

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
        cardImage: {
            type: CloudinaryImage,
            adapter: fileAdapter,
            isRequired: true,
        },
        cardColorHexValue: {
            type: Text,
        },
        order: {
            type: Integer,
        },
        textTranslation: {
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
    }
}

module.exports = homepageCarouselFields;