// Act
const vuelta = Math.floor(Math.random() * (10 - 5)) + 5;

//Assert
test('Verifica que el numeor de juego caiga entre 1 y 10', () => {
  expect(vuelta).toBeGreaterThanOrEqual(5);
  expect(vuelta).toBeLessThanOrEqual(10);
});