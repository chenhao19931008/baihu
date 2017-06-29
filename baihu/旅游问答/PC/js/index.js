var pubObj = {
    init:function(){
        pubObj.showBtn(".lv_guide_list","li");//显示向TA提问按钮

        pubObj.showBtn("#lv_guide_list","li");

        pubObj.tabFn(".lv_question_left_tab");//指路人

        pubObj.tabFn('.lv_ranking_list_top_r');//今日，本周，本月筛选

        pubObj.tabFn('.lv_ranking_list_mid');
        pubObj.tabFn('.list-got');
        pubObj.tabFn('.cont-wrap-title ul');
        pubObj.tabFn('.list-head-right');

    },
    //显示指路人提问按钮
    showBtn:function(container,childName){
        $(container).find(childName).hover(function(){
            $(this).toggleClass('active');
        });

    },
    tabFn:function(container){
            var addActive = function (container){
                this.container = container;
            };

        addActive.prototype = {
            add:function(){
                $(this.container).children().on('click',function(){
                    $(this).addClass('active').siblings().removeClass('active');

                });

            }

        }


        return new addActive(container).add();


    }


};
pubObj.init();


//显示登陆后列表
$('.lv_logined').hover(function(){
    $(this).find('.lv_logined_list').stop().slideToggle();

});

$(".lv_logined_list li:last-child") .click(function() {
    $(".lv_logined").removeClass("active");
    $(".lv_no_login").addClass("active");
})




$(".pathfinder-in a"). click(function() {
    $(".pathfinder-in a").not(".right").removeClass("active");
    $(this).not(".right").addClass("active");
})



//上传头像
$(".choose-upload span") .click(function() {
    $(".img-container").css("display","block");
})






