function getLocation()
{
	if (navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(showPosition);
	}
	else{alert("Geolocation is not supported by this browser.");}
}
function showPosition(position)
{
//	alert("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
}
function opentab($setting)
{
	if($setting == 1) {
		var newUrl = "https://sakai.rutgers.edu";
		var newUrl2 = "https://www.youtube.com";
		var newUrl3 = "http://www.hackerleague.com";
		chrome.tabs.query({'active': true}, function(tabs) {
	    chrome.tabs.create({url: newUrl});
	    chrome.tabs.create({url: newUrl2});
	    chrome.tabs.create({url: newUrl3});
	  	});
	}
	if($setting == 2) {
		var newUrl = "http://www.hackru.org";
		var newUrl2 = "http://usacs.rutgers.edu";
		var newUrl3 = "https://www.facebook.com";
		chrome.tabs.query({'active': true}, function(tabs) {
	    chrome.tabs.create({url: newUrl});
	    chrome.tabs.create({url: newUrl2});
	    chrome.tabs.create({url: newUrl3});
	  	});
	}
	if($setting == 3) {
		var newUrl = "http://reddit.com/r/rutgers";
		var newUrl2 = "https://www.xkcd.com";
		var newUrl3 = "https://www.github.com/davidfu92";
		chrome.tabs.query({'active': true}, function(tabs) {
	    chrome.tabs.create({url: newUrl});
	    chrome.tabs.create({url: newUrl2});
	    chrome.tabs.create({url: newUrl3});
	  	});
	}

}
getLocation();
var date = new Date();
var sec = date.getSeconds();
if(sec%5==0) {
	opentab(3);
}else if(sec%7==0) {
	opentab(2);
} else {
	opentab(1);
}
