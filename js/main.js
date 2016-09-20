



document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is loaded and it is now safe to make calls PhoneGap methods
//
function onDeviceReady() {
    // Now safe to use the PhoneGap API
    alert('hi');
	var region = new ibeacon.Region({
		uuid: '7b44b47b-52a1-5381-90c2-f09b6838c5d4'
	});

	ibeacon.startRangingBeaconsInRegion({
		region: region,
		didRangeBeacons: function(result) {
			//console.log('I see ' + result.beacons.length + ' beacons');
			$('#count').text(result.beacons.length);
		}
	});
}

