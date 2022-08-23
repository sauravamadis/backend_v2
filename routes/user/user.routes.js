const { Router } = require('express');
const userRouter = Router();

const getAllUsers = require('../../controllers/getallUsers');
const signUp = require('../../controllers/signup');
const login = require('../../controllers/login');
const update = require('../../controllers/updateUser');

userRouter.get('/getall', getAllUsers);
userRouter.post('/signup', signUp);
userRouter.post('/login', login);
userRouter.post('/update', update);

module.exports = userRouter;
