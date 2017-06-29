
;(function($){
	

function banner(ajaxurl,time){
		
	var  $bannerWrap = $(this),
	 $banner = $bannerWrap.children('.lv_banner_swiper'),
	 $left = $bannerWrap.children('.arrow-left'),
	 $right = $bannerWrap.children('.arrow-right'),
	 $play = $bannerWrap.children('.play-dot');
	
	var  $item = null;
	
	var  $img = null;
	
	var  $dot = null;
	

	//AJAX读取数据和绑定数据
	
	var jsonData = null;
	
	$.ajax({
		url:ajaxurl+"?_="+Math.random(),
		
		type:"get",
		
		dataType:"json",
		
		async :false,
		
		success:function(data){
			
			jsonData = data;
			
			
			
		}
		
	});
	
	
	//数据绑定
	
	function bindDate(){
		var str = "",str2 = "";
		var w=$(window).width();
		var itemW
		$.each(jsonData, function(index,item) {
		
			str+="<li class='banner-item'><a href='#'><img src='"+item["src"]+"' alt=''/></a></li>";
			
			index===0 ?str2+="<li class='current'></li>":str2+="<li></li>";
			
			
		});
		
		
		$banner.html(str);//把数据追加到容器中
		if(jsonData.length>1){//如果页面中药执行动画的元素个数大于1才开始轮播
			//
			var tag = $("<li class='banner-item'><a href='#'><img src='"+jsonData[0]["src"]+"' alt=''/></a></li>");
			$play.html(str2);//创建轮播点
			
			$banner.append(tag);//追加元素做无缝滚动
			
			$item = $banner.children();//获取子元素个数
		
			$img = $banner.find('img');
			
			$dot =$play.children('li');//轮播点
			
			$banner.width(($item.length*100)+"%");//动态设置父盒子宽
			
			//设置了时间就按设置的时间执行否则就默认3000
			time = time ||3000;
			var step=0,autoTimer = null,dotNum=0;
			$item.width((100/$item.length)+'%');
			//公共动画
			function globalMove(){
				
				var dis = -(step*100)+"%";
				
				
				$banner.stop().animate({"left":dis},800);
				$('.play-dot li').eq(dotNum).addClass('current').siblings().removeClass('current');
			};
			
			
			
			//自动轮播调用
			autoTimer = window.setInterval(autoPlay,time);
			function autoPlay(){
				
				step++;
				dotNum++;
				if(dotNum>$item.length-2){
					dotNum=0;
				}
				if(step>$item.length-1){
					step=1;
					$banner.css("left",0);
				}
				
				globalMove();
			};
			
			
			//向右滑动
			$right.click(function(){
				
				autoPlay();
			});
			
			//向左滑动
			$left.click(function(){
				step--;
				dotNum--;
				
				step=dotNum;
				
				if(dotNum<0){
					dotNum=$item.length-2;
				}
				if(step<0){
					step=$item.length-2;
					$banner.css("left",-($item.length-1)*100+"%");
				}
				globalMove();
			});
			
			
			//轮播点动画
			$dot.mouseover(function(){
				
				dotNum = $(this).index();
				step = dotNum;
				globalMove();
					
			});
			
			
			//鼠标划入停止播放
			$bannerWrap.hover(function(){
				$(this).find('.arrow').show();
				clearInterval(autoTimer);
			},function(){
				$(this).find('.arrow').hide();
				autoTimer = window.setInterval(autoPlay,time);
				
			});
			
		}else{
			
			return;
		}
		
		
		
		
	}
	bindDate();
};
	
//封装
$.fn.extend({
	banner:banner
});
})(jQuery);

$(function(){
	
	$('.lv_banner_wrap').banner('../json/jsonData.txt',3000);
});
