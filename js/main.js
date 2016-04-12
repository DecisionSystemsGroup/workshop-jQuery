$(document).ready(function(){
	$(".menu-button").on("click", function (){
		$(".data-table tbody tr").hide();	//Kripsimo olwn twn grammwn
		
		var filter = $(this).data("filter");	//Apothikeush ths timhs tou filtrou pou patithike
		
		if(filter!="all"){	//Se periptosh pou theloume na ta emfanisoume ola den xriazete na prosthesoume to filtro
			var selector = ".data-table tr."+"course-"+filter;
		}
		else{
			var selector = ".data-table tr";
		}
		
		$(selector).fadeIn();	//Emfanish twn grammwn pou antistixoun sto filtro mas
		
		var title =  $(this).text();
		$("#panel-title").text(title);	//Allagh tou title
	});
});
