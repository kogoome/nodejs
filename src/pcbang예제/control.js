function imgSnap(imgW, minW){
	var pn;
}
function getSceneOffsetTop(scene) {
	if($(scene).offset() == null) {
		return 0;
	} else {
		return $(scene).offset().top;
	}
}
$(function(){
	var topHeight;
	$(window).scroll(function(){
		var cp = $(window).scrollTop();
		if(cp < topHeight){
			$("#navi").css({"position": "absolute"});
			// $("#banner").css({"top": "124px"});
		} else {
			$("#navi").css({"position": "fixed"});
			// $("#banner").css({"top": (124-topHeight)+"px"});
		}
		$("#menu li").removeClass("on");
		if (cp >= 0 && cp < 1855){
			$(".menu01").addClass("on");
		} else if (cp >= 1855 && cp < 2737){
			$(".menu02").addClass("on");
		}
	});
	$("#menu li").each(function(i, o){
		$(o).click(function(){
			$("html, body").animate({ scrollTop: getSceneOffsetTop($("#event0"+(i+1))) }, "slow");
			return false;
		});
	});
	$("#top").click(function(){$("html, body").animate({ scrollTop: 0 }, "slow");return false;});
	
});


$(document).ready(function(){

	var imgLayer = {
		init: function() {
			this.openLayer();
		},
		openLayer: function() {
			var objWrap = $(".pcbang");
			var layerPop = objWrap.find(".layerPop");
			var btnClose = layerPop.find(".btnLayerClose");
			var btnGoodsView = objWrap.find(".btnPointList");

			layerPop.hide();

			btnGoodsView.click(function (e) {
				layerPop.show();
			});

			btnClose.click(function (e) {
				layerPop.hide();
			});

		} 
	}; imgLayer.init();

});
