const database = require('../config/database');
const mysql2 = require('mysql2');

const readCategorias = (req, res) => {
    const { nombre } = req.params;
    const readQuery = `SELECT * FROM categorias WHERE nombre=?;`;

    const query = mysql2.format(readQuery, [nombre]);

    database.query(query, (err, result) => {
        if(err) throw err;
        if(result[0] != undefined){
            res.json(result[0]);
        }else{
            res.json({message: 'La categoria no existe'});
        }
    });
};

const createCategorias = (req, res) => {
    const {nombre, habilitado, id_persona} = req.body;
    const createQuery = `INSERT INTO categorias(nombre, habilitado, id_persona) VALUES(?, ?, ?);`;
    const query = mysql2.format(createQuery, [nombre, habilitado, id_persona]);

    database.query(query, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send({message: 'Categoria Creada Exitosamente'});
    });
};

const updateCategorias = (req, res) => {
    const { id_categoria } = req.params;
    const {habilitado} = req.body;
    const updateQuery = `UPDATE categorias SET habilitado=? WHERE id_categoria=?`;
    const query = mysql2.format(updateQuery, [habilitado, id_categoria]);

    database.query(query, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.json({message: 'Categoria actualizada'});
    });
};

const deleteCategorias = (req, res) => {
    const { id_categoria } = req.params;
    const deleteQuery = `DELETE FROM categorias WHERE id_categoria=?`;
    const query = mysql2.format(deleteQuery, [id_categoria]);

    database.query(query, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.json({message: 'Categoria eliminada'});
    });
};

module.exports = {
    createCategorias,
    readCategorias,
    updateCategorias,
    deleteCategorias,
};