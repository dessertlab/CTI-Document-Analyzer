(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{2753:function(t,e,c){var content=c(2837);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(112).default)("1dbedb20",content,!0,{sourceMap:!1})},2836:function(t,e,c){"use strict";c(2753)},2837:function(t,e,c){var r=c(111)((function(i){return i[1]}));r.push([t.i,".cy-blog-image[data-v-b7c7914c]{max-height:325px!important;-o-object-fit:cover;object-fit:cover;width:100%}",""]),r.locals={},t.exports=r},2955:function(t,e,c){"use strict";c.r(e);c(187);var r=c(29),l=(c(23),c(45),c(27),c(25),c(43),c(2834)),o=c(154),n={components:{BlogTags:()=>c.e(122).then(c.bind(null,2679)),CySocialShare:()=>c.e(19).then(c.bind(null,2769)),CyMatrixCard:()=>c.e(13).then(c.bind(null,549)),CySolutionsBanner:()=>Promise.all([c.e(0),c.e(1),c.e(2),c.e(3),c.e(62)]).then(c.bind(null,2986)),Avatar:()=>c.e(60).then(c.bind(null,2987))},asyncData:t=>Object(r.a)((function*(){var{app:e,req:c,route:r,$axios:l,params:o,redirect:n}=t,d=null;e.$cookies.get("auth._token.local")&&(d={headers:{Authorization:e.$cookies.get("auth._token.local")}});var h=r.meta[0].slug;if("educational-guides"===h){var _="peer="+h+"&exclude="+o.id;_.category&&(_+="&category="+o.category)}return l.$get("".concat("https://cyware.com").concat("/api-social","/blog/").concat(o.id),d).then((t=>{var e;return Promise.all([l.$get("".concat("https://cyware.com").concat("/api-social","/blog?peer=educational-guides&category=").concat(null==t||null===(e=t.educational_guide_category_data)||void 0===e?void 0:e.category_slug,"&page_size=50"))]).then((e=>({article:t,eduGuideList:e[0]})))})).catch((t=>{t&&n("/")}))}))(),data:()=>({product:["csap","ctix","cftr"],relatedArticles:null,recentPosts:null,refreshAPI:!1,solutions:["cyber-fusion-center"],fingerPrintOptions:{excludes:{fonts:!0,audio:!0,adBlock:!0,canvas:!0,webgl:!0,webglVendorAndRenderer:!0}},fingerprintJs:l}),head(){return{title:this.article?"".concat(this.article.meta_title," | ").concat(this.article.peer_data.title):"".concat(this.article.peer_data.title),meta:[{hid:"title",name:"title",content:this.article?"".concat(this.article.meta_title," | ").concat(this.article.peer_data.title):"".concat(this.article.peer_data.title)},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:this.article?"".concat(this.article.meta_title," | ").concat(this.article.peer_data.title):"".concat(this.article.peer_data.title)},{hid:"description",name:"description",content:"".concat(this.article?this.htmlToText(this.article.meta_desc):"")},{hid:"keywords",name:"keywords",content:"".concat(this.article?this.article.meta_keywords:"")},{hid:"keywords",property:"keywords",content:"".concat(this.article?this.article.meta_keywords:"")},{hid:"og:image",property:"og:image",content:this.article.cover_image_data&&this.article.cover_image_data.image_file?this.article.cover_image_data.image_file:""},{hid:"og:title",property:"og:title",content:this.article?"".concat(this.article.meta_title," | ").concat(this.article.peer_data.title):"".concat(this.article.peer_data.title)},{hid:"og:description",property:"og:description",content:"".concat(this.article?this.htmlToText(this.article.meta_desc):"")},{hid:"twitter:title",name:"twitter:title",content:"".concat(this.article?this.article.meta_title:"")},{hid:"twitter:description",name:"twitter:description",content:"".concat(this.article?this.htmlToText(this.article.meta_desc):"")},{hid:"twitter:image",name:"twitter:image",content:this.article.cover_image_data&&this.article.cover_image_data.image_file?this.article.cover_image_data.image_file:""}]}},computed:{getListLink:()=>t=>"blog"===t?"/blog":"research-and-analysis"===t?"/resources/research-and-analysis":"/resources/threat-briefings/"+t+"/"},mounted(){void 0!==localStorage.cyDeviceId?this.$deviceId=localStorage.getItem("cyDeviceId"):this.fingerprintJs.getPromise(this.fingerPrintOptions).then((t=>{this.$deviceId=this.fingerprintJs.x64hash128(t.map((t=>t.value)).join(),31),localStorage.setItem("cyDeviceId",this.$deviceId)})),Object.keys(this.article).length>0&&this.getrelatedLinks(),o.a.$on("refreshSubscribeStatus",(()=>{this.onClose()})),this.getRecentPosts(),this.sendDeviceId()},beforeDestroy(){o.a.$off("refreshSubscribeStatus")},methods:{sendDeviceId(){this.$axios.$get("".concat("https://cyware.com").concat("/api-social","/blog/").concat(this.$route.params.id,"/?device_id=").concat(this.$deviceId),{headers:{"Content-Type":"application/json",Authorization:this.isAuthenticated?this.$cookies.get("auth._token.local"):""}}).then((t=>({article:t})))},onClose(){this.refreshAPI=!0},getRecentPosts(){var t=this.$route.meta.slug;this.$axios.$get("".concat("https://cyware.com").concat("/api-social","/blog?peer=").concat(t,"&page_size=3")).then((data=>{data&&(this.recentPosts=data)}))},getrelatedLinks(){this.$axios.$get("".concat("https://cyware.com").concat("/api-social","/blog/").concat(this.$route.params.id,"/next-previous")).then((data=>{data&&(this.relatedArticles=data)}))},htmlToText:html=>html?html.replace(/(<([^>]+)>)/gi,"").replace(/&nbsp;/g," ").replace(/\n/g," ").replace(/&quot;/g,'"').replace(/&#8212;/g,"-").replace(/&#8220;/g,'"').replace(/&#8221;/g,'"').replace(/&#8216;/g,"'").replace(/&#8217;/g,"'").replace(/&lsquo;/g,"'").replace(/&rsquo;/g,"'").replace(/&#x27;/g,"'").replace(/&ldquo;/g,'"').replace(/&rdquo;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&mdash;/g,"-").replace(/&ndash;/g,"-").replace(/&amp;/g,"&"):html}},d=(c(2836),c(37)),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[t.article?c("section",{attrs:{id:"briefing-header"}},[c("b-container",[c("b-row",[c("b-col",{staticClass:"text-left pb-4",attrs:{cols:"10",md:"7",offset:"2"}},[c("nuxt-link",{staticClass:"cy-text-primary-blue text-decoration-none d-flex align-items-center mb-4",attrs:{to:t.getListLink(t.$route.meta.slug)}},[c("i",{staticClass:"cyicon-arrow-left pr-2"}),t._v("\n            Go to listing page\n          ")]),t._v(" "),c("h1",{staticClass:"cy-heading-2 cy-font-weight-800 cy-text-nile-blue"},[t._v("\n            "+t._s(t.article.title)+"\n          ")]),t._v(" "),t.article.categories_data?c("ul",{staticClass:"list-inline mb-3 blog-categories"},t._l(t.article.categories_data,(function(e,r){return c("li",{key:r,staticClass:"list-inline-item green-dot"},[c("a",{staticClass:"cy-heading-3 cy-text-nile-blue text-decoration-none cy-font-weight-600"},[t._v("\n                "+t._s(e.category_name)+"\n              ")])])})),0):t._e(),t._v(" "),t.article.cover_image_data?c("img",{staticClass:"cy-box-shadow cy-blog-image",attrs:{src:t.article.cover_image_data.image_file,alt:t.article.image_alt_tag?t.article.image_alt_tag:t.article.title,title:t.article.image_title_tag?t.article.image_title_tag:t.article.title,quality:"100"}}):t._e()],1)],1)],1)],1):t._e(),t._v(" "),c("section",[c("b-container",[c("b-row",{staticClass:"text-left pt-3"},[c("b-col",{attrs:{cols:"2",md:"2"}},[c("div",{staticClass:"cy-top20"},[c("h2",{staticClass:"cy-heading-3 cy-font-weight-800"},[t._v("Share Blog Post")]),t._v(" "),c("cy-social-share",{attrs:{card:t.article,"card-id":t.article.id}})],1)]),t._v(" "),c("b-col",{attrs:{cols:"10",md:"7"}},[t.article.description?c("div",[c("div",{staticClass:"cy-heading-3 mb-3 text-break w-100",domProps:{innerHTML:t._s(t.article.description)}}),t._v(" "),c("hr",{staticClass:"cy-border-top-light-blue"}),t._v(" "),t.article.blog_publisher?c("div",{staticClass:"d-flex align-items-start justify-content-start mb-4"},[t.article.blog_publisher?c("avatar",{attrs:{slot:"reference","avatar-data":t.article.blog_publisher},slot:"reference"}):t._e(),t._v(" "),c("div",{staticClass:"pt-2"},[c("div",{staticClass:"d-flex align-items-center"},[t.article.blog_publisher?c("h3",{staticClass:"cy-heading-3 cy-line-height-30 cy-font-weight-800 mb-0"},[t._v("\n                    "+t._s(t.article.blog_publisher.first_name+" "+t.article.blog_publisher.last_name)+"\n                  ")]):t._e(),t._v(" "),t.article.blog_publisher.user_social_url?c("a",{staticClass:"mx-2",attrs:{href:t.article.blog_publisher.user_social_url,target:"_blank"}},[c("nuxt-img",{attrs:{src:"/blog/author-linkedin.svg",loading:"lazy"}})],1):t._e()]),t._v(" "),t.article.blog_publisher.user_short_description?c("p",{staticClass:"mb-0 cy-heading-5 cy-text-grey"},[t._v("\n                  "+t._s(t.article.blog_publisher.user_short_description)+"\n                ")]):t._e()])],1):t._e(),t._v(" "),"educational-guides"!==t.$route.meta.slug?c("div",[c("h2",{staticClass:"cy-heading-5 cy-text-primary-blue cy-font-weight-600 text-uppercase"},[c("i",{staticClass:"cyicon-tag cy-heading-5"}),t._v("\n                 Tags\n              ")]),t._v(" "),t.article.tags_data&&t.article.tags_data.length>0?c("div",{staticClass:"cy-mt-2"},[c("blog-tags",{attrs:{data:t.article.tags_data}})],1):t._e()]):t._e(),t._v(" "),c("p",{staticClass:"cy-text-grey cy-heading-5 cy-mt-1"},[t._v("\n              Posted on: "+t._s(t._f("fromtimestamp")(t.article.publish_timestamp))+"\n            ")])]):t._e()]),t._v(" "),t.eduGuideList&&t.eduGuideList.results&&t.eduGuideList.results.length>0?c("b-col",{attrs:{cols:"12",md:"3",order:"3"}},[c("h2",{staticClass:"cy-heading-3 cy-font-weight-800"},[t._v("Related Guides")]),t._v(" "),c("div",{staticClass:"cy-edupillar-relatedguides"},t._l(t.eduGuideList.results,(function(e,r){return c("div",{key:r,staticClass:"py-3 cy-border-bottom-lighter-blue"},[c("nuxt-link",{staticClass:"cy-font-weight-600 cy-heading-5",attrs:{to:"/security-guides/"+t.article.educational_guide_category_data.category_slug+"/"+e.slug,target:"_blank"}},[t._v("\n                "+t._s(e.title)+"\n              ")])],1)})),0)]):t._e()],1)],1)],1),t._v(" "),c("section",[c("b-container",[c("hr",{staticClass:"cy-border-top-light-blue"}),t._v(" "),t.relatedArticles?c("b-row",{staticClass:"cy-mb-5 justify-content-between"},[t.relatedArticles&&t.relatedArticles.previous?c("b-col",{attrs:{md:"4"}},[c("nuxt-link",{staticClass:"text-decoration-none cy-text-nile-blue",attrs:{to:"".concat("blog"===t.$route.meta.slug?"/blog":"research-and-analysis"===t.$route.meta.slug?"/resources/research-and-analysis":"/resources/threat-briefings/".concat(t.$route.meta.slug),"/").concat(t.$route.params.category?t.$route.params.category+"/":"").concat(t.relatedArticles.previous.slug)}},[c("div",{staticClass:"blog-item cy-mb-xs-2"},[c("b-row",[c("b-col",{attrs:{cols:"4"}},[t.relatedArticles.previous.cover_image_data?c("b-img-lazy",{staticClass:"rounded-left",attrs:{src:t.relatedArticles.previous.cover_image_data.image_file?"https://cyware.com/smart/unsafe/120x130/smart/filters:quality(80)/"+t.relatedArticles.previous.cover_image_data.image_file:"",alt:t.relatedArticles.previous.title}}):t._e()],1),t._v(" "),c("b-col",{attrs:{cols:"8"}},[c("div",{staticClass:"blog-item__content p-0 d-flex flex-column h-100 text-left pr-2 pl-2"},[c("p",{staticClass:"cy-heading-5 cy-text-primary-blue text-uppercase pt-2 cy-font-weight-500 mb-2"},[c("i",{staticClass:"cyicon-arrow-left mr-2"}),t._v("\n                      Previous\n                    ")]),t._v(" "),c("h2",{staticClass:"cy-heading-3 cy-font-weight-600 cy-line-height-25 cy-line-height-xs-26"},[t._v("\n                      "+t._s(t.truncate(t.relatedArticles.previous.title).substring(0,40)+(t.truncate(t.relatedArticles.previous.title).length>40?"...":""))+"\n                    ")])])])],1)],1)])],1):t._e(),t._v(" "),t.relatedArticles&&t.relatedArticles.next?c("b-col",{staticClass:"cy-related-links",attrs:{md:"4"}},[c("nuxt-link",{staticClass:"text-decoration-none cy-text-nile-blue h-100",attrs:{to:"".concat("blog"===t.$route.meta.slug?"/blog":"research-and-analysis"===t.$route.meta.slug?"/resources/research-and-analysis":"/resources/threat-briefings/".concat(t.$route.meta.slug),"/").concat(t.$route.params.category?t.$route.params.category+"/":"").concat(t.relatedArticles.next.slug)}},[c("div",{staticClass:"blog-item cy-mb-xs-2"},[c("b-row",[c("b-col",{attrs:{cols:"4"}},[t.relatedArticles.next.cover_image_data?c("b-img-lazy",{staticClass:"rounded-left",attrs:{src:t.relatedArticles.next.cover_image_data.image_file?"https://cyware.com/smart/unsafe/120x130/smart/filters:quality(80)/"+t.relatedArticles.next.cover_image_data.image_file:"",alt:t.relatedArticles.next.title}}):t._e()],1),t._v(" "),c("b-col",{attrs:{cols:"8"}},[c("div",{staticClass:"blog-item__content p-0 d-flex flex-column h-100 text-left pr-2 pl-2"},[c("p",{staticClass:"cy-heading-5 cy-text-primary-blue text-uppercase pt-2 cy-font-weight-500 mb-2"},[c("i",{staticClass:"cyicon-arrow-right mr-2"}),t._v("\n                      Next\n                    ")]),t._v(" "),c("h2",{staticClass:"cy-heading-3 cy-font-weight-600 cy-line-height-25 cy-line-height-xs-26"},[t._v("\n                      "+t._s(t.truncate(t.relatedArticles.next.title).substring(0,35)+(t.truncate(t.relatedArticles.next.title).length>35?"...":""))+"\n                    ")])])])],1)],1)])],1):t._e()],1):t._e()],1)],1),t._v(" "),t.recentPosts?c("section",{attrs:{id:"recent-posts"}},[c("b-container",[c("h2",{staticClass:"cy-heading-2 cy-font-weight-800 cy-text-nile-blue cy-line-height-60 w-100 text-xs-center"},[t._v("\n        Recent Posts\n      ")]),t._v(" "),c("b-row",t._l(t.recentPosts.results,(function(article,e){return c("b-col",{key:e,attrs:{md:"4"}},[c("nuxt-link",{staticClass:"text-decoration-none cy-text-nile-blue",attrs:{to:article.slug?"".concat("blog"===t.$route.meta.slug?"/blog":"research-and-analysis"===t.$route.meta.slug?"/resources/research-and-analysis":"/resources/threat-briefings/".concat(t.$route.meta.slug),"/").concat(article.slug):"/",target:"_blank"}},[c("div",{staticClass:"blog-item cy-mb-xs-2"},[c("b-img-lazy",{staticClass:"w-100",attrs:{src:article.cover_image_data?"https://cyware.com/smart/unsafe/656x472/smart/filters:quality(80)/"+article.cover_image_data.image_file:"",alt:article.title,fluid:""}}),t._v(" "),c("div",{staticClass:"blog-item__content"},[c("p",{staticClass:"blog-item__date"},[t._v("\n                  "+t._s(t._f("fromtimestamp")(article.publish_timestamp))+"\n                ")]),t._v(" "),c("h2",{staticClass:"cy-heading-3 cy-font-weight-600 cy-line-height-30"},[t._v("\n                  "+t._s(t.truncate(article.title).substring(0,60)+(t.truncate(article.title).length>60?"...":""))+"\n                ")]),t._v(" "),c("p",{staticClass:"cy-heading-4 cy-text-grey m-0",domProps:{innerHTML:t._s(t.truncate(article.description).substring(0,80)+(t.truncate(article.description).length>80?"...":""))}}),t._v(" "),article.tags_data&&article.tags_data.length>0?c("div",{staticClass:"cy-mt-3 cy-mt-xs-2"},[c("blog-tags",{attrs:{data:article.tags_data,limit:2}}),t._v(" "),article.tags_data.length>2?c("span",{staticClass:"d-inline-block ml-2 cursor-pointer cy-heading-5"},[c("span",{staticClass:"cy-text-nile-blue",attrs:{id:"popovertags_".concat(article.slug)}},[t._v(t._s("+ "+article.tags_data.slice(2).length+" more"))]),t._v(" "),c("b-popover",{attrs:{target:"popovertags_".concat(article.slug),triggers:"hover click"}},[c("ul",{staticClass:"list-unstyled p-0 mb-0"},t._l(article.tags_data.slice(2),(function(e,r){return c("li",{key:r,staticClass:"cursor-pointer cy-heading-5 cy-line-height-25"},[t._v("\n                          "+t._s(e.tag_name)+"\n                        ")])})),0)])],1):t._e()],1):t._e()])],1)])],1)})),1)],1)],1):t._e(),t._v(" "),c("cy-resources-card",{attrs:{"page-info":t.$route.meta.slug}}),t._v(" "),c("cy-matrix-card"),t._v(" "),c("cy-solutions-banner")],1)}),[],!1,null,"b7c7914c",null);e.default=component.exports}}]);
//# sourceMappingURL=7b124d0.modern.js.map