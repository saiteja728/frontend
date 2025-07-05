const {MongoClient} = require('mongodb');

let dbConnection ;
module.exports={
    connectTodb:(cb)=>{
        MongoClient.connect('mongodb://localhost:27017/cartitems')
        .then((client)=>{
            dbConnection =client.db();
            return cb();
        }).catch((err)=>{
            return cb(err);
        })
        
         
    },
    getDb:()=> dbConnection
}