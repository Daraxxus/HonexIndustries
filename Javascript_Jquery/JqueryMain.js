$("#AU").hover(
    function() {
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
        $("#MPCH1").text("");
        $(".break").hide();
        $("#Happy").hide();
    }, function() {
        $("#AU").css("background-color", "");
        $("#one").text("We are a group of passionate bee farmers who are looking to attract interested people into this industry by educating them on bee farming.");
        $("#two").text("Interested in finding out more? Click any of the links at the side to learn more about Honex Industries!");
        $("#MPCH1").text("who are we?");
        $(".break").show();
        $("#Happy").show();
    }); //when hover on AboutUs link, generate text

$("#BF").hover(
    function() {
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
        $("#MPCH1").text("");
        $(".break").hide();
        $("#Happy").hide();
    }, function() {
        $("#BF").css("background-color", "");
        $("#one").text("We are a group of passionate bee farmers who are looking to attract interested people into this industry by educating them on bee farming.");
        $("#two").text("Interested in finding out more? Click any of the links at the side to learn more about Honex Industries!");
        $("#MPCH1").text("who are we?");
        $(".break").show();
        $("#Happy").show();
    }); //when hover on BeeFarming link, generate text

$("#CU").hover(
    function() {
        if (($(window).width()<1101) && ($(window).width()>550)) 
        {
            $("#CU").css("border-radius", "15px 15px 15px 15px");
            $("#CU").css("background-color", "rgba(255,220,63,0.5)");
        }
        else 
        {
            $("#CU").css("border-radius", "15px 0 0 15px");
            $("#CU").css("background-color", "rgba(125,209,70,0.5)");
        }
        $("#one").text("Want to ask us questions?");
        $("#two").text("Find out how to contact us!");
        $("#MPCH1").text("");
        $(".break").hide();
        $("#Happy").hide();
    }, function() {
        $("#CU").css("background-color", "");
        $("#one").text("We are a group of passionate bee farmers who are looking to attract interested people into this industry by educating them on bee farming.");
        $("#two").text("Interested in finding out more? Click any of the links at the side to learn more about Honex Industries!");
        $("#MPCH1").text("who are we?");
        $(".break").show();
        $("#Happy").show();
    }); //when hover on ContactUs link, generate text

$("#JU").hover(
    function() {
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
        $("#MPCH1").text("");
        $(".break").hide();
        $("#Happy").hide();
    }, function() {
        $("#JU").css("background-color", "");
        $("#one").text("We are a group of passionate bee farmers who are looking to attract interested people into this industry by educating them on bee farming.");
        $("#two").text("Interested in finding out more? Click any of the links at the side to learn more about Honex Industries!");
        $("#MPCH1").text("who are we?");
        $(".break").show();
        $("#Happy").show();
    }); //when hover on JoinUs link, generate text

if (($(window).width()<1101) && ($(window).width()>550)) {
    $('#slide').hover(function () {
        $(this).stop().animate({left:"0px"},500); 
        $(".MainPageContent").css("width", "80%");
        $(".MainPageContent").css("margin-left", "120px");
        $(".Logo").css("margin-left", "155px");
        $("#slide a").css("font-size", "1.4em");
    },function () {
        var width = $(this).width() -10;
        $(this).stop().animate({left: -120  },500);  
        $("#slide a").css("font-size", "0");
        $(".MainPageContent").css("width", "90%");
        $(".MainPageContent").css("margin-left", "7%");
        $(".Logo").css("margin-left", "8%");
    });
};

jQuery(function($){
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  $(window).resize(function() {
    if(windowWidth != $(window).width() || windowHeight != $(window).height()) {
      this.location.href = this.location.href;
      //window.location.reload(true);
      return;
    }
  });
});
