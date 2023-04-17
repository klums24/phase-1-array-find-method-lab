// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
];

function superbowlWin(record) {
    
    const newArray = record.find(element => element.result === "W");
    if (newArray){
        return newArray.year;
    }else {
        return undefined;
    };
    
    /*
    for (const yearStatus of winLossArray){
        if (yearStatus.result === "W"){
            return yearStatus.year;
        } 
    }
    */
};
console.log(superbowlWin(record));