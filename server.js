const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv').config();


const app = express();


app.get('/', (req, res)=>{
    res.send('working');
});

app.get('/api/users', async (req, res) =>{
    let since = req.query.since;
    let api_response = await axios.get('https://api.github.com/users?since=' + since);  
    
    return res.json({
        list_of_users : api_response.data,
        link_for_next_page : api_response.headers.link
    });
 
});

app.get('/api/users/:username/details', async (req, res) =>{
    let username = req.params.username;
    let api_response = await axios.get('https://api.github.com/users/' + username);  

    return res.json({
        datails : api_response.data    
    });
 
});

app.get('/api/users/:username/repos', async (req, res) =>{
    let username = req.params.username;
    let api_response = await axios.get('https://api.github.com/users/' + username + '/repos');  

    return res.json({
        repos : api_response.data    
    }); 
});



module.exports = app;