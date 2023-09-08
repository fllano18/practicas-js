
const posInicial = Math.floor(Math.random() * 359) ; 
const vueltas = (Math.floor(Math.random() * 6)+5)*360;
console.log('Angulo Incial:',posInicial); 
console.log('Valor Aleatorio Generado en Grados:',vueltas);
console.log('Angulo final:',(posInicial+vueltas)%360);
