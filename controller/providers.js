
const Provider = require('../models/providers')

module.exports = {
    find(request, reply){
        Provider.find({}, (err, providers) => {
            if(err) reply(err).code(404)
            return reply(providers)
        })   
    },

    findProvider(request,reply){
        Provider.findById(request.params.id, (err, provider) => {
            if(err) reply(err).code(404)
            return reply(provider)
        })
    },

    addProvider(request,reply){
        Provider.create({
            firstName: request.payload.firstName,
            lastName: request.payload.lastName,
            middleName: request.payload.middleName,
            email: request.payload.email,
            employerId: request.payload.employerId,
            providerType: request.payload.providerType,
            staffStatus: request.payload.staffStatus,
            assignedTo: request.payload.assignedTo,
            status: request.payload.status,
            projectedStartDate: request.payload.projectedStartDate,
            createBy: request.payload.createBy,
            updateBy: request.payload.updateBy,
        }, (err, provider) => {
            if(err) reply(err).code(500)
            return reply.response(provider)
        })
    }
}
    