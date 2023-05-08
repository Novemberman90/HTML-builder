
const path = require('path');
const fs = require('fs');
const process = require('process');




let messege = 'Привет ! Если ты это видишь';
    fs.writeFile('./02-write-file/new_text.txt', messege, (err) => {
        if(err) throw err;
        console.log('Привет! Напише, что-то и увидешь чудо');
    });
