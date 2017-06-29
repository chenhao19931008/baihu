/**
 * Created by Administrator on 2017/3/25.
 */
$(".lv_question_left_tab a").click(function() {
    $(".lv_question_left_tab a").removeClass("active");
    $(this).toggleClass("active");
})