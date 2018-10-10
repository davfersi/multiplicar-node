//requireds
//filesystem
// const ex = require('express'); //paquete no nativo de node
// const  ar = requiere('./fs'); //archivos en algun lado del pc

const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
}




//let base = 2567;

//let argv2 = process.argv;
//let parametro = argv[2]; //los argumentos 0 y 1 estan ya ocupados por argv, el 2 en adelante está libre
//let base = parametro.split('=')[1];

//console.log(base);

//console.log('Limite', argv.limite);