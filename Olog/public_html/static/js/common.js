/*
 * Function not specific to any html document
 *
 * @author: Dejan Dežman <dejan.dezman@cosylab.com>
 */

$(document).ready(function(){
	var reason = $.url().param("reason");

	if(reason !== undefined) {
		$('#top_container').toggleClass("open");
	}
});

/**
 * Write logs to Chrome or Firefox console
 * @param input input string
 */
function l(input) {

	if(writeLogs === true) {
		console.log(input);
	}
}

/**
 * Make the first letter in every word uppercase
 * @param {type} input input string
 * @returns {string} output string
 */
function firstLetterToUppercase(input) {
	input = input.toLowerCase().replace(/\b[a-z]/g, function(letter) {
		return letter.toUpperCase();
	});

	return input;
}