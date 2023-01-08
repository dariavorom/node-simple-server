const path = require('path')
const fs = require('fs')

//Работа с файловой системой

// fs.writeFile(path.resolve(__dirname, 'test.txt'), 'test text1', (err) => {
//     if (err) {
//         throw err
//     }

//     console.log('created')
//     fs.appendFile(path.resolve(__dirname, 'test.txt'), '454y5', (err) => {
//     if (err) {
//         throw err
//     }

//     console.log('created')
// })
// })

//создать файл и записать что-то в него

const writeFileAsync = async (path, data) => {
    return new Promise((res, rej) => fs.writeFile(path, data, (err) => {
        if (err) {
            return rej(err.message)
        }
        res()
    }))
}
//добавить в созданный файл инфо
const appendFileAsync = async (path, data) => {
    return new Promise((res, rej) => fs.appendFile(path, data, (err) => {
        if (err) {
            return rej(err.message)
        }
        res()
    }))
}

//прочитать файл
const readFileAsync = async (path) => {
    return new Promise((res, rej) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if (err) {
            return rej(err.message)
        }
        res(data)
    }))
}
//удалить файл
const removeFileAsync = async (path) => {
    return new Promise((res, rej) => fs.rm(path, (err) => {
        if (err) {
            return rej(err.message)
        }
        res()
    }))
}

// writeFileAsync(path.resolve(__dirname, 'test.txt'), 'изначальные данные')
// .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '123'))
// .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '456'))
// .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '789'))
// .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), 'конец'))
// .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
// .then((data) => console.log(data))
// .catch((err) => console.log(err))

// removeFileAsync(path.resolve(__dirname, 'test.txt')).then(() => console.log('удалено'))

const text = process.env.TEXT || '';
writeFileAsync(path.resolve(__dirname, 'test.txt'), text)
.then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
.then((data) => data.split(' ').length)
.then((count) => writeFileAsync(path.resolve(__dirname, 'count.txt'), `${count}`))
.then(() => removeFileAsync(path.resolve(__dirname, 'test.txt')))