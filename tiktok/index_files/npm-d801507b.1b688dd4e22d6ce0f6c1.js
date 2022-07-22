/*! For license information please see npm-d801507b.1b688dd4e22d6ce0f6c1.js.LICENSE.txt */
"use strict"; (self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[40], {
    56277: (e, t, n) => {
        n.d(t, {
            Z: () => i
        }); var r = n(91051); function i(e) {
            var t = e.width, n = void 0 === t ? "1em" : t, i = e.height, o = void 0 === i ? "1em" : i, a = e.fill, s = void 0 === a ? "currentColor" : a, c = e.style, u = e.className; return r.createElement("svg", {
                className: u, style: c, width: n, height: o, viewBox: "0 0 48 48", fill: s, xmlns: "http://www.w3.org/2000/svg"
            }, r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M21.1718 23.9999L10.2931 13.1212C9.90261 12.7307 9.90261 12.0975 10.2931 11.707L11.7074 10.2928C12.0979 9.90228 12.731 9.90228 13.1216 10.2928L24.0002 21.1715L34.8789 10.2928C35.2694 9.90228 35.9026 9.90228 36.2931 10.2928L37.7073 11.707C38.0979 12.0975 38.0979 12.7307 37.7073 13.1212L26.8287 23.9999L37.7073 34.8786C38.0979 35.2691 38.0979 35.9023 37.7073 36.2928L36.2931 37.707C35.9026 38.0975 35.2694 38.0975 34.8789 37.707L24.0002 26.8283L13.1216 37.707C12.731 38.0975 12.0979 38.0975 11.7074 37.707L10.2931 36.2928C9.90261 35.9023 9.90261 35.2691 10.2931 34.8786L21.1718 23.9999Z"
            }))
        }
    }, 45966: (e, t, n) => {
        n.d(t, {
            Z: () => ae
        }); var r = function (e, t) {
            return r = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            }, r(e, t)
        }; function i(e, t) {
            function n() {
                this.constructor = e
            } r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        } var o = function (e, t) {
            return o = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            }, o(e, t)
        }, a = function () {
            return a = Object.assign || function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e
            }, a.apply(this, arguments)
        }; function s(e, t, n, r) {
            return new (n || (n = Promise))((function (i, o) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        o(e)
                    }
                } function s(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        o(e)
                    }
                } function c(e) {
                    var t; e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, s)
                } c((r = r.apply(e, t || [])).next())
            }))
        } function c(e, t) {
            var n, r, i, o, a = {
                label: 0, sent: function () {
                    if (1 & i[0]) throw i[1]; return i[1]
                }, trys: [], ops: []
            }; return o = {
                next: s(0), throw: s(1), return: s(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                return this
            }), o; function s(o) {
                return function (s) {
                    return function (o) {
                        if (n) throw new TypeError("Generator is already executing."); for (; a;)try {
                            if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                case 0: case 1: i = o; break; case 4: return a.label++, {
                                    value: o[1], done: !1
                                }; case 5: a.label++, r = o[1], o = [0]; continue; case 7: o = a.ops.pop(), a.trys.pop(); continue; default: if (!((i = (i = a.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    a = 0; continue
                                } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    a.label = o[1]; break
                                } if (6 === o[0] && a.label < i[1]) {
                                    a.label = i[1], i = o; break
                                } if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(o); break
                                } i[2] && a.ops.pop(), a.trys.pop(); continue
                            }o = t.call(e, a)
                        } catch (e) {
                            o = [6, e], r = 0
                        } finally {
                                n = i = 0
                            } if (5 & o[0]) throw o[1]; return {
                                value: o[0] ? o[1] : void 0, done: !0
                            }
                    }([o, s])
                }
            }
        } var u = function (e) {
            function t(t, n, r) {
                var i = e.call(this, n) || this; return i.code = t, i.message = n, i.originError = r, i.name = "StarlingError", i.code = t, i.message = n, i.originError = r, Error.captureStackTrace && Error.captureStackTrace(i, i.constructor), i
            } return function (e, t) {
                function n() {
                    this.constructor = e
                } o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }(t, e), t
        }(Error), l = {
            ERROR_CODE: 103, ERROR_MESSAGE: "Request failed, confirm your apiKey and namespace is correct"
        }, f = {
            ERROR_CODE: 110, ERROR_MESSAGE: "Check your params, parameter apiKey, namespace and zoneHost is required!"
        }, p = {
            ERROR_CODE: 111, ERROR_MESSAGE: "Check your params, parameter request and store is required!"
        }, h = 112, d = {
            ERROR_CODE: 120, ERROR_MESSAGE: "Version is not found, please check your param [version]!"
        }, g = {
            zone: "CN", locale: "zh", timeout: 15e3, test: !1, mode: "normal", format: "merged", lazyUpdate: !1, fallbackLang: ["zh"], tracker: function () {
            }
        }, v = function () {
            function e(e) {
                this.options = e, this.options = e
            } return e.prototype.getText = function (e, t) {
                return s(this, void 0, void 0, (function () {
                    return c(this, (function (n) {
                        switch (n.label) {
                            case 0: return [4, this._request(e, t)]; case 1: return [2, n.sent()]
                        }
                    }))
                }))
            }, e.prototype.getTexts = function (e) {
                var t = this; return Promise.all(e.map((function (e) {
                    var n = e[0], r = e[1]; return t.getText(n, r)
                })))
            }, e.prototype._request = function (e, t) {
                return s(this, void 0, void 0, (function () {
                    var n, r, i, o, a, s, f, p, h, g, v, m, y, C; return c(this, (function (c) {
                        switch (c.label) {
                            case 0: return n = this.options.getReleaseVersion, r = n(e), e && r && t ? [2, {
                            }] : (i = this.getUrl(e, t), o = this.options, a = o.request, s = o.timeout, [4, a(i, {
                                timeout: s
                            })]); case 1: if (f = c.sent(), p = f.data, h = p.status, g = p.message, 200 == +h) return [2, this._mapResponse(g)]; if (1001 == +h) throw m = (v = d).ERROR_CODE, new u(m, v.ERROR_MESSAGE); throw C = (y = l).ERROR_CODE, new u(C, y.ERROR_MESSAGE)
                        }
                    }))
                }))
            }, e.prototype.getUrl = function (e, t) {
                var n = this.options, r = n.apiKey, i = n.locale, o = n.fallbackLang, a = n.zoneHost, s = n.mode, c = n.getReleaseVersion, u = [i].concat(o), l = a + "/check_and_get_text/" + r + "/" + s + "/" + e + "?lang=" + u, f = c(e); return f && (l = a + "/text_by_release_version/" + r + "/" + s + "/" + e + "/" + f + "?lang=" + u), "string" == typeof t && (l += "&version=" + t), l
            }, e.prototype._mapResponse = function (e) {
                return e ? Object.keys(e).reduce((function (t, n) {
                    return t[n.toLowerCase()] = e[n], t
                }), {
                }) : {
                }
            }, e
        }(), m = function () {
            function e(e) {
                this.options = e, this.options = e
            } return e.prototype._setCache = function (e, t) {
                try {
                    return this.options.store.set(e, t)
                } catch (e) {
                    var n = h; return void this.options.tracker("cache_error", {
                        code: n, message: e.message, stack: e.stack
                    })
                }
            }, e.prototype._getCache = function (e) {
                try {
                    return this.options.store.get(e)
                } catch (e) {
                    var t = h; return void this.options.tracker("cache_error", {
                        code: t, message: e.message, stack: e.stack
                    })
                }
            }, e.prototype.getVersion = function (e) {
                var t = this.options, n = "version." + t.apiKey + "." + e + "." + t.locale, r = (0, t.getReleaseVersion)(e); return r && (n += "." + r), this.getText(e) ? this._getCache(n) : null
            }, e.prototype.getVersions = function (e) {
                var t = this; return Promise.all(e.map((function (e) {
                    return t.getVersion(e)
                })))
            }, e.prototype.getText = function (e) {
                var t = this.options, n = "text." + t.apiKey + "." + e + "." + t.locale, r = (0, t.getReleaseVersion)(e); return r && (n += "." + r), this._getCache(n)
            }, e.prototype.getTexts = function (e) {
                var t = this; return Promise.all(e.map((function (e) {
                    return t.getText(e)
                })))
            }, e.prototype.refresh = function (e, t, n, r) {
                return s(this, void 0, void 0, (function () {
                    var i, o, a, s, u = this; return c(this, (function (c) {
                        switch (c.label) {
                            case 0: return i = this.options, o = i.apiKey, a = i.getReleaseVersion, s = [], t.forEach((function (i, c) {
                                var l = "text." + o + "." + e[c] + "." + r[c], f = "version." + o + "." + e[c] + "." + r[c], p = a(e[c]); p && (l += "." + p, f += "." + p), s.push(u._setCache(l, t[c])), s.push(u._setCache(f, n[c]))
                            })), [4, Promise.all(s)]; case 1: return c.sent(), [2, t.reduce((function (e, t) {
                                return Object.assign(e, t)
                            }), {
                            })]
                        }
                    }))
                }))
            }, e
        }(), y = function () {
            function e(e) {
                void 0 === e && (e = []), this._list = [], this._list = e
            } return Object.defineProperty(e.prototype, "length", {
                get: function () {
                    return this._list.length
                }, enumerable: !1, configurable: !0
            }), e.prototype.getList = function () {
                return this._list
            }, e.prototype.getNamespaces = function () {
                return this._list.map((function (e) {
                    return e.namespace
                }))
            }, e.prototype.addNamespace = function (e) {
                this._list.push(e)
            }, e.prototype.insertTexts = function (e) {
                this._list.forEach((function (t, n) {
                    t.texts = e[n]
                }))
            }, e.prototype.sortByPrior = function () {
                return this._list.sort((function (e, t) {
                    return e.prior - t.prior
                })), this._list
            }, e.prototype.concat = function (t) {
                return new e(this._list.concat(t.getList()))
            }, e
        }(), C = function () {
            function e(e, t, n) {
                this._promiseRefresh = Promise.resolve(null), this.remote = e, this.local = t, this.options = n
            } return e.prototype._checkVersions = function (e) {
                return s(this, void 0, void 0, (function () {
                    var t, n, r, i, o, a; return c(this, (function (s) {
                        switch (s.label) {
                            case 0: return t = this.options.locale, [4, this.local.getVersions(e)]; case 1: return n = s.sent(), r = e.map((function (e, t) {
                                return [e, n[t]]
                            })), [4, this.remote.getTexts(r)]; case 2: return i = s.sent(), o = new y, a = new y, e.forEach((function (e, r) {
                                var s = i[r], c = s.updated, u = s.version, l = s.data, f = s.lang; c ? a.addNamespace({
                                    namespace: e, prior: r, version: u, texts: l, lang: f
                                }) : o.addNamespace({
                                    namespace: e, prior: r, version: n[r], lang: t
                                })
                            })), [2, {
                                equalNs: o, diffNs: a
                            }]
                        }
                    }))
                }))
            }, e.prototype.waitForRefresh = function () {
                return this._promiseRefresh
            }, e.prototype._refresh = function (e) {
                var t = e.getList(), n = [], r = [], i = [], o = []; return t.forEach((function (e) {
                    n.push(e.namespace), r.push(e.version), i.push(e.texts), o.push(e.lang)
                })), this.local.refresh(n, i, r, o)
            }, e.prototype._getLocalTexts = function (e) {
                return s(this, void 0, void 0, (function () {
                    var t; return c(this, (function (n) {
                        switch (n.label) {
                            case 0: return [4, this.local.getTexts(e.getNamespaces())]; case 1: return t = n.sent(), e.insertTexts(t), [2, t]
                        }
                    }))
                }))
            }, e.prototype.load = function (e) {
                return s(this, void 0, void 0, (function () {
                    var t, n, r, i, o; return c(this, (function (a) {
                        switch (a.label) {
                            case 0: return t = this.options.format, [4, this._checkVersions(e)]; case 1: return n = a.sent(), r = n.equalNs, i = n.diffNs, r.length ? [4, this._getLocalTexts(r)] : [3, 3]; case 2: return a.sent(), [3, 4]; case 3: a.label = 4; case 4: return o = this._formatTexts(t, i.concat(r)), i.length ? [4, this._refresh(i)] : [3, 6]; case 5: a.sent(), a.label = 6; case 6: return [2, {
                                texts: o, diffNs: i.getNamespaces(), equalNs: r.getNamespaces()
                            }]
                        }
                    }))
                }))
            }, e.prototype._getCacheText = function (e) {
                return s(this, void 0, void 0, (function () {
                    var t, n, r, i, o, a, s; return c(this, (function (c) {
                        switch (c.label) {
                            case 0: return t = this.options, n = t.locale, r = t.format, [4, this.local.getTexts(e)]; case 1: return i = c.sent(), [4, this.local.getVersions(e)]; case 2: return o = c.sent(), a = i.map((function (t, r) {
                                if (t) return {
                                    namespace: e[r], version: o[r], lang: n, texts: t
                                }
                            })).filter((function (e) {
                                return !!e
                            })), s = new y(a), [2, this._formatTexts(r, s)]
                        }
                    }))
                }))
            }, e.prototype.lazyLoad = function (e) {
                return s(this, void 0, void 0, (function () {
                    var t, n, r; return c(this, (function (i) {
                        switch (i.label) {
                            case 0: return [4, this._getCacheText(e)]; case 1: return t = i.sent(), n = 0 === Object.keys(t).length, this._promiseRefresh = this.load(e), n ? [4, this._promiseRefresh] : [3, 3]; case 2: r = i.sent(), t = r.texts, i.label = 3; case 3: return [2, {
                                texts: t, diffNs: n ? r && r.diffNs : [], equalNs: n ? r && r.equalNs : e
                            }]
                        }
                    }))
                }))
            }, e.prototype._formatTexts = function (e, t) {
                return "splitted" === e ? t.getList().reduce((function (e, t) {
                    var n = t.namespace, r = t.lang, i = t.texts, o = t.version; return e[n] = {
                        lang: r, texts: i, version: o
                    }, e
                }), {
                }) : t.sortByPrior().map((function (e) {
                    return e.texts
                })).reduce((function (e, t) {
                    return Object.assign(e, t)
                }), {
                })
            }, e
        }(); "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
            value: function (e) {
                if (null == e) throw new TypeError("Cannot convert undefined or null to object"); for (var t = Object(e), n = 1; n < arguments.length; n++) {
                    var r = arguments[n]; if (null != r) for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                } return t
            }, writable: !0, configurable: !0
        }); var _, w = "client_load"; !function (e) {
            e.AfterLoad = "afterLoad"
        }(_ || (_ = {
        })); var b = function () {
            function e(e) {
                this.afterLoadPlugins = [], this.setConfig(e)
            } return e.prototype._init = function (e) {
                var t = this; this.options = function (e) {
                    var t = (e = Object.assign({
                    }, g, e)).namespace, n = e.apiKey, r = e.request, i = e.store, o = e.zoneHost; if (e.test && (e.mode = "test"), e.namespace = t = t ? Array.isArray(t) ? t : [t] : [], e.apiKey = n = n || e.api_key, !r || !i) {
                        var a = p.ERROR_CODE, s = p.ERROR_MESSAGE; throw new u(a, s, null)
                    } if (!n || !t.length || !o) {
                        throw new u(a = f.ERROR_CODE, s = f.ERROR_MESSAGE, null)
                    } return e
                }(e); var n = this.options, r = n.apiKey, i = n.locale, o = n.zoneHost, s = n.request, c = n.timeout, l = n.fallbackLang, h = n.store, d = n.lazyUpdate, y = n.test, _ = n.mode, w = n.format, b = {
                    mode: d ? "lazy" : y ? "test" : "prod", zone: o, locale: i, apiKey: r
                }; this._tracker = function (e, n) {
                    try {
                        t.options.tracker(e, a(a({
                        }, b), n))
                    } catch (e) {
                        console.log(e)
                    }
                }; var k = this._getReleaseVersionByNamespace.bind(this), E = new v({
                    request: s, timeout: c, apiKey: r, locale: i, zoneHost: o, fallbackLang: l, mode: _, getReleaseVersion: k
                }), x = new m({
                    apiKey: r, locale: i, store: h, tracker: this._tracker, getReleaseVersion: k
                }); this._textManager = new C(E, x, {
                    locale: i, format: w
                }), this.initPlugin()
            }, e.prototype.initPlugin = function () {
                var e = this, t = this.options.plugins || []; Array.isArray(t) && t.every((function (e) {
                    return "object" == typeof e
                })) && t.forEach((function (t) {
                    t.type === _.AfterLoad && e.afterLoadPlugins.push(t)
                }))
            }, e.prototype._getReleaseVersionByNamespace = function (e) {
                var t = this.options.namespace, n = this.options.version, r = null; return Array.isArray(n) ? r = n[t.findIndex((function (t) {
                    return t === e
                }))] : n && "object" == typeof n ? r = n[e] : "string" == typeof n && (r = n), r
            }, e.prototype.setConfig = function (e) {
                var t = Object.assign({
                }, this.options, e); this._init(t)
            }, e.prototype.waitForRefresh = function () {
                return s(this, void 0, void 0, (function () {
                    var e; return c(this, (function (t) {
                        switch (t.label) {
                            case 0: return [4, this._textManager.waitForRefresh()]; case 1: return [2, (e = t.sent()) ? e.texts : null]
                        }
                    }))
                }))
            }, e.prototype._load = function () {
                return s(this, void 0, void 0, (function () {
                    var e, t, n, r, i; return c(this, (function (o) {
                        switch (o.label) {
                            case 0: return e = this.options, t = e.namespace, n = e.lazyUpdate, r = t, n ? [4, this._textManager.lazyLoad(r)] : [3, 2]; case 1: return i = o.sent(), [3, 4]; case 2: return [4, this._textManager.load(r)]; case 3: i = o.sent(), o.label = 4; case 4: return [2, i]
                        }
                    }))
                }))
            }, e.prototype.load = function (e, t) {
                return s(this, void 0, void 0, (function () {
                    var n, r, i, o, a, s, u, l, f, p, h, d, g, v, m = this; return c(this, (function (c) {
                        switch (c.label) {
                            case 0: n = Date.now(), r = this.options.namespace, c.label = 1; case 1: return c.trys.push([1, 5, , 10]), this._tracker(w, {
                                state: "start", version: "0.5.4-beta.1"
                            }), [4, this._load()]; case 2: return i = c.sent(), o = i.diffNs, a = i.equalNs, s = i.texts, u = this.afterLoadPlugins, Array.isArray(u) && u.length ? [4, u.reduce((function (e, t) {
                                return e.then((function (e) {
                                    return "function" == typeof t.process ? t.process(e || s, m.options) : e
                                }))
                            }), Promise.resolve(s))] : [3, 4]; case 3: l = c.sent(), s = l || s, c.label = 4; case 4: return e && e(s), this._tracker("client_load_time", {
                                time: Date.now() - n
                            }), this._tracker(w, {
                                state: "success", version: "0.5.4-beta.1"
                            }), f = o.length, p = a.length, h = r.length, d = (p / h).toFixed(2), this._tracker("client_cache", {
                                diffLen: f, diff: o.join(","), equalLen: p, equal: a.join(","), namespaces: a.join(","), namespacesLen: h, ratio: d
                            }), [2, s]; case 5: if (g = c.sent(), this._tracker(w, {
                                state: "fail"
                            }), this._tracker("client_exception", {
                                code: g.code, message: g.message, stack: g.stack
                            }), !(g || {
                            }).useWebCache) return [3, 9]; c.label = 6; case 6: return c.trys.push([6, 8, , 9]), [4, this._textManager._getCacheText(r)]; case 7: return v = c.sent(), g.response.data = v && "object" == typeof v ? v : {
                            }, [3, 9]; case 8: return c.sent(), [3, 9]; case 9: return t ? (t(g), [3, 10]) : [2, Promise.reject(g)]; case 10: return [2]
                        }
                    }))
                }))
            }, e
        }(); function k(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n, enumerable: !0, configurable: !0, writable: !0
            }) : e[t] = n, e
        } var E = function () {
            return (E = Object.assign || function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e
            }).apply(this, arguments)
        }; function x(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator]; if (!n) return e; var r, i, o = n.call(e), a = []; try {
                for (; (void 0 === t || t-- > 0) && !(r = o.next()).done;)a.push(r.value)
            } catch (e) {
                i = {
                    error: e
                }
            } finally {
                try {
                    r && !r.done && (n = o.return) && n.call(o)
                } finally {
                    if (i) throw i.error
                }
            } return a
        } function L() {
            for (var e = [], t = 0; t < arguments.length; t++)e = e.concat(x(arguments[t])); return e
        } var O, N, S = (O = function (e, t) {
            var n; n = function () {
                function e() {
                    for (var e = 0, t = {
                    }; e < arguments.length; e++) {
                        var n = arguments[e]; for (var r in n) t[r] = n[r]
                    } return t
                } function t(e) {
                    return e.replace(/(%[0-9A-Z]{2}) + /g, decodeURIComponent)
                } return function n(r) {
                    function i() {
                    } function o(t, n, o) {
                        if ("undefined" != typeof document) {
                            "number" == typeof (o = e({
                                path: "/"
                            }, i.defaults, o)).expires && (o.expires = new Date(1 * new Date + 864e5 * o.expires)), o.expires = o.expires ? o.expires.toUTCString() : ""; try {
                                var a = JSON.stringify(n); /^[\{\[] /.test(a) && (n = a)
                            } catch (e) {
                            } n = r.write ? r.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape); var s = ""; for (var c in o) o[c] && (s += "; " + c, !0 !== o[c] && (s += "=" + o[c].split(";")[0])); return document.cookie = t + "=" + n + s
                        }
                    } function a(e, n) {
                        if ("undefined" != typeof document) {
                            for (var i = {
                            }, o = document.cookie ? document.cookie.split("; ") : [], a = 0; a < o.length; a++) {
                                var s = o[a].split("="), c = s.slice(1).join("="); n || '"' !== c.charAt(0) || (c = c.slice(1, -1)); try {
                                    var u = t(s[0]); if (c = (r.read || r)(c, u) || t(c), n) try {
                                        c = JSON.parse(c)
                                    } catch (e) {
                                    } if (i[u] = c, e === u) break
                                } catch (e) {
                                }
                            } return e ? i[e] : i
                        }
                    } return i.set = o, i.get = function (e) {
                        return a(e, !1)
                    }, i.getJSON = function (e) {
                        return a(e, !0)
                    }, i.remove = function (t, n) {
                        o(t, "", e(n, {
                            expires: -1
                        }))
                    }, i.defaults = {
                    }, i.withConverter = n, i
                }((function () {
                }))
            }, e.exports = n()
        }, O(N = {
            exports: {
            }
        }), N.exports), I = function () {
            function e() {
                this.cache = {
                }
            } return e.prototype.setItem = function (e, t) {
                this.cache[e] = t
            }, e.prototype.getItem = function (e) {
                return this.cache[e]
            }, e.prototype.removeItem = function (e) {
                this.cache[e] = void 0
            }, e
        }(), R = {
            getItem: function (e) {
                try {
                    var t = localStorage.getItem(e), n = t; try {
                        t && "string" == typeof t && (n = JSON.parse(t))
                    } catch (e) {
                    } return n || void 0
                } catch (e) {
                }
            }, setItem: function (e, t) {
                try {
                    var n = "string" == typeof t ? t : JSON.stringify(t); localStorage.setItem(e, n)
                } catch (e) {
                }
            }, removeItem: function (e) {
                try {
                    localStorage.removeItem(e)
                } catch (e) {
                }
            }, getCookie: function (e, t) {
                try {
                    return S.get(e, {
                        domain: t || document.domain
                    })
                } catch (e) {
                    return ""
                }
            }, setCookie: function (e, t, n, r) {
                try {
                    var i = r || document.domain, o = +new Date + n; S.set(e, t, {
                        expires: new Date(o), path: "/", domain: i
                    })
                } catch (e) {
                }
            }, isSupportLS: function () {
                try {
                    return localStorage.setItem("_ranger-test-key", "hi"), localStorage.getItem("_ranger-test-key"), localStorage.removeItem("_ranger-test-key"), !0
                } catch (e) {
                    return !1
                }
            }()
        }, M = {
            getItem: function (e) {
                try {
                    var t = sessionStorage.getItem(e), n = t; try {
                        t && "string" == typeof t && (n = JSON.parse(t))
                    } catch (e) {
                    } return n || void 0
                } catch (e) {
                }
            }, setItem: function (e, t) {
                try {
                    var n = "string" == typeof t ? t : JSON.stringify(t); sessionStorage.setItem(e, n)
                } catch (e) {
                }
            }, removeItem: function (e) {
                try {
                    sessionStorage.removeItem(e)
                } catch (e) {
                }
            }, isSupportSession: function () {
                try {
                    return sessionStorage.setItem("_ranger-test-key", "hi"), sessionStorage.getItem("_ranger-test-key"), sessionStorage.removeItem("_ranger-test-key"), !0
                } catch (e) {
                    return !1
                }
            }()
        }, T = function () {
            function e(e, t) {
                this._storage = t && "session" === t ? M : !e && R.isSupportLS ? R : new I
            } return e.prototype.getItem = function (e) {
                return this._storage.getItem(e)
            }, e.prototype.setItem = function (e, t) {
                this._storage.setItem(e, t)
            }, e.prototype.getCookie = function (e, t) {
                return this._storage.getCookie(e, t)
            }, e.prototype.setCookie = function (e, t, n, r) {
                this._storage.setCookie(e, t, n, r)
            }, e.prototype.removeItem = function (e) {
                this._storage.removeItem(e)
            }, e
        }(), Z = {
            sg: "1fz22z22z1nz21z4mz4bz4bz1kz1az21z49z21z1ez4az22z1gz1iz22z1mz1iz24z4az1az1mz1k", va: "1fz22z22z1nz21z4mz4bz4bz1kz1az21z49z24z18z4az22z1gz1iz22z1mz1iz24z4az1az1mz1k", in: "1fz22z22z1nz21z4mz4bz4bz1kz1az21z49z24z18z49z23z21z1cz18z21z22z4ez18z4az22z1gz1iz22z1mz1iz24z4az1az1mz1k"
        }, A = "/v1/user/webid", P = function (e, t) {
            return t ? "__tea_cache_tokens_" + e : "__tea_cache_events_" + e
        }, D = function (e, t, n, r) {
            try {
                var i, o = e.match(/\/v\d\//); i = o ? o[0] : -1 !== e.indexOf("/v1/") ? "/v1/" : "/v2/"; var a = e.split(i)[0]; if (!a) return void r(e, t, 4001); t.forEach((function (i) {
                    var o = function (e) {
                        var t = ""; for (var n in e) e.hasOwnProperty(n) && void 0 !== e[n] && (t += "&" + n + "=" + encodeURIComponent(JSON.stringify(e[n]))); return "&" === t[0] ? t.slice(1) : t
                    }(i), s = new Image(1, 1); s.onload = function () {
                        s = null, n && n()
                    }, s.onerror = function () {
                        s = null, r && r(e, t, 4e3)
                    }, s.src = a + "/v1/gif?" + o
                }))
            } catch (n) {
                r && r(e, t, 4002, n.message)
            }
        }, j = function (e, t, n, r, i, o, a, s, c, u) {
            var l = window.navigator.userAgent, f = -1 !== window.navigator.appName.indexOf("Microsoft Internet Explorer") && (-1 !== l.indexOf("MSIE 8.0") || -1 !== l.indexOf("MSIE 9.0")), p = !!r; if (!p && f) D(e, n, i, o); else if (!p && s) return window.navigator && window.navigator.sendBeacon ? (u && u(), void (window.navigator.sendBeacon(e, JSON.stringify(n)) ? i() : o(e, n, 4003))) : void D(e, n, i, o); a && delete n.app_key, function (e, t, n, r, i, o, a, s) {
                try {
                    var c = new XMLHttpRequest; c.open("POST", "" + e, !0), c.setRequestHeader("Content-Type", "application/json; charset=utf-8"), i && c.setRequestHeader("X-MCS-AppKey", "" + i), a && (c.withCredentials = !0), c.onload = function () {
                        if (n) {
                            var e = null; if (c.responseText) {
                                try {
                                    e = JSON.parse(c.responseText)
                                } catch (t) {
                                    e = {
                                    }
                                } n(e)
                            }
                        }
                    }, o && (c.timeout = o), o && (c.ontimeout = function () {
                        r && r(t, 5005)
                    }), c.onerror = function () {
                        c.abort(), r && r(t, 500)
                    }, c.send(JSON.stringify(t))
                } catch (e) {
                }
            }(e, n, i, o, r, t, c)
        }; function z(e) {
            return e ? (e ^ 16 * Math.random() >> e / 4).toString(10) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, z)
        } var V = function () {
            return z().replace(/-/g, "").slice(0, 19)
        }, H = function (e) {
            return function (e, t, n) {
                if ("string" == typeof e && "number" == typeof n) {
                    var r, i = []; n = n <= 25 ? n : n % 25; var o = String.fromCharCode(n + 97); r = e.split(o); for (var a = 0; a < r.length; a++) {
                        var s = parseInt(r[a], n); s = 1 * s ^ 64; var c = String.fromCharCode(s); i.push(c)
                    } return i.join("")
                }
            }(e, 0, 25)
        }, K = function () {
            function e(e, t, n, r) {
                this.config = e, this.cfg = t, this.storage = new T(!1), this.appInfo = e.app_key || e.app_id, this.isNoWebid = e.disable_webid, this.enable_ttwebid = e.enable_ttwebid || !1, this.domain = e.channel_domain || H(Z[e.channel]), this.tokenReady = !1, this.checkExp = e.checkExp || !1, this.enableCookie = e.cross_subdomain || !1, this.expiresTime = 94608e6, this.fetchUrl = "" + this.domain + A, this.hook = n, this.session = r, this.cookieDomain = e.cookie_domain || ""
            } return e.prototype._getToken = function () {
                this.tokensKey = P(this.appInfo, !0), this.cookieKey = function (e) {
                    return "__tea_cookie_tokens_" + e
                }(this.appInfo); var e = this.storage.getItem(this.tokensKey), t = this.storage.getCookie(this.cookieKey, this.cookieDomain); if (this.enable_ttwebid) if (e) {
                    var n = {
                        user_unique_id: e.user_unique_id || "", timestamp: Date.now()
                    }; this.storage.setItem(this.tokensKey, n), this._setTtWid(e, !1)
                } else this._setTtWid(e, !0); else if (this.enableCookie) if (t) {
                    var r = (t = JSON.parse(decodeURIComponent(t))).user_unique_id, i = t.web_id, o = t.timestamp; this._setToken(i, r, o)
                } else {
                    if (!e) return void this._requestWebId(); this.storage.setCookie(this.cookieKey, encodeURIComponent(JSON.stringify(e)), this.expiresTime, this.cookieDomain), this._checkLocal(e)
                } else {
                    if (!e) return void this._requestWebId(); this._checkLocal(e)
                }
            }, e.prototype._checkLocal = function (e) {
                var t = e.user_unique_id, n = e.web_id, r = e.timestamp; n && t ? this._setToken(n, t, r) : this._requestWebId()
            }, e.prototype._setToken = function (e, t, n) {
                if (this.checkExp) {
                    var r = Date.now() - parseFloat(n); if (r > 7344e6) return void this._requestWebId(); if (r > 432e7) return void this._updateWebId(e)
                } this.cfg.envInfo.user.user_unique_id = t, this.cfg.envInfo.user.web_id = e, this.storage.setItem(this.tokensKey, {
                    user_unique_id: t, web_id: e, timestamp: Date.now()
                }), this.tokenReady = !0
            }, e.prototype._requestWebId = function () {
                this.isNoWebid ? this._setTokenId(V()) : this._fetchWebId(this.fetchUrl, !1)
            }, e.prototype._updateWebId = function (e) {
                var t = "" + this.domain + A + "/" + e + "/update"; this._fetchWebId(t, !0)
            }, e.prototype._fetchWebId = function (e, t) {
                var n = this; j(e, 3e3, {
                    app_key: this.config.app_key, app_id: this.config.app_id, url: location.href, user_agent: window.navigator.userAgent, referer: document.referrer, user_unique_id: ""
                }, this.config.app_key, (function (e) {
                    e && 0 === e.e ? n._setTokenId(e.web_id) : (n.hook.emit("token-error"), console.warn("[]appid: " + n.config.app_id + ", " + (t ? " update" : "get") + " webid error, init error~"))
                }), (function () {
                    n.hook.emit("token-error"), console.warn("[]appid: " + n.config.app_id + ", get webid error, init error~")
                }), !0, !1, this.enable_ttwebid)
            }, e.prototype._setTtWid = function (e, t) {
                if (!t) {
                    var n = {
                        web_id: e.web_id || "", timestamp: Date.now()
                    }, r = e.user_unique_id || ""; this.cfg.envInfo.user.user_unique_id = this.cfg.envInfo.user.user_unique_id || r, this.storage.setCookie(this.cookieKey, encodeURIComponent(JSON.stringify(n)), 108e5, this.cookieDomain)
                } this.tokenReady = !0, this.hook.emit("token-ready")
            }, e.prototype._setTokenId = function (e) {
                var t = this.cfg.envInfo.user.web_id || e, n = {
                    web_id: t, user_unique_id: this.cfg.envInfo.user.user_unique_id || t, timestamp: Date.now()
                }; this.enableCookie && this.storage.setCookie(this.cookieKey, encodeURIComponent(JSON.stringify(n)), this.expiresTime, this.cookieDomain), this.storage.setItem(this.tokensKey, n), this.cfg.envInfo.user.web_id = this.cfg.envInfo.user.web_id || t, this.cfg.envInfo.user.user_unique_id = this.cfg.envInfo.user.user_unique_id || t, this.tokenReady = !0, this.hook.emit("token-ready")
            }, e.prototype._setUuid = function (e) {
                try {
                    var t = this.storage.getItem(this.tokensKey); if (e) {
                        "string" != typeof e && console.warn("user_unique_id must be string!!! please check"); var n = String(e); this.cfg.envInfo.user.user_unique_id = n, t && t.user_unique_id ? t.user_unique_id !== n && (t.user_unique_id = n, this.hook.emit("uuid-change")) : ((t = {
                        }).user_unique_id = n, this.hook.emit("uuid-change")), t.timestamp = Date.now(), this.storage.setItem(this.tokensKey, t), this.session._resetSessionId()
                    } else this._clearUuid(t)
                } catch (e) {
                }
            }, e.prototype._clearUuid = function (e) {
                this.enable_ttwebid || e && e.web_id && (this.cfg.envInfo.user.user_unique_id = e.web_id, e.user_unique_id = e.web_id, e.timestamp = Date.now(), this.storage.setItem(this.tokensKey, e))
            }, e.prototype._setWebid = function (e) {
                if (!this.enable_ttwebid) {
                    var t = this.storage.getItem(this.tokensKey), n = !1; t && t.web_id ? t.web_id !== e && (t.user_unique_id = t.web_id === t.user_unique_id ? e : t.user_unique_id, t.web_id = e, this.cfg.envInfo.user.user_unique_id && this.cfg.envInfo.user.user_unique_id !== this.cfg.envInfo.user.web_id || (this.cfg.envInfo.user.user_unique_id = e, n = !0)) : (t = {
                    }).web_id = e, t.timestamp = Date.now(), this.cfg.envInfo.user.web_id = e, this.storage.setItem(this.tokensKey, t), n && this.hook.emit("uuid-change")
                }
            }, e.prototype.isTokenReady = function () {
                return this.tokenReady
            }, e.prototype._getTobId = function (e) {
                var t = this.domain + "/tobid"; j(t, 3e4, {
                    app_id: this.config.app_id, user_unique_id: this.cfg.envInfo.user.user_unique_id, web_id: this.cfg.envInfo.user.web_id
                }, this.config.app_key, (function (t) {
                    t && 0 === t.e ? e(t.tobid) : e(null)
                }), (function () {
                    e(null)
                }), !0, !1, this.enable_ttwebid)
            }, e
        }(), B = function () {
            function e(e, t, n, r, i, o) {
                this.collect = e, this.cfg = n, this.config = t, this._token = r, this.appInfo = t.app_key || t.app_id, this.debugMode = !!t.log, this.evtDataKey = P(this.appInfo, !1); var a = t.channel_domain || H(Z[t.channel]); this.reportUrl = t.report_url ? t.report_url : a + "/v1/list", this.storage = new T(!0), this.EventStorage = new T(!1), this.maxStorage = t.max_storage_num || -1, this.maxReport = t.max_report || 20, this.reportTime = t.reportTime || 30, this.timeout = t.timeout || 0, this.closeStorage = !0, this.session = o, this.plugin = i, this.withCredentials = t.enable_ttwebid, this.addListener()
            } return e.prototype.addListener = function () {
                var e = this; window.addEventListener("unload", (function () {
                    e.report(!0)
                }), !1), function (e) {
                    navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ? window.addEventListener("pagehide", e, !1) : window.addEventListener("beforeunload", e, !1)
                }((function () {
                    e.report(!0)
                })), document.addEventListener("visibilitychange", (function () {
                    "hidden" === document.visibilityState && e.report(!0)
                }), !1)
            }, e.prototype.setReady = function () {
                this.isReady = !0, this.report()
            }, e.prototype.event = function (e) {
                var t = this; void 0 === e && (e = []); var n = L(e, this.storage.getItem(this.evtDataKey) || []); this.storage.setItem(this.evtDataKey, n), this.reportTimer && clearTimeout(this.reportTimer), n.length >= this.maxReport ? this.report(!1) : this.reportTimer = setTimeout((function () {
                    t.report(!1), t.reportTimer = null
                }), this.reportTime)
            }, e.prototype.beconEvent = function (e) {
                void 0 === e && (e = []); var t = this._mergeEvents(e); this._dealData(t, !0)
            }, e.prototype.report = function (e) {
                if (void 0 === e && (e = !1), !this.collect.destroyInstance && this._token.isTokenReady() && this.isReady) {
                    var t = this.storage.getItem(this.evtDataKey) || [], n = this._mergeEvents(t); this.storage.removeItem(this.evtDataKey), this._dealData(n, e)
                }
            }, e.prototype._mergeEvents = function (e) {
                var t = this; if (!e.length) return e; var n = this.cfg.get(); n.header.custom = JSON.stringify(n.header.custom); var r = []; return r.push(e), r.map((function (e) {
                    return {
                        events: e.map((function (e) {
                            var n = E({
                            }, t.cfg.get("evtParams"), e.params); return delete n.__disable_storage__, E({
                            }, e, {
                                params: JSON.stringify(n), session_id: t.session._getSessionId()
                            })
                        })), user: n.user, header: n.header, verbose: t.debugMode ? 1 : void 0, user_unique_type: t.config.enable_ttwebid ? t.config.user_unique_type : void 0
                    }
                }))
            }, e.prototype._dealData = function (e, t) {
                var n = this; if (!e.length) return e; e.map((function (e) {
                    var t = []; return t.push(e), t
                })).forEach((function (e) {
                    var r = V(); n._send(r, e, t)
                }))
            }, e.prototype._send = function (e, t, n) {
                var r = this; this.isSending = !0; var i = function () {
                    r.isSending = !1
                }; j(this.reportUrl, this.timeout, t, this.config.app_key, (function () {
                    i()
                }), (function (e, t) {
                    i(), r.cfg.get("reportErrorCallback")(e, t)
                }), !1, n, this.withCredentials, i)
            }, e.prototype.checkStorageEvent = function () {
            }, e
        }(), F = void 0, U = (new Date).getTimezoneOffset(), W = parseInt("" + -U / 60, 10), q = 60 * U, G = function () {
            function e(e, t, n) {
                this.cookieDomain = t.cookie_domain || "", this.initConfig = t; var r = function (e, t) {
                    var n, r, i = function (e) {
                        var t = document.createElement("a"); return t.href = e, t
                    }, o = window.screen.width, a = window.screen.height, s = window.navigator.appVersion, c = window.navigator.userAgent, u = window.navigator.language, l = document.referrer, f = l ? i(l).hostname : "", p = function (e) {
                        var t = i(e).search; t = t.slice(1); var n = {
                        }; return t.split("&").forEach((function (e) {
                            var t, r, i = e.split("="); i.length && (t = i[0], r = i[1]); try {
                                n[t] = decodeURIComponent(void 0 === r ? "" : r)
                            } catch (e) {
                                n[t] = r
                            }
                        })), n
                    }(window.location.href), h = "", d = "", g = "", v = "" + parseFloat(s); -1 !== (n = c.indexOf("Opera")) && (g = "Opera", v = c.substring(n + 6), -1 !== (n = c.indexOf("Version")) && (v = c.substring(n + 8))), -1 !== (n = c.indexOf("Edge")) ? (g = "Microsoft Edge", v = c.substring(n + 5)) : -1 !== (n = c.indexOf("MSIE")) ? (g = "Microsoft Internet Explorer", v = c.substring(n + 5)) : -1 !== c.indexOf("Chrome") ? -1 !== (n = c.indexOf("Chrome")) && (g = "Chrome", v = c.substring(n + 7)) : -1 !== c.indexOf("Safari") ? -1 !== (n = c.indexOf("Safari")) && (g = "Safari", v = c.substring(n + 7), -1 !== (n = c.indexOf("Version")) && (v = c.substring(n + 8))) : -1 !== (n = c.indexOf("Firefox")) && (g = "Firefox", v = c.substring(n + 8)), -1 !== (r = v.indexOf(";")) && (v = v.substring(0, r)), -1 !== (r = v.indexOf(" ")) && (v = v.substring(0, r)), -1 !== (r = v.indexOf(")")) && (v = v.substring(0, r)); for (var m, y, C = /Mobile|htc|mini|Android|iP(ad|od|hone)/.test(s) ? "wap" : "web", _ = [{
                        s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/
                    }, {
                        s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/
                    }, {
                        s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/
                    }, {
                        s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/
                    }, {
                        s: "Android", r: /Android/
                    }, {
                        s: "Sun OS", r: /SunOS/
                    }, {
                        s: "Linux", r: /(Linux|X11)/
                    }, {
                        s: "iOS", r: /(iPhone|iPad|iPod)/
                    }, {
                        s: "Mac OS X", r: /Mac OS X/
                    }, {
                        s: "Mac OS", r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
                    }], w = 0; w < _.length; w++) {
                        var b = _[w]; if (b.r.test(c)) {
                            h = b.s; break
                        }
                    } function k(e, t) {
                        var n = e.exec(t); return n && n[1] ? n[1] : ""
                    } switch (/Windows/.test(h) && (d = k(/Windows (.*)/, h), h = "windows"), h) {
                        case "Mac OS X": m = c, d = (y = RegExp("(?:^|[^A-Z0-9-_]|[^A-Z0-9-]_|sprd-)(?:Mac[ +]OS[ +]X(?:[ /](?:Version )?(\\d+(?:[_\\.]\\d+)+))?)", "i").exec(m)) ? y.slice(1)[0] : "", h = "mac"; break; case "Android": d = function (e) {
                            var t = k(/Android ([\.\_\d]+)/, e); return t || (t = k(/Android\/([\.\_\d]+)/, e)), t
                        }(c), h = "android"; break; case "iOS": d = (d = /OS (\d+)_(\d+)_?(\d+)?/.exec(s)) ? d[1] + "." + d[2] + "." + (0 | d[3]) : "", h = "ios"
                    }var E = function (e, t, n) {
                        var r = new T(!1), i = new T(!1, "session"), o = e ? "_tea_utm_cache_" + e : "_tea_utm_cache", a = e ? "_$utm_from_url_" + e : "_$utm_from_url", s = {
                        }, c = ["tr_shareuser", "tr_admaster", "tr_param1", "tr_param2", "tr_param3", "tr_param4", "$utm_from_url"], u = {
                            utm_source: t.utm_source, utm_medium: t.utm_medium, utm_campaign: t.utm_campaign, utm_term: t.utm_term, utm_content: t.utm_content, tr_shareuser: t.tr_shareuser, tr_admaster: t.tr_admaster, tr_param1: t.tr_param1, tr_param2: t.tr_param2, tr_param3: t.tr_param3, tr_param4: t.tr_param4
                        }; try {
                            var l = !1; for (var f in u) u[f] && (-1 !== c.indexOf(f) ? (s.hasOwnProperty("tracer_data") || (s.tracer_data = {
                            }), s.tracer_data[f] = u[f]) : s[f] = u[f], l = !0); if (l) i.setItem(a, "1"), r.setCookie(o, JSON.stringify(s), 7776e6, n); else {
                                var p = r.getCookie(o, n); p && (s = JSON.parse(p))
                            } i.getItem(a) && (s.tracer_data.$utm_from_url = 1)
                        } catch (e) {
                            return u
                        } return s
                    }(e, p, t); return {
                        browser: g, browser_version: v, platform: C, os_name: h, os_version: d, userAgent: c, screen_width: o, screen_height: a, device_model: function (e) {
                            var t = ""; try {
                                if ("android" === e) navigator.userAgent.split(";").forEach((function (e) {
                                    e.indexOf("Build/") > -1 && (t = e.slice(0, e.indexOf("Build/")))
                                })); else if ("ios" === e || "mac" === e) {
                                    var n = navigator.userAgent.replace("Mozilla/5.0 (", ""), r = n.indexOf(";"); t = n.slice(0, r)
                                }
                            } catch (e) {
                            } return t.trim()
                        }(h), language: u, referrer: l, referrer_host: f, utm_source: E.utm_source, utm_medium: E.utm_medium, utm_campaign: E.utm_campaign, utm_term: E.utm_term, utm_content: E.utm_content
                    }
                }(e, this.cookieDomain); this.configKey = function (e) {
                    return "__tea_cache_config_" + e
                }("" + e), this.sessionStorage = new T(!1, "session"), this.localStorage = new T(!1, "local"), n && (this.storage = 1 === n ? this.sessionStorage : this.localStorage), this.envInfo = {
                    user: {
                        user_unique_id: F, user_type: F, user_id: F, user_is_auth: F, user_is_login: F, device_id: F, web_id: F, ip_addr_id: F
                    }, header: {
                        app_id: F, app_name: F, app_install_id: F, install_id: F, app_package: F, app_channel: F, app_version: F, os_name: r.os_name, os_version: r.os_version, device_model: r.device_model, ab_client: F, ab_version: F, ab_sdk_version: F, traffic_type: F, client_ip: F, device_brand: F, os_api: F, access: F, language: r.language, region: F, app_language: F, app_region: F, creative_id: F, ad_id: F, campaign_id: F, log_type: F, rnd: F, platform: r.platform, sdk_version: "4.1.39_tcpy", sdk_lib: "js", province: F, city: F, timezone: W, tz_offset: q, tz_name: F, sim_region: F, carrier: F, resolution: r.screen_width + "x" + r.screen_height, browser: r.browser, browser_version: r.browser_version, referrer: r.referrer, referrer_host: r.referrer_host, width: r.screen_width, height: r.screen_height, screen_width: r.screen_width, screen_height: r.screen_height, utm_term: r.utm_term, utm_content: r.utm_content, utm_source: r.utm_source, utm_medium: r.utm_medium, utm_campaign: r.utm_campaign, tracer_data: JSON.stringify(r.tracer_data), custom: {
                        }
                    }
                }, this.evtParams = {
                }, this.reportErrorCallback = function () {
                }
            } return e.prototype.set = function (e, t) {
                var n = this; if (t || (this.delete(e), t = void 0), "evtParams" === e || "_staging_flag" === e) {
                    var r; r = "evtParams" === e ? t : {
                        _staging_flag: Number(t)
                    }; var i = E({
                    }, r); Object.keys(i).forEach((function (e) {
                        n.evtParams[e] = i[e]
                    }))
                } else if ("reportErrorCallback" === e && "function" == typeof t) this.reportErrorCallback = t; else {
                    var o = ""; if (e.indexOf(".") > -1) {
                        var a = e.split("."); o = a[0], e = a[1]
                    } "os_version" === e && (e = "" + t), o ? "user" === o || "header" === o ? this.envInfo[o][e] = t : this.envInfo.header.custom[e] = t : this.envInfo.user.hasOwnProperty(e) ? ["user_type", "ip_addr_id"].indexOf(e) > -1 ? this.envInfo.user[e] = t ? Number(t) : t : ["user_id"].indexOf(e) > -1 ? this.envInfo.user[e] = t ? String(t) : t : ["user_is_auth", "user_is_login"].indexOf(e) > -1 ? this.envInfo.user[e] = Boolean(t) : "device_id" === e && (this.envInfo.user[e] = t) : this.envInfo.header.hasOwnProperty(e) ? this.envInfo.header[e] = t : this.envInfo.header.custom[e] = t
                }
            }, e.prototype.get = function (e) {
                try {
                    return e ? "evtParams" === e ? this.evtParams : "reportErrorCallback" === e ? this[e] : JSON.parse(JSON.stringify(this.envInfo[e])) : JSON.parse(JSON.stringify(this.envInfo))
                } catch (e) {
                    console.log("get config stringify error ")
                }
            }, e.prototype.setStore = function (e) {
                try {
                    var t = this.storage.getItem(this.configKey); if (Object.keys(e).length) {
                        var n = Object.assign(e, t); this.storage.setItem(this.configKey, n)
                    }
                } catch (e) {
                }
            }, e.prototype.getStore = function () {
                try {
                    var e = this.storage.getItem(this.configKey); return Object.keys(e).length ? e : null
                } catch (e) {
                    return null
                }
            }, e.prototype.delete = function (e) {
                try {
                    var t = this.storage.getItem(this.configKey); t && t.hasOwnProperty(e) && (delete t[e], this.storage.setItem(this.configKey, t))
                } catch (e) {
                }
            }, e
        }(), J = function () {
            function e(e, t) {
                this.isLog = t, this.name = e || ""
            } var t = e.prototype; return t.info = function (e) {
                this.isLog && console.log("[" + this.name + "] " + e)
            }, t.warn = function (e) {
                this.isLog && console.warn("[" + this.name + "] " + e)
            }, t.error = function (e) {
                this.isLog && console.error("[" + this.name + "] " + e)
            }, t.throw = function (e) {
                throw this.error(this.name), new Error(e)
            }, e
        }(), X = function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function (e) {
                var t = 16 * Math.random() | 0; return ("x" === e ? t : 3 & t | 8).toString(16)
            }))
        }, Y = function () {
            function e(e, t) {
                this.storage = new T(!1, "session"), this.sessionKey = function (e) {
                    return "__tea_session_id_" + e
                }(e), this.disableSession = t.disable_session, this.expireTime = t.expireTime || 18e5, this.disableSession || this._setSessionId()
            } return e.prototype._updateSessionId = function () {
                var e = this.storage.getItem(this.sessionKey); if (e && e.sessionId) {
                    var t = e.timestamp; Date.now() - t > this.expireTime ? e = {
                        sessionId: X(), timestamp: Date.now()
                    } : e.timestamp = Date.now(), this.storage.setItem(this.sessionKey, e), this._resetExpTime()
                }
            }, e.prototype._setSessionId = function () {
                var e = this, t = this.storage.getItem(this.sessionKey); t && t.sessionId ? t.timestamp = Date.now() : t = {
                    sessionId: X(), timestamp: Date.now()
                }, this.storage.setItem(this.sessionKey, t), this.sessionExp = setInterval((function () {
                    e._checkEXp()
                }), this.expireTime)
            }, e.prototype._getSessionId = function () {
                if (this.disableSession) return ""; var e = this.storage.getItem(this.sessionKey); return e && e.sessionId ? e.sessionId : null
            }, e.prototype._resetExpTime = function () {
                var e = this; this.sessionExp && (clearInterval(this.sessionExp), this.sessionExp = setInterval((function () {
                    e._checkEXp()
                }), this.expireTime))
            }, e.prototype._resetSessionId = function () {
                var e = {
                    sessionId: X(), timestamp: Date.now()
                }; this.storage.setItem(this.sessionKey, e)
            }, e.prototype._checkEXp = function () {
                var e = this.storage.getItem(this.sessionKey); if (e && e.sessionId) {
                    var t = Date.now() - e.timestamp; t + 30 >= this.expireTime && (console.log(t), e = {
                        sessionId: X(), timestamp: Date.now()
                    }, this.storage.setItem(this.sessionKey, e))
                }
            }, e
        }(), Q = function () {
            function e() {
                this._hooks = {
                }
            } return e.prototype.on = function (e, t) {
                e && t && "function" == typeof t && (this._hooks[e] || (this._hooks[e] = []), this._hooks[e].push(t))
            }, e.prototype.once = function (e, t) {
                var n = this; e && t && "function" == typeof t && this.on(e, (function r(i) {
                    t(i), n.off(e, r)
                }))
            }, e.prototype.off = function (e, t) {
                if (e && this._hooks[e] && this._hooks[e].length) if (t) {
                    var n = this._hooks[e].indexOf(t); -1 !== n && this._hooks[e].splice(n, 1)
                } else this._hooks[e] = []
            }, e.prototype.emit = function (e, t) {
                e && this._hooks[e] && this._hooks[e].length && L(this._hooks[e]).forEach((function (e) {
                    try {
                        e(t)
                    } catch (e) {
                    }
                }))
            }, e
        }(), $ = L(["init", "config", "send", "start", "predefinePageView", "beconEvent", "resetStayDuration"], ["profileSet", "profileSetOnce", "profileIncrement", "profileUnset", "profileAppend", "getVar", "getAbSdkVersion", "onAbSdkVersionChange", "offAbSdkVersionChange", "getABconfig", "openOverlayer", "closeOverlayer", "getAllVars", "setExternalAbVersion", "getToken", "destroy"]), ee = function () {
            var e = +Date.now() + Number(("" + Math.random()).slice(2, 8)); return function () {
                return e += 1
            }
        }(), te = function () {
            function e(e) {
                var t = this; this.staging = !1, this._getToken = !1, this.sdkload = !1, this.initPv = !0, this.predefinePageView = function (e) {
                    void 0 === e && (e = {
                    }); var n = E({
                        title: document.title || location.pathname, url: location.href, url_path: location.pathname, time: Date.now(), referrer: window.document.referrer
                    }, t._event.closeStorage ? {
                    } : {
                        __disable_storage__: 1
                    }, {
                        $is_first_time: "" + t.is_first_time
                    }), r = E({
                    }, n, e); t.event("predefine_pageview", r, !0)
                }, this.getToken = function (e, t) {
                }, this.name = e, this._isSend = !1, this.autoPV = !0, this.hook = new Q, this.storage = new T(!1)
            } return e.prototype.init = function (e) {
                var t = this; if (!this._inited) {
                    if (this._inited = !0, !e || "object" != typeof e) throw new Error("init params is error,please check"); var n = e.app_id, r = e.app_key, i = e.log; this._config = new G(n, e, e.configPersist || 0), this.logger = new J(this.name, i), r || n ? n && "number" != typeof n ? this.logger.warn("app_id param is error,must be number,please check ") : (r && "string" != typeof r && this.logger.warn("app_key is empty"), e.channel_domain || -1 !== ["sg", "va", "in"].indexOf(e.channel) || (this.logger.warn("channel must be `sg`,`va`,`in`"), e.channel = "sg"), this._config.set("app_id", n), this._initConfig = e, this.storage.getItem("__tea_cache_first_" + n) ? this.is_first_time = !1 : (this.is_first_time = !0, this.storage.setItem("__tea_cache_first_" + n, "1")), this.sdkload = !0, this.hook.on("token-ready", (function () {
                        t.callbackSend ? t._isSend ? t._event && t._event.report() : t.start() : t._event && t._event.report()
                    })), this._session = new Y(r || n, e), this._token = new K(e, this._config, this.hook, this._session), this._event = new B(this, e, this._config, this._token, this.plugin, this._session), this._token._getToken()) : this.logger.warn("no app_key or app_id please check")
                }
            }, e.prototype.config = function (e) {
                if (this._inited) if (e && "object" == typeof e) {
                    e.disable_auto_pv && (this.autoPV = !1, delete e.disable_auto_pv), e._staging_flag && 1 === e._staging_flag && (this.staging = !0); var t = E({
                    }, e); if (this.configPersist) {
                        var n = this._config.getStore(); n && (t = Object.assign(n, e)), this._config.setStore(e)
                    } for (var r in t) "user_unique_id" !== r ? "web_id" !== r ? this._config.set(r, t[r]) : this._token._setWebid(t[r]) : this._token._setUuid(t[r])
                } else this.logger.warn("config params is error, please check"); else this.logger.warn("config must be use after function init")
            }, e.prototype.send = function () {
                this.start()
            }, e.prototype.start = function () {
                var e = this; if (this._token.isTokenReady()) {
                    if (this._isSend) return; this._isSend = !0, this.logger.info("appid:" + this._initConfig.app_id + ", userInfo:" + JSON.stringify(this._config.get("user"))), this.logger.info("sdk is ready,version is 4.1.39_tcpy. you can report now !!!"), this._event.setReady(), this.autoPV && (this.predefinePageView(), this.initPv = !1), this.hook.on("uuid-change", (function () {
                        if (!e.initPv) {
                            var t = {
                                title: document.title || location.pathname, url: location.href, url_path: location.pathname, time: Date.now(), referrer: window.document.referrer, $is_first_time: "" + e.is_first_time
                            }; e.beconEvent("predefine_pageview", t)
                        }
                    })), this._getToken && this.hook.emit("get-token")
                } else this.callbackSend = !0
            }, e.prototype.beconEvent = function (e, t) {
                var n = []; n.push([e, t]), this._dealEvent(!0, n)
            }, e.prototype.event = function () {
                for (var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t]; var n = x(e, 1)[0], r = []; "Array" !== Object.prototype.toString.call(n).slice(8, -1) ? r[0] = e : r = e, this._dealEvent(!1, r)
            }, e.prototype._dealEvent = function (e, t) {
                var n = this; try {
                    t = t.map((function (e) {
                        var t = e[0]; /^event\./.test(e[0]) && (t = e[0].slice(6)); var r, i = e[1]; return "object" != typeof i && (i = {
                        }), i.profile ? delete i.profile : i.event_index = ee(), i.local_ms ? (r = i.local_ms, delete i.local_ms) : r = +new Date, {
                            event: t, params: i, local_time_ms: r, is_bav: n._initConfig.autotrack ? 1 : 0
                        }
                    })), e ? this._event.beconEvent(t) : this._event.event(t), this._session._updateSessionId()
                } catch (e) {
                }
            }, e.prototype.resetStayDuration = function (e, t, n) {
            }, e.prototype.setExternalAbVersion = function (e) {
            }, e.prototype.getABconfig = function (e, t) {
            }, e.prototype.getVar = function (e, t, n) {
            }, e.prototype.getAbSdkVersion = function (e) {
            }, e.prototype.onAbSdkVersionChange = function (e) {
            }, e.prototype.offAbSdkVersionChange = function (e) {
            }, e.prototype.openOverlayer = function () {
            }, e.prototype.closeOverlayer = function () {
            }, e.prototype.getAllVars = function (e) {
            }, e.prototype.profileSet = function (e) {
            }, e.prototype.profileSetOnce = function (e) {
            }, e.prototype.profileIncrement = function (e) {
            }, e.prototype.profileUnset = function (e) {
            }, e.prototype.profileAppend = function (e) {
            }, e.prototype.destroy = function () {
                this.destroyInstance || (this.destroyInstance = !0)
            }, e
        }(), ne = function (e) {
            var t = this; return k(this, "_exportCollect", (function () {
                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)n[r] = arguments[r]; t._isProcess ? t._executeCmd.apply(t, n) : (t.cmdQueue.push(n), t._processCmd())
            })), k(this, "_processCmd", (function () {
                if (0 !== t.cmdQueue.length) {
                    var e, n, r = (e = t.cmdQueue, n = -1, e.forEach((function (e, t) {
                        "init" === e[0] && (n = t)
                    })), n); -1 !== r && (t._isProcess = !0, t._executeCmd.apply(t, t.cmdQueue[r]), t.cmdQueue.forEach((function (e, n) {
                        n !== r && t._executeCmd.apply(t, e)
                    })), t.cmdQueue = [])
                }
            })), k(this, "_executeCmd", (function () {
                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)n[r] = arguments[r]; var i, o, a = n[0]; $.indexOf(a) > -1 ? (i = t.colloctor)[a].apply(i, n.slice(1)) : (o = t.colloctor).event.apply(o, n)
            })), this.cmdQueue = [], this.name = e, this.colloctor = new te(e), this._isProcess = !1, this._alias = {
            }, this._processCmd(), $.forEach((function (e) {
                t._exportCollect[e] = t._exportCollect.bind(t, e)
            })), this._exportCollect
        }, re = new (function () {
            function e() {
            } return e.prototype.get = function (e) {
                if (localStorage && localStorage.getItem) return function (e) {
                    if ("string" == typeof e) try {
                        return JSON.parse(e)
                    } catch (t) {
                        return e || void 0
                    }
                }(localStorage.getItem(e))
            }, e.prototype.set = function (e, t) {
                localStorage && localStorage.setItem && localStorage.setItem(e, function (e) {
                    return JSON.stringify(e)
                }(t))
            }, e
        }()), ie = function (e) {
            function t(t, n, r, i, o, a) {
                var s = e.call(this, t) || this; return s.url = n, s.code = r, s.request = i, s.response = o, s.useWebCache = a, s.url = n, s.code = r, s.request = i, s.response = o, s.useWebCache = !!a, s
            } return i(t, e), t
        }(Error); function oe(e, t) {
            var n = t.timeout; return new Promise((function (t, r) {
                var i = new XMLHttpRequest; i.open("GET", e), i.withCredentials = !1, i.onreadystatechange = function () {
                    if (i && 4 === i.readyState && (0 !== i.status || i.responseURL && 0 === i.responseURL.indexOf("file:"))) {
                        var n, o = function (e) {
                            try {
                                return JSON.parse(e)
                            } catch (e) {
                                return {
                                }
                            }
                        }(i.responseText), a = (n = o).message && "object" == typeof n.message ? n : null; if (i.status < 200 || i.status >= 300 || !a) return function (e, t, n, r) {
                            var i = (r || {
                            }).message || ""; i = i ? ", reason is: ".concat(i) : "", t(new ie("Request failed with status code " + e.status + i, n, null, e, {
                                data: {
                                }
                            }, !0))
                        }(i, r, e, o), void (i = null); var s = {
                            data: a, status: i.status, statusText: i.statusText, request: i
                        }; t(s), i = null
                    }
                }, i.onerror = function () {
                    r(new ie("Network Error", e, null, i, {
                        data: {
                        }
                    }, !0)), i = null
                }, i.timeout = n, i.ontimeout = function () {
                    r(new ie("timeout of " + n + "ms exceeded", e, "ECONNABORTED", i)), i = null
                }, i.send()
            }))
        } var ae = function (e) {
            function t(t) {
                var n = t.test, r = t.TEAChannelDomain, i = t.mode; return t.tracker = r ? function (e) {
                    var t = e.isTest, n = e.channel_domain, r = n.includes("oversea") || n.includes("useast") ? 3297 : 3053, i = new ne("tracker"); return i.init({
                        app_id: r, channel_domain: n
                    }), i.config({
                        _staging_flag: t, enable_et_test: t
                    }), i.start(), i
                }({
                    isTest: n || "test" === i, channel_domain: r
                }) : function () {
                }, t.store || (t.store = re), t.request || (t.request = oe), e.call(this, t) || this
            } return i(t, e), t
        }(b)
    }, 86284: (e, t, n) => {
        n.d(t, {
            Z: () => i
        }); const r = "https://lf3-config.bytetcc.com/obj/tcc-config-web/tcc-v2-data-webcast.starling.proxy-default", i = class {
            constructor(e) {
                this.type = "afterLoad", this.tccUrl = r, this.condition = {
                }, this.tccUrl = e.tccUrl || r, this.condition = e.condition, this.tccKey = e.tccKey || "text_custom_config", this.expiredTime = e.expiredTime || 1e4
            } createRequest(e, t) {
                const {
                    timeout: n } = t, r = this.tccKey; return new Promise((function (t, i) {
                        const o = new XMLHttpRequest; o.open("GET", e), o.withCredentials = !1, o.onreadystatechange = function () {
                            if (!o || 4 !== o.readyState) return; let e = []; try {
                                const t = JSON.parse(o.responseText); e = JSON.parse(t.data[r])
                            } catch (e) {
                                i(e)
                            } o.status < 200 || o.status >= 300 ? i("server error") : t({
                                data: e
                            })
                        }, o.onerror = function (e) {
                            i(e)
                        }, o.timeout = n, o.ontimeout = function (e) {
                            i(e)
                        }, o.send()
                    }))
            } async getWithCache(e) {
                const t = `starling_tcc_${e}`, n = (e => {
                    try {
                        return JSON.parse(localStorage.getItem(e) || "")
                    } catch (e) {
                        return {
                        }
                    }
                })(t); try {
                    if (n && n.data && n.expiredTime && Date.now() - +n.expiredTime < this.expiredTime) return n.data; const e = await this.createRequest(this.tccUrl, {
                        timeout: 1e4
                    }); return ((e, t) => {
                        try {
                            localStorage.setItem(e, JSON.stringify(t))
                        } catch (e) {
                            console.log(e)
                        }
                    })(t, {
                        data: e.data, expiredTime: Date.now()
                    }), e.data
                } catch (e) {
                    return n && n.data ? n.data : (console.log(e), [])
                }
            } validate(e) {
                return Array.isArray(e) ? !(!this.condition || "object" != typeof this.condition || !Object.keys(this.condition).length) || (console.warn("condition should be an object"), !1) : (console.warn("tcc error: tcc config should be an array"), !1)
            } createRule(e) {
                return e.reduce(((e, t) => {
                    if (!Array.isArray(t.condition)) return e; const n = t.condition.reduce(((e, t) => e || this.condition[t.type] == t.value), !1), r = Object.assign({
                    }, e.replace, t.rule.replace || {
                    }), i = e.whitelist.concat(t.rule.whitelist || []); return n ? {
                        replace: r, whitelist: i
                    } : e
                }), {
                    replace: {
                    }, whitelist: []
                })
            } replaceByRule(e, t) {
                let n = ""; if (Object.keys(e).forEach((e => {
                    RegExp(e, "i").test(t) && (n = e.length > n.length ? e : n)
                })), n) {
                    const r = RegExp(n, "ig"); t = t.replace(r, e[n])
                } return t
            } async process(e, t) {
                const n = await this.getWithCache(t.apiKey || ""); if (!this.validate(n)) return e; const {
                    replace: r, whitelist: i } = this.createRule(n); return Object.keys(e).reduce(((t, n) => {
                        let o = e[n]; return i.includes(n) || (o = this.replaceByRule(r, o)), t[n] = o, t
                    }), {
                    })
            } processSync(e, t, n) {
                if (!this.validate(t)) return e; const {
                    replace: r, whitelist: i } = this.createRule(t); return i.includes(n) || (e = this.replaceByRule(r, e)), e
            }
        }
    }, 22296: (e, t, n) => {
        n.d(t, {
            ZP: () => Se
        }); var r = n(22556), i = n(52588), o = n(93682), a = n(73813), s = n(57202), c = n(26811), u = n(38293), l = n(97508), f = {
            type: "logger", log: function (e) {
                this.output("log", e)
            }, warn: function (e) {
                this.output("warn", e)
            }, error: function (e) {
                this.output("error", e)
            }, output: function (e, t) {
                console && console[e] && console[e].apply(console, t)
            }
        }, p = new (function () {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                }; (0, o.Z)(this, e), this.init(t, n)
            } return (0, a.Z)(e, [{
                key: "init", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    }; this.prefix = t.prefix || "i18next:", this.logger = e || f, this.options = t, this.debug = t.debug
                }
            }, {
                key: "setDebug", value: function (e) {
                    this.debug = e
                }
            }, {
                key: "log", value: function () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)t[n] = arguments[n]; return this.forward(t, "log", "", !0)
                }
            }, {
                key: "warn", value: function () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)t[n] = arguments[n]; return this.forward(t, "warn", "", !0)
                }
            }, {
                key: "error", value: function () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)t[n] = arguments[n]; return this.forward(t, "error", "")
                }
            }, {
                key: "deprecate", value: function () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)t[n] = arguments[n]; return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
                }
            }, {
                key: "forward", value: function (e, t, n, r) {
                    return r && !this.debug ? null : ("string" == typeof e[0] && (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])), this.logger[t](e))
                }
            }, {
                key: "create", value: function (t) {
                    return new e(this.logger, (0, i.Z)({
                    }, {
                        prefix: "".concat(this.prefix, ":").concat(t, ":")
                    }, this.options))
                }
            }]), e
        }()), h = function () {
            function e() {
                (0, o.Z)(this, e), this.observers = {
                }
            } return (0, a.Z)(e, [{
                key: "on", value: function (e, t) {
                    var n = this; return e.split(" ").forEach((function (e) {
                        n.observers[e] = n.observers[e] || [], n.observers[e].push(t)
                    })), this
                }
            }, {
                key: "off", value: function (e, t) {
                    this.observers[e] && (t ? this.observers[e] = this.observers[e].filter((function (e) {
                        return e !== t
                    })) : delete this.observers[e])
                }
            }, {
                key: "emit", value: function (e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)n[r - 1] = arguments[r]; if (this.observers[e]) {
                        var i = [].concat(this.observers[e]); i.forEach((function (e) {
                            e.apply(void 0, n)
                        }))
                    } if (this.observers["*"]) {
                        var o = [].concat(this.observers["*"]); o.forEach((function (t) {
                            t.apply(t, [e].concat(n))
                        }))
                    }
                }
            }]), e
        }(); function d() {
            var e, t, n = new Promise((function (n, r) {
                e = n, t = r
            })); return n.resolve = e, n.reject = t, n
        } function g(e) {
            return null == e ? "" : "" + e
        } function v(e, t, n) {
            e.forEach((function (e) {
                t[e] && (n[e] = t[e])
            }))
        } function m(e, t, n) {
            function r(e) {
                return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e
            } function i() {
                return !e || "string" == typeof e
            } for (var o = "string" != typeof t ? [].concat(t) : t.split("."); o.length > 1;) {
                if (i()) return {
                }; var a = r(o.shift()); !e[a] && n && (e[a] = new n), e = Object.prototype.hasOwnProperty.call(e, a) ? e[a] : {
                }
            } return i() ? {
            } : {
                obj: e, k: r(o.shift())
            }
        } function y(e, t, n) {
            var r = m(e, t, Object); r.obj[r.k] = n
        } function C(e, t) {
            var n = m(e, t), r = n.obj, i = n.k; if (r) return r[i]
        } function _(e, t, n) {
            var r = C(e, n); return void 0 !== r ? r : C(t, n)
        } function w(e, t, n) {
            for (var r in t) "__proto__" !== r && "constructor" !== r && (r in e ? "string" == typeof e[r] || e[r] instanceof String || "string" == typeof t[r] || t[r] instanceof String ? n && (e[r] = t[r]) : w(e[r], t[r], n) : e[r] = t[r]); return e
        } function b(e) {
            return e.replace(/[\-\[\]\/\{\} \(\) \*\+\?\.\\\^\$\|]/g, "\\$&")
        } var k = {
            "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;"
        }; function E(e) {
            return "string" == typeof e ? e.replace(/[&<>"'\/]/g, (function (e) {
                return k[e]
            })) : e
        } var x = "undefined" != typeof window && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1, L = function (e) {
            function t(e) {
                var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    ns: ["translation"], defaultNS: "translation"
                }; return (0, o.Z)(this, t), n = (0, s.Z)(this, (0, c.Z)(t).call(this)), x && h.call((0, u.Z)(n)), n.data = e || {
                }, n.options = r, void 0 === n.options.keySeparator && (n.options.keySeparator = "."), n
            } return (0, l.Z)(t, e), (0, a.Z)(t, [{
                key: "addNamespaces", value: function (e) {
                    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                }
            }, {
                key: "removeNamespaces", value: function (e) {
                    var t = this.options.ns.indexOf(e); t > -1 && this.options.ns.splice(t, 1)
                }
            }, {
                key: "getResource", value: function (e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                    }, i = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator, o = [e, t]; return n && "string" != typeof n && (o = o.concat(n)), n && "string" == typeof n && (o = o.concat(i ? n.split(i) : n)), e.indexOf(".") > -1 && (o = e.split(".")), C(this.data, o)
                }
            }, {
                key: "addResource", value: function (e, t, n, r) {
                    var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                        silent: !1
                    }, o = this.options.keySeparator; void 0 === o && (o = "."); var a = [e, t]; n && (a = a.concat(o ? n.split(o) : n)), e.indexOf(".") > -1 && (r = t, t = (a = e.split("."))[1]), this.addNamespaces(t), y(this.data, a, r), i.silent || this.emit("added", e, t, n, r)
                }
            }, {
                key: "addResources", value: function (e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                        silent: !1
                    }; for (var i in n) "string" != typeof n[i] && "[object Array]" !== Object.prototype.toString.apply(n[i]) || this.addResource(e, t, i, n[i], {
                        silent: !0
                    }); r.silent || this.emit("added", e, t, n)
                }
            }, {
                key: "addResourceBundle", value: function (e, t, n, r, o) {
                    var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                        silent: !1
                    }, s = [e, t]; e.indexOf(".") > -1 && (r = n, n = t, t = (s = e.split("."))[1]), this.addNamespaces(t); var c = C(this.data, s) || {
                    }; r ? w(c, n, o) : c = (0, i.Z)({
                    }, c, n), y(this.data, s, c), a.silent || this.emit("added", e, t, n)
                }
            }, {
                key: "removeResourceBundle", value: function (e, t) {
                    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t)
                }
            }, {
                key: "hasResourceBundle", value: function (e, t) {
                    return void 0 !== this.getResource(e, t)
                }
            }, {
                key: "getResourceBundle", value: function (e, t) {
                    return t || (t = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? (0, i.Z)({
                    }, {
                    }, this.getResource(e, t)) : this.getResource(e, t)
                }
            }, {
                key: "getDataByLanguage", value: function (e) {
                    return this.data[e]
                }
            }, {
                key: "toJSON", value: function () {
                    return this.data
                }
            }]), t
        }(h), O = {
            processors: {
            }, addPostProcessor: function (e) {
                this.processors[e.name] = e
            }, handle: function (e, t, n, r, i) {
                var o = this; return e.forEach((function (e) {
                    o.processors[e] && (t = o.processors[e].process(t, n, r, i))
                })), t
            }
        }, N = {
        }, S = function (e) {
            function t(e) {
                var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                }; return (0, o.Z)(this, t), n = (0, s.Z)(this, (0, c.Z)(t).call(this)), x && h.call((0, u.Z)(n)), v(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, (0, u.Z)(n)), n.options = r, void 0 === n.options.keySeparator && (n.options.keySeparator = "."), n.logger = p.create("translator"), n
            } return (0, l.Z)(t, e), (0, a.Z)(t, [{
                key: "changeLanguage", value: function (e) {
                    e && (this.language = e)
                }
            }, {
                key: "exists", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        interpolation: {
                        }
                    }, n = this.resolve(e, t); return n && void 0 !== n.res
                }
            }, {
                key: "extractFromKey", value: function (e, t) {
                    var n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator; void 0 === n && (n = ":"); var r = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator, i = t.ns || this.options.defaultNS; if (n && e.indexOf(n) > -1) {
                        var o = e.match(this.interpolator.nestingRegexp); if (o && o.length > 0) return {
                            key: e, namespaces: i
                        }; var a = e.split(n); (n !== r || n === r && this.options.ns.indexOf(a[0]) > -1) && (i = a.shift()), e = a.join(r)
                    } return "string" == typeof i && (i = [i]), {
                        key: e, namespaces: i
                    }
                }
            }, {
                key: "translate", value: function (e, n, o) {
                    var a = this; if ("object" !== (0, r.Z)(n) && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), n || (n = {
                    }), null == e) return ""; Array.isArray(e) || (e = [String(e)]); var s = void 0 !== n.keySeparator ? n.keySeparator : this.options.keySeparator, c = this.extractFromKey(e[e.length - 1], n), u = c.key, l = c.namespaces, f = l[l.length - 1], p = n.lng || this.language, h = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode; if (p && "cimode" === p.toLowerCase()) {
                        if (h) {
                            var d = n.nsSeparator || this.options.nsSeparator; return f + d + u
                        } return u
                    } var g = this.resolve(e, n), v = g && g.res, m = g && g.usedKey || u, y = g && g.exactUsedKey || u, C = Object.prototype.toString.apply(v), _ = ["[object Number]", "[object Function]", "[object RegExp]"], w = void 0 !== n.joinArrays ? n.joinArrays : this.options.joinArrays, b = !this.i18nFormat || this.i18nFormat.handleAsObject, k = "string" != typeof v && "boolean" != typeof v && "number" != typeof v; if (b && v && k && _.indexOf(C) < 0 && ("string" != typeof w || "[object Array]" !== C)) {
                        if (!n.returnObjects && !this.options.returnObjects) return this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(m, v, n) : "key '".concat(u, " (").concat(this.language, ")' returned an object instead of string."); if (s) {
                            var E = "[object Array]" === C, x = E ? [] : {
                            }, L = E ? y : m; for (var O in v) if (Object.prototype.hasOwnProperty.call(v, O)) {
                                var N = "".concat(L).concat(s).concat(O); x[O] = this.translate(N, (0, i.Z)({
                                }, n, {
                                    joinArrays: !1, ns: l
                                })), x[O] === N && (x[O] = v[O])
                            } v = x
                        }
                    } else if (b && "string" == typeof w && "[object Array]" === C) (v = v.join(w)) && (v = this.extendTranslation(v, e, n, o)); else {
                        var S = !1, I = !1, R = void 0 !== n.count && "string" != typeof n.count, M = t.hasDefaultValue(n), T = R ? this.pluralResolver.getSuffix(p, n.count) : "", Z = n["defaultValue".concat(T)] || n.defaultValue; !this.isValidLookup(v) && M && (S = !0, v = Z), this.isValidLookup(v) || (I = !0, v = u); var A = M && Z !== v && this.options.updateMissing; if (I || S || A) {
                            if (this.logger.log(A ? "updateKey" : "missingKey", p, f, u, A ? Z : v), s) {
                                var P = this.resolve(u, (0, i.Z)({
                                }, n, {
                                    keySeparator: !1
                                })); P && P.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                            } var D = [], j = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language); if ("fallback" === this.options.saveMissingTo && j && j[0]) for (var z = 0; z < j.length; z++)D.push(j[z]); else "all" === this.options.saveMissingTo ? D = this.languageUtils.toResolveHierarchy(n.lng || this.language) : D.push(n.lng || this.language); var V = function (e, t, r) {
                                a.options.missingKeyHandler ? a.options.missingKeyHandler(e, f, t, A ? r : v, A, n) : a.backendConnector && a.backendConnector.saveMissing && a.backendConnector.saveMissing(e, f, t, A ? r : v, A, n), a.emit("missingKey", e, f, t, v)
                            }; this.options.saveMissing && (this.options.saveMissingPlurals && R ? D.forEach((function (e) {
                                a.pluralResolver.getSuffixes(e).forEach((function (t) {
                                    V([e], u + t, n["defaultValue".concat(t)] || Z)
                                }))
                            })) : V(D, u, Z))
                        } v = this.extendTranslation(v, e, n, g, o), I && v === u && this.options.appendNamespaceToMissingKey && (v = "".concat(f, ":").concat(u)), I && this.options.parseMissingKeyHandler && (v = this.options.parseMissingKeyHandler(v))
                    } return v
                }
            }, {
                key: "extendTranslation", value: function (e, t, n, r, o) {
                    var a = this; if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, n, r.usedLng, r.usedNS, r.usedKey, {
                        resolved: r
                    }); else if (!n.skipInterpolation) {
                        n.interpolation && this.interpolator.init((0, i.Z)({
                        }, n, {
                            interpolation: (0, i.Z)({
                            }, this.options.interpolation, n.interpolation)
                        })); var s, c = n.interpolation && n.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables; if (c) {
                            var u = e.match(this.interpolator.nestingRegexp); s = u && u.length
                        } var l = n.replace && "string" != typeof n.replace ? n.replace : n; if (this.options.interpolation.defaultVariables && (l = (0, i.Z)({
                        }, this.options.interpolation.defaultVariables, l)), e = this.interpolator.interpolate(e, l, n.lng || this.language, n), c) {
                            var f = e.match(this.interpolator.nestingRegexp); s < (f && f.length) && (n.nest = !1)
                        } !1 !== n.nest && (e = this.interpolator.nest(e, (function () {
                            for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++)r[i] = arguments[i]; return o && o[0] === r[0] && !n.context ? (a.logger.warn("It seems you are nesting recursively key: ".concat(r[0], " in key: ").concat(t[0])), null) : a.translate.apply(a, r.concat([t]))
                        }), n)), n.interpolation && this.interpolator.reset()
                    } var p = n.postProcess || this.options.postProcess, h = "string" == typeof p ? [p] : p; return null != e && h && h.length && !1 !== n.applyPostProcessor && (e = O.handle(h, e, t, this.options && this.options.postProcessPassResolved ? (0, i.Z)({
                        i18nResolved: r
                    }, n) : n, this)), e
                }
            }, {
                key: "resolve", value: function (e) {
                    var t, n, r, i, o, a = this, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    }; return "string" == typeof e && (e = [e]), e.forEach((function (e) {
                        if (!a.isValidLookup(t)) {
                            var c = a.extractFromKey(e, s), u = c.key; n = u; var l = c.namespaces; a.options.fallbackNS && (l = l.concat(a.options.fallbackNS)); var f = void 0 !== s.count && "string" != typeof s.count, p = void 0 !== s.context && "string" == typeof s.context && "" !== s.context, h = s.lngs ? s.lngs : a.languageUtils.toResolveHierarchy(s.lng || a.language, s.fallbackLng); l.forEach((function (e) {
                                a.isValidLookup(t) || (o = e, !N["".concat(h[0], "-").concat(e)] && a.utils && a.utils.hasLoadedNamespace && !a.utils.hasLoadedNamespace(o) && (N["".concat(h[0], "-").concat(e)] = !0, a.logger.warn('key "'.concat(n, '" for languages "').concat(h.join(", "), '" won\'t get resolved as namespace "').concat(o, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), h.forEach((function (n) {
                                    if (!a.isValidLookup(t)) {
                                        i = n; var o, c, l = u, h = [l]; for (a.i18nFormat && a.i18nFormat.addLookupKeys ? a.i18nFormat.addLookupKeys(h, u, n, e, s) : (f && (o = a.pluralResolver.getSuffix(n, s.count)), f && p && h.push(l + o), p && h.push(l += "".concat(a.options.contextSeparator).concat(s.context)), f && h.push(l += o)); c = h.pop();)a.isValidLookup(t) || (r = c, t = a.getResource(n, e, c, s))
                                    }
                                })))
                            }))
                        }
                    })), {
                        res: t, usedKey: n, exactUsedKey: r, usedLng: i, usedNS: o
                    }
                }
            }, {
                key: "isValidLookup", value: function (e) {
                    return !(void 0 === e || !this.options.returnNull && null === e || !this.options.returnEmptyString && "" === e)
                }
            }, {
                key: "getResource", value: function (e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                    }; return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, r) : this.resourceStore.getResource(e, t, n, r)
                }
            }], [{
                key: "hasDefaultValue", value: function (e) {
                    var t = "defaultValue"; for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t === n.substring(0, t.length) && void 0 !== e[n]) return !0; return !1
                }
            }]), t
        }(h); function I(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        } var R = function () {
            function e(t) {
                (0, o.Z)(this, e), this.options = t, this.whitelist = this.options.supportedLngs || !1, this.supportedLngs = this.options.supportedLngs || !1, this.logger = p.create("languageUtils")
            } return (0, a.Z)(e, [{
                key: "getScriptPartFromCode", value: function (e) {
                    if (!e || e.indexOf("-") < 0) return null; var t = e.split("-"); return 2 === t.length ? null : (t.pop(), "x" === t[t.length - 1].toLowerCase() ? null : this.formatLanguageCode(t.join("-")))
                }
            }, {
                key: "getLanguagePartFromCode", value: function (e) {
                    if (!e || e.indexOf("-") < 0) return e; var t = e.split("-"); return this.formatLanguageCode(t[0])
                }
            }, {
                key: "formatLanguageCode", value: function (e) {
                    if ("string" == typeof e && e.indexOf("-") > -1) {
                        var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"], n = e.split("-"); return this.options.lowerCaseLng ? n = n.map((function (e) {
                            return e.toLowerCase()
                        })) : 2 === n.length ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = I(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(), 2 === n[1].length && (n[1] = n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = I(n[1].toLowerCase())), t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = I(n[2].toLowerCase()))), n.join("-")
                    } return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
                }
            }, {
                key: "isWhitelisted", value: function (e) {
                    return this.logger.deprecate("languageUtils.isWhitelisted", 'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.'), this.isSupportedCode(e)
                }
            }, {
                key: "isSupportedCode", value: function (e) {
                    return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
                }
            }, {
                key: "getBestMatchFromCodes", value: function (e) {
                    var t, n = this; return e ? (e.forEach((function (e) {
                        if (!t) {
                            var r = n.formatLanguageCode(e); n.options.supportedLngs && !n.isSupportedCode(r) || (t = r)
                        }
                    })), !t && this.options.supportedLngs && e.forEach((function (e) {
                        if (!t) {
                            var r = n.getLanguagePartFromCode(e); if (n.isSupportedCode(r)) return t = r; t = n.options.supportedLngs.find((function (e) {
                                if (0 === e.indexOf(r)) return e
                            }))
                        }
                    })), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t) : null
                }
            }, {
                key: "getFallbackCodes", value: function (e, t) {
                    if (!e) return []; if ("function" == typeof e && (e = e(t)), "string" == typeof e && (e = [e]), "[object Array]" === Object.prototype.toString.apply(e)) return e; if (!t) return e.default || []; var n = e[t]; return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || []
                }
            }, {
                key: "toResolveHierarchy", value: function (e, t) {
                    var n = this, r = this.getFallbackCodes(t || this.options.fallbackLng || [], e), i = [], o = function (e) {
                        e && (n.isSupportedCode(e) ? i.push(e) : n.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)))
                    }; return "string" == typeof e && e.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && o(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && o(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && o(this.getLanguagePartFromCode(e))) : "string" == typeof e && o(this.formatLanguageCode(e)), r.forEach((function (e) {
                        i.indexOf(e) < 0 && o(n.formatLanguageCode(e))
                    })), i
                }
            }]), e
        }(), M = [{
            lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"], nr: [1, 2], fc: 1
        }, {
            lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"], nr: [1, 2], fc: 2
        }, {
            lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"], nr: [1], fc: 3
        }, {
            lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"], nr: [1, 2, 5], fc: 4
        }, {
            lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5
        }, {
            lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6
        }, {
            lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7
        }, {
            lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8
        }, {
            lngs: ["fr"], nr: [1, 2], fc: 9
        }, {
            lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10
        }, {
            lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11
        }, {
            lngs: ["is"], nr: [1, 2], fc: 12
        }, {
            lngs: ["jv"], nr: [0, 1], fc: 13
        }, {
            lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14
        }, {
            lngs: ["lt"], nr: [1, 2, 10], fc: 15
        }, {
            lngs: ["lv"], nr: [1, 2, 0], fc: 16
        }, {
            lngs: ["mk"], nr: [1, 2], fc: 17
        }, {
            lngs: ["mnk"], nr: [0, 1, 2], fc: 18
        }, {
            lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19
        }, {
            lngs: ["or"], nr: [2, 1], fc: 2
        }, {
            lngs: ["ro"], nr: [1, 2, 20], fc: 20
        }, {
            lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21
        }, {
            lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22
        }], T = {
            1: function (e) {
                return Number(e > 1)
            }, 2: function (e) {
                return Number(1 != e)
            }, 3: function (e) {
                return 0
            }, 4: function (e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
            }, 5: function (e) {
                return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5)
            }, 6: function (e) {
                return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
            }, 7: function (e) {
                return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
            }, 8: function (e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
            }, 9: function (e) {
                return Number(e >= 2)
            }, 10: function (e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
            }, 11: function (e) {
                return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3)
            }, 12: function (e) {
                return Number(e % 10 != 1 || e % 100 == 11)
            }, 13: function (e) {
                return Number(0 !== e)
            }, 14: function (e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
            }, 15: function (e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
            }, 16: function (e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
            }, 17: function (e) {
                return Number(1 == e || e % 10 == 1 && e % 100 != 11 ? 0 : 1)
            }, 18: function (e) {
                return Number(0 == e ? 0 : 1 == e ? 1 : 2)
            }, 19: function (e) {
                return Number(1 == e ? 0 : 0 == e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3)
            }, 20: function (e) {
                return Number(1 == e ? 0 : 0 == e || e % 100 > 0 && e % 100 < 20 ? 1 : 2)
            }, 21: function (e) {
                return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
            }, 22: function (e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
            }
        }; function Z() {
            var e = {
            }; return M.forEach((function (t) {
                t.lngs.forEach((function (n) {
                    e[n] = {
                        numbers: t.nr, plurals: T[t.fc]
                    }
                }))
            })), e
        } var A = function () {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                }; (0, o.Z)(this, e), this.languageUtils = t, this.options = n, this.logger = p.create("pluralResolver"), this.rules = Z()
            } return (0, a.Z)(e, [{
                key: "addRule", value: function (e, t) {
                    this.rules[e] = t
                }
            }, {
                key: "getRule", value: function (e) {
                    return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                }
            }, {
                key: "needsPlural", value: function (e) {
                    var t = this.getRule(e); return t && t.numbers.length > 1
                }
            }, {
                key: "getPluralFormsOfKey", value: function (e, t) {
                    return this.getSuffixes(e).map((function (e) {
                        return t + e
                    }))
                }
            }, {
                key: "getSuffixes", value: function (e) {
                    var t = this, n = this.getRule(e); return n ? n.numbers.map((function (n) {
                        return t.getSuffix(e, n)
                    })) : []
                }
            }, {
                key: "getSuffix", value: function (e, t) {
                    var n = this, r = this.getRule(e); if (r) {
                        var i = r.noAbs ? r.plurals(t) : r.plurals(Math.abs(t)), o = r.numbers[i]; this.options.simplifyPluralSuffix && 2 === r.numbers.length && 1 === r.numbers[0] && (2 === o ? o = "plural" : 1 === o && (o = "")); var a = function () {
                            return n.options.prepend && o.toString() ? n.options.prepend + o.toString() : o.toString()
                        }; return "v1" === this.options.compatibilityJSON ? 1 === o ? "" : "number" == typeof o ? "_plural_".concat(o.toString()) : a() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === r.numbers.length && 1 === r.numbers[0] ? a() : this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString()
                    } return this.logger.warn("no plural rule found for: ".concat(e)), ""
                }
            }]), e
        }(), P = function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                }; (0, o.Z)(this, e), this.logger = p.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || function (e) {
                    return e
                }, this.init(t)
            } return (0, a.Z)(e, [{
                key: "init", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    }; e.interpolation || (e.interpolation = {
                        escapeValue: !0
                    }); var t = e.interpolation; this.escape = void 0 !== t.escape ? t.escape : E, this.escapeValue = void 0 === t.escapeValue || t.escapeValue, this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape, this.prefix = t.prefix ? b(t.prefix) : t.prefixEscaped || "{{", this.suffix = t.suffix ? b(t.suffix) : t.suffixEscaped || "}}", this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ", ", this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || " - ", this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "", this.nestingPrefix = t.nestingPrefix ? b(t.nestingPrefix) : t.nestingPrefixEscaped || b("$t("), this.nestingSuffix = t.nestingSuffix ? b(t.nestingSuffix) : t.nestingSuffixEscaped || b(")"), this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ", ", this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3, this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat, this.resetRegExp()
                }
            }, {
                key: "reset", value: function () {
                    this.options && this.init(this.options)
                }
            }, {
                key: "resetRegExp", value: function () {
                    var e = "".concat(this.prefix, "(.+?)").concat(this.suffix); this.regexp = new RegExp(e, "g"); var t = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix); this.regexpUnescape = new RegExp(t, "g"); var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix); this.nestingRegexp = new RegExp(n, "g")
                }
            }, {
                key: "interpolate", value: function (e, t, n, r) {
                    var i, o, a, s = this, c = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {
                    }; function u(e) {
                        return e.replace(/\$/g, "$$$$")
                    } var l = function (e) {
                        if (e.indexOf(s.formatSeparator) < 0) {
                            var i = _(t, c, e); return s.alwaysFormat ? s.format(i, void 0, n) : i
                        } var o = e.split(s.formatSeparator), a = o.shift().trim(), u = o.join(s.formatSeparator).trim(); return s.format(_(t, c, a), u, n, r)
                    }; this.resetRegExp(); var f = r && r.missingInterpolationHandler || this.options.missingInterpolationHandler, p = r && r.interpolation && r.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables; return [{
                        regex: this.regexpUnescape, safeValue: function (e) {
                            return u(e)
                        }
                    }, {
                        regex: this.regexp, safeValue: function (e) {
                            return s.escapeValue ? u(s.escape(e)) : u(e)
                        }
                    }].forEach((function (t) {
                        for (a = 0; i = t.regex.exec(e);) {
                            if (void 0 === (o = l(i[1].trim()))) if ("function" == typeof f) {
                                var n = f(e, i, r); o = "string" == typeof n ? n : ""
                            } else {
                                if (p) {
                                    o = i[0]; continue
                                } s.logger.warn("missed to pass in variable ".concat(i[1], " for interpolating ").concat(e)), o = ""
                            } else "string" == typeof o || s.useRawValueToEscape || (o = g(o)); if (e = e.replace(i[0], t.safeValue(o)), t.regex.lastIndex = 0, ++a >= s.maxReplaces) break
                        }
                    })), e
                }
            }, {
                key: "nest", value: function (e, t) {
                    var n, r, o = this, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    }, s = (0, i.Z)({
                    }, a); function c(e, t) {
                        var n = this.nestingOptionsSeparator; if (e.indexOf(n) < 0) return e; var r = e.split(new RegExp("".concat(n, "[ ]*{"))), o = "{".concat(r[1]); e = r[0], o = (o = this.interpolate(o, s)).replace(/'/g, '"'); try {
                            s = JSON.parse(o), t && (s = (0, i.Z)({
                            }, t, s))
                        } catch (t) {
                            return this.logger.warn("failed parsing options string in nesting for key ".concat(e), t), "".concat(e).concat(n).concat(o)
                        } return delete s.defaultValue, e
                    } for (s.applyPostProcessor = !1, delete s.defaultValue; n = this.nestingRegexp.exec(e);) {
                        var u = [], l = !1; if (n[0].includes(this.formatSeparator) && !/{.*} /.test(n[1])) {
                            var f = n[1].split(this.formatSeparator).map((function (e) {
                                return e.trim()
                            })); n[1] = f.shift(), u = f, l = !0
                        } if ((r = t(c.call(this, n[1].trim(), s), s)) && n[0] === e && "string" != typeof r) return r; "string" != typeof r && (r = g(r)), r || (this.logger.warn("missed to resolve ".concat(n[1], " for nesting ").concat(e)), r = ""), l && (r = u.reduce((function (e, t) {
                            return o.format(e, t, a.lng, a)
                        }), r.trim())), e = e.replace(n[0], r), this.regexp.lastIndex = 0
                    } return e
                }
            }]), e
        }(), D = function (e) {
            function t(e, n, r) {
                var i, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                }; return (0, o.Z)(this, t), i = (0, s.Z)(this, (0, c.Z)(t).call(this)), x && h.call((0, u.Z)(i)), i.backend = e, i.store = n, i.services = r, i.languageUtils = r.languageUtils, i.options = a, i.logger = p.create("backendConnector"), i.state = {
                }, i.queue = [], i.backend && i.backend.init && i.backend.init(r, a.backend, a), i
            } return (0, l.Z)(t, e), (0, a.Z)(t, [{
                key: "queueLoad", value: function (e, t, n, r) {
                    var i = this, o = [], a = [], s = [], c = []; return e.forEach((function (e) {
                        var r = !0; t.forEach((function (t) {
                            var s = "".concat(e, "|").concat(t); !n.reload && i.store.hasResourceBundle(e, t) ? i.state[s] = 2 : i.state[s] < 0 || (1 === i.state[s] ? a.indexOf(s) < 0 && a.push(s) : (i.state[s] = 1, r = !1, a.indexOf(s) < 0 && a.push(s), o.indexOf(s) < 0 && o.push(s), c.indexOf(t) < 0 && c.push(t)))
                        })), r || s.push(e)
                    })), (o.length || a.length) && this.queue.push({
                        pending: a, loaded: {
                        }, errors: [], callback: r
                    }), {
                        toLoad: o, pending: a, toLoadLanguages: s, toLoadNamespaces: c
                    }
                }
            }, {
                key: "loaded", value: function (e, t, n) {
                    var r = e.split("|"), i = r[0], o = r[1]; t && this.emit("failedLoading", i, o, t), n && this.store.addResourceBundle(i, o, n), this.state[e] = t ? -1 : 2; var a = {
                    }; this.queue.forEach((function (n) {
                        var r, s, c, u, l; r = n.loaded, s = o, (u = (c = m(r, [i], Object)).obj)[l = c.k] = u[l] || [], u[l].push(s), function (e, t) {
                            for (var n = e.indexOf(t); -1 !== n;)e.splice(n, 1), n = e.indexOf(t)
                        }(n.pending, e), t && n.errors.push(t), 0 !== n.pending.length || n.done || (Object.keys(n.loaded).forEach((function (e) {
                            a[e] || (a[e] = []), n.loaded[e].length && n.loaded[e].forEach((function (t) {
                                a[e].indexOf(t) < 0 && a[e].push(t)
                            }))
                        })), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback())
                    })), this.emit("loaded", a), this.queue = this.queue.filter((function (e) {
                        return !e.done
                    }))
                }
            }, {
                key: "read", value: function (e, t, n) {
                    var r = this, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 350, a = arguments.length > 5 ? arguments[5] : void 0; return e.length ? this.backend[n](e, t, (function (s, c) {
                        s && c && i < 5 ? setTimeout((function () {
                            r.read.call(r, e, t, n, i + 1, 2 * o, a)
                        }), o) : a(s, c)
                    })) : a(null, {
                    })
                }
            }, {
                key: "prepareLoading", value: function (e, t) {
                    var n = this, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    }, i = arguments.length > 3 ? arguments[3] : void 0; if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i(); "string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" == typeof t && (t = [t]); var o = this.queueLoad(e, t, r, i); if (!o.toLoad.length) return o.pending.length || i(), null; o.toLoad.forEach((function (e) {
                        n.loadOne(e)
                    }))
                }
            }, {
                key: "load", value: function (e, t, n) {
                    this.prepareLoading(e, t, {
                    }, n)
                }
            }, {
                key: "reload", value: function (e, t, n) {
                    this.prepareLoading(e, t, {
                        reload: !0
                    }, n)
                }
            }, {
                key: "loadOne", value: function (e) {
                    var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", r = e.split("|"), i = r[0], o = r[1]; this.read(i, o, "read", void 0, void 0, (function (r, a) {
                        r && t.logger.warn("".concat(n, "loading namespace ").concat(o, " for language ").concat(i, " failed"), r), !r && a && t.logger.log("".concat(n, "loaded namespace ").concat(o, " for language ").concat(i), a), t.loaded(e, r, a)
                    }))
                }
            }, {
                key: "saveMissing", value: function (e, t, n, r, o) {
                    var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                    }; this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t) ? this.logger.warn('did not save key "'.concat(n, '" as the namespace "').concat(t, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!") : null != n && "" !== n && (this.backend && this.backend.create && this.backend.create(e, t, n, r, null, (0, i.Z)({
                    }, a, {
                        isUpdate: o
                    })), e && e[0] && this.store.addResource(e[0], t, n, r))
                }
            }]), t
        }(h); function j() {
            return {
                debug: !1, initImmediate: !0, ns: ["translation"], defaultNS: ["translation"], fallbackLng: ["dev"], fallbackNS: !1, whitelist: !1, nonExplicitWhitelist: !1, supportedLngs: !1, nonExplicitSupportedLngs: !1, load: "all", preload: !1, simplifyPluralSuffix: !0, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: !1, saveMissing: !1, updateMissing: !1, saveMissingTo: "fallback", saveMissingPlurals: !0, missingKeyHandler: !1, missingInterpolationHandler: !1, postProcess: !1, postProcessPassResolved: !1, returnNull: !0, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: !1, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: function (e) {
                    var t = {
                    }; if ("object" === (0, r.Z)(e[1]) && (t = e[1]), "string" == typeof e[1] && (t.defaultValue = e[1]), "string" == typeof e[2] && (t.tDescription = e[2]), "object" === (0, r.Z)(e[2]) || "object" === (0, r.Z)(e[3])) {
                        var n = e[3] || e[2]; Object.keys(n).forEach((function (e) {
                            t[e] = n[e]
                        }))
                    } return t
                }, interpolation: {
                    escapeValue: !0, format: function (e, t, n, r) {
                        return e
                    }, prefix: "{{", suffix: "}} ", formatSeparator: ", ", unescapePrefix: " - ", nestingPrefix: "$t(", nestingSuffix: ")", nestingOptionsSeparator: ", ", maxReplaces: 1e3, skipOnVariables: !1
                }
            }
        } function z(e) {
            return "string" == typeof e.ns && (e.ns = [e.ns]), "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.whitelist && (e.whitelist && e.whitelist.indexOf("cimode") < 0 && (e.whitelist = e.whitelist.concat(["cimode"])), e.supportedLngs = e.whitelist), e.nonExplicitWhitelist && (e.nonExplicitSupportedLngs = e.nonExplicitWhitelist), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e
        } function V() { } const H = new (function (e) {
            function t() {
                var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                }, r = arguments.length > 1 ? arguments[1] : void 0; if ((0, o.Z)(this, t), e = (0, s.Z)(this, (0, c.Z)(t).call(this)), x && h.call((0, u.Z)(e)), e.options = z(n), e.services = {
                }, e.logger = p, e.modules = {
                    external: []
                }, r && !e.isInitialized && !n.isClone) {
                    if (!e.options.initImmediate) return e.init(n, r), (0, s.Z)(e, (0, u.Z)(e)); setTimeout((function () {
                        e.init(n, r)
                    }), 0)
                } return e
            } return (0, l.Z)(t, e), (0, a.Z)(t, [{
                key: "init", value: function () {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    }, n = arguments.length > 1 ? arguments[1] : void 0; function r(e) {
                        return e ? "function" == typeof e ? new e : e : null
                    } if ("function" == typeof t && (n = t, t = {
                    }), t.whitelist && !t.supportedLngs && this.logger.deprecate("whitelist", 'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.'), t.nonExplicitWhitelist && !t.nonExplicitSupportedLngs && this.logger.deprecate("whitelist", 'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.'), this.options = (0, i.Z)({
                    }, j(), this.options, z(t)), this.format = this.options.interpolation.format, n || (n = V), !this.options.isClone) {
                        this.modules.logger ? p.init(r(this.modules.logger), this.options) : p.init(null, this.options); var o = new R(this.options); this.store = new L(this.options.resources, this.options); var a = this.services; a.logger = p, a.resourceStore = this.store, a.languageUtils = o, a.pluralResolver = new A(o, {
                            prepend: this.options.pluralSeparator, compatibilityJSON: this.options.compatibilityJSON, simplifyPluralSuffix: this.options.simplifyPluralSuffix
                        }), a.interpolator = new P(this.options), a.utils = {
                            hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                        }, a.backendConnector = new D(r(this.modules.backend), a.resourceStore, a, this.options), a.backendConnector.on("*", (function (t) {
                            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)r[i - 1] = arguments[i]; e.emit.apply(e, [t].concat(r))
                        })), this.modules.languageDetector && (a.languageDetector = r(this.modules.languageDetector), a.languageDetector.init(a, this.options.detection, this.options)), this.modules.i18nFormat && (a.i18nFormat = r(this.modules.i18nFormat), a.i18nFormat.init && a.i18nFormat.init(this)), this.translator = new S(this.services, this.options), this.translator.on("*", (function (t) {
                            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)r[i - 1] = arguments[i]; e.emit.apply(e, [t].concat(r))
                        })), this.modules.external.forEach((function (t) {
                            t.init && t.init(e)
                        }))
                    } if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                        var s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng); s.length > 0 && "dev" !== s[0] && (this.options.lng = s[0])
                    } this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined"); var c = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"]; c.forEach((function (t) {
                        e[t] = function () {
                            var n; return (n = e.store)[t].apply(n, arguments)
                        }
                    })); var u = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"]; u.forEach((function (t) {
                        e[t] = function () {
                            var n; return (n = e.store)[t].apply(n, arguments), e
                        }
                    })); var l = d(), f = function () {
                        var t = function (t, r) {
                            e.isInitialized && e.logger.warn("init: i18next is already initialized. You should call init just once!"), e.isInitialized = !0, e.options.isClone || e.logger.log("initialized", e.options), e.emit("initialized", e.options), l.resolve(r), n(t, r)
                        }; if (e.languages && "v1" !== e.options.compatibilityAPI && !e.isInitialized) return t(null, e.t.bind(e)); e.changeLanguage(e.options.lng, t)
                    }; return this.options.resources || !this.options.initImmediate ? f() : setTimeout(f, 0), l
                }
            }, {
                key: "loadResources", value: function (e) {
                    var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V, r = n, i = "string" == typeof e ? e : this.language; if ("function" == typeof e && (r = e), !this.options.resources || this.options.partialBundledLanguages) {
                        if (i && "cimode" === i.toLowerCase()) return r(); var o = [], a = function (e) {
                            e && t.services.languageUtils.toResolveHierarchy(e).forEach((function (e) {
                                o.indexOf(e) < 0 && o.push(e)
                            }))
                        }; if (i) a(i); else {
                            var s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng); s.forEach((function (e) {
                                return a(e)
                            }))
                        } this.options.preload && this.options.preload.forEach((function (e) {
                            return a(e)
                        })), this.services.backendConnector.load(o, this.options.ns, r)
                    } else r(null)
                }
            }, {
                key: "reloadResources", value: function (e, t, n) {
                    var r = d(); return e || (e = this.languages), t || (t = this.options.ns), n || (n = V), this.services.backendConnector.reload(e, t, (function (e) {
                        r.resolve(), n(e)
                    })), r
                }
            }, {
                key: "use", value: function (e) {
                    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()"); if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()"); return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && O.addPostProcessor(e), "3rdParty" === e.type && this.modules.external.push(e), this
                }
            }, {
                key: "changeLanguage", value: function (e, t) {
                    var n = this; this.isLanguageChangingTo = e; var r = d(); this.emit("languageChanging", e); var i = function (e) {
                        var i = "string" == typeof e ? e : n.services.languageUtils.getBestMatchFromCodes(e); i && (n.language || (n.language = i, n.languages = n.services.languageUtils.toResolveHierarchy(i)), n.translator.language || n.translator.changeLanguage(i), n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(i)), n.loadResources(i, (function (e) {
                            !function (e, i) {
                                i ? (n.language = i, n.languages = n.services.languageUtils.toResolveHierarchy(i), n.translator.changeLanguage(i), n.isLanguageChangingTo = void 0, n.emit("languageChanged", i), n.logger.log("languageChanged", i)) : n.isLanguageChangingTo = void 0, r.resolve((function () {
                                    return n.t.apply(n, arguments)
                                })), t && t(e, (function () {
                                    return n.t.apply(n, arguments)
                                }))
                            }(e, i)
                        }))
                    }; return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(i) : i(e) : i(this.services.languageDetector.detect()), r
                }
            }, {
                key: "getFixedT", value: function (e, t) {
                    var n = this, o = function e(t, o) {
                        var a; if ("object" !== (0, r.Z)(o)) {
                            for (var s = arguments.length, c = new Array(s > 2 ? s - 2 : 0), u = 2; u < s; u++)c[u - 2] = arguments[u]; a = n.options.overloadTranslationOptionHandler([t, o].concat(c))
                        } else a = (0, i.Z)({
                        }, o); return a.lng = a.lng || e.lng, a.lngs = a.lngs || e.lngs, a.ns = a.ns || e.ns, n.t(t, a)
                    }; return "string" == typeof e ? o.lng = e : o.lngs = e, o.ns = t, o
                }
            }, {
                key: "t", value: function () {
                    var e; return this.translator && (e = this.translator).translate.apply(e, arguments)
                }
            }, {
                key: "exists", value: function () {
                    var e; return this.translator && (e = this.translator).exists.apply(e, arguments)
                }
            }, {
                key: "setDefaultNamespace", value: function (e) {
                    this.options.defaultNS = e
                }
            }, {
                key: "hasLoadedNamespace", value: function (e) {
                    var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    }; if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1; if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1; var r = this.languages[0], i = !!this.options && this.options.fallbackLng, o = this.languages[this.languages.length - 1]; if ("cimode" === r.toLowerCase()) return !0; var a = function (e, n) {
                        var r = t.services.backendConnector.state["".concat(e, "|").concat(n)]; return -1 === r || 2 === r
                    }; if (n.precheck) {
                        var s = n.precheck(this, a); if (void 0 !== s) return s
                    } return !!this.hasResourceBundle(r, e) || !this.services.backendConnector.backend || !(!a(r, e) || i && !a(o, e))
                }
            }, {
                key: "loadNamespaces", value: function (e, t) {
                    var n = this, r = d(); return this.options.ns ? ("string" == typeof e && (e = [e]), e.forEach((function (e) {
                        n.options.ns.indexOf(e) < 0 && n.options.ns.push(e)
                    })), this.loadResources((function (e) {
                        r.resolve(), t && t(e)
                    })), r) : (t && t(), Promise.resolve())
                }
            }, {
                key: "loadLanguages", value: function (e, t) {
                    var n = d(); "string" == typeof e && (e = [e]); var r = this.options.preload || [], i = e.filter((function (e) {
                        return r.indexOf(e) < 0
                    })); return i.length ? (this.options.preload = r.concat(i), this.loadResources((function (e) {
                        n.resolve(), t && t(e)
                    })), n) : (t && t(), Promise.resolve())
                }
            }, {
                key: "dir", value: function (e) {
                    return e || (e = this.languages && this.languages.length > 0 ? this.languages[0] : this.language), e ? ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) >= 0 ? "rtl" : "ltr" : "rtl"
                }
            }, {
                key: "createInstance", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    }, n = arguments.length > 1 ? arguments[1] : void 0; return new t(e, n)
                }
            }, {
                key: "cloneInstance", value: function () {
                    var e = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    }, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V, o = (0, i.Z)({
                    }, this.options, n, {
                        isClone: !0
                    }), a = new t(o), s = ["store", "services", "language"]; return s.forEach((function (t) {
                        a[t] = e[t]
                    })), a.services = (0, i.Z)({
                    }, this.services), a.services.utils = {
                        hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
                    }, a.translator = new S(a.services, a.options), a.translator.on("*", (function (e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)n[r - 1] = arguments[r]; a.emit.apply(a, [e].concat(n))
                    })), a.init(o, r), a.translator.options = a.options, a.translator.backendConnector.services.utils = {
                        hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
                    }, a
                }
            }]), t
        }(h)); var K, B = n(64047), F = n(13241), U = n(32954); !function (e) {
            e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API"
        }(K || (K = {
        })); var W, q = function (e) {
            function t(t, n, r) {
                var i = e.call(this, t) || this; return i.code = n, i.originalMessage = r, i
            } return (0, B.__extends)(t, e), t.prototype.toString = function () {
                return "[formatjs Error: " + this.code + "] " + this.message
            }, t
        }(Error), G = function (e) {
            function t(t, n, r, i) {
                return e.call(this, 'Invalid values for "' + t + '": "' + n + '". Options are "' + Object.keys(r).join('", "') + '"', K.INVALID_VALUE, i) || this
            } return (0, B.__extends)(t, e), t
        }(q), J = function (e) {
            function t(t, n, r) {
                return e.call(this, 'Value for "' + t + '" must be of type ' + n, K.INVALID_VALUE, r) || this
            } return (0, B.__extends)(t, e), t
        }(q), X = function (e) {
            function t(t, n) {
                return e.call(this, 'The intl string context variable "' + t + '" was not provided to the string "' + n + '"', K.MISSING_VALUE, n) || this
            } return (0, B.__extends)(t, e), t
        }(q); function Y(e) {
            return "function" == typeof e
        } function Q(e, t, n, r, i, o, a) {
            if (1 === e.length && (0, F.O4)(e[0])) return [{
                type: W.literal, value: e[0].value
            }]; for (var s = [], c = 0, u = e; c < u.length; c++) {
                var l = u[c]; if ((0, F.O4)(l)) s.push({
                    type: W.literal, value: l.value
                }); else if ((0, F.yx)(l)) "number" == typeof o && s.push({
                    type: W.literal, value: n.getNumberFormat(t).format(o)
                }); else {
                    var f = l.value; if (!i || !(f in i)) throw new X(f, a); var p = i[f]; if ((0, F.VG)(l)) p && "string" != typeof p && "number" != typeof p || (p = "string" == typeof p || "number" == typeof p ? String(p) : ""), s.push({
                        type: "string" == typeof p ? W.literal : W.object, value: p
                    }); else if ((0, F.rp)(l)) {
                        var h = "string" == typeof l.style ? r.date[l.style] : (0, F.Ii)(l.style) ? l.style.parsedOptions : void 0; s.push({
                            type: W.literal, value: n.getDateTimeFormat(t, h).format(p)
                        })
                    } else if ((0, F.pe)(l)) h = "string" == typeof l.style ? r.time[l.style] : (0, F.Ii)(l.style) ? l.style.parsedOptions : void 0, s.push({
                        type: W.literal, value: n.getDateTimeFormat(t, h).format(p)
                    }); else if ((0, F.uf)(l)) (h = "string" == typeof l.style ? r.number[l.style] : (0, F.Wh)(l.style) ? l.style.parsedOptions : void 0) && h.scale && (p *= h.scale || 1), s.push({
                        type: W.literal, value: n.getNumberFormat(t, h).format(p)
                    }); else {
                        if ((0, F.HI)(l)) {
                            var d = l.children, g = l.value, v = i[g]; if (!Y(v)) throw new J(g, "function", a); var m = v(Q(d, t, n, r, i, o).map((function (e) {
                                return e.value
                            }))); Array.isArray(m) || (m = [m]), s.push.apply(s, m.map((function (e) {
                                return {
                                    type: "string" == typeof e ? W.literal : W.object, value: e
                                }
                            })))
                        } if ((0, F.Wi)(l)) {
                            if (!(y = l.options[p] || l.options.other)) throw new G(l.value, p, Object.keys(l.options), a); s.push.apply(s, Q(y.value, t, n, r, i))
                        } else if ((0, F.Jo)(l)) {
                            var y; if (!(y = l.options["=" + p])) {
                                if (!Intl.PluralRules) throw new q('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', K.MISSING_INTL_API, a); var C = n.getPluralRules(t, {
                                    type: l.pluralType
                                }).select(p - (l.offset || 0)); y = l.options[C] || l.options.other
                            } if (!y) throw new G(l.value, p, Object.keys(l.options), a); s.push.apply(s, Q(y.value, t, n, r, i, p - (l.offset || 0)))
                        }
                    }
                }
            } return (_ = s).length < 2 ? _ : _.reduce((function (e, t) {
                var n = e[e.length - 1]; return n && n.type === W.literal && t.type === W.literal ? n.value += t.value : e.push(t), e
            }), []); var _
        } function $(e) {
            return {
                create: function () {
                    return {
                        get: function (t) {
                            return e[t]
                        }, set: function (t, n) {
                            e[t] = n
                        }
                    }
                }
            }
        } !function (e) {
            e[e.literal = 0] = "literal", e[e.object = 1] = "object"
        }(W || (W = {
        })); const ee = function () {
            function e(t, n, r, i) {
                var o, a = this; if (void 0 === n && (n = e.defaultLocale), this.formatterCache = {
                    number: {
                    }, dateTime: {
                    }, pluralRules: {
                    }
                }, this.format = function (e) {
                    var t = a.formatToParts(e); if (1 === t.length) return t[0].value; var n = t.reduce((function (e, t) {
                        return e.length && t.type === W.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
                    }), []); return n.length <= 1 ? n[0] || "" : n
                }, this.formatToParts = function (e) {
                    return Q(a.ast, a.locales, a.formatters, a.formats, e, void 0, a.message)
                }, this.resolvedOptions = function () {
                    return {
                        locale: Intl.NumberFormat.supportedLocalesOf(a.locales)[0]
                    }
                }, this.getAst = function () {
                    return a.ast
                }, "string" == typeof t) {
                    if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`"); this.ast = e.__parse(t, {
                        ignoreTag: null == i ? void 0 : i.ignoreTag
                    })
                } else this.ast = t; if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST."); this.formats = function (e, t) {
                    return t ? Object.keys(e).reduce((function (n, r) {
                        var i, o; return n[r] = (i = e[r], (o = t[r]) ? (0, B.__assign)((0, B.__assign)((0, B.__assign)({
                        }, i || {
                        }), o || {
                        }), Object.keys(i).reduce((function (e, t) {
                            return e[t] = (0, B.__assign)((0, B.__assign)({
                            }, i[t]), o[t] || {
                            }), e
                        }), {
                        })) : i), n
                    }), (0, B.__assign)({
                    }, e)) : e
                }(e.formats, r), this.locales = n, this.formatters = i && i.formatters || (void 0 === (o = this.formatterCache) && (o = {
                    number: {
                    }, dateTime: {
                    }, pluralRules: {
                    }
                }), {
                    getNumberFormat: (0, U.Z)((function () {
                        for (var e, t = [], n = 0; n < arguments.length; n++)t[n] = arguments[n]; return new ((e = Intl.NumberFormat).bind.apply(e, (0, B.__spreadArray)([void 0], t, !1)))
                    }), {
                        cache: $(o.number), strategy: U.A.variadic
                    }), getDateTimeFormat: (0, U.Z)((function () {
                        for (var e, t = [], n = 0; n < arguments.length; n++)t[n] = arguments[n]; return new ((e = Intl.DateTimeFormat).bind.apply(e, (0, B.__spreadArray)([void 0], t, !1)))
                    }), {
                        cache: $(o.dateTime), strategy: U.A.variadic
                    }), getPluralRules: (0, U.Z)((function () {
                        for (var e, t = [], n = 0; n < arguments.length; n++)t[n] = arguments[n]; return new ((e = Intl.PluralRules).bind.apply(e, (0, B.__spreadArray)([void 0], t, !1)))
                    }), {
                        cache: $(o.pluralRules), strategy: U.A.variadic
                    })
                })
            } return Object.defineProperty(e, "defaultLocale", {
                get: function () {
                    return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = (new Intl.NumberFormat).resolvedOptions().locale), e.memoizedDefaultLocale
                }, enumerable: !1, configurable: !0
            }), e.memoizedDefaultLocale = null, e.__parse = F.Qc, e.formats = {
                number: {
                    integer: {
                        maximumFractionDigits: 0
                    }, currency: {
                        style: "currency"
                    }, percent: {
                        style: "percent"
                    }
                }, date: {
                    short: {
                        month: "numeric", day: "numeric", year: "2-digit"
                    }, medium: {
                        month: "short", day: "numeric", year: "numeric"
                    }, long: {
                        month: "long", day: "numeric", year: "numeric"
                    }, full: {
                        weekday: "long", month: "long", day: "numeric", year: "numeric"
                    }
                }, time: {
                    short: {
                        hour: "numeric", minute: "numeric"
                    }, medium: {
                        hour: "numeric", minute: "numeric", second: "numeric"
                    }, long: {
                        hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short"
                    }, full: {
                        hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short"
                    }
                }
            }, e
        }(); var te, ne = function () {
            return ne = Object.assign || function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e
            }, ne.apply(this, arguments)
        }; function re(e, t, n) {
            function r(e) {
                return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e
            } function i() {
                return !e || "string" == typeof e
            } void 0 === n && (n = null); for (var o = "string" != typeof t ? [].concat(t) : t.split("."); o.length > 1;) {
                if (i()) return {
                }; var a = r(o.shift()); !e[a] && n && (e[a] = new n), e = e[a]
            } return i() ? {
            } : {
                obj: e, k: r(o.shift())
            }
        } !function (e) {
            e.keepRaw = "keepRaw", e.replaceAnyway = "replaceAnyway"
        }(te || (te = {
        })), te.replaceAnyway; var ie = {
            memoize: !1, memoizeFallback: !1, bindI18n: !1, bindI18nStore: !1, onParseError: te.replaceAnyway
        }, oe = function () {
            function e() {
                this.mem = {
                }
            } return e.staticInit = function (t) {
                e._i18nextInstance = t
            }, e.prototype.init = function (t, n) {
                var r = this; void 0 === t && (t = e._i18nextInstance); var i = {
                }; if ((null == t ? void 0 : t.options) && (t.options.i18nFormat && (i = t.options.i18nFormat), i.onParseError = t.options.onParseError, i.missingInterpolationHandler = t.options.missingInterpolationHandler, i.icuConfig = t.options.icuConfig, i.ignoreWarning = !!t.options.ignoreWarning), this.options = Object.assign(ie, n, i), this.formats = this.options.formats, t) {
                    var o = this.options, a = o.bindI18n, s = o.bindI18nStore, c = o.memoize; t.IntlMessageFormat = ee, this.IntlMessageFormat = ee, t.ICU = this, c && (a && t.on(a, (function () {
                        return r.clearCache()
                    })), s && t.store.on(s, (function () {
                        return r.clearCache()
                    })))
                } this.options.localeData && ("[object Array]" === Object.prototype.toString.apply(this.options.localeData) ? this.options.localeData.forEach((function (e) {
                    return r.addLocaleData(e)
                })) : this.addLocaleData(this.options.localeData))
            }, e.prototype.addLocaleData = function (e) {
                ("[object Array]" === Object.prototype.toString.apply(e) ? e : [e]).forEach((function (e) {
                    e && e.locale && ee.__addLocaleData(e)
                }))
            }, e.prototype.addUserDefinedFormats = function (e) {
                this.formats = this.formats ? ne(ne({
                }, this.formats), e) : e
            }, e.prototype.checkMissingInterpolation = function (e, t, n, r, i) {
                if (!1 === (this.options.icuConfig || {
                }).strict) return n; for (var o = {
                }, a = 0, s = e; a < s.length; a++) {
                    var c = s[a]; if (1 === c.type) {
                        var u = c.value; if (null === n[u] || void 0 === n[u]) {
                            if ("function" == typeof this.options.missingInterpolationHandler) {
                                var l = this.options.missingInterpolationHandler({
                                    key: i, text: t, locale: r, interpolation: {
                                        key: u, val: n[u]
                                    }
                                }); if ("string" == typeof l) {
                                    o[u] = l; continue
                                }
                            } switch (this.options.onParseError) {
                                case te.keepRaw: throw new Error; case te.replaceAnyway: o[u] = "{" + u + "}"; continue
                            }if ("function" == typeof this.options.onParseError) { console.warn("[DEPRECATED] onParseError is deprecated, please use 'missingInterpolationHandler' instead of"); var f = this.options.onParseError(t, u, r, this.IntlMessageFormat); if (!0 === f) throw new Error; o[u] = "string" == typeof f ? f : "{" + u + "} " } else this.options.ignoreWarning || console.warn('[Starling ICU Warning] The interpolation parameter "{' + u + '} " is missing in the translation text "' + t + '" for the key "' + i + "\"\nSuggestions: check whether the value is null or undefined. Try using empty string '' as fallback! e.g I18n.t('key', {apple: count || ''}) "), o[u] = "{" + u + "} "
                        }
                    }
                } return Object.assign({}, n, o)
            }, e.prototype.parse = function (e, t, n, r, i, o) {
                var a, s, c, u, l = o && o.resolved && o.resolved.res, f = this.options.memoize && n + "." + r + "." + i.replace(/\./g, "###"); !l && t.thirdParamFallback && t.fallbackText && (e = t.fallbackText), this.options.memoize && (a = function (e, t) {
                    var n = re(e, t), r = n.obj, i = n.k; if (r) return r[i]
                }(this.mem, f)); try {
                    return a || (a = new this.IntlMessageFormat(e, n, this.formats, (this.options.icuConfig || {
                    }).formatOptions), this.options.memoize && (this.options.memoizeFallback || !o || l) && (s = this.mem, c = a, (u = re(s, f, Object)).obj[u.k] = c)), a.format(this.checkMissingInterpolation(a.getAst(), e, t || {
                    }, n, i))
                } catch (t) {
                    return e
                }
            }, e.prototype.addLookupKeys = function (e, t, n, r, i) {
                return e
            }, e.prototype.clearCache = function () {
                this.mem = {
                }
            }, e.type = "i18nFormat", e._i18nextInstance = null, e
        }(); function ae(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        } function se(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        } function ce(e, t, n) {
            return t && se(e.prototype, t), n && se(e, n), Object.defineProperty(e, "prototype", {
                writable: !1
            }), e
        } function ue(e, t) {
            (null == t || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n]; return r
        } oe.name; for (var le = ["AFN", "EUR", "ALL", "DZD", "USD", "AOA", "XCD", "ARS", "AMD", "AWG", "AUD", "AZN", "BSD", "BHD", "BDT", "BBD", "BYN", "BZD", "XOF", "BMD", "INR", "BTN", "BOB", "BOV", "BAM", "BWP", "NOK", "BRL", "BND", "BGN", "BIF", "CVE", "KHR", "XAF", "CAD", "KYD", "CLP", "CLF", "CNY", "COP", "COU", "KMF", "CDF", "NZD", "CRC", "HRK", "CUP", "CUC", "ANG", "CZK", "DKK", "DJF", "DOP", "EGP", "SVC", "ERN", "ETB", "FKP", "FJD", "XPF", "GMD", "GEL", "GHS", "GIP", "GTQ", "GBP", "GNF", "GYD", "HTG", "HNL", "HKD", "HUF", "ISK", "IDR", "XDR", "IRR", "IQD", "ILS", "JMD", "JPY", "JOD", "KZT", "KES", "KPW", "KRW", "KWD", "KGS", "LAK", "LBP", "LSL", "ZAR", "LRD", "LYD", "CHF", "MOP", "MKD", "MGA", "MWK", "MYR", "MVR", "MRO", "MUR", "XUA", "MXN", "MXV", "MDL", "MNT", "MAD", "MZN", "MMK", "NAD", "NPR", "NIO", "NGN", "OMR", "PKR", "PAB", "PGK", "PYG", "PEN", "PHP", "PLN", "QAR", "RON", "RUB", "RWF", "SHP", "WST", "STD", "SAR", "RSD", "SCR", "SLL", "SGD", "XSU", "SBD", "SOS", "SSP", "LKR", "SDG", "SRD", "SZL", "SEK", "CHE", "CHW", "SYP", "TWD", "TJS", "TZS", "THB", "TOP", "TTD", "TND", "TRY", "TMT", "UGX", "UAH", "AED", "USN", "UYU", "UYI", "UZS", "VUV", "VEF", "VND", "YER", "ZMW", "ZWL", "XBA", "XBB", "XBC", "XBD", "XTS", "XXX", "XAU", "XPD", "XPT", "XAG"], fe = {
        }, pe = 0; pe < le.length; pe++)fe[le[pe]] = {
            style: "currency", currency: le[pe]
        }; var he = {
            number: fe
        }, de = "languageTransformer"; function ge(e) {
            return function (t) {
                return t.type === e
            }
        } var ve = function () {
            return ve = Object.assign || function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e
            }, ve.apply(this, arguments)
        }, me = /^\s*\[\[__starling_(\d+)_(.*)__\]\]\s*$/; function ye(e, t) {
            var n = e; return (t || []).map((function (t) {
                n = t.process(e) || n
            })), n
        } "undefined" != typeof window && (window.__STARLING_INCONTEXT_GLOBAL__HOOK__ = ve({
        }, window.__STARLING_INCONTEXT_GLOBAL__HOOK__ || {
            payload: {
            }
        })); var Ce, _e = {
            lng: "zh-CN", fallbackLng: ["en-US"], inContext: !0
        }, we = [oe, {
            name: "inContext", type: "postProcessor", process: function (e, t, n, r) {
                if (window && document.getElementById("INCONTEXT-KEY-MATCH") && !n.__STARLING_INCONTEXT_FLAG__) {
                    window.__STARLING_INCONTEXT_GLOBAL_I18N__ || (window.__STARLING_INCONTEXT_GLOBAL_I18N__ = r), delete n.keySeparator, delete n.lngs; var i, o = 0; if (t = t.toString(), me.test(t) && ((i = t.match(me))[0], o = i[1], t = i[2]), me.test(e)) (i = e.match(me))[0], i[1], e = i[2]; if (window.__STARLING_INCONTEXT_GLOBAL__HOOK__.payload[t]) {
                        var a = window.__STARLING_INCONTEXT_GLOBAL__HOOK__.payload[t].findIndex((function (e) {
                            return JSON.stringify(e.options) === JSON.stringify(n)
                        })); a > -1 ? (window.__STARLING_INCONTEXT_GLOBAL__HOOK__.payload[t][a].default = e, o = a) : o = window.__STARLING_INCONTEXT_GLOBAL__HOOK__.payload[t].push({
                            options: n, default: e
                        }) - 1
                    } else window.__STARLING_INCONTEXT_GLOBAL__HOOK__.payload[t] = [{
                        options: n, default: e
                    }], o = 0; return "[[__starling_" + o + "_" + t + "__]]"
                } return e
            }
        }], be = function () {
            function e(t, n) {
                var r = this; ae(this, e), this.t = function (e, t, n) {
                    var i = Array.isArray(e) ? Array.from(e).map((function () {
                        return " "
                    })).join("") : Array(e.length).fill(" "), o = Object.assign({
                        keySeparator: i, nsSeparator: i
                    }, t); return "thirdParamFallback" in r.config && r.config.thirdParamFallback && (o.thirdParamFallback = !0), r.instance.t(e, n, o)
                }, this.plugins = Array.isArray(n) ? n.concat(we) : we, this.userLng = t.lng || null, this.config = Object.assign({
                }, _e, t)
            } return ce(e, [{
                key: "language", get: function () {
                    return (this.instance || {
                    }).language
                }
            }, {
                key: "createInstance", value: function () {
                    var e = this; return new Promise((function (t, n) {
                        e.instance = H.createInstance(), "undefined" != typeof window && !window.CocosEngine && e.config.inContext && (e.config.postProcess = [].concat(["inContext"], e.config.postProcess || [])), e.plugins.map((function (t) {
                            "IES_INTL_ICU_PLUGIN" === t.name && t.staticInit(e.instance), e.instance.use(t)
                        })); var r = e.config; e.config.formats = Object.assign({
                        }, e.config.formats, he); var i = ye(r.lng, e.plugins.filter(ge(de))); e.instance.init(Object.assign({
                        }, r, {
                            lng: i, i18nFormat: {
                                formats: e.config.formats
                            }
                        }), (function (r, i) {
                            r || (e._updateLanguages(), t({
                                t: i, err: r
                            })), e.init = !0, n({
                                t: i, err: r
                            })
                        }))
                    }))
                }
            }, {
                key: "_updateLanguages", value: function () {
                    var e; this.languages = this.instance ? Array.from(new Set([this.instance.language].concat(function (e) {
                        if (Array.isArray(e)) return ue(e)
                    }(e = this.instance.languages) || function (e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(e) || function (e, t) {
                        if (e) {
                            if ("string" == typeof e) return ue(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ue(e, t) : void 0
                        }
                    }(e) || function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()))) : null
                }
            }, {
                key: "getLanguages", value: function () {
                    return this.languages
                }
            }, {
                key: "changeLanguage", value: function (e, t) {
                    var n = this; this.config.lng = e, this.instance.changeLanguage(e, (function (e, r) {
                        e || n._updateLanguages(), t && t(e, r)
                    }))
                }
            }, {
                key: "changeLanguageWithPromise", value: function (e) {
                    var t = this; return new Promise((function (n, r) {
                        t.config.lng = e, t.instance.changeLanguage(e, (function (e, i) {
                            e && r({
                                err: e, t: i
                            }), t._updateLanguages(), n({
                                err: e, t: i
                            })
                        }))
                    }))
                }
            }, {
                key: "getDir", value: function (e) {
                    return this.instance.dir(e)
                }
            }, {
                key: "addResourceBundle", value: function (e, t, n, r, i) {
                    return this.instance.addResourceBundle(e, t, n, r, i)
                }
            }]), e
        }(), ke = "Starling_intl:", Ee = function () {
            for (var e, t = "".concat(ke, " [ERROR]"), n = arguments.length, r = new Array(n), i = 0; i < n; i++)r[i] = arguments[i]; (e = console).error.apply(e, [t].concat(r))
        }; function xe(e, t, n) {
            return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
        } function Le() {
        } function Oe(e) {
            return function () {
                for (var t = [], n = 0; n < arguments.length; n++)t[n] = arguments[n]; try {
                    return Promise.resolve(e.apply(this, t))
                } catch (e) {
                    return Promise.reject(e)
                }
            }
        } !function (e) {
            e.intl3rdParty = "intl3rdParty", e.backend = "backend", e.logger = "logger", e.languageDetector = "languageDetector", e.postProcessor = "postProcessor", e.i18nFormat = "i18nFormat", e["3rdParty"] = "3rdParty"
        }(Ce || (Ce = {
        })); var Ne = function () {
            function e() {
                var t = this; ae(this, e), this.t = function (e, n, r) {
                    return t.ignoreWarning || t.i18nInstance && t.i18nInstance.init ? !e || "string" == typeof e && !e.trim() ? "" : t.i18nInstance.t(e, n, r) : (Ee("The instance has not been initialized: i18n.t('".concat(e, "'").concat(n ? "," + JSON.stringify(n) : "", ");")), r || Array.isArray(e) ? e[0] : e)
                }, this.plugins = []
            } return ce(e, [{
                key: "use", value: function (e) {
                    return this.plugins.includes(e) ? (function () {
                        for (var e, t = "".concat(ke, " [WARNING]"), n = arguments.length, r = new Array(n), i = 0; i < n; i++)r[i] = arguments[i]; (e = console).warn.apply(e, [t].concat(r))
                    }("Plugin: %s has beeninit installed.", e.name), this) : (this.plugins.push(e), this)
                }
            }, {
                key: "init", value: function (e, t) {
                    try {
                        var n = this; return n.ignoreWarning = e.ignoreWarning, n.i18nInstance = new be(e, n.plugins), xe(function (e, r) {
                            try {
                                var i = xe(n.i18nInstance.createInstance(), (function (e) {
                                    var r, i = e.err, o = e.t, a = n.plugins.filter((function (e) {
                                        return e.type === Ce.intl3rdParty
                                    })); return xe((r = a.map(Oe((function (e) {
                                        if (e && "function" == typeof e.init) return (t = (e.init instanceof Promise ? e.init : Oe((function (t) {
                                            return Promise.resolve(e.init(t))
                                        })))(n)) && t.then ? t.then(Le) : Promise.resolve(); var t
                                    }))), new Promise((function (e, t) {
                                        if (Array.isArray(r) || (r = Array.from(r)), r.length <= 0) return e([]); var n = []; r = r.map((function (i, o) {
                                            return function () {
                                                ("function" == typeof i ? new Promise(i) : Promise.resolve(i)).then((function (t) {
                                                    n[o] = t, o === r.length - 1 ? e(n) : r[o + 1]()
                                                }), t)
                                            }
                                        })), r[0]()
                                    }))), (function () {
                                        return "function" == typeof t && t(i, o), {
                                            err: i, t: o
                                        }
                                    }))
                                }))
                            } catch (e) {
                                return r(e)
                            } return i && i.then ? i.then(void 0, r) : i
                        }(0, (function (e) {
                            return Ee("The instance init error: ".concat(e)), {
                                err: e, t: function (e) {
                                    return e
                                }
                            }
                        })))
                    } catch (e) {
                        return Promise.reject(e)
                    }
                }
            }, {
                key: "language", get: function () {
                    return (this.i18nInstance || {
                    }).language
                }
            }, {
                key: "setLang", value: function (e, t) {
                    var n = ye(e, this.plugins.filter(ge(de))); this.i18nInstance.changeLanguage(n, t)
                }
            }, {
                key: "getLanguages", value: function () {
                    return this.i18nInstance.getLanguages()
                }
            }, {
                key: "setLangWithPromise", value: function (e) {
                    var t = ye(e, this.plugins.filter(ge(de))); return this.i18nInstance.changeLanguageWithPromise(t)
                }
            }, {
                key: "dir", value: function (e) {
                    return this.i18nInstance.getDir(e)
                }
            }, {
                key: "addResourceBundle", value: function (e, t, n, r, i) {
                    return this.i18nInstance.addResourceBundle(e, t, n, r, i)
                }
            }]), e
        }(); const Se = new Ne
    }, 66312: (e, t, n) => {
        n.d(t, {
            Z: () => i
        }); var r = n(91051); function i(e) {
            var t = e.width, n = void 0 === t ? "1em" : t, i = e.height, o = void 0 === i ? "1em" : i, a = e.fill, s = void 0 === a ? "currentColor" : a, c = e.style, u = e.className; return r.createElement("svg", {
                className: u, style: c, width: n, height: o, viewBox: "0 0 72 72", fill: s, xmlns: "http://www.w3.org/2000/svg"
            }, r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M33.8531 13.6612C31.0541 12.975 28.9695 10.4434 28.9695 7.43671C28.9695 3.90499 31.8457 1.02881 35.3774 1.02881C38.9091 1.02881 41.7853 3.90499 41.7853 7.43671C41.7853 10.4433 39.7008 12.9748 36.902 13.6611V24.499H55.0788C59.7539 24.499 63.56 28.3052 63.56 32.9802V62.4891C63.5549 67.1641 59.7539 70.9703 55.0737 70.9703H15.6812C11.0061 70.9703 7.19998 67.1641 7.19998 62.4891V32.9802C7.19998 28.3052 11.0061 24.499 15.6812 24.499H33.8531V13.6612ZM35.3776 4.07761C33.5279 4.07761 32.0187 5.58684 32.0187 7.43655C32.0187 9.28625 33.5228 10.7955 35.3776 10.7955C37.2324 10.7955 38.7366 9.28625 38.7366 7.43655C38.7366 5.58684 37.2324 4.07761 35.3776 4.07761ZM15.6812 27.5475C12.6881 27.5475 10.2489 29.9816 10.2489 32.9797V62.4886C10.2489 65.4816 12.683 67.9208 15.6812 67.9208H55.0788C58.0719 67.9208 60.5111 65.4867 60.5111 62.4886V32.9797C60.5111 29.9866 58.077 27.5475 55.0788 27.5475H15.6812ZM22.6884 44.4865C22.6884 45.33 23.3694 46.011 24.2129 46.011C25.0565 46.011 25.7374 45.3249 25.7374 44.4865V39.8521C25.7374 39.0085 25.0565 38.3276 24.2129 38.3276C23.3694 38.3276 22.6884 39.0085 22.6884 39.8521V44.4865ZM46.7351 59.1878C46.3031 59.1878 45.8763 59.0048 45.5714 58.6491C43.0479 55.6833 39.3857 53.9656 35.4998 53.9289C35.4611 53.9319 35.422 53.9333 35.3826 53.9333C31.4494 53.9333 27.7347 55.6509 25.1838 58.6541C24.8789 59.0048 24.452 59.1877 24.0201 59.1877C23.6695 59.1877 23.3188 59.0708 23.0343 58.8269C22.394 58.2832 22.3127 57.3177 22.8615 56.6774C25.961 53.0295 30.4655 50.926 35.2403 50.885C35.2839 50.8813 35.328 50.8794 35.3726 50.8794C40.2001 50.8794 44.7634 52.9933 47.8937 56.6724C48.4374 57.3127 48.3612 58.2782 47.7209 58.8219C47.4363 59.0709 47.0857 59.1878 46.7351 59.1878ZM46.5417 46.011C45.6981 46.011 45.0172 45.33 45.0172 44.4865V39.8521C45.0172 39.0085 45.6981 38.3276 46.5417 38.3276C47.3852 38.3276 48.0662 39.0085 48.0662 39.8521V44.4865C48.0662 45.3249 47.3852 46.011 46.5417 46.011Z"
            }))
        }
    }, 55602: (e, t, n) => {
        n.d(t, {
            Z: () => i
        }); var r = n(91051); function i(e) {
            var t = e.width, n = void 0 === t ? "1em" : t, i = e.height, o = void 0 === i ? "1em" : i, a = e.fill, s = void 0 === a ? "currentColor" : a, c = e.style, u = e.className; return r.createElement("svg", {
                className: u, style: c, width: n, height: o, viewBox: "0 0 72 72", fill: s, xmlns: "http://www.w3.org/2000/svg"
            }, r.createElement("path", {
                d: "M36.2544 66.8965C38.3507 66.8965 40.05 65.1971 40.05 63.1008C40.05 61.0045 38.3507 59.3052 36.2544 59.3052C34.1581 59.3052 32.4587 61.0045 32.4587 63.1008C32.4587 65.1971 34.1581 66.8965 36.2544 66.8965Z"
            }), r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M44.0911 16.0463L41.8628 18.7804C39.935 18.56 37.9871 18.4349 36.0341 18.4349C24.1665 18.4349 12.6093 22.5961 3.48571 30.1523C3.20529 30.3826 2.86479 30.4978 2.52929 30.4978C2.09865 30.4978 1.66801 30.3125 1.37257 29.952C0.846784 29.3161 0.931911 28.3696 1.57286 27.8389C11.2322 19.8369 23.4755 15.4304 36.0392 15.4304C38.7482 15.4304 41.4372 15.6457 44.0911 16.0463ZM32.779 29.9221C25.0625 30.5381 17.8117 33.3573 11.6475 38.1594C10.9915 38.6702 10.8764 39.6116 11.3871 40.2675C11.8979 40.9235 12.8393 41.0387 13.4953 40.5279C18.3926 36.7123 24.0309 34.2536 30.0449 33.2771L32.779 29.9221ZM50.2049 48.4843C46.0137 45.6501 41.1114 44.1528 36.0338 44.1528C34.8821 44.1528 33.7454 44.233 32.6187 44.3832L29.5892 48.0987C31.6623 47.4778 33.8255 47.1523 36.0338 47.1523C40.5105 47.1523 44.8269 48.4693 48.5224 50.968C49.2134 51.4337 50.1448 51.2534 50.6105 50.5624C51.0762 49.8814 50.8909 48.95 50.2049 48.4843ZM60.4207 38.1653C55.4934 34.3245 49.875 31.7607 43.8811 30.5689L41.7079 33.2379C47.842 34.1793 53.5906 36.653 58.573 40.5338C58.8484 40.7491 59.1739 40.8493 59.4943 40.8493C59.94 40.8493 60.3857 40.649 60.6811 40.2684C61.1969 39.6174 61.0767 38.676 60.4207 38.1653ZM53.7655 18.4401C59.7944 20.5282 65.4529 23.6729 70.4253 27.779C71.0662 28.3048 71.1563 29.2512 70.6255 29.8972C70.0998 30.5331 69.1534 30.6232 68.5124 30.0975C63.53 25.9863 57.8215 22.8967 51.7374 20.9288L53.7655 18.4401Z"
            }), r.createElement("path", {
                d: "M14.4869 61.0034C14.1514 61.0034 13.8159 60.8932 13.5405 60.6679C12.8996 60.1421 12.7994 59.1957 13.3252 58.5547L56.3993 5.69607C56.9251 5.05512 57.8715 4.95497 58.5125 5.48075C59.1534 6.00653 59.2536 6.95294 58.7278 7.5939L15.6537 60.4526C15.3532 60.8181 14.9226 61.0034 14.4869 61.0034Z"
            }))
        }
    }, 90447: (e, t, n) => {
        n.d(t, {
            Z: () => i
        }); var r = n(91051); function i(e) {
            var t = e.width, n = void 0 === t ? "1em" : t, i = e.height, o = void 0 === i ? "1em" : i, a = (e.fill, e.style), s = e.className; return r.createElement("svg", {
                className: s, style: a, width: n, height: o, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg"
            }, r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M32.5395 4C32.818 6.36773 31.8105 8.69873 30.3367 10.4125C28.7997 12.0988 26.3381 13.3901 23.9417 13.223C23.6296 10.9471 24.8426 8.52606 26.2018 7.04921C27.7388 5.37215 30.4058 4.08817 32.5395 4ZM40.3837 17.6472C40.1083 17.8003 35.6843 20.2608 35.7333 25.2724C35.7886 31.3304 41.4309 33.3307 41.5 33.3528C41.4664 33.4924 40.6169 36.2422 38.5011 39.0324C36.7329 41.4901 34.8798 43.8928 31.9402 43.9368C30.5423 43.9665 29.5985 43.5924 28.6151 43.2026C27.5889 42.7957 26.5195 42.3718 24.8459 42.3718C23.0723 42.3718 21.9556 42.8092 20.8786 43.2311C19.9474 43.5958 19.0459 43.9489 17.7752 43.9975C14.9739 44.0948 12.8343 41.3744 11.003 38.9387C7.34418 33.9681 4.49342 24.9289 8.31419 18.779C10.1653 15.7628 13.5436 13.8194 17.151 13.768C18.7401 13.7368 20.2645 14.3064 21.6007 14.8057C22.6216 15.1873 23.5327 15.5277 24.2789 15.5277C24.9355 15.5277 25.822 15.2004 26.8551 14.819C28.4827 14.218 30.4741 13.4828 32.5032 13.6817C33.8901 13.7184 37.8412 14.1905 40.3897 17.6438L40.3837 17.6472Z", fill: "#161823"
            }))
        }
    }, 41137: (e, t, n) => {
        n.d(t, {
            Z: () => i
        }); var r = n(91051); function i(e) {
            var t = e.width, n = void 0 === t ? "1em" : t, i = e.height, o = void 0 === i ? "1em" : i, a = e.fill, s = void 0 === a ? "currentColor" : a, c = e.style, u = e.className; return r.createElement("svg", {
                className: u, style: c, width: n, height: o, viewBox: "0 0 48 48", fill: s, xmlns: "http://www.w3.org/2000/svg"
            }, r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M12.051 22.8851L14.4088 20.7087C14.8146 20.3341 15.4472 20.3594 15.8218 20.7652L17.1687 22.2242C17.547 22.6342 17.5169 23.2744 17.1016 23.6469L11.3567 28.8C10.5679 29.5281 9.34497 29.5591 8.58592 28.8L3.30668 23.6213C2.90974 23.2319 2.90667 22.5935 3.29985 22.2003L4.70724 20.7929C5.09776 20.4024 5.73093 20.4024 6.12145 20.7929L8.05023 22.7217C8.70151 14.4828 15.5936 8 23.9999 8C32.8365 8 39.9999 15.1634 39.9999 24C39.9999 32.8366 32.8365 40 23.9999 40C20.0354 40 16.4047 38.5559 13.6104 36.1683C13.1906 35.8095 13.1823 35.1738 13.5665 34.777L14.9578 33.3402C15.3419 32.9435 15.9726 32.9369 16.3997 33.287C18.4702 34.9839 21.1147 36 23.9999 36C30.6273 36 35.9999 30.6274 35.9999 24C35.9999 17.3726 30.6273 12 23.9999 12C17.7484 12 12.6135 16.7804 12.051 22.8851Z"
            }))
        }
    }, 1399: (e, t, n) => {
        n.d(t, {
            Z: () => i
        }); var r = n(91051); function i(e) {
            var t = e.width, n = void 0 === t ? "1em" : t, i = e.height, o = void 0 === i ? "1em" : i, a = e.fill, s = void 0 === a ? "currentColor" : a, c = e.style, u = e.className; return r.createElement("svg", {
                className: u, style: c, width: n, height: o, viewBox: "0 0 48 48", fill: s, xmlns: "http://www.w3.org/2000/svg"
            }, r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M25.5187 35.2284C24.7205 36.1596 23.2798 36.1596 22.4816 35.2284L8.83008 19.3016C7.71807 18.0042 8.63988 16 10.3486 16H37.6517C39.3604 16 40.2822 18.0042 39.1702 19.3016L25.5187 35.2284Z"
            }))
        }
    }, 27137: (e, t, n) => {
        n.d(t, {
            Z: () => i
        }); var r = n(91051); function i(e) {
            var t = e.width, n = void 0 === t ? "1em" : t, i = e.height, o = void 0 === i ? "1em" : i, a = e.fill, s = void 0 === a ? "currentColor" : a, c = e.style, u = e.className; return r.createElement("svg", {
                className: u, style: c, width: n, height: o, viewBox: "0 0 48 48", fill: s, xmlns: "http://www.w3.org/2000/svg"
            }, r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M22.5858 32.4142L8.29289 18.1213C7.90237 17.7308 7.90237 17.0976 8.29289 16.7071L9.70711 15.2929C10.0976 14.9024 10.7308 14.9024 11.1213 15.2929L24 28.1716L36.8787 15.2929C37.2692 14.9024 37.9024 14.9024 38.2929 15.2929L39.7071 16.7071C40.0976 17.0976 40.0976 17.7308 39.7071 18.1213L25.4142 32.4142C24.6332 33.1953 23.3668 33.1953 22.5858 32.4142Z"
            }))
        }
    }, 64236: (e, t, n) => {
        n.d(t, {
            Z: () => i
        }); var r = n(91051); function i(e) {
            var t = e.width, n = void 0 === t ? "1em" : t, i = e.height, o = void 0 === i ? "1em" : i, a = e.fill, s = void 0 === a ? "currentColor" : a, c = e.style, u = e.className; return r.createElement("svg", {
                className: u, style: c, width: n, height: o, viewBox: "0 0 48 48", fill: s, xmlns: "http://www.w3.org/2000/svg"
            }, r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M4.58579 22.5858L20.8787 6.29289C21.2692 5.90237 21.9024 5.90237 22.2929 6.29289L23.7071 7.70711C24.0976 8.09763 24.0976 8.7308 23.7071 9.12132L8.82843 24L23.7071 38.8787C24.0976 39.2692 24.0976 39.9024 23.7071 40.2929L22.2929 41.7071C21.9024 42.0976 21.2692 42.0976 20.8787 41.7071L4.58579 25.4142C3.80474 24.6332 3.80474 23.3668 4.58579 22.5858Z"
            }))
        }
    }, 8355: (e, t, n) => {
        n.d(t, {
            Z: () => i
        }); var r = n(91051); function i(e) {
            var t = e.width, n = void 0 === t ? "1em" : t, i = e.height, o = void 0 === i ? "1em" : i, a = e.fill, s = void 0 === a ? "currentColor" : a, c = e.style, u = e.className; return r.createElement("svg", {
                className: u, style: c, width: n, height: o, viewBox: "0 0 48 48", fill: s, xmlns: "http://www.w3.org/2000/svg"
            }, r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M38.1716 24L24.7929 10.6213C24.4024 10.2308 24.4024 9.59763 24.7929 9.20711L26.2071 7.79289C26.5976 7.40237 27.2308 7.40237 27.6213 7.79289L42.4142 22.5858C43.1953 23.3668 43.1953 24.6332 42.4142 25.4142L27.6213 40.2071C27.2308 40.5976 26.5976 40.5976 26.2071 40.2071L24.7929 38.7929C24.4024 38.4024 24.4024 37.7692 24.7929 37.3787L38.1716 24Z"
            }))
        }
    }, 85485: (e, t, n) => {
        n.d(t, {
            Z: () => i
        }); var r = n(91051); function i(e) {
            var t = e.width, n = void 0 === t ? "1em" : t, i = e.height, o = void 0 === i ? "1em" : i, a = e.fill, s = void 0 === a ? "currentColor" : a, c = e.style, u = e.className; return r.createElement("svg", {
                className: u, style: c, width: n, height: o, viewBox: "0 0 48 48", fill: s, xmlns: "http://www.w3.org/2000/svg"
            }, r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M20.5522 6.91656C22.0988 4.28733 25.9011 4.28734 27.4477 6.91656L43.9509 34.9719C45.5194 37.6385 43.5968 41 40.5031 41H7.49679C4.40313 41 2.48051 37.6385 4.04906 34.9719L20.5522 6.91656ZM24 8.94464L7.49679 37H40.5031L24 8.94464ZM22 18C22 17.4477 22.4477 17 23 17H25C25.5522 17 26 17.4477 26 18V27C26 27.5523 25.5522 28 25 28H23C22.4477 28 22 27.5523 22 27V18ZM24 35C25.3807 35 26.5 33.8807 26.5 32.5C26.5 31.1193 25.3807 30 24 30C22.6192 30 21.5 31.1193 21.5 32.5C21.5 33.8807 22.6192 35 24 35Z"
            }))
        }
    }, 99550: (e, t, n) => {
        n.d(t, {
            Z: () => i
        }); var r = n(91051); function i(e) {
            var t = e.width, n = void 0 === t ? "1em" : t, i = e.height, o = void 0 === i ? "1em" : i, a = (e.fill, e.style), s = e.className; return r.createElement("svg", {
                className: s, style: a, width: n, height: o, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg"
            }, r.createElement("path", {
                d: "M45 24.1283C45 12.4595 35.598 3 24 3C12.402 3 3 12.4595 3 24.1283C3 34.6739 10.6794 43.415 20.7188 45V30.2357H15.3867V24.1283H20.7188V19.4735C20.7188 14.1782 23.854 11.2533 28.6508 11.2533C30.9476 11.2533 33.3516 11.6659 33.3516 11.6659V16.8655H30.7036C28.095 16.8655 27.2812 18.4943 27.2812 20.1668V24.1283H33.1055L32.1744 30.2357H27.2812V45C37.3206 43.415 45 34.6739 45 24.1283Z", fill: "#1877F2"
            }))
        }
    }, 42917: (e, t, n) => {
        n.d(t, {
            Z: () => i
        }); var r = n(91051); function i(e) {
            var t = e.width, n = void 0 === t ? "1em" : t, i = e.height, o = void 0 === i ? "1em" : i, a = (e.fill, e.style), s = e.className; return r.createElement("svg", {
                className: s, style: a, width: n, height: o, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg"
            }, r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M43 24.4313C43 23.084 42.8767 21.7885 42.6475 20.5449H24.3877V27.8945H34.8219C34.3724 30.2695 33.0065 32.2818 30.9532 33.6291V38.3964H37.2189C40.885 35.0886 43 30.2177 43 24.4313Z", fill: "#4285F4"
            }), r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M24.3872 43.001C29.6219 43.001 34.0107 41.2996 37.2184 38.3978L30.9527 33.6305C29.2165 34.7705 26.9958 35.4441 24.3872 35.4441C19.3375 35.4441 15.0633 32.1018 13.5388 27.6108H7.06152V32.5337C10.2517 38.7433 16.8082 43.001 24.3872 43.001Z", fill: "#34A853"
            }), r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M13.5395 27.6094C13.1516 26.4695 12.9313 25.2517 12.9313 23.9994C12.9313 22.7472 13.1516 21.5295 13.5395 20.3894V15.4668H7.06217C5.74911 18.0318 5 20.9336 5 23.9994C5 27.0654 5.74911 29.9673 7.06217 32.5323L13.5395 27.6094Z", fill: "#FBBC04"
            }), r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M24.3872 12.5568C27.2336 12.5568 29.7894 13.5155 31.7987 15.3982L37.3595 9.94866C34.0018 6.88281 29.6131 5 24.3872 5C16.8082 5 10.2517 9.25777 7.06152 15.4674L13.5388 20.39C15.0633 15.8991 19.3375 12.5568 24.3872 12.5568Z", fill: "#EA4335"
            }))
        }
    }, 11153: (e, t, n) => {
        n.d(t, {
            Z: () => i
        }); var r = n(91051); function i(e) {
            var t = e.width, n = void 0 === t ? "1em" : t, i = e.height, o = void 0 === i ? "1em" : i, a = (e.fill, e.style), s = e.className; return r.createElement("svg", {
                className: s, style: a, width: n, height: o, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg"
            }, r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46Z", fill: "url(#InstagramCircleColor_paint0_radial)"
            }), r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46Z", fill: "url(#InstagramCircleColor_paint1_radial)"
            }), r.createElement("path", {
                d: "M12.2689 29.0393L12.2683 29.0257L12.2674 29.0121C12.2581 28.8681 12.2467 28.7257 12.2361 28.5942L12.2357 28.5899C12.2259 28.4679 12.2168 28.3551 12.2093 28.2443V19.8627C12.21 19.8592 12.2108 19.8558 12.2115 19.8523C12.2258 19.7843 12.2503 19.6567 12.2525 19.5033C12.2783 18.5107 12.3298 17.6235 12.5372 16.7855C13.0067 14.9166 14.0499 13.622 15.7951 12.8635C16.7343 12.4582 17.7702 12.3191 18.9552 12.2691C19.2441 12.2596 19.5271 12.2332 19.7741 12.2093H28.1373C28.1408 12.21 28.1442 12.2108 28.1477 12.2115C28.2157 12.2258 28.3433 12.2503 28.4967 12.2525C29.4893 12.2783 30.3765 12.3298 31.2145 12.5372C33.0835 13.0068 34.3781 14.05 35.1366 15.7954C35.5419 16.7345 35.6809 17.7702 35.7309 18.9552C35.7404 19.244 35.7668 19.5271 35.7907 19.7741V28.1373C35.79 28.1408 35.7892 28.1442 35.7885 28.1477C35.7742 28.2157 35.7497 28.3433 35.7475 28.4967C35.7217 29.4894 35.6701 30.3768 35.4627 31.2149C34.9931 33.0836 33.9499 34.3781 32.2048 35.1366C31.2656 35.5418 30.2298 35.6809 29.0448 35.7309C28.756 35.7404 28.4729 35.7668 28.2259 35.7907H19.8627C19.8592 35.79 19.8558 35.7892 19.8523 35.7885C19.7843 35.7742 19.6567 35.7497 19.5033 35.7475C18.5106 35.7217 17.6232 35.6701 16.7851 35.4627C14.9165 34.9931 13.622 33.95 12.8635 32.205C12.4575 31.2643 12.3187 30.2267 12.2689 29.0393Z", stroke: "white", strokeWidth: "2.4186"
            }), r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M24 28.207C26.3015 28.207 28.2068 26.327 28.2068 24.0508C28.2068 21.7071 26.3437 19.8017 24.0421 19.7933C21.69 19.7933 19.7931 21.6649 19.7931 23.9917C19.7931 26.3186 21.6731 28.207 24 28.207ZM30.5 24.0084C30.5 27.6083 27.583 30.5084 23.9831 30.5C20.4001 30.4916 17.5 27.583 17.5 23.9916C17.5 20.3917 20.417 17.4916 24.0169 17.5C27.5999 17.5084 30.5 20.417 30.5 24.0084Z", fill: "white"
            }), r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M30.4921 15.3327C31.2981 15.3327 31.9446 15.9712 31.9446 16.7692C31.9446 17.5672 31.2981 18.2216 30.5001 18.2216C29.7101 18.2216 29.0557 17.5672 29.0557 16.7692C29.0636 15.9791 29.7101 15.3327 30.4921 15.3327Z", fill: "white"
            }), r.createElement("defs", null, r.createElement("radialGradient", {
                id: "InstagramCircleColor_paint0_radial", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(13.6876 49.3889) rotate(-90) scale(43.6073 40.5582)"
            }, r.createElement("stop", {
                stopColor: "#FFDD55"
            }), r.createElement("stop", {
                offset: "0.1", stopColor: "#FFDD55"
            }), r.createElement("stop", {
                offset: "0.5", stopColor: "#FF543E"
            }), r.createElement("stop", {
                offset: "1", stopColor: "#C837AB"
            })), r.createElement("radialGradient", {
                id: "InstagramCircleColor_paint1_radial", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(-5.37023 5.16969) rotate(78.6806) scale(19.4926 80.3494)"
            }, r.createElement("stop", {
                stopColor: "#3771C8"
            }), r.createElement("stop", {
                offset: "0.128", stopColor: "#3771C8"
            }), r.createElement("stop", {
                offset: "1", stopColor: "#6600FF", stopOpacity: "0"
            }))))
        }
    }, 86668: (e, t, n) => {
        n.d(t, {
            Z: () => i
        }); var r = n(91051); function i(e) {
            var t = e.width, n = void 0 === t ? "1em" : t, i = e.height, o = void 0 === i ? "1em" : i, a = (e.fill, e.style), s = e.className; return r.createElement("svg", {
                className: s, style: a, width: n, height: o, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg"
            }, r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M24 47.001C36.7026 47.001 47 36.7035 47 24.001C47 11.2984 36.7026 1.00098 24 1.00098C11.2975 1.00098 1 11.2984 1 24.001C1 36.7035 11.2975 47.001 24 47.001Z", fill: "#FBE300"
            }), r.createElement("path", {
                d: "M24.0825 10C15.6421 10 8.7998 15.3949 8.7998 22.0498C8.7998 26.3524 11.6603 30.1276 15.9633 32.2594C15.7292 33.0668 14.459 37.4532 14.4084 37.7978C14.4084 37.7978 14.378 38.0567 14.5457 38.1555C14.7133 38.2542 14.9105 38.1775 14.9105 38.1775C15.3914 38.1104 20.4862 34.5316 21.3681 33.9101C22.249 34.0349 23.1562 34.0997 24.0825 34.0997C32.523 34.0997 39.3652 28.7049 39.3652 22.0498C39.3652 15.3949 32.523 10 24.0825 10Z", fill: "black"
            }), r.createElement("path", {
                d: "M15.6327 26.2563C15.1464 26.2563 14.751 25.8786 14.751 25.4143V20.1763H13.3752C12.8981 20.1763 12.51 19.7889 12.51 19.3129C12.51 18.837 12.8982 18.4496 13.3752 18.4496H17.8901C18.3673 18.4496 18.7554 18.837 18.7554 19.3129C18.7554 19.7889 18.3671 20.1763 17.8901 20.1763H16.5144V25.4143C16.5144 25.8786 16.1189 26.2563 15.6327 26.2563ZM23.364 26.2448C22.9963 26.2448 22.715 26.0955 22.6303 25.8554L22.1937 24.7124L19.5051 24.7123L19.0682 25.856C18.9837 26.0957 18.7026 26.2448 18.3349 26.2448C18.1415 26.245 17.9504 26.2035 17.7745 26.1232C17.5314 26.011 17.2978 25.7027 17.5655 24.8711L19.6745 19.32C19.8231 18.8978 20.2744 18.4628 20.8486 18.4498C21.4245 18.4627 21.8758 18.8978 22.0247 19.3209L24.1328 24.8695C24.4011 25.703 24.1675 26.0115 23.9244 26.1233C23.7485 26.2035 23.5573 26.245 23.364 26.2448C23.364 26.2448 23.3638 26.2448 23.364 26.2448ZM21.73 23.1507L20.8494 20.6489L19.9687 23.1507H21.73ZM25.5518 26.1277C25.0858 26.1277 24.7068 25.765 24.7068 25.3195V19.3313C24.7068 18.8451 25.1106 18.4496 25.6069 18.4496C26.1031 18.4496 26.5069 18.8451 26.5069 19.3313V24.5113H28.3805C28.8465 24.5113 29.2255 24.8739 29.2255 25.3195C29.2255 25.765 28.8465 26.1277 28.3805 26.1277H25.5518ZM30.4502 26.2448C29.9639 26.2448 29.5685 25.8494 29.5685 25.3631V19.3313C29.5685 18.8451 29.9639 18.4496 30.4502 18.4496C30.9364 18.4496 31.3319 18.8451 31.3319 19.3313V21.2264L33.7918 18.7664C33.9183 18.6399 34.0921 18.5703 34.2808 18.5703C34.501 18.5703 34.722 18.6652 34.8876 18.8307C35.042 18.985 35.1342 19.1835 35.1468 19.3896C35.1596 19.5976 35.0904 19.7882 34.9522 19.9265L32.943 21.9354L35.1133 24.8106C35.1834 24.9028 35.2344 25.0081 35.2635 25.1202C35.2925 25.2323 35.299 25.3491 35.2826 25.4638C35.2669 25.5785 35.2285 25.689 35.1698 25.7888C35.1111 25.8886 35.0331 25.9758 34.9405 26.0453C34.788 26.1612 34.6017 26.2237 34.4101 26.2232C34.2735 26.2239 34.1387 26.1925 34.0164 26.1316C33.894 26.0708 33.7877 25.9821 33.7058 25.8728L31.6381 23.133L31.3321 23.439V25.3627C31.3319 25.5965 31.2389 25.8207 31.0735 25.9861C30.9082 26.1515 30.684 26.2445 30.4502 26.2448Z", fill: "#FFE812"
            }))
        }
    }, 97669: (e, t, n) => {
        n.d(t, {
            Z: () => i
        }); var r = n(91051); function i(e) {
            var t = e.width, n = void 0 === t ? "1em" : t, i = e.height, o = void 0 === i ? "1em" : i, a = (e.fill, e.style), s = e.className; return r.createElement("svg", {
                className: s, style: a, width: n, height: o, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg"
            }, r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M24 47.001C36.7026 47.001 47 36.7035 47 24.001C47 11.2984 36.7026 1.00098 24 1.00098C11.2975 1.00098 1 11.2984 1 24.001C1 36.7035 11.2975 47.001 24 47.001Z", fill: "#00B900"
            }), r.createElement("path", {
                d: "M40.0001 22.4324C40.0001 15.2729 32.8228 9.44822 23.9999 9.44822C15.1782 9.44822 8 15.2729 8 22.4324C8 28.8509 13.6922 34.2263 21.3811 35.2427C21.9022 35.355 22.6114 35.5863 22.7908 36.0316C22.9522 36.4362 22.8963 37.0699 22.8423 37.4784C22.8423 37.4784 22.6546 38.6075 22.6141 38.848C22.5445 39.2525 22.2927 40.43 23.9999 39.7105C25.7078 38.9909 33.2145 34.2848 36.5713 30.421H36.5707C38.8895 27.8783 40.0001 25.2978 40.0001 22.4324Z", fill: "white"
            }), r.createElement("path", {
                d: "M20.7494 18.9727H19.6271C19.4551 18.9727 19.3152 19.1123 19.3152 19.2837V26.2556C19.3152 26.4273 19.4551 26.5666 19.6271 26.5666H20.7494C20.9215 26.5666 21.0611 26.4273 21.0611 26.2556V19.2837C21.0611 19.1123 20.9215 18.9727 20.7494 18.9727Z", fill: "#00B900"
            }), r.createElement("path", {
                d: "M28.4738 18.9727H27.3515C27.1794 18.9727 27.0399 19.1123 27.0399 19.2837V23.4257L23.845 19.1111C23.8377 19.1 23.8294 19.0896 23.8208 19.0795L23.8187 19.0776C23.8125 19.0706 23.8064 19.0644 23.7999 19.0583C23.7981 19.0565 23.7963 19.0549 23.7941 19.0531C23.7889 19.0482 23.7834 19.0436 23.7776 19.0393C23.7751 19.0368 23.7723 19.035 23.7696 19.0328C23.7641 19.0292 23.7588 19.0252 23.7533 19.0218C23.7503 19.0197 23.7472 19.0178 23.7438 19.0163C23.7383 19.0129 23.7328 19.0095 23.7272 19.0068C23.7239 19.0052 23.7208 19.0034 23.7174 19.0022C23.7116 18.9994 23.7058 18.9967 23.6996 18.9945C23.696 18.9933 23.6929 18.9921 23.6895 18.9908C23.6834 18.9887 23.6773 18.9865 23.6708 18.985C23.6674 18.9838 23.6638 18.9832 23.6601 18.9819C23.6539 18.9807 23.6481 18.9792 23.6423 18.9779C23.638 18.9773 23.6334 18.9767 23.6291 18.9764C23.6236 18.9752 23.6181 18.9749 23.6125 18.9743C23.6073 18.9737 23.6021 18.9737 23.5966 18.9733C23.5926 18.9733 23.5895 18.9727 23.5855 18.9727H22.4635C22.2915 18.9727 22.1516 19.1123 22.1516 19.2837V26.2556C22.1516 26.4273 22.2915 26.5666 22.4635 26.5666H23.5855C23.7579 26.5666 23.8975 26.4273 23.8975 26.2556V22.1148L27.0963 26.435C27.1184 26.4663 27.1457 26.4917 27.1754 26.512C27.1764 26.5126 27.1776 26.5135 27.1785 26.5144C27.1849 26.5184 27.1914 26.5224 27.1978 26.5261C27.2009 26.5279 27.2037 26.5292 27.2067 26.5307C27.2113 26.5335 27.2165 26.5359 27.2214 26.5381C27.2267 26.5402 27.2313 26.5424 27.2368 26.5445C27.2398 26.5457 27.2429 26.547 27.246 26.5479C27.2533 26.5506 27.2601 26.5528 27.2671 26.5549C27.2687 26.5549 27.2702 26.5555 27.2717 26.5559C27.2972 26.5626 27.3239 26.5666 27.3515 26.5666H28.4738C28.6462 26.5666 28.7854 26.4273 28.7854 26.2556V19.2837C28.7854 19.1123 28.6462 18.9727 28.4738 18.9727Z", fill: "#00B900"
            }), r.createElement("path", {
                d: "M18.0433 24.821H14.9939V19.2843C14.9939 19.1123 14.8543 18.9727 14.6825 18.9727H13.5599C13.3879 18.9727 13.2483 19.1123 13.2483 19.2843V26.2549V26.2555C13.2483 26.3393 13.2817 26.415 13.3354 26.4709C13.3366 26.4724 13.3379 26.4739 13.3397 26.4755C13.3412 26.477 13.3428 26.4782 13.3443 26.4798C13.4004 26.5337 13.4759 26.5669 13.5596 26.5669H13.5599H18.0433C18.2154 26.5669 18.3543 26.427 18.3543 26.2549V25.1326C18.3543 24.9606 18.2154 24.821 18.0433 24.821Z", fill: "#00B900"
            }), r.createElement("path", {
                d: "M34.6715 20.7186C34.8435 20.7186 34.9825 20.5793 34.9825 20.4069V19.2846C34.9825 19.1126 34.8435 18.9727 34.6715 18.9727H30.1881H30.1875C30.1034 18.9727 30.0277 19.0064 29.9715 19.0607C29.9703 19.062 29.9688 19.0629 29.9679 19.0641C29.966 19.0659 29.9645 19.0678 29.963 19.0696C29.9096 19.1254 29.8765 19.2009 29.8765 19.2843V19.2846V26.2552V26.2555C29.8765 26.3393 29.9099 26.415 29.9636 26.4709C29.9648 26.4724 29.9663 26.4742 29.9679 26.4755C29.9691 26.477 29.9709 26.4785 29.9725 26.4798C30.0283 26.5334 30.1041 26.5669 30.1875 26.5669H30.1881H34.6715C34.8435 26.5669 34.9825 26.427 34.9825 26.2552V25.1326C34.9825 24.9609 34.8435 24.821 34.6715 24.821H31.6223V23.6426H34.6715C34.8435 23.6426 34.9825 23.503 34.9825 23.3309V22.2086C34.9825 22.0366 34.8435 21.8967 34.6715 21.8967H31.6223V20.7186H34.6715Z", fill: "#00B900"
            }))
        }
    }, 5550: (e, t, n) => {
        n.d(t, {
            Z: () => i
        }); var r = n(91051); function i(e) {
            var t = e.width, n = void 0 === t ? "1em" : t, i = e.height, o = void 0 === i ? "1em" : i, a = e.fill, s = void 0 === a ? "currentColor" : a, c = e.style, u = e.className; return r.createElement("svg", {
                className: u, style: c, width: n, height: o, viewBox: "0 0 48 48", fill: s, xmlns: "http://www.w3.org/2000/svg"
            }, r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"
            }))
        }
    }, 92178: (e, t, n) => {
        n.d(t, {
            Z: () => i
        }); var r = n(91051); function i(e) {
            var t = e.width, n = void 0 === t ? "1em" : t, i = e.height, o = void 0 === i ? "1em" : i, a = e.fill, s = void 0 === a ? "currentColor" : a, c = e.style, u = e.className; return r.createElement("svg", {
                className: u, style: c, width: n, height: o, viewBox: "0 0 48 48", fill: s, xmlns: "http://www.w3.org/2000/svg"
            }, r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M24.0003 7C20.1343 7 17.0003 10.134 17.0003 14C17.0003 17.866 20.1343 21 24.0003 21C27.8663 21 31.0003 17.866 31.0003 14C31.0003 10.134 27.8663 7 24.0003 7ZM13.0003 14C13.0003 7.92487 17.9252 3 24.0003 3C30.0755 3 35.0003 7.92487 35.0003 14C35.0003 20.0751 30.0755 25 24.0003 25C17.9252 25 13.0003 20.0751 13.0003 14ZM24.0003 33C18.0615 33 13.0493 36.9841 11.4972 42.4262C11.3457 42.9573 10.8217 43.3088 10.2804 43.1989L8.32038 42.8011C7.77914 42.6912 7.4266 42.1618 7.5683 41.628C9.49821 34.358 16.1215 29 24.0003 29C31.8792 29 38.5025 34.358 40.4324 41.628C40.5741 42.1618 40.2215 42.6912 39.6803 42.8011L37.7203 43.1989C37.179 43.3088 36.6549 42.9573 36.5035 42.4262C34.9514 36.9841 29.9391 33 24.0003 33Z"
            }))
        }
    }, 40706: (e, t, n) => {
        n.d(t, {
            Z: () => i
        }); var r = n(91051); function i(e) {
            var t = e.width, n = void 0 === t ? "1em" : t, i = e.height, o = void 0 === i ? "1em" : i, a = e.fill, s = void 0 === a ? "currentColor" : a, c = e.style, u = e.className; return r.createElement("svg", {
                className: u, style: c, width: n, height: o, viewBox: "0 0 48 48", fill: s, xmlns: "http://www.w3.org/2000/svg"
            }, r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M13.0001 13C13.0001 9.68629 15.6864 7 19.0001 7C22.3139 7 25.0001 9.68629 25.0001 13C25.0001 16.3137 22.3139 19 19.0001 19C15.6864 19 13.0001 16.3137 13.0001 13ZM19.0001 3C13.4773 3 9.00015 7.47715 9.00015 13C9.00015 18.5228 13.4773 23 19.0001 23C24.523 23 29.0001 18.5228 29.0001 13C29.0001 7.47715 24.523 3 19.0001 3ZM5.19435 40.9681C6.70152 35.5144 10.0886 32.2352 13.9162 30.738C17.7125 29.2531 22.0358 29.4832 25.6064 31.2486C26.1015 31.4934 26.7131 31.338 26.9931 30.8619L28.0072 29.1381C28.2872 28.662 28.1294 28.0465 27.6384 27.7937C23.0156 25.4139 17.4034 25.0789 12.4591 27.0129C7.37426 29.0018 3.09339 33.3505 1.2883 40.0887C1.14539 40.6222 1.48573 41.1592 2.02454 41.2805L3.97575 41.7195C4.51457 41.8408 5.04724 41.5004 5.19435 40.9681ZM37.0002 26C37.5525 26 38.0002 26.4477 38.0002 27V34H45.0002C45.5525 34 46.0002 34.4477 46.0002 35V37C46.0002 37.5523 45.5525 38 45.0002 38H38.0002V45C38.0002 45.5523 37.5525 46 37.0002 46H35.0002C34.448 46 34.0002 45.5523 34.0002 45V38H27.0002C26.448 38 26.0002 37.5523 26.0002 37V35C26.0002 34.4477 26.448 34 27.0002 34H34.0002V27C34.0002 26.4477 34.448 26 35.0002 26H37.0002Z"
            }))
        }
    }, 62687: (e, t, n) => {
        n.d(t, {
            Z: () => i
        }); var r = n(91051); function i(e) {
            var t = e.width, n = void 0 === t ? "1em" : t, i = e.height, o = void 0 === i ? "1em" : i, a = e.fill, s = void 0 === a ? "currentColor" : a, c = e.style, u = e.className; return r.createElement("svg", {
                className: u, style: c, width: n, height: o, viewBox: "0 0 48 48", fill: s, xmlns: "http://www.w3.org/2000/svg"
            }, r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M24 12.5C17.6487 12.5 12.5 17.6487 12.5 24C12.5 30.3513 17.6487 35.5 24 35.5C26.8172 35.5 29.3919 34.4902 31.3919 32.8101C32.4491 31.9219 34.026 32.059 34.9142 33.1161C35.8023 34.1733 35.6653 35.7503 34.6081 36.6384C31.741 39.0471 28.0369 40.5 24 40.5C14.8873 40.5 7.5 33.1127 7.5 24C7.5 14.8873 14.8873 7.5 24 7.5C33.1127 7.5 40.5 14.8873 40.5 24C40.5 25.3807 39.3807 26.5 38 26.5C36.6193 26.5 35.5 25.3807 35.5 24C35.5 17.6487 30.3513 12.5 24 12.5Z"
            }))
        }
    }, 24054: (e, t, n) => {
        n.d(t, {
            Z: () => i
        }); var r = n(91051); function i(e) {
            var t = e.width, n = void 0 === t ? "1em" : t, i = e.height, o = void 0 === i ? "1em" : i, a = e.fill, s = void 0 === a ? "currentColor" : a, c = e.style, u = e.className; return r.createElement("svg", {
                className: u, style: c, width: n, height: o, viewBox: "0 0 48 48", fill: s, xmlns: "http://www.w3.org/2000/svg"
            }, r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M8 6C6.89543 6 6 6.89543 6 8V21C6 22.1046 6.89543 23 8 23H21C22.1046 23 23 22.1046 23 21V8C23 6.89543 22.1046 6 21 6H8ZM10 19V10H19V19H10ZM28 6C26.8954 6 26 6.89543 26 8V21C26 22.1046 26.8954 23 28 23H41C42.1046 23 43 22.1046 43 21V8C43 6.89543 42.1046 6 41 6H28ZM30 19V10H39V19H30ZM8 26C6.89543 26 6 26.8954 6 28V41C6 42.1046 6.89543 43 8 43H21C22.1046 43 23 42.1046 23 41V28C23 26.8954 22.1046 26 21 26H8ZM10 39V30H19V39H10ZM26 42C26 42.5523 26.4477 43 27 43H29C29.5523 43 30 42.5523 30 42V27C30 26.4477 29.5523 26 29 26H27C26.4477 26 26 26.4477 26 27V42ZM32.5 42C32.5 42.5523 32.9477 43 33.5 43H35.5C36.0523 43 36.5 42.5523 36.5 42V27C36.5 26.4477 36.0523 26 35.5 26H33.5C32.9477 26 32.5 26.4477 32.5 27V42ZM40 43C39.4477 43 39 42.5523 39 42V27C39 26.4477 39.4477 26 40 26H42C42.5523 26 43 26.4477 43 27V42C43 42.5523 42.5523 43 42 43H40Z"
            }))
        }
    }, 38743: (e, t, n) => {
        n.d(t, {
            Z: () => i
        }); var r = n(91051); function i(e) {
            var t = e.width, n = void 0 === t ? "1em" : t, i = e.height, o = void 0 === i ? "1em" : i, a = e.fill, s = void 0 === a ? "currentColor" : a, c = e.style, u = e.className; return r.createElement("svg", {
                className: u, style: c, width: n, height: o, viewBox: "0 0 48 48", fill: s, xmlns: "http://www.w3.org/2000/svg"
            }, r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6ZM2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24ZM24.0909 15C22.172 15 20.3433 16.2292 19.2617 18.61C19.0332 19.1128 18.4726 19.4 17.9487 19.2253L16.0513 18.5929C15.5274 18.4182 15.2406 17.8497 15.4542 17.3405C16.9801 13.7031 20.0581 11 24.0909 11C28.459 11 32 14.541 32 18.9091C32 21.2138 30.7884 23.4606 29.2167 25.074C27.8157 26.5121 25.5807 27.702 22.9988 27.9518C22.4491 28.0049 22.0001 27.5523 22.0001 27V25C22.0001 24.4477 22.4504 24.0057 22.9955 23.9167C24.2296 23.7153 25.5034 23.1533 26.3515 22.2828C27.4389 21.1666 28 19.8679 28 18.9091C28 16.7502 26.2498 15 24.0909 15ZM24 36C22.3431 36 21 34.6569 21 33C21 31.3431 22.3431 30 24 30C25.6569 30 27 31.3431 27 33C27 34.6569 25.6569 36 24 36Z"
            }))
        }
    }, 81426: (e, t, n) => {
        n.d(t, {
            Z: () => i
        }); var r = n(91051); function i(e) {
            var t = e.width, n = void 0 === t ? "1em" : t, i = e.height, o = void 0 === i ? "1em" : i, a = e.fill, s = void 0 === a ? "currentColor" : a, c = e.style, u = e.className; return r.createElement("svg", {
                className: u, style: c, width: n, height: o, viewBox: "0 0 48 48", fill: s, xmlns: "http://www.w3.org/2000/svg"
            }, r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M6 17V10C6 7.79086 7.79086 6 10 6H17C17.5523 6 18 6.44772 18 7V9C18 9.55228 17.5523 10 17 10H11C10.4477 10 10 10.4477 10 11V17C10 17.5523 9.55228 18 9 18H7C6.44772 18 6 17.5523 6 17ZM42 17V10C42 7.79086 40.2091 6 38 6H31C30.4477 6 30 6.44772 30 7V9C30 9.55228 30.4477 10 31 10H37C37.5523 10 38 10.4477 38 11V17C38 17.5523 38.4477 18 39 18H41C41.5523 18 42 17.5523 42 17ZM42 38V31C42 30.4477 41.5523 30 41 30H39C38.4477 30 38 30.4477 38 31V37C38 37.5523 37.5523 38 37 38H31C30.4477 38 30 38.4477 30 39V41C30 41.5523 30.4477 42 31 42H38C40.2091 42 42 40.2091 42 38ZM6 31V38C6 40.2091 7.79086 42 10 42H17C17.5523 42 18 41.5523 18 41V39C18 38.4477 17.5523 38 17 38H11C10.4477 38 10 37.5523 10 37V31C10 30.4477 9.55228 30 9 30H7C6.44772 30 6 30.4477 6 31ZM7 22C6.44772 22 6 22.4477 6 23V25C6 25.5523 6.44772 26 7 26H41C41.5523 26 42 25.5523 42 25V23C42 22.4477 41.5523 22 41 22H7Z"
            }))
        }
    }, 58778: (e, t, n) => {
        n.d(t, {
            Z: () => i
        }); var r = n(91051); function i(e) {
            var t = e.width, n = void 0 === t ? "1em" : t, i = e.height, o = void 0 === i ? "1em" : i, a = e.fill, s = void 0 === a ? "currentColor" : a, c = e.style, u = e.className; return r.createElement("svg", {
                className: u, style: c, width: n, height: o, viewBox: "0 0 48 48", fill: s, xmlns: "http://www.w3.org/2000/svg"
            }, r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M42.6925 12.7217C43.0748 13.1203 43.0616 13.7533 42.663 14.1356L18.8847 36.9434C18.0993 37.6967 16.8556 37.6838 16.086 36.9142L5.29314 26.1213C4.90261 25.7308 4.90261 25.0976 5.29314 24.7071L6.70735 23.2929C7.09788 22.9024 7.73104 22.9024 8.12156 23.2929L17.5294 32.7007L39.8941 11.2489C40.2927 10.8666 40.9257 10.8798 41.308 11.2783L42.6925 12.7217Z"
            }))
        }
    }, 51877: (e, t, n) => {
        n.d(t, {
            Z: () => i
        }); var r = n(91051); function i(e) {
            var t = e.width, n = void 0 === t ? "1em" : t, i = e.height, o = void 0 === i ? "1em" : i, a = e.fill, s = void 0 === a ? "currentColor" : a, c = e.style, u = e.className; return r.createElement("svg", {
                className: u, style: c, width: n, height: o, viewBox: "0 0 16 12", fill: s, xmlns: "http://www.w3.org/2000/svg"
            }, r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M13.9637 0.370662C14.1617 0.168152 14.4882 0.170371 14.6834 0.375552L15.6676 1.40986C15.8531 1.60483 15.851 1.91164 15.6629 2.10407L6.33538 11.644C5.86141 12.1288 5.09629 12.1169 4.6365 11.6177L0.326723 6.93829C0.144403 6.74033 0.151478 6.43358 0.342731 6.24424L1.35546 5.24162C1.55673 5.04237 1.88315 5.0499 2.07502 5.25822L5.5238 9.0028L13.9637 0.370662Z"
            }))
        }
    }, 94894: (e, t, n) => {
        n.d(t, {
            Z: () => i
        }); var r = n(91051); function i(e) {
            var t = e.width, n = void 0 === t ? "1em" : t, i = e.height, o = void 0 === i ? "1em" : i, a = (e.fill, e.style), s = e.className; return r.createElement("svg", {
                className: s, style: a, width: n, height: o, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg"
            }, r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M43.8044 6.79902C42.5841 7.62363 39.7822 8.82191 38.4004 8.82191V8.82437C36.8226 7.08554 34.6013 6 32.1377 6C27.353 6 23.4731 10.093 23.4731 15.1387C23.4731 15.8398 23.5501 16.5236 23.6925 17.1793H23.6911C17.2007 16.9996 10.1022 13.5678 5.82893 7.69403C3.2016 12.4916 5.4752 17.8272 8.45673 19.7713C7.43613 19.8526 5.55733 19.6473 4.673 18.737C4.61373 21.9212 6.06507 26.1403 11.3571 27.6709C10.3379 28.2494 8.53373 28.0834 7.74926 27.9604C8.0246 30.6484 11.5927 34.1625 15.4945 34.1625C14.1039 35.8594 8.8716 38.9374 3 37.9582C6.98767 40.5177 11.6352 42 16.5543 42C30.5333 42 41.3894 30.0482 40.8051 15.3041C40.8028 15.2879 40.8028 15.2716 40.8014 15.2539C40.8028 15.216 40.8051 15.1781 40.8051 15.1387C40.8051 15.0929 40.8014 15.0496 40.8 15.0053C42.0726 14.0871 43.7801 12.463 45 10.3254C44.2925 10.7365 42.1701 11.5596 40.1952 11.7639C41.4627 11.0422 43.3405 8.67865 43.8044 6.79902Z", fill: "#1DA1F2"
            }))
        }
    }, 91574: (e, t, n) => {
        n.d(t, {
            Z: () => i
        }); var r = n(91051); function i(e) {
            var t = e.width, n = void 0 === t ? "1em" : t, i = e.height, o = void 0 === i ? "1em" : i, a = (e.fill, e.style), s = e.className; return r.createElement("svg", {
                className: s, style: a, width: n, height: o, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg"
            }, r.createElement("path", {
                d: "M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z", fill: "#4D76A1"
            }), r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M15.4221 22.9074H16.7111C16.7111 22.9074 17.1005 22.8663 17.2993 22.6603C17.4823 22.4712 17.4764 22.1161 17.4764 22.1161C17.4764 22.1161 17.4512 20.4534 18.254 20.2086C19.0453 19.9674 20.0615 21.8155 21.1386 22.5261C21.9531 23.0639 22.572 22.946 22.572 22.946L25.4519 22.9074C25.4519 22.9074 26.9584 22.8182 26.2441 21.6796C26.1855 21.5864 25.8281 20.8373 24.1028 19.2979C22.2971 17.6868 22.5389 17.9474 24.7141 15.1604C26.0389 13.4632 26.5685 12.427 26.4031 11.9832C26.2453 11.5605 25.2709 11.6722 25.2709 11.6722L22.0283 11.6916C22.0283 11.6916 21.7879 11.6601 21.6096 11.7625C21.4355 11.863 21.3233 12.0971 21.3233 12.0971C21.3233 12.0971 20.8101 13.4105 20.1256 14.5275C18.6817 16.8844 18.1044 17.0088 17.8684 16.8625C17.3195 16.5214 17.4565 15.4922 17.4565 14.7611C17.4565 12.4771 17.8169 11.5247 16.7548 11.2782C16.4023 11.1963 16.1429 11.1423 15.2415 11.1335C14.0845 11.122 13.1052 11.1369 12.5507 11.3981C12.1818 11.5717 11.8972 11.9587 12.0706 11.9809C12.2849 12.0085 12.7703 12.1067 13.0276 12.4436C13.3599 12.8781 13.3482 13.8541 13.3482 13.8541C13.3482 13.8541 13.5391 16.5428 12.9023 16.8768C12.4652 17.1059 11.8656 16.6382 10.5783 14.4999C9.91875 13.4046 9.42076 12.1939 9.42076 12.1939C9.42076 12.1939 9.32474 11.9677 9.15347 11.8467C8.94561 11.7001 8.65519 11.6533 8.65519 11.6533L5.57386 11.6728C5.57386 11.6728 5.1113 11.6851 4.94149 11.8785C4.79043 12.0504 4.92949 12.4061 4.92949 12.4061C4.92949 12.4061 7.34186 17.8314 10.0733 20.5654C12.5779 23.0721 15.4221 22.9074 15.4221 22.9074Z", fill: "white"
            }))
        }
    }, 59688: (e, t, n) => {
        n.d(t, {
            Z: () => i
        }); var r = n(91051); function i(e) {
            var t = e.width, n = void 0 === t ? "1em" : t, i = e.height, o = void 0 === i ? "1em" : i, a = e.fill, s = void 0 === a ? "currentColor" : a, c = e.style, u = e.className; return r.createElement("svg", {
                className: u, style: c, width: n, height: o, viewBox: "0 0 48 48", fill: s, xmlns: "http://www.w3.org/2000/svg"
            }, r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M21.1718 23.9999L10.2931 13.1212C9.90261 12.7307 9.90261 12.0975 10.2931 11.707L11.7074 10.2928C12.0979 9.90228 12.731 9.90228 13.1216 10.2928L24.0002 21.1715L34.8789 10.2928C35.2694 9.90228 35.9026 9.90228 36.2931 10.2928L37.7073 11.707C38.0979 12.0975 38.0979 12.7307 37.7073 13.1212L26.8287 23.9999L37.7073 34.8786C38.0979 35.2691 38.0979 35.9023 37.7073 36.2928L36.2931 37.707C35.9026 38.0975 35.2694 38.0975 34.8789 37.707L24.0002 26.8283L13.1216 37.707C12.731 38.0975 12.0979 38.0975 11.7074 37.707L10.2931 36.2928C9.90261 35.9023 9.90261 35.2691 10.2931 34.8786L21.1718 23.9999Z"
            }))
        }
    }, 50786: (e, t, n) => {
        n.d(t, {
            Z: () => i
        }); var r = n(91051); function i(e) {
            var t = e.width, n = void 0 === t ? "1em" : t, i = e.height, o = void 0 === i ? "1em" : i, a = e.fill, s = void 0 === a ? "currentColor" : a, c = e.style, u = e.className; return r.createElement("svg", {
                className: u, style: c, width: n, height: o, viewBox: "0 0 48 48", fill: s, xmlns: "http://www.w3.org/2000/svg"
            }, r.createElement("path", {
                fillRule: "evenodd", clipRule: "evenodd", d: "M24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46ZM15.1466 30.7323L21.8788 24.0001L15.1466 17.2679C14.756 16.8774 14.756 16.2442 15.1466 15.8537L15.8537 15.1466C16.2442 14.756 16.8774 14.756 17.2679 15.1466L24.0001 21.8788L30.7323 15.1466C31.1229 14.756 31.756 14.756 32.1466 15.1466L32.8537 15.8537C33.2442 16.2442 33.2442 16.8774 32.8537 17.2679L26.1214 24.0001L32.8537 30.7323C33.2442 31.1229 33.2442 31.756 32.8537 32.1466L32.1466 32.8537C31.756 33.2442 31.1229 33.2442 30.7323 32.8537L24.0001 26.1214L17.2679 32.8537C16.8774 33.2442 16.2442 33.2442 15.8537 32.8537L15.1466 32.1466C14.756 31.756 14.756 31.1229 15.1466 30.7323Z"
            }))
        }
    }, 64785: (e, t, n) => {
        n.d(t, {
            Z: () => f
        }); var r = n(43078), i = n(91051), o = n(99385), a = n.n(o); function s(e, t) {
            var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e); t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            } return n
        } function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {
                }; t % 2 ? s(Object(n), !0).forEach((function (t) {
                    (0, r.Z)(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            } return e
        } var u = {
            default: 48, small: 32
        }, l = function (e) {
            var t = e.size, n = void 0 === t ? 48 : t, r = e.center, o = void 0 !== r && r, s = e.style, l = e.className, f = i.createElement("svg", {
                preserveAspectRatio: "none", viewBox: "0 0 160 90", width: "160", height: "90"
            }, i.createElement("defs", null, i.createElement("mask", {
                id: "redhole"
            }, i.createElement("rect", {
                width: "100%", height: "100%", fill: "white"
            }), i.createElement("circle", {
                fill: "black", className: "tiktok-ui-loading-red tiktok-ui-loading-black"
            })), i.createElement("mask", {
                id: "greenhole"
            }, i.createElement("rect", {
                width: "100%", height: "100%", fill: "white"
            }), i.createElement("circle", {
                fill: "black", className: "tiktok-ui-loading-green tiktok-ui-loading-black"
            }))), i.createElement("circle", {
                strokeWidth: 2, stroke: "#3AF2FF", className: "tiktok-ui-loading-black-circle"
            }), i.createElement("circle", {
                className: "tiktok-ui-loading-green", mask: "url(#redhole)"
            }), i.createElement("circle", {
                className: "tiktok-ui-loading-red", mask: "url(#greenhole)"
            })), p = "string" == typeof n ? u[n] : n, h = p / 200, d = {
                WebkitTransform: "scale(".concat(h, ")"), transform: "scale(".concat(h, ")")
            }, g = c(c({
            }, s), {
            }, {
                width: p, height: p
            }); return i.createElement("div", {
                style: g, className: a()("tiktok-ui-loading-container", l, {
                    "is-center": o
                })
            }, i.createElement("div", {
                style: d, className: "tiktok-ui-loading"
            }, f))
        }; const f = (0, i.memo)(l)
    }, 16789: (e, t, n) => {
        n.d(t, {
            Z: () => Je
        }); var r, i = n(43078), o = n(91051), a = n(99385), s = n.n(a), c = n(15568), u = n(53856), l = n(85300), f = n(49227), p = n(36283), h = n(69073), d = n(58454), g = n(88150), v = n.n(g), m = n(57925), y = n(95321), C = n(32667), _ = n.t(C, 2), w = (0, l.Z)({
        }, _), b = w.version, k = w.render, E = w.unmountComponentAtNode; try {
            Number((b || "").split(".")[0]) >= 18 && (r = w.createRoot)
        } catch (e) {
        } function x(e) {
            var t = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED; t && "object" === (0, y.Z)(t) && (t.usingClientEntryPoint = e)
        } var L = "__rc_react_root__"; function O(e) {
            return N.apply(this, arguments)
        } function N() {
            return (N = (0, m.Z)(v().mark((function e(t) {
                return v().wrap((function (e) {
                    for (; ;)switch (e.prev = e.next) {
                        case 0: return e.abrupt("return", Promise.resolve().then((function () {
                            var e; null === (e = t[L]) || void 0 === e || e.unmount(), delete t[L]
                        }))); case 1: case "end": return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        } function S(e) {
            E(e)
        } function I() {
            return (I = (0, m.Z)(v().mark((function e(t) {
                return v().wrap((function (e) {
                    for (; ;)switch (e.prev = e.next) {
                        case 0: if (void 0 === r) {
                            e.next = 2; break
                        } return e.abrupt("return", O(t)); case 2: S(t); case 3: case "end": return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        } var R = n(69252), M = n(39954); function T() {
            return !("undefined" == typeof window || !window.document || !window.document.createElement)
        } function Z(e, t) {
            var n = {
            }; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n
        } var A, P, D, j = (A = T(), P = "undefined" != typeof window ? window : {
        }, D = {
            animationend: Z("Animation", "AnimationEnd"), transitionend: Z("Transition", "TransitionEnd")
        }, A && ("AnimationEvent" in P || delete D.animationend.animation, "TransitionEvent" in P || delete D.transitionend.transition), D), z = {
        }; if (T()) {
            var V = document.createElement("div"); z = V.style
        } var H = {
        }; function K(e) {
            if (H[e]) return H[e]; var t = j[e]; if (t) for (var n = Object.keys(t), r = n.length, i = 0; i < r; i += 1) {
                var o = n[i]; if (Object.prototype.hasOwnProperty.call(t, o) && o in z) return H[e] = t[o], H[e]
            } return ""
        } var B = K("animationend"), F = K("transitionend"), U = !(!B || !F), W = B || "animationend", q = F || "transitionend"; function G(e, t) {
            return e ? "object" === (0, y.Z)(e) ? e[t.replace(/-\w/g, (function (e) {
                return e[1].toUpperCase()
            }))] : "".concat(e, "-").concat(t) : null
        } var J = "none", X = "appear", Y = "enter", Q = "leave", $ = "none", ee = "prepare", te = "start", ne = "active", re = "end"; function ie(e) {
            var t = o.useRef(!1), n = o.useState(e), r = (0, R.Z)(n, 2), i = r[0], a = r[1]; return o.useEffect((function () {
                return t.current = !1, function () {
                    t.current = !0
                }
            }), []), [i, function (e, n) {
                n && t.current || a(e)
            }]
        } var oe = function (e) {
            return +setTimeout(e, 16)
        }, ae = function (e) {
            return clearTimeout(e)
        }; "undefined" != typeof window && "requestAnimationFrame" in window && (oe = function (e) {
            return window.requestAnimationFrame(e)
        }, ae = function (e) {
            return window.cancelAnimationFrame(e)
        }); var se = 0, ce = new Map; function ue(e) {
            ce.delete(e)
        } function le(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, n = se += 1; function r(t) {
                if (0 === t) ue(n), e(); else {
                    var i = oe((function () {
                        r(t - 1)
                    })); ce.set(n, i)
                }
            } return r(t), n
        } le.cancel = function (e) {
            var t = ce.get(e); return ue(t), ae(t)
        }; const fe = T() ? o.useLayoutEffect : o.useEffect; var pe = [ee, te, ne, re]; function he(e) {
            return e === ne || e === re
        } function de(e, t, n, r) {
            var a = r.motionEnter, s = void 0 === a || a, c = r.motionAppear, u = void 0 === c || c, f = r.motionLeave, p = void 0 === f || f, h = r.motionDeadline, d = r.motionLeaveImmediately, g = r.onAppearPrepare, v = r.onEnterPrepare, m = r.onLeavePrepare, y = r.onAppearStart, C = r.onEnterStart, _ = r.onLeaveStart, w = r.onAppearActive, b = r.onEnterActive, k = r.onLeaveActive, E = r.onAppearEnd, x = r.onEnterEnd, L = r.onLeaveEnd, O = r.onVisibleChanged, N = ie(), S = (0, R.Z)(N, 2), I = S[0], M = S[1], T = ie(J), Z = (0, R.Z)(T, 2), A = Z[0], P = Z[1], D = ie(null), j = (0, R.Z)(D, 2), z = j[0], V = j[1], H = (0, o.useRef)(!1), K = (0, o.useRef)(null); function B() {
                return n()
            } var F = (0, o.useRef)(!1); function U(e) {
                var t = B(); if (!e || e.deadline || e.target === t) {
                    var n, r = F.current; A === X && r ? n = null == E ? void 0 : E(t, e) : A === Y && r ? n = null == x ? void 0 : x(t, e) : A === Q && r && (n = null == L ? void 0 : L(t, e)), A !== J && r && !1 !== n && (P(J, !0), V(null, !0))
                }
            } var G = function (e) {
                var t = (0, o.useRef)(), n = (0, o.useRef)(e); n.current = e; var r = o.useCallback((function (e) {
                    n.current(e)
                }), []); function i(e) {
                    e && (e.removeEventListener(q, r), e.removeEventListener(W, r))
                } return o.useEffect((function () {
                    return function () {
                        i(t.current)
                    }
                }), []), [function (e) {
                    t.current && t.current !== e && i(t.current), e && e !== t.current && (e.addEventListener(q, r), e.addEventListener(W, r), t.current = e)
                }, i]
            }(U), oe = (0, R.Z)(G, 1)[0], ae = o.useMemo((function () {
                var e, t, n; switch (A) {
                    case X: return e = {
                    }, (0, i.Z)(e, ee, g), (0, i.Z)(e, te, y), (0, i.Z)(e, ne, w), e; case Y: return t = {
                    }, (0, i.Z)(t, ee, v), (0, i.Z)(t, te, C), (0, i.Z)(t, ne, b), t; case Q: return n = {
                    }, (0, i.Z)(n, ee, m), (0, i.Z)(n, te, _), (0, i.Z)(n, ne, k), n; default: return {
                    }
                }
            }), [A]), se = function (e, t) {
                var n = ie($), r = (0, R.Z)(n, 2), i = r[0], a = r[1], s = function () {
                    var e = o.useRef(null); function t() {
                        le.cancel(e.current)
                    } return o.useEffect((function () {
                        return function () {
                            t()
                        }
                    }), []), [function n(r) {
                        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2; t(); var o = le((function () {
                            i <= 1 ? r({
                                isCanceled: function () {
                                    return o !== e.current
                                }
                            }) : n(r, i - 1)
                        })); e.current = o
                    }, t]
                }(), c = (0, R.Z)(s, 2), u = c[0], l = c[1]; return fe((function () {
                    if (i !== $ && i !== re) {
                        var e = pe.indexOf(i), n = pe[e + 1], r = t(i); !1 === r ? a(n, !0) : u((function (e) {
                            function t() {
                                e.isCanceled() || a(n, !0)
                            } !0 === r ? t() : Promise.resolve(r).then(t)
                        }))
                    }
                }), [e, i]), o.useEffect((function () {
                    return function () {
                        l()
                    }
                }), []), [function () {
                    a(ee, !0)
                }, i]
            }(A, (function (e) {
                if (e === ee) {
                    var t = ae.prepare; return !!t && t(B())
                } var n; return de in ae && V((null === (n = ae[de]) || void 0 === n ? void 0 : n.call(ae, B(), null)) || null), de === ne && (oe(B()), h > 0 && (clearTimeout(K.current), K.current = setTimeout((function () {
                    U({
                        deadline: !0
                    })
                }), h))), !0
            })), ce = (0, R.Z)(se, 2), ue = ce[0], de = ce[1], ge = he(de); F.current = ge, fe((function () {
                M(t); var n, r = H.current; H.current = !0, e && (!r && t && u && (n = X), r && t && s && (n = Y), (r && !t && p || !r && d && !t && p) && (n = Q), n && (P(n), ue()))
            }), [t]), (0, o.useEffect)((function () {
                (A === X && !u || A === Y && !s || A === Q && !p) && P(J)
            }), [u, s, p]), (0, o.useEffect)((function () {
                return function () {
                    H.current = !1, clearTimeout(K.current)
                }
            }), []), (0, o.useEffect)((function () {
                void 0 !== I && A === J && (null == O || O(I))
            }), [I, A]); var ve = z; return ae.prepare && de === te && (ve = (0, l.Z)({
                transition: "none"
            }, ve)), [A, de, ve, null != I ? I : t]
        } const ge = function (e) {
            (0, h.Z)(n, e); var t = (0, d.Z)(n); function n() {
                return (0, f.Z)(this, n), t.apply(this, arguments)
            } return (0, p.Z)(n, [{
                key: "render", value: function () {
                    return this.props.children
                }
            }]), n
        }(o.Component), ve = function (e) {
            var t = e; function n(e) {
                return !(!e.motionName || !t)
            } "object" === (0, y.Z)(e) && (t = e.transitionSupport); var r = o.forwardRef((function (e, t) {
                var r = e.visible, a = void 0 === r || r, c = e.removeOnLeave, u = void 0 === c || c, f = e.forceRender, p = e.children, h = e.motionName, d = e.leavedClassName, g = e.eventProps, v = n(e), m = (0, o.useRef)(), _ = (0, o.useRef)(), w = de(v, a, (function () {
                    try {
                        return m.current instanceof HTMLElement ? m.current : (e = _.current) instanceof HTMLElement ? e : C.findDOMNode(e)
                    } catch (e) {
                        return null
                    } var e
                }), e), b = (0, R.Z)(w, 4), k = b[0], E = b[1], x = b[2], L = b[3], O = o.useRef(L); L && (O.current = !0); var N, S, I, T, Z, A = o.useCallback((function (e) {
                    m.current = e, function (e, t) {
                        "function" == typeof e ? e(t) : "object" === (0, y.Z)(e) && e && "current" in e && (e.current = t)
                    }(t, e)
                }), [t]), P = (0, l.Z)((0, l.Z)({
                }, g), {
                }, {
                    visible: a
                }); if (p) if (k !== J && n(e)) {
                    var D, j; E === ee ? j = "prepare" : he(E) ? j = "active" : E === te && (j = "start"), N = p((0, l.Z)((0, l.Z)({
                    }, P), {
                    }, {
                        className: s()(G(h, k), (D = {
                        }, (0, i.Z)(D, G(h, "".concat(k, "-").concat(j)), j), (0, i.Z)(D, h, "string" == typeof h), D)), style: x
                    }), A)
                } else N = L ? p((0, l.Z)({
                }, P), A) : !u && O.current ? p((0, l.Z)((0, l.Z)({
                }, P), {
                }, {
                    className: d
                }), A) : f ? p((0, l.Z)((0, l.Z)({
                }, P), {
                }, {
                    style: {
                        display: "none"
                    }
                }), A) : null; else N = null; return !o.isValidElement(N) || (S = N, "function" == typeof (Z = (0, M.isMemo)(S) ? S.type.type : S.type) && !(null === (I = Z.prototype) || void 0 === I ? void 0 : I.render) || "function" == typeof S && !(null === (T = S.prototype) || void 0 === T ? void 0 : T.render)) || N.ref || (N = o.cloneElement(N, {
                    ref: A
                })), o.createElement(ge, {
                    ref: _
                }, N)
            })); return r.displayName = "CSSMotion", r
        }(U); var me = "add", ye = "keep", Ce = "remove", _e = "removed"; function we(e) {
            var t; return t = e && "object" === (0, y.Z)(e) && "key" in e ? e : {
                key: e
            }, (0, l.Z)((0, l.Z)({
            }, t), {
            }, {
                key: String(t.key)
            })
        } function be() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; return e.map(we)
        } function ke() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n = [], r = 0, i = t.length, o = be(e), a = be(t); o.forEach((function (e) {
                for (var t = !1, o = r; o < i; o += 1) {
                    var s = a[o]; if (s.key === e.key) {
                        r < o && (n = n.concat(a.slice(r, o).map((function (e) {
                            return (0, l.Z)((0, l.Z)({
                            }, e), {
                            }, {
                                status: me
                            })
                        }))), r = o), n.push((0, l.Z)((0, l.Z)({
                        }, s), {
                        }, {
                            status: ye
                        })), r += 1, t = !0; break
                    }
                } t || n.push((0, l.Z)((0, l.Z)({
                }, e), {
                }, {
                    status: Ce
                }))
            })), r < i && (n = n.concat(a.slice(r).map((function (e) {
                return (0, l.Z)((0, l.Z)({
                }, e), {
                }, {
                    status: me
                })
            })))); var s = {
            }; n.forEach((function (e) {
                var t = e.key; s[t] = (s[t] || 0) + 1
            })); var c = Object.keys(s).filter((function (e) {
                return s[e] > 1
            })); return c.forEach((function (e) {
                n = n.filter((function (t) {
                    var n = t.key, r = t.status; return n !== e || r !== Ce
                })), n.forEach((function (t) {
                    t.key === e && (t.status = ye)
                }))
            })), n
        } var Ee = ["component", "children", "onVisibleChanged", "onAllRemoved"], xe = ["status"], Le = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"]; const Oe = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ve, n = function (e) {
                (0, h.Z)(r, e); var n = (0, d.Z)(r); function r() {
                    var e; (0, f.Z)(this, r); for (var t = arguments.length, i = new Array(t), o = 0; o < t; o++)i[o] = arguments[o]; return (e = n.call.apply(n, [this].concat(i))).state = {
                        keyEntities: []
                    }, e.removeKey = function (t) {
                        var n = e.state.keyEntities.map((function (e) {
                            return e.key !== t ? e : (0, l.Z)((0, l.Z)({
                            }, e), {
                            }, {
                                status: _e
                            })
                        })); return e.setState({
                            keyEntities: n
                        }), n.filter((function (e) {
                            return e.status !== _e
                        })).length
                    }, e
                } return (0, p.Z)(r, [{
                    key: "render", value: function () {
                        var e = this, n = this.state.keyEntities, r = this.props, i = r.component, a = r.children, s = r.onVisibleChanged, l = r.onAllRemoved, f = (0, c.Z)(r, Ee), p = i || o.Fragment, h = {
                        }; return Le.forEach((function (e) {
                            h[e] = f[e], delete f[e]
                        })), delete f.keys, o.createElement(p, f, n.map((function (n) {
                            var r = n.status, i = (0, c.Z)(n, xe), f = r === me || r === ye; return o.createElement(t, (0, u.Z)({
                            }, h, {
                                key: i.key, visible: f, eventProps: i, onVisibleChanged: function (t) {
                                    null == s || s(t, {
                                        key: i.key
                                    }), t || 0 === e.removeKey(i.key) && l && l()
                                }
                            }), a)
                        })))
                    }
                }], [{
                    key: "getDerivedStateFromProps", value: function (e, t) {
                        var n = e.keys, r = t.keyEntities, i = be(n); return {
                            keyEntities: ke(r, i).filter((function (e) {
                                var t = r.find((function (t) {
                                    var n = t.key; return e.key === n
                                })); return !t || t.status !== _e || e.status !== Ce
                            }))
                        }
                    }
                }]), r
            }(o.Component); return n.defaultProps = {
                component: "div"
            }, n
        }(U); var Ne = function (e) {
            (0, h.Z)(n, e); var t = (0, d.Z)(n); function n() {
                var e; (0, f.Z)(this, n); for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)i[o] = arguments[o]; return (e = t.call.apply(t, [this].concat(i))).closeTimer = null, e.close = function (t) {
                    t && t.stopPropagation(), e.clearCloseTimer(); var n = e.props, r = n.onClose, i = n.noticeKey; r && r(i)
                }, e.startCloseTimer = function () {
                    e.props.duration && (e.closeTimer = window.setTimeout((function () {
                        e.close()
                    }), 1e3 * e.props.duration))
                }, e.clearCloseTimer = function () {
                    e.closeTimer && (clearTimeout(e.closeTimer), e.closeTimer = null)
                }, e
            } return (0, p.Z)(n, [{
                key: "componentDidMount", value: function () {
                    this.startCloseTimer()
                }
            }, {
                key: "componentDidUpdate", value: function (e) {
                    (this.props.duration !== e.duration || this.props.updateMark !== e.updateMark || this.props.visible !== e.visible && this.props.visible) && this.restartCloseTimer()
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    this.clearCloseTimer()
                }
            }, {
                key: "restartCloseTimer", value: function () {
                    this.clearCloseTimer(), this.startCloseTimer()
                }
            }, {
                key: "render", value: function () {
                    var e = this, t = this.props, n = t.prefixCls, r = t.className, a = t.closable, c = t.closeIcon, l = t.style, f = t.onClick, p = t.children, h = t.holder, d = "".concat(n, "-notice"), g = Object.keys(this.props).reduce((function (t, n) {
                        return "data-" !== n.substr(0, 5) && "aria-" !== n.substr(0, 5) && "role" !== n || (t[n] = e.props[n]), t
                    }), {
                    }), v = o.createElement("div", (0, u.Z)({
                        className: s()(d, r, (0, i.Z)({
                        }, "".concat(d, "-closable"), a)), style: l, onMouseEnter: this.clearCloseTimer, onMouseLeave: this.startCloseTimer, onClick: f
                    }, g), o.createElement("div", {
                        className: "".concat(d, "-content")
                    }, p), a ? o.createElement("a", {
                        tabIndex: 0, onClick: this.close, className: "".concat(d, "-close")
                    }, c || o.createElement("span", {
                        className: "".concat(d, "-close-x")
                    })) : null); return h ? C.createPortal(v, h) : v
                }
            }]), n
        }(o.Component); Ne.defaultProps = {
            onClose: function () {
            }, duration: 1.5
        }; var Se = n(67814), Ie = ["getContainer"], Re = 0, Me = Date.now(); function Te() {
            var e = Re; return Re += 1, "rcNotification_".concat(Me, "_").concat(e)
        } var Ze = function (e) {
            (0, h.Z)(n, e); var t = (0, d.Z)(n); function n() {
                var e; (0, f.Z)(this, n); for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)i[o] = arguments[o]; return (e = t.call.apply(t, [this].concat(i))).state = {
                    notices: []
                }, e.hookRefs = new Map, e.add = function (t, n) {
                    var r = t.key || Te(), i = (0, l.Z)((0, l.Z)({
                    }, t), {
                    }, {
                        key: r
                    }), o = e.props.maxCount; e.setState((function (e) {
                        var t = e.notices, a = t.map((function (e) {
                            return e.notice.key
                        })).indexOf(r), s = t.concat(); return -1 !== a ? s.splice(a, 1, {
                            notice: i, holderCallback: n
                        }) : (o && t.length >= o && (i.key = s[0].notice.key, i.updateMark = Te(), i.userPassKey = r, s.shift()), s.push({
                            notice: i, holderCallback: n
                        })), {
                            notices: s
                        }
                    }))
                }, e.remove = function (t) {
                    e.setState((function (e) {
                        return {
                            notices: e.notices.filter((function (e) {
                                var n = e.notice, r = n.key; return (n.userPassKey || r) !== t
                            }))
                        }
                    }))
                }, e.noticePropsMap = {
                }, e
            } return (0, p.Z)(n, [{
                key: "getTransitionName", value: function () {
                    var e = this.props, t = e.prefixCls, n = e.animation, r = this.props.transitionName; return !r && n && (r = "".concat(t, "-").concat(n)), r
                }
            }, {
                key: "render", value: function () {
                    var e = this, t = this.state.notices, n = this.props, r = n.prefixCls, i = n.className, a = n.closeIcon, c = n.style, f = []; return t.forEach((function (n, i) {
                        var o = n.notice, s = n.holderCallback, c = i === t.length - 1 ? o.updateMark : void 0, u = o.key, p = o.userPassKey, h = (0, l.Z)((0, l.Z)((0, l.Z)({
                            prefixCls: r, closeIcon: a
                        }, o), o.props), {
                        }, {
                            key: u, noticeKey: p || u, updateMark: c, onClose: function (t) {
                                var n; e.remove(t), null === (n = o.onClose) || void 0 === n || n.call(o)
                            }, onClick: o.onClick, children: o.content
                        }); f.push(u), e.noticePropsMap[u] = {
                            props: h, holderCallback: s
                        }
                    })), o.createElement("div", {
                        className: s()(r, i), style: c
                    }, o.createElement(Oe, {
                        keys: f, motionName: this.getTransitionName(), onVisibleChanged: function (t, n) {
                            var r = n.key; t || delete e.noticePropsMap[r]
                        }
                    }, (function (t) {
                        var n = t.key, i = t.className, a = t.style, c = t.visible, f = e.noticePropsMap[n], p = f.props, h = f.holderCallback; return h ? o.createElement("div", {
                            key: n, className: s()(i, "".concat(r, "-hook-holder")), style: (0, l.Z)({
                            }, a), ref: function (t) {
                                void 0 !== n && (t ? (e.hookRefs.set(n, t), h(t, p)) : e.hookRefs.delete(n))
                            }
                        }) : o.createElement(Ne, (0, u.Z)({
                        }, p, {
                            className: s()(i, null == p ? void 0 : p.className), style: (0, l.Z)((0, l.Z)({
                            }, a), null == p ? void 0 : p.style), visible: c
                        }))
                    })))
                }
            }]), n
        }(o.Component); Ze.newInstance = void 0, Ze.defaultProps = {
            prefixCls: "rc-notification", animation: "fade", style: {
                top: 65, left: "50%"
            }
        }, Ze.newInstance = function (e, t) {
            var n = e || {
            }, i = n.getContainer, a = (0, c.Z)(n, Ie), s = document.createElement("div"); i ? i().appendChild(s) : document.body.appendChild(s); var l, f, p = !1; l = o.createElement(Ze, (0, u.Z)({
            }, a, {
                ref: function (e) {
                    p || (p = !0, t({
                        notice: function (t) {
                            e.add(t)
                        }, removeNotice: function (t) {
                            e.remove(t)
                        }, component: e, destroy: function () {
                            !function (e) {
                                I.apply(this, arguments)
                            }(s), s.parentNode && s.parentNode.removeChild(s)
                        }, useNotification: function () {
                            return t = e, n = o.useRef({
                            }), r = o.useState([]), a = (i = (0, R.Z)(r, 2))[0], s = i[1], [function (e) {
                                var r = !0; t.add(e, (function (e, t) {
                                    var i = t.key; if (e && (!n.current[i] || r)) {
                                        var a = o.createElement(Ne, (0, u.Z)({
                                        }, t, {
                                            holder: e
                                        })); n.current[i] = a, s((function (e) {
                                            var n = e.findIndex((function (e) {
                                                return e.key === t.key
                                            })); if (-1 === n) return [].concat((0, Se.Z)(e), [a]); var r = (0, Se.Z)(e); return r[n] = a, r
                                        }))
                                    } r = !1
                                }))
                            }, o.createElement(o.Fragment, null, a)]; var t, n, r, i, a, s
                        }
                    }))
                }
            })), f = s, r ? function (e, t) {
                x(!0); var n = t[L] || r(t); x(!1), n.render(e), t[L] = n
            }(l, f) : function (e, t) {
                k(e, t)
            }(l, f)
        }; const Ae = Ze; function Pe(e, t) {
            var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e); t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            } return n
        } function De(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {
                }; t % 2 ? Pe(Object(n), !0).forEach((function (t) {
                    (0, i.Z)(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pe(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            } return e
        } var je, ze, Ve, He, Ke = 3, Be = 1, Fe = "tiktok-toast", Ue = "move-up", We = {
            success: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3Ljg0MDQgNi44NTk4NkMxOC4wMzc3IDYuNjYyMDcgMTguMzU4NyA2LjY2NDI1IDE4LjU1MzMgNi44NjQ3MUwxOS40NTc0IDcuNzk2MjlDMTkuNjQ3NSA3Ljk5MjE3IDE5LjY0NTQgOC4zMDQzMiAxOS40NTI2IDguNDk3NTlMMTAuNTU4MiAxNy40MTYzQzEwLjEwNSAxNy44NzA3IDkuMzczMzMgMTcuODU5NiA4LjkzMzY2IDE3LjM5MTZMNC44MzY4MSAxMy4wMzA2QzQuNjQ5OTEgMTIuODMxNyA0LjY1NzExIDEyLjUxOTYgNC44NTI5OSAxMi4zMjk1TDUuNzgzNzQgMTEuNDI2MUM1Ljk4NDE4IDExLjIzMTUgNi4zMDUxNCAxMS4yMzg5IDYuNDk2MzkgMTEuNDQyNUw5Ljc4MjE0IDE0Ljk0MDFMMTcuODQwNCA2Ljg1OTg2WiIgZmlsbD0iIzBCRTA5QiIvPgo8L3N2Zz4K", fail: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAyNiAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNDY4IDEzTDcuMjAwNCA4LjczMjM4QzYuOTg4ODYgOC41MjA4NSA2Ljk4ODg2IDguMTc3ODggNy4yMDA0IDcuOTY2MzVMNy45NjY0MyA3LjIwMDMyQzguMTc3OTcgNi45ODg3OCA4LjUyMDkzIDYuOTg4NzggOC43MzI0NiA3LjIwMDMyTDEzLjAwMDEgMTEuNDY3OUwxNy4yNjc3IDcuMjAwMzJDMTcuNDc5MiA2Ljk4ODc4IDE3LjgyMjIgNi45ODg3OCAxOC4wMzM3IDcuMjAwMzJMMTguNzk5OCA3Ljk2NjM1QzE5LjAxMTMgOC4xNzc4OCAxOS4wMTEzIDguNTIwODUgMTguNzk5OCA4LjczMjM4TDE0LjUzMjEgMTNMMTguNzk5OCAxNy4yNjc2QzE5LjAxMTMgMTcuNDc5MiAxOS4wMTEzIDE3LjgyMjEgMTguNzk5OCAxOC4wMzM3TDE4LjAzMzcgMTguNzk5N0MxNy44MjIyIDE5LjAxMTIgMTcuNDc5MiAxOS4wMTEyIDE3LjI2NzcgMTguNzk5N0wxMy4wMDAxIDE0LjUzMjFMOC43MzI0NiAxOC43OTk3QzguNTIwOTMgMTkuMDExMiA4LjE3Nzk3IDE5LjAxMTIgNy45NjY0MyAxOC43OTk3TDcuMjAwNCAxOC4wMzM3QzYuOTg4ODYgMTcuODIyMSA2Ljk4ODg2IDE3LjQ3OTIgNy4yMDA0IDE3LjI2NzZMMTEuNDY4IDEzWiIgZmlsbD0iI0ZGNEMzQSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjI2IiBoZWlnaHQ9IjI2IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
        }, qe = function (e) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(e)
        }, Ge = {
            open: function (e) {
                var t, n, r = void 0 !== e.duration ? e.duration : Ke, a = s()(e.className, (n = {
                }, (0, i.Z)(n, "".concat(Fe, "-padding-content"), "padding" === e.widthType), (0, i.Z)(n, "".concat(Fe, "-full-content"), "full" === e.widthType), (0, i.Z)(n, "".concat(Fe, "-is-mobile"), qe(null === (t = navigator) || void 0 === t ? void 0 : t.userAgent)), (0, i.Z)(n, "".concat(Fe, "-is-rtl"), e.isRTL), n)), c = e.key || Be++, u = new Promise((function (t) {
                    var n = function () {
                        return "function" == typeof e.onClose && e.onClose(), t(!0)
                    }; !function (e) {
                        ze ? e(ze) : Ae.newInstance({
                            prefixCls: Fe, transitionName: Ue, style: {
                                top: je
                            }, getContainer: Ve, maxCount: He
                        }, (function (t) {
                            ze ? e(ze) : (ze = t, e(t))
                        }))
                    }((function (t) {
                        t.notice({
                            key: c, duration: r, className: e.className, content: o.createElement("div", {
                                className: a, style: De({
                                    display: "flex", justifyContent: "center", alignItems: "center"
                                }, qe(navigator.userAgent) ? {
                                } : e.style || {
                                })
                            }, e.type && "default" !== e.type && o.createElement("img", {
                                src: We[e.type], style: De({
                                    width: "24px", height: "24px"
                                }, e.isRTL ? {
                                    marginLeft: "8px"
                                } : {
                                    marginRight: "8px"
                                })
                            }), o.createElement("span", null, e.content)), onClose: n
                        })
                    }))
                })), l = function () {
                    ze && ze.removeNotice(c)
                }; return l.then = function (e, t) {
                    return u.then(e, t)
                }, l.promise = u, l
            }, config: function (e) {
                void 0 !== e.top && (je = e.top, ze = null), void 0 !== e.duration && (Ke = e.duration), void 0 !== e.prefixCls && (Fe = e.prefixCls), void 0 !== e.getContainer && (Ve = e.getContainer), void 0 !== e.transitionName && (Ue = e.transitionName, ze = null), void 0 !== e.maxCount && (He = e.maxCount, ze = null)
            }, destroy: function () {
                ze && (ze.destroy(), ze = null)
            }
        }; Ge.warn = Ge.warning; const Je = Ge
    }, 47883: (e, t, n) => {
        n.d(t, {
            Z: () => W
        }); var r = n(81852), i = n(38301), o = n(61048), a = n(37462), s = n(79017), c = n(25962), u = n(33960), l = n(91051), f = n(32667); function p(e) {
            var t = []; return l.Children.forEach(e, (function (e) {
                t.push(e)
            })), t
        } function h(e, t) {
            var n = null; return e && e.forEach((function (e) {
                n || e && e.key === t && (n = e)
            })), n
        } function d(e, t, n) {
            var r = null; return e && e.forEach((function (e) {
                if (e && e.key === t && e.props[n]) {
                    if (r) throw new Error("two child with same key for <rc-animate> children"); r = e
                }
            })), r
        } var g = n(55233); const v = function (e) {
            return e.transitionName && e.transitionAppear || e.animation.appear
        }, m = function (e) {
            return e.transitionName && e.transitionEnter || e.animation.enter
        }, y = function (e) {
            return e.transitionName && e.transitionLeave || e.animation.leave
        }, C = function (e) {
            return e.transitionAppear || e.animation.appear
        }, _ = function (e) {
            return e.transitionEnter || e.animation.enter
        }, w = function (e) {
            return e.transitionLeave || e.animation.leave
        }; var b = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            } return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(); function k(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        } function E(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t
        } var x = {
            enter: "transitionEnter", appear: "transitionAppear", leave: "transitionLeave"
        }; const L = function (e) {
            function t() {
                return k(this, t), E(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            } return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e, enumerable: !1, writable: !0, configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), b(t, [{
                key: "componentWillUnmount", value: function () {
                    this.stop()
                }
            }, {
                key: "componentWillEnter", value: function (e) {
                    m(this.props) ? this.transition("enter", e) : e()
                }
            }, {
                key: "componentWillAppear", value: function (e) {
                    v(this.props) ? this.transition("appear", e) : e()
                }
            }, {
                key: "componentWillLeave", value: function (e) {
                    y(this.props) ? this.transition("leave", e) : e()
                }
            }, {
                key: "transition", value: function (e, t) {
                    var n = this, r = f.findDOMNode(this), i = this.props, o = i.transitionName, a = "object" == typeof o; this.stop(); var s = function () {
                        n.stopper = null, t()
                    }; if ((g.w || !i.animation[e]) && o && i[x[e]]) {
                        var c = a ? o[e] : o + "-" + e, u = c + "-active"; a && o[e + "Active"] && (u = o[e + "Active"]), this.stopper = (0, g.Z)(r, {
                            name: c, active: u
                        }, s)
                    } else this.stopper = i.animation[e](r, s)
                }
            }, {
                key: "stop", value: function () {
                    var e = this.stopper; e && (this.stopper = null, e.stop())
                }
            }, {
                key: "render", value: function () {
                    return this.props.children
                }
            }]), t
        }(l.Component); var O = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            } return e
        }, N = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            } return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), S = "rc_animate_" + Date.now(); function I(e) {
            var t = e.children; return l.isValidElement(t) && !t.key ? l.cloneElement(t, {
                key: S
            }) : t
        } function R() {
        } var M = function (e) {
            function t(e) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t); var n = function (e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); return T.call(n), n.currentlyAnimatingKeys = {
                }, n.keysToEnter = [], n.keysToLeave = [], n.state = {
                    children: p(I(e))
                }, n.childrenRefs = {
                }, n
            } return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e, enumerable: !1, writable: !0, configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), N(t, [{
                key: "componentDidMount", value: function () {
                    var e = this, t = this.props.showProp, n = this.state.children; t && (n = n.filter((function (e) {
                        return !!e.props[t]
                    }))), n.forEach((function (t) {
                        t && e.performAppear(t.key)
                    }))
                }
            }, {
                key: "componentWillReceiveProps", value: function (e) {
                    var t = this; this.nextProps = e; var n = p(I(e)), r = this.props; r.exclusive && Object.keys(this.currentlyAnimatingKeys).forEach((function (e) {
                        t.stop(e)
                    })); var i, o, a, s, c = r.showProp, u = this.currentlyAnimatingKeys, f = r.exclusive ? p(I(r)) : this.state.children, g = []; c ? (f.forEach((function (e) {
                        var t, r, i, o = e && h(n, e.key); (i = o && o.props[c] || !e.props[c] ? o : l.cloneElement(o || e, (!0, (r = c) in (t = {
                        }) ? Object.defineProperty(t, r, {
                            value: true, enumerable: !0, configurable: !0, writable: !0
                        }) : t[r] = true, t))) && g.push(i)
                    })), n.forEach((function (e) {
                        e && h(f, e.key) || g.push(e)
                    }))) : (i = n, o = [], a = {
                    }, s = [], f.forEach((function (e) {
                        e && h(i, e.key) ? s.length && (a[e.key] = s, s = []) : s.push(e)
                    })), i.forEach((function (e) {
                        e && Object.prototype.hasOwnProperty.call(a, e.key) && (o = o.concat(a[e.key])), o.push(e)
                    })), g = o = o.concat(s)), this.setState({
                        children: g
                    }), n.forEach((function (e) {
                        var n = e && e.key; if (!e || !u[n]) {
                            var r = e && h(f, n); if (c) {
                                var i = e.props[c]; r ? !d(f, n, c) && i && t.keysToEnter.push(n) : i && t.keysToEnter.push(n)
                            } else r || t.keysToEnter.push(n)
                        }
                    })), f.forEach((function (e) {
                        var r = e && e.key; if (!e || !u[r]) {
                            var i = e && h(n, r); if (c) {
                                var o = e.props[c]; i ? !d(n, r, c) && o && t.keysToLeave.push(r) : o && t.keysToLeave.push(r)
                            } else i || t.keysToLeave.push(r)
                        }
                    }))
                }
            }, {
                key: "componentDidUpdate", value: function () {
                    var e = this.keysToEnter; this.keysToEnter = [], e.forEach(this.performEnter); var t = this.keysToLeave; this.keysToLeave = [], t.forEach(this.performLeave)
                }
            }, {
                key: "isValidChildByKey", value: function (e, t) {
                    var n = this.props.showProp; return n ? d(e, t, n) : h(e, t)
                }
            }, {
                key: "stop", value: function (e) {
                    delete this.currentlyAnimatingKeys[e]; var t = this.childrenRefs[e]; t && t.stop()
                }
            }, {
                key: "render", value: function () {
                    var e = this, t = this.props; this.nextProps = t; var n = this.state.children, r = null; n && (r = n.map((function (n) {
                        if (null == n) return n; if (!n.key) throw new Error("must set key for <rc-animate> children"); return l.createElement(L, {
                            key: n.key, ref: function (t) {
                                e.childrenRefs[n.key] = t
                            }, animation: t.animation, transitionName: t.transitionName, transitionEnter: t.transitionEnter, transitionAppear: t.transitionAppear, transitionLeave: t.transitionLeave
                        }, n)
                    }))); var i = t.component; if (i) {
                        var o = t; return "string" == typeof i && (o = O({
                            className: t.className, style: t.style
                        }, t.componentProps)), l.createElement(i, o, r)
                    } return r[0] || null
                }
            }]), t
        }(l.Component); M.isAnimate = !0, M.defaultProps = {
            animation: {
            }, component: "span", componentProps: {
            }, transitionEnter: !0, transitionLeave: !0, transitionAppear: !1, onEnd: R, onEnter: R, onLeave: R, onAppear: R
        }; var T = function () {
            var e = this; this.performEnter = function (t) {
                e.childrenRefs[t] && (e.currentlyAnimatingKeys[t] = !0, e.childrenRefs[t].componentWillEnter(e.handleDoneAdding.bind(e, t, "enter")))
            }, this.performAppear = function (t) {
                e.childrenRefs[t] && (e.currentlyAnimatingKeys[t] = !0, e.childrenRefs[t].componentWillAppear(e.handleDoneAdding.bind(e, t, "appear")))
            }, this.handleDoneAdding = function (t, n) {
                var r = e.props; if (delete e.currentlyAnimatingKeys[t], !r.exclusive || r === e.nextProps) {
                    var i = p(I(r)); e.isValidChildByKey(i, t) ? "appear" === n ? C(r) && (r.onAppear(t), r.onEnd(t, !0)) : _(r) && (r.onEnter(t), r.onEnd(t, !0)) : e.performLeave(t)
                }
            }, this.performLeave = function (t) {
                e.childrenRefs[t] && (e.currentlyAnimatingKeys[t] = !0, e.childrenRefs[t].componentWillLeave(e.handleDoneLeaving.bind(e, t)))
            }, this.handleDoneLeaving = function (t) {
                var n = e.props; if (delete e.currentlyAnimatingKeys[t], !n.exclusive || n === e.nextProps) {
                    var r, i, o, a, s = p(I(n)); if (e.isValidChildByKey(s, t)) e.performEnter(t); else {
                        var c = function () {
                            w(n) && (n.onLeave(t), n.onEnd(t, !1))
                        }; r = e.state.children, i = s, o = n.showProp, (a = r.length === i.length) && r.forEach((function (e, t) {
                            var n = i[t]; e && n && (e && !n || !e && n || e.key !== n.key || o && e.props[o] !== n.props[o]) && (a = !1)
                        })), a ? c() : e.setState({
                            children: s
                        }, c)
                    }
                }
            }
        }; const Z = function (e) {
            var t = e.prototype; if (!t || !t.isReactComponent) throw new Error("Can only polyfill class components"); return "function" != typeof t.componentWillReceiveProps ? e : l.Profiler ? (t.UNSAFE_componentWillReceiveProps = t.componentWillReceiveProps, delete t.componentWillReceiveProps, e) : e
        }(M); var A = n(16765), P = n.n(A); var D = function (e) {
            (0, s.Z)(p, e); var t, n, r = (t = p, n = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }(), function () {
                var e, r = (0, u.Z)(t); if (n) {
                    var i = (0, u.Z)(this).constructor; e = Reflect.construct(r, arguments, i)
                } else e = r.apply(this, arguments); return (0, c.Z)(this, e)
            }); function p() {
                var e; return (0, o.Z)(this, p), (e = r.apply(this, arguments)).closeTimer = null, e.close = function (t) {
                    t && t.stopPropagation(), e.clearCloseTimer(); var n = e.props.onClose; n && n()
                }, e.startCloseTimer = function () {
                    e.props.duration && (e.closeTimer = window.setTimeout((function () {
                        e.close()
                    }), 1e3 * e.props.duration))
                }, e.clearCloseTimer = function () {
                    e.closeTimer && (clearTimeout(e.closeTimer), e.closeTimer = null)
                }, e
            } return (0, a.Z)(p, [{
                key: "componentDidMount", value: function () {
                    this.startCloseTimer()
                }
            }, {
                key: "componentDidUpdate", value: function (e) {
                    (this.props.duration !== e.duration || this.props.update) && this.restartCloseTimer()
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    this.clearCloseTimer()
                }
            }, {
                key: "restartCloseTimer", value: function () {
                    this.clearCloseTimer(), this.startCloseTimer()
                }
            }, {
                key: "render", value: function () {
                    var e = this, t = this.props, n = t.prefixCls, r = t.className, o = t.closable, a = t.closeIcon, s = t.style, c = t.onClick, u = t.children, p = t.holder, h = "".concat(n, "-notice"), d = Object.keys(this.props).reduce((function (t, n) {
                        return "data-" !== n.substr(0, 5) && "aria-" !== n.substr(0, 5) && "role" !== n || (t[n] = e.props[n]), t
                    }), {
                    }), g = l.createElement("div", Object.assign({
                        className: P()(h, r, (0, i.Z)({
                        }, "".concat(h, "-closable"), o)), style: s, onMouseEnter: this.clearCloseTimer, onMouseLeave: this.startCloseTimer, onClick: c
                    }, d), l.createElement("div", {
                        className: "".concat(h, "-content")
                    }, u), o ? l.createElement("a", {
                        tabIndex: 0, onClick: this.close, className: "".concat(h, "-close")
                    }, a || l.createElement("span", {
                        className: "".concat(h, "-close-x")
                    })) : null); return p ? f.createPortal(g, p) : g
                }
            }]), p
        }(l.Component); D.defaultProps = {
            onClose: function () {
            }, duration: 1.5, style: {
                right: "50%"
            }
        }; var j = n(87304), z = n(71542); function V(e, t) {
            var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e); t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            } return n
        } function H(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {
                }; t % 2 ? V(Object(n), !0).forEach((function (t) {
                    (0, i.Z)(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : V(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            } return e
        } var K = 0, B = Date.now(); function F() {
            var e = K; return K += 1, "rcNotification_".concat(B, "_").concat(e)
        } var U = function (e) {
            (0, s.Z)(i, e); var t, n, r = (t = i, n = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }(), function () {
                var e, r = (0, u.Z)(t); if (n) {
                    var i = (0, u.Z)(this).constructor; e = Reflect.construct(r, arguments, i)
                } else e = r.apply(this, arguments); return (0, c.Z)(this, e)
            }); function i() {
                var e; return (0, o.Z)(this, i), (e = r.apply(this, arguments)).state = {
                    notices: []
                }, e.hookRefs = new Map, e.add = function (t, n) {
                    t.key = t.key || F(); var r = t.key, i = e.props.maxCount; e.setState((function (e) {
                        var o = e.notices, a = o.map((function (e) {
                            return e.notice.key
                        })).indexOf(r), s = o.concat(); return -1 !== a ? s.splice(a, 1, {
                            notice: t, holderCallback: n
                        }) : (i && o.length >= i && (t.updateKey = s[0].notice.updateKey || s[0].notice.key, s.shift()), s.push({
                            notice: t, holderCallback: n
                        })), {
                            notices: s
                        }
                    }))
                }, e.remove = function (t) {
                    e.setState((function (e) {
                        return {
                            notices: e.notices.filter((function (e) {
                                return e.notice.key !== t
                            }))
                        }
                    }))
                }, e
            } return (0, a.Z)(i, [{
                key: "getTransitionName", value: function () {
                    var e = this.props, t = e.prefixCls, n = e.animation, r = this.props.transitionName; return !r && n && (r = "".concat(t, "-").concat(n)), r
                }
            }, {
                key: "render", value: function () {
                    var e = this, t = this.state.notices, n = this.props, r = n.prefixCls, i = n.className, o = n.closeIcon, a = n.style, s = t.map((function (n, i) {
                        var a = n.notice, s = n.holderCallback, c = Boolean(i === t.length - 1 && a.updateKey), u = a.updateKey ? a.updateKey : a.key, f = function () {
                            var e = [].slice.call(arguments, 0); return 1 === e.length ? e[0] : function () {
                                for (var t = 0; t < e.length; t++)e[t] && e[t].apply && e[t].apply(this, arguments)
                            }
                        }(e.remove.bind(e, a.key), a.onClose), p = H(H(H({
                            prefixCls: r, closeIcon: o
                        }, a), a.props), {
                        }, {
                            key: u, update: c, onClose: f, onClick: a.onClick, children: a.content
                        }); return s ? l.createElement("div", {
                            key: u, className: "".concat(r, "-hook-holder"), ref: function (t) {
                                void 0 !== u && (t ? (e.hookRefs.set(u, t), s(t, p)) : e.hookRefs.delete(u))
                            }
                        }) : l.createElement(D, Object.assign({
                        }, p))
                    })); return l.createElement("div", {
                        className: P()(r, i), style: a
                    }, l.createElement(Z, {
                        transitionName: this.getTransitionName()
                    }, s))
                }
            }]), i
        }(l.Component); U.defaultProps = {
            prefixCls: "rc-notification", animation: "fade", style: {
                top: 65, left: "50%"
            }
        }, U.newInstance = function (e, t) {
            var n = e || {
            }, i = n.getContainer, o = (0, r.Z)(n, ["getContainer"]), a = document.createElement("div"); i ? i().appendChild(a) : document.body.appendChild(a); var s = !1; f.render(l.createElement(U, Object.assign({
            }, o, {
                ref: function (e) {
                    s || (s = !0, t({
                        notice: function (t) {
                            e.add(t)
                        }, removeNotice: function (t) {
                            e.remove(t)
                        }, component: e, destroy: function () {
                            f.unmountComponentAtNode(a), a.parentNode && a.parentNode.removeChild(a)
                        }, useNotification: function () {
                            return t = e, n = l.useRef({
                            }), r = l.useState([]), o = (i = (0, z.Z)(r, 2))[0], a = i[1], [function (e) {
                                t.add(e, (function (e, t) {
                                    var r = t.key; if (e && !n.current[r]) {
                                        var i = l.createElement(D, Object.assign({
                                        }, t, {
                                            holder: e
                                        })); n.current[r] = i, a((function (e) {
                                            return [].concat((0, j.Z)(e), [i])
                                        }))
                                    }
                                }))
                            }, l.createElement(l.Fragment, null, o)]; var t, n, r, i, o, a
                        }
                    }))
                }
            })), a)
        }; const W = U
    }
}]);