$(document).ready(function() {
	
var row = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "delete"];
var rowOne = ["tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "|"];
var rowTwo = ["caps lock","A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "return"];
var rowThree = ["shift","Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "shift"];
var rowFour = ["fn", "control", "option", "command", "", "command", "option", "left", "up/down", "right"];

function createRow() {
	for (var i = 0; i < row.length; i++) {
		$("#row").append("<div>" + row[i]+ "</div>");
	} 
};
createRow();

function createRowOne() {
	for (var i = 0; i < rowOne.length; i++) {
		$("#rowOne").append("<div>" + rowOne[i]+ "</div>");
	} 
};
createRowOne();

function createRowTwo() {
	for (var i = 0; i < rowTwo.length; i++) {
		$("#rowTwo").append("<div>" + rowTwo[i]+ "</div>");
	} 
};
createRowTwo();

function createRowThree() {
	for (var i = 0; i < rowThree.length; i++) {
		$("#rowThree").append("<div>" + rowThree[i]+ "</div>");
	} 
};
createRowThree();

function createRowFour() {
	for (var i = 0; i < rowFour.length; i++) {
		$("#rowFour").append("<div>" + rowFour[i]+ "</div>");
	} 
};
createRowFour();


});









