function printdate(){
    console.log(Date())
    }
    
    function printmonth(){
        const d = new Date()
        console.log(d.getMonth())
    }
    
    function getBatchInfo(){
        console.log("Batch Name- Function Up")
        console.log("week-4th")
    }
    
    module.exports.printdate=printdate;
    module.exports.printmonth=printmonth;
    module.exports.getBatchInfo=getBatchInfo;