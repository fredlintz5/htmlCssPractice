$(document).ready(function() {
	
var row = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "delete"];
var rowOne = ["tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "|"];
var rowTwo = ["caps lock","A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "return"];
var rowThree = ["shift","Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "shift"];
var rowFour = ["fn", "control", "option", "command", "", "command", "option", "left", "up/down", "right"];


function createRow(array, divId) {
	for (var i = 0; i < array.length; i++) {
		$("#"+divId).append("<div>" + array[i]+ "</div>");
	} 
};

createRow(row, "row");
createRow(rowOne, "rowOne");
createRow(rowTwo, "rowTwo");
createRow(rowThree, "rowThree");
createRow(rowFour, "rowFour");



});









