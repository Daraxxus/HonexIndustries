$(function() {
    $("#BFPage").css("background-color", "rgba(125,209,70,0.5)");
    $("#BFPage").css("border-radius", "15px 0 0 15px");
}); 

$("#AU").hover(
    function() {
        $("#AU").css("background-color", "rgba(125,209,70,0.5)");
        $("#AU").css("border-radius", "15px 0 0 15px");
        $("#one").text("Want to learn more about us?");
        $("#two").text("Click here to learn more!");
        $("#three").text("");
        $("#four").text("");
        $("#BFPage").css("background-color", "");
        $("#BFC1").text("");
        $("#BFC2").text("");
        $("#BFC2_1").text("");
        $("#BFC2_2").text("");
        $("#BFC2_3").text("");
        $(".break").hide();
    }, function() {
        $("#AU").css("background-color", "");
        $("#BFPage").css("background-color", "rgba(125,209,70,0.5)");
        
        $("#BFC1").text("about bee farming");
        $("#one").text("Apiculture, otherwise known as Bee farming or Bee keeping, refers to the maintenace of honey bee colonies, usually in hives, by humans. A Bee keeper (that's us!) keeps the bees in order to collect the products that they produce (such as honey, beeswax etc.), to pollinate crops and so on but most important amongst these is for our passion and hobby.");
        
        $("#BFC2").text("benefits of bee farming");
        $("#BFC2_1").html("&#8226; fresh honey and other hive products &#8226;");
        $("#two").html("Because the hive produces Honey, Beeswax etc, we have access to a fresh source to all these hive products. Using these we can create various products for sale (Available in the near future from us)");
        
        $("#BFC2_2").html("&#8226; pollination &#8226;");
        $("#three").html("In addition to getting fresh hive products, Bee Keeping helps to improve the natural environment through pollination. As bees pollinate plants, they help increase the plant's health. These has been shown to increase crop value.");
        
        $("#BFC2_3").html("&#8226; enjoyment and entertainment &#8226;");
        $("#four").text(" We are first and foremost bee keeping enthuiast and we find excitement and joy looking after our bees. This is a passion of ours and as such is a great benefit of Bee Farming.");
        
        $(".break").show();
    }); //when hover on AboutUs link, generate text

$("#CU").hover(
    function() {
        $("#CU").css("background-color", "rgba(125,209,70,0.5)");
        $("#CU").css("border-radius", "15px 0 0 15px");
        $("#one").text("Want to ask us questions?");
        $("#two").text("Find out how to contact us!");
        $("#three").text("");
        $("#four").text("");
        $("#BFPage").css("background-color", "");
        $("#BFC1").text("");
        $("#BFC2").text("");
        $("#BFC2_1").text("");
        $("#BFC2_2").text("");
        $("#BFC2_3").text("");
        $(".break").hide();
    }, function() {
        $("#CU").css("background-color", "");
        $("#BFPage").css("background-color", "rgba(125,209,70,0.5)");
        
        $("#BFC1").text("about bee farming");
        $("#one").text("Apiculture, otherwise known as Bee farming or Bee keeping, refers to the maintenace of honey bee colonies, usually in hives, by humans. A Bee keeper (that's us!) keeps the bees in order to collect the products that they produce (such as honey, beeswax etc.), to pollinate crops and so on but most important amongst these is for our passion and hobby.");
        
        $("#BFC2").text("benefits of bee farming");
        $("#BFC2_1").html("&#8226; fresh honey and other hive products &#8226;");
        $("#two").html("Because the hive produces Honey, Beeswax etc, we have access to a fresh source to all these hive products. Using these we can create various products for sale (Available in the near future from us)");
        
        $("#BFC2_2").html("&#8226; pollination &#8226;");
        $("#three").html("In addition to getting fresh hive products, Bee Keeping helps to improve the natural environment through pollination. As bees pollinate plants, they help increase the plant's health. These has been shown to increase crop value.");
        
        $("#BFC2_3").html("&#8226; enjoyment and entertainment &#8226;");
        $("#four").text(" We are first and foremost bee keeping enthuiast and we find excitement and joy looking after our bees. This is a passion of ours and as such is a great benefit of Bee Farming.");
        
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
        $("#BFPage").css("background-color", "");
        $("#BFC1").text("");
        $("#BFC2").text("");
        $("#BFC2_1").text("");
        $("#BFC2_2").text("");
        $("#BFC2_3").text("");
        $(".break").hide();
    }, function() {
        $("#JU").css("background-color", "");
        $("#BFPage").css("background-color", "rgba(125,209,70,0.5)");
       
        $("#BFC1").text("about bee farming");
        $("#one").text("Apiculture, otherwise known as Bee farming or Bee keeping, refers to the maintenace of honey bee colonies, usually in hives, by humans. A Bee keeper (that's us!) keeps the bees in order to collect the products that they produce (such as honey, beeswax etc.), to pollinate crops and so on but most important amongst these is for our passion and hobby.");
        
        $("#BFC2").text("benefits of bee farming");
        $("#BFC2_1").html("&#8226; fresh honey and other hive products &#8226;");
        $("#two").html("Because the hive produces Honey, Beeswax etc, we have access to a fresh source to all these hive products. Using these we can create various products for sale (Available in the near future from us)");
        
        $("#BFC2_2").html("&#8226; pollination &#8226;");
        $("#three").html("In addition to getting fresh hive products, Bee Keeping helps to improve the natural environment through pollination. As bees pollinate plants, they help increase the plant's health. These has been shown to increase crop value.");
        
        $("#BFC2_3").html("&#8226; enjoyment and entertainment &#8226;");
        $("#four").text(" We are first and foremost bee keeping enthuiast and we find excitement and joy looking after our bees. This is a passion of ours and as such is a great benefit of Bee Farming.");
        
        $(".break").show();
    }); //when hover on JoinUs link, generate text

if (($(window).width()<1101) && ($(window).width()>550)) {
    $('#slide').hover(function () {
        $(this).stop().animate({left:"0px"},500); 
        $(".BeeFarmingContent").css("width", "72%");
        $(".BeeFarmingContent").css("margin-left", "130px");
        $(".Logo").css("margin-left", "155px");
        $("#slide a").css("font-size", "1.4em");
    },function () {
        var width = $(this).width() -10;
        $(this).stop().animate({left: -130  },500); 
        $("#slide a").css("font-size", "0");
        $(".BeeFarmingContent").css("width", "90%"); 
        $(".BeeFarmingContent").css("margin-left", "7%");
        $(".Logo").css("margin-left", "8%");
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
