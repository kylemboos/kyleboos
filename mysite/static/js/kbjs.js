/*! Javascript for the personal website of Kyle Boos


$("#tab-container li").click(function(){
  $("#tab-container li").removeClass("current-menu-item");
  $("#tab-container li").addClass("menu-item");
  $(this).removeClass("menu-item");
  $(this).addClass("current-menu-item");
  var name = $(this).attr('id');
  if(name=='about-tab'){
	$(".narrow-content div").addClass("hidden");
	$("#archive-content").addClass("hidden");
	$("#about-content").removeClass("hidden");
	
  }
  if(name=='projects-tab'){
	$(".narrow-content div").addClass("hidden");
	$("#archive-content").addClass("hidden");
	$("#project-content").removeClass("hidden");
  }
  if(name=='resume-tab'){
	$(".narrow-content div").addClass("hidden");
	$("#archive-content").addClass("hidden");
	$("#resume-content").removeClass("hidden");
  }
  if(name=='blog-tab'){
	$(".narrow-content div").addClass("hidden");
	$("#blog-content").removeClass("hidden");
	$("#archive-content").removeClass("hidden");

  }
});



var luciheight = $("#luci-t").height();
$("#luci-d").css("margin-top", luciheight + 5);

*/

//grab the active feature, and store its id and remove it being active
//hide every feature-holder, remove the one with the new id
//and set it to active
//need to check for over and under appropriately

var maxActive = 3;
$(".next").click(function(){
	var active = parseInt($(".feature-active").attr('id'));
	$(".feature-active").removeClass("feature-active");
	active++;
	if(active > maxActive){
		active = 1;
	}
	if(active < 1){
		active = maxActive;
	}
		
	$(".feature-holder").addClass("hidden");
	$("#"+active).removeClass("hidden");
	$("#"+active).addClass("feature-active");
	
});

$(".prev").click(function(){
	var active = parseInt($(".feature-active").attr('id'));
	$(".feature-active").removeClass("feature-active");
	active--;
	if(active > maxActive){
		active = 1;
	}
	if(active < 1){
		active = maxActive;
	}
		
	$(".feature-holder").addClass("hidden");
	$("#"+active).removeClass("hidden");
	$("#"+active).addClass("feature-active");
});

var imgheight = $("#contact-image").height();
var halfimgwidth = ($("#contact-image").width())/2;
var halfresumewidth = ($("#resume-container").width()/2);
console.log(halfimgwidth + halfresumewidth);
$("#resume-container").css("bottom", imgheight + 4);
$("#resume-container").css("margin-right", (halfimgwidth + (halfresumewidth/2)));