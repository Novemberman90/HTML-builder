
const { stdin, stdout } = process;
const fs = require('fs');
const path = require('path');
//const process = require('process');






fs.writeFile(path.join(__dirname,'new_text.txt', ''), '', (data, err) => {
    if(err) throw err;
    console.log("Сообщение создало файл");
});


stdout.write('Напиши сообщение и мы его зашифруем\n')
stdin.on('data', data => {
  const text = data.toString().trim();
    if(text === 'exit') process.exit();
    fs.appendFile(path.join(__dirname, 'new_text.txt', ''),
    text + ' ',
    (err) => {
        if (err) console.log(err);
      }
    );
  
});

process.on('SIGINT' , ()=>{
    process.exit() ;
  }) ;

  process.on('exit' , ()=>{

    stdout.write('\n\Ваше сообщение зашифровано');
  });



/*fs.writeFile(path.join(__dirname,messege, '', './02-write-file/new_text.txt', "utf-8",), '', (err) => {
    if (err) console.log(err.message);
  });*/

/*fs.readFile('/02-write-file/new_text.txt', 'utf-8');

    stdout.write(`\n${messege}`);
    stdin.on('data', data => {
        
        const name = data.toString();
        const reverseName = name.split('').reverse().join('');
        stdout.write(`\nМы всё это зашифровали ${reverseName}`);
        process.exit();
    });

   const { stdin, stdout } = process;*/