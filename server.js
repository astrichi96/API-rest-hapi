const Hapi = require('hapi')
const chalk = require('chalk')
const mongoose = require('mongoose')
const config = require('./config')

const server = new Hapi.Server()
const providerRoutes = require('./routes/providers')

mongoose.connection.on('error', err => console.log(chalk.red(err)));
mongoose.connection.once('open', () => console.log(chalk.green("Se conecto")));

mongoose.connect(config.db)

server.connection({
    port: 3001,
    host: 'localhost'
})

server.route({
    path:'/',
    method: 'GET',
    handler (request, reply){
        reply('Welcome to Hapi API')
    }
})

server.route(providerRoutes)

server.start((err) => {
    if(err) throw err
    console.log(`Server running at PORT: ${server.info.port}`)
})
