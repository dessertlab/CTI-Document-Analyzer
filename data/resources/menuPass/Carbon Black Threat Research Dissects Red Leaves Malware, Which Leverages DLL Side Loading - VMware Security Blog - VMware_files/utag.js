//tealium universal tag - utag.loader ut4.34.202310251735, Copyright 2023 Tealium.com Inc. All Rights Reserved. 

var utag_condload=false;window.__tealium_twc_switch=false;try{
function getOptanonCookiee(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
 }

 var getOneTrustCookie= decodeURIComponent(getOptanonCookiee('OptanonConsent'));
 
if(getOneTrustCookie.indexOf('C0002:1') > -1 ){
window.ignore_data = function(data) {}
  }
}catch(e){console.log(e);}

if(!utag_condload){try{
function getOptanonCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
 }

 var getOneTrustCookie= decodeURIComponent(getOptanonCookie('OptanonConsent'));
 
if(getOneTrustCookie.indexOf('C0002:1') > -1 ){
// Preloader to determine whether to load Demandbase Tag or not
    if (typeof sessionStorage.dbInfo == "undefined") {
        window.utag_cfg_ovrd = {noview: true};
        a = document;
        b = a.createElement("script");
        b.language = "javascript";
        b.type = "text/javascript";
        b.async = 1;
        b.charset = "utf-8";
        b.src = "//api.company-target.com/api/v2/ip.js?key=yhM3aXuMmXqyt2Dy5b4prrxMmug10POPRguNDfMk&var=dbInfo";
        //b.id = "utag_jaredtest.sitecat_54";
        if (b.addEventListener) {
            b.addEventListener("load", function() {
                db_callback();
            }, false);
            b.addEventListener('error', function(){
                utag.DB("********ERROR");
                utag.view(utag_data);
            })
        } else {
            b.onreadystatechange = function() {
                if (this.readyState == 'complete' || this.readyState == 'loaded') {
                    this.onreadystatechange = null;
                    db_callback();
                }
            };
            b.onerror = function() {
                if (this.readyState == 'complete' || this.readyState == 'loaded') {
                    this.onerror = null;
                    utag.DB("******* ERROR");
                    utag.view(utag_data);
                }
            };
        }
        l = "head";
        c = a.getElementsByTagName(l)[0];
        if (c) {
            if (l == "script") {
                c.parentNode.insertBefore(b, c);
            } else {
                c.appendChild(b);
            }
        }
        db_callback = function(e) {
            utag.DB("******* Callback - Utag.view Called")
            utag.view(utag_data);
        };
    }
    ;
    window._teal_user_agent = navigator.userAgent;
//Create new URL variable to be used in Load Rules
if(document.URL.match(/(.htm|.html|\/)$/)){
   utag_data['load_rule_url']=document.URL.replace(/(.htm|.html|\/)$/,"");
   utag_data['load_rule_pathname']=location.pathname.replace(/(.htm|.html|\/)$/,"");
}else{
   utag_data['load_rule_url']=document.URL;
   utag_data['load_rule_pathname']=location.pathname;
}
/*capturing URL up to first two levels and appending "/" at the end
ex:"https://www.vmware.com/ca/products.html" will be converted to "https://www.vmware.com/ca/products/"

*/
domain_locale = document.URL.replace(/(.*\.com)(\/?)([^\/]*)(\/?[^\/]*).*(.htm|.html)?$/,'$1$2$3$4');
domain_locale = domain_locale.replace(/([^\/]+)$/,'$1/');
utag_data['load_rule_domain_locale'] = domain_locale;
}
}catch(e){console.log(e);}}

if(!utag_condload){try{ try{
if (typeof $ == "undefined") {
    window.$ = jQuery;
}
} catch(e){ console.log(e) } }catch(e){console.log(e);}}

if (typeof utag == "undefined" && !utag_condload) {
  var utag = {
    id:"vmware.microsites-privacy",
    o:{},
    sender: {},
    send: {},
    rpt: {
      ts: {
        a: new Date()
      }
    },
    dbi: [],
    loader: {
      q: [],
      lc: 0,
      f: {},
      p: 0,
      ol: 0,
      wq: [],
      lq: [],
      bq: {},
      bk: {},
      rf: 0,
      ri: 0,
      rp: 0,
      rq: [],
      ready_q : [], 
      run_ready_q : function(){
        for(var i=0;i<utag.loader.ready_q.length;i++){
          utag.DB("READY_Q:"+i);
          try{utag.loader.ready_q[i]()}catch(e){utag.DB(e)};
        }
      },
      lh: function(a, b, c) {
        a = "" + location.hostname;
        b = a.split(".");
        c = (/\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\./.test(a)) ? 3 : 2;
        return b.splice(b.length - c, c).join(".");
      },
      
      WQ: function(a, b, c, d, g) {
        utag.DB('WQ:' + utag.loader.wq.length);
        try {
          // this picks up a utag_data items added after utag.js was loaded
          // Gotcha: Data layer set after utag.js will not overwrite something already set via an extension.  Only "new" values are copied from utag_data
          // for case where utag_data is set after utag.js is loaded
          if(utag.udoname && utag.udoname.indexOf(".")<0){
            utag.ut.merge(utag.data,window[utag.udoname],0);
          }

          utag.handler.RE('view',utag.data,"bwq");
          // process load rules again if this flag is set
          if(utag.cfg.load_rules_at_wait){
            utag.handler.LR();
          }
        } catch (e) {utag.DB(e)};
	
	d=0;
        g=[]; 
        for (a = 0; a < utag.loader.wq.length; a++) {
          b = utag.loader.wq[a];
	  b.load = utag.loader.cfg[b.id].load;
          if (b.load == 4){
            //LOAD the bundled tag set to wait here
            this.f[b.id]=0;
            utag.loader.LOAD(b.id)
          }else if (b.load > 0) {
            g.push(b);
            //utag.loader.AS(b); // moved: defer loading until flags cleared
	    d++;
          }else{
            // clear flag for those set to wait that were not actually loaded
            this.f[b.id]=1;
          }
        }
        for (a = 0; a < g.length; a++) {
          utag.loader.AS(g[a]);
        }

	if(d==0){
	  utag.loader.END();
	}
      },
      AS: function(a, b, c, d) {
        utag.send[a.id] = a;
        if (typeof a.src == 'undefined') {
          a.src = utag.cfg.path + ((typeof a.name != 'undefined') ? a.name : 'utag.' + a.id + '.js')
        }
        a.src += (a.src.indexOf('?') > 0 ? '&' : '?') + 'utv=' + (a.v?a.v:utag.cfg.v);
        utag.rpt['l_' + a.id] = a.src;
        b = document;
        this.f[a.id]=0;
        if (a.load == 2) {
          b.write('<script id="utag_' + a.id + '" src="' + a.src + '"></scr' + 'ipt>')
          if(typeof a.cb!='undefined')a.cb();
        } else if(a.load==1 || a.load==3) {
          if (b.createElement) {
            c = 'utag_vmware.microsites-privacy_'+a.id;
            if (!b.getElementById(c)) {
	      d = {
	        src:a.src,
		id:c,
                uid:a.id,
		loc:a.loc
              }
              if(a.load == 3){d.type="iframe"};
	      if(typeof a.cb!='undefined')d.cb=a.cb;
              utag.ut.loader(d);
            }
          }
        }
      },
      GV: function(a, b, c) {
        b = {};
        for (c in a) {
          if (a.hasOwnProperty(c) && typeof a[c] != "function") b[c] = a[c];
        }
        return b
      },
      OU: function(a, b, c, d, f){
        try {
          if (typeof utag.data['cp.OPTOUTMULTI'] != 'undefined') {
            c = utag.loader.cfg;
            a = utag.ut.decode(utag.data['cp.OPTOUTMULTI']).split('|');
            for (d = 0; d < a.length; d++) {
              b = a[d].split(':');
              if (b[1] * 1 !== 0) {
                if (b[0].indexOf('c') == 0) {
                  for (f in utag.loader.GV(c)) {
                    if (c[f].tcat == b[0].substring(1)) c[f].load = 0
                  }
                } else if (b[0] * 1 == 0) {
                  utag.cfg.nocookie = true
                } else {
                  for (f in utag.loader.GV(c)) {
                    if (c[f].tid == b[0]) c[f].load = 0
                  }
                }
              }
            }
          }
        } catch (e) {utag.DB(e)}
      },
      RDdom: function(o){
        var d = document || {}, l = location || {};
        o["dom.referrer"] = eval("document." + "referrer");
        o["dom.title"] = "" + d.title;
        o["dom.domain"] = "" + l.hostname;
        o["dom.query_string"] = ("" + l.search).substring(1);
        o["dom.hash"] = ("" + l.hash).substring(1);
        o["dom.url"] = "" + d.URL;
        o["dom.pathname"] = "" + l.pathname;
        o["dom.viewport_height"] = window.innerHeight || (d.documentElement?d.documentElement.clientHeight:960);
        o["dom.viewport_width"] = window.innerWidth || (d.documentElement?d.documentElement.clientWidth:960);
      },
      RDcp: function(o, b, c, d){
        b = b || utag.loader.RC();
        for (d in b) {
          if (d.match(/utag_(.*)/)) {
            for (c in utag.loader.GV(b[d])) {
              o["cp.utag_" + RegExp.$1 + "_" + c] = b[d][c];
            }
          }
        }
        for (c in utag.loader.GV((utag.cl && !utag.cl['_all_']) ? utag.cl : b)) {
          if (c.indexOf("utag_") < 0 && typeof b[c] != "undefined") o["cp." + c] = b[c];
        }
      },
      RDqp: function(o, a, b, c){
        a = location.search + (location.hash+'').replace("#","&");
        if(utag.cfg.lowerqp){a=a.toLowerCase()};
        if (a.length > 1) {
          b = a.substring(1).split('&');
          for (a = 0; a < b.length; a++) {
            c = b[a].split("=");
            if(c.length>1){
              o["qp." + c[0]] = utag.ut.decode(c[1])
            }
          }
        }
      },
      RDmeta: function(o, a, b, h){
        a = document.getElementsByTagName("meta");
        for (b = 0; b < a.length; b++) {
          try{
            h = a[b].name || a[b].getAttribute("property") || ""; 
          }catch(e){h="";utag.DB(e)};
          if (utag.cfg.lowermeta){h=h.toLowerCase()};
          if (h != ""){o["meta." + h] = a[b].content}
        }
      },
      RDva: function(o, a, b){
        // Read visitor attributes in local storage
        a = ""; 
        try{
          a = localStorage.getItem("tealium_va");
          if(!a || a=="{}")return;
          b = utag.ut.flatten({va : JSON.parse(a)});
          utag.ut.merge(utag.data,b,1);
        }catch(e){
          utag.DB("localStorage not supported");
        }
        
        // add items in "b" to data layer
      },
      RD: function(o, a, b, c, d) {
        utag.DB("utag.loader.RD");
        // temporary fix for multiple calls to RD
        if(typeof o["_t_session_id"]!="undefined"){return};
        a = (new Date()).getTime();
        b = utag.loader.RC();
        c = a + parseInt(utag.cfg.session_timeout);
        d = a;
	
	if(!b.utag_main){
	  b.utag_main={};
	}else if(b.utag_main.ses_id&&typeof b.utag_main._st!="undefined"&&parseInt(b.utag_main._st)<a){
	  delete b.utag_main.ses_id;
	}
	
        if(!b.utag_main.v_id){
          b.utag_main.v_id=utag.ut.vi(a);
        }

        if(!b.utag_main.ses_id){
          b.utag_main.ses_id=d+'';
          b.utag_main._ss=b.utag_main._pn=1;
          b.utag_main._sn=1+parseInt(b.utag_main._sn || 0);
        }else{
          d=b.utag_main.ses_id;
          b.utag_main._ss=0;
          b.utag_main._pn=1+parseInt(b.utag_main._pn);
          b.utag_main._sn=parseInt(b.utag_main._sn);
        }

        if(isNaN(b.utag_main._sn) || b.utag_main._sn<1){b.utag_main._sn=b.utag_main._pn=1}

        b.utag_main._st = c+'';

        utag.loader.SC("utag_main", {"v_id": b.utag_main.v_id, "_sn" : b.utag_main._sn, "_ss" : b.utag_main._ss, "_pn" : b.utag_main._pn + ";exp-session", "_st": c, "ses_id": d + ";exp-session"});

        o["_t_visitor_id"]=b.utag_main.v_id;
        o["_t_session_id"]=d;
	
        this.RDqp(o);
        this.RDmeta(o);
        this.RDcp(o,b);
        this.RDdom(o);
        this.RDva(o);
      },
      RC: function(a, x, b, c, d, e, f, g, h, i, j, k, l, m, n, o, v, ck, cv, r, s, t) {
        o = {};
        b = ("" + document.cookie != "") ? (document.cookie).split("; ") : [];
        r = /^(.*?)=(.*)$/;
        s = /^(.*);exp-(.*)$/;
        t = (new Date()).getTime();
        for (c = 0; c < b.length; c++) {
          if (b[c].match(r)) {
            ck = RegExp.$1;
            cv = RegExp.$2;
          }
          e = utag.ut.decode(cv);
          if (typeof ck!="undefined"){
            if (ck.indexOf("ulog") == 0 || ck.indexOf("utag_") == 0) {
              e = e.split("$");
              g = [];
              j = {};
              for (f = 0; f < e.length; f++) {
                try{
                  g = e[f].split(":");
                  if (g.length > 2) {
                    g[1] = g.slice(1).join(":");
                  }
                  v = "";
                  if (("" + g[1]).indexOf("~") == 0) {
                    h = g[1].substring(1).split("|");
                    for (i = 0; i < h.length; i++) h[i] = utag.ut.decode(h[i]);
                    v = h
                  } else v = utag.ut.decode(g[1]);
                  j[g[0]] = v;
                }catch(er){utag.DB(er)};
              }
              o[ck] = {};
              for (f in utag.loader.GV(j)) {
                if (j[f] instanceof Array) {
                  n = [];
                  for (m = 0; m < j[f].length; m++) {
                    if (j[f][m].match(s)){
                      k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                      if (k > t) n[m] = (x == 0) ? j[f][m] : RegExp.$1;
                    }
                  }
                  j[f] = n.join("|");
                } else {
                  j[f] = "" + j[f];
                  if (j[f].match(s)) {
                    k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                    j[f] = (k < t) ? null : (x == 0 ? j[f] : RegExp.$1);
                  }
                }
                if (j[f]) o[ck][f] = j[f];
              }
            } else if (utag.cl[ck] || utag.cl['_all_']) {
              o[ck] = e
            }
          }
        }
        return (a) ? (o[a] ? o[a] : {}) : o;
      },
      SC: function(a, b, c, d, e, f, g, h, i, j, k, x, v) {
        if (!a) return 0;
        if (a=="utag_main" && utag.cfg.nocookie) return 0;
        v = "";
        var date = new Date();
        var exp = new Date();
        exp.setTime(date.getTime()+(365*24*60*60*1000));
        x = exp.toGMTString();
        if (c && c == "da") {
          x = "Thu, 31 Dec 2009 00:00:00 GMT";
        } else if (a.indexOf("utag_") != 0 && a.indexOf("ulog") != 0) {
          if (typeof b != "object") {
            v = b
          }
        } else {
          d = utag.loader.RC(a, 0);
          for (e in utag.loader.GV(b)) {
            f = "" + b[e];
            if (f.match(/^(.*);exp-(\d+)(\w)$/)) {
              g = date.getTime() + parseInt(RegExp.$2) * ((RegExp.$3 == "h") ? 3600000 : 86400000);
              if (RegExp.$3 == "u") g = parseInt(RegExp.$2);
              f = RegExp.$1 + ";exp-" + g;
            }
            if (c == "i") {
              if (d[e] == null) d[e] = f;
            } else if (c == "d") delete d[e];
            else if (c == "a") d[e] = (d[e] != null) ? (f - 0) + (d[e] - 0) : f;
            else if (c == "ap" || c == "au") {
              if (d[e] == null) d[e] = f;
              else {
                if (d[e].indexOf("|") > 0) {
                  d[e] = d[e].split("|")
                }
                g = (d[e] instanceof Array) ? d[e] : [d[e]];
                g.push(f);
                if (c == "au") {
                  h = {};
                  k = {};
                  for (i = 0; i < g.length; i++) {
                    if (g[i].match(/^(.*);exp-(.*)$/)) {
                      j = RegExp.$1;
                    }
                    if (typeof k[j] == "undefined") {
                      k[j] = 1;
                      h[g[i]] = 1;
                    }
                  }
                  g = [];
                  for (i in utag.loader.GV(h)) {
                    g.push(i);
                  }
                }
                d[e] = g
              }
            } else d[e] = f;
          }
          h = new Array();
          for (g in utag.loader.GV(d)) {
            if (d[g] instanceof Array) {
              for (c = 0; c < d[g].length; c++) {
                d[g][c] = encodeURIComponent(d[g][c])
              }
              h.push(g + ":~" + d[g].join("|"))
            } else h.push(g + ":" + encodeURIComponent(d[g]))
          };
          if (h.length == 0) {
            h.push("");
            x = ""
          }
          v = (h.join("$"));
        }
        document.cookie = a + "=" + v + ";path=/;domain=" + utag.cfg.domain + ";expires=" + x;
        return 1
      },
      LOAD: function(a, b, c, d) {
        //utag.DB('utag.loader.LOAD:' + a);
        if(!utag.loader.cfg){
           return
        }
	if(this.ol==0){
          if(utag.loader.cfg[a].block && utag.loader.cfg[a].cbf){
            this.f[a] = 1;
	    delete utag.loader.bq[a];
          }
	  for(b in utag.loader.GV(utag.loader.bq)){
            if(utag.loader.cfg[a].load==4 && utag.loader.cfg[a].wait==0){
              utag.loader.bk[a]=1;
              utag.DB("blocked: "+ a);
            }
	    utag.DB("blocking: " + b);
	    return;
	  }
	  utag.loader.INIT();
	  return;
	}
        utag.DB('utag.loader.LOAD:' + a);
	
        if (this.f[a] == 0) {
          this.f[a] = 1;
      	
	  if(utag.cfg.noview!=true){
	    if(utag.loader.cfg[a].send){
	      utag.DB("SENDING: "+a);
	      try{
		utag.sender[a].send('view',utag.handler.C(utag.data));
		utag.rpt['s_' + a] = 0;
	      } catch (e) {
                utag.DB(e);
		utag.rpt['s_' + a] = 1;
	      }
	    }
	  }
	  if(utag.loader.rf==0)return;
          for (b in utag.loader.GV(this.f)) {
            if (this.f[b] == 0 || this.f[b] == 2) return
          }
	  utag.loader.END();
        }
      },
      EV: function(a, b, c, d) {
        if (b == "ready") {
          if ( (document.attachEvent || utag.cfg.dom_complete) ? document.readyState === "complete" : document.readyState !== "loading" ) setTimeout(c, 1);
          else {
            utag.loader.ready_q.push(c);
            var RH;

            if(utag.loader.ready_q.length<=1){
              if (document.addEventListener) {
                RH = function() {
                  document.removeEventListener("DOMContentLoaded", RH, false);
                  utag.loader.run_ready_q()
                };
                if(!utag.cfg.dom_complete)document.addEventListener("DOMContentLoaded", RH, false);
                window.addEventListener("load", utag.loader.run_ready_q, false);
              } else if (document.attachEvent) {
                RH = function() {
                  if (document.readyState === "complete") {
                    document.detachEvent("onreadystatechange", RH);
                    utag.loader.run_ready_q()
                  }
                };
                document.attachEvent("onreadystatechange", RH);
                window.attachEvent("onload", utag.loader.run_ready_q);
              }
            }
          }
        } else {
          if (a.addEventListener) {
            a.addEventListener(b, c, false)
          } else if (a.attachEvent) {
            a.attachEvent(((d == 1) ? "" : "on") + b, c)
          }
        }
      },
      END: function(b, c, d, e, v, w){
        if(this.ended){return};
        this.ended=1;
	utag.DB("loader.END");
        b = utag.data;
        // add the default values for future utag.link/view calls
	if(utag.handler.base && utag.handler.base!='*'){
          e = utag.handler.base.split(",");
          for (d = 0; d < e.length; d++) {
            if (typeof b[e[d]] != "undefined") utag.handler.df[e[d]] = b[e[d]]
          }
        }else if (utag.handler.base=='*'){
           utag.ut.merge(utag.handler.df,b,1);
        }

        utag.rpt['r_0']="t";
	for(var r in utag.loader.GV(utag.cond)){
          utag.rpt['r_'+r]=(utag.cond[r])?"t":"f";
        }

        utag.rpt.ts['s'] = new Date();
	

        v = ".tiqcdn.com";
        w = utag.cfg.path.indexOf(v);
        if(w>0 && b["cp.utag_main__ss"]==1)utag.ut.loader({src:utag.cfg.path.substring(0,w)+v+"/utag/tiqapp/utag.v.js?a="+utag.cfg.utid+(utag.cfg.nocookie?"&nocookie=1":"&cb="+(new Date).getTime()),id:"tiqapp"})
        
        utag.handler.RE('view',b,"end");
	utag.handler.INIT();
      }
    },
    DB: function(a, b) {
      // return right away if we've already checked the cookie
      if(utag.cfg.utagdb===false){
        return;
      }else if(typeof utag.cfg.utagdb=="undefined"){
        utag.db_log=[];
        b = document.cookie+'';
        utag.cfg.utagdb=((b.indexOf('utagdb=true') >= 0)?true:false);
      }
      if(utag.cfg.utagdb===true){
        utag.db_log.push(a);
        try{console.log(a)}catch(e){}
      }
    },
    RP: function(a, b, c) {
      if (typeof a != 'undefined' && typeof a.src != 'undefined' && a.src != '') {
        b = [];
        for (c in utag.loader.GV(a)) {
          if (c != 'src') b.push(c + '=' + escape(a[c]))
        }
        this.dbi.push((new Image()).src = a.src + '?utv=' + utag.cfg.v + '&utid=' + utag.cfg.utid + '&' + (b.join('&')))
      }
    },
    view: function(a,c,d) {
      return this.track({event:'view', data:a, cfg:{cb:c,uids:d}})
    },
    link: function(a,c) {
      return this.track({event:'link', data:a, cfg:{cb:c}})
    },
    track: function(a,b,c,d) {
      if (typeof a == "string") a = { event: a, data: b, cfg: {cb: c} };

      for(d in utag.loader.GV(utag.o)){
        try{
          utag.o[d].handler.trigger(a.event || "view", a.data || a, a.cfg)
        }catch(e){utag.DB(e)};
      }
      if(a.cfg && a.cfg.cb)try{a.cfg.cb()}catch(e){utag.DB(e)};
      return true
    },
    handler: {
      base: "",
      df: {},
      o: {},
      send: {},
      iflag: 0,
      INIT: function(a, b, c) {
        utag.DB('utag.handler.INIT');
        if(utag.initcatch){
          utag.initcatch=0;
          return
        }
        this.iflag = 1;
        a = utag.loader.q.length;
        if (a > 0) {
          for (b = 0; b < a; b++) {
            c = utag.loader.q[b];
	    // utag.handler.RE(c.a, c.b);
            utag.handler.trigger(c.a, c.b)
          }
        }
        //##UTABSOLUTELAST##
      },
      test: function() {
        return 1
      },
      // reset and run load rules
      LR: function(){
        for(var d in utag.loader.GV(utag.cond)){
          utag.cond[d]=false;
        }
        utag.loader.loadrules();
        utag.loader.initcfg();
        // use the OPTOUTMULTI cookie value to override load rules
        utag.loader.OU();
      },
      // FUTURE: The third param "c" is a string that defines the location i.e. "blr" == before load rules
      RE:function(a,b,c,d,e,f,g){
        if(c && !this.cfg_extend){
          return 0; 
        }
        utag.DB('All Tags EXTENSIONS');
        if(typeof this.extend != "undefined"){
          g=0;
          for (d = 0; d < this.extend.length; d++) {
            try {
              /* FUTURE: Support for Extension Attributes */
              e=0;
              if(typeof this.cfg_extend!="undefined"){
                f=this.cfg_extend[d];
                if(typeof f.count == "undefined")f.count=0;
                if(f[a]==0 || (f.once==1 && f.count>0) || (typeof c!= "undefined" && f[c]==0)){
                  e=1
                }else{
                  if(typeof c!="undefined" && f[c]==1){g=1};
                  f.count++
                }
              }
              if(e!=1){
                this.extend[d](a, b);
                utag.rpt['ex_' + d] = 0
              }
            } catch (e) {
              utag.rpt['ex_' + d] = 1;
	      utag.ut.error({e:e.message,s:utag.cfg.path+'utag.js',l:d,t:'ge'});
            }
          }
          return g;
        }
      },
      trigger: function(a, b, c, d, e, f) {
        utag.DB('trigger:'+a);
        b = b || {};
        utag.DB(b);

        if (!this.iflag) {
          for (d in utag.loader.f) {
            if (!(utag.loader.f[d] === 1)) utag.DB('Tag '+d+' did not LOAD')
          }
          utag.loader.q.push({
            a: a,
            b: b
          });
          return;
        }
        utag.cfg.noview = false;

        utag.ut.merge(b,this.df,0);
        // make sure these values are current for AJAX pages
        utag.loader.RDqp(b);
        utag.loader.RDcp(b);
        utag.loader.RDdom(b);
        utag.loader.RDmeta(b);
        utag.loader.RDva(b);

        // set cfg.uids or cfg.tids to only run specific set of tags
        // utag.track( {event : ”view”, data: {myvar : “myval” }, cfg: {uids : [1,2,10] } } );
        
        if(c && c.uids){
          this.RE(a,b);
          for(f=0;f<c.uids.length;f++){
            d=c.uids[f];
            try {
                // bypass load rules
                if(typeof utag.sender[d]!="undefined"){
                  utag.sender[d].send(a, utag.handler.C(b));
                }else if (a=="view" && utag.loader.cfg[d].load!=2 && utag.loader.cfg[d].s2s!=1){
                  utag.ut.merge(utag.data,b,1);
                  utag.loader.AS({id : d, load : 1}); 
                }
            } catch (e) {utag.DB(e)}
          }
        }else if(utag.cfg.load_rules_ajax){
          // right now, load rules use utag.data (replace items in utag.data with items in b)
          this.RE(a,b,"blr");
          utag.ut.merge(utag.data,b,1);
          // clear and re-run load rules
          this.LR();
          this.RE(a,b);
          // TBD: Run through the "bwq" Extensions again here? (For now, require "bwq" is also set to "run once"?) 

          for(f = 0; f < utag.loader.cfgsort.length; f++){
            d = utag.loader.cfgsort[f];
            try {
              if(utag.loader.cfg[d].load && utag.loader.cfg[d].send){
                if(typeof utag.sender[d]!="undefined"){
                  utag.sender[d].send(a, utag.handler.C(b));
		  utag.rpt['s_' + d] = 0;
                }else if (a=="view" && utag.loader.cfg[d].load!=2 && utag.loader.cfg[d].s2s!=1){
                  // bring in a new tag if the load rule condition is now true
                  utag.loader.AS({id : d, load : 1}); 
                }
              }
            }catch (e) {utag.DB(e)}
          }
        }else{
          this.RE(a,b);
          for (d in utag.loader.GV(utag.sender)) {
            try {
                utag.sender[d].send(a, utag.handler.C(b));
		utag.rpt['s_' + d] = 0;
            } catch (e) {utag.DB(e)}
          }
        }

      },
      // "sort-of" copy
      C: function(a, b, c, d) {
        b = {};
        for (c in utag.loader.GV(a)) {
          if(a[c] instanceof Array){
            b[c] = a[c].slice(0)
          }else{
            // objects are still references to the original (not copies)
            b[c] = a[c]
          }
        }
        return b
      }
    },
    ut:{
      pad: function(a,b,c,d){
        a=""+((a-0).toString(16));d='';if(b>a.length){for(c=0;c<(b-a.length);c++){d+='0'}}return ""+d+a
      },
      vi: function(t,a,b){
        a=this.pad(t,12);b=""+Math.random();a+=this.pad(b.substring(2,b.length),16);try{a+=this.pad((navigator.plugins.length?navigator.plugins.length:0),2);a+=this.pad(navigator.userAgent.length,3);a+=this.pad(document.URL.length,4);a+=this.pad(navigator.appVersion.length,3);a+=this.pad(screen.width+screen.height+parseInt((screen.colorDepth)?screen.colorDepth:screen.pixelDepth),5)}catch(e){utag.DB(e);a+="12345"};return a
      },
      isEmptyObject: function(o, a) {
	for (a in o) {
          return false;
        }
        return true;
      },
      flatten: function(o){
        // stop when arriving at a string, array, boolean, number (float or integer)
        var a = {}; 
        function r(c, p) {
          if (Object(c) !== c || c instanceof Array) {
            a[p] = c;
          } else {
            if(utag.ut.isEmptyObject(c)){
              //a[p] = {};
            }else{
              for (var d in c) {
                r(c[d], p ? p+"."+d : d);
              }
            }
          }
        }
        r(o, "");

        return a;
      },
      merge: function(a, b, c, d) {
        if(c){
          for(d in utag.loader.GV(b)){
            a[d] = b[d]
          }
        }else{
          for(d in utag.loader.GV(b)){
            if(typeof a[d]=="undefined")a[d] = b[d]
          }
        }
      },
      decode: function(a, b) {
        b = "";
        try{b = decodeURIComponent(a)}catch(e){utag.DB(e)};
        if (b == ""){b = unescape(a)};
        return b
      },
      error: function(a, b, c){
        if(typeof utag_err!="undefined"){
          utag_err.push(a)
        }
        c="";for(b in a){c+=b+":"+a[b]+" , "};
        utag.DB(c)
      },
      loader: function(o, a, b, c, l) {
        a=document;
        if (o.type=="iframe") {
          b = a.createElement("iframe");
          o.attrs = o.attrs || { "height" : "1", "width" : "1", "style" : "display:none" };
          for( l in utag.loader.GV(o.attrs) ){
            b.setAttribute( l, o.attrs[l] )
          }
          b.setAttribute("src", o.src);
        }else if (o.type=="img"){
          utag.DB("Attach img: "+o.src);
          b=new Image();b.src=o.src;
          return;
        }else{
          b = a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";
          for( l in utag.loader.GV(o.attrs) ){
            b[l] = o.attrs[l]
          }
          b.src = o.src;
        }
        if(o.id){b.id=o.id};
        if (typeof o.cb=="function") {
          if(b.addEventListener) {
            b.addEventListener("load",function(){o.cb()},false);
          }else {
            // old IE support
            b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};
          }
        }
        l = o.loc || "head";
        c = a.getElementsByTagName(l)[0];
        if (c) {
          utag.DB("Attach to "+l+": "+o.src);
          if (l == "script") {
            c.parentNode.insertBefore(b, c);
          } else {
            c.appendChild(b)
          }
        }
      }
    }
  };
  utag.o['vmware.microsites-privacy']=utag;
  utag.cfg = {
    v: "ut4.34.202310251735",
    // Enable load rules ajax feature by default
    load_rules_ajax: true,
    load_rules_at_wait: false,
    lowerqp: false,
    //noview: ##UTNOVIEW##,
    session_timeout: 1800000,
    readywait: 0,
    noload: 0,
    domain: utag.loader.lh(),
    path: "//tags.tiqcdn.com/utag/vmware/microsites-privacy/prod/",
    utid: "vmware/microsites-privacy/202310251734"
  };utag.cond={100:0,101:0,102:0,103:0,104:0,106:0,115:0,117:0,118:0,119:0,11:0,120:0,121:0,122:0,125:0,126:0,130:0,131:0,132:0,133:0,134:0,136:0,138:0,13:0,141:0,142:0,144:0,145:0,146:0,147:0,148:0,149:0,150:0,151:0,153:0,156:0,157:0,158:0,159:0,162:0,163:0,164:0,166:0,168:0,169:0,175:0,176:0,178:0,179:0,17:0,180:0,182:0,183:0,184:0,185:0,186:0,187:0,18:0,190:0,191:0,193:0,194:0,195:0,196:0,198:0,199:0,19:0,200:0,203:0,204:0,205:0,206:0,207:0,208:0,209:0,20:0,210:0,211:0,212:0,213:0,214:0,215:0,216:0,217:0,218:0,219:0,220:0,221:0,25:0,27:0,28:0,30:0,35:0,39:0,40:0,41:0,42:0,45:0,46:0,49:0,50:0,51:0,52:0,54:0,59:0,5:0,65:0,66:0,72:0,74:0,75:0,76:0,78:0,79:0,7:0,8:0,90:0,91:0,92:0,93:0,94:0,95:0,96:0,98:0,99:0,9:0};
utag.pagevars=function(ud){ud = ud || utag.data;try{ud['js_page._teal_user_agent']=_teal_user_agent}catch(e){utag.DB(e)};try{ud['js_page._teal_load_demandbase']=_teal_load_demandbase}catch(e){utag.DB(e)};};
utag.loader.chkCanRunTime = function(s,e,d,t,o,i) {   try {       o = {           is : [s,e],           dt : [],           tm : [],           hd : 0,           ms : 0       };       for (i=0;i<2;i++){           d = o.is[i].substring(0,8);           t = o.is[i].substring(8);           o.dt[i] = new Date();           if (d !== '--------'){               o.dt[i].setFullYear(d.substring(0,4));               o.dt[i].setMonth(parseInt(d.substring(4,6))-1);               o.dt[i].setDate(d.substring(6,8));           }           if (t !== '----'){               o.dt[i].setHours(t.substring(0,2));               o.dt[i].setMinutes(t.substring(2,4));           } else {               o.dt[i].setHours(o.hd);               o.dt[i].setMinutes(o.ms);           }           o.dt[i].setSeconds(o.ms);           o.tm[i] = o.dt[i].getTime();           o.hd = 23;           o.ms = 59;       }       o.n = new Date().getTime();       return (o.n >= o.tm[0] && o.n <= o.tm[1]);   } catch (e) {       return false;   }};utag.loader.initdata = function() {   try {       utag.data = (typeof utag_data != 'undefined') ? utag_data : {};       utag.udoname='utag_data';    } catch (e) {       utag.data = {};       utag.DB('idf:'+e);   }};utag.loader.loadrules = function(_pd,_pc) {var d = _pd || utag.data; var c = _pc || utag.cond;for (var l in utag.loader.GV(c)) {switch(l){
case '100':try{c[100]|=  (utag.loader.chkCanRunTime("------------","20221231----")) && ((d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/Request-Demo-Thank-You'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/info-request-thank-you'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '101':try{c[101]|=  (utag.loader.chkCanRunTime("------------","20221231----")) && ((d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/Request-Demo-Thank-You'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/info-request-thank-you'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '102':try{c[102]|=  (utag.loader.chkCanRunTime("------------","20221231----")) && ((d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com'.toLowerCase())>-1&&d['dom.url'].toString().toLowerCase().indexOf('-thank-you'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com'.toLowerCase())>-1&&d['dom.url'].toString().toLowerCase().indexOf('-ty'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com'.toLowerCase())>-1&&d['dom.url'].toString().toLowerCase().indexOf('ty-'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/application-performance-with-dynamic-multipath-optimization'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/cpi-telecom-sd-wan-for-dummies-TEST'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/creating-the-retail-store-of-the-future-with-sdwan'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/eBook-6-Ways-SD-WAN-Redefines-Branch-Office-Networking'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/ebook-the-evolution-of-sd-wan-as-a-platform'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/ebook-the-evolution-of-wan-architecture'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/ebook-transforming-the-network-edge-with-sdwan'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/frost-and-sullivan-vendor-market-2019'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/go-mainsteam-with-sdwan-migration-best-practices'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/sd-wan-retail-future'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/sdwan-migration-strategies-for-varying-network-architectures'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/whitepaper-dynamic-multipath-optimization'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '103':try{c[103]|=  (utag.loader.chkCanRunTime("------------","20221231----")) && ((d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/Request-Demo-Thank-You'.toLowerCase())<0&&d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/info-request-thank-you'.toLowerCase())<0))}catch(e){utag.DB(e)}; break;
case '104':try{c[104]|=  (utag.loader.chkCanRunTime("------------","20221231----")) && ((d['dom.url'].toString().toLowerCase().indexOf('https://sase.vmware.com/products/edge-network-intelligence/edge-network-intelligence-demo'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '106':try{c[106]|=  (utag.loader.chkCanRunTime("------------","20211006----")) && ((d['dom.url'].toString().toLowerCase().indexOf('https://event.vmware.com/flow/vmware/vmworld2021/reg/confirm'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '11':try{c[11]|=(d['dom.url'].toString().toLowerCase().indexOf('communities.vmware.com'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '115':try{c[115]|=  (utag.loader.chkCanRunTime("202109070000","202110310000")) && ((d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/industry-solutions/2020/12/15/mit-technology-review-impact-of-digital-investments-on-financial-services-organizations-throughout-pandemic/?src=ds_6112a76d79f99&cid=7012H000001lAEQ'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/industry-solutions/2021/04/13/report-modern-bank-heists-and-best-practices-protection/?src=ds_6112a7de9ee5e&cid=7012H000001lAEQ'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/industry-solutions/2021/04/13/report-modern-bank-heists-and-best-practices-protection/?src=ds_6112a7de9ee5e&cid=7012H000001lAEQ'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/industry-solutions/2020/12/15/mit-technology-review-impact-of-digital-investments-on-financial-services-organizations-throughout-pandemic/?src=ds_6112a76d79f99&cid=7012H000001lAEQ'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/industry-solutions/2021/08/02/three-critical-digital-workspace-strategies-for-financial-services/?src=ds_6112a85103bf7&cid=7012H000001lAEQ'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/industry-solutions/2021/08/02/three-critical-digital-workspace-strategies-for-financial-services/?src=ds_6112a85103bf7&cid=7012H000001lAEQ'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/industry-solutions/2021/08/02/three-critical-digital-workspace-strategies-for-financial-services/?src=ds_6112a85103bf7&cid=7012H000001lAEQ'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/industry-solutions/2021/08/02/three-critical-digital-workspace-strategies-for-financial-services/?src=ds_6112a85103bf7&cid=7012H000001lAEQ'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/industry-solutions/2020/12/15/mit-technology-review-impact-of-digital-investments-on-financial-services-organizations-throughout-pandemic/?src=ds_6112a76d79f99&cid=7012H000001lAEQ'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/industry-solutions/2020/12/15/mit-technology-review-impact-of-digital-investments-on-financial-services-organizations-throughout-pandemic/?src=ds_6112a76d79f99&cid=7012H000001lAEQ'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/industry-solutions/2021/04/13/report-modern-bank-heists-and-best-practices-protection/?src=ds_6112a7de9ee5e&cid=7012H000001lAEQ'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/industry-solutions/2021/04/13/report-modern-bank-heists-and-best-practices-protection/?src=ds_6112a7de9ee5e&cid=7012H000001lAEQ'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '117':try{c[117]|=  (utag.loader.chkCanRunTime("202109150000","202111300000")) && ((d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/vmware-japan/2021/08/partner-achievement-award-interview-fsi.html'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '118':try{c[118]|=  (utag.loader.chkCanRunTime("202109070000","202112310000")) && ((d['dom.url'].toString().toLowerCase().indexOf('https://event.vmware.com/flow/vmware/vmworld2021/reg/confirm'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '119':try{c[119]|=(d['dom.url'].toString().toLowerCase().indexOf('/services/tanzu-mission-control'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('/services/developer-ready-cloud'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '120':try{c[120]|=(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/vmware-japan/2021/08/partner-achievement-award-interview-fsi.html'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '121':try{c[121]|=  (utag.loader.chkCanRunTime("------------","20300102----")) && ((d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/security/2021/04/automate-devsecops-for-full-lifecycle-container-security.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/security/2021/03/securing-containers-and-kubernetes-orchestrated-environments.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://octo.vmware.com/devsecops-cloud-infrastructure-transformation-how-to-get-it-done-with-vmware/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/vsphere/2021/06/cloud-transformation-a-three-part-story.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://octo.vmware.com/building-a-consistent-multi-cloud-application-platform/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/industry-solutions/2021/02/08/why-digital-transformation-demands-a-culture-shift-alongside-the-tech'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '122':try{c[122]|=  (utag.loader.chkCanRunTime("------------","20220301----")) && ((d['dom.url'].toString().toLowerCase().indexOf('https://tanzu.vmware.com/'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '125':try{c[125]|=  (utag.loader.chkCanRunTime("------------","202111010000")) && ((d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/partner/2021/07/building-your-company-future-through-vmware-expertise.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/partner/2021/06/comdivision-deepening-vmware-technology-expertise.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/partner/2021/06/itq-love-tech-obsessed-with-customer-success.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/partner/2021/07/presidio-fiercely-dedicated-to-it-mastery.html'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '126':try{c[126]|=  (utag.loader.chkCanRunTime("------------","202111240000")) && ((d['dom.url'].toString().toLowerCase().indexOf('https://eu.eventscloud.com/ereg/newreg.php?eventid=200230439&categoryid=201788146'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://eu.eventscloud.com/website/5985/thank_you/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://eu.eventscloud.com/website/5985/?categoryid=201788146'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://eu.eventscloud.com/website/5985/?categoryid=201788176'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '13':try{c[13]|=(d['dom.url'].toString().toLowerCase().indexOf('//cloud.vmware.com/community/'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '130':try{c[130]|=(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com'.toLowerCase())>-1&&d['dom.url'].toString().toLowerCase().indexOf('_TY'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/products/cloud-web-security/cloud-website-security-demo-thank-you'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/TY-2021-Strategic-Roadmap-for-SASE-Convergence-by-Gartner'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/ty-delivering-a-superior-voice-and-video-experience-with-sd-wan'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/TY-Report-Gartner-Magic-Quadrant-2020'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/ty-networking-and-security-are-converging-in-the-cloud-are-you-ready'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/ty-optimizing-remote-worker-connectivity-to-cloud-applications-using-sdwan-gateways'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/ty-sase-and-ztna-for-dummies'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/software-defined-wan-for-dummies-thank-you-old'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/hybrid-wan-further-thank-you'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/ty-ar-tof-vmware-work-from-home-test-report-by-tolly'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/ty-zk-research-sase-a-changing-world-calls-for-a-different-kind-of-network'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/ty-5-ways-that-sdwan-transforms-your-network'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/eBook-6-Ways-SD-WAN-Redefines-Branch-Office-Networking'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/ty-delivering-a-superior-voice-and-video-experience-with-sd-wan'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/ty-get-cloud-ready-with-sd-wan'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/ty-zk-research-sase-a-changing-world-calls-for-a-different-kind-of-network'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/ty-sase-ready-wan-edge-for-the-work-from-home-anywhere-era'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/the-forrester-new-wave-zero-trust-network-access-thank-you'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/gartner-magic-quadrant-for-wan-edge-infrastructure-2021-thank-you'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/gartner-critical-capabilities-report-2021-thank-you'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '131':try{c[131]|=(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com'.toLowerCase())>-1&&d['dom.url'].toString().toLowerCase().indexOf('_thank-you'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/request-trial-thank-you'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '132':try{c[132]|=(d['dom.url'].toString().toLowerCase().indexOf('cloudhealth.vmware.com/resources'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase()=='https://cloudhealth.vmware.com/'.toLowerCase())||(d['dom.url'].toString().toLowerCase().indexOf('cloudhealth.vmware.com/industries'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('cloudhealth.vmware.com/solutions'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('cloudhealth.vmware.com/free-trial-signup'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('cloudhealth.vmware.com/products'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('cloudhealth.vmware.com/get-started'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '133':try{c[133]|=(d['dom.url'].toString().toLowerCase().indexOf('www.vmware.com'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '134':try{c[134]|=  (utag.loader.chkCanRunTime("------------","202204292359")) && ((d['dom.url'].toString().indexOf('https://sase.vmware.com/en/resources/network-security-learn-about-risks-from-a-hacker_TY')>-1))}catch(e){utag.DB(e)}; break;
case '136':try{c[136]|=(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/detail/1169')>-1)}catch(e){utag.DB(e)}; break;
case '138':try{c[138]|=  (utag.loader.chkCanRunTime("------------","202204292359")) && ((d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/complete')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/detail/1101/')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/1735')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/confirm/1735')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/detail/1159/')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/1794')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/confirm/1794')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/detail/936/')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/1802')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/confirm/1802')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/detail/1160/')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/1795')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/confirm/1795')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/detail/1168/')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/1806')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/confirm/1806')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/detail/1148/')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/1782')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/confirm/1782')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/detail/1102')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/1736')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/confirm/1736')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/detail/1167/')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/1805')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/confirm/1805')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/detail/1166/')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/1804')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/confirm/1804')>-1))}catch(e){utag.DB(e)}; break;
case '141':try{c[141]|=(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/detail/1200')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/1846')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/confirm/1846')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/detail/1201')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/1847')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/confirm/1847')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/detail/1202')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/1848')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/confirm/1848')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/detail/1203')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/1849')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/confirm/1849')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/detail/1204')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/1850')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/confirm/1850')>-1)}catch(e){utag.DB(e)}; break;
case '142':try{c[142]|=  (utag.loader.chkCanRunTime("------------","202209302359")) && ((d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/detail/1149')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/1783')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/confirm/1783')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/detail/1179')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/1817')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/confirm/1817')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/detail/1180')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/1818')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/confirm/1818')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/detail/1169')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/1807')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/confirm/1807')>-1))}catch(e){utag.DB(e)}; break;
case '144':try{c[144]|=  (utag.loader.chkCanRunTime("------------","202212292359")) && ((d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/complete')>-1))}catch(e){utag.DB(e)}; break;
case '145':try{c[145]|=  (utag.loader.chkCanRunTime("202205260000","202302232359")) && ((d['dom.url'].toString().toLowerCase().indexOf('https://event.vmware.com/flow/vmware/explore2022us/reg/confirm'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '146':try{c[146]|=(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/detail/1238')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/1891')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/confirm/1891')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/1892')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/confirm/1892')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/1893')>-1)||(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/form/confirm/1893')>-1)}catch(e){utag.DB(e)}; break;
case '147':try{c[147]|=(d['dom.url'].toString().indexOf('https://blogs.vmware.com/cloud/2022/01/18/how-to-achieve-multi-cloud-success-without-compromise/')>-1)||(d['dom.url'].toString().indexOf('https://cio.vmware.com/2022/02/5-key-elements-of-a-successful-multi-cloud-environment.html')>-1)||(d['dom.url'].toString().indexOf('https://jp.togetherweinnovate.vmware.com/')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/au/welcome')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/au/welcome/anywhere-workforce.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/au/welcome/better-protect-apps.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/au/welcome/build-better-apps-faster.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/au/welcome/cloud-infrastructure.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/au/welcome/core-cloud-edge.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/au/welcome/customers.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/au/welcome/india-nse.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/au/welcome/moderna.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/au/welcome/modernapps.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/au/welcome/networking.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/au/welcome/partners.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/au/welcome/security.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/au/welcome/tap-into-multiple-clouds.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/au/welcome/workspace.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/au/welcome/zoom.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/content/microsites/eni/home.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/in/welcome')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/in/welcome/anywhere-workforce.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/in/welcome/better-protect-apps.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/in/welcome/bookmyshow.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/in/welcome/build-better-apps-faster.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/in/welcome/cloud-infrastructure.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/in/welcome/core-cloud-edge.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/in/welcome/customers.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/in/welcome/gap-inc.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/in/welcome/india-nse.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/in/welcome/moderna.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/in/welcome/modernapps.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/in/welcome/networking.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/in/welcome/partners.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/in/welcome/security.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/in/welcome/tap-into-multiple-clouds.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/in/welcome/workspace.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/in/welcome/zoom.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/sg/welcome.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/sg/welcome/anywhere-workforce.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/sg/welcome/better-protect-apps.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/sg/welcome/build-better-apps-faster.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/sg/welcome/cloud-infrastructure.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/sg/welcome/core-cloud-edge.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/sg/welcome/customers.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/sg/welcome/moderna.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/sg/welcome/modernapps.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/sg/welcome/networking.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/sg/welcome/partners.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/sg/welcome/security.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/sg/welcome/tap-into-multiple-clouds.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/sg/welcome/workspace.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/sg/welcome/zoom.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/uk/welcome/osram-continental.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/welcome/cloud-apps.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/jp/welcome/space-ape-games.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/au/welcome/space-ape-games.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/in/welcome/space-ape-games.html')>-1)||(d['dom.url'].toString().indexOf('https://blogs.vmware.com/cloud/2021/10/05/announcing-availability-of-vmware-cloud-on-aws-outposts/?')>-1)||(d['dom.url'].toString().indexOf('https://blogs.vmware.com/cloud/2021/10/05/introducing-vmware-cloud-with-tanzu-services/?')>-1)||(d['dom.url'].toString().indexOf('https://cloudsolutions.vmware.com/developer-ready-cloud')>-1)||(d['dom.url'].toString().indexOf('https://k8s.vmware.com/kubernetes-security-best-practices/?src=&cid=')>-1)||(d['dom.url'].toString().indexOf('https://sase.vmware.com/get-started/?')>-1)||(d['dom.url'].toString().indexOf('https://sase.vmware.com/resources/gartner-critical-capabilities-report-2021?')>-1)||(d['dom.url'].toString().indexOf('https://sase.vmware.com/resources/gartner-magic-quadrant-for-wan-edge-infrastructure-2021?')>-1)||(d['dom.url'].toString().indexOf('https://sase.vmware.com/resources/sase-and-ztna-for-dummies?')>-1)||(d['dom.url'].toString().indexOf('https://sase.vmware.com/resources/software-defined-wan-for-dummies?')>-1)||(d['dom.url'].toString().indexOf('https://sase.vmware.com/resources/the-forrester-new-wave-zero-trust-network-access?')>-1)||(d['dom.url'].toString().indexOf('https://sase.vmware.com/resources/the-total-economic-impact-of-vmware-sase-cost-savings-and-business-benefits-enabled-by-sase?')>-1)||(d['dom.url'].toString().indexOf('https://cloud.vmware.com/providers/draas-powered')>-1)||(d['dom.url'].toString().indexOf('https://cloud.vmware.com/providers/free-trial')>-1)}catch(e){utag.DB(e)}; break;
case '148':try{c[148]|=(d['dom.url'].toString().indexOf('https://www.vmware.com/au/welcome/toast.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/in/welcome/toast.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/jp/welcome/space-ape-games.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/au/welcome/space-ape-games.html')>-1)||(d['dom.url'].toString().indexOf('https://www.vmware.com/in/welcome/space-ape-games.html')>-1)}catch(e){utag.DB(e)}; break;
case '149':try{c[149]|=(d['dom.url'].toString().toLowerCase().indexOf('https://japanevents.vmware.com/seminar/detail/1263'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://japanevents.vmware.com/seminar/form/1928'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://japanevents.vmware.com/seminar/form/confirm/1928'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://japanevents.vmware.com/seminar/detail/1264'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://japanevents.vmware.com/seminar/form/1929'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://japanevents.vmware.com/seminar/form/confirm/1929'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '150':try{c[150]|=(d['dom.url'].toString().indexOf('https://japanevents.vmware.com/seminar/detail/1263')>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://japanevents.vmware.com/seminar/form/1928'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://japanevents.vmware.com/seminar/form/confirm/1928'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://japanevents.vmware.com/seminar/detail/1264'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://japanevents.vmware.com/seminar/form/1929'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://japanevents.vmware.com/seminar/form/confirm/1929'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '151':try{c[151]|=(d['dom.url'].toString().toLowerCase().indexOf('https://event.vmware.com/flow/vmware/explore2022us/reg/confirm'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://event.vmware.com/flow/vmware/explore2022eu/reg/confirm'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '153':try{c[153]|=(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/cloud/2022/01/18/how-to-achieve-multi-cloud-success-without-compromise/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://cio.vmware.com/2022/02/5-key-elements-of-a-successful-multi-cloud-environment.html'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '156':try{c[156]|=(d['dom.url'].toString().toLowerCase().indexOf('https://jp.togetherweinnovate.vmware.com/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/au/welcome'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/au/welcome/anywhere-workforce.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/au/welcome/better-protect-apps.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/au/welcome/build-better-apps-faster.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/au/welcome/cloud-infrastructure.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/au/welcome/core-cloud-edge.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/au/welcome/customers.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/au/welcome/india-nse.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/au/welcome/moderna.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/au/welcome/modernapps.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/au/welcome/networking.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/au/welcome/partners.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/au/welcome/security.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/au/welcome/tap-into-multiple-clouds.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/au/welcome/workspace.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/au/welcome/zoom.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/in/welcome'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/in/welcome/anywhere-workforce.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/in/welcome/better-protect-apps.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/in/welcome/bookmyshow.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/in/welcome/build-better-apps-faster.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/in/welcome/cloud-infrastructure.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/in/welcome/core-cloud-edge.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/in/welcome/customers.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/in/welcome/gap-inc.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/in/welcome/india-nse.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/in/welcome/moderna.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/in/welcome/modernapps.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/in/welcome/networking.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/in/welcome/partners.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/in/welcome/security.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/in/welcome/tap-into-multiple-clouds.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/in/welcome/workspace.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/in/welcome/zoom.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/sg/welcome.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/sg/welcome/anywhere-workforce.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/sg/welcome/better-protect-apps.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/sg/welcome/build-better-apps-faster.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/sg/welcome/cloud-infrastructure.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/sg/welcome/core-cloud-edge.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/sg/welcome/customers.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/sg/welcome/moderna.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/sg/welcome/modernapps.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/sg/welcome/networking.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/sg/welcome/partners.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/sg/welcome/security.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/sg/welcome/tap-into-multiple-clouds.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/sg/welcome/workspace.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/sg/welcome/zoom.html'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '157':try{c[157]|=(d['dom.url'].toString().toLowerCase().indexOf('https://sase.vmware.com/resources/gartner-critical-capabilities-report-2021-thank-you'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://sase.vmware.com/resources/gartner-magic-quadrant-for-wan-edge-infrastructure-2021-thank-you'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://sase.vmware.com/resources/sase-and-ztna-for-dummies?'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://sase.vmware.com/resources/software-defined-wan-for-dummies-thank-you-old'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://sase.vmware.com/resources/the-forrester-new-wave-zero-trust-network-access_TY'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://sase.vmware.com/resources/the-total-economic-impact-of-vmware-sase-cost-savings-and-business-benefits-enabled-by-sase_TY'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '158':try{c[158]|=(d['dom.url'].toString().toLowerCase().indexOf('https://japanevents.vmware.com/seminar/detail/1306'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://japanevents.vmware.com/seminar/form/2001'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://japanevents.vmware.com/seminar/form/confirm/2001'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '159':try{c[159]|=(d['dom.url'].toString().toLowerCase().indexOf('https://japanevents.vmware.com/seminar/form/confirm/2001'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://japanevents.vmware.com/seminar/form/2001'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://japanevents.vmware.com/seminar/detail/1306'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '162':try{c[162]|=(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/in/welcome/singtel.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/au/welcome/singtel.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/sg/welcome/singtel.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/sg/welcome/asx.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/au/welcome/asx.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/in/welcome/asx.html'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '163':try{c[163]|=(d['dom.url'].toString().toLowerCase().indexOf('https://japanevents.vmware.com/seminar/detail/1328'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://japanevents.vmware.com/seminar/form/2027'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://japanevents.vmware.com/seminar/form/confirm/2027'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://japanevents.vmware.com/seminar/detail/1328'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://japanevents.vmware.com/seminar/form/2027'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://japanevents.vmware.com/seminar/form/confirm/2027'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '164':try{c[164]|=(d['dom.url'].toString().toLowerCase().indexOf('https://event.vmware.com/flow/vmware/explore2022sg/reg/page/attendeeportal'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '166':try{c[166]|=(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/vsphere/'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '168':try{c[168]|=(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/explore/jp/register/email-complete.html'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '169':try{c[169]|=(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/explore/jp/register/complete.html'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '17':try{c[17]|=(d['dom.url'].toString().toLowerCase()=='https://sdwan.vmware.com/gartner-magic-quadrant-wan-edge-infrastructure-sdwan'.toLowerCase())||(d['dom.url'].toString().toLowerCase()=='https://sdwan-stg.vmware.com/gartner-magic-quadrant-wan-edge-infrastructure-sdwan'.toLowerCase())}catch(e){utag.DB(e)}; break;
case '175':try{c[175]|=(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/explore/jp'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '176':try{c[176]|=(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/explore/jp/register/01-email.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/explore/jp/register/complete.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/explore/jp.html'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '178':try{c[178]|=(d['dom.url'].toString().toLowerCase().indexOf('https://news.vmware.com/reaching-multicloud-tipping-point?src=ds_ibpuwl7fe98et&cid=7012H000001lJJAQA2'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '179':try{c[179]|=(d['dom.url'].toString().toLowerCase().indexOf('https://news.vmware.com/reaching-multicloud-tipping-point?src=ds_ibpuwl7fe98et&cid=7012H000001lJJAQA2'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '18':try{c[18]|=(/sdwan\.vmware\.com\/sd-wan-resources\/white-papers\/gartner-magic-quadrant-wan-edge-infrastructure-sdwan$/i.test(d['dom.url']))||(/sdwan-stg\.vmware\.com\/sd-wan-resources\/white-papers\/gartner-magic-quadrant-wan-edge-infrastructure-sdwan$/i.test(d['dom.url']))}catch(e){utag.DB(e)}; break;
case '180':try{c[180]|=  (utag.loader.chkCanRunTime("202211140000","202302202359")) && ((d['dom.url'].toString().toLowerCase().indexOf('https://news.vmware.com/reaching-multicloud-tipping-point'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '182':try{c[182]|=(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/explore/jp.html'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '183':try{c[183]|=(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/explore/jp.html'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '184':try{c[184]|=(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/in/welcome/neurothink.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/sg/welcome/chitale-dairy.html'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '185':try{c[185]|=(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/sg/welcome/chitale-dairy.html'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '186':try{c[186]|=(d['dom.url'].toString().toLowerCase().indexOf('https://japanevents.vmware.com/seminar/detail/1378'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://japanevents.vmware.com/seminar/form/2171'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://japanevents.vmware.com/seminar/form/confirm/2171'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '187':try{c[187]|=(d['dom.url'].toString().toLowerCase().indexOf('https://news.vmware.com/reaching-multicloud-tipping-point'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '19':try{c[19]|=(d['dom.url'].toString().toLowerCase().indexOf('vmware.com/20questions/ohanian'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('vmware.com/20questions/adler'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('vmware.com/20questions/sobomehin'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '190':try{c[190]|=(d['dom.url'].toString().toLowerCase().indexOf('https://japanevents.vmware.com/seminar/detail/1378'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://japanevents.vmware.com/seminar/form/2171'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://japanevents.vmware.com/seminar/form/confirm/2171'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://japanevents.vmware.com/seminar/form/complete'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '191':try{c[191]|=(d['dom.url'].toString().toLowerCase().indexOf('https://vm-event.jp/evolve/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://vm-event.jp/evolve/register/02-profile/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://vm-event.jp/evolve/register/03-email-complete/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://vm-event.jp/evolve/register/complete/'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '193':try{c[193]|=(d['dom.url'].toString().toLowerCase().indexOf('https://sase.vmware.com/resources/gartner-magic-quadrant-for-sd-wan-2022_TY'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://sase.vmware.com/resources/gigaom-radar-for-sd-wan-platforms_TY'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://sase.vmware.com/resources/TY-Prepare-for-a-Work-From-Anywhere-Future-with-AIOps-Driven-SASE'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '194':try{c[194]|=(d['dom.url'].toString().toLowerCase().indexOf('https://sase.vmware.com/resources/TY-Prepare-for-a-Work-From-Anywhere-Future-with-AIOps-Driven-SASE'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://sase.vmware.com/resources/gigaom-radar-for-sd-wan-platforms_TY'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://sase.vmware.com/resources/gartner-magic-quadrant-for-sd-wan-2022_TY'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '195':try{c[195]|=(d['dom.url'].toString().toLowerCase().indexOf('https://sase.vmware.com/resources/gartner-magic-quadrant-for-sd-wan-2022?src=ps_j3x5wessil3sc&CID=7012H000001Oe3bQAC'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://sase.vmware.com/resources/gigaom-radar-for-sd-wan-platforms?src=ps_2u4exajpnkvzr&CID=7012H000001OvmJQAS'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://sase.vmware.com/resources/prepare-for-a-work-from-anywhere-future-with-aiops-driven-sase?src=ps_l8h7rpra6ceip&CID=7012H000001OvmOQAS'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '196':try{c[196]|=(d['dom.url'].toString().toLowerCase().indexOf('https://sase.vmware.com/resources/gartner-magic-quadrant-for-sd-wan-2022?src=ps_j3x5wessil3sc&CID=7012H000001Oe3bQAC'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://sase.vmware.com/resources/gigaom-radar-for-sd-wan-platforms?src=ps_2u4exajpnkvzr&CID=7012H000001OvmJQAS'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://sase.vmware.com/resources/prepare-for-a-work-from-anywhere-future-with-aiops-driven-sase?src=ps_l8h7rpra6ceip&CID=7012H000001OvmOQAS'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '198':try{c[198]|=(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/industry-solutions/2021/04/13/report-modern-bank-heists-and-best-practices-protection/'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '199':try{c[199]|=(d['dom.url'].toString().toLowerCase().indexOf('https://cloudhealth.vmware.com/resources/cloud-finops-second-edition.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://cloudhealth.vmware.com/resources/benchmark-your-cloud-maturity-a-framework-for-best-practices.html'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '20':try{c[20]|=(/https:\/\/featurewalkthrough\.vmware\.com\/a\/vcn-assessment-tool$/i.test(d['dom.url']))}catch(e){utag.DB(e)}; break;
case '200':try{c[200]|=(d['dom.url'].toString().toLowerCase().indexOf('https://cloudhealth.vmware.com/resources/thanks-cloud-finops-second-edition.html?confirmationflag'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://cloudhealth.vmware.com/resources/thanks-benchmark-your-cloud-maturity-a-framework-for-best-practices.html?confirmationflag'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '203':try{c[203]|=  (utag.loader.chkCanRunTime("202305240000","202309302359")) && ((d['dom.url'].toString().toLowerCase()=='https://tanzu.vmware.com/'.toLowerCase()))}catch(e){utag.DB(e)}; break;
case '204':try{c[204]|=(d['dom.url'].toString().toLowerCase().indexOf('https://sase.vmware.com/'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '205':try{c[205]|=(d['dom.url'].toString().toLowerCase().indexOf('https://event.vmware.com/flow/vmware/explore2023lv/reg/confirm'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '206':try{c[206]|=(d['dom.url'].toString().toLowerCase().indexOf('https://event.vmware.com/flow/vmware/explore2023lv/reg/form/contactInfo'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://event.vmware.com/flow/vmware/explore2023lv/reg/order'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '207':try{c[207]|=  (utag.loader.chkCanRunTime("202307040000","202310012359")) && ((d['dom.url'].toString().toLowerCase().indexOf('https://news.vmware.com/technologies/the-journey-to-cloud-smart-executives-share-their-perspectives'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://news.vmware.com/vmware-explore/from-cloud-chaos-to-cloud-smart'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://cio.vmware.com/2023/05/vmware-leaders-on-cloud-chaos-and-what-it-takes-to-be-future-ready'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://news.vmware.com/technologies/triumph-in-the-multi-cloud-era-tame-costs-and-minimize-risk'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://cio.vmware.com/2023/03/digi-key-creating-magic-with-multi-cloud'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://news.vmware.com/multi-cloud/multi-cloud-challenges'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/multi-cloud/2023/04/24/discovery-holdings-explores-the-opportunities-of-multi-cloud-without-the-complexity/'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '208':try{c[208]|=(d['dom.domain'].toString().toLowerCase()=='engage.vmware.com'.toLowerCase())}catch(e){utag.DB(e)}; break;
case '209':try{c[209]|=(d['dom.url'].toString().toLowerCase()=='https://tanzu.vmware.com/jp'.toLowerCase())||(d['dom.pathname'].toString().toLowerCase().indexOf('/jp/welcome/space-ape-games.html'.toLowerCase())>-1)||(d['dom.pathname'].toString().toLowerCase().indexOf('/jp/welcome/toast.html'.toLowerCase())>-1)||(d['dom.pathname'].toString().toLowerCase().indexOf('/jp/welcome/chitale-dairy.html'.toLowerCase())>-1)||(d['dom.pathname'].toString().toLowerCase().indexOf('/jp/welcome/adobe.html'.toLowerCase())>-1)||(d['dom.pathname'].toString().toLowerCase().indexOf('/jp/welcome.html'.toLowerCase())>-1)||(d['dom.pathname'].toString().toLowerCase().indexOf('/jp/welcome/zoom.html'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '210':try{c[210]|=(d['dom.pathname'].toString().toLowerCase().indexOf('/7a2ab5'.toLowerCase())>-1&&d['dom.domain'].toString().toLowerCase().indexOf('engage.vmware.com'.toLowerCase())>-1)||(d['dom.pathname'].toString().toLowerCase().indexOf('/1842b4'.toLowerCase())>-1&&d['dom.domain'].toString().toLowerCase().indexOf('engage.vmware.com'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '211':try{c[211]|=(d['dom.url'].toString().toLowerCase().indexOf('https://news.vmware.com/releases/vmware-2023-partner-achievement-awards'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '212':try{c[212]|=(d['dom.url'].toString().toLowerCase().indexOf('blogs.vmware.com'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '213':try{c[213]|=(d['dom.url'].toString().toLowerCase().indexOf('https://event.vmware.com/flow/vmware/explore2023sg/reg/form/contactInfo'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '214':try{c[214]|=(d['dom.url'].toString().toLowerCase().indexOf('https://event.vmware.com/flow/vmware/explore2023sg/reg/page/portal'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '215':try{c[215]|=(d['dom.url'].toString().toLowerCase().indexOf('https://event.vmware.com/flow/vmware/explore2023bcn/reg/form/contactInfo'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://event.vmware.com/flow/vmware/explore2023bcn/reg/order'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '216':try{c[216]|=(d['dom.url'].toString().toLowerCase().indexOf('https://event.vmware.com/flow/vmware/explore2023bcn/reg/confirm'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '217':try{c[217]|=(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/explore/jp/register/email-complete.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/explore/jp/register/complete.html'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '218':try{c[218]|=(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/explore/jp/register/email-complete.html'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '219':try{c[219]|=(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/explore/jp/register/complete.html'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '220':try{c[220]|=(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/explore/jp/register/04-profile.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/explore/jp/register/05-sess.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/explore/jp/register/06-confirm.html'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '221':try{c[221]|=(d['dom.url'].toString().toLowerCase().indexOf('/explore/jp/register/email-complete.html'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '25':try{c[25]|=(d['dom.url'].toString().toLowerCase().indexOf('wan.velocloud.com/info-request-thank-you.html'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '27':try{c[27]|=(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/telco/'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '28':try{c[28]|=(d['dom.url'].toString().toLowerCase().indexOf('https://evolve.vmware.com/'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '30':try{c[30]|=(d['dom.url'].toString().toLowerCase().indexOf('wan.velocloud.com/request-trial-thank-you.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sdwan1.vmware.com/request-trial-thank-you.html?'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('wan.velocloud.com/info-request-thank-you.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sdwan1.vmware.com/info-request-thank-you.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase1.vmware.com/info-request-thank-you.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase1.vmware.com/request-trial-thank-you.html'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '35':try{c[35]|=(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/cloudnative/2018/12/12/vmworld-pks-customer-highlights/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/radius/a-new-vision-for-5g-networks/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/emea/en/2019/06/three-reasons-why-enterprises-need-to-get-onboard-with-5g/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/services-education-insights/2018/05/about-machine-learning-and-multi-cloud.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/cloudnative/2019/12/30/vmware-pivotal-combining-the-skills-people-and-leadership-to-deliver-modern-apps-to-the-enterprise/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://k8s.vmware.com/kubernetes-for-executives/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://k8s.vmware.com/kubernetes-for-developers/'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '39':try{c[39]|=(d['dom.url'].toString().toLowerCase().indexOf('https://pathfinder.vmware.com/digital-workspace-journey-tracker'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '40':try{c[40]|=(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/radius/digital-employee-experience-infographic/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/radius/employee-experience-digital-transformation-priority/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/radius/fostering-employee-empowerment/'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '41':try{c[41]|=(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/cloudnative/2018/12/12/vmworld-pks-customer-highlights/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/radius/a-new-vision-for-5g-networks/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/emea/en/2019/06/three-reasons-why-enterprises-need-to-get-onboard-with-5g/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/radius/cloud-native-application-development-dominos/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://k8s.vmware.com/kubernetes-for-executives/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://k8s.vmware.com/kubernetes-for-developers/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://octo.vmware.com/defining-modern-application/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/services-education-insights/2018/05/about-machine-learning-and-multi-cloud.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/cloudnative/2019/12/30/vmware-pivotal-combining-the-skills-people-and-leadership-to-deliver-modern-apps-to-the-enterprise/'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '42':try{c[42]|=(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/cloudnative/2018/12/12/vmworld-pks-customer-highlights/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/radius/a-new-vision-for-5g-networks/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/emea/en/2019/06/three-reasons-why-enterprises-need-to-get-onboard-with-5g/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/radius/cloud-native-application-development-dominos/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://k8s.vmware.com/kubernetes-for-executives/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://k8s.vmware.com/kubernetes-for-developers/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://octo.vmware.com/defining-modern-application/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/services-education-insights/2018/05/about-machine-learning-and-multi-cloud.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/cloudnative/2019/12/30/vmware-pivotal-combining-the-skills-people-and-leadership-to-deliver-modern-apps-to-the-enterprise/'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '45':try{c[45]|=(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/cloudnative/2018/12/12/vmworld-pks-customer-highlights/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/radius/impact/leading-culinary-revolution/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/radius/a-new-vision-for-5g-networks/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/emea/en/2019/06/three-reasons-why-enterprises-need-to-get-onboard-with-5g/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/radius/cloud-native-application-development-dominos/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://k8s.vmware.com/kubernetes-for-executives/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://k8s.vmware.com/kubernetes-for-developers/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://octo.vmware.com/defining-modern-application/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/services-education-insights/2018/05/about-machine-learning-and-multi-cloud.html/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/cloudnative/2019/12/30/vmware-pivotal-combining-the-skills-people-and-leadership-to-deliver-modern-apps-to-the-enterprise/'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '46':try{c[46]|=(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/cloudnative/2018/12/12/vmworld-pks-customer-highlights/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/radius/impact/leading-culinary-revolution/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/radius/a-new-vision-for-5g-networks/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/emea/en/2019/06/three-reasons-why-enterprises-need-to-get-onboard-with-5g/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://www.vmware.com/radius/cloud-native-application-development-dominos/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://k8s.vmware.com/kubernetes-for-executives/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://k8s.vmware.com/kubernetes-for-developers/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://octo.vmware.com/defining-modern-application/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/services-education-insights/2018/05/about-machine-learning-and-multi-cloud.html/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/cloudnative/2019/12/30/vmware-pivotal-combining-the-skills-people-and-leadership-to-deliver-modern-apps-to-the-enterprise/'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '49':try{c[49]|=(d['dom.url'].toString().toLowerCase().indexOf('/radius/'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '5':try{c[5]|=(d['content_system']=='microsites :now')}catch(e){utag.DB(e)}; break;
case '50':try{c[50]|=(d['dom.url'].toString().toLowerCase().indexOf('https://vforum.vmware.com/tw/thank-you.html'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '51':try{c[51]|=(d['dom.url'].toString().toLowerCase().indexOf('https://vforum.vmware.com/tw/register.html'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '52':try{c[52]|=(d['dom.url'].toString().toLowerCase().indexOf('https://vforum.vmware.com/tw'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '54':try{c[54]|=(d['dom.url'].toString().toLowerCase().indexOf('wan.velocloud.com/request-trial-thank-you.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sdwan1.vmware.com/request-trial-thank-you.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('wan.velocloud.com/info-request-thank-you.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sdwan1.vmware.com/info-request-thank-you.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase1.vmware.com/info-request-thank-you.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase1.vmware.com/request-trial-thank-you.html'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '59':try{c[59]|=(d['dom.url'].toString().toLowerCase().indexOf('https://evolve.vmware.com/thank-you.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('http://evolve.vmware.com/thank-you.html'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '65':try{c[65]|=(d['dom.url'].toString().toLowerCase().indexOf('-uat.vmware.com'.toLowerCase())<0&&d['dom.url'].toString().toLowerCase().indexOf('-stg.vmware.com'.toLowerCase())<0&&d['dom.url'].toString().toLowerCase().indexOf('-stage.vmware.com'.toLowerCase())<0&&d['dom.url'].toString().toLowerCase().indexOf('-lt.vmware.com'.toLowerCase())<0&&d['dom.url'].toString().toLowerCase().indexOf('-test11.vmware.com'.toLowerCase())<0&&d['dom.url'].toString().toLowerCase().indexOf('-test13.vmware.com'.toLowerCase())<0&&d['dom.url'].toString().toLowerCase().indexOf('-dev11.vmware.com'.toLowerCase())<0&&d['dom.url'].toString().toLowerCase().indexOf('-dev13.vmware.com'.toLowerCase())<0&&d['dom.url'].toString().toLowerCase().indexOf('benefits.vmware.com'.toLowerCase())<0&&d['dom.url'].toString().toLowerCase().indexOf('tanzu.vmware.com'.toLowerCase())<0)||(d['dom.url'].toString().toLowerCase().indexOf('evolve.vmware.com'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('cioforum.vmware.com'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('vforum.vmware.com'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('launch.vmware.com'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '66':try{c[66]|=(d['dom.url'].toString().toLowerCase().indexOf('-uat.vmware.com'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('-stg.vmware.com'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('-stage.vmware.com'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('-lt.vmware.com'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('-test11.vmware.com'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('-test13.vmware.com'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('-dev11.vmware.com'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('-dev13.vmware.com'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '7':try{c[7]|=(/digitalenterprise\/jp$/i.test(d['load_rule_pathname']))||(/digitalenterprise\/jp\/thank-you$/i.test(d['load_rule_pathname']))||(/digitalenterprise\/jp\/digitalworkspace$/i.test(d['load_rule_pathname']))||(/digitalenterprise\/jp\/hybridcloudHCI$/i.test(d['load_rule_pathname']))}catch(e){utag.DB(e)}; break;
case '72':try{c[72]|=(d['cp.OptanonConsent'].toString().indexOf('C0002:1')>-1)}catch(e){utag.DB(e)}; break;
case '74':try{c[74]|=(d['cp.OptanonConsent'].toString().indexOf('C0004:1')>-1)}catch(e){utag.DB(e)}; break;
case '75':try{c[75]|=(d['cp.OptanonConsent'].toString().indexOf('C0005:1')>-1)}catch(e){utag.DB(e)}; break;
case '76':try{c[76]|=(d['dom.url'].toString().toLowerCase().indexOf('https://vmworld.jp/register/complete/'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '78':try{c[78]|=(d['dom.url'].toString().toLowerCase().indexOf('https://tanzu.vmware.com/mission-control'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://tanzu.vmware.com/application-service'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://tanzu.vmware.com/build-service'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://tanzu.vmware.com/observability'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://tanzu.vmware.com/kubernetes-grid'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://tanzu.vmware.com/service-mesh'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://tanzu.vmware.com/application-catalog'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://tanzu.vmware.com/labs'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://cloudsolutions.vmware.com/'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '79':try{c[79]|=(d['dom.url'].toString().toLowerCase().indexOf('https://benefits.vmware.com'.toLowerCase())<0)}catch(e){utag.DB(e)}; break;
case '8':try{c[8]|=(d['dom.url'].toString().toLowerCase().indexOf('vmware.com/aaaradius/possible/cloud/'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('vmware.com/ciovantage'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '9':try{c[9]|=(d['dom.url'].toString().toLowerCase().indexOf('www.vmware.com/ciovantage/article/introducing-vmware-cloud'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('www.air-watch.com/solutions/windows-10-management/'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '90':try{c[90]|=(d['dom.url'].toString().toLowerCase().indexOf('https://sdwan.vmware.com/secure-access-service-edge'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '91':try{c[91]|=(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/euc/2020/03/byod-business-continuity.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/euc/2018/11/forrester-tei-workspace-one.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/euc/2021/01/vmware-leader-idc-marketscape-for-uem.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://blogs.vmware.com/euc/2021/01/vmware-gartner-peer-insights-customers-choice-for-uem.html'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '92':try{c[92]|=(d['dom.url'].toString().toLowerCase().indexOf('https://event.vmware.com/flow/vmware/securityconnect/reg/page/confirmation'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '93':try{c[93]|=(d['dom.url'].toString().toLowerCase().indexOf('sase1.vmware.com'.toLowerCase())>-1&&d['dom.url'].toString().toLowerCase().indexOf('ty-'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('wan.velocloud.com'.toLowerCase())>-1&&d['dom.url'].toString().toLowerCase().indexOf('ty-'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sdwan1.vmware.com'.toLowerCase())>-1&&d['dom.url'].toString().toLowerCase().indexOf('ty-'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sdwan1.vmware.com'.toLowerCase())>-1&&d['dom.url'].toString().toLowerCase().indexOf('-thank-you.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase1.vmware.com'.toLowerCase())>-1&&d['dom.url'].toString().toLowerCase().indexOf('-thank-you.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('wan.velocloud.com/go-mainsteam-with-sdwan-migration-best-practices.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('wan.velocloud.com/Whitepaper-Market-Outlook-SD-WAN-2019-2024.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('wan.velocloud.com/sdwan-migration-strategies-for-varying-network-architectures.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('wan.velocloud.com/sdwan-for-telcos-service-providers-topology-and-routing.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('wan.velocloud.com/vmware-sdwan-by-velocloud-components-placement-interaction.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('wan.velocloud.com/sdwan-overlays-topologies-and-deployment-models.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('wan.velocloud.com/sdwan-use-cases-top-use-cases-in-deployment-today.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('wan.velocloud.com/sdwan-optimized-cloud-access.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('wan.velocloud.com/sdwan-zero-touch-provisioning.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('wan.velocloud.com/application-performance-with-dynamic-multipath-optimization.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('wan.velocloud.com/frost-and-sullivan-vendor-market-2019.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('wan.velocloud.com/market-outlook-software-defined-wan-2020-2025.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase1.vmware.com/go-mainsteam-with-sdwan-migration-best-practices.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase1.vmware.com/Whitepaper-Market-Outlook-SD-WAN-2019-2024.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase1.vmware.com/sdwan-migration-strategies-for-varying-network-architectures.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase1.vmware.com/sdwan-for-telcos-service-providers-topology-and-routing.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase1.vmware.com/vmware-sdwan-by-velocloud-components-placement-interaction.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase1.vmware.com/sdwan-overlays-topologies-and-deployment-models.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase1.vmware.com/sdwan-use-cases-top-use-cases-in-deployment-today.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase1.vmware.com/sdwan-optimized-cloud-access.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase1.vmware.com/sdwan-zero-touch-provisioning.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase1.vmware.com/application-performance-with-dynamic-multipath-optimization.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase1.vmware.com/frost-and-sullivan-vendor-market-2019.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase1.vmware.com/market-outlook-software-defined-wan-2020-2025.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sdwan1.vmware.com/go-mainsteam-with-sdwan-migration-best-practices.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sdwan1.vmware.com/Whitepaper-Market-Outlook-SD-WAN-2019-2024.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sdwan1.vmware.com/sdwan-migration-strategies-for-varying-network-architectures.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sdwan1.vmware.com/sdwan-for-telcos-service-providers-topology-and-routing.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sdwan1.vmware.com/vmware-sdwan-by-velocloud-components-placement-interaction.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sdwan1.vmware.com/sdwan-overlays-topologies-and-deployment-models.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sdwan1.vmware.com/sdwan-use-cases-top-use-cases-in-deployment-today.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sdwan1.vmware.com/sdwan-optimized-cloud-access.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sdwan1.vmware.com/sdwan-zero-touch-provisioning.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sdwan1.vmware.com/application-performance-with-dynamic-multipath-optimization.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sdwan1.vmware.com/frost-and-sullivan-vendor-market-2019.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sdwan1.vmware.com/market-outlook-software-defined-wan-2020-2025.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sdwan1.vmware.com/vmware-sdwan-by-velocloud-components-placement-interaction.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase1.vmware.com/sdwan-routing-considerations-during-migration.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sdwan1.vmware.com/vmware-sdwan-by-velocloud-components-placement-interaction.html'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase1.vmware.com/sdwan-routing-considerations-during-migration.html'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '94':try{c[94]|=(d['dom.url'].toString().toLowerCase().indexOf('wan.velocloud.com/request-trial-thank-you.html'.toLowerCase())<0&&d['dom.url'].toString().toLowerCase().indexOf('sdwan1.vmware.com/request-trial-thank-you.html'.toLowerCase())<0&&d['dom.url'].toString().toLowerCase().indexOf('wan.velocloud.com/info-request-thank-you.html'.toLowerCase())<0&&d['dom.url'].toString().toLowerCase().indexOf('sdwan1.vmware.com/info-request-thank-you.html'.toLowerCase())<0&&d['dom.url'].toString().toLowerCase().indexOf('sase1.vmware.com/info-request-thank-you.html'.toLowerCase())<0&&d['dom.url'].toString().toLowerCase().indexOf('sase1.vmware.com/request-trial-thank-you.html'.toLowerCase())<0)}catch(e){utag.DB(e)}; break;
case '95':try{c[95]|=  (utag.loader.chkCanRunTime("------------","20220130----")) && ((d['dom.url'].toString().toLowerCase()=='https://event.vmware.com/flow/vmware/vmworld2021/reg/confirm'.toLowerCase()))}catch(e){utag.DB(e)}; break;
case '96':try{c[96]|=  (utag.loader.chkCanRunTime("------------","20220130----")) && ((d['dom.url'].toString().toLowerCase()=='https://event.vmware.com/flow/vmware/vmworld2021/reg/confirm'.toLowerCase()))}catch(e){utag.DB(e)}; break;
case '98':try{c[98]|=(d['dom.url'].toString().toLowerCase().indexOf('https://event.vmware.com/flow/vmware/explore2022eu/reg/confirm'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('https://event.vmware.com/flow/vmware/explore2022us/reg/confirm'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '99':try{c[99]|=  (utag.loader.chkCanRunTime("------------","20221231----")) && ((d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com'.toLowerCase())>-1&&d['dom.url'].toString().toLowerCase().indexOf('-thank-you'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com'.toLowerCase())>-1&&d['dom.url'].toString().toLowerCase().indexOf('-ty'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com'.toLowerCase())>-1&&d['dom.url'].toString().toLowerCase().indexOf('ty-'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/application-performance-with-dynamic-multipath-optimization'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/cpi-telecom-sd-wan-for-dummies-TEST'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/creating-the-retail-store-of-the-future-with-sdwan'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/eBook-6-Ways-SD-WAN-Redefines-Branch-Office-Networking'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/ebook-the-evolution-of-sd-wan-as-a-platform'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/ebook-the-evolution-of-wan-architecture'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/ebook-transforming-the-network-edge-with-sdwan'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/frost-and-sullivan-vendor-market-2019'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/go-mainsteam-with-sdwan-migration-best-practices'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/sd-wan-retail-future'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/sdwan-migration-strategies-for-varying-network-architectures'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('sase.vmware.com/resources/whitepaper-dynamic-multipath-optimization'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;}}};utag.pre=function() {    utag.loader.initdata();utag.pagevars();    try{utag.loader.RD(utag.data)}catch(e){utag.DB(e)};    utag.loader.loadrules();    };utag.loader.GET=function(){utag.cl={'_all_':1};utag.pre();
  utag.handler.extend=[function(a,b,c,d,e,f,g){if(1){d=b['dom.url'];if(typeof d=='undefined')return;c=[{'https://japanevents.vmware.com/seminar/detail/1200':'mc8kCNzU_LcDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/1846':'gcB6CNGgr7gDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/confirm/1846':'1w9_CKCB_bcDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/detail/1201':'SgCRCLCd_bcDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/1847':'CLlRCKzkr7gDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/confirm/1847':'uuOOCIvur7gDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/detail/1202':'7vhQCO6UsLgDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/1848':'nrQ-CO31_bcDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/confirm/1848':'qroNCMr5_bcDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/detail/1203':'BlmWCPCE_rcDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/1849':'FLfKCK3GsLgDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/confirm/1849':'-4ivCMvPsLgDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/detail/1204':'VLRzCI3tsLgDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/1850':'qph1CMDcsLgDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/confirm/1850':'tQX3CP3H_rcDEL-9xeMB'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d.toString().indexOf(f)>-1){b['Pixellabel']=c[e][f];m=true};};if(m)break};   }},
function(a,b,c,d,e,f,g){if(1){d=b['dom.url'];if(typeof d=='undefined')return;c=[{'https://japanevents.vmware.com/seminar/detail/1238':'feRxCNXj5cADEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/1891':'p23ECO-DlcEDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/confirm/1891':'0HVdCOG3l8EDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/1892':'C0jLCLaklcEDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/confirm/1892':'IowiCJ7Ul8EDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/1893':'pXajCPbVl8EDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/confirm/1893':'kr0jCIzd48ADEL-9xeMB'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d.toString().indexOf(f)>-1){b['Pixellabel2']=c[e][f];m=true};};if(m)break};if(!m)b['Pixellabel2']='';   }},
function(a,b,c,d,e,f,g){if(1){d=b['dom.url'];if(typeof d=='undefined')return;c=[{'https://japanevents.vmware.com/seminar/detail/1149':'B4keCPLYxrIDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/1783':'Ne_VCJ_Sk7IDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/confirm/1783':'9dumCLOBlLIDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/detail/1179':'XsdYCJ-8x7IDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/1817':'SkE4CNzIy7IDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/confirm/1817':'t9lBCOa6lLIDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/detail/1180':'OYqhCOXsy7IDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/1818':'wHmmCPyNyLIDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/confirm/1818':'SWVuCLeSzLIDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/detail/1169':'lXOfCMKszLIDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/1807':'VHaWCLWTlbIDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/confirm/1807':'IBboCMuglbIDEL-9xeMB'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d.toString().indexOf(f)>-1){b['Pixellabel1']=c[e][f];m=true};};if(m)break};   }},
function(a,b,c,d,e,f,g){if(1){d=b['dom.url'];if(typeof d=='undefined')return;c=[{'https://japanevents.vmware.com/seminar/form/complete':'tLF7CN-Z764DEL-9xeMB'},{'https://japanevents.vmware.com/seminar/detail/1101/':'CKFBCJbDtq4DEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/1735':'GiR8CIHJtq4DEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/confirm/1735':'GZPACMz97q4DEL-9xeMB'},{'https://japanevents.vmware.com/seminar/detail/1159/':'QSS_CMKBt64DEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/1794':'A883CPim764DEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/confirm/1794':'Hn_GCLqn764DEL-9xeMB'},{'https://japanevents.vmware.com/seminar/detail/936/':'gR3GCM766q4DEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/1802':'5oq2CPyCt64DEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/confirm/1802':'dv4pCLCQt64DEL-9xeMB'},{'https://japanevents.vmware.com/seminar/detail/1160/':'5bM-CJnHt64DEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/1795':'HfDACIDJt64DEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/confirm/1795':'PoFFCLSE8K4DEL-9xeMB'},{'https://japanevents.vmware.com/seminar/detail/1168/':'EqecCInj664DEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/1806':'-YOhCI_j664DEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/confirm/1806':'SIHnCMrgt64DEL-9xeMB'},{'https://japanevents.vmware.com/seminar/detail/1148/':'OKImCMfM764DEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/17822':'6XbiCKiUt64DEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/confirm/1782':'1cTkCNOd664DEL-9xeMB'},{'https://japanevents.vmware.com/seminar/detail/1102/':'28dUCPf3664DEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/1736':'X0FmCLig8K4DEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/confirm/1736':'I0R9COak8K4DEL-9xeMB'},{'https://japanevents.vmware.com/seminar/detail/1167/':'-UD8CO6i7a4DEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/1805':'r_LOCMOu664DEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/confirm/1805':'YF4HCOKzt64DEL-9xeMB'},{'https://japanevents.vmware.com/seminar/detail/1166/':'XZVTCMeI8K4DEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/1804':'zfyTCJ-K8K4DEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/confirm/1804':'4vEMCN_f664DEL-9xeMB'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d.toString().indexOf(f)>-1){b['Pixellabel3']=c[e][f];m=true};};if(m)break};   }},
function(a,b){
//All Tags to parse Demandbase data
function getOptanonCookies(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
 }

 var getOneTrustCookie= decodeURIComponent(getOptanonCookies('OptanonConsent'));
 
if(getOneTrustCookie.indexOf('C0002:1') > -1 ){
if (typeof dbInfo != 'undefined' || typeof sessionStorage.dbInfo != "undefined") {
  if(typeof dbInfo!='undefined'){
    sessionStorage.dbInfo = JSON.stringify(dbInfo);
  }else{
    dbInfo = JSON.parse(sessionStorage.dbInfo);
  }
  for (key in dbInfo) {
    utag_data[key] = dbInfo[key];
    b[key] = dbInfo[key];
  }
}
}
},
function(a,b){ try{ if((b['dom.url'].toString().toLowerCase().indexOf('blogs.vmware.com'.toLowerCase())>-1&&b['cp.OptanonConsent'].toString().indexOf('C0004:1')>-1)){
// Type your JS code here.

!function(a,b,c,d,e,f,g){a.ktag||(e=function(){e.sendEvent?e.sendEvent(arguments):e.ktq.push(arguments)},e.ktq=[],a.ktag=e,f=b.getElementsByTagName(d)[0],g=b.createElement(d),g.async=!0,g.src=c,f.parentNode.appendChild(g))}(window,document,"https://resources.xg4ken.com/js/v2/ktag.js?tid=KT-N36E8-3EB","script");

ktag('setup', 'KT-N36E8-3EB');
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['cp.OptanonConsent'].toString().indexOf('C0004:1')>-1){
// Type your JavaScript code here...
if(window.location.href.match(/blogs\.vmware\.com\/telco/)){ 
	
	var ftRand = Math.random() + "";
    var num = ftRand * 1000000000000000000;
    jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=hve0;cat=ushve007;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord='+num+'" width="1" height="1" alt=""/>'); 
	}
	if(window.location.href.match(/blogs\.vmware\.com\/telco/)){ 
	
	var ftRand = Math.random() + "";
    var num = ftRand * 1000000000000000000;
    jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=hve0;cat=ukhve00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord='+num+'" width="1" height="1" alt=""/>'); 
	}
	
	if(window.location.href.match(/blogs\.vmware\.com\/telco/)){ 
	
	var ftRand = Math.random() + "";
    var num = ftRand * 1000000000000000000;
    jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8668669;type=ukhve0;cat=ukhve004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord='+num+'" width="1" height="1" alt=""/>'); 
	}
	
	
 //DMR-10024 START
if(window.location.href.match(/vmware\.com\/radius\/impact\/chitale-dairy-transforming-rural-india\//) ){
	
	
	var ftRand = Math.random() + "";
    var num = ftRand * 1000000000000000000;
    $('body').append('<img border="0" width="1" height="1" src="https://ad.doubleclick.net/ddm/activity/src=9327419;type=hvefm0;cat=inhve00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord='+num+'"">');
	


}

//END
} } catch(e){ utag.DB(e) }  },
function(a,b,c,d,e,f,g){if(1){d=b['dom.referrer'];if(typeof d=='undefined')return;c=[{'googlesyndication.com':'af_624f16b778215'},{'baidu.com':'os_624f1968d1306'},{'bing.com':'os_624f1abebaa01'},{'duckduckgo.com':'os_624f1aff325e6'},{'google':'os_624f1b3b27983'},{'yahoo':'os_624f1cfd9f8b8'},{'yandex.ru':'os_624f1d2eedd58'},{'csdn.net':'rf_624f16b793ce1'},{'github.com':'rf_624f16b794913'},{'kube.academy':'rf_624f16b795d4d'},{'pivotal.io':'rf_624f16b796f0b'},{'rabbitmq.com':'rf_624f16b797793'},{'spring.io':'rf_624f16b798172'},{'blogspot.com':'so_624f16b785781'},{'doubleclick.net':'so_624f16b786027'},{'facebook.com':'so_624f16b786974'},{'linkedin.com':'so_624f16b7885e7'},{'reddit.com':'so_624f16b789ae9'},{'t.co':'so_624f16b78a83f'},{'viralgains.com':'so_624f16b78af05'},{'youtube.com':'so_624f16b78b55b'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d.toString().indexOf(f)>-1){b['ref_src']=c[e][f];m=true};};if(m)break};   }},
function(a,b,c,d,e,f,g){if(1){d=b['dom.url'];if(typeof d=='undefined')return;c=[{'https://sase.vmware.com/en/resources/network-security-learn-about-risks-from-a-hacker_TY':'1'},{'https://event.vmware.com/flow/vmware/securityconnect/reg/page/confirmation':'1'},{'https://japanevents.vmware.com/seminar/detail/1169':'1'},{'https://sase.vmware.com/resources/network-security-learn-about-risks-from-a-hacker_TY':'1'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d.toString().indexOf(f)>-1){b['FBCompleteRegistration']=c[e][f];m=true};};if(m)break};   }},
function(a,b,c,d,e,f,g){if(1){d=b['dom.url'];if(typeof d=='undefined')return;c=[{'':''}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d.toString().indexOf(f)>-1){b['FBLead']=c[e][f];m=true};};if(m)break};if(!m)b['FBLead']='';   }},
function(a,b,c,d,e,f,g){if(1){d=b['dom.url'];if(typeof d=='undefined')return;c=[{'https://japanevents.vmware.com/seminar/detail/1263':'lXOfCMKszLIDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/1928':'GiR8CIHJtq4DEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/confirm/1928':'SIHnCMrgt64DEL-9xeMB'},{'https://japanevents.vmware.com/seminar/detail/1264':'OYqhCOXsy7IDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/1929':'6XbiCKiUt64DEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/confirm/1929':'dv4pCLCQt64DEL-9xeMB'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d.toString().indexOf(f)>-1){b['pixel5490']=c[e][f];m=true};};if(m)break};if(!m)b['pixel5490']='';   }},
function(a,b,c,d,e,f,g){if(1){d=b['dom.url'];if(typeof d=='undefined')return;c=[{'https://japanevents.vmware.com/seminar/detail/1306':'ii3dCMrD0dIDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/2001':'nLKBCLaumdIDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/confirm/2001':'CdrjCLiMyNIDEL-9xeMB'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d.toString().indexOf(f)>-1){b['pixel5581']=c[e][f];m=true};};if(m)break};if(!m)b['pixel5581']='';   }},
function(a,b,c,d,e,f,g){if(1){d=b['dom.url'];if(typeof d=='undefined')return;c=[{'https://japanevents.vmware.com/seminar/detail/1328':'qaV4CJbxh9wDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/2027':'IRJPCIH6jNwDEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/confirm/2027':'r3M5COmw19sDEL-9xeMB'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d.toString().indexOf(f)>-1){b['pixel5659']=c[e][f];m=true};};if(m)break};if(!m)b['pixel5659']='';   }},
function(a,b,c,d,e,f,g){if(1){d=b['dom.url'];if(typeof d=='undefined')return;c=[{'https://www.vmware.com/explore/jp/register/01-email.html':'_UhUCK-06-QDEL-9xeMB'},{'https://www.vmware.com/explore/jp/register/complete.html':'HvDTCNiqoOUDEL-9xeMB'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d.toString().indexOf(f)>-1){b['pixel5747']=c[e][f];m=true};};if(m)break};if(!m)b['pixel5747']='';   }},
function(a,b,c,d,e,f,g){if(1){d=b['dom.url'];if(typeof d=='undefined')return;c=[{'https://japanevents.vmware.com/seminar/form/2171':'ETd6CLiq_IQYEL-9xeMB'},{'https://japanevents.vmware.com/seminar/form/confirm/2171':'bkeXCK2o_IQYEL-9xeMB'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d.toString().indexOf(f)>-1){b['pixel5869']=c[e][f];m=true};};if(m)break};if(!m)b['pixel5869']='';   }},
function(a,b,c,d,e,f,g){if(1){d=b['dom.url'];if(typeof d=='undefined')return;c=[{'https://japanevents.vmware.com/seminar/form/2171':'cZenCJGw-4YYEL7BvfUo'},{'https://japanevents.vmware.com/seminar/form/confirm/2171':'5FzWCJa1-4YYEL7BvfUo'},{'https://japanevents.vmware.com/seminar/form/complete':'BmIlCM25-4YYEL7BvfUo'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d.toString().indexOf(f)>-1){b['pixel5929']=c[e][f];m=true};};if(m)break};if(!m)b['pixel5929']='';   }},
function(a,b,c,d,e,f,g){if(1){d=b['dom.url'];if(typeof d=='undefined')return;c=[{'https://vm-event.jp/evolve/register/03-email-complete/':'JbVkCN_m-YcYEL7BvfUo'},{'https://vm-event.jp/evolve/register/complete/':'zNMNCOLm-YcYEL7BvfUo'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d.toString().indexOf(f)>-1){b['pixel5949']=c[e][f];m=true};};if(m)break};if(!m)b['pixel5949']='';   }},
function(a,b){ try{ if((typeof b['cp.VMWCookie']!='undefined'&&b['dom.url'].toString().toLowerCase().indexOf('https://videos-stg.vmware.com'.toLowerCase())>-1&&b['cp.OptanonConsent'].toString().toLowerCase().indexOf('C0002:1'.toLowerCase())>-1)||(typeof b['cp.VMWCookie']!='undefined'&&b['dom.url'].toString().toLowerCase().indexOf('https://videos.vmware.com'.toLowerCase())>-1&&b['cp.OptanonConsent'].toString().indexOf('C0002:1')>-1)||(typeof b['cp.VMWCookie']!='undefined'&&b['dom.url'].toString().toLowerCase().indexOf('https://videos-review.vmware.com'.toLowerCase())>-1&&b['cp.OptanonConsent'].toString().indexOf('C0002:1')>-1)){b['is_logged_in']='Logged In'} } catch(e){ utag.DB(e); }  },
function(a,b){ try{ if((b['dom.url'].toString().toLowerCase().indexOf('videos.vmware.com/search'.toLowerCase())>-1&&b['dom.url'].toString().toLowerCase().indexOf('#text='.toLowerCase())>-1&&b['cp.OptanonConsent'].toString().indexOf('C0002:1')>-1)||(b['dom.url'].toString().toLowerCase().indexOf('https://videos-stg.vmware.com/search'.toLowerCase())>-1&&b['dom.url'].toString().toLowerCase().indexOf('#text='.toLowerCase())>-1&&b['cp.OptanonConsent'].toString().indexOf('C0002:1')>-1)||(b['dom.url'].toString().toLowerCase().indexOf('https://videos-review.vmware.com/search'.toLowerCase())>-1&&b['dom.url'].toString().toLowerCase().indexOf('#text='.toLowerCase())>-1&&b['cp.OptanonConsent'].toString().indexOf('C0002:1')>-1)){try{b['search_term']=window.location.href.split("text=")[1]}catch(e){}} } catch(e){ utag.DB(e); }  },
function(a,b){ try{ if((b['dom.url'].toString().toLowerCase().indexOf('https://videos-stg.vmware.com/'.toLowerCase())>-1&&b['cp.OptanonConsent'].toString().indexOf('C0002:1')>-1)||(b['dom.url'].toString().toLowerCase().indexOf('https://videos.vmware.com/'.toLowerCase())>-1&&b['cp.OptanonConsent'].toString().indexOf('C0002:1')>-1)||(b['dom.url'].toString().toLowerCase().indexOf('https://videos-review.vmware.com/'.toLowerCase())>-1&&b['cp.OptanonConsent'].toString().indexOf('C0002:1')>-1)){
if(jQuery(".top-nav .login_cta").length){
jQuery(".top-nav .login_cta").click(function() {
     addCTracking("vmware_Videolibrary : Login Click");  });
}
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['dom.url'].toString().toLowerCase().indexOf('blogs.vmware.com'.toLowerCase())>-1&&b['cp.OptanonConsent'].toString().indexOf('C0002:1')>-1)){
if(jQuery("body a").length){
jQuery("body a").click(function() {
    if(jQuery(this).attr('href') !== undefined && (jQuery(this).attr('href').includes("blogs.vmware.com/wprss") || jQuery(this).attr('href').includes("blogs.vmware.com/affiliates/feed")))
     var feedname = jQuery(this).attr('href').includes("blogs.vmware.com/wprss")?"wprss Feed":"affiliates Feed";
     addCTracking("Rss_VMWare Blogs : "+feedname);  });
}
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){



    segmentPageCall = function() {
        var src_id = '';
        var cid_idValue = '';
        var int_cidValue = '';
        var pageurl = window.location.href;
     
        if (pageurl.indexOf('?') > 0) {
            if (pageurl.indexOf('src=') > 0) {
                if (pageurl.split('src=')[1].indexOf('&') > -1)
                    src_id = pageurl.split('src=')[1].split("&")[0]
                else
                    src_id = pageurl.split('src=')[1];
            }
            console.log("Test name value after src is: " + pageurl);
    
            if (pageurl.indexOf("int_cid=") > 0 && (pageurl.indexOf("cid=") > 0)) {
                if (pageurl.split('int_cid=')[1].indexOf('&') > -1)
                    int_cidValue = pageurl.split('int_cid=')[1].split("&")[0]
                else
                    int_cidValue = pageurl.split('int_cid=')[1];
                if (pageurl.split('cid=')[1].indexOf('&') > -1)
                    cid_idValue = pageurl.split('cid=')[1].split("&")[0]
                else
                    cid_idValue = pageurl.split('cid=')[1];
    
            } else if (pageurl.indexOf("int_cid=") > 0) {
    
                if (pageurl.split('int_cid=')[1].indexOf('&') > -1)
                    int_cidValue = pageurl.split('int_cid=')[1].split("&")[0]
                else
                    int_cidValue = pageurl.split('int_cid=')[1];
            } else {
    
                if (pageurl.indexOf("cid=") > 0) {
                    if (pageurl.split('cid=')[1].indexOf('&') > -1)
                        cid_idValue = pageurl.split('cid=')[1].split("&")[0]
                    else
                        cid_idValue = pageurl.split('cid=')[1];
                }
            }
        }
    
        var resultObj = {};
        if (document.title !== '') {
          resultObj["title"] =  document.title;
        }
        if (utag_data.page_name !== '') {
            resultObj["name"] = utag_data.page_name;
        }
        
        
         if (src_id !== '' ) {
             
             
         if (src_id !== '' && (src_id && src_id.indexOf("WWW_") > -1 )) {
            
        
            resultObj["int_src"] = src_id;
         }
            
            
         else 
            {
                 resultObj["ext_src"] = src_id;
                
                
            }
        }
    
    
        if (int_cidValue !== '') {
            resultObj["int_cid"] = int_cidValue;
        }
        
        else  {
             if (cid_idValue !== '') {
            resultObj["ext_cid"] = cid_idValue;
             }
        }
    
      /*  if (cid_idValue !== '') {
            resultObj["ext_cid"] = cid_idValue;
        }*/
        
        
        
        var db_accountwatch = '';
var db_multiple_accountwatch = '';
var db_company_name = '';

function setdata(data) {
    
     resultObj["demandbase_account_name"] = data['company_name'] || data['registry_company_name'] || "";
    
    if (typeof (data['watch_list']) != 'undefined') {
        var awatch = (data['watch_list']['account_watch'] || "") + '|' + (data['watch_list']['parent_company'] || "") + '|' + (data['watch_list']['parent_company_identifier'] || "") + '|' + (data['watch_list']['parent_company_type'] || "");
        var maw = (data['watch_list']['account_watch1'] || "") + '|' + (data['watch_list']['account_watch2'] || "") + '|' + (data['watch_list']['account_watch3'] || "") + '|' + (data['watch_list']['account_watch4'] || "") + '|' + (data['watch_list']['account_watch5'] || "") + '|' + (data['watch_list']['account_watch6'] || "") + '|' + (data['watch_list']['account_watch7'] || "") + '|' + (data['watch_list']['account_watch8'] || "") + '|' + (data['watch_list']['account_watch9'] || "") + '|' + (data['watch_list']['account_watch10'] || "") + '|' + (data['watch_list']['account_watch11'] || "") + '|' + (data['watch_list']['account_watch12'] || "") + '|' + (data['watch_list']['account_watch13'] || "") + '|' + (data['watch_list']['account_watch14'] || "") + '|' + (data['watch_list']['account_watch15'] || "") + '|' + (data['watch_list']['account_watch16'] || "") + '|' + (data['watch_list']['account_watch17'] || "") + '|' + (data['watch_list']['account_watch18'] || "") + '|' + (data['watch_list']['account_watch19'] || "") + '|' + (data['watch_list']['account_watch20'] || "") + '|' + (data['watch_list']['account_watch21'] || "") + '|' + (data['watch_list']['account_watch22'] || "") + '|' + (data['watch_list']['account_watch23'] || "") + '|' + (data['watch_list']['account_watch24'] || "") + '|' + (data['watch_list']['account_watch25'] || "") + '|' + (data['watch_list']['account_watch26'] || "") + '|' + (data['watch_list']['account_watch27'] || "") + '|' + (data['watch_list']['account_watch28'] || "") + '|' + (data['watch_list']['account_watch29'] || "") + '|' + (data['watch_list']['account_watch30'] || "") + '|' + (data['watch_list']['account_watch31'] || "") + '|' + (data['watch_list']['account_watch32'] || "") + '|' + (data['watch_list']['account_watch33'] || "") + '|' + (data['watch_list']['account_watch34'] || "") + '|' + (data['watch_list']['account_watch35'] || "") + '|' + (data['watch_list']['account_watch36'] || "") + '|' + (data['watch_list']['account_watch37'] || "") + '|' + (data['watch_list']['account_watch38'] || "") + '|' + (data['watch_list']['account_watch39'] || "") + '|' + (data['watch_list']['account_watch40'] || "") + '|' + (data['watch_list']['account_watch41'] || "")+ '|' + (data['watch_list']['account_watch42'] || "")+ '|' + (data['watch_list']['account_watch43'] || "")+ '|' + (data['watch_list']['account_watch44'] || "")+ '|' + (data['watch_list']['account_watch45'] || "")+ '|' + (data['watch_list']['account_watch46'] || "")+ '|' + (data['watch_list']['account_watch47'] || "")+ '|' + (data['watch_list']['account_watch48'] || "")+ '|' + (data['watch_list']['account_watch49'] || "")+ '|' + (data['watch_list']['account_watch50'] || "")+ '|' + (data['watch_list']['account_watch51'] || "")+ '|' + (data['watch_list']['account_watch52'] || "")+ '|' + (data['watch_list']['account_watch53'] || "")+ '|' + (data['watch_list']['account_watch54'] || "")+ '|' + (data['watch_list']['account_watch55'] || "")+ '|' + (data['watch_list']['account_watch56'] || "")
    }
    
    
    
     if (typeof (awatch) != 'undefined' && awatch != '|||') {
           resultObj["demandbase_account_watchlist"] = awatch;
        }
        if (typeof (maw) != 'undefined' && maw != '|||||||||||||||||||||||||||||||') {
            if(maw.length > 256) { 
                maw = maw.substring(0,256);
            }
            resultObj["demandbase_multiple_account_watchlist"] = maw;
        }

}



 if (typeof db !== 'undefined' && typeof sessionStorage.dbInfo == 'undefined') {
        sessionStorage.db = JSON.stringify(db);
        dbInfo1 = JSON.parse(sessionStorage.db);
        setdata(dbInfo1);
    } else if (typeof sessionStorage.dbInfo !== 'undefined') {
        dbInfo1 = JSON.parse(sessionStorage.dbInfo);
        loadDB = true;
        setdata(dbInfo1);
    }

        
      
        analytics.page(
            resultObj
        );
    
    }
    
    
    segmentTabTrackCall = function(name) {
        var tab_name= name.split('indexingoftab=')[0];

        var resulttabtrackyObj = {};
        if (tab_name !== '') {
     
            resulttabtrackyObj['tab_name'] = tab_name;
        }
        resulttabtrackyObj['url'] =window.location.href;

     var pf_ajs_userid = analytics.user().id();
    
     if (pf_ajs_userid !== null  && pf_ajs_userid !== undefined && pf_ajs_userid.indexOf('@') < 0) {
        analytics.track("Tab Clicked", resulttabtrackyObj);}

    }
    
     segmentNavTrackCall = function(tab_nav_name) {
        var resultnavtrackyObj = {};
        if (tab_nav_name !== '') {
          
         if(tab_nav_name.indexOf(" : ") >-1) {
           var mega_menu_tab_name= tab_nav_name.split(" : ")[1]
         }

    
            resultnavtrackyObj['mega_menu_tab_name'] = mega_menu_tab_name;
        }
        resultnavtrackyObj['url']=window.location.href;
        
             var pf_ajs_userid = analytics.user().id();
    
     if (pf_ajs_userid !== null  && pf_ajs_userid.indexOf('@') < 0) {

        analytics.track("Mega Menu Clicked", resultnavtrackyObj);
}
    }
    
    
    
    
       segmentVideoTrackCall = function(video_name,video_id) {
        var resultvideotrackyObj = {};
        if (video_name !== '') {
    
            resultvideotrackyObj['video_title'] = video_name ;
        }
        
        if (video_id !== '') {
    
            resultvideotrackyObj['video_id'] = video_id ;
        }
        resultvideotrackyObj['url'] =window.location.href;
     var pf_ajs_userid = analytics.user().id();
    
     if (pf_ajs_userid !== null && pf_ajs_userid.indexOf('@') < 0) {

        analytics.track("Video Viewed", resultvideotrackyObj);

    }
    
       }
    
    
  constructJSON=  function (ele, extensions) {
    
        var eleVal = $(ele).text();
        console.log('testing PDF URL'+eleVal);
        
        
        var result = {};
        if (extensions.toLowerCase() == 'pdf') {
              result["file_type"] = 'pdf';
            result["asset_url"] = window.location.origin + $(ele).attr("href");
            result["url"] = window.location.href;
           
    
        } 
        return result;
    }
    
    
    
   var segmentTrack= function (ele, extensions) {
        if(extensions =="pdf")
        {
        var parameterVal="Asset Downloaded" ;
        var result = constructJSON(ele, extensions);
        var pf_ajs_userid = analytics.user().id();
    
        if (pf_ajs_userid !== null  && pf_ajs_userid.indexOf('@') < 0)
        {
        analytics.track(parameterVal, result); }
        }
    
    }
    
    segmentCtaTrack= function(element){
    var resultctatrackyObj = {};
    
      if ($(element).attr("title")) {
    resultctatrackyObj['link_title'] =  $(element).attr("title") ;
      }
      
      if (utag_data['dom.url']) {
    resultctatrackyObj['url'] = utag_data['dom.url'];
      }
       if ($(element).attr("href")) {
    resultctatrackyObj['link_url'] = $(element).attr("href");
       }
        if (pf_ajs_userid !== null && pf_ajs_userid !== undefined && pf_ajs_userid.indexOf('@') < 0)
        {
     var pf_ajs_userid = analytics.user().id();
}
        if (pf_ajs_userid !== null && pf_ajs_userid !== undefined && pf_ajs_userid.indexOf('@') < 0) {
    analytics.track("CTA Clicked", resultctatrackyObj );
        }

}
     
   
    
    

utag_data.isSegmentEventEnabled = (utag_data.isSegmentEventEnabled === true) ? utag_data.isSegmentEventEnabled : false;

    $(document).ready(function() {
        var listExtns = ["pdf", "exe"];
        if(!utag_data.isSegmentEventEnabled){
        $('a[href]').each(function() {
            var ele = $(this);
            var hrefVal = $(this).attr("href");
            var extensions = hrefVal.split('.').pop();
            if ($.inArray(extensions, listExtns) >= 0) {
    
                $(ele).on("click", function(e) {
                    //e.preventDefault();
                    segmentTrack(this, extensions);
                });
            }
        });
        
        
            $(".banner .content .footer-content-area a, .card .cards-footer .actionicon a, .aem-col-container .container .container-footer a, .aem-col-container .container .custom-container-config .column-cards .componentBody .card .cards-footer.cta-align-center a").on("click", function(e) {
               
                segmentCtaTrack(this);
            });  
            
            utag_data.isSegmentEventEnabled=true;
        }
        
        
   });
    
    
    
    
  segmentFormAbandonTrackCall = function() {
    var resultformabandontrackyObj = {};
    var formName = $('form').find('#elqFormName').val() !== undefined ? $('form').find('#elqFormName').val() : "";
   
     if (formName !== '') {

        resultformabandontrackyObj['form_name'] = formName;
    }

if (utag_data['dom.url']) {
        resultformabandontrackyObj['url'] = utag_data['dom.url'] ;
}
        var pf_ajs_userid = analytics.user().id();

 if (pf_ajs_userid !== null  && pf_ajs_userid.indexOf('@') < 0) {
    analytics.track("Form Abandoned", resultformabandontrackyObj );
 }


}
     
    
    
      segmentFormTrackCall = function() {
        var resultformtrackyObj = {};
        var formName = $('form').find('#elqFormName').val() !== undefined ? $('form').find('#elqFormName').val() : "";
       
    
        if (utag_data['cp.s_campaign'] !== '' || utag_data['cp.s_campaign'] !==undefined) {
    
            resultformtrackyObj['ext_cid'] = utag_data['cp.s_campaign'];
            
          
        }
        if (utag_data['cp.int_cid'] !== '' || utag_data['cp.int_cid'] !== undefined ) {
    
            resultformtrackyObj['int_cid'] = utag_data['cp.int_cid']; 
        }
    
        if (utag_data['cp.int_src_id'] !== '' || utag_data['cp.int_src_id'] !== undefined) {
    
            resultformtrackyObj['int_src'] = utag_data['cp.int_src_id'];
        }
        if (utag_data['cp.ext_src_id'] !== '' || utag_data['cp.ext_src_id'] !== undefined) {
    
            resultformtrackyObj['ext_src'] = utag_data['cp.ext_src_id']; 
        }
        
         if (formName !== '') {
    
            resultformtrackyObj['form_name'] = formName;
        }
    
            resultformtrackyObj['url'] = window.location.href ;
            
         

        analytics.track("Form Submitted", resultformtrackyObj );
           
    
    
    }
    
    
    
    
        segmentIdentifyCall = function(email) {
        
        var resultidentifyObj = {};
    
        var seg_hashedemailid = jQuery.sha256(email);
        if (email !== '') {
             email = email.toLowerCase();
    
            resultidentifyObj["email"] = email;
        }
    
        var firstName = $('form').find('#firstName').val() !== undefined ? $('form').find('#firstName').val() : "";
    
        if (firstName !== '') {
    
            resultidentifyObj["firstName"] = firstName;
        }
    
        var lastName = $('form').find('#lastName').val() !== undefined ? $('form').find('#lastName').val() : "";
        if (lastName !== '') {
    
            resultidentifyObj["lastName"] = lastName;
        }
        
        
         if (utag_data['cp.int_traffic'] !== '') {
            if(utag_data['cp.int_traffic'] == 1)
            {
                resultidentifyObj["internal_visitor_flag"] = true;
            }
            else
             {
                resultidentifyObj["internal_visitor_flag"] = false; 
            }
        }
        
        analytics.identify(seg_hashedemailid, resultidentifyObj);
    
        if (typeof segmentFormTrackCall == 'function')
            segmentFormTrackCall();
    }
    
    
    
    
    analytics.ready(function() {
    
        var pf_ajs_userid = analytics.user().id();
        
              
        if (pf_ajs_userid !== null  && pf_ajs_userid.indexOf('@') < 0) {
            segmentPageCall();
    
        }
        
               
    
    });
    
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['cp.OptanonConsent'].toString().indexOf('C0004:1')>-1){
//GetCookie method for FB
function getCookieFB(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//Get FBP & FBC Cookie
var fbp = getCookieFB('_fbp');
var fbc = getCookieFB('_fbc');

//Get Page URL
var pageURL = document.URL;

//Get Browser Name
var browser = "";
var userAgent = navigator.userAgent;
if (userAgent.includes('Firefox/')) {
    //console.log('Firefox');
    browser = "Firefox";
} else if (userAgent.includes('Edg/')) {
    //console.log('Edge');
    browser = "Edge";
} else if (userAgent.includes('Chrome/')) {
    //console.log('Chrome');
    browser = "Chrome";
} else if (userAgent.includes('Safari/')) {
    //console.log('Safari');
    browser = "Safari";
}

var seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
var eventName = "TestEvent" + seq;

if ( b['FBCompleteRegistration'] == 1 ){
        
		//console.log('Fire CompleteRegistration Conversion API call');
		
		setTimeout(function() {
        
        var timestamp = Math.floor(Date.now() / 1000);
        
        var url = "https://www.vmware.com/bin/vmware/fb/conversion/api";
        
        var formData = {
            "data": [
                {
                    "event_name": "CompleteRegistration",
                    "event_time": timestamp,
                    "action_source": "website",
                    "event_source_url": pageURL,
                    "user_data": {
                        "client_user_agent": browser,
                        "client_ip_address": null,
                        "fbc": fbc,
                        "fbp": fbp
                    }
                }
            ]
        };
        
        fetch(url, {
          method: 'POST',
          body: JSON.stringify(formData),
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(data => {
          //console.log('Success:', data);
        })
        .catch((error) => {
          //console.error('Error:', error);
        });
        
    }, 5000);
	
}

if( b['FBLead'] == 1 ) {
	
	//console.log('Fire Lead Conversion API call');
	
	setTimeout(function() {
        
        var timestamp = Math.floor(Date.now() / 1000);
        
        var url = "https://www.vmware.com/bin/vmware/fb/conversion/api";
        
        var formData = {
            "data": [
                {
                    "event_name": "Lead",
                    "event_time": timestamp,
                    "action_source": "website",
                    "event_source_url": pageURL,
                    "user_data": {
                        "client_user_agent": browser,
                        "client_ip_address": null,
                        "fbc": fbc,
                        "fbp": fbp
                    }
                }
            ]
        };
        
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(data => {
            //console.log('Success:', data);
        })
        .catch((error) => {
            //console.error('Error:', error);
        });
        
    }, 5000);
	
}
} } catch(e){ utag.DB(e) }  }];
  utag.handler.cfg_extend=[{"bwq":0,"end":0,"alr":0,"blr":1,"id":"51"},{"bwq":0,"blr":1,"id":"53","alr":0,"end":0},{"alr":0,"end":0,"blr":1,"id":"52","bwq":0},{"blr":1,"id":"47","end":0,"alr":0,"bwq":0},{"bwq":0,"end":0,"alr":1,"blr":0,"id":"5"},{"bwq":0,"blr":0,"id":"15","alr":1,"end":0},{"end":0,"alr":1,"blr":0,"id":"19","bwq":0},{"bwq":0,"alr":1,"end":0,"id":"48","blr":0},{"bwq":0,"id":"54","blr":0,"alr":1,"end":0},{"blr":0,"id":"55","alr":1,"end":0,"bwq":0},{"bwq":0,"id":"57","blr":0,"alr":1,"end":0},{"alr":1,"end":0,"id":"58","blr":0,"bwq":0},{"bwq":0,"id":"59","blr":0,"alr":1,"end":0},{"end":0,"alr":1,"blr":0,"id":"62","bwq":0},{"bwq":0,"alr":1,"end":0,"blr":0,"id":"65"},{"bwq":0,"id":"68","blr":0,"alr":1,"end":0},{"end":0,"alr":1,"id":"69","blr":0,"bwq":0},{"bwq":0,"alr":1,"end":0,"blr":0,"id":"74"},{"end":0,"alr":1,"id":"75","blr":0,"bwq":0},{"bwq":0,"alr":1,"end":0,"blr":0,"id":"76"},{"alr":1,"end":0,"id":"80","blr":0,"bwq":0},{"bwq":0,"id":"64","blr":0,"alr":0,"end":1},{"alr":0,"end":1,"id":"56","blr":0,"bwq":0}];
  utag.loader.initcfg = function(){
    utag.loader.cfg={"289":{load:4,send:utag.cond[72],v:202212150646,wait:1,tid:20010},"12":{load:(utag.cond[5] && utag.cond[74]),send:1,v:202008070212,wait:1,tid:7115},"15":{load:utag.cond[72],send:1,v:202309061636,wait:1,tid:19063},"21":{load:(utag.cond[79] && utag.cond[74]),send:1,v:202112031354,wait:1,tid:6026},"22":{load:(utag.cond[79] && utag.cond[74]),send:1,v:202102050313,wait:1,tid:20078},"23":{load:(utag.cond[79] && utag.cond[75]),send:1,v:202102050313,wait:1,tid:2013},"25":{load:(utag.cond[7] && utag.cond[74]),send:1,v:202008070212,wait:1,tid:6026},"339":{load:(((utag.cond[74])  &&  (utag.cond[221]))),send:1,v:202310041838,wait:1,tid:20067},"31":{load:(utag.cond[8] && utag.cond[74]),send:1,v:202008070212,wait:1,tid:20067},"32":{load:(utag.cond[9] && utag.cond[74]),send:1,v:202008070212,wait:1,tid:6031},"33":{load:(utag.cond[79] && utag.cond[72]),send:1,v:202303291030,wait:1,tid:20010},"41":{load:(utag.cond[11] && utag.cond[72]),send:1,v:202008070212,wait:1,tid:6038},"46":{load:(utag.cond[13] && utag.cond[74]),send:1,v:202008070212,wait:1,tid:6026},"49":{load:(utag.cond[13] && utag.cond[72]),send:1,v:202008070212,wait:1,tid:7110},"59":{load:(utag.cond[17] && utag.cond[74]),send:1,v:202008070212,wait:1,tid:4001},"60":{load:(utag.cond[18] && utag.cond[74]),send:1,v:202008070212,wait:1,tid:4001},"61":{load:(utag.cond[19] && utag.cond[74]),send:1,v:202008070212,wait:1,tid:20010},"63":{load:(utag.cond[20] && utag.cond[74]),send:1,v:202008070212,wait:1,tid:20067},"69":{load:utag.cond[74],send:1,v:202106091737,wait:1,tid:2063},"75":{load:(utag.cond[27] && utag.cond[74]),send:1,v:202008070212,wait:1,tid:20067},"76":{load:(utag.cond[28] && utag.cond[74]),send:1,v:202008070212,wait:1,tid:20067},"77":{load:(((utag.cond[74])  &&  (utag.cond[25] || utag.cond[217] || utag.cond[220]))),send:1,v:202309211740,wait:1,tid:6026},"82":{load:(utag.cond[74] && utag.cond[93] && utag.cond[94]),send:1,v:202107090717,wait:1,tid:7132},"83":{load:(utag.cond[30] && utag.cond[74]),send:1,v:202107060846,wait:1,tid:7132},"324":{load:(((utag.cond[74])  &&  (utag.cond[205] || utag.cond[206] || utag.cond[213] || utag.cond[215]))),send:1,v:202309061636,wait:1,tid:7132},"325":{load:(((utag.cond[74])  &&  (utag.cond[205] || utag.cond[214] || utag.cond[216]))),send:1,v:202309061636,wait:1,tid:7132},"92":{load:(utag.cond[35] && utag.cond[74]),send:1,v:202008070212,wait:1,tid:20067},"93":{load:(utag.cond[39] && utag.cond[74]),send:1,v:202008070212,wait:1,tid:20067},"94":{load:(utag.cond[40] && utag.cond[74]),send:1,v:202008070212,wait:1,tid:20067},"96":{load:(utag.cond[41] && utag.cond[74]),send:1,v:202008070212,wait:1,tid:20067},"97":{load:(utag.cond[42] && utag.cond[74]),send:1,v:202008070212,wait:1,tid:20067},"100":{load:(utag.cond[45] && utag.cond[74]),send:1,v:202008070212,wait:1,tid:20067},"101":{load:(utag.cond[46] && utag.cond[74]),send:1,v:202008070212,wait:1,tid:20067},"104":{load:(utag.cond[74] && utag.cond[49]),send:1,v:202008070212,wait:1,tid:20010},"105":{load:(utag.cond[50] && utag.cond[74]),send:1,v:202008070212,wait:1,tid:6026},"106":{load:(utag.cond[51] && utag.cond[74]),send:1,v:202008070212,wait:1,tid:6026},"107":{load:(utag.cond[52] && utag.cond[74]),send:1,v:202008070212,wait:1,tid:6026},"110":{load:(utag.cond[54] && utag.cond[74]),send:1,v:202107060846,wait:1,tid:4001},"111":{load:(utag.cond[74] && utag.cond[93] && utag.cond[94]),send:1,v:202107090717,wait:1,tid:4001},"112":{load:(utag.cond[79] && utag.cond[74]),send:1,v:202102050313,wait:1,tid:20010},"115":{load:(utag.cond[59] && utag.cond[74]),send:1,v:202008070212,wait:1,tid:4001},"116":{load:(utag.cond[59] && utag.cond[74]),send:1,v:202008070212,wait:1,tid:7132},"123":{load:(utag.cond[65] && utag.cond[74]),send:1,v:202207210231,wait:1,tid:13060},"124":{load:(utag.cond[79] && utag.cond[66] && utag.cond[74]),send:1,v:202207210231,wait:1,tid:13060},"132":{load:(((utag.cond[74])  &&  (utag.cond[203] || utag.cond[207] || utag.cond[209]))),send:1,v:202308142308,wait:1,tid:20110},"135":{load:(utag.cond[74] && utag.cond[76]),send:1,v:202010160228,wait:1,tid:4001},"141":{load:(utag.cond[78] && utag.cond[74]),send:1,v:202111161701,wait:1,tid:20010},"156":{load:1,send:1,v:202104300611,wait:1,tid:20010},"157":{load:(utag.cond[74] && utag.cond[90]),send:1,v:202104300925,wait:1,tid:4001},"158":{load:(utag.cond[74] && utag.cond[91]),send:1,v:202105040501,wait:1,tid:20010},"160":{load:(utag.cond[92] && utag.cond[74]),send:1,v:202105180503,wait:1,tid:6026},"163":{load:(utag.cond[74] && utag.cond[95]),send:1,v:202106151649,wait:1,tid:20078},"164":{load:(utag.cond[96] && utag.cond[74]),send:1,v:202106151649,wait:1,tid:4001},"166":{load:(utag.cond[74] && utag.cond[98]),send:1,v:202106151649,wait:1,tid:6026},"168":{load:1,send:1,v:202107090717,wait:1,tid:20010},"170":{load:(utag.cond[99] && utag.cond[103] && utag.cond[74]),send:1,v:202107090717,wait:1,tid:7132},"171":{load:(utag.cond[100] && utag.cond[74]),send:1,v:202107090717,wait:1,tid:7132},"172":{load:(utag.cond[101] && utag.cond[74]),send:1,v:202107090717,wait:1,tid:4001},"173":{load:(utag.cond[103] && utag.cond[102] && utag.cond[74]),send:1,v:202107090717,wait:1,tid:4001},"174":{load:(utag.cond[104] && utag.cond[74]),send:1,v:202107131218,wait:1,tid:20010},"176":{load:(utag.cond[106] && utag.cond[74]),send:1,v:202107200524,wait:1,tid:20010},"186":{load:(utag.cond[115] && utag.cond[74]),send:1,v:202110210403,wait:1,tid:20010},"188":{load:(utag.cond[117] && utag.cond[74]),send:1,v:202110210403,wait:1,tid:20010},"189":{load:(utag.cond[118] && utag.cond[74]),send:1,v:202110210403,wait:1,tid:20010},"190":{load:(utag.cond[119] && utag.cond[74]),send:1,v:202110210403,wait:1,tid:20010},"191":{load:(utag.cond[120] && utag.cond[74]),send:1,v:202110210403,wait:1,tid:20010},"192":{load:(utag.cond[121] && utag.cond[74]),send:1,v:202110210403,wait:1,tid:20010},"199":{load:(utag.cond[122] && utag.cond[74]),send:1,v:202110210403,wait:1,tid:20010},"204":{load:(utag.cond[125] && utag.cond[74]),send:1,v:202110211507,wait:1,tid:20010},"205":{load:(utag.cond[126] && utag.cond[74]),send:1,v:202110261510,wait:1,tid:20010},"212":{load:utag.cond[130],send:1,v:202112170319,wait:1,tid:20010},"213":{load:utag.cond[131],send:1,v:202112170319,wait:1,tid:20010},"216":{load:(utag.cond[74] && utag.cond[133]),send:1,v:202202040326,wait:1,tid:6038},"217":{load:utag.cond[132],send:1,v:202211180623,wait:1,tid:20010},"224":{load:(utag.cond[74] && utag.cond[134]),send:1,v:202204220743,wait:1,tid:6026},"226":{load:(utag.cond[74] && utag.cond[136]),send:1,v:202204220743,wait:1,tid:6026},"227":{load:(utag.cond[138] && utag.cond[74]),send:1,v:202207011151,wait:1,tid:7132},"230":{load:(utag.cond[141] && utag.cond[74]),send:1,v:202207011151,wait:1,tid:7132},"231":{load:(utag.cond[142] && utag.cond[74]),send:1,v:202207011151,wait:1,tid:7132},"234":{load:(utag.cond[74] && utag.cond[144]),send:1,v:202205200246,wait:1,tid:7132},"235":{load:(utag.cond[74] && utag.cond[145]),send:1,v:202206030349,wait:1,tid:4001},"236":{load:(utag.cond[146] && utag.cond[74]),send:1,v:202207011151,wait:1,tid:7132},"237":{load:(utag.cond[147] && utag.cond[74]),send:1,v:202206230308,wait:1,tid:7132},"240":{load:(utag.cond[148] && utag.cond[74]),send:1,v:202207081205,wait:1,tid:4001},"241":{load:(utag.cond[148] && utag.cond[74]),send:1,v:202207081205,wait:1,tid:4001},"242":{load:(utag.cond[74] && utag.cond[149]),send:1,v:202207150223,wait:1,tid:7132},"243":{load:(utag.cond[74] && utag.cond[150]),send:1,v:202207150223,wait:1,tid:7132},"244":{load:utag.cond[74],send:1,v:202207150223,wait:1,tid:7132},"246":{load:(utag.cond[74] && utag.cond[151]),send:1,v:202207191747,wait:1,tid:4001},"247":{load:(utag.cond[74] && utag.cond[153]),send:1,v:202208050316,wait:1,tid:4001},"252":{load:(utag.cond[74] && utag.cond[156]),send:1,v:202209200647,wait:1,tid:4001},"254":{load:(utag.cond[98] && utag.cond[74]),send:1,v:202208021252,wait:1,tid:6026},"256":{load:(utag.cond[157] && utag.cond[74]),send:1,v:202208050316,wait:1,tid:4001},"257":{load:(utag.cond[74] && utag.cond[158]),send:1,v:202208110358,wait:1,tid:7132},"258":{load:(utag.cond[159] && utag.cond[74]),send:1,v:202208110358,wait:1,tid:7132},"263":{load:(utag.cond[74] && utag.cond[162]),send:1,v:202209200647,wait:1,tid:4001},"264":{load:(utag.cond[163] && utag.cond[74]),send:1,v:202209160156,wait:1,tid:7132},"265":{load:(utag.cond[74] && utag.cond[164]),send:1,v:202209160156,wait:1,tid:4001},"267":{load:utag.cond[166],send:1,v:202210070213,wait:1,tid:20010},"272":{load:(utag.cond[74] && utag.cond[168]),send:1,v:202210130208,wait:1,tid:25004},"273":{load:(utag.cond[74] && utag.cond[169]),send:1,v:202210130208,wait:1,tid:25004},"281":{load:(utag.cond[74] && utag.cond[175]),send:1,v:202310251734,wait:1,tid:20078},"282":{load:(utag.cond[74] && utag.cond[176]),send:1,v:202210280924,wait:1,tid:7132},"284":{load:(utag.cond[74] && utag.cond[178]),send:1,v:202211161055,wait:1,tid:4001},"285":{load:utag.cond[179],send:1,v:202211161055,wait:1,tid:4001},"286":{load:(utag.cond[180] && utag.cond[74]),send:1,v:202211161055,wait:1,tid:15032},"290":{load:(utag.cond[74] && utag.cond[182]),send:1,v:202212020304,wait:1,tid:7132},"291":{load:(utag.cond[74] && utag.cond[183]),send:1,v:202212020304,wait:1,tid:7132},"292":{load:(utag.cond[74] && utag.cond[184]),send:1,v:202212090342,wait:1,tid:4001},"293":{load:(utag.cond[74] && utag.cond[185]),send:1,v:202212090342,wait:1,tid:4001},"294":{load:(utag.cond[74] && utag.cond[186]),send:1,v:202212160218,wait:1,tid:7132},"295":{load:(utag.cond[187] && utag.cond[74]),send:1,v:202301131243,wait:1,tid:20067},"302":{load:(utag.cond[74] && utag.cond[190]),send:1,v:202301171020,wait:1,tid:7132},"303":{load:(utag.cond[180] && utag.cond[74]),send:1,v:202301201040,wait:1,tid:15032},"304":{load:(utag.cond[74] && utag.cond[191]),send:1,v:202301201040,wait:1,tid:7132},"305":{load:utag.cond[74],send:1,v:202301201040,wait:1,tid:20010},"307":{load:(((utag.cond[74])  &&  (utag.cond[193] || utag.cond[195]))),send:1,v:202303100344,wait:1,tid:4001},"309":{load:(((utag.cond[74])  &&  (utag.cond[194] || utag.cond[196]))),send:1,v:202303100344,wait:1,tid:4001},"312":{load:(((utag.cond[74])  &&  (utag.cond[198] || utag.cond[210]))),send:1,v:202308142308,wait:1,tid:12047},"313":{load:(((utag.cond[74])  &&  (utag.cond[199]))),send:1,v:202304070327,wait:1,tid:7132},"315":{load:(((utag.cond[74])  &&  (utag.cond[200]))),send:1,v:202304070327,wait:1,tid:7132},"319":{load:((utag.cond[74])),send:1,v:202305190158,wait:1,tid:20010},"320":{load:(((utag.cond[74])  &&  (utag.cond[203] || utag.cond[207] || utag.cond[209]))),send:1,v:202308142308,wait:1,tid:4001},"323":{load:(((utag.cond[74])  &&  (utag.cond[204]))),send:1,v:202306011059,wait:1,tid:20010},"326":{load:(((utag.cond[208])  &&  (utag.cond[74]))),send:1,v:202309061636,wait:1,tid:20067},"328":{load:(((utag.cond[74])  &&  (utag.cond[210]))),send:1,v:202309211740,wait:1,tid:20067},"329":{load:(((utag.cond[74])  &&  (utag.cond[211]))),send:1,v:202308230817,wait:1,tid:20110},"330":{load:(((utag.cond[74])  &&  (utag.cond[212]))),send:1,v:202309061636,wait:1,tid:20067},"331":{load:(((utag.cond[74])  &&  (utag.cond[217]))),send:1,v:202310041838,wait:1,tid:20067},"332":{load:(((utag.cond[74])  &&  (utag.cond[218]))),send:1,v:202309211740,wait:1,tid:20067},"333":{load:(((utag.cond[74])  &&  (utag.cond[219]))),send:1,v:202309211740,wait:1,tid:20067},"334":{load:(((utag.cond[74])  &&  (utag.cond[217] || utag.cond[220]))),send:1,v:202309211740,wait:1,tid:12047}};
utag.loader.cfgsort=["289","12","15","21","22","23","25","339","31","32","33","41","46","49","59","60","61","63","69","75","76","77","82","83","324","325","92","93","94","96","97","100","101","104","105","106","107","110","111","112","115","116","123","124","132","135","141","156","157","158","160","163","164","166","168","170","171","172","173","174","176","186","188","189","190","191","192","199","204","205","212","213","216","217","224","226","227","230","231","234","235","236","237","240","241","242","243","244","246","247","252","254","256","257","258","263","264","265","267","272","273","281","282","284","285","286","290","291","292","293","294","295","302","303","304","305","307","309","312","313","315","319","320","323","326","328","329","330","331","332","333","334"];
  }
utag.loader.initcfg();
}

  if(typeof utag_cfg_ovrd!='undefined'){for(var i in utag.loader.GV(utag_cfg_ovrd))utag.cfg[i]=utag_cfg_ovrd[i]};
  utag.loader.PINIT = function(a,b,c){
    utag.DB("Pre-INIT");
    if (utag.cfg.noload) {
      return;
    }

    try {
      // Initialize utag.data
      this.GET();
      // FUTURE: blr = "before load rules"
      if(utag.handler.RE('view',utag.data,"blr")){
        utag.handler.LR();
      }
      
    }catch(e){utag.DB(e)};
    // process 'blocking' tags (tags that need to run first)
    a=this.cfg;
    c=0;
    for (b in this.GV(a)) {
      // external .js files (currency converter tag) are blocking
      if(a[b].load>0 && (typeof a[b].src!='undefined'&&a[b].src!='')){
        a[b].block = 1
      }
      if(a[b].block){
        // handle case of bundled and blocking (change 4 to 1)
        // (bundled tags that do not have a .src should really never be set to block... they just run first)
        if(a[b].load==4)a[b].load=1; 
	c=1;
	this.bq[b]=1;
 	a[b].cb=function(){
          var d=this.uid;
          utag.loader.cfg[d].cbf=1;
          utag.loader.LOAD(d)
        };
        a[b].id=b; 
        this.AS(a[b]);
      }
    }
    if(c==0)this.INIT();
  };
  utag.loader.INIT = function(a, b, c, d, e) {
    utag.DB('utag.loader.INIT');
    if (this.ol == 1) return -1;
    else this.ol = 1;
    // The All Tags scope extensions run after blocking tags complete
    utag.handler.RE('view',utag.data);

    utag.rpt.ts['i'] = new Date();
     
    d = this.cfgsort;
    // TODO: Publish engine should sort the bundled tags first..
    for (a=0;a<d.length;a++){
      e = d[a];
      b = this.cfg[e];
      b.id = e;
      // s2s (ServerStream) tags do not load client-side
      if(b.block != 1 && b.s2s != 1){
        if (utag.loader.bk[b.id] || (utag.cfg.readywait && b.load==4)){
          this.f[b.id]=0;
          utag.loader.LOAD(b.id)
        // do not wait if the utag.cfg.noview flag is set and the tag is bundled
        }else if (b.wait == 1 && utag.loader.rf == 0  && !(b.load==4 && utag.cfg.noview)) {
	  utag.DB('utag.loader.INIT: waiting ' + b.id);
          this.wq.push(b)
          this.f[b.id]=2;
        }else if (b.load>0){
	  utag.DB('utag.loader.INIT: loading ' + b.id);
	  this.lq.push(b);
          this.AS(b);
        }
      }
    }
          
    if (this.wq.length > 0) utag.loader.EV('', 'ready', function(a) {
      if(utag.loader.rf==0){
        utag.DB('READY:utag.loader.wq');
        utag.loader.rf=1;
        utag.loader.WQ();
      }
    });
    else if(this.lq.length>0)utag.loader.rf=1;
    else if(this.lq.length==0)utag.loader.END();

    return 1
  };
  utag.loader.EV('', 'ready', function(a) {if(utag.loader.efr!=1){utag.loader.efr=1;try{
 function getOptanonCookkie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
 }

 var getOneTrustCookkie= decodeURIComponent(getOptanonCookkie('OptanonConsent'));
 
if(getOneTrustCookkie.indexOf('C0004:1') > -1 ){

/* (DIMA-5748) if(window.location.href.match(/vmware\.com\/radius\/tag\/agents-of-change/)){
		
    var ftRand = Math.random() + "";
    var num = ftRand * 1000000000000000000;
    $('body').append('<img border="0" width="1" height="1" src="https://9157927.fls.doubleclick.net/activityi;src=9157927;type=vmwor0;cat=vmwar00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1'+num+'"">');
	
} */

/* (DIMA-5748) if(window.location.href.match(/vmware\.com\/radius\/topic\/agents-of-change/)){
		
    var ftRand = Math.random() + "";
    var num = ftRand * 1000000000000000000;
    $('body').append('<img border="0" width="1" height="1" src="https://9157927.fls.doubleclick.net/activityi;src=9157927;type=vmwor0;cat=vmwar00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1'+num+'"">');
	
} */
	
/* (DIMA-5748) jQuery('a[href="https://www.vmware.com/learn/278143_VMware_Cloud_Foundation_REG.html"]').on("click",function (){
	
     var ftRand = Math.random() + "";
     var num = ftRand * 1000000000000000000;
     $('body').append('<img border="0" width="1" height="1" src="https://9157927.fls.doubleclick.net/activityi;src=9157927;type=cloud00;cat=vmwar00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord='+num+'"">');
	
}) */
  
  if(window.location.href=="http://wan.velocloud.com/info-request-thank-you.html"){
  gtag('event', 'conversion', {'send_to': 'AW-964575739/604jCM_Ah5gBEPuD-csD'});
}


if(window.location.href.includes("https://www.vmware.com/radius/impact/leading-culinary-revolution/") === true ||
window.location.href.includes("https://www.vmware.com/radius/cloud-native-application-development-dominos/") === true ||
window.location.href.includes("https://octo.vmware.com/defining-modern-application/") === true 
//window.location.href.includes("https://blogs.vmware.com/services-education-insights/2018/05/about-machine-learning-and-multi-cloud.html") === true ||
//window.location.href.includes("https://blogs.vmware.com/cloudnative/2019/12/30/vmware-pivotal-combining-the-skills-people-and-leadership-to-deliver-modern-apps-to-the-enterprise/") === true ||
//window.location.href.includes("https://k8s.vmware.com/kubernetes-for-executives/") === true ||
//window.location.href.includes("https://k8s.vmware.com/kubernetes-for-developers/") === true ||
//window.location.href.includes("https://www.vmware.com/solutions/business-continuity.html") === true
  ){       
    var ftRand = Math.random() + "";
    var num = ftRand * 1000000000000000000; 
  $('body').append('<img border="0" width="1" height="1" src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=hve0;cat=ushve007;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord='+num+'"">');
    
}

//DMR-11798 starting
if(window.location.href.includes("https://evolve.vmware.com/thank-you.html"))
{
	 var ftRand = Math.random() + "";
    var num = ftRand * 1000000000000000000; 
  $('body').append('<img border="0" width="1" height="1" src="https://www.facebook.com/tr?id=1026009530921215&ev=CompleteRegistration&noscript=1'+num+'"">');
    
	// fbq('track', 'CompleteRegistration');
}
//DMR-11798 ending

/*
 //DMR-11449 Starting
   (function () {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://www.googletagmanager.com/gtag/js?id=DC-9758136';
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s,x);
    })();
	
  //$('body').append("<script src = 'https://www.googletagmanager.com/gtag/js?id=DC-9758136' type='text/javascript' async='async'></script>");

//DMR-11449 Ending 
  */
  
//DMR-11496 Starting
/*

//India
if(window.location.href.includes("https://blogs.vmware.com/cloudnative/2018/12/12/vmworld-pks-customer-highlights") === true){
var ftRand = Math.random() + "";
    var num = ftRand * 1000000000000000000;
	
jQuery('body').append('<img border="0" width="1" height="1" src="https://ad.doubleclick.net/ddm/activity/src=8671176;type=hveru0;cat=inhve003;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord='+num+'"">');
	
jQuery('body').append('<img border="0" width="1" height="1" src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=hve0;cat=inhve0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord='+num+'"">');

}
//UK
if(window.location.href.includes("https://blogs.vmware.com/cloudnative/2018/12/12/vmworld-pks-customer-highlights") === true){
var ftRand = Math.random() + "";
    var num = ftRand * 1000000000000000000;
	
jQuery('body').append('<img border="0" width="1" height="1" src="https://ad.doubleclick.net/ddm/activity/src=8668669;type=ukhve0;cat=ukhve004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord='+num+'"">');
	
jQuery('body').append('<img border="0" width="1" height="1" src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=hve0;cat=ukhve00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord='+num+'"">');
	
}
//US
if(window.location.href.includes("https://blogs.vmware.com/cloudnative/2018/12/12/vmworld-pks-customer-highlights") === true){
var ftRand = Math.random() + "";
    var num = ftRand * 1000000000000000000;
	
jQuery('body').append('<img border="0" width="1" height="1" src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=hve0;cat=ushve007;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord='+num+'"">');
		
}

//DMR-11496 Ending
*/


//DMR-11821 Pixel Implementation Starting
if(window.location.href.includes("https://www.vmware.com/radius/network-visibility-it-problems/")===true || 
window.location.href.includes("https://www.vmware.com/radius/cloud-native-application-development-dominos/")===true  ||
window.location.href.includes("https://www.vmware.com/radius/how-to-multi-cloud-success/")===true){
/*(function() {
    var ntveng = document.createElement('script');
     ntveng.type = 'text/javascript';
        ntveng.async = true;
       
    ntveng.src = 'https://s.ntv.io/serve/load.js';
    ntveng.setAttribute('ntv-clickout-tracking', 'true');
    document.head.appendChild(ntveng);
  })();*/
  $('body').append('<script type="text/javascript">window._prx = window._prx || []; var _prx =  window._prx;_prx.push(["cfg.ClickOutTracking"]);</script><script type="text/javascript" src="https://s.ntv.io/serve/load.js" async></script>');
}
//DMR-11821 Pixel Implementation Ending



//DMR-11910 ntv Pixel implementation starting
if(window.location.href.includes("https://www.vmware.com/radius/network-visibility-it-problems/")===true ||
window.location.href.includes("https://www.vmware.com/radius/cloud-native-application-development-dominos/")===true ||
window.location.href.includes("https://www.vmware.com/radius/how-to-multi-cloud-success/")===true)
{
	var ftRand = Math.random() + "";
    var num = ftRand * 1000000000000000000;
jQuery('body').append('<img border="0" width="1" height="1" src="https://jadserve.postrelease.com/rt.gif?ntv_tg=1de15ea4c7304630a12525950484fde6&ord='+num+'"">');

}
//DMR-11910 ntv Pixel implementation ending




//DMR-11867  Linkedin pixel Starting

if(window.location.href.includes("https://evolve.vmware.com/") === true || 
window.location.href.includes("https://evolve.vmware.com/register.html") === true || 
window.location.href.includes("https://evolve.vmware.com/thank-you.html") === true ||
window.location.href.includes("http://evolve.vmware.com/") === true || 
window.location.href.includes("http://evolve.vmware.com/register.html") === true || 
window.location.href.includes("http://evolve.vmware.com/thank-you.html") === true )
{
var ftRand = Math.random() + "";
    var num = ftRand * 1000000000000000000;
	
jQuery('body').append('<img border="0" width="1" height="1" src="https://px.ads.linkedin.com/collect/?pid=916683&fmt=gif'+num+'"">');

}


/*(function()

{
 var s = document.getElementsByTagName("script")[0];
 var b = document.createElement("script");
 b.type = "text/javascript";b.async = true; b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
 s.parentNode.insertBefore(b, s);
 }
)();

*/

//DMR-11867  Linkedin Pixel Ending

//DMR-12658 US Awareness code starting
if(window.location.href.includes("https://www.vmware.com/radius/amir-levy-harel-digital-transformation/") === true || 
window.location.href.includes("https://blogs.vmware.com/emea/en/2020/01/successful-surgery-braunschweig-municipal-hospital-to-modernize-it-infrastructure-for-driving-digitization/") === true || 
window.location.href.includes("https://blogs.vmware.com/emea/en/2020/04/dynamic-developers-help-swisscom-transform-its-business-and-move-to-the-cloud/") === true
)
{
var ftRand = Math.random() + "";
    var num = ftRand * 1000000000000000000;
	
jQuery('body').append('<img border="0" width="1" height="1" src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=hve0;cat=ushve007;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord='+num+'"">');

}

//DMR-12658 US Awareness code ending
//DMR-12658 US Awareness code ending
//DMR-12721 UK Awareness code starting
if(window.location.href.includes("https://www.vmware.com/radius/amir-levy-harel-digital-transformation/") === true || 
window.location.href.includes("https://blogs.vmware.com/emea/en/2020/01/successful-surgery-braunschweig-municipal-hospital-to-modernize-it-infrastructure-for-driving-digitization/") === true || 
window.location.href.includes("https://blogs.vmware.com/emea/en/2020/04/dynamic-developers-help-swisscom-transform-its-business-and-move-to-the-cloud/") === true
)
{
var ftRand = Math.random() + "";
    var num = ftRand * 1000000000000000000;
	
jQuery('body').append('<img border="0" width="1" height="1" src="https://ad.doubleclick.net/ddm/activity/src=8668669;type=ukhve0;cat=ukhve004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord='+num+'">');
jQuery('body').append('<img border="0" width="1" height="1" src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=hve0;cat=ukhve00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord='+num+'">');
}
//DMR-12721 UK Awareness code ending
//DMR-12722 IN Awareness code starting
if(window.location.href.includes("https://www.vmware.com/radius/amir-levy-harel-digital-transformation/") === true || 
window.location.href.includes("https://blogs.vmware.com/emea/en/2020/01/successful-surgery-braunschweig-municipal-hospital-to-modernize-it-infrastructure-for-driving-digitization/") === true || 
window.location.href.includes("https://blogs.vmware.com/emea/en/2020/04/dynamic-developers-help-swisscom-transform-its-business-and-move-to-the-cloud/") === true
)
{
var ftRand = Math.random() + "";
    var num = ftRand * 1000000000000000000;
	jQuery('body').append('<img border="0" width="1" height="1" src="https://ad.doubleclick.net/ddm/activity/src=8671176;type=hveru0;cat=inhve003;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord='+num+'">');
    jQuery('body').append('<img border="0" width="1" height="1" src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=hve0;cat=inhve0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord='+num+'">');
}
//DMR-12722 IN Awareness code ending



//DMR-13685 Floodlight pixel starting
if(window.location.href.includes("https://benefits.vmware.com") !== true)
{
 window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'DC-9545401');
//DMR-13685 Floodlight pixel ending
}


//DMR-14576 starting
//US
if( window.location.href.includes("https://tanzu.vmware.com/customers/duke-energy") === true )
	{
	var ftRand = Math.random() + "";
		var num = ftRand * 1000000000000000000;
		 jQuery('body').append('<img border="0" src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=hve0;cat=ushve007;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord='+num+'" width="1" height="1" alt=""/>');; 
		
	}
if( window.location.href.includes("https://tanzu.vmware.com/customers/duke-energy") === true )
	{
	var ftRand = Math.random() + "";
		var num = ftRand * 1000000000000000000;
		 jQuery('body').append('<img border="0" src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=hve0;cat=minut0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord='+num+'" width="1" height="1" alt=""/>');; 
		
	}

//DMR-14576 ending
//DWEP-299 Starting
//COL - 14
var currentDate = new Date() //current date
var campaignEndDate = new Date(2022, 0, 30);  //campaign end date
if(window.location.href.includes('https://event.vmware.com/flow/vmware/vmworld2021/reg/form/contactInfo')){
  if(currentDate <= campaignEndDate){
	var ftRand = Math.random() + "";
	var num = ftRand * 1000000000000000000;
	jQuery('body').append('<img border="0" src="https://ad.doubleclick.net/ddm/activity/src=9758136;type=siteactn;cat=vmwor0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord='+num+'" width="1" height="1" alt=""/>');
  }
}
//DWEP-299 Ending

//DWEP-370 Starting
/* (DIMA-5830) if(window.location.href.includes('https://www.vmw.events/exsum?src=ds_60bf5084225e3&cid=7012H000001KWiAQAW')){
	var currentDate = new Date();
    var campaignEndDate = new Date(2021, 5, 29);
    if(currentDate <= campaignEndDate){
		window._qevents = window._qevents || [];
		(function() {
		  var elem = document.createElement('script');
		  elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
		  elem.async = true;
		  elem.type = "text/javascript";
		  var scpt = document.getElementsByTagName('script')[0];
		  scpt.parentNode.insertBefore(elem, scpt);
		})();
		window._qevents.push({qacct:"p-XYjVX-jVeuv56",uid:"__INSERT_EMAIL_HERE__"});
	}
}  */
//DWEP-370 Ending

//DWEP-369 Starting
/*if(window.location.href.includes('https://sase.vmware.com/')){
    var currentDate = new Date();
    var campaignEndDate = new Date(2022, 5, 30);
    if(currentDate <= campaignEndDate){
	   //COL - 11
       $('body').append("<script type='text/javascript' data-cfasync='false' src='https://tribl.io/footer.js?orgId=Kwk8mqBlxeUv9128lm3k'></script>");
	   //COL - 12
	   $('body').append("<script type='text/javascript' data-cfasync='false' src='https://tribl.io/h.js?orgId=Kwk8mqBlxeUv9128lm3k'></script>");
	}
}*/
if(window.location.href.includes('https://sase.vmware.com/')){
    var currentDate = new Date();
    var campaignEndDate = new Date(2022, 5, 30);
    if(currentDate <= campaignEndDate){
	   //COL - 11
       $('body').append("<script type='text/javascript' data-cfasync='false'>(function(doc, src, tagName){var t = doc.createElement(tagName);t.setAttribute('data-cfasync','false');t.src = src+'&r='+encodeURIComponent(doc.URL);var h = doc.getElementsByTagName('head')[0];h.appendChild(t);})(document, 'https://tribl.io/footer.js?orgId=Kwk8mqBlxeUv9128lm3k', 'script');</script>");
	   //COL - 12
	   $('body').append("<script type='text/javascript' data-cfasync='false'>(function(doc, src, tagName){var t = doc.createElement(tagName);t.setAttribute('data-cfasync','false');t.src = src+'&r='+encodeURIComponent(doc.URL);var h = doc.getElementsByTagName('head')[0];h.appendChild(t);})(document, 'https://tribl.io/h.js?orgId=Kwk8mqBlxeUv9128lm3k', 'script');</script>");
	}
}
//DWEP-369 Ending
//DWEP-620 Starting
if(window.location.href.includes('https://sase.vmware.com/products/edge-network-intelligence/edge-network-intelligence-demo') === true){
  $(".blueButtonOpaque.btn.btn-blue-outline").click(function () {
    var a=document.forms["TheForm"]["firstName"].value;
    var b=document.forms["TheForm"]["lastName"].value;
    var c=document.forms["TheForm"]["company"].value;
    var d=document.forms["TheForm"]["email"].value;
    var e=document.forms["TheForm"]["title"].value;
    var f=document.forms["TheForm"]["industry"].value;
    var g=document.forms["TheForm"]["demoType"].value;
    var h=document.forms["TheForm"]["phoneCode"].value;
    var i=document.forms["TheForm"]["country"].value;
    if($('#state').attr('class') === 'selectpicker'){
      var j=document.forms["TheForm"]["state"].value;
      if (a !== "" && b !== "" && c !== "" && d !== "" && e !== "" && f !== "" && g !== "" && h !== "" && i !== "" && j !== "") {
	//col-12
	var currentDate = new Date();
	var campaignEndDate = new Date(2022, 11, 31);
	if(currentDate <= campaignEndDate){
	  gtag('event', 'conversion', {'send_to': 'AW-951536373/tX66CPilkKcBEPWV3cUD'});
	}           
      }
    }
    else if($('#state').attr('class') === 'selectpicker ignore'){
      if (a !== "" && b !== "" && c !== "" && d !== "" && e !== "" && f !== "" && g !== "" && h !== "" && i !== "") {
	//col-12
	var currentDate = new Date();
	var campaignEndDate = new Date(2022, 11, 31);
	if(currentDate <= campaignEndDate){
	  gtag('event', 'conversion', {'send_to': 'AW-951536373/tX66CPilkKcBEPWV3cUD'});
	}
      }
    }
  });
}	
//DWEP-620 Ending 

//DWEP-639 Starting
 /* (DIMA-5748) if(window.location.href.includes('https://event.vmware.com/flow/vmware/vmworld2021/reg/form/contactInfo')===true){
	            var currentDate = new Date();
	            var campaignEndDate = new Date(2021, 9, 6);
	            if(currentDate <= campaignEndDate){
                //GLOBAL SCRIPT		
                    (function () {
                            var s = document.createElement('script');
                            s.type = 'text/javascript';
                            s.async = true;
                            s.src = 'https://www.googletagmanager.com/gtag/js?id=DC-9157927';
                            var x = document.getElementsByTagName('script')[0];
                            x.parentNode.insertBefore(s, x);
                        })();
                    
                    //PIXEL CODE	
                    var ftRand = Math.random() + "";
                    var num = ftRand * 1000000000000000000;
                    jQuery('body').append('<img width="1" height="1" src="https://ad.doubleclick.net/ddm/activity/src=9157927;type=regis0;cat=vmwar00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord='+num+'" alt=""/>');
				}
          }  */
 //DWEP-639 Ending
 
 
//DWEP-1227 Pixel Cloud Providers - Google Ads Pixels Starting
if(window.location.href.indexOf('https://cloud.vmware.com/providers') > -1){
let GTMScript = document.createElement("script");
GTMScript.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=AW-339535994");
document.body.appendChild(GTMScript);
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-948279513');


jQuery("a .Header_subMenuItem__3qYZb").click(function(){
  if(jQuery(this).parent().parent().attr('href').indexOf("/providers/search-result") > -1){
        //console.log("Yes ", jQuery(this).text())
       function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
	  window.setTimeout(function(){ 
      window.location = url;
	   }, 1500);
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-948279513/zwq1CIXhrf8BENmxlsQD',
      'event_callback': callback
  });
  return false;
  }
  if(typeof gtag !=="undefined"){
	gtag_report_conversion(jQuery(this).parent().parent().attr('href'))
  }
  }
})
}


//DWEP-1227 Pixel Cloud Providers - Google Ads Pixels Ending

//DWEP-1445 Pixel starting
if(window.location.href == "https://www.vmware.com/au/welcome/adobe.html" ||
window.location.href == "https://www.vmware.com/in/welcome/adobe.html" ||
window.location.href == "https://www.vmware.com/sg/welcome/adobe.html" ||
window.location.href == "https://www.vmware.com/au/welcome/food-passion.html" ||
window.location.href == "https://www.vmware.com/in/welcome/food-passion.html" ||
window.location.href == "https://www.vmware.com/sg/welcome/food-passion.html") {
	var ftRand = Math.random() + "";
	var num = ftRand * 1000000000000000000;
	jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'" width="1" height="1" alt=""/>');
	
}
//Mohan Code Starting
//page Load Pixel Starting
if(window.location.href.indexOf('https://www.vmware.com/au/welcome.html') > -1 || 
window.location.href.indexOf('https://www.vmware.com/au/welcome/workspace.html') > -1 || 
window.location.href.indexOf('https://www.vmware.com/au/welcome/moderna.html') > -1 || 
window.location.href.indexOf('https://www.vmware.com/au/welcome/zoom.html') > -1 || 
window.location.href.indexOf('https://www.vmware.com/au/welcome/customers.html') > -1 ||
 window.location.href.indexOf('https://www.vmware.com/au/welcome/partners.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/au/welcome/cloud-infrastructure.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/au/welcome/modernapps.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/au/welcome/networking.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/au/welcome/security.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/au/welcome/anywhere-workforce.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/au/welcome/tap-into-multiple-clouds.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/au/welcome/build-better-apps-faster.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/au/welcome/core-cloud-edge.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/au/welcome/better-protect-apps.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/au/welcome/india-nse.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/in/welcome.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/in/welcome/workspace.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/in/welcome/moderna.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/in/welcome/zoom.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/in/welcome/customers.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/in/welcome/partners.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/in/welcome/cloud-infrastructure.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/in/welcome/modernapps.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/in/welcome/networking.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/in/welcome/security.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/in/welcome/anywhere-workforce.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/in/welcome/tap-into-multiple-clouds.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/in/welcome/build-better-apps-faster.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/in/welcome/core-cloud-edge.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/in/welcome/better-protect-apps.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/in/welcome/india-nse.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/in/welcome/gap-inc.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/in/welcome/bookmyshow.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/sg/welcome.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/sg/welcome/workspace.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/sg/welcome/moderna.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/sg/welcome/zoom.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/sg/welcome/customers.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/sg/welcome/partners.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/sg/welcome/cloud-infrastructure.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/sg/welcome/modernapps.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/sg/welcome/networking.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/sg/welcome/security.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/sg/welcome/anywhere-workforce.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/sg/welcome/tap-into-multiple-clouds.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/sg/welcome/build-better-apps-faster.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/sg/welcome/core-cloud-edge.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/sg/welcome/better-protect-apps.html') > -1 
 ){
 	 var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
}
//Page Load Pixel Ending

if(window.location.href.indexOf('https://www.vmware.com/au/welcome.html') > -1 || window.location.href.indexOf('https://www.vmware.com/in/welcome.html') > -1 || window.location.href.indexOf('https://www.vmware.com/sg/welcome.html') > -1 ){

//HVE Franchise Starting
jQuery(".linkdisplay.mb-2.plain-text").click(function(){
 if(jQuery(this).attr('href').indexOf('https://www.vmware.com/au/cloud-solutions/multi-cloud.html?src=WWW_au_VMW_cHV6hLB0slbQwYJkWKFj&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/au/cloud-solutions/app-modernization.html?src=WWW_au_VMW_cHV6hLB0slbQwYJkWKFj&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/au/solutions/anywhere-workspace.html?src=WWW_au_VMW_cHV6hLB0slbQwYJkWKFj&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/au/solutions/virtual-cloud-network.html?src=WWW_au_VMW_cHV6hLB0slbQwYJkWKFj&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/au/security.html?src=WWW_au_VMW_cHV6hLB0slbQwYJkWKFj&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/cloud-solutions/multi-cloud.html?src=WWW_au_VMW_cHV6hLB0slbQwYJkWKFj&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/cloud-solutions/app-modernization.html?src=WWW_au_VMW_cHV6hLB0slbQwYJkWKFj&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/solutions/anywhere-workspace.html?src=WWW_au_VMW_cHV6hLB0slbQwYJkWKFj&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/solutions/virtual-cloud-network.html?src=WWW_au_VMW_cHV6hLB0slbQwYJkWKFj&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/security.html?src=WWW_au_VMW_cHV6hLB0slbQwYJkWKFj&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/cloud-solutions/multi-cloud.html?src=WWW_au_VMW_cHV6hLB0slbQwYJkWKFj&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/cloud-solutions/app-modernization.html?src=WWW_au_VMW_cHV6hLB0slbQwYJkWKFj&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/solutions/anywhere-workspace.html?src=WWW_au_VMW_cHV6hLB0slbQwYJkWKFj&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/solutions/virtual-cloud-network.html?src=WWW_au_VMW_cHV6hLB0slbQwYJkWKFj&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/security.html?src=WWW_au_VMW_cHV6hLB0slbQwYJkWKFj&int_cid=7012H000001lE6hQAE') > -1 ){
	 var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');

}
})

jQuery(".linkdisplay.mb-2.btn.btn-blue-outline").click(function(){
	
	 var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
})

//HVE Franchise Ending

//HVE Customer Starting
jQuery("a.btn.btn.btn-blue-outline,.microsite-menuItem a").click(function(){
  if(jQuery(this).attr('href').indexOf('/au/welcome/customers.html') > -1 || jQuery(this).attr('href').indexOf('/in/welcome/customers.html') > -1 || jQuery(this).attr('href').indexOf('/sg/welcome/customers.html') > -1){
      var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
  }
})



//HVE Customer Ending


}

if(window.location.href.indexOf('https://www.vmware.com/au/welcome/workspace.html') > -1 || window.location.href.indexOf('https://www.vmware.com/in/welcome/workspace.html') > -1 || window.location.href.indexOf('https://www.vmware.com/sg/welcome/workspace.html') > -1){


//HVE Article Starting

jQuery(".linkdisplay.mb-2.btn").click(function(){
	
	 var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo000;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
})

//HVE Article Ending


}

if(window.location.href.indexOf('https://www.vmware.com/au/welcome/moderna.html') > -1 || window.location.href.indexOf('https://www.vmware.com/in/welcome/moderna.html') > -1 || window.location.href.indexOf('https://www.vmware.com/sg/welcome/moderna.html') > -1){
//HVE Franchise Starting
jQuery(".microsite-menuItem a").click(function(){
if(jQuery(this).attr('href').indexOf('/au/welcome/customers.html') < 0 || jQuery(this).attr('href').indexOf('/in/welcome/customers.html') < 0 || jQuery(this).attr('href').indexOf('/sg/welcome/customers.html') < 0 || jQuery(this).attr('href').indexOf('/au/welcome/partners.html') < 0 || jQuery(this).attr('href').indexOf('/in/welcome/partners.html') < 0 || jQuery(this).attr('href').indexOf('/sg/welcome/partners.html') < 0 ){
	
	 var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
}
})
//HVE Franchise Ending

//HVE Customer Starting
jQuery(".microsite-menuItem a").click(function(){
if(jQuery(this).attr('href').indexOf('/au/welcome/customers.html') > -1 || jQuery(this).attr('href').indexOf('/in/welcome/customers.html') > -1|| jQuery(this).attr('href').indexOf('/sg/welcome/customers.html') > -1 ){
	
	 var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
}
})

//HVE Customer Ending


//HVE External Site Starting

jQuery(".linkdisplay.mb-2.plain-text").click(function(){
   var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
})

jQuery(".col-md-12.no-padd a").click(function(){
  if(jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/workspace-one.html?src=WWW_au_VMW_95w6cIxaG3tQh4Bq0rjE&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/workspace-one.html?src=WWW_au_VMW_95w6cIxaG3tQh4Bq0rjE&int_cid=7012H000001lE6hQAE') > -1 ||  jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/products/workspace-one.html?src=WWW_au_VMW_95w6cIxaG3tQh4Bq0rjE&int_cid=7012H000001lE6hQAE') > -1 ||  jQuery(this).attr('href').indexOf(' https://www.vmware.com/au/products/carbon-black-cloud-endpoint.html?src=WWW_au_VMW_95w6cIxaG3tQh4Bq0rjE&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf(' https://www.vmware.com/in/products/carbon-black-cloud-endpoint.html?src=WWW_au_VMW_95w6cIxaG3tQh4Bq0rjE&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf(' https://www.vmware.com/sg/products/carbon-black-cloud-endpoint.html?src=WWW_au_VMW_95w6cIxaG3tQh4Bq0rjE&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf(' https://investors.modernatx.com/news-releases/news-release-details/modernas-covid-19-vaccine-candidate-meets-its-primary-efficacy') > -1){
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
}
})
//HVE External Site Ending

}

if(window.location.href.indexOf('https://www.vmware.com/au/welcome/zoom.html') > -1 || window.location.href.indexOf('https://www.vmware.com/in/welcome/zoom.html') > -1 || window.location.href.indexOf('https://www.vmware.com/sg/welcome/zoom.html') > -1){

//HVE External Site Starting
jQuery('.linkdisplay.mb-2.plain-text').click(function(){
  if(jQuery(this).attr('href').indexOf('https://www.vmware.com/au/solutions/anywhere-workspace.html?src=WWW_au_VMW_XY7n28Nb13lIyUhprFDP&int_cid=7012H000001lE6hQAE') < 0 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/solutions/anywhere-workspace.html?src=WWW_au_VMW_XY7n28Nb13lIyUhprFDP&int_cid=7012H000001lE6hQAE') < 0 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/solutions/anywhere-workspace.html?src=WWW_au_VMW_XY7n28Nb13lIyUhprFDP&int_cid=7012H000001lE6hQAE') < 0){
    var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
  }
})

jQuery(".col-md-12.no-padd a").click(function(){
  if(jQuery(this).attr('href').indexOf('http://www.globenewswire.com/news-release/2018/06/11/1519706/0/en/Zoom-Founder-CEO-Eric-S-Yuan-Wins-2018-EY-Entrepreneur-of-the-Year-Award.html') > -1 || jQuery(this).attr('href').indexOf('https://www.cnbc.com/2019/03/22/video-conferencing-company-zoom-files-to-go-public-is-profitable.html') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/workspace-one/device-security.html?src=WWW_au_VMW_XY7n28Nb13lIyUhprFDP&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/workspace-one/device-security.html?src=WWW_au_VMW_XY7n28Nb13lIyUhprFDP&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/products/workspace-one/device-security.html?src=WWW_au_VMW_XY7n28Nb13lIyUhprFDP&int_cid=7012H000001lE6hQAE') > -1){
  var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
}
})

//HVE External Site Ending

}

if(window.location.href.indexOf('https://www.vmware.com/au/welcome/customers.html') > -1 || window.location.href.indexOf('https://www.vmware.com/in/welcome/customers.html') > -1 || window.location.href.indexOf('https://www.vmware.com/sg/welcome/customers.html') > -1){
//HVE Franchise Starting
jQuery(".microsite-menuItem a").click(function(){
if(jQuery(this).attr('href').indexOf('/au/welcome/customers.html') < 0 || jQuery(this).attr('href').indexOf('/in/welcome/customers.html') < 0 || jQuery(this).attr('href').indexOf('/sg/welcome/customers.html') < 0 || jQuery(this).attr('href').indexOf('/au/welcome/partners.html') < 0 || jQuery(this).attr('href').indexOf('/in/welcome/partners.html') < 0 || jQuery(this).attr('href').indexOf('/sg/welcome/partners.html') < 0 ){
	
	 var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
}
})
//HVE Franchise Ending

//HVE Customer Starting
jQuery(".microsite-menuItem a").click(function(){
if(jQuery(this).attr('href').indexOf('/au/welcome/customers.html') > -1 || jQuery(this).attr('href').indexOf('/in/welcome/customers.html') > -1|| jQuery(this).attr('href').indexOf('/sg/welcome/customers.html') > -1 ){
	
	 var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
}
})

//HVE Customer Ending

//HVE Article Starting

jQuery('.linkdisplay.mb-2.plain-text').click(function(){
 var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo000;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
})
//HVE Article Ending



}

if(window.location.href.indexOf('https://www.vmware.com/au/welcome/partners.html') > -1 || window.location.href.indexOf('https://www.vmware.com/in/welcome/partners.html') > -1 || window.location.href.indexOf('https://www.vmware.com/sg/welcome/partners.html') > -1){
//HVE Franchise Starting
jQuery(".microsite-menuItem a").click(function(){
if(jQuery(this).attr('href').indexOf('/au/welcome/customers.html') < 0 || jQuery(this).attr('href').indexOf('/in/welcome/customers.html') < 0 || jQuery(this).attr('href').indexOf('/sg/welcome/customers.html') < 0 || jQuery(this).attr('href').indexOf('/au/welcome/partners.html') < 0 || jQuery(this).attr('href').indexOf('/in/welcome/partners.html') < 0 || jQuery(this).attr('href').indexOf('/sg/welcome/partners.html') < 0 ){
	
	 var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
}
})
//HVE Franchise Ending

//HVE Customer Starting
jQuery(".microsite-menuItem a").click(function(){
if(jQuery(this).attr('href').indexOf('/au/welcome/customers.html') > -1 || jQuery(this).attr('href').indexOf('/in/welcome/customers.html') > -1|| jQuery(this).attr('href').indexOf('/sg/welcome/customers.html') > -1 ){
	
	 var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
}
})

//HVE Customer Ending



//HVE Video Starting
//HVE Visit
	/*var ftRand = Math.random() + "";
	var num = ftRand * 1000000000000000000;
	jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'" width="1" height="1" alt=""/>');*/

	//HVE Video
	jQuery("a[data-assetid=6233293902001], a[data-assetid=6230370677001]").click(function() {
		setTimeout(function(){
			var videoID = jQuery("video").attr("id");
			videojs(videoID)._isEventViewed = {};
			var vFlag;

			//Video Play
			/*videojs(videoID).on('play',function(){
				if (!this._isEventViewed.play) {
					console.log('VIDEO: tracking PLAY event');
					var ftRand = Math.random() + "";
					var num = ftRand * 1000000000000000000;
					jQuery('body').append('<img border="0" src="https://ad.doubleclick.net/ddm/activity/src=9327419;type=hvefm0;cat=inhve001;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord='+num+'" width="1" height="1" alt=""/>');
					this._isEventViewed.play=true;
				}
			});*/
			
			
			//Video Play & Midpoint
			videojs(videoID).on('timeupdate',function(){
				var currentTime = Number(this.currentTime());
				var duration = Number(this.duration());
				var percentViewed = Math.floor((currentTime/duration)*100);
				var ev = this._isEventViewed;
				if(percentViewed >= 0 && vFlag != 1) {
					vFlag = 1;
					console.log('VIDEO: tracking Play event');
					/* tracking code here */
					var ftRand = Math.random() + "";
					var num = ftRand * 1000000000000000000;
					jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo001;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'" width="1" height="1" alt=""/>');
				}
				if (!ev['50'] && percentViewed >= 50) {
					console.log('VIDEO: tracking 50% MILESTONE event');
					/* tracking code here */
					var ftRand = Math.random() + "";
					var num = ftRand * 1000000000000000000;
					jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo002;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'" width="1" height="1" alt=""/>');
					ev['50']=true;
				}
			});
			

			//Video End
			videojs(videoID).on('ended',function() {
				if (!this._isEventViewed.ended) {
					console.log('VIDEO: tracking ENDED event');
					/* tracking code here */
					//1st pixel
					var ftRand = Math.random() + "";
					var num = ftRand * 1000000000000000000;
					jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo003;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'" width="1" height="1" alt=""/>');
					this._isEventViewed.ended=true;
				}
			});
			
		}, 2000);

	});
	
//HVE Video Ending

//HVE External Site Starting
jQuery(".linkdisplay.mb-2.plain-text").click(function(){
 if(jQuery(this).attr('href').indexOf('https://www.vmware.com/au/partners/partner-executives/vmware-partners-ahead-helps-customers-jumpstart-digital-transformation.html?src=WWW_au_VMW_ahZFxQbl4CSg0mr3K6Ls&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/partners/partner-executives/vmware-partners-ahead-helps-customers-jumpstart-digital-transformation.html?src=WWW_au_VMW_ahZFxQbl4CSg0mr3K6Ls&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/partners/partner-executives/vmware-partners-ahead-helps-customers-jumpstart-digital-transformation.html?src=WWW_au_VMW_ahZFxQbl4CSg0mr3K6Ls&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/au/partners/partner-executives/vmware-partner-dizzion-keeps-customers-business-as-usual.html?src=WWW_au_VMW_ahZFxQbl4CSg0mr3K6Ls&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/partners/partner-executives/vmware-partner-dizzion-keeps-customers-business-as-usual.html?src=WWW_au_VMW_ahZFxQbl4CSg0mr3K6Ls&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/partners/partner-executives/vmware-partner-dizzion-keeps-customers-business-as-usual.html?src=WWW_au_VMW_ahZFxQbl4CSg0mr3K6Ls&int_cid=7012H000001lE6hQAE') > -1){
 	 var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');

}
})


//HVE External Site Ending

}

if(window.location.href.indexOf('https://www.vmware.com/au/welcome/cloud-infrastructure.html') > -1 || window.location.href.indexOf('https://www.vmware.com/in/welcome/cloud-infrastructure.html') > -1 || window.location.href.indexOf('https://www.vmware.com/sg/welcome/cloud-infrastructure.html') > -1){


//HVE Article Starting
jQuery(".linkdisplay.mb-2.btn").click(function(){
	 var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo000;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
})
//HVE Article Ending



//HVE External Site Starting
jQuery(".linkdisplay.mb-2.plain-text").click(function(){
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');

})
//HVE External Site Ending

}

if(window.location.href.indexOf('https://www.vmware.com/au/welcome/modernapps.html') > -1 || window.location.href.indexOf('https://www.vmware.com/in/welcome/modernapps.html') > -1 || window.location.href.indexOf('https://www.vmware.com/sg/welcome/modernapps.html') > -1){


//HVE Article Starting
jQuery(".linkdisplay.mb-2.btn").click(function(){
	 var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo000;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
})
//HVE Article Ending



//HVE External Site Starting
jQuery(".linkdisplay.mb-2.plain-text").click(function(){
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');

})
//HVE External Site Ending

}

if(window.location.href.indexOf('https://www.vmware.com/au/welcome/networking.html') > -1 || window.location.href.indexOf('https://www.vmware.com/in/welcome/networking.html') > -1 || window.location.href.indexOf('https://www.vmware.com/sg/welcome/networking.html') > -1){
//HVE Article Starting
jQuery(".linkdisplay.mb-2.btn").click(function(){
	 var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo000;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
})
//HVE Article Ending



//HVE External Site Starting
jQuery(".linkdisplay.mb-2.plain-text").click(function(){
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');

})
//HVE External Site Ending

}

if(window.location.href.indexOf('https://www.vmware.com/au/welcome/security.html') > -1 || window.location.href.indexOf('https://www.vmware.com/in/welcome/security.html') > -1 || window.location.href.indexOf('https://www.vmware.com/sg/welcome/security.html') > -1){
//HVE Article Starting
jQuery(".linkdisplay.mb-2.btn").click(function(){
	 var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo000;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
})
//HVE Article Ending



//HVE External Site Starting
jQuery(".linkdisplay.mb-2.plain-text").click(function(){
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');

})
//HVE External Site Ending

}

if(window.location.href.indexOf('https://www.vmware.com/au/welcome/anywhere-workforce.html') > -1 || window.location.href.indexOf('https://www.vmware.com/in/welcome/anywhere-workforce.html') > -1 || window.location.href.indexOf('https://www.vmware.com/sg/welcome/anywhere-workforce.html') > -1){
//HVE Franchise Starting
jQuery(".col-md-12.no-padd a").click(function(){
    if(jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/workspace-one.html?src=WWW_au_VMW_sMwB4pgjy07JnUZCExi5&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/workspace-one.html?src=WWW_au_VMW_sMwB4pgjy07JnUZCExi5&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/products/workspace-one.html?src=WWW_au_VMW_sMwB4pgjy07JnUZCExi5&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/au/solutions/windows10-modern-management.html?src=WWW_au_VMW_sMwB4pgjy07JnUZCExi5&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/solutions/windows10-modern-management.html?src=WWW_au_VMW_sMwB4pgjy07JnUZCExi5&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/solutions/windows10-modern-management.html?src=WWW_au_VMW_sMwB4pgjy07JnUZCExi5&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/workspace-one/intelligent-hub.html?src=WWW_au_VMW_sMwB4pgjy07JnUZCExi5&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/workspace-one/intelligent-hub.html?src=WWW_au_VMW_sMwB4pgjy07JnUZCExi5&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/products/workspace-one/intelligent-hub.html?src=WWW_au_VMW_sMwB4pgjy07JnUZCExi5&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/sd-wan.html?src=WWW_au_VMW_sMwB4pgjy07JnUZCExi5&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/sd-wan.html?src=WWW_au_VMW_sMwB4pgjy07JnUZCExi5&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/products/sd-wan.html?src=WWW_au_VMW_sMwB4pgjy07JnUZCExi5&int_cid=7012H000001lE6hQAE') > -1){
		var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
       
    }

})
//HVE Franchise Ending


//HVE External Site Starting
jQuery(".col-md-12.no-padd a").click(function(){
    if(jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/workspace-one.html?src=WWW_au_VMW_sMwB4pgjy07JnUZCExi5&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/workspace-one.html?src=WWW_au_VMW_sMwB4pgjy07JnUZCExi5&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/products/workspace-one.html?src=WWW_au_VMW_sMwB4pgjy07JnUZCExi5&int_cid=7012H000001lE6hQAE') > -1  || jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/carbon-black-cloud-endpoint.html?src=WWW_au_VMW_sMwB4pgjy07JnUZCExi5&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/carbon-black-cloud-endpoint.html?src=WWW_au_VMW_sMwB4pgjy07JnUZCExi5&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/products/carbon-black-cloud-endpoint.html?src=WWW_au_VMW_sMwB4pgjy07JnUZCExi5&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/secure-access-service-edge-sase.html?src=WWW_au_VMW_sMwB4pgjy07JnUZCExi5&int_cid=7012H000001lE6hQAE') > -1  || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/secure-access-service-edge-sase.html?src=WWW_au_VMW_sMwB4pgjy07JnUZCExi5&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/products/secure-access-service-edge-sase.html?src=WWW_au_VMW_sMwB4pgjy07JnUZCExi5&int_cid=7012H000001lE6hQAE') > -1 ){
       var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');

    }

})
//HVE External Site Ending

}

if(window.location.href.indexOf('https://www.vmware.com/au/welcome/tap-into-multiple-clouds.html') > -1 || window.location.href.indexOf('https://www.vmware.com/in/welcome/tap-into-multiple-clouds.html') > -1 || window.location.href.indexOf('https://www.vmware.com/sg/welcome/tap-into-multiple-clouds.html') > -1){
//HVE Franchise Starting
jQuery('.linkdisplay.mb-2.plain-text').click(function(){
         var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
})

jQuery(".col-md-12.no-padd a").click(function(){
  if(jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/vrealize-network-insight.html?src=WWW_au_VMW_0QLaINzwevKTAPjtRuCM&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/vrealize-network-insight.html?src=WWW_au_VMW_0QLaINzwevKTAPjtRuCM&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/products/vrealize-network-insight.html?src=WWW_au_VMW_0QLaINzwevKTAPjtRuCM&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/au/vmware-cloud-verified.html?src=WWW_au_VMW_0QLaINzwevKTAPjtRuCM&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/vmware-cloud-verified.html?src=WWW_au_VMW_0QLaINzwevKTAPjtRuCM&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/vmware-cloud-verified.html?src=WWW_au_VMW_0QLaINzwevKTAPjtRuCM&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/cloud-foundation.html?src=WWW_au_VMW_0QLaINzwevKTAPjtRuCM&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/cloud-foundation.html?src=WWW_au_VMW_0QLaINzwevKTAPjtRuCM&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/products/cloud-foundation.html?src=WWW_au_VMW_0QLaINzwevKTAPjtRuCM&int_cid=7012H000001lE6hQAE') > -1){
         var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
}
})
//HVE Franchise Ending


//HVE External Site Starting
jQuery(".col-md-12.no-padd a").click(function(){
  if(jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/vmc-on-aws.html?src=WWW_au_VMW_0QLaINzwevKTAPjtRuCM&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/vmc-on-aws.html?src=WWW_au_VMW_0QLaINzwevKTAPjtRuCM&int_cid=7012H000001lE6hQAE') > -1  || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/products/vmc-on-aws.html?src=WWW_au_VMW_0QLaINzwevKTAPjtRuCM&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.cloudhealthtech.com/') > -1  ){
         var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
}
})
//HVE External Site Ending

}

if(window.location.href.indexOf('https://www.vmware.com/au/welcome/build-better-apps-faster.html') > -1 || window.location.href.indexOf('https://www.vmware.com/in/welcome/build-better-apps-faster.html') > -1 || window.location.href.indexOf('https://www.vmware.com/sg/welcome/build-better-apps-faster.html') > -1){


//HVE External Site Starting
jQuery(".linkdisplay.mb-2.plain-text").click(function(){
if(jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/tanzu?src=WWW_au_VMW_NDaQd17xZSrwv6FpPWti&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/labs?src=WWW_au_VMW_NDaQd17xZSrwv6FpPWti&int_cid=7012H000001lE6hQAE') > -1){
 var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
}
})

jQuery(".col-md-12.no-padd a").click(function(){
  if(jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/content/blog/tanzu-advanced-generally-available-devsecops?src=WWW_au_VMW_NDaQd17xZSrwv6FpPWti&int_cid=7012H000001lE6hQAE') > -1){
 var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
}
})


//HVE External Site Ending

}

if(window.location.href.indexOf('https://www.vmware.com/au/welcome/core-cloud-edge.html') > -1 || window.location.href.indexOf('https://www.vmware.com/in/welcome/core-cloud-edge.html') > -1 || window.location.href.indexOf('https://www.vmware.com/sg/welcome/core-cloud-edge.html') > -1){
//HVE Franchise Starting
jQuery(".linkdisplay.mb-2.plain-text").click(function(){
 var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
})
jQuery(".col-md-12.no-padd a").click(function(){
  if(jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/nsx.html?src=WWW_au_VMW_aRY0mt4Uw6yC5rFHhWu3&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/nsx.html?src=WWW_au_VMW_aRY0mt4Uw6yC5rFHhWu3&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/products/nsx.html?src=WWW_au_VMW_aRY0mt4Uw6yC5rFHhWu3&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/au/security/internal-firewall.html?src=WWW_au_VMW_aRY0mt4Uw6yC5rFHhWu3&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/security/internal-firewall.html?src=WWW_au_VMW_aRY0mt4Uw6yC5rFHhWu3&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/security/internal-firewall.html?src=WWW_au_VMW_aRY0mt4Uw6yC5rFHhWu3&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/sd-wan.html?src=WWW_au_VMW_aRY0mt4Uw6yC5rFHhWu3&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/sd-wan.html?src=WWW_au_VMW_aRY0mt4Uw6yC5rFHhWu3&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/products/sd-wan.html?src=WWW_au_VMW_aRY0mt4Uw6yC5rFHhWu3&int_cid=7012H000001lE6hQAE') > -1){
 var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
}
})
//HVE Franchise Ending


//HVE External Site Starting
jQuery(".col-md-12.no-padd a").click(function(){
  if(jQuery(this).attr('href').indexOf('https://www.vmware.com/content/microsites/eni/home.html?src=WWW_au_VMW_aRY0mt4Uw6yC5rFHhWu3&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/secure-access-service-edge-sase.html?src=WWW_au_VMW_aRY0mt4Uw6yC5rFHhWu3&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/secure-access-service-edge-sase.html?src=WWW_au_VMW_aRY0mt4Uw6yC5rFHhWu3&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/products/secure-access-service-edge-sase.html?src=WWW_au_VMW_aRY0mt4Uw6yC5rFHhWu3&int_cid=7012H000001lE6hQAE') > -1){
 var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
}
})
//HVE External Site Ending

}

if(window.location.href.indexOf('https://www.vmware.com/au/welcome/better-protect-apps.html') > -1 || window.location.href.indexOf('https://www.vmware.com/in/welcome/better-protect-apps.html') > -1 || window.location.href.indexOf('https://www.vmware.com/sg/welcome/better-protect-apps.html') > -1){
//HVE Franchise Starting
jQuery(".col-md-12.no-padd a").click(function(){
  if(jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/workspace-one/access.html?src=WWW_au_VMW_N8PTQ0xqbscaUYrFl72G&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/workspace-one/access.html?src=WWW_au_VMW_N8PTQ0xqbscaUYrFl72G&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/products/workspace-one/access.html?src=WWW_au_VMW_N8PTQ0xqbscaUYrFl72G&int_cid=7012H000001lE6hQAE') > -1){
 var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
}
})

jQuery(".linkdisplay.mb-2.plain-text").click(function(){
  if(jQuery(this).attr('href').indexOf('https://www.vmware.com/au/security.html?src=WWW_au_VMW_N8PTQ0xqbscaUYrFl72G&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/security.html?src=WWW_au_VMW_N8PTQ0xqbscaUYrFl72G&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/security.html?src=WWW_au_VMW_N8PTQ0xqbscaUYrFl72G&int_cid=7012H000001lE6hQAE') > -1){
    var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
}
})

//HVE Franchise Ending


//HVE External Site Starting

jQuery(".col-md-12.no-padd a").click(function(){
  if(jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/carbon-black-cloud.html?src=WWW_au_VMW_N8PTQ0xqbscaUYrFl72G&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/carbon-black-cloud.html?src=WWW_au_VMW_N8PTQ0xqbscaUYrFl72G&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/products/carbon-black-cloud.html?src=WWW_au_VMW_N8PTQ0xqbscaUYrFl72G&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/carbon-black-cloud-workload.html?src=WWW_au_VMW_N8PTQ0xqbscaUYrFl72G&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/carbon-black-cloud-workload.html?src=WWW_au_VMW_N8PTQ0xqbscaUYrFl72G&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/products/carbon-black-cloud-workload.html?src=WWW_au_VMW_N8PTQ0xqbscaUYrFl72G&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/secure-access-service-edge-sase.html?src=WWW_au_VMW_N8PTQ0xqbscaUYrFl72G&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/secure-access-service-edge-sase.html?src=WWW_au_VMW_N8PTQ0xqbscaUYrFl72G&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/products/secure-access-service-edge-sase.html?src=WWW_au_VMW_N8PTQ0xqbscaUYrFl72G&int_cid=7012H000001lE6hQAE') > -1){ 
 var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');

} })
//HVE External Site Ending

}

if(window.location.href.indexOf('https://www.vmware.com/au/welcome/india-nse.html') > -1 || window.location.href.indexOf('https://www.vmware.com/in/welcome/india-nse.html') > -1 || window.location.href.indexOf('https://www.vmware.com/sg/welcome/india-nse.html') > -1){
//HVE Franchise Starting

jQuery(".col-md-12.no-padd a").click(function(){
  if(jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/nsx.html?src=WWW_au_VMW_qTbrIzGVyCJKQiU7fmLp&int_cid=7012H000001lE6hQAE') > -1  || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/nsx.html?src=WWW_au_VMW_qTbrIzGVyCJKQiU7fmLp&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/products/nsx.html?src=WWW_au_VMW_qTbrIzGVyCJKQiU7fmLp&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/vrealize-cloud-management.html?src=WWW_au_VMW_qTbrIzGVyCJKQiU7fmLp&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/vrealize-cloud-management.html?src=WWW_au_VMW_qTbrIzGVyCJKQiU7fmLp&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/products/vrealize-cloud-management.html?src=WWW_au_VMW_qTbrIzGVyCJKQiU7fmLp&int_cid=7012H000001lE6hQAE') > -1){ 

    var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
} })

jQuery('.linkdisplay.mb-2.plain-text').click(function(){
if(jQuery(this).attr('href').indexOf('https://www.vmware.com/au/cloud-solutions/app-modernization.html?src=WWW_au_VMW_qTbrIzGVyCJKQiU7fmLp&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/cloud-solutions/app-modernization.html?src=WWW_au_VMW_qTbrIzGVyCJKQiU7fmLp&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/cloud-solutions/app-modernization.html?src=WWW_au_VMW_qTbrIzGVyCJKQiU7fmLp&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/au/cloud-solutions/hybrid-cloud.html?src=WWW_au_VMW_qTbrIzGVyCJKQiU7fmLp&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/cloud-solutions/hybrid-cloud.html?src=WWW_au_VMW_qTbrIzGVyCJKQiU7fmLp&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/cloud-solutions/hybrid-cloud.html?src=WWW_au_VMW_qTbrIzGVyCJKQiU7fmLp&int_cid=7012H000001lE6hQAE') > -1){
        var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
}
})
//HVE Franchise Ending

//HVE External Site Starting
jQuery('.linkdisplay.mb-2.plain-text').click(function(){
if(jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/vmc-on-aws.html?src=WWW_au_VMW_qTbrIzGVyCJKQiU7fmLp&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/vmc-on-aws.html?src=WWW_au_VMW_qTbrIzGVyCJKQiU7fmLp&int_cid=7012H000001lE6hQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/products/vmc-on-aws.html?src=WWW_au_VMW_qTbrIzGVyCJKQiU7fmLp&int_cid=7012H000001lE6hQAE') > -1){
	 var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
}
})


//HVE External Site Ending

}

if(window.location.href.indexOf('https://www.vmware.com/in/welcome/gap-inc.html') > -1){
//HVE Franchise Starting
jQuery('.linkdisplay.mb-2.plain-text').click(function(){
if(jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/workspace-one.html?src=WWW_in_VMW_KBNuwMLaf5TJUWd7tyQq&int_cid=7012H000001lE6cQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/nsx.html?src=WWW_in_VMW_KBNuwMLaf5TJUWd7tyQq&int_cid=7012H000001lE6cQAE') > -1 ){
         var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
}
})


jQuery(".col-md-12.no-padd a").click(function(){
if(jQuery(this).attr('href').indexOf('http://vmware.com/in/products/nsx.html?src=WWW_in_VMW_KBNuwMLaf5TJUWd7tyQq&int_cid=7012H000001lE6cQAE') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/solutions/compliance-risk-management.html?src=WWW_in_VMW_KBNuwMLaf5TJUWd7tyQq&int_cid=7012H000001lE6cQAE') > -1){
	     var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
	
}})






//HVE Franchise Ending

//HVE External Site Starting



jQuery(".col-md-12.no-padd a").click(function(){
if(jQuery(this).attr('href').indexOf('https://www.gapinc.com/en-us/articles/2018/06/gap-stores-address-biggest-customer-frustration-wi') > -1 || jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/application-service?src=WWW_in_VMW_KBNuwMLaf5TJUWd7tyQq&int_cid=7012H000001lE6cQAE') > -1){
 var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
	
}})

//HVE External Site Ending

}


if(window.location.href.indexOf('https://www.vmware.com/in/welcome/bookmyshow.html') > -1){
//HVE Franchise Starting
jQuery('.linkdisplay.mb-2.plain-text').click(function(){
if(jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/vsan.html?src=WWW_in_VMW_BfLzuDvl0RwtA8e12dXs&int_cid=7012H000001lE6cQAE') > -1  ){
        var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
}
})

jQuery(".col-md-12.no-padd a").click(function(){
if(jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/vrealize-operations.html?src=WWW_in_VMW_BfLzuDvl0RwtA8e12dXs&int_cid=7012H000001lE6cQAE')>-1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/vsan.html?src=WWW_in_VMW_BfLzuDvl0RwtA8e12dXs&int_cid=7012H000001lE6cQAE')>-1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/workspace-one.html?src=WWW_in_VMW_BfLzuDvl0RwtA8e12dXs&int_cid=7012H000001lE6cQAE')>-1){
	
	    var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
}})








//HVE Franchise Ending

//HVE Video Starting

jQuery("a[data-element-type=video]").click(function() {
setTimeout(function(){
var videoID = jQuery("video").attr("id");
videojs(videoID)._isEventViewed = {};
var vFlag;



//Video Play
/*videojs(videoID).on('play',function(){
if (!this._isEventViewed.play) {
console.log('VIDEO: tracking PLAY event');
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img border="0" src="https://ad.doubleclick.net/ddm/activity/src=9327419;type=hvefm0;cat=inhve001;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord='+num+'" width="1" height="1" alt=""/>');
this._isEventViewed.play=true;
}
});*/



//Video Midpoint
videojs(videoID).on('timeupdate',function(){
var currentTime = Number(this.currentTime());
var duration = Number(this.duration());
var percentViewed = Math.floor((currentTime/duration)*100);
var ev = this._isEventViewed;
if(percentViewed >= 0 && vFlag != 1) {
vFlag = 1;
console.log('VIDEO: tracking Play event');
/* tracking code here */
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img border="0" src="https://ad.doubleclick.net/ddm/activity/src=9327419;type=hvefm0;cat=inhve005;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord='+num+'" width="1" height="1" alt=""/>');
}
if (!ev['50'] && percentViewed >= 50) {
console.log('VIDEO: tracking 50% MILESTONE event');
/* tracking code here */
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img border="0" src="https://ad.doubleclick.net/ddm/activity/src=9327419;type=hvefm0;cat=inhve005;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord='+num+'" width="1" height="1" alt=""/>');
ev['50']=true;
}
});



//Video End
videojs(videoID).on('ended',function() {
if (!this._isEventViewed.ended) {
console.log('VIDEO: tracking ENDED event');
/* tracking code here */
//1st pixel
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img border="0" src="https://ad.doubleclick.net/ddm/activity/src=9327419;type=hvefm0;cat=inhve006;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord='+num+'" width="1" height="1" alt=""/>');
this._isEventViewed.ended=true;
}
});

}, 2000);



});

//HVE Video Ending


}




if(window.location.href.indexOf('https://www.vmware.com/welcome/adobe.html') > -1 || window.location.href.indexOf('https://www.vmware.com/uk/welcome/adobe.html') > -1 || window.location.href.indexOf('https://www.vmware.com/au/welcome/adobe.html') > -1 || window.location.href.indexOf('https://www.vmware.com/in/welcome/adobe.html') > -1 || window.location.href.indexOf('https://www.vmware.com/sg/welcome/adobe.html') > -1 ){
	
//HVE Franchise Pixel Starting
jQuery(".col-md-12.no-padd a").click(function(){
if(jQuery(this).attr('href').indexOf('https://www.vmware.com/products/workspace-one.html?src=WWW_us_VMW_32WBHT8KhtYg0afVXcxe&int_cid=7012H000001YtGR')>-1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/uk/products/workspace-one.html?src=WWW_us_VMW_32WBHT8KhtYg0afVXcxe&int_cid=7012H000001YtGR')>-1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/workspace-one.html?src=WWW_us_VMW_32WBHT8KhtYg0afVXcxe&int_cid=7012H000001YtGR')>-1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/workspace-one.html?src=WWW_us_VMW_32WBHT8KhtYg0afVXcxe&int_cid=7012H000001YtGR')>-1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/products/workspace-one.html?src=WWW_us_VMW_32WBHT8KhtYg0afVXcxe&int_cid=7012H000001YtGR')>-1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/solutions/anywhere-workspace.html?src=WWW_us_VMW_32WBHT8KhtYg0afVXcxe&int_cid=7012H000001YtGR')>-1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/uk/solutions/anywhere-workspace.html?src=WWW_us_VMW_32WBHT8KhtYg0afVXcxe&int_cid=7012H000001YtGR')>-1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/au/solutions/anywhere-workspace.html?src=WWW_us_VMW_32WBHT8KhtYg0afVXcxe&int_cid=7012H000001YtGR')>-1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/solutions/anywhere-workspace.html?src=WWW_us_VMW_32WBHT8KhtYg0afVXcxe&int_cid=7012H000001YtGR')>-1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/solutions/anywhere-workspace.html?src=WWW_us_VMW_32WBHT8KhtYg0afVXcxe&int_cid=7012H000001YtGR')>-1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/cross-cloud-services.html?src=WWW_us_VMW_32WBHT8KhtYg0afVXcxe&int_cid=7012H000001YtGR')>-1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/uk/cross-cloud-services.html?src=WWW_us_VMW_32WBHT8KhtYg0afVXcxe&int_cid=7012H000001YtGR')>-1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/au/cross-cloud-services.html?src=WWW_us_VMW_32WBHT8KhtYg0afVXcxe&int_cid=7012H000001YtGR')>-1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/cross-cloud-services.html?src=WWW_us_VMW_32WBHT8KhtYg0afVXcxe&int_cid=7012H000001YtGR')>-1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/cross-cloud-services.html?src=WWW_us_VMW_32WBHT8KhtYg0afVXcxe&int_cid=7012H000001YtGR')>-1){
	
	  var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
	




} })

jQuery(".linkdisplay.mb-2.plain-text").click(function(){
  var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
})



//HVE Franchise Pixel Ending

}

if(window.location.href.indexOf('https://www.vmware.com/au/welcome/food-passion.html') > -1 || window.location.href.indexOf('https://www.vmware.com/in/welcome/food-passion.html') > -1  || window.location.href.indexOf('https://www.vmware.com/sg/welcome/food-passion.html') > -1 ){
//HVE External Pixel Starting

jQuery(".linkdisplay.mb-2.plain-text").click(function(){
  if(jQuery(this).attr('href').indexOf('https://cloud.vmware.com/providers/?src=WWW_au_VMW_ymEKBQxqJ59fCbg7GZWL&int_cid=7012H000001lE6hQAE') > -1){
 var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
    }
})
//HVE External Pixel Ending
	
	
}



//Mohan Code Ending

//DWEP-1445 Pixel Ending


//DWEP-1631 Starting

		
if(window.location.href.indexOf('https://www.vmware.com/jp/welcome/food-passion.html') > -1){

jQuery(".linkdisplay.mb-2.plain-text").click(function(){
  if(jQuery(this).parents('.cards-footer').siblings('.card-body.container.text-gray').find('h3').text().trim().indexOf('Find VMware Cloud Providers') > -1){
      console.log("Yes")
	  $('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>'); 
		 
  }
    else{
        console.log("No")
    }
    
})
}


if(window.location.href.indexOf('https://www.vmware.com/jp/welcome/villeroy-boch.html') > -1){
jQuery("a[href='https://tanzu.vmware.com/tanzu?src=WWW_us_VMW_4X35MgQPwRN87UfLlWnS&int_cid=7012H000001YtGR']").click(function(){
$('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>'); 
})

}


if(window.location.href.indexOf('https://www.vmware.com/jp/welcome/deutsche-telekom.html') > -1){

jQuery(".linkdisplay.mb-2.plain-text").click(function(){
  if(jQuery(this).parents('.cards-footer').siblings('.card-body.container.text-gray').find('h3').text().trim().indexOf('Explore the VMware Telco Cloud') > -1){
      console.log("Yes")
	  $('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>'); 
		 
  }
    else{
        console.log("No")
    }
    
})
}


if(window.location.href.indexOf('https://www.vmware.com/jp/welcome/modernize-build-run.html') > -1){
jQuery("a[href='https://www.cloudhealthtech.com/']").click(function(){

      $('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
})
}


if(window.location.href.indexOf('https://www.vmware.com/jp/welcome/security.html') > -1){
//HVE External Site
jQuery("a[href='https://www.carbonblack.com/products/vmware-carbon-black-cloud-workload/?src=WWW_jp_VMW_FzMLB8GfbueHi0rKw2Tj&int_cid=7012H000001lE6rQAE']").click(function(){

      $('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
})

//HVE Article
jQuery("a[href='/jp/welcome/better-protect-apps.html']").click(function(){

      $('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo000;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
})


}


if(window.location.href.indexOf('https://www.vmware.com/jp/welcome/networking.html') > -1){
jQuery("a[href='/jp/welcome/core-cloud-edge.html']").click(function(){

      $('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo000;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
})

}



if(window.location.href.indexOf('https://www.vmware.com/jp/welcome/modernapps.html') > -1){
jQuery("a[href='/jp/welcome/build-better-apps-faster.html']").click(function(){

      $('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo000;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
})

}



if(window.location.href.indexOf('https://www.vmware.com/jp/welcome/zoom.html') > -1){

jQuery("a[href='http://www.globenewswire.com/news-release/2018/06/11/1519706/0/en/Zoom-Founder-CEO-Eric-S-Yuan-Wins-2018-EY-Entrepreneur-of-the-Year-Award.html']").click(function(){

      $('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
})


jQuery("a[href='https://www.cnbc.com/2019/03/22/video-conferencing-company-zoom-files-to-go-public-is-profitable.html']").click(function(){

      $('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
})

}

if(window.location.href.indexOf('https://www.vmware.com/jp/welcome/customers.html') > -1){
jQuery(".linkdisplay.mb-2.plain-text").click(function(){
$('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo000;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
})
}








if(window.location.href.indexOf('https://www.vmware.com/jp/welcome.html') > -1){
//HVE Article Starting
jQuery("a[href='/jp/welcome/adobe.html']").click(function(){
$('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo000;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
})

jQuery("a[href='/jp/welcome/moderna.html']").click(function(){
$('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo000;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
})

jQuery("a[href='/jp/welcome/zoom.html']").click(function(){
$('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo000;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
})
//HVE Article Ending

//Video Play, Midpoint and End Tracking Starting
jQuery(document).on('click',"a[data-element-type=video]",function() {
setTimeout(function(){
var videoID = jQuery("video").attr("id");
videojs(videoID)._isEventViewed = {};
var vFlag;



//Video Play
/*videojs(videoID).on('play',function(){
if (!this._isEventViewed.play) {
console.log('VIDEO: tracking PLAY event');
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img border="0" src="https://ad.doubleclick.net/ddm/activity/src=9327419;type=hvefm0;cat=inhve001;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord='+num+'" width="1" height="1" alt=""/>');
this._isEventViewed.play=true;
}
});*/



//Video Midpoint
videojs(videoID).on('timeupdate',function(){
var currentTime = Number(this.currentTime());
var duration = Number(this.duration());
var percentViewed = Math.floor((currentTime/duration)*100);
var ev = this._isEventViewed;
if(percentViewed >= 0 && vFlag != 1) {
vFlag = 1;
console.log('VIDEO: tracking Play event');
/* tracking code here */
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo001;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
}
if (!ev['50'] && percentViewed >= 50) {
console.log('VIDEO: tracking 50% MILESTONE event');
/* tracking code here */
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo002;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
ev['50']=true;
}
});



//Video End
videojs(videoID).on('ended',function() {
if (!this._isEventViewed.ended) {
console.log('VIDEO: tracking ENDED event');
/* tracking code here */
//1st pixel
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo003;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
this._isEventViewed.ended=true;
}
});

}, 2000);
})

//Video Play, Midpoint and End Tracking Ending

//HVE Franchise Tracking Starting
jQuery(".linkdisplay.mb-2.plain-text").click(function(){
  if(jQuery(this).attr("href").indexOf('/jp/welcome/adobe.html') < 0 &&
  jQuery(this).attr("href").indexOf('/jp/welcome/moderna.html') < 0 &&
  jQuery(this).attr("href").indexOf('/jp/welcome/zoom.html') < 0 ){
          $('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
  }
})


//Navigation Start

﻿
jQuery("a[href='/jp/welcome/cross-cloud-services.html']").click(function(){
$('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
  })
jQuery("a[href='/jp/welcome/cloud-infrastructure.html']").click(function(){
$('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
  })
jQuery("a[href='/jp/welcome/modernapps.html']").click(function(){
$('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
  })
jQuery("a[href='/jp/welcome/workspace.html']").click(function(){
$('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
  })
jQuery("a[href='/jp/welcome/networking.html']").click(function(){
$('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
  })
jQuery("a[href='/jp/welcome/security.html']").click(function(){
$('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
  })


//Navigation End
//HVE Franchise Tracking Ending

//HVE Customer Starting
jQuery("li a[href='/jp/welcome/customers.html']").click(function(){
$('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
  })
//HVE Customer Ending

//HVE External Starting
jQuery("a[href='https://twitter.com/VMware_Japan']").click(function(){
$('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
});

jQuery("a[href='https://www.youtube.com/VMwareJapan']").click(function(){
$('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
  })

jQuery("a[href='https://www.facebook.com/vmwarejapan/']").click(function(){
$('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
  })

jQuery("a[href='https://www.instagram.com/vmware_japan/']").click(function(){
$('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
  })

jQuery("a[href='https://www.vmware.com/jp/company/contact.html']").click(function(){
$('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
  })
//HVE External Ending

//HVE Article Starting
jQuery("a[href='https://www.vmware.com/jp/cross-cloud-services.html?src=WWW_jp_VMW_p9yDcKJ4xsmGLFaX6kBe&int_cid=7012H000001lE6rQAE']").click(function(){
  $('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo000;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
})
//HVE Article Ending

}

if(window.location.href.indexOf('https://www.vmware.com/jp/welcome/partners.html') > -1){
  
//Video Play, Midpoint and End Tracking Starting
jQuery(document).on('click',"a[data-element-type=video]",function() {
setTimeout(function(){
var videoID = jQuery("video").attr("id");
videojs(videoID)._isEventViewed = {};
var vFlag;



//Video Play
/*videojs(videoID).on('play',function(){
if (!this._isEventViewed.play) {
console.log('VIDEO: tracking PLAY event');
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img border="0" src="https://ad.doubleclick.net/ddm/activity/src=9327419;type=hvefm0;cat=inhve001;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord='+num+'" width="1" height="1" alt=""/>');
this._isEventViewed.play=true;
}
});*/



//Video Midpoint
videojs(videoID).on('timeupdate',function(){
var currentTime = Number(this.currentTime());
var duration = Number(this.duration());
var percentViewed = Math.floor((currentTime/duration)*100);
var ev = this._isEventViewed;
if(percentViewed >= 0 && vFlag != 1) {
vFlag = 1;
console.log('VIDEO: tracking Play event');
/* tracking code here */
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo001;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
}
if (!ev['50'] && percentViewed >= 50) {
console.log('VIDEO: tracking 50% MILESTONE event');
/* tracking code here */
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo002;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
ev['50']=true;
}
});



//Video End
videojs(videoID).on('ended',function() {
if (!this._isEventViewed.ended) {
console.log('VIDEO: tracking ENDED event');
/* tracking code here */
//1st pixel
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo003;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
this._isEventViewed.ended=true;
}
});

}, 2000);
})

//Video Play, Midpoint and End Tracking Ending

}


if(window.location.href.indexOf('https://www.vmware.com/jp/welcome/angel-medflight.html') > -1){
//HVE External Site Tracking Starting
jQuery("a[href='https://www.angelmedflight.com/airborne-infection-transports']").click(function(){
$('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
  })
jQuery("a[href='https://sponsorcontent.cnn.com/interactive/vmware/better-care-angel-medflight-article/']").click(function(){
$('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
  })
//HVE External Site Tracking Ending
//Video Play, Midpoint and End Tracking Starting
jQuery(document).on('click',"a[data-element-type=video]",function() {
setTimeout(function(){
var videoID = jQuery("video").attr("id");
videojs(videoID)._isEventViewed = {};
var vFlag;



//Video Play
/*videojs(videoID).on('play',function(){
if (!this._isEventViewed.play) {
console.log('VIDEO: tracking PLAY event');
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img border="0" src="https://ad.doubleclick.net/ddm/activity/src=9327419;type=hvefm0;cat=inhve001;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord='+num+'" width="1" height="1" alt=""/>');
this._isEventViewed.play=true;
}
});*/



//Video Midpoint
videojs(videoID).on('timeupdate',function(){
var currentTime = Number(this.currentTime());
var duration = Number(this.duration());
var percentViewed = Math.floor((currentTime/duration)*100);
var ev = this._isEventViewed;
if(percentViewed >= 0 && vFlag != 1) {
vFlag = 1;
console.log('VIDEO: tracking Play event');
/* tracking code here */
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo001;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
}
if (!ev['50'] && percentViewed >= 50) {
console.log('VIDEO: tracking 50% MILESTONE event');
/* tracking code here */
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo002;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
ev['50']=true;
}
});



//Video End
videojs(videoID).on('ended',function() {
if (!this._isEventViewed.ended) {
console.log('VIDEO: tracking ENDED event');
/* tracking code here */
//1st pixel
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo003;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
this._isEventViewed.ended=true;
}
});

}, 2000);
})

//Video Play, Midpoint and End Tracking Ending

}

if(window.location.href.indexOf('https://www.vmware.com/jp/welcome.html') > -1 || 
window.location.href.indexOf('https://www.vmware.com/jp/welcome/workspace.html') > -1 || 
window.location.href.indexOf('https://www.vmware.com/jp/welcome/moderna.html') > -1 || 
window.location.href.indexOf('https://www.vmware.com/jp/welcome/zoom.html') > -1 || 
window.location.href.indexOf('https://www.vmware.com/jp/welcome/angel-medflight.html') > -1 || 
window.location.href.indexOf('https://www.vmware.com/jp/welcome/customers.html') > -1 || 
window.location.href.indexOf('https://www.vmware.com/jp/welcome/partners.html') > -1 || 
window.location.href.indexOf('https://www.vmware.com/jp/welcome/modernapps.html') > -1 || 
window.location.href.indexOf('https://www.vmware.com/jp/welcome/networking.html') > -1 || 
window.location.href.indexOf('https://www.vmware.com/jp/welcome/security.html') > -1 || 
window.location.href.indexOf('https://www.vmware.com/jp/welcome/modernize-build-run.html') > -1 || 
window.location.href.indexOf('https://www.vmware.com/jp/welcome/anywhere-workforce.html') > -1 || 
window.location.href.indexOf('https://www.vmware.com/jp/welcome/tap-into-multiple-clouds.html') > -1 || 
window.location.href.indexOf('https://www.vmware.com/jp/welcome/build-better-apps-faster.html') > -1 || 
window.location.href.indexOf('https://www.vmware.com/jp/welcome/core-cloud-edge.html') > -1 || 
window.location.href.indexOf('https://www.vmware.com/jp/welcome/better-protect-apps.html') > -1 || 
window.location.href.indexOf('https://www.vmware.com/jp/welcome/deutsche-telekom.html') > -1 || 
window.location.href.indexOf('https://www.vmware.com/jp/welcome/india-nse.html') > -1 || 
window.location.href.indexOf('https://www.vmware.com/jp/welcome/villeroy-boch.html') > -1 || 
window.location.href.indexOf('https://www.vmware.com/jp/welcome/gap-inc.html') > -1 || 
window.location.href.indexOf('https://www.vmware.com/jp/welcome/harel.html') > -1 ||
window.location.href.indexOf('https://www.vmware.com/jp/welcome/food-passion.html') > -1 ){
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=[SessionID]?" width="1" height="1" alt=""/>'); 
}


if(window.location.href.indexOf('https://www.vmware.com/jp/welcome/tap-into-multiple-clouds.html') > -1 ){
  jQuery(document).on('click',"a[href='https://www.cloudhealthtech.com/']",function(){
  
	jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>'); 
  })
}

//DWEP-1631 Ending

//DWEP-1676 & DWEP-1752 Starting
if(window.location.href.indexOf('cloudhealth.vmware.com') > -1 || window.location.href.indexOf('cloudhealth-review.vmware.com') > -1){
let cloudGTMScript = document.createElement("script");
cloudGTMScript.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=AW-978249738");
document.body.appendChild(cloudGTMScript);

window.dataLayer = window.dataLayer || []; 
function gtag(){dataLayer.push(arguments);} 
gtag('js', new Date());
 gtag('config', 'AW-978249738');
 
 let cloudbizScript = document.createElement("script");
cloudbizScript.setAttribute("src", "https://cdn.bizible.com/scripts/bizible.js");
document.body.appendChild(cloudbizScript);


(function(d,b,a,s,e){ var t = b.createElement(a), fs = b.getElementsByTagName(a)[0]; t.async=1; t.id=e; t.src=s; fs.parentNode.insertBefore(t, fs); }) (window,document,'script','https://tag.demandbase.com/ab696d88.min.js','demandbase_js_lib');


}

if(window.location.href.indexOf('cloudhealth.vmware.com/thanks-demo') > -1 ||
window.location.href.indexOf('cloudhealth.vmware.com/thanks-demo-secure-state') > -1 ||
window.location.href.indexOf('cloudhealth.vmware.com/resources/thanks-jp-demo-request.html') > -1 ||
window.location.href.indexOf('cloudhealth-review.vmware.com/thanks-demo') > -1 ||
window.location.href.indexOf('cloudhealth-review.vmware.com/thanks-demo-secure-state') > -1 ||
window.location.href.indexOf('cloudhealth-review.vmware.com/resources/thanks-jp-demo-request.html') > -1 ){
gtag('event', 'conversion', {'send_to': 'AW-978249738/6ClECKDCtpUDEIrQu9ID'});
}



if(window.location.href.indexOf('cloudhealth.vmware.com/thanks-free-trial-signup') > -1 ||
window.location.href.indexOf('cloudhealth.vmware.com/thanks-free-trial-cloudhealth-secure-state') > -1 ||
window.location.href.indexOf('cloudhealth.vmware.com/thanks-partner-trial-signup') > -1 ||
window.location.href.indexOf('cloudhealth.vmware.com/thanks-free-trial-aws') > -1 ||
window.location.href.indexOf('cloudhealth.vmware.com/resources/thanks-jp-free-trial.html') > -1 ||
window.location.href.indexOf('cloudhealth.vmware.com/resources/thanks-jp-chss-free-trial.html') > -1 || 
window.location.href.indexOf('cloudhealth-review.vmware.com/thanks-free-trial-signup') > -1 ||
window.location.href.indexOf('cloudhealth-review.vmware.com/thanks-free-trial-cloudhealth-secure-state') > -1 ||
window.location.href.indexOf('cloudhealth-review.vmware.com/thanks-partner-trial-signup') > -1 ||
window.location.href.indexOf('cloudhealth-review.vmware.com/thanks-free-trial-aws') > -1 ||
window.location.href.indexOf('cloudhealth-review.vmware.com/resources/thanks-jp-free-trial.html') > -1 ||
window.location.href.indexOf('cloudhealth-review.vmware.com/resources/thanks-jp-chss-free-trial.html') > -1 ){
gtag('event', 'conversion', {'send_to': 'AW-978249738/LyGuCJfItpUDEIrQu9ID'});
}



if(window.location.href.indexOf('cloudhealth.vmware.com/thanks-pricing-quote') > -1 || window.location.href.indexOf('cloudhealth.vmware.com/contact-sales-thank-you.html') > -1 || window.location.href.indexOf('cloudhealth-review.vmware.com/thanks-pricing-quote') > -1 || window.location.href.indexOf('cloudhealth-review.vmware.com/contact-sales-thank-you.html') > -1){
  gtag('event', 'conversion', {'send_to': 'AW-978249738/piSWCOfUyJcDEIrQu9ID'});
}

if((window.location.href.indexOf('cloudhealth.vmware.com/resources/thanks') > -1 && window.location.href.indexOf('https://cloudhealth.vmware.com/jp/resources/thanks-jp-free-trial.html') < 0 && window.location.href.indexOf('https://cloudhealth.vmware.com/jp/resources/thanks-jp-chss-free-trial.html') <0 &&  window.location.href.indexOf('cloudhealth.vmware.com/resources/thanks-jp-free-trial.html') < 0 && window.location.href.indexOf('cloudhealth.vmware.com/resources/thanks-jp-chss-free-trial.html') < 0 && window.location.href.indexOf('cloudhealth.vmware.com/resources/thanks-jp-demo-request.html') < 0 && window.location.href.indexOf('cloudhealth.vmware.com/resources/thanks-jp-aws-10-best-practices-for-reducing-spend.html') < 0 && window.location.href.indexOf('cloudhealth.vmware.com/resources/thanks-jp-comparing-services-for-big-3-cloud-providers.html') < 0 && window.location.href.indexOf('cloudhealth.vmware.com/resources/thanks-jp-forrester-wave-report-ccmo-2020.html') < 0 && window.location.href.indexOf('cloudhealth.vmware.com/resources/thanks-jp-aws-6-aws-governance-policies.html') < 0 && window.location.href.indexOf('cloudhealth.vmware.com/resources/thanks-jp-aws-accelerate-cloud-journey-to-reach-cloud-maturity.html') < 0 && window.location.href.indexOf('cloudhealth.vmware.com/resources/thanks-jp-aws-ultimate-guide-to-savings-plans.html') < 0 && window.location.href.indexOf('cloudhealth.vmware.com/resources/thanks-jp-benchmark-your-cloud-maturity-framework-for-best-practices.html') < 0 && window.location.href.indexOf('cloudhealth.vmware.com/resources/thanks-jp-demo-request.html') < 0) || (window.location.href.indexOf('https://cloudhealth.vmware.com/jp/resources/thanks-jp-aws-10-best-practices-for-reducing-spend.html') > -1 || window.location.href.indexOf('https://cloudhealth.vmware.com/jp/resources/thanks-jp-comparing-services-for-big-3-cloud-providers.html') > -1 || window.location.href.indexOf('https://cloudhealth.vmware.com/jp/resources/thanks-jp-forrester-wave-report-ccmo-2020.html') > -1 || window.location.href.indexOf('https://cloudhealth.vmware.com/jp/resources/thanks-jp-aws-6-aws-governance-policies.html') > -1 || window.location.href.indexOf('https://cloudhealth.vmware.com/jp/resources/thanks-jp-aws-accelerate-cloud-journey-to-reach-cloud-maturity.html') > -1 || window.location.href.indexOf('https://cloudhealth.vmware.com/jp/resources/thanks-jp-aws-ultimate-guide-to-savings-plans.html') > -1 || window.location.href.indexOf('https://cloudhealth.vmware.com/jp/resources/thanks-jp-benchmark-your-cloud-maturity-framework-for-best-practices.html') > -1)){
gtag('event', 'conversion', {'send_to': 'AW-978249738/0bmLCKSoyMwBEIrQu9ID'});

}


if(window.location.href.indexOf('https://cloudhealth.vmware.com/jp/resources/thanks-jp-demo-request.html') > -1){
gtag('event', 'conversion', {'send_to': 'AW-978249738/6ClECKDCtpUDEIrQu9ID'});

}

if(window.location.href.indexOf('https://cloudhealth.vmware.com/jp/resources/thanks-jp-free-trial.html') > -1 || window.location.href.indexOf('https://cloudhealth.vmware.com/jp/resources/thanks-jp-chss-free-trial.html') > -1){
gtag('event', 'conversion', {'send_to': 'AW-978249738/LyGuCJfItpUDEIrQu9ID'});

}



//DWEP-1676 & DWEP-1752 Ending


//DIMA-5112 Starting
if(window.location.href.indexOf('https://jp.togetherweinnovate.vmware.com/') > -1){
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');

//External
jQuery("a[aria-label='Twitter'],a[aria-label='YouTube'],a[aria-label='Facebook'],a[aria-label='Instagram']").click(function(){
    
	var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
})

//HVE Customer

jQuery(".list-archive.uniform-height a").click(function(){
   var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>'); 
})

//HVE Franchise
jQuery("a[href='/solutions/multi-cloud/']").click(function(){
	 var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
})
jQuery("a[href='/solutions/app-modernization/']").click(function(){
	 var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
})
jQuery("a[href='/solutions/network/']").click(function(){
	 var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
})
jQuery("a[href='/solutions/workspace/']").click(function(){
	 var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
})
jQuery("a[href='/solutions/security/']").click(function(){
	 var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
})

}
//DIMA-5112 ending

//DIMA-5158 Starting
if(window.location.href.includes('https://blogs.vmware.com/cloud/2022/01/18/how-to-achieve-multi-cloud-success-without-compromise/')){
	jQuery(document).ready(function(){
		var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=ccshv0;cat=us-vi0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
		})
		
if(jQuery('.post-headline .category-label').length){
   jQuery('.post-headline .category-label').on("click",function(){
	   var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=ccshv0;cat=us-frccs;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
   })
}

if(jQuery('[href="https://www.vmware.com/cross-cloud-services.html"]').length){
   jQuery('[href="https://www.vmware.com/cross-cloud-services.html"	]').on("click",function(){
	   var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=ccshv0;cat=us-frccs;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
   })
}

if(jQuery('.content-wrap .category-label').length){
   jQuery('.content-wrap .category-label').on("click",function(){
	   var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=ccshv0;cat=us-arccs;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
   })
}

if(jQuery('.content-wrap .title').length){
   jQuery('.content-wrap .title').on("click",function(){
	   var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=ccshv0;cat=us-arccs;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
   })
}

}

if(window.location.href.includes('https://cio.vmware.com/2022/02/5-key-elements-of-a-successful-multi-cloud-environment.html')){
	jQuery(document).ready(function(){
		var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=ccshv0;cat=us-vi0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
		})
		
	
if(jQuery('[href="https://www.vmware.com/cross-cloud-services.html"]').length){
   jQuery('[href="https://www.vmware.com/cross-cloud-services.html"]').on("click",function(){
	   var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=ccshv0;cat=us-frccs;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
   })
}

if(jQuery('.content-wrap .category-label').length){
   jQuery('.content-wrap .category-label').on("click",function(){
	   var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=ccshv0;cat=us-arccs;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
   })
}

if(jQuery('.content-wrap .title').length){
   jQuery('.content-wrap .title').on("click",function(){
	   var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=ccshv0;cat=us-arccs;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
   })
}
if(jQuery('[title="Twitter"]').length){
   jQuery('[title="Twitter"]').on("click",function(){
	   var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=ccshv0;cat=us-exccs;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
   })
}

if(jQuery('[title="YouTube"]').length){
   jQuery('[title="YouTube"]').on("click",function(){
	   var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=ccshv0;cat=us-exccs;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
   })
}

if(jQuery('[title="Facebook"]').length){
   jQuery('[title="Facebook"]').on("click",function(){
	   var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=ccshv0;cat=us-exccs;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
   })
}

if(jQuery('[title="LinkedIn"]').length){
   jQuery('[title="LinkedIn"]').on("click",function(){
	   var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=ccshv0;cat=us-exccs;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord='+num+'?" width="1" height="1" alt=""/>');
   })
}
}
//DIMA-5158 Ending

//DIMA-5403 Starting
if ((window.location.href.indexOf('https://cloud.vmware.com/providers/draas-powered') > -1) || (window.location.href.indexOf('https://cloud.vmware.com/providers/search-result') > -1) || (window.location.href.indexOf('https://cloudsolutions.vmware.com/') > -1)) {
    jQuery('body').append('<img src="https://ct.capterra.com/capterra_tracker.gif?vid=2207427&vkey=d570dcf87b63e3d08a0fc328f52d8bc5" width="1" height="1" alt=" "/>');
}
//DIMA-5403 Ending

 
 //DIMA-5431 Starting
 
 if (window.location.href.indexOf('https://www.vmware.com/in/welcome/toast.html')>-1 || window.location.href.indexOf('https://www.vmware.com/au/welcome/toast.html')>-1 ) {
// HVE Franchise


jQuery(".col-md-12.no-padd a").click(function() {
        if (jQuery(this).attr('href').indexOf('https://www.vmware.com/au/cross-cloud-services.html') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/cross-cloud-services.html') > -1) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
	
	jQuery(".cards-footer a").click(function() {
       if (jQuery(this).attr('href').indexOf('https://www.vmware.com/au/cross-cloud-services.html') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/cross-cloud-services.html') > -1) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
	
}

	if (window.location.href.indexOf('https://www.vmware.com/au/welcome/toast.html') > -1 || window.location.href.indexOf('https://www.vmware.com/in/welcome/toast.html')>-1) {

// HVE Franchise - APAC

jQuery(".col-md-12.no-padd a").click(function() {
        if (jQuery(this).attr('href').indexOf('https://www.vmware.com/au/cross-cloud-services.html') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/cross-cloud-services.html') > -1) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
        }

    })
	
	jQuery(".cards-footer a").click(function() {
       if (jQuery(this).attr('href').indexOf('https://www.vmware.com/au/cross-cloud-services.html') > -1 || jQuery(this).attr('href').indexOf('https://www.vmware.com/in/cross-cloud-services.html') > -1) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
        }

    })
}



// HVE Customer
if (window.location.href.indexOf('https://www.vmware.com/jp/welcome/space-ape-games.html')>-1 || window.location.href.indexOf('https://www.vmware.com/au/welcome/space-ape-games.html')>-1 || window.location.href.indexOf('https://www.vmware.com/in/welcome/space-ape-games.html')>-1 || window.location.href.indexOf('https://www.vmware.com/in/welcome/toast.html')>-1|| window.location.href.indexOf('https://www.vmware.com/au/welcome/toast.html')>-1) {
	
	    jQuery(".col-md-6.col-lg-3.mt-3.cont-columns .text-xxss.text-black.mb-20.d-lg-flex.d-block").click(function() {
        if (jQuery(this).attr('href').indexOf('/au/company/contact_sales.html') > -1 || jQuery(this).attr('href').indexOf('/jp/company/contact.html') > -1 || jQuery(this).attr('href').indexOf('/in/company/contact_sales.html') > -1) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })

}
// HVE Customer - APAC
if (window.location.href.indexOf('https://www.vmware.com/jp/welcome/space-ape-games.html')>-1 || window.location.href.indexOf('https://www.vmware.com/au/welcome/space-ape-games.html')>-1 || window.location.href.indexOf('https://www.vmware.com/in/welcome/space-ape-games.html')>-1 || window.location.href.indexOf('https://www.vmware.com/in/welcome/toast.html')>-1|| window.location.href.indexOf('https://www.vmware.com/au/welcome/toast.html')>-1) {
	
	    jQuery(".col-md-6.col-lg-3.mt-3.cont-columns .text-xxss.text-black.mb-20.d-lg-flex.d-block").click(function() {
        if (jQuery(this).attr('href').indexOf('/au/company/contact_sales.html') > -1 || jQuery(this).attr('href').indexOf('/jp/company/contact.html') > -1 || jQuery(this).attr('href').indexOf('/in/company/contact_sales.html') > -1) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=partn0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })

}
if (window.location.href.indexOf('https://www.vmware.com/jp/welcome/space-ape-games.html') > -1 || window.location.href.indexOf('https://www.vmware.com/au/welcome/toast.html') > -1 || window.location.href.indexOf('https://www.vmware.com/in/welcome/toast.html') > -1 || window.location.href.indexOf('https://www.vmware.com/au/welcome/space-ape-games.html') > -1  || window.location.href.indexOf('https://www.vmware.com/in/welcome/space-ape-games.html') > -1){

//HVE External Site

jQuery(".col-md-6.col-lg-3.mt-3.cont-columns .text-xxss.text-black.mb-20.d-lg-flex.d-block").click(function() {
        if (jQuery(this).attr('href').indexOf('https://twitter.com/VMware') > -1 || jQuery(this).attr('href').indexOf('https://www.youtube.com/user/vmwaretv') > -1 || jQuery(this).attr('href').indexOf('https://www.facebook.com/vmware') > -1 || jQuery(this).attr('href').indexOf('https://www.linkedin.com/company/vmware') > -1 || jQuery(this).attr('href').indexOf('https://twitter.com/VMwareIN') > -1 || jQuery(this).attr('href').indexOf('https://www.youtube.com/channel/UCkBka9x8KSOa6tXxn8PWGXQ') > -1 || jQuery(this).attr('href').indexOf('https://www.facebook.com/vmwareindia/') > -1 || jQuery(this).attr('href').indexOf('https://www.linkedin.com/company/vmware/mycompany/') > -1 || jQuery(this).attr('href').indexOf('https://twitter.com/VMware_Japan') > -1 || jQuery(this).attr('href').indexOf('https://www.youtube.com/VMwareJapan') > -1 || jQuery(this).attr('href').indexOf('https://www.facebook.com/vmwarejapan/') > -1 || jQuery(this).attr('href').indexOf('https://www.instagram.com/vmware_japan/') > -1) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })

   
		jQuery(".col-md-12.no-padd a").click(function() {
        if (jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/observability/') > -1 || jQuery(this).attr('href').indexOf('https://cloudhealth.vmware.com/') > -1) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
	
	jQuery(".cards-footer a").click(function() {
       if (jQuery(this).attr('href').indexOf('https://cloudhealth.vmware.com') > -1 || jQuery(this).attr('href').indexOf('https://cloudhealth.vmware.com/resources/case-study/toast.html') > -1 || jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/observability/') > -1 || jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/') > -1 || jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/labs') > -1) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
	
	}

if (window.location.href.indexOf('https://www.vmware.com/jp/welcome/space-ape-games.html') > -1 || window.location.href.indexOf('https://www.vmware.com/au/welcome/toast.html') > -1 || window.location.href.indexOf('https://www.vmware.com/in/welcome/toast.html') > -1 || window.location.href.indexOf('https://www.vmware.com/au/welcome/space-ape-games.html') > -1  || window.location.href.indexOf('https://www.vmware.com/in/welcome/space-ape-games.html') > -1){

//HVE External Site - APAC

jQuery(".col-md-6.col-lg-3.mt-3.cont-columns .text-xxss.text-black.mb-20.d-lg-flex.d-block").click(function() {
        if (jQuery(this).attr('href').indexOf('https://twitter.com/VMware') > -1 || jQuery(this).attr('href').indexOf('https://www.youtube.com/user/vmwaretv') > -1 || jQuery(this).attr('href').indexOf('https://www.facebook.com/vmware') > -1 || jQuery(this).attr('href').indexOf('https://www.linkedin.com/company/vmware') > -1 || jQuery(this).attr('href').indexOf('https://twitter.com/VMwareIN') > -1 || jQuery(this).attr('href').indexOf('https://www.youtube.com/channel/UCkBka9x8KSOa6tXxn8PWGXQ') > -1 || jQuery(this).attr('href').indexOf('https://www.facebook.com/vmwareindia/') > -1 || jQuery(this).attr('href').indexOf('https://www.linkedin.com/company/vmware/mycompany/') > -1 || jQuery(this).attr('href').indexOf('https://twitter.com/VMware_Japan') > -1 || jQuery(this).attr('href').indexOf('https://www.youtube.com/VMwareJapan') > -1 || jQuery(this).attr('href').indexOf('https://www.facebook.com/vmwarejapan/') > -1 || jQuery(this).attr('href').indexOf('https://www.instagram.com/vmware_japan/') > -1) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })

   
		jQuery(".col-md-12.no-padd a").click(function() {
        if (jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/observability/') > -1 || jQuery(this).attr('href').indexOf('https://cloudhealth.vmware.com/') > -1) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
	
	jQuery(".cards-footer a").click(function() {
       if (jQuery(this).attr('href').indexOf('https://cloudhealth.vmware.com') > -1 || jQuery(this).attr('href').indexOf('https://cloudhealth.vmware.com/resources/case-study/toast.html') > -1 || jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/observability/') > -1 || jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/') > -1 || jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/labs') > -1) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
	
	}
	
	 //DIMA-5431 Ending

// DIMA-5456 Starting //

//VCP_Free Trial_Search

if (window.location.href.indexOf('https://cloud.vmware.com/providers/draas-powered') > -1 ) {
jQuery(".main-container ul li a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/providers/free-trial') > -1   )    ){
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12036309;type=srhve0;cat=vcp_f0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://cloud.vmware.com/providers/free-trial') > -1 ) {
jQuery(".main-container ul li a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/providers/free-trial') > -1   )    ){
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12036309;type=srhve0;cat=vcp_f0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

if (window.location.href.indexOf('https://sase.vmware.com/resources/gartner-critical-capabilities-report-2021-thank-you') > -1 || window.location.href.indexOf('https://sase.vmware.com/resources/gartner-magic-quadrant-for-wan-edge-infrastructure-2021-thank-you')>-1|| window.location.href.indexOf('https://sase.vmware.com/resources/software-defined-wan-for-dummies-thank-you-old')>-1 || window.location.href.indexOf('https://sase.vmware.com/resources/the-forrester-new-wave-zero-trust-network-access_TY')>-1 || window.location.href.indexOf('https://sase.vmware.com/resources/the-total-economic-impact-of-vmware-sase-cost-savings-and-business-benefits-enabled-by-sase_TY')>-1){
        
    jQuery(".btn").click(function() {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12036309;type=srhve0;cat=typ_a0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
    })
    }

// DIMA-5456 Ending //

// DIMA-5471 STARTING //
// DIMA-5471 Starting //
// MICROSITES-PRVIACY //
// HVE Franchise 2 //
if (window.location.href.indexOf('https://blogs.vmware.com/cloud/2022/01/18/how-to-achieve-multi-cloud-success-without-compromise/')  > -1 ) {
jQuery(".post-headline a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://blogs.vmware.com/cloud/cross-cloud-services/') > -1 && jQuery(this).attr('name').indexOf('&lpos=apps_scodevmw : 14') > -1) || (jQuery(this).attr('href').indexOf('https://blogs.vmware.com/cloud/multi-cloud/') > -1 && jQuery(this).attr('name').indexOf('&lpos=apps_scodevmw : 15') > -1) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12036309;type=ccshv0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
        }

    })
}
// hve franchise 2 //
if (window.location.href.indexOf('https://blogs.vmware.com/cloud/2022/01/18/how-to-achieve-multi-cloud-success-without-compromise/') > -1 ) {
jQuery(".entry-content p a").click(function() {
        if (jQuery(this).attr('href').indexOf('https://www.vmware.com/cross-cloud-services.html') > -1 ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12036309;type=ccshv0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
        }

    })
}
// hve article 2 //
if (window.location.href.indexOf('https://blogs.vmware.com/cloud/2022/01/18/how-to-achieve-multi-cloud-success-without-compromise/')  > -1 ) {
jQuery(".content-inner a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://blogs.vmware.com/cloud/multi-cloud/') > -1 && jQuery(this).attr('name').indexOf('&lpos=apps_scodevmw : 27') > -1 ) || (jQuery(this).attr('href').indexOf('https://blogs.vmware.com/cloud/2022/01/03/five-key-principles-to-guide-your-multi-cloud-environment/') > -1 && jQuery(this).attr('name').indexOf('&lpos=apps_scodevmw : 28') > -1 ) || (jQuery(this).attr('href').indexOf('https://blogs.vmware.com/cloud/vmware-cloud/') > -1 && jQuery(this).attr('name').indexOf('&lpos=apps_scodevmw : 31') > -1 ) || (jQuery(this).attr('href').indexOf('https://blogs.vmware.com/cloud/2021/11/02/how-five-global-organizations-met-their-business-goals-with-multi-cloud/') > -1 && jQuery(this).attr('name').indexOf('&lpos=apps_scodevmw : 32') > -1 ) || (jQuery(this).attr('href').indexOf('https://blogs.vmware.com/cloud/cloud-architect/') > -1 && jQuery(this).attr('name').indexOf('&lpos=apps_scodevmw : 35') > -1) || (jQuery(this).attr('href').indexOf('https://blogs.vmware.com/cloud/2021/10/21/multi-cloud-use-maturity-tools-and-platform-standardization/') > -1 && jQuery(this).attr('name').indexOf('&lpos=apps_scodevmw : 36') > -1)  ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12036309;type=ccshv0;cat=artic0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
        }

    })
}



// hve video point , mid point and video completion //

// hve video point , mid point and video completion //

// HVE Franchise 2 //
if (window.location.href.indexOf('https://cio.vmware.com/2022/02/5-key-elements-of-a-successful-multi-cloud-environment.html')  > -1 ) {
jQuery(".entry-content p a").click(function() {
        if (jQuery(this).attr('href').indexOf('https://www.vmware.com/cross-cloud-services.html') > -1 ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12036309;type=ccshv0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
        }

    })
}

// hve article 2 //
if (window.location.href.indexOf('https://cio.vmware.com/2022/02/5-key-elements-of-a-successful-multi-cloud-environment.html')  > -1 ) {
jQuery(".content-inner a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://cio.vmware.com/category/business-transformation') > -1 && jQuery(this).attr('name').indexOf('&lpos=apps_scodevmw : 28') > -1 ) || (jQuery(this).attr('href').indexOf('https://cio.vmware.com/2021/12/tackling-your-application-portfolio-modernization-strategy.html') > -1 && jQuery(this).attr('name').indexOf('&lpos=apps_scodevmw : 29') > -1 ) || (jQuery(this).attr('href').indexOf('https://cio.vmware.com/category/business-transformation') > -1 && jQuery(this).attr('name').indexOf('&lpos=apps_scodevmw : 32') > -1 ) || (jQuery(this).attr('href').indexOf('https://cio.vmware.com/2021/10/idg-survey-it-owns-modernization-budget.html') > -1 && jQuery(this).attr('name').indexOf('&lpos=apps_scodevmw : 33') > -1 ) || (jQuery(this).attr('href').indexOf('https://cio.vmware.com/category/business-transformation') > -1 && jQuery(this).attr('name').indexOf('&lpos=apps_scodevmw : 36') > -1) || (jQuery(this).attr('href').indexOf('https://cio.vmware.com/2021/11/cio-priorities-strategic-assessment.html') > -1 && jQuery(this).attr('name').indexOf('&lpos=apps_scodevmw : 37') > -1)  ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12036309;type=ccshv0;cat=artic0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>');
        }

    })
}






// hve video point , mid point and video completion //

// hve video point , mid point and video completion //

// HVE EXTERNAL //

if (window.location.href.indexOf('https://cio.vmware.com/2022/02/5-key-elements-of-a-successful-multi-cloud-environment.html') > -1 ) {
jQuery(".submenu-container a").click(function() {
        if (jQuery(this).attr('href').indexOf('https://twitter.com/VMware') > -1 || jQuery(this).attr('href').indexOf('https://www.youtube.com/user/vmwaretv') > -1 || jQuery(this).attr('href').indexOf('https://www.facebook.com/vmware') > -1 || jQuery(this).attr('href').indexOf('https://www.linkedin.com/company/vmware/mycompany/') > -1 ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12036309;type=ccshv0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}




// MICRSITES PRIVACY //
// DIMA-5471 Ending //

// DIMA-5454 Starting //

// Row no 5
// https://www.vmware.com/au/welcome

//HVE Franchise - APJ

if (window.location.href.indexOf('https://www.vmware.com/au/welcome') > -1 ) {
jQuery(".cards-footer   a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/cloud-solutions/multi-cloud.html?src=WWW_au_VMW_cHV6hLB0slbQwYJkWKFj&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

if (window.location.href.indexOf('https://www.vmware.com/au/welcome') > -1 ) {
jQuery(".cards-footer   a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/cloud-solutions/app-modernization.html?src=WWW_au_VMW_cHV6hLB0slbQwYJkWKFj&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

if (window.location.href.indexOf('https://www.vmware.com/au/welcome') > -1 ) {
jQuery(".cards-footer   a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/solutions/anywhere-workspace.html?src=WWW_au_VMW_cHV6hLB0slbQwYJkWKFj&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

if (window.location.href.indexOf('https://www.vmware.com/au/welcome') > -1 ) {
jQuery(".cards-footer   a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/solutions/virtual-cloud-network.html?src=WWW_au_VMW_cHV6hLB0slbQwYJkWKFj&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

if (window.location.href.indexOf('https://www.vmware.com/au/welcome') > -1 ) {
jQuery(".cards-footer   a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/security.html?src=WWW_au_VMW_cHV6hLB0slbQwYJkWKFj&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

if (window.location.href.indexOf('https://www.vmware.com/au/welcome') > -1 ) {
jQuery(".microsite-menuItem a").click(function() {if ((jQuery(this).attr('href').indexOf('/au/welcome/modernapps.html') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

if (window.location.href.indexOf('https://www.vmware.com/au/welcome') > -1 ) {
jQuery(".microsite-menuItem a").click(function() {if ((jQuery(this).attr('href').indexOf('/au/welcome/workspace.html') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


if (window.location.href.indexOf('https://www.vmware.com/au/welcome') > -1 ) {
jQuery(".microsite-menuItem a").click(function() {if ((jQuery(this).attr('href').indexOf('/au/welcome/networking.html') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


if (window.location.href.indexOf('https://www.vmware.com/au/welcome') > -1 ) {
jQuery(".microsite-menuItem a").click(function() {if ((jQuery(this).attr('href').indexOf('/au/welcome/security.html') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

if (window.location.href.indexOf('https://www.vmware.com/au/welcome') > -1 ) {
jQuery(".cards-footer.cta-align-center  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/solutions/anywhere-workspace.html?src=WWW_au_MRC_fuhqgaxyptasn&int_cid=7012H000001lKR3QAM') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

if (window.location.href.indexOf('https://www.vmware.com/au/welcome') > -1 ) {
jQuery(".cards-footer.cta-align-center  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/cloud-solutions/app-modernization.html?src=WWW_au_MRC_fuhqgaxyptasn&int_cid=7012H000001lKR3QAM') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

//HVE Customer - APJ

if (window.location.href.indexOf('https://www.vmware.com/au/welcome') > -1 ) {
jQuery(".microsite-menuItem a").click(function() {if ((jQuery(this).attr('href').indexOf('/au/welcome/customers.html') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=partn0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


if (window.location.href.indexOf('https://www.vmware.com/au/welcome') > -1 ) {
jQuery(".container-footer.mt-4.mb-2.text-center a").click(function() {if ((jQuery(this).attr('href').indexOf('/au/welcome/customers.html') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=partn0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

//HVE Article - APJ


if (window.location.href.indexOf('https://www.vmware.com/au/welcome') > -1 ) {
jQuery(".cards-footer   a").click(function() {if ((jQuery(this).attr('href').indexOf('/au/welcome/moderna.html') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=artic0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

if (window.location.href.indexOf('https://www.vmware.com/au/welcome') > -1 ) {
jQuery(".cards-footer   a").click(function() {if ((jQuery(this).attr('href').indexOf('/au/welcome/zoom.html') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=artic0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


//HVE External Site - APJ

if (window.location.href.indexOf('https://www.vmware.com/au/welcome') > -1 ) {
jQuery(".cards-footer   a").click(function() {if ((jQuery(this).attr('href').indexOf('/au/welcome/zoom.html') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}




//Row no 6
//https://www.vmware.com/au/welcome/anywhere-workforce.html

//HVE Franchise - APJ


if (window.location.href.indexOf('https://www.vmware.com/au/welcome/anywhere-workforce.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/workspace-one.html?src=WWW_au_VMW_sMwB4pgjy07JnUZCExi5&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


if (window.location.href.indexOf('https://www.vmware.com/au/welcome/anywhere-workforce.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/solutions/windows10-modern-management.html?src=WWW_au_VMW_sMwB4pgjy07JnUZCExi5&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


if (window.location.href.indexOf('https://www.vmware.com/au/welcome/anywhere-workforce.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/workspace-one/intelligent-hub.html?src=WWW_au_VMW_sMwB4pgjy07JnUZCExi5&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}



if (window.location.href.indexOf('https://www.vmware.com/au/welcome/anywhere-workforce.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/sd-wan.html?src=WWW_au_VMW_sMwB4pgjy07JnUZCExi5&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


//HVE External Site - APJ


if (window.location.href.indexOf('https://www.vmware.com/au/welcome/anywhere-workforce.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://sdwan.vmware.com/products/edge-network-intelligence?src=WWW_au_VMW_sMwB4pgjy07JnUZCExi5&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


if (window.location.href.indexOf('https://www.vmware.com/au/welcome/anywhere-workforce.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/carbon-black-cloud-endpoint.html?src=WWW_au_VMW_sMwB4pgjy07JnUZCExi5&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


if (window.location.href.indexOf('https://www.vmware.com/au/welcome/anywhere-workforce.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/secure-access-service-edge-sase.html?src=WWW_au_VMW_sMwB4pgjy07JnUZCExi5&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

//Row no 7
//https://www.vmware.com/au/welcome/better-protect-apps.html
// HVE Franchise - APJ


if (window.location.href.indexOf('https://www.vmware.com/au/welcome/better-protect-apps.html') > -1 ) {
jQuery(".actionicon a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/security.html?src=WWW_au_VMW_N8PTQ0xqbscaUYrFl72G&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}



if (window.location.href.indexOf('https://www.vmware.com/au/welcome/better-protect-apps.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/workspace-one/access.html?src=WWW_au_VMW_N8PTQ0xqbscaUYrFl72G&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


//HVE External Site - APJ


if (window.location.href.indexOf('https://www.vmware.com/au/welcome/better-protect-apps.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/carbon-black-cloud.html?src=WWW_au_VMW_N8PTQ0xqbscaUYrFl72G&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

if (window.location.href.indexOf('https://www.vmware.com/au/welcome/better-protect-apps.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/carbon-black-cloud-workload.html?src=WWW_au_VMW_N8PTQ0xqbscaUYrFl72G&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}



if (window.location.href.indexOf('https://www.vmware.com/au/welcome/better-protect-apps.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/secure-access-service-edge-sase.html?src=WWW_au_VMW_N8PTQ0xqbscaUYrFl72G&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


if (window.location.href.indexOf('https://www.vmware.com/au/welcome/better-protect-apps.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/solutions/cloud-workload-security.html?src=WWW_au_VMW_N8PTQ0xqbscaUYrFl72G&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}





// Row no 8

// https://www.vmware.com/au/welcome/build-better-apps-faster.html //
//HVE External Site


if (window.location.href.indexOf('https://www.vmware.com/au/welcome/build-better-apps-faster.html') > -1 ) {
jQuery(".actionicon a").click(function() {if ((jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/tanzu?src=WWW_au_VMW_NDaQd17xZSrwv6FpPWti&int_cid=7012H000001lE6hQAE') > -1 ) ) { 
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

if (window.location.href.indexOf('https://www.vmware.com/au/welcome/build-better-apps-faster.html') > -1 ) {
jQuery(".actionicon a").click(function() {if ((jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/labs?src=WWW_au_VMW_NDaQd17xZSrwv6FpPWti&int_cid=7012H000001lE6hQAE') > -1 ) ) { 
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

if (window.location.href.indexOf('https://www.vmware.com/au/welcome/build-better-apps-faster.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/content/blog/tanzu-advanced-generally-available-devsecops?src=WWW_au_VMW_NDaQd17xZSrwv6FpPWti&int_cid=7012H000001lE6hQAE') > -1 ) ) { 
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

// Row no 10

	//https://www.vmware.com/au/welcome/core-cloud-edge.html //  
		//HVE Franchise
		
		
		
if (window.location.href.indexOf('https://www.vmware.com/au/welcome/core-cloud-edge.html') > -1 ) {
jQuery(".actionicon a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/nsx-cloud.html?src=WWW_au_VMW_aRY0mt4Uw6yC5rFHhWu3&int_cid=7012H000001lE6hQAE') > -1 ) ) { 
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}



if (window.location.href.indexOf('https://www.vmware.com/au/welcome/core-cloud-edge.html') > -1 ) {
jQuery(".actionicon a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/nsx.html?src=WWW_au_VMW_aRY0mt4Uw6yC5rFHhWu3&int_cid=7012H000001lE6hQAE') > -1 ) ) { 
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}



if (window.location.href.indexOf('https://www.vmware.com/au/welcome/core-cloud-edge.html') > -1 ) {
jQuery(".actionicon a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/sd-wan.html?src=WWW_au_VMW_aRY0mt4Uw6yC5rFHhWu3&int_cid=7012H000001lE6hQAE') > -1 ) ) { 
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


if (window.location.href.indexOf('https://www.vmware.com/au/welcome/core-cloud-edge.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/nsx.html?src=WWW_au_VMW_aRY0mt4Uw6yC5rFHhWu3&int_cid=7012H000001lE6hQAE') > -1 ) ) { 
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


if (window.location.href.indexOf('https://www.vmware.com/au/welcome/core-cloud-edge.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/security/internal-firewall.html?src=WWW_au_VMW_aRY0mt4Uw6yC5rFHhWu3&int_cid=7012H000001lE6hQAE') > -1 ) ) { 
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


if (window.location.href.indexOf('https://www.vmware.com/au/welcome/core-cloud-edge.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/sd-wan.html?src=WWW_au_VMW_aRY0mt4Uw6yC5rFHhWu3&int_cid=7012H000001lE6hQAE') > -1 ) ) { 
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

		//HVE External Site
		
		
if (window.location.href.indexOf('https://www.vmware.com/au/welcome/core-cloud-edge.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/content/microsites/eni/home.html?src=WWW_au_VMW_aRY0mt4Uw6yC5rFHhWu3&int_cid=7012H000001lE6hQAE') > -1 ) ) { 
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}



if (window.location.href.indexOf('https://www.vmware.com/au/welcome/core-cloud-edge.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/secure-access-service-edge-sase.html?src=WWW_au_VMW_aRY0mt4Uw6yC5rFHhWu3&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


//Row no 11
//https://www.vmware.com/au/welcome/customers.html
//HVE Franchise



if (window.location.href.indexOf('https://www.vmware.com/au/welcome/customers.html') > -1 ) {
jQuery(".microsite-menuItem a").click(function() {if ((jQuery(this).attr('href').indexOf('/au/welcome/modernapps.html') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


if (window.location.href.indexOf('https://www.vmware.com/au/welcome/customers.html') > -1 ) {
jQuery(".microsite-menuItem a").click(function() {if ((jQuery(this).attr('href').indexOf('/au/welcome/workspace.html') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


if (window.location.href.indexOf('https://www.vmware.com/au/welcome/customers.html') > -1 ) {
jQuery(".microsite-menuItem a").click(function() {if ((jQuery(this).attr('href').indexOf('/au/welcome/networking.html') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


if (window.location.href.indexOf('https://www.vmware.com/au/welcome/customers.html') > -1 ) {
jQuery(".microsite-menuItem a").click(function() {if ((jQuery(this).attr('href').indexOf('/au/welcome/security.html') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

//HVE Customer

if (window.location.href.indexOf('https://www.vmware.com/au/welcome/customers.html') > -1 ) {
jQuery(".microsite-menuItem a").click(function() {if ((jQuery(this).attr('href').indexOf('/au/welcome/customers.html') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=partn0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

//HVE Article

if (window.location.href.indexOf('https://www.vmware.com/au/welcome/customers.html') > -1 ) {
jQuery(".cards-footer   a").click(function() {if ((jQuery(this).attr('href').indexOf('/au/welcome/moderna.html') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=artic0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


if (window.location.href.indexOf('https://www.vmware.com/au/welcome/customers.html') > -1 ) {
jQuery(".cards-footer   a").click(function() {if ((jQuery(this).attr('href').indexOf('/au/welcome/india-nse.html') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=artic0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


if (window.location.href.indexOf('https://www.vmware.com/au/welcome/customers.html') > -1 ) {
jQuery(".cards-footer   a").click(function() {if ((jQuery(this).attr('href').indexOf('/au/welcome/zoom.html') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=artic0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

//Row no: 12

//https://www.vmware.com/au/welcome/india-nse.html
//HVE Franchise

if (window.location.href.indexOf('https://www.vmware.com/au/welcome/india-nse.html') > -1 ) {
jQuery(".actionicon a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/cloud-solutions/app-modernization.html?src=WWW_au_VMW_qTbrIzGVyCJKQiU7fmLp&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

if (window.location.href.indexOf('https://www.vmware.com/au/welcome/india-nse.html') > -1 ) {
jQuery(".actionicon a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/cloud-solutions/hybrid-cloud.html?src=WWW_au_VMW_qTbrIzGVyCJKQiU7fmLp&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

if (window.location.href.indexOf('https://www.vmware.com/au/welcome/india-nse.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/nsx.html?src=WWW_au_VMW_qTbrIzGVyCJKQiU7fmLp&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


if (window.location.href.indexOf('https://www.vmware.com/au/welcome/india-nse.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/vrealize-cloud-management.html?src=WWW_au_VMW_qTbrIzGVyCJKQiU7fmLp&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

//HVE external

if (window.location.href.indexOf('https://www.vmware.com/au/welcome/india-nse.html') > -1 ) {
jQuery(".actionicon a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/vmc-on-aws.html?src=WWW_au_VMW_qTbrIzGVyCJKQiU7fmLp&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


//Row 13

//https://www.vmware.com/au/welcome/moderna.html
//HVE Franchise

if (window.location.href.indexOf('https://www.vmware.com/au/welcome/moderna.html') > -1 ) {
jQuery(".microsite-menuItem a").click(function() {if ((jQuery(this).attr('href').indexOf('/au/welcome/modernapps.html') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}




if (window.location.href.indexOf('https://www.vmware.com/au/welcome/moderna.html') > -1 ) {
jQuery(".microsite-menuItem a").click(function() {if ((jQuery(this).attr('href').indexOf('/au/welcome/workspace.html') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


if (window.location.href.indexOf('https://www.vmware.com/au/welcome/moderna.html') > -1 ) {
jQuery(".microsite-menuItem a").click(function() {if ((jQuery(this).attr('href').indexOf('/au/welcome/networking.html') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


if (window.location.href.indexOf('https://www.vmware.com/au/welcome/moderna.html') > -1 ) {
jQuery(".microsite-menuItem a").click(function() {if ((jQuery(this).attr('href').indexOf('/au/welcome/security.html') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

//HVE Customer


if (window.location.href.indexOf('https://www.vmware.com/au/welcome/moderna.html') > -1 ) {
jQuery(".microsite-menuItem a").click(function() {if ((jQuery(this).attr('href').indexOf('/au/welcome/customers.html') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=partn0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

//HVE external


if (window.location.href.indexOf('https://www.vmware.com/au/welcome/moderna.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/workspace-one.html?src=WWW_au_VMW_95w6cIxaG3tQh4Bq0rjE&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


if (window.location.href.indexOf('https://www.vmware.com/au/welcome/moderna.html') > -1 ) {
jQuery(".actionicon a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/solutions/anywhere-workspace.html?src=WWW_au_VMW_95w6cIxaG3tQh4Bq0rjE&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


if (window.location.href.indexOf('https://www.vmware.com/au/welcome/moderna.html') > -1 ) {
jQuery(".actionicon a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/security/workspace-security.html?src=WWW_au_VMW_95w6cIxaG3tQh4Bq0rjE&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


if (window.location.href.indexOf('https://www.vmware.com/au/welcome/moderna.html') > -1 ) {
jQuery(".actionicon a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/secure-access-service-edge-sase.html?src=WWW_au_VMW_95w6cIxaG3tQh4Bq0rjE&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


if (window.location.href.indexOf('https://www.vmware.com/au/welcome/moderna.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/carbon-black-cloud-endpoint.html?src=WWW_au_VMW_95w6cIxaG3tQh4Bq0rjE&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

if (window.location.href.indexOf('https://www.vmware.com/au/welcome/moderna.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://investors.modernatx.com/news-releases/news-release-details/modernas-covid-19-vaccine-candidate-meets-its-primary-efficacy') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


//Row 14
//https://www.vmware.com/au/welcome/modernapps.html
// HVE Article - APJ

if (window.location.href.indexOf('https://www.vmware.com/au/welcome/modernapps.html') > -1 ) {
jQuery(".actionicon a").click(function() {if ((jQuery(this).attr('href').indexOf('/au/welcome/build-better-apps-faster.html') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=artic0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


//HVE External Site - APJ

if (window.location.href.indexOf('https://www.vmware.com/au/welcome/modernapps.html') > -1 ) {
jQuery(".cards-footer   a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/cloud-solutions/app-modernization/cloud-native-apps.html?src=WWW_au_VMW_ZgixNCy2up9k4YdQvKHh&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


if (window.location.href.indexOf('https://www.vmware.com/au/welcome/modernapps.html') > -1 ) {
jQuery(".cards-footer   a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/cloud-solutions/app-modernization/existing-apps.html?src=WWW_au_VMW_ZgixNCy2up9k4YdQvKHh&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

if (window.location.href.indexOf('https://www.vmware.com/au/welcome/modernapps.html') > -1 ) {
jQuery(".cards-footer   a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/cloud-solutions/app-modernization/kubernetes.html?src=WWW_au_VMW_ZgixNCy2up9k4YdQvKHh&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}



// Row no 15
//https://www.vmware.com/au/welcome/networking.html
//HVE Article - APJ


if (window.location.href.indexOf('https://www.vmware.com/au/welcome/networking.html') > -1 ) {
jQuery(".actionicon a").click(function() {if ((jQuery(this).attr('href').indexOf('/au/welcome/core-cloud-edge.html') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=artic0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

//HVE External Site - APJ

if (window.location.href.indexOf('https://www.vmware.com/au/welcome/networking.html') > -1 ) {
jQuery(".cards-footer   a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/nsx.html?src=WWW_au_VMW_0ZPmRqAG9tjz7EIdaJbg&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


if (window.location.href.indexOf('https://www.vmware.com/au/welcome/networking.html') > -1 ) {
jQuery(".cards-footer   a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/security/internal-firewall.html?src=WWW_au_VMW_0ZPmRqAG9tjz7EIdaJbg&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

if (window.location.href.indexOf('https://www.vmware.com/au/welcome/networking.html') > -1 ) {
jQuery(".cards-footer   a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/sd-wan.html?src=WWW_au_VMW_0ZPmRqAG9tjz7EIdaJbg&int_cid=7012H000001lE6hQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


// Row no 81 //

// https://www.vmware.com/sg/welcome/zoom.html
// HVE External Site - APJ


if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/zoom.html') > -1 ) {
jQuery(".actionicon a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/workspace-one.html?src=WWW_sg_VMW_Tld16YxjgBGfzDb2MpWS&int_cid=7012H000001lE6mQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}


if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/zoom.html') > -1 ) {
jQuery(".actionicon a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/workspace-one/device-security.html?src=WWW_sg_VMW_Tld16YxjgBGfzDb2MpWS&int_cid=7012H000001lE6mQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/zoom.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('http://www.globenewswire.com/news-release/2018/06/11/1519706/0/en/Zoom-Founder-CEO-Eric-S-Yuan-Wins-2018-EY-Entrepreneur-of-the-Year-Award.html') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/zoom.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.cnbc.com/2019/03/22/video-conferencing-company-zoom-files-to-go-public-is-profitable.html') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/zoom.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/workspace-one/device-security.html?src=WWW_sg_VMW_Tld16YxjgBGfzDb2MpWS&int_cid=7012H000001lE6mQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}





// https://www.vmware.com/au/welcome/partners.html //
if (window.location.href.indexOf('https://www.vmware.com/au/welcome/partners.html') > -1 ) {
jQuery(".microsite-menuItem ul li a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/au/welcome/modernapps.html') > -1 ) || (jQuery(this).attr('href').indexOf('/au/welcome/workspace.html') > -1 )	 || (jQuery(this).attr('href').indexOf('/au/welcome/networking.html') > -1 ) || (jQuery(this).attr('href').indexOf('/au/welcome/security.html') > -1 )) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/au/welcome/partners.html') > -1 ) {
jQuery(".microsite-menuItem ul li a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/au/welcome/customers.html') > -1 )) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=partn0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/au/welcome/partners.html') > -1 ) {
jQuery(".cards-footer   a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/partners/partner-executives/vmware-partners-ahead-helps-customers-jumpstart-digital-transformation.html?src=WWW_au_VMW_ahZFxQbl4CSg0mr3K6Ls&int_cid=7012H000001lE6hQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/au/partners/partner-executives/vmware-partner-dizzion-keeps-customers-business-as-usual.html?src=WWW_au_VMW_ahZFxQbl4CSg0mr3K6Ls&int_cid=7012H000001lE6hQAE') > -1 ) 		) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// https://www.vmware.com/au/welcome/security.html //
if (window.location.href.indexOf('https://www.vmware.com/au/welcome/security.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/au/welcome/better-protect-apps.html') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=artic0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/au/welcome/security.html') > -1 ) {
jQuery(".cards-footer   a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/carbon-black-cloud-endpoint.html?src=WWW_au_VMW_sdkcAzF8jQNKP7mXvHL0&int_cid=7012H000001lE6hQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/carbon-black-cloud-workload.html?src=WWW_au_VMW_sdkcAzF8jQNKP7mXvHL0&int_cid=7012H000001lE6hQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/au/security/workspace-security.html?src=WWW_au_VMW_sdkcAzF8jQNKP7mXvHL0&int_cid=7012H000001lE6hQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// https://www.vmware.com/au/welcome/tap-into-multiple-clouds.html //
if (window.location.href.indexOf('https://www.vmware.com/au/welcome/tap-into-multiple-clouds.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/cloud-solutions/multi-cloud-ops.html?src=WWW_au_VMW_0QLaINzwevKTAPjtRuCM&int_cid=7012H000001lE6hQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/au/cloud-solutions/hybrid-cloud/modernize-data-center.html?src=WWW_au_VMW_0QLaINzwevKTAPjtRuCM&int_cid=7012H000001lE6hQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/au/cloud-solutions/hybrid-cloud/cloud-migration.html?src=WWW_au_VMW_0QLaINzwevKTAPjtRuCM&int_cid=7012H000001lE6hQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/au/welcome/tap-into-multiple-clouds.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/vrealize-network-insight.html?src=WWW_au_VMW_0QLaINzwevKTAPjtRuCM&int_cid=7012H000001lE6hQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/au/vmware-cloud-verified.html?src=WWW_au_VMW_0QLaINzwevKTAPjtRuCM&int_cid=7012H000001lE6hQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/cloud-foundation.html?src=WWW_au_VMW_0QLaINzwevKTAPjtRuCM&int_cid=7012H000001lE6hQAE') > -1 )  ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/au/welcome/tap-into-multiple-clouds.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/vmc-on-aws.html?src=WWW_au_VMW_0QLaINzwevKTAPjtRuCM&int_cid=7012H000001lE6hQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.cloudhealthtech.com/') > -1   ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
// https://www.vmware.com/au/welcome/workspace.html //
if (window.location.href.indexOf('https://www.vmware.com/au/welcome/workspace.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/au/welcome/anywhere-workforce.html') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=artic0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// https://www.vmware.com/au/welcome/zoom.html //
if (window.location.href.indexOf('https://www.vmware.com/au/welcome/zoom.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/workspace-one.html?src=WWW_au_VMW_XY7n28Nb13lIyUhprFDP&int_cid=7012H000001lE6hQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/workspace-one/device-security.html?src=WWW_au_VMW_XY7n28Nb13lIyUhprFDP&int_cid=7012H000001lE6hQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/au/welcome/zoom.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('http://www.globenewswire.com/news-release/2018/06/11/1519706/0/en/Zoom-Founder-CEO-Eric-S-Yuan-Wins-2018-EY-Entrepreneur-of-the-Year-Award.html') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.cnbc.com/2019/03/22/video-conferencing-company-zoom-files-to-go-public-is-profitable.html') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/workspace-one/device-security.html?src=WWW_au_VMW_XY7n28Nb13lIyUhprFDP&int_cid=7012H000001lE6hQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// https://www.vmware.com/in/welcome.html //
if (window.location.href.indexOf('https://www.vmware.com/in/welcome.html') > -1 ) {
jQuery(".cards-footer.cta-align-center  a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/in/solutions/anywhere-workspace.html?src=WWW_in_MRC_xv2oesjfs1i3o&int_cid=7012H000001lKQyQAM') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome.html') > -1 ) {
jQuery(".cards-footer   a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/in/cloud-solutions/multi-cloud.html?src=WWW_in_VMW_8paxGcSNMCtJHrmlbkg7&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/cloud-solutions/app-modernization.html?src=WWW_in_VMW_8paxGcSNMCtJHrmlbkg7&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/solutions/anywhere-workspace.html?src=WWW_in_VMW_8paxGcSNMCtJHrmlbkg7&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/solutions/virtual-cloud-network.html?src=WWW_in_VMW_8paxGcSNMCtJHrmlbkg7&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/security.html?src=WWW_in_VMW_8paxGcSNMCtJHrmlbkg7&int_cid=7012H000001lE6cQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome.html') > -1 ) {
jQuery(".microsite-menuItem li a").click(function() {
        if (  (jQuery(this).attr('href').indexOf('/uk/welcome/modernapps.html') > -1  ) || (jQuery(this).attr('href').indexOf('/uk/welcome/networking.html') > -1 ) || (jQuery(this).attr('href').indexOf('/uk/welcome/workspace.html') > -1  ) || (jQuery(this).attr('href').indexOf('/uk/welcome/security.html') > -1  )) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome.html') > -1 ) {
jQuery(".microsite-menuItem ul li a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/in/welcome/customers.html') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=partn0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome.html') > -1 ) {
jQuery(".microsite-menuItem ul li a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/in/welcome/customers.html') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=partn0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome.html') > -1 ) {
jQuery(".container-footer.mt-4.mb-2.text-center a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/in/welcome/customers.html') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=partn0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}


// https://www.vmware.com/in/welcome/anywhere-workforce.html //
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/anywhere-workforce.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/workspace-one.html?src=WWW_in_VMW_M7YZ9kTbiHJfWRNt6da2&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/solutions/windows10-modern-management.html?src=WWW_in_VMW_M7YZ9kTbiHJfWRNt6da2&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/workspace-one/intelligent-hub.html?src=WWW_in_VMW_M7YZ9kTbiHJfWRNt6da2&int_cid=7012H000001lE6cQAE') > -1 )  || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/sd-wan.html?src=WWW_in_VMW_M7YZ9kTbiHJfWRNt6da2&int_cid=7012H000001lE6cQAE') > -1 )  ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/anywhere-workforce.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://sdwan.vmware.com/products/edge-network-intelligence?src=WWW_in_VMW_M7YZ9kTbiHJfWRNt6da2&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/secure-access-service-edge-sase.html?src=WWW_in_VMW_M7YZ9kTbiHJfWRNt6da2&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/carbon-black-cloud-endpoint.html?src=WWW_in_VMW_M7YZ9kTbiHJfWRNt6da2&int_cid=7012H000001lE6cQAE') > -1 )    ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
// https://www.vmware.com/in/welcome/better-protect-apps.html //
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/better-protect-apps.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/in/security.html?src=WWW_in_VMW_HBVWsXIej1Yxu9lD5f6S&int_cid=7012H000001lE6cQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/better-protect-apps.html') > -1 ) {
jQuery(".col-md-12.no-padd   p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/workspace-one/access.html?src=WWW_in_VMW_HBVWsXIej1Yxu9lD5f6S&int_cid=7012H000001lE6cQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/better-protect-apps.html') > -1 ) {
jQuery(".col-md-12.no-padd   p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/carbon-black-cloud.html?src=WWW_in_VMW_HBVWsXIej1Yxu9lD5f6S&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/carbon-black-cloud-workload.html?src=WWW_in_VMW_HBVWsXIej1Yxu9lD5f6S&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/secure-access-service-edge-sase.html?src=WWW_in_VMW_HBVWsXIej1Yxu9lD5f6S&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/solutions/cloud-workload-security.html?src=WWW_in_VMW_HBVWsXIej1Yxu9lD5f6S&int_cid=7012H000001lE6cQAE') > -1 )) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
// https://www.vmware.com/in/welcome/bookmyshow.html //
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/bookmyshow.html') > -1 ) {
jQuery(".col-md-12.no-padd   p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/vrealize-operations.html?src=WWW_in_VMW_BfLzuDvl0RwtA8e12dXs&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/workspace-one.html?src=WWW_in_VMW_BfLzuDvl0RwtA8e12dXs&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/vsan.html?src=WWW_in_VMW_BfLzuDvl0RwtA8e12dXs&int_cid=7012H000001lE6cQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/bookmyshow.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/vsan.html?src=WWW_in_VMW_BfLzuDvl0RwtA8e12dXs&int_cid=7012H000001lE6cQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
// https://www.vmware.com/in/welcome/build-better-apps-faster.html //
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/build-better-apps-faster.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/tanzu?src=WWW_in_VMW_l1IqLeK5BcZvSTPsmurY&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/labs?src=WWW_in_VMW_l1IqLeK5BcZvSTPsmurY&int_cid=7012H000001lE6cQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/build-better-apps-faster.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/content/blog/tanzu-advanced-generally-available-devsecops?src=WWW_in_VMW_l1IqLeK5BcZvSTPsmurY&int_cid=7012H000001lE6cQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}


// https://www.vmware.com/in/welcome/core-cloud-edge.html //
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/core-cloud-edge.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/nsx-cloud.html?src=WWW_in_VMW_r8EdPDzq5e2syVCNc4kb&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/nsx.html?src=WWW_in_VMW_r8EdPDzq5e2syVCNc4kb&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/sd-wan.html?src=WWW_in_VMW_r8EdPDzq5e2syVCNc4kb&int_cid=7012H000001lE6cQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/core-cloud-edge.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/nsx.html?src=WWW_in_VMW_r8EdPDzq5e2syVCNc4kb&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/security/internal-firewall.html?src=WWW_in_VMW_r8EdPDzq5e2syVCNc4kb&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/sd-wan.html?src=WWW_in_VMW_r8EdPDzq5e2syVCNc4kb&int_cid=7012H000001lE6cQAE') > -1 )) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

if (window.location.href.indexOf('https://www.vmware.com/in/welcome/core-cloud-edge.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/content/microsites/eni/home.html?src=WWW_in_VMW_r8EdPDzq5e2syVCNc4kb&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/secure-access-service-edge-sase.html?src=WWW_in_VMW_r8EdPDzq5e2syVCNc4kb&int_cid=7012H000001lE6cQAE') > -1 )) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// https://www.vmware.com/in/welcome/customers.html //
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/customers.html') > -1 ) {
jQuery(".microsite-menuItem ul li a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/in/welcome/modernapps.html') > -1 ) || (jQuery(this).attr('href').indexOf('/in/welcome/workspace.html') > -1 ) || (jQuery(this).attr('href').indexOf('/in/welcome/networking.html') > -1 ) || (jQuery(this).attr('href').indexOf('/in/welcome/security.html') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/customers.html') > -1 ) {
jQuery(".microsite-menuItem ul li a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/in/welcome/customers.html') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=partn0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/customers.html') > -1 ) {
jQuery(".cards-footer   a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/in/welcome/bookmyshow.html') > -1 ) || (jQuery(this).attr('href').indexOf('/in/welcome/gap-inc.html') > -1 ) || (jQuery(this).attr('href').indexOf('/in/welcome/moderna.html') > -1 ) || (jQuery(this).attr('href').indexOf('/in/welcome/india-nse.html') > -1 ) || (jQuery(this).attr('href').indexOf('/in/welcome/zoom.html') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=artic0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// https://www.vmware.com/in/welcome/gap-inc.html //
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/gap-inc.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/workspace-one.html?src=WWW_in_VMW_KBNuwMLaf5TJUWd7tyQq&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/nsx.html?src=WWW_in_VMW_KBNuwMLaf5TJUWd7tyQq&int_cid=7012H000001lE6cQAE') > -1 )  ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/gap-inc.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/workspace-one.html?src=WWW_in_VMW_KBNuwMLaf5TJUWd7tyQq&int_cid=7012H000001lE6cQAE') > -1 ) ||  (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/solutions/compliance-risk-management.html?src=WWW_in_VMW_KBNuwMLaf5TJUWd7tyQq&int_cid=7012H000001lE6cQAE') > -1 )  ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/gap-inc.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.gapinc.com/en-us/articles/2018/06/gap-stores-address-biggest-customer-frustration-wi') > -1 ) || (jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/application-service?src=WWW_in_VMW_KBNuwMLaf5TJUWd7tyQq&int_cid=7012H000001lE6cQAE') > -1 )  ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// https://www.vmware.com/in/welcome/india-nse.html //
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/india-nse.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/in/cloud-solutions/app-modernization.html?src=WWW_in_VMW_3U1chDG20Ce9zXsavf5r&int_cid=7012H000001lE6cQAE') > -1 ) ||  (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/cloud-solutions/hybrid-cloud.html?src=WWW_in_VMW_3U1chDG20Ce9zXsavf5r&int_cid=7012H000001lE6cQAE') > -1 )  ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/india-nse.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/nsx.html?src=WWW_in_VMW_3U1chDG20Ce9zXsavf5r&int_cid=7012H000001lE6cQAE') > -1 ) ||  (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/vrealize-cloud-management.html?src=WWW_in_VMW_3U1chDG20Ce9zXsavf5r&int_cid=7012H000001lE6cQAE') > -1 )  ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/india-nse.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/vmc-on-aws.html?src=WWW_in_VMW_3U1chDG20Ce9zXsavf5r&int_cid=7012H000001lE6cQAE') > -1 )) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// https://www.vmware.com/in/welcome/moderna.html //
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/moderna.html') > -1 ) {
jQuery(".microsite-menuItem ul li a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/in/welcome/modernapps.html') > -1 ) || (jQuery(this).attr('href').indexOf('/in/welcome/workspace.html') > -1 ) || (jQuery(this).attr('href').indexOf('/in/welcome/networking.html') > -1 ) || (jQuery(this).attr('href').indexOf('/in/welcome/security.html') > -1 )) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/moderna.html') > -1 ) {
jQuery(".microsite-menuItem ul li a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/in/welcome/customers.html') > -1 )) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=partn0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

if (window.location.href.indexOf('https://www.vmware.com/in/welcome/moderna.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/workspace-one.html?src=WWW_in_VMW_P20FRli9pvBDCSmgWEza&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/carbon-black-cloud-endpoint.html?src=WWW_in_VMW_P20FRli9pvBDCSmgWEza&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://investors.modernatx.com/news-releases/news-release-details/modernas-covid-19-vaccine-candidate-meets-its-primary-efficacy') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/moderna.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/in/solutions/anywhere-workspace.html?src=WWW_in_VMW_P20FRli9pvBDCSmgWEza&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/security/workspace-security.html?src=WWW_in_VMW_P20FRli9pvBDCSmgWEza&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/secure-access-service-edge-sase.html?src=WWW_in_VMW_P20FRli9pvBDCSmgWEza&int_cid=7012H000001lE6cQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

//  https://www.vmware.com/in/welcome/modernapps.html //
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/modernapps.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/in/welcome/build-better-apps-faster.html') > -1 )) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=artic0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/modernapps.html') > -1 ) {
jQuery(".cards-footer   a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/in/cloud-solutions/app-modernization/cloud-native-apps.html?src=WWW_in_VMW_2xCiNnZ4g6QpYteqXsRm&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/cloud-solutions/app-modernization/existing-apps.html?src=WWW_in_VMW_2xCiNnZ4g6QpYteqXsRm&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/cloud-solutions/app-modernization/kubernetes.html?src=WWW_in_VMW_2xCiNnZ4g6QpYteqXsRm&int_cid=7012H000001lE6cQAE') > -1 )) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// https://www.vmware.com/in/welcome/networking.html //
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/networking.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/in/welcome/core-cloud-edge.html') > -1 )) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=artic0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/networking.html') > -1 ) {
jQuery(".cards-footer   a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/nsx.html?src=WWW_in_VMW_pZgAP92nMRic3WVs5Tvh&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/security/internal-firewall.html?src=WWW_in_VMW_pZgAP92nMRic3WVs5Tvh&int_cid=7012H000001lE6cQAE') > -1 ) ||  (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/sd-wan.html?src=WWW_in_VMW_pZgAP92nMRic3WVs5Tvh&int_cid=7012H000001lE6cQAE') > -1 )) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// https://www.vmware.com/in/welcome/partners.html //
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/partners.html') > -1 ) {
jQuery(".microsite-menuItem ul li a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/in/welcome/modernapps.html') > -1 ) || (jQuery(this).attr('href').indexOf('/in/welcome/workspace.html') > -1 ) || (jQuery(this).attr('href').indexOf('/in/welcome/networking.html') > -1 ) || (jQuery(this).attr('href').indexOf('/in/welcome/security.html') > -1 )) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/partners.html') > -1 ) {
jQuery(".microsite-menuItem ul li a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/in/welcome/customers.html') > -1 )) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=partn0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/partners.html') > -1 ) {
jQuery(".cards-footer   a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/in/partners/partner-executives/vmware-partners-ahead-helps-customers-jumpstart-digital-transformation.html?src=WWW_in_VMW_GtL5UXl1SNYAnxfqFM4k&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/partners/partner-executives/vmware-partner-dizzion-keeps-customers-business-as-usual.html?src=WWW_in_VMW_GtL5UXl1SNYAnxfqFM4k&int_cid=7012H000001lE6cQAE') > -1 )) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}


// https://www.vmware.com/in/welcome/security.html //
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/security.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/in/welcome/better-protect-apps.html') > -1 )) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=artic0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/security.html') > -1 ) {
jQuery(".cards-footer   a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/carbon-black-cloud-endpoint.html?src=WWW_in_VMW_WN3h849GXq6Kka2vjcgS&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/carbon-black-cloud-workload.html?src=WWW_in_VMW_WN3h849GXq6Kka2vjcgS&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/security/workspace-security.html?src=WWW_in_VMW_WN3h849GXq6Kka2vjcgS&int_cid=7012H000001lE6cQAE') > -1 )) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// https://www.vmware.com/in/welcome/tap-into-multiple-clouds.html //
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/tap-into-multiple-clouds.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/in/cloud-solutions/multi-cloud-ops.html?src=WWW_in_VMW_snFPb5ik43CmuhqjLIwr&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/cloud-solutions/hybrid-cloud/modernize-data-center.html?src=WWW_in_VMW_snFPb5ik43CmuhqjLIwr&int_cid=7012H000001lE6cQAE') > -1 )	 || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/cloud-solutions/hybrid-cloud/cloud-migration.html?src=WWW_in_VMW_snFPb5ik43CmuhqjLIwr&int_cid=7012H000001lE6cQAE') > -1 )) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/tap-into-multiple-clouds.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/vrealize-network-insight.html?src=WWW_in_VMW_snFPb5ik43CmuhqjLIwr&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/vmware-cloud-verified.html?src=WWW_in_VMW_snFPb5ik43CmuhqjLIwr&int_cid=7012H000001lE6cQAE') > -1 )	 || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/cloud-foundation.html?src=WWW_in_VMW_snFPb5ik43CmuhqjLIwr&int_cid=7012H000001lE6cQAE') > -1 )) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/tap-into-multiple-clouds.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/vmc-on-aws.html?src=WWW_in_VMW_snFPb5ik43CmuhqjLIwr&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.cloudhealthtech.com/') > -1 )) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// https://www.vmware.com/in/welcome/workspace.html //
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/workspace.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/in/welcome/anywhere-workforce.html') > -1 )) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=artic0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// https://www.vmware.com/in/welcome/zoom.html //
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/zoom.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/workspace-one.html?src=WWW_in_VMW_Nhf8rMxgFtZVuPCHW01v&int_cid=7012H000001lE6cQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/workspace-one/device-security.html?src=WWW_in_VMW_Nhf8rMxgFtZVuPCHW01v&int_cid=7012H000001lE6cQAE') > -1 )) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/zoom.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('http://www.globenewswire.com/news-release/2018/06/11/1519706/0/en/Zoom-Founder-CEO-Eric-S-Yuan-Wins-2018-EY-Entrepreneur-of-the-Year-Award.html') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.cnbc.com/2019/03/22/video-conferencing-company-zoom-files-to-go-public-is-profitable.html') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/workspace-one/device-security.html?src=WWW_in_VMW_Nhf8rMxgFtZVuPCHW01v&int_cid=7012H000001lE6cQAE') > -1 )) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// https://www.vmware.com/sg/welcome.html //
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome.html') > -1 ) {
jQuery(".cards-footer.cta-align-center  a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/solutions/anywhere-workspace.html?src=WWW_sg_MRC_kb1bv4gk4ylqw&int_cid=7012H000001lKR8QAM') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome.html') > -1 ) {
jQuery(".cards-footer   a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/solutions/virtual-cloud-network.html?src=WWW_sg_VMW_V2zAXD9F5bCvZ8jLEqck&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/security.html?src=WWW_sg_VMW_V2zAXD9F5bCvZ8jLEqck&int_cid=7012H000001lE6mQAE') > -1 )  || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/cloud-solutions/multi-cloud.html?src=WWW_sg_VMW_V2zAXD9F5bCvZ8jLEqck&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/cloud-solutions/app-modernization.html?src=WWW_sg_VMW_V2zAXD9F5bCvZ8jLEqck&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/solutions/anywhere-workspace.html?src=WWW_sg_VMW_V2zAXD9F5bCvZ8jLEqck&int_cid=7012H000001lE6mQAE') > -1 )) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome.html') > -1 ) {
jQuery(".microsite-menuItem li a").click(function() {
        if (  (jQuery(this).attr('href').indexOf('/uk/welcome/modernapps.html') > -1  ) || (jQuery(this).attr('href').indexOf('/uk/welcome/networking.html') > -1 ) || (jQuery(this).attr('href').indexOf('/uk/welcome/workspace.html') > -1  ) || (jQuery(this).attr('href').indexOf('/uk/welcome/security.html') > -1  )) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome.html') > -1 ) {
jQuery(".microsite-menuItem ul li a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/sg/welcome/customers.html') > -1 )) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=partn0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome.html') > -1 ) {
jQuery(".container-footer.mt-4.mb-2.text-center a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/sg/welcome/customers.html') > -1 )) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=partn0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// https://www.vmware.com/sg/welcome/anywhere-workforce.html //
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/anywhere-workforce.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/workspace-one.html?src=WWW_sg_VMW_rQyKwFpe9WaZLARH4Y0z&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/solutions/windows10-modern-management.html?src=WWW_sg_VMW_rQyKwFpe9WaZLARH4Y0z&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/workspace-one/intelligent-hub.html?src=WWW_sg_VMW_rQyKwFpe9WaZLARH4Y0z&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/sd-wan.html?src=WWW_sg_VMW_rQyKwFpe9WaZLARH4Y0z&int_cid=7012H000001lE6mQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/anywhere-workforce.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://sdwan.vmware.com/products/edge-network-intelligence?src=WWW_sg_VMW_rQyKwFpe9WaZLARH4Y0z&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/carbon-black-cloud-endpoint.html?src=WWW_sg_VMW_rQyKwFpe9WaZLARH4Y0z&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/secure-access-service-edge-sase.html?src=WWW_sg_VMW_rQyKwFpe9WaZLARH4Y0z&int_cid=7012H000001lE6mQAE') > -1 )  ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// https://www.vmware.com/sg/welcome/better-protect-apps.html //
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/better-protect-apps.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/security.html?src=WWW_sg_VMW_kZJetBNx5y1i7V8lswqE&int_cid=7012H000001lE6mQAE') > -1 )   ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/better-protect-apps.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/workspace-one/access.html?src=WWW_sg_VMW_kZJetBNx5y1i7V8lswqE&int_cid=7012H000001lE6mQAE') > -1 )   ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/better-protect-apps.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/carbon-black-cloud.html?src=WWW_sg_VMW_kZJetBNx5y1i7V8lswqE&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/carbon-black-cloud-workload.html?src=WWW_sg_VMW_kZJetBNx5y1i7V8lswqE&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/secure-access-service-edge-sase.html?src=WWW_sg_VMW_kZJetBNx5y1i7V8lswqE&int_cid=7012H000001lE6mQAE') > -1 )  ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
// https://www.vmware.com/sg/welcome/build-better-apps-faster.html //
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/build-better-apps-faster.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/tanzu?src=WWW_sg_VMW_q5QRB61WwdalgKDvF8UI&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/labs?src=WWW_sg_VMW_q5QRB61WwdalgKDvF8UI&int_cid=7012H000001lE6mQAE') > -1 )  ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/build-better-apps-faster.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/content/blog/tanzu-advanced-generally-available-devsecops?src=WWW_sg_VMW_q5QRB61WwdalgKDvF8UI&int_cid=7012H000001lE6mQAE') > -1 )  ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
// https://www.vmware.com/sg/welcome/core-cloud-edge.html //
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/core-cloud-edge.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/nsx-cloud.html?src=WWW_sg_VMW_0eQjintWz6uMYDbEN4hP&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/nsx.html?src=WWW_sg_VMW_0eQjintWz6uMYDbEN4hP&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/sd-wan.html?src=WWW_sg_VMW_0eQjintWz6uMYDbEN4hP&int_cid=7012H000001lE6mQAE') > -1 )  ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/core-cloud-edge.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/nsx-cloud.html?src=WWW_sg_VMW_0eQjintWz6uMYDbEN4hP&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/security/internal-firewall.html?src=WWW_sg_VMW_0eQjintWz6uMYDbEN4hP&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/sd-wan.html?src=WWW_sg_VMW_0eQjintWz6uMYDbEN4hP&int_cid=7012H000001lE6mQAE') > -1 )  ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/build-better-apps-faster.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/content/microsites/eni/home.html?src=WWW_sg_VMW_0eQjintWz6uMYDbEN4hP&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/secure-access-service-edge-sase.html?src=WWW_sg_VMW_0eQjintWz6uMYDbEN4hP&int_cid=7012H000001lE6mQAE') > -1 )   ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
// https://www.vmware.com/sg/welcome/customers.html //
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/customers.html') > -1 ) {
jQuery(".microsite-menuItem ul li a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/sg/welcome/modernapps.html') > -1 ) || (jQuery(this).attr('href').indexOf('/sg/welcome/workspace.html') > -1 ) || (jQuery(this).attr('href').indexOf('/sg/welcome/networking.html') > -1 ) || (jQuery(this).attr('href').indexOf('/sg/welcome/security.html') > -1 )   ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/customers.html') > -1 ) {
jQuery(".microsite-menuItem ul li a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/sg/welcome/customers.html') > -1 )   ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=partn0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/customers.html') > -1 ) {
jQuery(".cards-footer   a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/sg/welcome/moderna.html') > -1 ) || (jQuery(this).attr('href').indexOf('/sg/welcome/zoom.html') > -1 )    ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
// https://www.vmware.com/sg/welcome/moderna.html //
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/moderna.html') > -1 ) {
jQuery(".microsite-menuItem ul li a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/sg/welcome/modernapps.html') > -1 ) || (jQuery(this).attr('href').indexOf('/sg/welcome/workspace.html') > -1 ) || (jQuery(this).attr('href').indexOf('/sg/welcome/networking.html') > -1 ) || (jQuery(this).attr('href').indexOf('/sg/welcome/security.html') > -1 )   ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/moderna.html') > -1 ) {
jQuery(".microsite-menuItem ul li a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/sg/welcome/customers.html') > -1 )   ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/moderna.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/workspace-one.html?src=WWW_sg_VMW_IJUKB93V80wGZfrXTbi6&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/carbon-black-cloud-endpoint.html?src=WWW_sg_VMW_IJUKB93V80wGZfrXTbi6&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://investors.modernatx.com/news-releases/news-release-details/modernas-covid-19-vaccine-candidate-meets-its-primary-efficacy') > -1 )  ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/moderna.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/solutions/anywhere-workspace.html?src=WWW_sg_VMW_IJUKB93V80wGZfrXTbi6&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/security/workspace-security.html?src=WWW_sg_VMW_IJUKB93V80wGZfrXTbi6&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/secure-access-service-edge-sase.html?src=WWW_sg_VMW_IJUKB93V80wGZfrXTbi6&int_cid=7012H000001lE6mQAE') > -1 )  ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
// https://www.vmware.com/sg/welcome/modernapps.html //
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/modernapps.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/sg/welcome/build-better-apps-faster.html') > -1 )  ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=artic0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/modernapps.html') > -1 ) {
jQuery(".cards-footer   a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/cloud-solutions/app-modernization/cloud-native-apps.html?src=WWW_sg_VMW_tgMsbHwF8jvACdcD3YZp&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/cloud-solutions/app-modernization/existing-apps.html?src=WWW_sg_VMW_tgMsbHwF8jvACdcD3YZp&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/cloud-solutions/app-modernization/kubernetes.html?src=WWW_sg_VMW_tgMsbHwF8jvACdcD3YZp&int_cid=7012H000001lE6mQAE') > -1 )  ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
// https://www.vmware.com/sg/welcome/networking.html //
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/networking.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/sg/welcome/core-cloud-edge.html') > -1 )  ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=artic0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/networking.html') > -1 ) {
jQuery(".cards-footer   a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/nsx.html?src=WWW_sg_VMW_rqVPDXpmINlBjydT7wfs&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/security/internal-firewall.html?src=WWW_sg_VMW_rqVPDXpmINlBjydT7wfs&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/sd-wan.html?src=WWW_sg_VMW_rqVPDXpmINlBjydT7wfs&int_cid=7012H000001lE6mQAE') > -1 )  ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// https://www.vmware.com/sg/welcome/partners.html //
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/partners.html') > -1 ) {
jQuery(".microsite-menuItem ul li a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/sg/welcome/modernapps.html') > -1 ) || (jQuery(this).attr('href').indexOf('/sg/welcome/workspace.html') > -1 ) || (jQuery(this).attr('href').indexOf('/sg/welcome/networking.html') > -1 ) || (jQuery(this).attr('href').indexOf('/sg/welcome/security.html') > -1 )  ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/partners.html') > -1 ) {
jQuery(".microsite-menuItem ul li a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/sg/welcome/customers.html') > -1 )  ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=partn0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/partners.html') > -1 ) {
jQuery(".microsite-menuItem ul li a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/partners/partner-executives/vmware-partners-ahead-helps-customers-jumpstart-digital-transformation.html?src=WWW_sg_VMW_lbshngLG50CDi3w7qt1S&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/partners/partner-executives/vmware-partner-dizzion-keeps-customers-business-as-usual.html?src=WWW_sg_VMW_lbshngLG50CDi3w7qt1S&int_cid=7012H000001lE6mQAE') > -1 )  ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
// https://www.vmware.com/sg/welcome/security.html //
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/security.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/sg/welcome/better-protect-apps.html') > -1 )  ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=artic0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/security.html') > -1 ) {
jQuery(".cards-footer   a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/carbon-black-cloud-endpoint.html?src=WWW_sg_VMW_qviMQRV0mH4bn9kTarFX&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/carbon-black-cloud-workload.html?src=WWW_sg_VMW_qviMQRV0mH4bn9kTarFX&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/security/workspace-security.html?src=WWW_sg_VMW_qviMQRV0mH4bn9kTarFX&int_cid=7012H000001lE6mQAE') > -1 )  ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// https://www.vmware.com/sg/welcome/tap-into-multiple-clouds.html //
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/tap-into-multiple-clouds.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/carbon-black-cloud-endpoint.html?src=WWW_sg_VMW_qviMQRV0mH4bn9kTarFX&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/carbon-black-cloud-workload.html?src=WWW_sg_VMW_qviMQRV0mH4bn9kTarFX&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/security/workspace-security.html?src=WWW_sg_VMW_qviMQRV0mH4bn9kTarFX&int_cid=7012H000001lE6mQAE') > -1 )  ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/tap-into-multiple-clouds.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/vrealize-network-insight.html?src=WWW_sg_VMW_QwTa4SXgYRZ6vJWGMrzC&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/vmware-cloud-verified.html?src=WWW_sg_VMW_QwTa4SXgYRZ6vJWGMrzC&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/cloud-foundation.html?src=WWW_sg_VMW_QwTa4SXgYRZ6vJWGMrzC&int_cid=7012H000001lE6mQAE') > -1 )   ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/tap-into-multiple-clouds.html') > -1 ) {
jQuery("..col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/vmc-on-aws.html?src=WWW_sg_VMW_QwTa4SXgYRZ6vJWGMrzC&int_cid=7012H000001lE6mQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.cloudhealthtech.com/') > -1 )    ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// https://www.vmware.com/sg/welcome/workspace.html //

if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/workspace.html') > -1 ) {
jQuery("..col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/sg/welcome/anywhere-workforce.html') > -1 )   ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// row no 107
// https://www.vmware.com/uk/partners/partner-executive-edge/vmware-partnership-perspectives-podcast.html

if (window.location.href.indexOf('https://podcasts.vmware.com/channels/partnership-perspectives-podcast/') > -1 ) {
jQuery(".widget.d-none.d-lg-block ul li a").click(function() {if ((jQuery(this).attr('href').indexOf('https://podcasts.apple.com/us/podcast/vmware-partnership-perspectives/id1567462113') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111222;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

})

}

if (window.location.href.indexOf('https://podcasts.vmware.com/channels/partnership-perspectives-podcast/') > -1 ) {
jQuery(".widget.d-none.d-lg-block ul li a").click(function() {if ((jQuery(this).attr('href').indexOf('https://open.spotify.com/show/4LKz6qgqW3pPPJHneOQUHy') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111222;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

})

}

if (window.location.href.indexOf('https://podcasts.vmware.com/channels/partnership-perspectives-podcast/') > -1 ) {
jQuery(".widget.d-none.d-lg-block ul li a").click(function() {if ((jQuery(this).attr('href').indexOf('https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS82S2phc2lZdA==') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111222;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

})

}

// DIMA-5454 Ending//

// DIMA-5657 Starting

// Row no 9
// https://www.vmware.com/in/welcome/singtel.html
// HVE external Site

if (window.location.href.indexOf('https://www.vmware.com/in/welcome/singtel.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://telco.vmware.com/products/telco-cloud-platform.html?src=WWW_in_MRC_85ou9hc2693xs&int_cid=7012H000001lIjgQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

if (window.location.href.indexOf('https://www.vmware.com/in/welcome/singtel.html') > -1 ) {
jQuery(".actionicon a").click(function() {if ((jQuery(this).attr('href').indexOf('https://telco.vmware.com/?src=WWW_in_MRC_85ou9hc2693xs&int_cid=7012H000001lIjgQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

if (window.location.href.indexOf('https://www.vmware.com/in/welcome/singtel.html') > -1 ) {
jQuery(".actionicon a").click(function() {if ((jQuery(this).attr('href').indexOf('https://telco.vmware.com/products/telco-cloud-platform.html?src=WWW_in_MRC_85ou9hc2693xs&int_cid=7012H000001lIjgQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}



// Row no 10
// External site
// https://www.vmware.com/au/welcome/singtel.html

if (window.location.href.indexOf('https://www.vmware.com/au/welcome/singtel.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://telco.vmware.com/products/telco-cloud-platform.html?src=WWW_au_MRC_ltvdxdnpb51t9&int_cid=7012H000001lIjlQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

if (window.location.href.indexOf('https://www.vmware.com/au/welcome/singtel.html') > -1 ) {
jQuery(".actionicon a").click(function() {if ((jQuery(this).attr('href').indexOf('https://telco.vmware.com/?src=WWW_au_MRC_ltvdxdnpb51t9&int_cid=7012H000001lIjlQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

if (window.location.href.indexOf('https://www.vmware.com/au/welcome/singtel.html') > -1 ) {
jQuery(".actionicon a").click(function() {if ((jQuery(this).attr('href').indexOf('https://telco.vmware.com/products/telco-cloud-platform.html?src=WWW_au_MRC_ltvdxdnpb51t9&int_cid=7012H000001lIjlQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}




// Row no 11
// External site
// https://www.vmware.com/sg/welcome/singtel.html

if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/singtel.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://telco.vmware.com/products/telco-cloud-platform.html?src=WWW_sg_MRC_2vntcst7cvm4n&int_cid=7012H000001lIjqQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/singtel.html') > -1 ) {
jQuery(".actionicon a").click(function() {if ((jQuery(this).attr('href').indexOf('https://telco.vmware.com/?src=WWW_sg_MRC_2vntcst7cvm4n&int_cid=7012H000001lIjqQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}

if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/singtel.html') > -1 ) {
jQuery(".actionicon a").click(function() {if ((jQuery(this).attr('href').indexOf('https://telco.vmware.com/products/telco-cloud-platform.html?src=WWW_sg_MRC_2vntcst7cvm4n&int_cid=7012H000001lIjqQAE') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })
}





// Row no 12
// https://www.vmware.com/sg/welcome/asx.html
// Franchise

if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/asx.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/products/blockchain.html?src=WWW_sg_MRC_cmpgraq9oft9u&int_cid=7012H000001lIjWQAU') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })

}

if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/asx.html') > -1 ) {
jQuery(".actionicon a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/sg/products/blockchain.html?src=WWW_sg_MRC_cmpgraq9oft9u&int_cid=7012H000001lIjWQAU') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })

}

// Hve external

if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/asx.html') > -1 ) {
jQuery(".actionicon a").click(function() {if ((jQuery(this).attr('href').indexOf('https://octo.vmware.com/author/blockchain/?src=WWW_sg_MRC_cmpgraq9oft9u&int_cid=7012H000001lIjWQAU') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })

}

if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/asx.html') > -1 ) {
jQuery(".actionicon a").click(function() {if ((jQuery(this).attr('href').indexOf('https://research.vmware.com/projects/vmware-blockchain/?src=WWW_sg_MRC_cmpgraq9oft9u&int_cid=7012H000001lIjWQAU') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })

}



// Row no 13
// https://www.vmware.com/au/welcome/asx.html

// Franchise

if (window.location.href.indexOf('https://www.vmware.com/au/welcome/asx.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/blockchain.html?src=WWW_au_MRC_wdayqy93czwwd&int_cid=7012H000001lIjWQAU') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })

}

if (window.location.href.indexOf('https://www.vmware.com/au/welcome/asx.html') > -1 ) {
jQuery(".actionicon a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/au/products/blockchain.html?src=WWW_au_MRC_wdayqy93czwwd&int_cid=7012H000001lIjWQAU') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })

}

// Hve external

if (window.location.href.indexOf('https://www.vmware.com/au/welcome/asx.html') > -1 ) {
jQuery(".actionicon a").click(function() {if ((jQuery(this).attr('href').indexOf('https://octo.vmware.com/author/blockchain/?src=WWW_au_MRC_wdayqy93czwwd&int_cid=7012H000001lIjWQAU') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })

}

if (window.location.href.indexOf('https://www.vmware.com/au/welcome/asx.html') > -1 ) {
jQuery(".actionicon a").click(function() {if ((jQuery(this).attr('href').indexOf('https://research.vmware.com/projects/vmware-blockchain/?src=WWW_au_MRC_wdayqy93czwwd&int_cid=7012H000001lIjWQAU') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })

}


// Row no 14
// https://www.vmware.com/in/welcome/asx.html

// Franchise

if (window.location.href.indexOf('https://www.vmware.com/in/welcome/asx.html') > -1 ) {
jQuery(".col-md-12.no-padd  a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/blockchain.html?src=WWW_in_MRC_5jgf714bj6gc6&int_cid=7012H000001lIjWQAU') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })

}

if (window.location.href.indexOf('https://www.vmware.com/in/welcome/asx.html') > -1 ) {
jQuery(".actionicon a").click(function() {if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/blockchain.html?src=WWW_in_MRC_5jgf714bj6gc6&int_cid=7012H000001lIjWQAU') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })

}

// Hve external

if (window.location.href.indexOf('https://www.vmware.com/in/welcome/asx.html') > -1 ) {
jQuery(".actionicon a").click(function() {if ((jQuery(this).attr('href').indexOf('https://octo.vmware.com/author/blockchain/?src=WWW_in_MRC_5jgf714bj6gc6&int_cid=7012H000001lIjWQAU') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })

}

if (window.location.href.indexOf('https://www.vmware.com/in/welcome/asx.html') > -1 ) {
jQuery(".actionicon a").click(function() {if ((jQuery(this).attr('href').indexOf('https://research.vmware.com/projects/vmware-blockchain/?src=WWW_in_MRC_5jgf714bj6gc6&int_cid=7012H000001lIjWQAU') > -1 ) ) {
var ftRand = Math.random() + "";
var num = ftRand * 1000000000000000000;
jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
}

 })

}


// DIMA-5657 Ending

// DIMA-5712/5694 Starting //
//
if (window.location.href.indexOf('https://cloudhealth.vmware.com/products/cloudhealth-secure-state/free-tier.html') > -1 ) {
         var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://pubads.g.doubleclick.net/activity;xsp=5017786;ord=' + num + '" width="1" height="1" alt=""/>');
 
}

//

if( window.location.href == "https://cloudhealth.vmware.com/" ) {
         var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://pubads.g.doubleclick.net/activity;xsp=5016001;ord=' + num + '" width="1" height="1" alt=""/>');
 
}
// DIMA-5712/5694 Ending //


//DIMA-5728 //
  /* //DIMA 6459 - remove yahoo pixels
if (window.location.href.indexOf('https://www.vmware.com/explore/jp.html') > -1 ) {
         //var ftRand = Math.random() + "";
           // var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://s.yimg.jp/images/listing/tool/cv/ytag.js">');
 
}
if (window.location.href.indexOf('https://www.vmware.com/explore/jp/register/email-complete.html') > -1 ) {
         //var ftRand = Math.random() + "";
           // var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://s.yimg.jp/images/listing/tool/cv/ytag.js">');
 
}
if (window.location.href.indexOf('https://www.vmware.com/explore/jp/register/complete.html') > -1 ) {
         //var ftRand = Math.random() + "";
           // var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://s.yimg.jp/images/listing/tool/cv/ytag.js">');
 
}
*/
// dima-5728 Ending //



// DIMA-5752 starting

if(window.location.href.includes("https://www.vmware.com/explore/jp.html") === true || 
window.location.href.includes("https://www.vmware.com/explore/jp/register/complete.html") === true
 )
{
var ftRand = Math.random() + "";
    var num = ftRand * 1000000000000000000;
	
jQuery('body').append('<img border="0" width="1" height="1" src="https://px.ads.linkedin.com/collect/?pid=1392818&fmt=gif'+num+'"">');

}

// DIMA-5752 ending

// DIMA-5753 Starting //
// DIMA-5753 //

// https://www.vmware.com/in/welcome/chitale-dairy.html //

if (window.location.href.indexOf('https://www.vmware.com/in/welcome/chitale-dairy.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/radius/cows-in-the-cloud?src=WWW_in_MRC_4i93kh8xp9l7z&int_cid=7012H000001lIjgQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

if (window.location.href.indexOf('https://www.vmware.com/in/welcome/chitale-dairy.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/?src=WWW_in_MRC_4i93kh8xp9l7z&int_cid=7012H000001lIjgQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

if (window.location.href.indexOf('https://www.vmware.com/in/welcome/chitale-dairy.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/tanzu/standard?src=WWW_in_MRC_4i93kh8xp9l7z&int_cid=7012H000001lIjgQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

if (window.location.href.indexOf('https://www.vmware.com/in/welcome/chitale-dairy.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/service-mesh?src=WWW_in_MRC_4i93kh8xp9l7z&int_cid=7012H000001lIjgQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

if (window.location.href.indexOf('https://www.vmware.com/in/welcome/chitale-dairy.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/mission-control?src=WWW_in_MRC_4i93kh8xp9l7z&int_cid=7012H000001lIjgQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}



if (window.location.href.indexOf('https://www.vmware.com/in/welcome/chitale-dairy.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/?src=WWW_in_MRC_4i93kh8xp9l7z&int_cid=7012H000001lIjgQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/chitale-dairy.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/kubernetes-grid?src=WWW_in_MRC_4i93kh8xp9l7z&int_cid=7012H000001lIjgQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
// DIMA-5753 End //
// DIMA-5753 Ending //


// DIMA-5832 Starting //
// DIMA-5832 //

if (window.location.href.indexOf('https://www.vmware.com/explore/jp.html') > -1) {
	let GTMScript = document.createElement("script");
    GTMScript.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=AW-10983792830");
    document.body.appendChild(GTMScript);
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    
    
	
	$('.btn-center.mt20').click(function(){
    gtag('event', 'conversion', {
        'send_to': 'AW-10983792830/_EyLCIC0_YIYEL7BvfUo'
    });
})
}


if (window.location.href.indexOf('https://www.vmware.com/explore/jp.html') > -1) {
	let GTMScript = document.createElement("script");
    GTMScript.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=AW-477191871");
    document.body.appendChild(GTMScript);
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    
    
	
	$('.btn-center.mt20').click(function(){
    gtag('event', 'conversion', {
        'send_to': 'AW-477191871/qKkgCKr1i4MYEL-9xeMB'
    });
})
}




// DIMA-5832 Ending //
//DIMA-5852 Starting //
// https://www.vmware.com/in/welcome/neurothink.html //

// HVE FRANCHISE  //
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/neurothink.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/cloud-foundation.html?src=WWW_in_MRC_gdf61j8oztmou&int_cid=7012H000001lIjgQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/carbon-black-cloud.html?src=WWW_in_MRC_gdf61j8oztmou&int_cid=7012H000001lIjgQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/neurothink.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/cloud-foundation.html?src=WWW_in_MRC_gdf61j8oztmou&int_cid=7012H000001lIjgQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/carbon-black-cloud.html?src=WWW_in_MRC_gdf61j8oztmou&int_cid=7012H000001lIjgQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// HVE FRANCHISE APAC //
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/neurothink.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/cloud-foundation.html?src=WWW_in_MRC_gdf61j8oztmou&int_cid=7012H000001lIjgQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/carbon-black-cloud.html?src=WWW_in_MRC_gdf61j8oztmou&int_cid=7012H000001lIjgQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/neurothink.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/cloud-foundation.html?src=WWW_in_MRC_gdf61j8oztmou&int_cid=7012H000001lIjgQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/in/products/carbon-black-cloud.html?src=WWW_in_MRC_gdf61j8oztmou&int_cid=7012H000001lIjgQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// HVE EXTERNAL //
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/neurothink.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://docs.vmware.com/en/VMware-vSphere-Bitfusion/index.html?src=WWW_in_MRC_gdf61j8oztmou&int_cid=7012H000001lIjgQAE') > -1 )  ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/neurothink.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://docs.vmware.com/en/VMware-vSphere-Bitfusion/index.html?src=WWW_in_MRC_gdf61j8oztmou&int_cid=7012H000001lIjgQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/aria-operations-for-applications?src=WWW_in_MRC_gdf61j8oztmou&int_cid=7012H000001lIjgQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// HVE EXTERNAL APAC //
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/neurothink.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://docs.vmware.com/en/VMware-vSphere-Bitfusion/index.html?src=WWW_in_MRC_gdf61j8oztmou&int_cid=7012H000001lIjgQAE') > -1 )  ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/in/welcome/neurothink.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://docs.vmware.com/en/VMware-vSphere-Bitfusion/index.html?src=WWW_in_MRC_gdf61j8oztmou&int_cid=7012H000001lIjgQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/aria-operations-for-applications?src=WWW_in_MRC_gdf61j8oztmou&int_cid=7012H000001lIjgQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}


// https://www.vmware.com/sg/welcome/chitale-dairy.html //

// HVE FRANCHISE //
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/chitale-dairy.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/cloud-foundation.html?src=WWW_sg_MRC_pm1jcrutiij85&int_cid=7012H000001lIjgQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/chitale-dairy.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/cloud-foundation.html?src=WWW_sg_MRC_pm1jcrutiij85&int_cid=7012H000001lIjgQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/nsx-advanced-load-balancer.html?src=WWW_sg_MRC_pm1jcrutiij85&int_cid=7012H000001lIjgQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-fr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// HVE FRANCHISE //
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/chitale-dairy.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/cloud-foundation.html?src=WWW_sg_MRC_pm1jcrutiij85&int_cid=7012H000001lIjgQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/chitale-dairy.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/cloud-foundation.html?src=WWW_sg_MRC_pm1jcrutiij85&int_cid=7012H000001lIjgQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://www.vmware.com/asean/products/nsx-advanced-load-balancer.html?src=WWW_sg_MRC_pm1jcrutiij85&int_cid=7012H000001lIjgQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=franc0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// HVE EXTERNAL //
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/chitale-dairy.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/radius/cows-in-the-cloud?src=WWW_sg_MRC_pm1jcrutiij85&int_cid=7012H000001lIjgQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/?src=WWW_sg_MRC_pm1jcrutiij85&int_cid=7012H000001lIjgQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/tanzu/standard?src=WWW_sg_MRC_pm1jcrutiij85&int_cid=7012H000001lIjgQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/service-mesh?src=WWW_sg_MRC_pm1jcrutiij85&int_cid=7012H000001lIjgQAE') > -1 )  || (jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/mission-control?src=WWW_sg_MRC_pm1jcrutiij85&int_cid=7012H000001lIjgQAE') > -1 )) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/chitale-dairy.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/?src=WWW_sg_MRC_pm1jcrutiij85&int_cid=7012H000001lIjgQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/kubernetes-grid?src=WWW_sg_MRC_pm1jcrutiij85&int_cid=7012H000001lIjgQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=8513285;type=wchve;cat=us-lo004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// HVE EXTERNAL //
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/chitale-dairy.html') > -1 ) {
jQuery(".col-md-12.no-padd  p a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://www.vmware.com/radius/cows-in-the-cloud?src=WWW_sg_MRC_pm1jcrutiij85&int_cid=7012H000001lIjgQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/?src=WWW_sg_MRC_pm1jcrutiij85&int_cid=7012H000001lIjgQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/tanzu/standard?src=WWW_sg_MRC_pm1jcrutiij85&int_cid=7012H000001lIjgQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/service-mesh?src=WWW_sg_MRC_pm1jcrutiij85&int_cid=7012H000001lIjgQAE') > -1 )  || (jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/mission-control?src=WWW_sg_MRC_pm1jcrutiij85&int_cid=7012H000001lIjgQAE') > -1 )) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
if (window.location.href.indexOf('https://www.vmware.com/sg/welcome/chitale-dairy.html') > -1 ) {
jQuery(".actionicon a").click(function() {
        if ((jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/?src=WWW_sg_MRC_pm1jcrutiij85&int_cid=7012H000001lIjgQAE') > -1 ) || (jQuery(this).attr('href').indexOf('https://tanzu.vmware.com/kubernetes-grid?src=WWW_sg_MRC_pm1jcrutiij85&int_cid=7012H000001lIjgQAE') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12111243;type=wchve0;cat=exter0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
// DIMA-5852 Ending //


// DIMA-5916 Starts //
 // DIMA-5916 //

// https://cloudsolutions.vmware.com/services/developer-ready-cloud.html //

if (window.location.href.indexOf('https://cloudsolutions.vmware.com/services/developer-ready-cloud.html') > -1 ) {
jQuery(".footer-content-area a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/content/dam/digitalmarketing/microsites/en/images/cloud-solutions/pdfs/VMware_Developer-Ready_Cloud_Infographic.pdf') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12036309;type=srhve0;cat=vcp_v0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// https://cloudsolutions.vmware.com/services/tanzu-mission-control.html //
if (window.location.href.indexOf('https://cloudsolutions.vmware.com/services/tanzu-mission-control.html') > -1 ) {
jQuery(".footer-content-area a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/content/dam/digitalmarketing/microsites/en/images/cloud-solutions/pdfs/VMware-Tanzu-Mission-Control-Solution-Brief.pdf') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12036309;type=srhve0;cat=vcp_v0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// https://cloud.vmware.com/providers/managed-services-provider //
if (window.location.href.indexOf('https://cloud.vmware.com/providers/managed-services-provider') > -1 ) {
jQuery(".HeroBanner_banner__12UN6.hero-banner a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/providers/search-result') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12036309;type=srhve0;cat=vcp_s0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}


// https://cloud.vmware.com/providers/vmware-cloud-verified //
if (window.location.href.indexOf('https://cloud.vmware.com/providers/vmware-cloud-verified') > -1 ) {
jQuery(".HeroBanner_banner__12UN6.hero-banner a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/providers/search-result') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12036309;type=srhve0;cat=vcp_s0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}
// https://cloud.vmware.com/providers/draas-powered //

if (window.location.href.indexOf('https://cloud.vmware.com/providers/draas-powered') > -1 ) {
jQuery(".HeroBanner_videoBanner__2ROaY  a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/providers/search-result') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12036309;type=srhve0;cat=vcp_s0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// https://cloud.vmware.com/providers/cloud-migration //
if (window.location.href.indexOf('https://cloud.vmware.com/providers/cloud-migration') > -1 ) {
jQuery(".HeroBanner_videoBanner__2ROaY  a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/providers/search-result') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12036309;type=srhve0;cat=vcp_s0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// https://cloud.vmware.com/providers //
if (window.location.href.indexOf('https://cloud.vmware.com/providers') > -1 ) {
jQuery(".HeroBanner_banner__12UN6.hero-banner a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/providers/search-result') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12036309;type=srhve0;cat=vcp_s0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// https://cloud.vmware.com/providers/sovereign-cloud //
if (window.location.href.indexOf('https://cloud.vmware.com/providers/sovereign-cloud') > -1 ) {
jQuery(".HeroBanner_videoBanner__2ROaY  a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/providers/search-result') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12036309;type=srhve0;cat=vcp_s0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// https://cloud.vmware.com/providers/free-trial //
if (window.location.href.indexOf('https://cloud.vmware.com/providers/free-trial') > -1 ) {
jQuery(".HeroBanner_banner__12UN6.hero-banner a").click(function() {
        if ((jQuery(this).attr('href').indexOf('/providers/search-result') > -1 ) ) {
            var ftRand = Math.random() + "";
            var num = ftRand * 1000000000000000000;
            jQuery('body').append('<img src="https://ad.doubleclick.net/ddm/activity/src=12036309;type=srhve0;cat=vcp_f0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + num + '" width="1" height="1" alt=""/>');
        }

    })
}

// DIMA-5916 Ends // 
// DIMA-5916 Ends //

//DIMA-5949 Starts//
if (window.location.href.indexOf('https://vm-event.jp/evolve/') > -1) {
	let GTMScript = document.createElement("script");
    GTMScript.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=AW-10983792830");
    document.body.appendChild(GTMScript);
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    
    
	
	$('.mt20 .submit_login').click(function(){
    gtag('event', 'conversion', {
        'send_to': 'AW-10983792830/bVaHCOXm-YcYEL7BvfUo'
    });
})
}
//DIMA-5949 Ends //

// DIMA-5960 Starts //

if ((window.location.href.includes("https://cloudhealth.vmware.com/") === true ))
 {
    var ftRand = Math.random() + "";
    var num = ftRand * 1000000000000000000;
    jQuery('body').append('<img border="0" width="1" height="1" src="https://pubads.g.doubleclick.net/activity;xsp=5076452;&ord=' + num + '"">');

}

if ((window.location.href.includes("https://cloudhealth.vmware.com/products/cloudhealth-secure-state/free-tier.html") === true ))
 {
    var ftRand = Math.random() + "";
    var num = ftRand * 1000000000000000000;
    jQuery('body').append('<img border="0" width="1" height="1" src="https://pubads.g.doubleclick.net/activity;xsp=5050653;&ord=' + num + '"">');

}
// DIMA-5960 Ends //

// DIMA-5990 Starts //

if(window.location.href.indexOf('https://cloudsolutions.vmware.com/') > -1 ){



(function(d,b,a,s,e){ var t = b.createElement(a), fs = b.getElementsByTagName(a)[0]; t.async=1; t.id=e; t.src=s; fs.parentNode.insertBefore(t, fs); }) (window,document,'script','https://tag.demandbase.com/ab696d88.min.js','demandbase_js_lib');


}
// DIMA-5990 Ends //

// DIMA-6170 //
if(window.location.href.indexOf('https://cloudsolutions.vmware.com/services/disaster-recovery.html') > -1){
let GTMScript = document.createElement("script");
GTMScript.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=AW-951536373");
document.body.appendChild(GTMScript);
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-951536373');


jQuery(".footer-content-area a").click(function(){
  if(jQuery(this).attr('href').indexOf("http://bit.ly/vmw_draas") > -1){
        //console.log("Yes ", jQuery(this).text())
       function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
	  window.setTimeout(function(){ 
      window.location = url;
	   }, 1500);
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-951536373/see6CNqou5oYEPWV3cUD',
      'event_callback': callback
  });
  return false;
  }
  if(typeof gtag !=="undefined"){
	gtag_report_conversion(jQuery(this).parent().parent().attr('href'))
  }
  }
})
}

if(window.location.href.indexOf('https://cloudsolutions.vmware.com/services/disaster-recovery.html') > -1){
let GTMScript = document.createElement("script");
GTMScript.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=AW-951536373");
document.body.appendChild(GTMScript);
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-951536373');


jQuery(".footer-content-area a").click(function(){
  if(jQuery(this).attr('href').indexOf("https://bit.ly/3GMKuDI") > -1){
        //console.log("Yes ", jQuery(this).text())
       function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
	  window.setTimeout(function(){ 
      window.location = url;
	   }, 1500);
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-951536373/ucn-CK_fsJoYEPWV3cUD',
      'event_callback': callback
  });
  return false;
  }
  if(typeof gtag !=="undefined"){
	gtag_report_conversion(jQuery(this).parent().parent().attr('href'))
  }
  }
})
}

if(window.location.href.indexOf('https://cloudsolutions.vmware.com/services/sovereign-cloud.html') > -1){
let GTMScript = document.createElement("script");
GTMScript.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=AW-951536373");
document.body.appendChild(GTMScript);
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-951536373');


jQuery(".footer-content-area a").click(function(){
  if(jQuery(this).attr('href').indexOf("/content/dam/digitalmarketing/microsites/en/images/cloud-solutions/pdfs/Sovereign%20Cloud_Two%20Pager.pdf") > -1){
        //console.log("Yes ", jQuery(this).text())
       function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
	  window.setTimeout(function(){ 
      window.location = url;
	   }, 1500);
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-951536373/X6e7CMDlu5oYEPWV3cUD',
      'event_callback': callback
  });
  return false;
  }
  if(typeof gtag !=="undefined"){
	gtag_report_conversion(jQuery(this).parent().parent().attr('href'))
  }
  }
})
}
// DIMA-6170 Ends //


} // Onetrust ending // Put all pixel code above this ending. 
}catch(e){utag.DB(e)};}})

  if(utag.cfg.readywait || utag.cfg.waittimer){
    utag.loader.EV('', 'ready', function(a) {
      if(utag.loader.rf==0){
        utag.loader.rf=1;
        utag.cfg.readywait=1;
        utag.DB('READY:utag.cfg.readywait');
        setTimeout(function(){utag.loader.PINIT()}, utag.cfg.waittimer || 1);
      }
    })
  }else{
    utag.loader.PINIT()
  }
}


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
        /* End Mapping Code */


        /* Start Tag Sending Code */
        
        

if(window.location.href.indexOf("cloudhealth-review.vmware.com") >-1 || window.location.href.indexOf("cloudhealth.vmware.com") >-1 ){

  !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="eF4BvGTLQui0xrUnGW2h29I1sxbHlp5X";;analytics.SNIPPET_VERSION="4.15.3";
 
  if(window.location.href.indexOf("cloudhealth-review.vmware.com") >-1 ){
  analytics.load("tEPUsc5x4a7Rw92LR63OnByBU4CEklez");
  }
  
  if(window.location.href.indexOf("cloudhealth.vmware.com")>-1){
  
  analytics.load("8O2kema3CmbsLjXB9HXo6vDFD5m66UbM");
  }

  }}();

    
}

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
            //u.loader({"type" : "iframe", "src" : u.data.base_url + c.join(u.data.qsp_delim), "cb" : u.loader_cb, "loc" : "body", "id" : 'utag_289' });
            //u.loader({"type" : "script", "src" : u.data.base_url, "cb" : u.loader_cb, "loc" : "script", "id" : 'utag_289' });
          //} else {
            //u.loader_cb();
          //}

          //u.loader({"type" : "img", "src" : u.data.base_url + c.join(u.data.qsp_delim) });

        /* End Loader Function Call */


        //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  })("289", "vmware.microsites-privacy");
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag

(function(){ if(typeof utag!='undefined' && !utag_condload){utag.initcatch=true;for(var i in utag.loader.GV(utag.loader.cfg)){var b=utag.loader.cfg[i];if(b.load!=4){utag.initcatch=false;break};if(b.wait==1){utag.initcatch=false;break}};if(utag.initcatch)utag.handler.INIT();} })();