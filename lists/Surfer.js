const { Text, Password } = require('@keystonejs/fields');

const surferFields = {
    fields: {
        userName: {
            type: Text,
            isRequired: true
        },
        email: {
            type: Text,
            isRequired: true,
            isUnique: true,
        },
        password: {
            type: Password,
            isRequired: true
        }
    }
}

module.exports = surferFields;