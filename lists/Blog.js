const { Text, Select, Url, DateTime, Slug, Integer, Relationship } = require('@keystonejs/fields');
const { CloudinaryAdapter } = require('@keystonejs/file-adapters');
const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image');
const { Color } = require('@keystonejs/fields-color');

const fileAdapter = new CloudinaryAdapter({
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_KEY,
    apiSecret: process.env.CLOUDINARY_SECRET,
    folder: 'MK-Digital-CMS',
});

const blogFields = {
    fields: {
        subject: {
            type: Select,
            options: [
                { value: 'SURFING', label: 'Surfing' },
                { value: 'DIGITAL', label: 'Digital' },
                { value: 'BRANDING', label: 'Branding' },
                { value: 'BUSINESS', label: 'Business' },
                { value: 'NEW TECHNOLOGY', label: 'New Technology' },
                { value: 'TRENDS', label: 'Trends' },

            ],
            dataType: 'string',
            isRequired: true
        },
        title: {
            type: Text,
            isRequired: true
        },
        article: {
            type: Text,
            isMultiline: true,
            isRequired: true
        },
        cardImage: {
            type: CloudinaryImage,
            adapter: fileAdapter,
            isRequired: true,
        },
        mainImage: {
            type: CloudinaryImage,
            adapter: fileAdapter,
        },
        launchDate: {
            type: DateTime,
            format: 'dd/MM/yyyy HH:mm O',
            isRequired: true
        },
        cardColor: {
            type: Color,
        },
        cardHeight: {
            type: Integer,
        },
        imagePositionLeft: {
            type: Integer
        },
        imagePositionTop: {
            type: Integer
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

module.exports = blogFields;