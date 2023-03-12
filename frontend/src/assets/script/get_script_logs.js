const { default: axios } = require('axios');

fetch = require('node-fetch');

function headers2(access_token) {
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`,

    }
}

const get_logs = async (url, access_token) => {
    

    fetch(url, {
        credentials: 'include',
        method: 'GET',
        // mode: 'no-cors',
        headers:  headers2(access_token),
        // body: JSON.stringify(sampledata),

      }).then(result => console.log('success====:', JSON.stringify(result)))
        .catch(error => console.log('error============:', error));
}


const end_ts = Date.now()
const begin_ts = end_ts - 1000 * 60 * 60 * 1

console.log (headers2(access_token));
axios.get(url, {headers: headers2(access_token)})
    .then((response) => {
        console.log(`statusCode: ${response.status}`);
        console.log('response:', JSON.stringify(response.data));
        // console.log('response:', JSON.stringify(response.data, null, 4));
    }, (error) => {
        console.log('ERROR:', error);
    });
