$(function() {
    if (!($(window).width()<1101) && ($(window).width()>550)) {
        $("#CUPage").css("background-color", "rgba(125,209,70,0.5)");
        $("#CUPage").css("border-radius", "15px 0 0 15px");
    }
}); 

$("#AU").hover(
    function() {
        $("#CUPage").css("background-color", "");
        if (($(window).width()<1101) && ($(window).width()>550)) 
        {
            $("#AU").css("border-radius", "15px 15px 15px 15px");
            $("#AU").css("background-color", "rgba(255,220,63,0.5)");
        }
        else 
        {
            $("#AU").css("border-radius", "15px 0 0 15px");
            $("#AU").css("background-color", "rgba(125,209,70,0.5)");
        }
        
        
        $("#one").text("Want to learn more about us?");
        $("#two").text("Click here to learn more!");
        
        $("#CUCH1").text("");
        $("#CUCH1_1").text("");
        $("#CUCH2").text("");
        $("#CUCH3").text("");
        $("#three").text("");
        $("#four").text("");
        $("#five").text("");
        $("#six").text("");
        $("#seven").text("");
        $("#eight").text("");
        $("#nine").text("");
        $("#feedbackform").hide();
    }, function() {
        $("#AU").css("background-color", "");
        if (($(window).width()<1101) && ($(window).width()>550)) 
        {
            $("#CUPage").css("background-color", "rgba(255,220,63,0.5)");
        } 
        else 
        {
            $("#CUPage").css("background-color", "rgba(125,209,70,0.5)");   
        }
       
        $("#CUCH1").text("contact us");
        $("#CUCH1_1").text("address");
        $("#CUCH2").text("call/email us");
        $("#CUCH3").text("hotline operating hours");
        $("#one").text("45 Geyland Street");
        $("#two").text("Hexagon, HX 57689");
        $("#three").text("(218) 555-5224");
        $("#four").text("Work Hours : 8am to 10pm");
        $("#five").text("Working Days : Monday to Saturday");
        $("#six").text("Email: honexindustries@buzzmail.com");
        $("#seven").text("Number: (218) 555-5224");
        $("#eight").text("Mondays to Saturdays : 6am to 11pm");
        $("#nine").text("Sunday : 8am to 6pm");
        $("#feedbackform").show();
    }); //when hover on AboutUs link, generate text

$("#BF").hover(
    function() {
        $("#CUPage").css("background-color", "");
        $("#BF").css("background-color", "rgba(125,209,70,0.5)");
        if (($(window).width()<1101) && ($(window).width()>550)) 
        {
            $("#BF").css("border-radius", "15px 15px 15px 15px");
            $("#BF").css("background-color", "rgba(255,220,63,0.5)");
        }
        else 
        {
            $("#BF").css("border-radius", "15px 0 0 15px");
            $("#BF").css("background-color", "rgba(125,209,70,0.5)");
        }
        
        $("#one").text("Want to know what the buzz about bee farming is about?");
        $("#two").text("Click here to learn more!");
        
        $("#CUCH1").text("");
        $("#CUCH1_1").text("");
        $("#CUCH2").text("");
        $("#CUCH3").text("");
        $("#three").text("");
        $("#four").text("");
        $("#five").text("");
        $("#six").text("");
        $("#seven").text("");
        $("#eight").text("");
        $("#nine").text("");
        $("#feedbackform").hide();
    }, function() {
        $("#BF").css("background-color", "");
        if (($(window).width()<1101) && ($(window).width()>550)) 
        {
            $("#CUPage").css("background-color", "rgba(255,220,63,0.5)");
        } 
        else 
        {
            $("#CUPage").css("background-color", "rgba(125,209,70,0.5)");   
        }
        
        $("#CUCH1").text("contact us");
        $("#CUCH1_1").text("address");
        $("#CUCH2").text("call/email us");
        $("#CUCH3").text("hotline operating hours");
        $("#one").text("45 Geyland Street");
        $("#two").text("Hexagon, HX 57689");
        $("#three").text("(218) 555-5224");
        $("#four").text("Work Hours : 8am to 10pm");
        $("#five").text("Working Days : Monday to Saturday");
        $("#six").text("Email: honexindustries@buzzmail.com");
        $("#seven").text("Number: (218) 555-5224");
        $("#eight").text("Mondays to Saturdays : 6am to 11pm");
        $("#nine").text("Sunday : 8am to 6pm");
        $("#feedbackform").show();
    }); //when hover on BeeFarming link, generate text

$("#JU").hover(
    function() {
        $("#CUPage").css("background-color", "");
        if (($(window).width()<1101) && ($(window).width()>550)) 
        {
            $("#JU").css("border-radius", "15px 15px 15px 15px");
            $("#JU").css("background-color", "rgba(255,220,63,0.5)");
        }
        else 
        {
            $("#JU").css("border-radius", "15px 0 0 15px");
            $("#JU").css("background-color", "rgba(125,209,70,0.5)");
        }
        
        $("#one").text("Interested in joining us?");
        $("#two").text("Click here to learn more!");
        
        $("#CUCH1").text("");
        $("#CUCH1_1").text("");
        $("#CUCH2").text("");
        $("#CUCH3").text("");
        $("#three").text("");
        $("#four").text("");
        $("#five").text("");
        $("#six").text("");
        $("#seven").text("");
        $("#eight").text("");
        $("#nine").text("");
        $("#feedbackform").hide();
    }, function() {
        $("#JU").css("background-color", "");
        if (($(window).width()<1101) && ($(window).width()>550)) 
        {
            $("#CUPage").css("background-color", "rgba(255,220,63,0.5)");
        } 
        else 
        {
            $("#CUPage").css("background-color", "rgba(125,209,70,0.5)");   
        }
        
        $("#CUCH1").text("contact us");
        $("#CUCH1_1").text("address");
        $("#CUCH2").text("call/email us");
        $("#CUCH3").text("hotline operating hours");
        $("#one").text("45 Geyland Street");
        $("#two").text("Hexagon, HX 57689");
        $("#three").text("(218) 555-5224");
        $("#four").text("Work Hours : 8am to 10pm");
        $("#five").text("Working Days : Monday to Saturday");
        $("#six").text("Email: honexindustries@buzzmail.com");
        $("#seven").text("Number: (218) 555-5224");
        $("#eight").text("Mondays to Saturdays : 6am to 11pm");
        $("#nine").text("Sunday : 8am to 6pm");
        $("#feedbackform").show();      
    }); //when hover on JoinUs link, generate text

if (($(window).width()<1101) && ($(window).width()>550)) {
    $('#slide').hover(function () {
        $(this).stop().animate({left:"0px"},500); 
        $(".ContactUsContent").css("width", "72%");
        $(".ContactUsContent").css("margin-left", "120px");
        $(".Logo").css("margin-left", "155px");
        $("#slide a").css("font-size", "1.4em");
        $("#CUPage").css("background-color", "rgba(255,220,63,0.5)");
        $("#CUPage").css("border-radius", "15px 15px 15px 15px");
   },function () {
        var width = $(this).width() -10;
        $(this).stop().animate({left: -120  },500); 
        $("#slide a").css("font-size", "0");
        $(".ContactUsContent").css("width", "90%"); 
        $(".ContactUsContent").css("margin-left", "7%");
        $(".Logo").css("margin-left", "8%");
        $("#CUPage").css("background-color", "");
        $("#CUPage").css("border-radius", "");
    });
}

jQuery(function($){
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  $(window).resize(function() {
    if(windowWidth != $(window).width() || windowHeight != $(window).height()) {
      this.location.href = this.location.href;
      return;
    }
  });
});