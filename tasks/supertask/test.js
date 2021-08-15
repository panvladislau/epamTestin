const {describe,it} = require('mocha');
const { expect } = require('chai');

const mongo = require("./mongoClient");
const googleApi = require("./auntification");

const spreadsheetId = "1BCbr9rgC8oh6CkuNbP7xW5WEkE07LopO7Qb2pJQtIxM";
const url = "mongodb://localhost:27017/";
const credentialsUrl = "credentials.json";
const siteUrl = "https://www.googleapis.com/auth/spreadsheets";

describe('Promises', () => {

	it('should mach', async () => {
        let data = await googleApi.auntificate(credentialsUrl, siteUrl);
        let auth = data[0];
        let googleSheets = data[1];
        let rows = await googleApi.getRows(auth, googleSheets, spreadsheetId, "Лист1!A:B");
        let arrdb = await mongo.getDBData("userdb", "animals");
        expect(rows).contains(arrdb);
	});
});