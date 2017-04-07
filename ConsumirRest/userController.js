var userService = require('../services/userService');
 
/**
 * Gets all the users and list them all in screen.
 */
exports.listUsers = function(req, res) {
    // Use the method loadUsers form userService to get all the users
    userService.loadUsers(function(users, err) {
        if (err) {
            console.error('Error al recuperar los usuarios');
            res.render('error', {
                message: 'Se ha producido un error. Contacte con el administrador.',
                error: null
            });
        } else {
            console.log('Users recuperados:', users);
            res.render('users', {users: users});
        }
    });
};