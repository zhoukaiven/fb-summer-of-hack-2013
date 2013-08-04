$(document).ready(function () {
	chrome.storage.sync.get(['status', 'volume', 'lang', 'diff'], function(data){
		data.status = data.status ? data.status : "on";
		$("#status").val(data.status);
		chrome.storage.sync.set({'status' : data.status})

		data.lang = data.lang ? data.lang : "ar";
		$("#lang").val(data.lang);
		chrome.storage.sync.set({'lang' : data.lang})

        data.volume = data.volume ? data.volume : "0";
		$("#volume").val(data.volume);
		chrome.storage.sync.set({'volume' : data.volume})

		data.diff = data.diff ? data.diff : "1";
		$("#diff").val(data.diff);
		chrome.storage.sync.set({'diff' : data.diff})
	});

    $('.advanced-settings-button').click(function () {
        $('.normal-settings').toggleClass('show');
        $('.advanced-settings').toggleClass('show');
    });

	$("#status").change(function(){
		chrome.storage.sync.set({'status': $(this).val() });
		chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
			chrome.tabs.reload(tabs[0]['id']);
		});
	});
	$("#lang").change(function(){
		chrome.storage.sync.set({'lang': $(this).val() });
		chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
			chrome.tabs.reload(tabs[0]['id']);
		});
	});
    $("#volume").change(function(){
    	chrome.storage.sync.set({'volume': $(this).val() });
    	chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    		chrome.tabs.reload(tabs[0]['id']);
    	});
	});
	$("#diff").change(function(){
		chrome.storage.sync.set({'diff': $(this).val() });
		chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
			chrome.tabs.reload(tabs[0]['id']);
		});
	});

});
