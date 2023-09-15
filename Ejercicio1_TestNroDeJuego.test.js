//Arrange
NroDeJuegoAnterior=6;

//Act
NroDeJuegoActual=7
//Assert
test('Verifica que el numeor de juego caiga entre 1 y 10', () => {
    expect(NroDeJuegoActual).toBeGreaterThanOrEqual(1);
    expect(NroDeJuegoActual).toBeLessThanOrEqual(10);
    expect(NroDeJuegoActual).toBe(NroDeJuegoAnterior+1)
  });