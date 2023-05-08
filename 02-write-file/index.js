
const fs = require('fs');
const path = require('path');
const process = require('process');
const { stdin, stdout } = process;



let messege = "Сообщение создает файл";

fs.writeFile('./02-write-file/new_text.txt',messege , "utf-8",(data, err) => {
    if(err) throw err;
    console.log("Сообщение создало файл");
});

/*fs.readFile('/02-write-file/new_text.txt', 'utf-8');

    stdout.write(`\n${messege}`);
    stdin.on('data', data => {
        
        const name = data.toString();
        const reverseName = name.split('').reverse().join('');
        stdout.write(`\nМы всё это зашифровали ${reverseName}`);
        process.exit();
    });

   const { stdin, stdout } = process;*/
stdout.write('Напиши сообщение и мы его зашифруем\n')
stdin.on('data', data => {
  const text = data.toString();
  const reverseText = text.split('').reverse().join('');

  stdout.write(`\nВаше сообщение зашифровано ${reverseText}`);
  process.exit();
});
