$(document).ready(function(){
	$("#p1").click(function(){
		$("h1").text("Choose a Friend");
		$(".imgeveryone").hide();
		$("#p1").hide();
		$("h2").hide();
	});
	$("#p2").click(function(){
		$("h1").text("What is Evanders favorite word?");
		$("#p2").html('<p onclick="myFunction()"> What? </p>');
		$("#p4").html("<p> Crash Out </p>");
		$("#p3").html("<p> You wanna die? </p>");
		$("#p5").html("<p> No </p>");
		$("#p6").hide();
		
	});
	
	$("#p3").click(function (){
		$("h1").text("What is Pierces Favorite animal?");
		$("#p2").html('<p id="pbees"> The Weird Bees </p>');
		$("#p3").html("<p> The Deadly Rat </p>");
		$("#p4").html("<p> The WereWolf</p>");
		$("#p5").html("<p> Nettspend </p>");
		$("#p6").hide();
		
	});
	$("#pbees").click(function (){
		$("h1").text("wrong");
	});

	
});


	function myFunction() {
		$("h1").text("wrong");
	}