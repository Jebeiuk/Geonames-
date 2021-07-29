$('#btnRun').click(function () {

	$.ajax({
		url: "libs/PHP/getElevationInfo.php",
		type: 'POST',
		dataType: 'json',
		data: {
			lat: $('#lat').val(),
			lng: $('#lng').val()
		},
		success: function (result) {

			console.log(result);

			if (result.status.name == "ok") {

				$('#txtElevation').html(result['data'][0]['elevation']);

			}

		},
		error: function (jqXHR, textStatus, errorThrown) {
			// your error code
		}
	});


});