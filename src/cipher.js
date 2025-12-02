const cipher = {

  // CIFRAR
  encode: (offset, texto) => {
    let resultado = "";
    offset = offset % 26;

    for (let i = 0; i < texto.length; i++) {

      let codigo = texto.charCodeAt(i);


      if (codigo >= 65 && codigo <= 90) {

        let nuevaLetra = ((codigo - 65 + offset) % 26) + 65;
        resultado += String.fromCharCode(nuevaLetra);

      } else {
        resultado += texto[i];
      }

    }

    return resultado;
  },


  // DESCIFRAR
  decode: (offset, texto) => {
    let resultado = "";
    offset = offset % 26;

    for (let i = 0; i < texto.length; i++) {

      let codigo = texto.charCodeAt(i);

      if (codigo >= 65 && codigo <= 90) {

        let nuevaLetra = ((codigo - 65 - offset + 26) % 26) + 65;
        resultado += String.fromCharCode(nuevaLetra);

      } else {
        resultado += texto[i];
      }

    }

    return resultado;
  }

}

export default cipher;
