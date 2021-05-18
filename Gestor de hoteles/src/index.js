'use strict'

const  mongoose = require('mongoose');
const app = require('../src/app')

//Starting the server
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/GDH-crud', { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true,useFindAndModify: false}).then(()=>{
    console.log('DB is connected');

    app.listen(app.get('port'),() => {
        console.log('server on port', app.get('port'));
        
    
    });
 
}).catch(err => console.log(err))












