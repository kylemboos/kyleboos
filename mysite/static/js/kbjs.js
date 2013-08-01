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
