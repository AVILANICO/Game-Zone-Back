Procedimientos y pasos realizados para incorporar la API de Mercado Pago en el backend de la aplicacion MINGA.

1-Ingresar al sitio oficial de la API de Mercado Pago, link -----> https://www.mercadopago.com.ar/developers/es
2-Registrarse y solicitar credenciales de prueba (Public key & Access token).
3-Seleccionar el metodo Checkout Pro, se elegio este metodo porque permite a tus clientes realizar compras a través de las páginas de pago de Mercado Pago de forma segura, rápida y con la posibilidad de pagar con los principales medios de pago disponibles actualmente.
4-Instalar la libreria oficial de Mercado Pago con el comando 'npm install mercadopago'
5-Configurar el access token en el archivo .env para protegerlo.
6-Crear el controlador, donde utilizamos el access token para acceder a la API de Mercado Pago, recibe datos del cliente desde el lado del front, que se van a utilizar para crear un objeto con las preferencias para generar el pago, luego se utiliza el metodo create para enviar la preferencia de pago y enviarla, la respuesta devuelve un id, finalmente, si la solicitud resulta exitosa devuelve un ID junto a un mensaje que la transaccion sucedio con exito, de lo contrario, arroja un error.
7-Se definen las rutas necesarias y se utiliza el metodo POST para la creacion del pago.
8-Definimos una carpeta 'test', donde se crea un archivo de tipo 'test' para generar los testeos necesarios en el metodo utilizado.
 Este bloque de pruebas automatizadas utiliza las bibliotecas Chai, Supertest y Mocha para probar la funcionalidad de la ruta "/payments" de una aplicación MINGA. Verifica que, en caso de una solicitud HTTP POST exitosa a la ruta con un objeto de donación válido, la respuesta tenga el estado correcto y la estructura esperada.