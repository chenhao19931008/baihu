/**
 * Created by 清水 on 2017/6/6.
 */

//    三级联动




//个人中心

var _person_con =  {
    //菜单展示
    shouMenu:function(ele,showDom){


            $(ele).bind('click',function(){
                    $(this).toggleClass('active');
                    $(this).siblings(showDom).toggleClass('active');

            });

    },
    //非商家
    show_motel:function(obj){

            $(obj).bind('click',function(){

                var dataType = $(this).attr('data-type');

                if(dataType=="no"){
                    $('.motel_box').show();
                    $('.motel_in').show();
                    $(this).removeClass('active');
                    $(this).find('.person_menu_lsit').removeClass('active');

                }else{
                    $('.motel_box').hide();
                    $('.motel_in').hide();
                }

            });


            $('.close_btn').bind('click',function(){
                $('.motel_box').hide();
                $('.motel_in').hide();
            });



    }

}


function form_reg(data) {

    if(!data){
        return;
    }

    this.formBox = data.$ele;//最外层盒子

    this.init();
    this.s_province = $(this.formBox).find("#s_province").val();
    this.s_city = $(this.formBox).find("#s_city").val();
    this.s_county = $(this.formBox).find("#s_county").val();

    this.shopName = $.trim($('#shop_name').val());//店铺名字

    this.logo = $('#file-list').children();//店铺图标

    this.shopArea = $.trim($(this.formBox).find('#shop_area').val());//店铺介绍

    this.qq   =   $.trim($(this.formBox).find('#qq').val());//qq

    this.email = $.trim($(this.formBox).find('#email').val());//email

    this.regQQ = /[1-9]([0-9]{5,11})/;

    this.regEmail = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;


    this.phoneHm = /[0-9-()（）]{7,18}/;

    this.phoneHm2 =  /0?(13|14|15|18)[0-9]{9}/;



}

form_reg.prototype = {

    //入口函数
    init:function(){
        this.event();
    },

    //event

    event:function(){

        //radio

        var radio = $(this.formBox).find('.js_radio');
        var _this = this;


        radio.live('click',function(){
            var index = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');

            $('#js_status').find('.form_status_item').addClass('active').eq(index).siblings().removeClass('active');

        });

    },
    form_sub:function(){

            if(this.shopName==""){
                layer.alert("请输入店铺名");

                this.scrollDom('#shop_name');
                return false;
            }else if(this.logo.length<=0){
                layer.alert("请上传店铺图标");
                this.scrollDom('#browse');
                return false;
            }else if(this.shopArea==""||this.shopArea>=200){
                layer.alert("店铺介绍内容不得多于200字且不能为空");
                this.scrollDom('#shop_area');
                return false;
            }else if(this.qq==""|| !(this.regQQ.test(this.qq))){
                layer.alert("请填写正确的QQ号");
                this.scrollDom('#qq');
                return false;
            }else if( this.email==""||!(this.regEmail.test(this.email))){
                layer.alert("请填写正确的邮箱号");
                this.scrollDom('#email');
                return false;
            }else if(this.s_province=="省份"|| this.s_city == "地级市" || this.s_county == "市、县级市"){
                layer.alert("请选择地区");
                this.scrollDom('#email');
                return false;
            }
            return true;

    },
    scrollDom:function(el){
        var top = $(el).offset().top;

        $('body,html').animate({'scrollTop':top},500);

    },
    form_qiye:function(){

        var fr = $.trim($(this.formBox).find('#fr').val());//企业法人

        var name =  $.trim($(this.formBox).find('#qy_name').val());//企业名字

        var bh = $.trim($(this.formBox).find('#bh').val());//编号

        var phone = $.trim($(this.formBox).find('#phone').val());//电话

        var sf = $(this.formBox).find('#file-list2').children();//身份证

        var zz = $(this.formBox).find('#file-list3').children();//营业执照


        if(fr==""){
            layer.alert("请输入企业法人");
            this.scrollDom('#fr');
            return false
        }else if(name==""){
            layer.alert("请填写营业执照上的企业名称");
            this.scrollDom('#qy_name');
            return false
        }else if(bh==""){
            layer.alert("三证合一请填写统一社会信用代码");
            this.scrollDom('#bh');
            return false
        }else if(phone==""||!this.phoneHm.test(phone)&&!this.phoneHm2.test(phone)){
            layer.alert("请填写公司区号-固话或者手机号码");
            this.scrollDom('#phone');
            return false
        }else if(sf.length<=0){
            layer.alert("请上传身份证");
            this.scrollDom('#browse2');
            return false
        }else if(zz.length<=0){
            layer.alert("请上传营业执照");
            this.scrollDom('#browse3');
            return false

        }

        return true;


    },
    reg_person:function(){
        var len = $(this.formBox).find('#file-list4').children();

        if(len.length<=0){
            layer.alert("请上传身份证");
            this.scrollDom('#browse4');
            return false
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

    },
    change_att_email:function(){
        var val = $.trim($(this.formBox).find("#change_email").val()),

            code = $.trim($(this.formBox).find("#code").val());

            if(val==""){
                layer.alert("请输入邮箱号");

                return false;
            }else if(!this.regEmail.test(val)){
                layer.alert("请输入正确的邮箱号");

                return false;
            }else if(code==""){
                layer.alert("请输入验证码");
                return false;
            }


            return true;

    },
    reg_email:function(){
            var email = $.trim($(this.formBox).find("#change_email").val());

        if(email==""){
            layer.alert("请输入邮箱号");

            return false;
        }else if(!this.regEmail.test(email)){
            layer.alert("请输入正确的邮箱号");

            return false;
        }

        this.time_down();
        return true;

    },
    change_att_phone:function(){
        var val = $.trim($(this.formBox).find("#change_phone").val()),

            code = $.trim($(this.formBox).find("#phone_code").val());

        if(val==""){
            layer.alert("请输入手机号");

            return false;
        }else if(!this.phoneHm2.test(val)){
            layer.alert("请输入正确的手机号");

            return false;
        }else if(code==""){
            layer.alert("请输入验证码");
            return false;
        }


        return true;

    },
    reg_phone:function(){
        var phone = $.trim($(this.formBox).find("#change_phone").val());

        if(phone==""){
            layer.alert("请输入手机号");

            return false;
        }else if(!this.phoneHm2.test(phone)){
            layer.alert("请输入正确的手机号");

            return false;
        }

        this.time_down();
        return true;

    }


}
//初始化
new form_reg({
    $ele:"#form_wrap"
});








