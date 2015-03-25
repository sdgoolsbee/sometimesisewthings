/* Type Rendering Mix JS - (c) 2013-2014 Tim Brown, Bram Stein. License: new BSD */(function(){'use strict';var b=window;function c(a){var f=d,g;a:{g=f.className.split(/\s+/);for(var n=0,H=g.length;n<H;n+=1)if(g[n]===a){g=!0;break a}g=!1}g||(f.className+=(""===f.className?"":" ")+a)};function e(a,f,g){this.b=null!=a?a:null;this.c=null!=f?f:null;this.g=null!=g?g:null}var h=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;e.prototype.compare=function(a){return this.b>a.b||this.b===a.b&&this.c>a.c||this.b===a.b&&this.c===a.c&&this.g>a.g?1:this.b<a.b||this.b===a.b&&this.c<a.c||this.b===a.b&&this.c===a.c&&this.g<a.g?-1:0};function k(a,f){return 0===a.compare(f)||1===a.compare(f)}
function l(){var a=h.exec(m[1]),f=null,g=null,n=null;a&&(null!==a[1]&&a[1]&&(f=parseInt(a[1],10)),null!==a[2]&&a[2]&&(g=parseInt(a[2],10)),null!==a[3]&&a[3]&&(n=parseInt(a[3],10)));return new e(f,g,n)};function p(){var a=q;return 3===a.a||7===a.a||6===a.a||9===a.a||8===a.a||5===a.a?"grayscale":1===a.a&&k(a.d,new e(6,2))&&1===a.e?"grayscale":"unknown"};var q,r=b.navigator.userAgent,s=0,t=new e,u=0,v=new e,m=null;if(m=/(?:iPod|iPad|iPhone).*? OS ([\d_]+)/.exec(r))u=3,v=l();else if(m=/(?:BB\d{2}|BlackBerry).*?Version\/([^\s]*)/.exec(r))u=9,v=l();else if(m=/Android ([^;)]+)|Android/.exec(r))u=5,v=l();else if(m=/Windows Phone(?: OS)? ([^;)]+)/.exec(r))u=8,v=l();else if(m=/Linux ([^;)]+)|Linux/.exec(r))u=4,v=l();else if(m=/OS X ([^;)]+)/.exec(r))u=2,v=l();else if(m=/Windows NT ([^;)]+)/.exec(r))u=1,v=l();else if(m=/CrOS ([^;)]+)/.exec(r))u=6,v=l();
if(m=/MSIE ([\d\w\.]+)/.exec(r))s=1,t=l();else if(m=/Trident.*rv:([\d\w\.]+)/.exec(r))s=1,t=l();else if(m=/OPR\/([\d.]+)/.exec(r))s=4,t=l();else if(m=/Opera Mini.*Version\/([\d\.]+)/.exec(r))s=4,t=l();else if(m=/Opera(?: |.*Version\/|\/)([\d\.]+)/.exec(r))s=4,t=l();else if(m=/Firefox\/([\d\w\.]+)|Firefox/.exec(r))s=3,t=l();else if(m=/(?:Chrome|CrMo|CriOS)\/([\d\.]+)/.exec(r))s=2,t=l();else if(m=/Silk\/([\d\._]+)/.exec(r))s=7,t=l();else if(5===u||9===u)s=6;else if(m=/Version\/([\d\.\w]+).*Safari/.exec(r))s=
5,t=l();q=new function(a,f,g,n){this.e=a;this.f=f;this.a=g;this.d=n}(s,t,u,v);var w,x;
if(1===q.a){var y;if(2===q.e)y=k(q.f,new e(37))&&k(q.d,new e(6,1))?"directwrite":"gdi";else{var z;if(4===q.e)z=k(q.f,new e(24))&&k(q.d,new e(6,1))?"directwrite":"gdi";else{var A;if(-1===q.d.compare(new e(6,0)))A="gdi";else{var B;if(k(q.d,new e(6,0))){var C;if(C=1===q.e){var D=q.f,E=new e(8,0);C=0===D.compare(E)||-1===D.compare(E)}B=C?"gdi":"directwrite"}else B="unknown";A=B}z=A}y=z}x=y}else x=8===q.a?"directwrite":2===q.a||3===q.a?"coretext":5===q.a||4===q.a||6===q.a||7===q.a||9===q.a?"freetype":
"unknown";w=x;var F=p(),G,I=p();G="unknown"!==I?I:2===q.a||4===q.a?"subpixel":1===q.a?k(q.d,new e(6,0))?"subpixel":1===q.e?k(q.f,new e(7,0))?"subpixel":"grayscale":"subpixel":"unknown";var d=b.document.documentElement;c("tr-"+w);"unknown"===F&&"unknown"!==G&&(F+="-"+G);c("tr-aa-"+F);}());
