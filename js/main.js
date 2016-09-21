



document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is loaded and it is now safe to make calls PhoneGap methods
//
function onDeviceReady() {
    // Now safe to use the PhoneGap API
    StatusBar.hide();

	var region = new cordove.plugins.ibeacon.Region({
		uuid: '7B44B47B-52A1-5381-90C2-F09B6838C5D4'
	});

	ibeacon.startRangingBeaconsInRegion({
		region: region,
		didRangeBeacons: function(result) {
			//console.log('I see ' + result.beacons.length + ' beacons');
			alert('found');
			$('#count').text(result.beacons.length);
		}
	});




}

