const { Router } = require('express');

const TagsController = require('../controllers/TagsController');

const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const tagsRoutes = Router();

const tagsControllers = new TagsController();

tagsRoutes.get('/', ensureAuthenticated, tagsControllers.index);

module.exports = tagsRoutes;
