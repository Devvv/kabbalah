// moment.js language configuration
// language : russian (ru)
// author : Viktorminator : https://github.com/Viktorminator
(function(){var a=[function(a){return a%10===1&&a%100!==11},function(a){return a%10>=2&&a%10<=4&&a%10%1===0&&(a%100<12||a%100>14)},function(a){return a%10===0||a%10>=5&&a%10<=9&&a%10%1===0||a%100>=11&&a%100<=14&&a%100%1===0},function(a){return!0}],b=function(b,c){var d=b.split("_"),e=Math.min(a.length,d.length),f=-1;while(++f<e)if(a[f](c))return d[f];return d[e-1]},c=function(a,c,d){var e={mm:"\u043c\u0438\u043d\u0443\u0442\u0430_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442_\u043c\u0438\u043d\u0443\u0442\u044b",hh:"\u0447\u0430\u0441_\u0447\u0430\u0441\u0430_\u0447\u0430\u0441\u043e\u0432_\u0447\u0430\u0441\u0430",dd:"\u0434\u0435\u043d\u044c_\u0434\u043d\u044f_\u0434\u043d\u0435\u0439_\u0434\u043d\u044f",MM:"\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u0430_\u043c\u0435\u0441\u044f\u0446\u0435\u0432_\u043c\u0435\u0441\u044f\u0446\u0430",yy:"\u0433\u043e\u0434_\u0433\u043e\u0434\u0430_\u043b\u0435\u0442_\u0433\u043e\u0434\u0430"};return d==="m"?c?"\u043c\u0438\u043d\u0443\u0442\u0430":"\u043c\u0438\u043d\u0443\u0442\u0443":a+" "+b(e[d],+a)},d=function(a,b){var c={nominative:"\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_"),accusative:"\u044f\u043d\u0432\u0430\u0440\u044f_\u0444\u0435\u0432\u0440\u0430\u043b\u044f_\u043c\u0430\u0440\u0442\u0430_\u0430\u043f\u0440\u0435\u043b\u044f_\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433\u0443\u0441\u0442\u0430_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f_\u043e\u043a\u0442\u044f\u0431\u0440\u044f_\u043d\u043e\u044f\u0431\u0440\u044f_\u0434\u0435\u043a\u0430\u0431\u0440\u044f".split("_")},d=/D[oD]? *MMMM?/.test(b)?"accusative":"nominative";return c[d][a.month()]},e=function(a,b){var c={nominative:"\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0430_\u0441\u0443\u0431\u0431\u043e\u0442\u0430".split("_"),accusative:"\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0443_\u0441\u0443\u0431\u0431\u043e\u0442\u0443".split("_")},d=/\[ ?[Вв] ?(?:прошлую|следующую)? ?\] ?dddd/.test(b)?"accusative":"nominative";return c[d][a.day()]},f={months:d,monthsShort:"\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"),weekdays:e,weekdaysShort:"\u0432\u0441\u043a_\u043f\u043d\u0434_\u0432\u0442\u0440_\u0441\u0440\u0434_\u0447\u0442\u0432_\u043f\u0442\u043d_\u0441\u0431\u0442".split("_"),weekdaysMin:"\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),longDateFormat:{LT:"HH:mm",L:"DD.MM.YYYY",LL:"D MMMM YYYY \u0433.",LLL:"D MMMM YYYY \u0433., LT",LLLL:"dddd, D MMMM YYYY \u0433., LT"},calendar:{sameDay:"[\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u0432] LT",nextDay:"[\u0417\u0430\u0432\u0442\u0440\u0430 \u0432] LT",lastDay:"[\u0412\u0447\u0435\u0440\u0430 \u0432] LT",nextWeek:function(){return this.day()===2?"[\u0412\u043e] dddd [\u0432] LT":"[\u0412] dddd [\u0432] LT"},lastWeek:function(){switch(this.day()){case 0:return"[\u0412 \u043f\u0440\u043e\u0448\u043b\u043e\u0435] dddd [\u0432] LT";case 1:case 2:case 4:return"[\u0412 \u043f\u0440\u043e\u0448\u043b\u044b\u0439] dddd [\u0432] LT";case 3:case 5:case 6:return"[\u0412 \u043f\u0440\u043e\u0448\u043b\u0443\u044e] dddd [\u0432] LT"}},sameElse:"L"},relativeTime:{future:"\u0447\u0435\u0440\u0435\u0437 %s",past:"%s \u043d\u0430\u0437\u0430\u0434",s:"\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434",m:c,mm:c,h:"\u0447\u0430\u0441",hh:c,d:"\u0434\u0435\u043d\u044c",dd:c,M:"\u043c\u0435\u0441\u044f\u0446",MM:c,y:"\u0433\u043e\u0434",yy:c},ordinal:function(a){return"."}};typeof module!="undefined"&&module.exports&&(module.exports=f),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("ru",f)})();
// moment.js
// version : 1.7.2
// author : Tim Wood
// license : MIT
// momentjs.com
(function(a){function E(a,b,c,d){var e=c.lang();return e[a].call?e[a](c,d):e[a][b]}function F(a,b){return function(c){return K(a.call(this,c),b)}}function G(a){return function(b){var c=a.call(this,b);return c+this.lang().ordinal(c)}}function H(a,b,c){this._d=a,this._isUTC=!!b,this._a=a._a||null,this._lang=c||!1}function I(a){var b=this._data={},c=a.years||a.y||0,d=a.months||a.M||0,e=a.weeks||a.w||0,f=a.days||a.d||0,g=a.hours||a.h||0,h=a.minutes||a.m||0,i=a.seconds||a.s||0,j=a.milliseconds||a.ms||0;this._milliseconds=j+i*1e3+h*6e4+g*36e5,this._days=f+e*7,this._months=d+c*12,b.milliseconds=j%1e3,i+=J(j/1e3),b.seconds=i%60,h+=J(i/60),b.minutes=h%60,g+=J(h/60),b.hours=g%24,f+=J(g/24),f+=e*7,b.days=f%30,d+=J(f/30),b.months=d%12,c+=J(d/12),b.years=c,this._lang=!1}function J(a){return a<0?Math.ceil(a):Math.floor(a)}function K(a,b){var c=a+"";while(c.length<b)c="0"+c;return c}function L(a,b,c){var d=b._milliseconds,e=b._days,f=b._months,g;d&&a._d.setTime(+a+d*c),e&&a.date(a.date()+e*c),f&&(g=a.date(),a.date(1).month(a.month()+f*c).date(Math.min(g,a.daysInMonth())))}function M(a){return Object.prototype.toString.call(a)==="[object Array]"}function N(a,b){var c=Math.min(a.length,b.length),d=Math.abs(a.length-b.length),e=0,f;for(f=0;f<c;f++)~~a[f]!==~~b[f]&&e++;return e+d}function O(a,b,c,d){var e,f,g=[];for(e=0;e<7;e++)g[e]=a[e]=a[e]==null?e===2?1:0:a[e];return a[7]=g[7]=b,a[8]!=null&&(g[8]=a[8]),a[3]+=c||0,a[4]+=d||0,f=new Date(0),b?(f.setUTCFullYear(a[0],a[1],a[2]),f.setUTCHours(a[3],a[4],a[5],a[6])):(f.setFullYear(a[0],a[1],a[2]),f.setHours(a[3],a[4],a[5],a[6])),f._a=g,f}function P(a,c){var d,e,g=[];!c&&h&&(c=require("./lang/"+a));for(d=0;d<i.length;d++)c[i[d]]=c[i[d]]||f.en[i[d]];for(d=0;d<12;d++)e=b([2e3,d]),g[d]=new RegExp("^"+(c.months[d]||c.months(e,""))+"|^"+(c.monthsShort[d]||c.monthsShort(e,"")).replace(".",""),"i");return c.monthsParse=c.monthsParse||g,f[a]=c,c}function Q(a){var c=typeof a=="string"&&a||a&&a._lang||null;return c?f[c]||P(c):b}function R(a){return a.match(/\[.*\]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function S(a){var b=a.match(k),c,d;for(c=0,d=b.length;c<d;c++)D[b[c]]?b[c]=D[b[c]]:b[c]=R(b[c]);return function(e){var f="";for(c=0;c<d;c++)f+=typeof b[c].call=="function"?b[c].call(e,a):b[c];return f}}function T(a,b){function d(b){return a.lang().longDateFormat[b]||b}var c=5;while(c--&&l.test(b))b=b.replace(l,d);return A[b]||(A[b]=S(b)),A[b](a)}function U(a){switch(a){case"DDDD":return p;case"YYYY":return q;case"S":case"SS":case"SSS":case"DDD":return o;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":case"a":case"A":return r;case"Z":case"ZZ":return s;case"T":return t;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return n;default:return new RegExp(a.replace("\\",""))}}function V(a,b,c,d){var e,f;switch(a){case"M":case"MM":c[1]=b==null?0:~~b-1;break;case"MMM":case"MMMM":for(e=0;e<12;e++)if(Q().monthsParse[e].test(b)){c[1]=e,f=!0;break}f||(c[8]=!1);break;case"D":case"DD":case"DDD":case"DDDD":b!=null&&(c[2]=~~b);break;case"YY":c[0]=~~b+(~~b>70?1900:2e3);break;case"YYYY":c[0]=~~Math.abs(b);break;case"a":case"A":d.isPm=(b+"").toLowerCase()==="pm";break;case"H":case"HH":case"h":case"hh":c[3]=~~b;break;case"m":case"mm":c[4]=~~b;break;case"s":case"ss":c[5]=~~b;break;case"S":case"SS":case"SSS":c[6]=~~(("0."+b)*1e3);break;case"Z":case"ZZ":d.isUTC=!0,e=(b+"").match(x),e&&e[1]&&(d.tzh=~~e[1]),e&&e[2]&&(d.tzm=~~e[2]),e&&e[0]==="+"&&(d.tzh=-d.tzh,d.tzm=-d.tzm)}b==null&&(c[8]=!1)}function W(a,b){var c=[0,0,1,0,0,0,0],d={tzh:0,tzm:0},e=b.match(k),f,g;for(f=0;f<e.length;f++)g=(U(e[f]).exec(a)||[])[0],g&&(a=a.slice(a.indexOf(g)+g.length)),D[e[f]]&&V(e[f],g,c,d);return d.isPm&&c[3]<12&&(c[3]+=12),d.isPm===!1&&c[3]===12&&(c[3]=0),O(c,d.isUTC,d.tzh,d.tzm)}function X(a,b){var c,d=a.match(m)||[],e,f=99,g,h,i;for(g=0;g<b.length;g++)h=W(a,b[g]),e=T(new H(h),b[g]).match(m)||[],i=N(d,e),i<f&&(f=i,c=h);return c}function Y(a){var b="YYYY-MM-DDT",c;if(u.exec(a)){for(c=0;c<4;c++)if(w[c][1].exec(a)){b+=w[c][0];break}return s.exec(a)?W(a,b+" Z"):W(a,b)}return new Date(a)}function Z(a,b,c,d,e){var f=e.relativeTime[a];return typeof f=="function"?f(b||1,!!c,a,d):f.replace(/%d/i,b||1)}function $(a,b,c){var e=d(Math.abs(a)/1e3),f=d(e/60),g=d(f/60),h=d(g/24),i=d(h/365),j=e<45&&["s",e]||f===1&&["m"]||f<45&&["mm",f]||g===1&&["h"]||g<22&&["hh",g]||h===1&&["d"]||h<=25&&["dd",h]||h<=45&&["M"]||h<345&&["MM",d(h/30)]||i===1&&["y"]||["yy",i];return j[2]=b,j[3]=a>0,j[4]=c,Z.apply({},j)}function _(a,c){b.fn[a]=function(a){var b=this._isUTC?"UTC":"";return a!=null?(this._d["set"+b+c](a),this):this._d["get"+b+c]()}}function ab(a){b.duration.fn[a]=function(){return this._data[a]}}function bb(a,c){b.duration.fn["as"+a]=function(){return+this/c}}var b,c="1.7.2",d=Math.round,e,f={},g="en",h=typeof module!="undefined"&&module.exports,i="months|monthsShort|weekdays|weekdaysShort|weekdaysMin|longDateFormat|calendar|relativeTime|ordinal|meridiem".split("|"),j=/^\/?Date\((\-?\d+)/i,k=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|.)/g,l=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?)/g,m=/([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,n=/\d\d?/,o=/\d{1,3}/,p=/\d{3}/,q=/\d{1,4}/,r=/[0-9a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+/i,s=/Z|[\+\-]\d\d:?\d\d/i,t=/T/i,u=/^\s*\d{4}-\d\d-\d\d(T(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,v="YYYY-MM-DDTHH:mm:ssZ",w=[["HH:mm:ss.S",/T\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/T\d\d:\d\d:\d\d/],["HH:mm",/T\d\d:\d\d/],["HH",/T\d\d/]],x=/([\+\-]|\d\d)/gi,y="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),z={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},A={},B="DDD w M D d".split(" "),C="M D H h m s w".split(" "),D={M:function(){return this.month()+1},MMM:function(a){return E("monthsShort",this.month(),this,a)},MMMM:function(a){return E("months",this.month(),this,a)},D:function(){return this.date()},DDD:function(){var a=new Date(this.year(),this.month(),this.date()),b=new Date(this.year(),0,1);return~~((a-b)/864e5+1.5)},d:function(){return this.day()},dd:function(a){return E("weekdaysMin",this.day(),this,a)},ddd:function(a){return E("weekdaysShort",this.day(),this,a)},dddd:function(a){return E("weekdays",this.day(),this,a)},w:function(){var a=new Date(this.year(),this.month(),this.date()-this.day()+5),b=new Date(a.getFullYear(),0,4);return~~((a-b)/864e5/7+1.5)},YY:function(){return K(this.year()%100,2)},YYYY:function(){return K(this.year(),4)},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return~~(this.milliseconds()/100)},SS:function(){return K(~~(this.milliseconds()/10),2)},SSS:function(){return K(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return a<0&&(a=-a,b="-"),b+K(~~(a/60),2)+":"+K(~~a%60,2)},ZZ:function(){var a=-this.zone(),b="+";return a<0&&(a=-a,b="-"),b+K(~~(10*a/6),4)}};while(B.length)e=B.pop(),D[e+"o"]=G(D[e]);while(C.length)e=C.pop(),D[e+e]=F(D[e],2);D.DDDD=F(D.DDD,3),b=function(c,d){if(c===null||c==="")return null;var e,f;return b.isMoment(c)?new H(new Date(+c._d),c._isUTC,c._lang):(d?M(d)?e=X(c,d):e=W(c,d):(f=j.exec(c),e=c===a?new Date:f?new Date(+f[1]):c instanceof Date?c:M(c)?O(c):typeof c=="string"?Y(c):new Date(c)),new H(e))},b.utc=function(a,c){return M(a)?new H(O(a,!0),!0):(typeof a=="string"&&!s.exec(a)&&(a+=" +0000",c&&(c+=" Z")),b(a,c).utc())},b.unix=function(a){return b(a*1e3)},b.duration=function(a,c){var d=b.isDuration(a),e=typeof a=="number",f=d?a._data:e?{}:a,g;return e&&(c?f[c]=a:f.milliseconds=a),g=new I(f),d&&(g._lang=a._lang),g},b.humanizeDuration=function(a,c,d){return b.duration(a,c===!0?null:c).humanize(c===!0?!0:d)},b.version=c,b.defaultFormat=v,b.lang=function(a,c){var d;if(!a)return g;(c||!f[a])&&P(a,c);if(f[a]){for(d=0;d<i.length;d++)b[i[d]]=f[a][i[d]];b.monthsParse=f[a].monthsParse,g=a}},b.langData=Q,b.isMoment=function(a){return a instanceof H},b.isDuration=function(a){return a instanceof I},b.lang("en",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinal:function(a){var b=a%10;return~~(a%100/10)===1?"th":b===1?"st":b===2?"nd":b===3?"rd":"th"}}),b.fn=H.prototype={clone:function(){return b(this)},valueOf:function(){return+this._d},unix:function(){return Math.floor(+this._d/1e3)},toString:function(){return this._d.toString()},toDate:function(){return this._d},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds(),!!this._isUTC]},isValid:function(){return this._a?this._a[8]!=null?!!this._a[8]:!N(this._a,(this._a[7]?b.utc(this._a):b(this._a)).toArray()):!isNaN(this._d.getTime())},utc:function(){return this._isUTC=!0,this},local:function(){return this._isUTC=!1,this},format:function(a){return T(this,a?a:b.defaultFormat)},add:function(a,c){var d=c?b.duration(+c,a):b.duration(a);return L(this,d,1),this},subtract:function(a,c){var d=c?b.duration(+c,a):b.duration(a);return L(this,d,-1),this},diff:function(a,c,e){var f=this._isUTC?b(a).utc():b(a).local(),g=(this.zone()-f.zone())*6e4,h=this._d-f._d-g,i=this.year()-f.year(),j=this.month()-f.month(),k=this.date()-f.date(),l;return c==="months"?l=i*12+j+k/30:c==="years"?l=i+(j+k/30)/12:l=c==="seconds"?h/1e3:c==="minutes"?h/6e4:c==="hours"?h/36e5:c==="days"?h/864e5:c==="weeks"?h/6048e5:h,e?l:d(l)},from:function(a,c){return b.duration(this.diff(a)).lang(this._lang).humanize(!c)},fromNow:function(a){return this.from(b(),a)},calendar:function(){var a=this.diff(b().sod(),"days",!0),c=this.lang().calendar,d=c.sameElse,e=a<-6?d:a<-1?c.lastWeek:a<0?c.lastDay:a<1?c.sameDay:a<2?c.nextDay:a<7?c.nextWeek:d;return this.format(typeof e=="function"?e.apply(this):e)},isLeapYear:function(){var a=this.year();return a%4===0&&a%100!==0||a%400===0},isDST:function(){return this.zone()<b([this.year()]).zone()||this.zone()<b([this.year(),5]).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return a==null?b:this.add({d:a-b})},startOf:function(a){switch(a.replace(/s$/,"")){case"year":this.month(0);case"month":this.date(1);case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return this},endOf:function(a){return this.startOf(a).add(a.replace(/s?$/,"s"),1).subtract("ms",1)},sod:function(){return this.clone().startOf("day")},eod:function(){return this.clone().endOf("day")},zone:function(){return this._isUTC?0:this._d.getTimezoneOffset()},daysInMonth:function(){return b.utc([this.year(),this.month()+1,0]).date()},lang:function(b){return b===a?Q(this):(this._lang=b,this)}};for(e=0;e<y.length;e++)_(y[e].toLowerCase(),y[e]);_("year","FullYear"),b.duration.fn=I.prototype={weeks:function(){return J(this.days()/7)},valueOf:function(){return this._milliseconds+this._days*864e5+this._months*2592e6},humanize:function(a){var b=+this,c=this.lang().relativeTime,d=$(b,!a,this.lang()),e=b<=0?c.past:c.future;return a&&(typeof e=="function"?d=e(d):d=e.replace(/%s/i,d)),d},lang:b.fn.lang};for(e in z)z.hasOwnProperty(e)&&(bb(e,z[e]),ab(e.toLowerCase()));bb("Weeks",6048e5),h&&(module.exports=b),typeof ender=="undefined"&&(this.moment=b),typeof define=="function"&&define.amd&&define("moment",[],function(){return b})}).call(this);
/**
 *                                                        ____   _____
 *  Dynarch Calendar -- JSCal2, version 1.9               \  /_  /   /
 *  Built at 2011/03/13 10:28 GMT                          \  / /   /
 *                                                          \/ /_  /
 *  (c) Dynarch.com 2009                                     \  / /
 *  All rights reserved.                                       / /
 *  Visit www.dynarch.com/projects/calendar for details        \/
 *
 */
Calendar=function(){function bm(a){typeof a=="string"&&(a=document.getElementById(a));return a}function bk(a,b,c){for(c=0;c<a.length;++c)b(a[c])}function bj(){var a=document.documentElement,b=document.body;return{x:a.scrollLeft||b.scrollLeft,y:a.scrollTop||b.scrollTop,w:a.clientWidth||window.innerWidth||b.clientWidth,h:a.clientHeight||window.innerHeight||b.clientHeight}}function bi(a){var b=0,c=0,d=/^div$/i.test(a.tagName),e,f;d&&a.scrollLeft&&(b=a.scrollLeft),d&&a.scrollTop&&(c=a.scrollTop),e={x:a.offsetLeft-b,y:a.offsetTop-c},a.offsetParent&&(f=bi(a.offsetParent),e.x+=f.x,e.y+=f.y);return e}function bh(a,b){var c=e?a.clientX+document.body.scrollLeft:a.pageX,d=e?a.clientY+document.body.scrollTop:a.pageY;b&&(c-=b.x,d-=b.y);return{x:c,y:d}}function bg(a,b){var c=a.style;b!=null&&(c.display=b?"":"none");return c.display!="none"}function bf(a,b){b===""?e?a.style.filter="":a.style.opacity="":b!=null?e?a.style.filter="alpha(opacity="+b*100+")":a.style.opacity=b:e?/alpha\(opacity=([0-9.])+\)/.test(a.style.opacity)&&(b=parseFloat(RegExp.$1)/100):b=parseFloat(a.style.opacity);return b}function bd(a,b,c){function h(){var b=a.len;a.onUpdate(c/b,d),c==b&&g(),++c}function g(){b&&(clearInterval(b),b=null),a.onStop(c/a.len,d)}function f(){b&&g(),c=0,b=setInterval(h,1e3/a.fps)}function d(a,b,c,d){return d?c+a*(b-c):b+a*(c-b)}a=U(a,{fps:50,len:15,onUpdate:bl,onStop:bl}),e&&(a.len=Math.round(a.len/2)),f();return{start:f,stop:g,update:h,args:a,map:d}}function bc(a,b){if(!b(a))for(var c=a.firstChild;c;c=c.nextSibling)c.nodeType==1&&bc(c,b)}function bb(a,b){var c=ba(arguments,2);return b==undefined?function(){return a.apply(this,c.concat(ba(arguments)))}:function(){return a.apply(b,c.concat(ba(arguments)))}}function ba(a,b){b==null&&(b=0);var c,d,e;try{c=Array.prototype.slice.call(a,b)}catch(f){c=Array(a.length-b);for(d=b,e=0;d<a.length;++d,++e)c[e]=a[d]}return c}function _(a,b,c){var d=null;document.createElementNS?d=document.createElementNS("http://www.w3.org/1999/xhtml",a):d=document.createElement(a),b&&(d.className=b),c&&c.appendChild(d);return d}function $(a,b,c){if(b instanceof Array)for(var d=b.length;--d>=0;)$(a,b[d],c);else Y(b,c,a?c:null);return a}function Z(a,b){return Y(a,b,b)}function Y(a,b,c){if(a){var d=a.className.replace(/^\s+|\s+$/,"").split(/\x20/),e=[],f;for(f=d.length;f>0;)d[--f]!=b&&e.push(d[f]);c&&e.push(c),a.className=e.join(" ")}return c}function X(a){a=a||window.event,e?(a.cancelBubble=!0,a.returnValue=!1):(a.preventDefault(),a.stopPropagation());return!1}function W(a,b,c,d){if(a instanceof Array)for(var f=a.length;--f>=0;)W(a[f],b,c);else if(typeof b=="object")for(var f in b)b.hasOwnProperty(f)&&W(a,f,b[f],c);else a.removeEventListener?a.removeEventListener(b,c,e?!0:!!d):a.detachEvent?a.detachEvent("on"+b,c):a["on"+b]=null}function V(a,b,c,d){if(a instanceof Array)for(var f=a.length;--f>=0;)V(a[f],b,c,d);else if(typeof b=="object")for(var f in b)b.hasOwnProperty(f)&&V(a,f,b[f],c);else a.addEventListener?a.addEventListener(b,c,e?!0:!!d):a.attachEvent?a.attachEvent("on"+b,c):a["on"+b]=c}function U(a,b,c,d){d={};for(c in b)b.hasOwnProperty(c)&&(d[c]=b[c]);for(c in a)a.hasOwnProperty(c)&&(d[c]=a[c]);return d}function T(a){if(/\S/.test(a)){a=a.toLowerCase();function b(b){for(var c=b.length;--c>=0;)if(b[c].toLowerCase().indexOf(a)==0)return c+1}return b(L("smn"))||b(L("mn"))}}function S(a){if(a){if(typeof a=="number")return P(a);if(!(a instanceof Date)){var b=a.split(/-/);return new Date(parseInt(b[0],10),parseInt(b[1],10)-1,parseInt(b[2],10),12,0,0,0)}}return a}function R(a,b){var c=a.getMonth(),d=a.getDate(),e=a.getFullYear(),f=M(a),g=a.getDay(),h=a.getHours(),i=h>=12,j=i?h-12:h,k=N(a),l=a.getMinutes(),m=a.getSeconds(),n=/%./g,o;j===0&&(j=12),o={"%a":L("sdn")[g],"%A":L("dn")[g],"%b":L("smn")[c],"%B":L("mn")[c],"%C":1+Math.floor(e/100),"%d":d<10?"0"+d:d,"%e":d,"%H":h<10?"0"+h:h,"%I":j<10?"0"+j:j,"%j":k<10?"00"+k:k<100?"0"+k:k,"%k":h,"%l":j,"%m":c<9?"0"+(1+c):1+c,"%o":1+c,"%M":l<10?"0"+l:l,"%n":"\n","%p":i?"PM":"AM","%P":i?"pm":"am","%s":Math.floor(a.getTime()/1e3),"%S":m<10?"0"+m:m,"%t":"\t","%U":f<10?"0"+f:f,"%W":f<10?"0"+f:f,"%V":f<10?"0"+f:f,"%u":g+1,"%w":g,"%y":(""+e).substr(2,2),"%Y":e,"%%":"%"};return b.replace(n,function(a){return o.hasOwnProperty(a)?o[a]:a})}function Q(a,b,c){var d=a.getFullYear(),e=a.getMonth(),f=a.getDate(),g=b.getFullYear(),h=b.getMonth(),i=b.getDate();return d<g?-3:d>g?3:e<h?-2:e>h?2:c?0:f<i?-1:f>i?1:0}function P(a,b,c,d,e){if(!(a instanceof Date)){a=parseInt(a,10);var f=Math.floor(a/1e4);a=a%1e4;var g=Math.floor(a/100);a=a%100,a=new Date(f,g-1,a,b==null?12:b,c==null?0:c,d==null?0:d,e==null?0:e)}return a}function O(a){if(a instanceof Date)return 1e4*a.getFullYear()+100*(a.getMonth()+1)+a.getDate();if(typeof a=="string")return parseInt(a,10);return a}function N(a){a=new Date(a.getFullYear(),a.getMonth(),a.getDate(),12,0,0);var b=new Date(a.getFullYear(),0,1,12,0,0),c=a-b;return Math.floor(c/864e5)}function M(a){a=new Date(a.getFullYear(),a.getMonth(),a.getDate(),12,0,0);var b=a.getDay();a.setDate(a.getDate()-(b+6)%7+3);var c=a.valueOf();a.setMonth(0),a.setDate(4);return Math.round((c-a.valueOf())/6048e5)+1}function L(a,b){var c=i.__.data[a];b&&typeof c=="string"&&(c=K(c,b));return c}function K(a,b){return a.replace(/\$\{([^:\}]+)(:[^\}]+)?\}/g,function(a,c,d){var e=b[c],f;d&&(f=d.substr(1).split(/\s*\|\s*/),e=(e>=f.length?f[f.length-1]:f[e]).replace(/##?/g,function(a){return a.length==2?"#":e}));return e})}function J(b){if(!this._menuAnim){b=b||window.event;var c=b.target||b.srcElement,d=c.getAttribute("dyc-btn"),e=b.keyCode,f=b.charCode||e,g=H[e];if("year"==d&&e==13){var h=new Date(this.date);h.setDate(1),h.setFullYear(this._getInputYear()),this.moveTo(h,!0),z(this,!1);return X(b)}if(this._menuVisible){if(e==27){z(this,!1);return X(b)}}else{b.ctrlKey||(g=null),g==null&&!b.ctrlKey&&(g=I[e]),e==36&&(g=0);if(g!=null){y(this,g);return X(b)}f=String.fromCharCode(f).toLowerCase();var i=this.els.yearInput,j=this.selection;if(f==" "){z(this,!0),this.focus(),i.focus(),i.select();return X(b)}if(f>="0"&&f<="9"){z(this,!0),this.focus(),i.value=f,i.focus();return X(b)}var k=L("mn"),l=b.shiftKey?-1:this.date.getMonth(),m=0,n;while(++m<12){n=k[(l+m)%12].toLowerCase();if(n.indexOf(f)==0){var h=new Date(this.date);h.setDate(1),h.setMonth((l+m)%12),this.moveTo(h,!0);return X(b)}}if(e>=37&&e<=40){var h=this._lastHoverDate;if(!h&&!j.isEmpty()){h=e<39?j.getFirstDate():j.getLastDate();if(h<this._firstDateVisible||h>this._lastDateVisible)h=null}if(!h)h=e<39?this._lastDateVisible:this._firstDateVisible;else{var o=h;h=P(h);var l=100;while(l-->0){switch(e){case 37:h.setDate(h.getDate()-1);break;case 38:h.setDate(h.getDate()-7);break;case 39:h.setDate(h.getDate()+1);break;case 40:h.setDate(h.getDate()+7)}if(!this.isDisabled(h))break}h=O(h),(h<this._firstDateVisible||h>this._lastDateVisible)&&this.moveTo(h)}Y(this._getDateDiv(o),Z(this._getDateDiv(h),"DynarchCalendar-hover-date")),this._lastHoverDate=h;return X(b)}if(e==13&&this._lastHoverDate){j.type==a.SEL_MULTIPLE&&(b.shiftKey||b.ctrlKey)?(b.shiftKey&&this._selRangeStart&&(j.clear(!0),j.selectRange(this._selRangeStart,this._lastHoverDate)),b.ctrlKey&&j.set(this._selRangeStart=this._lastHoverDate,!0)):j.reset(this._selRangeStart=this._lastHoverDate);return X(b)}e==27&&!this.args.cont&&this.hide()}}}function G(){this.refresh();var a=this.inputField,b=this.selection;if(a){var c=b.print(this.dateFormat);/input|textarea/i.test(a.tagName)?a.value=c:a.innerHTML=c}this.callHooks("onSelect",this,b)}function F(a){a=a||window.event;var b=C(a);if(b){var c=b.getAttribute("dyc-btn"),d=b.getAttribute("dyc-type"),e=a.wheelDelta?a.wheelDelta/120:-a.detail/3;e=e<0?-1:e>0?1:0,this.args.reverseWheel&&(e=-e);if(/^(time-(hour|min))/.test(d)){switch(RegExp.$1){case"time-hour":this.setHours(this.getHours()+e);break;case"time-min":this.setMinutes(this.getMinutes()+this.args.minuteStep*e)}X(a)}else/Y/i.test(c)&&(e*=2),y(this,-e),X(a)}}function E(a,b){b=b||window.event;var c=C(b);if(c){var d=c.getAttribute("dyc-type");if(d&&!c.getAttribute("disabled"))if(!a||!this._bodyAnim||d!="date"){var e=c.getAttribute("dyc-cls");e=e?D(e,0):"DynarchCalendar-hover-"+d,(d!="date"||this.selection.type)&&$(a,c,e),d=="date"&&($(a,c.parentNode.parentNode,"DynarchCalendar-hover-week"),this._showTooltip(c.getAttribute("dyc-date"))),/^time-hour/.test(d)&&$(a,this.els.timeHour,"DynarchCalendar-hover-time"),/^time-min/.test(d)&&$(a,this.els.timeMinute,"DynarchCalendar-hover-time"),Y(this._getDateDiv(this._lastHoverDate),"DynarchCalendar-hover-date"),this._lastHoverDate=null}}a||this._showTooltip()}function D(a,b){return"DynarchCalendar-"+a.split(/,/)[b]}function C(a){var b=a.target||a.srcElement,c=b;while(b&&b.getAttribute&&!b.getAttribute("dyc-type"))b=b.parentNode;return b.getAttribute&&b||c}function B(a){a=a||window.event;var b=this.els.topCont.style,c=bh(a,this._mouseDiff);b.left=c.x+"px",b.top=c.y+"px"}function A(b,c){c=c||window.event;var d=C(c);if(d&&!d.getAttribute("disabled")){var f=d.getAttribute("dyc-btn"),g=d.getAttribute("dyc-type"),h=d.getAttribute("dyc-date"),i=this.selection,j,k={mouseover:X,mousemove:X,mouseup:function(a){var b=d.getAttribute("dyc-cls");b&&Y(d,D(b,1)),clearTimeout(j),W(document,k,!0),k=null}};if(b){setTimeout(bb(this.focus,this),1);var l=d.getAttribute("dyc-cls");l&&Z(d,D(l,1));if("menu"==f)this.toggleMenu();else if(d&&/^[+-][MY]$/.test(f))if(y(this,f)){var m=bb(function(){y(this,f,!0)?j=setTimeout(m,40):(k.mouseup(),y(this,f))},this);j=setTimeout(m,350),V(document,k,!0)}else k.mouseup();else if("year"==f)this.els.yearInput.focus(),this.els.yearInput.select();else if(g=="time-am")V(document,k,!0);else if(/^time/.test(g)){var m=bb(function(a){w.call(this,a),j=setTimeout(m,100)},this,g);w.call(this,g),j=setTimeout(m,350),V(document,k,!0)}else h&&i.type&&(i.type==a.SEL_MULTIPLE?c.shiftKey&&this._selRangeStart?i.selectRange(this._selRangeStart,h):(!c.ctrlKey&&!i.isSelected(h)&&i.clear(!0),i.set(h,!0),this._selRangeStart=h):(i.set(h),this.moveTo(P(h),2)),d=this._getDateDiv(h),E.call(this,!0,{target:d})),V(document,k,!0);e&&k&&/dbl/i.test(c.type)&&k.mouseup(),!this.args.fixed&&/^(DynarchCalendar-(topBar|bottomBar|weekend|weekNumber|menu(-sep)?))?$/.test(d.className)&&!this.args.cont&&(k.mousemove=bb(B,this),this._mouseDiff=bh(c,bi(this.els.topCont)),V(document,k,!0))}else if("today"==f)!this._menuVisible&&i.type==a.SEL_SINGLE&&i.set(new Date),this.moveTo(new Date,!0),z(this,!1);else if(/^m([0-9]+)/.test(f)){var h=new Date(this.date);h.setDate(1),h.setMonth(RegExp.$1),h.setFullYear(this._getInputYear()),this.moveTo(h,!0),z(this,!1)}else g=="time-am"&&this.setHours(this.getHours()+12);e||X(c)}}function z(a,b){a._menuVisible=b,$(b,a.els.title,"DynarchCalendar-pressed-title");var c=a.els.menu;f&&(c.style.height=a.els.main.offsetHeight+"px");if(!a.args.animation)bg(c,b),a.focused&&a.focus();else{a._menuAnim&&a._menuAnim.stop();var d=a.els.main.offsetHeight;f&&(c.style.width=a.els.topBar.offsetWidth+"px"),b&&(c.firstChild.style.marginTop=-d+"px",a.args.opacity>0&&bf(c,0),bg(c,!0)),a._menuAnim=bd({onUpdate:function(e,f){c.firstChild.style.marginTop=f(be.accel_b(e),-d,0,!b)+"px",a.args.opacity>0&&bf(c,f(be.accel_b(e),0,.85,!b))},onStop:function(){a.args.opacity>0&&bf(c,.85),c.firstChild.style.marginTop="",a._menuAnim=null,b||(bg(c,!1),a.focused&&a.focus())}})}}function y(a,b,c){this._bodyAnim&&this._bodyAnim.stop();var d;if(b!=0){d=new Date(a.date),d.setDate(1);switch(b){case"-Y":case-2:d.setFullYear(d.getFullYear()-1);break;case"+Y":case 2:d.setFullYear(d.getFullYear()+1);break;case"-M":case-1:d.setMonth(d.getMonth()-1);break;case"+M":case 1:d.setMonth(d.getMonth()+1)}}else d=new Date;return a.moveTo(d,!c)}function w(a){switch(a){case"time-hour+":this.setHours(this.getHours()+1);break;case"time-hour-":this.setHours(this.getHours()-1);break;case"time-min+":this.setMinutes(this.getMinutes()+this.args.minuteStep);break;case"time-min-":this.setMinutes(this.getMinutes()-this.args.minuteStep);break;default:return}}function v(){this._bluringTimeout=setTimeout(bb(u,this),50)}function u(){this.focused=!1,Y(this.els.main,"DynarchCalendar-focused"),this._menuVisible&&z(this,!1),this.args.cont||this.hide(),this.callHooks("onBlur",this)}function t(){this._bluringTimeout&&clearTimeout(this._bluringTimeout),this.focused=!0,Z(this.els.main,"DynarchCalendar-focused"),this.callHooks("onFocus",this)}function s(a){var b=_("div"),c=a.els={},d={mousedown:bb(A,a,!0),mouseup:bb(A,a,!1),mouseover:bb(E,a,!0),mouseout:bb(E,a,!1),keypress:bb(J,a)};a.args.noScroll||(d[g?"DOMMouseScroll":"mousewheel"]=bb(F,a)),e&&(d.dblclick=d.mousedown,d.keydown=d.keypress),b.innerHTML=m(a),bc(b.firstChild,function(a){var b=r[a.className];b&&(c[b]=a),e&&a.setAttribute("unselectable","on")}),V(c.main,d),V([c.focusLink,c.yearInput],a._focusEvents={focus:bb(t,a),blur:bb(v,a)}),a.moveTo(a.date,!1),a.setTime(null,!0);return c.topCont}function q(a){function d(){c.showTime&&(b.push("<td>"),p(a,b),b.push("</td>"))}var b=[],c=a.args;b.push("<table",j," style='width:100%'><tr>"),c.timePos=="left"&&d(),c.bottomBar&&(b.push("<td>"),b.push("<table",j,"><tr><td>","<div dyc-btn='today' dyc-cls='hover-bottomBar-today,pressed-bottomBar-today' dyc-type='bottomBar-today' ","class='DynarchCalendar-bottomBar-today'>",L("today"),"</div>","</td></tr></table>"),b.push("</td>")),c.timePos=="right"&&d(),b.push("</tr></table>");return b.join("")}function p(a,b){b.push("<table class='DynarchCalendar-time'"+j+"><tr>","<td rowspan='2'><div dyc-type='time-hour' dyc-cls='hover-time,pressed-time' class='DynarchCalendar-time-hour'></div></td>","<td dyc-type='time-hour+' dyc-cls='hover-time,pressed-time' class='DynarchCalendar-time-up'></td>","<td rowspan='2' class='DynarchCalendar-time-sep'></td>","<td rowspan='2'><div dyc-type='time-min' dyc-cls='hover-time,pressed-time' class='DynarchCalendar-time-minute'></div></td>","<td dyc-type='time-min+' dyc-cls='hover-time,pressed-time' class='DynarchCalendar-time-up'></td>"),a.args.showTime==12&&b.push("<td rowspan='2' class='DynarchCalendar-time-sep'></td>","<td rowspan='2'><div class='DynarchCalendar-time-am' dyc-type='time-am' dyc-cls='hover-time,pressed-time'></div></td>"),b.push("</tr><tr>","<td dyc-type='time-hour-' dyc-cls='hover-time,pressed-time' class='DynarchCalendar-time-down'></td>","<td dyc-type='time-min-' dyc-cls='hover-time,pressed-time' class='DynarchCalendar-time-down'></td>","</tr></table>")}function o(a){var b=["<table height='100%'",j,"><tr><td>","<table style='margin-top: 1.5em'",j,">","<tr><td colspan='3'><input dyc-btn='year' class='DynarchCalendar-menu-year' size='6' value='",a.date.getFullYear(),"' /></td></tr>","<tr><td><div dyc-type='menubtn' dyc-cls='hover-navBtn,pressed-navBtn' dyc-btn='today'>",L("goToday"),"</div></td></tr>","</table>","<p class='DynarchCalendar-menu-sep'>&nbsp;</p>","<table class='DynarchCalendar-menu-mtable'",j,">"],c=L("smn"),d=0,e=b.length,f;while(d<12){b[e++]="<tr>";for(f=4;--f>0;)b[e++]="<td><div dyc-type='menubtn' dyc-cls='hover-navBtn,pressed-navBtn' dyc-btn='m"+d+"' class='DynarchCalendar-menu-month'>"+c[d++]+"</div></td>";b[e++]="</tr>"}b[e++]="</table></td></tr></table>";return b.join("")}function n(a){return"<div unselectable='on'>"+R(a.date,a.args.titleFormat)+"</div>"}function m(a){var b=["<table class='DynarchCalendar-topCont'",j,"><tr><td>","<div class='DynarchCalendar'>",e?"<a class='DynarchCalendar-focusLink' href='#'></a>":"<button class='DynarchCalendar-focusLink'></button>","<div class='DynarchCalendar-topBar'>","<div dyc-type='nav' dyc-btn='-Y' dyc-cls='hover-navBtn,pressed-navBtn' ","class='DynarchCalendar-navBtn DynarchCalendar-prevYear'><div></div></div>","<div dyc-type='nav' dyc-btn='+Y' dyc-cls='hover-navBtn,pressed-navBtn' ","class='DynarchCalendar-navBtn DynarchCalendar-nextYear'><div></div></div>","<div dyc-type='nav' dyc-btn='-M' dyc-cls='hover-navBtn,pressed-navBtn' ","class='DynarchCalendar-navBtn DynarchCalendar-prevMonth'><div></div></div>","<div dyc-type='nav' dyc-btn='+M' dyc-cls='hover-navBtn,pressed-navBtn' ","class='DynarchCalendar-navBtn DynarchCalendar-nextMonth'><div></div></div>","<table class='DynarchCalendar-titleCont'",j,"><tr><td>","<div dyc-type='title' dyc-btn='menu' dyc-cls='hover-title,pressed-title' class='DynarchCalendar-title'>",n(a),"</div></td></tr></table>","<div class='DynarchCalendar-dayNames'>",k(a),"</div>","</div>","<div class='DynarchCalendar-body'></div>"];(a.args.bottomBar||a.args.showTime)&&b.push("<div class='DynarchCalendar-bottomBar'>",q(a),"</div>"),b.push("<div class='DynarchCalendar-menu' style='display: none'>",o(a),"</div>","<div class='DynarchCalendar-tooltip'></div>","</div>","</td></tr></table>");return b.join("")}function l(a,b,c){b=b||a.date,c=c||a.fdow,b=new Date(b.getFullYear(),b.getMonth(),b.getDate(),12,0,0,0);var d=b.getMonth(),e=[],f=0,g=a.args.weekNumbers;b.setDate(1);var h=(b.getDay()-c)%7;h<0&&(h+=7),b.setDate(0-h),b.setDate(b.getDate()+1);var i=new Date,k=i.getDate(),l=i.getMonth(),m=i.getFullYear();e[f++]="<table class='DynarchCalendar-bodyTable'"+j+">";for(var n=0;n<6;++n){e[f++]="<tr class='DynarchCalendar-week",n==0&&(e[f++]=" DynarchCalendar-first-row"),n==5&&(e[f++]=" DynarchCalendar-last-row"),e[f++]="'>",g&&(e[f++]="<td class='DynarchCalendar-first-col'><div class='DynarchCalendar-weekNumber'>"+M(b)+"</div></td>");for(var o=0;o<7;++o){var p=b.getDate(),q=b.getMonth(),r=b.getFullYear(),s=1e4*r+100*(q+1)+p,t=a.selection.isSelected(s),u=a.isDisabled(b);e[f++]="<td class='",o==0&&!g&&(e[f++]=" DynarchCalendar-first-col"),o==0&&n==0&&(a._firstDateVisible=s),o==6&&(e[f++]=" DynarchCalendar-last-col",n==5&&(a._lastDateVisible=s)),t&&(e[f++]=" DynarchCalendar-td-selected"),e[f++]="'><div dyc-type='date' unselectable='on' dyc-date='"+s+"' ",u&&(e[f++]="disabled='1' "),e[f++]="class='DynarchCalendar-day",L("weekend").indexOf(b.getDay())>=0&&(e[f++]=" DynarchCalendar-weekend"),q!=d&&(e[f++]=" DynarchCalendar-day-othermonth"),p==k&&q==l&&r==m&&(e[f++]=" DynarchCalendar-day-today"),u&&(e[f++]=" DynarchCalendar-day-disabled"),t&&(e[f++]=" DynarchCalendar-day-selected"),u=a.args.dateInfo(b),u&&u.klass&&(e[f++]=" "+u.klass),e[f++]="'>"+p+"</div></td>",b=new Date(r,q,p+1,12,0,0,0)}e[f++]="</tr>"}e[f++]="</table>";return e.join("")}function k(a){var b=["<table",j,"><tr>"],c=0;a.args.weekNumbers&&b.push("<td><div class='DynarchCalendar-weekNumber'>",L("wk"),"</div></td>");while(c<7){var d=(c++ +a.fdow)%7;b.push("<td><div",L("weekend").indexOf(d)>=0?" class='DynarchCalendar-weekend'>":">",L("sdn")[d],"</div></td>")}b.push("</tr></table>");return b.join("")}function a(b){b=b||{},this.args=b=U(b,{animation:!f,cont:null,bottomBar:!0,date:!0,fdow:L("fdow"),min:null,max:null,reverseWheel:!1,selection:[],selectionType:a.SEL_SINGLE,weekNumbers:!1,align:"Bl/ / /T/r",inputField:null,trigger:null,dateFormat:"%Y-%m-%d",fixed:!1,opacity:e?1:3,titleFormat:"%b %Y",showTime:!1,timePos:"right",time:!0,minuteStep:5,noScroll:!1,disabled:bl,checkRange:!1,dateInfo:bl,onChange:bl,onSelect:bl,onTimeChange:bl,onFocus:bl,onBlur:bl}),this.handlers={};var c=this,d=new Date;b.min=S(b.min),b.max=S(b.max),b.date===!0&&(b.date=d),b.time===!0&&(b.time=d.getHours()*100+Math.floor(d.getMinutes()/b.minuteStep)*b.minuteStep),this.date=S(b.date),this.time=b.time,this.fdow=b.fdow,bk("onChange onSelect onTimeChange onFocus onBlur".split(/\s+/),function(a){var d=b[a];d instanceof Array||(d=[d]),c.handlers[a]=d}),this.selection=new a.Selection(b.selection,b.selectionType,G,this);var g=s(this);b.cont&&bm(b.cont).appendChild(g),b.trigger&&this.manageFields(b.trigger,b.inputField,b.dateFormat)}var b=navigator.userAgent,c=/opera/i.test(b),d=/Konqueror|Safari|KHTML/i.test(b),e=/msie/i.test(b)&&!c&&!/mac_powerpc/i.test(b),f=e&&/msie 6/i.test(b),g=/gecko/i.test(b)&&!d&&!c&&!e,h=a.prototype,i=a.I18N={};a.SEL_NONE=0,a.SEL_SINGLE=1,a.SEL_MULTIPLE=2,a.SEL_WEEK=3,a.dateToInt=O,a.intToDate=P,a.printDate=R,a.formatString=K,a.i18n=L,a.LANG=function(a,b,c){i.__=i[a]={name:b,data:c}},a.setup=function(b){return new a(b)},h.moveTo=function(a,b){var c=this;a=S(a);var d=Q(a,c.date,!0),e,f=c.args,g=f.min&&Q(a,f.min),h=f.max&&Q(a,f.max);f.animation||(b=!1),$(g!=null&&g<=1,[c.els.navPrevMonth,c.els.navPrevYear],"DynarchCalendar-navDisabled"),$(h!=null&&h>=-1,[c.els.navNextMonth,c.els.navNextYear],"DynarchCalendar-navDisabled"),g<-1&&(a=f.min,e=1,d=0),h>1&&(a=f.max,e=2,d=0),c.date=a,c.refresh(!!b),c.callHooks("onChange",c,a,b);if(b&&(d!=0||b!=2)){c._bodyAnim&&c._bodyAnim.stop();var i=c.els.body,j=_("div","DynarchCalendar-animBody-"+x[d],i),k=i.firstChild,m=bf(k)||.7,n=e?be.brakes:d==0?be.shake:be.accel_ab2,o=d*d>4,p=o?k.offsetTop:k.offsetLeft,q=j.style,r=o?i.offsetHeight:i.offsetWidth;d<0?r+=p:d>0?r=p-r:(r=Math.round(r/7),e==2&&(r=-r));if(!e&&d!=0){var s=j.cloneNode(!0),t=s.style,u=2*r;s.appendChild(k.cloneNode(!0)),t[o?"marginTop":"marginLeft"]=r+"px",i.appendChild(s)}k.style.visibility="hidden",j.innerHTML=l(c),c._bodyAnim=bd({onUpdate:function(a,b){var f=n(a);if(s)var g=b(f,r,u)+"px";if(e)q[o?"marginTop":"marginLeft"]=b(f,r,0)+"px";else{if(o||d==0)q.marginTop=b(d==0?n(a*a):f,0,r)+"px",d!=0&&(t.marginTop=g);if(!o||d==0)q.marginLeft=b(f,0,r)+"px",d!=0&&(t.marginLeft=g)}c.args.opacity>2&&s&&(bf(s,1-f),bf(j,f))},onStop:function(b){i.innerHTML=l(c,a),c._bodyAnim=null}})}c._lastHoverDate=null;return g>=-1&&h<=1},h.isDisabled=function(a){var b=this.args;return b.min&&Q(a,b.min)<0||b.max&&Q(a,b.max)>0||b.disabled(a)},h.toggleMenu=function(){z(this,!this._menuVisible)},h.refresh=function(a){var b=this.els;a||(b.body.innerHTML=l(this)),b.title.innerHTML=n(this),b.yearInput.value=this.date.getFullYear()},h.redraw=function(){var a=this,b=a.els;a.refresh(),b.dayNames.innerHTML=k(a),b.menu.innerHTML=o(a),b.bottomBar&&(b.bottomBar.innerHTML=q(a)),bc(b.topCont,function(c){var d=r[c.className];d&&(b[d]=c),c.className=="DynarchCalendar-menu-year"?(V(c,a._focusEvents),b.yearInput=c):e&&c.setAttribute("unselectable","on")}),a.setTime(null,!0)},h.setLanguage=function(b){var c=a.setLanguage(b);c&&(this.fdow=c.data.fdow,this.redraw())},a.setLanguage=function(a){var b=i[a];b&&(i.__=b);return b},h.focus=function(){try{this.els[this._menuVisible?"yearInput":"focusLink"].focus()}catch(a){}t.call(this)},h.blur=function(){this.els.focusLink.blur(),this.els.yearInput.blur(),u.call(this)},h.showAt=function(a,b,c){this._showAnim&&this._showAnim.stop(),c=c&&this.args.animation;var d=this.els.topCont,e=this,f=this.els.body.firstChild,g=f.offsetHeight,h=d.style;h.position="absolute",h.left=a+"px",h.top=b+"px",h.zIndex=1e4,h.display="",c&&(f.style.marginTop=-g+"px",this.args.opacity>1&&bf(d,0),this._showAnim=bd({onUpdate:function(a,b){f.style.marginTop=-b(be.accel_b(a),g,0)+"px",e.args.opacity>1&&bf(d,a)},onStop:function(){e.args.opacity>1&&bf(d,""),e._showAnim=null}}))},h.hide=function(){var a=this.els.topCont,b=this,c=this.els.body.firstChild,d=c.offsetHeight,e=bi(a).y;this.args.animation?(this._showAnim&&this._showAnim.stop(),this._showAnim=bd({onUpdate:function(f,g){b.args.opacity>1&&bf(a,1-f),c.style.marginTop=-g(be.accel_b(f),0,d)+"px",a.style.top=g(be.accel_ab(f),e,e-10)+"px"},onStop:function(){a.style.display="none",c.style.marginTop="",b.args.opacity>1&&bf(a,""),b._showAnim=null}})):a.style.display="none",this.inputField=null},h.popup=function(a,b){function h(b){var c={x:i.x,y:i.y};if(!b)return c;/B/.test(b)&&(c.y+=a.offsetHeight),/b/.test(b)&&(c.y+=a.offsetHeight-f.y),/T/.test(b)&&(c.y-=f.y),/l/.test(b)&&(c.x-=f.x-a.offsetWidth),/L/.test(b)&&(c.x-=f.x),/R/.test(b)&&(c.x+=a.offsetWidth),/c/i.test(b)&&(c.x+=(a.offsetWidth-f.x)/2),/m/i.test(b)&&(c.y+=(a.offsetHeight-f.y)/2);return c}a=bm(a),b||(b=this.args.align),b=b.split(/\x2f/);var c=bi(a),d=this.els.topCont,e=d.style,f,g=bj();e.visibility="hidden",e.display="",this.showAt(0,0),document.body.appendChild(d),f={x:d.offsetWidth,y:d.offsetHeight};var i=c;i=h(b[0]),i.y<g.y&&(i.y=c.y,i=h(b[1])),i.x+f.x>g.x+g.w&&(i.x=c.x,i=h(b[2])),i.y+f.y>g.y+g.h&&(i.y=c.y,i=h(b[3])),i.x<g.x&&(i.x=c.x,i=h(b[4])),this.showAt(i.x,i.y,!0),e.visibility="",this.focus()},h.manageFields=function(b,c,d){var e=this;c=bm(c),b=bm(b),/^button$/i.test(b.tagName)&&b.setAttribute("type","button"),V(b,"click",function(){e.inputField=c,e.dateFormat=d;if(e.selection.type==a.SEL_SINGLE){var f,g,h,i;f=/input|textarea/i.test(c.tagName)?c.value:c.innerText||c.textContent,f&&(g=/(^|[^%])%[bBmo]/.exec(d),h=/(^|[^%])%[de]/.exec(d),g&&h&&(i=g.index<h.index),f=Calendar.parseDate(f,i),f&&(e.selection.set(f,!1,!0),e.args.showTime&&(e.setHours(f.getHours()),e.setMinutes(f.getMinutes())),e.moveTo(f)))}e.popup(b)})},h.callHooks=function(a){var b=ba(arguments,1),c=this.handlers[a],d=0;for(;d<c.length;++d)c[d].apply(this,b)},h.addEventListener=function(a,b){this.handlers[a].push(b)},h.removeEventListener=function(a,b){var c=this.handlers[a],d=c.length;while(--d>=0)c[d]===b&&c.splice(d,1)},h.getTime=function(){return this.time},h.setTime=function(a,b){if(this.args.showTime){a=a!=null?a:this.time,this.time=a;var c=this.getHours(),d=this.getMinutes(),e=c<12;this.args.showTime==12&&(c==0&&(c=12),c>12&&(c-=12),this.els.timeAM.innerHTML=L(e?"AM":"PM")),c<10&&(c="0"+c),d<10&&(d="0"+d),this.els.timeHour.innerHTML=c,this.els.timeMinute.innerHTML=d,b||this.callHooks("onTimeChange",this,a)}},h.getHours=function(){return Math.floor(this.time/100)},h.getMinutes=function(){return this.time%100},h.setHours=function(a){a<0&&(a+=24),this.setTime(100*(a%24)+this.time%100)},h.setMinutes=function(a){a<0&&(a+=60),a=Math.floor(a/this.args.minuteStep)*this.args.minuteStep,this.setTime(100*this.getHours()+a%60)},h._getInputYear=function(){var a=parseInt(this.els.yearInput.value,10);isNaN(a)&&(a=this.date.getFullYear());return a},h._showTooltip=function(a){var b="",c,d=this.els.tooltip;a&&(a=P(a),c=this.args.dateInfo(a),c&&c.tooltip&&(b="<div class='DynarchCalendar-tooltipCont'>"+R(a,c.tooltip)+"</div>")),d.innerHTML=b};var j=" align='center' cellspacing='0' cellpadding='0'",r={"DynarchCalendar-topCont":"topCont","DynarchCalendar-focusLink":"focusLink",DynarchCalendar:"main","DynarchCalendar-topBar":"topBar","DynarchCalendar-title":"title","DynarchCalendar-dayNames":"dayNames","DynarchCalendar-body":"body","DynarchCalendar-menu":"menu","DynarchCalendar-menu-year":"yearInput","DynarchCalendar-bottomBar":"bottomBar","DynarchCalendar-tooltip":"tooltip","DynarchCalendar-time-hour":"timeHour","DynarchCalendar-time-minute":"timeMinute","DynarchCalendar-time-am":"timeAM","DynarchCalendar-navBtn DynarchCalendar-prevYear":"navPrevYear","DynarchCalendar-navBtn DynarchCalendar-nextYear":"navNextYear","DynarchCalendar-navBtn DynarchCalendar-prevMonth":"navPrevMonth","DynarchCalendar-navBtn DynarchCalendar-nextMonth":"navNextMonth"},x={"-3":"backYear","-2":"back",0:"now",2:"fwd",3:"fwdYear"},H={37:-1,38:-2,39:1,40:2},I={33:-1,34:1};h._getDateDiv=function(a){var b=null;if(a)try{bc(this.els.body,function(c){if(c.getAttribute("dyc-date")==a)throw b=c})}catch(c){}return b},(a.Selection=function(a,b,c,d){this.type=b,this.sel=a instanceof Array?a:[a],this.onChange=bb(c,d),this.cal=d}).prototype={get:function(){return this.type==a.SEL_SINGLE?this.sel[0]:this.sel},isEmpty:function(){return this.sel.length==0},set:function(b,c,d){var e=this.type==a.SEL_SINGLE;b instanceof Array?(this.sel=b,this.normalize(),d||this.onChange(this)):(b=O(b),e||!this.isSelected(b)?(e?this.sel=[b]:this.sel.splice(this.findInsertPos(b),0,b),this.normalize(),d||this.onChange(this)):c&&this.unselect(b,d))},reset:function(){this.sel=[],this.set.apply(this,arguments)},countDays:function(){var a=0,b=this.sel,c=b.length,d,e,f;while(--c>=0)d=b[c],d instanceof Array&&(e=P(d[0]),f=P(d[1]),a+=Math.round(Math.abs(f.getTime()-e.getTime())/864e5)),++a;return a},unselect:function(a,b){a=O(a);var c=!1;for(var d=this.sel,e=d.length,f;--e>=0;){f=d[e];if(f instanceof Array){if(a>=f[0]&&a<=f[1]){var g=P(a),h=g.getDate();if(a==f[0])g.setDate(h+1),f[0]=O(g),c=!0;else if(a==f[1])g.setDate(h-1),f[1]=O(g),c=!0;else{var i=new Date(g);i.setDate(h+1),g.setDate(h-1),d.splice(e+1,0,[O(i),f[1]]),f[1]=O(g),c=!0}}}else a==f&&(d.splice(e,1),c=!0)}c&&(this.normalize(),b||this.onChange(this))},normalize:function(){this.sel=this.sel.sort(function(a,b){a instanceof Array&&(a=a[0]),b instanceof Array&&(b=b[0]);return a-b});for(var a=this.sel,b=a.length,c,d;--b>=0;){c=a[b];if(c instanceof Array){if(c[0]>c[1]){a.splice(b,1);continue}c[0]==c[1]&&(c=a[b]=c[0])}if(d){var e=d,f=c instanceof Array?c[1]:c;f=P(f),f.setDate(f.getDate()+1),f=O(f);if(f>=e){var g=a[b+1];c instanceof Array&&g instanceof Array?(c[1]=g[1],a.splice(b+1,1)):c instanceof Array?(c[1]=d,a.splice(b+1,1)):g instanceof Array?(g[0]=c,a.splice(b,1)):(a[b]=[c,g],a.splice(b+1,1))}}d=c instanceof Array?c[0]:c}},findInsertPos:function(a){for(var b=this.sel,c=b.length,d;--c>=0;){d=b[c],d instanceof Array&&(d=d[0]);if(d<=a)break}return c+1},clear:function(a){this.sel=[],a||this.onChange(this)},selectRange:function(b,c){b=O(b),c=O(c);if(b>c){var d=b;b=c,c=d}var e=this.cal.args.checkRange;if(!e)return this._do_selectRange(b,c);try{bk((new a.Selection([[b,c]],a.SEL_MULTIPLE,bl)).getDates(),bb(function(a){if(this.isDisabled(a)){e instanceof Function&&e(a,this);throw"OUT"}},this.cal)),this._do_selectRange(b,c)}catch(f){}},_do_selectRange:function(a,b){this.sel.push([a,b]),this.normalize(),this.onChange(this)},isSelected:function(a){for(var b=this.sel.length,c;--b>=0;){c=this.sel[b];if(c instanceof Array&&a>=c[0]&&a<=c[1]||a==c)return!0}return!1},getFirstDate:function(){var a=this.sel[0];a&&a instanceof Array&&(a=a[0]);return a},getLastDate:function(){if(this.sel.length>0){var a=this.sel[this.sel.length-1];a&&a instanceof Array&&(a=a[1]);return a}},print:function(a,b){var c=[],d=0,e,f=this.cal.getHours(),g=this.cal.getMinutes();b||(b=" -> ");while(d<this.sel.length)e=this.sel[d++],e instanceof Array?c.push(R(P(e[0],f,g),a)+b+R(P(e[1],f,g),a)):c.push(R(P(e,f,g),a));return c},getDates:function(a){var b=[],c=0,d,e;while(c<this.sel.length){e=this.sel[c++];if(e instanceof Array){d=P(e[0]),e=e[1];while(O(d)<e)b.push(a?R(d,a):new Date(d)),d.setDate(d.getDate()+1)}else d=P(e);b.push(a?R(d,a):d)}return b}},a.isUnicodeLetter=function(a){return a.toUpperCase()!=a.toLowerCase()},a.parseDate=function(b,c,d){if(!/\S/.test(b))return"";b=b.replace(/^\s+/,"").replace(/\s+$/,""),d=d||new Date;var e=null,f=null,g=null,h=null,i=null,j=null,k=b.match(/([0-9]{1,2}):([0-9]{1,2})(:[0-9]{1,2})?\s*(am|pm)?/i);k&&(h=parseInt(k[1],10),i=parseInt(k[2],10),j=k[3]?parseInt(k[3].substr(1),10):0,b=b.substring(0,k.index)+b.substr(k.index+k[0].length),k[4]&&(k[4].toLowerCase()=="pm"&&h<12?h+=12:k[4].toLowerCase()=="am"&&h>=12&&(h-=12)));var l=function(){function k(a){d.push(a)}function j(){var a="";while(g()&&/[0-9]/.test(g()))a+=f();if(h(g()))return i(a);return parseInt(a,10)}function i(a){while(g()&&h(g()))a+=f();return a}function g(){return b.charAt(c)}function f(){return b.charAt(c++)}var c=0,d=[],e,h=a.isUnicodeLetter;while(c<b.length)e=g(),h(e)?k(i("")):/[0-9]/.test(e)?k(j()):f();return d}(),m=[];for(var n=0;n<l.length;++n){var o=l[n];/^[0-9]{4}$/.test(o)?(e=parseInt(o,10),f==null&&g==null&&c==null&&(c=!0)):/^[0-9]{1,2}$/.test(o)?(o=parseInt(o,10),o<60?o<0||o>12?o>=1&&o<=31&&(g=o):m.push(o):e=o):f==null&&(f=T(o))}m.length<2?m.length==1&&(g==null?g=m.shift():f==null&&(f=m.shift())):c?(f==null&&(f=m.shift()),g==null&&(g=m.shift())):(g==null&&(g=m.shift()),f==null&&(f=m.shift())),e==null&&(e=m.length>0?m.shift():d.getFullYear()),e<30?e+=2e3:e<99&&(e+=1900),f==null&&(f=d.getMonth()+1);return e!=null&&f!=null&&g!=null?new Date(e,f-1,g,h,i,j):null};var be={elastic_b:function(a){return 1-Math.cos(-a*5.5*Math.PI)/Math.pow(2,7*a)},magnetic:function(a){return 1-Math.cos(a*a*a*10.5*Math.PI)/Math.exp(4*a)},accel_b:function(a){a=1-a;return 1-a*a*a*a},accel_a:function(a){return a*a*a},accel_ab:function(a){a=1-a;return 1-Math.sin(a*a*Math.PI/2)},accel_ab2:function(a){return(a/=.5)<1?.5*a*a:-0.5*(--a*(a-2)-1)},brakes:function(a){a=1-a;return 1-Math.sin(a*a*Math.PI)},shake:function(a){return a<.5?-Math.cos(a*11*Math.PI)*a*a:(a=1-a,Math.cos(a*11*Math.PI)*a*a)}},bl=new Function;return a}()


Calendar.isUnicodeLetter = (function(){
    var rx = new RegExp("[\\u0041-\\u005A\\u0061-\\u007A\\u00AA\\u00B5\\u00BA\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u0523\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0621-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971\\u0972\\u097B-\\u097F\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C33\\u0C35-\\u0C39\\u0C3D\\u0C58\\u0C59\\u0C60\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D28\\u0D2A-\\u0D39\\u0D3D\\u0D60\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC\\u0EDD\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8B\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10D0-\\u10FA\\u10FC\\u1100-\\u1159\\u115F-\\u11A2\\u11A8-\\u11F9\\u1200-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u1676\\u1681-\\u169A\\u16A0-\\u16EA\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u1900-\\u191C\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19A9\\u19C1-\\u19C7\\u1A00-\\u1A16\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u2094\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2183\\u2184\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2C6F\\u2C71-\\u2C7D\\u2C80-\\u2CE4\\u2D00-\\u2D25\\u2D30-\\u2D65\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005\\u3006\\u3031-\\u3035\\u303B\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31B7\\u31F0-\\u31FF\\u3400\\u4DB5\\u4E00\\u9FC3\\uA000-\\uA48C\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA65F\\uA662-\\uA66E\\uA67F-\\uA697\\uA717-\\uA71F\\uA722-\\uA788\\uA78B\\uA78C\\uA7FB-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA90A-\\uA925\\uA930-\\uA946\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAC00\\uD7A3\\uF900-\\uFA2D\\uFA30-\\uFA6A\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]", "i");
    return function(ch) {
        return rx.test(ch);
    };
})();

// version 0.1.5-a

Calendar.LANG("ru", "русский", {

    fdow: 1,                // first day of week for this locale; 0 = Sunday, 1 = Monday, etc.

    goToday: "Сегодня",

    today: "Сегодня",         // appears in bottom bar

    wk: "Нед",

    weekend: "0,6",         // 0 = Sunday, 1 = Monday, etc.

    AM: "am",

    PM: "pm",

    mn : [ "январь",
        "февраль",
        "март",
        "апрель",
        "май",
        "июнь",
        "июль",
        "август",
        "сентябрь",
        "октябрь",
        "ноябрь",
        "декабрь" ],

    smn : [ "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь" ],

    dn : [ "воскресенье",
        "понедельник",
        "вторник",
        "среда",
        "четверг",
        "пятница",
        "суббота",
        "воскресенье" ],

    sdn : [ "Вс",
        "Пн",
        "Вт",
        "Ср",
        "Чт",
        "Пт",
        "Сб",
        "Вс" ]

});


var options = {
    debug: false
    , calendarWrapper: "#calendarWrapper"
    , tooltipOffset:  { top: 15, left: 45 }
}

var
    _DEBUG = false // logger
    , tooltipTimer
    , ej // raw events data
    , LEFT_CAL // calendar object
    , calendarWrapper = "#calendarWrapper"
    , $_tooltip
    , tooltipOffset = { top: 15, left: 45 }; // parsed events data



    $(function() { //DOM Ready

        if(window.eventsJson) {
            ej = window.EJ = eventsJson;
            // start this point
            initCalendar(function callbackInit(err){
                log('calendar init complete');
                reinitLinks(); // draw markers
            });

        } else {
            log('events not found');
            ej = null;
        }

        function initCalendar(fn) {

            // Создание DOM-tooltip
            // <div id="eventsCalendarTooltip" dyn-date="" dyn-start="" dyn-stop="">
            // <div class="tooltipBg"></div>
            // <div class="tooltipBody"></div>
            //  <div class="arrow"></div>
            //  <a class="close" href="#">&times;</a>
            // </div>

            $_tooltip = $('<div></div>').hide()
                .attr({'id':'eventsCalendarTooltip','dyn-date':'','dyn-start':'','dyn-stop':''})
                .append($('<div></div>').addClass('tooltipBg'))
                .append($('<div></div>').addClass('tooltipBody'))
                .append($('<div></div>').addClass('arrow'))
                .append($('<a>&times;</a>').attr({ 'class': 'close', 'href': '#'}));

            // Добавляем в конец страницы
            $('body').append($_tooltip);

            log('start init');

            LEFT_CAL = Calendar.setup({
                cont: 'eventsCalendar',
                weekNumbers: false,
                selectionType: Calendar.SEL_SINGLE, // only single now works
                //showTime: 12
                // titleFormat: "%B %Y"
                onSelect: function(e){ toggleTooltip(e.selection.sel); },
                onFocus: function(e){  reinitLinks(); },
                onChange: function(e){
                    simpleHideTooltip();
                    // при скроллинге нужна небольшая пауза
                    setTimeout(function(){ reinitLinks(); }, 500);
                },
                onBlur: function(e){ reinitLinks(); },
                dateInfo: function getInfo(date){ return getCEvents(date); }
            });


            $('body').on('click',function bodyClick(){ simpleHideTooltip(); }); // hide tooltip on outer click
            $(window).resize(function windowResize(){ simpleHideTooltip(); }); // hide tooltip on resize

            fn(null);
        }

        // v 0.0.1
        function getCEvents(date,fn){
            var date_as_number = Calendar.dateToInt(date);
            if(window.EJ[date_as_number]) {
                return { klass: window.EJ[date_as_number].klass, tooltip: null };
            }
        }

        // template helper to format tooltip
        // Todo: create tooltip template
        // v 0.0.1
        function formatTooltip(item) {

            console.log(item);
            var _tmpl = [], items = item.data, dateStart, dateEnd;

            if(item.data.length > 0) {
                for(var i = 0; i < items.length; i++) {

                    dateStart = new Date(parseInt(items[i].dateStart) * 1000);
                    // var _ds = dateStart.getFullYear() + "-" + (dateStart.getMonth() + 1) + "-" + dateStart.getDate();
                    var _ds = moment(dateStart).format('LLL');

                    if (items[i].url !== null) {
                        _tmpl.push('<a class="dateEvent linked" href="' + items[i].url + '" target="_blank">');
                    } else {
                        _tmpl.push('<div class="dateEvent">');
                    }
                    _tmpl.push('<span class="eventHeader">' + items[i].name + '</span>');
                    //_tmpl.push('<h3>' + items[i].name + '</h3>');
                    _tmpl.push('<span class="dateRange">');
                    _tmpl.push('<span class="start">' + _ds || 'no date' + '</span>');

                    if(items[i].dateEnd != "") {

                        dateEnd = new Date(parseInt(items[i].dateEnd) * 1000);
                        //var _de = dateEnd.getFullYear() + "-" + (dateEnd.getMonth() + 1) + "-" + dateEnd.getDate();
                        var _de = moment(dateEnd).format('LLL');

                        _tmpl.push('<span class="end"> — ' + _de || "no date" + '</span>');

                    }

                    _tmpl.push('</span>');
                    //_tmpl.push('<a class="eventlink" href="' + items[i].url + '">' + items[i].name + '</a>');

                    if (items[i].url !== null) {
                        _tmpl.push('</a>');
                    } else {
                        _tmpl.push('</div>');
                    }

                }

                return _tmpl.join('\n');

            }

            return null;
        }

        // Hide/Show Tooltip
        // v 0.0.7-a
        function toggleTooltip(items,fn){
            var _offset, $tooltip, $box, dateSelected;

            dateSelected = items[0];

            if(tooltipTimer) clearTimeout(tooltipTimer);

            $tooltip = $('#eventsCalendarTooltip');
            $box = $('div[dyc-date='+dateSelected+']',".DynarchCalendar");
            _offset = $box.offset();

            if( $box.hasClass('calendarEvent') && $box.hasClass('DynarchCalendar-day-othermonth') ) {
                setTimeout(function(){
                    $box = $('div[dyc-date='+dateSelected+']',".DynarchCalendar");
                    _offset = $box.offset();
                    animateTooltip($tooltip,_offset);
                },500);
            } else {
                $box = $('div[dyc-date='+dateSelected+']',".DynarchCalendar");
                _offset = $box.offset();
            }

            // if already exists
            if($tooltip.hasClass('date' + dateSelected)){
                if($tooltip.css('display') == 'none') {
                    $tooltip
                        .animate({
                            top: _offset.top + 5,
                            left: _offset.left + 95
                        })
                        .fadeIn();
                    return;
                } else {
                    return;
                }
            }

            log('toggle',items[0]);

            // todo: ?

            // close link
            $tooltip.on('click',function clickOnTooltip(e){
                if($($(e.target)[0]).is('a span')) return;
                if( ($(e.target)[0].tagName).toLowerCase() == 'a' && !$(e.target).hasClass('close') ) {
                    return;
                } else {
                    // click on close
                    $tooltip.removeClass();
                    return false;
                }
            });

            if(undefined === window.EJ[dateSelected]) {
                $tooltip
                    .removeClass()
                    .fadeOut();
            } else {
                if(window.EJ && window.EJ[dateSelected].data) { // create new
                    $tooltip
                        .attr('dyn-date',dateSelected)
                        .find('.tooltipBody')
                        .html(formatTooltip(window.EJ[dateSelected]))
                        .end()
                        .find('a.close').on('click',function closeTooltip(){ $tooltip.fadeOut(); })
                        .end()
                        .animate({
                            top: _offset.top + 5,
                            left: _offset.left + 95
                        })
                        .fadeIn()
                        .removeClass()
                        .addClass('date' + dateSelected);
                } else {
                    $tooltip
                        .removeClass()
                        .fadeOut();
                }
            }

            return fn && fn(null);
        }

        // helper for timeout animate
        function animateTooltip($el,offset){
            $el
                .animate({
                    top: offset.top + 5,
                    left: offset.left + 95
                })
                .fadeIn();
            return $el;
        }

        // helper for hide tooltip
        function simpleHideTooltip(fn){
            $('#eventsCalendarTooltip').hide();
            fn && fn(null);
        }

        // инициализация активных событий (ссылок)
        // обертка дат событий в ссылки
        // v. alpha
        function reinitLinks(fn){
            return;
            var mydate, $tooltip, $selected;
            $tooltip = $('#eventsCalendarTooltip');

            $('.calendarEvent').each(function wrapDate(idx,item){
                if($(item).has('a').length == 0) {
                    $(item)
                        .wrapInner('<a class="calendarEventLink" href="#tooltip"></a>')
                        .on({
                            'mouseover' : function(e){ e.prevendDefault() },
                            'mouseenter': function(e){ e.prevendDefault() },
                            'click': function(e){ e.prevendDefault() },
                            'mousedown': function(e){ e.prevendDefault() },
                            'mouseup': function(e){ e.prevendDefault() }
                        });
                }
            });

            $selected = $('.DynarchCalendar-day-selected',".DynarchCalendar");
            log($selected.attr('dyc-date'));

            return fn && fn(null);
        }

    }); // Dom ready end



// helpers
function log(){
    _DEBUG && typeof(console.log) === 'function' && console.log(arguments);
}

