const MongoClient = require("mongodb").MongoClient;
const googleApi = require("./auntification");
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, {useUnifiedTopology: true});

class mongo{
    async sortHelper(namedb, collectiondb, func, range, auth, googleSheets, spreadsheetId){
        mongoClient.connect(function(err, client){
            const db = client.db(namedb);
            const collection = db.collection(collectiondb);
            collection.find().toArray(async function(err, results){                
                let array = results.map(res => func(res));
                await googleApi.writeRows(auth, googleSheets, spreadsheetId, range, array);
                client.close();
           });
        })
    }
}

module.exports = new mongo();