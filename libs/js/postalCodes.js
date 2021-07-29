$('#btnRun').click(function () {

	$.ajax({
		url: "libs/php/getPostalcodesInfo.php",
		type: 'POST',
		dataType: 'json',
		data: {
			postalcode:$('#postalcodes').val(),
			country:$('#country').val(),
			radius:$('#radius').val()

		},
		success: function (result) {

			console.log(result);

			if (result.status.name == "ok") {

				$('#txtPostCode').html(result['data'][0]['postcode']);
				$('#txtCountry').html(result['data'][0]['country']);
				$('#txtRadius').html(result['data'][0]['radius']);
			}

		},
		error: function (jqXHR, textStatus, errorThrown) {
			// your error code
		}
	});


});