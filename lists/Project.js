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

const projectFields  = {
    fields: {
        client: {
            type: Text,
            isRequired: true
        },
        title: {
            type: Text,
            isRequired: true
        },
        cardImage: {
            type: CloudinaryImage,
            adapter: fileAdapter,
            isRequired: true,
        },
        externalLink: {
            type: Url
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
        heroImage: { 
            type: CloudinaryImage, 
            adapter: fileAdapter,
         },
        launchDate: {
            type: DateTime,
            format: 'dd/MM/yyyy HH:mm O',
            isRequired: true
        },
        aboutClient: {
            type: Text,
            isMultiline: true,
            isRequired: true
        },
        whatWeDid: {
            type: Text,
            isMultiline: true,
            isRequired: true
        },
        image1: {
            type: CloudinaryImage,
            adapter: fileAdapter,
        },
        image2FullWidth: {
            type: CloudinaryImage,
            adapter: fileAdapter,
        },
        videoHolderImage: {
            type: CloudinaryImage,
            adapter: fileAdapter,
        },
        youtubeEmbedCode: {
            type: Text,
        },
        youtubeListCode: {
            type: Text,
        },
        image4: {
            type: CloudinaryImage,
            adapter: fileAdapter,
        },
        iphoneImageDarkBackground: {
            type: CloudinaryImage,
            adapter: fileAdapter,
        },
        iphoneImageColorBackground: {
            type: CloudinaryImage,
            adapter: fileAdapter,
        },
       
        resultMetric1Description: {
            type: Text,
            isRequired: true
        },
        resultMetric1Value: {
            type: Text,
            isRequired: true
        }, 
        resultMetric2Description: {
            type: Text,
            isRequired: true
        },
        resultMetric2Value: {
            type: Text,
            isRequired: true
        },
        resultFullText: {
            type: Text,
            isMultiline: true
        },
        buttonColor: {
            type: Color,
        },
        fiftyVwBkgColor: {
            type: Color,
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
                {value: 'PUBLISHED', label: 'Published'},
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

module.exports = projectFields;