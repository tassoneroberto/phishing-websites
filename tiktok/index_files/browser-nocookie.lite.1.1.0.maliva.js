!function () {
    "use strict";
    var a = location.protocol + "//" + (A = document, k = A.currentScript || [].find.call(A.querySelectorAll("script"), function (n) { return /sdk-lite/.test(n.src) }), (A = A.createElement("a")).href = location.protocol, A.host) + "/index_files", t = (n.prototype.n = function (n) { try { this.t ? this.t(n) : this.r.push(n) } catch (n) { } }, n.prototype.u = function (n) {
        var r;
        for (this.t = n;
            void 0 !== (r = this.r.shift());
        )n(r)
    }, n);
    function n() { this.r = [] } function v(n) {
        var r = new t;
        try { n(r.n.bind(r)) } catch (n) { } return r
    } function s(n) { return n() } function r(u, r) {
        void 0 === r && (r = !0);
        var o = window.SlardarLite ?? [];
        o.plugin || (o.plugin = {});
        var e = [], f = !1, c = s, t = r ? function (t, i) {
            return v(function (r) {
                h(function () {
                    var n = document.createElement("script");
                    n.defer = !0, n.src = "./index_files/" + u + ".1.1.0.maliva.js", document.head.appendChild(n), n.onload = function () {
                        c(function () {
                            return h(function () {
                                null;
                            })
                        })
                    }
                })
            })
        } : function (n, r) { return e.forEach(s), r };
        return t.i = function (n) { e.push(n), !f && r || n() }, t.o = function (n) { return c = n, t }, t
    } var h = window.requestIdleCallback || function (n) { return setTimeout(n, 1) };
    function o(n, r) {
        var t = "function" == typeof Symbol && n[Symbol.iterator];
        if (!t) return n;
        var i, u, o = t.call(n), e = [];
        try {
            for (;
                (void 0 === r || 0 < r--) && !(i = o.next()).done;
            )e.push(i.value)
        } catch (n) { u = { error: n } } finally { try { i && !i.done && (t = o.return) && t.call(o) } finally { if (u) throw u.error } } return e
    } function i(t, i, u) {
        return function () {
            for (var n = [], r = 0;
                r < arguments.length;
                r++)n[r] = arguments[r];
            t[i] = u.apply(void 0, function (n, r, t) {
                if (t || 2 === arguments.length) for (var i, u = 0, o = r.length;
                    u < o;
                    u++)!i && u in r || ((i = i || Array.prototype.slice.call(r, 0, u))[u] = r[u]);
                return n.concat(i || Array.prototype.slice.call(r))
            }([t[i]], o(n), !1))
        }
    } function u(e, f) {
        return function (t, i) {
            var n = e(t, i = void 0 === i ? {} : i), u = {};
            f(u);
            var o = d(), r = function (n) {
                var r = d();
                setTimeout(function () { (u.c || f)([7, [t, i, o, r - o, n, y(t.url || t)]]) }, 100)
            };
            return n.then(function (n) { r(n) }, function () { r(!1) }), n
        }
    } function e(u) {
        return function () {
            for (var n = [], r = 0;
                r < arguments.length;
                r++)n[r] = arguments[r];
            var t = o(n, 2), i = t[0], t = t[1];
            return (this.e || (this.e = {}))[i] = t, u && u.apply(this, n)
        }
    } function f(i, u) {
        return function () {
            for (var n = [], r = 0;
                r < arguments.length;
                r++)n[r] = arguments[r];
            try {
                var t = {};
                l(this)(t, u), this.f = d(), this.r = n[0], u(t)
            } catch (n) { } return i.apply(this, n)
        }
    } function c(i) {
        return function () {
            for (var n, r = [], t = 0;
                t < arguments.length;
                t++)r[t] = arguments[t];
            return n = o(r, 2), this.a = n[0], this.v = n[1], i.apply(this, r)
        }
    } var d = function () { return Date.now() }, y = function (n) { return performance.getEntriesByName(n).pop() }, l = function (f) {
        return i(f, "onreadystatechange", function (u, o, e) {
            return function () {
                for (var n = this, r = [], t = 0;
                    t < arguments.length;
                    t++)r[t] = arguments[t];
                try {
                    var i = d();
                    4 === this.readyState && setTimeout(function () { (o.c || e)([1, [f, n.f, i - n.f, y(n.v)]]) }, 100)
                } catch (n) { } return u && u.apply(this, r)
            }
        })
    };
    function w() {
        for (var n = new Array(16), r = 0, t = 0;
            t < 16;
            t++)0 == (3 & t) && (r = 4294967296 * Math.random()), n[t] = r >>> ((3 & t) << 3) & 255;
        n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128;
        for (var i = [], u = 0;
            u < 256;
            ++u)i[u] = (u + 256).toString(16).substr(1);
        var o = n.map(function (n) { return i[n] });
        return [4, 7, 10, 13].forEach(function (n) { return o.splice(n, 0, "-") }), o.join("")
    } var m = window.SlardarLite ?? [], p = m.config ?? [];
    p.userId || (p.userId = w()), p.deviceId || (p.deviceId = w()), p.sessionId = w(), p.viewId = p.pid + "_" + Date.now(), m.client && m.client.set(p), m.$ = t, m.s = v, m.h = r;
    var b = p.plugins || (p.plugins = {}), g = b.performance, k = b.pageview, A = void 0 !== k && k, p = b.resource, k = void 0 !== p && p, p = b.blankScreen, b = void 0 !== p && p, p = r("perf", g), g = r("report"), b = r("blankScreen", b);
    p.o(b.i), g.o(p.i), function () {
        for (var r = [], n = 0;
            n < arguments.length;
            n++)r[n] = arguments[n];
        return function (t, n) { return r.reduce(function (n, r) { return r(t, n) }, n) }
    }(function () {
        for (var n = [], r = 0;
            r < arguments.length;
            r++)n[r] = arguments[r];
        return function (t, i) {
            return t.s(function (r) {
                return n.forEach(function (n) {
                    n = n(t, i);
                    n && n.u(r)
                })
            })
        }
    }(r("error"), function (n) {
        var n = n.config.plugins.ajax, t = void 0 === n || n;
        return v(function (n) {
            var r;
            t && (r = XMLHttpRequest.prototype, i(r, "open", c)(), i(r, "send", f)(n), i(r, "setRequestHeader", e)())
        })
    }, function (n) {
        var n = n.config.plugins.fetch, r = void 0 === n || n;
        return v(function (n) { r && i(window, "fetch", u)(n) })
    }, r("resource", k), r("route", A), function (n) {
        var i = n.config;
        return (0, n.s)(function (n) {
            var r = i.plugins.pageview, t = i.pid;
            void 0 === r && t && n([4, [t, "init"]])
        })
    }, p, b), r("config", !!m.sf), g)(m)
}();

