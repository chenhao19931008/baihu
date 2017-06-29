

var register = {
    setting:{
        reg_phone: /0?(13|14|15|18)[0-9]{9}/,  //手机号
        mess_name: /[\u4e00-\u9fa5]{2,4}/,   //昵称
        mess_strong: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/,  //密码强度
        yan_num: /^\d{4}$/,     //验证码
        email_yan: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/ //邮箱

    },
    reg_login:function(){
        var login_phone = $.trim($('#login_phone').val()),//登录手机号
            login_pass = $.trim($('#login_pass').val());//登录密码
            reg_pass  = $.trim($('#reg_pass').val());//注册密码

            if(login_phone==""){
                layer.tips('请输入手机号', '#login_phone', {
                    tips: [1, '#3595CC'],
                    time: 4000
                });
                return false;
            }else if(!register.setting["reg_phone"].test(login_phone)){
                layer.tips('请输入正确的手机号', '#login_phone', {
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
            sign_name = $.trim($("#reg_name").val()),//昵称
            reg_pass  = $.trim($('#reg_pass').val()),//注册密码
            reg_pass2  = $.trim($('#reg_pass_again').val()),//再次输入密码
            reg_code  = $.trim($('#reg_code').val());//手机验证码
            code_you = verifyCode.options.code.toLowerCase();
            code_zuo = reg_code.toLowerCase();

            if(reg_phone_new==""){
                layer.tips('请输入手机号', '#reg_phone', {
                    tips: [1, '#3595CC'],
                    time: 4000
                });
                return false;

            }else if(!register.setting["reg_phone"].test(reg_phone_new)){
                layer.tips('手机号码格式错误', '#reg_phone', {
                    tips: [1, '#3595CC'],
                    time: 3000
                });
                return false;
            }else if(sign_name==""){
                layer.tips('请输入昵称', '#reg_name', {
                    tips: [1, '#3595CC'],
                    time: 3000
                });
                return false;
            }else if(!register.setting["mess_name"].test(sign_name)){
                layer.tips('请输入中文昵称(至少两位)', '#reg_name', {
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
            }else if(!register.setting["mess_strong"].test(reg_pass)){
                layer.tips('请输入数字和英文组合，8到16位', '#reg_pass', {
                    tips: [1, '#3595CC'],
                    time: 3000
                });
                return false;
            } else if(reg_pass2==""){
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
                layer.tips('请输入4位验证码', '#reg_code', {
                    tips: [1, '#3595CC'],
                    time: 3000
                });
                return false;
            }else if(code_you != code_zuo){
                layer.tips('请输入正确的手机验证码', '#reg_code', {
                    tips: [1, '#3595CC'],
                    time: 3000
                });
                verifyCode.options.code = "";
                verifyCode.refresh();
                return false;
            }else if(!$(".js-checkbox").is('.active')){
                layer.tips('是否阅读并同意协议', '#focus', {
                    tips: [1, '#3595CC'],
                    time: 3000
                });
                return false;
            }
            return true;
    },
    adree_log:function() {
        var lv_adree = $.trim($("#code2").val())  //地址

        if(lv_adree == "") {
            layer.tips('请输入地址', '#code2', {
                tips: [1, '#3595CC'],
                time: 2000
            });
            return false;
        }
        return true;
    },
   mess_ming:function() {
        var log_name = $.trim($("#name-mes").val()),//昵称
             sex_val=$('input:radio[name="sex"]:checked').val(),//性别
             lv_jian = $.trim($("#lv-jian").val()),
             lv_email = $.trim($("#name-mail").val())  //邮箱

       if (lv_email == "") {
           layer.tips('请输入邮箱', '#name-mail', {
               tips: [1, '#3595CC'],
               time: 4000
           });
           return false;
       }else if(!register.setting["email_yan"].test(lv_email)) {
           layer.tips('请输入正确的邮箱地址', '#name-mail', {
               tips: [1, '#3595CC'],
               time: 3000
           });
           return false;
       }else if (log_name == "") {
        layer.tips('请输入昵称', '#name-mes', {
             tips: [1, '#3595CC'],
             time: 4000
      });
        return false;
      }else if(!register.setting["mess_name"].test(log_name)) {
            layer.tips('请输入中文昵称(至少两位)', '#name-mes', {
                tips: [1, '#3595CC'],
                time: 3000
            });
            return false;
        }else if(sex_val == null){
            layer.tips("请选择性别","#sex-tt", {
                tips: [1,'#3595CC'],
                time:4000
            });
            return false;
        }
        //else if(lv_city  == "") {
        //    layer.tips("请输入您所在的城市","#lv-city", {
        //        tips: [1,'#3595CC'],
        //        time:4000
        //    });
        //    return false;
        //}
        else if(lv_jian == "") {
            layer.tips("请输入简介","#lv-jian", {
                tips: [1,'#3595CC'],
                time:4000
            });
            return false;
        }
       layer.alert('保存成功', {
           icon: 1,
           offset: '100px',
           skin: 'layer-ext-moon'
       });
       return true;
    },
    mess_keep:function(){
        var reg_pass_old = $.trim($('#mima-mes').val()),//旧密码
            reg_pass  = $.trim($('#reg_pass').val()),//xin密码
            reg_pass2  = $.trim($('#reg_pass_again').val()) //确认密码

            if(reg_pass_old == "") {
            layer.tips('请输入密码', '#mima-mes', {
                tips: [1, '#3595CC'],
                time: 4000
            });
            return false;

        }
        //    else if(!register.setting["mima-mes"].test(reg_pass_old)){
        //    layer.tips('请输入正确的密码', '#mima-mes', {
        //        tips: [1, '#3595CC'],
        //        time: 3000
        //    });
        //    return false;
        //}
         else if(reg_pass==""){
            layer.tips('请输入密码', '#reg_pass', {
                tips: [1, '#3595CC'],
                time: 3000
            });
            return false;
         } else if(!register.setting["mess_strong"].test(reg_pass)){
                layer.tips('请输入数字和英文组合，8到16位', '#reg_pass', {
                    tips: [1, '#3595CC'],
                    time: 3000
                });
                return false;
         } else if(reg_pass2==""){
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
        }

        return true;
    },
    bind_email:function(){
        var bind_email = $.trim($('#phone2').val()); //邮箱绑定
             email_page = $.trim($('#code2').val());    //验证码

        if(bind_email == ""){
            layer.tips("请输入邮箱","#phone2", {
                tips: [1, '#3595CC'],
                time: 4000
            });
            return false;
        }else if(!register.setting["email_yan"].test(bind_email)) {
            layer.tips('请输入正确的邮箱地址', '#phone2', {
                tips: [1, '#3595CC'],
                time: 3000
            });
            return false;
        }else if(email_page == ""){
            layer.tips("请输入验证码","#code2", {
                tips: [1, '#3595CC'],
                time: 4000
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
        var count = 30; //间隔函数，1秒执行
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

    $('.reg-step dl input').on('focus',function(){
        $(this).addClass('active');

    }).on('blur',function(){
        $(this).removeClass('active');
    });

    $('#login-btn').click(function(){

        if(register.reg_login()){
            layer.msg("登录成功",{
                time: 2000
            });
            window.setTimeout("window.location='index.html'",2000);
        }else{
            return false;
        }
    });

    //注册
    $('#sign-btn').on('click',function(){
        if( register.register_fn()){
            layer.msg("注册成功", {
                time: 2000
            });
            window.setTimeout("window.location='login.html'",1000);
        }else{

            return false;
        }
    });

//修改密码
    $('.message-content-keep').on('click',function(){

        register.mess_keep();
    });


//基本信息
   $(".messji-content-keep").on('click', function(){
       register.mess_ming();
   })

    $('#send-code').on('click',function(){

        if( !register.reg_code()){
            return false;
        }else{
            register.time_down();
        }

    })

    //地址
    $(".sub-bind").click(function(){
        if( register.adree_log()){
            layer.msg("添加成功", {
                time: 2000,
                offset: '250px'
            });
            $(".bind-m-wrap2").hide();
            $(".adree-keep").empty().append($("#code2").val());
        }else{
            return false;
        }
    })



    //绑定
    $(".sub-bind2").click(function(){
        if( register.bind_email()){
            layer.msg("提交成功", {
                time: 2000,
                offset: '250px'
            });
            $(".bind-m-wrap").hide();
        }else{

            return false;
        }
    })

});
