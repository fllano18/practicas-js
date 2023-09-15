//Arrange

//Act
// Función para simular una tirada de ruleta
const resultado = Math.floor(Math.random() * 37); // Número aleatorio de 0 a 36



//Assert
test('Verifica que el numeor de juego caiga entre 1 y 10', () => {
    expect(resultado).toBeGreaterThanOrEqual(0);
    expect(resultado).toBeLessThanOrEqual(36);
  });