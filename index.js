// code your solution here
/*
function suberbowlWin(records){
   let rec = records. find(element => element.result === 'W')
   if (rec) { return rec . year}
}
*/

function superbowlWin(record){
    const match = record.find((obj) => obj.result === "W")
    if (match == undefined) {
        return undefined
    }
    else {
        return match.year
    }
}
