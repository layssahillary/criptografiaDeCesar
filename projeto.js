function cifraDeCesarCriptografar(palavra, chave) {
  let novaPalavra = '';

  for (let i = 0; i < palavra.length; i++) {
    const codigoASCII = palavra.charCodeAt(i); // Obtém o código ASCII do caractere
    const novoCodigoASCII = (codigoASCII + chave) % 256; // Aplica a chave com limite no código ASCII (0-255)

    novaPalavra += String.fromCharCode(novoCodigoASCII); // Converte de volta para caractere
  }

  return novaPalavra;
}

function cifraDeCesarDescriptografar(palavra, chave) {
  let novaPalavra = '';

  for (let i = 0; i < palavra.length; i++) {
    const codigoASCII = palavra.charCodeAt(i); // Obtém o código ASCII do caractere
    let novoCodigoASCII = (codigoASCII - chave) % 256; // Aplica a chave com limite no código ASCII (0-255)

    if (novoCodigoASCII < 0) novoCodigoASCII += 256; // Garante que o valor seja positivo

    novaPalavra += String.fromCharCode(novoCodigoASCII); // Converte de volta para caractere
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
