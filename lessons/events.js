const Emitter = require('events'); // это класс

const emitter = new Emitter();

const callback = (data, second, third) => {
    console.log('Вы прислали' + data);
    console.log('второй аргумент' + second);
}

emitter.on('message', callback);


//сработает один раз
emitter.once('message', callback)

const MESSAGE = process.env.MESSAGE || '';

if (MESSAGE) {
    emitter.emit('message', MESSAGE, 123)
} else {
    emitter.emit('message', 'Вы не указали')
}

//удалить все слушатели
emitter.removeAllListeners()

//удалить слушатель
emitter.removeListener('message', callback)