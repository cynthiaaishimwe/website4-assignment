if(CE_USER_SCRIPT=!0,"object"==typeof CE2&&(CE2.uid||CE2.data))throw Error("CE: multiple userscripts installed");if((CE2="undefined"==typeof CE2?{}:CE2).userDataToJs=function(e){for(var t=[["uid","uid"],["snapshots","snapshots"],["status","status"],["flows","flows"],["pageEdits","page_edits"],["sites","sites"],["USER_SCRIPT_VERSION","updated_at"],["__CE_HOST__","ce_app_url"],["COMMON_SCRIPT","common_script_url"],["COMMON_SCRIPT_SECURE","common_script_url"],["TRACKING_SCRIPT","tracking_script_url"],["TRACKING_SCRIPT_SECURE","tracking_script_url"],["AUTH_KEY","hud_auth_key"],["HUD","hud"],["GLOBAL_IP_BLOCK_LIST","global_ip_block_list"],["IS_USING_IP_BLOCKING","is_using_ip_blocking"],["TRACKING_DEST_NEW","v6_tracking_dest"],["TRACKING_DEST_NEW_SECURE","v6_secure_tracking_dest"],["DEST_V11","v11_tracking_dest"],["FT_DEST","flow_tracking_dest"],["PAGE_VIEWS_LIMIT_REACHED","page_views_limit_reached"],["NUMBER_OF_RECORDINGS","recordings_number"],["RECORDINGS_ACTIVATION","recordings_activation"],["ERROR_TRACKING","error_tracking"],["DEST_ERRORS_API","error_tracking_dest"],["DEST_ERRORS_API_DOMAIN","error_tracking_script_url"]],a=0;a<t.length;a++){var r=t[a];CE2.data[r[1]]&&(CE2[r[0]]=CE2.data[r[1]])}CE2.data.recordings_dest&&(CE2.SREC_DEST={record:CE2.data.recordings_dest,sample:CE2.data.recordings_sampling_dest})},"undefined"==typeof CE_USER_DATA&&(CE_USER_SITE_DATA_URL="https://script.crazyegg.com/pages/data-scripts/0108/7782/site/SITENAME.json"),"undefined"==typeof CE_USER_DATA_URL&&"undefined"!=typeof CE_USER_SITE_DATA_URL&&CE_USER_SITE_DATA_URL&&(CE_USER_DATA_URL=CE_USER_SITE_DATA_URL.replace("SITENAME",window.location.host)),CE2.debugEnabled=function(){return"undefined"!=typeof CE_DEBUG&&CE_DEBUG||!!~window.location.href.indexOf("ced=4ca15e992de95bda8e70558a85be2b65")},CE2.debug=function(e){if(!CE2.debugEnabled())return!1;e="string"==typeof e?"CE: "+e:e;console.log(e)},CE2.runLoadedScriptCallbacks=function(e){for(var t;t=CE2.LOADED_SCRIPTS_CALLBACKS[e].shift();)t()},CE2.loadScript=function(e,t){if(CE2.LOADED_SCRIPTS||(CE2.LOADED_SCRIPTS=[]),CE2.INCLUDED_SCRIPTS||(CE2.INCLUDED_SCRIPTS=[]),CE2.LOADED_SCRIPTS_CALLBACKS||(CE2.LOADED_SCRIPTS_CALLBACKS={}),CE2.LOADED_SCRIPTS_CALLBACKS[e]||(CE2.LOADED_SCRIPTS_CALLBACKS[e]=[]),t&&CE2.LOADED_SCRIPTS_CALLBACKS[e].push(t),~CE2.LOADED_SCRIPTS.indexOf(e))return CE2.runLoadedScriptCallbacks(e);var a;if(!~CE2.INCLUDED_SCRIPTS.indexOf(e))return a=document.createElement("script"),CE2.debug("Loading script "+e),a.src=e,a.type="text/javascript",a.async=!0,t=document.getElementsByTagName("script")[0],t.parentNode.insertBefore(a,t),a.onload=a.onreadystatechange=function(){a.readyState&&!/complete|loaded/.test(a.readyState)||(CE2.LOADED_SCRIPTS.push(e),CE2.runLoadedScriptCallbacks(e),a.onload=null,a.onreadystatechange=null)},CE2.INCLUDED_SCRIPTS.push(e),!1},CE2.loadCommonScript=function(e){if(CE2.userMain)return e();CE2.loadScript(CE2.data.common_script_url,e)},CE2.loadTrackingScript=function(e){if(CE2.V11Tracker)return e();CE2.loadScript(CE2.data.tracking_script_url,e)},CE2.loadSessionTrackingScript=function(e){if(CE2.pageState)return e();CE2.loadScript(CE2.data.trackingpagestate_script_url,function(){CE2.loadTrackingScript(e)})},CE2.getUserDataTime=function(){if(window.performance&&performance.getEntriesByType){var e=performance.getEntriesByType("navigation");if(e&&e[0])return"back_forward"===e[0].type?parseInt(+new Date/3e5,10):1}return parseInt(+new Date/36e5,10)},CE2.isNativeFunction=function(e){return!!e&&/\{\s+\[native code\]/.test(Function.prototype.toString.call(e))},CE2.cleanPrototype=function(e){if("undefined"==typeof window)return CE2.s[e];var t="ce_proto_iframe",a=document.getElementById(t);return a||((a=document.createElement("iframe")).id=t,a.title="CrazyEgg Tracking iframe",a.style.display="none",document.documentElement.appendChild(a)),a.contentWindow[e]},CE2.XMLHttpRequest||Object.defineProperty(CE2,"XMLHttpRequest",{get:function(){return CE2._xmlHttpRequest||CE2.isNativeFunction(XMLHttpRequest.prototype.send)||(CE2._xmlHttpRequest=CE2.cleanPrototype("XMLHttpRequest")),CE2._xmlHttpRequest||XMLHttpRequest}}),CE2.afterUserDataLoaded=function(){"undefined"!=typeof CE_LOCAL_SCRIPT_HOST&&(CE2.data.common_script_url=CE_LOCAL_SCRIPT_HOST+"/pages/versioned/common-scripts-source/latest.js",CE2.data.tracking_script_url=CE_LOCAL_SCRIPT_HOST+"/pages/versioned/tracking-scripts-source/latest.js",CE2.data.trackingpagestate_script_url=CE_LOCAL_SCRIPT_HOST+"/pages/versioned/trackingpagestate-scripts-source/latest.js"),window.CE_USER_COMMON_SCRIPT_URL||(window.CE_USER_COMMON_SCRIPT_URL=CE2.data.common_script_url,window.CE_USER_THIRDPARTY_SCRIPT_URL=CE2.data.thirdparty_script_url),CE2.userDataToJs(CE2.data),"ok"===CE2.data.status?CE2.loadCommonScript():CE2.checkLoadCommonScript()},CE2.loadUserData=function(e){CE2.userDataStatus="loading";var t=new CE2.XMLHttpRequest;t.onreadystatechange=function(){if(4==t.readyState)try{200==t.status&&t.responseText&&(CE2.data=JSON.parse(t.responseText),CE2.afterUserDataLoaded(),CE2.userDataStatus="ok")}catch(e){CE2.debug("Error loading user data: "+e.message)}},CE2.debug("Loading user data "+CE_USER_DATA_URL),t.open("GET",CE_USER_DATA_URL+"?t="+CE2.getUserDataTime(),!0),t.send()},CE2.loadUserDataInline=function(){CE2.debug("Loading user data inline"),CE2.data=JSON.parse(CE_USER_DATA),CE2.afterUserDataLoaded(),CE2.userDataStatus="ok"},CE2.checkLoadCommonScript=function(){window.opener&&window.addEventListener("message",function e(t){try{t.source===window.opener&&(a=t.origin,r=CE2.data,(a===r.ce_app_url||~(r.hud&&r.hud.launch_origins||[]).indexOf(a)||~(r.survey_launch_origins||r.addon_launch_origins||[]).indexOf(a))&&(CE2.commonScriptForceLoaded=!0,CE2.loadCommonScript(),window.removeEventListener("message",e)))}catch(e){CE2.debug(e)}var a,r})},CE2.debug("Loading boot"),CE2.userDataStatus)throw Error("CE: multiple userscripts installed");"undefined"!=typeof CE_USER_DATA_URL&&CE_USER_DATA_URL?CE2.loadUserData():"undefined"!=typeof CE_USER_DATA&&CE_USER_DATA?CE2.loadUserDataInline():CE2.debugEnabled()&&CE2.debug("Missing CE_USER_DATA_URL");