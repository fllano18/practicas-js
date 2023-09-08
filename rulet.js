// Función para simular una tirada de ruleta
function simularTirada() {
    const resultado = Math.floor(Math.random() * 37); // Número aleatorio de 0 a 36
    return {
        resultado
    };
}
function getRndVuelta(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
// Simula 10 tiradas
for (let i = 1; i <= 10; i++) {
    const { vueltas, resultado } = simularTirada();
    console.log("Nro de Juego:",i); 
    console.log("Valor Aleatorio Generado:",getRndVuelta(5,10)*36);
    console.log("Nro que cayo en la ruleta:",resultado);
    console.log();

}
