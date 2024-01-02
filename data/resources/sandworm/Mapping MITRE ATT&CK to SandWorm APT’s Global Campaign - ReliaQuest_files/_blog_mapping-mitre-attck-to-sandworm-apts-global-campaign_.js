// Version 2

KW = {

    send_click: function () {
        return null
    }
};

function unhide(){
    if (document._kdl_hide_eid){
        const a = document.getElementById(document._kdl_hide_eid);
        a && a.parentNode.removeChild(a);
    }
    else{
        // old hide - backward compatible
        document.documentElement.className = document.documentElement.className.replace(' async-hide', '');
    }
}

function kw_init_pixel(appId, domain) {
    ; (function (p, l, o, w, i, n, g) { if (!p[i]) { p.GlobalSnowplowNamespace = p.GlobalSnowplowNamespace || []; p.GlobalSnowplowNamespace.push(i); p[i] = function () { (p[i].q = p[i].q || []).push(arguments) }; p[i].q = p[i].q || []; n = l.createElement(o); g = l.getElementsByTagName(o)[0]; n.async = 1; n.src = w; g.parentNode.insertBefore(n, g) } }(window, document, "script", "//cdn.keywee.co/dist/sp-2.10.2.js", "snowplow_kwdl"));
    window.snowplow_kwdl('newTracker', 'cf', 'co-events.anyword.com', {
        appId: appId,
        cookieDomain: domain,
        eventMethod: 'get'
    });
}

function kw_add_kdl_contexts(status) {
    return [{
            schema: "iglu:co.keywee/custom_kdl_context/jsonschema/1-0-2",
            data: {
                "variants":  [],
                "campaign_id": '',
                "ex_ids" :  [],
                "status": status? status.toString(): ''
            }
        }]
}

function kw_set_context(status) {
    //Clear the context so we will have a new context
    window.snowplow_kwdl('clearGlobalContexts');
    var globalContexts = kw_add_kdl_contexts(status);
    window.snowplow_kwdl('addGlobalContexts', globalContexts)
}

function send_klm_struct_event(appId, domain, action, label, description, code) {
    kw_init_pixel(appId, domain);
    var category = 'klm';
    window.snowplow_kwdl('trackStructEvent', category, action, label, description, code);
}

var action = 'view';
unhide();
kw_init_pixel(document._kw_app_id , document.location.href);
kw_set_context('cmp_not_found');
send_klm_struct_event(document._kw_app_id , document.location.href, action, '', '', 10);
