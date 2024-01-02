!function(){"use strict";function c(e){var n=U();return n[e]=n[e]||{id:e,plugins:{},getPlugins:function(){var e,n=[];for(e in this.plugins)n.push(this.plugins[e]);return n},autoTrackingInitialized:!1},n[e]}function P(e,n){e=c(e);return e.plugins[n]=e.plugins[n]||{},e.plugins[n]}function U(){var e=m();return e.r=e.r||{},e.r}l()&&(window.ldfdr.registerTracker=function(e,n,t,r,i,o,a){return(e=c(e)).track=n,e.identify=t,e.pageview=r,e.getClientId=i,e.acceptCookie=o,e.rejectCookie=a,e},window.ldfdr.setTrackerOption=function(e,n,t,r){c(e)[n]=void 0!==r?r:t},window.ldfdr.registerPlugin=function(e,n,t){var r=c(e),i=P(e,n);i.init=function(){try{t()}catch(e){console.error("Error during plugin initialization",i,e)}},r.pluginsInitialized&&i.init()},window.ldfdr.registerPluginConfig=function(e,n,t,r){P(e,n).config=void 0!==r?r:t});var e,n,j,v="YEgkB8lPLLw8ep3Z",J="2.61.3",G="_lfa_debug_settings",F=["cookieDomain","enableAutoTracking","trackingCookieDurationDays"];if("undefined"!=typeof window&&void 0!==window.ldfdr){window.ldfdr=window.ldfdr||{},window.ldfdr.cfg=window.ldfdr.cfg||{};var t=function(){var e=b(G)||"{}";try{return JSON.parse(e)}catch(e){return{}}}(),r=(e=window.ldfdr,n=v,j=J,t=t,e.setTrackerOption(n,"lfaCookieEnabled",!0,t.enableCookie),e.setTrackerOption(n,"consentManagementEnabled",!1,t.enableCm),e.setTrackerOption(n,"useSendBeaconApi",!1,t.useBeacon),e.setTrackerOption(n,"autoTrackingMode","on_script_load",t.atMode),e.setTrackerOption(n,"foreignCookieSettings",{"intercom":"^intercom-id-.*","hubspot":"^hubspotutk$"}),e.setTrackerOption(n,"crossDomainLinking",{"enabled":false}),e.setTrackerOption(n,"useDualStackEndpoint",!1,t.useDs),e.setTrackerOption(n,"trackingCookieDurationDays",365),e.setTrackerOption(n,"version",j),e.registerPluginConfig(n,"file-downloads",{filesEnabled:!0,filesToMatch:/(\.pdf|\.doc|\.docx|\.xls|\.xlsx|\.ppt|\.pptx|\.key|\.txt|\.dmg|\.exe)(\?|$)/}),e.registerPluginConfig(n,"form-tracking",{formTrackingMode:"metadata",fields:[],excluded:[]},t.trackForms),e.registerPluginConfig(n,"yt-playback",{ytPlaybackTrackingEnabled:!0},t.trackYt),e.registerPluginConfig(n,"vimeo-playback",{vimeoPlaybackTrackingEnabled:!0},t.trackVimeo),e.registerPluginConfig(n,"intercom-tracking",{intercomTrackingEnabled:!1},t.trackIntercom),e.registerPluginConfig(n,"discover",{jsConnectorConfigs:[]}),e.registerPluginConfig(n,"spa-tracking",{}),e.registerPluginConfig(n,"ga-connector",{gaConnectorSettings:[]}),window.ldfdr),B=v;r._q=r._q||[];for(var z=0;z<r._q.length;z++){var W,i=r._q[z];"cfg"===i[0]&&(4!=i.length?console.warn("* [leadfeeder] invalid 'cfg' command",i):(W=i[1],-1==F.indexOf(W)?console.warn("* [leadfeeder] unsupported 'cfg' command",i):i[3]===B&&r.setTrackerOption(B,W,i[2])))}}var q="__discoverLoadEventEmitted",K={get:function(e){return window[e]},set:function(e,n){window[n]=e},clear:function(e){this.set(null,e)}};function V(r,i){var o,e,n,a;if(!r[q])return o=window.location.hostname,e=window.location.pathname,n=r.paths,a=function(e){return e===x||e[e.length-1]!==x?e:e.slice(0,-1)}(a=""===e?x:e),n.some(function(e){return n=o,t=a,e=function(e){return e.split(/\/(.*)/).filter(function(e){return""!==e})}(e=e),r=e[0],e=x+(2<=e.length?e[1]:""),r===n&&(e===t||(r=t,0<=(n=e).indexOf("*")&&0===r.indexOf(n.replace("/*","").replace("*","")))||n===x);var n,t,r})?void Ce(r.api_key,function(e){var n,t;e=e,n=r.js_object_name,200!==e.meta.status&&404!==e.meta.status||K.set(e,n),t=r.event_name,window.dataLayer=window.dataLayer||[],window.dataLayer.some(function(e){return e.event===t})||(window[q]=!0,window.dataLayer.push({event:t})),r[q]=!0,i()}):i()}l()&&m().registerPlugin(v,"discover",function(){var e=m().getTracker(v).plugins.discover.config;(e=e).jsConnectorConfigs&&0!==e.jsConnectorConfigs.length&&Nn(e.jsConnectorConfigs.map(function(n){return function(e){V(n,e)}}),0)}),l()&&m().registerPlugin(v,"file-downloads",function(){var o=m().getTracker(v),i=o.plugins["file-downloads"].config;function a(r){function i(){var e,n,t;r.removeEventListener("click",i),de(),o.track((n=function(e){var e=e.replace(/https?\:\/\//,"").split("/"),n=e[e.length-1].replace(/[\?&].*/,"");return 1!=e.length&&n?n:null}((e=r).href),t=window.location.href,{eventType:"file-download",properties:{url:function(e,n){return"/"==e.href.charAt(0)?function(e){return"/"==e.charAt(e.length-1)?e.substr(0,e.length-1):e}(n)+e.href:e.href}(e,t),filename:n},pageUrl:t,pageTitle:n}))}r.addEventListener("click",i)}function e(){for(var e=document.getElementsByTagName("a"),n=0;n<e.length;n++){var t,r=e[n];!(r.getAttribute("href")+"").match(i.filesToMatch)||r.getAttribute(t="data-lf-fd-inspected-"+v)||(r.setAttribute(t,"true"),a(r))}}i.filesEnabled&&(e(),M(e))}),l()&&m().registerPlugin(v,"form-tracking",function(){var e,n,t,r=500,u=["button","hidden","image","password","reset","submit"],i=0,o=m().getTracker(v),f=(e=o.plugins["form-tracking"].config,n=(e.fields||[]).map(function(e){return{nameRegex:new RegExp(e.nameRegex,"i"),type:e.type,lfProperty:e.lfProperty}}),t=(e.excluded||[]).map(function(e){var n,t={};for(n in e)t[n]=new RegExp(e[n],"i");return t}),{formTrackingMode:e.formTrackingMode,fields:n,excluded:t});function a(e){d(e.target,"submit-event")}function c(e){var n;return e?(n=e.type,e=e.tagName.toLowerCase(),"submit"===n?"submit-button":"button"===n||"button"===e?"normal-button":null):null}function s(e){var n,e=e.target,t=c(e)||c(e.parentElement);t&&-1==(n=((n=e).innerText||n.value||"").toLowerCase()).indexOf("prev")&&-1==n.indexOf("next")&&(n=e.form||e.closest("form"))&&d(n,t)}function l(i){var o=window.location.href;return f.excluded.some(function(e){return t=o,(r=e).pageUrl&&t.match(r.pageUrl)||function(e,n){if(n.inputName)for(var t=e.elements,r=0;r<t.length;r++){var i=t[r];if(i.name&&i.name.match(n.inputName))return!0}return!1}(i,e)||(t=i,(r=e).formId&&t.id.match(r.formId))||(t=i,!!(n=e).formClass&&t.className.split(/\s+/).some(function(e){return e&&e.match(n.formClass)}));var n,t,r})}function d(e,n){if(!(l(e)||i+r>=(new Date).getTime())){var t=function(e){for(var n={},t=e.elements,r=f.fields?f.fields.filter(function(e){return!!e.lfProperty}):[],i=0;i<t.length;i++){var o=t[i],a=o.name,c=!!o.style&&"none"==o.style.display;!a||0<=u.indexOf(o.type)||c||(n[a]={name:a,type:o.type},function(e){return"text"===(e=e.type)||"email"===e||!e}(o)&&xn(o.value)&&(n[a].suggestedLfProperty="email"),function(n){switch(f.formTrackingMode){case"configured_fields":return f.fields.some(function(e){return g(n,e)});case"all_but_excluded":return 1;default:return}}(o)&&(n[a].value=o.value,c=function(e,n){for(var t=0;t<n.length;t++){var r=n[t];if(g(e,r))return r.lfProperty}return null}(o,r))&&(n[a].lfProperty=c))}return En(n)}(e);if(t&&0!=t.length){i=(new Date).getTime(),de();try{o.track(function(e,n,t){var n={formTrackingMode:f.formTrackingMode,formEventType:n},r=e.getAttribute("id"),i=e.getAttribute("class"),e=e.getAttribute("action");r&&(n.formId=r);i&&(n.formClass=i);e&&(n.formAction=e);t&&(n.inputFields=t);return{eventType:"form-submit",properties:n}}(e,n,t),function(){})}catch(e){}}}}function g(e,n){return(!n.type||n.type===e.type)&&e.name.match(n.nameRegex)}function p(e){try{e.contentDocument&&(e.contentDocument.addEventListener("submit",a),e.contentDocument.addEventListener("click",s,!0))}catch(e){}}function w(){for(var e=document.getElementsByTagName("iframe"),n=0;n<e.length;n++)!function(e){var n="data-lf-form-tracking-inspected-"+v;e.getAttribute(n)||(e.setAttribute(n,"true"),p(e),e.addEventListener("load",function(){p(e)}))}(e[n])}switch(f.formTrackingMode){case"disabled":return;case"metadata":case"configured_fields":case"all_but_excluded":return document.addEventListener("submit",a),document.addEventListener("click",s,!0),w(),void M(w);default:return}});var Y=null,$="__gaConnectorEventsEmitted",X="LFcompanyData",H="LFvisitorInfo";function Z(e){-1===window[$].indexOf(e)&&window[$].push(e)}function Q(o,a){setTimeout(function(){var e,n,t;e=o.ga_id,n=function(i){if(!i)return a();Ce(o.api_key,function(e){var n,t,r,e=be(e.data,o.mappings);n=i,t=o.ga_id,e=e,r=f(window),null!==e&&(r((n=n.get("name"))+".set",e),r(n+".send",{hitType:"event",eventCategory:H,eventAction:X,nonInteraction:!0}),Z(t)),a()})},t=e.toLowerCase(),f(window)(function(){if(void 0===f(window).getAll)return n(null);var e=f(window).getAll().filter(function(e){return e.get("trackingId").toLowerCase()==t})[0];n(e)})},100)}function ee(e,n){var t,r,i;t="https://www.googletagmanager.com/gtag/js?id="+e,r=function(){window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",e,{send_page_view:!1}),n()},(i=document.createElement("script")).type="text/javascript",i.src=t,i.onload=function(){r&&r()},document.getElementsByTagName("head")[0].appendChild(i)}function ne(i,o){function e(){Ce(i.api_key,function(e){var n,t,r,e=be(e.data,i.mappings);n=i.ga_id,e=e,r=Ie(window),null!==e&&((t=JSON.parse(JSON.stringify(e))).user_properties=e,t.event_category=H,t.non_interaction=!0,t.send_to=n,r("event",X,t),Z(n)),o()})}Ie(window)?e():ee(i.ga_id,e)}function te(e){(f(window)||Ie(window)||_e(window))&&(clearInterval(Y),Nn(e.map(function(t){return function(e){var n;e=e,Se((n=t).ga_id)?ne(n,e):f(window)&&Q(n,e)}}),0))}window[$]=[],l()&&m().registerPlugin(v,"ga-connector",function(){var e,n=m().getTracker(v).plugins["ga-connector"].config;(e=n).gaConnectorSettings&&0!==e.gaConnectorSettings.length&&(Y=setInterval(function(){te(e.gaConnectorSettings)},300),setTimeout(function(){clearInterval(Y)},1e4))}),l()&&m().registerPlugin(v,"intercom-tracking",function(){var e,n,t,r,i,o,a=m().getTracker(v);function c(){clearInterval(i),e()?clearTimeout(o):(n*=t,i=setInterval(c,n))}a.plugins["intercom-tracking"].config.intercomTrackingEnabled&&(e=function(){return void 0!==window.Intercom&&window.Intercom.booted&&(window.Intercom("update",{lfClientId:a.getClientId()}),1)},n=n||100,t=t||1.5,r=r||15e3,o=setTimeout(function(){clearInterval(i)},r),i=setInterval(c,n))});var re=null,ie=null;function u(n,t,r){setTimeout(function(){r&&(re=ie);var e={pageUrl:ie=t};re&&(e.referrer=re),n.pageview(e)},0)}function oe(e){var i,o,a,c;window.history&&(i=e,o=window.history,a=o.pushState,o.pushState=function(e,n,t){var r=a.apply(o,arguments);return u(i,window.location.href,!0),r},c=o.replaceState,o.replaceState=function(e,n,t){var r=c.apply(o,arguments);return u(i,window.location.href,!1),r},window.addEventListener("popstate",function(){u(e,window.location.href,!0)}),window.addEventListener("hashchange",function(){u(e,window.location.href,!0)}))}function ae(e){return e.src.replace("/?","?").split("/").pop().split("?")[0]}function ce(e,n,t){n={method:n},t&&(n.value=t),t=JSON.stringify(n);e.contentWindow.postMessage(t,"*")}function ue(e){return(R(e.src,"http://player.vimeo.com")||R(e.src,"https://player.vimeo.com"))&&!!ae(e)}function fe(e){ue(e)&&(ce(e,"addEventListener","play"),ce(e,"getVideoTitle",""))}function se(){var e=document.getElementsByTagName("iframe");if(e.length)for(var n=0;n<e.length;n++){var t=e[n],r="data-lf-vimeo-playback-inspected-"+v;t.getAttribute(r)||(t.setAttribute(r,"true"),fe(t),t.addEventListener("load",function(){fe(t)}))}}l()&&m().registerPlugin(v,"spa-tracking",function(){var e=m().getTracker(v);e=e,ie=window.location.href,"spa"===e.autoTrackingMode&&oe(e)}),l()&&m().registerPlugin(v,"vimeo-playback",function(){var n,t=m().getTracker(v);function r(e){return n[e]||(n[e]={src:e,tracked:!1,videoData:null}),n[e]}function i(e){var n=r(e.src);n.tracked||(n.tracked=!0,e="https://vimeo.com/"+ae(e),t.track({eventType:"video-start",properties:{videoUrl:e,videoTitle:n.title}}))}function e(e){if(!/^https?:\/\/player.vimeo.com/.test(e.origin))return!1;var n=function(n){try{return JSON.parse(n.data)}catch(e){return n.data}}(e),t=function(e){for(var n=document.getElementsByTagName("iframe"),t=0;t<n.length;t++)if(e.source===n[t].contentWindow)return n[t];return null}(e);if(null==t)return!1;switch(n.event){case"ready":fe(t);break;case"play":i(t)}"getVideoTitle"==n.method&&(r(t.src).title=n.value,-1!==t.src.indexOf("autoplay=1"))&&i(t)}t.plugins["vimeo-playback"].config.vimeoPlaybackTrackingEnabled&&window.postMessage&&(n={},window.addEventListener?window.addEventListener("message",e,!1):window.attachEvent("onmessage",e,!1),se(),M(se))}),l()&&m().registerPlugin(v,"yt-playback",function(){var o,n,i,a,t=m().getTracker(v);function e(){var e=document.getElementsByTagName("iframe");if(e.length){i||(window.addEventListener("message",function(e){if(-1!==["https://www.youtube.com","https://www.youtube-nocookie.com"].indexOf(e.origin)&&void 0!==e.data){var n,t=e;try{n=JSON.parse(t.data)}catch(t){return}var r=function(e,n){if(o[e])return o[e];for(var t=document.getElementsByTagName("iframe"),r=0;r<t.length;r++){var i=t[r];if(i.contentWindow===n.source||i.contentDocument&&i.contentDocument.defaultView===n.source)return o[e]=i}return null}(n.id,t);if(null!==r)switch(n.event){case"initialDelivery":!function(e,n){n=f(n.src);e.info&&e.info.videoData&&!n.videoData&&(n.videoData=e.info.videoData)}(n,r);break;case"onStateChange":!function(e,n){-1===e.info&&u(n)}(n,r)}}}),i=!0);for(var n=0;n<e.length;n++){var t=e[n],r="data-lf-yt-playback-inspected-"+v;t.getAttribute(r)||(t.setAttribute(r,"true"),c(t,r=++a+1e3),t.addEventListener("load",function(e,n){return function(){c(e,n)}}(t,r)))}}}function c(e,n){if(function(e){return R(e.src,"https://www.youtube.com/embed/")||R(e.src,"https://www.youtube-nocookie.com/embed/")}(t=e)&&function(e){return s(e)}(t)&&-1===t.src.indexOf("enablejsapi=0")){var t,r;if(-1===e.src.indexOf("autoplay=1"))return-1===e.src.indexOf("enablejsapi")?(r=-1===(t=e).src.indexOf("?")?"?":"&",r=(r+="enablejsapi=1")+"&origin="+window.location.origin,t.src=t.src+r):(t=e,r=n,void(("undefined"==typeof YT||"function"==typeof YT.get&&t.id&&void 0===YT.get(t.id))&&(l(o[r]=t,{event:"listening",id:r,channel:"widget"}),l(t,{event:"command",func:"addEventListener",args:["onStateChange"],id:r,channel:"widget"}))));u(e)}}function u(e){var n=f(e.src);n.tracked||(n.tracked=!0,e="https://www.youtube.com/watch?v="+s(e),t.track({eventType:"video-start",properties:{videoUrl:e,videoTitle:function(e){if(e)return e.title}(n.videoData)}}))}function f(e){return n[e]||(n[e]={src:e,tracked:!1,videoData:null}),n[e]}function s(e){return e.src.split("/")[4].split("?")[0]}function l(e,n){n=JSON.stringify(n);e.contentWindow.postMessage(n,"*")}t.plugins["yt-playback"].config.ytPlaybackTrackingEnabled&&window.postMessage&&(o={},i=!(n={}),a=0,e(),M(e))});var le=250;function de(){var e;e=(new Date).getTime()+le,m().suppressUnloadUntil=e}function ge(){var e=new Date,n=m().suppressUnloadUntil;if(!(n<e.getTime()))for(;n>=e.getTime();0)e=new Date}!l()||"suppressUnloadUntil"in m()||(m().suppressUnloadUntil=0,window.addEventListener("beforeunload",ge,!1));var pe,we="_lfa",ve=5;function me(e){e.crossDomainLinking.enabled&&e.lfaCookieEnabled&&(pe=window.location.href,document.addEventListener("mousedown",function(e){var n;(e=function(e){var n,t=0;do{if(function(e){return e&&(e=String(e.nodeName).toLowerCase(),-1!==["a","area"].indexOf(e))}(e))return e}while(n=e.parentNode,n=(e=n)?e.parentNode:null,t++,null!==n&&t<100);return null}(e=e.target))&&function(e){var n=e.getAttribute("href");if(!n)return;if(In(n=String(n))){var t=e.hostname,r=document.location.hostname,i=N().crossDomainLinking.allowedDomains;if(!ye(t,r))for(var o=0;o<i.length;o++)if(!ye(r,i[o])&&ye(t,i[o]))return 1}return}(e)&&(n=(e=e).getAttribute("href"),e.setAttribute("href",function(e){e=bn(e,we);var n=function(){var e=N().getClientId(),n=String(ke());return e+"-"+n}();return Tn(e,we,n)}(n)))}))}function he(){if(N().crossDomainLinking.enabled){var e=pe;if(e=Cn(e,we)){e=function(e){if(47===e.length&&/^LF\d\.\d\.[0-9a-z]{16}\.\d{13}-\d{10}$/.test(e)){var e=e.split("-"),n=e[0],e=parseInt(e[1]),t=ke();if(!(Math.abs(t-e)>ve))return n}}(e=String(e));if(e)return e}}}function ke(){return Math.floor((new Date).getTime()/1e3)}function ye(e,n){e=e.toLowerCase(),n=n.toLowerCase();for(var t=e.split("."),r=n.split("."),i=1;i<=r.length;i++)if(r[r.length-i]!==t[t.length-i])return;return 1}var o={key:"__lf_discover",softRefresh:18e5,ttl:864e6,storedAt:null,get:function(){if(I()){var e=window.localStorage.getItem(this.key);if(null!==e){var n=null;try{n=JSON.parse(e),this.storedAt=n.storedAt,delete n.storedAt}catch(e){if(e instanceof SyntaxError)return;throw e}return n}}},set:function(e){I()&&(e.storedAt=Date.now(),window.localStorage.setItem(this.key,JSON.stringify(e)),delete e.storedAt)},clear:function(){I()&&(this.storedAt=null,window.localStorage.removeItem(this.key))},isExpired:function(){return null===this.storedAt||void 0===this.storedAt||Date.now()>=this.storedAt+this.ttl},isSoftExpired:function(){return null===this.storedAt||void 0===this.storedAt||Date.now()>=this.storedAt+this.softRefresh}};function Te(e){200!==e.meta.status&&404!==e.meta.status||o.set(e)}function a(e,n){var t=new XMLHttpRequest;t.open("GET",e,!0),t.onload=function(){var e;200===this.status&&(e=function(e){try{return JSON.parse(e)}catch(e){if(e instanceof SyntaxError)return{meta:{status:404}};throw e}}(this.response),n(e))},t.send()}function be(r,e){var n,i;return e&&r&&(n="attribute",e.map(function(e){return Sn(e,n)}).map(function(e){return Sn(r,e)}).some(function(e){return null!=e&&""!==e}))?(i={},e.forEach(function(e){var n=Sn(r,e.attribute),t=e.dimension;i[t]=n||e.fallback_value}),i):null}function Ce(e,n){var e="https://cs.lf-discover.com/companies/?api_key="+e,t=Cn(window.location.href,"_lf_discover_demo"),r=(""!==t&&(e=Tn(e,"demo",t)),o.get());""!==t?a(e,function(e){n(e)}):null==r?a(e,function(e){Te(e),n(e)}):o.isExpired()?(o.clear(),a(e,function(e){Te(e),n(e)})):o.isSoftExpired()?(n(r),a(e,function(e){Te(e)})):n(r)}function Ie(e){return e.gtag||null}function _e(e){return e.google_tag_manager||{}}function f(e,n){return(n=e.GoogleAnalyticsObject||"ga")&&e[n]?e[n]:null}function Ee(e){return e._gat||null}function s(e,n,t){void 0!==e&&-1===n.indexOf(e)&&(t&&"object"==typeof e&&"string"==typeof e.vtp_trackingId?n.push(e.vtp_trackingId):n.push(e))}function Se(e){return/^G-[A-Z0-9]*/.test(e)}function Oe(){for(var e=0,n=[],t=(window.dataLayer||[]).filter(function(e){return"config"==e[0]}).map(function(e){return e[1]}),r=Object.keys(_e(window)).filter(Se),e=0;e<t.length;e++)s(t[e],n);for(e=0;e<r.length;e++)s(r[e],n);return n}function Ne(){var e,n={clientIds:[],trackingIds:[],measurementIds:Oe()};if(null!==f(window))for(var t=window,r=n,i=!(t=f(t))||"function"!=typeof t.getAll?[]:t.getAll(),o=0;o<i.length;o++)s(i[o].get("clientId"),r.clientIds),s(i[o].get("trackingId"),r.trackingIds);else for(var t=window,a=n,c=!(t=Ee(t))||"function"!=typeof t._getTrackers?[]:t._getTrackers(),u=0;u<c.length;u++)s(c[u]._getAccount(),a.trackingIds,!0);return n.clientIds.length||(e=function(){var e=b("_ga");if(e){e=e.split(".");if(!(e.length<2))return e[e.length-2]+"."+e[e.length-1]}}())&&n.clientIds.push(e),n}function m(){return"undefined"==typeof window?null:window.ldfdr}function l(){return"undefined"!=typeof window&&void 0!==window.ldfdr}function d(n){var e=En(U());return _n(n)?e.map(function(e){return n(e)}):e}window.ldfdr.getTracker=function(e,n){return e=U()[e]||null,_n(n)?n(e):e},window.ldfdr.getAll=d,window.ldfdr.track=function(n){d(function(e){e.track(n)})},window.ldfdr.identify=function(n){d(function(e){e.identify(n)})},window.ldfdr.pageview=function(n){d(function(e){e.pageview(n)})},window.ldfdr.acceptCookie=function(n){return d(function(e){return e.acceptCookie(n)}).some(function(e){return!0===e})},window.ldfdr.rejectCookie=function(n){return d(function(e){return e.rejectCookie(n)}).some(function(e){return!0===e})},window.ldfdr.setDebugSettings=function(e){Me(G,JSON.stringify(e),36e5)};var Ae,g="none",p="basic",w="all",De=[g,p,w],Le="__lfaCmClientId",h="_lfa",k="LF1.1",y="_lfa_consent";function xe(){je(Je()),je(h),Re(h),je(y),Re(y)}function Re(e){if(b(e)){var n=window.ldfdr.cfg.cookieDomain;if(n)qe(e,n);else for(var t=ze().reverse(),r=0;r<t.length;r++)if(qe(e,n=t[r]),!b(e))return}}function Me(e,n,t){var r=window.ldfdr.cfg.cookieDomain||Ae;if(r)C(e,n,t,"/",r);else for(var i=ze(),o=0;o<i.length;o++)if(C(e,n,t,"/",r=i[o]),Pe(r)&&b(e)===n)return void(Ae=r)}function Pe(e){var n="_lfa_test_cookie_stored",t=(new Date).getTime().toString()+"-"+Math.random().toString(),t=(C(n,t,1e3,"/",e),b(n)===t);return qe(n,e),t}function Ue(e,n,t){Me(e,n,t),I()&&(window.localStorage.setItem(e,n),(e=new Date).setTime(e.getTime()+t),window.localStorage.setItem(Je(),e.toISOString()))}function je(e){I()&&window.localStorage.removeItem(e)}function Je(){return h+"_expiry"}function Ge(){return function(){var e=b(h);if(e){if(!R(e,k)){var n=function(e){var n;try{n=function(e){return e&&(e=function(e){try{return decodeURIComponent(window.atob(e).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""))}catch(e){return 0}}(e))?JSON.parse(e):0}(e)}catch(e){return 0}return n?En(n)[0]:0}(e);if(n)return n}return e}}()||function(){if(!I())return 0;var e=window.localStorage.getItem(h);if(null==e)return 0;var n=window.localStorage.getItem(Je());null!=n&&(new Date).toISOString()>n&&(e=0);return e}()}function T(){var e=b(y);return(e=!e&&I()?window.localStorage.getItem(y):e)?"true"===e?w:-1==De.indexOf(e)?null:e:null}function b(e){e=new RegExp("(^|;)[ ]*"+e+"=([^;]*)").exec(document.cookie);return e?window.decodeURIComponent(e[2]):0}function Fe(e,n){return e&&R(e,k)||(e=We(On())),Ue(h,e,n),e}function Be(e,n){return-1==De.indexOf(e)?T():(Ue(y,e,n),e)}function ze(e){var e=e||document.location.hostname,n=(e=0===e.indexOf("www.")?e.substring(4):e).split(".");if(4===n.length){e=n[n.length-1];if(parseInt(e,10)==e)return["none"]}for(var t=[],r=n.length-2;0<=r;r--)t.push(n.slice(r).join("."));return t.push("none"),t}function We(e){return k+"."+e+"."+(new Date).getTime()}function qe(e,n){C(e,"",-3600,"/",n)}function C(e,n,t,r,i,o){var a;t&&(a=new Date).setTime(a.getTime()+t),document.cookie=e+"="+window.encodeURIComponent(n)+(t?";expires="+a.toGMTString():"")+";path="+(r||"/")+(i&&"none"!==i?";domain="+i:"")+(o?";secure":"")+";SameSite=Lax"}function Ke(){return Pe(null)}function I(){try{return window.localStorage}catch(e){}}var _,Ve=1e3,Ye=/^0_([0-9a-f]+)-([0-9a-f]+)-([0-9]*)$/,E=null,S=[],$e=null,O={success:!1},Xe=0;function N(){return m().getTracker(v)}function He(){var e=N(),n=e.foreignCookieSettings,t=[];if(n&&dn(e))for(var r=function(){for(var e=document.cookie.split(";"),n={},t=0;t<e.length;t++){var r=e[t].split("=");n[(r[0]+"").trim()]=unescape(r.slice(1).join("="))}return n}(),i=Object.keys(r),o=Object.keys(n),a=0;a<o.length;a++)for(var c=o[a],u=n[c],f=0;f<i.length;f++){var s=i[f];s.match(u)&&(s=r[s],t.push({type:c,value:s}))}return t}function Ze(){return he()||Ge()}function Qe(e){if(null===E&&(E=T()),!en(e)||!Ke())return!1;if(!A(e))return E!==g;switch(E){case w:case p:return!0;default:return!1}}function en(e){return!0===e.lfaCookieEnabled}function A(e){return!0===e.consentManagementEnabled}function nn(){return!0===N().useDualStackEndpoint}function tn(e,n){n=n||{};var t=Ne(),r=n.eventType||"tracking-event",i=N();return{gaTrackingIds:t.trackingIds,gaMeasurementIds:t.measurementIds,gaClientIds:t.clientIds,context:function(e,n){var t=e.referrer||document.referrer;"form-submit"===n&&(t="");return{library:{name:"lftracker",version:J},pageUrl:function(e){if(dn(N()))return e;return null===Cn(e,"utm_term").match(Ye)?e:bn(e,"utm_term")}(rn(e)),pageTitle:e.pageTitle||document.title,referrer:t}}(n,r),event:r,clientEventId:On(),scriptId:v,cookiesEnabled:Qe(i),consentLevel:E||g,anonymizeIp:!1,lfClientId:e,foreignCookies:He(),properties:n.properties||{},autoTrackingEnabled:!1!==i.enableAutoTracking,autoTrackingMode:i.autoTrackingMode}}function rn(e){return e.pageUrl||window.location.href}function on(e,n,t){e=e+"?sid="+encodeURIComponent(n.scriptId),n=An(JSON.stringify(n)),e=navigator.sendBeacon(e,n);D(t,{success:e})}function an(e,n,t){var e=e+"?sid="+encodeURIComponent(n.scriptId),n=An(JSON.stringify(n)),r=document.createElement("img");r.width=1,r.height=1,r.src=e+"&data="+n,r.onload=function(){D(t,{success:!0})},r.onerror=function(){D(t,{success:!1})}}function cn(){var e=null,n=N().trackingCookieDurationDays;return e=n?24*n*60*60*1e3:e}function un(){var e;return Qe(N())?Fe(Ze(),cn()):(Ge()&&setTimeout(fn,1e3),A(N())&&E!==g?(window[Le]||(e=We(On())+".CM",window[Le]=e),window[Le]):k+"."+On()+".NC")}function fn(){!Ge()||!function(){for(var e=0,n=m().getAll();e<n.length;e++)if(Qe(n[e]))return;return 1}()||xe()}function sn(e){var n,t,r=N(),i=(void 0===r.gaInitRetries&&(r.gaInitRetries=0),1<=r.gaInitRetries);return n=window,null!==(t=f(n))&&"function"==typeof t&&"function"==typeof t.getAll||null!==(t=Ee(n))&&"object"==typeof t&&"function"==typeof t._getTrackers||i?e():(setTimeout(function(){return sn(e)},100*Math.pow(2,r.gaInitRetries)),void(r.gaInitRetries+=1))}function ln(n,t){!function(e){switch(e){case"form-submit":case"identify":return dn(N());default:return 1}}((n=n||{}).eventType)?S.push({args:n,doneCallback:t}):sn(function(){var e=tn(wn(),n);!0===N().useSendBeaconApi&&navigator&&navigator.sendBeacon?(on("https://tr-rc.lfeeder.com",e,t),nn()&&on("https://tr2.lfeeder.com",e)):(an("https://tr-rc.lfeeder.com",e,t),nn()&&an("https://tr2.lfeeder.com",e))})}function dn(e){return!(!Qe(e)||A(e)&&E!==w)}function gn(e,n){var t,r=(e=e||{}).email;xn(r)&&(t=e.firstName,e=e.lastName,r={email:r},t&&"string"==typeof t&&(r.firstName=t),e&&"string"==typeof e&&(r.lastName=e),ln({eventType:"identify",properties:r},n))}function pn(e,n){var e=function(e){var n={eventType:"tracking-event"};(e=e||{}).pageUrl&&(n.pageUrl=e.pageUrl);e.pageTitle&&(n.pageTitle=e.pageTitle);e.referrer&&(n.referrer=e.referrer);return n}(e),t=rn(e);(t=!In(t)&&R(t,"/")?window.location.protocol+"//"+window.location.host+t:t)===$e&&Xe+Ve>=(new Date).getTime()?D(n,O):($e=t,Xe=(new Date).getTime(),O={success:!0},ln(e,function(e){D(n,O=e)}))}function D(e,n){_n(e)&&e(n)}function wn(){return e=un,_=_||e();var e}function vn(e){var n=N();if(hn(n)){var e=e=void 0===e?w:e,t=n;switch(e){case w:return function(e){kn(w),e.track({eventType:"consent"});for(var n=0;n<S.length;n++){var t=S[n];ln(t.args,t.doneCallback)}return S=[],!0}(t);case p:return function(e){return kn(p),e.track({eventType:"consent"}),S=[],!0}(t)}console.warn("* [leadfeeder] invalid consent level",e)}return!1}function mn(){var e=N();return!!hn(e)&&(_=void 0,$e=E=null,O={success:!(S=[])},Xe=0,xe(),E=Be(g,cn()),e.track({eventType:"consent"}),!0)}function hn(e){return Ke()&&!(!en(e=e)||!A(e))}function kn(e){var n=cn();_=E!==e&&T()!==e?(Dn(_,".NC")&&(_=void 0),E=Be(e,n),Fe(wn(),n)):(E=T(),Ze())}function yn(){for(var e,n=m().registerTracker(v,ln,gn,pn,wn,vn,mn),t=n,r=t.getPlugins(),i=0;i<r.length;i++){var o=r[i];o.initialized||o.init(),o.initialized=!0}return t.pluginsInitialized=!0,me(n),!0===A(n)&&null!==(E=T())&&Be(E,cn()),t=n,(e=document.createEvent("Event")).tracker=t,e.initEvent("ldfdr.trackerReady",!0,!1),document.dispatchEvent(e),n}function Tn(e,n,t){t=t||"";var r=(e=String(e)).indexOf("#"),i=e.length,o=e.substr(0,r=-1===r?i:r),e=e.substr(r,i-r);return-1===o.indexOf("?")?o+="?":Dn(o,"?")||(o+="&"),o+window.encodeURIComponent(n)+"="+window.encodeURIComponent(t)+e}function bn(e,n){if(-1===(e=String(e)).indexOf("?"+n)&&-1===e.indexOf("&"+n))return e;var t=e.indexOf("?");if(-1===t)return e;var r=e.substr(t+1),e=e.substr(0,t);if(r){for(var t="",i=r.indexOf("#"),o=(-1!==i&&(t=r.substr(i+1),r=r.substr(0,i)),r.split("&")),a=o.length-1;0<=a;a--)o[a].split("=")[0]===n&&o.splice(a,1);i=o.join("&");i&&(e=e+"?"+i),t&&(e+="#"+t)}return e}function Cn(n,e){e=new RegExp("[\\?&#]"+e+"=([^&#]*)").exec(n);if(!e)return"";n=e[1];try{return window.decodeURIComponent(n)}catch(e){return unescape(n)}}function In(e){return R(e,"//")||R(e,"http://")||R(e,"https://")}var L,x="/";function _n(e){return"function"==typeof e}function En(e){if(Object.values)return Object.values(e);var n,t=[];for(n in e)"string"==typeof n&&e.propertyIsEnumerable(n)&&t.push(e[n]);return t}function Sn(e,n){for(var t=n.split(".");e&&t.length&&(e=e[t.shift()]););return e}function On(){return function(e){function n(e,n){return e<<n|e>>>32-n}function t(e){for(var n="",t=7;0<=t;t--)n+=(e>>>4*t&15).toString(16);return n}var r,i,o,a,c,u,f,s,l,d,g=[],p=1732584193,w=4023233417,v=2562383102,m=271733878,h=3285377520,k=[];for(e=function(e){return unescape(window.encodeURIComponent(e))}(e),d=e.length,i=0;i<d-3;i+=4)o=e.charCodeAt(i)<<24|e.charCodeAt(i+1)<<16|e.charCodeAt(i+2)<<8|e.charCodeAt(i+3),k.push(o);switch(3&d){case 0:i=2147483648;break;case 1:i=e.charCodeAt(d-1)<<24|8388608;break;case 2:i=e.charCodeAt(d-2)<<24|e.charCodeAt(d-1)<<16|32768;break;case 3:i=e.charCodeAt(d-3)<<24|e.charCodeAt(d-2)<<16|e.charCodeAt(d-1)<<8|128}k.push(i);for(;14!=(15&k.length);)k.push(0);for(k.push(d>>>29),k.push(d<<3&4294967295),r=0;r<k.length;r+=16){for(i=0;i<16;i++)g[i]=k[r+i];for(i=16;i<=79;i++)g[i]=n(g[i-3]^g[i-8]^g[i-14]^g[i-16],1);for(a=p,c=w,u=v,f=m,s=h,i=0;i<=19;i++)l=n(a,5)+(c&u|~c&f)+s+g[i]+1518500249&4294967295,s=f,f=u,u=n(c,30),c=a,a=l;for(i=20;i<=39;i++)l=n(a,5)+(c^u^f)+s+g[i]+1859775393&4294967295,s=f,f=u,u=n(c,30),c=a,a=l;for(i=40;i<=59;i++)l=n(a,5)+(c&u|c&f|u&f)+s+g[i]+2400959708&4294967295,s=f,f=u,u=n(c,30),c=a,a=l;for(i=60;i<=79;i++)l=n(a,5)+(c^u^f)+s+g[i]+3395469782&4294967295,s=f,f=u,u=n(c,30),c=a,a=l;p=p+a&4294967295,w=w+c&4294967295,v=v+u&4294967295,m=m+f&4294967295,h=h+s&4294967295}return(l=t(p)+t(w)+t(v)+t(m)+t(h)).toLowerCase()}(""+(new Date).getTime()+Math.random()).slice(0,16)}function Nn(e,n){n!=e.length&&e[n](function(){Nn(e,n+1)})}function An(e){return window.btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,function(e,n){return String.fromCharCode("0x"+n)}))}function R(e,n){return!!e&&e.substring(0,n.length)===n}function Dn(e,n){return-1!==(e=String(e)).indexOf(n,e.length-n.length)}function Ln(t,r,i){function o(){s=!1===i.leading?0:(new Date).getTime(),a=null,f=t.apply(c,u),a||(c=u=null)}function e(){var e=(new Date).getTime(),n=(s||!1!==i.leading||(s=e),r-(e-s));return c=this,u=arguments,n<=0||r<n?(a&&(clearTimeout(a),a=null),s=e,f=t.apply(c,u),a||(c=u=null)):a||!1===i.trailing||(a=setTimeout(o,n)),f}var a,c,u,f,s=0;i=i||{};return e.cancel=function(){clearTimeout(a),s=0,a=c=u=null},e}function xn(e){return"string"==typeof e&&e.match(/^[^@\s]+@([^@\s]+\.)+[^@\W]+$/)}function M(e,n){n=n?n++:1,!window.MutationObserver||10<=n||(document.body?new MutationObserver(Ln(e,100,{leading:!1})).observe(document.body,{childList:!0,subtree:!0}):setTimeout(M.bind(null,e,n),100))}l()&&(location.href,"disabled"===(L=yn()).autoTrackingMode||"on_script_load"===L.autoTrackingMode&&!1===L.enableAutoTracking||L.pageview({},function(){L.autoTrackingInitialized=!0}))}();