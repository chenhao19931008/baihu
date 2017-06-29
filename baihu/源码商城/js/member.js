$(document).ready(function() {

	$(":checkbox[name=xuan]").live('change', function(){
		!this.checked?Cchange($(":checkbox[name=C1]:not(:disabled):checked"),false):Cchange($(":checkbox[name=C1]:not(:disabled):not(:checked)"),true);
	})
	$(":checkbox[name=C1]").live('change', function(){
		Cxchange();
	})
	$('.lyurl').on('click',function(){
		var ing=layer.load(),url=$(this).attr('lyurl'),title=$(this).attr('title'),w=typeof($(this).attr("w"))=="undefined"?'1000px':$(this).attr("w"),h=typeof($(this).attr("h"))=="undefined"?'auto':$(this).attr("h");
		$.get(url,function(html){
		layer_ly(html,title,false,w,h);
		})
	});
	$(".banktype label").on('click',function(){
		var name=$(this).attr('for');
		if(!name){return false;}
		var val=$('ul[bank_type="'+name+'"] .cur').find('i').attr('class').split('-');
		$(".banklist").hide();
		$('ul[bank_type="'+name+'"]').show();
		$('input[name="bank"]').val(val[1]);
		$(this).addClass("cur").siblings('label').removeClass('cur');
		parent.layer.iframeAuto(index);
	})
	$(".ly_tips").on('click',function(){
		layer_ly("<div style='line-height:1.5;padding:10px'>"+$(this).attr('data')+"</div>","<b>"+$(this).attr('title')+"</b>",true,'','auto');
	});
	$(".banklist span").on('click',function(){
		var name=$(this).find('i').attr('class').split('-');
		$('input[name="bank"]').val(name[1]);
		if($(this).closest('ul').attr('bank_type')){
			$(this).siblings('span').removeClass('cur');
		}else{
			$(".banklist span").removeClass('cur');
		}
		$(this).addClass("cur");
	})
	
	$(".shop_admin a:not(.no_click)").click(function(){
		var tit=$('.mwz .cur a').html()+"-"+$(this).html(),data=$(this).closest('tr').attr('id'),action=$(this).attr('class'),good=$(this).closest('tr').attr('good');
		if(action=='add' || action=='up'){
			$.post('/html/shopadmin',{data:data,action:action,good:good,object:readmeta('Pg-Type')}, function(html){
				layer_ly(html,tit,false,'440px','auto'); 
			});
		}else{
			Aform('shop_admin','action='+action+'&object='+readmeta('Pg-Type')+'&data='+data+'&good='+good);
		}
	});
	
	$(".cartdel").click(function(){
		var $this=$(this),$info=$this.attr('info');
		check("cartdel",'&info='+$info,function(is){
			if(is.state){
				var $dl=$this.closest("dl");
				var $obj=($dl.children("div").length>1)?$this.closest("div"):$dl;
				$obj.slideUp(500,function(){$(this).remove();carmoney();});
			}
		})
	});

	$('.order_note').live('click',function(){
		$val=$(this).next();
		$bh=$(this).attr('number');
		layer.prompt({formType:2,value:$val.html(),title: '订单备注（仅自己可见）'}, function(value,index,elem){
		if(value!=$val.html()){
			Aform('note','bh='+$bh+'&txt='+value,function(datas){
			if(datas.state==1) $val.html(value);
			});
		}else{
			layer.alert("您没有做任何修改！",{icon:5});return false;
		}
		 layer.close(index);
	})

})
	

	$(".ubar li").hover(
		function() {
			$(this).addClass('hzcur');
			$(this).children("div").show();
		},
		function() { 
			$this=$(this);
			$this.removeClass('hzcur');
			setTimeout(function(){ 
				if(!$this.hasClass('hzcur')){
					$this.children("div").hide();
				}
			},1); 
		})

$(".Batch_operate").live('click', function(){
		var $this=$(this);
		if($('select[name=batch] option:selected').val() == ""){
			location.href='/batch/updown';return false;
		}
		var data=getFormJson();
		if(data.C1 === undefined){
			layer.alert('至少选择一条操作对象！',{icon:5});return false;
		}

		if(data.batch.indexOf("/")>=0){
			location.href=data.batch+'?bh='+chk();
			return false;
		}
		if(data.batch=='del'){
			if($this.attr('vsafe')!=1){del_operate($this,data,$("select[name=batch]").find("option:selected").text(),"选中"+$(".msl .cur cite").html());return false;}
			Batch_confirm(data,$("select[name=batch]").find("option:selected").text(),"选中"+$(".msl .cur cite").html());return false;
		}
		   bulk(data);
	});

	$(".single_operate").live('click', function(){
		var data=getFormJson("form :hidden[value!='']"),$this=$(this);
		data['batch']=$this.attr('action');
		data['C1']=$this.closest("dl").find(':checkbox').val();
		if(data.batch=='del'){
			if($this.attr('vsafe')!=1){del_operate($this,data,$this.html(),"该"+$(".msl .cur cite").html());return false;}
			Batch_confirm(data,$this.html(),"该"+$(".msl .cur cite").html());return false;		
		}
		bulk(data);
	})

})

function cancel_cashed(x){
	layer.confirm("确定要<strong style='color:red'>撤销提现</strong>吗？<br>撤销后提现金额将返回至您的账户<br><font color=#666666>每日仅可撤销一次提现</font>",{icon:3}, function(){
	Aform('cancel_cashed','bh='+x);
	});
}

function Resulting(type,txt,yesbtn,nobtn){
	var txt='<strong style="color:#ff0000">请在支付页面完成付款! </strong><font color="#666666"><br>付款完成前请不要关闭此窗口。<br>付款完成后请根据情况点击以下按钮。<br>如有疑问联系客服<a style="color:#999" title="联系客服" href="tencent://message/?Menu=yes&amp;uin=938182818&amp;Service=58&amp;SigT=A7F6FEA02730C9883B33E0C9A4CBD2ACC58A098CCB990849D235B06D78AE9E987E51EB75748FE72E7D4348E82CA41DAAF28C77E57A816C7E07F3E44044978552D635A7214B9BABDC8A75C48B1CFE300D02F4624A1CF49E57B74C59CBB7126F7CB3CCE2ECD3F72BA83196BE1AE0597682B97C69376397BBE2&amp;SigU=30E5D5233A443AB2A4CE259063BCFD25E0EAEC6B2EAAD4D2DDDE85C0AF540326838FA2C4848D4C41F14DEB43795B7DBC9583E29523CE61B9641EFF0C3E4087C83B1E788092BB1A39">QQ4008853986</a></font>',yesbtn='支付完成',nobtn='重新支付';
	layer.confirm(txt,{icon:3,btn: [yesbtn,nobtn],shade: [0.5, '#fff'],title: false,closeBtn: false,area: '350px'}
	,function(){
		if(type=='cashier'){
			location.href='/order/buy';
		}else if(type=='bond'){
			location.reload();
		}
	},function(index){
	    layer.close(index);
	});
}


function setupsafe(){
$.get('/html/setupsafe', function(html){
	layer.open({
		type: 1,
		title: '<b class="blue">安全码设置</b>',
		closeBtn: false,
		shade: [0.05, '#000'],
		area: ['400px'],
		shadeClose: false,
		content: html
	});
});
}




function chk(){  
		  var chk_value =[];//定义一个数组      
            $('input[name=C1]:checked').each(function(){//遍历每一个复选框，其中选中的执行函数      
            chk_value.push($(this).val());//将选中的值添加到数组chk_value中      
            });  
			return chk_value;
}
function Batch_confirm(data,action,info){
	layer.confirm('确定要<font color=red><b>'+action+'</b></font>'+info+'吗？',{icon:3}, function(index){
		bulk(data);
		layer.close(index);
	});
}

function del_operate(is,data,action,info){
	Aform('vsafe','',function(datas){
					if(datas.state<0){
						Rs(datas);return false;
					}else if(datas.state==0){
						layer.prompt({formType:1,title: '请输入安全码'}, function(value,index,elem){
							Aform('safe','str='+value,function(datas){
								if(datas.state==1){is.attr('vsafe',1);is.click();}else{Rs(datas);}
								layer.close(index);
							});
						})
						return false;
					}
					Batch_confirm(data,action,info);
	});
}



$('.order_handle,.append_handle,.trust_handle').live('click',function(){
	var ing=layer.load(),role=readmeta('Or-Role'),number = typeof($(this).attr("number"))=="undefined"?readmeta('Or-Number'):$(this).attr("number"),utime = typeof($(this).attr("utime"))=="undefined"?readmeta('Or-Time'):$(this).attr("utime"),Handle = $(this).hasClass("order_handle")?'order':($(this).hasClass("append_handle")?'append':'trust'),w=typeof($(this).attr("w"))=="undefined"?(Handle!='order'?680:580):$(this).attr("w");
	if(Handle=='order') layer.closeAll('page');
	$.post('/deal/'+Handle,{number:number,role:role,action:$(this).attr("data"),utime:utime}, function(html){
		layer_ly(html,' ',false,w+'px');
	});
});

$('.order_info').live('click',function(){
	var ing=layer.load(),number = typeof($(this).attr("number"))=="undefined"?readmeta('Or-Number'):$(this).attr("number"),role = typeof($(this).attr("role"))=="undefined"?readmeta('Or-Role'):$(this).attr("role");
	$.post("/deal/"+$(this).attr("action"),{number:number,role:role},function(html){
	layer_ly(html,' ',false,'580px');
	})
});

$('.order_evaluation').live('click',function(){
	var ing=layer.load();
	$.post("/deal/evaluation",{number:$(this).attr("number"),role:$(this).attr("role"),object:$(this).attr("object")},function(html){
	layer_ly(html,' ',false,'580px');
	})
});

$(".trust_action").live('click', function(){
	var number=$(this).attr("number"),action=$(this).attr("action");
	if(action=='come'){
		layer.confirm('<b class="red">\u786e\u5b9a\u8981\u8f6c\u51fa\u6258\u7ba1\u8d4f\u91d1\u5417\uff1f</b><br>\u8f6c\u51fa\u540e\u8be5\u4efb\u52a1\u5c06\u53d8\u6210\u672a\u6258\u7ba1\u72b6\u6001\uff01',{icon:3},function(){
			dform('number='+number+'&action='+action,'trust');
		});
		return false;
	}
	dform('number='+number,'trust');
})

function dconfirm(info,str,type){
	var type = arguments[2] || 'order';
	layer.confirm(info,{icon:3},function(){
		dform(str,type);
	})
}

function insert_img(txt){
var imgArr=$('.filelist img'),ihtml='',btns='';
if(imgArr.length==0){
ihtml='<cite><b class="blue">亲，您还没有上传的演示大图！</b><br /><br /><input type="button" value="前去上传" class="layui-btn layui-btn-radius  layui-btn-small" id="go_up"></cite>';
}else{
$.each(imgArr, function(index){
var cs=(ifstr(txt,"[img]"+(index+1)+"[/img]"))?'not':'';
ihtml+="<div class='"+cs+"' id="+(index+1)+"><img src='"+$(this).attr('src')+"'><strong>"+(index+1)+"</strong><span><i></i></span></div>";
});
btns="<div class='btns'><input type='button' id='ok' class='layui-btn' value='导入选中'><input type='button' id='no' class='layui-btn layui-btn-primary' value='取消'></div>";
}
$(".insert").html("<div class='pic'>"+ihtml+"</div>"+btns+"<div class='prompt'><strong>提示：</strong><br /><b>1.</b>详情内容不再允许上传图片及外链图片，但允许将下方<span>大图</span>插入详情内容任意位置；<br /><b>2.</b>插入标签<span>[img]序号[/img]</span>，当大图排序变化后，需确认已插入图片序号是否对应；<br /><b>3.</b>未插入详情内容的大图将按排序顺序依次显示在详情介绍（模版内容）之后。</div></div>");
}




function  Urls(url){//url
	 var fields = $("form *[value!='']").serializeArray();
	 $.each(fields, function(i, field){
		 url+='/'+field.name+'/'+field.value;
	 });
	location.href=url;
}
