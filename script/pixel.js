/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, window, document */

// Simple jQuery event handler
var penColor = 'black';
function setPenColor(pen)
{
    penColor = pen;
}
function setPixelColor(pixel)
{ 
    pixel.style.backgroundColor = penColor;  
}