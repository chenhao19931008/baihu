layui.use('form', function(){
	var layer = layui.layer,form = layui.form();
	form.on('checkbox', function(data){
		var type=data.elem.name;
		var $div=$(data.elem).closest("ul");
		if(type=='score'){
			var $this=$div.find(".cinte");
			var $jifen=parseInt($('#jifen').html());//用户可用积分
			var $kyjf=parseInt($this.find('b').html());//可用积分
			var $yyjf=parseInt($this.find('a').html());//已用积分
			if(data.elem.checked){//判断是否用积分
				if($jifen>0){//若有积分则执行
				if(!$this.find(":checkbox[name='good']").is(':checked')) $this.find(":checkbox[name='good']").trigger("click");
				var $yjf=($jifen>=$kyjf)?$kyjf:$jifen;//若积分足够则全用，不够，用剩余全部
				var $upjf=$jifen-$yjf;//更新剩余积分
				var $dm=$yjf/10;
				var $jsjf='<font class="green">-￥<b class="green">'+toDecimal2($dm)+'</b></font>';
					Crchange($div.find(":checkbox:first"),true);
				}else{
					Crchange($(data.elem),false);
					alert('积分不足');return false;
				}
			}else{
				var $yjf=0;
				var $upjf=$jifen+$yyjf;
				var $jsjf='';
			}
			$this.find('a').html($yjf);
			$('#jifen').html($upjf);//更新剩余积分
			$this.find('.money').html($jsjf);
		}else if(type=='install'){
			if(data.elem.checked) Crchange($div.find(":checkbox:first"),true);
		}else{
			var $div=$(".cart");
			if(type=='good'){
				$div=$(data.elem).closest("ul");
			}else if(type=='shop'){
				$div=$(data.elem).closest("dl");
			}
			(!data.elem.checked)?Crchange($div.find(":checkbox:checked:not(:disabled):not(.score)"),false)+($div.find(":checkbox[name=score]:checked").next(".layui-form-checkbox").click()):Crchange($div.find(":checkbox:not(:checked):not(:disabled):not(.score)"),true);
		}
		var $dl=$(data.elem).closest("dl");
		($dl.find(":checkbox[name=good]:not(:disabled):not(:checked)").length>0)?Crchange($dl.find(":checkbox[name=shop]"),false):Crchange($dl.find(":checkbox[name=shop]"),true);
		if(type!='cartxuan') ($(".cart").find(":checkbox[name=shop]:not(:disabled):not(:checked)").length>0)?Crchange($(":checkbox[name=cartxuan]"),false):Crchange($(":checkbox[name=cartxuan]"),true);
		carmoney();
	});

	carmoney();

	function Crchange(data,is){
		data.attr("checked",is);
		form.render('checkbox'); //刷新渲染select
	}
});

//购物车统计
function carmoney(){
	var am=0,nm=0;
	$(".cart :checkbox:checked").each(function(){
	var $this=$(this).closest("dd");
	var $zm=parseFloat($this.find('.money b').html());
	var $m=(!isNaN($zm))?$zm:0;
		if(($(this).attr('name')=='good' || $(this).attr('name')=='install') && $m>0) $this.addClass("curr");
		if($(this).attr('name')=='good') nm++;
		($(this).attr('name')=='score')?am-=parseFloat($m):am+=parseFloat($m);
	})
	$('.curr :checkbox:not(:checked)').each(function(){
		$(this).closest("dd").removeClass("curr");
	})
	$("#allmoney").html(toDecimal2(am));
	$("#allnumber").html(nm);
}

//购物车结算
function carjs(){
	if($(":checkbox[name='good']:checked").length<=0){
		layer.alert("<b>您至少要选择<font color=red>1</font>件商品</b>",{icon:0});
		return false;
	}
	var isOK = true,carid='',carjf='',carty='',caraz='',line='';
	$(":checkbox[name='good']:checked").each(function(){
		var $this=$(this).closest("ul");
		if(carid!='') line="|";
		carid+=line+$(this).val();
		carty+=line+$this.find(".cgood").attr('data_type');
		var $yjf=($this.find(".score").is(':checked'))?parseInt($this.find(".cinte a").html()):0;
		carjf+=line+$yjf;
		var $az=($this.find(":checkbox[name=install]").is(':checked') || isNaN(parseFloat($this.find(".cinst b").html())))?1:0;
		caraz+=line+$az;
	})
	if(isOK){
		$("#cartdata").empty().html("<input type=hidden value='"+carid+"' name='id' /><input type=hidden value='"+carjf+"' name='jf' /><input type=hidden value='"+carty+"' name='ty' /><input type=hidden value='"+caraz+"' name='az' />");
		Aform('cart',$("form input[type=hidden]").serialize());
	}
}

