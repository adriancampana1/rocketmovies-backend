require('express-async-errors');

const migrationsRun = require('./database/sqlite/migrations');

const AppError = require('./utils/AppError');

const routes = require('./routes');

const express = require('express'); // traz os arquivos do Express

migrationsRun();

const app = express(); // executa o Express

app.use(express.json()); // fala para a aplicação que o padrão vai ser em formato json

app.use(routes);

app.use((error, request, response, next) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message,
        });
    }

    console.error(error);

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
});

const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
