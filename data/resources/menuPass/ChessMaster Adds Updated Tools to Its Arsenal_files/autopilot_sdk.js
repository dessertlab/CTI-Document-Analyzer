window.BEIXF=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.headMeta={SDK:{name:"be:sdk"},SDK_TYPE:{name:"be:sdk_type"},TIMER:{name:"be:timer"},ORIG_URL:{name:"be:orig_url"},NORM_URL:{name:"be:norm_url"},CAPSULE_URL:{name:"be:capsule_url"},API_DT:{name:"be:api_dt"},MOD_DT:{name:"be:mod_dt"},MESSAGES:{name:"be:messages"},IS_SPA:{name:"be:is_spa"},CONTENT_ONLY:{name:"be:content_only"}},t.scriptClass={HEAD:{name:"be:head_script"},BODY:{name:"be:body_script"},COMMENT:{name:"be:comment_script"}},t.styleClass={LINK_STYLE:{name:"be:link_style"}},t.SELECTORS={LINK_BLOCK_CONTAINER:{selector:".be-ix-link-block,#be-ix-link-block,.be-ixf-link-block,.BrightEdgeRelatedLinks,.be-related-link-container,.o-AutoPilot__m-AutoPilot-Wrap,.c-kucqJi.c-kucqJi-iiKsqmw-css,.row.pt-2",name:"link-block-container"}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SDKUtils=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0);var i=n(5);function a(e,t){for(var n=e+"";n.length<t;)n="0"+n;return n}t.SDKUtils=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"getPageHash",value:function(e){var t=0;if(null===e||0===e.length)return t;for(var n=0;n<e.length;n++){t=(t<<5)-t+e.charCodeAt(n),t&=t}return t=t<0?"0"+-t:""+t}},{key:"getBooleanValue",value:function(e){return void 0!==e&&null!=e&&("1"===(e=e.toLowerCase())||"true"===e||"on"===e||"t"===e)}},{key:"normalizeUrl",value:function(e,t,n){var r=i.parse(e,!0),o=r.hostname,a=r.protocol,s=r.port;s=null===s||"http:"===a&&"80"===s||"https:"===a&&"443"===s?"":":"+s;var l=r.pathname,u=r.query,c=Object.keys(u).sort(),h=[];if(c.length>0)for(var d=0;d<c.length;d++){var p=c[d],f=p;if(n&&(f=p.toLowerCase()),t&&-1!==t.indexOf(f))if(Array.isArray(u[p]))for(var _=u[p].sort(),g=0;g<_.length;g++)h.push(f+"="+encodeURIComponent(_[g]));else{var m=encodeURIComponent(u[p]);h.push(f+"="+m)}}return h.length>0?a+"//"+o+s+l+"?"+h.join("&"):a+"//"+o+s+l}},{key:"getParameterDictionaryFromUrl",value:function(e){return i.parse(e,!0).query}},{key:"overrideHostInURL",value:function(e,t){var n=t.split(":"),r=-1;2===n.length&&(t=n[0],r=n[1]);var o=i.parse(e,!0),a=o.protocol;return o.hostname=t,o.host=t,r>-1&&("http:"===a&&"80"===r||"https:"===a&&"443"===r||(o.port=r.toString(),o.host=o.host+":"+r)),i.format(o)}},{key:"overrideProtocolInURL",value:function(e,t){var n=i.parse(e,!0);return n.protocol=t+":",i.format(n)}},{key:"userAgentMatchesRegex",value:function(e,t){return new RegExp(t,"gi").test(e)}},{key:"isDaylightSavings",value:function(e,t,n){if(t<3||t>11)return!1;if(t>3&&t<11)return!0;var r=e-n;return 3===t?r>=8:r<=0}},{key:"convertToNormalizedGoogleIndexTimeZone",value:function(t,n){var r=new Date(t),o=-8,i=r.getTime()+6e4*r.getTimezoneOffset(),s=new Date(i+36e5*o);return e.isDaylightSavings(s.getDate(),s.getMonth()+1,s.getDay())&&(o=-7,s=new Date(i+36e5*o)),n+"y_"+s.getFullYear()+"; "+n+"m_"+a(s.getMonth()+1,2)+"; "+n+"d_"+a(s.getDate(),2)+"; "+n+"h_"+a(s.getHours(),2)+"; "+n+"mh_"+a(s.getMinutes(),2)+"; "+n+"_epoch:"+t}},{key:"convertToNormalizedTimeZone",value:function(t,n){var r=new Date(t),o=-8,i=r.getTime()+6e4*r.getTimezoneOffset(),a=new Date(i+36e5*o);return e.isDaylightSavings(a.getDate(),a.getMonth()+1,a.getDay())&&(o=-7,a=new Date(i+36e5*o)),n+"_tstr:"+a.toString()+"; "+n+"_epoch:"+t}},{key:"matchIncludeRules",value:function(e,t){for(var n=0;n<e.length;n++){if(RegExp(e[n]).test(t))return!0}return!1}},{key:"derivePageGroup",value:function(t,n){for(var r=0;r<n.length;r++){var o=n[r].include_rules,i=n[r].exclude_rules,a=n[r].name;if(i){for(var s=!1,l=0;l<i.length;l++){if(RegExp(i[l]).test(t)){s=!0;break}}if(!s&&e.matchIncludeRules(o,t))return a}else if(e.matchIncludeRules(o,t))return a}return null}},{key:"simpleAssign",value:function(e,t){if(null!=t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}}},{key:"isLegacy",value:function(){var e=0,t=/MSIE (\d+\.\d+)/,n=t.test(navigator.userAgent),r=!!navigator.userAgent.match(/Trident\/7.0/),o=navigator.userAgent.indexOf("rv:11.0");n&&(e=t.exec(navigator.userAgent)[1]);return-1!==navigator.appVersion.indexOf("MSIE 10")&&(e=10),r&&-1!==o&&(e=11),0!==e&&e<10}},{key:"htmlEntities",value:function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}},{key:"createCommentScript",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("script");n.type="be:comment";var r="\n /*\n";return r+=" "+e+"\n",r+="*/\n",n.innerHTML=r,n.classList.add(o.scriptClass.COMMENT.name),t?n.outerHTML:n}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Logger=t.logLevelConstants=void 0;var r=n(1),o=t.logLevelConstants={DEBUG:0,INFO:1,WARNING:2,ERROR:3,FATAL:4};t.Logger={debugMode:!1,logLevel:o.WARNING,initLogger:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.WARNING;isNaN(e)||(this.logLevel=e);var t=document.location.href,n=r.SDKUtils.getParameterDictionaryFromUrl(t);n["ixf-debug"]&&(this.debugMode=r.SDKUtils.getBooleanValue(n["ixf-debug"])),this.debugMode&&(this.logLevel=o.DEBUG)},log:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;t<this.logLevel||void 0!==window.console&&(console.log(e),n&&console.log(n))},info:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.log("[INFO] "+e,o.INFO,t)},debug:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.log("[DEBUG] "+e,o.DEBUG,t)},warn:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.log("[WARNING] "+e,o.WARNING,t)}}},function(e,t,n){"use strict";(function(e){var t=n(1),r=n(13),o=n(14),i=n(0),a=n(2);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={};window.jsElementReady=(0,r.observeComponent)(window.BEJSSDKObserver=window.BEJSSDKObserver||{}),(0,o.linkBlockGeneratorComponent)(window.BELinkBlockGenerator||{}),function(n){n.ENVIRONMENT_PRODUCTION;var r=null,o=null,u=null,c=null,h=null,d=null,p=!0,f=!1,_=null,g=!1,m=[],E=[];function T(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=document.createElement("script");r.type="text/javascript",r.textContent=e,n&&r.classList.add(n),t.appendChild(r)}function v(){var e=t.SDKUtils.createCommentScript("be_ixf, sdk, gho",!0),r=!1;n.PAGE_HIDE_ORIGINALURL&&!a.Logger.debugMode&&(r=t.SDKUtils.getBooleanValue(n.PAGE_HIDE_ORIGINALURL)),e+='\n<meta name="'+i.headMeta.SDK.name+'" content="'+n.CLIENT_NAME+"_"+n.CLIENT_VERSION+'" />';var o="global";o="custom",e+='\n<meta name="'+i.headMeta.SDK_TYPE.name+'" content="'+o+'" />',n.IS_SPA&&(e+='\n<meta name="'+i.headMeta.IS_SPA.name+'" content="'+!0+'" />'),e+='\n<meta name="'+i.headMeta.TIMER.name+'" content="'+n.connectTime+'ms" />',r||(e+='\n<meta name="'+i.headMeta.ORIG_URL.name+'" content="'+t.SDKUtils.htmlEntities(u)+'" />'),e+='\n<meta name="'+i.headMeta.NORM_URL.name+'" content="'+t.SDKUtils.htmlEntities(c)+'" />',e+='\n<meta name="'+i.headMeta.CAPSULE_URL.name+'" content="'+t.SDKUtils.htmlEntities(d)+'" />',null!=n.capsule&&(e+='\n<meta name="'+i.headMeta.API_DT.name+'" content="'+t.SDKUtils.convertToNormalizedGoogleIndexTimeZone(n.capsule.date_created,"p")+'" />',e+='\n<meta name="'+i.headMeta.MOD_DT.name+'" content="'+t.SDKUtils.convertToNormalizedGoogleIndexTimeZone(n.capsule.date_created,"p")+'" />');var s=m.length>0?"true":"false";return e+='\n<meta name="'+i.headMeta.MESSAGES.name+'" content="'+s+'" />'}function I(e){m.push(e)}function N(e,r,o,i,s,l,u){if(r){var c=t.SDKUtils.createCommentScript("be_ixf, bodystr, _body_opens");e.appendChild(c);var h=document.createElement("ul");h.setAttribute("id","be_sdkms_capsule"),h.setAttribute("style","display:none!important");var d=document.createElement("li");if(d.setAttribute("id","be_sdkms_capsule_index_time"),d.innerHTML=t.SDKUtils.convertToNormalizedGoogleIndexTimeZone((new Date).getTime(),"i"),h.appendChild(d),null!=n.capsule){var p=n.capsule.publishing_engine,f=p+"; "+p+"_"+n.capsule.capsule_version,_=document.createElement("li");_.setAttribute("id","be_sdkms_capsule_pub"),_.innerHTML=f,h.appendChild(_);var m=document.createElement("li");m.setAttribute("id","be_sdkms_capsule_date_modified"),m.innerHTML=t.SDKUtils.convertToNormalizedGoogleIndexTimeZone(n.capsule.date_published,"p"),h.appendChild(m)}e.insertBefore(h,e.firstChild)}var E=o+"; "+o+"_"+i+"; "+s;null!=l&&(E=E+"; "+l);var T=t.SDKUtils.convertToNormalizedTimeZone(u,"p");if("bodystr"===s){if(a.Logger.debugMode){var v=document.createElement("ul");v.setAttribute("id","be_sdkms_node"),v.setAttribute("style","display:none!important");var I=document.createElement("li");I.setAttribute("class","be_sdkms_pub"),I.innerHTML=E,v.appendChild(I);var N=document.createElement("li");N.setAttribute("class","be_sdkms_date_modified"),N.innerHTML=T,v.appendChild(N),e.appendChild(v)}var C=t.SDKUtils.createCommentScript("be_ixf, bodystr");e.appendChild(C)}else if(!g){var A="be_sdkms_pub: "+E+"\n";A+="be_sdkms_date_modified: "+T+"\n";var O=t.SDKUtils.createCommentScript(A,!0);e.insertAdjacentHTML("beforeend",O)}}function C(e){var i=t.SDKUtils.createCommentScript("be_ixf, sdk, is");e.appendChild(i);var a=document.createElement("ul");if(a.setAttribute("id","be_sdkms_capsule"),a.setAttribute("style","display:none!important"),m.length>0){var s=document.createElement("ul");s.setAttribute("id","be_sdkms_capsule_messages");for(var l=0;l<m.length;l++){var u=m[l];s.innerHTML=s.innerHTML+"\x3c!-- ixf_msg: "+u+" --\x3e\n"}a.appendChild(s)}var c=document.createElement("li");c.setAttribute("id","be_sdkms_configuration"),c.innerHTML=JSON.stringify(o),a.appendChild(c);var h=document.createElement("li");h.setAttribute("id","be_sdkms_page_group"),n.capsule.page_group&&(h.innerHTML=JSON.stringify(n.capsule.page_group)),a.appendChild(h);var d=document.createElement("li");d.setAttribute("id","be_sdkms_capsule_response"),d.innerHTML=btoa(r),a.appendChild(d);var p=document.createElement("li");p.setAttribute("id","be_sdkms_capsule_profile");for(var f=0;f<E.length;f++){var _=E[f],g=document.createElement("li");g.setAttribute("id",_[0]),g.setAttribute("time",_[1]),p.appendChild(g)}a.appendChild(p),e.appendChild(a)}function A(e){var t=Array.prototype.slice.call(arguments,1);return function(n){var r=[n].concat(t);return e.apply(this,r)}}n.capsule=null,n.startTime=0,n.connectTime=0,n.PRODUCT_NAME="be_ixf",n.CLIENT_NAME="js_sdk",n.CLIENT_VERSION="1.5.9",n.API_VERSION="1.0.0",n.ENVIRONMENT_CONFIG="sdk.environment",n.CHARSET_CONFIG="sdk.charset",n.API_ENDPOINT_CONFIG="api.endpoint",n.ACCOUNT_ID_CONFIG="sdk.account",n.CONNECT_TIMEOUT_CONFIG="sdk.connectTimeout",n.SOCKET_TIMEOUT_CONFIG="sdk.socketTimeout",n.CRAWLER_CONNECT_TIMEOUT_CONFIG="sdk.crawlerConnectTimeout",n.CRAWLER_SOCKET_TIMEOUT_CONFIG="sdk.crawlerSocketTimeout",n.LOG_LEVEL_CONFIG="loglevel",n.WHITELIST_PARAMETER_LIST_CONFIG="whitelist.parameter.list",n.FDAPI_PARAMETER_LIST_CONFIG="forcedirectapi.parameter.list",n.REQUESTPARAMETERS_CASEINSENSITIVE_CONFIG="requestparameters.caseinsensitive",n.CRAWLER_USER_AGENTS_CONFIG="crawler.useragents",n.CANONICAL_PROTOCOL_CONFIG="canonical.protocol",n.CANONICAL_HOST_CONFIG="canonical.host",n.CANONICAL_PAGE_CONFIG="canonical.page",n.ENVIRONMENT_PRODUCTION="production",n.ENVIRONMENT_STAGING="staging",n.ENVIRONMENT_TESTING="testing",n.DEFAULT_CHARSET="UTF-8",n.DEFAULT_DIRECT_API_ENDPOINT="https://ixfd2-api.bc0a.com",n.DEFAULT_API_ENDPOINT="https://ixfd2-api.bc0a.com",n.DEFAULT_ACCOUNT_ID="0",n.DEFAULT_CONNECT_TIMEOUT="1000",n.DEFAULT_SOCKET_TIMEOUT="1000",n.DEFAULT_CRAWLER_CONNECT_TIMEOUT="2000",n.DEFAULT_CRAWLER_SOCKET_TIMEOUT="2000",n.DEFAULT_WHITELIST_PARAMETER_LIST="",n.DEFAULT_FD_PARAMETER_LIST="ixf-api|ixf",n.DEFAULT_CRAWLER_USER_AGENTS="google|bingbot|msnbot|slurp|duckduckbot|baiduspider|yandexbot|sogou|exabot|facebot|ia_archiver|brightedge",n.DEFAULT_REQUESTPARAMETERS_CASEINSENSITIVE=!1,n.construct=function(r){var i;n.startTime=(new Date).getTime(),s(i={},n.ENVIRONMENT_CONFIG,n.ENVIRONMENT_PRODUCTION),s(i,n.API_ENDPOINT_CONFIG,n.DEFAULT_API_ENDPOINT),s(i,n.CHARSET_CONFIG,n.DEFAULT_CHARSET),s(i,n.ACCOUNT_ID_CONFIG,n.DEFAULT_ACCOUNT_ID),s(i,n.CONNECT_TIMEOUT_CONFIG,n.DEFAULT_CONNECT_TIMEOUT),s(i,n.SOCKET_TIMEOUT_CONFIG,n.DEFAULT_SOCKET_TIMEOUT),s(i,n.CRAWLER_CONNECT_TIMEOUT_CONFIG,n.DEFAULT_CRAWLER_CONNECT_TIMEOUT),s(i,n.CRAWLER_SOCKET_TIMEOUT_CONFIG,n.DEFAULT_CRAWLER_SOCKET_TIMEOUT),s(i,n.CRAWLER_USER_AGENTS_CONFIG,n.DEFAULT_CRAWLER_USER_AGENTS),s(i,n.WHITELIST_PARAMETER_LIST_CONFIG,n.DEFAULT_WHITELIST_PARAMETER_LIST),s(i,n.FDAPI_PARAMETER_LIST_CONFIG,n.DEFAULT_FD_PARAMETER_LIST),s(i,n.LOG_LEVEL_CONFIG,a.logLevelConstants.WARNING),s(i,n.REQUESTPARAMETERS_CASEINSENSITIVE_CONFIG,n.DEFAULT_REQUESTPARAMETERS_CASEINSENSITIVE),o=i,o=t.SDKUtils.simpleAssign(o,r),a.Logger.initLogger(parseInt(o[n.LOG_LEVEL_CONFIG])),u=document.location.href,f=o[n.REQUESTPARAMETERS_CASEINSENSITIVE_CONFIG];var l=t.SDKUtils.getParameterDictionaryFromUrl(u);null!=l["ixf-endpoint"]&&(p=!1,(l["ixf-endpoint"].endsWith("api.bc0a.com")||l["ixf-endpoint"].endsWith("brightedge.com"))&&(o[n.API_ENDPOINT_CONFIG]=l["ixf-endpoint"])),a.Logger.debug("SDK config:",o),o[n.ENVIRONMENT_CONFIG],a.Logger.debug("force direct api list parameter="+o[n.FDAPI_PARAMETER_LIST_CONFIG]);var m=o[n.WHITELIST_PARAMETER_LIST_CONFIG];a.Logger.debug("white list parameter="+m);var E=m.split("|"),T=o[n.CONNECT_TIMEOUT_CONFIG];t.SDKUtils.userAgentMatchesRegex(navigator.userAgent,o[n.CRAWLER_USER_AGENTS_CONFIG])&&(T=o[n.CRAWLER_CONNECT_TIMEOUT_CONFIG],a.Logger.debug("Detected browser using timeout="+T)),c=t.SDKUtils.normalizeUrl(u,E,f),o[n.CANONICAL_PAGE_CONFIG]?c=o[n.CANONICAL_PAGE_CONFIG]:o[n.CANONICAL_HOST_CONFIG]&&(a.Logger.debug("Got in canonical host"),c=t.SDKUtils.overrideHostInURL(c,o[n.CANONICAL_HOST_CONFIG])),o[n.CANONICAL_PROTOCOL_CONFIG]&&(c=t.SDKUtils.overrideProtocolInURL(c,o[n.CANONICAL_PROTOCOL_CONFIG]));var v=t.SDKUtils.getPageHash(c);if(p){var I=o[n.FDAPI_PARAMETER_LIST_CONFIG].split("|");for(var N in l)if(-1!==I.indexOf(N)){o[n.API_ENDPOINT_CONFIG]=n.DEFAULT_DIRECT_API_ENDPOINT,a.Logger.debug("Using overridden api endpoint");break}}var C=o[n.API_ENDPOINT_CONFIG],A=o[n.ACCOUNT_ID_CONFIG],O="/api/ixf/"+n.API_VERSION+"/get_capsule/"+A+"/"+v;if(h=C+O+"?client="+encodeURIComponent(n.CLIENT_NAME)+"&client_version="+encodeURIComponent(n.CLIENT_VERSION)+"&orig_url="+encodeURIComponent(u)+"&base_url="+encodeURIComponent(c)+"&user_agent="+encodeURIComponent(navigator.userAgent),a.Logger.debug("Page_hash normalized_url="+c+", page_hash="+v+", api_url="+h),d=C+O,e.env.DEV&&(h=e.env.DEV_DOMAIN+v,d=h),g=t.SDKUtils.isLegacy()){var L=document.location.protocol.substring(0,document.location.protocol.length-1);h=t.SDKUtils.overrideProtocolInURL(h,L),_=new window.XDomainRequest}else _=new XMLHttpRequest;n.IS_SPA?(_.onerror=n.xhrErrorHandler,_.open("GET",h,!1),_.send(null),n.processCapsule(_.responseText)):(_.onload=n.xhrHandler,_.onerror=n.xhrErrorHandler,_.open("GET",h,!0),_.timeout=T,_.send(null))},n.xhrHandler=function(e){g?n.processCapsule(_.responseText):4===_.readyState&&(200===_.status?(a.Logger.debug("Get capsule successfully: ",_),n.processCapsule(_.responseText)):(a.Logger.warn("Cannot get capsule: ",_),I("API request invalid HTTP status="+_.status+", capsule_url="+h)))},n.xhrErrorHandler=function(e){a.Logger.warn("Could not get capsule="+h+", error="+e.statusText),I("API request invalid response="+_.statusText+", capsule_url="+h)},n.processCapsule=function(e){var o,s;r=e,n.connectTime=(new Date).getTime()-n.startTime,o="constructor",s=n.connectTime,E.push([o,s]);try{n.capsule=JSON.parse(r)}catch(e){return void I("Invalid JSON capsule_url="+h+", error_msg="+e.message)}if(n.capsule.config.page_groups){var l=n.capsule.config.page_groups;try{var u=t.SDKUtils.derivePageGroup(c,l);a.Logger.debug("page group is "+u),n.capsule.page_group=u;var d=n.getPageGroupNodes(u);n.setPageGroupNodes(d)}catch(e){return void I("Exception occurred while getting page group, error_msg="+e.message)}}var p=!1;if(n.capsule.page_group_nodes)for(var f=0;f<n.capsule.page_group_nodes.length;f++){for(var _=n.capsule.page_group_nodes[f],m=_.type,O=_.feature_group,L=!1,b=0;b<n.capsule.nodes.length;b++){var S=n.capsule.nodes[b];if(O===S.feature_group&&S.type===m){n.capsule.nodes[b]=_,L=!0;break}}L||n.capsule.nodes.push(_)}for(var R=function(e){var t=n.capsule.nodes[e],r=t.type,o=t.feature_group,s="";t.non_script_content&&(s=t.non_script_content);var l=t.script_content,u=t.publishing_engine,c=t.engine_version,h=t.date_published,d=null;t.metaString&&(d=t.meta_string),I("Adding selector index="+e+" node="+r+"/"+o),"bodystr"===r&&"_body_open"===o?(a.Logger.debug("Adding selector for index="+e+" node="+r+"/"+o),BEJSSDKObserver.jsElementReady("body",A((function(e,t,n,r,o,s,l){t&&t.length>0&&(t=t.replace("<style>",'<style class="'+i.styleClass.LINK_STYLE.name+'">').trim(),e.insertAdjacentHTML("afterbegin",t)),n&&n.length>0&&T(n,e,i.scriptClass.BODY.name),p=!0,a.Logger.debugMode&&(N(e,!0,r,o,s,l,h),C(e))}),s,l,u,c,r,d,h))):"headstr"===r&&"_head_open"===o?(a.Logger.debug("Adding selector for index="+e+" node="+r+"/"+o),BEJSSDKObserver.jsElementReady("head",A((function(e,t,n,r,o,s,l){var u=!1,c=!1,d=v();if(g){var p=t.replace("<style>","").trim();if(p.length>0){var f=document.createElement("style");f.classList.add(i.styleClass.LINK_STYLE.name),f.innerHTML=p+"\n",e.appendChild(f),u=!0}}else t&&t.length>0&&(t=t.replace("<style>",'<style class="'+i.styleClass.LINK_STYLE.name+'">').trim(),e.insertAdjacentHTML("beforeend",t),c||(e.insertAdjacentHTML("beforeend",d),c=!0),a.Logger.debug("Loading head content..."),u=!0);if(n&&n.length>0){T(n,e,i.scriptClass.HEAD.name);var _=v();c||(e.insertAdjacentHTML("beforeend",_),c=!0),a.Logger.debug("Loading script_content..."),u=!0}u&&N(e,!1,r,o,s,l,h)}),s,l,u,c,r,d,h))):a.Logger.debug("Skipping non-implicit and unspecified explict selector for index="+e+" node="+r+"/"+o)},y=0;y<n.capsule.nodes.length;y++)R(y);!p&&a.Logger.debugMode&&BEJSSDKObserver.jsElementReady("body",A((function(e){C(e)})))},n.getNodes=function(){return n.capsule.nodes},n.getPageGroupNodes=function(e){return n.capsule.page_group_nodes[e]},n.setPageGroupNodes=function(e){n.capsule.page_group_nodes=e},n.getPageGroupNodesConfig=function(){return n.capsule.config.page_group_nodes},l[n.ACCOUNT_ID_CONFIG]="f00000000017219",l[n.WHITELIST_PARAMETER_LIST_CONFIG]="ixf",l[n.LOG_LEVEL_CONFIG]=2,window.BEJSSDK.construct(l)}(window.BEJSSDK=window.BEJSSDK||{})}).call(this,n(4))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var l,u=[],c=!1,h=-1;function d(){c&&l&&(c=!1,l.length?u=l.concat(u):h=-1,u.length&&p())}function p(){if(!c){var e=s(d);c=!0;for(var t=u.length;t;){for(l=u,u=[];++h<t;)l&&l[h].run();h=-1,t=u.length}l=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function _(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new f(e,t)),1!==u.length||c||s(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=_,o.addListener=_,o.once=_,o.off=_,o.removeListener=_,o.removeAllListeners=_,o.emit=_,o.prependListener=_,o.prependOnceListener=_,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(6),o=n(9);function i(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}t.parse=T,t.resolve=function(e,t){return T(e,!1,!0).resolve(t)},t.resolveObject=function(e,t){return e?T(e,!1,!0).resolveObject(t):t},t.format=function(e){o.isString(e)&&(e=T(e));return e instanceof i?e.format():i.prototype.format.call(e)},t.Url=i;var a=/^([a-z0-9.+-]+:)/i,s=/:[0-9]*$/,l=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,u=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),c=["'"].concat(u),h=["%","/","?",";","#"].concat(c),d=["/","?","#"],p=/^[+a-z0-9A-Z_-]{0,63}$/,f=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,_={javascript:!0,"javascript:":!0},g={javascript:!0,"javascript:":!0},m={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},E=n(10);function T(e,t,n){if(e&&o.isObject(e)&&e instanceof i)return e;var r=new i;return r.parse(e,t,n),r}i.prototype.parse=function(e,t,n){if(!o.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var i=e.indexOf("?"),s=-1!==i&&i<e.indexOf("#")?"?":"#",u=e.split(s);u[0]=u[0].replace(/\\/g,"/");var T=e=u.join(s);if(T=T.trim(),!n&&1===e.split("#").length){var v=l.exec(T);if(v)return this.path=T,this.href=T,this.pathname=v[1],v[2]?(this.search=v[2],this.query=t?E.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var I=a.exec(T);if(I){var N=(I=I[0]).toLowerCase();this.protocol=N,T=T.substr(I.length)}if(n||I||T.match(/^\/\/[^@\/]+@[^@\/]+/)){var C="//"===T.substr(0,2);!C||I&&g[I]||(T=T.substr(2),this.slashes=!0)}if(!g[I]&&(C||I&&!m[I])){for(var A,O,L=-1,b=0;b<d.length;b++){-1!==(S=T.indexOf(d[b]))&&(-1===L||S<L)&&(L=S)}-1!==(O=-1===L?T.lastIndexOf("@"):T.lastIndexOf("@",L))&&(A=T.slice(0,O),T=T.slice(O+1),this.auth=decodeURIComponent(A)),L=-1;for(b=0;b<h.length;b++){var S;-1!==(S=T.indexOf(h[b]))&&(-1===L||S<L)&&(L=S)}-1===L&&(L=T.length),this.host=T.slice(0,L),T=T.slice(L),this.parseHost(),this.hostname=this.hostname||"";var R="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!R)for(var y=this.hostname.split(/\./),D=(b=0,y.length);b<D;b++){var M=y[b];if(M&&!M.match(p)){for(var U="",P=0,G=M.length;P<G;P++)M.charCodeAt(P)>127?U+="x":U+=M[P];if(!U.match(p)){var x=y.slice(0,b),w=y.slice(b+1),F=M.match(f);F&&(x.push(F[1]),w.unshift(F[2])),w.length&&(T="/"+w.join(".")+T),this.hostname=x.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),R||(this.hostname=r.toASCII(this.hostname));var k=this.port?":"+this.port:"",K=this.hostname||"";this.host=K+k,this.href+=this.host,R&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==T[0]&&(T="/"+T))}if(!_[N])for(b=0,D=c.length;b<D;b++){var j=c[b];if(-1!==T.indexOf(j)){var H=encodeURIComponent(j);H===j&&(H=escape(j)),T=T.split(j).join(H)}}var B=T.indexOf("#");-1!==B&&(this.hash=T.substr(B),T=T.slice(0,B));var Y=T.indexOf("?");if(-1!==Y?(this.search=T.substr(Y),this.query=T.substr(Y+1),t&&(this.query=E.parse(this.query)),T=T.slice(0,Y)):t&&(this.search="",this.query={}),T&&(this.pathname=T),m[N]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){k=this.pathname||"";var q=this.search||"";this.path=k+q}return this.href=this.format(),this},i.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@");var t=this.protocol||"",n=this.pathname||"",r=this.hash||"",i=!1,a="";this.host?i=e+this.host:this.hostname&&(i=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&o.isObject(this.query)&&Object.keys(this.query).length&&(a=E.stringify(this.query));var s=this.search||a&&"?"+a||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||m[t])&&!1!==i?(i="//"+(i||""),n&&"/"!==n.charAt(0)&&(n="/"+n)):i||(i=""),r&&"#"!==r.charAt(0)&&(r="#"+r),s&&"?"!==s.charAt(0)&&(s="?"+s),t+i+(n=n.replace(/[?#]/g,(function(e){return encodeURIComponent(e)})))+(s=s.replace("#","%23"))+r},i.prototype.resolve=function(e){return this.resolveObject(T(e,!1,!0)).format()},i.prototype.resolveObject=function(e){if(o.isString(e)){var t=new i;t.parse(e,!1,!0),e=t}for(var n=new i,r=Object.keys(this),a=0;a<r.length;a++){var s=r[a];n[s]=this[s]}if(n.hash=e.hash,""===e.href)return n.href=n.format(),n;if(e.slashes&&!e.protocol){for(var l=Object.keys(e),u=0;u<l.length;u++){var c=l[u];"protocol"!==c&&(n[c]=e[c])}return m[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname="/"),n.href=n.format(),n}if(e.protocol&&e.protocol!==n.protocol){if(!m[e.protocol]){for(var h=Object.keys(e),d=0;d<h.length;d++){var p=h[d];n[p]=e[p]}return n.href=n.format(),n}if(n.protocol=e.protocol,e.host||g[e.protocol])n.pathname=e.pathname;else{for(var f=(e.pathname||"").split("/");f.length&&!(e.host=f.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==f[0]&&f.unshift(""),f.length<2&&f.unshift(""),n.pathname=f.join("/")}if(n.search=e.search,n.query=e.query,n.host=e.host||"",n.auth=e.auth,n.hostname=e.hostname||e.host,n.port=e.port,n.pathname||n.search){var _=n.pathname||"",E=n.search||"";n.path=_+E}return n.slashes=n.slashes||e.slashes,n.href=n.format(),n}var T=n.pathname&&"/"===n.pathname.charAt(0),v=e.host||e.pathname&&"/"===e.pathname.charAt(0),I=v||T||n.host&&e.pathname,N=I,C=n.pathname&&n.pathname.split("/")||[],A=(f=e.pathname&&e.pathname.split("/")||[],n.protocol&&!m[n.protocol]);if(A&&(n.hostname="",n.port=null,n.host&&(""===C[0]?C[0]=n.host:C.unshift(n.host)),n.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===f[0]?f[0]=e.host:f.unshift(e.host)),e.host=null),I=I&&(""===f[0]||""===C[0])),v)n.host=e.host||""===e.host?e.host:n.host,n.hostname=e.hostname||""===e.hostname?e.hostname:n.hostname,n.search=e.search,n.query=e.query,C=f;else if(f.length)C||(C=[]),C.pop(),C=C.concat(f),n.search=e.search,n.query=e.query;else if(!o.isNullOrUndefined(e.search)){if(A)n.hostname=n.host=C.shift(),(R=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=R.shift(),n.host=n.hostname=R.shift());return n.search=e.search,n.query=e.query,o.isNull(n.pathname)&&o.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.href=n.format(),n}if(!C.length)return n.pathname=null,n.search?n.path="/"+n.search:n.path=null,n.href=n.format(),n;for(var O=C.slice(-1)[0],L=(n.host||e.host||C.length>1)&&("."===O||".."===O)||""===O,b=0,S=C.length;S>=0;S--)"."===(O=C[S])?C.splice(S,1):".."===O?(C.splice(S,1),b++):b&&(C.splice(S,1),b--);if(!I&&!N)for(;b--;b)C.unshift("..");!I||""===C[0]||C[0]&&"/"===C[0].charAt(0)||C.unshift(""),L&&"/"!==C.join("/").substr(-1)&&C.push("");var R,y=""===C[0]||C[0]&&"/"===C[0].charAt(0);A&&(n.hostname=n.host=y?"":C.length?C.shift():"",(R=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=R.shift(),n.host=n.hostname=R.shift()));return(I=I||n.host&&C.length)&&!y&&C.unshift(""),C.length?n.pathname=C.join("/"):(n.pathname=null,n.path=null),o.isNull(n.pathname)&&o.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.auth=e.auth||n.auth,n.slashes=n.slashes||e.slashes,n.href=n.format(),n},i.prototype.parseHost=function(){var e=this.host,t=s.exec(e);t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)}},function(e,t,n){(function(e,r){var o;/*! https://mths.be/punycode v1.4.1 by @mathias */!function(i){t&&t.nodeType,e&&e.nodeType;var a="object"==typeof r&&r;a.global!==a&&a.window!==a&&a.self;var s,l=2147483647,u=/^xn--/,c=/[^\x20-\x7E]/,h=/[\x2E\u3002\uFF0E\uFF61]/g,d={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},p=Math.floor,f=String.fromCharCode;function _(e){throw new RangeError(d[e])}function g(e,t){for(var n=e.length,r=[];n--;)r[n]=t(e[n]);return r}function m(e,t){var n=e.split("@"),r="";return n.length>1&&(r=n[0]+"@",e=n[1]),r+g((e=e.replace(h,".")).split("."),t).join(".")}function E(e){for(var t,n,r=[],o=0,i=e.length;o<i;)(t=e.charCodeAt(o++))>=55296&&t<=56319&&o<i?56320==(64512&(n=e.charCodeAt(o++)))?r.push(((1023&t)<<10)+(1023&n)+65536):(r.push(t),o--):r.push(t);return r}function T(e){return g(e,(function(e){var t="";return e>65535&&(t+=f((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+=f(e)})).join("")}function v(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function I(e,t,n){var r=0;for(e=n?p(e/700):e>>1,e+=p(e/t);e>455;r+=36)e=p(e/35);return p(r+36*e/(e+38))}function N(e){var t,n,r,o,i,a,s,u,c,h,d,f=[],g=e.length,m=0,E=128,v=72;for((n=e.lastIndexOf("-"))<0&&(n=0),r=0;r<n;++r)e.charCodeAt(r)>=128&&_("not-basic"),f.push(e.charCodeAt(r));for(o=n>0?n+1:0;o<g;){for(i=m,a=1,s=36;o>=g&&_("invalid-input"),((u=(d=e.charCodeAt(o++))-48<10?d-22:d-65<26?d-65:d-97<26?d-97:36)>=36||u>p((l-m)/a))&&_("overflow"),m+=u*a,!(u<(c=s<=v?1:s>=v+26?26:s-v));s+=36)a>p(l/(h=36-c))&&_("overflow"),a*=h;v=I(m-i,t=f.length+1,0==i),p(m/t)>l-E&&_("overflow"),E+=p(m/t),m%=t,f.splice(m++,0,E)}return T(f)}function C(e){var t,n,r,o,i,a,s,u,c,h,d,g,m,T,N,C=[];for(g=(e=E(e)).length,t=128,n=0,i=72,a=0;a<g;++a)(d=e[a])<128&&C.push(f(d));for(r=o=C.length,o&&C.push("-");r<g;){for(s=l,a=0;a<g;++a)(d=e[a])>=t&&d<s&&(s=d);for(s-t>p((l-n)/(m=r+1))&&_("overflow"),n+=(s-t)*m,t=s,a=0;a<g;++a)if((d=e[a])<t&&++n>l&&_("overflow"),d==t){for(u=n,c=36;!(u<(h=c<=i?1:c>=i+26?26:c-i));c+=36)N=u-h,T=36-h,C.push(f(v(h+N%T,0))),u=p(N/T);C.push(f(v(u,0))),i=I(n,m,r==o),n=0,++r}++n,++t}return C.join("")}s={version:"1.4.1",ucs2:{decode:E,encode:T},decode:N,encode:C,toASCII:function(e){return m(e,(function(e){return c.test(e)?"xn--"+C(e):e}))},toUnicode:function(e){return m(e,(function(e){return u.test(e)?N(e.slice(4).toLowerCase()):e}))}},void 0===(o=function(){return s}.call(t,n,t,e))||(e.exports=o)}()}).call(this,n(7)(e),n(8))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";e.exports={isString:function(e){return"string"==typeof e},isObject:function(e){return"object"==typeof e&&null!==e},isNull:function(e){return null===e},isNullOrUndefined:function(e){return null==e}}},function(e,t,n){"use strict";t.decode=t.parse=n(11),t.encode=t.stringify=n(12)},function(e,t,n){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,i){t=t||"&",n=n||"=";var a={};if("string"!=typeof e||0===e.length)return a;var s=/\+/g;e=e.split(t);var l=1e3;i&&"number"==typeof i.maxKeys&&(l=i.maxKeys);var u=e.length;l>0&&u>l&&(u=l);for(var c=0;c<u;++c){var h,d,p,f,_=e[c].replace(s,"%20"),g=_.indexOf(n);g>=0?(h=_.substr(0,g),d=_.substr(g+1)):(h=_,d=""),p=decodeURIComponent(h),f=decodeURIComponent(d),r(a,p)?o(a[p])?a[p].push(f):a[p]=[a[p],f]:a[p]=f}return a};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,n){"use strict";var r=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,s){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?i(a(e),(function(a){var s=encodeURIComponent(r(a))+n;return o(e[a])?i(e[a],(function(e){return s+encodeURIComponent(r(e))})).join(t):s+encodeURIComponent(r(e[a]))})).join(t):s?encodeURIComponent(r(s))+n+encodeURIComponent(r(e)):""};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function i(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}var a=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.observeComponent=function(e){var t=void 0,n=[],i=window.document,a=[],s=window.MutationObserver||window.WebKitMutationObserver;0;function l(e,t){if(o.Logger.debug("Check Selector..."),o.Logger.debug("Selector: ",e),o.Logger.debug("Function: ",t),e&&e.length){var n=i.querySelectorAll(e);o.Logger.debug("Elements: ",n);for(var l=r.SELECTORS.LINK_BLOCK_CONTAINER.selector.split(","),u=0,c=n.length;u<c;u++){for(var h=n[u],d=0;d<a.length;d++)if(a[d]===h.className||a[d]===h.id)return!h.firstElementChild&&l.indexOf(e)>=0&&(t.call(h,h),o.Logger.debug("Inserted element",h),o.Logger.debug("Inserted in selector",e)),void o.Logger.debug("Return checkSelector because readySet has element",a);h.className&&a.push(h.className),h.id&&a.push(h.id),(!h.firstElementChild&&l.indexOf(e)>=0||!h.ready||null==s)&&(h.ready=!0,t.call(h,h),o.Logger.debug("Inserted element",h),o.Logger.debug("Inserted in selector",e))}}}function u(){n.forEach((function(e){return l(e.selector,e.fn)}))}return e.jsElementReady=function(e,r){if(o.Logger.debug("JS Element Ready --------------------------------------------"),o.Logger.debugMode){var a=document.getElementsByClassName("be-ix-link-block");o.Logger.debug("Link Block: ",a)}return null!=s?(t||(t=new s(u)).observe(i.documentElement,{childList:!0,subtree:!0}),n.push({selector:e,fn:r})):(document.addEventListener||(document.addEventListener=document.attachEvent),document.addEventListener("DOMContentLoaded",(function(t){if(e&&e.length)for(var n=i.querySelectorAll(e),o=0,a=n.length;o<a;o++){var s=n[o];s.ready=!0,r.call(s,s)}}))),l(e,r),function(){return function(e,r){var i=n.length;for(;i--;){var a=n[i];a.selector===e&&a.fn===r&&e&&e.firstChild&&(n.splice(i,1),!n.length&&t&&(t.disconnect(),t=null,o.Logger.debug("RemoveListener: ",e)))}}(e,r)}},e.jsElementReady};var r=n(0),o=n(2)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.linkBlockGeneratorComponent=function(e){e.MAXIMUM_HEADLINE_LENGTH=100,e.MAXIMUM_DESC_LENGTH=200,e.IND_LINK_BLOCK_TYPE_URL_TYPE=0,e.IND_LINK_BLOCK_TYPE_HEADLINE_TYPE=1,e.IND_LINK_BLOCK_TYPE_DESCRIPTION_TYPE=2,e.IND_LINK_BLOCK_TYPE_IMAGE_TYPE=3,e.REPLACEMENT_STRATEGY_OVERWRITE=0,e.REPLACEMENT_STRATEGY_POST_APPEND_ELEMENT=1,e.REPLACEMENT_STRATEGY_PRE_APPEND_ELEMENT=2,e.REPLACEMENT_STRATEGY_PRE_APPEND_PARENT=3,e.setMaximumHeadlineLength=function(t){e.MAXIMUM_HEADLINE_LENGTH=t},e.setMaximumDescriptionLength=function(t){e.MAXIMUM_DESC_LENGTH=t},e.generateIndividualLinks=function(t,n,r){var o=n[0],i=document.createElement(o),a=n[1],s=n[2],l=n[3];for(var u in a)i.setAttribute(u,a[u]);var c=!1;if(s.indexOf(e.IND_LINK_BLOCK_TYPE_URL_TYPE)>=0&&(i.setAttribute("href",r.url),c=!0),s.indexOf(e.IND_LINK_BLOCK_TYPE_HEADLINE_TYPE)>=0&&r.h1){var h=r.h1;h.length>e.MAXIMUM_HEADLINE_LENGTH&&(h=h.substring(0,e.MAXIMUM_HEADLINE_LENGTH)+"...");var d=document.createTextNode(h);i.appendChild(d),c=!0}if(s.indexOf(e.IND_LINK_BLOCK_TYPE_DESCRIPTION_TYPE)>=0&&r.desc){var p=r.desc;p.length,e.MAXIMUM_DESC_LENGTH;var f=document.createTextNode(p);i.appendChild(f),c=!0}if(s.indexOf(e.IND_LINK_BLOCK_TYPE_IMAGE_TYPE)>=0&&r.image&&(i.setAttribute("src",r.image),c=!0),c||0===s.length){for(var _=0;_<l.length;_++){var g=l[_];e.generateIndividualLinks(i,g,r)}t.appendChild(i)}},e.insertLinkBlocks=function(t,n,r,o,i,a){if(null!=t){if(n===e.REPLACEMENT_STRATEGY_OVERWRITE)for(;t.firstChild;)t.removeChild(t.firstChild);for(var s=t,l=0;l<r.length;l++){var u=r[l],c=u[0],h=document.createElement(c),d=u[1];for(var p in d)h.setAttribute(p,d[p]);if(a&&a[0]===l){var f=a[1],_=document.createElement(f),g=a[2],m=a[3];for(var E in g)_.setAttribute(E,g[E]);var T=document.createTextNode(m);_.appendChild(T),h.appendChild(_)}if(l===r.length-1)for(var v=0;v<i.length;v++)for(var I=i[v],N=0;N<o.length;N++)e.generateIndividualLinks(h,o[N],I);if(s===t)if(n===e.REPLACEMENT_STRATEGY_PRE_APPEND_ELEMENT)s.insertBefore(h,t.firstChild);else if(n===e.REPLACEMENT_STRATEGY_PRE_APPEND_PARENT){s.parentElement.insertBefore(h,s)}else s.appendChild(h);else s.appendChild(h);s=h}}}}}]);
//# sourceMappingURL=autopilot_sdk.js.map