$('#btnRun').click(function () {

	$.ajax({
		url: "libs/php/getWeatherInfo.php",
		type: 'POST',
		dataType: 'json',
		data: {
			north: $('#north').val(),
			south: $('#south').val(),
			east: $('#east').val(),
			west: $('#west').val()
		},
		success: function (result) {

			console.log(result);

			if (result.status.name == "ok") {

				$('#txtWeather').html(result['data']);
			}

		},
		error: function (jqXHR, textStatus, errorThrown) {
			// your error code
		}
	});


});