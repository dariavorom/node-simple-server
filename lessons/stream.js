//Readable - чтение
//Writable - запись
//Duplex - для чтения и записи Readable+Writable
//Transform - такой же, как duplex, но может изменить данные по мере чтения

const fs = require('fs');
const path = require('path');

// fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data) => {
//     if (err){ throw err}
//     console.log(data)
// })

// const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'));

// //Один чанк по деолту 64кб
// stream.on('data', (chunk) => console.log(chunk));
// stream.on('open', () => console.log('Начали читать'));
// stream.on('end', () => console.log('Закончили читать'));
// stream.on('error', (e) => console.log(e));

const writebleStream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'));

for (let i = 0; i < 20; i++) {
    writebleStream.write(i + '\n');
}

writebleStream.end();