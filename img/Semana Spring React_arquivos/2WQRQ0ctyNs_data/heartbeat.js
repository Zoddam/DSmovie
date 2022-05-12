(function(g){var window=this;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var h3=function(a,b){if(!Number.isFinite(a))return String(a);a=String(a);var c=a.indexOf(".");-1===c&&(c=a.length);var d="-"===a[0]?"-":"";d&&(a=a.substring(1));return d+(0,g.wSa)("0",Math.max(0,b-c))+a},mXa=function(){return{F:"svg",
T:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},R:[{F:"path",T:{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}}]}},nXa=function(){return{F:"svg",
T:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},R:[{F:"path",T:{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"}}]}},j3=function(a){"number"===typeof a?(this.date=oXa(a,0,1),i3(this,1)):g.Oa(a)?(this.date=oXa(a.getFullYear(),a.getMonth(),a.getDate()),i3(this,a.getDate())):(this.date=new Date(g.Ta()),a=this.date.getDate(),
this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),i3(this,a))},oXa=function(a,b,c){b=new Date(a,b,c);
0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b},i3=function(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))},k3=function(a,b){g.jK.call(this,a,{F:"div",
L:"ytp-reminder-menu",T:{role:"menu",tabindex:"-1"},R:[{F:"div",L:"ytp-reminder-menu-contents",R:[{F:"div",L:"ytp-reminder-menu-items"}]}]},100,!0);this.buttonElement=b;this.j=[];this.menuPopupRenderer=void 0;this.items=this.ya("ytp-reminder-menu-items");this.hide()},qXa=function(a){var b=pXa(a),c=0,d={};
for(c=0;c<b.length;d={ND:d.ND},c++){var e=a.j[c];e||(e=new g.V({F:"div",L:"ytp-reminder-menu-item",T:{role:"menuitem",tabindex:"0"},R:[{F:"div",L:"ytp-reminder-menu-item-icon",Z:"{{icon}}"},{F:"div",L:"ytp-reminder-menu-item-label",Z:"{{text}}"}]}),d.ND=c,e.La("click",function(l){return function(){var m=l.ND;a.Gb();m=pXa(a)[m];a.X("reminderMenuItemClicked",m.serviceEndpoint||m.command)}}(d)),e.xa(a.items),a.j[c]=e);
var f=b[c],h=null;switch(f.icon&&f.icon.iconType){case "NOTIFICATIONS":h=mXa();break;case "NOTIFICATIONS_NONE":h=nXa();break;case "NOTIFICATIONS_ACTIVE":h=g.DG()}f=f.text?g.iw(f.text):"";e.update({icon:h,text:f})}for(;c<a.j.length;)a.j.pop().dispose();0===c?a.Gb():a.wd(a.buttonElement)},pXa=function(a){return(a.menuPopupRenderer&&a.menuPopupRenderer.items||[]).reduce(function(b,c){c&&c.menuServiceItemRenderer&&b.push(c.menuServiceItemRenderer);
return b},[])},l3=function(a){g.V.call(this,{F:"div",
R:[{F:"button",Ba:["ytp-offline-slate-button","ytp-button"],R:[{F:"div",L:"ytp-offline-slate-button-icon",Z:"{{icon}}"},{F:"div",L:"ytp-offline-slate-button-text",Z:"{{text}}"}]}]});this.G=a;this.upcomingEventReminderButtonRenderer=this.toggleButtonRenderer=null;this.u=void 0;this.C=this.j=null;(this.buttonElement=this.ya("ytp-offline-slate-button"))&&this.P(this.buttonElement,"click",this.D);this.hide()},rXa=function(a,b,c){!a.toggleButtonRenderer&&b&&b.toggleButtonRenderer?a.toggleButtonRenderer=
b.toggleButtonRenderer:b&&b.toggleButtonRenderer||(a.toggleButtonRenderer=null);
!a.upcomingEventReminderButtonRenderer&&c&&c.upcomingEventReminderButtonRenderer?a.upcomingEventReminderButtonRenderer=c.upcomingEventReminderButtonRenderer:c&&c.upcomingEventReminderButtonRenderer||(a.upcomingEventReminderButtonRenderer=null);m3(a)},m3=function(a){if(a.toggleButtonRenderer){var b=a.toggleButtonRenderer;
if(b.isToggled){var c=b.toggledText?g.iw(b.toggledText):"";a.update({text:c,icon:n3(b.toggledIcon)})}else c=b.defaultText?g.iw(b.defaultText):"",a.update({text:c,icon:n3(b.defaultIcon)});a.show()}else a.upcomingEventReminderButtonRenderer?(b=sXa(a))?(c=b.text?g.iw(b.text):"",a.update({text:c,icon:n3(b.icon)}),a.show()):a.hide():a.hide()},uXa=function(a,b,c){a.C||(a.C=new g.Et(a.G.S().Ph));
var d={context:g.Jr(a.C.config_||g.Ir())};g.fv()&&(d.context.clientScreenNonce=g.fv());d.params=c;g.Ft(a.C,b,d,{timeout:5E3,onSuccess:function(){a.upcomingEventReminderButtonRenderer&&a.u&&(a.upcomingEventReminderButtonRenderer.currentState=a.u,a.u=void 0)},
onError:function(){tXa(a)},
onTimeout:function(){tXa(a)}})},tXa=function(a){a.toggleButtonRenderer?(a.toggleButtonRenderer.isToggled=!a.toggleButtonRenderer.isToggled,m3(a)):a.upcomingEventReminderButtonRenderer&&(a.u=void 0,m3(a))},n3=function(a){if(!a)return null;
switch(a.iconType){case "NOTIFICATIONS":return mXa();case "NOTIFICATIONS_NONE":return nXa();case "NOTIFICATIONS_ACTIVE":return g.DG();default:return null}},sXa=function(a){if(!a.upcomingEventReminderButtonRenderer)return null;
var b=a.u||a.upcomingEventReminderButtonRenderer.currentState;a=g.r(a.upcomingEventReminderButtonRenderer.states||[]);for(var c=a.next();!c.done;c=a.next())if((c=c.value.upcomingEventReminderButtonStateRenderer)&&c.state===b&&c.button&&c.button.buttonRenderer)return c.button.buttonRenderer;return null},o3=function(a){g.V.call(this,{F:"div",
L:"ytp-offline-slate",R:[{F:"div",L:"ytp-offline-slate-background"},{F:"div",L:"ytp-offline-slate-bar",R:[{F:"span",L:"ytp-offline-slate-icon",R:[{F:"svg",T:{fill:"#fff",height:"100%",viewBox:"0 0 24 24",width:"100%"},R:[{F:"path",T:{d:"M16.94 6.91l-1.41 1.45c.9.94 1.46 2.22 1.46 3.64s-.56 2.71-1.46 3.64l1.41 1.45c1.27-1.31 2.05-3.11 2.05-5.09s-.78-3.79-2.05-5.09zM19.77 4l-1.41 1.45C19.98 7.13 21 9.44 21 12.01c0 2.57-1.01 4.88-2.64 6.54l1.4 1.45c2.01-2.04 3.24-4.87 3.24-7.99 0-3.13-1.23-5.96-3.23-8.01zM7.06 6.91c-1.27 1.3-2.05 3.1-2.05 5.09s.78 3.79 2.05 5.09l1.41-1.45c-.9-.94-1.46-2.22-1.46-3.64s.56-2.71 1.46-3.64L7.06 6.91zM5.64 5.45L4.24 4C2.23 6.04 1 8.87 1 11.99c0 3.13 1.23 5.96 3.23 8.01l1.41-1.45C4.02 16.87 3 14.56 3 11.99s1.01-4.88 2.64-6.54z"}},
{F:"circle",T:{cx:"12",cy:"12",r:"3"}}]}]},{F:"span",L:"ytp-offline-slate-messages",R:[{F:"div",L:"ytp-offline-slate-main-text",T:{"aria-label":"{{label}}"},Z:"{{mainText}}"},{F:"div",L:"ytp-offline-slate-subtitle-text",Z:"{{subtitleText}}"}]},{F:"span",L:"ytp-offline-slate-buttons"}]},{F:"button",Ba:["ytp-offline-slate-close-button","ytp-button"],R:[g.yG()]},{F:"button",Ba:["ytp-offline-slate-open-button","ytp-button"],R:[g.xG()]},{F:"div",L:"ytp-offline-slate-trailer-chip",Z:"Trailer"}]});var b=
this;this.api=a;this.j=this.u=null;this.background=this.ya("ytp-offline-slate-background");this.B=this.ya("ytp-offline-slate-bar");this.D=new g.K(function(){g.Uo(b.B,"ytp-offline-slate-bar-fade")},15E3);
this.I=!1;this.C=new g.K(function(){g.Uo(b.element,"ytp-offline-slate-collapsed")},15E3);
g.H(this,this.C);g.H(this,this.D);this.countdownTimer=new g.K(this.RR,1E3,this);this.P(a,"presentingplayerstatechange",this.UR);this.P(a,"livestatedata",this.Ea);a=this.ya("ytp-offline-slate-close-button");this.P(a,"click",function(){g.Uo(b.element,"ytp-offline-slate-collapsed")});
a=this.ya("ytp-offline-slate-open-button");this.P(a,"click",function(){g.Wo(b.element,"ytp-offline-slate-collapsed")});
this.hide();a=this.getVideoData();a.getPlayerResponse()&&(a=a.getPlayerResponse().playabilityStatus)&&this.Ea(a);a=8===this.api.getPresentingPlayerType()&&!this.getVideoData().Xj;var c=8===this.api.getPresentingPlayerType();g.M(this.element,"ytp-offline-slate-premiere-trailer",a);g.M(this.element,"ytp-offline-slate-hide-background",c)},p3=function(a,b,c){if(b){var d=null!=b.subtitleText?g.iw(b.subtitleText):"";
c=c?c:null!=b.mainText?g.iw(b.mainText):"";var e,f,h,l;b=null!=(l=null==(e=b.mainText)?void 0:null==(f=e.accessibility)?void 0:null==(h=f.accessibilityData)?void 0:h.label)?l:c;a.update({mainText:c,subtitleText:d,label:b});g.M(a.element,"ytp-offline-slate-single-text-line",!d);g.M(a.B,"ytp-offline-slate-bar-hidden",!c&&!d)}},q3=function(a,b){var c=(0,g.Q)();
this.trigger=a;this.j=b;this.B=c},s3=function(a){g.lJ.call(this,a);
var b=this;this.J=!1;this.N=0;this.D=!1;this.u=new g.K(function(){var e=b.player.S(),f=b.getVideoData();r3(b)&&(vXa(b)?wXa(b,e,f):(xXa(b),yXa(b,e,f)))},0);
this.j=this.heartbeatParams=null;this.C=!1;this.I=new g.ji(1E3,6E4,1);this.sequenceNumber=0;this.offlineSlate=null;this.W=new g.Et(void 0);this.V=this.attestationResponse=void 0;this.utcOffsetMinutes=-(new j3).getTimezoneOffset();this.B=new g.Dz(this);g.H(this,this.u);g.H(this,this.B);xXa(this);zXa(this);this.B.P(a,"heartbeatparams",this.Xy);this.B.P(a,"presentingplayerstatechange",this.FU);this.B.P(a,"videoplayerreset",this.GU);this.B.P(a,g.dw("heartbeat"),this.onCueRangeEnter);this.C&&this.j&&AXa(this,
this.j);var c=new g.bw(1E3,0x7ffffffffffff,{priority:1,namespace:"heartbeat"}),d=new g.bw(0x8000000000000,0x8000000000000,{id:"stream_end",priority:1,namespace:"heartbeat"});a.ge([c,d]);BXa(this)},BXa=function(a){var b=a.getVideoData();
b.Zh&&(b=b.botguardData)&&g.gI(b,a.player.S())},xXa=function(a){var b=a.getVideoData();
if(b.Zh&&(b=new g.pBa(b),g.cI.isInitialized()||3<=a.sequenceNumber)){var c=null;if(b.videoData.Ua){var d=g.qBa(b);if(d){c={};var e={};d=d.split("&");d=g.r(d);for(var f=d.next();!f.done;f=d.next())f=f.value.split("="),2===f.length&&(e[f[0]]=f[1]);e.r1a&&(c.webResponse=e.r1a);e.r1c&&(c.error=CXa[Number(e.r1c)]);c.challenge=b.videoData.Ua}}a.attestationResponse=c||void 0}},vXa=function(a){var b=a.getVideoData();
if(!g.CD(a.getVideoData())||b.nK)return!1;if(b.useInnertubeDrmService()&&b.V){a="playready"===b.V.flavor&&b.K("html5_innertube_heartbeats_for_playready");var c="widevine"===b.V.flavor&&b.K("html5_innertube_heartbeats_for_widevine");b=g.xA(b.V)&&b.K("html5_innertube_heartbeats_for_fairplay");return!(a||c||b)}return!0},t3=function(a){if(vXa(a))return!!a.heartbeatParams;
var b=a.player.S(),c=a.getVideoData();return b.K("html5_heartbeat_wait_for_drm_killswitch")||!g.CD(a.getVideoData())||!c.useInnertubeDrmService()||c.Oh||c.hG?!!c.heartbeatToken:!1},u3=function(a,b){if(!a.u.isActive()&&a.J){var c=a.getVideoData();
if(t3(a)||c.isLivePlayback){if(void 0===b)if(a.D)if(a.C)b=7500;else{var d;b=(null==(d=a.heartbeatParams)?0:d.interval)?1E3*a.heartbeatParams.interval:a.getVideoData().hS||6E4}else b=1E3;a.u.start(b)}}},GXa=function(a,b,c){b.rk&&(c=g.zi(c,{internalipoverride:b.rk}));
var d={cpn:b.clientPlaybackNonce};b.contextParams&&(d.context_params=b.contextParams);b.Kb&&(d.kpt=b.Kb);c=g.zi(c,d);g.Oq(c,{format:"RAW",method:"GET",timeout:3E4,onSuccess:function(e){if(!a.u.isActive()&&r3(a)){a.I.reset();a.sequenceNumber++;e=e.responseText;var f=DXa(e);if(f){a.player.Ma("onHeartbeat",f);var h="ok"===f.status?f.stop_heartbeat?2:0:"stop"===f.status?1:"live_stream_offline"===f.status?0:-1}else h=(h=e.match(EXa))?"0"===h[1]?0:1:-1;FXa(a,f,e,h)}},
onError:function(e){r3(a)&&v3(a,!0,"net-"+e.status)},
onTimeout:function(){r3(a)&&v3(a,!0,"timeout")},
withCredentials:!0})},wXa=function(a,b,c){var d;
if(null!=(d=a.heartbeatParams)&&d.url){var e=g.zi(a.heartbeatParams.url,{request_id:g.dqa()});c.Oa&&(e=g.zi(e,{vvt:c.Oa}),c.mdxEnvironment&&(e=g.zi(e,{mdx_environment:c.mdxEnvironment})));g.uC(b,c.oauthToken).then(function(f){f&&(e=g.zi(e,{access_token:f}));GXa(a,c,e)})}},r3=function(a){var b=a.getVideoData();
return 3===a.player.getPresentingPlayerType()||g.U(a.player.wb(a.getPlayerType()),4)?!1:t3(a)||b.isLivePlayback?!0:(w3(a),!1)},yXa=function(a,b,c){var d,e={videoId:c.videoId,
sequenceNumber:a.sequenceNumber,heartbeatServerData:null!=(d=a.Y)?d:c.heartbeatServerData};a.V=a.attestationResponse;c.Zh&&(e.attestationResponse=a.V);var f=g.lI(c),h;d=null!=(h=f.client)?h:{};d.utcOffsetMinutes=a.utcOffsetMinutes;e.context=f;e.cpn=c.clientPlaybackNonce;if(h="undefined"!==typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)d.timeZone=h;h={heartbeatChecks:[]};if(d=c.getPlayerResponse())c.heartbeatToken&&(e.heartbeatToken=c.heartbeatToken),(d=d.playabilityStatus)&&
(d=d.liveStreamability)&&d.liveStreamabilityRenderer&&h.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_LIVE_STREAM_STATUS");c.heartbeatToken&&h.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_YPC");if(g.kC(b)){h.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_UNPLUGGED");f=HXa(a);d={};null!==f&&(d.clientPlayerPositionUtcMillis=f);var l,m;f=(null==(m=null==(l=a.player.ib())?void 0:g.BJ(l))?void 0:m.freePreviewWatchedDuration)||0;0<f&&(d.freePreviewWatchedDuration={seconds:""+f});h.unpluggedParams=d}e.heartbeatRequestParams=
h;b.K("enable_linear_player_handling")&&c.isLivePlayback&&(l=HXa(a),null!==l&&(e.playbackState||(e.playbackState={}),e.playbackState.playbackPosition={utcTimeMillis:l}));var n={timeout:3E4,onSuccess:function(p){if(!a.u.isActive()&&r3(a)){var q=a.getVideoData(),t=q.Zh&&null==a.V,v;q.Zh=!(null==(v=p.heartbeatAttestationConfig)||!v.requiresAttestation)||t;q=p.playabilityStatus;t=JSON.stringify(q)||"{}";p.authenticationMismatch&&a.player.qa("authshear",{});v=-1;var x=p.playabilityStatus;x&&(a.player.Ma("onHeartbeat",
x),"OK"===x.status?v=p.stopHeartbeat?2:0:"UNPLAYABLE"===x.status?v=1:"LIVE_STREAM_OFFLINE"===x.status&&(v=0));a.sequenceNumber&&-1===v||a.I.reset();a.sequenceNumber++;p.heartbeatServerData&&(a.Y=p.heartbeatServerData);FXa(a,q,t,v)}},
onError:function(p){r3(a)&&v3(a,!0,"net-"+p.status)},
onTimeout:function(){r3(a)&&v3(a,!0,"timeout")}};
g.uC(b,g.TD(c)).then(function(p){p&&(n.wM="Bearer "+p);g.Ft(a.W,"player/heartbeat",e,n)})},FXa=function(a,b,c,d){-1===d?(b="decode "+g.Ac(c),v3(a,!1,b)):2===d?(w3(a),a.D=!0):(a.N=0,a.u.stop(),1===d?(a.D=!1,a.player.xg("heartbeat.stop",2,a.lf(c)),g.Xr("heartbeatActionPlayerHalted",IXa(b))):(a.D=!0,c=0,a.C&&b&&(c=AXa(a,b),a.player.X("livestatedata",b)),c?u3(a,c):u3(a)))},AXa=function(a,b){var c=b.liveStreamability&&b.liveStreamability.liveStreamabilityRenderer,d=!(!c||!(c.switchStreamsImmediately||
c.transitionTiming&&"STREAM_TRANSITION_TIMING_IMMEDIATELY"===c.transitionTiming)),e=JXa(c),f=a.getVideoData(),h=a.player.wb(a.getPlayerType()),l=h.Lc()&&!g.HD(f)&&!a.player.isAtLiveHead(a.getPlayerType());
if(2<=f.S().V){var m,n=(null==(m=a.player.Ld())?void 0:m.Mb())||{};n.status=b.status||"";n.dvr=""+ +l;n["switch"]=""+ +d;n.ended=""+ +!(!c||!c.displayEndscreen);a.player.qa("heartbeat",n)}if(l&&!d)return e;d=c&&c.streamTransitionEndpoint&&c.streamTransitionEndpoint.watchEndpoint;if("STREAM_TRANSITION_TIMING_AT_STREAM_END"===(c&&c.transitionTiming))a.getVideoData().fP=d;else{if(l=d)(l=d&&d.videoId)?(a.player.wl(l,{autonav:"1"},void 0,!0,!0,d,g.TD(a.getVideoData())),a.iC("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE",
"HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT",b),l=!0):l=!1;if(l)return e}if("OK"===b.status.toUpperCase()){d=c&&c.broadcastId;l=a.j&&a.j.liveStreamability&&a.j.liveStreamability.liveStreamabilityRenderer&&a.j.liveStreamability.liveStreamabilityRenderer.broadcastId;m=d!==l&&(null!=d||a.player.K("web_player_heartbeat_undefined_killswitch"));if(!f.hlsvp&&!f.jb||m){var p={video_id:f.videoId};f.II&&(p.is_live_destination="1");a.player.K("web_player_heartbeat_request_watch_next")||
(p.disable_watch_next=!0,p.raw_watch_next_response=f.watchNextResponse);p.autonav_state=f.autonavState;p.oauth_token=f.oauthToken;p.force_gvi=f.Ph;p.Hj=f.Hj;c=void 0;f.hlsvp||f.jb?m&&(c=new q3("broadcastIdChanged",l+","+d),a.iC("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_BROADCAST_ID_CHANGED",b)):(d&&(c=new q3("formatsReceived",""+d)),a.iC("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_LIVE_STREAM_WENT_ONLINE",b));a.player.loadVideoByPlayerVars(p,
void 0,void 0,void 0,c);return e}a.player.qf("heartbeat",a.getPlayerType())}c&&c.displayEndscreen&&(a.offlineSlate?(a=a.offlineSlate,a.I=!0,a.ob&&a.api.Mv()):g.DF(h)&&(f=(null==(p=a.player.Ld())?void 0:p.Mb())||{},a.player.qa("hbse",f,!0),a.player.Mv(),a.player.Ma("onLiveMediaEnded",b)));return e},JXa=function(a){var b=0;
a&&a.pollDelayMs&&(a=Number(a.pollDelayMs))&&(b=a);return b},v3=function(a,b,c){var d=a.player.S();
if(!a.u.isActive()){a.u.stop();a.N++;var e=b?"heartbeat.net":"heartbeat.servererror";var f=a.getVideoData();if(f.lK||b&&!g.CD(a.getVideoData())&&!t3(a)&&f.isLivePlayback)f=!1;else{var h,l;(null==(l=a.heartbeatParams)?0:l.Gv)?h=a.heartbeatParams.Gv:h=f.kK||5;f=a.N>=h}f?(g.Xr("heartbeatActionPlayerHalted",b?{enforcedPolicyToHaltOnNetworkFailure:!0}:IXa()),(b=a.getVideoData())&&b.isLivePlayback?a.player.xg(e,1,"Reprodu\u00e7\u00e3o de v\u00eddeo interrompida. Tente novamente.",c):a.player.xg(e,1,"Ocorreu um erro ao licenciar este v\u00eddeo.",
c)):(d.K("html5_report_non_fatal_heartbeat_error")&&a.player.zo(e,{msg:c}),u3(a,a.I.getValue()),g.ki(a.I))}},IXa=function(a){var b={enforcedPolicyToHaltOnNetworkFailure:!1};
a&&(b.serializedServerContext=a.additionalLoggingData);return b},w3=function(a){a.N=0;
a.u.stop();a.D=!1;a.sequenceNumber=0},zXa=function(a){var b=a.getVideoData(),c=a.player.S();
if(b.isLivePlayback)if(g.FA(c.u)){a.C=!0;a.J=!0;if(!g.$B(c)||g.kC(c))a.offlineSlate=new o3(a.player),g.H(a,a.offlineSlate),g.YI(a.player,a.offlineSlate.element,4);(b=b.getPlayerResponse())&&b.playabilityStatus&&(a.j=b.playabilityStatus);var d;if("UNPLAYABLE"!==(null==(d=a.j)?void 0:d.status)||a.player.K("stop_heartbeat_on_unplayable_live_videos_killswitch"))a.j?(d=JXa(a.j.liveStreamability&&a.j.liveStreamability.liveStreamabilityRenderer))?u3(a,d):u3(a,7500):u3(a,1E3)}else a.player.xg("html5.unsupportedlive",
2,"HTML5_NO_AVAILABLE_FORMATS_FALLBACK","nolive.1");else!c.K("html5_release_post_live_heartbeat_killswitch")&&g.Sb(b.oa,"heartbeat")&&a.player.qf("heartbeat",a.getPlayerType())},HXa=function(a){return(a=a.player.getProgressState(a.getPlayerType()).ingestionTime)&&isFinite(a)?""+Math.floor(1E3*a):null},DXa=function(a){try{var b=JSON.parse(a);
return null!=b?b:void 0}catch(c){}},CXa=["ATTESTATION_ERROR_UNKNOWN",
"ATTESTATION_ERROR_VM_NOT_INITIALIZED","ATTESTATION_ERROR_VM_NO_RESPONSE","ATTESTATION_ERROR_VM_TIMEOUT","ATTESTATION_ERROR_VM_INTERNAL_ERROR"],x3={CS:["BC","AD"],BS:["Before Christ","Anno Domini"],QU:"JFMAMJJASOND".split(""),aV:"JFMAMJJASOND".split(""),OU:"January February March April May June July August September October November December".split(" "),ZU:"January February March April May June July August September October November December".split(" "),VU:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
cV:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),lV:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),eV:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),XU:"Sun Mon Tue Wed Thu Fri Sat".split(" "),dV:"Sun Mon Tue Wed Thu Fri Sat".split(" "),RU:"SMTWTFS".split(""),bV:"SMTWTFS".split(""),WU:["Q1","Q2","Q3","Q4"],TU:["1st quarter","2nd quarter","3rd quarter","4th quarter"],jS:["AM","PM"],wS:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],hV:["h:mm:ss a zzzz",
"h:mm:ss a z","h:mm:ss a","h:mm a"],xS:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],tK:6,mV:[5,6],uK:5};
x3={CS:["a.C.","d.C."],BS:["antes de Cristo","depois de Cristo"],QU:"JFMAMJJASOND".split(""),aV:"JFMAMJJASOND".split(""),OU:"janeiro fevereiro mar\u00e7o abril maio junho julho agosto setembro outubro novembro dezembro".split(" "),ZU:"janeiro fevereiro mar\u00e7o abril maio junho julho agosto setembro outubro novembro dezembro".split(" "),VU:"jan. fev. mar. abr. mai. jun. jul. ago. set. out. nov. dez.".split(" "),cV:"jan. fev. mar. abr. mai. jun. jul. ago. set. out. nov. dez.".split(" "),lV:"domingo segunda-feira ter\u00e7a-feira quarta-feira quinta-feira sexta-feira s\u00e1bado".split(" "),
eV:"domingo segunda-feira ter\u00e7a-feira quarta-feira quinta-feira sexta-feira s\u00e1bado".split(" "),XU:"dom. seg. ter. qua. qui. sex. s\u00e1b.".split(" "),dV:"dom. seg. ter. qua. qui. sex. s\u00e1b.".split(" "),RU:"DSTQQSS".split(""),bV:"DSTQQSS".split(""),WU:["T1","T2","T3","T4"],TU:["1\u00ba trimestre","2\u00ba trimestre","3\u00ba trimestre","4\u00ba trimestre"],jS:["AM","PM"],wS:["EEEE, d 'de' MMMM 'de' y","d 'de' MMMM 'de' y","d 'de' MMM 'de' y","dd/MM/y"],hV:["HH:mm:ss zzzz","HH:mm:ss z",
"HH:mm:ss","HH:mm"],xS:["{1} {0}","{1} {0}","{1} {0}","{1} {0}"],tK:6,mV:[5,6],uK:5};g.k=j3.prototype;g.k.vN=x3.tK;g.k.wN=x3.uK;g.k.clone=function(){var a=new j3(this.date);a.vN=this.vN;a.wN=this.wN;return a};
g.k.getFullYear=function(){return this.date.getFullYear()};
g.k.getYear=function(){return this.getFullYear()};
g.k.getMonth=function(){return this.date.getMonth()};
g.k.getDate=function(){return this.date.getDate()};
g.k.getTime=function(){return this.date.getTime()};
g.k.getDay=function(){return this.date.getDay()};
g.k.getUTCFullYear=function(){return this.date.getUTCFullYear()};
g.k.getUTCMonth=function(){return this.date.getUTCMonth()};
g.k.getUTCDate=function(){return this.date.getUTCDate()};
g.k.getUTCDay=function(){return this.date.getDay()};
g.k.getUTCHours=function(){return this.date.getUTCHours()};
g.k.getUTCMinutes=function(){return this.date.getUTCMinutes()};
g.k.getTimezoneOffset=function(){return this.date.getTimezoneOffset()};
g.k.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
g.k.setFullYear=function(a){this.date.setFullYear(a)};
g.k.setYear=function(a){this.setFullYear(a)};
g.k.setMonth=function(a){this.date.setMonth(a)};
g.k.setDate=function(a){this.date.setDate(a)};
g.k.setTime=function(a){this.date.setTime(a)};
g.k.setUTCFullYear=function(a){this.date.setUTCFullYear(a)};
g.k.setUTCMonth=function(a){this.date.setUTCMonth(a)};
g.k.setUTCDate=function(a){this.date.setUTCDate(a)};
g.k.add=function(a){if(a.u||a.j){var b=this.getMonth()+a.j+12*a.u,c=this.getYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);a:{switch(b){case 1:var d=0!=c%4||0==c%100&&0!=c%400?28:29;break a;case 5:case 8:case 10:case 3:d=30;break a}d=31}d=Math.min(d,this.getDate());this.setDate(1);this.setFullYear(c);this.setMonth(b);this.setDate(d)}a.days&&(c=this.getYear(),b=0<=c&&99>=c?-1900:0,a=new Date((new Date(c,this.getMonth(),this.getDate(),12)).getTime()+864E5*a.days),this.setDate(1),this.setFullYear(a.getFullYear()+
b),this.setMonth(a.getMonth()),this.setDate(a.getDate()),i3(this,a.getDate()))};
g.k.equals=function(a){return!(!a||this.getYear()!=a.getYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
g.k.toString=function(){var a=this.getFullYear(),b=0>a?"-":1E4<=a?"+":"";return[b+h3(Math.abs(a),b?6:4),h3(this.getMonth()+1,2),h3(this.getDate(),2)].join("")+""};
g.k.valueOf=function(){return this.date.valueOf()};g.w(k3,g.jK);k3.prototype.hide=function(){this.buttonElement&&this.buttonElement.removeAttribute("aria-haspopup");g.jK.prototype.hide.call(this)};
k3.prototype.show=function(){this.buttonElement&&this.buttonElement.setAttribute("aria-haspopup","true");g.jK.prototype.show.call(this)};
k3.prototype.ea=function(){g.rf(this.j);g.jK.prototype.ea.call(this)};g.w(l3,g.V);
l3.prototype.D=function(){if(this.toggleButtonRenderer){var a=this.toggleButtonRenderer;a.isToggled?this.B(a.toggledServiceEndpoint):this.B(a.defaultServiceEndpoint);a.isToggled=!a.isToggled;m3(this)}else if(this.upcomingEventReminderButtonRenderer)if(this.j&&this.j.ob)this.j.Gb();else{var b=sXa(this);b&&this.B(b.serviceEndpoint||b.command);b=g.r(b&&b.command&&b.command.commandExecutorCommand&&b.command.commandExecutorCommand.commands||[]);for(var c=b.next();!c.done;c=b.next())if((c=c.value)&&c.openPopupAction&&
c.openPopupAction.popup&&c.openPopupAction.popup.menuPopupRenderer){a=c.openPopupAction.popup.menuPopupRenderer;break}this.j||(this.j=new k3(this.G,this.buttonElement),this.j.xa(this.element),g.H(this,this.j),this.j.subscribe("reminderMenuItemClicked",this.B,this));b=this.j;b.menuPopupRenderer=a;qXa(b)}};
l3.prototype.B=function(a){if(a&&(a.addUpcomingEventReminderEndpoint||a.removeUpcomingEventReminderEndpoint)){if(a.addUpcomingEventReminderEndpoint){var b=a.addUpcomingEventReminderEndpoint;var c="notification/add_upcoming_event_reminder"}else a.removeUpcomingEventReminderEndpoint&&(b=a.removeUpcomingEventReminderEndpoint,c="notification/remove_upcoming_event_reminder");if(c&&b&&b.params)for(uXa(this,c,b.params),a=g.r(b.commands||[]),b=a.next();!b.done;b=a.next())if((b=b.value)&&b.updateUpcomingEventReminderButtonStateCommand){this.u=
b.updateUpcomingEventReminderButtonStateCommand.state;m3(this);break}}};g.w(o3,g.V);g.k=o3.prototype;g.k.getPlayerType=function(){if(8===this.api.getPresentingPlayerType())return 1};
g.k.getVideoData=function(){return this.api.getVideoData(this.getPlayerType())};
g.k.Ea=function(a){var b,c,d=null==a?void 0:null==(b=a.liveStreamability)?void 0:null==(c=b.liveStreamabilityRenderer)?void 0:c.offlineSlate;if(d){this.u=a;b=d.liveStreamOfflineSlateRenderer;b.canShowCountdown?this.RR():p3(this,b);var e,f,h,l;if(c=null==a?void 0:null==(e=a.liveStreamability)?void 0:null==(f=e.liveStreamabilityRenderer)?void 0:null==(h=f.offlineSlate)?void 0:null==(l=h.liveStreamOfflineSlateRenderer)?void 0:l.thumbnail){e=0;f=null;h=c.thumbnails;for(l=0;l<h.length;l++)h[l].width>e&&
(e=h[l].width||0,f=h[l].url);f&&(this.background.style.backgroundImage="url("+f+")")}else this.background.style.backgroundImage="";b.actionButtons||b.reminderButton?(this.j||(this.j=new l3(this.api),this.j.xa(this.ya("ytp-offline-slate-buttons")),g.H(this,this.j)),rXa(this.j,b.actionButtons&&b.actionButtons[0],b.reminderButton)):this.j&&rXa(this.j,null,null);this.u=a}else this.u=null;this.UR()};
g.k.UR=function(a){if(8===this.api.getPresentingPlayerType())var b=!0;else{var c=this.api.wb(),d=this.getVideoData();b=d.isLivePlayback&&(g.DF(c)||g.U(c,2)||g.U(c,64));var e=2===d.autonavState&&g.U(c,2);c=c.Lc()&&!g.HD(d)&&!this.api.isAtLiveHead(void 0,!0);b=b&&!c&&!e}b&&this.u?this.ob?(null==a?0:g.RE(a,2))&&!this.getVideoData().Xj&&(g.Wo(this.element,"ytp-offline-slate-collapsed"),this.C.stop(),g.Wo(this.B,"ytp-offline-slate-bar-fade"),this.D.start()):(this.show(),this.C.start(),this.api.X("offlineslatestatechange"),
this.I&&this.api.Mv()):this.ob&&(this.hide(),this.api.X("offlineslatestatechange"))};
g.k.RR=function(){var a,b,c,d,e=null==(a=this.u)?void 0:null==(b=a.liveStreamability)?void 0:null==(c=b.liveStreamabilityRenderer)?void 0:null==(d=c.offlineSlate)?void 0:d.liveStreamOfflineSlateRenderer;e&&(a=Math.floor(g.Ta()/1E3),b=e.canShowCountdown&&Number(e.scheduledStartTime),!b||b<=a?(p3(this,e),this.countdownTimer.stop()):(p3(this,e,g.rH(b-a)),g.No(this.countdownTimer)))};
g.k.ea=function(){this.countdownTimer.dispose();this.countdownTimer=null;g.V.prototype.ea.call(this)};q3.prototype.u=function(a){return this.trigger&&a.trigger?this.trigger===a.trigger&&this.j===a.j:!1};
q3.prototype.isExpired=function(){return 6E4<(0,g.Q)()-this.B};
q3.prototype.toString=function(){return"heartbeat:"+this.trigger+":"+this.j};g.w(s3,g.lJ);g.k=s3.prototype;g.k.ea=function(){w3(this);this.player.Of("heartbeat");g.lJ.prototype.ea.call(this)};
g.k.onCueRangeEnter=function(){this.J=!0;u3(this,2E3)};
g.k.Xy=function(a){this.heartbeatParams=a;u3(this,2E3)};
g.k.FU=function(a){var b;8===this.player.getPresentingPlayerType()||"UNPLAYABLE"===(null==(b=this.j)?void 0:b.status)&&!this.player.K("stop_heartbeat_on_unplayable_live_videos_killswitch")||(g.U(a.state,2)||g.U(a.state,64)?(w3(this),this.C&&(this.J=!0,u3(this,1E3))):(g.U(a.state,1)||g.U(a.state,8))&&u3(this,2E3))};
g.k.GU=function(){3!==this.player.getPresentingPlayerType()&&u3(this,2E3)};
g.k.getPlayerType=function(){if(8===this.player.getPresentingPlayerType())return 1};
g.k.getVideoData=function(){return this.player.getVideoData(this.getPlayerType())};
g.k.dj=function(a){switch(a){case 4:case 3:return!1}return!0};
g.k.iC=function(a,b,c){a={trigger:a,reason:b};c&&(a.serializedServerContext=c.additionalLoggingData);g.Xr("heartbeatActionPlayerTransitioned",a)};
g.k.lf=function(a){var b="LICENSE",c=DXa(a);if(c)return c.reason||g.dK[b]||"";(a=a.match(EXa))&&(a=Number(a[1]))&&(b=g.bya(a));return g.dK[b]||""};
g.k.zy=function(){return!!this.offlineSlate&&this.offlineSlate.ob};
var EXa=/^GLS\/1.0 (\d+) (\w+).*?\r\n\r\n([\S\s]*)$/;g.kJ("heartbeat",s3);})(_yt_player);