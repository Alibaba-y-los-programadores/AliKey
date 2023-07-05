const database = require('../config/database');
const mysql2 = require('mysql2');

const readPersonas = (req, res) => {
    const { usuario } = req.params;
    const readQuery = `SELECT * FROM personas WHERE usuario=?;`;

    const query = mysql2.format(readQuery, [usuario]);

    database.query(query, (err, result) => {
        if(err) throw err;
        if(result[0] != undefined){
            res.json(result[0]);
        }else{
            res.json({message: 'El usuario no existe'});
        }
    });
};

const createPersonas = (req, res) => {
    const {usuario, nombre, apellido, email, contraseña, habilitado} = req.body;
    const createQuery = `INSERT INTO personas(usuario, nombre, apellido, email, contraseña, habilitado) VALUES(?, ?, ?, ?, ?, ?);`;
    const query = mysql2.format(createQuery, [usuario, nombre, apellido, email, contraseña, habilitado]);

    database.query(query, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send({message: 'Usuario Creado Exitosamente'});
    });
};

const updatePersonas = (req, res) => {
    const { id_persona } = req.params;
    const {contraseña} = req.body;
    const updateQuery = `UPDATE personas SET contraseña=? WHERE id_persona=?`;
    const query = mysql2.format(updateQuery, [contraseña, id_persona]);

    database.query(query, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.json({message: 'Persona actualizada'});
    });
};

const deletePersonas = (req, res) => {
    const { id_persona } = req.params;
    const deleteQuery = `DELETE FROM personas WHERE id_persona=?`;
    const query = mysql2.format(deleteQuery, [id_persona]);

    database.query(query, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.json({message: 'Persona eliminada'});
    });
};

module.exports = {
    createPersonas,
    readPersonas,
    updatePersonas,
    deletePersonas,
};