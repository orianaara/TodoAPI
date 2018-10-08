const{ MongoClient, ObjectId } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if (err) {
        return console.log(err);
    }
    console.log('connected');
    const db = client.db('TodoApp');

   db.collection('Todos').updateOne(
       {id: new ObjectId("5bbb0cf478436515605c7d39 ")},
{ $set: {
    completed: false
    }
}).toArray().then((docs) =>{
       console.log(JSON.stringify(docs,undefined, 2));

   }).catch((err) =>{
       console.log(err);
   });
   
   client.close();
});
