const { Router } = require('express');

const userRouter = require('./user.routes');
const movieRouter = require('./movies.routes');
const tagsRouter = require('./tags.routes');

const routes = Router();

routes.use('/users', userRouter);
routes.use('/movies', movieRouter);
routes.use('/tags', tagsRouter);

module.exports = routes;
