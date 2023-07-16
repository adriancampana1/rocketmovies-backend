const { Router } = require('express');

const userRouter = require('./user.routes');
const movieRouter = require('./movies.routes');
const tagsRoutes = require('./tags.routes');
const sessionsRoutes = require('./sessions.routes');

const routes = Router();

routes.use('/users', userRouter);
routes.use('/sessions', sessionsRoutes);
routes.use('/movies', movieRouter);
routes.use('/tags', tagsRoutes);

module.exports = routes;
