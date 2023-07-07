# Crear la base de datos "aliKey":
CREATE DATABASE aliKey;

# Usar la base de datos "aliKey":
USE aliKey;

# Crear la tabla "Personas":
CREATE TABLE personas (
    id_persona INT PRIMARY KEY AUTO_INCREMENT,
    usuario VARCHAR(50),
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    email VARCHAR(100),
    contraseña VARCHAR(100),
    habilitado BOOLEAN
);

# Crear la tabla "Categorias":
CREATE TABLE categorias (
    id_categoria INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    habilitado BOOLEAN,
    id_persona INT,
    FOREIGN KEY (id_persona) REFERENCES personas(id_persona)
);

# Crear la tabla "Paginas":
CREATE TABLE paginas (
    id_pagina INT PRIMARY KEY AUTO_INCREMENT,
    url VARCHAR(100),
    email VARCHAR(100),
    contraseña VARCHAR(100),
    habilitado BOOLEAN,
    id_categoria INT,
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
);

/* Estos algoritmos crearán la base de datos "aliKey" 
junto con las tablas "personas", "categorias" y "paginas", 
y establecerán las relaciones adecuadas entre ellas. 
Cabe destacar que los tipos de datos y las longitudes de las columnas pueden ajustarse según tus necesidades.
*/

#Ver la lista de Personas Registradas
SELECT * FROM alikey.personas;