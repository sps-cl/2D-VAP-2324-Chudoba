const express = require('express');
const Person = require('./person');

const app = express();
app.listen(7707);

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/random-person', (req, res) => {
  const randomPerson = new Person(
    getRandomName(),
    getRandomSurname(),
    generateRandomId()
  );

  res.json(randomPerson);
});

function getRandomName() {
  const names = ["David", "Petr", "Václav", "Martin", "Zdeněk", "Daniel", "Benjamin", ];
  return names[Math.floor(Math.random() * names.length)];
}

function getRandomSurname() {
    const names = ["Poupa", "Masopust", "Fafala", "Šupola", "Pažout", "Kreisinger"];
    return names[Math.floor(Math.random() * names.length)];
  }

function generateRandomId() {
  return Math.floor(Math.random() * 1000);
}
