const express = require('Express')
const bodyParser = require('body-parser')
const cors = require('cors');
const {MongoClient} = require('mongodb');

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: true}))
// app.use(bodyParser.json())

// install cors and uncomment below license
app.use(cors())

const client = new MongoClient('mongodb://localhost:27017')



app.get('/', (req, res)=>{
  res.send('Hello World')
})

app.get('/submitData',async (req, res)=>{
  console.log('Inside Get method')
  console.log(req.body)

  // const {firstName, lastName, email, message} = req.body;
  // console.log(firstName)

  await client.connect()
  const db = client.db('test')
  const _data = await db.collection('trail').find({}).toArray()
  await client.close()
  // console.log(_data, 'MongoData')
  res.status(200).send({..._data})


})

app.post('/submitData', async (req, res)=>{
  console.log('Inside Post method')
  console.log(req.body)

  const {firstName, lastName, email, message} = req.body;
  // console.log(firstName, 'firstname')

  if (!firstName || !lastName || !email || !message){
    return res.status(422).json({error: "Plz filled the field"});
  }

  try{
    await client.connect()
    const db = client.db('test')
    const _dat = {...req.body}
    // console.log(_dat, '_dat')
    const _data = await db.collection('trial').updateOne({firstName: _dat.firstName},{$set:{..._dat}},{upsert:true});
    await client.close()
    res.status(200).send({..._data})

  }catch (e){
    console.log('Error', e)
  }
})

app.listen(5000, function(){
  console.log('Server running on port 5000')
})
