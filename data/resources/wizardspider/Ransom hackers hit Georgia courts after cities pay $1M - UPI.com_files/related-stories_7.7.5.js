define("related-stories",["module","page","utils","bem","tag"],function(e,o,t,a,n){const l={name:e.id,class:"."+e.id};t.broadcast(l.name,"loaded"),t.createModuleNoJQ(l.name,function(i){const e=this,t=new a(i,l.name);this.el=i,this.module=l,this.init=function(){e.broadcast("init"),t.selectElements("link").each(a=>{a.addEventListener("click",e=>{var t=i.closest("article").dataset;n.fire("ga4",{event_name_ga4:"click_headline",event_category_ga4:"module",event_label_ga4:a.textContent,asset_id:t.articleId,article_byline:t.author,content_categories:t.categories,content_title:t.title,content_type:"Related Stories",market:window.tegna.initialTracking.market,section:t.section,subsection:t.subsection,topic:t.topic,subtopic:t.subtopic,video_included:t.hasVideo,platform:"mobile"===o.model.platform?"mobile_web":o.model.platform,site_type:"mobile"===o.model.platform?"mobile_web":o.model.platform,canonical_url:o.model.canonicalUrl,page_type:o.model.pageType,cct_story:t.isCct,original_headline:t.originalHeadline,content_score:t.contentScore,call_letters:o.model.callLetters,tracking_tags:t.trackingTags})})}),e.broadcast("ready")}})});
//# sourceMappingURL=related-stories_7.7.5.js.map