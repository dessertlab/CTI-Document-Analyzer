//~~tv:20010.20140827
//~~tc: Tealium Custom Container

/*
  Tealium Custom Container Notes:
  - Add sending code between "Start Tag Sending Code" and "End Tag Sending Code".
  - Add JavaScript tag library code between "Start Tag Library Code" and "End Tag Library Code".
  - Add JavaScript code only, do not add HTML code in this file.
  - Remove any <script> and </script> tags from the code you place in this file.

  Loading external JavaScript files (Loader):
  - If you need to load an additional external JavaScript file, un-comment the singe-line JavaScript comments ("//") within the following Loader sections near the bottom of this file:
      - "Start Loader Function Call"
      - "End Loader Function Call"
      - "Start Loader Callback Function"
      - "End Loader Callback Function"
  - After un-commenting, insert the path to the external JavaScript file you want to load.
  - Finally, within the Loader callback function, insert the JavaScript code that should run after the external JavaScript file has loaded.
*/

/* Start Tag Library Code */
/* End Tag Library Code */

//tealium universal tag - utag.sender.custom_container ut4.0.202310251735, Copyright 2023 Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    var u = {};
    utag.o[loader].sender[id] = u;

    // Start Tealium loader 4.32
    // Please do not modify
    if (utag === undefined) { utag = {}; } if (utag.ut === undefined) { utag.ut = {}; } if (utag.ut.loader === undefined) { u.loader = function (o) { var a, b, c, l; a = document; if (o.type === "iframe") { b = a.createElement("iframe"); b.setAttribute("height", "1"); b.setAttribute("width", "1"); b.setAttribute("style", "display:none"); b.setAttribute("src", o.src); } else if (o.type === "img") { utag.DB("Attach img: " + o.src); b = new Image(); b.src = o.src; return; } else { b = a.createElement("script"); b.language = "javascript"; b.type = "text/javascript"; b.async = 1; b.charset = "utf-8"; b.src = o.src; } if (o.id) { b.id = o.id; } if (typeof o.cb === "function") { if (b.addEventListener) { b.addEventListener("load", function () { o.cb(); }, false); } else { b.onreadystatechange = function () { if (this.readyState === "complete" || this.readyState === "loaded") { this.onreadystatechange = null; o.cb(); } }; } } l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to " + l + ": " + o.src); if (l === "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b); } } }; } else { u.loader = utag.ut.loader; }
    // End Tealium loader

    u.ev = {'view' : 1};

    u.initialized = false;

      u.map={};
  u.extend=[];


    u.send = function(a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        //##UTENABLEDEBUG##utag.DB("send:##UTID##");

        var c, d, e, f, i;

        u.data = {
          /* Initialize default tag parameter values here */
          /* Examples: */
          /* "account_id" : "1234567" */
          /* "base_url" : "//insert.your.javascript.library.url.here.js" */
          /* A value mapped to "account_id" or "base_url" in TiQ will replace these default values. */
        };


        /* Start Tag-Scoped Extensions Code */
        /* Please Do Not Edit This Section */
        
        /* End Tag-Scoped Extensions Code */


        /* Start Mapping Code */
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              u.data[e[f]] = b[d];
            }
          }
        }
        
        
jQuery(document).ready(function() {
    if(jQuery("a[name='pagePath']").length > 0 || jQuery("meta[name='pagePath']").length > 0 ){
    var feedBackLabelLocaleMapper = {};
    feedBackLabelLocaleMapper["en"] = "Feedback";
    feedBackLabelLocaleMapper["fr"] = "Commentaires";
    feedBackLabelLocaleMapper["de"] = "Feedback";
    feedBackLabelLocaleMapper["cs"] = "Vazba zpětná";
    feedBackLabelLocaleMapper["la"] = "Comentarios";
    feedBackLabelLocaleMapper["es"] = "Comentarios";
    feedBackLabelLocaleMapper["it"] = "Feedback";
    feedBackLabelLocaleMapper["hu"] = "Visszajelzés";
    feedBackLabelLocaleMapper["pl"] = "Opinie";
    feedBackLabelLocaleMapper["nl"] = "Feedback";
    feedBackLabelLocaleMapper["pt"] = "Feedback";
    feedBackLabelLocaleMapper["tr"] = "Geri bildirim";
    feedBackLabelLocaleMapper["ru"] = "Отзыв";
    feedBackLabelLocaleMapper["ja"] = "フィードバック";
    feedBackLabelLocaleMapper["zh"] = "反饋";
    feedBackLabelLocaleMapper["zh"] = "反馈";
    feedBackLabelLocaleMapper["ko"] = "피드백";
    feedBackLabelLocaleMapper["ar"] = "Feedback";
    feedBackLabelLocaleMapper["undefined"] = "Feedback";
    feedBackLabelLocaleMapper[""] = "Feedback";
    var lang, localeLang;
    try {
        if (document.documentElement.lang.indexOf("-") > -1) {
            lang = document.documentElement.lang.split("-");
            if (typeof lang[0] != "undefined") {
                localeLang = lang[0];
            }
        } else if (document.documentElement.lang.indexOf("_") > -1) {
            lang = document.documentElement.lang.split("_");
            if (typeof lang[0] != "undefined") {
                localeLang = lang[0];
            }
        } else if (document.querySelectorAll("meta[http-equiv='content-language']").length > 0) {
            localeLang = document.querySelector("meta[http-equiv='content-language' ]").getAttribute('content');
        } else if (document.querySelector("head").getAttribute('langcode') != null && document.querySelector("head").getAttribute('langcode').length > 0) {
            localeLang = document.querySelector("head").getAttribute('langcode');
        } else {
            localeLang = document.documentElement.lang;
        }
        if (localeLang !== null) {
            localeLang = localeLang;
        }
    } catch (err) {
        localeLang = 'en';
    }
    var checkExist = setInterval(function() {
        if (jQuery('#SiteFeedback').length) {
            document.getElementById('SiteFeedback').id = 'NewSiteFeedback';
            var siteFeedBackLink = document.getElementById('NewSiteFeedback');
            var feedbakLink = document.createElement('a');
            feedbakLink.className = 'footer-feeback';
            feedbakLink.href = 'javascript:void(0);';
            //feedbakLink.title = 'Feedback';
            if (typeof feedBackLabelLocaleMapper[localeLang] != "undefined") {
                feedbakLink.innerHTML = feedBackLabelLocaleMapper[localeLang];
                feedbakLink.title = feedBackLabelLocaleMapper[localeLang];
            } else {
                feedbakLink.innerHTML = feedBackLabelLocaleMapper["undefined"];
                feedbakLink.title = 'Feedback';
            }
            siteFeedBackLink.appendChild(feedbakLink);
            clearInterval(checkExist);
        }
    }, 100);
    (function(a, b, c, d, e, f) {
        window[d] = window[d] || {};
        window[d]._q = window[d]._q || [];
        ['identify', 'page', 'track', 'metadata', 'locale'].forEach(function(t) {
            window[d][t] = function() {
                var e = Array.prototype.slice.call(arguments);
                e.unshift(t);
                window[d]._q.push(e);
            }
        });
        window[d]._url = c;
        window[d].init = window[d].init || function(p, q, r) {
            window[d]._clientId = p;
            window[d]._clientName = q;
            window[d]._configs = r || {};
            e = a.createElement(b);
            e.async = 1;
            e.src = c + '?client_id=' + p;
            f = a.getElementsByTagName(b)[0];
            f.parentNode.insertBefore(e, f);
        }
        ;
    }
    )(document, 'script', 'https://feedback.esp.vmware.com/assets/ipf/esp.js', 'esp');
    esp.init("esp-prod-131-fxsxf", "VMware.com Site Feedback Survey");
    esp.locale(localeLang);
    esp.identify("1234");
    }
});
        /* End Mapping Code */


        /* Start Tag Sending Code */

          // Insert your tag sending code here.

        /* End Tag Sending Code */


        /* Start Loader Callback Function */
        /* Un-comment the single-line JavaScript comments ("//") to use this Loader callback function. */

        //u.loader_cb = function () {
          //u.initialized = true;
          /* Start Loader Callback Tag Sending Code */

            // Insert your post-Loader tag sending code here.

          /* End Loader Callback Tag Sending Code */
        //};

        /* End Loader Callback Function */


        /* Start Loader Function Call */
        /* Un-comment the single-line JavaScript comments ("//") to use Loader. */

          //if (!u.initialized) {
            //u.loader({"type" : "iframe", "src" : u.data.base_url + c.join(u.data.qsp_delim), "cb" : u.loader_cb, "loc" : "body", "id" : 'utag_168' });
            //u.loader({"type" : "script", "src" : u.data.base_url, "cb" : u.loader_cb, "loc" : "script", "id" : 'utag_168' });
          //} else {
            //u.loader_cb();
          //}

          //u.loader({"type" : "img", "src" : u.data.base_url + c.join(u.data.qsp_delim) });

        /* End Loader Function Call */


        //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  })("168", "vmware.microsites-privacy");
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag

