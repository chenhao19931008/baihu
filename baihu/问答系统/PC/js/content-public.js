$(function(){
	//导航
	$('.navbar-l').hover(function(){
		$(this).find('.class-bar-wrap').stop().toggle();
		
	});
	
	
	
	
	
	
	//问题详情
		
	 function basicFn(){};
	  
	 basicFn.prototype = {
	 
	 	scroll:function(){
	 		var btn = $('.answer-btn a');
	 		
	 		var areaBox = $('.ask-editor-box');
	 		
	 		btn.on('click',function(){
	 			var areaBoxH = areaBox.offset().top;
	 			
	 			$('body,html').animate({"scrollTop":areaBoxH},500);
	 		});
	 		
	 		
	 	},
	 	
	 	//提交追问
	 	regArea:function(){
	 		
	 		
	 		
	 		$(document).on('click','.asked-area-sub button',function(){
	 				var val = $(this).closest('.question-xq-ask-con').find('textarea').val();
	 				
	 				
	 				if(val==""){
	 					
	 					layer.msg("内容不能为空");
	 					return;
	 				}else{
	 											
													
//						$(this).closest('.answer-content-item').find('.asked-list').append(str);
	 					
	 					$(this).closest('.question-xq-ask-con').find('textarea').val("");
	 					$(this).closest('.asked-area').hide();
	 					
	 					
	 				}
	 				
	 				
	 				
	 				
	 				
	 		});
	 		
	 		
	 		
	 		
	 	},
	 	showArea:function(){
	 		
	 			
	 			$(document).on('click',".asked",function(event){
                    $('.asked-area').hide();
	 				$(this).closest('.question-xq-ask-con').find('.asked-area').toggle();

                    event.stopPropagation();
	 				
	 			});

            $(document).on('click',".asked-area",function(event){



                event.stopPropagation();

            });

	 			$(document).on('click',function(){
					$('.asked-area').hide();

				});

	 			
	 			
	 		
	 	}
	 	
	 }
	 var p = new basicFn().scroll();//滚动到回答区域
	 
	 var ask = new basicFn().showArea();
	 
	var hideArea = new basicFn().regArea();//
	
	
	
	
	//-------------提问---------------
	
	function submitFn(btn){
		
		this.btn = btn;
		
		return new this.regAsk();
	}
	
	
	submitFn.prototype.regAsk = function(){
		
			var $title =  $.trim($('#ask-title').val()),//标题
				$area  =  $.trim($('#ask-area').val()),//问题详情
				$age   =  $.trim($('#user-age').val()),//年龄
				$jf    =  $.trim(Math.floor($('#jifen').val())),//使用积分
				$myjifen = $.trim(Math.floor($('#my-jifen').text()));//拥有的积分
				var $age_num =Math.floor($age);
				

				var h1 = $('.ask-step-title').offset().top;
				var h2 = $('.ask-question-xq').offset().top;
				var h3 =$('#user-age').offset().top;
				var h4 =$('.reward-box').offset().top;
				//滚动函数
				function scrollFn(H){
					
					$('html,body').animate({"scrollTop":H},500);
				}
				
				if($title==""){
					
					layer.msg("请输入标题");
					
					scrollFn(h1);
					return false;
					
				}else if($area==""){
					
					layer.msg("请输入问题描述");
					
					scrollFn(h2);
					return false;
				}else if($age==""){
					layer.msg("请输入年龄");
					
					scrollFn(h3);
					return false;
					
				}else if(isNaN($age)){
					layer.msg("请输入数字");
					
					scrollFn(h3);
					return false;
				}else if($jf>$myjifen){
					layer.msg("积分不足");
					
					scrollFn(h4);
					return false;
				}
				return true;
				
		
	};
	
	
	$(document).on('click','.user-ask-btn',function (){
		var ask1 = new submitFn(".user-ask-btn");
		
	});
	
	//--------------------
	
	//
	var count = 0;
	function chooseTips(item){
			
		if(item.hasClass('active')){
			count++;
			
		}else{
			count--;
			
		}
		if(count>3){
			
			layer.msg("最多可选择3个标签");
			$(item).removeClass('active');
			count--;
			return false;
		}
		
		
	
	};
	
	//标签选中
	$('.add-tips span').on('click',function (){
		
		$(this).toggleClass('active');
		$(this).siblings('input').toggle();
		
		if(!$(this).hasClass('active')){
			
			$('.data-list').hide();
			$('.data-list').html("");
		}
	});
	
	//选择标签
	$(document).on("click",'.choose-tips dd .item',function(){
		$(this).toggleClass('active');
		chooseTips($(this));//判断选择的标签数量
	});
	
	
	
	//添加标签
	
	
	var addMOdel = (function(){
		
		var addInp = $('#addInp');
		
		function bindHtml(){
			var inpVal = addInp.val();
			
			$.ajax({
				type:"post",
				url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + inpVal,
				async:true,
				dataType:"jsonp",
				jsonp:"cb",
				success:function(data){
						
						
						data = data["s"];
						
						var str = "";
						
						$.each(data, function(index,item) {
								str+='<a href="javascript:;">'+item+'</a>';
						});
						$('.data-list').append(str).show();
						
						
						
					}
				
			
				
				
			});
			
			
		
			
			
		}
		
		function init(){
			
			addInp.on('focus keyup keydown',function(){
				
				if(addInp.val()!=""){
					bindHtml();
					return;
					
				}else{
					
					$('.data-list').hide();
				}
				
				
			});
			$('.data-list').on('click',function(e){
						var tar = e.target;
						
						var tarTag = tar.tagName.toLocaleUpperCase();
							
						var text = $(tar).text();
						
							if(tarTag=="A"){
								
								$('.add-tips').before('<span class="item font-sl">'+text+'</span>');
							}
							
						$('.data-list').hide();	
							
				});
			
		}
		
		
		return {init:init};
		
	})();
	
	addMOdel.init();
	
});



