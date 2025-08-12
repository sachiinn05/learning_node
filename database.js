const {MongoClient}=require("mongodb")
const URL="mongodb+srv://sachinsingh6386:ppg7nWapvoMpXTdW@bytebuddydev.bnwjmdf.mongodb.net/";
const client = new MongoClient(URL);

// Database Name
const dbName = 'helloworld';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('user');

  // the following code examples can be pasted here...
  // const data={
  //   firstname:'Himanshu',
  //   lastname:"Singh",
//     city:"noida",

//   }
//   const insertResult = await collection.insertMany([data]);
// console.log('Inserted documents =>', insertResult);

// const data2={
//     firstname:'Sachin',
//     lastname:"Singh",
//     city:"Greater Noida",

//   }
//   const insertResult1 = await collection.insertMany([data2]);
// console.log('Inserted documents =>', insertResult1);

const updateResult=await collection.updateOne({firstname:'Himanshu'},{$set:{lastname:'Arora'}});
console.log('Updated document =>', updateResult);
const filteredDocs = await collection.find({}).toArray();
console.log('Found documents filtered by =>', filteredDocs);
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());