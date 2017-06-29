//弹窗组件-->>清水
function  myConfirm(data){
    if(!data){
        return;
    }
    this.wrap = document.getElementsByClassName('my-confirm-wrap')[0];//最外层盒子
	this.tipBox =document.getElementsByClassName('my-confirm-in')[0];//询问弹出
	this.m = document.getElementsByClassName('success-box')[0];//点了确定之后显示的盒子
	this.text = document.getElementsByClassName('my-confirm-text2')[0];//提示成功的内容
    this.confirmBtn = document.getElementsByClassName("btn-yes")[0];//询问确定按钮
    this.closeBtn  = document.getElementsByClassName('btn-no')[0];//取消按钮
    this.mainCon = document.getElementsByClassName('my-confirm-text')[0];//提示内容
    this.successBtn = document.getElementsByClassName('success-btn')[0];//成功后关闭按钮
    this.content = data.content;//设置提示内容
    this.mainCon.innerHTML = this.content;//设置提示内容
    this.success = data.success || function(){};//点击确定的回调函数
    this.cancel  = data.cancel  || function(){};//点击取消的回调
}
myConfirm.prototype = {

    init:function(){

        this.showConfirm();
        this.bindEvent();

    },
    bindEvent:function(){
        var _this = this;

        this.confirmBtn.onclick = function(){
            _this.hideConfirm();
            _this.success();

        }

        this.closeBtn.onclick = function(){
            _this.hideConfirm();
            _this.cancel();
        }

        this.successBtn.onclick = function(){
            _this.hideConfirm();
		}

    },
    showConfirm:function(){


        this.wrap.style.display = "block";
        this.tipBox.style.display = "block";
    },
    hideConfirm:function(){

        this.wrap.style.display = "none";
        this.m.style.display = "none";
    },
    cliked:function(content){

        this.wrap.style.display = "block";
        this.tipBox.style.display = "none";
		this.text.innerHTML = content;
        this.m.style.display = "block";

    }

}



//倒计时跳转

function downTips(data){
    if(!data){
        return;
    }

    this.time = data.time;
    this.url = data.url;
    this.container = data.container;
    this.container.innerHTML = this.time;
    this.init();


}

downTips.prototype = {
    init:function(){
        this.start();

    },
    start:function(){

        var _this = this;
        var count = (this.time)/1000;
        var timer = null;
        clearInterval(timer);
        timer  = setInterval(function(){

            count--;
            console.log(count)
            $(".count").html(count+"秒");
            if(count=="0"){
                clearInterval(timer);
                window.location.href = _this.url;
            }
        },1000);


    }


}







//----------------------------------------------------------------------

$(function(){

	//左侧导航
	$('.class-bar-list li').hover(function(){
		$(this).toggleClass('current');
		
		$(this).find('.class-bar-con').toggle();
		
	});

	//头部登录后下拉
		$('.menu-list-wrap').hover(function(){
			$(this).find('.menu-list').stop().slideToggle();
		});
	
	//加载特效
		var opts = {
			lines: 13 // The number of lines to draw
		  , length: 10 // The length of each line
		  , width: 5 // The line thickness
          , radius: 10 // The radius of the inner circle
          , scale: 1 // Scales overall size of the spinner
          , corners: 1 // Corner roundness (0..1)
          , color: '#000' // #rgb or #rrggbb or array of colors
          , opacity: 0.25 // Opacity of the lines
          , rotate: 0 // The rotation offset
          , direction: 1 // 1: clockwise, -1: counterclockwise
          , speed: 1 // Rounds per second
          , trail: 60 // Afterglow percentage
          , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
          , zIndex: 2e9 // The z-index (defaults to 2000000000)
          , className: 'spinner' // The CSS class to assign to the spinner
          , top: '50%' // Top position relative to parent
          , left: '50%' // Left position relative to parent
          , shadow: false // Whether to render a shadow
          , hwaccel: false // Whether to use hardware acceleration
        }
	
	
	$('.common-question-nav a').on('click',function(){
		var item = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		//$('.common-question-con .common-question-item').eq(item).addClass('current').siblings().removeClass('current');
		$('.common-question-con .common-question-item').empty();
		
		var container = $('.common-question-con .common-question-item');
		container.css('position', 'relative');
		container.css('height', '100%');
		
		//加载特效
		var opts = {
			lines: 13 // The number of lines to draw
		  , length: 10 // The length of each line
		  , width: 5 // The line thickness
          , radius: 10 // The radius of the inner circle
          , scale: 1 // Scales overall size of the spinner
          , corners: 1 // Corner roundness (0..1)
          , color: '#000' // #rgb or #rrggbb or array of colors
          , opacity: 0.25 // Opacity of the lines
          , rotate: 0 // The rotation offset
          , direction: 1 // 1: clockwise, -1: counterclockwise
          , speed: 1 // Rounds per second
          , trail: 60 // Afterglow percentage
          , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
          , zIndex: 2e9 // The z-index (defaults to 2000000000)
          , className: 'spinner' // The CSS class to assign to the spinner
          , top: '50%' // Top position relative to parent
          , left: '50%' // Left position relative to parent
          , shadow: false // Whether to render a shadow
          , hwaccel: false // Whether to use hardware acceleration
        }
		
        var spinner = new Spinner(opts).spin(container.get(0));
		
		var did = $(this).attr("did");
		$.ajax({
              url:"/Ajax/clist",
              type:'post',
              dataType:'json',
              data:{did:did},
              success:function(data){
				  spinner.spin();
			       if(data.state == '1'){
				        addComm(data.list);
				    }else{
						alert("数据获取失败");
					}
			    
              },
				error:function(xhr,data){
				  alert("获取数据失败");
				}
           });
		
	});

	$('.hot-q-nav li').click(function(){

		$(this).addClass('current').siblings().removeClass('current');
        $('.hot-que-wrap .hot-que-list').eq($(this).index()).addClass('current').siblings().removeClass('current');
		$('.hot-que-wrap .hot-que-list').eq($(this).index()).empty();
		var container = $('.hot-que-wrap .hot-que-list').eq($(this).index());
		container.css('position', 'relative');
        var spinner = new Spinner(opts).spin(container.get(0));
		
		var op = $(this).attr("op");
		$.ajax({
              url:"/Ajax/qlist",
              type:'post',
              dataType:'json',
              data:{op:op},
              success:function(data){
				   spinner.spin();
			       if(data.state == '1'){
				        addli(data.list);
				    }else{
						alert("数据获取失败");
					}
			    
              },
				error:function(xhr,data){
				  alert("获取数据失败");
				}
           });
	});

	//添加li
	function addli(list){
		
		var tmpl = $('.hot-que-wrap a.tmpl');
		var parent = $('.hot-que-wrap .current');
		if(list.length == 0){
			parent.html("<h3>暂无数据!</h3>");
			return;
	    }
		for(var i = 0; i < list.length; i++){
			
			var item = list[i];
			clone = tmpl.clone();
			clone.attr('href', 'Content/qdetail/qid/' + item['id']);
			clone.css('display', 'inline');
			clone.html('<span>[' + item['dname'] + ']</span>' + item['title']);
			clone.removeClass('tmpl');
			parent.append(clone);
		}
	}
	
	//添加com
	function addComm(list){
		var tdiv = $('.common-question-con div.tmpl');
		var ta   = $('.common-question-con a.tmpl');
		
		var parent = $('.common-question-con .common-question-item');
		if(list.length == 0){
			 parent.html("<h3>暂无数据!</h3>");
			 return;
		}
		for(var j = 0; j < 3; j++){
			cdiv = tdiv.clone();
			for(var i = 7 * j; i < 7 * (j + 1) && i < list.length; i++){
			
				var item = list[i];
				
				ca   = ta.clone();
				ca.attr('href', 'Content/qdetail/qid/' + item['id']);
				ca.html("<span class='left question-text'>" + item['title'] + "</span><span class='right question-time'>" + item['timestr'] + "</span>");
				ca.css('display', 'inline');
				ca.removeClass('tmpl');
				cdiv.append(ca);
			
			}
			cdiv.removeClass('tmpl');
			parent.append(cdiv);
		}
	}

        		
			
	
			

	//更多

	function show(ele){
		$(ele).stop().slideToggle();

	}
	$('.index-more').hover(function(){

		show(".index-more-list");
	});

	
	
	//tab
	var pubObj = {
    init:function(){
        

      pubObj.tabFn(".expert-online-right",'.tab-item');//在线医生
      
      
       pubObj.tabFn(".hot-question-tab",'a');//热门问题
       
        pubObj.tabFn(".doctor-sort",'a');//医生列表
      
		pubObj.tabFn(".question-list-sort",'a');//问题列表
    },
    tabFn:function(container,item){
            var addActive = function (container){
                this.container = container;
            };

        addActive.prototype = {
            add:function(){
                $(this.container).children(item).on('click',function(){
                    $(this).addClass('active').siblings().removeClass('active');

                });

            }

        }


        return new addActive(container).add();


    }


};
pubObj.init();







		
});
