//tealium universal tag - utag.184 ut4.0.202312122133, Copyright 2023 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<41){u.loader=function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){b=m;}else{b=a.createElement("iframe");}o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}if(o.id){b.id=o.id;}for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){this.onreadystatechange=null;o.cb();}};}}if(o.type!="img"&&!m){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}}};}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1};u.scriptrequested=false;u.map={};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:184");utag.DB(b);var c,d,e,f;u.data={"qsp_delim":"&","kvp_delim":"=","base_url":"//load.sumome.com/","siteId":"bcb4650331e445fc191ac9b7b41e418e46fc2a34a4d8417ac1cb72c278c31c3a"};utag.DB("send:184:EXTENSIONS");utag.DB(b);c=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
utag.DB("send:184:MAPPINGS");utag.DB(u.data);if(!u.data.siteId){utag.DB(u.id+": Tag not fired: Required attribute not populated");return;}
if(!u.scriptrequested){u.scriptrequested=true;u.loader({"type":"script","src":u.data.base_url,"cb":null,"loc":"script","id":"utag_184","attrs":{"data-sumo-site-id":u.data.siteId}});}
utag.DB("send:184:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("184","trendmicro.nabucms"));}catch(error){utag.DB(error);}
