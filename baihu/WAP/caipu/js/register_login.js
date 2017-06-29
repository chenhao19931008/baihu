
var register_login = {
    init:function(){
        register_login.check_pass();

    },
    punElem:{
        reg:/0?(13|14|15|18)[0-9]{9}/,
        flag:true
    },
    punEmail:{
        reg:/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
        flag:true
    },
    reg_login:function(){
        var ys_phone = $.trim($('#phone').val()),
            ys_pass =   $.trim($('#pass').val()),
            reg_phone = this.punEmail.reg;
        if(ys_phone==""){
            layer.open({
                skin:'msg',
                content:"请输入邮箱",
                time:1.5
            });

            return false;
        }else if(!reg_phone.test(ys_phone)){
            layer.open({
                skin:'msg',
                content:"请输入正确的邮箱",
                time:1.5
            });
            return false;
        }else if(ys_pass=="") {
            layer.open({
                skin: 'msg',
                content: "请输入密码",
                time: 1.5
            })
            return false;

        }
        return true;
    },
    reg_register:function(){
        var register_phone =$.trim($('#phone').val()),

            resister_pass = $.trim($('#pwd').val()),

            register_pass_again = $.trim($('#repwd').val());
        if(register_phone==""){
            layer.open({
                skin:'msg',
                content:"请输入邮箱",
                time:1.5
            });
            return false;
        }else if(!this.punEmail.reg.test(register_phone)){
            layer.open({
                skin:'msg',
                content:"请输入正确的邮箱",
                time:1.5
            });
            return false;

        }else if(resister_pass==""){
            layer.open({
                skin:'msg',
                content:"请输入密码",
                time:1.5
            });
            return false;
        }else if(register_pass_again==""){
            layer.open({
                skin:'msg',
                content:"请再次输入密码",
                time:1.5
            });
            return false;
        }else if(resister_pass!=register_pass_again){
            layer.open({
                skin:'msg',
                content:"两次密码输入不一致",
                time:1.5
            });
            return false;
        }

        return true;
    },
    reg_code:function(){
        var code = $.trim($('#code').val());

        if(code==''){
            layer.open({
                skin:'msg',
                content:"请输入验证码",
                time:1.5
            });
            return false;
        }
        return true;
    },
    time_down:function(){
        //手机验证倒计时
        var timer=null; //timer变量，控制时间
        var count = 60; //间隔函数，1秒执行
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
            $("#send").attr("disabled", "true");
            $("#send").val( curCount + "s");
            timer = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
            SetRemainTime();
            sendcode();


        }
        //timer处理函数
        function SetRemainTime() {
            if (curCount == 0) {
                window.clearInterval(timer);//停止计时器
                $("#send").removeAttr("disabled");//启用按钮
                $("#send").val("重新发送");
                // code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效
            }
            else {
                curCount--;
                $("#send").val( curCount + "s");
            }
        }




            sendMessage();
            // sendcode1();

    },
    check_pass:function(){
        var check_btn = $('.chek_btn');
        var _this = this;
        check_btn.on('click',function(){

            $(this).toggleClass('active');
            if(_this.punElem.flag){
                $('#ys_pass').attr("type","text");
                _this.punElem.flag = false;
            }else{
                $('#ys_pass').attr("type","password");
                _this.punElem.flag = true;
            }
            !_this.punElem.flag;

        });

    },
    check_pass2:function(){
        var register_pass = $.trim($('.register_pass').val());

        if(register_pass==""){
            layer.open({
                skin:'msg',
                content:"请输入密码",
                time:1.5
            });
            return false;
        }
        return true;

    }

};
register_login.init();
