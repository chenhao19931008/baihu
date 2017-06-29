/**
 * Created by 清水 on 2017/2/16.
 */


var register = {
    setting:{
        reg_phone: /0?(13|14|15|18)[0-9]{9}/,

    },
    reg_login:function(){
        var login_email = $.trim($('#login_email').val()),//登录手机号
            login_pass = $.trim($('#login_pass').val());//登录密码
            if(login_email==""){
                layer.tips('请输入手机号', '#login_email', {
                    tips: [1, '#3595CC'],
                    time: 4000
                });
                return false;
            }else if(!register.setting["reg_email"].test(login_email)){
                layer.tips('请输入正确的手机号', '#login_email', {
                    tips: [1, '#3595CC'],
                    time: 4000
                });
                return false;
            }else if(login_pass==""){
                layer.tips('请输入密码', '#login_pass', {
                    tips: [1, '#3595CC'],
                    time: 4000
                });
                return false;
            }

            return true;

    },
    register_fn:function(){
        var reg_phone_new = $.trim($('#reg_phone').val()),//注册手机号
            reg_pass  = $.trim($('#reg_pass').val()),//注册密码
            reg_pass2  = $.trim($('#reg_pass_again').val()),//再次输入密码
            reg_code  = $.trim($('#reg_code').val());//手机验证码

            if(reg_phone_new==""){
                layer.tips('请输入手机号', '#reg_phone', {
                    tips: [1, '#3595CC'],
                    time: 4000
                });
                return false;

            }else if(!register.setting["reg_phone"].test(reg_phone_new)){
                layer.tips('请输入正确的手机号', '#reg_phone', {
                    tips: [1, '#3595CC'],
                    time: 3000
                });
                return false;
            }else if(reg_pass==""){
                layer.tips('请输入密码', '#reg_pass', {
                    tips: [1, '#3595CC'],
                    time: 3000
                });
                return false;
            }else if(reg_pass2==""){
                layer.tips('请再次输入密码', '#reg_pass_again', {
                    tips: [1, '#3595CC'],
                    time: 3000
                });
                return false;
            }else if(reg_pass!=reg_pass2){
                layer.tips('两次密码输入不一致', '#reg_pass_again', {
                    tips: [1, '#3595CC'],
                    time: 3000
                });
                return false;
            }else if(reg_code==""){
                layer.tips('请输入验证码', '#reg_code', {
                    tips: [1, '#3595CC'],
                    time: 3000
                });
                return false;
            }

            return true;

    },
    reg_code:function(){
        var reg_phone_new = $.trim($('#reg_phone').val());//注册手机号

        if(reg_phone_new==""){
            layer.tips('请输入手机号', '#reg_phone', {
                tips: [1, '#3595CC'],
                time: 4000
            });
            return false;

        }else if(!register.setting["reg_phone"].test(reg_phone_new)) {
            layer.tips('请输入正确的手机号', '#reg_phone', {
                tips: [1, '#3595CC'],
                time: 3000
            });
            return false;
        }
        return true;
    },
    time_down:function(){
        //手机验证倒计时
        var timer=null; //timer变量，控制时间
        var count = 10; //间隔函数，1秒执行
        var curCount=0;//当前剩余秒数
        var code = ""; //验证码
        var codeLength = 6;//验证码长度

        function sendMessage() {


            // var username = $.trim($(".userVal").val());
            // if(nametest(username)){
            //     layer.tips('用户名已经存在!', '.userVal', {
            //         tips: [1, '#ff5742']
            //     });
            //     return false;
            // }
            // var phone=$.trim($('.phoneVal').val());
            // if(phonetest(phone)){
            //     layer.tips('该手机号已经注册过!', '.phoneVal', {
            //         tips: [1, '#ff5742']
            //     });
            //     return false;
            // }
            curCount = count;

            //设置button效果，开始计时
            $(".send-code").attr("disabled", "true");
            $(".send-code").val( curCount + "s");
            $(".send-code").addClass('active');
            timer = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
            SetRemainTime();


        }
        //timer处理函数
        function SetRemainTime() {
            if (curCount == 0) {
                window.clearInterval(timer);//停止计时器
                $(".send-code").removeAttr("disabled");//启用按钮
                $(".send-code").removeClass('active');
                $(".send-code").val("重新发送");

                // code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效
            }
            else {
                curCount--;
                $(".send-code").val( curCount + "s") ;
            }
        }



            return sendMessage();

    }

}
$(function(){

    $('.login-step dl input').on('focus',function(){
       $(this).closest('dl').addClass('active');

    }).on('blur',function(){
        $(this).closest('dl').removeClass('active');
    });

    $('#login-btn').click(function(){

        if(register.reg_login()){
                layer.msg("登录成功");
        }else{

            return false;
        }
    });

    //注册
    $('.lv_sub_btn_reg').on('click',function(){

        register.register_fn();
    });


    $('#send-code').on('click',function(){

        if( !register.reg_code()){
            return false;
        }else{
            register.time_down();
        }

    })

});
