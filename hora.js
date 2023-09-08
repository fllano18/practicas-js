//Ejercicio 3:
//Obtener la hora actual y generar un número aleatorio en minutos cuyo equivalente en horas debe ser mayor o igual a 5 horas y menor o igual a 10 horas (posteriores a la hora actual).
//Imprimir:
//Hora Actual
//Valor Aleatorio Generado en Minutos
//Hora Final
//Ejemplo:
//Hora Actual: 5:22
//Valor Aleatorio Generado de Minutos: 450
//Hora Final: 12:52
const horaActual = new Date();
const horaActualEnHoras = (horaActual.getHours())*60;
const minutosActuales = horaActual.getMinutes();
const random =(Math.floor(Math.random() * (10*60- 5*60)) + 5*60);

console.log('Hora Incial:',horaActualEnHoras); 
console.log('Valor Aleatorio Generado de Minutos:',minutosActuales);
console.log('Hora Final:',(horaActualEnHoras+minutosActuales));