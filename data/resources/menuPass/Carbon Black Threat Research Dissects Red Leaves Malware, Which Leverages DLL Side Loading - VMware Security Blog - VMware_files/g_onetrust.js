var ot_inx=0;
function getCookieOneTrust(c_name) {
  if (document.cookie.length>0) {
	c_start=document.cookie.indexOf(c_name + "=");
	if (c_start!=-1) {
	  c_start=c_start + c_name.length+1;
	  c_end=document.cookie.indexOf(";",c_start);
	  if (c_end==-1) {c_end=document.cookie.length;}
		return unescape(document.cookie.substring(c_start,c_end));
	}
  }
  return "";
}

//  Onetrust call back
function contentManageOneTrust(cat_list,html_content,content_type,obj_id){	
	if( document.cookie.indexOf("OptanonConsent")>-1&& getCookieOneTrust("OptanonConsent").indexOf("groups=")>-1){
		
		var cat_list = cat_list.split(",");
		var cat_flag=true;
		
		jQuery.each(cat_list, function( index, value ) {
			if( getCookieOneTrust("OptanonConsent").indexOf(value)===-1 ){
				cat_flag=false;
				return false;
			}
		});
		
		if(cat_flag){
			jQuery(html_content).insertBefore(obj_id);
		}else{
			if(content_type=="widget")
				jQuery("<div class=\"ot_content_block\">PLEASE ENABLE COOKIES BELOW TO VIEW.</div>").insertBefore(obj_id);	
		}
		jQuery(obj_id).remove();
	}else{
		setTimeout(function(){ contentManageOneTrust(cat_list, html_content, content_type, obj_id); },1000);
	}
}


function appendContentOneTrust(cat_list,html_content,content_type){
	ot_inx++;
	document.write("<div id=\"ot_content_"+ot_inx+"\"></div>");
	contentManageOneTrust(cat_list,html_content,content_type,"#ot_content_"+ot_inx);
}

