function caesarCipher (string, shift){
    let lowerCase =  ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    let result = "";

    for (let i = 0; i < string.length; i++){
        let characterToAdd = string[i]//before shift, stays unchanged if not a letter
        let alphabetArray = null  
        if (lowerCase.some(e => e === string[i])){
            alphabetArray = lowerCase
        } else if (upperCase.some(e => e === string[i])){
            alphabetArray = upperCase
        }
        
        function adjustShift(adjustedShift){
            if ((alphabetArray.findIndex(e => e === string[i]) + adjustedShift) > 25){
                return adjustShift(adjustedShift - 26)
            } else if ((alphabetArray.findIndex(e => e === string[i]) + adjustedShift) < 0){
                return adjustShift(adjustedShift + 26)
            }
            return adjustedShift
        }

        if (alphabetArray){//if letter
            characterToAdd = alphabetArray[alphabetArray.findIndex(e => e === string[i]) + adjustShift(shift)]
        }
        result += characterToAdd
    }
    return result
}


module.exports = caesarCipher