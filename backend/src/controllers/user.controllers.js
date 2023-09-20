// CRUD

const readUser = (req, res ) => {
    const { id } = req.params;

    
};

const createUser = (req, res) => {
    const { email, password } = req.body;
    res.send (`${email}: ${password}`);
};

const updateUser = (req, res) => {
    res.send('Peticion PUT');
};

const deleteUser = (req, res) => {
    res.send('Peticion DELETE');
};

module.exports = {
    createUser, 
    readUser,
    updateUser,
    deleteUser,
};
