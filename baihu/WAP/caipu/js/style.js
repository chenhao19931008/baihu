var docEl = document.documentElement,
    //当设备的方向变化（设备横向持或纵向持）此事件被触发。绑定此事件时，
    //注意现在当浏览器不支持orientationChange事件的时候我们绑定了resize 事件。
    //总来的来就是监听当然窗口的变化，一旦有变化就需要重新设置根字体的值
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
        //设置根字体大小
        if(docEl.clientWidth>=640)
        {
        	docEl.style.fontSize='30px';
        }
        else{
        	 docEl.style.fontSize = 20 * (docEl.clientWidth / 320) + 'px';
        }
       console.log(docEl.clientWidth)
    };

//绑定浏览器缩放与加载时间
window.addEventListener(resizeEvt, recalc, false);
document.addEventListener('DOMContentLoaded', recalc, false);






$(function(){
	$(".my-rating").starRating({
	    starSize: 15,
	    readOnly: true,
	    callback: function(currentRating, $el){
	        // make a server call here
	    }
	});


	// 菜谱大全展示
	$(".dq_cp_name").click(function(){
		$(this).next().toggle();
		console.log($(".dq_detial").css("display"))
		if($(this).next().css("display") == "block")
		{
			$(this).find(".dq_right").css("transform","rotate(90deg)");
		}
		else{
			$(this).find(".dq_right").css("transform","rotate(0deg)");
		}
	})




// ------------------------------------------------
// 发布菜单页

// 发布菜单监听textarea实时变化

 	$(".cpstorage").bind('input propertychange', function()
 	{
 		$(".cp_s").html($(".cpstorage").val().length);
 	});




	$(".tj_btn.add_zl").click(function(){
		$(".sc_tl_det.zl").append('<ul class="sc_tl_ul"><li class="sc_tl_tit"><p>主料</p><p>用量</p></li><li class="sc_tl_inp"><div><input type="" name="" placeholder="如：五花肉"></div><div><input type="" name="" placeholder="如：500g"></div>&nbsp;&nbsp;<img class="cp_remove" src="../img/wrong2.png"></li></ul>');
			$(".zl .cp_remove").unbind("click");

	//点击X删除该列
			$(".zl .cp_remove").each(function(){
				$(this).click(function(){
					if($(".sc_tl_det.zl").children().length>1){
						$(".zl .sc_tl_ul").eq($(this).parent().parent().index()).remove();
							}
				})
			})
		})





	$(".tj_btn.add_fl").click(function(){
		$(".sc_tl_det.fl").append('<ul class="sc_tl_ul"><li class="sc_tl_tit"><p>配料</p><p>用量</p></li><li class="sc_tl_inp"><div><input type="" name="" placeholder="如：花椒"></div><div><input type="" name="" placeholder="如：5g"></div>&nbsp;&nbsp;<img class="cp_remove" src="../img/wrong2.png"></li></ul>');
			$(".fl .cp_remove").unbind("click");

	//点击X删除该列
			$(".fl .cp_remove").each(function(){
				$(this).click(function(){
					if($(".sc_tl_det.fl").children().length>1){
						$(".fl .sc_tl_ul").eq($(this).parent().parent().index()).remove();
							}
				})
			})
		})




	var count=1;
	$(".add_bz").unbind("click");
	$(".add_bz").click(function(){
		count++;
		let img = '<div class="cpbz">'+
					'<h4 class="cpcs">步骤'+count+'</h4>'+
					'<div id="uploader-demo'+count+'">'+
					'<div id="fileList'+count+'" class="uploader-list">'+
					'<span class="list_text">上传步骤图片</span>'+
					'</div>'+
					'</div>'+
					'<h4 class="issue_content_tit">描述一下（不要超过100字）</h4>'+
					'<textarea class="cpstorage" maxlength="100" name="bz'+count+'"></textarea>'+
				'</div>';
		$(".issue_process").append(img);

	})

// ----------------------------------------------------

// 发话题
$(".ht_radio").each(function(){
	$(this).click(function(){
		$(this).find("label").addClass("active");
		$(this).siblings().find("label").removeClass("active");
	})
})
})




// 首页点击显示或隐藏下拉框
function h_s(){
	$(".i_xl").slideToggle();
}



function look(content,dom){
	layer.load(0, {
	            shade: [0.5,'rgba(0,0,0,.8)'] //0.1透明度的白色背景
	        });
    $.ajax({
    	url:'',
    	type:'',
    	data:'',
    	success:function(data){
    		layer.closeAll();
    		content.append('111')
    	}
    })
}


