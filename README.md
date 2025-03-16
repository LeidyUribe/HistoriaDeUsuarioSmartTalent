# HistoriaDeUsuarioSmartTalent
 Prueba técnica: aplicación básica de gestión de tareas
Esta es una aplicación básica de gestión de tareas desarrollada con Angular y Bootstrap.

## Instrucciones para ejecutar el proyecto

1. Instalar la version de node minimo la 18.20.7
2.Clona el repositorio:
   git clone https://github.com/LeidyUribe/HistoriaDeUsuarioSmartTalent.git 
3. Abrir el IDE de preferencia VisualStudioCode con el proyecto previamente descargado o desde el mismo IDE se puede realizar tambien el paso anterior
4.Ingresar a la carpeta smart-app y ejecutar el comando npm install
5.Por ultimo ejecutar el comando npm start desde la terminal del IDE o ejecutar el script start desde el package.json 

## Justificación de Herramientas y Enfoques Utilizados
   ## Angular:##
Se utilizo por las siguientes razones:

Componentización: Angular permite dividir la aplicación en componentes reutilizables, lo que facilita el mantenimiento y la escalabilidad.

Two-Way Data Binding: La sincronización automática entre la vista y el modelo simplifica la gestión del estado de la aplicación.

Inyección de Dependencias: Angular proporciona un sistema de inyección de dependencias que facilita la gestión de servicios y la reutilización de código.

Herramientas Integradas: Angular CLI ofrece comandos para generar componentes, servicios y módulos, lo que acelera el desarrollo.
## Bootstrap para Estilos ##
es una librería de CSS ampliamente utilizada que proporciona un sistema de diseño responsivo y componentes predefinidos. Se eligió por las siguientes razones:

Facilidad de Uso: Bootstrap permite crear interfaces atractivas y funcionales con poco esfuerzo, gracias a sus clases predefinidas.

Responsividad: Los componentes de Bootstrap son responsivos por defecto, lo que garantiza que la aplicación se vea bien en cualquier dispositivo.

Consistencia: Bootstrap proporciona un diseño uniforme en toda la aplicación, lo que mejora la experiencia del usuario

## Servicios para la Lógica de Negocio##
La lógica de negocio (como la gestión de tareas) se encapsuló en servicios (TaskService) por las siguientes razones:

Separación de Responsabilidades: Los servicios permiten separar la lógica de negocio de los componentes, lo que facilita el mantenimiento y las pruebas.

Reutilización: Los servicios pueden ser inyectados en cualquier componente, lo que promueve la reutilización de código.

Simulación de Datos: En esta aplicación, se simuló una base de datos en memoria utilizando un arreglo en el servicio. Esto permite probar la funcionalidad sin necesidad de un backend real.

## Componentes Standalone ## 
Los componentes standalone son una característica reciente de Angular que permite crear componentes independientes sin necesidad de declararlos en un módulo. Se utilizaron por las siguientes razones:

Simplicidad: Los componentes standalone reducen la complejidad de la estructura del proyecto, ya que no requieren módulos adicionales.

Modularidad: Cada componente puede importar sus propias dependencias, lo que facilita la reutilización y el mantenimiento.

## Formularios Reactivos##
Control Detallado: Los formularios reactivos permiten un control más granular sobre los campos del formulario, incluyendo validaciones personalizadas y manejo de estados.

Escalabilidad: Son ideales para formularios complejos con múltiples campos y validaciones.

 ## Implementación de CRUD ##
La funcionalidad CRUD (Crear, Leer, Actualizar, Eliminar) es fundamental en cualquier aplicación de gestión de datos. Se implementó de la siguiente manera:

Crear: Se agregó un formulario para crear nuevas tareas, con validaciones básicas para garantizar que los campos no estén vacíos.

Leer: La lista de tareas se muestra dinámicamente utilizando *ngFor, lo que permite una actualización en tiempo real.

Actualizar: Se implementó un checkbox que permite actualizar el estado de cada tarea

Eliminar: Se agregó un botón para eliminar tareas