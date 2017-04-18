$(function(){
    $("ul li").hover(function(){
$(this).find(".s").animate({height:"180px",marginTop:"0px",paddingTop:"20px"});
    },function(){
$(this).find(".s").animate({height:"0px",marginTop:"-130px",paddingTop:"0px"});        
    }
    );
});
