const mongoose = require('mongoose')
const {db} = require('../config')

const connection = mongoose.connect(`mongodb://${db.host}:${db.port}/${db.database}`)
.then(() => {
    console.log('conexión exitosa')
}).catch(() => {
    console.log('error al conectarse')
})

module.exports=connection 