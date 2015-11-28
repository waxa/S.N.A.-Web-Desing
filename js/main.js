var setHeader = function() {
	var aux = jQuery( '#mobile-header .inner-header' ).height();
	
	if ( aux <= 70 ) {
		var aux = jQuery( '#dropdown-mobile' ).css('margin-top', '70px');
	}
}

jQuery( document ).ready( function () {

	if ( jQuery( 'header#desktop-header' ).css( 'display' ) == 'none' ) {
		setParticles('particles-mobile-js');
	} else {
		setParticles('particles-js');
	}

	setHeader();

	console.log("particles loaded");

});