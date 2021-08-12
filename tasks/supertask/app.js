const mongo = require("./mongoClient");
const googleApi = require("./auntification");

const spreadsheetId = "1BCbr9rgC8oh6CkuNbP7xW5WEkE07LopO7Qb2pJQtIxM";
const url = "mongodb://localhost:27017/";
const credentialsUrl = "credentials.json";
const siteUrl = "https://www.googleapis.com/auth/spreadsheets";

function ageMoreThen3(el) {
  if(el.age > 3){
    return [el.name, el.age];
  }
}

function ageLessThen3(el) {
  if(el.age < 3){
    return [el.name, el.age];
  }
}

function nameLengthlessThen4(el) {
  if(el.name.length < 4){
    return [el.name, el.age];
  }
}

function nameLengthMoreThen4(el) {
  if(el.name.length > 4){
    return [el.name, el.age];
  }
}

async function main(){
  let data = await googleApi.auntificate(credentialsUrl, siteUrl);
  let auth = data[0];
  let googleSheets = data[1];

  // Read rows from spreadsheet
  let rows = await googleApi.getRows(auth, googleSheets, spreadsheetId, "Лист1!A:B");

  // Write row(s) to spreadsheet
  let func;
  mongo.sortHelper("userdb", "animals", nameLengthMoreThen4, "Лист1!A:c", auth, googleSheets, spreadsheetId);
}

main();