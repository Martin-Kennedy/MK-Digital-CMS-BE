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
        }
    }
}

module.exports = surfAppJsonEndpointFields;