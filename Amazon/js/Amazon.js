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
	
	$(".depart_list>li").hover(function(){
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
	
})
