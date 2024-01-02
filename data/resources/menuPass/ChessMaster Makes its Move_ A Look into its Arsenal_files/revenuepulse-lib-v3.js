//cookie helper function
jQuery.saCookie = function(options) {
	var settings = jQuery.extend({
		name: "",
		value: "",
		expiry: "",
		path: "",
		domain: ""
	}, options);

	if(settings.name == "") {
		return "error, no name specified";
	}

	if(settings.value == "") {
		//get cookie
		if(document.cookie.length > 0) {
			c_start = document.cookie.indexOf(settings.name + "=");
			if (c_start != -1) {
				c_start = c_start + settings.name.length + 1;
				c_end = document.cookie.indexOf(";", c_start);
				if (c_end == -1) c_end = document.cookie.length;
				return unescape(document.cookie.substring(c_start, c_end));
			}
			return "";
		}
		return "";
	} else {
		//set cookie
		var exdate = new Date();
		exdate.setTime(exdate.getTime() + parseInt(settings.expiry));
		document.cookie = settings.name + "=" + escape(settings.value) + ((settings.expiry == "") ? "" : ";expires=" + exdate.toUTCString()) + ";domain=" + ((settings.domain == "") ? "" : settings.domain) + ";path=" + ((settings.path == "") ? "/" : settings.path);
		return settings.value;
	}
}

//set the query string for the session to the full query string
if(!jQuery.saCookie({name: "querystring"})) {
	jQuery.saCookie({name: "querystring", value: location.search.substring(1), domain: ".trendmicro.com"});
}

//form population

jQuery( document ).ready(function() {
	
	if (typeof(MktoForms2) != 'undefined'){
		MktoForms2.whenReady(function (form){

			if(jQuery("form").length > 0) {
				
				if(jQuery("input[name=querystring]").length > 0) {
					jQuery("input[name=querystring]").val(jQuery.saCookie({name: "querystring"}));
				} else {
					form.addHiddenFields({"querystring":jQuery.saCookie({name: "querystring"})});
				}
			}
		});
	}	
});