const express = require('express');
const axios = require('axios').default;
const mysql = require('mysql');

const app = express();
const PORT = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'password',
  database: 'nodedb',
};

app.get('/', (req, res) => {
  insertPeopleName(res);
});

app.listen(PORT, () => {
  console.log('STARTED AT ' + PORT);
});

async function getPersonName() {
  const RANDOM = Math.floor(Math.random() * 10);
  const response = await axios.get('https://swapi.dev/api/people');
  personName = response.data.results;
  return personName[RANDOM].name;
}

async function insertPeopleName(res) {
  const name = await getPersonName();
  const connection = mysql.createConnection(config);
  const sql = `INSERT INTO people(name) values('${name}')`;
    
  connection.query(sql);    
  getPeople(res, connection);
}

function getPeople(res, connection) {    
  const sql = `SELECT name FROM people`;  
  
  connection.query(sql, (error, results, fields) => {
    if (error) {
      throw error
    };
    
    let table = '<table>';
    table += '<tr><th>Inserted Names</th></tr>';
    for(let people of results) {      
      table += `<tr><td>${people.name}</td></tr>`;
    }

    table += '</table>';    
    res.send('<h1>FullCycle Rocks!</h1>' + table);    
  });   
  connection.end();
}