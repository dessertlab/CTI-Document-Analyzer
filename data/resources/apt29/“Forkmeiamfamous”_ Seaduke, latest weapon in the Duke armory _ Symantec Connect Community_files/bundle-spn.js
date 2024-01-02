// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-3.0
(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,s=void 0,s=function(e,t){if("object"!==n(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,t||"default");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===n(s)?s:String(s)),r)}var i,s}function r(e){var t=a();return function(){var o,r=u(e);if(t){var i=u(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,o)}}function i(e){var t="function"==typeof Map?new Map:void 0;return i=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return s(e,arguments,u(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),c(o,e)},i(e)}function s(e,t,n){return s=a()?Reflect.construct.bind():function(e,t,n){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(e,o));return n&&c(r,n.prototype),r},s.apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}if(e.r(t),e.d(t,{init:()=>M,monitorHighFidelity:()=>E,monitorTwitterArchiver:()=>D,systemStatus:()=>O,watchJob:()=>S}),"undefiend"!=typeof window.XMLHttpRequest){var l=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(a,e);var t,n,i,s=r(a);function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),s.apply(this,arguments)}return t=a,n&&o(t.prototype,n),i&&o(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}(i(XMLHttpRequest));Object.defineProperty(l.prototype,"responseURL",Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype,"responseURL"))}function p(e){return document.cookie.search(e)>=0}function f(e,t){var n=window["HTML".concat(e,"Element")];if(void 0!==n){var o=Object.getOwnPropertyDescriptor(n.prototype,t);void 0!==o&&Object.defineProperty(n.prototype,"_wm_".concat(t),o)}}f("Image","src"),f("Media","src"),f("Embed","src"),f("IFrame","src"),f("Script","src"),f("Link","href"),f("Anchor","href");var d=JSON;function h(e,t,n,o){return o=o||{},function(e,t,n,o,r){var i;if((i=window.XMLHttpRequest?new l:new ActiveXObject("Microsoft.XMLHTTP")).onreadystatechange=function(){4==this.readyState&&n(i)},i.open(e,t,!0),o)for(var s in o)o.hasOwnProperty(s)&&i.setRequestHeader(s,o[s]);i.withCredentials=!0,i.send(r)}("POST","/__wb/web-archive/",(function(e){401===e.status?o.userNotLoggedIn&&o.userNotLoggedIn(e):e.status>=400?o.failure&&o.failure(e):o.success&&o.success(e)}),{"Content-Type":"application/json"},d.stringify({url:e,snapshot:t,tags:n||[]})),!1}var m;function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){return $("<div>",{id:t}).append($("<a>",{href:e}).html(e),$("<span>").html(" Saving... ").append('<img src="'.concat(g,'images/loading.gif" />')))}function y(e){var t=$("body").find("#".concat(e.job_id)).first();if("success"===e.status){var n="/web/".concat(e.timestamp,"/").concat(e.original_url);t.children("a").first().attr("href",n).html(n),t.children("span").html('<span class="label label-success" style="display:inline-block;margin-left:2px"><span class="iconochive-Done"></span> Done!</span>'),!0===e.first_archive&&t.children("span").first().append('<span class="label label-default" style="display:inline-block;margin-left:2px"><span class="iconochive-First"></span> First Archive</span>')}else"error"===e.status&&t.children("span").html("").append('<span class="label label-danger" style="display:inline-block;margin-left:2px">Error! '+e.message+"</span>")}var w,g,j,_=[];function k(e){$.post("/save/status?_t="+Date.now(),{job_id_outlinks:e},(function(t){var n,o=!1;for(var r in t){var i=t[r];y(i),"pending"===i.status?o=!0:"success"===i.status&&-1===_.indexOf(i.job_id)?(_.push(i.job_id),n=i.job_id,$.ajax({url:"/save/status/".concat(n,"?_t=").concat(Date.now()),success:function(e){if(e.outlinks&&"object"===v(e.outlinks)&&"0"!==Object.keys(e.outlinks)[0]&&Object.keys(e.outlinks).length){for(var t in e.outlinks){var n=e.outlinks[t];0===$("body").find("#"+n).length&&$("#spn-outlinks").append(b(t,n))}setTimeout((function(){k(e.job_id)}),6e3)}}})):"error"===i.status&&-1===_.indexOf(i.job_id)&&_.push(i.job_id)}!1!==o&&setTimeout((function(){k(e)}),6e3)}))}function O(){$.get("/save/status/system",(function(e){"ok"!==e.status&&$("#web_save_div").prepend('<div class="alert alert-warning">'.concat(e.status,"</div>"))}))}function S(e,t,n){w=e,g=t,j=n,m=$("#saving-msg"),p("logged-in-user")||$("#spn-option-mywebarchive").hide(),window.location.hash&&$("#spn-url").append(window.location.hash),$("#report-issue").on("click",(function(){$.ajax({url:"/save/_report-issue/".concat(w),beforeSend:function(e){$("#report-issue-container").html('Sending info... <img src="'.concat(g,'images/loading.gif"/>'))},complete:function(e){$("#report-issue-container").html("Thank you!")}})})),R()}function T(e){var t="/web/".concat(e.timestamp,"/").concat(e.original_url);if("available"in e&&"message"in e)$("#spn-result").append($("<span>").text(e.message+" Visit page: "),$("<a>",{href:t}).html(t)),$("#spn-resources").hide(),$("#spn-option-mywebarchive").hide();else{if($("#spn-title").append($("<span>").html(" "),$("<span>",{class:"label label-success",style:"font-size: small"}).append($("<span>",{class:"iconochive-Done"}),$("<span>").html(" Done!"))),"first_archive"in e&&$("#spn-title").append($("<span>").html(" "),$("<span>",{class:"label label-default",style:"font-size: small"}).append($("<span>",{class:"iconochive-First"}),$("<span>").html(" First Archive "))),$("#spn-result").append($("<span>").html(" A snapshot was captured. Visit page: ").append($("<a>",{href:t}).html(t))),"screenshot"in e){var n="/web/".concat(e.timestamp,"/").concat(e.screenshot);$("#spn-result").append($("<div>").html("A screen shot was captured. View screen shot: ").append($("<a>",{href:n}).html(n)))}if("www.youtube.com"===new URL(e.original_url).hostname&&$("#spn-result").append("<div>It may take a few days for YouTube videos to become available for playback.</div>"),"message"in e&&$("#spn-result").append($("<div>").html(e.message)),"undefined"!==e.resources&&0!==e.resources.length||$("#spn-resources").hide(),e.outlinks&&"object"===v(e.outlinks)&&"0"!==Object.keys(e.outlinks)[0]&&Object.keys(e.outlinks).length){for(var o in $("#spn-outlinks").append("<strong>Saving outlinks and their embedded resources</strong><br />"),e.outlinks)$("#spn-outlinks").append(b(o,e.outlinks[o]));k(w)}$("<div>",{class:"text-center"}).append($("<a>",{href:"/save"}).html("Return to Save Page Now")).insertAfter("#spn-outlinks"),p("logged-in-user")&&p("logged-in-sig")&&$("#wm-save-mywebarchive")[0].checked?(h(e.original_url,e.timestamp),$("#wm-save-snapshot-success").show(),$("#spn-option-mywebarchive").delay(2e3).hide(0)):$("#spn-option-mywebarchive").hide(0)}m.html("")}var P=0;function x(e){if(5===(P+=1))return T(e),void function(e){$("#spn-result").append("<div>There was a delay in registering this snapshot with the Wayback Machine.</div>"),"first_archive"in e?$("#spn-result").append("<div>The snapshot may not be available right now, please try again later.</div>"):$("#spn-result").append("<div>You may be redirected to a previous version right now. This snapshot will be available later.</div>")}(e);$.ajax({url:"/web/timemap/",data:{url:e.original_url,from:e.timestamp,limit:1,_t:Date.now()},success:function(t){""!==t&&void 0!==t?T(e):setTimeout((function(){x(e)}),j)},error:function(){setTimeout((function(){x(e)}),j)}})}function R(){$.ajax({url:"/save/status/".concat(w,"?_t=").concat(Date.now()),beforeSend:function(e){""===m.html()&&m.append("Saving... ",'<img src="'.concat(g,'images/loading.gif"/>'))},success:function(e){if(e.resources){var t=e.resources.length;t>0&&($("#spn-elements-counter-container").show(),$("#spn-elements-counter").html(t));var n=e.resources.join("\n");""!=n&&$("#spn-resources").val(n)}if(e.download_size){var o=Math.round(e.download_size/e.total_size*100),r=function(e){var t=-1;do{e/=1024,t++}while(e>1024);return Math.max(e,.1).toFixed(1)+[" kB"," MB"," GB"][t]}(e.download_size);o>0&&(r+=" ("+o.toString()+"%)"),$("#spn-progress").show(),$("#spn-progress > div.progress-bar").attr("style","width: "+o.toString()+"%").attr("aria-valuenow",o).text(r)}var i;"success"===e.status?setTimeout((function(){x(e)}),j):"error"===e.status?(void 0===(i=e.message)&&(i="Internal server error."),m.html(""),$("#spn-result").append($("<p>",{class:"text-danger"}).html(i),$("<a>",{href:"/save"}).html("Return to Save Page Now")),$("#spn-resources").hide()):setTimeout(R,j)},error:function(){setTimeout(R,j)}})}function M(){$("#web-save-form").on("submit",(function(e){e.preventDefault();var t=$("#web-save-url-input").val(),n=$("#web-save-form")[0];$(n).attr("action","/save/"+t),n.submit()})),$(document).ready((function(){document.cookie.search("logged-in-user")>=0&&document.cookie.search("logged-in-sig")>=0&&($("#wm-save-option, #wm-capture-screenshot, #wm-capture-outlinks, #wm-email-result, #wm-wacz").show(),$("#wm-auth-features").hide())}))}var L=/^(https?:\/\/)?twitter.com\//;function D(){$("#web-save-url-input").on("input",(function(){!function(e){try{if(e&&L.test(e)>-1){/^((http|https):\/\/)/.test(e)||(e="https://"+e);var t=new URL(e),n=t.pathname.substr(1);if("twitter.com"===t.host&&n.length>=3&&-1===n.indexOf("/"))return!0}}catch(e){console.log(e)}return!1}($(this).val())?$("#wm-twitter-archiver").hide():$("#wm-twitter-archiver").show()}))}function E(){$("#high_fidelity").on("click",(function(){var e="#wm-capture-screenshot, #wm-save-option, #wm-wacz, #wm-error-pages, #wm-capture-outlinks, #wm-proxy";$(this)[0].checked?$(e).hide():$(e).show()}))}window.spn=t})();
// @license-end
