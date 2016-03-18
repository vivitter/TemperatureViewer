/*jslint node:true, vars:true, bitwise:true, unparam:true */
/*jshint unused:true */
// Leave the above lines for propper jshinting
//Type Node.js Here :)

// Include the JavaScript UPM libraries
var groveSensor = require('jsupm_grove');
var LCD = require('jsupm_i2clcd');

// Create a new instance of a Grove Temperature Sensor
var temp = new groveSensor.GroveTemp(0);

// Create a new instance of a Grove RGB LCD Screen
var screen = new LCD.Jhd1313m1(6, 0x3E, 0x62);

function monitor() {
    setInterval(function() {
        // Read the temperature sensor
        var celsius = temp.value();
        var fahrenheit = Math.round(celsius * 9.0/5.0 + 32.0);
        console.log(celsius + " deg Celsius, or " + fahrenheit + " deg Fahrenheit");
        
        // Update the LCD Screen
        screen.setCursor(0, 0);
        screen.setColor(255, 255, 255);
        screen.write("Temp: " + celsius + "C or " + fahrenheit + "F");
    }, 1000);
}

monitor();