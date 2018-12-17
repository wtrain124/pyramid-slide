

/**
 * determineParametersAndThenDrawPyramid
 *
 * Determines the current value that the user has typed in the 'How high?' text-box,
 * and then draws a pyramid with that height.
 */
function determineParametersAndThenDrawPyramid() {

    console.log("Someone called determineParametersAndThenDrawPyramid");

    // figure out the height the user typed (replace the "5" below)
    var heightStr = document.getElementById("rangeSlider").value;
    document.getElementById("numberSelected").innerHTML = heightStr;

    var character = document.getElementById("brickSymbol").value;

    // here we convert the string to an int
    height = parseInt(heightStr);

    // draw the pyramid with the given height
    drawPyramid(height, character);

}

var rangeSlider = document.getElementById("rangeSlider");
rangeSlider.addEventListener("input", determineParametersAndThenDrawPyramid);

var brickSymbol = document.getElementById("brickSymbol");
brickSymbol.addEventListener("change", determineParametersAndThenDrawPyramid);

determineParametersAndThenDrawPyramid();

/**
 * drawPyramid
 *
 * Renders, in the HTML document, a pyramid of the specified height
 */
 function drawPyramid(height, character) {

    document.getElementById("pyramid").innerHTML = "";

     // for each row....
     for (var row = 0; row < height; row++) {

         // figure out number of bricks and spaces
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

         // build up a string for this row
         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             rowStr += "\xa0";
         }
         for (var i = 0; i < numBricks; i++) {
             rowStr += character;
         }

        // create a text element with the string of characters
        textElem = document.createTextNode(rowStr);

        // create a <p> element with the text inside
        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);
    }
}