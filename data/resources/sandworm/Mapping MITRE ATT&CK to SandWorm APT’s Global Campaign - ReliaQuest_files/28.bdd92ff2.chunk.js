(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"+MHw":function(e,t,n){"use strict";var c=n("ERkP"),a=n.n(c);t.a=function FillerElement(){return a.a.createElement("div",{"aria-hidden":!0,"aria-label":"exiting drift widget",role:"button",tabIndex:0})}},"3y+j":function(e,t,n){},"BA/U":function(e,t,n){"use strict";n.d(t,"a",function(){return c});var c=function onKeyDownSubmit(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n){(function isEnter(e){return"Enter"===e.key||13===e.keyCode}(n)||t&&function isSpace(e){return"Space"===e.key||32===e.keyCode}(n))&&(n.preventDefault(),e())}}},BY8A:function(e,t,n){"use strict";var c=n("s8DI"),a=n("QtlZ"),o=n("Hvhg"),i=n("ERkP"),r=n.n(i),s=n("rTkt");n("zoZM");t.a=function ThemeStyleSheets(){var e=Object(i.useState)(!1),t=Object(c.a)(e,2),n=t[0],l=t[1],u=Object(o.b)(Object(a.b)());return Object(i.useEffect)(function(){n||(Object(s.a)(u),Object(s.b)(u),l(!0))},[u,n]),r.a.createElement("div",{className:"drift-widget-preload-fonts","aria-hidden":"true"},r.a.createElement("span",null,"A"),r.a.createElement("strong",null,"B"))}},NJR1:function(e,t,n){},"ab+K":function(e,t,n){"use strict";var c=n("/UYI"),a=n("nQD+"),o=n("Za8o"),i=n("LwEI"),r=n("ERkP"),s=n.n(r);n("NJR1");t.a=function MessageCloseButton(e){var t=e.onClick,n=e.shouldFocus,l=void 0!==n&&n,u=Object(i.a)(),d=Object(r.useRef)(null);Object(o.a)(d,l);return s.a.createElement(a.a,{onClick:function handleOnClick(e){(null===d||void 0===d?void 0:d.current)&&(null===d||void 0===d||d.current.blur()),t(e)},ref:d,className:"drift-widget-message-close-button drift-widget-close-button--align-".concat(u),"aria-label":"Close Drift Widget messenger preview overlay"},s.a.createElement(c.a,{width:10,height:10}))}},dT9Q:function(e,t,n){"use strict";var c=n("s8DI"),a=n("BA/U"),o=n("ab+K"),i=n("7oh4"),r=n("nedb"),s=n("Erxq"),l=n("58kB"),u=n("hEj5"),d=n("IJKc"),b=n("LwEI"),f=n("SsZN"),O=n("vjCh"),j=n("qixE"),g=n("xwTo"),v=n("da4L"),m=n("+f1A"),p=n("X9/c"),h=n("g6eD"),E=n("2XY6"),C=n("i9gz"),w=n("RhEL"),k=n("LVcX"),S=n("ERkP"),I=n.n(S),A=n("uDfI"),_=n("vTYT"),y=n("y0on"),R=n("4c+F");n("pUpc");t.a=function MessagePreview(){var e=Object(u.a)(),t=Object(c.a)(e,2),n=t[0],D=t[1],N=Object(A.b)(),M=Object(S.useState)(null),T=Object(c.a)(M,2),L=T[0],P=T[1],J=Object(A.c)(function(e){return e.conversations}).activeConversation,U=Object(A.c)(function(e){return e.session.gdpr}),x=Object(d.a)(),B=Object(r.a)(),W=Object(A.c)(E.g),F=Object(A.c)(m.g),Z=Object(A.c)(g.d),H=Object(A.c)(m.j),K=Object(A.c)(m.n),V=Object(A.c)(function(e){return e.view.chatOpen}),Q=!V&&!W,X=Object(b.a)(),z=Object(l.a)(L?L.authorId:null).recipient,G=Object(S.useMemo)(function(){return!(U.declinedConsent||!L||!L.body||V||Q)},[U.declinedConsent,L,V,Q]);Object(S.useEffect)(function setLatestMessageFromConvo(){if(Object(C.a)(x))P(null);else{var e=x.pop()||{};L&&Object(w.a)(e.id,L.id)||P(Object(v.t)(e,100))}},[x]),Object(S.useLayoutEffect)(function updateFrameSize(){if(G){var e=n?n.width:0,t=n?n.height:0,c=e+i.b+40,a=t+36;Object(p.c)(a,c)}},[n,G]);var Y=Object(s.a)(L);if(!G)return null;var q=function dismiss(){L&&(Object(j.d)(J),P({}),Object(p.b)(),$())},$=function dismissPlaybookIfNotInteracted(){if(!Object(g.k)()){var e=Object(k.a)(null,["attributes","playbookId"],B);if(Object(f.o)(L),Object(O.k)(B.id,e),!Z){var t=H===K;Object(R.c)("Playbook Dismissed",{campaignId:B.id,playbookId:e,endUserId:F,isEndUserFirstVisit:t,isInEngagementEAP:!1,clickedElement:"preview"})}}},ee=function openChat(){if(Object(p.b)(),Y){var e=Object(k.a)(null,["attributes","playbookId"],B);if(Object(f.n)(L),Object(O.k)(B.id,e),!Z){var t=H===K;Object(R.c)("Playbook Clicked",{campaignId:B.id,playbookId:e,endUserId:F,isEndUserFirstVisit:t,isInEngagementEAP:!1,clickedElement:"preview"})}}N(Object(h.f)({chatOpen:!0}))},te=Object(v.b)(L),ne=Object(y.a)(z.name,te);return W?I.a.createElement("div",{className:"drift-widget-message-preview-wrapper",key:"".concat(L.id,"-preview-box")},I.a.createElement("div",{className:"drift-widget-message-preview drift-widget-message-preview--align-".concat(X)},X===_.b.RIGHT&&I.a.createElement(o.a,{onClick:q}),I.a.createElement("div",{onClick:ee,onKeyDown:Object(a.a)(ee),className:"drift-widget-message-preview-text drift-widget-message-preview-text--align-".concat(X),"aria-label":"".concat(ne?ne+" - ":"","Open chat"),"aria-live":"polite",tabIndex:0,role:"button"},I.a.createElement("span",{ref:D},te)),X===_.b.LEFT&&I.a.createElement(o.a,{onClick:q}))):null}},g3yi:function(e,t,n){"use strict";var c=n("nfbA"),a=n("efbE"),o=n("LeJ0"),i=function getDefaultAuthParams(e){return{embed_id:e,client_id:o.a.CLIENT_ID,consent_id:"has_consent"}};n.d(t,"b",function(){return r}),n.d(t,"a",function(){return s});var r=function executeWidgetBootstrapForMode(e,t){switch(e){case"LANDING_PAGE":return u(t);case"CHAT":default:return l(t)}},s=function executeBootstrapPing(e){return a.b.post("widget_bootstrap/ping/v2",{data:{ping_context:e}})},l=function widgetBootstrap(e){var t=i(e.embed_id);return a.b.post("widget_bootstrap",{data:Object(c.a)(Object(c.a)({},t),e)})},u=function landingPageBootstrap(e){var t=i(e.embed_id);return a.b.post("widget_bootstrap/landing_page",{data:Object(c.a)(Object(c.a)({},t),e)})}},pUpc:function(e,t,n){},xKh3:function(e,t,n){"use strict";n.d(t,"b",function(){return E}),n.d(t,"a",function(){return C});var c=n("mj2O"),a=n.n(c),o=n("7SM1"),i=n("uIJS"),r=n("wQh9"),s=n("LeJ0"),l=n("QtlZ"),u=n("xwTo"),d=n("mJgV"),b=n("qwiD"),f=n("NsjZ"),O=n("ADGC"),j=n("+D5C"),g=n("0lfv"),v=n("76KI"),m=n("l+Xe"),p=n("JelZ"),h=new(function(){function RefetchMessagesState(){Object(i.a)(this,RefetchMessagesState),this.isJoinAfterConnectionLost=void 0,this.reconnectAttempts=void 0,this.rejoinAttempts=void 0,this.closeCode=void 0,this.isJoinAfterConnectionLost=!1,this.reconnectAttempts=0,this.rejoinAttempts=0,this.closeCode=0}return Object(r.a)(RefetchMessagesState,[{key:"shouldRefetchMessagesOnChannelJoin",value:function shouldRefetchMessagesOnChannelJoin(){return this.isJoinAfterConnectionLost}},{key:"onSocketDisconnect",value:function onSocketDisconnect(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;e>999&&(this.closeCode=e),this.isJoinAfterConnectionLost=!0}},{key:"resetStateOnJoin",value:function resetStateOnJoin(){this.isJoinAfterConnectionLost=!1,this.reconnectAttempts=0,this.rejoinAttempts=0,this.closeCode=0}},{key:"setAttempt",value:function setAttempt(e,t){"rejoin"===e?this.rejoinAttempts=t:"reconnect"===e&&(this.reconnectAttempts=t)}}]),RefetchMessagesState}()),E=function OpenSocket(e){var t=e.session_token,n=e.org_id,c=e.socketCluster,a=e.ip,o="is_mobile_".concat(Object(O.c)(!0)),i=s.a.WS_PROTOCOL,r="LOCAL"===s.a.WS_USER_ENV?"":"".concat(n,"-"),u=Object(d.a)(l.a.getState()),b=Object(p.a)(n),m=u.includes(b.toString()),E=Object(v.a)("has_socket_long_polling"),C=m||E,k=w(n,r,c),S="".concat(i,"://").concat(k,"/ws"),I=new f.b(S,{params:{session_token:t,remote_ip:a},timeout:1e4,reconnectAfterMs:function reconnectAfterMs(e){return h.setAttempt("reconnect",e),[1e3,2e3,5e3,1e4][e-1]||1e4},rejoinAfterMs:function rejoinAfterMs(e){return h.setAttempt("rejoin",e),[1e3,2e3,5e3][e-1]||1e4}});return I.connect(),I.onError(function(e,t,o){var i=!1,r=!1;C&&t===WebSocket&&h.reconnectAttempts>4?(I.replaceTransport(f.a),I.connect(),i=!0):C&&t===f.a&&(I.replaceTransport(WebSocket),I.connect(),r=!0),c===j.c.CHAT&&(E&&Object(g.n)({data:["ERROR - chat cluster disconnected on org: ".concat(n,", on IP: ").concat(a),"is_mobile_".concat(Object(O.c)(!0)),"Used Long Poll Transport: ".concat(i),"Used Round Robin back to WS Transport: ".concat(r),"establishedConnections: ".concat(o),"Attempts to Rejoin: ".concat(h.rejoinAttempts),"Attempts to Reconnect: ".concat(h.reconnectAttempts)],internal:!0}),h.onSocketDisconnect())}),I.onClose(function(e){var t=null===e||void 0===e?void 0:e.code;c===j.c.CHAT&&(E&&Object(g.n)({data:["CLOSE - chat cluster closed on org: ".concat(n,", on IP: ").concat(a),o],internal:!0}),h.onSocketDisconnect(t),I.isConnected()&&"closed"!==I.connectionState()&&1e3!==t||(Object(g.n)({data:["WS Reconnect - attempting to reconnect to chat cluster ".concat(n,", IP: ").concat(a," after close code ").concat(t),"Socket Status: isConnected: ".concat(I.isConnected(),", connectionState: ").concat(I.connectionState()),o]}),h.setAttempt("reconnect",1),I.connect()))}),I},C=function(){var e=Object(o.a)(a.a.mark(function _callee2(e){var t,n,c,i;return a.a.wrap(function _callee2$(r){for(;;)switch(r.prev=r.next){case 0:return t=e.channelName,n=e.socket,c=e.events,i=new Promise(function(){var e=Object(o.a)(a.a.mark(function _callee(e,o){var i;return a.a.wrap(function _callee$(a){for(;;)switch(a.prev=a.next){case 0:i=n.channel(t),c.forEach(function(e){var t=e.topic,n=e.event;i.on(t,n)}),i.join().receive("ok",function(){if(Object(u.k)()&&h.shouldRefetchMessagesOnChannelJoin()&&t.startsWith(j.b.USER)){Object(g.n)({data:["joined user channel ".concat(t," after disconnect and user interacted with active conversation"),"is_mobile_".concat(Object(O.c)(!0))],internal:!0});var n=Object(v.a)("messages_refetch")||1e3===h.closeCode;l.a.dispatch(Object(b.x)({channel:j.b.USER,shouldRefetchMessagesForActiveConversation:n})),h.resetStateOnJoin()}e({channel:i})}).receive("error",function(e){Object(g.n)({data:["Error connecting to channel: ".concat(t)]}),o(e)}).receive("timeout",function(e){Object(g.n)({data:["Joining the ".concat(t," channel timed out. ")]})});case 3:case"end":return a.stop()}},_callee)}));return function(t,n){return e.apply(this,arguments)}}()),r.abrupt("return",i);case 3:case"end":return r.stop()}},_callee2)}));return function JoinChannel(t){return e.apply(this,arguments)}}(),w=function _resolveSocketBaseForType(e,t,n){switch(n){case j.c.CHAT:return"".concat(Object(m.d)(e));case j.c.USER:return s.a.WS_USER_BASE;case j.c.PRESENCE:return"".concat(t).concat(Object(m.c)(e));case j.c.VISITOR_PRESENCE:return s.a.WS_VISITOR_PRESENCE_BASE;default:return""}}},yXOZ:function(e,t,n){"use strict";var c=n("s8DI"),a=n("BA/U"),o=n("O94r"),i=n.n(o),r=n("+Kbs"),s=n("yEsl"),l=n("hSLT"),u=n("nedb"),d=n("mZ4K"),b=n("UvQv"),f=n("fL0f"),O=n("Za8o"),j=n("Erxq"),g=n("tLIi"),v=n("hhdZ"),m=n("58kB"),p=n("lE29"),h=n("cwuI"),E=n("IJKc"),C=n("LwEI"),w=n("Hnjx"),k=n("SsZN"),S=n("vjCh"),I=n("ILQF"),A=n("xwTo"),_=n("+f1A"),y=n("g6eD"),R=n("2XY6"),D=n("LVcX"),N=n("i9gz"),M=n("0B8E"),T=n("ERkP"),L=n.n(T),P=n("Tr4L"),J=n("uDfI"),U=n("ADGC"),x=n("MFhO"),B=n("4c+F"),W=n("1kux"),F=(n("3y+j"),"SENDER"),Z="MEGAPHONE",H="THEME_ICON";t.a=function WidgetIcon(){var e=Object(T.useState)(!1),t=Object(c.a)(e,2),n=t[0],o=t[1],K=Object(T.useRef)(null);Object(O.a)(K,n);var V=Object(b.a)(),Q=V.isDisabled,X=V.setIsDisabled,z=Object(J.b)(),G=Object(P.a)().t,Y=Object(J.c)(function(e){return e.view.chatOpen}),q=Object(J.c)(function(e){return e.session.gdpr}),$=Object(J.c)(R.g),ee=!$&&!Y,te=Object(J.c)(function(e){return!!e.conversations.activeConversation}),ne=Object(C.a)(),ce=Object(u.a)(),ae=Object(J.c)(_.g),oe=Object(J.c)(A.d),ie=Object(J.c)(_.j),re=Object(J.c)(_.n),se=Object(J.c)(function(e){return Object(D.a)(!1,["embed","configuration","theme"],e)}).unreadBadgeEnabled,le=Object(E.a)(),ue=Object(J.c)(function(e){return e.view.isChatTakeover}),de=Object(J.c)(function(e){return e.conversations}).activeConversation,be=Object(v.a)(de),fe=Object(g.a)(),Oe=Object(N.a)(fe)?be:fe,je=Object(j.a)(Oe),ge=Object(p.a)(),ve=ge.backgroundStyles,me=ge.widgetSecondaryColor,pe=Object(h.a)(),he=pe.Icon,Ee=pe.customIcon,Ce=pe.hasCustomIcon,we=Object(d.a)(),ke=Object(l.a)().type,Se=we||Object(D.a)(void 0,["authorId"],Oe),Ie=Object(m.a)(Se).recipient,Ae=le?Object(M.a)(le).length:0,_e=ke===x.a.SLIDER,ye=Se&&(_e||Ae>0),Re=Object(f.a)(["titleNotificationEnabled"]),De=Object(c.a)(Re,1)[0],Ne=void 0!==De&&De,Me=Object(T.useMemo)(function(){return ye?F:_e&&!Se?Z:H},[Se,_e,ye]),Te=Object(w.a)();Object(T.useEffect)(function(){Ne&&Object(I.a)({topic:"page-notification-update",message:{totalUnreadMessages:Ae,pageTitleNotificationMsg:G("titleNotifier.newMessageNotification")}})},[Ae,Ne,G,ee]),Object(T.useEffect)(function(){Q&&!_e&&X(!1)},[Q,_e,X]),Object(T.useEffect)(function(){ee||Object(I.a)({topic:"toggle-widget-controller",message:{isChatTakeover:ue,chatOpen:Y,hasActiveConversation:te&&q.hasConsent}})},[Y,q,te,ue,ee]),Object(T.useEffect)(function(){le&&le.length>0&&!ee&&Object(W.a)()},[ee,le]),Object(T.useEffect)(function(){Object(I.c)({topic:"CONDUCTOR:focusWidgetIcon",handler:function handler(){return o(!0)}})},[]);var Le=function onToggleChat(){if(!Y&&Ae>0&&je){var e=Object(D.a)(null,["attributes","playbookId"],ce);if(Object(S.k)(ce.id,e),Object(k.n)(Oe),Object(k.p)(Oe),!oe){var t=ie===re;Object(B.c)("Playbook Clicked",{campaignId:ce.id,playbookId:e,endUserId:ae,isEndUserFirstVisit:t,isInEngagementEAP:!1,clickedElement:"icon"})}}!function toggle(e){if(_e)Object(I.a)({topic:"slider:showDetails",message:{}}),X(!0);else{var t=!q.hasConsent&&!q.declinedConsent;z(Object(y.f)({chatOpen:e,gdprDismissed:t}))}e&&Object(I.a)({topic:"reset-controller-size"})}(!Y)},Pe=Object(T.useMemo)(function(){return!Ce||ye||Y?null:Ee},[Ee,ye,Y,Ce]),Je=Object(T.useMemo)(function(){if(Y)return Ie.name!==G("agent")?"Close chat with ".concat(Ie.name," in the Drift Widget messenger"):"Close Drift Widget messenger";var e=Ie.name!==G("agent")?"Open chat with ".concat(Ie.name," in the Drift Widget messenger"):"Open Drift Widget messenger";return se&&Ae>0?"".concat(e," - Unread messages: ").concat(Ae):e},[Y,Ie.name,G,se,Ae]);return $?L.a.createElement(L.a.Fragment,null,L.a.createElement("style",null,"\n          :root {\n            --bgColor:".concat(ve.background,";\n            --bgColorHover:").concat(ve.backgroundOnHover,";\n          }\n        ")),L.a.createElement("div",{className:i()("drift-widget-controller drift-widget-controller--align-".concat(ne),[Te],{"drift-widget-controller--closed":!Object(U.c)()&&Y,"drift-widget-controller--custom-icon":Ce,"drift-widget-controller--avatar":ye,"drift-widget-controller--hide":ue,"drift-widget-controller--disabled":Q}),onClick:Le,"aria-label":Je,"aria-disabled":Q,"aria-hidden":Q,role:"button",tabIndex:Q?-1:0,onKeyDown:Object(a.a)(Le),ref:K},L.a.createElement("div",{className:i()("drift-widget-controller-icon",[Te],{"drift-widget-controller-icon--default":Ce&&!ye&&!Y}),style:Pe},L.a.createElement("div",{className:"drift-controller-icon--active"},Me===Z&&L.a.createElement(r.n,{fill:me}),Me===F&&L.a.createElement(s.a,{className:i()([Te],"drift-controller-icon--avatar"),avatarClassName:i()([Te],"drift-controller-icon--avatar-avatar"),id:Se}),Me===H&&!Ce&&he),L.a.createElement("div",{className:"drift-controller-icon--close",style:{backgroundColor:me}})),se&&Ae>0&&L.a.createElement("div",{className:"drift-controller-icon-unread"},Math.min(Ae,99)))):null}},zoZM:function(e,t,n){}}]);