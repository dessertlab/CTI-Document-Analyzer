var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

window.__adroll||(function(){function l(){this.exp=8760;this.eexp=720;this.pv=1E11*Math.random();this.__adc="__ar_v4";this._nad=0;this._lce=null;this._loaded=this._broken=!1;this._url=2E3;this._kwl=300;this._r={};this._logs=[];this.consent_networks={facebook:"f",linkedin:"linkedin"};for(var a=Array(4),b=0;b<a.length;b++)a[b]=(Math.round(1E11*Math.random()).toString(16)+Array(9).join("0")).substr(0,8);this._set_global("adroll_sid",a.join(""))};l.prototype.load_consent_banner=function(){this.add_script_element("s.adroll.com/j/consent.js")};l.prototype.get_consent_params=function(){return this.get("__adroll_consent_params")};l.prototype.set_consent_params=function(a){this.set("__adroll_consent_params",a)};l.prototype.clear_consent_params=function(){this.del("__adroll_consent_params")};l.prototype.handle_null_consent=function(a){a||((a=this.get_consent_params())?this.call_consent_write(a):this.load_consent_banner())};
l.prototype.show_post_consent_message=function(a){var b=this.get("__adroll_post_consent_html"),c=this.get("__adroll_post_consent_css");if(b&&"boolean"!==typeof a){a=window.document.createElement("style");a.setAttribute("type","text/css");a.textContent=c;window.document.head.appendChild(a);c=document.createElement("div");c.innerHTML=b;window.document.body.appendChild(c.firstChild);var d=window.document.getElementById("adroll_consent_banner");setTimeout(function(){try{d.classList.add("hidden")}catch(a){d.className+=
" hidden"}},100);window.document.getElementById("adroll_post_consent_message_close").addEventListener("click",function(){d.parentNode.removeChild(d)});window.document.getElementById("adroll_post_consent_text").addEventListener("click",function(){window.open("https://web.archive.org/web/20181008161629/http://d.adroll.com/consent/choices","_blank")});this.del("__adroll_post_consent_css");this.del("__adroll_post_consent_html")}};
l.prototype.set_consent=function(a,b,c){this.show_post_consent_message(a);if(0===arguments.length){if(!this._has_global("__adroll_consent"))return;a=this._global("__adroll_consent")}this._set_global("__adroll_consent",a);this._set_global("__adroll_consent_is_gdpr",c);if(null===a)this.handle_null_consent(b);else if(b||this.clear_consent_params(),!1!==a){var d=this.tpc_callback();d&&d.call(this)}};l.prototype.cookieEnabled=function(a){if(this._global("adroll_ext_network")||this._global("adroll_optout")||this._broken)return!1;if(2<=this._nad||a)return this._lce;this.set("_te_","1");return"1"===this.get("_te_")?(this.del("_te_"),0<this._nad&&!this.get(this.__adc)?this._lce=!1:this._lce=!0):this._lce=!1};
l.prototype.get=function(a){var b=window.document.cookie;if(null===b)return this._broken=!0,null;var c;0>b.indexOf(a+"=")?b=null:(a=b.indexOf(a+"=")+a.length+1,c=b.indexOf(";",a),-1===c&&(c=b.length),b=b.substring(a,c),b=""===b?null:window.unescape(b));return b};
l.prototype.set=function(a,b,c){var d;c&&"number"===typeof c?(d=new Date,d.setTime(d.getTime()+36E5*c),c=d.toGMTString(),c="; expires="+c):c="";d="; domain="+window.location.hostname;b=window.escape(b);window.document.cookie=a+"="+b+c+"; path=/"+d};l.prototype.del=function(a){this.set(a,"",-8760)};
l.prototype.check_cookie=function(a,b){if(this._global("adroll_ext_network")||this._global("adroll_optout"))return"";for(var c=a.split("|"),d=c.length-1;0<=d;d--)if(c[d]){var h=c[d].split(":");b===h[0]&&(h[2]=""+(parseInt(h[2])+1),c[d]=h.join(":"))}return c.join("|")};l.prototype.handle=function(a){var b=this.get(this.__adc)||"";-1!==b.indexOf(a)?this.set(this.__adc,this.check_cookie(b,a),this.exp):(a=[b,[a,this.get_date(this.eexp),"1"].join(":")].join("|"),this.set(this.__adc,a,this.exp))};
l.prototype.expire_old=function(){if(!this._global("adroll_ext_network")&&!this._global("adroll_optout")){for(var a=this.get_date(!1),b=this.get(this.__adc),b=b?b.split("|"):[""],c=[],d=b.length-1;0<=d;d--)b[d]&&b[d].split(":")[1]>a&&c.push(b[d]);this.set(this.__adc,c.join("|"),this.exp)}};l.prototype.get_date=function(a){var b=new Date;a&&b.setTime(b.getTime()+36E5*a);a=""+b.getUTCFullYear();var c=b.getUTCMonth(),c=10<=c?c:"0"+c,b=b.getUTCDate();return[a,c,10<=b?b:"0"+b].join("")};
l.prototype.consent_allowed=function(a){var b=this._global("__adroll_consent");return"object"===typeof b?b[a]:b};l.prototype.generate_link=function(){return""};l.prototype.view=function(a){var b=new window.Image;b.src=this._srv("/view/"+a);b.setAttribute("width","1");b.setAttribute("height","1");b.setAttribute("border","0");this._head().appendChild(b)};l.prototype.set_cookie=function(){};
l.prototype.reset=function(){this._set_global("adroll_c_id",null);this._set_global("adroll_url_macro","");this._set_global("adroll_c_macro","");this._set_global("adroll_cpm_macro","");this._set_global("adroll_ext_network",null);this._set_global("adroll_subnetwork",null);this._set_global("adroll_ad_payload",null);this._set_global("adroll_win_notif",null)};l.prototype.set_pixel_cookie=function(a,b,c){this._global("adroll_optout")||(this.handle(a),this.handle(b),this.handle(c),this.pixel_loaded())};
l.prototype.add_pixel_load_callback=function(a){this._loaded?a():this._ensure_global("adroll_callbacks",[]).push(a)};l.prototype.pixel_loaded=function(){this._loaded=!0;for(var a=this._ensure_global("adroll_callbacks",[]),b=0;b<a.length;b++)a[b].called||(a[b](),a[b].called=!0)};l.prototype.addLoadEvent=function(a){if(this._has_global("__adroll_loaded")&&this._global("__adroll_loaded")||this._has_global("_adroll_ie")&&this._global("_adroll_ie")||/msie/i.test(window.navigator.userAgent))return a();if(/WebKit/i.test(window.navigator.userAgent)){var b=window.setInterval(function(){/loaded|complete/.test(window.document.readyState)&&window.clearInterval(b);a()},10);return null}var c=window.onload;window.onload=function(){a();c&&c()}};
l.prototype._head=function(){return(window.document.getElementsByTagName("head")||[null])[0]||(window.document.getElementsByTagName("body")||[null])[0]||window.document.getElementsByTagName("script")[0].parentNode};l.prototype.is_under_experiment=function(){var a=this._global("adroll_adv_id");return 0<=["ADV_EID","3QOM4TKN4RD7TO3HCPYRKV","RR6VELGGEBBKZEEQ2FK34E","VIDRP27DERDLPD5BI427XM"].indexOf(a)};l.prototype.external_data_to_qs=function(a){var b=[],c=this.get_external_data();if(!c)return null;for(var d in c)c.hasOwnProperty(d)&&this._is_defined(c[d])&&null!==c[d]&&b.push(this.normalize_var(window.escape(""+d)+"="+window.escape(""+c[d]),!1));b=b.join("&");a&&(b=window.escape(b));return"adroll_external_data="+b};
l.prototype.replace_external_data=function(a){var b=this.get_external_data(),c=this.get_conversion_value(),d=null,h;if(b)for(h in b)b.hasOwnProperty(h)&&(d=new RegExp("\\["+h+"\\]","gi"),a=a.replace(d,b[h]),d=new RegExp("\\["+h+"_ESC\\]","gi"),a=a.replace(d,window.escape(b[h])));if(c)for(h in c)c.hasOwnProperty(h)&&(d=new RegExp("\\["+h+"\\]","gi"),a=a.replace(d,c[h]),d=new RegExp("\\["+h+"_ESC\\]","gi"),a=a.replace(d,window.escape(c[h])));return a};
l.prototype.get_external_data=function(){if(this._has_global("adroll_custom_data")){var a=this._global("adroll_custom_data"),b={},c;for(c in a)a.hasOwnProperty(c)&&"undefined"!==a[c]&&(b[c.toLowerCase()]=a[c]);return b}return null};
l.prototype.get_conversion_value=function(){var a=this._ensure_global("adroll_currency",null),b=this._ensure_global("adroll_conversion_value",null),c=this._ensure_global("adroll_conversion_value_in_dollars",null);return b?{conv_value:""+b,currency:a}:c?{conv_value:""+parseInt(100*c),currency:"USC"}:null};l.prototype._has_global=function(a){return this._is_defined(this._global(a))};l.prototype._global=function(a){return window[a]};l.prototype._set_global=function(a,b){window[a]=b};l.prototype._unset_global=function(a){delete window[a]};l.prototype._ensure_global=function(a,b){this._has_global(a)||this._set_global(a,b);return this._global(a)};l.prototype.jsonStringify=function(a){this.jsonStringifyFunc||this.initJsonStringify();return this.jsonStringifyFunc(a)};l.prototype.jsonParse=function(a){var b=this._global("JSON");return"function"===typeof b.parse?b.parse(a):eval("("+a+")")};
l.prototype.initJsonStringify=function(){var a=this._global("JSON");this.jsonStringifyFunc=a||a.stringify&&"function"===typeof a.stringify?a.stringify:function(){function a(b){return h[b]||"\\u"+(b.charCodeAt(0)+65536).toString(16).substr(1)}var c=Object.prototype.toString,d=Array.isArray||function(a){return"[object Array]"===c.call(a)},h={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"},n=/[\\"\u0000-\u001F\u2028\u2029]/g;return function q(k){if(null===k)return"null";
if("number"===typeof k)return isFinite(k)?k.toString():"null";if("boolean"===typeof k)return k.toString();if("object"===typeof k){if("function"===typeof k.toJSON)return q(k.toJSON());if(d(k)){for(var e="[",g=0;g<k.length;g++)e+=(g?", ":"")+q(k[g]);return e+"]"}if("[object Object]"===c.call(k)){e=[];for(g in k)k.hasOwnProperty(g)&&e.push(q(g)+": "+q(k[g]));return"{"+e.join(", ")+"}"}}return'"'+k.toString().replace(n,a)+'"'}}()};l.prototype.macro_values=function(){var a=this._ensure_global("adroll_cpm_macro",null),b=this._ensure_global("adroll_url_macro",null),c=this._ensure_global("adroll_c_macro",null),d=this._ensure_global("adroll_subnetwork",null),h=this._ensure_global("adroll_ad_payload",null),n=this._ensure_global("adroll_win_notif",null),p=this._ensure_global("adroll_rtb_dict",null),q={r:/^\$\{.*\}$/i,g:/^%%.*%%$/i,b:/^\[.*\]$/i,x:/^\$\{.*\}$/i,t:/INSERTCLICKTRACKER/}[this._global("adroll_ext_network")],q=this._is_defined(q)?
q:/CANNOT_MATCH_THIS/,k={};a&&!q.test(a)&&(k.adroll_cpm_macro=a);b&&!q.test(b)&&(k.adroll_url_macro=b);c&&!q.test(c)&&(k.adroll_c_macro=c);d&&!q.test(d)&&(k.adroll_subnetwork=d);h&&!q.test(h)&&(k.adroll_ad_payload=h);n&&!/^[|$]/.test(n)&&(k.adroll_win_notif=n);if(p&&("string"!==typeof p||!/^[|$]/.test(p))){if("string"===typeof p)try{0===p.indexOf("b64:")&&(p=atob(p.substr(4))),p=this.jsonParse(p)}catch(e){this.log("failed to parse: "+e),p={}}"object"===typeof p&&(k.adroll_rtb_dict=p)}return k};
l.prototype.format_macros=function(a,b,c,d){return this.macro_url_params(this.macro_values(),a,b,c,d)};
l.prototype.macro_url_params=function(a,b,c,d,h){h=this._is_defined(h)?h:!1;var n=d?window.escape:function(a){return a},p=a.adroll_cpm_macro,q=a.adroll_url_macro,k=c?a.adroll_c_macro:null,e=[],g=b?this.parseUri(b):null,g=g?this.endswith(g.path,".tp"):!1;!g&&h&&e.push(["desturl",""]);k&&0===k.indexOf("http")?(h=n,"g"===this._global("adroll_ext_network")&&(h=d?function(a){return a}:window.unescape),e.push(["clickurl",h(k)])):g&&h&&e.push(["clickurl",""]);this._global("adroll_ext_network")&&e.push(["adroll_network",
this._global("adroll_ext_network")]);p&&e.push(["cpm",p]);a.adroll_subnetwork&&e.push(["adroll_subnetwork",a.adroll_subnetwork]);a.adroll_ad_payload&&e.push(["adroll_ad_payload",a.adroll_ad_payload]);q&&(a=this.parseUri(window.unescape(q)),e.push(["site_url",n("http://"+a.host)]),c&&(e.push(["adroll_width",n(this._global("adroll_width"))]),e.push(["adroll_height",n(this._global("adroll_height"))])));this.log("Macros found "+this.serialize(e));return b?this.buildurl(b,e):this.serialize(e)};
l.prototype.serialize=function(a){if(a.length){for(var b=[],c=a.length-1;0<=c;c--)b.push(a[c].join("="));return b.join("&")}return""};l.prototype.endswith=function(a,b){return-1!==a.indexOf(b,a.length-b.length)};l.prototype.buildurl=function(a,b){var c=this.serialize(b),d=a.indexOf("?");return c?d===a.length-1?a+c:-1!==d?"&"===a[a.length-1]?a+c:a+"&"+c:a+"?"+c:a};l.prototype.md5=function(){function a(a,b){var c=(a&65535)+(b&65535);return(a>>16)+(b>>16)+(c>>16)<<16|c&65535}function b(b,c,d,g,f,m){c=a(a(c,b),a(g,m));return a(c<<f|c>>>32-f,d)}function c(a,c,d,g,f,m,h){return b(c&d|~c&g,a,c,f,m,h)}function d(a,c,d,g,f,m,h){return b(c&g|d&~g,a,c,f,m,h)}function h(a,c,d,g,f,h,n){return b(d^(c|~g),a,c,f,h,n)}function n(n,k){var e=n[0],g=n[1],f=n[2],m=n[3],e=c(e,g,f,m,k[0],7,-680876936),m=c(m,e,g,f,k[1],12,-389564586),f=c(f,m,e,g,k[2],17,606105819),g=c(g,f,m,e,k[3],
22,-1044525330),e=c(e,g,f,m,k[4],7,-176418897),m=c(m,e,g,f,k[5],12,1200080426),f=c(f,m,e,g,k[6],17,-1473231341),g=c(g,f,m,e,k[7],22,-45705983),e=c(e,g,f,m,k[8],7,1770035416),m=c(m,e,g,f,k[9],12,-1958414417),f=c(f,m,e,g,k[10],17,-42063),g=c(g,f,m,e,k[11],22,-1990404162),e=c(e,g,f,m,k[12],7,1804603682),m=c(m,e,g,f,k[13],12,-40341101),f=c(f,m,e,g,k[14],17,-1502002290),g=c(g,f,m,e,k[15],22,1236535329),e=d(e,g,f,m,k[1],5,-165796510),m=d(m,e,g,f,k[6],9,-1069501632),f=d(f,m,e,g,k[11],14,643717713),g=d(g,
f,m,e,k[0],20,-373897302),e=d(e,g,f,m,k[5],5,-701558691),m=d(m,e,g,f,k[10],9,38016083),f=d(f,m,e,g,k[15],14,-660478335),g=d(g,f,m,e,k[4],20,-405537848),e=d(e,g,f,m,k[9],5,568446438),m=d(m,e,g,f,k[14],9,-1019803690),f=d(f,m,e,g,k[3],14,-187363961),g=d(g,f,m,e,k[8],20,1163531501),e=d(e,g,f,m,k[13],5,-1444681467),m=d(m,e,g,f,k[2],9,-51403784),f=d(f,m,e,g,k[7],14,1735328473),g=d(g,f,m,e,k[12],20,-1926607734),e=b(g^f^m,e,g,k[5],4,-378558),m=b(e^g^f,m,e,k[8],11,-2022574463),f=b(m^e^g,f,m,k[11],16,1839030562),
g=b(f^m^e,g,f,k[14],23,-35309556),e=b(g^f^m,e,g,k[1],4,-1530992060),m=b(e^g^f,m,e,k[4],11,1272893353),f=b(m^e^g,f,m,k[7],16,-155497632),g=b(f^m^e,g,f,k[10],23,-1094730640),e=b(g^f^m,e,g,k[13],4,681279174),m=b(e^g^f,m,e,k[0],11,-358537222),f=b(m^e^g,f,m,k[3],16,-722521979),g=b(f^m^e,g,f,k[6],23,76029189),e=b(g^f^m,e,g,k[9],4,-640364487),m=b(e^g^f,m,e,k[12],11,-421815835),f=b(m^e^g,f,m,k[15],16,530742520),g=b(f^m^e,g,f,k[2],23,-995338651),e=h(e,g,f,m,k[0],6,-198630844),m=h(m,e,g,f,k[7],10,1126891415),
f=h(f,m,e,g,k[14],15,-1416354905),g=h(g,f,m,e,k[5],21,-57434055),e=h(e,g,f,m,k[12],6,1700485571),m=h(m,e,g,f,k[3],10,-1894986606),f=h(f,m,e,g,k[10],15,-1051523),g=h(g,f,m,e,k[1],21,-2054922799),e=h(e,g,f,m,k[8],6,1873313359),m=h(m,e,g,f,k[15],10,-30611744),f=h(f,m,e,g,k[6],15,-1560198380),g=h(g,f,m,e,k[13],21,1309151649),e=h(e,g,f,m,k[4],6,-145523070),m=h(m,e,g,f,k[11],10,-1120210379),f=h(f,m,e,g,k[2],15,718787259),g=h(g,f,m,e,k[9],21,-343485551);n[0]=a(e,n[0]);n[1]=a(g,n[1]);n[2]=a(f,n[2]);n[3]=
a(m,n[3])}var p="0123456789abcdef".split("");return function(a){var b=a;/[\x80-\xFF]/.test(b)&&(b=unescape(encodeURI(b)));var c=b.length;a=[1732584193,-271733879,-1732584194,271733878];var d;for(d=64;d<=b.length;d+=64){for(var f=b.substring(d-64,d),h=[],r=void 0,r=0;64>r;r+=4)h[r>>2]=f.charCodeAt(r)+(f.charCodeAt(r+1)<<8)+(f.charCodeAt(r+2)<<16)+(f.charCodeAt(r+3)<<24);n(a,h)}b=b.substring(d-64);f=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(d=0;d<b.length;d++)f[d>>2]|=b.charCodeAt(d)<<(d%4<<3);f[d>>2]|=
128<<(d%4<<3);if(55<d)for(n(a,f),d=0;16>d;d++)f[d]=0;f[14]=8*c;n(a,f);for(b=0;b<a.length;b++){c=a;d=b;f=a[b];h="";for(r=0;4>r;r++)h+=p[f>>8*r+4&15]+p[f>>8*r&15];c[d]=h}return a.join("")}}();l.prototype._gurl=function(){var a=window.location;return this.normalize_url(a.pathname+a.search)};l.prototype.get_dummy_product_for_facebook=function(a){return{product_id:"adroll_dummy_product",product_group:a,product_action:null,product_category:null}};l.prototype.facebook_dummy_product_enabled=function(){return!0};
l.prototype.extract_pid=function(a,b,c){function d(a){return a?(a=new RegExp(a,"gi"),!!a.exec(k)):null}a||(a={});var h=null,n=null,p=null,q=null,k=this._gurl(),e=this.get_external_data();e&&(n=e.product_id,h=e.product_group,p=e.product_action,q=e.adroll_product_category_id);if(!n&&a.regexp_group&&!("string"===a.regexp_group&&a.regexp_group instanceof String)&&"html"===a.regexp_group.scheme){if(d(a.blacklist_regexp)||!0!==d(a.regexp))return"";n=this.get_product_id_from_dom(a.regexp_group)}else if(!n){if(d(a.blacklist_regexp))return"";
n=this.get_product_id_from_url(k,a.regexp,a.regexp_group)}h||!a.product_group_group||"string"===a.product_group_group&&a.product_group_group instanceof String||"html"!==a.product_group_group.scheme?h||a.product_group_regexp&&(h=this.get_product_id_from_url(k,a.product_group_regexp,a.product_group_group)):h=this.get_product_id_from_dom(a.product_group_group);if(n)a={product_id:n,product_group:h,product_action:p,product_category:q};else if(this.facebook_dummy_product_enabled()&&"facebook"===b)a=this.get_dummy_product_for_facebook(h);
else return null;c&&c(a);return a};
l.prototype.get_pid=function(a){this.extract_pid(a,"adroll",function(a){if(a){var c=a.product_id,d=a.product_group,h=a.product_action,n=a.product_category;a=[];var p;if(c instanceof Array)for(p=0;p<c.length;p++)a.push(["adroll_product_id",this.normalize_var((c[p]+"").toLowerCase(),!0)]);else a.push(["adroll_product_id",this.normalize_var((c+"").toLowerCase(),!0)]);if(n instanceof Array)for(p=0;p<n.length;p++)a.push(["adroll_product_category_id",this.normalize_var((n[p]+"").toLowerCase(),!0)]);else n&&
a.push(["adroll_product_category_id",this.normalize_var((n+"").toLowerCase(),!0)]);d&&a.push(["adroll_product_group",this.normalize_var((d+"").toLowerCase(),!0)]);h&&a.push(["adroll_product_action",this.normalize_var((h+"").toLowerCase(),!0)]);(c=this.external_data_to_qs(!0))&&a.push([c]);c=this._srv(this.buildurl("/p/"+this._global("adroll_adv_id")+"/",a));d=window.document.createElement("img");d.src=c;d.height=d.width=1;d.border=0;this._head().appendChild(d)}}.bind(this))};
l.prototype.get_product_id_from_dom=function(a){var b=null,c;a.path&&(window.jQuery?(c=window.jQuery(a.path),c.length&&(c=c.eq(0),b="text"===a.attribute?c.text():c.attr(a.attribute))):window.Prototype&&window.$$?(c=window.$$(a.path),c.length&&(c=c[0],b="text"===a.attribute?c.innerText&&!window.opera?c.innerText:c.innerHTML.stripScripts().unescapeHTML().replace(/[\n\r\s]+/g," "):c.readAttribute(a.attribute))):window.YUI?(c=window.YUI().use("node"),c.one&&(c=c.one(a.path),b=null,c&&(b="text"===a.attribute?
c.get("text"):c.getAttribute(a.attribute)))):window.$$&&(c=window.$$(a.path),c.length&&(c=c[0],b="text"===a.attribute?c.get("text"):c.getProperty(a.attribute))));if(b&&(b=b.replace(/^\s\s*/,"").replace(/\s\s*$/,""),a.regular_expression&&a.regular_expression_replace))if(c=new RegExp(a.regular_expression,"gi"),b=c.exec(b),null!==b){a=a.regular_expression_replace;for(c=0;c<b.length;c++)a=a.replace(new RegExp("\\\\"+c,"gi"),b[c]||"");b=a}else b="";return b};
l.prototype.get_product_id_from_url=function(a,b,c){var d=null;try{d=parseInt(c)}catch(h){}return null!==d&&!isNaN(d)&&b&&(a=(new RegExp(b,"gi")).exec(a),null!==a&&d in a)?a[d]:null};l.prototype.render_pixel_code=function(a,b){var c=this;c._has_global("adroll_tpc")?c.render_pixel_code_exec(a,b):c.load_adroll_tpc(function(){c.render_pixel_code_exec(a,b)})};
l.prototype.render_pixel_code_exec=function(a,b){this.expire_old();var c=this._srv("/pixel"),d=window.document.createElement("script");d.setAttribute("async","true");d.type="text/javascript";var h=this.get_keywords();this.addLoadEvent(function(n){return function(){var p=[];try{200>=window.document.referrer.length&&p.push("adroll_s_ref="+window.escape(window.document.referrer))}catch(f){}try{p.push("keyw="+window.escape(h))}catch(f){}try{n._has_global("adroll_segments")&&p.push("name="+window.escape(n._global("adroll_segments").toLowerCase()))}catch(f){}try{n._has_global("adroll_p")&&
p.push("adroll_p="+window.escape(n._global("adroll_p")))}catch(f){}try{n._has_global("adroll_u")&&p.push("adroll_u="+window.escape(n._global("adroll_u")))}catch(f){}try{n._has_global("adroll_m")&&n._has_global("adroll_m_type")&&(p.push("adroll_m="+window.escape(n._global("adroll_m"))),p.push("adroll_m_type="+window.escape(n._global("adroll_m_type"))))}catch(f){}try{var q=n.get_conversion_value();q.conv_value&&p.push("conv_value="+q.conv_value);q.currency&&p.push("adroll_currency="+q.currency)}catch(f){}try{if(n._has_user_identifier()){var k=
n._global("adroll_user_identifier"),k=k.replace(/^\s\s*/,"").replace(/\s\s*$/,"");p.push("user_identifier="+n.md5(k))}}catch(f){}try{n._has_global("adroll_shop_id")&&(q={},n._has_global("adroll_custom_data")?q=n._global("adroll_custom_data"):n._set_global("adroll_custom_data",q),"undefined"===typeof q.adroll_shop_id&&(q.adroll_shop_id=n._global("adroll_shop_id")));var e=n.external_data_to_qs(!0);e&&p.push(e)}catch(f){}try{var g=window.location.href.split("#")[0];500>=g.length&&p.push("arrfrr="+window.encodeURIComponent(g))}catch(f){}p=
n.get_base_url(c,a,b,null,"",p);d.src=p;n._head().appendChild(d)}}(this));this.addLoadEvent(function(a){return function(){var b=a._global("adroll");if(b&&"object"===typeof b){b.identify=function(){return a.identify.apply(a,arguments)};b.track=function(){return a.track.apply(a,arguments)};for(var c,d,e=0;e<b.length;e++)c=b[e][0],d=b[e][1],"identify"===c?a.identify.apply(a,d):"track"===c&&a.track.apply(a,d)}}}(this))};
l.prototype.render_ad_code=function(a,b,c,d){d=this._is_defined(d)?d:null;if(!this._is_defined(this._r[b])||d){var h=["width="+this._global("adroll_width"),"height="+this._global("adroll_height"),"x=0","y=0"];if(c)this.log("Rendering test ad "+c+" in space "+b),h.push("test_ad="+c),a=this.get_url(a,b,null,"ad",h);else if(d){this.log("Rendering adgroup "+d);c=this.macro_values();var n=this.macro_url_params(c,!1,!1,!1,!1);h.push(n);this.render_win_notification(c);this.render_extra_script(c);a=this.get_url(a,
b,d,null,h)}else this.log("Rendering ad space "+b),a=this.get_url(a,b,null,"ad",h);this.expire_old();window.document.write('<script src="'+a+'">\x3c/script>');this._nad+=1;this._r[b]=1}};
l.prototype.render_win_notification=function(a){if(a.adroll_cpm_macro&&a.adroll_win_notif){var b=(this._secure()?"https://":"http://")+a.adroll_win_notif+a.adroll_cpm_macro;a.adroll_ad_payload&&(a.adroll_rtb_dict&&a.adroll_rtb_dict.waap||/waap=1&/.test(a.adroll_win_notif)&&!this._is_defined(a.adroll_rtb_dict))&&(b+="&ad_payload="+a.adroll_ad_payload);this.imgRequest(b)}};
l.prototype.render_extra_script=function(a){a.adroll_rtb_dict&&a.adroll_rtb_dict.extra_script_src&&this.add_script_element(a.adroll_rtb_dict.extra_script_src,{})};l.prototype.add_script_element=function(a,b){var c=window.document.createElement("script"),d=this._secure()?"https://":"http://";a.match(/^(\w+:)*\/\//)&&(d="");for(var h in b)b.hasOwnProperty(h)&&"src"!==h&&c.setAttribute(h,b[h]);c.type="text/javascript";c.src=d+a;this._head().appendChild(c);return c};
l.prototype.get_base_url=function(a,b,c,d,h,n){var p=a.split("?");a=p[0]+"/"+b+"/"+c+(d?"/"+d:"")+(h?"/"+h:"");var q="?";p[1]&&(a+="?"+p[1],q="&");var p=q+"no-cookies=1&pv=",k="";this.cookieEnabled(!1)?(k=window.escape(this.get_eids()),a+=q+"pv="+this.pv+"&cookie="+k):a+=p+this.pv;n&&(a+="&"+n.join("&"));a=this.add_tpc_to_url(a);if(a.length>this._url){this.del(this.__adc);if(a.length-k.length>this._url)return a;this.log("Url was too big, shrinking it");return this.get_url(b,c,d,h,n)}this.log("Generated url: "+
a);return a};l.prototype.get_url=function(a,b,c,d,h){var n=c?this._srv("/c"):this._srv("/r");return this.get_base_url(n,a,b,c,d,h)};l.prototype.get_eids=function(){if(this._global("adroll_ext_network")||this._global("adroll_optout"))return"";try{for(var a=this.get(this.__adc),b=a?a.split("|"):"",a=[],c=b.length-1;0<=c;c--)if(b[c]){var d=b[c].split(":");a.push([d[0],d[2]].join(":"))}return a.join("|")}catch(h){return this.del(this.__adc),""}};l.prototype.record_user=function(a){var b="adroll_conversion_value adroll_conversion_value_in_dollars adroll_segments adroll_email adroll_user_identifier adroll_currency".split(" "),c,d;a=a||{};var h={adroll_user_identifier:!0};for(c=0;c<b.length;c++){try{this._unset_global(b[c])}catch(n){}if(b[c]in a){b[c]in h?this._set_global(b[c],window.escape(a[b[c]])):"adroll_email"!==b[c]&&this._set_global(b[c],a[b[c]]);try{delete a[b[c]]}catch(n){}}}try{this._unset_global("adroll_custom_data")}catch(n){}for(d in a)if(a.hasOwnProperty(d)){this._set_global("adroll_custom_data",
a);break}this.render_pixel_code(this._global("adroll_adv_id"),this._global("adroll_pix_id"))};l.prototype.record_adroll_email=function(a){if(this._has_email()){var b=this._global("_adroll_email"),b=b.replace(/^\s+|\s+$/g,""),c,d=b.toLowerCase(),b=this.is_email_valid(b);this.is_already_hashed(d)?c=d:b&&(c=this.md5(d));c="https://web.archive.org/web/20181008161629/https://d.adroll.com/id/"+this._global("adroll_adv_id")+"/?hashed_email="+c;b&&(d=d.split("@")[1],c+="&email_domain="+window.encodeURIComponent(d));a&&(c+="&idsource="+a);this.imgRequest(c)}};
l.prototype._send_plain_text_identifiers=function(a,b,c){(a||b)&&c&&(c="https://web.archive.org/web/20181008161629/https://d.adroll.com/id/"+this._global("adroll_adv_id")+"/?idsource="+c,a&&(a=a.replace(/^\s+|\s+$/g,"").toLowerCase(),c+="&email="+window.encodeURIComponent(a)+"&hashed_email="+this.md5(a),a=a.split("@")[1],c+="&email_domain="+window.encodeURIComponent(a)),b&&(c+="&user_identifier="+window.encodeURIComponent(b)),this.imgRequest(c))};l.prototype._has_email=function(){return this._has_global("_adroll_email")};
l.prototype._has_user_identifier=function(){return this._has_global("adroll_user_identifier")&&"example_user_id"!==this._global("adroll_user_identifier")};l.prototype.is_already_hashed=function(a){return/^[a-f0-9]{32}$/.test(a)};l.prototype.is_email_valid=function(a){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(a)};
l.prototype.identify=function(a,b){(a.email||a.userId)&&this._send_plain_text_identifiers(a.email,a.userId,b||"adroll-identify");a.email&&this._set_global("_adroll_email",a.email);var c=this.copyObj(a,["email","userId"]);c&&(c="https://web.archive.org/web/20181008161629/https://d.adroll.com/uat/"+this._global("adroll_adv_id")+"/"+this._global("adroll_pix_id")+"/?user_attributes="+window.encodeURIComponent(this.jsonStringify(c)),b&&(c+="&idsource="+b),this.imgRequest(c));this._queueAndCallback("identify",[a,b])};
l.prototype.track=function(a,b){if(a){var c="https://web.archive.org/web/20181008161629/https://d.adroll.com/uev/"+this._global("adroll_adv_id")+"/"+this._global("adroll_pix_id")+"/?event_name="+window.encodeURIComponent(a),d=this.copyObj(b);d&&(c+="&event_attributes="+window.encodeURIComponent(this.jsonStringify(d)));this.imgRequest(c);this._queueAndCallback("track",[a,b])}};
l.prototype._registerCallback=function(a,b,c){this.callbacks=this.callbacks||{};this.callbackNames=this.callbackNames||[];this.callbacks[a]=this.callbacks[a]||[];if(!("function"!==typeof b||-1<this.callbackNames.indexOf(c))&&(this.callbackNames.push(c),this.callbacks[a].push(b),this.callbackQueues&&this.callbackQueues[a]&&this.callbackQueues[a].length))for(c=0;c<this.callbackQueues[a].length;c++)b.apply(null,this.callbackQueues[a][c])};
l.prototype._queueAndCallback=function(a,b){this.callbackQueues=this.callbackQueues||{};this.callbackQueues[a]=this.callbackQueues[a]||[];this.callbackQueues[a].push(b);if(this.callbacks&&this.callbacks[a]&&this.callbacks[a].length)for(var c=0;c<this.callbacks[a].length;c++)this.callbacks[a][c].apply(null,b)};l.prototype.registerIdentifyCallback=function(a,b){this._registerCallback("identify",a,b)};l.prototype.registerTrackCallback=function(a,b){this._registerCallback("track",a,b)};l.prototype._is_defined=function(a){return"undefined"!==typeof a};l.prototype.normalize_var=function(a,b){if(!a)return"";a=a.toString().substr(0,this._kwl).replace(/,/gi,".");b&&(a=window.escape(a));return a};l.prototype.get_keywords=function(){try{var a=window.document.referrer||"";if(!a)return"";var b=this.parseUri(a);return-1!==b.host.indexOf("www.google.")?b.queryKey.q.substring(0,this._kwl):-1!==b.host.indexOf("bing.com")?b.queryKey.q.substring(0,this._kwl):""}catch(c){return""}};
l.prototype.parseUri=function(a){a=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(a);for(var b={queryKey:{}},c=14,d="source protocol authority userInfo user password host port relative path directory file query anchor".split(" ");c--;)b[d[c]]=a[c]||"";b[d[12]].replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(a,c,d){c&&(b.queryKey[c]=d)});return b};
l.prototype._secure=function(){return!0};l.prototype._protocol=function(){return window.document.location.protocol};l.prototype._native=function(){try{return"http"!==this._protocol().slice(0,4)}catch(a){return!0}};l.prototype._srv=function(a){a=this._is_defined(a)?a:"";return this.add_tpc_to_url("https://web.archive.org/web/20181008161629/https://d.adroll.com"+a)};l.prototype._cdn=function(a){a=this._is_defined(a)?a:"";return"https://s.adroll.com"+a};l.prototype.log=function(a){this._logs.push(a)};
l.prototype.read_log=function(a){return this._logs.join(a?"\n":"<br>\n")};l.prototype.normalize_url=function(a){return a.toLowerCase()};l.prototype.imgRequest=function(a){var b=new window.Image;b.src=this.add_tpc_to_url(a);b.setAttribute("width","1");b.setAttribute("height","1");b.setAttribute("border","0");this._head().appendChild(b)};l.prototype.copyObj=function(a,b){if(!a)return null;var c={},d=0,h;for(h in a)!a.hasOwnProperty(h)||b&&-1!==b.indexOf(h)||(d++,c[h]=a[h]);return d?c:null};
l.prototype.add_tpc_to_url=function(a){var b=this._global("adroll_tpc");if(!a||!b)return a;var c=this.parseUri(a);if(c.queryKey.adroll_tpc||"d.adroll.com"!==c.host&&"d.adroll.com"!==c.host+":"+c.port)return a;var d=a.indexOf("?"),h=c="";-1!==d?(c=a.slice(0,d+1),h="&"+a.slice(d+1)):(d=a.indexOf("#",-1===d?0:d),-1===d?c=a+"?":(c=a.slice(0,d)+"?",h=a.slice(d)));return c+"adroll_tpc="+encodeURIComponent(b)+h};
l.prototype.getSafariVersion=function(){var a=/^Mozilla\/5\.0 \([^)]+\) AppleWebKit\/[^ ]+ \(KHTML, like Gecko\) Version\/([^ ]+)( Mobile\/[^ ]+)? Safari\/[^ ]+$/i.exec(navigator.userAgent);return a?a[1]:null};l.prototype.set_tpc=function(a,b){var c=this.tpc_callback();a&&b&&this._set_global("adroll_tpc",encodeURIComponent(a)+"="+encodeURIComponent(b));c&&c.call(this)};l.prototype.tpc_callback=function(a){var b=window.adroll_tpc_callback;window.adroll_tpc_callback=a;return b};
l.prototype.extract_query_param=function(a,b){for(var c=b.split("&"),d=0;d<c.length;d++){var h=c[d].split("=");if(decodeURIComponent(h[0])===a)return decodeURIComponent(h[1])}return null};l.prototype.get_adroll_sid=function(){var a=this.get_consent_params();return a&&(a=this.extract_query_param("_s",a))?a:this._global("adroll_sid")};l.prototype.call_consent_write=function(a){this.add_script_element(this._srv("/consent/write?"+a))};
l.prototype.call_consent_check=function(){var a=["_s="+this.get_adroll_sid()];"#_ar_gdpr="===window.location.hash.substr(0,10)&&a.push("dbg="+unescape(window.location.hash.substr(10)));a="/consent/check/"+this._global("adroll_adv_id")+"?"+a.join("&");this.add_script_element(this._srv(a))};l.prototype.load_adroll_tpc=function(a){this.tpc_callback(a);if(this._consent_checked)return this.set_consent();this._consent_checked=!0;this.call_consent_check()};l.prototype.get_tpc_decode_timeout=function(){return 1E3};window.__adroll=window.__adroll||new l;}());
(function(a){a.adroll_optout=!1;a.adroll_ext_network=null;a.adroll_callbacks="undefined"===typeof a.adroll_callbacks?[]:a.adroll_callbacks;a.__adroll.render_pixel_code(a.adroll_adv_id,a.adroll_pix_id)})(window);


}
/*
     FILE ARCHIVED ON 16:16:29 Oct 08, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:17:02 Dec 16, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.096
  exclusion.robots.policy: 0.084
  cdx.remote: 0.121
  esindex: 0.011
  LoadShardBlock: 184.458 (6)
  PetaboxLoader3.datanode: 180.755 (7)
  load_resource: 139.562
  PetaboxLoader3.resolve: 111.585
*/