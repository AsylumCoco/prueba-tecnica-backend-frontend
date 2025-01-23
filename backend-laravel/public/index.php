<?php

use Illuminate\Contracts\Http\Kernel;
use Illuminate\Http\Request;

/**
 * Autoload Composer
 *
 * Cargamos el autoloader generado por Composer para cargar automáticamente las clases.
 */
require __DIR__.'/../vendor/autoload.php';

/**
 * Cargamos la aplicación Laravel
 *
 * Creamos una instancia de la aplicación Laravel y configuramos su comportamiento.
 */
$app = require_once __DIR__.'/../bootstrap/app.php';

/**
 * Ejecutamos la aplicación
 *
 * Creamos el kernel HTTP y manejamos la solicitud entrante.
 */
$kernel = $app->make(Kernel::class);

$response = $kernel->handle(
    $request = Request::capture()
)->send();

$kernel->terminate($request, $response);
