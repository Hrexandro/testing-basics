function caesarCipher (string, shift){
    let lowerCase =  ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    let result = "";

    for (let i = 0; i < string.length; i++){
        if (lowerCase.some(e => e === string[i])){
            result += lowerCase[lowerCase.findIndex(e => e === string[i]) + shift]
        } else if (upperCase.some(e => e === string[i])){
            result += upperCase[upperCase.findIndex(e => e === string[i]) + shift]
        } else {
            result += string[i]
        }

    }
    return result
}

module.exports = caesarCipher