//= require store/spree_frontend
$(function(){
	$("#aside").addClass("alpha");
	$("#wrapper div#content").addClass("omega");
	$("#logo").addClass("alpha");
	$("#top-nav-bar").addClass("omega");
	$('div[data-hook="product_price"]').removeClass("five").addClass("seven");
	$("#taxon-crumbs").removeClass("five").addClass("seven");
});
