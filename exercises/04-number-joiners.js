// Write a function "numberJoinerWhile" which is given a start number and an end number.
// It should return a string of the numbers joined together by the "_" character.
// Use a "while" loop to do this.
// Examples:
// numberJoinerWhile(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerWhile(12, 14) --> '12_13_14'

/*  CHRIS'S IN-CLASS SOLUTION:
    function numberJoinerWhile (startNum, endNum) {
    var i = startNum
    var theString = ''
    while (i <= endNum) {
        //do our thing
        theString = theString + i + '_'
        i = i + 1
    }
    
    var len = theString.length
    theString = theString.substring(0, len - 1)
    return theString
} 
console.log(numberJoinerWhile(12, 14))

ANOTHER WAY USING ARRAYS:
function numberJoinerWhile2 (startNum, endNum) {
    var i = startNum
    var myArr = []
    while (i <= endNum) {
        myArr.push(i)
        i++
    }
    return myArr.join('_')
} */

function numberJoinerWhile(startNum,endNum){
    var i = startNum;
    var myArr = [];
    while (i <= endNum) {
        myArr.push(i)
        i = i + 1
    }
    return myArr.join('_')
}
console.log(numberJoinerWhile(12,14))
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFor" which does the same thing as "numberJoinerWhile",
// except using a "for" loop internally.
function numberJoinerFor (startNum,endNum) {
    var i = startNum;
    var myArr = [];
    for (i=startNum;i<=endNum;i++) {
        myArr.push(i)
        i = i++
    }
    return myArr.join('_')
}
console.log(numberJoinerFor(5,10))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFancy" which does the same thing as "numberJoinerWhile",
// except it takes an optional third argument specifying the separator between the numbers.
// Use either a "while" or a "for" loop (your preference).
// Examples:
// numberJoinerFancy(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerFancy(1, 5, '~') --> 1~2~3~4~5
// numberJoinerFancy(3, 6, '***BANANAS***') --> 1***BANANAS***2***BANANAS***3
function numberJoinerFancy () {

}
console.log(numberJoinerFancy(3,8))