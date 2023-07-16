const path = require('path');
const multer = require('multer');
// biblioteca utilizada para o upload
const crypto = require('crypto');

// pastas que vão guardar a imagem
const TMP_FOLDER = path.resolve(__dirname, '..', '..', 'tmp');
const UPLOADS_FOLDER = path.resolve(TMP_FOLDER, 'uploads');

const MULTER = {
    storage: multer.diskStorage({
        // destino onde o arquivo vai ser salvo
        destination: TMP_FOLDER,
        filename(request, file, callback) {
            // criptografando o nome do arquivo para evitar arquivos com nomes iguais
            const fileHash = crypto.randomBytes(10).toString('hex');
            const fileName = `${fileHash}-${file.originalname}`;

            return callback(null, fileName);
        },
    }),
};

module.exports = {
    TMP_FOLDER,
    UPLOADS_FOLDER,
    MULTER,
};
