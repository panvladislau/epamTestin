const { google } = require("googleapis");

class googleApi{
    async auntificate(credentials, scope){
        const auth = new google.auth.GoogleAuth({
            keyFile: credentials,
            scopes: scope,
        });

        // Create client instance for auth
        const client = await auth.getClient();

        // Instance of Google Sheets API
        const googleSheets = google.sheets({ version: "v4", auth: client });

        const spreadsheetId = "1BCbr9rgC8oh6CkuNbP7xW5WEkE07LopO7Qb2pJQtIxM";

        return [auth, googleSheets]
    }

    async getRows(auth, googleSheets, spreadsheetId, range){
        let getRows = await googleSheets.spreadsheets.values.get({
            auth,
            spreadsheetId,
            range: range,
        });
        getRows = await getRows.data.values;
        return getRows;
    }

    async writeRows(auth, googleSheets, spreadsheetId, range, values){
        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range: range,
            valueInputOption: "USER_ENTERED",
            resource: {
            values: values
            },
        });
    }
}

module.exports = new googleApi();