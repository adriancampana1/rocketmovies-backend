const knex = require('../database/knex');
const authConfig = require('../configs/auth');
const AppError = require('../utils/AppError');

const { sign } = require('jsonwebtoken');
const { compare } = require('bcryptjs');

class SessionsControllers {
    async create(request, response) {
        const { email, password } = request.body;

        // verifica se o usuario existe no banco de dados
        const user = await knex('users').where({ email }).first();
        if (!user) {
            throw new AppError('E-mail e/ou senha incorreta', 401);
        }

        // compara com a senha digitada (password) com a senha no banco de dados (user.password)
        const passwordMatched = await compare(password, user.password);
        if (!passwordMatched) {
            throw new AppError('E-mail e/ou senha incorreta', 401);
        }

        // criando o token de autenticacao com JWT
        const { secret, expiresIn } = authConfig.jwt;
        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn,
        });

        return response.json({ user, token });
    }
}

module.exports = SessionsControllers;
