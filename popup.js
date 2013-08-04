$(document).ready(function () {

	chrome.storage.sync.get(['status', 'lang', 'diff'], function(data){
		$("#status").val(data.status || "off") ;
		$("#lang").val(data.lang || "ar");
		$("#diff").val(data.diff || "easy");
	});

    $('.advanced-settings-button').click(function () {
        $('.normal-settings').toggleClass('show');
        $('.advanced-settings').toggleClass('show');
    });
	
	$("#status").change(function(){
		chrome.storage.sync.set({'status': $(this).val() });
	});
	$("#lang").change(function(){
		chrome.storage.sync.set({'lang': $(this).val() });
	});
	$("#diff").change(function(){
		chrome.storage.sync.set({'diff': $(this).val() });
	});

	


});
