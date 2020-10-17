$('#view-more').on('click', function(e) {
	if ($('#view-more').text() != 'Collapse') {
		$('.hidden-skill').show();
		$('#view-more').text('Collapse');
	} else {
		$('.hidden-skill').hide();
		$('#view-more').text('View More');
	}
});
