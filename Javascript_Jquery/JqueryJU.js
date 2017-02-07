$(function() {
    $("#JUPage").css("background-color", "rgba(125,209,70,0.5)");
    $("#JUPage").css("border-radius", "15px 0 0 15px");
});

$("#AU").hover(
    function() {
        $("#AU").css("background-color", "rgba(125,209,70,0.5)");
        $("#AU").css("border-radius", "15px 0 0 15px");
        $("#JUPage").css("background-color", "");
        $("#one").text("Want to learn more about us?");
        $("#two").text("Click here to learn more!");
        $("#JUCH1").text("");
        $("#JUCH2").text("");
        $("#JobApplicationForm").hide();
        $(".break").hide();
    }, function() {
        $("#AU").css("background-color", "");
        $("#JUPage").css("background-color", "rgba(125,209,70,0.5)");
        
        $("#one").text("Honex Industries are always on the lookout for asipiring bee keepers who show true passion for this line of work. We will gladly nurture and grow anyone who are keen to follow us, as well as make Honex Industries the best hub for bee keepinh related actiivites.");
        $("#two").text("Joining us is as simple as filling up the form below and waiting for our email to calling/emailing us and coming down to Honex Industries for an interview. With the method to sign up is so easy, why wait? Join us now!");
        
        $("#JUCH1").text("interested in joining us?");
        $("#JUCH2").text("how do I join?");
        
        $(".break").show();
         $("#JobApplicationForm").show();
    }); //when hover on AboutUs link, generate text

$("#BF").hover(
    function() {
        $("#BF").css("background-color", "rgba(125,209,70,0.5)");
        $("#BF").css("border-radius", "15px 0 0 15px");
        $("#JUPage").css("background-color", "");
        $("#one").text("Want to know what the buzz about bee farming is about?");
        $("#two").text("Click here to learn more!");
        $("#JUCH1").text("");
        $("#JUCH2").text("");
        $("#JobApplicationForm").hide();
        $(".break").hide();
    }, function() {
        $("#BF").css("background-color", "");
        $("#JUPage").css("background-color", "rgba(125,209,70,0.5)");
        
        $("#one").text("Honex Industries are always on the lookout for asipiring bee keepers who show true passion for this line of work. We will gladly nurture and grow anyone who are keen to follow us, as well as make Honex Industries the best hub for bee keepinh related actiivites.");
        $("#two").text("Joining us is as simple as filling up the form below and waiting for our email to calling/emailing us and coming down to Honex Industries for an interview. With the method to sign up is so easy, why wait? Join us now!");
        
        $("#JUCH1").text("interested in joining us?");
        $("#JUCH2").text("how do I join?");
        
        $(".break").show();
         $("#JobApplicationForm").show();
    }); //when hover on BeeFarming link, generate text

$("#CU").hover(
    function() {
        $("#CU").css("background-color", "rgba(125,209,70,0.5)");
        $("#CU").css("border-radius", "15px 0 0 15px");
        $("#JUPage").css("background-color", "");
        $("#one").text("Want to ask us questions?");
        $("#two").text("Find out how to contact us!");
        $("#JUCH1").text("");
        $("#JUCH2").text("");
        $("#JobApplicationForm").hide();
        $(".break").hide();
    }, function() {
        $("#CU").css("background-color", "");
        $("#JUPage").css("background-color", "rgba(125,209,70,0.5)");
        
        $("#one").text("Honex Industries are always on the lookout for asipiring bee keepers who show true passion for this line of work. We will gladly nurture and grow anyone who are keen to follow us, as well as make Honex Industries the best hub for bee keepinh related actiivites.");
        $("#two").text("Joining us is as simple as filling up the form below and waiting for our email to calling/emailing us and coming down to Honex Industries for an interview. With the method to sign up is so easy, why wait? Join us now!");
        
        $("#JUCH1").text("interested in joining us?");
        $("#JUCH2").text("how do I join?");
        
        $(".break").show();
         $("#JobApplicationForm").show();
    }); //when hover on ContactUs link, generate text

if (($(window).width()<1101) && ($(window).width()>550)) {
    $('#slide').hover(function () {
        $(this).stop().animate({left:"0px"},500); 
        $(".JoinUsContent").css("width", "69%");
        $(".JoinUsContent").css("margin-left", "155px");
        $(".Logo").css("margin-left", "155px");
   },function () {
        var width = $(this).width() -10;
        $(this).stop().animate({left: -120  },500);  
        $(".JoinUsContent").css("width", "90%"); 
        $(".JoinUsContent").css("margin-left", "7%");
        $(".Logo").css("margin-left", "8%");
    });
}

jQuery(function($){
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  $(window).resize(function() {
    if(windowWidth != $(window).width() || windowHeight != $(window).height()) {
      location.reload();
      return;
    }
  });
});