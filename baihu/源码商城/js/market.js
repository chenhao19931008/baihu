$(document).ready(function() {
	$("#code_hot dl:first").addClass("dropList-hover")
	$("#code_hot dl").mouseover(function(){
		$("#code_hot dl.dropList-hover").removeClass("dropList-hover");
		$(this).addClass("dropList-hover");
	});

	$('.shop-evaluation-label label').on('click', function(){
		var str=$(this).attr('data').split('|');
		$('.shop-evaluation-score p').each(function(i){
			$(this).html(str[i]);
		});
	});

	if($(".shop_nav a").length>0 && $(".shop_nav a[href='"+location.href+"']").length>0){ 
		$(".shop_nav a[href='"+location.href+"']").addClass("cur");
	}

	$('#shop_search').click(function(){
		var str='';
		$(this).closest('div').find(':text').each(function(){if($(this).val()!='') str+=$(this).attr('name')+'/'+$(this).val()+'/';});
		if(str==''){
			layer.alert("亲，至少需要输入1项搜索内容！",{icon:0},function(index){$("#shop_key").focus();layer.close(index);});return false;
		}
		location.href=$("input:radio[name='good_type']:checked").val()+str;
	});
	$('#sobid').click(function(){
		var input=$(this).closest('ul').find(':text');
		if(input.val()==''){
			layer.alert("亲，请输入要搜索的投标号！",{icon:0},function(index){input.focus();layer.close(index);});return false;
		}
		selist(0,Number(input.val()));
		$('#sobid_reset').show();
		
		$('#sobid_reset,.filter-comment label').click(function(){
			$('.bid_tit :text').val('');
			$('#sobid_reset').hide();
			if($(this).attr('id')=='sobid_reset') selist();
		});
	});

	$('.cartadd').click(function(){
		var action = $(this).attr('id');
			Aform('cartadd','action='+$(this).attr('data')+'&info='+$(this).attr('info'),function(datas){
				if(datas.state==-2 && typeof(datas.info)=="undefined"){
					layer_login('再继续',action);return false;
				}
				Rs(datas);
			});
	});

	$('.report').click(function(){
		layer.load();
		$.get('/html/report',{good:$(this).attr('good'),number:$(this).attr('number')}, function(html){
			layer_ly(html,false,true,'680px');
		});
	});
	$('.list .dlist').mouseenter(function(){	
		var $this=$(this);            
		enter=setTimeout(function(){
			$this.css("border","1px solid #ff4400").find('.Layer').show();
		},500);  
	}).mouseleave(function(){      

		clearTimeout(enter);       
		$(this).css("border","1px solid #e5e5e5").find('.Layer').hide();  
	});	

	$(".list .slist").hover(function() {
		$(this).addClass("slcur");
	}, function() {
		$(this).removeClass("slcur");
	});

	$(".tlist ul,.tasklist ul").hover(function() {
		$(this).addClass("curr");
	}, function() {
		$(this).removeClass("curr");
	});


	$('.fw_a').hover(function(){
		$(this).addClass('fw_on');
		$(this).siblings().removeClass('fw_on');
		var i = $('.fw_a').index($(this));
		$('.fw_txt cite').hide();
		$('.fw_txt cite').eq(i).show();
		if($(this).hasClass("tpay")) $(this).find('i').html('&#xe659;');
	},function(){//离开
		if(!$(this).hasClass("tpay")) return false;
		$('.fw_txt cite').hide();
		$(this).removeClass('fw_on');
	 $(this).find('i').html('&#xe658;');
	});

});

$('.upbid').live('click',function(){
	var action = $(this).attr('id');
	$.post("/html/upbid",{number:action}, function(html){
		if(html==-2){layer_lp('查看统计',action);return false;}
		layer_ly(html,' ',false);
	});
});
$('.outbid').live('click',function(){
	 var $this = $(this);
	 layer.confirm('<b>\u60a8\u786e\u5b9a\u8981<font color=red>\u6dd8\u6c70\u6b64\u6807</font>\u5417\uff1f</b><br><font color=#999999>\u6dd8\u6c70\u540e\u8be5\u6295\u6807\u65e0\u6cd5\u518d\u4fee\u6539\u548c\u9009\u4e2d\u6807\uff01</font>', {icon:3}, function(index){
		Aform("outbid",'number='+$this.attr('number'), function(datas){
			 if(datas.state==1){
				 $this.closest('li').empty().closest('dt').find('.bicon').html('<i class="out"><font style="font-size:16px;">&#xe64b;</font>淘汰</i>');
			 }else{
				 Rs(datas);
			 }
		});
		 layer.close(index);
	 });
});
$('.sobid').live('click',function(){
	scTop(".layui-form");
	$('input[name=sobid]').val($(this).html());
	$('#sobid').click();
});


$(".computing_act i:not(.no)").live('click', function(){
	 var n=$("#p_number").val(),d=1;
	 if($(this).attr('data')=='sub'){d=-1;}
	 var num=parseInt(n)+d;
	$("#p_number").val(num);
	(num<=1)?$(".computing_act i[data='sub']").addClass("no"):$(".computing_act i[data='sub']").removeClass("no");
});

$("#p_down,#p_up").live('click',function(){
		var c = $(this).attr("class"),t = $(this).attr("id"),p = parseInt($('.curPage').html());
		if(c!='no'){
			$(".small_pages input[type=text]").val('')
			p=(t=='p_up')?p-1:p+1;
			gelist(p);
		}
});

$('.gopage').live('click', function(){//分页跳转
	var pagenum =$(this).prev().val();
	if(pagenum>parseInt($('.totalPage').html())){
		layer.alert('不能超过最大页数：'+$('.totalPage').html(),{icon:0});
	}else if(pagenum<1){
		layer.alert('不能低于最小页数：1',{icon:0});
	}else{
		gelist(pagenum);
	}
});

function set_cur(n){
	if($(".c_r_menu em").hasClass("cur")){
		$(".c_r_menu em").removeClass("cur");
	}
	$(".c_r_menu em"+n).addClass("cur");
}

//更新分页
function getPageBar(cpg,tpg){
	$('#p_up,#p_down').addClass('no');
	//如果是第一页
	if(cpg>1){
	$('#p_up').removeClass('no');
	}
	if(cpg<tpg){
     $('#p_down').removeClass('no');
	}
}
$('.IRadio label').live('click', function(){
$(this).closest(".IRadio").find("label.IChecked").removeClass("IChecked");
$(this).addClass("IChecked");
});
$(".filter-comment label").live('click',function(){
		selist();	
});

function shopso(){
	if($('.list_tab :text[value!=""]').length<=0){
		layer.alert("亲，搜索关键词不能为空！",{icon:0},function(index){$('#keys').focus();layer.close(index);});
		return false;
	}
	var array=window.location.pathname.split("/"),p=$.inArray("page", array);
	if(p>0) array.splice(p,2);
		$.each($('.list_tab :text[data!=""]'),function(index,obj){ 
			var name=$(obj).attr('data'),val=$.trim($(obj).val()),i=$.inArray(name, array);
			if(val==''){
				if(i>0) array.splice(i,2);
			}else if(i>0){
				array[i+1]=val;
			}else{
				array.push(name,val);
			}
		});
		console.log(array);
	array = $.grep(array, function(s){return s.length>0;});
	$url=array.join("/");
	location.href="/"+$url;
}


gelist = function(page){
		var page = arguments[0] || 0,type = arguments[1] || 'geva',str = arguments[2] || '',loading= layer.load();
		if(page>1){scTop("#c_bb",45);}
		$.ajax({
		  type: "POST",
		  url : "/Apage/",
		  async: true,      //是否同步
		  data : "list=geva&pro="+readmeta('Item-Number')+"&good="+readmeta('Pg-Type')+"&page="+page,
		  dataType: "json",
		  success: function(result) {
			$.each(result,function(key,val){ 
				$("."+key).empty();
				$("."+key).html(val);
			});
			getPageBar(result.curPage,result.totalPage);
			$('.c_r_menu').menu_layer();
			layer_photos();
			layer.close(loading);
		  },error: function(){
			layer.msg('加载失败，请重试！');
			layer.close(loading);
			return false;
		  }
		});
}


selist = function(page,filter){
		var page = arguments[0] || 0,type = readmeta('Pg-Type'),filter = arguments[1] || $(".filter-comment .IChecked").attr("data"),loading=layer.load();
		if(page>1){scTop("#shop_pg_scTop",140);}
		$.ajax({
		  type: "POST",
		  url : "/Apage/",
		  async: true,      //是否同步
		  data : "list="+type+"&bh="+readmeta('Item-Number')+"&filter="+filter+"&page="+page,
		  dataType: "json",
		  success: function(result) {
			$.each(result,function(key,val){ 
				$("."+key).empty();
				$("."+key).html(val);
			});
			type!='bid'?layer_photos():getPageBar(result.curPage,result.totalPage);
			layer.close(loading);
		  },error: function(){
			layer.msg('加载失败，请重试！');
			layer.close(loading);
			return false;
		  }
		});
}

$.fn.extend({     
   layer_top:function(){
	var topMain=$("#layer_top").offset().top+40;
	
	$(window).scroll(function(){

		if ($(window).scrollTop()>topMain){
		$("#layer_top").addClass("topsp");
		}else{
		$("#layer_top").removeClass("topsp");
		}
	});
}});
 
 $.fn.extend({  
  menu_layer:function(){
	var c_aa = $("#c_aa").offset().top;
	var c_bb = $("#c_bb").offset().top;
	var c_cc = $("#c_cc").offset().top;
	//alert(tops);
	$(window).scroll(function(){
		var scroH = $(this).scrollTop()+46;
		if(scroH>=c_cc){
		
			set_cur(".c_cc");

		}else if(scroH>=c_bb){
		   
			set_cur(".c_bb");
		}else if(scroH>=c_aa){
			set_cur(".c_aa");
		}
	});
	$(".c_r_menu em").click(function() {
		var el = $(this).attr('class');
		$('body').scrollTop($("#"+el.replace(/cur/,"")).offset().top-43);
		$(this).addClass("cur").siblings("em").removeClass("cur");	
	});
}});