/* Implemente um algoritmo de pseudocriptografia que, dada uma string Se um inteiro, Nconcatene todos os caracteres indexados ímpares de Scom todos os caracteres indexados pares de S. Esse processo deve ser repetido Nvezes.

Exemplos:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Junto com a função de criptografia, você também deve implementar uma função de descriptografia que reverta o processo.

Se a string Sfor um valor vazio ou o inteiro Nnão for positivo, retorne o primeiro argumento sem alterações. */

function encrypt(text, n) {
  if(!text  || n <= 0){
	  return text
  }

  let ecrypt = ''
  for(let j = 0; j < n ; j++){
	  let caracteresImpar = ''
	  let caracteresPar = ''

	  for(let i = 0; i < text.length; i++ ){
		  if(i % 2 === 0){
			  caracteresPar += text[i]
		  }else {
			  caracteresImpar += text[i]
		  }

	  }

	  text = caracteresImpar + caracteresPar
  }

  return text

}

function decrypt(encryptedText, n) {
	if (!encryptedText || n <= 0) {
		return encryptedText;
	}

	const half = Math.floor(encryptedText.length / 2);

	for (let i = 0; i < n; i++) {
		let decryptedText = '';
		let oddChars = encryptedText.slice(0, half);
		let evenChars = encryptedText.slice(half);

		let maxLength = Math.max(oddChars.length, evenChars.length);

		for (let j = 0; j < maxLength; j++) {
			if (j < evenChars.length) {
				decryptedText += evenChars[j];
			}
			if (j < oddChars.length) {
				decryptedText += oddChars[j];
			}
		}

		encryptedText = decryptedText;
	}

	return encryptedText;
}

console.log(encrypt("012345", 1))
console.log(encrypt("This is a test!", 0))
console.log(encrypt("This is a test!", 1))
console.log(encrypt("This is a test!", 2))
console.log(encrypt("This is a test!", 3))

console.log(decrypt("135024", 1));