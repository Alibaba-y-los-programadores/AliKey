<h1 align="center">AliKey</h1>

El objetivo de nuestro proyecto fue diseñar y desarrollar una aplicación web que permita generar y almacenar contraseñas alfanuméricas de forma segura. Reconociendo la importancia de la seguridad en línea en nuestra era digital, nos propusimos crear una herramienta que ayude a los usuarios a proteger su información personal y brinde una experiencia cómoda al generar y administrar sus contraseñas.

## Características

- Generación automática de contraseñas alfanuméricas: La aplicación cuenta con una función que permite generar automáticamente contraseñas seguras sin tener que pensar en ellas.
- Almacenamiento de contraseñas: La aplicación web tiene la capacidad de almacenar las contraseñas generadas y las contraseñas proporcionadas por los usuarios. Utiliza una base de datos MySQL para garantizar una persistencia segura de la información.
- Pantalla de login: La aplicación cuenta con una pantalla de login que permite a los usuarios ingresar a sus cuentas. Esto garantiza la privacidad y la seguridad de la información almacenada en la aplicación.
- Pantalla de registro: La aplicación cuenta con una pantalla de registro donde se solicitan los datos necesarios para crear una cuenta y acceder a las funcionalidades de la aplicación.

## Requisitos de contraseña de login

La contraseña de login debe cumplir con los siguientes requisitos para garantizar su seguridad:

- Debe ser alfanumérica.
- Debe tener una longitud mínima de 8 caracteres.
- No se pueden ingresar más de 3 valores consecutivos (por ejemplo, 1234 - abcd).
- Debe contener al menos una mayúscula y una minúscula.
- Debe contener al menos un número.
- Debe contener al menos un símbolo (por ejemplo, @#&%+*., etc).

## Diseño

El diseño de la aplicación web sigue las siguientes directrices:

- Texturas y patrones planos para un aspecto moderno y atractivo.
- Esquema de colores simples para facilitar la lectura y la navegación.
- Pocas variantes de tipografías para mantener la consistencia y la legibilidad en todo el sitio.

## Persistencia de la información

La aplicación utiliza una base de datos MySQL para almacenar y gestionar la información de los usuarios y las contraseñas de forma segura. Se utiliza el framework Express para la conexión con la base de datos y las operaciones CRUD (Create, Read, Update, Delete).

## Enlaces

https://alikeydeployfront-production.up.railway.app/
