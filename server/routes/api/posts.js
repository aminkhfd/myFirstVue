const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/',async (req,res) => {
   
   const output = await load();
   return res.send(await output.find({}).toArray());

});

router.post('/', async (req,res) => {
   const output = await load();
   await output.insertOne({
      text : req.body.text,
      createdAt : new Date()
   });

   res.status(201).send('Done');

})

router.delete('/:id', async (req, res) => {
   const output = await load();
   await output.deleteOne({ _id : new mongodb.ObjectID(req.params.id) });

   res.send("item succefully deleted");

})

async function load() {

      const client = await new mongodb.MongoClient.connect('mongodb://aminkhfd:secret@192.168.10.10:27017/admin',{ useNewUrlParser: true });
      return client.db('admin').collection('mongopost');
}

module.exports = router;
