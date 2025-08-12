const {MongoClient}=require("mongodb");

const uri="mongodb+srv://sachinsingh6386:ppg7nWapvoMpXTdW@bytebuddydev.bnwjmdf.mongodb.net/";
const client=new MongoClient(uri);

const dbName="learing";
async function main()
{
    await client.connect();
    console.log("Connected to MongoDb server");
    const db=client.db(dbName);
    const collection=db.collection('user');
     
    const data={
    firstname:'Himanshu',
    lastname:"Singh",
    city:"noida",

  }
  const insertresult=await collection.insertOne([data]);
  console.log(`Inserted doucument =>`,insertresult);
    return 'done';
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());