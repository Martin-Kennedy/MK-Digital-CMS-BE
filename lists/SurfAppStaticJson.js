const { Url } = require('@keystonejs/fields');

const surfAppJsonEndpointFields = {
    fields: {
        surfSpotJson: {
            type: Url
        },
        ndbcBuoyData: {
            type: Url
        },
        tideAndCurrentsApiData: {
            type: Url
        },
        surfSpotApi: {
            type: Url
        },
        urlProxy: {
            type: Url
        },
        tidesAndCurrentsUrl: {
            type: Url
        }

    }
}

module.exports = surfAppJsonEndpointFields;