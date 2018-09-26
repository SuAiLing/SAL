$(function(){
	$(".try").hover(function(){
		$(this).find(".TryPrime_hide").show();
	},function(){
		$(this).find(".TryPrime_hide").hide();
	});
	$(".search_all").click(function(){
		$(".search_hide").toggle();
	})
	$(".search_hide").hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	})
	
//	$(".department").popover({placement:'bottom'});

//department下拉菜单
	$(".department").hover(function(){
		$(this).find(".department_hide").toggle();
	},function(){
		$(this).find(".department_hide").hide();
	})
	
	$(".department_hide>ul").hover(function(){
		$(this).parent().show();
	},function(){
		$(this).parent().hide();
	})
	
	$(".depart_list li").hover(function(){
		$(this).addClass("department_hide_chg");
	},function(){
		$(this).removeClass("department_hide_chg");
	})
	
	
	//department下拉菜单
	$(".li_hide").hover(function(){
		$(this).find(".depart_li_hide").show();
	},function(){
		$(this).find(".depart_li_hide").hide();
	})
	
	
	$(".EN_hide_primary").mouseleave(function(){
		$(this).parent().hide();
	})
	$(".signIn_hide_primary").mouseleave(function(){
		$(this).parent().hide();
	})
	
	$(".R_try_hide_content").mouseleave(function(){
		$(this).parent().parent().hide();
	})
	
	//语言切换
	$(".global").hover(function(){
		$(this).find(".EN_hide").show();
	},function(){
		$(this).find(".EN_hide").hide();
	})
	//头部登录
	$(".sign_in").hover(function(){
		$(this).find(".signIn_hide").show();
	},function(){
		$(this).find(".signIn_hide").hide();
	})
	
	//try_prime显示
	$(".try_prime").hover(function(){
		$(this).find(".R_try_hide").show();
	},function(){
		$(this).find(".R_try_hide").hide();
	})
	//
	
	
	//首页feedback
	$(".index_2>a").hover(function(){
		$(this).find("i").toggle();
	},function(){
		$(this).find("i").toggle();
	})
	
	//各种feedback
	$(".msg_feedback>a").hover(function(){
		$(this).find("i").toggle();
	},function(){
		$(this).find("i").toggle();
	})
	
	
	//左右切换
	$(".index_scroll").mouseover(function(){
		$(this).find("b").show();
	}).mouseout(function(){
		$(this).find("b").hide();
	});
	
	 $('.slide_l').click(function () {
     	var $b = parseInt($(this).parent().scrollLeft());
//		     	alert($b)
     	if ($b == 0) {
     		return false;
     	} else{
     		$(this).parent().animate({scrollLeft: $b-1233+"px"},500);	
     	}
//		     	 event.stopPropagation();
    });
    $('.slide_r').click(function () {
    	var $b = parseInt($(this).parent().scrollLeft());
//		    	alert($b)
    	if ($b == 2434) {
    		 return false;
    	} else{
    		$(this).parent().animate({scrollLeft: $b+1233+"px"},500);
    	}
    });
	$(".slideLR>ul li").hover(function(){
		$(this).find("button").show();
	},function(){
		$(this).find("button").hide();
	})
	
	
	//index_5的点击切换
	$(".index5_r_l").click(function(){
		var $a=parseInt($(".index_5_r>div").css("marginLeft"));
//		alert($a)
		if ($a == 0) {
    		 return false;
    	} else{
    		$(".index_5_r>div").animate({marginLeft:$a+150+"px"},500);
    	}
	})
	$(".index5_r_r").click(function(){
		var $a=parseInt($(".index_5_r>div").css("marginLeft"));
//		alert($a)
		if ($a == -450) {
    		 return false;
    	} else{
    		$(".index_5_r>div").animate({marginLeft:$a-150+"px"},500);
    	}
	})
	
	//注册
	//箭头
	$(".register_content>h6:nth-of-type(2) a").hover(function(){
		$(this).find("img").toggle();
	},function(){
		$(this).find("img").toggle();
	})
	//点击框
	$(".register_content>ul input").click(function(){
		$(this).css({"border":" 1px #e77600 solid","box-shadow": "0px 0px 5px #e77600"});
	}).blur(function(){
		$(this).css({"border":" 1px #949494 solid","box-shadow": "0px 0px 5px transparent"})	
	})
	//详情页
	$(".input_chg").click(function(){
		$(this).css({"border":" 1px #e77600 solid","box-shadow": "0px 0px 5px #e77600"});
	}).blur(function(){
		$(this).css({"border":" 1px #949494 solid","box-shadow": "0px 0px 5px transparent"})	
	})
	
	
	//购物车
	$(".r_left").click(function(){
//		if($(this).parent().find(".viewed_list").css("display","none")){
//			$(this).parent().find(".viewed_list").show();
//		}else{
//			$(this).parent().find(".viewed_list").hide();
//		}
		$(this).parent().find(".viewed_list").toggle();
	})
	$(".r_right").click(function(){
		$(this).parent().find(".viewed_list").toggle();
	})
	//结算
	
	var $sum=0;
	var $cart_sum=$(".cart_sum").text();
	$(".count_select").change(function(){
		var $count=$(this).find("option:selected").text();
		$(".cart_count").text($count);
		$(".head_count").text($count);
//		alert($(this).find("option:selected").text());
		$sum= $count*$cart_sum;
//		alert($sum)
		$(".cart_sum").text($sum.toFixed(2));
		$(".cartR_sum").text($sum.toFixed(2));
		$(".cartR_count").text($count);
	})
	$(".cart_del").click(function(){
		
	})
})




