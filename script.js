$(document).ready(function(){
	$("#p1").click(function(){
		$("h1").text("Choose a Friend");
		$(".imgeveryone").hide();
		$("#p1").hide();
		$("h2").hide();
		$("#prat").hide();
		$("#pwolf").hide();
		$("#pbees").hide();
		$("#pnett").hide();
		$("#ewhat").hide();
		$("#ecrash").hide();
		$("#en").hide();
		$("#eywd").hide();
		$("#dsoccer").hide();
		$("#dbasketball").hide();
		$("#dtennis").hide();
		$("#dfootball").hide();
		$("#omountain").hide();
		$("#osurfing").hide();
		$("#obmx").hide();
		$("#oeat").hide();
		$("#phappy").hide();
		$("#pangry").hide();
		$("#ehappy").hide();
		$("#eangry").hide();
		$("#dhappy").hide();
		$("#dangry").hide();
		$("#ohappy").hide();
		$("#oangry").hide();
		$("#lhappy").hide();
		$("#langry").hide();
	});
	
	
	$("#p2").click(function() {
		$("h1").text("Whats Evanders Favorite word?");
		$("#ewhat").show();
		$("#ecrash").show();
		$("#en").show();
		$("#eywd").show();
		$("#p2").hide();
		$("#p3").hide();
		$("#p4").hide();
		$("#p5").hide();
		$("#p6").hide();
	});
	
	$("#ewhat").click(function() {
		$("h1").text("Wrong!");
		$("#eangry").show();
		$("#ewhat").hide();
		$("#ecrash").hide();
		$("#en").hide();
		$("#eywd").hide();
	});
	
	$("#ecrash").click(function() {
		$("h1").text("Wrong!");
		$("#eangry").show();
		$("#ewhat").hide();
		$("#ecrash").hide();
		$("#en").hide();
		$("#eywd").hide();
	});
	
	$("#eywd").click(function() {
		$("h1").text("Wrong!");
		$("#eangry").show();
		$("#ewhat").hide();
		$("#ecrash").hide();
		$("#en").hide();
		$("#eywd").hide();
	});
	
	$("#en").click(function() {
		$("h1").text("Correct!");
		$("#ehappy").show();
		$("#ewhat").hide();
		$("#ecrash").hide();
		$("#en").hide();
		$("#eywd").hide();
	});
	
	$("#p3").click(function() {
		$("h1").text("Whats Pierces Favorite Animal?");
		$("#prat").show();
		$("#pwolf").show();
		$("#pbees").show();
		$("#pnett").show();
		$("#p2").hide();
		$("#p3").hide();
		$("#p4").hide();
		$("#p5").hide();
		$("#p6").hide();
	});
	
	$("#prat").click(function() {
		$("h1").text("Wrong!");
		$("#prat").hide();
		$("#pwolf").hide();
		$("#pbees").hide();
		$("#pnett").hide();
		$("#pangry").show();
	});
	
	$("#pnett").click(function() {
		$("h1").text("Wrong!");
		$("#prat").hide();
		$("#pwolf").hide();
		$("#pbees").hide();
		$("#pnett").hide();
		$("#pangry").show();
	});
	
	$("#pwolf").click(function() {
		$("h1").text("Wrong!");
		$("#prat").hide();
		$("#pwolf").hide();
		$("#pbees").hide();
		$("#pnett").hide();
		$("#pangry").show();
	});
	
	$("#pbees").click(function() {
		$("h1").text("Correct!");
		$("#prat").hide();
		$("#pwolf").hide();
		$("#pbees").hide();
		$("#pnett").hide();
		$("#phappy").show();
	});
	
	
	$("#p4").click(function() {
		$("h1").text("Whats Davids Favorite Sport?");
		$("#dsoccer").show();
		$("#dbasketball").show();
		$("#dtennis").show();
		$("#dfootball").show();
		$("#p2").hide();
		$("#p3").hide();
		$("#p4").hide();
		$("#p5").hide();
		$("#p6").hide();
	});
	
	$("#dsoccer").click(function() {
		$("h1").text("Correct!");
		$("#dsoccer").hide();
		$("#dbasketball").hide();
		$("#dtennis").hide();
		$("#dfootball").hide();
		$("#dhappy").show();
	});
	
	$("#dbasketball").click(function() {
		$("h1").text("Wrong!");
		$("#dsoccer").hide();
		$("#dbasketball").hide();
		$("#dtennis").hide();
		$("#dfootball").hide();
		$("#dangry").show();
	});
	
	$("#dtennis").click(function() {
		$("h1").text("Wrong!");
		$("#dsoccer").hide();
		$("#dbasketball").hide();
		$("#dtennis").hide();
		$("#dfootball").hide();
		$("#dangry").show();
	});
	
	$("#dfootball").click(function() {
		$("h1").text("Wrong!");
		$("#dsoccer").hide();
		$("#dbasketball").hide();
		$("#dtennis").hide();
		$("#dfootball").hide();
		$("#dangry").show();
	});
	
	
	$("#p5").click(function() {
		$("h1").text("What's Owens Favorite Hobby?");
		$("#omountain").show();
		$("#osurfing").show();
		$("#obmx").show();
		$("#oeat").show();
		$("#p2").hide();
		$("#p3").hide();
		$("#p4").hide();
		$("#p5").hide();
		$("#p6").hide();
	});
	
	$("#omountain").click(function() {
		$("h1").text("Correct!");
		$("#omountain").hide();
		$("#osurfing").hide();
		$("#obmx").hide();
		$("#oeat").hide();
		$("#ohappy").show();
	});
	
	$("#osurfing").click(function() {
		$("h1").text("Wrong!");
		$("#omountain").hide();
		$("#osurfing").hide();
		$("#obmx").hide();
		$("#oeat").hide();
		$("#oangry").show();
	});
	
	$("#obmx").click(function() {
		$("h1").text("Wrong!");
		$("#omountain").hide();
		$("#osurfing").hide();
		$("#obmx").hide();
		$("#oeat").hide();
		$("#oangry").show();
	});
	
	$("#oeat").click(function() {
		$("h1").text("Wrong!");
		$("#omountain").hide();
		$("#osurfing").hide();
		$("#obmx").hide();
		$("#oeat").hide();
		$("#oangry").show();
	});
});