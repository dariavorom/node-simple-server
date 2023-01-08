const users = [
    {id: 1, name: 'user 1'},
    {id: 2, name: 'user 2'},
];

const getUsers = (req, res) => {
    if (req.params.id) {
        return res.send(users.find((user) => user.id == req.params.id));
    }
    res.send(users);
};

const createUser =  (req, res) => {
    const user = req.body;
    users.push(user);
    res.send(user);
};

module.exports = {
    getUsers,
    createUser
}