$(function(){
	var ione = $(".one"),
		ithe = $(".the"),
		itwo = $(".two img"),
		tthe = $(".the img");
	
	var arr = ["img/77.jpg","img/66.jpg","img/55.jpg"];
	var oarr = ["img/777.jpg","img/666.jpg","img/555.jpg"];
	itwo.each(function(i){
		$(this).click(function(){
			$(".one img").attr("src",arr[i])
			tthe.attr("src",oarr[i])
			itwo.removeClass("active")
			$(this).addClass("active")
		})
		
		ione.mousemove(function(a){
			var evt = a || window.event
			ithe.css('display','block')
			var ot = evt.clientY-($(".one").offset().top- $(document).scrollTop())-87;
			var ol = evt.clientX-($(".one").offset().left- $(document).scrollLeft())-87;
			if(ol<=0){
				ol = 0;
			}
			if(ot<=0){
				ot = 0;
			}
			if(ol>=175){
				ol=175
			}
			if(ot>=175){
				ot=175
			}
			$(".one>span").css({'left':ol,'top':ot})
			var ott = ot/350*800
			var oll = ol/350*800
			tthe.css({'left':-oll,'top':-ott})
		})
		ione.mouseout(function(){
			ithe.css('display','none')
		})
		
	})
	
	
	
	
})
