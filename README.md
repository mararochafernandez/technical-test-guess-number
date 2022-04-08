# Prueba técnica: adivinar número

## Requisitos del ejercicio

Crear una aplicación web con un formulario en el que se pueda introducir un número entre 1 y 10000000000 y que al enviar dicho formulario la aplicación tendrá que "adivinar" el número que se ha introducido cumpliendo las siguientes reglas:

- El valor introducido se almacenará en una variable. No se modificará ni copiará ni clonará para devolver el valor introducido.
- La aplicación hará una comprobación matemática con otros números para poder adivinar el resultado final (ver ejemplo).
- La aplicación deberá calcular el resultado de la forma más rápida y eficiente posible.

Un ejemplo de cómo calcular el número de un modo nada eficiente y, por tanto, no correcta:

```
for ($i = 1; $i <= 10000000000; $i++) {
  if ($i == $valorintroducido) {
    echo "el valor introducido es " . $valorintroducido;
    break;
  }
}
```

## Descripción de la aplicación

La aplicación está hecha en JavaScript usando React.

### Implementaciones

- [x] Crear proyecto con React Starter Kit
- [x] Crear componentes y estructura HTML semántica
- [x] Crear formulario, eventos y variables de estado
- [x] Guardar datos en almacenamiento local
- [x] Validar número introducido
- [ ] Buscar número introducido en un intervalo números

### Funcionalidades destacadas

- Usar componentes que permitan ordenar y/o reutilizar el código
- Guardar en almacenamiento local para mejorar la experiencia de usuario

---

# React Starter Kit

- Dependencias NPM: `node-sass` `react-router-dom@5.3.0` `prop-types`
- Servicios: Local Storage
- Publicar en GitHub Pages: `npm run githubpages`

## Instalación y configuración

Requisitos: se necesitan `node` y `npm` instalados en el equipo.

### Clonar el repositorio

```
git clone URL
```

### Instalar las dependencias

```
npm install
```

### Ejecutar la aplicación en entorno de desarrollo

```
npm start
```

Ir a [http://localhost:3000](http://localhost:3000) para ver la aplicación en el navegador.

### Desplegar para entorno de producción

```
npm run build
```

---

_Mara Rocha Fernández_

