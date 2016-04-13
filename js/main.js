var lastViewed = 'Όλα τα μαθήματα';	//Arxikopoihsh tou genikou titlou
$(document).ready(function(){
	$(".menu-button").on("click", function (){
		$(".panel").hide();	//Kripsimo olwn twn panel
		$("#courses").show();	//Emfanish autou pou exei to periexomeno pou theloume
		
		$(".data-table tbody tr").hide();	//Kripsimo olwn twn grammwn
		
		var filter = $(this).data("filter");	//Apothikeush ths timhs tou filtrou pou patithike
		
		if(filter!="all"){	//Se periptosh pou theloume na ta emfanisoume ola den xriazete na prosthesoume to filtro
			var selector = ".data-table tr."+"course-"+filter;
		}
		else{
			var selector = ".data-table tr";
		}
		
		$(selector).fadeIn();	//Emfanish twn grammwn pou antistixoun sto filtro mas
		
		var title = $(this).text();
		$("#panel-title").text(title);
		lastViewed = title;	//Apothikeush tou neou titlou
	});
	
	
	$(".button-more").on("click", function(){
		$(".panel").hide();
		$("#info").show();
		
		var courseId = $(this).closest("tr").data("course-id");	//Euresh tou id tou mathimatos
		
		//Perasma periexomenou sto kathe pedio
		$("#panel-title").text(info[courseId]['name']);	
		$("#info-semester").text(info[courseId]['semester']);
		$("#info-description").text(info[courseId]['description']);
		$("#info-complete").text(info[courseId]['complete']);
		
		//Prosthikh katalilou class gia to an to mathima einai oloklhromeno
		if( info[courseId]['complete']=="Ναί" ){
			$("#info-complete").addClass("success").removeClass("fail");
		}
		else{
			$("#info-complete").addClass("fail").removeClass("success");
		}
	});
	
	$(".button-back").on("click", function(){
		$(".panel").hide();
		$("#courses").fadeIn();
		$("#panel-title").text(lastViewed);	//Antikatastash tou titlou me ton proigoumeno apothikeumeno
	});
});

//dummy data
var info =	{
		0: {
			"semester": "1o",
			"name": "Προγραμματισμός 1",
			"description": "Εξοικείωση του φοιτητή με βασικές έννοιες του προγραμματισμού.",
			"complete": "Ναί",
		},
		1: {
			"semester": "2o",
			"name": "Δομές Δεδομένων",
			"description": "Ταξινόμηση και αναζήτηση πίνακα, ουρές, στοίβες, λίστες, πίνακες κατακερματισμού, δυαδικά δέντρα αναζήτησης, ισοζυγισμένα δέντρα αναζήτησης, σωροί, ταξινόμηση σωρού, αναπαράσταση γράφων, διάτρεξη γράφων.",
			"complete": "Όχι",
		},
		2: {
			"semester": "3o",
			"name": "Λειτουργικά συστήματα",
			"description": "Το μάθημα αποσκοπεί, αρχικά, στην παρουσίαση των βασικών στοιχείων των Λειτουργικών Συστημάτων, στην ανάδειξη των διαφορών τους και στην παρουσίαση των παιτουμένων υπηρεσιών των χρηστών από τα σύγχρονα Λειτουργικά Συστήματα.",
			"complete": "Όχι",
		},
		3: {
			"semester": "5o",
			"name": "Τεχνολογία Λογισμικού",
			"description": "Εξοικείωση ακόμη καλύτερα με την ανάπτυξη λογισμικού μέσω της χρήσης γλωσσών αντικειμενοστραφούς σχεδίασης συστημάτων, όπως η UML.",
			"complete": "Ναί",
		}
}