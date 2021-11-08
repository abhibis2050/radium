function trim(){
    console.log("                   Abhisek Biswas                ".trim())
}

function lowerCase () {
    console.log("AbHiSEk".toLocaleLowerCase())
}

function uppercase(){

    console.log("abHiSek".toLocaleUpperCase())
}

module.exports.trimString = trim;
module.exports.lowerCase = lowerCase;
module.exports.uppercase = uppercase;
