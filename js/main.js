var setHeader = function() {
	var aux = jQuery( '.inner-header-mobile' ).height();
	
	if ( aux <= 70 ) {
		var aux = jQuery( '#dropdown-mobile' ).css('margin-top', '70px');
	}
}

jQuery( document ).ready( function () {

	setParticles();

	setHeader();

	console.log("particles loaded");

});