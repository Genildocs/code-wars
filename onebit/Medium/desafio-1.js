/*

 */

function converterAlgoRomano(str){
    const algoRomano = {I:1, V:5,X:10,L:50,C:100,D:500,M:100}
    const arrayOfNumber = []
    for(let i = 0; i < str.length; i++){
        for(key in algoRomano){
            if(key === str[i]) arrayOfNumber.push(algoRomano[key])
        }
    }

    arrayOfNumber.sort((a,b)=> a-b).reverse()
    return arrayOfNumber
}

console.log(converterAlgoRomano("XLVII"));
console.log(converterAlgoRomano("CMIX"));