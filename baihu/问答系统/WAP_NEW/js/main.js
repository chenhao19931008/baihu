/**
 * Created by 清水 on 2017/3/6.
 */

var tab = (function(){
    function tabTo(container){
        this.container = container;

        this.addA();
    }
    tabTo.prototype.addA = function(){

        $(this.container).children().on('click',function(){
            $(this).addClass('active').siblings().removeClass('active');

        });

    }


    return {
        tab:tabTo
    }

})();

// var hotq = new tab.tab('.m-q-nav');

var commonq = new tab.tab('#common-nav-in');

//tab切换
function _tabFn(box,tabContent){
    this.box= box;
    this.tabContent = tabContent;
    this.event();
}

_tabFn.prototype = {
    event:function(){

        var _this = this;
        $(this.box).children().on('click',function(){
            $(this).addClass('active').siblings().removeClass('active');
            $(_this.tabContent).children().eq($(this).index()).addClass('active').siblings().removeClass('active');
        });
    }
}

new _tabFn('.m-q-nav','#question-box');
//删除函数

function delFn(delElem,delBtn){
    this.delElem =delElem;
    this.delBtn = delBtn;
    this.del();
}
delFn.prototype = {
    del:function () {
             var _this = this;
            $(document).on('click',_this.delBtn,function(){
                var that = this;
                layer.open({
                    content:"确定要删除吗？",
                    btn:["确定",'取消'],
                    yes:function(){
                        $(that).closest(_this.delElem).remove();
                        layer.open({
                            skin:"msg",
                            content:"已删除"
                        });
                    }
                })

            });
    }

}


//返回图片编码

//图片编码
function getObjectURL(file) {
    var url = null;
    if (window.createObjectURL != undefined) { // basic
        url = window.createObjectURL(file);
    } else if (window.URL != undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file);
    } else if (window.webkitURL != undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
    }
    //console.log(url);
    return url;
}



//自定义充值


//获取选择的金额数
;(function(window){

    function getChoose(parentBox,beishu){
        this.beishu = beishu || 50;//兑换积分比例默认为1:50；
        this.parentBox = parentBox || document;
        this.jine = $(this.parentBox).find('.amount').text().substring('1');//金额
        this.jifen = $(this.parentBox).find('.jifen').text();//积分
        this.showJe = $('.amount-jine .amount-jine-num');//展示金额
        this.showJf = $('.get-jifen .get-jifen-num');//展示积分
        this.reg = /^[0-9]*[1-9][0-9]*$/;
        this.init();
    }

    getChoose.prototype = {
        init:function(){
            $(this.showJe).text( this.jine);//初始化

            $(this.showJf).text( this.jifen);//初始化

            this.event();



        },
        addChoose:function(beishu){

            var rechangeInp = $('#rechange-inp'),
                val = $.trim(rechangeInp.val());
            var arr1 = $('.js-pay-default .jifen');
            var result = [];
            var flag;

            function quchu(arr){
                for(var i=0;i<arr.length;i++){
                    flag=false;
                    for(var j=0,len=result.length;j<len;j++){

                        if(arr[i]==result[j]){
                            flag=true;
                            return;
                        }
                    }

                    if(!flag){
                        result.push(arr[i])
                    }

                }
                return result;
            }



            if(val==""||isNaN(val)){
                layer.open({
                    skin:"msg",
                    content:"请输入数字",
                    time:1
                });
                rechangeInp.val("");
                return;
            }else{

                if(val>10000000){
                    layer.open({
                        skin:"msg",
                        content:"最大可输入1千万",
                        time:1
                    });

                    rechangeInp.val(10000000);
                    return;
                }else if(!this.reg.test(val)){
                    //layer.msg('请输入正整数');
                    layer.open({
                        skin:"msg",
                        content:"请输入正整数",
                        time:1
                    });
                    rechangeInp.val("");
                    return;

                }
                // $(this.showJe).text( val/this.beishu);
                // $(this.showJf).text( val);
                var str = '<li><span class="amount">￥'+val/this.beishu+'</span><p class="font-sl"><b class="jifen">'+val+'</b>积分</p></li>';

                var len = quchu(arr1);
                for(var i=0;i<len.length;i++){
                    if(len[i].innerHTML==val){
                        layer.open({
                            skin:"msg",
                            content:"已经添加过了",
                            time:1
                        });
                        $('.zdy-pay-modal').hide();
                        //layer.msg("已经添加过了");
                       rechangeInp.val("");
                        $('.js-pay-default li').eq(i).addClass('active').siblings().removeClass('active');
                        return;
                    }

                }
                $('.zdy-pay-modal').hide();
                $('.m-zdy-btn').before(str).prev().addClass('active').siblings().removeClass('active');
                // this.event();
               rechangeInp.val("");

            }


        },
        event:function(){
            var _this = this;
            $(document).on('click','.m-zdy-btn',function(){
                $('.zdy-pay-modal').show();
            });
            $(document).on('click','.close-modal',function(){
                $('.zdy-pay-modal').hide();
            });
            $(document).on('click','.confirm-btn',function(){
                _this.addChoose(_this.beishu);
            });

            $(document).on('click','.js-pay-default li',function(){
                $(this).addClass('active').siblings().removeClass('active');
            });
        }

    };


    window.custom = function (parentBox,beishu){
       new getChoose(parentBox,beishu);
   }



})(window);



//底部问题下拉切换

function hot_list(target_btn,shou_box){

    this.target_btn = target_btn;

    this.show_box = shou_box;

    var _this =this;

    $(this.target_btn).on('click',function(){
            $(this).toggleClass('active');
            $(_this.show_box).toggleClass('active');

    });

    $(this.show_box).on('click','li',function(){
            $(_this.target_btn).removeClass('active');
            $(this).addClass('active').siblings().removeClass('active');

            var text = $(this).find('.selected').text();

            $(_this.target_btn).find('.js-title-text').text(text);

    });

    $(this.show_box).on('click',function(){
        $(_this.target_btn).removeClass('active');
        $(this).removeClass('active');
    });
}








