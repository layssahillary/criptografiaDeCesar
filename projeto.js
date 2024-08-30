function cifraDeCesarCriptografar(palavra, chave) {
  const alfabeto = (letter) => letter.toUpperCase().charCodeAt(0) - 65;
  const letraPosicao = (position) => String.fromCharCode(position + 65);

  let novaPalavra = '';

  for (let i = 0; i < palavra.length; i++) {
    const letraAtual = palavra[i];
    const letraMaiuscula = letraAtual.toUpperCase();

    if (!letraMaiuscula.match(/[A-Z]/)) {
      throw Error;
    }

    const posicaoAtual = alfabeto(letraMaiuscula);
    let novaPosicao = (posicaoAtual + chave) % 26;
    if (novaPosicao < 0) novaPosicao += 26;

    const novaLetra = letraPosicao(novaPosicao);

    novaPalavra +=
      letraAtual === letraAtual.toUpperCase()
        ? novaLetra
        : novaLetra.toLowerCase();
  }

  return novaPalavra;
}

function cifraDeCesarDescriptografar(palavra, chave) {
  const alfabeto = (letter) => letter.toUpperCase().charCodeAt(0) - 65;
  const letraPosicao = (position) => String.fromCharCode(position + 65);

  let novaPalavra = '';

  for (let i = 0; i < palavra.length; i++) {
    const letraAtual = palavra[i];
    const letraMaiuscula = letraAtual.toUpperCase();

    const posicaoAtual = alfabeto(letraMaiuscula);
    let novaPosicao = (posicaoAtual - chave) % 26;
    if (novaPosicao < 0) novaPosicao += 26;

    const novaLetra = letraPosicao(novaPosicao);

    novaPalavra +=
      letraAtual === letraAtual.toUpperCase()
        ? novaLetra
        : novaLetra.toLowerCase();
  }

  return novaPalavra;
}

function criptografar() {
  try {
    const palavra = document.getElementById('palavra').value;
    const chave = parseInt(document.getElementById('chave').value);
    const resultado = cifraDeCesarCriptografar(palavra, chave);
    document.getElementById('resultado').textContent = resultado;
  } catch (error) {
    alert('Não pode usar caractere especial');
    document.getElementById('resultado').textContent = '';
  }
}

function descriptografar() {
  const palavraCriptografada = document.getElementById('resultado').textContent;
  const chave = parseInt(document.getElementById('chave').value);
  const resultado = cifraDeCesarDescriptografar(palavraCriptografada, chave);
  document.getElementById('resultado').textContent = resultado;
}
