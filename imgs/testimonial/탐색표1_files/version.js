var __hctfwoVersion="20210430042024";!function(){function o(o,r){if(r){for(var e=r.split("|"),w=e.length,n=0;n<w;n++)e[n]&&window.document.write('<link rel="stylesheet" type="text/css" href="'+o+e[n]+".css?"+__hctfwoVersion+'"/>');return 1}}var r,e,w,n,i,s,t,c,a,d,f,h,l,m,_,p=navigator.userAgent.toLowerCase();if(window.document.scripts){for(s=(t=window.location.href.toLowerCase()).match(/skin=([^\&]+)/),function(o,r){var e,w,n="";if(o&&(w=(w=o.match(/smb_app=([^\&]+)/))?w[1]:"")&&(n=-1!==w.indexOf("write_")?"/webword/serverProps":-1!==w.indexOf("calc_")?"/webCalc/serverProps":-1!==w.indexOf("show_")?"/webShow/serverProps":-1!==w.indexOf("hwp_")?"/webhwp/serverProps":"",window.hcwoAppMode=w),""!==n&&window.XMLHttpRequest)try{(e=new XMLHttpRequest).addEventListener("load",function(o){o.target.responseText?window.serverProps=JSON.parse(o.target.responseText):o.target.response&&(window.serverProps=JSON.parse(o.target.response)),window.serverProps&&r&&(window.serverProps.skin=r)}),e.addEventListener("error",function(o){console.error("xhr error",o)}),e.addEventListener("abort",function(o){console.error("xhr abort",o)}),e.open("GET",n,!1),e.onreadystatechange=function(){4==e.readyState&&200!=e.status&&304!=e.status&&0!=e.status&&console.error("[XHR Error] "+e.status)},e.send()}catch(o){console.error("xhr error",o)}}(t,s=s?s[1]:""),s=s||window.serverProps&&window.serverProps.skin||"default",l="commonFrame/skins/"+s+"/css/hcwo.css"+(__hctfwoVersion?"?"+__hctfwoVersion:""),m=window.location.pathname,_=-1!==m.indexOf("webFramework"),l=-1!==m.indexOf("framework")?_?"/framework/"+l:"/"+l:l,window.document.write('<link rel="stylesheet" type="text/css" href="'+l+'"/>'),"default"===s&&/smart-tv/.test(p)&&o("commonFrame/skins/"+s+"/css/","hcwo_tv"),c=t,f=(d={i:"불러오는 중",o:"Loading"}).o,(h=window.document.getElementsByTagName("title")[0])&&((c=c.match(/lang=([^\&]+)/))&&c[1]&&(a=d[c[1].substring(0,2)])&&(f=a),h.innerHTML=f+"..."),e=window.document.scripts.length,r=0;r<e&&((w=document.scripts[r])&&((i=w.getAttribute("data-type"))&&o("",i)&&(n=!0),(i=w.getAttribute("data-framework"))&&o("commonFrame/css/",i)&&(n=!0)),!n);r++);((t=window.hcwoAppMode)&&-1!==t.indexOf("_viewer")||/(mobile|android|ipad|iphone)/i.test(p))&&o("","css/hcwo_view")}}();