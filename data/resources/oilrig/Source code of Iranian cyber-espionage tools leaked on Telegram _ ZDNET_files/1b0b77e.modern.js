(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1001:function(e,t,o){"use strict";var r=o(4),n=(o(5),o(6),o(0)),c=o(2);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=class extends c.Vue{constructor(){super(...arguments),this.showExpanded=!1,this.loading=!0}toggle(){this.showExpanded=!this.showExpanded,this.showExpanded&&(this.loading=!0)}loaded(){this.loading=!1}get expandedImageUrl(){return this.image?this.$image(d(d({},this.image),{},{size:"expanded_image"})):null}get imageAlt(){return this.image.alt||this.image.filename}};Object(n.b)([Object(c.Prop)({default:null,type:Object}),Object(n.d)("design:type",Object)],m.prototype,"image",void 0),Object(n.b)([Object(c.Prop)({default:!1,type:Boolean}),Object(n.d)("design:type",Boolean)],m.prototype,"isLeftRailTemplate",void 0);var h=m=Object(n.b)([Object(c.Component)({components:{}})],m),f=(o(1036),o(10)),component=Object(f.a)(h,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"c-globalImageExpand"},[t("a",{staticClass:"o-button-secondary-invert c-globalImageExpand_button c-globalImageExpand_toggle",class:{"c-globalImageExpand_button-bestList":e.isLeftRailTemplate},on:{click:e.toggle}},[t("svg",[t("use",{attrs:{"xlink:href":"#expand"}})])]),e._v(" "),e.showExpanded?t("div",{staticClass:"c-globalImageExpand_overlay"},[t("style",{tag:"component"},[e._v("\n      /* stylelint-disable indentation */\n      html {\n      overflow: hidden;\n      height: 100%;\n      }\n      /* stylelint-enable indentation */\n    ")]),e._v(" "),t("div",{staticClass:"c-globalImageExpand_backgroundClose",on:{click:e.toggle}}),e._v(" "),t("div",{staticClass:"c-globalImageExpand_imageContainer"},[t("img",{staticClass:"c-globalImageExpand_image",class:{"c-globalImageExpand_image-loading":e.loading},attrs:{alt:e.imageAlt,src:e.expandedImageUrl},on:{load:e.loaded}}),e._v(" "),e.loading?e._e():t("a",{staticClass:"o-button-secondary-invert c-globalImageExpand_button c-globalImageExpand_close",class:{"c-globalImageExpand_button-bestList":e.isLeftRailTemplate},on:{click:e.toggle}},[t("svg",[t("use",{attrs:{"xlink:href":"#close"}})])])]),e._v(" "),e.loading?t("div",{staticClass:"c-globalImageExpand_loader"},[t("div",{staticClass:"c-globalImageExpand_loaderDot"}),e._v(" "),t("div",{staticClass:"c-globalImageExpand_loaderDot"}),e._v(" "),t("div",{staticClass:"c-globalImageExpand_loaderDot"})]):e._e()],1):e._e()])}),[],!1,null,null,null);t.a=component.exports},1036:function(e,t,o){"use strict";o(978)},1037:function(e,t,o){var r=o(30)((function(i){return i[1]}));r.push([e.i,".c-globalImageExpand_button{position:absolute;top:0;right:0;width:2rem;height:2rem;background:#20222a;display:flex;align-items:center;justify-content:center;animation:fadeIn .4s;cursor:pointer}.c-globalImageExpand_button svg{width:16px;height:16px}.c-globalImageExpand_button-bestList svg{fill:#ff435a}.c-globalImageExpand_overlay{animation:fadeIn .4s;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(8,10,18,.75);z-index:5999899;display:flex;align-content:center;justify-content:center;overflow:auto}.c-globalImageExpand_backgroundClose{position:absolute;top:0;left:0;right:0;bottom:0;cursor:pointer}.c-globalImageExpand_imageContainer{position:relative;max-width:1300px;margin:auto}.c-globalImageExpand_close{width:3rem;height:3rem;animation:fadeIn .4s}.c-globalImageExpand_image{opacity:1;transition:opacity .3s ease}.c-globalImageExpand_image-loading{opacity:0}.c-globalImageExpand_loader{text-align:center;height:32px;position:absolute;top:50%;margin:0 0 -16px -16px;perspective:500px}.c-globalImageExpand_loaderDot{display:inline-block;margin:0 2px;width:9px;height:9px;border-radius:50%;background:#fff;animation:loaderDot 1.4s ease-in-out infinite}.c-globalImageExpand_loaderDot:nth-child(2){animation-delay:.2s}.c-globalImageExpand_loaderDot:nth-child(3){animation-delay:.4s}@keyframes loaderDot{0%{transform:translate3d(0, 0, 0)}40%{transform:translate3d(0, 0, 150px)}100%{transform:translate3d(0, 0, 0)}}",""]),r.locals={},e.exports=r},1263:function(e,t,o){var content=o(1528);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(31).default)("22f23415",content,!0,{sourceMap:!1})},1527:function(e,t,o){"use strict";o(1263)},1528:function(e,t,o){var r=o(30)((function(i){return i[1]}));r.push([e.i,".c-shortcodeImage{margin-bottom:2.5rem}.c-shortcodeImage_imageContainer{position:relative;display:block}.c-shortcodeImage video{display:block;width:100%}.c-shortcodeImage figcaption{font-size:.813rem;line-height:1.125rem;margin:1rem 0 0 0}.c-shortcodeImage figcaption p{display:inline;font-size:inherit;line-height:inherit;margin:0}.c-shortcodeImage.c-shortcodeImage-medium{width:370px;margin-left:auto;margin-right:auto}.c-shortcodeImage.c-shortcodeImage-small{width:270px;margin-left:auto;margin-right:auto}@media(min-width: 768px){.c-shortcodeImage.c-shortcodeImage-pullLeft.c-shortcodeImage-small,.c-shortcodeImage.c-shortcodeImage-pullRight.c-shortcodeImage-small{max-width:calc(30% - 1.5rem)}.c-shortcodeImage.c-shortcodeImage-pullLeft.c-shortcodeImage-medium,.c-shortcodeImage.c-shortcodeImage-pullRight.c-shortcodeImage-medium{max-width:calc(50% - 1.5rem)}.c-shortcodeImage.c-shortcodeImage-full-width,.c-shortcodeImage.c-shortcodeImage-original,.c-shortcodeImage.c-shortcodeImage-large{clear:both}.c-shortcodeImage-pullLeft:not(.c-shortcodeImage-original,.c-shortcodeImage-full-width,.c-shortcodeImage-large){float:left;clear:left;margin-right:1.5rem}.c-shortcodeImage-pullRight:not(.c-shortcodeImage-original,.c-shortcodeImage-full-width,.c-shortcodeImage-large){float:right;clear:right;margin-left:1.5rem}}@media print{.c-shortcodeImage{page-break-inside:avoid}.c-shortcodeImage.c-shortcodeImage-pullLeft.c-shortcodeImage-small,.c-shortcodeImage.c-shortcodeImage-pullLeft.c-shortcodeImage-medium,.c-shortcodeImage.c-shortcodeImage-pullRight.c-shortcodeImage-small,.c-shortcodeImage.c-shortcodeImage-pullRight.c-shortcodeImage-medium{width:calc(50% - 1.5rem)}.c-shortcodeImage.c-shortcodeImage-full-width,.c-shortcodeImage.c-shortcodeImage-original{clear:both}.c-shortcodeImage-pullLeft:not(.c-shortcodeImage-original,.c-shortcodeImage-full-width,.c-shortcodeImage-large){float:left;clear:left;margin-right:1.5rem}.c-shortcodeImage-pullRight:not(.c-shortcodeImage-original,.c-shortcodeImage-full-width,.c-shortcodeImage-large){float:right;clear:right;margin-left:1.5rem}}",""]),r.locals={},e.exports=r},1680:function(e,t,o){"use strict";o.r(t);o(16),o(21);var r=o(0),n=o(2),c=o(134),l=o(160),d=o(1001),m=o(957),h=o(372),f=class extends(Object(n.mixins)(c.a)){get correctedSize(){var e="Full Width"===this.size||"original"===this.size?"large":this.size;return"large"===e&&this.isLongform&&(e="xlarge"),e}get additionalClasses(){return{["c-shortcodeImage-"+this.correctedSize]:!0,"c-shortcodeImage-hasCaption":this.hasCaption,"c-shortcodeImage-pullLeft":"left"===this.float,"c-shortcodeImage-pullRight":"right"===this.float}}get hasCaption(){return this.imageCaption&&"<p></p>"!==this.imageCaption}get caption(){return this.hasCaption?this.imageCaption:""}get expandable(){var e="enabled"===this.lightbox;if(this.isLongform&&"large"!==this.size&&!this.imageFilename.includes(".gif"))e=!0;else if(!(this.isLongform&&"large"===this.size||this.imageFilename.includes(".gif"))){var t=this.imageCredit.toLowerCase();(t.includes("zdnet")||t.includes("cnet"))&&(e=!0)}return e}get containerTag(){return this.linkUrl?"a":"div"}get image(){return{id:this.uuid,dateCreated:{date:this.imageDateCreated},filename:this.imageFilename,height:this.imageHeight,width:this.imageWidth,crop:this.imageCrop,size:this.correctedSize}}get imageSizes(){return{large:"sc_"+this.correctedSize,medium:"sc_"+this.correctedSize+"@medium",small:"sc_"+this.correctedSize+"@small"}}get isGifv(){return this.$services.isFeatureEnabled("gifv")&&this.imageFilename.includes(".gif")}get linkUrl(){return this.imageTargetUrl||this.targetUrl}get relForLink(){return this.linkUrl?Object(h.a)(this.linkUrl):null}};Object(r.b)([Object(n.Prop)({default:""}),Object(r.d)("design:type",String)],f.prototype,"float",void 0),Object(r.b)([Object(n.Prop)({default:""}),Object(r.d)("design:type",String)],f.prototype,"imageAltText",void 0),Object(r.b)([Object(n.Prop)({default:""}),Object(r.d)("design:type",String)],f.prototype,"imageCaption",void 0),Object(r.b)([Object(n.Prop)({default:""}),Object(r.d)("design:type",String)],f.prototype,"imageCredit",void 0),Object(r.b)([Object(n.Prop)({default:""}),Object(r.d)("design:type",String)],f.prototype,"imageCrop",void 0),Object(r.b)([Object(n.Prop)({default:""}),Object(r.d)("design:type",String)],f.prototype,"imageDateCreated",void 0),Object(r.b)([Object(n.Prop)({default:""}),Object(r.d)("design:type",String)],f.prototype,"imageDoNotCrop",void 0),Object(r.b)([Object(n.Prop)({default:""}),Object(r.d)("design:type",String)],f.prototype,"imageDoNotResize",void 0),Object(r.b)([Object(n.Prop)({default:""}),Object(r.d)("design:type",String)],f.prototype,"imageFilename",void 0),Object(r.b)([Object(n.Prop)({default:""}),Object(r.d)("design:type",String)],f.prototype,"imageHeight",void 0),Object(r.b)([Object(n.Prop)({default:""}),Object(r.d)("design:type",String)],f.prototype,"imageWatermark",void 0),Object(r.b)([Object(n.Prop)({default:""}),Object(r.d)("design:type",String)],f.prototype,"imageWidth",void 0),Object(r.b)([Object(n.Prop)({default:""}),Object(r.d)("design:type",String)],f.prototype,"imageTargetUrl",void 0),Object(r.b)([Object(n.Prop)({default:""}),Object(r.d)("design:type",String)],f.prototype,"lightbox",void 0),Object(r.b)([Object(n.Prop)({default:""}),Object(r.d)("design:type",String)],f.prototype,"size",void 0),Object(r.b)([Object(n.Prop)({default:""}),Object(r.d)("design:type",String)],f.prototype,"targetUrl",void 0),Object(r.b)([Object(n.Prop)({default:""}),Object(r.d)("design:type",String)],f.prototype,"uuid",void 0),Object(r.b)([Object(n.Prop)({default:!1,type:[Boolean,String]}),Object(r.d)("design:type",Object)],f.prototype,"preload",void 0),Object(r.b)([Object(n.Prop)({default:!1}),Object(r.d)("design:type",Boolean)],f.prototype,"isLongform",void 0);var O=f=Object(r.b)([Object(n.Component)({name:"ShortcodeImage",components:{CmsImage:l.a,GlobalImageExpand:d.a,ZDNetShortcodeContent:m.a}})],f),j=(o(1527),o(10)),component=Object(j.a)(O,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("figure",{staticClass:"c-shortcodeImage u-clearfix",class:e.additionalClasses},[e.isAmp?e._e():t(e.containerTag,{tag:"component",staticClass:"c-shortcodeImage_imageContainer",attrs:{rel:e.relForLink,href:e.linkUrl?e.linkUrl:null,target:e.linkUrl?"_blank":null}},[t("CmsImage",{staticClass:"c-shortcodeImage_image",attrs:{image:e.image,sizes:e.imageSizes,"alt-text":e.imageAltText,preload:"true"===e.preload,"lazy-load":"true"!==e.preload,"allow-animation":!0}}),e._v(" "),e.expandable?t("GlobalImageExpand",{attrs:{image:e.image}}):e._e()],1),e._v(" "),e.isAmp?t("div",{staticClass:"c-shortcodeImage_imageContainer"},[t("CmsImage",{staticClass:"c-shortcodeImage_image",attrs:{image:e.image,sizes:e.imageSizes,"alt-text":e.imageAltText,preload:"true"===e.preload,"allow-animation":!0,size:"sc_medium"}})],1):e._e(),e._v(" "),e.hasCaption||e.imageCredit?t("figcaption",[t("ZDNetShortcodeContent",{staticClass:"c-shortcodeImage_caption g-inner-spacing-right-small g-color-black",attrs:{content:e.caption}}),e._v(" "),e.imageCredit?t("span",{staticClass:"c-shortcodeImage_credit g-outer-spacing-top-xsmall u-block",domProps:{innerHTML:e._s(e.imageCredit)}}):e._e()],1):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},950:function(e,t,o){var content=o(967);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(31).default)("dac50d7c",content,!0,{sourceMap:!1})},957:function(e,t,o){"use strict";var r=o(0),n=o(2),c=o(1021),l=o(64),d=o(9),m=o(4);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(m.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O=new d.a("ShortcodeProxy"),j=class extends n.Vue{get shortcodeMapping(){var e,t;return null===(t=null===(e=this.$config)||void 0===e?void 0:e.shortcode)||void 0===t?void 0:t.shortcodeMapping}errorCaptured(e,t,o){return e&&O.warn("Error captured from child '".concat(this.shortcode,"': ").concat(o),e),!1}render(e){var t,o,r;if(O.log("".concat(this.shortcode," render")),this.$services.isFeatureEnabled("core.shortcode.render")){if(null===(t=this.shortcodeMapping)||void 0===t?void 0:t[this.shortcode])return e(this.shortcodeMapping[this.shortcode],{props:f(f({},null==this?void 0:this.$attrs),null===(r=null===(o=null==this?void 0:this.$parent)||void 0===o?void 0:o.$props)||void 0===r?void 0:r.shortcodeProps)},this.$slots.default);O.warn("No shortcode named '".concat(this.shortcode,"' found in 'shortcodeMapping' module configuration."))}else O.warn("Shortcode rendering is disabled via 'core.shortcode.render' feature")}};Object(r.b)([Object(n.Prop)({default:"",type:String}),Object(r.d)("design:type",Object)],j.prototype,"shortcode",void 0);var v,y=j=Object(r.b)([Object(n.Component)({inheritAttrs:!1})],j),x=o(10),I=Object(x.a)(y,undefined,undefined,!1,null,null,null).exports,C=new d.a("ShortcodeContent"),S=class extends n.Vue{trackClick(e){if(!1===this.$props.trackLinkClick)return!1;if(e.target instanceof HTMLElement){var t="",component="";e.target instanceof HTMLAnchorElement&&e.target.classList.contains(this.regularLinkClass)?(t=e.target.href,component=e.target.getAttribute("data-component")):e.target.parentElement instanceof HTMLAnchorElement&&e.target.parentElement.classList.contains(this.regularLinkClass)&&(t=e.target.parentElement.href,component=e.target.parentElement.getAttribute("data-component")),t&&(C.log("trackClick",t),this.$track(l.a).with({outboundUrl:t,webElement:{elementType:"LINK",name:"trackClick",text:component||"shortcodeContentLink"}}).fire())}}updated(){C.log("Updated"),this.$emit("shortcode-content-updated")}get injectedSlotsTemplate(){return this.injectionRules?this.$shortcode.injectSlots(this.content,this.injectionRules):this.content}get templateForRender(){return"string"!=typeof this.injectedSlotsTemplate?'\n      <div class="c-ShortcodeContent">\n        '.concat(this.injectedSlotsTemplate.mainContent,"\n      </div>"):'\n      <div class="c-ShortcodeContent">\n        '.concat(this.injectedSlotsTemplate,"\n      </div>")}render(e){C.log("Render");var t=(0,c.compile)(this.templateForRender),o=new Function(t.render);return this.$options.staticRenderFns=t.staticRenderFns.map((code=>new Function(code))),e("div",{on:{mousedown:this.trackClick},scopedSlots:null==this?void 0:this.$scopedSlots},[o.call(this)])}};Object(r.b)([Object(n.Prop)({default:"",type:String}),Object(r.d)("design:type",String)],S.prototype,"content",void 0),Object(r.b)([Object(n.Prop)({default:()=>{},type:Object}),Object(r.d)("design:type","function"==typeof(v="undefined"!=typeof Record&&Record)?v:Object)],S.prototype,"contentProps",void 0),Object(r.b)([Object(n.Prop)({default:null,type:Object}),Object(r.d)("design:type",Object)],S.prototype,"injectionRules",void 0),Object(r.b)([Object(n.Prop)({default:"c-regularLink",type:String}),Object(r.d)("design:type",String)],S.prototype,"regularLinkClass",void 0),Object(r.b)([Object(n.Prop)({default:()=>{},type:Object}),Object(r.d)("design:type",Object)],S.prototype,"shortcodeProps",void 0),Object(r.b)([Object(n.Prop)({default:!0,type:Boolean}),Object(r.d)("design:type",Boolean)],S.prototype,"trackLinkClick",void 0);var _=S=Object(r.b)([Object(n.Component)({components:{Shortcode:I}})],S),w=Object(x.a)(_,undefined,undefined,!1,null,null,null).exports,k=class extends w{get templateForRender(){return'\n      <div class="c-ShortcodeContent">\n        '.concat(this.injectedSlotsTemplate,"\n      </div>")}},E=k=Object(r.b)([n.Component],k),P=(o(966),Object(x.a)(E,undefined,undefined,!1,null,null,null));t.a=P.exports},966:function(e,t,o){"use strict";o(950)},967:function(e,t,o){var r=o(30)((function(i){return i[1]}));r.push([e.i,'@media(min-width: 768px){.c-ShortcodeContent header{max-width:768px}}.c-ShortcodeContent h1{font-size:3rem;line-height:2.75rem;margin-bottom:1rem;text-transform:lowercase}.c-ShortcodeContent h1::before{display:inline-block;width:.452em;margin-right:.5rem;vertical-align:middle;content:url("data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%208%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M3.32541%2013.2021L8%200.000375748L5.15459%200.000375623L0.48%2013.2021L3.32541%2013.2021Z%22%20fill%3D%22%23080A12%22%20%2F%3E%3C%2Fsvg%3E")}.c-ShortcodeContent h2{font-size:1.375rem;line-height:1.75rem;margin-bottom:1rem}@media(min-width: 1024px){.c-ShortcodeContent h2{font-size:2.25rem;line-height:2.75rem}}.c-ShortcodeContent h3:not(.c-sectionHeading){font-size:1rem;line-height:1.75rem;margin-bottom:1rem}@media(min-width: 1024px){.c-ShortcodeContent h3:not(.c-sectionHeading){font-size:1.375rem;line-height:1.75rem}}.c-ShortcodeContent h3.c-shortcodePinbox_headline{font-size:1rem;line-height:1.375rem;margin-bottom:1.5rem}.c-ShortcodeContent p,.c-ShortcodeContent li{font-size:1.125rem;line-height:1.875rem}.c-ShortcodeContent p a,.c-ShortcodeContent li a{color:#080a12;text-decoration:underline}.c-ShortcodeContent p a:hover,.c-ShortcodeContent li a:hover{color:#0058d5}.c-ShortcodeContent hr{border-top:1px solid #f1f0f3}.c-ShortcodeContent>ol,.c-ShortcodeContent>ul{margin:0 0 1.5rem;padding:0 0 0 1.2rem;word-break:break-word}.c-ShortcodeContent>ol li{list-style:decimal}.c-ShortcodeContent>ul li{list-style:disc}.c-ShortcodeContent>blockquote{font-size:1.125rem;font-weight:600;border-left:1px solid #080a12;padding-left:1.5rem;margin:1.5rem 0}@media(min-width: 1024px){.c-ShortcodeContent>blockquote{margin:2rem 0}}.c-ShortcodeContent .giphy-embed{width:100%}.c-ShortcodeContent .c-avLazyStickyVideo{margin-bottom:2rem;min-height:192px}@media(min-width: 768px){.c-ShortcodeContent .c-avLazyStickyVideo{margin-bottom:1.5rem;min-height:466px}}.c-ShortcodeContent table{display:block;overflow:auto}.c-ShortcodeContent table p,.c-ShortcodeContent table li{font-size:1.125rem;line-height:1.75rem}.c-ShortcodeContent table p{margin-bottom:0}.c-ShortcodeContent table ul{padding-left:2rem;margin-bottom:1.5rem}.c-ShortcodeContent table li{list-style-type:disc;display:list-item}.c-ShortcodeContent header.topicHeader p{font-weight:600}.c-ShortcodeContent *:first-child{margin-top:0}',""]),r.locals={},e.exports=r},978:function(e,t,o){var content=o(1037);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(31).default)("4bfca900",content,!0,{sourceMap:!1})}}]);
//# sourceMappingURL=1b0b77e.modern.js.map