// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****
function makeSquare (num) {
    var i = 0
    var asteriskLine = ''
    while (i < num) {
        // console.log('testing my loop: ' + i)
        asteriskLine = asteriskLine + '*'
        // console.log(asteriskLine)
        i++ //increment i in my while loop
    }

// at this point, asteriskLine is good

    var j = 0
    var box = []
    while  (j<num) {
        box.push(asteriskLine)
        j++
    }

    return box.join('\n')
}

var myBox = ['***','***','***']
console.log(myBox.join('\n'))

console.log (makeSquare (3))
console.log ('~~~~~~~~~~~~~~~~~~~~')
console.log(makeSquare (8))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************
