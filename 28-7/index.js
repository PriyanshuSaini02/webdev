const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'Mongo-DB';

async function main() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('Students');

    const dataAdd = await collection.insertMany([
        {
            name: "xyz",
            roll_no: 1,
            class: "G4"
        },
        {
            name: "abc",
            roll_no: 3,
            class: "G5"
        },

        {
            name: "zxc",
            roll_no: 7,
            class: "G6"
        },

    ])
    console.log(dataAdd)

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());