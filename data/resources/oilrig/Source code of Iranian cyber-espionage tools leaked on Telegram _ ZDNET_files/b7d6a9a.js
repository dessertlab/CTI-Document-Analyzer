(window.webpackJsonp=window.webpackJsonp||[]).push([[2,44],{1034:function(t,e,r){var content=r(1062);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("e5b95d36",content,!0,{sourceMap:!1})},1039:function(t,e,r){"use strict";var o=r(5),n=(r(25),r(11),r(19),r(14),r(18),r(21),r(17),r(22),r(3)),c=r(4),d=r(6),l=r(7),f=r(2),v=(r(655),r(75),r(8),r(31),r(27),r(59),r(325),r(0)),m=r(9),h=r(164),O=r(198);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,o=Object(f.a)(t);if(e){var n=Object(f.a)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return Object(l.a)(this,r)}}var j=function(t){Object(d.a)(r,t);var e=y(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"beforeCreate",value:function(){this.$store.commit("addAffiliateDisclosure")}},{key:"beforeDestroy",value:function(){this.$store.commit("removeAffiliateDisclosure")}}]),r}(m.Vue);j=Object(v.b)([m.Component],j);r(36),r(43),r(29),r(28),r(239),r(165),r(241),r(120);var k=r(142),C=r(15),P=r(20),w=r(428),D=(r(153),r(122),r(10)),I=r(275),U=new C.a("commerceLinks"),S="__COM_CLICK_ID__",x=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:S,o=t;if(t.includes(r)){var n=new RegExp(r,"g");return t.replace(n,e)}return o},_=function(t,e){var r=t;try{U.log("Original commerce URL: ",r);var o=t.includes("amazon.com"),n=t.startsWith("https://amazon")||t.startsWith("https://www.amazon"),c=function(t){var e="";return t.device===D.b.Desktop&&(e="dtp"),t.device===D.b.Mobile&&(e="mwb"),t.isAmp&&(e="amp"),e}(e),d="zd-"+S+"-"+c,l=!1;if((t=n?I.a+t:t).includes(I.b.subIdValue)&&(t=t.replace(I.b.subIdValue,d),l=!0),t.includes("publisher_slug=cnet")&&(t=t.replace("publisher_slug=cnet","publisher_slug=zdnet")),t.includes(I.b.newSubIdValue)&&(t=t.replace(I.b.newSubIdValue,d),l=!0),t.includes(I.b.assetUrl)){var f=encodeURIComponent("https://www.zdnet.com"+e.canonicalPath);t=t.replace(I.b.assetUrl,f)}if(t.includes(I.b.assetName)){var v=encodeURIComponent(e.articleName);t=t.replace(I.b.assetName,v)}var m=new URL(t),h=m.searchParams;if(o){var O=S+"|"+e.guid+"|"+c;h.delete("tag"),h.append("tag","zd-buy-button-20"),h.delete("ascsubtag"),h.append("ascsubtag",O),l=!0}var y=I.c[m.host];!l&&y&&h.append(y,d);var j=m.toString();return U.log("Modified Commerce URL: ",j),j}catch(t){return U.error("could not construct URL: ",t),r}},R=new C.a("commerceModifierMixin"),L=function(t){return{data:function(){return{modifiedCommerceUrl:this[t],_uuid:"",stateMappings:{isAmp:this.$store.getters["format/isAmp"],device:this.$store.getters.device,guid:this.$store.getters["tracking/viewGuid"],canonicalPath:this.$store.getters["routeHistory/getCurrentPath"],articleName:this.$store.getters["tracking/data"].articleTitle,articleId:this.$store.getters["tracking/data"].articleId}}},methods:{injectCorrelationId:function(t){var e,r,o=this;this._uuid=Object(k.v4)();var n=this.$context.context.$cookie.get("chsn_cnsnt");R.info(n);var c=n&&n.includes("C0002");if(this.clickId=c?null===(e=this._uuid)||void 0===e?void 0:e.replaceAll("-",""):null===(r=this.stateMappings)||void 0===r||null===(r=r.articleId)||void 0===r?void 0:r.replaceAll("-",""),this.modifiedCommerceUrl=x(t,this.clickId),!c){var d=new URL(this.modifiedCommerceUrl),l=d.searchParams;l.forEach((function(t,e){t.includes(o.clickId)&&!t.endsWith("-oo")&&(l.delete(e),l.append(e,t+"-oo"),o.modifiedCommerceUrl=d.toString())}))}setTimeout((function(){return o.resetCommerceUrl(o.modifiedCommerceUrl)}),500)},ampInjectCorrelationId:function(t){try{var e;this._uuid=Object(k.v4)(),this.clickId=null===(e=this._uuid)||void 0===e?void 0:e.replaceAll("-",""),t=x(t,this.clickId);var r=new URL(t),o=r.searchParams;o.append("c_correlation_id",this.clickId),o.append("c_tenant_id",P.cohesion.tagular.sourceKey),this.modifiedCommerceUrl=r.toString()}catch(e){R.log("invalid url ".concat(t)),this.modifiedCommerceUrl=t}return this.modifiedCommerceUrl},getAmpCorrelationId:function(){return this.clickId},getAmpOutboundUrl:function(){return this.modifiedCommerceUrl},resetCommerceUrl:function(t){this.modifiedCommerceUrl=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:S,o=t;if(t.includes(e)){var n=new RegExp(e,"g");return t.replace(n,r)}return o}(t,this.clickId)}},created:function(){this.stateMappings.isAmp&&(this.modifiedCommerceUrl=this.ampInjectCorrelationId(_(this[t],this.stateMappings)))},beforeMount:function(){this.modifiedCommerceUrl=_(this[t],this.stateMappings)},computed:{trackingData:function(){return this.$store.getters["tracking/data"]}},watch:{trackingData:function(){this.modifiedCommerceUrl=_(this[t],this.stateMappings)}}}};function T(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function M(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?T(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):T(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function N(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,o=Object(f.a)(t);if(e){var n=Object(f.a)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return Object(l.a)(this,r)}}var B,A=function(t){Object(d.a)(r,t);var e=N(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"buttonClasses",get:function(){return this.isCreditCard?"c-creditCardLink g-text-bold":"c-commerceBuyButton c-button-primary-".concat(this.buttonTheme," g-text-bold u-flexbox-justifyCenter u-flexbox-alignCenter")}},{key:"trackingData",get:function(){var t,e={formatType:this.formatType,formatSubtype:this.formatSubtype,location:this.locationTracking,text:this.buttonText||null,pageId:this.$store.getters["tracking/dataByKey"]("articleId")||null,position:this.buttonPosition||1,price:(Number.isInteger(this.buttonPrice)?this.buttonPrice:parseInt(this.buttonPrice,10))||0,variant:this.variantTracking||null,productId:(null===(t=this.productId)||void 0===t?void 0:t.toString())||null,name:this.productName||null};return this.trackClickData&&(e=M(M({},e),this.trackClickData)),e}},{key:"customDimensionsTrackingData",get:function(){var data=[];if(this.shortcodeId&&data.push({key:"shortcodeId",value:this.shortcodeId}),this.variantTracking){var t=this.variantTracking.split("|")[0].replaceAll("-","").replaceAll("commerce","");t&&data.push({key:"shortcodeType",value:t})}return this.buttonUrl&&data.push({key:"rawUrl",value:this.buttonUrl}),this.vendorName&&data.push({key:"vendor",value:this.vendorName}),data.length>0?data:null}},{key:"trackClick",value:function(){"function"==typeof window.tagular&&window.tagular("beam",{"@type":"redventures.ecommerce.v1.ProductClicked",actionOutcome:"EXTERNALLINK",outboundUrl:this.modifiedCommerceUrl,product:this.trackingData,correlationId:this._uuid,customDimensions:this.customDimensionsTrackingData}),this.dapiDecisionId&&this.dapiOutcomeName&&this.$dapi.sendDapiOutcome(this.dapiDecisionId,this.dapiOutcomeName)}},{key:"beforeDestroy",value:function(){this.productObserver&&this.productObserver.destroy()}},{key:"created",value:function(){var t=this.isLink?{cm02:!0}:{cm01:!0};this.$store.dispatch("tracking/setPageComponents",t)}},{key:"mounted",value:function(){var t=this;this.fireProductViewed&&(this.productObserver=new O.a({rootMargin:"0px",el:this.$el,threshold:1},(function(data){t.productObserver.destroy(),"function"==typeof window.tagular&&window.tagular("beam",{"@type":"redventures.ecommerce.v1.ProductViewed",product:t.trackingData})})))}}]),r}(Object(m.mixins)(j,h.a));Object(v.b)([Object(m.Prop)({default:""}),Object(v.d)("design:type",String)],A.prototype,"buttonText",void 0),Object(v.b)([Object(m.Prop)({default:""}),Object(v.d)("design:type",String)],A.prototype,"buttonUrl",void 0),Object(v.b)([Object(m.Prop)({default:"",type:[String,Number]}),Object(v.d)("design:type",Object)],A.prototype,"buttonPrice",void 0),Object(v.b)([Object(m.Prop)({default:0,type:Number}),Object(v.d)("design:type",Number)],A.prototype,"buttonPosition",void 0),Object(v.b)([Object(m.Prop)({default:void 0}),Object(v.d)("design:type",Number)],A.prototype,"productId",void 0),Object(v.b)([Object(m.Prop)({default:""}),Object(v.d)("design:type",String)],A.prototype,"productName",void 0),Object(v.b)([Object(m.Prop)({default:""}),Object(v.d)("design:type",String)],A.prototype,"variantTracking",void 0),Object(v.b)([Object(m.Prop)({default:"LINKS"}),Object(v.d)("design:type",String)],A.prototype,"locationTracking",void 0),Object(v.b)([Object(m.Prop)({default:"BUTTON"}),Object(v.d)("design:type",String)],A.prototype,"formatType",void 0),Object(v.b)([Object(m.Prop)({default:null}),Object(v.d)("design:type",String)],A.prototype,"formatSubtype",void 0),Object(v.b)([Object(m.Prop)({default:"medium"}),Object(v.d)("design:type",String)],A.prototype,"buttonTheme",void 0),Object(v.b)([Object(m.Prop)({default:null}),Object(v.d)("design:type",Object)],A.prototype,"trackClickData",void 0),Object(v.b)([Object(m.Prop)({default:!1}),Object(v.d)("design:type",Boolean)],A.prototype,"isLink",void 0),Object(v.b)([Object(m.Prop)({default:!1}),Object(v.d)("design:type",Boolean)],A.prototype,"fireProductViewed",void 0),Object(v.b)([Object(m.Prop)({default:!1}),Object(v.d)("design:type",Boolean)],A.prototype,"isCreditCard",void 0),Object(v.b)([Object(m.Prop)({default:""}),Object(v.d)("design:type",String)],A.prototype,"dapiDecisionId",void 0),Object(v.b)([Object(m.Prop)({default:""}),Object(v.d)("design:type",String)],A.prototype,"dapiOutcomeName",void 0),Object(v.b)([Object(m.Prop)({default:null}),Object(v.d)("design:type",String)],A.prototype,"vendorName",void 0),Object(v.b)([Object(m.Prop)({default:null}),Object(v.d)("design:type",String)],A.prototype,"shortcodeId",void 0),Object(v.b)([Object(m.Prop)({default:null}),Object(v.d)("design:type",String)],A.prototype,"rewardId",void 0),Object(v.b)([Object(m.Getter)("guid"),Object(v.d)("design:type",String)],A.prototype,"guid",void 0);var $=A=Object(v.b)([m.Component,(B="buttonUrl",Object(w.a)(L(B)))],A),z=(r(1061),r(16)),component=Object(z.a)($,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.isAmp?e("a",{class:Object(o.a)({},t.buttonClasses,!t.isLink),attrs:{href:t.modifiedCommerceUrl,rel:"noopener noreferrer nofollow",target:"_blank","data-vars-product-name":t.trackingData.name,"data-vars-product-brand":t.trackingData.brand,"data-vars-product-id":t.trackingData.productId,"data-vars-product-price":t.buttonPrice,"data-vars-product-text":t.trackingData.text,"data-vars-outbound-url":t.modifiedCommerceUrl,"data-vars-product-location":t.trackingData.location,"data-vars-product-position":t.trackingData.position,"data-vars-product-format-type":t.trackingData.formatType,"data-vars-product-format-subtype":t.trackingData.formatSubtype,"data-vars-product-page-id":t.trackingData.pageId,"data-vars-product-variant":t.trackingData.variant,"data-vars-product-sku":t.trackingData.sku,"data-vars-product-upc":t.trackingData.upc,"data-vars-custom-dimensions":JSON.stringify(t.customDimensionsTrackingData),"data-vars-correlation-id":t.getAmpCorrelationId()}},[t._t("default",(function(){return[e("span",{domProps:{innerHTML:t._s(t.buttonText)}}),t.isCreditCard&&!t.isLink?[e("svg",{staticClass:"c-creditCardLink_share"},[e("use",{attrs:{"xlink:href":"#cc-share","aria-hidden":"false"}})])]:t._e()]}))],2):e("a",{class:Object(o.a)({},t.buttonClasses,!t.isLink),attrs:{href:t.modifiedCommerceUrl,"data-chsn-reward-click":t.rewardId,rel:"noopener noreferrer nofollow",target:"_blank"},on:{mousedown:function(e){return t.injectCorrelationId(t.modifiedCommerceUrl)},click:t.trackClick}},[t._t("default",(function(){return[e("span",{domProps:{innerHTML:t._s(t.buttonText)}}),t.isCreditCard&&!t.isLink?[e("svg",{staticClass:"c-creditCardLink_share"},[e("use",{attrs:{"xlink:href":"#cc-share","aria-hidden":"false"}})])]:t._e()]}))],2)}),[],!1,null,null,null);e.a=component.exports},1044:function(t,e,r){"use strict";r(11);var o=r(3),n=r(4),c=r(6),d=r(7),l=r(2),f=(r(19),r(36),r(25),r(435),r(41),r(8),r(31),r(0)),v=r(9),m=r(164),h=r(1039),O=r(1148);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,o=Object(l.a)(t);if(e){var n=Object(l.a)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return Object(d.a)(this,r)}}var j=function(t){Object(c.a)(r,t);var e=y(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(n.a)(r,[{key:"commerceData",get:function(){return this.api?JSON.parse(this.api):this.listicle||{}}},{key:"image",get:function(){var t,e;return(null===(e=null===(t=this.commerceData)||void 0===t?void 0:t.imageGroup)||void 0===e?void 0:e.imageData)||null}},{key:"imageCredit",get:function(){var t,e,r,o,n;return null!==(n=null!==(e=null===(t=this.commerceData)||void 0===t?void 0:t.imageCreditOverride)&&void 0!==e?e:null===(o=null===(r=this.commerceData)||void 0===r?void 0:r.imageGroup)||void 0===o?void 0:o.imageCredit)&&void 0!==n?n:""}},{key:"creditCard",get:function(){var t;return(null===(t=this.commerceData)||void 0===t?void 0:t.creditCardData)||null}},{key:"creditCardUrl",get:function(){var t,e,r,o,n,c,d,l=["american express","chase","creditcards.com","bankrate credit cards","citi","capital one","u.s. bank"];if(!l.includes(null===(e=null===(t=this.manualOffer)||void 0===t?void 0:t.offerMerchant)||void 0===e?void 0:e.toLowerCase())&&!l.includes(null===(n=null===(o=null===(r=this.preferredResellers)||void 0===r?void 0:r[0])||void 0===o?void 0:o.name)||void 0===n?void 0:n.toLowerCase()))return(null===(d=null===(c=this.creditCard)||void 0===c?void 0:c.attributes)||void 0===d?void 0:d.link)||null}},{key:"creditCardImage",get:function(){var t,e,r;if(null===(r=null===(e=null===(t=this.creditCard)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.image)||void 0===r?void 0:r.url)return"https://cdn.prodstatic.com/shared/images/cards/500x315/"+this.creditCard.attributes.image.url}},{key:"creditCardTermsUrl",get:function(){var t,e;if(this.isAmericanExpress)return(null===(e=null===(t=this.creditCard)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.termsAndConditionsUrl)||null}},{key:"isAmericanExpress",get:function(){var t,e,r,o,n;return"american express"===(null===(e=null===(t=this.manualOffer)||void 0===t?void 0:t.offerMerchant)||void 0===e?void 0:e.toLowerCase())||"american express"===(null===(n=null===(o=null===(r=this.preferredResellers)||void 0===r?void 0:r[0])||void 0===o?void 0:o.name)||void 0===n?void 0:n.toLowerCase())}},{key:"techProd",get:function(){var t;return(null===(t=this.commerceData)||void 0===t?void 0:t.techProd)||null}},{key:"usePricing",get:function(){var t,e,r;return(null===(t=this.commerceData)||void 0===t?void 0:t.usePricing)&&(null===(r=null===(e=this.techProd)||void 0===e?void 0:e.resellers)||void 0===r?void 0:r.length)>0}},{key:"preferredResellers",get:function(){var t;if(this.usePricing)return O.a.preferredResellers(null===(t=this.techProd)||void 0===t?void 0:t.resellers,3)}},{key:"productFamily",get:function(){var t,e;return(null===(e=null===(t=this.techProd)||void 0===t?void 0:t.family)||void 0===e?void 0:e[0])||{uuid:"",name:""}}},{key:"manualOffers",get:function(){var t,e=null===(t=this.commerceData)||void 0===t?void 0:t.merchantOffers;return e&&0!==(null==e?void 0:e.length)?null==e?void 0:e.slice(0,3):null}},{key:"manualOffer",get:function(){var t,e,r,o,n,c,d,l,f;return null!==(e=null===(t=this.manualOffers)||void 0===t?void 0:t[0])&&void 0!==e?e:{url:null===(r=this.commerceData)||void 0===r?void 0:r.url,offerMerchant:null===(o=this.commerceData)||void 0===o?void 0:o.offerMerchant,offerPrice:null===(n=this.commerceData)||void 0===n?void 0:n.offerPrice,rawUrl:null===(c=this.commerceData)||void 0===c?void 0:c.rawUrl,useMonetization:null===(d=this.commerceData)||void 0===d?void 0:d.useMonetization,monetizedUrl:null===(l=this.commerceData)||void 0===l?void 0:l.monetizedUrl,monetizationStatus:null===(f=this.commerceData)||void 0===f?void 0:f.monetizationStatus}}},{key:"merchantUrl",get:function(){var t;return(null===(t=this.manualOffer)||void 0===t?void 0:t.url)||null}},{key:"hasMerchantOffer",get:function(){var t,e;return!!(null===(t=this.manualOffer)||void 0===t?void 0:t.url)&&!!(null===(e=this.manualOffer)||void 0===e?void 0:e.offerMerchant)}},{key:"winningSellerUrl",get:function(){var t,e;return this.creditCardUrl||(null===(e=null===(t=this.preferredResellers)||void 0===t?void 0:t[0])||void 0===e?void 0:e.url)||this.merchantUrl||null}},{key:"winningSellerPrice",get:function(){var t,e,r;return(null===(e=null===(t=this.preferredResellers)||void 0===t?void 0:t[0])||void 0===e?void 0:e.price)/100||parseInt(null===(r=this.manualOffer)||void 0===r?void 0:r.offerPrice,10)||0}},{key:"winningSellerName",get:function(){var t,e,r;return(null===(e=null===(t=this.preferredResellers)||void 0===t?void 0:t[0])||void 0===e?void 0:e.name)||(null===(r=this.manualOffer)||void 0===r?void 0:r.offerMerchant)||null}},{key:"shortcodeId",get:function(){var t;return null===(t=this.commerceData)||void 0===t?void 0:t.uuid}},{key:"winningSellerTrackingData",get:function(){var t;return this.techProd&&(this.creditCardUrl||(null===(t=this.preferredResellers)||void 0===t?void 0:t[0]))?{productId:this.techProd.id,brand:this.techProd.manufacturer.name,name:this.techProd.product.name,sku:this.techProd.product.sku[0],upc:this.techProd.product.sku[0]}:this.hasMerchantOffer?{name:this.commerceData.hed}:void 0}},{key:"buttonText",value:function(t,e){return e?this.$t("buy_at",{price:this.formattedPrice(e),store:t}):t?this.$t("view_at_no_price",{store:t}):this.$t("view_now")}},{key:"formattedPrice",value:function(t){return this.$currency(t.toString(),"USD")}}]),r}(Object(v.mixins)(m.a));Object(f.b)([Object(v.Prop)({default:""}),Object(f.d)("design:type",String)],j.prototype,"api",void 0),Object(f.b)([Object(v.Prop)({default:void 0}),Object(f.d)("design:type",Object)],j.prototype,"listicle",void 0),Object(f.b)([Object(v.Prop)({default:!1}),Object(f.d)("design:type",Boolean)],j.prototype,"isBestList",void 0),Object(f.b)([Object(v.Prop)({default:!1}),Object(f.d)("design:type",Boolean)],j.prototype,"isCreditCard",void 0),Object(f.b)([Object(v.Prop)({default:!1}),Object(f.d)("design:type",Boolean)],j.prototype,"isListicleCtaTest",void 0),Object(f.b)([Object(v.Prop)({default:""}),Object(f.d)("design:type",String)],j.prototype,"dapiTestBucket",void 0),Object(f.b)([Object(v.Prop)({default:""}),Object(f.d)("design:type",String)],j.prototype,"dapiDecisionId",void 0),Object(f.b)([Object(v.Prop)({default:"",type:String}),Object(f.d)("design:type",String)],j.prototype,"rawUrl",void 0);var k=j=Object(f.b)([Object(v.Component)({name:"ShortcodeCommerceBase",components:{CommerceBuyButton:h.a}})],j),C=r(16),component=Object(C.a)(k,undefined,undefined,!1,null,null,null);e.a=component.exports},1061:function(t,e,r){"use strict";r(1034)},1062:function(t,e,r){var o=r(54)((function(i){return i[1]}));o.push([t.i,".c-commerceBuyButton{display:inline-flex;width:100%}.c-creditCardLink{display:inline-block;align-self:center;color:#006dff;width:100%}.c-creditCardLink svg{width:28px;height:20px;padding:0 0 5px 5px;vertical-align:middle;fill:#006dff}.c-creditCardLink:hover{color:#0058d5}.c-creditCardLink:hover svg{fill:#0058d5}",""]),o.locals={},t.exports=o},1148:function(t,e,r){"use strict";var o=r(32);r(238),r(41);e.a={preferredResellers:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return t&&0!==t.length?Object(o.a)(t).sort((function(a,b){return a.cpc>b.cpc?-1:a.cpc<b.cpc?1:0})).slice(0,e):null}}}}]);
//# sourceMappingURL=b7d6a9a.js.map