const mongoose =require('mongoose') ;
const CONNECTION_URL= 'mongodb+srv://souadHamdi:souadHamdi@clusterblog.a3wj1uw.mongodb.net/?retryWrites=true&w=majority' ;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>  console.log(`Server Running on Port: http://localhost:3000`))
  .catch((error) => console.log(`${error} did not connect`));

const db = mongoose.connection;

module.exports = db;



