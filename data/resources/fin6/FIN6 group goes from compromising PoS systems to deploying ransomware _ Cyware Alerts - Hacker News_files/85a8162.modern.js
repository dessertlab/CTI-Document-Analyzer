(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{380:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE0IDE4Ij4KICAgIDxwYXRoIGZpbGw9IiMwMDFCMkUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIgMGgxMGEyIDIgMCAwIDEgMiAydjE0LjM3M2ExIDEgMCAwIDEtMS42LjhsLTUuMzg4LTQuMDQ4LTUuNDEzIDQuMDUyYTEgMSAwIDAgMS0xLjU5OS0uOFYyYTIgMiAwIDAgMSAyLTJ6Ii8+Cjwvc3ZnPgo="},381:function(t,e,r){var content=r(386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("1cd46b82",content,!0,{sourceMap:!1})},383:function(t,e,r){"use strict";var l={components:{AuthPopover:r(49).a},props:{card:{type:Object,default:()=>{}},cardId:{type:String,default:()=>""},cardType:{type:String,default:()=>"ALERT"},horizontal:{type:Boolean,default:()=>!1},showBookmark:{type:Boolean,default:()=>!0}},data:()=>({networks:[{icon:"icon-facebook",type:0,base_url:"https://www.facebook.com/sharer/sharer.php?u="},{icon:"icon-linkedin",type:1,base_url:"https://www.linkedin.com/shareArticle?mini=true&url="},{icon:"icon-twitter",type:2,base_url:"https://twitter.com/intent/tweet?url="},{icon:"icon-link",type:3,base_url:null}],isBookmarked:!1}),computed:{shareUrl(){var t;switch(this.cardType){case"EVENT":t=window.location.origin+"/cyber-security-events/".concat(this.card.event_type,"/").concat(this.card.event_slug);break;case"DCR":t=window.location.origin+"/cyber-dcr/".concat(this.card.slug);break;default:t="S"===this.card.story_type?this.card.sp_link:window.location.origin+"/news/".concat(this.card.slug)}return t}},created(){this.isBookmarked=this.card.is_bookmarked},methods:{bookmarkAction(){this.isBookmarked=!this.isBookmarked,this.cardAction("BOOKMARK",this.cardType,this.cardId,this.isBookmarked)},shareCard(t){if(t.base_url)if(4===t.type){var e="".concat(this.card.title,"&body=").concat(this.shareUrl,"%0D%0A%0D%0A").concat(this.card.text);"EVENT"===this.cardType&&(e="".concat(this.card.event_title,"&body=").concat(this.shareUrl,"%0D%0A%0D%0A").concat(this.card.event_desc)),"DCR"===this.cardType&&(e="".concat(this.card.title,"&body=").concat(this.shareUrl,"%0D%0A%0D%0A").concat(this.card.plain_text)),window.open("".concat(t.base_url).concat(e),"_self")}else window.open("".concat(t.base_url).concat(this.shareUrl),"_blank")},copyUrl(){this.$copyText(this.shareUrl).then((()=>{this.makeToast("success",this.shareUrl,"URL Copied Successfully! ".concat(this.shareUrl))}),(()=>{this.makeToast("danger",this.shareUrl,"Some Error Occurred!")}))}}},n=(r(385),r(4)),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",[t.horizontal?e("div",[e("b-list-group",{attrs:{horizontal:""}},t._l(t.networks,(function(r,l){return e("b-list-group-item",{key:l,staticClass:"pb-0 pt-1"},[r.base_url?e("a",{staticClass:"text-lighter-black cursor-pointer",on:{click:function(e){return t.shareCard(r)}}},[e("i",{staticClass:"icon",class:[r.icon]})]):e("a",{staticClass:"text-lighter-black cursor-pointer",on:{click:function(e){return t.copyUrl()}}},[e("i",{staticClass:"icon",class:[r.icon]})])])})),1)],1):e("ul",{staticClass:"list-unstyled border border-light cy-social-share text-center ml-auto mr-5"},[t.showBookmark?e("li",{staticClass:"py-2"},[e("a",{staticClass:"text-lighter-black",attrs:{id:"popover-socialshare",tabindex:"0"},on:{click:function(e){t.isAuthenticated&&t.bookmarkAction()}}},[t.isBookmarked?e("img",{staticClass:"alert-action-after size-md mr-1",attrs:{src:r(380)}}):e("i",{staticClass:"icon icon-bookmark mr-1"}),t._v(" "),t.isAuthenticated?t._e():e("auth-popover",{attrs:{target:"popover-socialshare"}})],1)]):t._e(),t._v(" "),t._l(t.networks,(function(r,l){return e("li",{key:l,staticClass:"py-2"},[r.base_url?e("a",{staticClass:"text-lighter-black",on:{click:function(e){return t.shareCard(r)}}},[e("i",{staticClass:"icon",class:[r.icon]})]):e("a",{staticClass:"text-lighter-black",attrs:{id:"copy-url"},on:{click:function(e){return t.copyUrl()}}},[e("i",{staticClass:"icon",class:[r.icon]})]),t._v(" "),e("b-tooltip",{attrs:{target:"copy-url",placement:"right",variant:"secondary"}},[t._v("Copy URL")])],1)}))],2)])}),[],!1,null,"4b20162e",null);e.a=component.exports},384:function(t,e,r){t.exports=r.p+"img/image-place.2c14a45.jpg"},385:function(t,e,r){"use strict";r(381)},386:function(t,e,r){var l=r(17)(!1);l.push([t.i,".cy-social-share[data-v-4b20162e]{width:4.5rem;border-radius:.55rem}.cy-social-share>li>a[data-v-4b20162e]{cursor:pointer;text-decoration:none;font-size:1.1rem}",""]),t.exports=l},387:function(t,e,r){t.exports=r.p+"img/no-data.322a21a.png"},409:function(t,e,r){t.exports=r.p+"img/cyware-singlet.40b1eb3.svg"},443:function(t,e,r){var content=r(461);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("b2732892",content,!0,{sourceMap:!1})},460:function(t,e,r){"use strict";r(443)},461:function(t,e,r){var l=r(17)(!1);l.push([t.i,".cy-alert__tags div[data-v-4a2d7038]{display:inline-block;background-color:rgba(0,0,0,.15);font-size:14px;padding:5px 12px}",""]),t.exports=l},504:function(t,e,r){"use strict";r.r(e);var l=r(6),n=(r(50),r(20),r(21),r(383)),c=r(31),o=r(139),d={components:{CySocialShare:n.a,CyShimmer:c.a,CyProductsLink:o.a},asyncData(t){var{store:e,params:r}=t;return{client:!0}},data:()=>({pageUpdating:!1,structuredData:{},availableSocialBanners:["banner-social"],bannerLoading:!1}),fetch:t=>Object(l.a)((function*(){var{store:e,params:r,route:l,error:n}=t}))(),head(){return{title:this.alertDetail?"".concat(this.alertDetail.title," | Cyware Alerts - Hacker News"):"Cyware Alerts - Hacker News",meta:[{hid:"title",name:"title",content:this.alertDetail?"".concat(this.alertDetail.meta_title):""},{hid:"description",name:"description",content:"".concat(this.alertDetail?this.alertDetail.meta_text:"")},{hid:"keywords",name:"keywords",content:"".concat(this.alertDetail?this.alertDetail.meta_keywords:"")},{hid:"keywords",property:"keywords",content:"".concat(this.alertDetail?this.alertDetail.meta_keywords:"")},{hid:"og:image",property:"og:image",content:this.alertDetail.image?this.alertDetail.image:""},{hid:"og:title",property:"og:title",content:this.alertDetail?"".concat(this.alertDetail.meta_title):""},{hid:"og:description",property:"og:description",content:"".concat(this.alertDetail?this.alertDetail.meta_text:"")},{hid:"twitter:title",name:"twitter:title",content:"".concat(this.alertDetail?this.alertDetail.meta_title:"")},{hid:"twitter:description",name:"twitter:description",content:"".concat(this.alertDetail?this.alertDetail.meta_text:"")}],__dangerouslyDisableSanitizers:["script"],script:[{innerHTML:JSON.stringify(this.structuredData),type:"application/ld+json"}]}},computed:{alertDetail(){return this.$store.state.list[this.$route.meta.reference]},socialBanners(){return this.$store.state.list.BANNER_DATA}},created(){this.structuredData={"@context":"http://schema.org",mainEntityOfPage:{"@type":"WebPage","@id":"https://cyware.com".concat(this.$route.fullPath)},"@type":"NewsArticle",headline:this.alertDetail.title,image:{"@type":"ImageObject",url:this.alertDetail.image},keywords:this.alertDetail.meta_keywords,articleSection:this.alertDetail.category,articleBody:this.alertDetail.blog_text,datePublished:this.$options.filters.formattedDate(1e3*this.alertDetail.p_time),dateModified:this.$options.filters.formattedDate(1e3*this.alertDetail.time),author:"Cyware",publisher:{"@type":"Organization",name:"Cyware",logo:{"@type":"ImageObject",url:"https://production.cyware.com/enterprise/cyware_logo.png"}},description:this.alertDetail.desc1,url:"https://cyware.com".concat(this.$route.fullPath)},this.client&&this.getAlert(),this.getAvailableBanners()},mounted(){this.isAuthenticated&&this.alertDetail.id&&this.cardAction("ARCHIVE","ALERT",this.alertDetail.id,!0),this.$axios.$post("/fang-defang/?Expires=23312312&AccessID=dsadsadasdsa&Signature=dfdsfsddsadasd",{text:this.iocFangModel[this.currentKey],type:"fang",categorize:!1})},methods:{getAlert(){this.pageUpdating=!0,this.$store.dispatch("GET",{reference:this.$route.meta.reference,params:this.$route.params}).then((()=>{this.pageUpdating=!1}))},filterbytag(t){this.$store.commit("resetAllMultiFilters"),this.$store.commit("addMultiFilters",{type:"ALERTS",key:"tag_slug",value:t.name,params:{tag_slug:t.tag_slug}}),this.$router.push({path:"/alerts/tags/".concat(t.tag_slug),params:{tag_slug:t.tag_slug}})},getAvailableBanners(){var t=this;return Object(l.a)((function*(){var e=yield t.$axios.$get("/available-banners/"),r={},l=[];return e.forEach((e=>{t.availableSocialBanners.includes(e)&&(t.bannerLoading=!0,l.push(t.$axios.$get("/enterprise-banners/".concat(e,"/"))))})),yield Promise.all(l).then((data=>(data.forEach((t=>{r[t[0].banner_position_data.banner_position_slug]=t})),data))),t.bannerLoading=!1,t.$store.commit("makeData",{reference:"BANNER_DATA",data:r})}))()}}},h=(r(460),r(4)),component=Object(h.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"single-page-wrapper"},[t.alertDetail&&!t.pageUpdating?e("div",{staticClass:"cy-alert"},[e("div",{staticClass:"cy-content-section"},[e("b-container",{staticClass:"px-md-0"},[e("b-row",[e("b-col",{staticClass:"d-none d-md-block",attrs:{md:"2"}}),t._v(" "),e("b-col",{attrs:{md:"7",cols:"12"}},[t.socialBanners&&t.socialBanners["banner-social"]&&t.socialBanners["banner-social"][0]?e("div",{staticClass:"mb-3 d-block d-sm-none"},[e("a",{staticClass:"d-block",attrs:{href:t.socialBanners["banner-social"][0].banner_content&&t.socialBanners["banner-social"][0].banner_content[0].url,target:"_blank"}},[e("b-img",{staticClass:"w-100 rounded-lg",attrs:{src:t.socialBanners["banner-social"][0].banner_content&&t.socialBanners["banner-social"][0].banner_content[0].mobile_image_data.image_file,fluid:"",alt:t.socialBanners["banner-social"][0].banner_content&&t.socialBanners["banner-social"][0].banner_content[0].image_alt}})],1)]):t._e(),t._v(" "),e("div",{staticClass:"d-block d-sm-none mb-3"},[e("cy-products-link")],1),t._v(" "),e("nuxt-link",{staticClass:"text-decoration-none",attrs:{to:"/cyber-security-news-articles"}},[e("i",{staticClass:"icon-arrow-right pr-2"}),t._v("\n              Go to listing page\n            ")]),t._v(" "),e("h1",{staticClass:"cy-alert__title font-weight-800 mt-2"},[t._v("\n              "+t._s(t.alertDetail.title)+"\n            ")]),t._v(" "),e("div",[e("ul",{staticClass:"cy-card__list list-inline cy-alert__info m-0"},[e("li",{staticClass:"list-inline-item d-block d-md-inline"},[e("nuxt-link",{attrs:{to:"/category/".concat(t.alertDetail.category_slug)}},[t._v(t._s(t.alertDetail.category)+"\n                  ")])],1),t._v(" "),e("li",{staticClass:"list-inline-item d-block d-md-inline"},[e("span",{staticClass:"cy-dot light-dot size-md mr-2"}),t._v(" "),e("a",[t._v(t._s(t._f("formattedDate")(1e3*t.alertDetail.p_time)))])]),t._v(" "),e("li",{staticClass:"list-inline-item d-block d-md-inline"},[e("span",{staticClass:"cy-dot light-dot size-md mr-2"}),t._v(" "),e("a",[t._v(t._s(t.alertDetail.sp_display))])])])]),t._v(" "),"S"!==t.alertDetail.story_type?e("div",{staticClass:"cy-alert__img text-center mt-3"},[e("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}]},[e("img",{attrs:{"data-src":t.alertDetail.image,"data-error":r(387),"data-loading":r(384),title:t.alertDetail.title,alt:t.alertDetail.title}})])]):t._e()],1),t._v(" "),e("b-col",{staticClass:"d-none d-md-block cy-alert-sidebar position-relative pt-5 mt-2",attrs:{md:"3"}},[e("div",{staticClass:"cy-right-sidebar-wrapper"},[t.socialBanners&&t.socialBanners["banner-social"]&&t.socialBanners["banner-social"][0]?e("div",{staticClass:"mb-3"},[e("a",{staticClass:"d-block",attrs:{href:t.socialBanners["banner-social"][0].banner_content&&t.socialBanners["banner-social"][0].banner_content[0].url,target:"_blank"}},[e("b-img",{staticClass:"w-100 rounded-lg",attrs:{src:t.socialBanners["banner-social"][0].banner_content&&t.socialBanners["banner-social"][0].banner_content[0].desktop_image_data.image_file,fluid:"",height:"200",width:"350",alt:t.socialBanners["banner-social"][0].banner_content&&t.socialBanners["banner-social"][0].banner_content[0].image_alt}})],1)]):t._e(),t._v(" "),t.bannerLoading?e("div",{staticClass:"mb-3 cy-skeleton",staticStyle:{width:"100%",height:"170px"}}):t._e(),t._v(" "),e("div",[e("cy-products-link")],1)])])],1),t._v(" "),e("b-row",{staticClass:"py-4"},[e("b-col",{staticClass:"d-none d-md-block",attrs:{md:"2"}},[e("cy-social-share",{attrs:{card:t.alertDetail,"card-id":t.alertDetail.id,"card-type":"ALERT"}})],1),t._v(" "),e("b-col",{staticClass:"cy-alert__description",attrs:{md:"7",cols:"12"}},["S"===t.alertDetail.story_type?e("div",[e("a",{attrs:{href:t.alertDetail.web_sp_link,target:"_blank"}},[e("div",{staticClass:"cy-text-default",domProps:{innerHTML:t._s(t.alertDetail.desc1)}}),t._v(" "),e("a",{staticClass:"cursor-pointer text-primary",attrs:{href:t.alertDetail.web_sp_link,target:"_blank"}},[t._v("Read More")])])]):e("div",[t.alertDetail.blog_text?e("div",{domProps:{innerHTML:t._s(t.alertDetail.blog_text)}}):e("div",{domProps:{innerHTML:t._s(t.alertDetail.desc1)}})]),t._v(" "),e("div",{staticClass:"cy-alert__tags mt-4"},[e("ul",{staticClass:"list-inline cy-tags m-0"},t._l(t.alertDetail.story_tag,(function(r){return e("li",{key:r.tag_id,staticClass:"list-inline-item mb-2"},[e("a",{staticClass:"d-block py-1 px-2 border border-light rounded cursor-pointer text-lighter-black",on:{click:function(e){return t.filterbytag(r)}}},[t._v(t._s(r.tag_name))])])})),0)]),t._v(" "),e("div",{staticClass:"d-block d-md-none pt-4"},[e("cy-social-share",{attrs:{horizontal:!0,card:t.alertDetail,"card-id":t.alertDetail.id,"card-type":"ALERT"}})],1),t._v(" "),e("div",{staticClass:"d-flex cy-publisher my-4"},[e("img",{attrs:{src:r(409),title:"Cyware Publisher",alt:"Cyware Publisher"}}),t._v(" "),e("div",{staticClass:"d-flex flex-column justify-content-center"},[e("p",{staticClass:"mb-0 text-gray"},[t._v("Publisher")]),t._v(" "),e("h2",{staticClass:"mb-0 cy-heading-3"},[t._v("\n                  "+t._s(t.alertDetail.publisher_display_name)+"\n                ")])])])]),t._v(" "),e("b-col",{attrs:{md:"3",cols:"12"}})],1),t._v(" "),e("b-row",{staticClass:"d-flex justify-content-between pt-5 mx-md-5 px-md-4 px-3"},[t.alertDetail.previous_story?e("nuxt-link",{staticClass:"cy-alert__morelink order-1 text-decoration-none cy-hover-card",attrs:{to:"/news/".concat(t.alertDetail.previous_story.slug)}},[e("div",{staticClass:"cy-prev-next cy-mb-xs-2 cy-border-color-light"},[e("b-row",[e("b-col",{attrs:{cols:"4"}},[e("b-img",{staticClass:"rounded-left",attrs:{src:t.alertDetail.previous_story.image?"https://cyware.com/smart/unsafe/120x130/smart/filters:quality(80)/"+t.alertDetail.previous_story.image:""}})],1),t._v(" "),e("b-col",{attrs:{cols:"8"}},[e("div",{staticClass:"cy-prev-next__content p-0 d-flex flex-column h-100 text-left pr-2 pl-2"},[e("p",{staticClass:"cy-heading-5 cy-text-primary-blue text-uppercase py-2 mb-0 cy-font-weight-500"},[e("i",{staticClass:"icon-arrow-right mr-2"}),t._v("\n                      Previous\n                    ")]),t._v(" "),e("h6",{staticClass:"cy-heading-4 cy-font-weight-600 cy-line-height-30 cy-line-height-xs-26 mb-0"},[t._v("\n                      "+t._s(t.truncate(t.alertDetail.previous_story.title).length>55?t.truncate(t.alertDetail.previous_story.title).substring(0,55)+" ...":t.truncate(t.alertDetail.previous_story.title))+"\n                    ")]),t._v(" "),e("p",{staticClass:"cy-alert__category mb-0"},[t._v("\n                      "+t._s(t.alertDetail.previous_story.category)+"\n                    ")])])])],1)],1)]):t._e(),t._v(" "),e("div",{staticClass:"flex-grow-1 order-2"}),t._v(" "),t.alertDetail.next_story?e("nuxt-link",{staticClass:"cy-alert__morelink order-3 text-decoration-none cy-hover-card",attrs:{to:"/news/".concat(t.alertDetail.next_story.slug)}},[e("div",{staticClass:"cy-prev-next cy-mb-xs-2 cy-border-color-light"},[e("b-row",[e("b-col",{attrs:{cols:"4"}},[e("b-img",{staticClass:"rounded-left",attrs:{src:t.alertDetail.next_story.image?"https://cyware.com/smart/unsafe/120x130/smart/filters:quality(80)/"+t.alertDetail.next_story.image:""}})],1),t._v(" "),e("b-col",{attrs:{cols:"8"}},[e("div",{staticClass:"cy-prev-next__content p-0 d-flex flex-column h-100 text-left pr-2 pl-2"},[e("p",{staticClass:"cy-heading-5 cy-text-primary-blue text-uppercase py-2 mb-0 cy-font-weight-500"},[e("i",{staticClass:"icon-arrow-left mr-2"}),t._v("\n                      Next\n                    ")]),t._v(" "),e("h6",{staticClass:"cy-heading-4 cy-font-weight-600 cy-line-height-30 cy-line-height-xs-26 mb-0"},[t._v("\n                      "+t._s(t.truncate(t.alertDetail.next_story.title).length>55?t.truncate(t.alertDetail.next_story.title).substring(0,55)+" ...":t.truncate(t.alertDetail.next_story.title))+"\n                    ")]),t._v(" "),e("p",{staticClass:"cy-alert__category mb-0"},[t._v("\n                      "+t._s(t.alertDetail.next_story.category)+"\n                    ")])])])],1)],1)]):t._e()],1)],1)],1)]):e("div",{staticClass:"cy-alert"},[e("div",{staticClass:"single-page-content"},[e("cy-shimmer",{attrs:{type:"alert-single"}})],1)])])}),[],!1,null,"4a2d7038",null);e.default=component.exports}}]);