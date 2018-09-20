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
	
	
	
	//首页feedback
	$(".index_2>a").hover(function(){
		$(this).find("i").toggle();
	},function(){
		$(this).find("i").toggle();
	})
	
	//左右切换
	$(".index_3").mouseover(function(){
		$(".index_3>b").show();
	}).mouseout(function(){
		$(".index_3>b").hide();
	});
	$(".slide_l").click(function(){
		var $a=parseInt($(".slideLR").css("marginLeft"));
//		alert($a)
		if($a==0){
			return false;
		}else{
			$(".slideLR").animate({marginLeft:$a+1200+"px"},1000);
		}
	});
	$(".slide_r").click(function(){
		var $a=parseInt($(".slideLR").css("marginLeft"));
//		alert($a)
		if($a==-2400){

		}else{
			$(".slideLR").animate({marginLeft:$a-1200+"px"},1000);
		}
	})
})
