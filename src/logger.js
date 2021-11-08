function log (yourname){
    console.log("My Name Is"+" "+yourname)
}

function welcome(){
    console.log( "Welcome to my application")
}

const url = "https://www.youtube.com/"

module.exports.mylog=log;
module.exports.welcome=welcome;
module.exports.myurl = url;