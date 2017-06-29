/**
 * Created by 清水 on 2017/6/8.
 */
(function(g, c) {
        function f(o, l) {
            var n, k = [];
            for (var m = 0; m < o.length; ++m) {
                n = j[o[m]] || h(o[m]);
                if (!n) {
                    throw "module definition dependecy not found: " + o[m]
                }
                k.push(n)
            }
            l.apply(null , k)
        }
        function b(m, k, l) {
            if (typeof m !== "string") {
                throw "invalid module definition, module id must be defined and be a string"
            }
            if (k === c) {
                throw "invalid module definition, dependencies must be specified"
            }
            if (l === c) {
                throw "invalid module definition, definition function must be specified"
            }
            f(k, function() {
                    j[m] = l.apply(null , arguments)
                }
            )
        }
        function d(i) {
            return !!j[i]
        }
        function h(k) {
            var m = g;
            var l = k.split(/[.\/]/);
            for (var e = 0; e < l.length; ++e) {
                if (!m[l[e]]) {
                    return
                }
                m = m[l[e]]
            }
            return m
        }
        function a(n) {
            for (var l = 0; l < n.length; l++) {
                var m = g;
                var p = n[l];
                var k = p.split(/[.\/]/);
                for (var e = 0; e < k.length - 1; ++e) {
                    if (m[k[e]] === c) {
                        m[k[e]] = {}
                    }
                    m = m[k[e]]
                }
                m[k[k.length - 1]] = j[p]
            }
        }
        var j = {};
        b("moxie/core/utils/Basic", [], function() {
                var y = function(l) {
                        var i;
                        if (l === i) {
                            return "undefined"
                        } else {
                            if (l === null ) {
                                return "null"
                            } else {
                                if (l.nodeType) {
                                    return "node"
                                }
                            }
                        }
                        return {}.toString.call(l).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
                    }
                    ;
                var C = function(l) {
                        var e;
                        p(arguments, function(n, i) {
                                if (i > 0) {
                                    p(n, function(r, o) {
                                            if (r !== e) {
                                                if (y(l[o]) === y(r) && !!~m(y(r), ["array", "object"])) {
                                                    C(l[o], r)
                                                } else {
                                                    l[o] = r
                                                }
                                            }
                                        }
                                    )
                                }
                            }
                        );
                        return l
                    }
                    ;
                var p = function(G, u) {
                        var I, F, l, E;
                        if (G) {
                            try {
                                I = G.length
                            } catch (H) {
                                I = E
                            }
                            if (I === E) {
                                for (F in G) {
                                    if (G.hasOwnProperty(F)) {
                                        if (u(G[F], F) === false) {
                                            return
                                        }
                                    }
                                }
                            } else {
                                for (l = 0; l < I; l++) {
                                    if (u(G[l], l) === false) {
                                        return
                                    }
                                }
                            }
                        }
                    }
                    ;
                var k = function(e) {
                        var i;
                        if (!e || y(e) !== "object") {
                            return true
                        }
                        for (i in e) {
                            return false
                        }
                        return true
                    }
                    ;
                var v = function(l, E) {
                        function o(i) {
                            if (y(l[i]) === "function") {
                                l[i](function(n) {
                                        ++i < e && !n ? o(i) : E(n)
                                    }
                                )
                            }
                        }
                        var u = 0
                            , e = l.length;
                        if (y(E) !== "function") {
                            E = function() {}
                        }
                        if (!l || !l.length) {
                            E()
                        }
                        o(u)
                    }
                    ;
                var D = function(E, n) {
                        var u = 0
                            , l = E.length
                            , o = new Array(l);
                        p(E, function(i, r) {
                                i(function(s) {
                                        if (s) {
                                            return n(s)
                                        }
                                        var t = [].slice.call(arguments);
                                        t.shift();
                                        o[r] = t;
                                        u++;
                                        if (u === l) {
                                            o.unshift(null );
                                            n.apply(this, o)
                                        }
                                    }
                                )
                            }
                        )
                    }
                    ;
                var m = function(o, i) {
                        if (i) {
                            if (Array.prototype.indexOf) {
                                return Array.prototype.indexOf.call(i, o)
                            }
                            for (var s = 0, l = i.length; s < l; s++) {
                                if (i[s] === o) {
                                    return s
                                }
                            }
                        }
                        return -1
                    }
                    ;
                var B = function(l, s) {
                        var o = [];
                        if (y(l) !== "array") {
                            l = [l]
                        }
                        if (y(s) !== "array") {
                            s = [s]
                        }
                        for (var e in l) {
                            if (m(l[e], s) === -1) {
                                o.push(l[e])
                            }
                        }
                        return o.length ? o : false
                    }
                    ;
                var A = function(n, i) {
                        var l = [];
                        p(n, function(o) {
                                if (m(o, i) !== -1) {
                                    l.push(o)
                                }
                            }
                        );
                        return l.length ? l : null
                    }
                    ;
                var x = function(l) {
                        var i, o = [];
                        for (i = 0; i < l.length; i++) {
                            o[i] = l[i]
                        }
                        return o
                    }
                    ;
                var q = function() {
                    var i = 0;
                    return function(e) {
                        var o = (new Date).getTime().toString(32), l;
                        for (l = 0; l < 5; l++) {
                            o += Math.floor(Math.random() * 65535).toString(32)
                        }
                        return (e || "o_") + o + (i++).toString(32)
                    }
                }
                ();
                var z = function(i) {
                        if (!i) {
                            return i
                        }
                        return String.prototype.trim ? String.prototype.trim.call(i) : i.toString().replace(/^\s*/, "").replace(/\s*$/, "")
                    }
                    ;
                var w = function(l) {
                        if (typeof l !== "string") {
                            return l
                        }
                        var i = {
                            t: 1099511627776,
                            g: 1073741824,
                            m: 1048576,
                            k: 1024
                        }, o;
                        l = /^([0-9]+)([mgk]?)$/.exec(l.toLowerCase().replace(/[^0-9mkg]/g, ""));
                        o = l[2];
                        l = +l[1];
                        if (i.hasOwnProperty(o)) {
                            l *= i[o]
                        }
                        return l
                    }
                    ;
                return {
                    guid: q,
                    typeOf: y,
                    extend: C,
                    each: p,
                    isEmptyObj: k,
                    inSeries: v,
                    inParallel: D,
                    inArray: m,
                    arrayDiff: B,
                    arrayIntersect: A,
                    toArray: x,
                    trim: z,
                    parseSizeStr: w
                }
            }
        );
        b("moxie/core/I18n", ["moxie/core/utils/Basic"], function(k) {
                var i = {};
                return {
                    addI18n: function(e) {
                        return k.extend(i, e)
                    },
                    translate: function(l) {
                        return i[l] || l
                    },
                    _: function(l) {
                        return this.translate(l)
                    },
                    sprintf: function(e) {
                        var l = [].slice.call(arguments, 1);
                        return e.replace(/%[a-z]/g, function() {
                                var m = l.shift();
                                return k.typeOf(m) !== "undefined" ? m : ""
                            }
                        )
                    }
                }
            }
        );
        b("moxie/core/utils/Mime", ["moxie/core/utils/Basic", "moxie/core/I18n"], function(l, i) {
                var m = "application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb,application/vnd.ms-powerpoint,ppt pps pot,application/zip,zip,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/x-javascript,js,application/json,json,audio/mpeg,mp3 mpga mpega mp2,audio/x-wav,wav,audio/x-m4a,m4a,audio/ogg,oga ogg,audio/aiff,aiff aif,audio/flac,flac,audio/aac,aac,audio/ac3,ac3,audio/x-ms-wma,wma,image/bmp,bmp,image/gif,gif,image/jpeg,jpg jpeg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/plain,asc txt text diff log,text/html,htm html xhtml,text/css,css,text/csv,csv,text/rtf,rtf,video/mpeg,mpeg mpg mpe m2v,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/3gpp,3gpp 3gp,video/3gpp2,3g2,video/vnd.rn-realvideo,rv,video/ogg,ogv,video/x-matroska,mkv,application/vnd.oasis.opendocument.formula-template,otf,application/octet-stream,exe";
                var k = {
                    mimes: {},
                    extensions: {},
                    addMimeType: function(s) {
                        var p = s.split(/,/), u, q, o;
                        for (u = 0; u < p.length; u += 2) {
                            o = p[u + 1].split(/ /);
                            for (q = 0; q < o.length; q++) {
                                this.mimes[o[q]] = p[u]
                            }
                            this.extensions[p[u]] = o
                        }
                    },
                    extList2mimes: function(v, z) {
                        var x = this, q, w, y, p, e = [];
                        for (w = 0; w < v.length; w++) {
                            q = v[w].extensions.split(/\s*,\s*/);
                            for (y = 0; y < q.length; y++) {
                                if (q[y] === "*") {
                                    return []
                                }
                                p = x.mimes[q[y]];
                                if (!p) {
                                    if (z && /^\w+$/.test(q[y])) {
                                        e.push("." + q[y])
                                    } else {
                                        return []
                                    }
                                } else {
                                    if (l.inArray(p, e) === -1) {
                                        e.push(p)
                                    }
                                }
                            }
                        }
                        return e
                    },
                    mimes2exts: function(e) {
                        var p = this
                            , o = [];
                        l.each(e, function(q) {
                                if (q === "*") {
                                    o = [];
                                    return false
                                }
                                var n = q.match(/^(\w+)\/(\*|\w+)$/);
                                if (n) {
                                    if (n[2] === "*") {
                                        l.each(p.extensions, function(s, r) {
                                                if ((new RegExp("^" + n[1] + "/")).test(r)) {
                                                    [].push.apply(o, p.extensions[r])
                                                }
                                            }
                                        )
                                    } else {
                                        if (p.extensions[q]) {
                                            [].push.apply(o, p.extensions[q])
                                        }
                                    }
                                }
                            }
                        );
                        return o
                    },
                    mimes2extList: function(p) {
                        var o = []
                            , e = [];
                        if (l.typeOf(p) === "string") {
                            p = l.trim(p).split(/\s*,\s*/)
                        }
                        e = this.mimes2exts(p);
                        o.push({
                            title: i.translate("Files"),
                            extensions: e.length ? e.join(",") : "*"
                        });
                        o.mimes = p;
                        return o
                    },
                    getFileExtension: function(o) {
                        var n = o && o.match(/\.([^.]+)$/);
                        if (n) {
                            return n[1].toLowerCase()
                        }
                        return ""
                    },
                    getFileMime: function(n) {
                        return this.mimes[this.getFileExtension(n)] || ""
                    }
                };
                k.addMimeType(m);
                return k
            }
        );
        b("moxie/core/utils/Env", ["moxie/core/utils/Basic"], function(o) {
                function p(y, B, w) {
                    var q = 0
                        , x = 0
                        , C = 0
                        , v = {
                            dev: -6,
                            alpha: -5,
                            a: -5,
                            beta: -4,
                            b: -4,
                            RC: -3,
                            rc: -3,
                            "#": -2,
                            p: 1,
                            pl: 1
                        }
                        , A = function(i) {
                            i = ("" + i).replace(/[_\-+]/g, ".");
                            i = i.replace(/([^.\d]+)/g, ".$1.").replace(/\.{2,}/g, ".");
                            return !i.length ? [-8] : i.split(".")
                        }
                        , z = function(i) {
                            return !i ? 0 : isNaN(i) ? v[i] || -7 : parseInt(i, 10)
                        }
                        ;
                    y = A(y);
                    B = A(B);
                    x = Math.max(y.length, B.length);
                    for (q = 0; q < x; q++) {
                        if (y[q] == B[q]) {
                            continue
                        }
                        y[q] = z(y[q]);
                        B[q] = z(B[q]);
                        if (y[q] < B[q]) {
                            C = -1;
                            break
                        } else {
                            if (y[q] > B[q]) {
                                C = 1;
                                break
                            }
                        }
                    }
                    if (!w) {
                        return C
                    }
                    switch (w) {
                        case ">":
                        case "gt":
                            return C > 0;
                        case ">=":
                        case "ge":
                            return C >= 0;
                        case "<=":
                        case "le":
                            return C <= 0;
                        case "==":
                        case "=":
                        case "eq":
                            return C === 0;
                        case "<>":
                        case "!=":
                        case "ne":
                            return C !== 0;
                        case "":
                        case "<":
                        case "lt":
                            return C < 0;
                        default:
                            return null
                    }
                }
                var l = function(N) {
                    var B = ""
                        , G = "?"
                        , D = "function"
                        , J = "undefined"
                        , C = "object"
                        , F = "major"
                        , A = "model"
                        , R = "name"
                        , M = "type"
                        , I = "vendor"
                        , P = "version"
                        , K = "architecture"
                        , E = "console"
                        , O = "mobile"
                        , z = "tablet";
                    var H = {
                        has: function(n, i) {
                            return i.toLowerCase().indexOf(n.toLowerCase()) !== -1
                        },
                        lowerize: function(i) {
                            return i.toLowerCase()
                        }
                    };
                    var L = {
                        rgx: function() {
                            for (var V, r = 0, i, U, T, w, s, S, v = arguments; r < v.length; r += 2) {
                                var e = v[r]
                                    , y = v[r + 1];
                                if (typeof V === J) {
                                    V = {};
                                    for (T in y) {
                                        w = y[T];
                                        if (typeof w === C) {
                                            V[w[0]] = N
                                        } else {
                                            V[w] = N
                                        }
                                    }
                                }
                                for (i = U = 0; i < e.length; i++) {
                                    s = e[i].exec(this.getUA());
                                    if (!!s) {
                                        for (T = 0; T < y.length; T++) {
                                            S = s[++U];
                                            w = y[T];
                                            if (typeof w === C && w.length > 0) {
                                                if (w.length == 2) {
                                                    if (typeof w[1] == D) {
                                                        V[w[0]] = w[1].call(this, S)
                                                    } else {
                                                        V[w[0]] = w[1]
                                                    }
                                                } else {
                                                    if (w.length == 3) {
                                                        if (typeof w[1] === D && !(w[1].exec && w[1].test)) {
                                                            V[w[0]] = S ? w[1].call(this, S, w[2]) : N
                                                        } else {
                                                            V[w[0]] = S ? S.replace(w[1], w[2]) : N
                                                        }
                                                    } else {
                                                        if (w.length == 4) {
                                                            V[w[0]] = S ? w[3].call(this, S.replace(w[1], w[2])) : N
                                                        }
                                                    }
                                                }
                                            } else {
                                                V[w] = S ? S : N
                                            }
                                        }
                                        break
                                    }
                                }
                                if (!!s) {
                                    break
                                }
                            }
                            return V
                        },
                        str: function(n, s) {
                            for (var e in s) {
                                if (typeof s[e] === C && s[e].length > 0) {
                                    for (var u = 0; u < s[e].length; u++) {
                                        if (H.has(s[e][u], n)) {
                                            return e === G ? N : e
                                        }
                                    }
                                } else {
                                    if (H.has(s[e], n)) {
                                        return e === G ? N : e
                                    }
                                }
                            }
                            return n
                        }
                    };
                    var q = {
                        browser: {
                            oldsafari: {
                                major: {
                                    1: ["/8", "/1", "/3"],
                                    2: "/4",
                                    "?": "/"
                                },
                                version: {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/"
                                }
                            }
                        },
                        device: {
                            sprint: {
                                model: {
                                    "Evo Shift 4G": "7373KT"
                                },
                                vendor: {
                                    HTC: "APA",
                                    Sprint: "Sprint"
                                }
                            }
                        },
                        os: {
                            windows: {
                                version: {
                                    ME: "4.90",
                                    "NT 3.11": "NT3.51",
                                    "NT 4.0": "NT4.0",
                                    2000: "NT 5.0",
                                    XP: ["NT 5.1", "NT 5.2"],
                                    Vista: "NT 6.0",
                                    7: "NT 6.1",
                                    8: "NT 6.2",
                                    8.1: "NT 6.3",
                                    RT: "ARM"
                                }
                            }
                        }
                    };
                    var Q = {
                        browser: [[/(opera\smini)\/((\d+)?[\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i, /(opera).+version\/((\d+)?[\w\.]+)/i, /(opera)[\/\s]+((\d+)?[\w\.]+)/i], [R, P, F], [/\s(opr)\/((\d+)?[\w\.]+)/i], [[R, "Opera"], P, F], [/(kindle)\/((\d+)?[\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i, /(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i, /(rekonq)((?:\/)[\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron)\/((\d+)?[\w\.-]+)/i], [R, P, F], [/(trident).+rv[:\s]((\d+)?[\w\.]+).+like\sgecko/i], [[R, "IE"], P, F], [/(yabrowser)\/((\d+)?[\w\.]+)/i], [[R, "Yandex"], P, F], [/(comodo_dragon)\/((\d+)?[\w\.]+)/i], [[R, /_/g, " "], P, F], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i], [R, P, F], [/(dolfin)\/((\d+)?[\w\.]+)/i], [[R, "Dolphin"], P, F], [/((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i], [[R, "Chrome"], P, F], [/((?:android.+))version\/((\d+)?[\w\.]+)\smobile\ssafari/i], [[R, "Android Browser"], P, F], [/version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i], [P, F, [R, "Mobile Safari"]], [/version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i], [P, F, R], [/webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i], [R, [F, L.str, q.browser.oldsafari.major], [P, L.str, q.browser.oldsafari.version]], [/(konqueror)\/((\d+)?[\w\.]+)/i, /(webkit|khtml)\/((\d+)?[\w\.]+)/i], [R, P, F], [/(navigator|netscape)\/((\d+)?[\w\.-]+)/i], [[R, "Netscape"], P, F], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i, /(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i, /(uc\s?browser|polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|qqbrowser)[\/\s]?((\d+)?[\w\.]+)/i, /(links)\s\(((\d+)?[\w\.]+)/i, /(gobrowser)\/?((\d+)?[\w\.]+)*/i, /(ice\s?browser)\/v?((\d+)?[\w\._]+)/i, /(mosaic)[\/\s]((\d+)?[\w\.]+)/i], [R, P, F]],
                        engine: [[/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [R, P], [/rv\:([\w\.]+).*(gecko)/i], [P, R]],
                        os: [[/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [R, [P, L.str, q.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[R, "Windows"], [P, L.str, q.os.windows.version]], [/\((bb)(10);/i], [[R, "BlackBerry"], P], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)\/([\w\.]+)/i, /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego)[\/\s-]?([\w\.]+)*/i], [R, P], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [[R, "Symbian"], P], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[R, "Firefox OS"], P], [/(nintendo|playstation)\s([wids3portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], [R, P], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[R, "Chromium OS"], P], [/(sunos)\s?([\w\.]+\d)*/i], [[R, "Solaris"], P], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [R, P], [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i], [[R, "iOS"], [P, /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i], [R, [P, /_/g, "."]], [/(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(macintosh|mac(?=_powerpc)|plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos)/i, /(unix)\s?([\w\.]+)*/i], [R, P]]
                    };
                    var x = function(i) {
                            var r = i || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : B);
                            this.getBrowser = function() {
                                return L.rgx.apply(this, Q.browser)
                            }
                            ;
                            this.getEngine = function() {
                                return L.rgx.apply(this, Q.engine)
                            }
                            ;
                            this.getOS = function() {
                                return L.rgx.apply(this, Q.os)
                            }
                            ;
                            this.getResult = function() {
                                return {
                                    ua: this.getUA(),
                                    browser: this.getBrowser(),
                                    engine: this.getEngine(),
                                    os: this.getOS()
                                }
                            }
                            ;
                            this.getUA = function() {
                                return r
                            }
                            ;
                            this.setUA = function(n) {
                                r = n;
                                return this
                            }
                            ;
                            this.setUA(r)
                        }
                        ;
                    return (new x).getResult()
                }
                ();
                var m = function() {
                    var e = {
                        define_property: function() {
                            return false
                        }
                        (),
                        create_canvas: function() {
                            var i = document.createElement("canvas");
                            return !!(i.getContext && i.getContext("2d"))
                        }
                        (),
                        return_response_type: function(i) {
                            try {
                                if (o.inArray(i, ["", "text", "document"]) !== -1) {
                                    return true
                                } else {
                                    if (window.XMLHttpRequest) {
                                        var s = new XMLHttpRequest;
                                        s.open("get", "/");
                                        if ("responseType" in s) {
                                            s.responseType = i;
                                            if (s.responseType !== i) {
                                                return false
                                            }
                                            return true
                                        }
                                    }
                                }
                            } catch (q) {}
                            return false
                        },
                        use_data_uri: function() {
                            var i = new Image;
                            i.onload = function() {
                                e.use_data_uri = i.width === 1 && i.height === 1
                            }
                            ;
                            setTimeout(function() {
                                    i.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP8AAAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                                }
                                , 1);
                            return false
                        }
                        (),
                        use_data_uri_over32kb: function() {
                            return e.use_data_uri && (k.browser !== "IE" || k.version >= 9)
                        },
                        use_data_uri_of: function(i) {
                            return e.use_data_uri && i < 33000 || e.use_data_uri_over32kb()
                        },
                        use_fileinput: function() {
                            var i = document.createElement("input");
                            i.setAttribute("type", "file");
                            return !i.disabled
                        }
                    };
                    return function(q) {
                        var i = [].slice.call(arguments);
                        i.shift();
                        return o.typeOf(e[q]) === "function" ? e[q].apply(this, i) : !!e[q]
                    }
                }
                ();
                var k = {
                    can: m,
                    browser: l.browser.name,
                    version: parseFloat(l.browser.major),
                    os: l.os.name,
                    osVersion: l.os.version,
                    verComp: p,
                    swf_url: "../flash/Moxie.swf",
                    xap_url: "../silverlight/Moxie.xap",
                    global_event_dispatcher: "moxie.core.EventTarget.instance.dispatchEvent"
                };
                k.OS = k.os;
                return k
            }
        );
        b("moxie/core/utils/Dom", ["moxie/core/utils/Env"], function(v) {
                var m = function(i) {
                        if (typeof i !== "string") {
                            return i
                        }
                        return document.getElementById(i)
                    }
                    ;
                var x = function(o, i) {
                        if (!o.className) {
                            return false
                        }
                        var r = new RegExp("(^|\\s+)" + i + "(\\s+|$)");
                        return r.test(o.className)
                    }
                    ;
                var q = function(n, i) {
                        if (!x(n, i)) {
                            n.className = !n.className ? i : n.className.replace(/\s+$/, "") + " " + i
                        }
                    }
                    ;
                var l = function(o, i) {
                        if (o.className) {
                            var r = new RegExp("(^|\\s+)" + i + "(\\s+|$)");
                            o.className = o.className.replace(r, function(u, s, y) {
                                    return s === " " && y === " " ? " " : ""
                                }
                            )
                        }
                    }
                    ;
                var p = function(n, i) {
                        if (n.currentStyle) {
                            return n.currentStyle[i]
                        } else {
                            if (window.getComputedStyle) {
                                return window.getComputedStyle(n, null )[i]
                            }
                        }
                    }
                    ;
                var w = function(E, z) {
                        function B(G) {
                            var s, H, u = 0, o = 0;
                            if (G) {
                                H = G.getBoundingClientRect();
                                s = y.compatMode === "CSS1Compat" ? y.documentElement : y.body;
                                u = H.left + s.scrollLeft;
                                o = H.top + s.scrollTop
                            }
                            return {
                                x: u,
                                y: o
                            }
                        }
                        var e = 0, A = 0, F, y = document, D, C;
                        E = E;
                        z = z || y.body;
                        if (E && E.getBoundingClientRect && v.browser === "IE" && (!y.documentMode || y.documentMode < 8)) {
                            D = B(E);
                            C = B(z);
                            return {
                                x: D.x - C.x,
                                y: D.y - C.y
                            }
                        }
                        F = E;
                        while (F && F != z && F.nodeType) {
                            e += F.offsetLeft || 0;
                            A += F.offsetTop || 0;
                            F = F.offsetParent
                        }
                        F = E.parentNode;
                        while (F && F != z && F.nodeType) {
                            e -= F.scrollLeft || 0;
                            A -= F.scrollTop || 0;
                            F = F.parentNode
                        }
                        return {
                            x: e,
                            y: A
                        }
                    }
                    ;
                var k = function(i) {
                        return {
                            w: i.offsetWidth || i.clientWidth,
                            h: i.offsetHeight || i.clientHeight
                        }
                    }
                    ;
                return {
                    get: m,
                    hasClass: x,
                    addClass: q,
                    removeClass: l,
                    getStyle: p,
                    getPos: w,
                    getSize: k
                }
            }
        );
        b("moxie/core/Exceptions", ["moxie/core/utils/Basic"], function(k) {
                function i(m, l) {
                    var o;
                    for (o in m) {
                        if (m[o] === l) {
                            return o
                        }
                    }
                    return null
                }
                return {
                    RuntimeError: function() {
                        function e(m) {
                            this.code = m;
                            this.name = i(l, m);
                            this.message = this.name + ": RuntimeError " + this.code
                        }
                        var l = {
                            NOT_INIT_ERR: 1,
                            NOT_SUPPORTED_ERR: 9,
                            JS_ERR: 4
                        };
                        k.extend(e, l);
                        e.prototype = Error.prototype;
                        return e
                    }
                    (),
                    OperationNotAllowedException: function() {
                        function e(l) {
                            this.code = l;
                            this.name = "OperationNotAllowedException"
                        }
                        k.extend(e, {
                            NOT_ALLOWED_ERR: 1
                        });
                        e.prototype = Error.prototype;
                        return e
                    }
                    (),
                    ImageError: function() {
                        function e(m) {
                            this.code = m;
                            this.name = i(l, m);
                            this.message = this.name + ": ImageError " + this.code
                        }
                        var l = {
                            WRONG_FORMAT: 1,
                            MAX_RESOLUTION_ERR: 2
                        };
                        k.extend(e, l);
                        e.prototype = Error.prototype;
                        return e
                    }
                    (),
                    FileException: function() {
                        function e(m) {
                            this.code = m;
                            this.name = i(l, m);
                            this.message = this.name + ": FileException " + this.code
                        }
                        var l = {
                            NOT_FOUND_ERR: 1,
                            SECURITY_ERR: 2,
                            ABORT_ERR: 3,
                            NOT_READABLE_ERR: 4,
                            ENCODING_ERR: 5,
                            NO_MODIFICATION_ALLOWED_ERR: 6,
                            INVALID_STATE_ERR: 7,
                            SYNTAX_ERR: 8
                        };
                        k.extend(e, l);
                        e.prototype = Error.prototype;
                        return e
                    }
                    (),
                    DOMException: function() {
                        function e(m) {
                            this.code = m;
                            this.name = i(l, m);
                            this.message = this.name + ": DOMException " + this.code
                        }
                        var l = {
                            INDEX_SIZE_ERR: 1,
                            DOMSTRING_SIZE_ERR: 2,
                            HIERARCHY_REQUEST_ERR: 3,
                            WRONG_DOCUMENT_ERR: 4,
                            INVALID_CHARACTER_ERR: 5,
                            NO_DATA_ALLOWED_ERR: 6,
                            NO_MODIFICATION_ALLOWED_ERR: 7,
                            NOT_FOUND_ERR: 8,
                            NOT_SUPPORTED_ERR: 9,
                            INUSE_ATTRIBUTE_ERR: 10,
                            INVALID_STATE_ERR: 11,
                            SYNTAX_ERR: 12,
                            INVALID_MODIFICATION_ERR: 13,
                            NAMESPACE_ERR: 14,
                            INVALID_ACCESS_ERR: 15,
                            VALIDATION_ERR: 16,
                            TYPE_MISMATCH_ERR: 17,
                            SECURITY_ERR: 18,
                            NETWORK_ERR: 19,
                            ABORT_ERR: 20,
                            URL_MISMATCH_ERR: 21,
                            QUOTA_EXCEEDED_ERR: 22,
                            TIMEOUT_ERR: 23,
                            INVALID_NODE_TYPE_ERR: 24,
                            DATA_CLONE_ERR: 25
                        };
                        k.extend(e, l);
                        e.prototype = Error.prototype;
                        return e
                    }
                    (),
                    EventException: function() {
                        function e(l) {
                            this.code = l;
                            this.name = "EventException"
                        }
                        k.extend(e, {
                            UNSPECIFIED_EVENT_TYPE_ERR: 0
                        });
                        e.prototype = Error.prototype;
                        return e
                    }
                    ()
                }
            }
        );
        b("moxie/core/EventTarget", ["moxie/core/Exceptions", "moxie/core/utils/Basic"], function(k, i) {
                function l() {
                    var e = {};
                    i.extend(this, {
                        uid: null ,
                        init: function() {
                            if (!this.uid) {
                                this.uid = i.guid("uid_")
                            }
                        },
                        addEventListener: function(t, q, n, p) {
                            var v = this, m;
                            t = i.trim(t);
                            if (/\s/.test(t)) {
                                i.each(t.split(/\s+/), function(o) {
                                        v.addEventListener(o, q, n, p)
                                    }
                                );
                                return
                            }
                            t = t.toLowerCase();
                            n = parseInt(n, 10) || 0;
                            m = e[this.uid] && e[this.uid][t] || [];
                            m.push({
                                fn: q,
                                priority: n,
                                scope: p || this
                            });
                            if (!e[this.uid]) {
                                e[this.uid] = {}
                            }
                            e[this.uid][t] = m
                        },
                        hasEventListener: function(m) {
                            return m ? !!(e[this.uid] && e[this.uid][m]) : !!e[this.uid]
                        },
                        removeEventListener: function(p, o) {
                            p = p.toLowerCase();
                            var m = e[this.uid] && e[this.uid][p], n;
                            if (m) {
                                if (o) {
                                    for (n = m.length - 1; n >= 0; n--) {
                                        if (m[n].fn === o) {
                                            m.splice(n, 1);
                                            break
                                        }
                                    }
                                } else {
                                    m = []
                                }
                                if (!m.length) {
                                    delete e[this.uid][p];
                                    if (i.isEmptyObj(e[this.uid])) {
                                        delete e[this.uid]
                                    }
                                }
                            }
                        },
                        removeAllEventListeners: function() {
                            if (e[this.uid]) {
                                delete e[this.uid]
                            }
                        },
                        dispatchEvent: function(m) {
                            var q, y, n, x, w = {}, t = true, p;
                            if (i.typeOf(m) !== "string") {
                                x = m;
                                if (i.typeOf(x.type) === "string") {
                                    m = x.type;
                                    if (x.total !== p && x.loaded !== p) {
                                        w.total = x.total;
                                        w.loaded = x.loaded
                                    }
                                    w.async = x.async || false
                                } else {
                                    throw new k.EventException(k.EventException.UNSPECIFIED_EVENT_TYPE_ERR)
                                }
                            }
                            if (m.indexOf("::") !== -1) {
                                (function(o) {
                                        q = o[0];
                                        m = o[1]
                                    }
                                )(m.split("::"))
                            } else {
                                q = this.uid
                            }
                            m = m.toLowerCase();
                            y = e[q] && e[q][m];
                            if (y) {
                                y.sort(function(r, o) {
                                        return o.priority - r.priority
                                    }
                                );
                                n = [].slice.call(arguments);
                                n.shift();
                                w.type = m;
                                n.unshift(w);
                                var v = [];
                                i.each(y, function(o) {
                                        n[0].target = o.scope;
                                        if (w.async) {
                                            v.push(function(r) {
                                                    setTimeout(function() {
                                                            r(o.fn.apply(o.scope, n) === false)
                                                        }
                                                        , 1)
                                                }
                                            )
                                        } else {
                                            v.push(function(r) {
                                                    r(o.fn.apply(o.scope, n) === false)
                                                }
                                            )
                                        }
                                    }
                                );
                                if (v.length) {
                                    i.inSeries(v, function(o) {
                                            t = !o
                                        }
                                    )
                                }
                            }
                            return t
                        },
                        bind: function() {
                            this.addEventListener.apply(this, arguments)
                        },
                        unbind: function() {
                            this.removeEventListener.apply(this, arguments)
                        },
                        unbindAll: function() {
                            this.removeAllEventListeners.apply(this, arguments)
                        },
                        trigger: function() {
                            return this.dispatchEvent.apply(this, arguments)
                        },
                        convertEventPropsToHandlers: function(o) {
                            var p;
                            if (i.typeOf(o) !== "array") {
                                o = [o]
                            }
                            for (var m = 0; m < o.length; m++) {
                                p = "on" + o[m];
                                if (i.typeOf(this[p]) === "function") {
                                    this.addEventListener(o[m], this[p])
                                } else {
                                    if (i.typeOf(this[p]) === "undefined") {
                                        this[p] = null
                                    }
                                }
                            }
                        }
                    })
                }
                l.instance = new l;
                return l
            }
        );
        b("moxie/core/utils/Encode", [], function() {
                var l = function(n) {
                        return unescape(encodeURIComponent(n))
                    }
                    ;
                var i = function(n) {
                        return decodeURIComponent(escape(n))
                    }
                    ;
                var m = function(C, x) {
                        if (typeof window.atob === "function") {
                            return x ? i(window.atob(C)) : window.atob(C)
                        }
                        var q = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                        var z, I, w, H, F, B, y, E, A = 0, t = 0, D = "", G = [];
                        if (!C) {
                            return C
                        }
                        C += "";
                        do {
                            H = q.indexOf(C.charAt(A++));
                            F = q.indexOf(C.charAt(A++));
                            B = q.indexOf(C.charAt(A++));
                            y = q.indexOf(C.charAt(A++));
                            E = H << 18 | F << 12 | B << 6 | y;
                            z = E >> 16 & 255;
                            I = E >> 8 & 255;
                            w = E & 255;
                            if (B == 64) {
                                G[t++] = String.fromCharCode(z)
                            } else {
                                if (y == 64) {
                                    G[t++] = String.fromCharCode(z, I)
                                } else {
                                    G[t++] = String.fromCharCode(z, I, w)
                                }
                            }
                        } while (A < C.length);D = G.join("");
                        return x ? i(D) : D
                    }
                    ;
                var k = function(I, x) {
                        if (x) {
                            l(I)
                        }
                        if (typeof window.btoa === "function") {
                            return window.btoa(I)
                        }
                        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                        var A, J, w, H, F, C, z, E, B = 0, q = 0, D = "", G = [];
                        if (!I) {
                            return I
                        }
                        do {
                            A = I.charCodeAt(B++);
                            J = I.charCodeAt(B++);
                            w = I.charCodeAt(B++);
                            E = A << 16 | J << 8 | w;
                            H = E >> 18 & 63;
                            F = E >> 12 & 63;
                            C = E >> 6 & 63;
                            z = E & 63;
                            G[q++] = e.charAt(H) + e.charAt(F) + e.charAt(C) + e.charAt(z)
                        } while (B < I.length);D = G.join("");
                        var y = I.length % 3;
                        return (y ? D.slice(0, y - 3) : D) + "===".slice(y || 3)
                    }
                    ;
                return {
                    utf8_encode: l,
                    utf8_decode: i,
                    atob: m,
                    btoa: k
                }
            }
        );
        b("moxie/runtime/Runtime", ["moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/EventTarget"], function(p, l, q) {
                function m(s, e, i, z, y) {
                    var w = this, t, x = p.guid(e + "_"), v = y || "browser";
                    s = s || {};
                    k[x] = this;
                    i = p.extend({
                        access_binary: false,
                        access_image_binary: false,
                        display_media: false,
                        do_cors: false,
                        drag_and_drop: false,
                        filter_by_extension: true,
                        resize_image: false,
                        report_upload_progress: false,
                        return_response_headers: false,
                        return_response_type: false,
                        return_status_code: true,
                        send_custom_headers: false,
                        select_file: false,
                        select_folder: false,
                        select_multiple: true,
                        send_binary_string: false,
                        send_browser_cookies: true,
                        send_multipart: true,
                        slice_blob: false,
                        stream_upload: false,
                        summon_file_dialog: false,
                        upload_filesize: true,
                        use_http_method: true
                    }, i);
                    if (s.preferred_caps) {
                        v = m.getMode(z, s.preferred_caps, v)
                    }
                    t = function() {
                        var n = {};
                        return {
                            exec: function(B, C, A, u) {
                                if (t[C]) {
                                    if (!n[B]) {
                                        n[B] = {
                                            context: this,
                                            instance: new t[C]
                                        }
                                    }
                                    if (n[B].instance[A]) {
                                        return n[B].instance[A].apply(this, u)
                                    }
                                }
                            },
                            removeInstance: function(r) {
                                delete n[r]
                            },
                            removeAllInstances: function() {
                                var r = this;
                                p.each(n, function(u, A) {
                                        if (p.typeOf(u.instance.destroy) === "function") {
                                            u.instance.destroy.call(u.context)
                                        }
                                        r.removeInstance(A)
                                    }
                                )
                            }
                        }
                    }
                    ();
                    p.extend(this, {
                        initialized: false,
                        uid: x,
                        type: e,
                        mode: m.getMode(z, s.required_caps, v),
                        shimid: x + "_container",
                        clients: 0,
                        options: s,
                        can: function(A, C) {
                            var B = arguments[2] || i;
                            if (p.typeOf(A) === "string" && p.typeOf(C) === "undefined") {
                                A = m.parseCaps(A)
                            }
                            if (p.typeOf(A) === "object") {
                                for (var u in A) {
                                    if (!this.can(u, A[u], B)) {
                                        return false
                                    }
                                }
                                return true
                            }
                            if (p.typeOf(B[A]) === "function") {
                                return B[A].call(this, C)
                            } else {
                                return C === B[A]
                            }
                        },
                        getShimContainer: function() {
                            var A, u = l.get(this.shimid);
                            if (!u) {
                                A = this.options.container ? l.get(this.options.container) : document.body;
                                u = document.createElement("div");
                                u.id = this.shimid;
                                u.className = "moxie-shim moxie-shim-" + this.type;
                                p.extend(u.style, {
                                    position: "absolute",
                                    top: "0px",
                                    left: "0px",
                                    width: "1px",
                                    height: "1px",
                                    overflow: "hidden"
                                });
                                A.appendChild(u);
                                A = null
                            }
                            return u
                        },
                        getShim: function() {
                            return t
                        },
                        shimExec: function(u, r) {
                            var A = [].slice.call(arguments, 2);
                            return w.getShim().exec.call(this, this.uid, u, r, A)
                        },
                        exec: function(u, r) {
                            var A = [].slice.call(arguments, 2);
                            if (w[u] && w[u][r]) {
                                return w[u][r].apply(this, A)
                            }
                            return w.shimExec.apply(this, arguments)
                        },
                        destroy: function() {
                            if (!w) {
                                return
                            }
                            var n = l.get(this.shimid);
                            if (n) {
                                n.parentNode.removeChild(n)
                            }
                            if (t) {
                                t.removeAllInstances()
                            }
                            this.unbindAll();
                            delete k[this.uid];
                            this.uid = null ;
                            x = w = t = n = null
                        }
                    });
                    if (this.mode && s.required_caps && !this.can(s.required_caps)) {
                        this.mode = false
                    }
                }
                var o = {}
                    , k = {};
                m.order = "html5,flash,silverlight,html4";
                m.getRuntime = function(i) {
                    return k[i] ? k[i] : false
                }
                ;
                m.addConstructor = function(n, i) {
                    i.prototype = q.instance;
                    o[n] = i
                }
                ;
                m.getConstructor = function(i) {
                    return o[i] || null
                }
                ;
                m.getInfo = function(n) {
                    var i = m.getRuntime(n);
                    if (i) {
                        return {
                            uid: i.uid,
                            type: i.type,
                            mode: i.mode,
                            can: function() {
                                return i.can.apply(i, arguments)
                            }
                        }
                    }
                    return null
                }
                ;
                m.parseCaps = function(e) {
                    var i = {};
                    if (p.typeOf(e) !== "string") {
                        return e || {}
                    }
                    p.each(e.split(","), function(n) {
                            i[n] = true
                        }
                    );
                    return i
                }
                ;
                m.can = function(w, u) {
                    var x, v = m.getConstructor(w), s;
                    if (v) {
                        x = new v({
                            required_caps: u
                        });
                        s = x.mode;
                        x.destroy();
                        return !!s
                    }
                    return false
                }
                ;
                m.thatCan = function(u, i) {
                    var v = (i || m.order).split(/\s*,\s*/);
                    for (var s in v) {
                        if (m.can(v[s], u)) {
                            return v[s]
                        }
                    }
                    return null
                }
                ;
                m.getMode = function(s, v, u) {
                    var e = null ;
                    if (p.typeOf(u) === "undefined") {
                        u = "browser"
                    }
                    if (v && !p.isEmptyObj(s)) {
                        p.each(v, function(w, t) {
                                if (s.hasOwnProperty(t)) {
                                    var i = s[t](w);
                                    if (typeof i === "string") {
                                        i = [i]
                                    }
                                    if (!e) {
                                        e = i
                                    } else {
                                        if (!(e = p.arrayIntersect(e, i))) {
                                            return e = false
                                        }
                                    }
                                }
                            }
                        );
                        if (e) {
                            return p.inArray(u, e) !== -1 ? u : e[0]
                        } else {
                            if (e === false) {
                                return false
                            }
                        }
                    }
                    return u
                }
                ;
                m.capTrue = function() {
                    return true
                }
                ;
                m.capFalse = function() {
                    return false
                }
                ;
                m.capTest = function(i) {
                    return function() {
                        return !!i
                    }
                }
                ;
                return m
            }
        );
        b("moxie/runtime/RuntimeClient", ["moxie/core/Exceptions", "moxie/core/utils/Basic", "moxie/runtime/Runtime"], function(k, i, l) {
                return function() {
                    var e;
                    i.extend(this, {
                        connectRuntime: function(p) {
                            function m(s) {
                                var u, r;
                                if (!s.length) {
                                    n.trigger("RuntimeError", new k.RuntimeError(k.RuntimeError.NOT_INIT_ERR));
                                    e = null ;
                                    return
                                }
                                u = s.shift();
                                r = l.getConstructor(u);
                                if (!r) {
                                    m(s);
                                    return
                                }
                                e = new r(p);
                                e.bind("Init", function() {
                                        e.initialized = true;
                                        setTimeout(function() {
                                                e.clients++;
                                                n.trigger("RuntimeInit", e)
                                            }
                                            , 1)
                                    }
                                );
                                e.bind("Error", function() {
                                        e.destroy();
                                        m(s)
                                    }
                                );
                                if (!e.mode) {
                                    e.trigger("Error");
                                    return
                                }
                                e.init()
                            }
                            var n = this, q;
                            if (i.typeOf(p) === "string") {
                                q = p
                            } else {
                                if (i.typeOf(p.ruid) === "string") {
                                    q = p.ruid
                                }
                            }
                            if (q) {
                                e = l.getRuntime(q);
                                if (e) {
                                    e.clients++;
                                    return e
                                } else {
                                    throw new k.RuntimeError(k.RuntimeError.NOT_INIT_ERR)
                                }
                            }
                            m((p.runtime_order || l.order).split(/\s*,\s*/))
                        },
                        getRuntime: function() {
                            if (e && e.uid) {
                                return e
                            }
                            e = null ;
                            return null
                        },
                        disconnectRuntime: function() {
                            if (e && --e.clients <= 0) {
                                e.destroy();
                                e = null
                            }
                        }
                    })
                }
            }
        );
        b("moxie/file/Blob", ["moxie/core/utils/Basic", "moxie/core/utils/Encode", "moxie/runtime/RuntimeClient"], function(o, l, p) {
                function k(i, n) {
                    function e(r, x, v) {
                        var w, q = m[this.uid];
                        if (o.typeOf(q) !== "string" || !q.length) {
                            return null
                        }
                        w = new k(null ,{
                            type: v,
                            size: x - r
                        });
                        w.detach(q.substr(r, w.size));
                        return w
                    }
                    p.call(this);
                    if (i) {
                        this.connectRuntime(i)
                    }
                    if (!n) {
                        n = {}
                    } else {
                        if (o.typeOf(n) === "string") {
                            n = {
                                data: n
                            }
                        }
                    }
                    o.extend(this, {
                        uid: n.uid || o.guid("uid_"),
                        ruid: i,
                        size: n.size || 0,
                        type: n.type || "",
                        slice: function(r, q, s) {
                            if (this.isDetached()) {
                                return e.apply(this, arguments)
                            }
                            return this.getRuntime().exec.call(this, "Blob", "slice", this.getSource(), r, q, s)
                        },
                        getSource: function() {
                            if (!m[this.uid]) {
                                return null
                            }
                            return m[this.uid]
                        },
                        detach: function(q) {
                            if (this.ruid) {
                                this.getRuntime().exec.call(this, "Blob", "destroy");
                                this.disconnectRuntime();
                                this.ruid = null
                            }
                            q = q || "";
                            var r = q.match(/^data:([^;]*);base64,/);
                            if (r) {
                                this.type = r[1];
                                q = l.atob(q.substring(q.indexOf("base64,") + 7))
                            }
                            this.size = q.length;
                            m[this.uid] = q
                        },
                        isDetached: function() {
                            return !this.ruid && o.typeOf(m[this.uid]) === "string"
                        },
                        destroy: function() {
                            this.detach();
                            delete m[this.uid]
                        }
                    });
                    if (n.data) {
                        this.detach(n.data)
                    } else {
                        m[this.uid] = n
                    }
                }
                var m = {};
                return k
            }
        );
        b("moxie/file/File", ["moxie/core/utils/Basic", "moxie/core/utils/Mime", "moxie/file/Blob"], function(l, i, m) {
                function k(q, n) {
                    var p, t;
                    if (!n) {
                        n = {}
                    }
                    if (n.type && n.type !== "") {
                        t = n.type
                    } else {
                        t = i.getFileMime(n.name)
                    }
                    if (n.name) {
                        p = n.name.replace(/\\/g, "/");
                        p = p.substr(p.lastIndexOf("/") + 1)
                    } else {
                        var e = t.split("/")[0];
                        p = l.guid((e !== "" ? e : "file") + "_");
                        if (i.extensions[t]) {
                            p += "." + i.extensions[t][0]
                        }
                    }
                    m.apply(this, arguments);
                    l.extend(this, {
                        type: t || "",
                        name: p || l.guid("file_"),
                        lastModifiedDate: n.lastModifiedDate || (new Date).toLocaleString()
                    })
                }
                k.prototype = m.prototype;
                return k
            }
        );
        b("moxie/file/FileInput", ["moxie/core/utils/Basic", "moxie/core/utils/Mime", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/core/EventTarget", "moxie/core/I18n", "moxie/file/File", "moxie/runtime/Runtime", "moxie/runtime/RuntimeClient"], function(x, A, p, k, v, B, m, z, y) {
                function q(n) {
                    var e = this, s, o, r;
                    if (x.inArray(x.typeOf(n), ["string", "node"]) !== -1) {
                        n = {
                            browse_button: n
                        }
                    }
                    o = p.get(n.browse_button);
                    if (!o) {
                        throw new k.DOMException(k.DOMException.NOT_FOUND_ERR)
                    }
                    r = {
                        accept: [{
                            title: B.translate("All Files"),
                            extensions: "*"
                        }],
                        name: "file",
                        multiple: false,
                        required_caps: false,
                        container: o.parentNode || document.body
                    };
                    n = x.extend({}, r, n);
                    if (typeof n.required_caps === "string") {
                        n.required_caps = z.parseCaps(n.required_caps)
                    }
                    if (typeof n.accept === "string") {
                        n.accept = A.mimes2extList(n.accept)
                    }
                    s = p.get(n.container);
                    if (!s) {
                        s = document.body
                    }
                    if (p.getStyle(s, "position") === "static") {
                        s.style.position = "relative"
                    }
                    s = o = null ;
                    y.call(e);
                    x.extend(e, {
                        uid: x.guid("uid_"),
                        ruid: null ,
                        shimid: null ,
                        files: null ,
                        init: function() {
                            e.convertEventPropsToHandlers(w);
                            e.bind("RuntimeInit", function(i, l) {
                                    e.ruid = l.uid;
                                    e.shimid = l.shimid;
                                    e.bind("Ready", function() {
                                            e.trigger("Refresh")
                                        }
                                        , 999);
                                    e.bind("Change", function() {
                                            var u = l.exec.call(e, "FileInput", "getFiles");
                                            e.files = [];
                                            x.each(u, function(t) {
                                                    if (t.size === 0) {
                                                        return true
                                                    }
                                                    e.files.push(new m(e.ruid,t))
                                                }
                                            )
                                        }
                                        , 999);
                                    e.bind("Refresh", function() {
                                            var D, E, F, C;
                                            F = p.get(n.browse_button);
                                            C = p.get(l.shimid);
                                            if (F) {
                                                D = p.getPos(F, p.get(n.container));
                                                E = p.getSize(F);
                                                if (C) {
                                                    x.extend(C.style, {
                                                        top: D.y + "px",
                                                        left: D.x + "px",
                                                        width: E.w + "px",
                                                        height: E.h + "px"
                                                    })
                                                }
                                            }
                                            C = F = null
                                        }
                                    );
                                    l.exec.call(e, "FileInput", "init", n)
                                }
                            );
                            e.connectRuntime(x.extend({}, n, {
                                required_caps: {
                                    select_file: true
                                }
                            }))
                        },
                        disable: function(i) {
                            var l = this.getRuntime();
                            if (l) {
                                l.exec.call(this, "FileInput", "disable", x.typeOf(i) === "undefined" ? true : i)
                            }
                        },
                        refresh: function() {
                            e.trigger("Refresh")
                        },
                        destroy: function() {
                            var i = this.getRuntime();
                            if (i) {
                                i.exec.call(this, "FileInput", "destroy");
                                this.disconnectRuntime()
                            }
                            if (x.typeOf(this.files) === "array") {
                                x.each(this.files, function(l) {
                                        l.destroy()
                                    }
                                )
                            }
                            this.files = null
                        }
                    })
                }
                var w = ["ready", "change", "cancel", "mouseenter", "mouseleave", "mousedown", "mouseup"];
                q.prototype = v.instance;
                return q
            }
        );
        b("moxie/file/FileDrop", ["moxie/core/I18n", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/core/utils/Basic", "moxie/file/File", "moxie/runtime/RuntimeClient", "moxie/core/EventTarget", "moxie/core/utils/Mime"], function(v, y, m, k, p, z, l, x) {
                function q(r) {
                    var i = this, e;
                    if (typeof r === "string") {
                        r = {
                            drop_zone: r
                        }
                    }
                    e = {
                        accept: [{
                            title: v.translate("All Files"),
                            extensions: "*"
                        }],
                        required_caps: {
                            drag_and_drop: true
                        }
                    };
                    r = typeof r === "object" ? k.extend({}, e, r) : e;
                    r.container = y.get(r.drop_zone) || document.body;
                    if (y.getStyle(r.container, "position") === "static") {
                        r.container.style.position = "relative"
                    }
                    if (typeof r.accept === "string") {
                        r.accept = x.mimes2extList(r.accept)
                    }
                    z.call(i);
                    k.extend(i, {
                        uid: k.guid("uid_"),
                        ruid: null ,
                        files: null ,
                        init: function() {
                            i.convertEventPropsToHandlers(w);
                            i.bind("RuntimeInit", function(o, n) {
                                    i.ruid = n.uid;
                                    i.bind("Drop", function() {
                                            var s = n.exec.call(i, "FileDrop", "getFiles");
                                            i.files = [];
                                            k.each(s, function(t) {
                                                    i.files.push(new p(i.ruid,t))
                                                }
                                            )
                                        }
                                        , 999);
                                    n.exec.call(i, "FileDrop", "init", r);
                                    i.dispatchEvent("ready")
                                }
                            );
                            i.connectRuntime(r)
                        },
                        destroy: function() {
                            var n = this.getRuntime();
                            if (n) {
                                n.exec.call(this, "FileDrop", "destroy");
                                this.disconnectRuntime()
                            }
                            this.files = null
                        }
                    })
                }
                var w = ["ready", "dragenter", "dragleave", "drop", "error"];
                q.prototype = l.instance;
                return q
            }
        );
        b("moxie/runtime/RuntimeTarget", ["moxie/core/utils/Basic", "moxie/runtime/RuntimeClient", "moxie/core/EventTarget"], function(l, i, m) {
                function k() {
                    this.uid = l.guid("uid_");
                    i.call(this);
                    this.destroy = function() {
                        this.disconnectRuntime();
                        this.unbindAll()
                    }
                }
                k.prototype = m.instance;
                return k
            }
        );
        b("moxie/file/FileReader", ["moxie/core/utils/Basic", "moxie/core/utils/Encode", "moxie/core/Exceptions", "moxie/core/EventTarget", "moxie/file/Blob", "moxie/file/File", "moxie/runtime/RuntimeTarget"], function(q, x, m, k, p, y, l) {
                function v() {
                    function n(u, s) {
                        function o(A) {
                            i.readyState = v.DONE;
                            i.error = A;
                            i.trigger("error");
                            z()
                        }
                        function z() {
                            e.destroy();
                            e = null ;
                            i.trigger("loadend")
                        }
                        function r(A) {
                            e.bind("Error", function(C, B) {
                                    o(B)
                                }
                            );
                            e.bind("Progress", function(B) {
                                    i.result = A.exec.call(e, "FileReader", "getResult");
                                    i.trigger(B)
                                }
                            );
                            e.bind("Load", function(B) {
                                    i.readyState = v.DONE;
                                    i.result = A.exec.call(e, "FileReader", "getResult");
                                    i.trigger(B);
                                    z()
                                }
                            );
                            A.exec.call(e, "FileReader", "read", u, s)
                        }
                        e = new l;
                        this.convertEventPropsToHandlers(w);
                        if (this.readyState === v.LOADING) {
                            return o(new m.DOMException(m.DOMException.INVALID_STATE_ERR))
                        }
                        this.readyState = v.LOADING;
                        this.trigger("loadstart");
                        if (s instanceof p) {
                            if (s.isDetached()) {
                                var t = s.getSource();
                                switch (u) {
                                    case "readAsText":
                                    case "readAsBinaryString":
                                        this.result = t;
                                        break;
                                    case "readAsDataURL":
                                        this.result = "data:" + s.type + ";base64," + x.btoa(t);
                                        break
                                }
                                this.readyState = v.DONE;
                                this.trigger("load");
                                z()
                            } else {
                                r(e.connectRuntime(s.ruid))
                            }
                        } else {
                            o(new m.DOMException(m.DOMException.NOT_FOUND_ERR))
                        }
                    }
                    var i = this, e;
                    q.extend(this, {
                        uid: q.guid("uid_"),
                        readyState: v.EMPTY,
                        result: null ,
                        error: null ,
                        readAsBinaryString: function(o) {
                            n.call(this, "readAsBinaryString", o)
                        },
                        readAsDataURL: function(o) {
                            n.call(this, "readAsDataURL", o)
                        },
                        readAsText: function(o) {
                            n.call(this, "readAsText", o)
                        },
                        abort: function() {
                            this.result = null ;
                            if (q.inArray(this.readyState, [v.EMPTY, v.DONE]) !== -1) {
                                return
                            } else {
                                if (this.readyState === v.LOADING) {
                                    this.readyState = v.DONE
                                }
                            }
                            if (e) {
                                e.getRuntime().exec.call(this, "FileReader", "abort")
                            }
                            this.trigger("abort");
                            this.trigger("loadend")
                        },
                        destroy: function() {
                            this.abort();
                            if (e) {
                                e.getRuntime().exec.call(this, "FileReader", "destroy");
                                e.disconnectRuntime()
                            }
                            i = e = null
                        }
                    })
                }
                var w = ["loadstart", "progress", "load", "abort", "error", "loadend"];
                v.EMPTY = 0;
                v.LOADING = 1;
                v.DONE = 2;
                v.prototype = k.instance;
                return v
            }
        );
        b("moxie/core/utils/Url", [], function() {
                var k = function(y, p) {
                        var e = ["source", "scheme", "authority", "userInfo", "user", "pass", "host", "port", "relative", "path", "directory", "file", "query", "fragment"]
                            , q = e.length
                            , z = {
                            http: 80,
                            https: 443
                        }
                            , m = {}
                            , x = /^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)/
                            , w = x.exec(y || "");
                        while (q--) {
                            if (w[q]) {
                                m[e[q]] = w[q]
                            }
                        }
                        if (!m.scheme) {
                            if (!p || typeof p === "string") {
                                p = k(p || document.location.href)
                            }
                            m.scheme = p.scheme;
                            m.host = p.host;
                            m.port = p.port;
                            var v = "";
                            if (/^[^\/]/.test(m.path)) {
                                v = p.path;
                                if (!/(\/|\/[^\.]+)$/.test(v)) {
                                    v = v.replace(/\/[^\/]+$/, "/")
                                } else {
                                    v += "/"
                                }
                            }
                            m.path = v + (m.path || "")
                        }
                        if (!m.port) {
                            m.port = z[m.scheme] || 80
                        }
                        m.port = parseInt(m.port, 10);
                        if (!m.path) {
                            m.path = "/"
                        }
                        delete m.source;
                        return m
                    }
                    ;
                var i = function(e) {
                        var o = {
                            http: 80,
                            https: 443
                        }
                            , m = k(e);
                        return m.scheme + "://" + m.host + (m.port !== o[m.scheme] ? ":" + m.port : "") + m.path + (m.query ? m.query : "")
                    }
                    ;
                var l = function(e) {
                        function m(n) {
                            return [n.scheme, n.host, n.port].join("/")
                        }
                        if (typeof e === "string") {
                            e = k(e)
                        }
                        return m(k()) === m(e)
                    }
                    ;
                return {
                    parseUrl: k,
                    resolveUrl: i,
                    hasSameOrigin: l
                }
            }
        );
        b("moxie/file/FileReaderSync", ["moxie/core/utils/Basic", "moxie/runtime/RuntimeClient", "moxie/core/utils/Encode"], function(k, i, l) {
                return function() {
                    function e(w, p) {
                        if (p.isDetached()) {
                            var v = p.getSource();
                            switch (w) {
                                case "readAsBinaryString":
                                    return v;
                                case "readAsDataURL":
                                    return "data:" + p.type + ";base64," + l.btoa(v);
                                case "readAsText":
                                    var n = "";
                                    for (var q = 0, x = v.length; q < x; q++) {
                                        n += String.fromCharCode(v[q])
                                    }
                                    return n
                            }
                        } else {
                            var m = this.connectRuntime(p.ruid).exec.call(this, "FileReaderSync", "read", w, p);
                            this.disconnectRuntime();
                            return m
                        }
                    }
                    i.call(this);
                    k.extend(this, {
                        uid: k.guid("uid_"),
                        readAsBinaryString: function(m) {
                            return e.call(this, "readAsBinaryString", m)
                        },
                        readAsDataURL: function(m) {
                            return e.call(this, "readAsDataURL", m)
                        },
                        readAsText: function(m) {
                            return e.call(this, "readAsText", m)
                        }
                    })
                }
            }
        );
        b("moxie/xhr/FormData", ["moxie/core/Exceptions", "moxie/core/utils/Basic", "moxie/file/Blob"], function(l, i, m) {
                function k() {
                    var o, n = [];
                    i.extend(this, {
                        append: function(p, q) {
                            var r = this
                                , e = i.typeOf(q);
                            if (q instanceof m) {
                                o = {
                                    name: p,
                                    value: q
                                }
                            } else {
                                if ("array" === e) {
                                    p += "[]";
                                    i.each(q, function(s) {
                                            r.append(p, s)
                                        }
                                    )
                                } else {
                                    if ("object" === e) {
                                        i.each(q, function(u, s) {
                                                r.append(p + "[" + s + "]", u)
                                            }
                                        )
                                    } else {
                                        if ("null" === e || "undefined" === e || "number" === e && isNaN(q)) {
                                            r.append(p, "false")
                                        } else {
                                            n.push({
                                                name: p,
                                                value: q.toString()
                                            })
                                        }
                                    }
                                }
                            }
                        },
                        hasBlob: function() {
                            return !!this.getBlob()
                        },
                        getBlob: function() {
                            return o && o.value || null
                        },
                        getBlobName: function() {
                            return o && o.name || null
                        },
                        each: function(e) {
                            i.each(n, function(p) {
                                    e(p.value, p.name)
                                }
                            );
                            if (o) {
                                e(o.value, o.name)
                            }
                        },
                        destroy: function() {
                            o = null ;
                            n = []
                        }
                    })
                }
                return k
            }
        );
        b("moxie/xhr/XMLHttpRequest", ["moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/core/EventTarget", "moxie/core/utils/Encode", "moxie/core/utils/Url", "moxie/runtime/Runtime", "moxie/runtime/RuntimeTarget", "moxie/file/Blob", "moxie/file/FileReaderSync", "moxie/xhr/FormData", "moxie/core/utils/Env", "moxie/core/utils/Mime"], function(I, w, B, y, E, x, A, q, L, H, D, K) {
                function z() {
                    this.uid = I.guid("uid_")
                }
                function G() {
                    function Q(n, m) {
                        if (!aj.hasOwnProperty(n)) {
                            return
                        }
                        if (arguments.length === 1) {
                            return D.can("define_property") ? aj[n] : ae[n]
                        } else {
                            if (D.can("define_property")) {
                                aj[n] = m
                            } else {
                                ae[n] = m
                            }
                        }
                    }
                    function ac(v) {
                        function M() {
                            if (ab) {
                                ab.destroy();
                                ab = null
                            }
                            N.dispatchEvent("loadend");
                            N = null
                        }
                        function m(n) {
                            ab.bind("LoadStart", function(O) {
                                    Q("readyState", G.LOADING);
                                    N.dispatchEvent("readystatechange");
                                    N.dispatchEvent(O);
                                    if (ag) {
                                        N.upload.dispatchEvent(O)
                                    }
                                }
                            );
                            ab.bind("Progress", function(O) {
                                    if (Q("readyState") !== G.LOADING) {
                                        Q("readyState", G.LOADING);
                                        N.dispatchEvent("readystatechange")
                                    }
                                    N.dispatchEvent(O)
                                }
                            );
                            ab.bind("UploadProgress", function(O) {
                                    if (ag) {
                                        N.upload.dispatchEvent({
                                            type: "progress",
                                            lengthComputable: false,
                                            total: O.total,
                                            loaded: O.loaded
                                        })
                                    }
                                }
                            );
                            ab.bind("Load", function(O) {
                                    Q("readyState", G.DONE);
                                    Q("status", Number(n.exec.call(ab, "XMLHttpRequest", "getStatus") || 0));
                                    Q("statusText", F[Q("status")] || "");
                                    Q("response", n.exec.call(ab, "XMLHttpRequest", "getResponse", Q("responseType")));
                                    if (!!~I.inArray(Q("responseType"), ["text", ""])) {
                                        Q("responseText", Q("response"))
                                    } else {
                                        if (Q("responseType") === "document") {
                                            Q("responseXML", Q("response"))
                                        }
                                    }
                                    ah = n.exec.call(ab, "XMLHttpRequest", "getAllResponseHeaders");
                                    N.dispatchEvent("readystatechange");
                                    if (Q("status") > 0) {
                                        if (ag) {
                                            N.upload.dispatchEvent(O)
                                        }
                                        N.dispatchEvent(O)
                                    } else {
                                        ad = true;
                                        N.dispatchEvent("error")
                                    }
                                    M()
                                }
                            );
                            ab.bind("Abort", function(O) {
                                    N.dispatchEvent(O);
                                    M()
                                }
                            );
                            ab.bind("Error", function(O) {
                                    ad = true;
                                    Q("readyState", G.DONE);
                                    N.dispatchEvent("readystatechange");
                                    t = true;
                                    N.dispatchEvent(O);
                                    M()
                                }
                            );
                            n.exec.call(ab, "XMLHttpRequest", "send", {
                                url: af,
                                method: u,
                                async: W,
                                user: V,
                                password: Y,
                                headers: ai,
                                mimeType: e,
                                encoding: i,
                                responseType: N.responseType,
                                withCredentials: N.withCredentials,
                                options: U
                            }, v)
                        }
                        var N = this;
                        s = (new Date).getTime();
                        ab = new A;
                        if (typeof U.required_caps === "string") {
                            U.required_caps = x.parseCaps(U.required_caps)
                        }
                        U.required_caps = I.extend({}, U.required_caps, {
                            return_response_type: N.responseType
                        });
                        if (v instanceof H) {
                            U.required_caps.send_multipart = true
                        }
                        if (!p) {
                            U.required_caps.do_cors = true
                        }
                        if (U.ruid) {
                            m(ab.connectRuntime(U))
                        } else {
                            ab.bind("RuntimeInit", function(O, n) {
                                    m(n)
                                }
                            );
                            ab.bind("RuntimeError", function(O, n) {
                                    N.dispatchEvent("RuntimeError", n)
                                }
                            );
                            ab.connectRuntime(U)
                        }
                    }
                    function l() {
                        Q("responseText", "");
                        Q("responseXML", null );
                        Q("response", null );
                        Q("status", 0);
                        Q("statusText", "");
                        s = ak = null
                    }
                    var ae = this, aj = {
                        timeout: 0,
                        readyState: G.UNSENT,
                        withCredentials: false,
                        status: 0,
                        statusText: "",
                        responseType: "",
                        responseXML: null ,
                        responseText: null ,
                        response: null
                    }, W = true, af, u, ai = {}, V, Y, i = null , e = null , r = false, aa = false, ag = false, t = false, ad = false, p = false, s, ak, Z = null , o = null , U = {}, ab, ah = "", X;
                    I.extend(this, aj, {
                        uid: I.guid("uid_"),
                        upload: new z,
                        open: function(P, M, O, v, m) {
                            var N;
                            if (!P || !M) {
                                throw new w.DOMException(w.DOMException.SYNTAX_ERR)
                            }
                            if (/[\u0100-\uffff]/.test(P) || y.utf8_encode(P) !== P) {
                                throw new w.DOMException(w.DOMException.SYNTAX_ERR)
                            }
                            if (!!~I.inArray(P.toUpperCase(), ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT", "TRACE", "TRACK"])) {
                                u = P.toUpperCase()
                            }
                            if (!!~I.inArray(u, ["CONNECT", "TRACE", "TRACK"])) {
                                throw new w.DOMException(w.DOMException.SECURITY_ERR)
                            }
                            M = y.utf8_encode(M);
                            N = E.parseUrl(M);
                            p = E.hasSameOrigin(N);
                            af = E.resolveUrl(M);
                            if ((v || m) && !p) {
                                throw new w.DOMException(w.DOMException.INVALID_ACCESS_ERR)
                            }
                            V = v || N.user;
                            Y = m || N.pass;
                            W = O || true;
                            if (W === false && (Q("timeout") || Q("withCredentials") || Q("responseType") !== "")) {
                                throw new w.DOMException(w.DOMException.INVALID_ACCESS_ERR)
                            }
                            r = !W;
                            aa = false;
                            ai = {};
                            l.call(this);
                            Q("readyState", G.OPENED);
                            this.convertEventPropsToHandlers(["readystatechange"]);
                            this.dispatchEvent("readystatechange")
                        },
                        setRequestHeader: function(M, m) {
                            var v = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "content-transfer-encoding", "date", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "user-agent", "via"];
                            if (Q("readyState") !== G.OPENED || aa) {
                                throw new w.DOMException(w.DOMException.INVALID_STATE_ERR)
                            }
                            if (/[\u0100-\uffff]/.test(M) || y.utf8_encode(M) !== M) {
                                throw new w.DOMException(w.DOMException.SYNTAX_ERR)
                            }
                            M = I.trim(M).toLowerCase();
                            if (!!~I.inArray(M, v) || /^(proxy\-|sec\-)/.test(M)) {
                                return false
                            }
                            if (!ai[M]) {
                                ai[M] = m
                            } else {
                                ai[M] += ", " + m
                            }
                            return true
                        },
                        getAllResponseHeaders: function() {
                            return ah || ""
                        },
                        getResponseHeader: function(m) {
                            m = m.toLowerCase();
                            if (ad || !!~I.inArray(m, ["set-cookie", "set-cookie2"])) {
                                return null
                            }
                            if (ah && ah !== "") {
                                if (!X) {
                                    X = {};
                                    I.each(ah.split(/\r\n/), function(v) {
                                            var M = v.split(/:\s+/);
                                            if (M.length === 2) {
                                                M[0] = I.trim(M[0]);
                                                X[M[0].toLowerCase()] = {
                                                    header: M[0],
                                                    value: I.trim(M[1])
                                                }
                                            }
                                        }
                                    )
                                }
                                if (X.hasOwnProperty(m)) {
                                    return X[m].header + ": " + X[m].value
                                }
                            }
                            return null
                        },
                        overrideMimeType: function(M) {
                            var v, m;
                            if (!!~I.inArray(Q("readyState"), [G.LOADING, G.DONE])) {
                                throw new w.DOMException(w.DOMException.INVALID_STATE_ERR)
                            }
                            M = I.trim(M.toLowerCase());
                            if (/;/.test(M) && (v = M.match(/^([^;]+)(?:;\scharset\=)?(.*)$/))) {
                                M = v[1];
                                if (v[2]) {
                                    m = v[2]
                                }
                            }
                            if (!K.mimes[M]) {
                                throw new w.DOMException(w.DOMException.SYNTAX_ERR)
                            }
                            Z = M;
                            o = m
                        },
                        send: function(M, m) {
                            if (I.typeOf(m) === "string") {
                                U = {
                                    ruid: m
                                }
                            } else {
                                if (!m) {
                                    U = {}
                                } else {
                                    U = m
                                }
                            }
                            this.convertEventPropsToHandlers(J);
                            this.upload.convertEventPropsToHandlers(J);
                            if (this.readyState !== G.OPENED || aa) {
                                throw new w.DOMException(w.DOMException.INVALID_STATE_ERR)
                            }
                            if (M instanceof q) {
                                U.ruid = M.ruid;
                                e = M.type || "application/octet-stream"
                            } else {
                                if (M instanceof H) {
                                    if (M.hasBlob()) {
                                        var v = M.getBlob();
                                        U.ruid = v.ruid;
                                        e = v.type || "application/octet-stream"
                                    }
                                } else {
                                    if (typeof M === "string") {
                                        i = "UTF-8";
                                        e = "text/plain;charset=UTF-8";
                                        M = y.utf8_encode(M)
                                    }
                                }
                            }
                            if (!this.withCredentials) {
                                this.withCredentials = U.required_caps && U.required_caps.send_browser_cookies && !p
                            }
                            ag = !r && this.upload.hasEventListener();
                            ad = false;
                            t = !M;
                            if (!r) {
                                aa = true
                            }
                            ac.call(this, M)
                        },
                        abort: function() {
                            ad = true;
                            r = false;
                            if (!~I.inArray(Q("readyState"), [G.UNSENT, G.OPENED, G.DONE])) {
                                Q("readyState", G.DONE);
                                aa = false;
                                if (ab) {
                                    ab.getRuntime().exec.call(ab, "XMLHttpRequest", "abort", t)
                                } else {
                                    throw new w.DOMException(w.DOMException.INVALID_STATE_ERR)
                                }
                                t = true
                            } else {
                                Q("readyState", G.UNSENT)
                            }
                        },
                        destroy: function() {
                            if (ab) {
                                if (I.typeOf(ab.destroy) === "function") {
                                    ab.destroy()
                                }
                                ab = null
                            }
                            this.unbindAll();
                            if (this.upload) {
                                this.upload.unbindAll();
                                this.upload = null
                            }
                        }
                    })
                }
                var F = {
                    100: "Continue",
                    101: "Switching Protocols",
                    102: "Processing",
                    200: "OK",
                    201: "Created",
                    202: "Accepted",
                    203: "Non-Authoritative Information",
                    204: "No Content",
                    205: "Reset Content",
                    206: "Partial Content",
                    207: "Multi-Status",
                    226: "IM Used",
                    300: "Multiple Choices",
                    301: "Moved Permanently",
                    302: "Found",
                    303: "See Other",
                    304: "Not Modified",
                    305: "Use Proxy",
                    306: "Reserved",
                    307: "Temporary Redirect",
                    400: "Bad Request",
                    401: "Unauthorized",
                    402: "Payment Required",
                    403: "Forbidden",
                    404: "Not Found",
                    405: "Method Not Allowed",
                    406: "Not Acceptable",
                    407: "Proxy Authentication Required",
                    408: "Request Timeout",
                    409: "Conflict",
                    410: "Gone",
                    411: "Length Required",
                    412: "Precondition Failed",
                    413: "Request Entity Too Large",
                    414: "Request-URI Too Long",
                    415: "Unsupported Media Type",
                    416: "Requested Range Not Satisfiable",
                    417: "Expectation Failed",
                    422: "Unprocessable Entity",
                    423: "Locked",
                    424: "Failed Dependency",
                    426: "Upgrade Required",
                    500: "Internal Server Error",
                    501: "Not Implemented",
                    502: "Bad Gateway",
                    503: "Service Unavailable",
                    504: "Gateway Timeout",
                    505: "HTTP Version Not Supported",
                    506: "Variant Also Negotiates",
                    507: "Insufficient Storage",
                    510: "Not Extended"
                };
                z.prototype = B.instance;
                var J = ["loadstart", "progress", "abort", "error", "load", "timeout", "loadend"];
                var k = 1
                    , C = 2;
                G.UNSENT = 0;
                G.OPENED = 1;
                G.HEADERS_RECEIVED = 2;
                G.LOADING = 3;
                G.DONE = 4;
                G.prototype = B.instance;
                return G
            }
        );
        b("moxie/runtime/Transporter", ["moxie/core/utils/Basic", "moxie/core/utils/Encode", "moxie/runtime/RuntimeClient", "moxie/core/EventTarget"], function(o, l, p, m) {
                function k() {
                    function n() {
                        x = w = 0;
                        i = this.result = null
                    }
                    function v(s, z) {
                        var u = this;
                        y = z;
                        u.bind("TransportingProgress", function(r) {
                                w = r.loaded;
                                if (w < x && o.inArray(u.state, [k.IDLE, k.DONE]) === -1) {
                                    q.call(u)
                                }
                            }
                            , 999);
                        u.bind("TransportingComplete", function() {
                                w = x;
                                u.state = k.DONE;
                                i = null ;
                                u.result = y.exec.call(u, "Transporter", "getAsBlob", s || "")
                            }
                            , 999);
                        u.state = k.BUSY;
                        u.trigger("TransportingStarted");
                        q.call(u)
                    }
                    function q() {
                        var u = this, z, s = x - w;
                        if (t > s) {
                            t = s
                        }
                        z = l.btoa(i.substr(w, t));
                        y.exec.call(u, "Transporter", "receive", z, x)
                    }
                    var e, y, i, x, w, t;
                    p.call(this);
                    o.extend(this, {
                        uid: o.guid("uid_"),
                        state: k.IDLE,
                        result: null ,
                        transport: function(z, B, u) {
                            var A = this;
                            u = o.extend({
                                chunk_size: 204798
                            }, u);
                            if (e = u.chunk_size % 3) {
                                u.chunk_size += 3 - e
                            }
                            t = u.chunk_size;
                            n.call(this);
                            i = z;
                            x = z.length;
                            if (o.typeOf(u) === "string" || u.ruid) {
                                v.call(A, B, this.connectRuntime(u))
                            } else {
                                var r = function(C, s) {
                                        A.unbind("RuntimeInit", r);
                                        v.call(A, B, s)
                                    }
                                    ;
                                this.bind("RuntimeInit", r);
                                this.connectRuntime(u)
                            }
                        },
                        abort: function() {
                            var r = this;
                            r.state = k.IDLE;
                            if (y) {
                                y.exec.call(r, "Transporter", "clear");
                                r.trigger("TransportingAborted")
                            }
                            n.call(r)
                        },
                        destroy: function() {
                            this.unbindAll();
                            y = null ;
                            this.disconnectRuntime();
                            n.call(this)
                        }
                    })
                }
                k.IDLE = 0;
                k.BUSY = 1;
                k.DONE = 2;
                k.prototype = m.instance;
                return k
            }
        );
        b("moxie/image/Image", ["moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/file/FileReaderSync", "moxie/xhr/XMLHttpRequest", "moxie/runtime/Runtime", "moxie/runtime/RuntimeClient", "moxie/runtime/Transporter", "moxie/core/utils/Env", "moxie/core/EventTarget", "moxie/file/Blob", "moxie/file/File", "moxie/core/utils/Encode"], function(A, F, v, k, x, G, q, E, D, z, w, C, y) {
                function B() {
                    function n(p) {
                        if (!p) {
                            p = this.getRuntime().exec.call(this, "Image", "getInfo")
                        }
                        this.size = p.size;
                        this.width = p.width;
                        this.height = p.height;
                        this.type = p.type;
                        this.meta = p.meta;
                        if (this.name === "") {
                            this.name = p.name
                        }
                    }
                    function o(s) {
                        var u = A.typeOf(s);
                        try {
                            if (s instanceof B) {
                                if (!s.size) {
                                    throw new v.DOMException(v.DOMException.INVALID_STATE_ERR)
                                }
                                i.apply(this, arguments)
                            } else {
                                if (s instanceof w) {
                                    if (!~A.inArray(s.type, ["image/jpeg", "image/png"])) {
                                        throw new v.ImageError(v.ImageError.WRONG_FORMAT)
                                    }
                                    e.apply(this, arguments)
                                } else {
                                    if (A.inArray(u, ["blob", "file"]) !== -1) {
                                        o.call(this, new C(null ,s), arguments[1])
                                    } else {
                                        if (u === "string") {
                                            if (/^data:[^;]*;base64,/.test(s)) {
                                                o.call(this, new w(null ,{
                                                    data: s
                                                }), arguments[1])
                                            } else {
                                                l.apply(this, arguments)
                                            }
                                        } else {
                                            if (u === "node" && s.nodeName.toLowerCase() === "img") {
                                                o.call(this, s.src, arguments[1])
                                            } else {
                                                throw new v.DOMException(v.DOMException.TYPE_MISMATCH_ERR)
                                            }
                                        }
                                    }
                                }
                            }
                        } catch (p) {
                            this.trigger("error", p.code)
                        }
                    }
                    function i(p, u) {
                        var s = this.connectRuntime(p.ruid);
                        this.ruid = s.uid;
                        s.exec.call(this, "Image", "loadFromImage", p, A.typeOf(u) === "undefined" ? true : u)
                    }
                    function e(s, H) {
                        function p(r) {
                            u.ruid = r.uid;
                            r.exec.call(u, "Image", "loadFromBlob", s)
                        }
                        var u = this;
                        u.name = s.name || "";
                        if (s.isDetached()) {
                            this.bind("RuntimeInit", function(I, r) {
                                    p(r)
                                }
                            );
                            if (H && typeof H.required_caps === "string") {
                                H.required_caps = G.parseCaps(H.required_caps)
                            }
                            this.connectRuntime(A.extend({
                                required_caps: {
                                    access_image_binary: true,
                                    resize_image: true
                                }
                            }, H))
                        } else {
                            p(this.connectRuntime(s.ruid))
                        }
                    }
                    function l(u, p) {
                        var H = this, s;
                        s = new x;
                        s.open("get", u);
                        s.responseType = "blob";
                        s.onprogress = function(r) {
                            H.trigger(r)
                        }
                        ;
                        s.onload = function() {
                            e.call(H, s.response, true)
                        }
                        ;
                        s.onerror = function(r) {
                            H.trigger(r)
                        }
                        ;
                        s.onloadend = function() {
                            s.destroy()
                        }
                        ;
                        s.bind("RuntimeError", function(I, r) {
                                H.trigger("RuntimeError", r)
                            }
                        );
                        s.send(null , p)
                    }
                    q.call(this);
                    A.extend(this, {
                        uid: A.guid("uid_"),
                        ruid: null ,
                        name: "",
                        size: 0,
                        width: 0,
                        height: 0,
                        type: "",
                        meta: {},
                        clone: function() {
                            this.load.apply(this, arguments)
                        },
                        load: function() {
                            this.bind("Load Resize", function() {
                                    n.call(this)
                                }
                                , 999);
                            this.convertEventPropsToHandlers(m);
                            o.apply(this, arguments)
                        },
                        downsize: function(s) {
                            var u = {
                                width: this.width,
                                height: this.height,
                                crop: false,
                                preserveHeaders: true
                            };
                            if (typeof s === "object") {
                                s = A.extend(u, s)
                            } else {
                                s = A.extend(u, {
                                    width: arguments[0],
                                    height: arguments[1],
                                    crop: arguments[2],
                                    preserveHeaders: arguments[3]
                                })
                            }
                            try {
                                if (!this.size) {
                                    throw new v.DOMException(v.DOMException.INVALID_STATE_ERR)
                                }
                                if (this.width > B.MAX_RESIZE_WIDTH || this.height > B.MAX_RESIZE_HEIGHT) {
                                    throw new v.ImageError(v.ImageError.MAX_RESOLUTION_ERR)
                                }
                                this.getRuntime().exec.call(this, "Image", "downsize", s.width, s.height, s.crop, s.preserveHeaders)
                            } catch (p) {
                                this.trigger("error", p.code)
                            }
                        },
                        crop: function(r, p, s) {
                            this.downsize(r, p, true, s)
                        },
                        getAsCanvas: function() {
                            if (!D.can("create_canvas")) {
                                throw new v.RuntimeError(v.RuntimeError.NOT_SUPPORTED_ERR)
                            }
                            var p = this.connectRuntime(this.ruid);
                            return p.exec.call(this, "Image", "getAsCanvas")
                        },
                        getAsBlob: function(r, p) {
                            if (!this.size) {
                                throw new v.DOMException(v.DOMException.INVALID_STATE_ERR)
                            }
                            if (!r) {
                                r = "image/jpeg"
                            }
                            if (r === "image/jpeg" && !p) {
                                p = 90
                            }
                            return this.getRuntime().exec.call(this, "Image", "getAsBlob", r, p)
                        },
                        getAsDataURL: function(r, p) {
                            if (!this.size) {
                                throw new v.DOMException(v.DOMException.INVALID_STATE_ERR)
                            }
                            return this.getRuntime().exec.call(this, "Image", "getAsDataURL", r, p)
                        },
                        getAsBinaryString: function(r, p) {
                            var s = this.getAsDataURL(r, p);
                            return y.atob(s.substring(s.indexOf("base64,") + 7))
                        },
                        embed: function(t) {
                            function L() {
                                if (D.can("create_canvas")) {
                                    var r = R.getAsCanvas();
                                    if (r) {
                                        t.appendChild(r);
                                        r = null ;
                                        R.destroy();
                                        K.trigger("embedded");
                                        return
                                    }
                                }
                                var p = R.getAsDataURL(H, M);
                                if (!p) {
                                    throw new v.ImageError(v.ImageError.WRONG_FORMAT)
                                }
                                if (D.can("use_data_uri_of", p.length)) {
                                    t.innerHTML = '<img src="' + p + '" width="' + R.width + '" height="' + R.height + '" />';
                                    R.destroy();
                                    K.trigger("embedded")
                                } else {
                                    var s = new E;
                                    s.bind("TransportingComplete", function() {
                                            I = K.connectRuntime(this.result.ruid);
                                            K.bind("Embedded", function() {
                                                    A.extend(I.getShimContainer().style, {
                                                        top: "0px",
                                                        left: "0px",
                                                        width: R.width + "px",
                                                        height: R.height + "px"
                                                    });
                                                    I = null
                                                }
                                                , 999);
                                            I.exec.call(K, "ImageView", "display", this.result.uid, u, Q);
                                            R.destroy()
                                        }
                                    );
                                    s.transport(y.atob(p.substring(p.indexOf("base64,") + 7)), H, A.extend({}, N, {
                                        required_caps: {
                                            display_media: true
                                        },
                                        runtime_order: "flash,silverlight",
                                        container: t
                                    }))
                                }
                            }
                            var K = this, R, H, M, J, N = arguments[1] || {}, u = this.width, Q = this.height, I;
                            try {
                                if (!(t = F.get(t))) {
                                    throw new v.DOMException(v.DOMException.INVALID_NODE_TYPE_ERR)
                                }
                                if (!this.size) {
                                    throw new v.DOMException(v.DOMException.INVALID_STATE_ERR)
                                }
                                if (this.width > B.MAX_RESIZE_WIDTH || this.height > B.MAX_RESIZE_HEIGHT) {
                                    throw new v.ImageError(v.ImageError.MAX_RESOLUTION_ERR)
                                }
                                H = N.type || this.type || "image/jpeg";
                                M = N.quality || 90;
                                J = A.typeOf(N.crop) !== "undefined" ? N.crop : false;
                                if (N.width) {
                                    u = N.width;
                                    Q = N.height || u
                                } else {
                                    var P = F.getSize(t);
                                    if (P.w && P.h) {
                                        u = P.w;
                                        Q = P.h
                                    }
                                }
                                R = new B;
                                R.bind("Resize", function() {
                                        L.call(K)
                                    }
                                );
                                R.bind("Load", function() {
                                        R.downsize(u, Q, J, false)
                                    }
                                );
                                R.clone(this, false);
                                return R
                            } catch (O) {
                                this.trigger("error", O.code)
                            }
                        },
                        destroy: function() {
                            if (this.ruid) {
                                this.getRuntime().exec.call(this, "Image", "destroy");
                                this.disconnectRuntime()
                            }
                            this.unbindAll()
                        }
                    })
                }
                var m = ["progress", "load", "error", "resize", "embedded"];
                B.MAX_RESIZE_WIDTH = 6500;
                B.MAX_RESIZE_HEIGHT = 6500;
                B.prototype = z.instance;
                return B
            }
        );
        b("moxie/runtime/html5/Runtime", ["moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/runtime/Runtime", "moxie/core/utils/Env"], function(q, l, v, p) {
                function u(n) {
                    var s = this
                        , i = v.capTest
                        , e = v.capTrue;
                    var r = q.extend({
                        access_binary: i(window.FileReader || window.File && window.File.getAsDataURL),
                        access_image_binary: function() {
                            return s.can("access_binary") && !!m.Image
                        },
                        display_media: i(p.can("create_canvas") || p.can("use_data_uri_over32kb")),
                        do_cors: i(window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest),
                        drag_and_drop: i(function() {
                            var o = document.createElement("div");
                            return ("draggable" in o || "ondragstart" in o && "ondrop" in o) && (p.browser !== "IE" || p.version > 9)
                        }
                        ()),
                        filter_by_extension: i(function() {
                            return p.browser === "Chrome" && p.version >= 28 || p.browser === "IE" && p.version >= 10
                        }
                        ()),
                        return_response_headers: e,
                        return_response_type: function(o) {
                            if (o === "json" && !!window.JSON) {
                                return true
                            }
                            return p.can("return_response_type", o)
                        },
                        return_status_code: e,
                        report_upload_progress: i(window.XMLHttpRequest && (new XMLHttpRequest).upload),
                        resize_image: function() {
                            return s.can("access_binary") && p.can("create_canvas")
                        },
                        select_file: function() {
                            return p.can("use_fileinput") && window.File
                        },
                        select_folder: function() {
                            return s.can("select_file") && p.browser === "Chrome" && p.version >= 21
                        },
                        select_multiple: function() {
                            return s.can("select_file") && !(p.browser === "Safari" && p.os === "Windows") && !(p.os === "iOS" && p.verComp(p.osVersion, "7.0.4", "<"))
                        },
                        send_binary_string: i(window.XMLHttpRequest && ((new XMLHttpRequest).sendAsBinary || window.Uint8Array && window.ArrayBuffer)),
                        send_custom_headers: i(window.XMLHttpRequest),
                        send_multipart: function() {
                            return !!(window.XMLHttpRequest && (new XMLHttpRequest).upload && window.FormData) || s.can("send_binary_string")
                        },
                        slice_blob: i(window.File && (File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice)),
                        stream_upload: function() {
                            return s.can("slice_blob") && s.can("send_multipart")
                        },
                        summon_file_dialog: i(function() {
                            return p.browser === "Firefox" && p.version >= 4 || p.browser === "Opera" && p.version >= 12 || p.browser === "IE" && p.version >= 10 || !!~q.inArray(p.browser, ["Chrome", "Safari"])
                        }
                        ()),
                        upload_filesize: e
                    }, arguments[2]);
                    v.call(this, n, arguments[1] || k, r);
                    q.extend(this, {
                        init: function() {
                            this.trigger("Init")
                        },
                        destroy: function(o) {
                            return function() {
                                o.call(s);
                                o = s = null
                            }
                        }
                        (this.destroy)
                    });
                    q.extend(this.getShim(), m)
                }
                var k = "html5"
                    , m = {};
                v.addConstructor(k, u);
                return m
            }
        );
        b("moxie/runtime/html5/file/Blob", ["moxie/runtime/html5/Runtime", "moxie/file/Blob"], function(k, i) {
                function l() {
                    function m(s, p, u) {
                        var q;
                        if (window.File.prototype.slice) {
                            try {
                                s.slice();
                                return s.slice(p, u)
                            } catch (o) {
                                return s.slice(p, u - p)
                            }
                        } else {
                            if (q = window.File.prototype.webkitSlice || window.File.prototype.mozSlice) {
                                return q.call(s, p, u)
                            } else {
                                return null
                            }
                        }
                    }
                    this.slice = function() {
                        return new i(this.getRuntime().uid,m.apply(this, arguments))
                    }
                }
                return k.Blob = l
            }
        );
        b("moxie/core/utils/Events", ["moxie/core/utils/Basic"], function(v) {
                function q() {
                    this.returnValue = false
                }
                function m() {
                    this.cancelBubble = true
                }
                var l = {}
                    , x = "moxie_" + v.guid();
                var p = function(r, y, n, i) {
                        var t, e;
                        y = y.toLowerCase();
                        if (r.addEventListener) {
                            t = n;
                            r.addEventListener(y, t, false)
                        } else {
                            if (r.attachEvent) {
                                t = function() {
                                    var o = window.event;
                                    if (!o.target) {
                                        o.target = o.srcElement
                                    }
                                    o.preventDefault = q;
                                    o.stopPropagation = m;
                                    n(o)
                                }
                                ;
                                r.attachEvent("on" + y, t)
                            }
                        }
                        if (!r[x]) {
                            r[x] = v.guid()
                        }
                        if (!l.hasOwnProperty(r[x])) {
                            l[r[x]] = {}
                        }
                        e = l[r[x]];
                        if (!e.hasOwnProperty(y)) {
                            e[y] = []
                        }
                        e[y].push({
                            func: t,
                            orig: n,
                            key: i
                        })
                    }
                    ;
                var w = function(z, t, y) {
                        var B, n;
                        t = t.toLowerCase();
                        if (z[x] && l[z[x]] && l[z[x]][t]) {
                            B = l[z[x]][t]
                        } else {
                            return
                        }
                        for (var e = B.length - 1; e >= 0; e--) {
                            if (B[e].orig === y || B[e].key === y) {
                                if (z.removeEventListener) {
                                    z.removeEventListener(t, B[e].func, false)
                                } else {
                                    if (z.detachEvent) {
                                        z.detachEvent("on" + t, B[e].func)
                                    }
                                }
                                B[e].orig = null ;
                                B[e].func = null ;
                                B.splice(e, 1);
                                if (y !== n) {
                                    break
                                }
                            }
                        }
                        if (!B.length) {
                            delete l[z[x]][t]
                        }
                        if (v.isEmptyObj(l[z[x]])) {
                            delete l[z[x]];
                            try {
                                delete z[x]
                            } catch (A) {
                                z[x] = n
                            }
                        }
                    }
                    ;
                var k = function(n, e) {
                        if (!n || !n[x]) {
                            return
                        }
                        v.each(l[n[x]], function(o, i) {
                                w(n, i, e)
                            }
                        )
                    }
                    ;
                return {
                    addEvent: p,
                    removeEvent: w,
                    removeAllEvents: k
                }
            }
        );
        b("moxie/runtime/html5/file/FileInput", ["moxie/runtime/html5/Runtime", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/utils/Events", "moxie/core/utils/Mime", "moxie/core/utils/Env"], function(q, l, v, p, k, m) {
                function u() {
                    var i = [], n;
                    l.extend(this, {
                        init: function(A) {
                            var y = this, t = y.getRuntime(), r, x, s, e, w, z;
                            n = A;
                            i = [];
                            s = n.accept.mimes || k.extList2mimes(n.accept, t.can("filter_by_extension"));
                            x = t.getShimContainer();
                            x.innerHTML = '<input id="' + t.uid + '" type="file" style="font-size:999px;opacity:0;"' + (n.multiple && t.can("select_multiple") ? "multiple" : "") + (n.directory && t.can("select_folder") ? "webkitdirectory directory" : "") + (s ? ' accept="' + s.join(",") + '"' : "") + " />";
                            r = v.get(t.uid);
                            l.extend(r.style, {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%"
                            });
                            e = v.get(n.browse_button);
                            if (t.can("summon_file_dialog")) {
                                if (v.getStyle(e, "position") === "static") {
                                    e.style.position = "relative"
                                }
                                w = parseInt(v.getStyle(e, "z-index"), 10) || 1;
                                e.style.zIndex = w;
                                x.style.zIndex = w - 1;
                                p.addEvent(e, "click", function(C) {
                                        var B = v.get(t.uid);
                                        if (B && !B.disabled) {
                                            B.click()
                                        }
                                        C.preventDefault()
                                    }
                                    , y.uid)
                            }
                            z = t.can("summon_file_dialog") ? e : x;
                            p.addEvent(z, "mouseover", function() {
                                    y.trigger("mouseenter")
                                }
                                , y.uid);
                            p.addEvent(z, "mouseout", function() {
                                    y.trigger("mouseleave")
                                }
                                , y.uid);
                            p.addEvent(z, "mousedown", function() {
                                    y.trigger("mousedown")
                                }
                                , y.uid);
                            p.addEvent(v.get(n.container), "mouseup", function() {
                                    y.trigger("mouseup")
                                }
                                , y.uid);
                            r.onchange = function o() {
                                i = [];
                                if (n.directory) {
                                    l.each(this.files, function(C) {
                                            if (C.name !== ".") {
                                                i.push(C)
                                            }
                                        }
                                    )
                                } else {
                                    i = [].slice.call(this.files)
                                }
                                if (m.browser !== "IE" && m.browser !== "IEMobile") {
                                    this.value = ""
                                } else {
                                    var B = this.cloneNode(true);
                                    this.parentNode.replaceChild(B, this);
                                    B.onchange = o
                                }
                                y.trigger("change")
                            }
                            ;
                            y.trigger({
                                type: "ready",
                                async: true
                            });
                            x = null
                        },
                        getFiles: function() {
                            return i
                        },
                        disable: function(w) {
                            var o = this.getRuntime(), s;
                            if (s = v.get(o.uid)) {
                                s.disabled = !!w
                            }
                        },
                        destroy: function() {
                            var o = this.getRuntime()
                                , e = o.getShim()
                                , r = o.getShimContainer();
                            p.removeAllEvents(r, this.uid);
                            p.removeAllEvents(n && v.get(n.container), this.uid);
                            p.removeAllEvents(n && v.get(n.browse_button), this.uid);
                            if (r) {
                                r.innerHTML = ""
                            }
                            e.removeInstance(this.uid);
                            i = n = r = e = null
                        }
                    })
                }
                return q.FileInput = u
            }
        );
        b("moxie/runtime/html5/file/FileDrop", ["moxie/runtime/html5/Runtime", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/utils/Events", "moxie/core/utils/Mime"], function(p, l, q, o, k) {
                function m() {
                    function z(s) {
                        if (!s.dataTransfer || !s.dataTransfer.types) {
                            return false
                        }
                        var u = l.toArray(s.dataTransfer.types || []);
                        return l.inArray("Files", u) !== -1 || l.inArray("public.file-url", u) !== -1 || l.inArray("application/x-moz-file", u) !== -1
                    }
                    function y(u) {
                        var B = [];
                        for (var s = 0; s < u.length; s++) {
                            [].push.apply(B, u[s].extensions.split(/\s*,\s*/))
                        }
                        return l.inArray("*", B) === -1 ? B : []
                    }
                    function v(s) {
                        if (!A.length) {
                            return true
                        }
                        var u = k.getFileExtension(s.name);
                        return !u || l.inArray(u, A) !== -1
                    }
                    function r(u, s) {
                        var e = [];
                        l.each(u, function(B) {
                                var D = B.webkitGetAsEntry();
                                if (D) {
                                    if (D.isFile) {
                                        var C = B.getAsFile();
                                        if (v(C)) {
                                            w.push(C)
                                        }
                                    } else {
                                        e.push(D)
                                    }
                                }
                            }
                        );
                        if (e.length) {
                            x(e, s)
                        } else {
                            s()
                        }
                    }
                    function x(u, B) {
                        var s = [];
                        l.each(u, function(C) {
                                s.push(function(e) {
                                        t(C, e)
                                    }
                                )
                            }
                        );
                        l.inSeries(s, function() {
                                B()
                            }
                        )
                    }
                    function t(e, s) {
                        if (e.isFile) {
                            e.file(function(u) {
                                    if (v(u)) {
                                        w.push(u)
                                    }
                                    s()
                                }
                                , function() {
                                    s()
                                }
                            )
                        } else {
                            if (e.isDirectory) {
                                i(e, s)
                            } else {
                                s()
                            }
                        }
                    }
                    function i(C, u) {
                        function s(E) {
                            B.readEntries(function(e) {
                                    if (e.length) {
                                        [].push.apply(D, e);
                                        s(E)
                                    } else {
                                        E()
                                    }
                                }
                                , E)
                        }
                        var D = []
                            , B = C.createReader();
                        s(function() {
                                x(D, u)
                            }
                        )
                    }
                    var w = [], A = [], n;
                    l.extend(this, {
                        init: function(u) {
                            var e = this, s;
                            n = u;
                            A = y(n.accept);
                            s = n.container;
                            o.addEvent(s, "dragover", function(B) {
                                    if (!z(B)) {
                                        return
                                    }
                                    B.preventDefault();
                                    B.dataTransfer.dropEffect = "copy"
                                }
                                , e.uid);
                            o.addEvent(s, "drop", function(B) {
                                    if (!z(B)) {
                                        return
                                    }
                                    B.preventDefault();
                                    w = [];
                                    if (B.dataTransfer.items && B.dataTransfer.items[0].webkitGetAsEntry) {
                                        r(B.dataTransfer.items, function() {
                                                e.trigger("drop")
                                            }
                                        )
                                    } else {
                                        l.each(B.dataTransfer.files, function(C) {
                                                if (v(C)) {
                                                    w.push(C)
                                                }
                                            }
                                        );
                                        e.trigger("drop")
                                    }
                                }
                                , e.uid);
                            o.addEvent(s, "dragenter", function(B) {
                                    e.trigger("dragenter")
                                }
                                , e.uid);
                            o.addEvent(s, "dragleave", function(B) {
                                    e.trigger("dragleave")
                                }
                                , e.uid)
                        },
                        getFiles: function() {
                            return w
                        },
                        destroy: function() {
                            o.removeAllEvents(n && q.get(n.container), this.uid);
                            w = A = n = null
                        }
                    })
                }
                return p.FileDrop = m
            }
        );
        b("moxie/runtime/html5/file/FileReader", ["moxie/runtime/html5/Runtime", "moxie/core/utils/Encode", "moxie/core/utils/Basic"], function(l, i, m) {
                function k() {
                    function n(q) {
                        return i.atob(q.substring(q.indexOf("base64,") + 7))
                    }
                    var p, o = false;
                    m.extend(this, {
                        read: function(q, e) {
                            var r = this;
                            p = new window.FileReader;
                            p.addEventListener("progress", function(s) {
                                    r.trigger(s)
                                }
                            );
                            p.addEventListener("load", function(s) {
                                    r.trigger(s)
                                }
                            );
                            p.addEventListener("error", function(s) {
                                    r.trigger(s, p.error)
                                }
                            );
                            p.addEventListener("loadend", function() {
                                    p = null
                                }
                            );
                            if (m.typeOf(p[q]) === "function") {
                                o = false;
                                p[q](e.getSource())
                            } else {
                                if (q === "readAsBinaryString") {
                                    o = true;
                                    p.readAsDataURL(e.getSource())
                                }
                            }
                        },
                        getResult: function() {
                            return p && p.result ? o ? n(p.result) : p.result : null
                        },
                        abort: function() {
                            if (p) {
                                p.abort()
                            }
                        },
                        destroy: function() {
                            p = null
                        }
                    })
                }
                return l.FileReader = k
            }
        );
        b("moxie/runtime/html5/xhr/XMLHttpRequest", ["moxie/runtime/html5/Runtime", "moxie/core/utils/Basic", "moxie/core/utils/Mime", "moxie/core/utils/Url", "moxie/file/File", "moxie/file/Blob", "moxie/xhr/FormData", "moxie/core/Exceptions", "moxie/core/utils/Env"], function(v, y, m, k, p, z, l, x, w) {
                function q() {
                    function u(A, D) {
                        var B = this, e, C;
                        e = D.getBlob().getSource();
                        C = new window.FileReader;
                        C.onload = function() {
                            D.append(D.getBlobName(), new z(null ,{
                                type: e.type,
                                data: C.result
                            }));
                            r.send.call(B, A, D)
                        }
                        ;
                        C.readAsBinaryString(e)
                    }
                    function n() {
                        if (window.XMLHttpRequest && !(w.browser === "IE" && w.version < 8)) {
                            return new window.XMLHttpRequest
                        } else {
                            return function() {
                                var B = ["Msxml2.XMLHTTP.6.0", "Microsoft.XMLHTTP"];
                                for (var A = 0; A < B.length; A++) {
                                    try {
                                        return new ActiveXObject(B[A])
                                    } catch (C) {}
                                }
                            }
                            ()
                        }
                    }
                    function s(B) {
                        var A = B.responseXML;
                        var C = B.responseText;
                        if (w.browser === "IE" && C && A && !A.documentElement && /[^\/]+\/[^\+]+\+xml/.test(B.getResponseHeader("Content-Type"))) {
                            A = new window.ActiveXObject("Microsoft.XMLDOM");
                            A.async = false;
                            A.validateOnParse = false;
                            A.loadXML(C)
                        }
                        if (A) {
                            if (w.browser === "IE" && A.parseError !== 0 || !A.documentElement || A.documentElement.tagName === "parsererror") {
                                return null
                            }
                        }
                        return A
                    }
                    function t(D) {
                        var B = "----moxieboundary" + (new Date).getTime()
                            , F = "--"
                            , C = "\r\n"
                            , A = ""
                            , E = this.getRuntime();
                        if (!E.can("send_binary_string")) {
                            throw new x.RuntimeError(x.RuntimeError.NOT_SUPPORTED_ERR)
                        }
                        o.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + B);
                        D.each(function(G, H) {
                                if (G instanceof z) {
                                    A += F + B + C + 'Content-Disposition: form-data; name="' + H + '"; filename="' + unescape(encodeURIComponent(G.name || "blob")) + '"' + C + "Content-Type: " + (G.type || "application/octet-stream") + C + C + G.getSource() + C
                                } else {
                                    A += F + B + C + 'Content-Disposition: form-data; name="' + H + '"' + C + C + unescape(encodeURIComponent(G)) + C
                                }
                            }
                        );
                        A += F + B + F + C;
                        return A
                    }
                    var r = this, o, i;
                    y.extend(this, {
                        send: function(F, G) {
                            var D = this
                                , C = w.browser === "Mozilla" && w.version >= 4 && w.version < 7
                                , E = w.browser === "Android Browser"
                                , B = false;
                            i = F.url.replace(/^.+?\/([\w\-\.]+)$/, "$1").toLowerCase();
                            o = n();
                            o.open(F.method, F.url, F.async, F.user, F.password);
                            if (G instanceof z) {
                                if (G.isDetached()) {
                                    B = true
                                }
                                G = G.getSource()
                            } else {
                                if (G instanceof l) {
                                    if (G.hasBlob()) {
                                        if (G.getBlob().isDetached()) {
                                            G = t.call(D, G);
                                            B = true
                                        } else {
                                            if ((C || E) && y.typeOf(G.getBlob().getSource()) === "blob" && window.FileReader) {
                                                u.call(D, F, G);
                                                return
                                            }
                                        }
                                    }
                                    if (G instanceof l) {
                                        var A = new window.FormData;
                                        G.each(function(I, H) {
                                                if (I instanceof z) {
                                                    A.append(H, I.getSource())
                                                } else {
                                                    A.append(H, I)
                                                }
                                            }
                                        );
                                        G = A
                                    }
                                }
                            }
                            if (o.upload) {
                                if (F.withCredentials) {
                                    o.withCredentials = true
                                }
                                o.addEventListener("load", function(H) {
                                        D.trigger(H)
                                    }
                                );
                                o.addEventListener("error", function(H) {
                                        D.trigger(H)
                                    }
                                );
                                o.addEventListener("progress", function(H) {
                                        D.trigger(H)
                                    }
                                );
                                o.upload.addEventListener("progress", function(H) {
                                        D.trigger({
                                            type: "UploadProgress",
                                            loaded: H.loaded,
                                            total: H.total
                                        })
                                    }
                                )
                            } else {
                                o.onreadystatechange = function() {
                                    switch (o.readyState) {
                                        case 1:
                                            break;
                                        case 2:
                                            break;
                                        case 3:
                                            var I, e;
                                            try {
                                                if (k.hasSameOrigin(F.url)) {
                                                    I = o.getResponseHeader("Content-Length") || 0
                                                }
                                                if (o.responseText) {
                                                    e = o.responseText.length
                                                }
                                            } catch (H) {
                                                I = e = 0
                                            }
                                            D.trigger({
                                                type: "progress",
                                                lengthComputable: !!I,
                                                total: parseInt(I, 10),
                                                loaded: e
                                            });
                                            break;
                                        case 4:
                                            o.onreadystatechange = function() {}
                                            ;
                                            if (o.status === 0) {
                                                D.trigger("error")
                                            } else {
                                                D.trigger("load")
                                            }
                                            break
                                    }
                                }
                            }
                            if (!y.isEmptyObj(F.headers)) {
                                y.each(F.headers, function(I, H) {
                                        o.setRequestHeader(H, I)
                                    }
                                )
                            }
                            if ("" !== F.responseType && "responseType" in o) {
                                if ("json" === F.responseType && !w.can("return_response_type", "json")) {
                                    o.responseType = "text"
                                } else {
                                    o.responseType = F.responseType
                                }
                            }
                            if (!B) {
                                o.send(G)
                            } else {
                                if (o.sendAsBinary) {
                                    o.sendAsBinary(G)
                                } else {
                                    (function() {
                                            var I = new Uint8Array(G.length);
                                            for (var H = 0; H < G.length; H++) {
                                                I[H] = G.charCodeAt(H) & 255
                                            }
                                            o.send(I.buffer)
                                        }
                                    )()
                                }
                            }
                            D.trigger("loadstart")
                        },
                        getStatus: function() {
                            try {
                                if (o) {
                                    return o.status
                                }
                            } catch (A) {}
                            return 0
                        },
                        getResponse: function(E) {
                            var B = this.getRuntime();
                            try {
                                switch (E) {
                                    case "blob":
                                        var D = new p(B.uid,o.response);
                                        var C = o.getResponseHeader("Content-Disposition");
                                        if (C) {
                                            var F = C.match(/filename=([\'\"'])([^\1]+)\1/);
                                            if (F) {
                                                i = F[2]
                                            }
                                        }
                                        D.name = i;
                                        if (!D.type) {
                                            D.type = m.getFileMime(i)
                                        }
                                        return D;
                                    case "json":
                                        if (!w.can("return_response_type", "json")) {
                                            return o.status === 200 && !!window.JSON ? JSON.parse(o.responseText) : null
                                        }
                                        return o.response;
                                    case "document":
                                        return s(o);
                                    default:
                                        return o.responseText !== "" ? o.responseText : null
                                }
                            } catch (A) {
                                return null
                            }
                        },
                        getAllResponseHeaders: function() {
                            try {
                                return o.getAllResponseHeaders()
                            } catch (A) {}
                            return ""
                        },
                        abort: function() {
                            if (o) {
                                o.abort()
                            }
                        },
                        destroy: function() {
                            r = i = null
                        }
                    })
                }
                return v.XMLHttpRequest = q
            }
        );
        b("moxie/runtime/html5/utils/BinaryReader", [], function() {
                return function() {
                    function m(n, u) {
                        var e = o ? 0 : -8 * (u - 1), q = 0, v;
                        for (v = 0; v < u; v++) {
                            q |= p.charCodeAt(n + v) << Math.abs(e + v * 8)
                        }
                        return q
                    }
                    function k(q, i, n) {
                        n = arguments.length === 3 ? n : p.length - i - 1;
                        p = p.substr(0, i) + q + p.substr(n + i)
                    }
                    function l(i, x, v) {
                        var q = "", w = o ? 0 : -8 * (v - 1), e;
                        for (e = 0; e < v; e++) {
                            q += String.fromCharCode(x >> Math.abs(w + e * 8) & 255)
                        }
                        k(q, i, v)
                    }
                    var o = false, p;
                    return {
                        II: function(e) {
                            if (e === c) {
                                return o
                            } else {
                                o = e
                            }
                        },
                        init: function(e) {
                            o = false;
                            p = e
                        },
                        SEGMENT: function(q, i, n) {
                            switch (arguments.length) {
                                case 1:
                                    return p.substr(q, p.length - q - 1);
                                case 2:
                                    return p.substr(q, i);
                                case 3:
                                    k(n, q, i);
                                    break;
                                default:
                                    return p
                            }
                        },
                        BYTE: function(i) {
                            return m(i, 1)
                        },
                        SHORT: function(i) {
                            return m(i, 2)
                        },
                        LONG: function(i, q) {
                            if (q === c) {
                                return m(i, 4)
                            } else {
                                l(i, q, 4)
                            }
                        },
                        SLONG: function(n) {
                            var i = m(n, 4);
                            return i > 2147483647 ? i - 4294967296 : i
                        },
                        STRING: function(q, i) {
                            var r = "";
                            for (i += q; q < i; q++) {
                                r += String.fromCharCode(m(q, 1))
                            }
                            return r
                        }
                    }
                }
            }
        );
        b("moxie/runtime/html5/image/JPEGHeaders", ["moxie/runtime/html5/utils/BinaryReader"], function(k) {
                return function i(t) {
                    var p = [], l, m, q, e = 0;
                    l = new k;
                    l.init(t);
                    if (l.SHORT(0) !== 65496) {
                        return
                    }
                    m = 2;
                    while (m <= t.length) {
                        q = l.SHORT(m);
                        if (q >= 65488 && q <= 65495) {
                            m += 2;
                            continue
                        }
                        if (q === 65498 || q === 65497) {
                            break
                        }
                        e = l.SHORT(m + 2) + 2;
                        if (q >= 65505 && q <= 65519) {
                            p.push({
                                hex: q,
                                name: "APP" + (q & 15),
                                start: m,
                                length: e,
                                segment: l.SEGMENT(m, e)
                            })
                        }
                        m += e
                    }
                    l.init(null );
                    return {
                        headers: p,
                        restore: function(r) {
                            var o, s;
                            l.init(r);
                            m = l.SHORT(2) == 65504 ? 4 + l.SHORT(4) : 2;
                            for (s = 0,
                                     o = p.length; s < o; s++) {
                                if (p[s].name == "APP2" && p[s].segment.indexOf("ProPhoto RGB") > 0) {
                                    continue
                                } else {
                                    l.SEGMENT(m, 0, p[s].segment);
                                    m += p[s].length
                                }
                            }
                            r = l.SEGMENT();
                            l.init(null );
                            return r
                        },
                        strip: function(v) {
                            var w, u, o;
                            u = new i(v);
                            w = u.headers;
                            u.purge();
                            l.init(v);
                            o = w.length;
                            while (o--) {
                                l.SEGMENT(w[o].start, w[o].length, "")
                            }
                            v = l.SEGMENT();
                            l.init(null );
                            return v
                        },
                        get: function(s) {
                            var r = [];
                            for (var u = 0, o = p.length; u < o; u++) {
                                if (p[u].name === s.toUpperCase()) {
                                    r.push(p[u].segment)
                                }
                            }
                            return r
                        },
                        set: function(w, u) {
                            var y = [], r, v, x;
                            if (typeof u === "string") {
                                y.push(u)
                            } else {
                                y = u
                            }
                            for (r = v = 0,
                                     x = p.length; r < x; r++) {
                                if (p[r].name === w.toUpperCase()) {
                                    p[r].segment = y[v];
                                    p[r].length = y[v].length;
                                    v++
                                }
                                if (v >= y.length) {
                                    break
                                }
                            }
                        },
                        purge: function() {
                            p = [];
                            l.init(null );
                            l = null
                        }
                    }
                }
            }
        );
        b("moxie/runtime/html5/image/ExifParser", ["moxie/core/utils/Basic", "moxie/runtime/html5/utils/BinaryReader"], function(i, k) {
                return function() {
                    function r(D, y) {
                        var u = p.SHORT(D), H, x, C, A, F, B, w, E, G = [], z = {};
                        for (H = 0; H < u; H++) {
                            w = B = D + 12 * H + 2;
                            C = y[p.SHORT(w)];
                            if (C === c) {
                                continue
                            }
                            A = p.SHORT(w += 2);
                            F = p.LONG(w += 2);
                            w += 4;
                            G = [];
                            switch (A) {
                                case 1:
                                case 7:
                                    if (F > 4) {
                                        w = p.LONG(w) + n.tiffHeader
                                    }
                                    for (x = 0; x < F; x++) {
                                        G[x] = p.BYTE(w + x)
                                    }
                                    break;
                                case 2:
                                    if (F > 4) {
                                        w = p.LONG(w) + n.tiffHeader
                                    }
                                    z[C] = p.STRING(w, F - 1);
                                    continue;
                                case 3:
                                    if (F > 2) {
                                        w = p.LONG(w) + n.tiffHeader
                                    }
                                    for (x = 0; x < F; x++) {
                                        G[x] = p.SHORT(w + x * 2)
                                    }
                                    break;
                                case 4:
                                    if (F > 1) {
                                        w = p.LONG(w) + n.tiffHeader
                                    }
                                    for (x = 0; x < F; x++) {
                                        G[x] = p.LONG(w + x * 4)
                                    }
                                    break;
                                case 5:
                                    w = p.LONG(w) + n.tiffHeader;
                                    for (x = 0; x < F; x++) {
                                        G[x] = p.LONG(w + x * 4) / p.LONG(w + x * 4 + 4)
                                    }
                                    break;
                                case 9:
                                    w = p.LONG(w) + n.tiffHeader;
                                    for (x = 0; x < F; x++) {
                                        G[x] = p.SLONG(w + x * 4)
                                    }
                                    break;
                                case 10:
                                    w = p.LONG(w) + n.tiffHeader;
                                    for (x = 0; x < F; x++) {
                                        G[x] = p.SLONG(w + x * 4) / p.SLONG(w + x * 4 + 4)
                                    }
                                    break;
                                default:
                                    continue
                            }
                            E = F == 1 ? G[0] : G;
                            if (e.hasOwnProperty(C) && typeof E != "object") {
                                z[C] = e[C][E]
                            } else {
                                z[C] = E
                            }
                        }
                        return z
                    }
                    function m() {
                        var l = n.tiffHeader;
                        p.II(p.SHORT(l) == 18761);
                        if (p.SHORT(l += 2) !== 42) {
                            return false
                        }
                        n.IFD0 = n.tiffHeader + p.LONG(l += 2);
                        t = r(n.IFD0, q.tiff);
                        if ("ExifIFDPointer" in t) {
                            n.exifIFD = n.tiffHeader + t.ExifIFDPointer;
                            delete t.ExifIFDPointer
                        }
                        if ("GPSInfoIFDPointer" in t) {
                            n.gpsIFD = n.tiffHeader + t.GPSInfoIFDPointer;
                            delete t.GPSInfoIFDPointer
                        }
                        return true
                    }
                    function v(A, D, w) {
                        var s, u, C, z = 0;
                        if (typeof D === "string") {
                            var x = q[A.toLowerCase()];
                            for (var B in x) {
                                if (x[B] === D) {
                                    D = B;
                                    break
                                }
                            }
                        }
                        s = n[A.toLowerCase() + "IFD"];
                        u = p.SHORT(s);
                        for (var y = 0; y < u; y++) {
                            C = s + 12 * y + 2;
                            if (p.SHORT(C) == D) {
                                z = C + 8;
                                break
                            }
                        }
                        if (!z) {
                            return false
                        }
                        p.LONG(z, w);
                        return true
                    }
                    var p, q, t, n = {}, e;
                    p = new k;
                    q = {
                        tiff: {
                            274: "Orientation",
                            270: "ImageDescription",
                            271: "Make",
                            272: "Model",
                            305: "Software",
                            34665: "ExifIFDPointer",
                            34853: "GPSInfoIFDPointer"
                        },
                        exif: {
                            36864: "ExifVersion",
                            40961: "ColorSpace",
                            40962: "PixelXDimension",
                            40963: "PixelYDimension",
                            36867: "DateTimeOriginal",
                            33434: "ExposureTime",
                            33437: "FNumber",
                            34855: "ISOSpeedRatings",
                            37377: "ShutterSpeedValue",
                            37378: "ApertureValue",
                            37383: "MeteringMode",
                            37384: "LightSource",
                            37385: "Flash",
                            37386: "FocalLength",
                            41986: "ExposureMode",
                            41987: "WhiteBalance",
                            41990: "SceneCaptureType",
                            41988: "DigitalZoomRatio",
                            41992: "Contrast",
                            41993: "Saturation",
                            41994: "Sharpness"
                        },
                        gps: {
                            0: "GPSVersionID",
                            1: "GPSLatitudeRef",
                            2: "GPSLatitude",
                            3: "GPSLongitudeRef",
                            4: "GPSLongitude"
                        }
                    };
                    e = {
                        ColorSpace: {
                            1: "sRGB",
                            0: "Uncalibrated"
                        },
                        MeteringMode: {
                            0: "Unknown",
                            1: "Average",
                            2: "CenterWeightedAverage",
                            3: "Spot",
                            4: "MultiSpot",
                            5: "Pattern",
                            6: "Partial",
                            255: "Other"
                        },
                        LightSource: {
                            1: "Daylight",
                            2: "Fliorescent",
                            3: "Tungsten",
                            4: "Flash",
                            9: "Fine weather",
                            10: "Cloudy weather",
                            11: "Shade",
                            12: "Daylight fluorescent (D 5700 - 7100K)",
                            13: "Day white fluorescent (N 4600 -5400K)",
                            14: "Cool white fluorescent (W 3900 - 4500K)",
                            15: "White fluorescent (WW 3200 - 3700K)",
                            17: "Standard light A",
                            18: "Standard light B",
                            19: "Standard light C",
                            20: "D55",
                            21: "D65",
                            22: "D75",
                            23: "D50",
                            24: "ISO studio tungsten",
                            255: "Other"
                        },
                        Flash: {
                            0: "Flash did not fire.",
                            1: "Flash fired.",
                            5: "Strobe return light not detected.",
                            7: "Strobe return light detected.",
                            9: "Flash fired, compulsory flash mode",
                            13: "Flash fired, compulsory flash mode, return light not detected",
                            15: "Flash fired, compulsory flash mode, return light detected",
                            16: "Flash did not fire, compulsory flash mode",
                            24: "Flash did not fire, auto mode",
                            25: "Flash fired, auto mode",
                            29: "Flash fired, auto mode, return light not detected",
                            31: "Flash fired, auto mode, return light detected",
                            32: "No flash function",
                            65: "Flash fired, red-eye reduction mode",
                            69: "Flash fired, red-eye reduction mode, return light not detected",
                            71: "Flash fired, red-eye reduction mode, return light detected",
                            73: "Flash fired, compulsory flash mode, red-eye reduction mode",
                            77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
                            79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
                            89: "Flash fired, auto mode, red-eye reduction mode",
                            93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
                            95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
                        },
                        ExposureMode: {
                            0: "Auto exposure",
                            1: "Manual exposure",
                            2: "Auto bracket"
                        },
                        WhiteBalance: {
                            0: "Auto white balance",
                            1: "Manual white balance"
                        },
                        SceneCaptureType: {
                            0: "Standard",
                            1: "Landscape",
                            2: "Portrait",
                            3: "Night scene"
                        },
                        Contrast: {
                            0: "Normal",
                            1: "Soft",
                            2: "Hard"
                        },
                        Saturation: {
                            0: "Normal",
                            1: "Low saturation",
                            2: "High saturation"
                        },
                        Sharpness: {
                            0: "Normal",
                            1: "Soft",
                            2: "Hard"
                        },
                        GPSLatitudeRef: {
                            N: "North latitude",
                            S: "South latitude"
                        },
                        GPSLongitudeRef: {
                            E: "East longitude",
                            W: "West longitude"
                        }
                    };
                    return {
                        init: function(l) {
                            n = {
                                tiffHeader: 10
                            };
                            if (l === c || !l.length) {
                                return false
                            }
                            p.init(l);
                            if (p.SHORT(0) === 65505 && p.STRING(4, 5).toUpperCase() === "EXIF\0") {
                                return m()
                            }
                            return false
                        },
                        TIFF: function() {
                            return t
                        },
                        EXIF: function() {
                            var l;
                            l = r(n.exifIFD, q.exif);
                            if (l.ExifVersion && i.typeOf(l.ExifVersion) === "array") {
                                for (var s = 0, o = ""; s < l.ExifVersion.length; s++) {
                                    o += String.fromCharCode(l.ExifVersion[s])
                                }
                                l.ExifVersion = o
                            }
                            return l
                        },
                        GPS: function() {
                            var l;
                            l = r(n.gpsIFD, q.gps);
                            if (l.GPSVersionID && i.typeOf(l.GPSVersionID) === "array") {
                                l.GPSVersionID = l.GPSVersionID.join(".")
                            }
                            return l
                        },
                        setExif: function(o, l) {
                            if (o !== "PixelXDimension" && o !== "PixelYDimension") {
                                return false
                            }
                            return v("exif", o, l)
                        },
                        getBinary: function() {
                            return p.SEGMENT()
                        },
                        purge: function() {
                            p.init(null );
                            p = t = null ;
                            n = {}
                        }
                    }
                }
            }
        );
        b("moxie/runtime/html5/image/JPEG", ["moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/runtime/html5/image/JPEGHeaders", "moxie/runtime/html5/utils/BinaryReader", "moxie/runtime/html5/image/ExifParser"], function(p, l, q, o, k) {
                function m(y) {
                    function r() {
                        var u = 0, s, z;
                        while (u <= i.length) {
                            s = x.SHORT(u += 2);
                            if (s >= 65472 && s <= 65475) {
                                u += 5;
                                return {
                                    height: x.SHORT(u),
                                    width: x.SHORT(u += 2)
                                }
                            }
                            z = x.SHORT(u += 2);
                            u += z - 2
                        }
                        return null
                    }
                    function e() {
                        if (!t || !w || !x) {
                            return
                        }
                        t.purge();
                        w.purge();
                        x.init(null );
                        i = n = w = t = x = null
                    }
                    var i, x, w, t, n, v;
                    i = y;
                    x = new o;
                    x.init(i);
                    if (x.SHORT(0) !== 65496) {
                        throw new l.ImageError(l.ImageError.WRONG_FORMAT)
                    }
                    w = new q(y);
                    t = new k;
                    v = !!t.init(w.get("app1")[0]);
                    n = r.call(this);
                    p.extend(this, {
                        type: "image/jpeg",
                        size: i.length,
                        width: n && n.width || 0,
                        height: n && n.height || 0,
                        setExif: function(s, u) {
                            if (!v) {
                                return false
                            }
                            if (p.typeOf(s) === "object") {
                                p.each(s, function(A, z) {
                                        t.setExif(z, A)
                                    }
                                )
                            } else {
                                t.setExif(s, u)
                            }
                            w.set("app1", t.getBinary())
                        },
                        writeHeaders: function() {
                            if (!arguments.length) {
                                return i = w.restore(i)
                            }
                            return w.restore(arguments[0])
                        },
                        stripHeaders: function(s) {
                            return w.strip(s)
                        },
                        purge: function() {
                            e.call(this)
                        }
                    });
                    if (v) {
                        this.meta = {
                            tiff: t.TIFF(),
                            exif: t.EXIF(),
                            gps: t.GPS()
                        }
                    }
                }
                return m
            }
        );
        b("moxie/runtime/html5/image/PNG", ["moxie/core/Exceptions", "moxie/core/utils/Basic", "moxie/runtime/html5/utils/BinaryReader"], function(l, i, m) {
                function k(e) {
                    function t() {
                        var r, o;
                        r = v.call(this, 8);
                        if (r.type == "IHDR") {
                            o = r.start;
                            return {
                                width: y.LONG(o),
                                height: y.LONG(o += 4)
                            }
                        }
                        return null
                    }
                    function p() {
                        if (!y) {
                            return
                        }
                        y.init(null );
                        q = w = n = x = y = null
                    }
                    function v(z) {
                        var s, A, u, o;
                        s = y.LONG(z);
                        A = y.STRING(z += 4, 4);
                        u = z += 4;
                        o = y.LONG(z + s);
                        return {
                            length: s,
                            type: A,
                            start: u,
                            CRC: o
                        }
                    }
                    var q, y, n, x, w;
                    q = e;
                    y = new m;
                    y.init(q);
                    (function() {
                            var o = 0
                                , u = 0
                                , s = [35152, 20039, 3338, 6666];
                            for (u = 0; u < s.length; u++,
                                o += 2) {
                                if (s[u] != y.SHORT(o)) {
                                    throw new l.ImageError(l.ImageError.WRONG_FORMAT)
                                }
                            }
                        }
                    )();
                    w = t.call(this);
                    i.extend(this, {
                        type: "image/png",
                        size: q.length,
                        width: w.width,
                        height: w.height,
                        purge: function() {
                            p.call(this)
                        }
                    });
                    p.call(this)
                }
                return k
            }
        );
        b("moxie/runtime/html5/image/ImageInfo", ["moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/runtime/html5/image/JPEG", "moxie/runtime/html5/image/PNG"], function(l, i, m, k) {
                return function(e) {
                    var n = [m, k], p;
                    p = function() {
                        for (var o = 0; o < n.length; o++) {
                            try {
                                return new n[o](e)
                            } catch (q) {}
                        }
                        throw new i.ImageError(i.ImageError.WRONG_FORMAT)
                    }
                    ();
                    l.extend(this, {
                        type: "",
                        size: 0,
                        width: 0,
                        height: 0,
                        setExif: function() {},
                        writeHeaders: function(o) {
                            return o
                        },
                        stripHeaders: function(o) {
                            return o
                        },
                        purge: function() {}
                    });
                    l.extend(this, p);
                    this.purge = function() {
                        p.purge();
                        p = null
                    }
                }
            }
        );
        b("moxie/runtime/html5/image/MegaPixel", [], function() {
                function k(O, F, K) {
                    var D = O.naturalWidth
                        , H = O.naturalHeight;
                    var B = K.width
                        , T = K.height;
                    var N = K.x || 0
                        , J = K.y || 0;
                    var Q = F.getContext("2d");
                    if (i(O)) {
                        D /= 2;
                        H /= 2
                    }
                    var L = 1024;
                    var G = document.createElement("canvas");
                    G.width = G.height = L;
                    var P = G.getContext("2d");
                    var A = l(O, D, H);
                    var I = 0;
                    while (I < H) {
                        var M = I + L > H ? H - I : L;
                        var q = 0;
                        while (q < D) {
                            var R = q + L > D ? D - q : L;
                            P.clearRect(0, 0, L, L);
                            P.drawImage(O, -q, -I);
                            var z = q * B / D + N << 0;
                            var C = Math.ceil(R * B / D);
                            var n = I * T / H / A + J << 0;
                            var t = Math.ceil(M * T / H / A);
                            Q.drawImage(G, 0, 0, R, M, z, n, C, t);
                            q += L
                        }
                        I += L
                    }
                    G = P = null
                }
                function i(q) {
                    var o = q.naturalWidth
                        , s = q.naturalHeight;
                    if (o * s > 1024 * 1024) {
                        var p = document.createElement("canvas");
                        p.width = p.height = 1;
                        var m = p.getContext("2d");
                        m.drawImage(q, -o + 1, 0);
                        return m.getImageData(0, 0, 1, 1).data[3] === 0
                    } else {
                        return false
                    }
                }
                function l(y, B, q) {
                    var m = document.createElement("canvas");
                    m.width = 1;
                    m.height = q;
                    var w = m.getContext("2d");
                    w.drawImage(y, 0, 0);
                    var C = w.getImageData(0, 0, 1, q).data;
                    var p = 0;
                    var A = q;
                    var z = q;
                    while (z > p) {
                        var x = C[(z - 1) * 4 + 3];
                        if (x === 0) {
                            A = z
                        } else {
                            p = z
                        }
                        z = A + p >> 1
                    }
                    m = null ;
                    var v = z / q;
                    return v === 0 ? 1 : v
                }
                return {
                    isSubsampled: i,
                    renderTo: k
                }
            }
        );
        b("moxie/runtime/html5/image/Image", ["moxie/runtime/html5/Runtime", "moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/core/utils/Encode", "moxie/file/File", "moxie/runtime/html5/image/ImageInfo", "moxie/runtime/html5/image/MegaPixel", "moxie/core/utils/Mime", "moxie/core/utils/Env"], function(v, y, m, k, p, z, l, x, w) {
                function q() {
                    function n() {
                        if (!F && !A) {
                            throw new m.ImageError(m.DOMException.INVALID_STATE_ERR)
                        }
                        return F || A
                    }
                    function u(E) {
                        return k.atob(E.substring(E.indexOf("base64,") + 7))
                    }
                    function G(L, E) {
                        return "data:" + (E || "") + ";base64," + k.btoa(L)
                    }
                    function H(L) {
                        var E = this;
                        A = new Image;
                        A.onerror = function() {
                            C.call(this);
                            E.trigger("error", m.ImageError.WRONG_FORMAT)
                        }
                        ;
                        A.onload = function() {
                            E.trigger("load")
                        }
                        ;
                        A.src = /^data:[^;]*;base64,/.test(L) ? L : G(L, i.type)
                    }
                    function I(N, L) {
                        var M = this, E;
                        if (window.FileReader) {
                            E = new FileReader;
                            E.onload = function() {
                                L(this.result)
                            }
                            ;
                            E.onerror = function() {
                                M.trigger("error", m.ImageError.WRONG_FORMAT)
                            }
                            ;
                            E.readAsDataURL(N)
                        } else {
                            return L(N.getAsDataURL())
                        }
                    }
                    function K(T, N, E, P) {
                        var X = this, M, W, V = 0, S = 0, O, Q, L, R;
                        J = P;
                        R = this.meta && this.meta.tiff && this.meta.tiff.Orientation || 1;
                        if (y.inArray(R, [5, 6, 7, 8]) !== -1) {
                            var U = T;
                            T = N;
                            N = U
                        }
                        O = n();
                        if (!E) {
                            M = Math.min(T / O.width, N / O.height)
                        } else {
                            T = Math.min(T, O.width);
                            N = Math.min(N, O.height);
                            M = Math.max(T / O.width, N / O.height)
                        }
                        if (M > 1 && !E && P) {
                            this.trigger("Resize");
                            return
                        }
                        if (!F) {
                            F = document.createElement("canvas")
                        }
                        Q = Math.round(O.width * M);
                        L = Math.round(O.height * M);
                        if (E) {
                            F.width = T;
                            F.height = N;
                            if (Q > T) {
                                V = Math.round((Q - T) / 2)
                            }
                            if (L > N) {
                                S = Math.round((L - N) / 2)
                            }
                        } else {
                            F.width = Q;
                            F.height = L
                        }
                        if (!J) {
                            r(F.width, F.height, R)
                        }
                        s.call(this, O, F, -V, -S, Q, L);
                        this.width = F.width;
                        this.height = F.height;
                        D = true;
                        X.trigger("Resize")
                    }
                    function s(P, M, Q, O, L, N) {
                        if (w.OS === "iOS") {
                            l.renderTo(P, M, {
                                width: L,
                                height: N,
                                x: Q,
                                y: O
                            })
                        } else {
                            var E = M.getContext("2d");
                            E.drawImage(P, Q, O, L, N)
                        }
                    }
                    function r(M, E, N) {
                        switch (N) {
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                                F.width = E;
                                F.height = M;
                                break;
                            default:
                                F.width = M;
                                F.height = E
                        }
                        var L = F.getContext("2d");
                        switch (N) {
                            case 2:
                                L.translate(M, 0);
                                L.scale(-1, 1);
                                break;
                            case 3:
                                L.translate(M, E);
                                L.rotate(Math.PI);
                                break;
                            case 4:
                                L.translate(0, E);
                                L.scale(1, -1);
                                break;
                            case 5:
                                L.rotate(0.5 * Math.PI);
                                L.scale(1, -1);
                                break;
                            case 6:
                                L.rotate(0.5 * Math.PI);
                                L.translate(0, -E);
                                break;
                            case 7:
                                L.rotate(0.5 * Math.PI);
                                L.translate(M, -E);
                                L.scale(-1, 1);
                                break;
                            case 8:
                                L.rotate(-0.5 * Math.PI);
                                L.translate(-M, 0);
                                break
                        }
                    }
                    function C() {
                        if (o) {
                            o.purge();
                            o = null
                        }
                        t = A = F = i = null ;
                        D = false
                    }
                    var B = this, A, o, F, t, i, D = false, J = true;
                    y.extend(this, {
                        loadFromBlob: function(N) {
                            var L = this
                                , M = L.getRuntime()
                                , E = arguments.length > 1 ? arguments[1] : true;
                            if (!M.can("access_binary")) {
                                throw new m.RuntimeError(m.RuntimeError.NOT_SUPPORTED_ERR)
                            }
                            i = N;
                            if (N.isDetached()) {
                                t = N.getSource();
                                H.call(this, t);
                                return
                            } else {
                                I.call(this, N.getSource(), function(O) {
                                        if (E) {
                                            t = u(O)
                                        }
                                        H.call(L, O)
                                    }
                                )
                            }
                        },
                        loadFromImage: function(L, E) {
                            this.meta = L.meta;
                            i = new p(null ,{
                                name: L.name,
                                size: L.size,
                                type: L.type
                            });
                            H.call(this, E ? t = L.getAsBinaryString() : L.getAsDataURL())
                        },
                        getInfo: function() {
                            var L = this.getRuntime(), E;
                            if (!o && t && L.can("access_image_binary")) {
                                o = new z(t)
                            }
                            E = {
                                width: n().width || 0,
                                height: n().height || 0,
                                type: i.type || x.getFileMime(i.name),
                                size: t && t.length || i.size || 0,
                                name: i.name || "",
                                meta: o && o.meta || this.meta || {}
                            };
                            return E
                        },
                        downsize: function() {
                            K.apply(this, arguments)
                        },
                        getAsCanvas: function() {
                            if (F) {
                                F.id = this.uid + "_canvas"
                            }
                            return F
                        },
                        getAsBlob: function(e, E) {
                            if (e !== this.type) {
                                K.call(this, this.width, this.height, false)
                            }
                            return new p(null ,{
                                name: i.name || "",
                                type: e,
                                data: B.getAsBinaryString.call(this, e, E)
                            })
                        },
                        getAsDataURL: function(L) {
                            var E = arguments[1] || 90;
                            if (!D) {
                                return A.src
                            }
                            if ("image/jpeg" !== L) {
                                return F.toDataURL("image/png")
                            } else {
                                try {
                                    return F.toDataURL("image/jpeg", E / 100)
                                } catch (M) {
                                    return F.toDataURL("image/jpeg")
                                }
                            }
                        },
                        getAsBinaryString: function(E, M) {
                            if (!D) {
                                if (!t) {
                                    t = u(B.getAsDataURL(E, M))
                                }
                                return t
                            }
                            if ("image/jpeg" !== E) {
                                t = u(B.getAsDataURL(E, M))
                            } else {
                                var L;
                                if (!M) {
                                    M = 90
                                }
                                try {
                                    L = F.toDataURL("image/jpeg", M / 100)
                                } catch (e) {
                                    L = F.toDataURL("image/jpeg")
                                }
                                t = u(L);
                                if (o) {
                                    t = o.stripHeaders(t);
                                    if (J) {
                                        if (o.meta && o.meta.exif) {
                                            o.setExif({
                                                PixelXDimension: this.width,
                                                PixelYDimension: this.height
                                            })
                                        }
                                        t = o.writeHeaders(t)
                                    }
                                    o.purge();
                                    o = null
                                }
                            }
                            D = false;
                            return t
                        },
                        destroy: function() {
                            B = null ;
                            C.call(this);
                            this.getRuntime().getShim().removeInstance(this.uid)
                        }
                    })
                }
                return v.Image = q
            }
        );
        b("moxie/runtime/flash/Runtime", ["moxie/core/utils/Basic", "moxie/core/utils/Env", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/runtime/Runtime"], function(q, x, m, k, p) {
                function w() {
                    var o;
                    try {
                        o = navigator.plugins["Shockwave Flash"];
                        o = o.description
                    } catch (i) {
                        try {
                            o = (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")
                        } catch (r) {
                            o = "0.0"
                        }
                    }
                    o = o.match(/\d+/g);
                    return parseFloat(o[0] + "." + o[1])
                }
                function v(i) {
                    var n = this, e;
                    i = q.extend({
                        swf_url: x.swf_url
                    }, i);
                    p.call(this, i, y, {
                        access_binary: function(o) {
                            return o && n.mode === "browser"
                        },
                        access_image_binary: function(o) {
                            return o && n.mode === "browser"
                        },
                        display_media: p.capTrue,
                        do_cors: p.capTrue,
                        drag_and_drop: false,
                        report_upload_progress: function() {
                            return n.mode === "client"
                        },
                        resize_image: p.capTrue,
                        return_response_headers: false,
                        return_response_type: function(o) {
                            if (o === "json" && !!window.JSON) {
                                return true
                            }
                            return !q.arrayDiff(o, ["", "text", "document"]) || n.mode === "browser"
                        },
                        return_status_code: function(o) {
                            return n.mode === "browser" || !q.arrayDiff(o, [200, 404])
                        },
                        select_file: p.capTrue,
                        select_multiple: p.capTrue,
                        send_binary_string: function(o) {
                            return o && n.mode === "browser"
                        },
                        send_browser_cookies: function(o) {
                            return o && n.mode === "browser"
                        },
                        send_custom_headers: function(o) {
                            return o && n.mode === "browser"
                        },
                        send_multipart: p.capTrue,
                        slice_blob: function(o) {
                            return o && n.mode === "browser"
                        },
                        stream_upload: function(o) {
                            return o && n.mode === "browser"
                        },
                        summon_file_dialog: false,
                        upload_filesize: function(o) {
                            return q.parseSizeStr(o) <= 2097152 || n.mode === "client"
                        },
                        use_http_method: function(o) {
                            return !q.arrayDiff(o, ["GET", "POST"])
                        }
                    }, {
                        access_binary: function(o) {
                            return o ? "browser" : "client"
                        },
                        access_image_binary: function(o) {
                            return o ? "browser" : "client"
                        },
                        report_upload_progress: function(o) {
                            return o ? "browser" : "client"
                        },
                        return_response_type: function(o) {
                            return q.arrayDiff(o, ["", "text", "json", "document"]) ? "browser" : ["client", "browser"]
                        },
                        return_status_code: function(o) {
                            return q.arrayDiff(o, [200, 404]) ? "browser" : ["client", "browser"]
                        },
                        send_binary_string: function(o) {
                            return o ? "browser" : "client"
                        },
                        send_browser_cookies: function(o) {
                            return o ? "browser" : "client"
                        },
                        send_custom_headers: function(o) {
                            return o ? "browser" : "client"
                        },
                        stream_upload: function(o) {
                            return o ? "client" : "browser"
                        },
                        upload_filesize: function(o) {
                            return q.parseSizeStr(o) >= 2097152 ? "client" : "browser"
                        }
                    }, "client");
                    if (w() < 10) {
                        this.mode = false
                    }
                    q.extend(this, {
                        getShim: function() {
                            return m.get(this.uid)
                        },
                        shimExec: function(r, o) {
                            var s = [].slice.call(arguments, 2);
                            return n.getShim().exec(this.uid, r, o, s)
                        },
                        init: function() {
                            var t, o, r;
                            r = this.getShimContainer();
                            q.extend(r.style, {
                                position: "absolute",
                                top: "-8px",
                                left: "-8px",
                                width: "9px",
                                height: "9px",
                                overflow: "hidden"
                            });
                            t = '<object id="' + this.uid + '" type="application/x-shockwave-flash" data="' + i.swf_url + '" ';
                            if (x.browser === "IE") {
                                t += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '
                            }
                            t += 'width="100%" height="100%" style="outline:0"><param name="movie" value="' + i.swf_url + '" /><param name="flashvars" value="uid=' + escape(this.uid) + "&target=" + x.global_event_dispatcher + '" /><param name="wmode" value="transparent" /><param name="allowscriptaccess" value="always" /></object>';
                            if (x.browser === "IE") {
                                o = document.createElement("div");
                                r.appendChild(o);
                                o.outerHTML = t;
                                o = r = null
                            } else {
                                r.innerHTML = t
                            }
                            e = setTimeout(function() {
                                    if (n && !n.initialized) {
                                        n.trigger("Error", new k.RuntimeError(k.RuntimeError.NOT_INIT_ERR))
                                    }
                                }
                                , 5000)
                        },
                        destroy: function(o) {
                            return function() {
                                o.call(n);
                                clearTimeout(e);
                                i = e = o = n = null
                            }
                        }
                        (this.destroy)
                    }, l)
                }
                var y = "flash"
                    , l = {};
                p.addConstructor(y, v);
                return l
            }
        );
        b("moxie/runtime/flash/file/Blob", ["moxie/runtime/flash/Runtime", "moxie/file/Blob"], function(k, i) {
                var l = {
                    slice: function(q, t, p, m) {
                        var o = this.getRuntime();
                        if (t < 0) {
                            t = Math.max(q.size + t, 0)
                        } else {
                            if (t > 0) {
                                t = Math.min(t, q.size)
                            }
                        }
                        if (p < 0) {
                            p = Math.max(q.size + p, 0)
                        } else {
                            if (p > 0) {
                                p = Math.min(p, q.size)
                            }
                        }
                        q = o.shimExec.call(this, "Blob", "slice", t, p, m || "");
                        if (q) {
                            q = new i(o.uid,q)
                        }
                        return q
                    }
                };
                return k.Blob = l
            }
        );
        b("moxie/runtime/flash/file/FileInput", ["moxie/runtime/flash/Runtime"], function(k) {
                var i = {
                    init: function(l) {
                        this.getRuntime().shimExec.call(this, "FileInput", "init", {
                            name: l.name,
                            accept: l.accept,
                            multiple: l.multiple
                        });
                        this.trigger("ready")
                    }
                };
                return k.FileInput = i
            }
        );
        b("moxie/runtime/flash/file/FileReader", ["moxie/runtime/flash/Runtime", "moxie/core/utils/Encode"], function(o, l) {
                function m(i, q) {
                    switch (q) {
                        case "readAsText":
                            return l.atob(i, "utf8");
                        case "readAsBinaryString":
                            return l.atob(i);
                        case "readAsDataURL":
                            return i
                    }
                    return null
                }
                var p = "";
                var k = {
                    read: function(u, q) {
                        var n = this
                            , r = n.getRuntime();
                        if (u === "readAsDataURL") {
                            p = "data:" + (q.type || "") + ";base64,"
                        }
                        n.bind("Progress", function(s, e) {
                                if (e) {
                                    p += m(e, u)
                                }
                            }
                        );
                        return r.shimExec.call(this, "FileReader", "readAsBase64", q.uid)
                    },
                    getResult: function() {
                        return p
                    },
                    destroy: function() {
                        p = null
                    }
                };
                return o.FileReader = k
            }
        );
        b("moxie/runtime/flash/file/FileReaderSync", ["moxie/runtime/flash/Runtime", "moxie/core/utils/Encode"], function(l, i) {
                function m(o, p) {
                    switch (p) {
                        case "readAsText":
                            return i.atob(o, "utf8");
                        case "readAsBinaryString":
                            return i.atob(o);
                        case "readAsDataURL":
                            return o
                    }
                    return null
                }
                var k = {
                    read: function(q, o) {
                        var p, n = this.getRuntime();
                        p = n.shimExec.call(this, "FileReaderSync", "readAsBase64", o.uid);
                        if (!p) {
                            return null
                        }
                        if (q === "readAsDataURL") {
                            p = "data:" + (o.type || "") + ";base64," + p
                        }
                        return m(p, q, o.type)
                    }
                };
                return l.FileReaderSync = k
            }
        );
        b("moxie/runtime/flash/xhr/XMLHttpRequest", ["moxie/runtime/flash/Runtime", "moxie/core/utils/Basic", "moxie/file/Blob", "moxie/file/File", "moxie/file/FileReaderSync", "moxie/xhr/FormData", "moxie/runtime/Transporter"], function(v, m, x, q, l, p, w) {
                var k = {
                    send: function(z, n) {
                        function B() {
                            z.transport = C.mode;
                            C.shimExec.call(s, "XMLHttpRequest", "send", z, n)
                        }
                        function y(r, i) {
                            C.shimExec.call(s, "XMLHttpRequest", "appendBlob", r, i.uid);
                            n = null ;
                            B()
                        }
                        function o(r, i) {
                            var u = new w;
                            u.bind("TransportingComplete", function() {
                                    i(this.result)
                                }
                            );
                            u.transport(r.getSource(), r.type, {
                                ruid: C.uid
                            })
                        }
                        var s = this
                            , C = s.getRuntime();
                        if (!m.isEmptyObj(z.headers)) {
                            m.each(z.headers, function(r, i) {
                                    C.shimExec.call(s, "XMLHttpRequest", "setRequestHeader", i, r.toString())
                                }
                            )
                        }
                        if (n instanceof p) {
                            var A;
                            n.each(function(r, i) {
                                    if (r instanceof x) {
                                        A = i
                                    } else {
                                        C.shimExec.call(s, "XMLHttpRequest", "append", i, r)
                                    }
                                }
                            );
                            if (!n.hasBlob()) {
                                n = null ;
                                B()
                            } else {
                                var t = n.getBlob();
                                if (t.isDetached()) {
                                    o(t, function(i) {
                                            t.destroy();
                                            y(A, i)
                                        }
                                    )
                                } else {
                                    y(A, t)
                                }
                            }
                        } else {
                            if (n instanceof x) {
                                if (n.isDetached()) {
                                    o(n, function(i) {
                                            n.destroy();
                                            n = i.uid;
                                            B()
                                        }
                                    )
                                } else {
                                    n = n.uid;
                                    B()
                                }
                            } else {
                                B()
                            }
                        }
                    },
                    getResponse: function(r) {
                        var u, i, t = this.getRuntime();
                        i = t.shimExec.call(this, "XMLHttpRequest", "getResponseAsBlob");
                        if (i) {
                            i = new q(t.uid,i);
                            if ("blob" === r) {
                                return i
                            }
                            try {
                                u = new l;
                                if (!!~m.inArray(r, ["", "text"])) {
                                    return u.readAsText(i)
                                } else {
                                    if ("json" === r && !!window.JSON) {
                                        return JSON.parse(u.readAsText(i))
                                    }
                                }
                            } finally {
                                i.destroy()
                            }
                        }
                        return null
                    },
                    abort: function(n) {
                        var i = this.getRuntime();
                        i.shimExec.call(this, "XMLHttpRequest", "abort");
                        this.dispatchEvent("readystatechange");
                        this.dispatchEvent("abort")
                    }
                };
                return v.XMLHttpRequest = k
            }
        );
        b("moxie/runtime/flash/runtime/Transporter", ["moxie/runtime/flash/Runtime", "moxie/file/Blob"], function(k, i) {
                var l = {
                    getAsBlob: function(o) {
                        var p = this.getRuntime()
                            , m = p.shimExec.call(this, "Transporter", "getAsBlob", o);
                        if (m) {
                            return new i(p.uid,m)
                        }
                        return null
                    }
                };
                return k.Transporter = l
            }
        );
        b("moxie/runtime/flash/image/Image", ["moxie/runtime/flash/Runtime", "moxie/core/utils/Basic", "moxie/runtime/Transporter", "moxie/file/Blob", "moxie/file/FileReaderSync"], function(p, l, q, o, k) {
                var m = {
                    loadFromBlob: function(x) {
                        function u(i) {
                            w.shimExec.call(n, "Image", "loadFromBlob", i.uid);
                            n = w = null
                        }
                        var n = this
                            , w = n.getRuntime();
                        if (x.isDetached()) {
                            var v = new q;
                            v.bind("TransportingComplete", function() {
                                    u(v.result.getSource())
                                }
                            );
                            v.transport(x.getSource(), x.type, {
                                ruid: w.uid
                            })
                        } else {
                            u(x.getSource())
                        }
                    },
                    loadFromImage: function(n) {
                        var i = this.getRuntime();
                        return i.shimExec.call(this, "Image", "loadFromImage", n.uid)
                    },
                    getAsBlob: function(u, s) {
                        var v = this.getRuntime()
                            , r = v.shimExec.call(this, "Image", "getAsBlob", u, s);
                        if (r) {
                            return new o(v.uid,r)
                        }
                        return null
                    },
                    getAsDataURL: function() {
                        var r = this.getRuntime(), i = r.Image.getAsBlob.apply(this, arguments), s;
                        if (!i) {
                            return null
                        }
                        s = new k;
                        return s.readAsDataURL(i)
                    }
                };
                return p.Image = m
            }
        );
        b("moxie/runtime/silverlight/Runtime", ["moxie/core/utils/Basic", "moxie/core/utils/Env", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/runtime/Runtime"], function(q, x, m, k, p) {
                function w(F) {
                    var J = false, B = null , z, D, K, A, I, H = 0;
                    try {
                        try {
                            B = new ActiveXObject("AgControl.AgControl");
                            if (B.IsVersionSupported(F)) {
                                J = true
                            }
                            B = null
                        } catch (E) {
                            var C = navigator.plugins["Silverlight Plug-In"];
                            if (C) {
                                z = C.description;
                                if (z === "1.0.30226.2") {
                                    z = "2.0.30226.2"
                                }
                                D = z.split(".");
                                while (D.length > 3) {
                                    D.pop()
                                }
                                while (D.length < 4) {
                                    D.push(0)
                                }
                                K = F.split(".");
                                while (K.length > 4) {
                                    K.pop()
                                }
                                do {
                                    A = parseInt(K[H], 10);
                                    I = parseInt(D[H], 10);
                                    H++
                                } while (H < K.length && A === I);if (A <= I && !isNaN(A)) {
                                    J = true
                                }
                            }
                        }
                    } catch (G) {
                        J = false
                    }
                    return J
                }
                function v(i) {
                    var n = this, e;
                    i = q.extend({
                        xap_url: x.xap_url
                    }, i);
                    p.call(this, i, y, {
                        access_binary: p.capTrue,
                        access_image_binary: p.capTrue,
                        display_media: p.capTrue,
                        do_cors: p.capTrue,
                        drag_and_drop: false,
                        report_upload_progress: p.capTrue,
                        resize_image: p.capTrue,
                        return_response_headers: function(o) {
                            return o && n.mode === "client"
                        },
                        return_response_type: function(o) {
                            if (o !== "json") {
                                return true
                            } else {
                                return !!window.JSON
                            }
                        },
                        return_status_code: function(o) {
                            return n.mode === "client" || !q.arrayDiff(o, [200, 404])
                        },
                        select_file: p.capTrue,
                        select_multiple: p.capTrue,
                        send_binary_string: p.capTrue,
                        send_browser_cookies: function(o) {
                            return o && n.mode === "browser"
                        },
                        send_custom_headers: function(o) {
                            return o && n.mode === "client"
                        },
                        send_multipart: p.capTrue,
                        slice_blob: p.capTrue,
                        stream_upload: true,
                        summon_file_dialog: false,
                        upload_filesize: p.capTrue,
                        use_http_method: function(o) {
                            return n.mode === "client" || !q.arrayDiff(o, ["GET", "POST"])
                        }
                    }, {
                        return_response_headers: function(o) {
                            return o ? "client" : "browser"
                        },
                        return_status_code: function(o) {
                            return q.arrayDiff(o, [200, 404]) ? "client" : ["client", "browser"]
                        },
                        send_browser_cookies: function(o) {
                            return o ? "browser" : "client"
                        },
                        send_custom_headers: function(o) {
                            return o ? "client" : "browser"
                        },
                        use_http_method: function(o) {
                            return q.arrayDiff(o, ["GET", "POST"]) ? "client" : ["client", "browser"]
                        }
                    });
                    if (!w("2.0.31005.0") || x.browser === "Opera") {
                        this.mode = false
                    }
                    q.extend(this, {
                        getShim: function() {
                            return m.get(this.uid).content.Moxie
                        },
                        shimExec: function(r, o) {
                            var s = [].slice.call(arguments, 2);
                            return n.getShim().exec(this.uid, r, o, s)
                        },
                        init: function() {
                            var o;
                            o = this.getShimContainer();
                            o.innerHTML = '<object id="' + this.uid + '" data="data:application/x-silverlight," type="application/x-silverlight-2" width="100%" height="100%" style="outline:none;"><param name="source" value="' + i.xap_url + '"/><param name="background" value="Transparent"/><param name="windowless" value="true"/><param name="enablehtmlaccess" value="true"/><param name="initParams" value="uid=' + this.uid + ",target=" + x.global_event_dispatcher + '"/></object>';
                            e = setTimeout(function() {
                                    if (n && !n.initialized) {
                                        n.trigger("Error", new k.RuntimeError(k.RuntimeError.NOT_INIT_ERR))
                                    }
                                }
                                , x.OS !== "Windows" ? 10000 : 5000)
                        },
                        destroy: function(o) {
                            return function() {
                                o.call(n);
                                clearTimeout(e);
                                i = e = o = n = null
                            }
                        }
                        (this.destroy)
                    }, l)
                }
                var y = "silverlight"
                    , l = {};
                p.addConstructor(y, v);
                return l
            }
        );
        b("moxie/runtime/silverlight/file/Blob", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/file/Blob"], function(k, i, l) {
                return k.Blob = i.extend({}, l)
            }
        );
        b("moxie/runtime/silverlight/file/FileInput", ["moxie/runtime/silverlight/Runtime"], function(k) {
                var i = {
                    init: function(m) {
                        function l(p) {
                            var o = "";
                            for (var q = 0; q < p.length; q++) {
                                o += (o !== "" ? "|" : "") + p[q].title + " | *." + p[q].extensions.replace(/,/g, ";*.")
                            }
                            return o
                        }
                        this.getRuntime().shimExec.call(this, "FileInput", "init", l(m.accept), m.name, m.multiple);
                        this.trigger("ready")
                    }
                };
                return k.FileInput = i
            }
        );
        b("moxie/runtime/silverlight/file/FileDrop", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Dom", "moxie/core/utils/Events"], function(l, i, m) {
                var k = {
                    init: function() {
                        var p = this, o = p.getRuntime(), n;
                        n = o.getShimContainer();
                        m.addEvent(n, "dragover", function(q) {
                                q.preventDefault();
                                q.stopPropagation();
                                q.dataTransfer.dropEffect = "copy"
                            }
                            , p.uid);
                        m.addEvent(n, "dragenter", function(q) {
                                q.preventDefault();
                                var r = i.get(o.uid).dragEnter(q);
                                if (r) {
                                    q.stopPropagation()
                                }
                            }
                            , p.uid);
                        m.addEvent(n, "drop", function(q) {
                                q.preventDefault();
                                var r = i.get(o.uid).dragDrop(q);
                                if (r) {
                                    q.stopPropagation()
                                }
                            }
                            , p.uid);
                        return o.shimExec.call(this, "FileDrop", "init")
                    }
                };
                return l.FileDrop = k
            }
        );
        b("moxie/runtime/silverlight/file/FileReader", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/file/FileReader"], function(k, i, l) {
                return k.FileReader = i.extend({}, l)
            }
        );
        b("moxie/runtime/silverlight/file/FileReaderSync", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/file/FileReaderSync"], function(k, i, l) {
                return k.FileReaderSync = i.extend({}, l)
            }
        );
        b("moxie/runtime/silverlight/xhr/XMLHttpRequest", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/xhr/XMLHttpRequest"], function(k, i, l) {
                return k.XMLHttpRequest = i.extend({}, l)
            }
        );
        b("moxie/runtime/silverlight/runtime/Transporter", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/runtime/Transporter"], function(k, i, l) {
                return k.Transporter = i.extend({}, l)
            }
        );
        b("moxie/runtime/silverlight/image/Image", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/image/Image"], function(k, i, l) {
                return k.Image = i.extend({}, l, {
                    getInfo: function() {
                        var p = this.getRuntime()
                            , q = ["tiff", "exif", "gps"]
                            , o = {
                            meta: {}
                        }
                            , m = p.shimExec.call(this, "Image", "getInfo");
                        if (m.meta) {
                            i.each(q, function(x) {
                                    var v = m.meta[x], z, w, y, r;
                                    if (v && v.keys) {
                                        o.meta[x] = {};
                                        for (w = 0,
                                                 y = v.keys.length; w < y; w++) {
                                            z = v.keys[w];
                                            r = v[z];
                                            if (r) {
                                                if (/^(\d|[1-9]\d+)$/.test(r)) {
                                                    r = parseInt(r, 10)
                                                } else {
                                                    if (/^\d*\.\d+$/.test(r)) {
                                                        r = parseFloat(r)
                                                    }
                                                }
                                                o.meta[x][z] = r
                                            }
                                        }
                                    }
                                }
                            )
                        }
                        o.width = parseInt(m.width, 10);
                        o.height = parseInt(m.height, 10);
                        o.size = parseInt(m.size, 10);
                        o.type = m.type;
                        o.name = m.name;
                        return o
                    }
                })
            }
        );
        b("moxie/runtime/html4/Runtime", ["moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/runtime/Runtime", "moxie/core/utils/Env"], function(q, l, v, p) {
                function u(n) {
                    var r = this
                        , i = v.capTest
                        , e = v.capTrue;
                    v.call(this, n, k, {
                        access_binary: i(window.FileReader || window.File && File.getAsDataURL),
                        access_image_binary: false,
                        display_media: i(m.Image && (p.can("create_canvas") || p.can("use_data_uri_over32kb"))),
                        do_cors: false,
                        drag_and_drop: false,
                        filter_by_extension: i(function() {
                            return p.browser === "Chrome" && p.version >= 28 || p.browser === "IE" && p.version >= 10
                        }
                        ()),
                        resize_image: function() {
                            return m.Image && r.can("access_binary") && p.can("create_canvas")
                        },
                        report_upload_progress: false,
                        return_response_headers: false,
                        return_response_type: function(o) {
                            if (o === "json" && !!window.JSON) {
                                return true
                            }
                            return !!~q.inArray(o, ["text", "document", ""])
                        },
                        return_status_code: function(o) {
                            return !q.arrayDiff(o, [200, 404])
                        },
                        select_file: function() {
                            return p.can("use_fileinput")
                        },
                        select_multiple: false,
                        send_binary_string: false,
                        send_custom_headers: false,
                        send_multipart: true,
                        slice_blob: false,
                        stream_upload: function() {
                            return r.can("select_file")
                        },
                        summon_file_dialog: i(function() {
                            return p.browser === "Firefox" && p.version >= 4 || p.browser === "Opera" && p.version >= 12 || !!~q.inArray(p.browser, ["Chrome", "Safari"])
                        }
                        ()),
                        upload_filesize: e,
                        use_http_method: function(o) {
                            return !q.arrayDiff(o, ["GET", "POST"])
                        }
                    });
                    q.extend(this, {
                        init: function() {
                            this.trigger("Init")
                        },
                        destroy: function(o) {
                            return function() {
                                o.call(r);
                                o = r = null
                            }
                        }
                        (this.destroy)
                    });
                    q.extend(this.getShim(), m)
                }
                var k = "html4"
                    , m = {};
                v.addConstructor(k, u);
                return m
            }
        );
        b("moxie/runtime/html4/file/FileInput", ["moxie/runtime/html4/Runtime", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/utils/Events", "moxie/core/utils/Mime", "moxie/core/utils/Env"], function(q, l, v, p, k, m) {
                function u() {
                    function r() {
                        var x = this, o = x.getRuntime(), B, y, z, A, w, e;
                        e = l.guid("uid_");
                        B = o.getShimContainer();
                        if (s) {
                            z = v.get(s + "_form");
                            if (z) {
                                l.extend(z.style, {
                                    top: "100%"
                                })
                            }
                        }
                        A = document.createElement("form");
                        A.setAttribute("id", e + "_form");
                        A.setAttribute("method", "post");
                        A.setAttribute("enctype", "multipart/form-data");
                        A.setAttribute("encoding", "multipart/form-data");
                        l.extend(A.style, {
                            overflow: "hidden",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                        });
                        w = document.createElement("input");
                        w.setAttribute("id", e);
                        w.setAttribute("type", "file");
                        w.setAttribute("name", i.name || "Filedata");
                        w.setAttribute("accept", n.join(","));
                        l.extend(w.style, {
                            fontSize: "999px",
                            opacity: 0
                        });
                        A.appendChild(w);
                        B.appendChild(A);
                        l.extend(w.style, {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                        });
                        if (m.browser === "IE" && m.version < 10) {
                            l.extend(w.style, {
                                filter: "progid:DXImageTransform.Microsoft.Alpha(opacity=0)"
                            })
                        }
                        w.onchange = function() {
                            var D;
                            if (!this.value) {
                                return
                            }
                            if (this.files) {
                                D = this.files[0]
                            } else {
                                D = {
                                    name: this.value
                                }
                            }
                            t = [D];
                            this.onchange = function() {}
                            ;
                            r.call(x);
                            x.bind("change", function C() {
                                    var G = v.get(e), F = v.get(e + "_form"), E;
                                    x.unbind("change", C);
                                    if (x.files.length && G && F) {
                                        E = x.files[0];
                                        G.setAttribute("id", E.uid);
                                        F.setAttribute("id", E.uid + "_form");
                                        F.setAttribute("target", E.uid + "_iframe")
                                    }
                                    G = F = null
                                }
                                , 998);
                            w = A = null ;
                            x.trigger("change")
                        }
                        ;
                        if (o.can("summon_file_dialog")) {
                            y = v.get(i.browse_button);
                            p.removeEvent(y, "click", x.uid);
                            p.addEvent(y, "click", function(C) {
                                    if (w && !w.disabled) {
                                        w.click()
                                    }
                                    C.preventDefault()
                                }
                                , x.uid)
                        }
                        s = e;
                        B = z = y = null
                    }
                    var s, t = [], n = [], i;
                    l.extend(this, {
                        init: function(y) {
                            var w = this, x = w.getRuntime(), z;
                            i = y;
                            n = y.accept.mimes || k.extList2mimes(y.accept, x.can("filter_by_extension"));
                            z = x.getShimContainer();
                            (function() {
                                    var A, o, e;
                                    A = v.get(y.browse_button);
                                    if (x.can("summon_file_dialog")) {
                                        if (v.getStyle(A, "position") === "static") {
                                            A.style.position = "relative"
                                        }
                                        o = parseInt(v.getStyle(A, "z-index"), 10) || 1;
                                        A.style.zIndex = o;
                                        z.style.zIndex = o - 1
                                    }
                                    e = x.can("summon_file_dialog") ? A : z;
                                    p.addEvent(e, "mouseover", function() {
                                            w.trigger("mouseenter")
                                        }
                                        , w.uid);
                                    p.addEvent(e, "mouseout", function() {
                                            w.trigger("mouseleave")
                                        }
                                        , w.uid);
                                    p.addEvent(e, "mousedown", function() {
                                            w.trigger("mousedown")
                                        }
                                        , w.uid);
                                    p.addEvent(v.get(y.container), "mouseup", function() {
                                            w.trigger("mouseup")
                                        }
                                        , w.uid);
                                    A = null
                                }
                            )();
                            r.call(this);
                            z = null ;
                            w.trigger({
                                type: "ready",
                                async: true
                            })
                        },
                        getFiles: function() {
                            return t
                        },
                        disable: function(e) {
                            var o;
                            if (o = v.get(s)) {
                                o.disabled = !!e
                            }
                        },
                        destroy: function() {
                            var o = this.getRuntime()
                                , e = o.getShim()
                                , w = o.getShimContainer();
                            p.removeAllEvents(w, this.uid);
                            p.removeAllEvents(i && v.get(i.container), this.uid);
                            p.removeAllEvents(i && v.get(i.browse_button), this.uid);
                            if (w) {
                                w.innerHTML = ""
                            }
                            e.removeInstance(this.uid);
                            s = t = n = i = w = e = null
                        }
                    })
                }
                return q.FileInput = u
            }
        );
        b("moxie/runtime/html4/file/FileReader", ["moxie/runtime/html4/Runtime", "moxie/runtime/html5/file/FileReader"], function(k, i) {
                return k.FileReader = i
            }
        );
        b("moxie/runtime/html4/xhr/XMLHttpRequest", ["moxie/runtime/html4/Runtime", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/utils/Url", "moxie/core/Exceptions", "moxie/core/utils/Events", "moxie/file/Blob", "moxie/xhr/FormData"], function(q, x, m, k, p, y, l, w) {
                function v() {
                    function n(D) {
                        var B = this, C, A, E, z, s = false;
                        if (!o) {
                            return
                        }
                        C = o.id.replace(/_iframe$/, "");
                        A = m.get(C + "_form");
                        if (A) {
                            E = A.getElementsByTagName("input");
                            z = E.length;
                            while (z--) {
                                switch (E[z].getAttribute("type")) {
                                    case "hidden":
                                        E[z].parentNode.removeChild(E[z]);
                                        break;
                                    case "file":
                                        s = true;
                                        break
                                }
                            }
                            E = [];
                            if (!s) {
                                A.parentNode.removeChild(A)
                            }
                            A = null
                        }
                        setTimeout(function() {
                                y.removeEvent(o, "load", B.uid);
                                if (o.parentNode) {
                                    o.parentNode.removeChild(o)
                                }
                                var e = B.getRuntime().getShimContainer();
                                if (!e.children.length) {
                                    e.parentNode.removeChild(e)
                                }
                                e = o = null ;
                                D()
                            }
                            , 1)
                    }
                    var r, i, o;
                    x.extend(this, {
                        send: function(A, t) {
                            function C() {
                                var F = z.getShimContainer() || document.body
                                    , E = document.createElement("div");
                                E.innerHTML = '<iframe id="' + D + '_iframe" name="' + D + '_iframe" src="javascript:&quot;&quot;" style="display:none"></iframe>';
                                o = E.firstChild;
                                F.appendChild(o);
                                y.addEvent(o, "load", function() {
                                        var H;
                                        try {
                                            H = o.contentWindow.document || o.contentDocument || window.frames[o.id].document;
                                            if (/^4(0[0-9]|1[0-7]|2[2346])\s/.test(H.title)) {
                                                r = H.title.replace(/^(\d+).*$/, "$1")
                                            } else {
                                                r = 200;
                                                i = x.trim(H.body.innerHTML);
                                                e.trigger({
                                                    type: "progress",
                                                    loaded: i.length,
                                                    total: i.length
                                                });
                                                if (B) {
                                                    e.trigger({
                                                        type: "uploadprogress",
                                                        loaded: B.size || 1025,
                                                        total: B.size || 1025
                                                    })
                                                }
                                            }
                                        } catch (G) {
                                            if (k.hasSameOrigin(A.url)) {
                                                r = 404
                                            } else {
                                                n.call(e, function() {
                                                        e.trigger("error")
                                                    }
                                                );
                                                return
                                            }
                                        }
                                        n.call(e, function() {
                                                e.trigger("load")
                                            }
                                        )
                                    }
                                    , e.uid)
                            }
                            var e = this, z = e.getRuntime(), D, s, u, B;
                            r = i = null ;
                            if (t instanceof w && t.hasBlob()) {
                                B = t.getBlob();
                                D = B.uid;
                                u = m.get(D);
                                s = m.get(D + "_form");
                                if (!s) {
                                    throw new p.DOMException(p.DOMException.NOT_FOUND_ERR)
                                }
                            } else {
                                D = x.guid("uid_");
                                s = document.createElement("form");
                                s.setAttribute("id", D + "_form");
                                s.setAttribute("method", A.method);
                                s.setAttribute("enctype", "multipart/form-data");
                                s.setAttribute("encoding", "multipart/form-data");
                                s.setAttribute("target", D + "_iframe");
                                z.getShimContainer().appendChild(s)
                            }
                            if (t instanceof w) {
                                t.each(function(F, G) {
                                        if (F instanceof l) {
                                            if (u) {
                                                u.setAttribute("name", G)
                                            }
                                        } else {
                                            var E = document.createElement("input");
                                            x.extend(E, {
                                                type: "hidden",
                                                name: G,
                                                value: F
                                            });
                                            if (u) {
                                                s.insertBefore(E, u)
                                            } else {
                                                s.appendChild(E)
                                            }
                                        }
                                    }
                                )
                            }
                            s.setAttribute("action", A.url);
                            C();
                            s.submit();
                            e.trigger("loadstart")
                        },
                        getStatus: function() {
                            return r
                        },
                        getResponse: function(s) {
                            if ("json" === s) {
                                if (x.typeOf(i) === "string" && !!window.JSON) {
                                    try {
                                        return JSON.parse(i.replace(/^\s*<pre[^>]*>/, "").replace(/<\/pre>\s*$/, ""))
                                    } catch (t) {
                                        return null
                                    }
                                }
                            } else {
                                if ("document" === s) {}
                            }
                            return i
                        },
                        abort: function() {
                            var s = this;
                            if (o && o.contentWindow) {
                                if (o.contentWindow.stop) {
                                    o.contentWindow.stop()
                                } else {
                                    if (o.contentWindow.document.execCommand) {
                                        o.contentWindow.document.execCommand("Stop")
                                    } else {
                                        o.src = "about:blank"
                                    }
                                }
                            }
                            n.call(this, function() {
                                    s.dispatchEvent("abort")
                                }
                            )
                        }
                    })
                }
                return q.XMLHttpRequest = v
            }
        );
        b("moxie/runtime/html4/image/Image", ["moxie/runtime/html4/Runtime", "moxie/runtime/html5/image/Image"], function(k, i) {
                return k.Image = i
            }
        );
        a(["moxie/core/utils/Basic", "moxie/core/I18n", "moxie/core/utils/Mime", "moxie/core/utils/Env", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/core/EventTarget", "moxie/core/utils/Encode", "moxie/runtime/Runtime", "moxie/runtime/RuntimeClient", "moxie/file/Blob", "moxie/file/File", "moxie/file/FileInput", "moxie/file/FileDrop", "moxie/runtime/RuntimeTarget", "moxie/file/FileReader", "moxie/core/utils/Url", "moxie/file/FileReaderSync", "moxie/xhr/FormData", "moxie/xhr/XMLHttpRequest", "moxie/runtime/Transporter", "moxie/image/Image", "moxie/core/utils/Events"])
    }
)(this);
(function(c) {
        var a = {}
            , d = c.moxie.core.utils.Basic.inArray;
        (function b(h) {
                var f, g;
                for (f in h) {
                    g = typeof h[f];
                    if (g === "object" && !~d(f, ["Exceptions", "Env", "Mime"])) {
                        b(h[f])
                    } else {
                        if (g === "function") {
                            a[f] = h[f]
                        }
                    }
                }
            }
        )(c.moxie);
        a.Env = c.moxie.core.utils.Env;
        a.Mime = c.moxie.core.utils.Mime;
        a.Exceptions = c.moxie.core.Exceptions;
        c.mOxie = a;
        if (!c.o) {
            c.o = a
        }
        return a
    }
)(this);
(function(f, b, h) {
        function c(k) {
            function j(p, n, o) {
                var m = {
                    chunks: "slice_blob",
                    jpgresize: "send_binary_string",
                    pngresize: "send_binary_string",
                    progress: "report_upload_progress",
                    multi_selection: "select_multiple",
                    dragdrop: "drag_and_drop",
                    drop_element: "drag_and_drop",
                    headers: "send_custom_headers",
                    canSendBinary: "send_binary",
                    triggerDialog: "summon_file_dialog"
                };
                m[p] ? l[m[p]] = n : o || (l[p] = n)
            }
            var i = k.required_features
                , l = {};
            return typeof i == "string" ? g.each(i.split(/\s*,\s*/), function(m) {
                        j(m, !0)
                    }
                ) : typeof i == "object" ? g.each(i, function(n, m) {
                            j(m, n)
                        }
                    ) : i === !0 && (k.multipart || (l.send_binary_string = !0),
                    k.chunk_size > 0 && (l.slice_blob = !0),
                    k.resize.enabled && (l.send_binary_string = !0),
                        g.each(k, function(n, m) {
                                j(m, !!n, !0)
                            }
                        )),
                l
        }
        var d = f.setTimeout
            , a = {}
            , g = {
            VERSION: "2.1.1",
            STOPPED: 1,
            STARTED: 2,
            QUEUED: 1,
            UPLOADING: 2,
            FAILED: 4,
            DONE: 5,
            GENERIC_ERROR: -100,
            HTTP_ERROR: -200,
            IO_ERROR: -300,
            SECURITY_ERROR: -400,
            INIT_ERROR: -500,
            FILE_SIZE_ERROR: -600,
            FILE_EXTENSION_ERROR: -601,
            FILE_DUPLICATE_ERROR: -602,
            IMAGE_FORMAT_ERROR: -700,
            IMAGE_MEMORY_ERROR: -701,
            IMAGE_DIMENSIONS_ERROR: -702,
            mimeTypes: b.mimes,
            ua: b.ua,
            typeOf: b.typeOf,
            extend: b.extend,
            guid: b.guid,
            get: function(l) {
                var k = [], e;
                b.typeOf(l) !== "array" && (l = [l]);
                var j = l.length;
                while (j--) {
                    e = b.get(l[j]),
                    e && k.push(e)
                }
                return k.length ? k : null
            },
            each: b.each,
            getPos: b.getPos,
            getSize: b.getSize,
            xmlEncode: function(j) {
                var i = {
                    "<": "lt",
                    ">": "gt",
                    "&": "amp",
                    '"': "quot",
                    "'": "#39"
                }
                    , k = /[<>&\"\']/g;
                return j ? ("" + j).replace(k, function(l) {
                            return i[l] ? "&" + i[l] + ";" : l
                        }
                    ) : j
            },
            toArray: b.toArray,
            inArray: b.inArray,
            addI18n: b.addI18n,
            translate: b.translate,
            isEmptyObj: b.isEmptyObj,
            hasClass: b.hasClass,
            addClass: b.addClass,
            removeClass: b.removeClass,
            getStyle: b.getStyle,
            addEvent: b.addEvent,
            removeEvent: b.removeEvent,
            removeAllEvents: b.removeAllEvents,
            cleanName: function(j) {
                var i, k;
                k = [/[\300-\306]/g, "A", /[\340-\346]/g, "a", /\307/g, "C", /\347/g, "c", /[\310-\313]/g, "E", /[\350-\353]/g, "e", /[\314-\317]/g, "I", /[\354-\357]/g, "i", /\321/g, "N", /\361/g, "n", /[\322-\330]/g, "O", /[\362-\370]/g, "o", /[\331-\334]/g, "U", /[\371-\374]/g, "u"];
                for (i = 0; i < k.length; i += 2) {
                    j = j.replace(k[i], k[i + 1])
                }
                return j = j.replace(/\s+/g, "_"),
                    j = j.replace(/[^a-z0-9_\-\.]+/gi, ""),
                    j
            },
            buildUrl: function(j, i) {
                var k = "";
                return g.each(i, function(m, l) {
                        k += (k ? "&" : "") + encodeURIComponent(l) + "=" + encodeURIComponent(m)
                    }
                ),
                k && (j += (j.indexOf("?") > 0 ? "&" : "?") + k),
                    j
            },
            formatSize: function(k) {
                function i(m, l) {
                    return Math.round(m * Math.pow(10, l)) / Math.pow(10, l)
                }
                if (k === h || /\D/.test(k)) {
                    return g.translate("N/A")
                }
                var j = Math.pow(1024, 4);
                return k > j ? i(k / j, 1) + " " + g.translate("tb") : k > (j /= 1024) ? i(k / j, 1) + " " + g.translate("gb") : k > (j /= 1024) ? i(k / j, 1) + " " + g.translate("mb") : k > 1024 ? Math.round(k / 1024) + " " + g.translate("kb") : k + " " + g.translate("b")
            },
            parseSize: b.parseSizeStr,
            predictRuntime: function(l, m) {
                var k, j;
                return k = new g.Uploader(l),
                    j = b.Runtime.thatCan(k.getOption().required_features, m || l.runtimes),
                    k.destroy(),
                    j
            },
            addFileFilter: function(j, i) {
                a[j] = i
            }
        };
        g.addFileFilter("mime_types", function(j, i, k) {
                j.length && !j.regexp.test(i.name) ? (this.trigger("Error", {
                        code: g.FILE_EXTENSION_ERROR,
                        message: g.translate("File extension error."),
                        file: i
                    }),
                        k(!1)) : k(!0)
            }
        ),
            g.addFileFilter("max_file_size", function(k, i, l) {
                    var j;
                    k = g.parseSize(k),
                        i.size !== j && k && i.size > k ? (this.trigger("Error", {
                                code: g.FILE_SIZE_ERROR,
                                message: g.translate("File size error."),
                                file: i
                            }),
                                l(!1)) : l(!0)
                }
            ),
            g.addFileFilter("prevent_duplicates", function(k, i, l) {
                    if (k) {
                        var j = this.files.length;
                        while (j--) {
                            if (i.name === this.files[j].name && i.size === this.files[j].size) {
                                this.trigger("Error", {
                                    code: g.FILE_DUPLICATE_ERROR,
                                    message: g.translate("Duplicate file error."),
                                    file: i
                                }),
                                    l(!1);
                                return
                            }
                        }
                    }
                    l(!0)
                }
            ),
            g.Uploader = function(Z) {
                function X() {
                    var l, k = 0, m;
                    if (this.state == g.STARTED) {
                        for (m = 0; m < Y.length; m++) {
                            !l && Y[m].status == g.QUEUED ? (l = Y[m],
                                this.trigger("BeforeUpload", l) && (l.status = g.UPLOADING,
                                    this.trigger("UploadFile", l))) : k++
                        }
                        k == Y.length && (this.state !== g.STOPPED && (this.state = g.STOPPED,
                            this.trigger("StateChanged")),
                            this.trigger("UploadComplete", Y))
                    }
                }
                function t(k) {
                    k.percent = k.size > 0 ? Math.ceil(k.loaded / k.size * 100) : 100,
                        ac()
                }
                function ac() {
                    var l, k;
                    aa.reset();
                    for (l = 0; l < Y.length; l++) {
                        k = Y[l],
                            k.size !== h ? (aa.size += k.origSize,
                                    aa.loaded += k.loaded * k.origSize / k.size) : aa.size = h,
                            k.status == g.DONE ? aa.uploaded++ : k.status == g.FAILED ? aa.failed++ : aa.queued++
                    }
                    aa.size === h ? aa.percent = Y.length > 0 ? Math.ceil(aa.uploaded / Y.length * 100) : 0 : (aa.bytesPerSec = Math.ceil(aa.loaded / ((+(new Date) - K || 1) / 1000)),
                            aa.percent = aa.size > 0 ? Math.ceil(aa.loaded / aa.size * 100) : 0)
                }
                function B() {
                    var k = ab[0] || W[0];
                    return k ? k.getRuntime().uid : !1
                }
                function H(l, m) {
                    if (l.ruid) {
                        var k = b.Runtime.getInfo(l.ruid);
                        if (k) {
                            return k.can(m)
                        }
                    }
                    return !1
                }
                function j() {
                    this.bind("FilesAdded", J),
                        this.bind("CancelUpload", r),
                        this.bind("BeforeUpload", V),
                        this.bind("UploadFile", s),
                        this.bind("UploadProgress", Q),
                        this.bind("StateChanged", o),
                        this.bind("QueueChanged", ac),
                        this.bind("Error", I),
                        this.bind("FileUploaded", ae),
                        this.bind("Destroy", n)
                }
                function z(v, w) {
                    var p = this
                        , l = 0
                        , m = []
                        , k = {
                        accept: v.filters.mime_types,
                        runtime_order: v.runtimes,
                        required_caps: v.required_features,
                        preferred_caps: U,
                        swf_url: v.flash_swf_url,
                        xap_url: v.silverlight_xap_url
                    };
                    g.each(v.runtimes.split(/\s*,\s*/), function(e) {
                            v[e] && (k[e] = v[e])
                        }
                    ),
                    v.browse_button && g.each(v.browse_button, function(e) {
                            m.push(function(x) {
                                    var u = new b.FileInput(g.extend({}, k, {
                                        name: v.file_data_name,
                                        multiple: v.multi_selection,
                                        container: v.container,
                                        browse_button: e
                                    }));
                                    u.onready = function() {
                                        var y = b.Runtime.getInfo(this.ruid);
                                        b.extend(p.features, {
                                            chunks: y.can("slice_blob"),
                                            multipart: y.can("send_multipart"),
                                            multi_selection: y.can("select_multiple")
                                        }),
                                            l++,
                                            ab.push(this),
                                            x()
                                    }
                                        ,
                                        u.onchange = function() {
                                            p.addFile(this.files)
                                        }
                                        ,
                                        u.bind("mouseenter mouseleave mousedown mouseup", function(y) {
                                                F || (v.browse_button_hover && ("mouseenter" === y.type ? b.addClass(e, v.browse_button_hover) : "mouseleave" === y.type && b.removeClass(e, v.browse_button_hover)),
                                                v.browse_button_active && ("mousedown" === y.type ? b.addClass(e, v.browse_button_active) : "mouseup" === y.type && b.removeClass(e, v.browse_button_active)))
                                            }
                                        ),
                                        u.bind("error runtimeerror", function() {
                                                u = null ,
                                                    x()
                                            }
                                        ),
                                        u.init()
                                }
                            )
                        }
                    ),
                    v.drop_element && g.each(v.drop_element, function(u) {
                            m.push(function(x) {
                                    var e = new b.FileDrop(g.extend({}, k, {
                                        drop_zone: u
                                    }));
                                    e.onready = function() {
                                        var y = b.Runtime.getInfo(this.ruid);
                                        p.features.dragdrop = y.can("drag_and_drop"),
                                            l++,
                                            W.push(this),
                                            x()
                                    }
                                        ,
                                        e.ondrop = function() {
                                            p.addFile(this.files)
                                        }
                                        ,
                                        e.bind("error runtimeerror", function() {
                                                e = null ,
                                                    x()
                                            }
                                        ),
                                        e.init()
                                }
                            )
                        }
                    ),
                        b.inSeries(m, function() {
                                typeof w == "function" && w(l)
                            }
                        )
                }
                function i(p, u, m) {
                    var k = new b.Image;
                    try {
                        k.onload = function() {
                            k.downsize(u.width, u.height, u.crop, u.preserve_headers)
                        }
                            ,
                            k.onresize = function() {
                                m(this.getAsBlob(p.type, u.quality)),
                                    this.destroy()
                            }
                            ,
                            k.onerror = function() {
                                m(p)
                            }
                            ,
                            k.load(p)
                    } catch (l) {
                        m(p)
                    }
                }
                function q(v, w, m) {
                    function p(y, u, A) {
                        var x = ad[y];
                        switch (y) {
                            case "max_file_size":
                                y === "max_file_size" && (ad.max_file_size = ad.filters.max_file_size = u);
                                break;
                            case "chunk_size":
                                if (u = g.parseSize(u)) {
                                    ad[y] = u
                                }
                                break;
                            case "filters":
                                g.typeOf(u) === "array" && (u = {
                                    mime_types: u
                                }),
                                    A ? g.extend(ad.filters, u) : ad.filters = u,
                                u.mime_types && (ad.filters.mime_types.regexp = function(D) {
                                    var C = [];
                                    return g.each(D, function(E) {
                                            g.each(E.extensions.split(/,/), function(L) {
                                                    /^\s*\*\s*$/.test(L) ? C.push("\\.*") : C.push("\\." + L.replace(new RegExp("[" + "/^$.*+?|()[]{}\\".replace(/./g, "\\$&") + "]","g"), "\\$&"))
                                                }
                                            )
                                        }
                                    ),
                                        new RegExp("(" + C.join("|") + ")$","i")
                                }
                                (ad.filters.mime_types));
                                break;
                            case "resize":
                                A ? g.extend(ad.resize, u, {
                                        enabled: !0
                                    }) : ad.resize = u;
                                break;
                            case "prevent_duplicates":
                                ad.prevent_duplicates = ad.filters.prevent_duplicates = !!u;
                                break;
                            case "browse_button":
                            case "drop_element":
                                u = g.get(u);
                            case "container":
                            case "runtimes":
                            case "multi_selection":
                            case "flash_swf_url":
                            case "silverlight_xap_url":
                                ad[y] = u,
                                A || (k = !0);
                                break;
                            default:
                                ad[y] = u
                        }
                        A || l.trigger("OptionChanged", y, u, x)
                    }
                    var l = this
                        , k = !1;
                    typeof v == "object" ? g.each(v, function(x, u) {
                                p(u, x, m)
                            }
                        ) : p(v, w, m),
                        m ? (ad.required_features = c(g.extend({}, ad)),
                                U = c(g.extend({}, ad, {
                                    required_features: !0
                                }))) : k && (l.trigger("Destroy"),
                                z.call(l, ad, function(u) {
                                        u ? (l.runtime = b.Runtime.getInfo(B()).type,
                                                l.trigger("Init", {
                                                    runtime: l.runtime
                                                }),
                                                l.trigger("PostInit")) : l.trigger("Error", {
                                                code: g.INIT_ERROR,
                                                message: g.translate("Init error.")
                                            })
                                    }
                                ))
                }
                function J(l, k) {
                    [].push.apply(Y, k),
                        l.trigger("QueueChanged"),
                        l.refresh()
                }
                function V(m, k) {
                    if (ad.unique_names) {
                        var p = k.name.match(/\.([^.]+)$/)
                            , l = "part";
                        p && (l = p[1]),
                            k.target_name = k.id + "." + l
                    }
                }
                function s(x, l) {
                    function v() {
                        C-- > 0 ? d(k, 1000) : (l.loaded = w,
                                x.trigger("Error", {
                                    code: g.HTTP_ERROR,
                                    message: g.translate("HTTP Error."),
                                    file: l,
                                    response: R.responseText,
                                    status: R.status,
                                    responseHeaders: R.getAllResponseHeaders()
                                }))
                    }
                    function k() {
                        var u, e, p, E;
                        if (l.status == g.DONE || l.status == g.FAILED || x.state == g.STOPPED) {
                            return
                        }
                        p = {
                            name: l.target_name || l.name
                        },
                            D && A.chunks && y.size > D ? (E = Math.min(D, y.size - w),
                                    u = y.slice(w, w + E)) : (E = y.size,
                                    u = y),
                        D && A.chunks && (x.settings.send_chunk_number ? (p.chunk = Math.ceil(w / D),
                                p.chunks = Math.ceil(y.size / D)) : (p.offset = w,
                                p.total = y.size)),
                            R = new b.XMLHttpRequest,
                        R.upload && (R.upload.onprogress = function(L) {
                                l.loaded = Math.min(l.size, w + L.loaded),
                                    x.trigger("UploadProgress", l)
                            }
                        ),
                            R.onload = function() {
                                if (R.status >= 400) {
                                    v();
                                    return
                                }
                                C = x.settings.max_retries,
                                    E < y.size ? (u.destroy(),
                                            w += E,
                                            l.loaded = Math.min(w, y.size),
                                            x.trigger("ChunkUploaded", l, {
                                                offset: l.loaded,
                                                total: y.size,
                                                response: R.responseText,
                                                status: R.status,
                                                responseHeaders: R.getAllResponseHeaders()
                                            }),
                                        b.Env.browser === "Android Browser" && x.trigger("UploadProgress", l)) : l.loaded = l.size,
                                    u = e = null ,
                                    !w || w >= y.size ? (l.size != l.origSize && (y.destroy(),
                                            y = null ),
                                            x.trigger("UploadProgress", l),
                                            l.status = g.DONE,
                                            x.trigger("FileUploaded", l, {
                                                response: R.responseText,
                                                status: R.status,
                                                responseHeaders: R.getAllResponseHeaders()
                                            })) : d(k, 1)
                            }
                            ,
                            R.onerror = function() {
                                v()
                            }
                            ,
                            R.onloadend = function() {
                                this.destroy(),
                                    R = null
                            }
                            ,
                            x.settings.multipart && A.multipart ? (p.name = l.target_name || l.name,
                                    R.open("post", m, !0),
                                    g.each(x.settings.headers, function(M, L) {
                                            R.setRequestHeader(L, M)
                                        }
                                    ),
                                    e = new b.FormData,
                                    g.each(g.extend(p, x.settings.multipart_params), function(M, L) {
                                            e.append(L, M)
                                        }
                                    ),
                                    e.append(x.settings.file_data_name, u),
                                    R.send(e, {
                                        runtime_order: x.settings.runtimes,
                                        required_caps: x.settings.required_features,
                                        preferred_caps: U,
                                        swf_url: x.settings.flash_swf_url,
                                        xap_url: x.settings.silverlight_xap_url
                                    })) : (m = g.buildUrl(x.settings.url, g.extend(p, x.settings.multipart_params)),
                                    R.open("post", m, !0),
                                    R.setRequestHeader("Content-Type", "application/octet-stream"),
                                    g.each(x.settings.headers, function(M, L) {
                                            R.setRequestHeader(L, M)
                                        }
                                    ),
                                    R.send(u, {
                                        runtime_order: x.settings.runtimes,
                                        required_caps: x.settings.required_features,
                                        preferred_caps: U,
                                        swf_url: x.settings.flash_swf_url,
                                        xap_url: x.settings.silverlight_xap_url
                                    }))
                    }
                    var m = x.settings.url, D = x.settings.chunk_size, C = x.settings.max_retries, A = x.features, w = 0, y;
                    l.loaded && (w = l.loaded = D * Math.floor(l.loaded / D)),
                        y = l.getSource(),
                        x.settings.resize.enabled && H(y, "send_binary_string") && !!~b.inArray(y.type, ["image/jpeg", "image/png"]) ? i.call(this, y, x.settings.resize, function(p) {
                                    y = p,
                                        l.size = p.size,
                                        k()
                                }
                            ) : k()
                }
                function Q(l, k) {
                    t(k)
                }
                function o(l) {
                    if (l.state == g.STARTED) {
                        K = +(new Date)
                    } else {
                        if (l.state == g.STOPPED) {
                            for (var k = l.files.length - 1; k >= 0; k--) {
                                l.files[k].status == g.UPLOADING && (l.files[k].status = g.QUEUED,
                                    ac())
                            }
                        }
                    }
                }
                function r() {
                    R && R.abort()
                }
                function ae(k) {
                    ac(),
                        d(function() {
                                X.call(k)
                            }
                            , 1)
                }
                function I(l, k) {
                    k.file && (k.file.status = g.FAILED,
                        t(k.file),
                    l.state == g.STARTED && (l.trigger("CancelUpload"),
                        d(function() {
                                X.call(l)
                            }
                            , 1)))
                }
                function n(k) {
                    k.stop(),
                        g.each(Y, function(l) {
                                l.destroy()
                            }
                        ),
                        Y = [],
                    ab.length && (g.each(ab, function(l) {
                            l.destroy()
                        }
                    ),
                        ab = []),
                    W.length && (g.each(W, function(l) {
                            l.destroy()
                        }
                    ),
                        W = []),
                        U = {},
                        F = !1,
                        K = R = null ,
                        aa.reset()
                }
                var G = g.guid(), ad, Y = [], U = {}, ab = [], W = [], K, aa, F = !1, R;
                ad = {
                    runtimes: b.Runtime.order,
                    max_retries: 0,
                    chunk_size: 0,
                    multipart: !0,
                    multi_selection: !0,
                    file_data_name: "file",
                    flash_swf_url: "js/Moxie.swf",
                    silverlight_xap_url: "js/Moxie.xap",
                    filters: {
                        mime_types: [],
                        prevent_duplicates: !1,
                        max_file_size: 0
                    },
                    resize: {
                        enabled: !1,
                        preserve_headers: !0,
                        crop: !1
                    },
                    send_chunk_number: !0
                },
                    q.call(this, Z, null , !0),
                    aa = new g.QueueProgress,
                    g.extend(this, {
                        id: G,
                        uid: G,
                        state: g.STOPPED,
                        features: {},
                        runtime: null ,
                        files: Y,
                        settings: ad,
                        total: aa,
                        init: function() {
                            var k = this;
                            typeof ad.preinit == "function" ? ad.preinit(k) : g.each(ad.preinit, function(e, l) {
                                        k.bind(l, e)
                                    }
                                );
                            if (!ad.browse_button || !ad.url) {
                                this.trigger("Error", {
                                    code: g.INIT_ERROR,
                                    message: g.translate("Init error.")
                                });
                                return
                            }
                            j.call(this),
                                z.call(this, ad, function(e) {
                                        typeof ad.init == "function" ? ad.init(k) : g.each(ad.init, function(l, m) {
                                                    k.bind(m, l)
                                                }
                                            ),
                                            e ? (k.runtime = b.Runtime.getInfo(B()).type,
                                                    k.trigger("Init", {
                                                        runtime: k.runtime
                                                    }),
                                                    k.trigger("PostInit")) : k.trigger("Error", {
                                                    code: g.INIT_ERROR,
                                                    message: g.translate("Init error.")
                                                })
                                    }
                                )
                        },
                        setOption: function(l, k) {
                            q.call(this, l, k, !this.runtime)
                        },
                        getOption: function(k) {
                            return k ? ad[k] : ad
                        },
                        refresh: function() {
                            ab.length && g.each(ab, function(k) {
                                    k.trigger("Refresh")
                                }
                            ),
                                this.trigger("Refresh")
                        },
                        start: function() {
                            this.state != g.STARTED && (this.state = g.STARTED,
                                this.trigger("StateChanged"),
                                X.call(this))
                        },
                        stop: function() {
                            this.state != g.STOPPED && (this.state = g.STOPPED,
                                this.trigger("StateChanged"),
                                this.trigger("CancelUpload"))
                        },
                        disableBrowse: function() {
                            F = arguments[0] !== h ? arguments[0] : !0,
                            ab.length && g.each(ab, function(k) {
                                    k.disable(F)
                                }
                            ),
                                this.trigger("DisableBrowse", F)
                        },
                        getFile: function(l) {
                            var k;
                            for (k = Y.length - 1; k >= 0; k--) {
                                if (Y[k].id === l) {
                                    return Y[k]
                                }
                            }
                        },
                        addFile: function(x, A) {
                            function m(u, C) {
                                var l = [];
                                b.each(v.settings.filters, function(e, D) {
                                        a[D] && l.push(function(E) {
                                                a[D].call(v, e, u, function(L) {
                                                        E(!L)
                                                    }
                                                )
                                            }
                                        )
                                    }
                                ),
                                    b.inSeries(l, C)
                            }
                            function y(u) {
                                var l = b.typeOf(u);
                                if (u instanceof b.File) {
                                    if (!u.ruid && !u.isDetached()) {
                                        if (!w) {
                                            return !1
                                        }
                                        u.ruid = w,
                                            u.connectRuntime(w)
                                    }
                                    y(new g.File(u))
                                } else {
                                    u instanceof b.Blob ? (y(u.getSource()),
                                            u.destroy()) : u instanceof g.File ? (A && (u.name = A),
                                                p.push(function(e) {
                                                        m(u, function(C) {
                                                                C || (k.push(u),
                                                                    v.trigger("FileFiltered", u)),
                                                                    d(e, 1)
                                                            }
                                                        )
                                                    }
                                                )) : b.inArray(l, ["file", "blob"]) !== -1 ? y(new b.File(null ,u)) : l === "node" && b.typeOf(u.files) === "filelist" ? b.each(u.files, y) : l === "array" && (A = null ,
                                                        b.each(u, y))
                                }
                            }
                            var v = this, p = [], k = [], w;
                            w = B(),
                                y(x),
                            p.length && b.inSeries(p, function() {
                                    k.length && v.trigger("FilesAdded", k)
                                }
                            )
                        },
                        removeFile: function(l) {
                            var k = typeof l == "string" ? l : l.id;
                            for (var m = Y.length - 1; m >= 0; m--) {
                                if (Y[m].id === k) {
                                    return this.splice(m, 1)[0]
                                }
                            }
                        },
                        splice: function(p, l) {
                            var m = Y.splice(p === h ? 0 : p, l === h ? Y.length : l)
                                , k = !1;
                            return this.state == g.STARTED && (k = !0,
                                this.stop()),
                                this.trigger("FilesRemoved", m),
                                g.each(m, function(u) {
                                        u.destroy()
                                    }
                                ),
                                this.trigger("QueueChanged"),
                                this.refresh(),
                            k && this.start(),
                                m
                        },
                        bind: function(m, k, p) {
                            var l = this;
                            g.Uploader.prototype.bind.call(this, m, function() {
                                    var u = [].slice.call(arguments);
                                    return u.splice(0, 1, l),
                                        k.apply(this, u)
                                }
                                , 0, p)
                        },
                        destroy: function() {
                            this.trigger("Destroy"),
                                ad = aa = null ,
                                this.unbindAll()
                        }
                    })
            }
            ,
            g.Uploader.prototype = b.EventTarget.instance,
            g.File = function() {
                function j(e) {
                    g.extend(this, {
                        id: g.guid(),
                        name: e.name || e.fileName,
                        type: e.type || "",
                        size: e.size || e.fileSize,
                        origSize: e.size || e.fileSize,
                        loaded: 0,
                        percent: 0,
                        status: g.QUEUED,
                        lastModifiedDate: e.lastModifiedDate || (new Date).toLocaleString(),
                        getNative: function() {
                            var k = this.getSource().getSource();
                            return b.inArray(b.typeOf(k), ["blob", "file"]) !== -1 ? k : null
                        },
                        getSource: function() {
                            return i[this.id] ? i[this.id] : null
                        },
                        destroy: function() {
                            var k = this.getSource();
                            k && (k.destroy(),
                                delete i[this.id])
                        }
                    }),
                        i[this.id] = e
                }
                var i = {};
                return j
            }
            (),
            g.QueueProgress = function() {
                var i = this;
                i.size = 0,
                    i.loaded = 0,
                    i.uploaded = 0,
                    i.failed = 0,
                    i.queued = 0,
                    i.percent = 0,
                    i.bytesPerSec = 0,
                    i.reset = function() {
                        i.size = i.loaded = i.uploaded = i.failed = i.queued = i.percent = i.bytesPerSec = 0
                    }
            }
            ,
            f.plupload = g
    }
)(window, mOxie);
(function(a) {
    a.Jcrop = function(e, C) {
        var J = a.extend({}, a.Jcrop.defaults), ag, aj = navigator.userAgent.toLowerCase(), ad = /msie/.test(aj), ai = /msie [1-6]\./.test(aj);
        function n(av) {
            return Math.round(av) + "px"
        }
        function E(av) {
            return J.baseClass + "-" + av
        }
        function F() {
            return a.fx.step.hasOwnProperty("backgroundColor")
        }
        function G(av) {
            var aw = a(av).offset();
            return [aw.left, aw.top]
        }
        function H(av) {
            return [(av.pageX - ag[0]), (av.pageY - ag[1])]
        }
        function B(av) {
            if (typeof (av) !== "object") {
                av = {}
            }
            J = a.extend(J, av);
            a.each(["onChange", "onSelect", "onRelease", "onDblClick"], function(aw, ax) {
                    if (typeof (J[ax]) !== "function") {
                        J[ax] = function() {}
                    }
                }
            )
        }
        function g(ax, aA, az) {
            ag = G(at);
            Q.setCursor(ax === "move" ? ax : ax + "-resize");
            if (ax === "move") {
                return Q.activateHandlers(S(aA), r, az)
            }
            var av = ab.getFixed();
            var aw = t(ax);
            var ay = ab.getCorner(t(aw));
            ab.setPressed(ab.getCorner(aw));
            ab.setCurrent(ay);
            Q.activateHandlers(I(ax, av), r, az)
        }
        function I(aw, av) {
            return function(ax) {
                if (!J.aspectRatio) {
                    switch (aw) {
                        case "e":
                            ax[1] = av.y2;
                            break;
                        case "w":
                            ax[1] = av.y2;
                            break;
                        case "n":
                            ax[0] = av.x2;
                            break;
                        case "s":
                            ax[0] = av.x2;
                            break
                    }
                } else {
                    switch (aw) {
                        case "e":
                            ax[1] = av.y + 1;
                            break;
                        case "w":
                            ax[1] = av.y + 1;
                            break;
                        case "n":
                            ax[0] = av.x + 1;
                            break;
                        case "s":
                            ax[0] = av.x + 1;
                            break
                    }
                }
                ab.setCurrent(ax);
                X.update()
            }
        }
        function S(aw) {
            var av = aw;
            ar.watchKeys();
            return function(ax) {
                ab.moveOffset([ax[0] - av[0], ax[1] - av[1]]);
                av = ax;
                X.update()
            }
        }
        function t(av) {
            switch (av) {
                case "n":
                    return "sw";
                case "s":
                    return "nw";
                case "e":
                    return "nw";
                case "w":
                    return "ne";
                case "ne":
                    return "sw";
                case "nw":
                    return "se";
                case "se":
                    return "nw";
                case "sw":
                    return "ne"
            }
        }
        function c(av) {
            return function(aw) {
                if (J.disabled) {
                    return false
                }
                if ((av === "move") && !J.allowMove) {
                    return false
                }
                ag = G(at);
                s = true;
                g(av, H(aw));
                aw.stopPropagation();
                aw.preventDefault();
                return false
            }
        }
        function V(az, aw, ay) {
            var av = az.width()
                , ax = az.height();
            if ((av > aw) && aw > 0) {
                av = aw;
                ax = (aw / az.width()) * az.height()
            }
            if ((ax > ay) && ay > 0) {
                ax = ay;
                av = (ay / az.height()) * az.width()
            }
            N = az.width() / av;
            f = az.height() / ax;
            az.width(av).height(ax)
        }
        function Z(av) {
            return {
                x: av.x * N,
                y: av.y * f,
                x2: av.x2 * N,
                y2: av.y2 * f,
                w: av.w * N,
                h: av.h * f
            }
        }
        function r(aw) {
            var av = ab.getFixed();
            if ((av.w > J.minSelect[0]) && (av.h > J.minSelect[1])) {
                X.enableHandles();
                X.done()
            } else {
                X.release()
            }
            Q.setCursor(J.allowSelect ? "crosshair" : "default")
        }
        function af(av) {
            if (J.disabled) {
                return
            }
            if (!J.allowSelect) {
                return
            }
            s = true;
            ag = G(at);
            X.disableHandles();
            Q.setCursor("crosshair");
            var aw = H(av);
            ab.setPressed(aw);
            X.update();
            Q.activateHandlers(aq, r, av.type.substring(0, 5) === "touch");
            ar.watchKeys();
            av.stopPropagation();
            av.preventDefault();
            return false
        }
        function aq(av) {
            ab.setCurrent(av);
            X.update()
        }
        function ah() {
            var av = a("<div></div>").addClass(E("tracker"));
            if (ad) {
                av.css({
                    opacity: 0,
                    backgroundColor: "white"
                })
            }
            return av
        }
        if (typeof (e) !== "object") {
            e = a(e)[0]
        }
        if (typeof (C) !== "object") {
            C = {}
        }
        B(C);
        var j = {
            border: "none",
            visibility: "visible",
            margin: 0,
            padding: 0,
            position: "absolute",
            top: 0,
            left: 0
        };
        var Y = a(e)
            , al = true;
        if (e.tagName == "IMG") {
            if (Y[0].width != 0 && Y[0].height != 0) {
                Y.width(Y[0].width);
                Y.height(Y[0].height)
            } else {
                var w = new Image();
                w.src = Y[0].src;
                Y.width(w.width);
                Y.height(w.height)
            }
            var at = Y.clone().removeAttr("id").css(j).show();
            at.width(Y.width());
            at.height(Y.height());
            Y.after(at).hide()
        } else {
            at = Y.css(j).show();
            al = false;
            if (J.shade === null ) {
                J.shade = true
            }
        }
        V(at, J.boxWidth, J.boxHeight);
        var R = at.width()
            , P = at.height()
            , aa = a("<div />").width(R).height(P).addClass(E("holder")).css({
            position: "relative",
            backgroundColor: J.bgColor
        }).insertAfter(Y).append(at);
        if (J.addClass) {
            aa.addClass(J.addClass)
        }
        var K = a("<div />")
            , m = a("<div />").width("100%").height("100%").css({
            zIndex: 310,
            position: "absolute",
            overflow: "hidden"
        })
            , M = a("<div />").width("100%").height("100%").css("zIndex", 320)
            , A = a("<div />").css({
            position: "absolute",
            zIndex: 600
        }).dblclick(function() {
                var av = ab.getFixed();
                J.onDblClick.call(i, av)
            }
        ).insertBefore(at).append(m, M);
        if (al) {
            K = a("<img />").attr("src", at.attr("src")).css(j).width(R).height(P),
                m.append(K)
        }
        if (ai) {
            A.css({
                overflowY: "hidden"
            })
        }
        var v = J.boundary;
        var b = ah().width(R + (v * 2)).height(P + (v * 2)).css({
            position: "absolute",
            top: n(-v),
            left: n(-v),
            zIndex: 290
        }).mousedown(af);
        var ap = J.bgColor, ac = J.bgOpacity, z, an, q, U, N, f, p = true, s, D, ae;
        ag = G(at);
        var T = (function() {
            function av() {
                var aC = {}, aA = ["touchstart", "touchmove", "touchend"], aB = document.createElement("div"), az;
                try {
                    for (az = 0; az < aA.length; az++) {
                        var ax = aA[az];
                        ax = "on" + ax;
                        var ay = (ax in aB);
                        if (!ay) {
                            aB.setAttribute(ax, "return;");
                            ay = typeof aB[ax] == "function"
                        }
                        aC[aA[az]] = ay
                    }
                    return aC.touchstart && aC.touchend && aC.touchmove
                } catch (aD) {
                    return false
                }
            }
            function aw() {
                if ((J.touchSupport === true) || (J.touchSupport === false)) {
                    return J.touchSupport
                } else {
                    return av()
                }
            }
            return {
                createDragger: function(ax) {
                    return function(ay) {
                        if (J.disabled) {
                            return false
                        }
                        if ((ax === "move") && !J.allowMove) {
                            return false
                        }
                        ag = G(at);
                        s = true;
                        g(ax, H(T.cfilter(ay)), true);
                        ay.stopPropagation();
                        ay.preventDefault();
                        return false
                    }
                },
                newSelection: function(ax) {
                    return af(T.cfilter(ax))
                },
                cfilter: function(ax) {
                    ax.pageX = ax.originalEvent.changedTouches[0].pageX;
                    ax.pageY = ax.originalEvent.changedTouches[0].pageY;
                    return ax
                },
                isSupported: av,
                support: aw()
            }
        }
        ());
        var ab = (function() {
            var ax = 0, aI = 0, aw = 0, aH = 0, aA, ay;
            function aC(aL) {
                aL = az(aL);
                aw = ax = aL[0];
                aH = aI = aL[1]
            }
            function aB(aL) {
                aL = az(aL);
                aA = aL[0] - aw;
                ay = aL[1] - aH;
                aw = aL[0];
                aH = aL[1]
            }
            function aK() {
                return [aA, ay]
            }
            function av(aN) {
                var aM = aN[0]
                    , aL = aN[1];
                if (0 > ax + aM) {
                    aM -= aM + ax
                }
                if (0 > aI + aL) {
                    aL -= aL + aI
                }
                if (P < aH + aL) {
                    aL += P - (aH + aL)
                }
                if (R < aw + aM) {
                    aM += R - (aw + aM)
                }
                ax += aM;
                aw += aM;
                aI += aL;
                aH += aL
            }
            function aD(aL) {
                var aM = aJ();
                switch (aL) {
                    case "ne":
                        return [aM.x2, aM.y];
                    case "nw":
                        return [aM.x, aM.y];
                    case "se":
                        return [aM.x2, aM.y2];
                    case "sw":
                        return [aM.x, aM.y2]
                }
            }
            function aJ() {
                if (!J.aspectRatio) {
                    return aG()
                }
                var aN = J.aspectRatio, aU = J.minSize[0] / N, aM = J.maxSize[0] / N, aX = J.maxSize[1] / f, aO = aw - ax, aW = aH - aI, aP = Math.abs(aO), aQ = Math.abs(aW), aS = aP / aQ, aL, aT, aV, aR;
                if (aM === 0) {
                    aM = R * 10
                }
                if (aX === 0) {
                    aX = P * 10
                }
                if (aS < aN) {
                    aT = aH;
                    aV = aQ * aN;
                    aL = aO < 0 ? ax - aV : aV + ax;
                    if (aL < 0) {
                        aL = 0;
                        aR = Math.abs((aL - ax) / aN);
                        aT = aW < 0 ? aI - aR : aR + aI
                    } else {
                        if (aL > R) {
                            aL = R;
                            aR = Math.abs((aL - ax) / aN);
                            aT = aW < 0 ? aI - aR : aR + aI
                        }
                    }
                } else {
                    aL = aw;
                    aR = aP / aN;
                    aT = aW < 0 ? aI - aR : aI + aR;
                    if (aT < 0) {
                        aT = 0;
                        aV = Math.abs((aT - aI) * aN);
                        aL = aO < 0 ? ax - aV : aV + ax
                    } else {
                        if (aT > P) {
                            aT = P;
                            aV = Math.abs(aT - aI) * aN;
                            aL = aO < 0 ? ax - aV : aV + ax
                        }
                    }
                }
                if (aL > ax) {
                    if (aL - ax < aU) {
                        aL = ax + aU
                    } else {
                        if (aL - ax > aM) {
                            aL = ax + aM
                        }
                    }
                    if (aT > aI) {
                        aT = aI + (aL - ax) / aN
                    } else {
                        aT = aI - (aL - ax) / aN
                    }
                } else {
                    if (aL < ax) {
                        if (ax - aL < aU) {
                            aL = ax - aU
                        } else {
                            if (ax - aL > aM) {
                                aL = ax - aM
                            }
                        }
                        if (aT > aI) {
                            aT = aI + (ax - aL) / aN
                        } else {
                            aT = aI - (ax - aL) / aN
                        }
                    }
                }
                if (aL < 0) {
                    ax -= aL;
                    aL = 0
                } else {
                    if (aL > R) {
                        ax -= aL - R;
                        aL = R
                    }
                }
                if (aT < 0) {
                    aI -= aT;
                    aT = 0
                } else {
                    if (aT > P) {
                        aI -= aT - P;
                        aT = P
                    }
                }
                return aF(aE(ax, aI, aL, aT))
            }
            function az(aL) {
                if (aL[0] < 0) {
                    aL[0] = 0
                }
                if (aL[1] < 0) {
                    aL[1] = 0
                }
                if (aL[0] > R) {
                    aL[0] = R
                }
                if (aL[1] > P) {
                    aL[1] = P
                }
                return [Math.round(aL[0]), Math.round(aL[1])]
            }
            function aE(aO, aQ, aN, aP) {
                var aS = aO
                    , aR = aN
                    , aM = aQ
                    , aL = aP;
                if (aN < aO) {
                    aS = aN;
                    aR = aO
                }
                if (aP < aQ) {
                    aM = aP;
                    aL = aQ
                }
                return [aS, aM, aR, aL]
            }
            function aG() {
                var aM = aw - ax, aL = aH - aI, aN;
                if (z && (Math.abs(aM) > z)) {
                    aw = (aM > 0) ? (ax + z) : (ax - z)
                }
                if (an && (Math.abs(aL) > an)) {
                    aH = (aL > 0) ? (aI + an) : (aI - an)
                }
                if (U / f && (Math.abs(aL) < U / f)) {
                    aH = (aL > 0) ? (aI + U / f) : (aI - U / f)
                }
                if (q / N && (Math.abs(aM) < q / N)) {
                    aw = (aM > 0) ? (ax + q / N) : (ax - q / N)
                }
                if (ax < 0) {
                    aw -= ax;
                    ax -= ax
                }
                if (aI < 0) {
                    aH -= aI;
                    aI -= aI
                }
                if (aw < 0) {
                    ax -= aw;
                    aw -= aw
                }
                if (aH < 0) {
                    aI -= aH;
                    aH -= aH
                }
                if (aw > R) {
                    aN = aw - R;
                    ax -= aN;
                    aw -= aN
                }
                if (aH > P) {
                    aN = aH - P;
                    aI -= aN;
                    aH -= aN
                }
                if (ax > R) {
                    aN = ax - P;
                    aH -= aN;
                    aI -= aN
                }
                if (aI > P) {
                    aN = aI - P;
                    aH -= aN;
                    aI -= aN
                }
                return aF(aE(ax, aI, aw, aH))
            }
            function aF(aL) {
                return {
                    x: aL[0],
                    y: aL[1],
                    x2: aL[2],
                    y2: aL[3],
                    w: aL[2] - aL[0],
                    h: aL[3] - aL[1]
                }
            }
            return {
                flipCoords: aE,
                setPressed: aC,
                setCurrent: aB,
                getOffset: aK,
                moveOffset: av,
                getCorner: aD,
                getFixed: aJ
            }
        }
        ());
        var d = (function() {
            var aA = false
                , aF = a("<div />").css({
                position: "absolute",
                zIndex: 240,
                opacity: 0
            })
                , az = {
                top: aB(),
                left: aB().height(P),
                right: aB().height(P),
                bottom: aB()
            };
            function aH(aI, aJ) {
                az.left.css({
                    height: n(aJ)
                });
                az.right.css({
                    height: n(aJ)
                })
            }
            function ax() {
                return aC(ab.getFixed())
            }
            function aC(aI) {
                az.top.css({
                    left: n(aI.x),
                    width: n(aI.w),
                    height: n(aI.y)
                });
                az.bottom.css({
                    top: n(aI.y2),
                    left: n(aI.x),
                    width: n(aI.w),
                    height: n(P - aI.y2)
                });
                az.right.css({
                    left: n(aI.x2),
                    width: n(R - aI.x2)
                });
                az.left.css({
                    width: n(aI.x)
                })
            }
            function aB() {
                return a("<div />").css({
                    position: "absolute",
                    backgroundColor: J.shadeColor || J.bgColor
                }).appendTo(aF)
            }
            function ay() {
                if (!aA) {
                    aA = true;
                    aF.insertBefore(at);
                    ax();
                    X.setBgOpacity(1, 0, 1);
                    K.hide();
                    aE(J.shadeColor || J.bgColor, 1);
                    if (X.isAwake()) {
                        aw(J.bgOpacity, 1)
                    } else {
                        aw(1, 1)
                    }
                }
            }
            function aE(aI, aJ) {
                h(av(), aI, aJ)
            }
            function aG() {
                if (aA) {
                    aF.remove();
                    K.show();
                    aA = false;
                    if (X.isAwake()) {
                        X.setBgOpacity(J.bgOpacity, 1, 1)
                    } else {
                        X.setBgOpacity(1, 1, 1);
                        X.disableHandles()
                    }
                    h(aa, 0, 1)
                }
            }
            function aw(aJ, aI) {
                if (aA) {
                    if (J.bgFade && !aI) {
                        aF.animate({
                            opacity: 1 - aJ
                        }, {
                            queue: false,
                            duration: J.fadeTime
                        })
                    } else {
                        aF.css({
                            opacity: 1 - aJ
                        })
                    }
                }
            }
            function aD() {
                J.shade ? ay() : aG();
                if (X.isAwake()) {
                    aw(J.bgOpacity)
                }
            }
            function av() {
                return aF.children()
            }
            return {
                update: ax,
                updateRaw: aC,
                getShades: av,
                setBgColor: aE,
                enable: ay,
                disable: aG,
                resize: aH,
                refresh: aD,
                opacity: aw
            }
        }
        ());
        var X = (function() {
            var aG, aP = 370, aC = {}, aS = {}, ax = {}, az = false;
            function aD(aW) {
                var aX = a("<div />").css({
                    position: "absolute",
                    opacity: J.borderOpacity
                }).addClass(E(aW));
                m.append(aX);
                return aX
            }
            function ay(aW, aX) {
                var aY = a("<div />").mousedown(c(aW)).css({
                    cursor: aW + "-resize",
                    position: "absolute",
                    zIndex: aX
                }).addClass("ord-" + aW);
                if (T.support) {
                    aY.bind("touchstart.jcrop", T.createDragger(aW))
                }
                M.append(aY);
                return aY
            }
            function aH(aW) {
                var aX = J.handleSize
                    , aY = ay(aW, aP++).css({
                    opacity: J.handleOpacity
                }).addClass(E("handle"));
                if (aX) {
                    aY.width(aX).height(aX)
                }
                return aY
            }
            function aN(aW) {
                return ay(aW, aP++).addClass("jcrop-dragbar")
            }
            function aK(aW) {
                var aX;
                for (aX = 0; aX < aW.length; aX++) {
                    ax[aW[aX]] = aN(aW[aX])
                }
            }
            function aO(aW) {
                var aX, aY;
                for (aY = 0; aY < aW.length; aY++) {
                    switch (aW[aY]) {
                        case "n":
                            aX = "hline";
                            break;
                        case "s":
                            aX = "hline bottom";
                            break;
                        case "e":
                            aX = "vline right";
                            break;
                        case "w":
                            aX = "vline";
                            break
                    }
                    aC[aW[aY]] = aD(aX)
                }
            }
            function aJ(aW) {
                var aX;
                for (aX = 0; aX < aW.length; aX++) {
                    aS[aW[aX]] = aH(aW[aX])
                }
            }
            function aF(aW, aX) {
                if (!J.shade) {
                    K.css({
                        top: n(-aX),
                        left: n(-aW)
                    })
                }
                A.css({
                    top: n(aX),
                    left: n(aW)
                })
            }
            function aV(aW, aX) {
                A.width(Math.round(aW)).height(Math.round(aX))
            }
            function aA() {
                var aW = ab.getFixed();
                ab.setPressed([aW.x, aW.y]);
                ab.setCurrent([aW.x2, aW.y2]);
                aT()
            }
            function aT(aW) {
                if (aG) {
                    return aE(aW)
                }
            }
            function aE(aW) {
                var aX = ab.getFixed();
                aV(aX.w, aX.h);
                aF(aX.x, aX.y);
                if (J.shade) {
                    d.updateRaw(aX)
                }
                aG || aU();
                if (aW) {
                    J.onSelect.call(i, Z(aX))
                } else {
                    J.onChange.call(i, Z(aX))
                }
            }
            function aw(aX, aY, aW) {
                if (!aG && !aY) {
                    return
                }
                if (J.bgFade && !aW) {
                    at.animate({
                        opacity: aX
                    }, {
                        queue: false,
                        duration: J.fadeTime
                    })
                } else {
                    at.css("opacity", aX)
                }
            }
            function aU() {
                A.show();
                if (J.shade) {
                    d.opacity(ac)
                } else {
                    aw(ac, true)
                }
                aG = true
            }
            function aQ() {
                aR();
                A.hide();
                if (J.shade) {
                    d.opacity(1)
                } else {
                    aw(1)
                }
                aG = false;
                J.onRelease.call(i)
            }
            function av() {
                if (az) {
                    M.show()
                }
            }
            function aL() {
                az = true;
                if (J.allowResize) {
                    M.show();
                    return true
                }
            }
            function aR() {
                az = false;
                M.hide()
            }
            function aM(aW) {
                if (aW) {
                    D = true;
                    aR()
                } else {
                    D = false;
                    aL()
                }
            }
            function aI() {
                aM(false);
                aA()
            }
            if (J.dragEdges && a.isArray(J.createDragbars)) {
                aK(J.createDragbars)
            }
            if (a.isArray(J.createHandles)) {
                aJ(J.createHandles)
            }
            if (J.drawBorders && a.isArray(J.createBorders)) {
                aO(J.createBorders)
            }
            a(document).bind("touchstart.jcrop-ios", function(aW) {
                    if (a(aW.currentTarget).hasClass("jcrop-tracker")) {
                        aW.stopPropagation()
                    }
                }
            );
            var aB = ah().mousedown(c("move")).css({
                cursor: "move",
                position: "absolute",
                zIndex: 360
            });
            if (T.support) {
                aB.bind("touchstart.jcrop", T.createDragger("move"))
            }
            m.append(aB);
            aR();
            return {
                updateVisible: aT,
                update: aE,
                release: aQ,
                refresh: aA,
                isAwake: function() {
                    return aG
                },
                setCursor: function(aW) {
                    aB.css("cursor", aW)
                },
                enableHandles: aL,
                enableOnly: function() {
                    az = true
                },
                showHandles: av,
                disableHandles: aR,
                animMode: aM,
                setBgOpacity: aw,
                done: aI
            }
        }
        ());
        var Q = (function() {
            var aw = function() {}
                , ay = function() {}
                , ax = J.trackDocument;
            function aF(aG) {
                b.css({
                    zIndex: 450
                });
                if (aG) {
                    a(document).bind("touchmove.jcrop", aE).bind("touchend.jcrop", aB)
                } else {
                    if (ax) {
                        a(document).bind("mousemove.jcrop", av).bind("mouseup.jcrop", az)
                    }
                }
            }
            function aD() {
                b.css({
                    zIndex: 290
                });
                a(document).unbind(".jcrop")
            }
            function av(aG) {
                aw(H(aG));
                return false
            }
            function az(aG) {
                aG.preventDefault();
                aG.stopPropagation();
                if (s) {
                    s = false;
                    ay(H(aG));
                    if (X.isAwake()) {
                        J.onSelect.call(i, Z(ab.getFixed()))
                    }
                    aD();
                    aw = function() {}
                    ;
                    ay = function() {}
                }
                return false
            }
            function aA(aH, aG, aI) {
                s = true;
                aw = aH;
                ay = aG;
                aF(aI);
                return false
            }
            function aE(aG) {
                aw(H(T.cfilter(aG)));
                return false
            }
            function aB(aG) {
                return az(T.cfilter(aG))
            }
            function aC(aG) {
                b.css("cursor", aG)
            }
            if (!ax) {
                b.mousemove(av).mouseup(az).mouseout(az)
            }
            at.before(b);
            return {
                activateHandlers: aA,
                setCursor: aC
            }
        }
        ());
        var ar = (function() {
            var ay = a('<input type="radio" />').css({
                position: "fixed",
                left: "-120px",
                width: "12px"
            }).addClass("jcrop-keymgr")
                , aA = a("<div />").css({
                position: "absolute",
                overflow: "hidden"
            }).append(ay);
            function aw() {
                if (J.keySupport) {
                    ay.show();
                    ay.focus()
                }
            }
            function az(aB) {
                ay.hide()
            }
            function ax(aC, aB, aD) {
                if (J.allowMove) {
                    ab.moveOffset([aB, aD]);
                    X.updateVisible(true)
                }
                aC.preventDefault();
                aC.stopPropagation()
            }
            function av(aC) {
                if (aC.ctrlKey || aC.metaKey) {
                    return true
                }
                ae = aC.shiftKey ? true : false;
                var aB = ae ? 10 : 1;
                switch (aC.keyCode) {
                    case 37:
                        ax(aC, -aB, 0);
                        break;
                    case 39:
                        ax(aC, aB, 0);
                        break;
                    case 38:
                        ax(aC, 0, -aB);
                        break;
                    case 40:
                        ax(aC, 0, aB);
                        break;
                    case 27:
                        if (J.allowSelect) {
                            X.release()
                        }
                        break;
                    case 9:
                        return true
                }
                return false
            }
            if (J.keySupport) {
                ay.keydown(av).blur(az);
                if (ai || !J.fixedSupport) {
                    ay.css({
                        position: "absolute",
                        left: "-20px"
                    });
                    aA.append(ay).insertBefore(at)
                } else {
                    ay.insertBefore(at)
                }
            }
            return {
                watchKeys: aw
            }
        }
        ());
        function l(av) {
            aa.removeClass().addClass(E("holder")).addClass(av)
        }
        function u(aO, aC) {
            var aI = aO[0] / N
                , ax = aO[1] / f
                , aH = aO[2] / N
                , aw = aO[3] / f;
            if (D) {
                return
            }
            var aG = ab.flipCoords(aI, ax, aH, aw)
                , aM = ab.getFixed()
                , aJ = [aM.x, aM.y, aM.x2, aM.y2]
                , az = aJ
                , ay = J.animationDelay
                , aL = aG[0] - aJ[0]
                , aB = aG[1] - aJ[1]
                , aK = aG[2] - aJ[2]
                , aA = aG[3] - aJ[3]
                , aF = 0
                , aD = J.swingSpeed;
            aI = az[0];
            ax = az[1];
            aH = az[2];
            aw = az[3];
            X.animMode(true);
            var av;
            function aE() {
                window.setTimeout(aN, ay)
            }
            var aN = (function() {
                return function() {
                    aF += (100 - aF) / aD;
                    az[0] = Math.round(aI + ((aF / 100) * aL));
                    az[1] = Math.round(ax + ((aF / 100) * aB));
                    az[2] = Math.round(aH + ((aF / 100) * aK));
                    az[3] = Math.round(aw + ((aF / 100) * aA));
                    if (aF >= 99.8) {
                        aF = 100
                    }
                    if (aF < 100) {
                        ao(az);
                        aE()
                    } else {
                        X.done();
                        X.animMode(false);
                        if (typeof (aC) === "function") {
                            aC.call(i)
                        }
                    }
                }
            }
            ());
            aE()
        }
        function L(av) {
            ao([av[0] / N, av[1] / f, av[2] / N, av[3] / f]);
            J.onSelect.call(i, Z(ab.getFixed()));
            X.enableHandles()
        }
        function ao(av) {
            ab.setPressed([av[0], av[1]]);
            ab.setCurrent([av[2], av[3]]);
            X.update()
        }
        function k() {
            return Z(ab.getFixed())
        }
        function am() {
            return ab.getFixed()
        }
        function x(av) {
            B(av);
            O()
        }
        function y() {
            J.disabled = true;
            X.disableHandles();
            X.setCursor("default");
            Q.setCursor("default")
        }
        function W() {
            J.disabled = false;
            O()
        }
        function o() {
            X.done();
            Q.activateHandlers(null , null )
        }
        function ak() {
            aa.remove();
            Y.show();
            Y.css("visibility", "visible");
            a(e).removeData("Jcrop")
        }
        function au(aw, ax) {
            X.release();
            y();
            var av = new Image();
            av.onload = function() {
                var ay = av.width;
                var aA = av.height;
                var aB = J.boxWidth;
                var az = J.boxHeight;
                at.width(ay).height(aA);
                at.attr("src", aw);
                K.attr("src", aw);
                V(at, aB, az);
                R = at.width();
                P = at.height();
                K.width(R).height(P);
                b.width(R + (v * 2)).height(P + (v * 2));
                aa.width(R).height(P);
                d.resize(R, P);
                W();
                if (typeof (ax) === "function") {
                    ax.call(i)
                }
            }
            ;
            av.src = aw
        }
        function h(ay, av, aw) {
            var ax = av || J.bgColor;
            if (J.bgFade && F() && J.fadeTime && !aw) {
                ay.animate({
                    backgroundColor: ax
                }, {
                    queue: false,
                    duration: J.fadeTime
                })
            } else {
                ay.css("backgroundColor", ax)
            }
        }
        function O(av) {
            if (J.allowResize) {
                if (av) {
                    X.enableOnly()
                } else {
                    X.enableHandles()
                }
            } else {
                X.disableHandles()
            }
            Q.setCursor(J.allowSelect ? "crosshair" : "default");
            X.setCursor(J.allowMove ? "move" : "default");
            if (J.hasOwnProperty("trueSize")) {
                N = J.trueSize[0] / R;
                f = J.trueSize[1] / P
            }
            if (J.hasOwnProperty("setSelect")) {
                L(J.setSelect);
                X.done();
                delete (J.setSelect)
            }
            d.refresh();
            if (J.bgColor != ap) {
                h(J.shade ? d.getShades() : aa, J.shade ? (J.shadeColor || J.bgColor) : J.bgColor);
                ap = J.bgColor
            }
            if (ac != J.bgOpacity) {
                ac = J.bgOpacity;
                if (J.shade) {
                    d.refresh()
                } else {
                    X.setBgOpacity(ac)
                }
            }
            z = J.maxSize[0] || 0;
            an = J.maxSize[1] || 0;
            q = J.minSize[0] || 0;
            U = J.minSize[1] || 0;
            if (J.hasOwnProperty("outerImage")) {
                at.attr("src", J.outerImage);
                delete (J.outerImage)
            }
            X.refresh()
        }
        if (T.support) {
            b.bind("touchstart.jcrop", T.newSelection)
        }
        M.hide();
        O(true);
        var i = {
            setImage: au,
            animateTo: u,
            setSelect: L,
            setOptions: x,
            tellSelect: k,
            tellScaled: am,
            setClass: l,
            disable: y,
            enable: W,
            cancel: o,
            release: X.release,
            destroy: ak,
            focus: ar.watchKeys,
            getBounds: function() {
                return [R * N, P * f]
            },
            getWidgetSize: function() {
                return [R, P]
            },
            getScaleFactor: function() {
                return [N, f]
            },
            getOptions: function() {
                return J
            },
            ui: {
                holder: aa,
                selection: A
            }
        };
        if (ad) {
            aa.bind("selectstart", function() {
                    return false
                }
            )
        }
        Y.data("Jcrop", i);
        return i
    }
    ;
    a.fn.Jcrop = function(b, d) {
        var c;
        this.each(function() {
                if (a(this).data("Jcrop")) {
                    if (b === "api") {
                        return a(this).data("Jcrop")
                    } else {
                        a(this).data("Jcrop").setOptions(b)
                    }
                } else {
                    if (this.tagName == "IMG") {
                        a.Jcrop.Loader(this, function() {
                                a(this).css({
                                    display: "block",
                                    visibility: "hidden"
                                });
                                c = a.Jcrop(this, b);
                                if (a.isFunction(d)) {
                                    d.call(c)
                                }
                            }
                        )
                    } else {
                        a(this).css({
                            display: "block",
                            visibility: "hidden"
                        });
                        c = a.Jcrop(this, b);
                        if (a.isFunction(d)) {
                            d.call(c)
                        }
                    }
                }
            }
        );
        return this
    }
    ;
    a.Jcrop.Loader = function(f, g, c) {
        var d = a(f)
            , b = d[0];
        function e() {
            if (b.complete) {
                d.unbind(".jcloader");
                if (a.isFunction(g)) {
                    g.call(b)
                }
            } else {
                window.setTimeout(e, 50)
            }
        }
        d.bind("load.jcloader", e).bind("error.jcloader", function(h) {
                d.unbind(".jcloader");
                if (a.isFunction(c)) {
                    c.call(b)
                }
            }
        );
        if (b.complete && a.isFunction(g)) {
            d.unbind(".jcloader");
            g.call(b)
        }
    }
    ;
    a.Jcrop.defaults = {
        allowSelect: true,
        allowMove: true,
        allowResize: true,
        trackDocument: true,
        baseClass: "jcrop",
        addClass: null ,
        bgColor: "black",
        bgOpacity: 0.6,
        bgFade: false,
        borderOpacity: 0.4,
        handleOpacity: 0.5,
        handleSize: null ,
        aspectRatio: 0,
        keySupport: true,
        createHandles: ["n", "s", "e", "w", "nw", "ne", "se", "sw"],
        createDragbars: ["n", "s", "e", "w"],
        createBorders: ["n", "s", "e", "w"],
        drawBorders: true,
        dragEdges: true,
        fixedSupport: true,
        touchSupport: null ,
        shade: null ,
        boxWidth: 0,
        boxHeight: 0,
        boundary: 2,
        fadeTime: 400,
        animationDelay: 20,
        swingSpeed: 3,
        minSelect: [0, 0],
        maxSize: [0, 0],
        minSize: [0, 0],
        onChange: function() {},
        onSelect: function() {},
        onDblClick: function() {},
        onRelease: function() {}
    }
}
(jQuery));
