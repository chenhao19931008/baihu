/**
 * Created by Administrator on 2017/3/28.
 */
//登陆后
$(".login-sign-after").hover(function(){
    $(".lv_logined_list").stop().slideToggle()
})
$(".close_none").click(function() {
    $(".login-sign-after").hide();
    $(".login-sign-before").show();
})

//选择
$(".personal_bottom_box li").click(function() {
    $(".personal_bottom_box li").removeClass("active");
    $(this).addClass("active");
})

$(".person_head_list a").click(function(){
    $(".person_head_list a").removeClass("active");
    $(this).addClass("active");
})




//上传头像
$(".choose-upload span") .click(function() {
    $(".img-container").css("display","block");
})



//导航
$(".list-con,.c_nav_m").hover(function(){
    $(".list-con").find(".iconfont").removeClass("icon-circle_down_on").addClass("icon-circle_xia").css("backgroundColor","#fdab0d");;
    $(".c_nav_m").show();
    $(".list-con").css("backgroundColor","#fdab0d");
},function(){
    $(".list-con").find(".iconfont").removeClass("icon-circle_xia").addClass("icon-circle_down_on");
    $(".c_nav_m").hide();
    $(".list-con").css("backgroundColor","#f6a200");
})
