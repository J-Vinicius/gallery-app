export function gerarArrayDeStringsAleatorias(
  size: number,
  max: number,
  caracteres: string
) {
  const arrayAleatorio = [];
  for (let i = 0; i < size; i++) {
    let stringAleatoria = "";
    for (let j = 0; j < max; j++) {
      stringAleatoria += caracteres.charAt(
        Math.floor(Math.random() * caracteres.length)
      );
    }
    arrayAleatorio.push(stringAleatoria);
  }
  return arrayAleatorio;
}
