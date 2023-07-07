const database = require('../config/database');
const mysql2 = require('mysql2');

const readPaginas = (req, res) => {
    const { url } = req.params;
    const readQuery = `SELECT * FROM paginas WHERE url=?;`;

    const query = mysql2.format(readQuery, [url]);

    database.query(query, (err, result) => {
        if(err) throw err;
        if(result[0] != undefined){
            res.json(result[0]);
        }else{
            res.json({message: 'La página no existe'});
        }
    });
};

const createPaginas = (req, res) => {
    const {url, email, contraseña, habilitado, id_categoria} = req.body;
    const createQuery = `INSERT INTO paginas(url, email, contraseña, habilitado, id_categoria) VALUES(?, ?, ?, ?, ?);`;
    const query = mysql2.format(createQuery, [url, email, contraseña, habilitado, id_categoria]);

    database.query(query, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send({message: 'Página Creada Exitosamente'});
    });
};

const updatePaginas = (req, res) => {
    const { id_pagina } = req.params;
    const {habilitado} = req.body;
    const updateQuery = `UPDATE paginas SET habilitado=? WHERE id_pagina=?`;
    const query = mysql2.format(updateQuery, [habilitado, id_pagina]);

    database.query(query, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.json({message: 'Página actualizada'});
    });
};

const deletePaginas = (req, res) => {
    const { id_pagina } = req.params;
    const deleteQuery = `DELETE FROM paginas WHERE id_pagina=?`;
    const query = mysql2.format(deleteQuery, [id_pagina]);

    database.query(query, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.json({message: 'Página eliminada'});
    });
};

module.exports = {
    createPaginas,
    readPaginas,
    updatePaginas,
    deletePaginas,
};