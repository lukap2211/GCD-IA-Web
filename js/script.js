// my scripts

$(document).ready(function(){
	// get random famous quotes
	var quotesCount = $(" blockquote").length;
    var randomNum = Math.ceil(Math.random()*quotesCount); /* Pick random number */
	//console.log(randomNum);
    $("blockquote").hide();
    $("blockquote:nth-child("+randomNum+")").show();
});