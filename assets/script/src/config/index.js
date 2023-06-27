const app = require('./app');
const database = require('./database');


const main = () => {
    database.connect((err) => {
        if(err) throw err;
        console.log('Conectado a la Base de Datos');
    });

    app.listen(3000, () => {
        console.log('Servidor Encendido');
    });
};

main();