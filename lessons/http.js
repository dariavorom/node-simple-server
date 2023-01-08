const Router = require('../framework/Router');
const Application = require('../framework/Application');

const PORT = process.env.PORT || 5000;
const app = new Application();
const router = new Router();

// const server = http.createServer((req, res) => {
//     // res.writeHead(200,
//     //     {'Content-Type': 'text/html; charset=utf-8'});
//     res.writeHead(200,
//         {'Content-Type': 'application/json'});

//     if (req.url === '/users') {
//         return res.end(JSON.stringify([{id: 1, name: 'Daria'}]))
//     }
//     if (req.url === '/posts') {
//         return res.end('POSTS')
//     }

//     res.end(req.url);

// });


router.get('/users', (req, res) => res.end('you send request /users'));
router.get('/posts', (req, res) => res.end('you send request /posts'));

app.addRouter(router);

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));

