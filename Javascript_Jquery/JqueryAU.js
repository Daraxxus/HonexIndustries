$(function() {
    $("#AUPage").css("background-color", "rgba(125,209,70,0.5)");
    $("#AUPage").css("border-radius", "15px 0 0 15px");
});

$("#BF").hover(
    function() {
        $("#BF").css("background-color", "rgba(125,209,70,0.5)");
        $("#BF").css("border-radius", "15px 0 0 15px");
        $("#one").text("Want to know what the buzz about bee farming is about?");
        $("#two").text("Click here to learn more!");
        $("#three").text("");
        $("#four").text("");
        $("#five").text("");
        $("#six").text("");
        $("#seven").text("");
        $("#eight").text("");
        $("#nine").text("");
        $("#AUPage").css("background-color", "");
        $("#AUH1").text("");
        $("#AUH2").text("");
        $("#AUH3").text("");
        $(".break").hide();
    }, function() {
        $("#BF").css("background-color", "");
        $("#AUPage").css("background-color", "rgba(125,209,70,0.5)");
        
        $("#AUH1").text("about us");
        $("#one").text("We are a company started by a group of passionate Bee Keepers. We research into ways to be more effective at bee keeping as well as cultivate more people to join bee keeping.");
        
        $("#AUH2").text("objectives:");
        $("#two").html("&#8226; To improve and increase efficiency at bee keeping");
        $("#three").html("&#8226; To increase availability of bee farming information");
        $("#four").html("&#8226; To enable different bee keepers around the world to communicate");
        $("#five").html("&#8226; To help educate people on bee keeping and its benefits");
        
        $("#AUH3").text("who's who?");
        $("#six").html("&#8226; Chairman/Founder : Barry B. Benson");
        $("#seven").html("&#8226; Vice Chairman : Owen Bowen");
        $("#eight").html("&#8226; Chief Financial Officer (CFO) : Jeff Jefferson");
        $("#nine").html("&#8226; Public Relations (PR) : Boey Allen");
        
        $(".break").show();
    }); //when hover on BeeFarming link, generate text

$("#CU").hover(
    function() {
        $("#CU").css("background-color", "rgba(125,209,70,0.5)");
        $("#CU").css("border-radius", "15px 0 0 15px");
        $("#one").text("Want to ask us questions?");
        $("#two").text("Find out how to contact us!");
        $("#three").text("");
        $("#four").text("");
        $("#five").text("");
        $("#six").text("");
        $("#seven").text("");
        $("#eight").text("");
        $("#nine").text("");
        $("#AUPage").css("background-color", "");
        $("#AUH1").text("");
        $("#AUH2").text("");
        $("#AUH3").text("");
        $(".break").hide();
    }, function() {
        $("#CU").css("background-color", "");
        $("#AUPage").css("background-color", "rgba(125,209,70,0.5)");
        
        $("#AUH1").text("about us");
        $("#one").text("We are a company started by a group of passionate Bee Keepers. We research into ways to be more effective at bee keeping as well as cultivate more people to join bee keeping.");
        
        $("#AUH2").text("objectives:");
        $("#two").html("&#8226; To improve and increase efficiency at bee keeping");
        $("#three").html("&#8226; To increase availability of bee farming information");
        $("#four").html("&#8226; To enable different bee keepers around the world to communicate");
        $("#five").html("&#8226; To help educate people on bee keeping and its benefits");
        
        $("#AUH3").text("who's who?");
        $("#six").html("&#8226; Chairman/Founder : Barry B. Benson");
        $("#seven").html("&#8226; Vice Chairman : Owen Bowen");
        $("#eight").html("&#8226; Chief Financial Officer (CFO) : Jeff Jefferson");
        $("#nine").html("&#8226; Public Relations (PR) : Boey Allen");
        
        $(".break").show();
    }); //when hover on ContactUs link, generate text

$("#JU").hover(
    function() {
        $("#JU").css("background-color", "rgba(125,209,70,0.5)");
        $("#JU").css("border-radius", "15px 0 0 15px");
        $("#one").text("Interested in joining us?");
        $("#two").text("Click here to learn more!");
        $("#three").text("");
        $("#four").text("");
        $("#five").text("");
        $("#six").text("");
        $("#seven").text("");
        $("#eight").text("");
        $("#nine").text("");
        $("#AUPage").css("background-color", "");
        $("#AUH1").text("");
        $("#AUH2").text("");
        $("#AUH3").text("");
        $(".break").hide();
    }, function() {
        $("#JU").css("background-color", "");
        $("#AUPage").css("background-color", "rgba(125,209,70,0.5)");
       
        $("#AUH1").text("about us");
        $("#one").text("We are a company started by a group of passionate Bee Keepers. We research into ways to be more effective at bee keeping as well as cultivate more people to join bee keeping.");
        
        $("#AUH2").text("objectives:");
        $("#two").html("&#8226; To improve and increase efficiency at bee keeping");
        $("#three").html("&#8226; To increase availability of bee farming information");
        $("#four").html("&#8226; To enable different bee keepers around the world to communicate");
        $("#five").html("&#8226; To help educate people on bee keeping and its benefits");
        
        $("#AUH3").text("who's who?");
        $("#six").html("&#8226; Chairman/Founder : Barry B. Benson");
        $("#seven").html("&#8226; Vice Chairman : Owen Bowen");
        $("#eight").html("&#8226; Chief Financial Officer (CFO) : Jeff Jefferson");
        $("#nine").html("&#8226; Public Relations (PR) : Boey Allen");
        
        $(".break").show();
    }); //when hover on JoinUs link, generate text

if ($( window ).width() < 1101 && $( window ).width() > 550) {
    $('#slide').hover(function () {
        $(this).stop().animate({left:"0px"},500); 
        $(".AboutUsContent").css("width", "69%");
        $(".AboutUsContent").css("margin-left", "155px");
        $(".Logo").css("margin-left", "155px");
    },function () {
        var width = $(this).width() -10;
        $(this).stop().animate({left: -120  },500);  
        $(".AboutUsContent").css("width", "90%"); 
        $(".AboutUsContent").css("margin-left", "7%");
        $(".Logo").css("margin-left", "8%");
    });
}

$( window ).resize(function(){
    location.reload();
});