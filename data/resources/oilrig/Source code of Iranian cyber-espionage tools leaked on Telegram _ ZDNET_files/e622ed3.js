(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1020:function(t,e,n){"use strict";n.d(e,"a",(function(){return o.a})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return D}));var o=n(307);function r(t){return function(e,n){delete e[n],Object.defineProperty(e,n,{set:void 0,get:function(){return this.getComponentByName(t)}})}}var c=n(68),l=n(47);function d(t){return Object(c.createDecorator)((function(e){e.mixins.push({created:function(){!this.content||this.content instanceof t||(this.content=l.a.deserializeObject(this.content,t))}})}))}n(19),n(14),n(18),n(21),n(17),n(22);var y=n(5),v=n(38),O=n(13),f=(n(45),n(8),n(31),n(25),n(132)),j=n.n(f),h=n(15),m=n(143),P=n(91);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function A(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var T=new h.a("LoadPage");function D(t){return function(e,n,o){if("asyncData"===n)return{value:function(e){var n=arguments;return Object(O.a)(regeneratorRuntime.mark((function r(){var c,l,content,d,y,O;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=n.length>1&&void 0!==n[1]?n[1]:void 0,r.prev=1,r.next=4,e.app.$context.preAsyncDataActions(e);case 4:if(l="function"==typeof t?t(e):t,T.log("pageOptions: ",l),T.log("pageOverride: ",c),r.t0=c,r.t0){r.next=12;break}return r.next=11,e.store.dispatch("page/loadPage",l);case 11:r.t0=r.sent;case 12:if(content=r.t0,d={},"function"!=typeof o.value){r.next=20;break}return r.next=17,Promise.resolve(o.value(e,content));case 17:d=r.sent,r.next=24;break;case 20:if("object"!==Object(v.a)(o.value)){r.next=24;break}return r.next=23,Promise.resolve(o.value);case 23:d=r.sent;case 24:if(void 0!==c){r.next=27;break}return r.next=27,e.store.dispatch("updatePageData",content.getPageData());case 27:return r.next=29,e.app.$context.postAsyncDataActions(e);case 29:return r.abrupt("return",A({content:content},d));case 32:if(r.prev=32,r.t1=r.catch(1),T.error("Error encountered in LoadPage: "+r.t1.toString()),!(r.t1 instanceof m.c)){r.next=40;break}return y={name:Object(P.c)(e.route.name),params:e.params},r.abrupt("return",e.redirect(301,e.localePath(r.t1.getRouterArgs(y)),e.query));case 40:if(!(r.t1 instanceof m.b)){r.next=44;break}return r.abrupt("return",e.redirect(r.t1.responseCode,r.t1.path,r.t1.preserveQuery?e.query:{}));case 44:if(!(r.t1 instanceof m.a)){r.next=46;break}return r.abrupt("return",e.error({statusCode:404,message:r.t1.message}));case 46:if(!e.store.getters.isProd){r.next=53;break}return O=r.t1,(j.a.isAxiosError(r.t1)||r.t1 instanceof Error)&&(O=r.t1.message),r.abrupt("return",e.error({statusCode:500,message:O}));case 53:throw r.t1;case 54:case"end":return r.stop()}}),r,null,[[1,32]])})))()}};T.warn("`LoadPage` decorator should only be used on the `asyncData` property.")}}},1022:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(272);function r(t){var head=new o.c;return t instanceof Function&&t(head),head.buildDecorator()}},1024:function(t,e,n){"use strict";n(8),n(11);var o=n(3),r=n(4),c=n(6),l=n(7),d=n(2),y=n(0),v=n(9),O=(n(19),n(14),n(18),n(21),n(17),n(22),n(13)),f=n(5),j=(n(45),n(25),n(23),n(27),n(199),n(24)),h=n(91),m=n(46);function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function A(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var T=function(t){Object(c.a)(n,t);var e=A(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).content=null,t}return Object(r.a)(n,[{key:"getSeoTags",value:function(){var t=this.content&&"function"==typeof this.content.getSeoTags?this.content.getSeoTags():{},e=t.url||this.getCanonicalUrl();return w(w({},t),{},{url:e,ogUrl:e,twitterUrl:e})}},{key:"getCanonicalUrl",value:function(){var t,e,n,o=(null===(t=this.$route.meta)||void 0===t?void 0:t.canonicalRoute)||Object(h.c)(this.$route.name),r=this.$route.edition||(null===(n=null===(e=this.content)||void 0===e?void 0:e.meta)||void 0===n?void 0:n.edition);return o?m.a.liveUrl(this.localePath({name:o,params:this.$route.params,edition:r})):null}}]),n}(j.default),D=function(t){Object(c.a)(y,t);var e,n,l,d=A(y);function y(){var t;return Object(o.a)(this,y),(t=d.apply(this,arguments)).content=null,t}return Object(r.a)(y,[{key:"asyncData",value:function(t,content){}},{key:"adUnits",get:function(){var t,e,n;return null===(n=null===(e=null===(t=this.$ads)||void 0===t?void 0:t.adDisplay)||void 0===e?void 0:e.getAdUnits)||void 0===n?void 0:n.call(e,void 0,void 0,!1,this.$el)}},{key:"mounted",value:function(){var t;(null==this?void 0:this.isSeamless)||(null===(t=this.$config.ads.adDisplay)||void 0===t?void 0:t.delayLoad)||this.$ads.adDisplay.loadAds([],{loadAllAds:!0}),this.isSeamless||this.$nuxt.$emit("pageMounted",this)}},{key:"loadAds",value:(l=Object(O.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==(n=null===(e=this.$ads)||void 0===e?void 0:e.adDisplay)&&void 0!==n){t.next=4;break}t.next=10;break;case 4:return t.t0=n,t.next=7,this.adUnits;case 7:t.t1=t.sent,t.t2={excludeDisabled:!0},t.t0.loadAds.call(t.t0,t.t1,t.t2);case 10:case"end":return t.stop()}}),t,this)}))),function(){return l.apply(this,arguments)})},{key:"removeAds",value:(n=Object(O.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==(n=null===(e=this.$ads)||void 0===e?void 0:e.adDisplay)&&void 0!==n){t.next=4;break}t.next=10;break;case 4:return t.t0=n,t.next=7,this.adUnits;case 7:t.t1=t.sent,t.t2={isDestructive:!0,waitForBidBarrel:!0},t.t0.removeAds.call(t.t0,t.t1,t.t2);case 10:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"trackPageView",value:(e=Object(O.a)(regeneratorRuntime.mark((function t(){var e,n,o,r=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=r.length>0&&void 0!==r[0]?r[0]:{},!this.content){t.next=8;break}return(o=this.content.getPageData()).tracking=w(w({},o.tracking),e),t.next=6,this.$store.dispatch("updatePageData",o);case 6:null===(n=this.$abtest)||void 0===n||n.executeAbLogic(),this.$tracking.trackPageView(o.tracking,["comscore","tagular"]);case 8:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"updateUrl",value:function(){var t,e,path=null===(e=null===(t=this.content)||void 0===t?void 0:t.content)||void 0===e?void 0:e.getPath(this);path&&window.history.replaceState({},null,"".concat(window.location.origin).concat(path).concat(window.location.search))}},{key:"setupPage",value:function(t){var e=this;this.updateUrl(),this.trackPageView(t),this.$scripts.loadScripts().then((function(){e.$config.ads.adDisplay.delayLoad=!1,e.loadAds()}))}},{key:"cleanupPage",value:function(){this.removeAds()}}]),y}(T);Object(y.b)([Object(v.Getter)("page/componentByName"),Object(y.d)("design:type",Function)],D.prototype,"getComponentByName",void 0),Object(y.b)([Object(v.Action)("page/loadComponent"),Object(y.d)("design:type",Function)],D.prototype,"loadComponent",void 0),Object(y.b)([Object(v.Action)("page/loadPage"),Object(y.d)("design:type",Function)],D.prototype,"loadPage",void 0),Object(y.b)([Object(v.Prop)({default:!1}),Object(y.d)("design:type",Boolean)],D.prototype,"isSeamless",void 0);var k=D=Object(y.b)([v.Component],D);function J(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var S=function(t){Object(c.a)(n,t);var e=J(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"mounted",value:function(){this.updateDisqus()}},{key:"setupPage",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};k.options.methods.setupPage.call(this,t),this.updateDisqus()}},{key:"updateDisqus",value:function(){var t,e,n,o,r,c;this.$services.isFeatureEnabled("disqus")&&this.$store.dispatch("disqus/addUnit",{identifier:null===(e=null===(t=null==this?void 0:this.content)||void 0===t?void 0:t.content)||void 0===e?void 0:e.id,title:null===(o=null===(n=null==this?void 0:this.content)||void 0===n?void 0:n.content)||void 0===o?void 0:o.headline,url:null===(c=null===(r=this.content)||void 0===r?void 0:r.content)||void 0===c?void 0:c.getCanonicalUrl(this)})}}]),n}(k);S=Object(y.b)([v.Component],S);e.a=S},1028:function(t,e,n){"use strict";n(8),n(11);var o=n(3),r=n(4),c=n(6),l=n(7),d=n(2),y=(n(71),n(25),n(14),n(37),n(76),n(23),n(27),n(59),n(0)),v=n(1),O=n(20),f=(n(103),n(436)),j=n(176),h=n(431),m=(n(41),n(31),n(52),n(29),n(53),n(28),n(63)),P=n(47),w=n(596),A=n(635);function T(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return D(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,r=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw r}}}}function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var k,J,S=function(t){var e=function(){function e(){Object(o.a)(this,e)}return Object(r.a)(e,[{key:"serialize",value:function(t){return P.a.serializeObject(t)}},{key:"deserialize",value:function(e){var n,o,r=[],c=T(e);try{for(c.s();!(o=c.n()).done;){var l=o.value;if((l.fetcherName||l.name)&&void 0!==l.status&&l.errors)r.push(P.a.deserializeObject(l,m.b));else{var d=(null===(n=(l=Object(w.a)(l)).meta)||void 0===n?void 0:n.componentType)||!1,y=Object(A.a)(d);d&&y?r.push(P.a.deserializeObject(l,y)):t===m.a&&m.d.isObjectComponent(l)?r.push(P.a.deserializeObject(l,m.d)):t===m.a&&m.c.isListingComponent(l)?r.push(P.a.deserializeObject(l,m.c)):r.push(P.a.deserializeObject(l,t))}}}catch(t){c.e(t)}finally{c.f()}return r}}]),e}();return e=Object(y.b)([v.JsonConverter],e)};function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var C=function(t){Object(c.a)(n,t);var e=x(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).pageType=null,t.id=null,t.queryParams=null,t.meta=null,t.header=[],t.components=[],t.footer=[],t.debug=null,t.isSeamless=!1,t}return Object(r.a)(n,[{key:"content",get:function(){return null}},{key:"getComponentByName",value:function(t){var component=null;return void 0!==this.components&&(component=this.components.find((function(component){var e;return(null===(e=component.meta)||void 0===e?void 0:e.componentName)===t}))),component||null}},{key:"getPageData",value:function(){var t;return{ads:this.getAdVars(),edition:null===(t=this.meta)||void 0===t?void 0:t.edition,pageType:this.pageType,tracking:this.getTrackingVars()}}}]),n}(n(119).a);Object(y.b)([Object(v.JsonProperty)("pageType",v.Any,!0),Object(y.d)("design:type",String)],C.prototype,"pageType",void 0),Object(y.b)([Object(v.JsonProperty)("id",v.Any,!0),Object(y.d)("design:type",String)],C.prototype,"id",void 0),Object(y.b)([Object(v.JsonProperty)("queryParams",v.Any,!0),Object(y.d)("design:type",Object)],C.prototype,"queryParams",void 0),Object(y.b)([Object(v.JsonProperty)("meta",h.a,!0),Object(y.d)("design:type","function"==typeof(k=void 0!==h.a&&h.a)?k:Object)],C.prototype,"meta",void 0),Object(y.b)([Object(v.JsonProperty)("header",S(j.a),!0),Object(y.d)("design:type",Array)],C.prototype,"header",void 0),Object(y.b)([Object(v.JsonProperty)("components",S(j.a),!0),Object(y.d)("design:type",Array)],C.prototype,"components",void 0),Object(y.b)([Object(v.JsonProperty)("footer",S(j.a),!0),Object(y.d)("design:type",Array)],C.prototype,"footer",void 0),Object(y.b)([Object(v.JsonProperty)("debug",f.a,!0),Object(y.d)("design:type","function"==typeof(J=void 0!==f.a&&f.a)?J:Object)],C.prototype,"debug",void 0),C=Object(y.b)([Object(v.JsonObject)("Core.Page.AbstractPage")],C);var R,I=n(637),U=n(1177),$=n(136);function B(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var N=function(t){Object(c.a)(n,t);var e=B(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).meta=null,t}return Object(r.a)(n,[{key:"content",get:function(){throw new Error("Method not implemented.")}},{key:"ricochetCollections",get:function(){var component=this.getComponentByName("ricochet-collections");return!component||component instanceof I.a||(component=P.a.deserializeObject(component,I.a)),component}},{key:"getTrackingVars",value:function(){var t,e,n,o,r,c,l,d,y={collectionId:[(null===(t=this.meta)||void 0===t?void 0:t.primaryCollection)?this.meta.primaryCollection.id:""],contentId:this.id,contentType:null===(e=this.meta)||void 0===e?void 0:e.typeName,siteEdition:(null===(n=this.meta)||void 0===n?void 0:n.edition)?this.meta.edition:"",siteSection:(null===(o=this.meta)||void 0===o?void 0:o.section)?this.meta.section:"",tagSlugs:(null===(r=this.meta)||void 0===r?void 0:r.tags)?this.meta.tags.map((function(t){return t.slug})):[""],topicId:(null===(c=this.meta)||void 0===c?void 0:c.topics)?this.meta.topics.map((function(t){return t.id})):[""],topicName:(null===(l=this.meta)||void 0===l?void 0:l.topics)?this.meta.topics.map((function(t){return t.name.toLowerCase()})):[""],topicSlugs:(null===(d=this.meta)||void 0===d?void 0:d.topics)?this.meta.topics.map((function(t){return t.slug})):[""]};return y}},{key:"getPreferredDate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.meta.displayDateUpdated?this.meta.displayDateUpdated.getJsDate():null,n=this.meta.displayDatePublished?this.meta.displayDatePublished.getJsDate():null,o=this.meta.dateUpdated?this.meta.dateUpdated.getJsDate():null,r=this.meta.datePublished?this.meta.datePublished.getJsDate():null;return("updated"===t?e||o||n||r:"created"===t?n||r||e||o:e&&n?e>=n?e:n:e||n||o||r)||new Date}},{key:"getSeoTags",value:function(){var t,e,n,o,r,c,l,d,y,v,f,j,h,m,P,w,A,T,D,k,J,S,x,C;return{description:(null===(t=this.meta)||void 0===t?void 0:t.seoMetaDescription)||(null===(e=this.meta)||void 0===e?void 0:e.description),title:(null===(n=this.meta)||void 0===n?void 0:n.titleTag)||(null===(o=this.meta)||void 0===o?void 0:o.title),url:void 0,jsonLd:void 0,articleTier:"free",articlePublisher:null===(r=null==O?void 0:O.socialUrls)||void 0===r?void 0:r.facebook,ogDescription:(null===(c=this.meta)||void 0===c?void 0:c.seoOgDescription)||(null===(l=this.meta)||void 0===l?void 0:l.seoMetaDescription)||(null===(d=this.meta)||void 0===d?void 0:d.description),ogImage:(null===(y=this.meta)||void 0===y?void 0:y.seoOgImage)||(null===(v=this.meta)||void 0===v?void 0:v.image),ogTitle:(null===(f=this.meta)||void 0===f?void 0:f.seoOgTitle)||(null===(j=this.meta)||void 0===j?void 0:j.titleTag)||(null===(h=this.meta)||void 0===h?void 0:h.title),ogUrl:void 0,twitterCreator:null===(m=this.meta)||void 0===m?void 0:m.seoTwitterCreator,twitterDescription:(null===(P=this.meta)||void 0===P?void 0:P.seoTwitterDescription)||(null===(w=this.meta)||void 0===w?void 0:w.seoMetaDescription)||(null===(A=this.meta)||void 0===A?void 0:A.description),twitterImage:(null===(T=this.meta)||void 0===T?void 0:T.seoTwitterImage)||(null===(D=this.meta)||void 0===D?void 0:D.image),twitterSite:(null===(k=this.meta)||void 0===k?void 0:k.seoTwitterSite)||(null===(J=this.meta)||void 0===J?void 0:J.seoTwitterCreator),twitterTitle:(null===(S=this.meta)||void 0===S?void 0:S.seoTwitterTitle)||(null===(x=this.meta)||void 0===x?void 0:x.titleTag)||(null===(C=this.meta)||void 0===C?void 0:C.title),twitterUrl:void 0}}},{key:"getAdVars",value:function(){var t,e,n,o,r,c,l,d,y,v,O,f,j,h,m,P,w,A,T,D,k,J=(null===(e=null===(t=this.meta)||void 0===t?void 0:t.topics)||void 0===e?void 0:e[0])?this.meta.topics[0].getPathSlugs():[];return{slotVars:{topics:J.join("/")},targeting:{cid:(null===(n=null==this?void 0:this.meta)||void 0===n?void 0:n.slug)&&(null===(o=null==this?void 0:this.meta)||void 0===o?void 0:o.id)?"".concat(null===(r=this.meta)||void 0===r?void 0:r.slug,",").concat(null===(c=this.meta)||void 0===c?void 0:c.id):(null===(l=this.meta)||void 0===l?void 0:l.slug)||(null===(d=this.meta)||void 0===d?void 0:d.id)||null,collection:(null===(v=null===(y=this.meta)||void 0===y?void 0:y.primaryCollection)||void 0===v?void 0:v.slug)||"",edition:(null===(O=this.meta)||void 0===O?void 0:O.edition)||"",section:(null===(f=this.meta)||void 0===f?void 0:f.section)||"",pageType:(null===(j=this.meta)||void 0===j?void 0:j.pageType)||"",ptype:(null===(h=this.meta)||void 0===h?void 0:h.pageType)||"",pid:null===(P=null===(m=this.meta)||void 0===m?void 0:m.slug)||void 0===P?void 0:P.replace(/-/g," "),tag:(null===(A=null===(w=this.meta)||void 0===w?void 0:w.tags)||void 0===A?void 0:A.map((function(t){return t.slug})).join(","))||"",topic:(null==J?void 0:J.join(","))||"",ptopic:(null===(T=this.meta)||void 0===T?void 0:T.topics)?$.a.getPrimaryTopicSlug(this.meta.topics):"",type:(null===(D=this.meta)||void 0===D?void 0:D.typeName)||""},enabled:!(null===(k=this.meta)||void 0===k?void 0:k.suppressAds)}}},{key:"getJsonLdMarkup",value:function(t){return[]}}]),n}(C);Object(y.b)([Object(v.JsonProperty)("meta",U.a,!0),Object(y.d)("design:type","function"==typeof(R=void 0!==U.a&&U.a)?R:Object)],N.prototype,"meta",void 0),N=Object(y.b)([Object(v.JsonObject)("Page")],N);e.a=N},1177:function(t,e,n){"use strict";n(8),n(11);var o,r,c,l,d,y,v,O,f,j,h=n(4),m=n(3),P=n(6),w=n(7),A=n(2),T=(n(14),n(37),n(0)),D=n(1),k=n(431),J=n(192),S=n(58),x=n(34),C=n(599),R=n(96),I=n(35);function U(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(A.a)(t);if(e){var r=Object(A.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(w.a)(this,n)}}var $=function(t){Object(P.a)(n,t);var e=U(n);function n(){var t;return Object(m.a)(this,n),(t=e.apply(this,arguments)).brand=null,t.contentType=null,t.datePublished=null,t.dateUpdated=null,t.description=null,t.displayDatePublished=null,t.displayDateUpdated=null,t.id=null,t.image=null,t.noIndex=!1,t.pageType=null,t.primaryCollection=null,t.publishDate=null,t.section=null,t.seoMetaDescription=null,t.seoOgDescription=null,t.seoOgImage=null,t.seoOgTitle=null,t.seoTwitterCard=null,t.seoTwitterCreator=null,t.seoTwitterDescription=null,t.seoTwitterImage=null,t.seoTwitterImageAlt=null,t.seoOgImageHeight=null,t.seoOgImageWidth=null,t.seoTwitterTitle=null,t.seoTwitterSite=null,t.site=null,t.slug=null,t.suppressAds=!1,t.tags=[],t.title=null,t.titleTag=null,t.topics=[],t.type=null,t.typeName=null,t}return Object(h.a)(n)}(k.a);Object(T.b)([Object(D.JsonProperty)("brand",D.Any,!0),Object(T.d)("design:type",String)],$.prototype,"brand",void 0),Object(T.b)([Object(D.JsonProperty)("contentType",D.Any,!0),Object(T.d)("design:type",String)],$.prototype,"contentType",void 0),Object(T.b)([Object(D.JsonProperty)("datePublished",S.a,!0),Object(T.d)("design:type","function"==typeof(o=void 0!==S.a&&S.a)?o:Object)],$.prototype,"datePublished",void 0),Object(T.b)([Object(D.JsonProperty)("dateUpdated",S.a,!0),Object(T.d)("design:type","function"==typeof(r=void 0!==S.a&&S.a)?r:Object)],$.prototype,"dateUpdated",void 0),Object(T.b)([Object(D.JsonProperty)("description",D.Any,!0),Object(T.d)("design:type",String)],$.prototype,"description",void 0),Object(T.b)([Object(D.JsonProperty)("displayDatePublished",S.a,!0),Object(T.d)("design:type","function"==typeof(c=void 0!==S.a&&S.a)?c:Object)],$.prototype,"displayDatePublished",void 0),Object(T.b)([Object(D.JsonProperty)("displayDateUpdated",S.a,!0),Object(T.d)("design:type","function"==typeof(l=void 0!==S.a&&S.a)?l:Object)],$.prototype,"displayDateUpdated",void 0),Object(T.b)([Object(D.JsonProperty)("id",D.Any,!0),Object(T.d)("design:type",String)],$.prototype,"id",void 0),Object(T.b)([Object(D.JsonProperty)("image",x.a,!0),Object(T.d)("design:type","function"==typeof(d=void 0!==x.a&&x.a)?d:Object)],$.prototype,"image",void 0),Object(T.b)([Object(D.JsonProperty)("noIndex",D.Any,!0),Object(T.d)("design:type",Boolean)],$.prototype,"noIndex",void 0),Object(T.b)([Object(D.JsonProperty)("pageType",D.Any,!0),Object(T.d)("design:type",String)],$.prototype,"pageType",void 0),Object(T.b)([Object(D.JsonProperty)("primaryCollection",J.a,!0),Object(T.d)("design:type","function"==typeof(y=void 0!==J.a&&J.a)?y:Object)],$.prototype,"primaryCollection",void 0),Object(T.b)([Object(D.JsonProperty)("publishDate",S.a,!0),Object(T.d)("design:type","function"==typeof(v=void 0!==S.a&&S.a)?v:Object)],$.prototype,"publishDate",void 0),Object(T.b)([Object(D.JsonProperty)("section",D.Any,!0),Object(T.d)("design:type",String)],$.prototype,"section",void 0),Object(T.b)([Object(D.JsonProperty)("seoMetaDescription",D.Any,!0),Object(T.d)("design:type",String)],$.prototype,"seoMetaDescription",void 0),Object(T.b)([Object(D.JsonProperty)("seoOgDescription",D.Any,!0),Object(T.d)("design:type",String)],$.prototype,"seoOgDescription",void 0),Object(T.b)([Object(D.JsonProperty)("seoOgImage",x.a,!0),Object(T.d)("design:type","function"==typeof(O=void 0!==x.a&&x.a)?O:Object)],$.prototype,"seoOgImage",void 0),Object(T.b)([Object(D.JsonProperty)("seoOgTitle",D.Any,!0),Object(T.d)("design:type",String)],$.prototype,"seoOgTitle",void 0),Object(T.b)([Object(D.JsonProperty)("seoTwitterCard",D.Any,!0),Object(T.d)("design:type",String)],$.prototype,"seoTwitterCard",void 0),Object(T.b)([Object(D.JsonProperty)("seoTwitterCreator",D.Any,!0),Object(T.d)("design:type",String)],$.prototype,"seoTwitterCreator",void 0),Object(T.b)([Object(D.JsonProperty)("seoTwitterDescription",D.Any,!0),Object(T.d)("design:type",String)],$.prototype,"seoTwitterDescription",void 0),Object(T.b)([Object(D.JsonProperty)("seoTwitterImage",D.Any,!0),Object(T.d)("design:type","function"==typeof(f=void 0!==x.a&&x.a)?f:Object)],$.prototype,"seoTwitterImage",void 0),Object(T.b)([Object(D.JsonProperty)("seoTwitterImageAlt",D.Any,!0),Object(T.d)("design:type","function"==typeof(j=void 0!==x.a&&x.a)?j:Object)],$.prototype,"seoTwitterImageAlt",void 0),Object(T.b)([Object(D.JsonProperty)("seoOgImageHeight",D.Any,!0),Object(T.d)("design:type",String)],$.prototype,"seoOgImageHeight",void 0),Object(T.b)([Object(D.JsonProperty)("seoOgImageWidth",D.Any,!0),Object(T.d)("design:type",String)],$.prototype,"seoOgImageWidth",void 0),Object(T.b)([Object(D.JsonProperty)("seoTwitterTitle",D.Any,!0),Object(T.d)("design:type",String)],$.prototype,"seoTwitterTitle",void 0),Object(T.b)([Object(D.JsonProperty)("seoTwitterSite",D.Any,!0),Object(T.d)("design:type",String)],$.prototype,"seoTwitterSite",void 0),Object(T.b)([Object(D.JsonProperty)("site",D.Any,!0),Object(T.d)("design:type",String)],$.prototype,"site",void 0),Object(T.b)([Object(D.JsonProperty)("slug",D.Any,!0),Object(T.d)("design:type",String)],$.prototype,"slug",void 0),Object(T.b)([Object(D.JsonProperty)("suppressAds",D.Any,!0),Object(T.d)("design:type",Boolean)],$.prototype,"suppressAds",void 0),Object(T.b)([Object(D.JsonProperty)("tags",I.a.array(C.a),!0),Object(T.d)("design:type",Array)],$.prototype,"tags",void 0),Object(T.b)([Object(D.JsonProperty)("title",D.Any,!0),Object(T.d)("design:type",String)],$.prototype,"title",void 0),Object(T.b)([Object(D.JsonProperty)("titleTag",D.Any,!0),Object(T.d)("design:type",String)],$.prototype,"titleTag",void 0),Object(T.b)([Object(D.JsonProperty)("topics",I.a.array(R.c),!0),Object(T.d)("design:type",Array)],$.prototype,"topics",void 0),Object(T.b)([Object(D.JsonProperty)("type",D.Any,!0),Object(T.d)("design:type",String)],$.prototype,"type",void 0),Object(T.b)([Object(D.JsonProperty)("typeName",D.Any,!0),Object(T.d)("design:type",String)],$.prototype,"typeName",void 0),$=Object(T.b)([Object(D.JsonObject)("Meta")],$),e.a=$}}]);
//# sourceMappingURL=e622ed3.js.map