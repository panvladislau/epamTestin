/**
 * 1. You need to make a GET request (via async/await) to the resource: https://jsonplaceholder.typicode.com/posts
 * using fetch method inside the sendRequest function
 * 2. Save the payload of the response to "response.json" file with only items which id less than 20
 * 3. Check yourself by running npm run test:nodejs
 * DOCS: https://www.npmjs.com/package/node-fetch
 */
const fetch = require('node-fetch');
const fs = require('fs/promises');

/**
 * Run fetch method inside the function
 * Use the fs.writeFile method inside the function
 */

const sendRequest = async (url) => {
	fetch(url).then(response => response.json()).then(result => fs.writeFile("response.json", JSON.stringify(result, null, 4)))
};

sendRequest("https://jsonplaceholder.typicode.com/posts");


module.exports = {
	sendRequest
};
