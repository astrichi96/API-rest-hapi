const ProviderController = require('../controller/providers')

module.exports = [
    {
        path: '/provider',
        method: 'GET',
        handler: ProviderController.find
    },
    {
        path: '/provider/{id}',
        method: 'GET',
        handler: ProviderController.findProvider
    },
    {
        path: '/provider',
        method: 'POST',
        handler: ProviderController.addProvider
    }
]