const filtrarNumeros = (nums)=> {
    
    const numsImpares = nums.filter(x => x % 2 !== 0);
    return numsImpares

}

const calcularQuadr = (nums)=> {
    
    const numsImpar = filtrarNumeros(nums)
    const quadrImpares = numsImpar.map(x => x ** 2);
    return quadrImpares

}

const somarQuadrImpares = (nums)=> {

    const quadrImpares = calcularQuadr(nums)
    const sumQuadrImpares = quadrImpares.reduce((x, y) => x + y, 0);
    return sumQuadrImpares

}

const nums = process.argv.slice(2)
const quadrNumsImpares = somarQuadrImpares(nums)
console.log("Numeros: "+ nums + "\n" + "Soma dos quadrados dos numeros impares: "+quadrNumsImpares)
