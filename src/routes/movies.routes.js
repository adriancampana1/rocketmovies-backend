const { Router } = require('express');

const MoviesController = require('../controllers/MoviesController');

const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const moviesRoutes = Router();

const moviesControllers = new MoviesController();

moviesRoutes.use(ensureAuthenticated);

moviesRoutes.post('/', moviesControllers.create);
moviesRoutes.get('/:id', moviesControllers.show);

module.exports = moviesRoutes;
