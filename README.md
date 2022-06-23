# Backend MCU

## Instrucciones

- Instalar todas las dependencias antes de iniciar el servidor

```
$ npm install
```

- Iniciar servidor

```
$ npm run start:dev
```

## Trabajar con base de datos

- Inicialización de sequelize en proyecto (**No olvidarse de situarse en el director dao**)

```
$ npx sequelize init
```

- Creación de un modelo

```
npx sequelize model:generate --name Pelicula --attributes titulo:string,fecha_lanzamiento:string,taquilla:string,duracion:integer,resumen:string,poster_url:string,trailer_url:string,director:string,fase:integer,escenas_post
creditos:integer
```

- Migración de modelos (creación en base de datos). No olvidarse antes de hacer las modificaciones respectivas en los archivos de migración y de models. Además debe tener condigurado correctamente el archivo config.js que apunte a la base de datos con la que se desea trabajar.

```
npx sequelize db:migrate
```
