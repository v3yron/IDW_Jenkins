/**
 * Created by dani on 12/05/2018.
 */
var now = new Date();
var d = now.getDate();
var m = now.getMonth();
var y = now.getYear();

var dateTime = require('node-datetime');
var dt = dateTime.create();
var formatted = dt.format('d-m-Y H:M:S');
var fs = require("fs");

fs.writeFile("output.txt",formatted ,function (err) {


    if (err)
        return console.log(err);
    console.log("file saved")


});