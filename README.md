Prueba Técnica Backend y Frontend

Descripción del Proyecto
En este proyecto he implementado una API RESTful en Laravel para manejar la autenticación de usuarios utilizando Laravel Sanctum y un frontend en React que consume esta API para el inicio de sesión, registro y visualización de datos.


Backend - Laravel

1. Configuración del Proyecto
Primero, creé un nuevo proyecto de Laravel utilizando el siguiente comando:

//composer create-project --prefer-dist laravel/laravel backend-laravel

Después, configuré la conexión a la base de datos en el archivo .env, utilizando la base de datos MySQL.

2. Migraciones
Para la creación de la tabla users, utilicé las migraciones predeterminadas de Laravel. Ejecuto las migraciones con:

//php artisan migrate


Esto crea la tabla users con las columnas necesarias para manejar el nombre, correo electrónico, y contraseña del usuario.

3. Instalación de Laravel Sanctum
Instalé Laravel Sanctum para gestionar la autenticación basada en tokens. Para ello, utilicé el siguiente comando:

//composer require laravel/sanctum

Luego, publiqué el archivo de configuración de Sanctum:

//php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"


A continuación, agregué el middleware auth:sanctum en app/Http/Kernel.php para habilitar la autenticación en las rutas.

4. Rutas de la API
Definí las siguientes rutas en el archivo routes/api.php:

Registro de Usuario (POST /api/register)
Inicio de Sesión (POST /api/login)
Cierre de Sesión (POST /api/logout), protegida con el middleware auth:sanctum.
Estas rutas están relacionadas con los métodos del controlador AuthController, los cuales implementé para manejar la lógica de autenticación.

5. Controlador de Autenticación
Creé el controlador AuthController para gestionar las operaciones de registro, inicio de sesión y cierre de sesión. Utilicé Hash::make() para encriptar las contraseñas y Auth::attempt() para autenticar al usuario. También implementé la creación de un token de autenticación con el método createToken().





Frontend - React

1. Configuración del Proyecto
Para el frontend, utilicé Create React App para crear el proyecto:

//npx create-react-app frontend-react

Luego, instalé React Router para gestionar las rutas de la aplicación:

//npm install react-router-dom

2. Estructura de Rutas
Configuré las rutas principales en src/App.js, asegurándome de tener acceso a las páginas de Login y Home:

//<Router>
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/home" component={Home} />
  </Switch>
</Router>



3. Formulario de Login
Creé la página de Login en src/Login.js, donde los usuarios pueden ingresar su correo electrónico y contraseña. Al hacer el login, se envía una solicitud POST al backend para validar las credenciales y obtener un token de autenticación que luego se guarda en el localStorage.

4. Consumo de la PokéAPI
En la página Home, implementé la lógica para consumir la PokéAPI. Utilicé useEffect para realizar la solicitud y mostrar los datos de los Pokémon en una lista.

5. Manejo de Logout
Implementé la función de logout que elimina el token de autenticación del localStorage y redirige al usuario a la página de Login.




Conclusiones
En esta prueba técnica, implementé un sistema básico de autenticación en Laravel utilizando Sanctum para la gestión de tokens y un frontend en React que interactúa con esta API para realizar operaciones como el login, registro y logout de usuarios.
He aprendido a integrar ambos componentes, gestionando las rutas y la autenticación de manera segura. Además, la aplicación permite consumir información externa de la PokéAPI para mostrar datos en el frontend.

