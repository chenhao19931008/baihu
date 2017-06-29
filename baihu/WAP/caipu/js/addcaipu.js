var PageFun = {
	init : function(){

		this.diy();
		this.caipuClassify();
		this.modeChange();

	},

	//底部原创转载切换
	diy : function(){
		var ycBtn = $('#radio1'),
			zzBtn = $('#radio2'),
			zzInput = $('#link');

		ycBtn.on('click',function(){
			zzInput.val("");
			zzInput.hide();
		});

		zzBtn.on('click',function(){
			zzInput.show();
		});
	},
	//菜谱分类2级表单选择
	caipuClassify : function(){
		var flxx=[
			["京菜食谱","四川风味","上海美食","东北风味","广东粤菜","客家菜","湖北美食","湖南美食","淮扬菜","海南食谱","浙菜","山东鲁菜","江苏美食","安徽美食","福建美食","天津美食","云南美食","潮州菜","广西美食","台湾","民俗特色食品","点心食品","米面主食","火锅底料"],
			["水产类菜谱","汤煲粥类食谱","肉类食谱","素食食谱","凉拌菜","禽类食谱","蛋类食谱"],
			["韩国料理","法国大餐","意大利美食","日本料理","美国食谱","西餐","西餐面点"],
			["面包","蛋糕","土司","饼干","玛芬","月饼"],
			["米饭","面食","包子","花卷","饼子"]
		];

		
	},
	modeChange : function(){
		var wzBtn = $('.wz_btn'),
			twBtn = $('.tw_btn'),
			pop = $('.up_pic_pop'),
			modeInput = $('input[name=mode]'),
			stepBox = $('.cp-u-cp-add-step-iw');
		wzBtn.on('click',function(){
			twBtn.removeClass('cur');
			wzBtn.addClass('cur');
			$('.more_cpt_tit').show();
			$('.more_pic').show();
			$('.step_batch').hide();
			stepBox.addClass('wz_mode');
			pop.removeClass('tw_pop').addClass('wz_pop');
			pop.find('h3')[0].innerHTML = '上传更多成品图';
			modeInput.attr('value',0);
		});

		twBtn.on('click',function(){
			wzBtn.removeClass('cur');
			twBtn.addClass('cur');
			$('.more_cpt_tit').hide();
			$('.more_pic').hide();
			$('.step_batch').show();
			stepBox.removeClass('wz_mode');
			pop.removeClass('wz_pop').addClass('tw_pop');
			pop.find('h3')[0].innerHTML = '上传您的菜谱步骤';
			modeInput.attr('value',1);
		});
	}
};

//主料辅料增删
var Material = {
	init : function(){
		this.zhuliao = $('#zhuliao');
		this.fuliao = $('#fuliao');

		this.addEvent();
	},

	addEvent : function(){
		this.zhuliaoEvent();
		this.fuliaoEvent();
	},

	zhuliaoEvent : function(){
		var zhuliao = this.zhuliao,
			z_input = zhuliao.find('input');

		$(document).delegate('.add-input-btn1','click',function(){
			
			var index = $(this).parent().find('.add-input').index(),
			itemLen = zhuliao.find('.add-input').length;
			if(index == itemLen - 1){
				if(itemLen < 16){
					var str = '<div class="m-flex-box add-input"><input placeholder="如：猪肉"  name="cpzl[]" id="zl" class="material-name m-flex"><input class="p1" placeholder="如：250G" name="zlnum[]" id="zlnum" class="material-number" ><span class="del-input"> ×</span></div>';
					zhuliao.append(str);
				}else{
					layer.open({
				    content: '亲，不能在添加了！'
				    ,btn: '我知道了'
				  });
				}
			}
		});

		zhuliao.delegate('.del-input','click',function(){
			var itemLen = zhuliao.find('.add-input').length;
			if(itemLen == 1){
				layer.open({
				    content: '亲，请至少保留一个！'
				    ,btn: '我知道了'
				  });
				  return;
			} 
			$(this).parent().remove();
		});

	},

	fuliaoEvent : function(){
		var fuliao = this.fuliao,
			z_input = fuliao.find('input');

		$(document).delegate('.add-input-btn2','click',function(){
			var index = $(this).parent().find('.add-input').index(),
			itemLen = fuliao.find('.add-input').length;
			if(index == itemLen - 1){
				if(itemLen < 16){
					var str = '<div class="m-flex-box add-input"><input placeholder="如：盐"  name="cpfl[]" id="tl" class="material-name m-flex"><input class="p1" placeholder="如：半勺" name="flnum[]" id="tlnum" class="material-number"><span class="del-input"> ×</span></div>';
					fuliao.append(str);
				}else{
					layer.open({
				    content: '亲，不能在添加了！'
				    ,btn: '我知道了'
				  });
				}
			}
		});

		fuliao.delegate('.del-input','click',function(){
			var itemLen = fuliao.find('.add-input').length;
			if(itemLen == 1){
				layer.open({
				    content: '亲，请至少保留一个！'
				    ,btn: '我知道了'
				  });
				
				return;
			} 
			$(this).parent().remove();
		});
	}
};

//步骤增删 add在stepUp里
var Step = {
	init : function(){
		this.box = $('.cp-u-cp-add-step');
		this.count = 1;
		this.addEvent();
	},
	addEvent : function(){
		this.removeStep();
		this.changeStep();
	},
	removeStep : function(){
		var box = this.box;
		box.on('click','.remove',function(){
			var itemLen = box.find('.cp-u-cp-add-step-item').length;
			if(itemLen == 1) return;
			$(this).parent().parent().remove();
		});
	},
	changeStep : function(){
		var box = this.box;
		box.on('click','.up',function(){
			var item = $(this).parent().parent();
			if (item.prev().length > 0) {
				item.insertBefore(item.prev())
			}
		});
		box.on('click','.down',function(){
			var item = $(this).parent().parent();
			if (item.next().length > 0) {
				item.insertAfter(item.next())
			}
		});
	}
};

//上传upload
var stepUp = {
	init : function(){
		this.openBtn = $('.step_batch');
		this.pop = $('.up_pic_pop');
		this.wrap = $('.balck_bg');
		this.closeBtn = $('.pop_close_btn');
		this.stepUploader1 = null;
		this.step = $('.add-step-box div.step-item'),
		this.count = this.step.length;

		this.addEvent();
		this.uploader();
		this.cptUploader();
		this.stepUploader();
	},
	//成品图上传 头部单张
	cptUploader : function(){
		var uploader = WebUploader.create({
			auto: true,
			swf: 'http://www.chinacaipu.com/static/20161201/upload/Uploader.swf',
			server: '/File/upload',
			pick: {
				id : '#done_pic',
				multiple : false
			},
			duplicate: true,
			accept: {
				title: 'Images',
				extensions: 'gif,jpg,jpeg,bmp,png',
				mimeTypes: 'image/jpg,image/jpeg,image/png'
			}
		});

		uploader.on( 'uploadError', function( file,response ) {
			alert(file);
			alert(response);
		});

		uploader.on( 'uploadSuccess', function( file,response ) {
			if(response['_raw'] == '0'){
				alert('upload error');
				return false;
			}
			$('#uafter').find('img').eq(0).attr('src',response['_raw']).show();
			$('input[name="cpt"]').attr('value',response['_raw']);
		});

		$('.cp-u-cp-add-big').on('mouseover',function(){
			if($('#uafter img').attr('src') != ""){
				$('.reduce,.change').show();
			}
		})

		$('.cp-u-cp-add-big').on('mouseout',function(){
			//if($('#uafter img').attr('src') != ""){
			$('.reduce,.change').hide();
			//}
		})

		$('.cp-u-cp-add-big').delegate('.reduce','click',function(){
			$('#uafter').find('img').eq(0).attr('src','').hide();
			$('input[name="cpt"]').attr('value','');
		})

		$('.cp-u-cp-add-big').delegate('.change','click',function(){
			$('#done_pic input[type="file"]').trigger("click");
		})
	},

	addEvent : function(){
		var openBtn = this.openBtn,
			closeBtn = this.closeBtn,
			pop = this.pop,
			wrap = this.wrap;

		this.addStep();
		openBtn.on('click',function(){
			pop.show();
			wrap.show();
			pop.find('h3')[0].innerHTML = '上传您的菜谱步骤';
		});
	},

	uploader : function(){
		var self = this,
			pop = this.pop,
			upbtn = $('.pop_up_btn'),
			closeBtn = this.closeBtn,
			tip = $('.pop_tip'),
			wrap = this.wrap,
			$list = $('#fileList'),
			thumbnailWidth = thumbnailHeight = 140,
			fileConunt = 0,
			fileSize = 0;

		var uploader = WebUploader.create({
			swf: 'http://www.chinacaipu.com/static/20161201/upload/Uploader.swf',
			server: '/File/upload',
			pick: '#filePicker',
			duplicate: true,
			accept: {
				title: 'Images',
				extensions: 'gif,jpg,jpeg,bmp,png',
				mimeTypes: 'image/jpg,image/jpeg,image/png'
			}
		});

		uploader.on( 'fileQueued', function( file ) {
			fileConunt++;
			fileSize += file.size;
			var $li = $(
					'<div id="' + file.id + '" class="file-item thumbnail">' +
					'<img>' +
					'<span class="pic_done">完成</span>'+
					'<span class="pic_delete">删除</span>'+
					'<div class="pic_info">' + file.name + '</div>' +
					'</div>'
				),
				$img = $li.find('img');
			$list.append( $li );
			// 创建缩略图
			uploader.makeThumb( file, function( error, src ) {
				if ( error ) {
					$img.replaceWith('<span>不能预览</span>');
					return;
				}
				$img.attr( 'src', src );
			}, thumbnailWidth, thumbnailHeight );
			//更新pop的html
			pop.find('.pop_up_btn').addClass('can_up');
			upbtn.removeClass('done_up').addClass('can_up').html('开始上传');
			tip.html('一共有'+fileConunt+'张图片，共'+WebUploader.formatSize(fileSize));
		});

		uploader.on( 'fileDequeued', function( file ) {
			fileConunt--;
			fileSize -= file.size;
			if (fileConunt == 0) {
				upbtn.removeClass('can_up');
				tip.html('请先添加图片');
			}else{
				tip.html('一共有'+fileConunt+'张图片，共'+WebUploader.formatSize(fileSize));
			}
		});

		uploader.on( 'uploadError', function( file,response ) {
			alert(response);
		});

		uploader.on( 'uploadSuccess', function( file,response ) {
			if(response['_raw'] == '0'){
				alert('upload error');
				return false;
			}
			var $li = $('#'+file.id);
			$li.find('.pic_done').show();
			$li.attr('data-src',response['_raw']);
		});

		uploader.on('uploadFinished',function(file){
			upbtn.removeClass('can_up').addClass('done_up').html('完成');
		});

		pop.on('click','.can_up',function(){
			uploader.upload();
		});

		$list.on('click','.pic_delete',function(){
			var fileId = $(this).parent().attr('id');
			uploader.removeFile( fileId );
			$(this).parent().remove();
		});

		closeBtn.on('click',function(){
			if (fileConunt > 0){
				$('.close_balck_bg').show();
				$('.close_pop').show();
			}else{
				pop.hide();
				wrap.hide();
				fileCancel();
			}
		});

		$('.close_sure').on('click',function(){
			$('.close_balck_bg').hide();
			$('.close_pop').hide();
			pop.hide();
			wrap.hide();
			fileCancel();
		});

		$('.close_cancel').on('click',function(){
			$('.close_balck_bg').hide();
			$('.close_pop').hide();
		});

		$('.more_cpt_box').delegate('.cpt_delete','click',function(){
			$(this).parent().remove();
		});

		pop.delegate('.done_up','click',function(){
			if(pop.hasClass('tw_pop')){
				fileDone();
			}else{
				cptDone();
			}
		});

		function fileCancel(){
			$('#fileList').find('.thumbnail').each(function(){
				var fileName = $(this).attr('id');
				uploader.removeFile(fileName);
			});
			pop.find('.pop_tip').html('请先添加图片');
			pop.find('#fileList').html('');
			$('.pop_up_btn').removeClass('can_up').removeClass('done_up').html('开始上传');
			fileConunt = 0;
			fileSize = 0;
		}

		function fileDone(){
			var srcAry = [],
				lastIndex = -1,
				box =  $('.cp-u-cp-add-step-iw');

			pop.hide();
			wrap.hide();

			$('#fileList').find('.thumbnail').each(function(){
				var fileName = $(this).attr('id'),
					fileSrc = $(this).attr('data-src');
				srcAry.push(fileSrc);
			});

			fileCancel();

			$('.cp-u-cp-add-step-iw .pic').each(function(index,item){
				if($(this).find('.localImag img').attr('src') != ''){
					lastIndex = index;
				}
			});

			$.each(srcAry,function(index,item){
				if($('.step-item').eq(index+lastIndex+1).length != 0){
					$('.step-item').eq(index+lastIndex+1).find('.localImag img').attr('src',item).show();
					$('.step-item').eq(index+lastIndex+1).find('.webuploader-pick input').attr('value',item);
				}else{
					self.count++;
					var str = '<div class="step-item m-flex-box">' +
						'<div class="pic" id="pic'+ self.count +'">' +
						'<div class="localImag"><img src="" alt=""></div>' +
						'<input type="hidden" name="cpsteppic[]" value="">' +
						'</div>' +
						'<div class="m-flex"><textarea placeholder="请填写制作步骤与技巧，最多能输入1000个中文字符" name = "cpstep[]"  class="inptx_area" maxlength="100"></textarea></div>' +
						'<div class="fun"><span class="up"></span><span class="down"></span><span class="remove"></span><' +
						'span class="add"></span></div></div>';
					$(document).find('.add-step-box').append(str);
					$('.step-item').eq(index+lastIndex+1).find('.localImag img').attr('src',item).show();
					$('.step-item').eq(index+lastIndex+1).find('.localImag').next().attr('value',item);

					self.stepUploader1.addButton({
						id : '#pic' + self.count,
						multiple : false
					});
				}
			});
		}

		function cptDone(){
			var srcAry = [],
				box =  $('.more_cpt_box'),
				str = '',
				cptlength;

			cptlength = box.find('.cpt_item').length;

			pop.hide();
			wrap.hide();
			$('#fileList').find('.thumbnail').each(function(){
				var fileName = $(this).attr('id'),
					fileSrc = $(this).attr('data-src');
				srcAry.push(fileSrc);
			});
			fileCancel();
			$.each(srcAry,function(index,item){
				if(cptlength<8){
					str += '<div class="cpt_item">' +
						'<img src="' + item + '" alt="">' +
						'<span class="cpt_delete">删除</span>' +
						'<input type="hidden" name ="cppic[]"" value="'+item+'"></div>';
				}
				cptlength++;
			});

			if(cptlength>8) alert('更多成品图最多只能有8张哦~');
			$('.more_cpt_box').append(str);
		}
	},

	stepUploader : function(){
		var uploader = this.stepUploader1 = WebUploader.create({
			auto: true,
			swf: 'http://www.chinacaipu.com/static/20161201/upload/Uploader.swf',
			server: '/File/upload',
			pick: {
				id : '#pic1',
				multiple : false
			},
			duplicate: true,
			accept: {
				title: 'Images',
				extensions: 'gif,jpg,jpeg,bmp,png',
				mimeTypes: 'image/jpg,image/jpeg,image/png'
			}
		});

		// 再次编辑时候 如果之前图片多余5张 给他们加上upload绑定 && 把有数据的图片显示出来
		//数据回填时候的一些处理
		var step = $('.step-item'),
			self = this;

		$.each(step.find('.localImag img'),function(index,item){
			if($(this).attr('src') != '') $(this).show();
			if(index>=1){
				self.stepUploader1.addButton({
					id : '#pic' + (index+1),
					multiple : false
				});
			}
		});

		uploader.on( 'uploadStart', function( file ) {
			var choiceId = file.source.ruid,
				fileDom = $('#rt_'+choiceId).parent();
//				$('#rt_'+choiceId).css({width:"0.8rem"});
				
		});

		uploader.on( 'uploadError', function( file,response ) {
			alert(response);
		});
		uploader.on( 'uploadSuccess', function( file,response ) {
			var choiceId = file.source.ruid,
				fileDom = $('#rt_'+choiceId).parent();
				
			fileDom.find('.localImag img').attr('src',response['_raw']).show();
			fileDom.find('.webuploader-pick input').attr('value',response['_raw']);
			
		});
	},

	addStep : function(){
		var self = this,
			box = $('.add-step-box-wrap');
		$(".add-input-btn3").on('click',function(){
			
			var itemLen = box.find('.step-item').length;
			if(itemLen < 25){
				self.count++;
				var num = self.count+1;
				var str = '<div class="step-item">' +
						' <div class="margin-bottom10 bz">步骤'+self.count+'</div>'+
						'<div class="pic" id="pic'+ self.count +'">' +
						'<div class="localImag"><img src="" alt=""><span>上传步骤图片</span></div>' +
						'<input type="hidden" name="cpsteppic[]" value="">' +
						'</div>' +
						'<div class="mar_top"><h4 class="issue_content_tit">描述一下（不要超过100个字）</h4><textarea name = "cpstep[]"  class="inptx_area" ></textarea></div>' +
						'<div class="fun"><span class="up"></span><span class="down"></span><span class="remove"></span><' +
						'span class="add"></span></div></div>';
				box.find('.add-step-box').append(str);
				box.find('.step-item').last().each(function(){
					self.stepUploader1.addButton({
						id : '#pic' + self.count,
						multiple : false
					});
				})
			}else{
				 layer.open({
				    content: '最多只能添加这么多步骤哦！'
				    ,btn: '我知道了'
				  });
				return;
			}
		});
	}
};

//表单验证
var Validation = {
	init : function(){
		this.addEvent();
	},

	addEvent : function(){
		var self = this,
		submitflag = false;

		$('.new_cg').on('click',function(){
			$("#form1").unbind("submit");
			var cptitle = $('#rtitle');
			$('input[name=submitMode]').attr('value',0);
			if(cptitle.val() == ''){
				
				 layer.open({
				    content: '亲，菜名儿还没填写哟！赶紧补上吧！'
				    ,btn: '我知道了'
				  });
					
				self.scrollTo(cptitle);
				return false;
			}
		});

		$('#save_recipe').on('click',function(){
			self.removeValue();
			var subpop = $('.cp-u-news-reply'),
				submitflag = false;
			$('input[name=submitMode]').attr('value',1);
			if($('input[name=mode]').val() == 0){
				submitflag = self.wordVal();
				
			}else{
				submitflag = self.picVal();
				
			}
			if(submitflag){
				
				//subpop.show();
				//$('.balck_bg').show();
				//$('.pub-success-motel').show();
				//$('#form1').submit();
				
			}
			$("#form1").unbind("submit");
			$('#form1').submit(function(e){
				if(!submitflag){
					e.preventDefault();
				}else{
					return true;
				}	
			});
			self.addValue();
			
		});

		$('.up_pic_btn').click(function(){
			$('.balck_bg').show();
			$('.up_pic_pop').show();
		});
	},
	//处理不兼容placeholder的表单验证
	removeValue : function(){
		if(!('placeholder' in document.createElement('input'))){
			$.each($('.contentWrpa input[placeholder],.contentWrpa textarea[placeholder]'),function(index,item){
				if($(this).val() == $(this).attr('data-holder')){
					$(this).attr('value','');
				}
			})
		}
	},

	addValue : function(){
		if(!('placeholder' in document.createElement('input'))){
			$.each($('.contentWrpa input[placeholder],.contentWrpa textarea[placeholder]'),function(index,item){
				if($(this).val() == ''){
					$(this).attr('value',$(this).attr('data-holder'));
				}
			})
		}
	},

	picVal : function(){
		var self = this,
			cptitle = $('#rtitle'),
			topcpt = $('input[name=cpt]'),
			story = $('#rintro'),
			zhuliao = $('#zhuliao'),
			fuliao = $('#fuliao'),
			nandu = $('#rreadytime'),
			time = $('#rcooktime'),
			fl = $('#fl'),
			flxx = $('#flxx'),
			stepBox = $('.add-step-box'),
			rtips = $('#rtips');

		if(cptitle.val() == ''){
 			layer.open({
				    content: '亲，菜名儿还没填写哟！赶紧补上吧！'
				    ,btn: '我知道了'
				  });
					
			self.scrollTo(cptitle);
			return false;
		}

		if(topcpt.val() == ''){
			layer.open({
				    content: '亲，这道菜的成品图还忘了传哦！赶紧补上吧.'
				    ,btn: '我知道了'
				  });
			
			self.scrollTo(topcpt);
			return false;
		}

		if(nandu.val() == ''){
			layer.open({
				    content: '亲，您忘了告诉大家这道菜的难度哦。'
				    ,btn: '我知道了'
				  });
			
			self.scrollTo(nandu);
			return false;
		}

		if(time.val() == ''){
			layer.open({
				    content: '亲，您忘了告诉大家这道菜的烹饪时间。'
				    ,btn: '我知道了'
				  });
		
			self.scrollTo(time);
			return false;
		}

		if(fl.val() == ''){
				layer.open({
				    content: '亲，您忘了告诉大家这道菜的分类哦。'
				    ,btn: '我知道了'
				  });
		
			
			self.scrollTo(fl);
			return false;
		}

		if(flxx.val() == ''){
			layer.open({
				    content: '亲，您忘了告诉大家这道菜的详细分类哦。'
				    ,btn: '我知道了'
				  });
			
			self.scrollTo(flxx);
			return false;
		}

		if(story.val() == ''){
			layer.open({
				    content: '亲，难道不想为这道菜说点什么吗？'
				    ,btn: '我知道了'
				  });
			
			self.scrollTo(story);
			return false;
		}

		var zhuliaoNum = 0;

		zhuliao.find('.add-input').each(function(){
			var input1 = $(this).find('input').eq(0).val();
			var input2 = $(this).find('input').eq(1).val();
			if(input1 != '' && input2 != ''){
				zhuliaoNum++;
			}
		});

		if(zhuliaoNum < 1 ){
			layer.open({
				    content: '呀~ 食材主料忘写了或没有填写完全！'
				    ,btn: '我知道了'
				  });
			
			self.scrollTo(zhuliao);
			return false;
		}

		var fuliaoNum = 0;

		fuliao.find('.add-input').each(function(){
			var input1 = $(this).find('input').eq(0).val();
			var input2 = $(this).find('input').eq(1).val();
			if(input1 != '' && input2 != ''){
				fuliaoNum++;
			}
		});

		if(fuliaoNum < 1 ){
			self.tip('呀~ 食材辅料忘写了或没有填写完全！');
			self.scrollTo(fuliao);
			return false;
		}

		var stepNum = 0,
			stephalf = false;

		stepBox.find('.step-item').each(function(index,item){
			var imgValue = $(this).find('.localImag img').attr('src'),
				wordValue = $(this).find('.inptx_area').val();
			if((imgValue == '' && wordValue != '')||(imgValue != '' && wordValue == '')){
				stephalf = true;
			}
			if(imgValue != '' && wordValue != ''){
				stepNum++;
			}
		});

		if(stephalf){
			layer.open({
				    content: '亲，图片跟文字是一对，少了哪个步骤描述都太单薄，赶紧补上吧！~'
				    ,btn: '我知道了'
				  });
			
			self.scrollTo(stepBox);
			return false;
		}

		if(stepNum < 3 ){
			layer.open({
				    content: '亲，至少上传3个做菜步骤哦，加油！~~'
				    ,btn: '我知道了'
				  });
		
			self.scrollTo(stepBox);
			return false;
		}

		if(rtips.val() == ''){
			layer.open({
				    content: '亲，分享下你做这道菜的小窍门或者注意事项吧!'
				    ,btn: '我知道了'
				  });
		
			self.scrollTo(rtips);
			return false;
		}

		return true;
	},

	wordVal : function(){
		var self = this,
			cptitle = $('#rtitle'),
			topcpt = $('input[name=cpt]'),
			story = $('#rintro'),
			zhuliao = $('#zhuliao'),
			fuliao = $('#fuliao'),
			nandu = $('#rreadytime'),
			time = $('#rcooktime'),
			fl = $('#fl'),
			flxx = $('#flxx'),
			stepBox = $('.add-step-box'),
			rtips = $('#rtips');

		if(cptitle.val() == ''){
//			self.tip('亲，菜名儿还没填写哟！赶紧补上吧！');
			layer.open({
				    content: '亲，菜名儿还没填写哟！赶紧补上吧！'
				    ,btn: '我知道了'
				  });
			self.scrollTo(cptitle);
			return false;
		}

		if(topcpt.val() == ''){
			layer.open({
				    content: '亲，这道菜的成品图还忘了传哦！赶紧补上吧.'
				    ,btn: '我知道了'
				  });
			self.scrollTo(topcpt);
			return false;
		}

		if(nandu.val() == ''){
			layer.open({
				    content: '亲，您忘了告诉大家这道菜的难度哦。'
				    ,btn: '我知道了'
				  });
			self.scrollTo(nandu);
			return false;
		}

		if(time.val() == ''){
			layer.open({
				    content: '亲，您忘了告诉大家这道菜的烹饪时间。'
				    ,btn: '我知道了'
				  });
		
			self.scrollTo(time);
			return false;
		}

		if(fl.val() == ''){
			layer.open({
				    content: '亲，您忘了告诉大家这道菜的分类哦。'
				    ,btn: '我知道了'
				  });
		
			self.scrollTo(fl);
			return false;
		}

		if(flxx.val() == ''){
			layer.open({
				    content: '亲，您忘了告诉大家这道菜的详细分类哦。'
				    ,btn: '我知道了'
				  });
		
			self.scrollTo(flxx);
			return false;
		}

		if(story.val() == ''){
			layer.open({
				    content: '亲，难道不想为这道菜说点什么吗？'
				    ,btn: '我知道了'
				  });
		
			self.scrollTo(story);
			return false;
		}

		var zhuliaoNum = 0;

		zhuliao.find('.add-input').each(function(){
			var input1 = $(this).find('input').eq(0).val();
			var input2 = $(this).find('input').eq(1).val();
			if(input1 != '' && input2 != ''){
				zhuliaoNum++;
			}
		});

		if(zhuliaoNum < 1 ){
			layer.open({
				    content: '呀~ 食材主料忘写了或没有填写完全！'
				    ,btn: '我知道了'
				  });
			
			self.scrollTo(zhuliao);
			return false;
		}

		var fuliaoNum = 0;

		fuliao.find('.add-input').each(function(){
			var input1 = $(this).find('input').eq(0).val();
			var input2 = $(this).find('input').eq(1).val();
			if(input1 != '' && input2 != ''){
				fuliaoNum++;
			}
		});

		if(fuliaoNum < 1 ){
			layer.open({
				    content: '呀~ 食材辅料忘写了或没有填写完全！'
				    ,btn: '我知道了'
				  });
			
			self.scrollTo(fuliao);
			return false;
		}

		var stepNum = 0;

		stepBox.find('.step-item').each(function(index,item){
			var wordValue = $(this).find('.tep-item-area').val();
			if(wordValue != ''){
				stepNum++;
			}
		});

		if(stepNum < 3 ){
			layer.open({
				    content: '亲，至少上传3个做菜步骤哦，加油！~~'
				    ,btn: '我知道了'
				  });
			
			self.scrollTo(stepBox);
			return false;
		}

		if(rtips.val() == ''){
			layer.open({
				    content: '亲，分享下你做这道菜的小窍门或者注意事项吧!'
				    ,btn: '我知道了'
				  });
			
			self.scrollTo(rtips);
			return false;
		}

		return true;
	},

	scrollTo : function(dom){
		var top = dom.offset().top;
		if(top>100) top = top - 100;
		$('body').animate({
			scrollTop: top
		}, 'normal');
		$('.repcrea_box').removeClass('repcrea_box_cur');
		dom.closest('.repcrea_box').addClass('repcrea_box_cur');
	},

	tip : function(tip){
		var str = '<div class="public_elastic_layer"><dl><dt class="f14 b" style="cursor: move;"><a href="javascript://" class="ico20 popclose">&nbsp;</a><span mod="title">中国菜谱网温馨提示</span></dt><dd><p class="f14" mod="content" style="text-align:center">'+tip+'</p></dd><dd class="atn tc"><a href="javascript://" mod="sure" class="dbtn btn_green">确定</a></dd></dl></div>'
		$('.tip_pop').html(str).show();
		$('.balck_bg').show();
		$('.tip_pop').delegate('.btn_green','click',function(){
			$('.tip_pop').html('').hide();
			$('.balck_bg').hide();
		});
	}
};

PageFun.init();
Material.init();
Step.init();
stepUp.init();
Validation.init();