define(['jquery'], function($) {
	if (!$.publish && !$.subscribe) {
		(function(o) {
	 	    var cache = {};
	 	    o.publish = function(/* String */topic, /* Array? */args, /* Callback */ func) {
				cache[topic] && o.each(cache[topic], function() {
					this.call(o, args || [], func);
				});
			};

	 	    o.subscribe = function(/* String */topic, /* Function */callback) {
	 	        if (!cache[topic]) {
	 	            cache[topic] = [];
	 	        }
	 	        cache[topic].push(callback);
	 	        return [topic, callback]; // Array
	 	    };

	 	    o.unsubscribe = function(/* Array */handle) {
	 	        var t = handle[0];
	 	        cache[t] && o.each(cache[t], function(idx) {
	 	            if (this == handle[1]) {
	 	                cache[t].splice(idx, 1);
	 	            }
	 	        });
	 	    };
	 	}($));
	}

	//jQuery 1.9 $.browser() API 폐기에 따른 browser() 메소드 복원 확장
	if (!$.browser) {
		(function(o) {
			var userAgent = navigator.userAgent,
				platformType = navigator.platform.toLowerCase(),
				rWin = /^(win)(32|64)/,
				rMac = /^(mac)/,
				rLinux = /^(linux)/,
				rwebkit = /(webkit)[ \/]([\w.]+)/,
				ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/,
				rmsie = /(msie) ([\w.]+)/,
				rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/,
				uaMatch = function(ua) {
					ua = ua.toLowerCase();

					var match = rwebkit.exec(ua) ||
						ropera.exec(ua) ||
						rmsie.exec(ua) ||
						(ua.indexOf("compatible") < 0 && rmozilla.exec(ua)) ||
						[];

					return {browser: match[1] || "", version: match[2] || "0"};
				},
				platform = ((rWin.exec(platformType) || rMac.exec(platformType) || rLinux.exec(platformType) || [])[1]
							|| ""),
				browserMatch;

			o.browser = {};
			o.platform = {};
			browserMatch = uaMatch(userAgent);

			/**
			 * jQuery-extend 통합 운영에 따른 platform 분류를 추가한다. (웹쇼에서 사용)
			 * Linux 에 포함되는 Tizen OS 는 따로 분류해 준다.
			 * @since 2019.8.14(#10)
			 */
			if (platform !== "") {
				// Tizen OS 는 linux 에 포함되므로, userAgent 를 확인하여 Tizen OS 로 분류해 준다.
				if (platform === "linux" && /tizen/i.test(userAgent)) {
					platform = "tizen";
				}
				o.platform[platform] = true;
			}

			if (browserMatch.browser) {
				/**
				 * IE11 부터는 msie 스트링이 빠지고 Gecko 와 유사하므로 trident 를 가지고 판단하는 로직 추가.
				 * @since 2014.1.13(#9)
				 * @author han1228 <han1228@hancom.com>
				 */
				if (browserMatch.browser === "mozilla" && /trident/i.test(userAgent)) {
					browserMatch.browser = "msie";
				}
				o.browser[ browserMatch.browser ] = true;
				o.browser.version = browserMatch.version;
				o.browser.name = browserMatch.browser;

				var usa = userAgent.toLowerCase(),
					verMatch = null,
					osVerMatch = null,
					edgeName = "",
					edgeVersion = "";

				if (browserMatch.browser === "webkit") {

					// webkit 엔진을 사용하는 브라우저는 orgWebkit 을 활성화 하고, 버전은 orgVersion 프로퍼티에 할당한다.
					o.browser.orgWebkit = true;
					o.browser.orgVersion = o.browser.version;

					if (/(chrome|crios)\//.test(usa)) {
						if (/(opr)\//.test(usa)) {
							// 오페라 브라우저를 재정의 한다.
							o.browser.opera = true;
							o.browser.name = "opera";

							// Opera 의 자체 버전을 구한다.
							verMatch = /(opr)[ \/]([\w.]+)/.exec(usa);
						} else if (/(edge|edg)\//.test(usa)) {
							/**
							 * Windows 10 부터 Microsoft Edge 브라우저가 추가되었다.
							 * 기본적으로 webkit 엔진을 사용하므로, webkit browser 로 인정하고, edge 라는 browser 속성을 추가한다.
							 * @since 2015.8.3(#25)
							 * @author han1228 <han1228@hancom.com>
							 */
							o.browser.edge = true;
							o.browser.name = "edge";

							// Edge 의 자체 버전을 구한다.
							verMatch = /(edge|edg)[ \/]([\w.]+)/.exec(usa);
							if (verMatch) {
								edgeName = verMatch[1];
								edgeVersion = verMatch[2];
							}

							/**
							 * Microsoft Edge 가 신규 버전이 추가되었는데 기존 Edge 와는 다른 webkit 엔진을 완전히 사용한다고 보여진다.
							 * New Edge 는 newEdge 프로퍼티를 추가해 주고, orgWebkit 으로 편입시킨다.
							 * Old Edge 는 기존과 동일하게 msieType 으로 편입시킨다.
							 * @since 2020.11.25(M11)
							 * @author han1228 <han1228@hancom.com>
							 */
							if (edgeName === "edg") {
								o.browser.newEdge = true;
							} else {
								if (!edgeVersion || parseFloat(edgeVersion) >= 12) {
									o.browser.orgWebkit = false;
								}
							}

							// Edge 의 IE Type 정의를 추가한다.
							o.browser.msieType = false;
							o.browser.msie11Type = false;

							if (o.browser.orgWebkit === false) {
								o.browser.msieType = true;
								o.browser.msie11Type = true;
							}
						} else if (/(samsungbrowser)\//.test(usa)) {
							/**
							 * 삼성 DTV Tizen OS 를 지원하면서 samsungBrowser 디텍팅을 추가함.
							 * 기본적으로 webkit 엔진을 사용하므로, webkit browser 로 인정하고 (orgWebkit 도 인정), samsungBrowser 라는 browser 속성을 추가한다.
							 * @since 2019.8.9(M10)
							 * @author han1228 <han1228@hancom.com>
							 */
							o.browser.samsungBrowser = true;
							o.browser.name = "samsungBrowser";

							// Smart TV 이면 smartTV 속성을 활성화 한다.
							if (/smart-tv/.test(usa)) {
								o.browser.smartTV = true;
							}

							// samsungBrowser 의 자체 버전을 구한다.
							verMatch = /(samsungbrowser)[ \/]([\w.]+)/.exec(usa);
							// Tizen OS 의 OS 버전을 구한다.
							osVerMatch = /(tizen )([\w.]+)/.exec(usa);
						} else {
							// 크롬 브라우저를 재정의 한다.
							o.browser.chrome = true;
							o.browser.name = "chrome";

							// Chrome 의 자체 버전을 구한다.
							verMatch = /(chrome|crios)[ \/]([\w.]+)/.exec(usa);
						}
					} else if (/(safari)\//.test(usa)) {
						// 사파리 브라우저를 재정의 한다.
						o.browser.safari = true;
						o.browser.name = "safari";

						// Safari 의 자체 버전을 구한다.
						verMatch = /(version)[ \/]([\w.]+)/.exec(usa);
						osVerMatch = /(mac os x )([\w]+)/.exec(usa);	// safari인 경우 mac os x 버전 추가
					}

					// webkit 엔진 브라우저의 각각의 버전이 존재하면 version 프로퍼티에 다시 할당해 준다.
					if (verMatch) {
						o.browser.version = verMatch[2];
					}

					// os 버전이 존재하면 osVersion 프로퍼티에 할당
					if (osVerMatch) {
						o.browser.osVersion = osVerMatch[2];

						if (o.browser.osVersion) {
							o.browser.osVersion = o.browser.osVersion.split("_").join(".");	// 버전 구분을 dot 포맷으로 변경
						}
					}
				} else if (browserMatch.browser === "msie") {
					/**
					 * iecompatdata 또는 compatibility 에 의해 userAgent Version 이 잘못 판단되는 부분 보정
					 * IE11에 대해서만 보정해 준다.
					 */
					var ieVersion = (browserMatch.version) ? parseFloat(browserMatch.version) : 0,
						docMode = document.documentMode;

					if (ieVersion < 11 && docMode) {
						ieVersion = parseFloat(docMode);
						if (ieVersion === 11) {
							o.browser.version = String(ieVersion);
						}
					}

					// IE는 확장 속성을 추가 정의한다.
					o.browser.msieType = true;
					o.browser.msie11Type = !!(o.browser.version && parseInt(o.browser.version, 10) === 11);
				}
			}
		}($));
	}

});