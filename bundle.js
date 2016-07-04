! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function i(t) {
        var e = !!t && "length" in t && t.length,
            i = st.type(t);
        return "function" === i || st.isWindow(t) ? !1 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function n(t, e, i) {
        if (st.isFunction(e)) return st.grep(t, function(t, n) {
            return !!e.call(t, n, t) !== i
        });
        if (e.nodeType) return st.grep(t, function(t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (mt.test(e)) return st.filter(e, t, i);
            e = st.filter(e, t)
        }
        return st.grep(t, function(t) {
            return K.call(e, t) > -1 !== i
        })
    }

    function r(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function s(t) {
        var e = {};
        return st.each(t.match(xt) || [], function(t, i) {
            e[i] = !0
        }), e
    }

    function o() {
        G.removeEventListener("DOMContentLoaded", o), t.removeEventListener("load", o), st.ready()
    }

    function a() {
        this.expando = st.expando + a.uid++
    }

    function l(t, e, i) {
        var n;
        if (void 0 === i && 1 === t.nodeType)
            if (n = "data-" + e.replace(At, "-$&").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : kt.test(i) ? st.parseJSON(i) : i
                } catch (r) {}
                Ct.set(t, e, i)
            } else i = void 0;
        return i
    }

    function u(t, e, i, n) {
        var r, s = 1,
            o = 20,
            a = n ? function() {
                return n.cur()
            } : function() {
                return st.css(t, e, "")
            },
            l = a(),
            u = i && i[3] || (st.cssNumber[e] ? "" : "px"),
            h = (st.cssNumber[e] || "px" !== u && +l) && Ot.exec(st.css(t, e));
        if (h && h[3] !== u) {
            u = u || h[3], i = i || [], h = +l || 1;
            do s = s || ".5", h /= s, st.style(t, e, h + u); while (s !== (s = a() / l) && 1 !== s && --o)
        }
        return i && (h = +h || +l || 0, r = i[1] ? h + (i[1] + 1) * i[2] : +i[2], n && (n.unit = u, n.start = h, n.end = r)), r
    }

    function h(t, e) {
        var i = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && st.nodeName(t, e) ? st.merge([t], i) : i
    }

    function c(t, e) {
        for (var i = 0, n = t.length; n > i; i++) Pt.set(t[i], "globalEval", !e || Pt.get(e[i], "globalEval"))
    }

    function f(t, e, i, n, r) {
        for (var s, o, a, l, u, f, p = e.createDocumentFragment(), d = [], m = 0, g = t.length; g > m; m++)
            if (s = t[m], s || 0 === s)
                if ("object" === st.type(s)) st.merge(d, s.nodeType ? [s] : s);
                else if (jt.test(s)) {
            for (o = o || p.appendChild(e.createElement("div")), a = (Lt.exec(s) || ["", ""])[1].toLowerCase(), l = Ft[a] || Ft._default, o.innerHTML = l[1] + st.htmlPrefilter(s) + l[2], f = l[0]; f--;) o = o.lastChild;
            st.merge(d, o.childNodes), o = p.firstChild, o.textContent = ""
        } else d.push(e.createTextNode(s));
        for (p.textContent = "", m = 0; s = d[m++];)
            if (n && st.inArray(s, n) > -1) r && r.push(s);
            else if (u = st.contains(s.ownerDocument, s), o = h(p.appendChild(s), "script"), u && c(o), i)
            for (f = 0; s = o[f++];) Mt.test(s.type || "") && i.push(s);
        return p
    }

    function p() {
        return !0
    }

    function d() {
        return !1
    }

    function m() {
        try {
            return G.activeElement
        } catch (t) {}
    }

    function g(t, e, i, n, r, s) {
        var o, a;
        if ("object" == typeof e) {
            "string" != typeof i && (n = n || i, i = void 0);
            for (a in e) g(t, a, i, n, e[a], s);
            return t
        }
        if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), r === !1) r = d;
        else if (!r) return this;
        return 1 === s && (o = r, r = function(t) {
            return st().off(t), o.apply(this, arguments)
        }, r.guid = o.guid || (o.guid = st.guid++)), t.each(function() {
            st.event.add(this, e, r, n, i)
        })
    }

    function _(t, e) {
        return st.nodeName(t, "table") && st.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t : t
    }

    function v(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function y(t) {
        var e = Xt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function w(t, e) {
        var i, n, r, s, o, a, l, u;
        if (1 === e.nodeType) {
            if (Pt.hasData(t) && (s = Pt.access(t), o = Pt.set(e, s), u = s.events)) {
                delete o.handle, o.events = {};
                for (r in u)
                    for (i = 0, n = u[r].length; n > i; i++) st.event.add(e, r, u[r][i])
            }
            Ct.hasData(t) && (a = Ct.access(t), l = st.extend({}, a), Ct.set(e, l))
        }
    }

    function x(t, e) {
        var i = e.nodeName.toLowerCase();
        "input" === i && Nt.test(t.type) ? e.checked = t.checked : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
    }

    function T(t, e, i, n) {
        e = Z.apply([], e);
        var r, s, o, a, l, u, c = 0,
            p = t.length,
            d = p - 1,
            m = e[0],
            g = st.isFunction(m);
        if (g || p > 1 && "string" == typeof m && !nt.checkClone && Wt.test(m)) return t.each(function(r) {
            var s = t.eq(r);
            g && (e[0] = m.call(this, r, s.html())), T(s, e, i, n)
        });
        if (p && (r = f(e, t[0].ownerDocument, !1, t, n), s = r.firstChild, 1 === r.childNodes.length && (r = s), s || n)) {
            for (o = st.map(h(r, "script"), v), a = o.length; p > c; c++) l = r, c !== d && (l = st.clone(l, !0, !0), a && st.merge(o, h(l, "script"))), i.call(t[c], l, c);
            if (a)
                for (u = o[o.length - 1].ownerDocument, st.map(o, y), c = 0; a > c; c++) l = o[c], Mt.test(l.type || "") && !Pt.access(l, "globalEval") && st.contains(u, l) && (l.src ? st._evalUrl && st._evalUrl(l.src) : st.globalEval(l.textContent.replace($t, "")))
        }
        return t
    }

    function b(t, e, i) {
        for (var n, r = e ? st.filter(e, t) : t, s = 0; null != (n = r[s]); s++) i || 1 !== n.nodeType || st.cleanData(h(n)), n.parentNode && (i && st.contains(n.ownerDocument, n) && c(h(n, "script")), n.parentNode.removeChild(n));
        return t
    }

    function S(t, e) {
        var i = st(e.createElement(t)).appendTo(e.body),
            n = st.css(i[0], "display");
        return i.detach(), n
    }

    function P(t) {
        var e = G,
            i = Yt[t];
        return i || (i = S(t, e), "none" !== i && i || (Ut = (Ut || st("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Ut[0].contentDocument, e.write(), e.close(), i = S(t, e), Ut.detach()), Yt[t] = i), i
    }

    function C(t, e, i) {
        var n, r, s, o, a = t.style;
        return i = i || Qt(t), i && (o = i.getPropertyValue(e) || i[e], "" !== o || st.contains(t.ownerDocument, t) || (o = st.style(t, e)), !nt.pixelMarginRight() && Gt.test(o) && Vt.test(e) && (n = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = i.width, a.width = n, a.minWidth = r, a.maxWidth = s)), void 0 !== o ? o + "" : o
    }

    function k(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function A(t) {
        if (t in ne) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), i = ie.length; i--;)
            if (t = ie[i] + e, t in ne) return t
    }

    function R(t, e, i) {
        var n = Ot.exec(e);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
    }

    function O(t, e, i, n, r) {
        for (var s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > s; s += 2) "margin" === i && (o += st.css(t, i + Dt[s], !0, r)), n ? ("content" === i && (o -= st.css(t, "padding" + Dt[s], !0, r)), "margin" !== i && (o -= st.css(t, "border" + Dt[s] + "Width", !0, r))) : (o += st.css(t, "padding" + Dt[s], !0, r), "padding" !== i && (o += st.css(t, "border" + Dt[s] + "Width", !0, r)));
        return o
    }

    function D(e, i, n) {
        var r = !0,
            s = "width" === i ? e.offsetWidth : e.offsetHeight,
            o = Qt(e),
            a = "border-box" === st.css(e, "boxSizing", !1, o);
        if (G.msFullscreenElement && t.top !== t && e.getClientRects().length && (s = Math.round(100 * e.getBoundingClientRect()[i])), 0 >= s || null == s) {
            if (s = C(e, i, o), (0 > s || null == s) && (s = e.style[i]), Gt.test(s)) return s;
            r = a && (nt.boxSizingReliable() || s === e.style[i]), s = parseFloat(s) || 0
        }
        return s + O(e, i, n || (a ? "border" : "content"), r, o) + "px"
    }

    function E(t, e) {
        for (var i, n, r, s = [], o = 0, a = t.length; a > o; o++) n = t[o], n.style && (s[o] = Pt.get(n, "olddisplay"), i = n.style.display, e ? (s[o] || "none" !== i || (n.style.display = ""), "" === n.style.display && Et(n) && (s[o] = Pt.access(n, "olddisplay", P(n.nodeName)))) : (r = Et(n), "none" === i && r || Pt.set(n, "olddisplay", r ? i : st.css(n, "display"))));
        for (o = 0; a > o; o++) n = t[o], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? s[o] || "" : "none"));
        return t
    }

    function N(t, e, i, n, r) {
        return new N.prototype.init(t, e, i, n, r)
    }

    function L() {
        return t.setTimeout(function() {
            re = void 0
        }), re = st.now()
    }

    function M(t, e) {
        var i, n = 0,
            r = {
                height: t
            };
        for (e = e ? 1 : 0; 4 > n; n += 2 - e) i = Dt[n], r["margin" + i] = r["padding" + i] = t;
        return e && (r.opacity = r.width = t), r
    }

    function F(t, e, i) {
        for (var n, r = (I.tweeners[e] || []).concat(I.tweeners["*"]), s = 0, o = r.length; o > s; s++)
            if (n = r[s].call(i, e, t)) return n
    }

    function j(t, e, i) {
        var n, r, s, o, a, l, u, h, c = this,
            f = {},
            p = t.style,
            d = t.nodeType && Et(t),
            m = Pt.get(t, "fxshow");
        i.queue || (a = st._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, c.always(function() {
            c.always(function() {
                a.unqueued--, st.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], u = st.css(t, "display"), h = "none" === u ? Pt.get(t, "olddisplay") || P(t.nodeName) : u, "inline" === h && "none" === st.css(t, "float") && (p.display = "inline-block")), i.overflow && (p.overflow = "hidden", c.always(function() {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (n in e)
            if (r = e[n], oe.exec(r)) {
                if (delete e[n], s = s || "toggle" === r, r === (d ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[n]) continue;
                    d = !0
                }
                f[n] = m && m[n] || st.style(t, n)
            } else u = void 0;
        if (st.isEmptyObject(f)) "inline" === ("none" === u ? P(t.nodeName) : u) && (p.display = u);
        else {
            m ? "hidden" in m && (d = m.hidden) : m = Pt.access(t, "fxshow", {}), s && (m.hidden = !d), d ? st(t).show() : c.done(function() {
                st(t).hide()
            }), c.done(function() {
                var e;
                Pt.remove(t, "fxshow");
                for (e in f) st.style(t, e, f[e])
            });
            for (n in f) o = F(d ? m[n] : 0, n, c), n in m || (m[n] = o.start, d && (o.end = o.start, o.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function z(t, e) {
        var i, n, r, s, o;
        for (i in t)
            if (n = st.camelCase(i), r = e[n], s = t[i], st.isArray(s) && (r = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), o = st.cssHooks[n], o && "expand" in o) {
                s = o.expand(s), delete t[n];
                for (i in s) i in t || (t[i] = s[i], e[i] = r)
            } else e[n] = r
    }

    function I(t, e, i) {
        var n, r, s = 0,
            o = I.prefilters.length,
            a = st.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var e = re || L(), i = Math.max(0, u.startTime + u.duration - e), n = i / u.duration || 0, s = 1 - n, o = 0, l = u.tweens.length; l > o; o++) u.tweens[o].run(s);
                return a.notifyWith(t, [u, s, i]), 1 > s && l ? i : (a.resolveWith(t, [u]), !1)
            },
            u = a.promise({
                elem: t,
                props: st.extend({}, e),
                opts: st.extend(!0, {
                    specialEasing: {},
                    easing: st.easing._default
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: re || L(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var n = st.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function(e) {
                    var i = 0,
                        n = e ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n > i; i++) u.tweens[i].run(1);
                    return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
                }
            }),
            h = u.props;
        for (z(h, u.opts.specialEasing); o > s; s++)
            if (n = I.prefilters[s].call(u, t, h, u.opts)) return st.isFunction(n.stop) && (st._queueHooks(u.elem, u.opts.queue).stop = st.proxy(n.stop, n)), n;
        return st.map(h, F, u), st.isFunction(u.opts.start) && u.opts.start.call(t, u), st.fx.timer(st.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function q(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function H(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, r = 0,
                s = e.toLowerCase().match(xt) || [];
            if (st.isFunction(i))
                for (; n = s[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function B(t, e, i, n) {
        function r(a) {
            var l;
            return s[a] = !0, st.each(t[a] || [], function(t, a) {
                var u = a(e, i, n);
                return "string" != typeof u || o || s[u] ? o ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var s = {},
            o = t === Pe;
        return r(e.dataTypes[0]) || !s["*"] && r("*")
    }

    function W(t, e) {
        var i, n, r = st.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
        return n && st.extend(!0, t, n), t
    }

    function X(t, e, i) {
        for (var n, r, s, o, a = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
        if (n)
            for (r in a)
                if (a[r] && a[r].test(n)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in i) s = l[0];
        else {
            for (r in i) {
                if (!l[0] || t.converters[r + " " + l[0]]) {
                    s = r;
                    break
                }
                o || (o = r)
            }
            s = s || o
        }
        return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0
    }

    function $(t, e, i, n) {
        var r, s, o, a, l, u = {},
            h = t.dataTypes.slice();
        if (h[1])
            for (o in t.converters) u[o.toLowerCase()] = t.converters[o];
        for (s = h.shift(); s;)
            if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = h.shift())
                if ("*" === s) s = l;
                else if ("*" !== l && l !== s) {
            if (o = u[l + " " + s] || u["* " + s], !o)
                for (r in u)
                    if (a = r.split(" "), a[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                        o === !0 ? o = u[r] : u[r] !== !0 && (s = a[0], h.unshift(a[1]));
                        break
                    }
            if (o !== !0)
                if (o && t["throws"]) e = o(e);
                else try {
                    e = o(e)
                } catch (c) {
                    return {
                        state: "parsererror",
                        error: o ? c : "No conversion from " + l + " to " + s
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function U(t, e, i, n) {
        var r;
        if (st.isArray(e)) st.each(e, function(e, r) {
            i || Re.test(t) ? n(t, r) : U(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, i, n)
        });
        else if (i || "object" !== st.type(e)) n(t, e);
        else
            for (r in e) U(t + "[" + r + "]", e[r], i, n)
    }

    function Y(t) {
        return st.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var V = [],
        G = t.document,
        Q = V.slice,
        Z = V.concat,
        J = V.push,
        K = V.indexOf,
        tt = {},
        et = tt.toString,
        it = tt.hasOwnProperty,
        nt = {},
        rt = "2.2.0",
        st = function(t, e) {
            return new st.fn.init(t, e)
        },
        ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        at = /^-ms-/,
        lt = /-([\da-z])/gi,
        ut = function(t, e) {
            return e.toUpperCase()
        };
    st.fn = st.prototype = {
        jquery: rt,
        constructor: st,
        selector: "",
        length: 0,
        toArray: function() {
            return Q.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : Q.call(this)
        },
        pushStack: function(t) {
            var e = st.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t) {
            return st.each(this, t)
        },
        map: function(t) {
            return this.pushStack(st.map(this, function(e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function() {
            return this.pushStack(Q.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: J,
        sort: V.sort,
        splice: V.splice
    }, st.extend = st.fn.extend = function() {
        var t, e, i, n, r, s, o = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[a] || {}, a++), "object" == typeof o || st.isFunction(o) || (o = {}), a === l && (o = this, a--); l > a; a++)
            if (null != (t = arguments[a]))
                for (e in t) i = o[e], n = t[e], o !== n && (u && n && (st.isPlainObject(n) || (r = st.isArray(n))) ? (r ? (r = !1, s = i && st.isArray(i) ? i : []) : s = i && st.isPlainObject(i) ? i : {}, o[e] = st.extend(u, s, n)) : void 0 !== n && (o[e] = n));
        return o
    }, st.extend({
        expando: "jQuery" + (rt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === st.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            var e = t && t.toString();
            return !st.isArray(t) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(t) {
            return "object" !== st.type(t) || t.nodeType || st.isWindow(t) ? !1 : t.constructor && !it.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[et.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, i = eval;
            t = st.trim(t), t && (1 === t.indexOf("use strict") ? (e = G.createElement("script"), e.text = t, G.head.appendChild(e).parentNode.removeChild(e)) : i(t))
        },
        camelCase: function(t) {
            return t.replace(at, "ms-").replace(lt, ut)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var n, r = 0;
            if (i(t))
                for (n = t.length; n > r && e.call(t[r], r, t[r]) !== !1; r++);
            else
                for (r in t)
                    if (e.call(t[r], r, t[r]) === !1) break; return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(ot, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? st.merge(n, "string" == typeof t ? [t] : t) : J.call(n, t)), n
        },
        inArray: function(t, e, i) {
            return null == e ? -1 : K.call(e, t, i)
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, r = t.length; i > n; n++) t[r++] = e[n];
            return t.length = r, t
        },
        grep: function(t, e, i) {
            for (var n, r = [], s = 0, o = t.length, a = !i; o > s; s++) n = !e(t[s], s), n !== a && r.push(t[s]);
            return r
        },
        map: function(t, e, n) {
            var r, s, o = 0,
                a = [];
            if (i(t))
                for (r = t.length; r > o; o++) s = e(t[o], o, n), null != s && a.push(s);
            else
                for (o in t) s = e(t[o], o, n), null != s && a.push(s);
            return Z.apply([], a)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, r;
            return "string" == typeof e && (i = t[e], e = t, t = i), st.isFunction(t) ? (n = Q.call(arguments, 2), r = function() {
                return t.apply(e || this, n.concat(Q.call(arguments)))
            }, r.guid = t.guid = t.guid || st.guid++, r) : void 0
        },
        now: Date.now,
        support: nt
    }), "function" == typeof Symbol && (st.fn[Symbol.iterator] = V[Symbol.iterator]), st.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        tt["[object " + e + "]"] = e.toLowerCase()
    });
    var ht = function(t) {
        function e(t, e, i, n) {
            var r, s, o, a, l, u, c, p, d = e && e.ownerDocument,
                m = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m) return i;
            if (!n && ((e ? e.ownerDocument || e : q) !== E && D(e), e = e || E, L)) {
                if (11 !== m && (u = _t.exec(t)))
                    if (r = u[1]) {
                        if (9 === m) {
                            if (!(o = e.getElementById(r))) return i;
                            if (o.id === r) return i.push(o), i
                        } else if (d && (o = d.getElementById(r)) && z(e, o) && o.id === r) return i.push(o), i
                    } else {
                        if (u[2]) return J.apply(i, e.getElementsByTagName(t)), i;
                        if ((r = u[3]) && x.getElementsByClassName && e.getElementsByClassName) return J.apply(i, e.getElementsByClassName(r)), i
                    }
                if (x.qsa && !$[t + " "] && (!M || !M.test(t))) {
                    if (1 !== m) d = e, p = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(yt, "\\$&") : e.setAttribute("id", a = I), c = P(t), s = c.length, l = ft.test(a) ? "#" + a : "[id='" + a + "']"; s--;) c[s] = l + " " + f(c[s]);
                        p = c.join(","), d = vt.test(t) && h(e.parentNode) || e
                    }
                    if (p) try {
                        return J.apply(i, d.querySelectorAll(p)), i
                    } catch (g) {} finally {
                        a === I && e.removeAttribute("id")
                    }
                }
            }
            return k(t.replace(at, "$1"), e, i, n)
        }

        function i() {
            function t(i, n) {
                return e.push(i + " ") > T.cacheLength && delete t[e.shift()], t[i + " "] = n
            }
            var e = [];
            return t
        }

        function n(t) {
            return t[I] = !0, t
        }

        function r(t) {
            var e = E.createElement("div");
            try {
                return !!t(e)
            } catch (i) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function s(t, e) {
            for (var i = t.split("|"), n = i.length; n--;) T.attrHandle[i[n]] = e
        }

        function o(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return "input" === i && e.type === t
            }
        }

        function l(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function u(t) {
            return n(function(e) {
                return e = +e, n(function(i, n) {
                    for (var r, s = t([], i.length, e), o = s.length; o--;) i[r = s[o]] && (i[r] = !(n[r] = i[r]))
                })
            })
        }

        function h(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function c() {}

        function f(t) {
            for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
            return n
        }

        function p(t, e, i) {
            var n = e.dir,
                r = i && "parentNode" === n,
                s = B++;
            return e.first ? function(e, i, s) {
                for (; e = e[n];)
                    if (1 === e.nodeType || r) return t(e, i, s)
            } : function(e, i, o) {
                var a, l, u, h = [H, s];
                if (o) {
                    for (; e = e[n];)
                        if ((1 === e.nodeType || r) && t(e, i, o)) return !0
                } else
                    for (; e = e[n];)
                        if (1 === e.nodeType || r) {
                            if (u = e[I] || (e[I] = {}), l = u[e.uniqueID] || (u[e.uniqueID] = {}), (a = l[n]) && a[0] === H && a[1] === s) return h[2] = a[2];
                            if (l[n] = h, h[2] = t(e, i, o)) return !0
                        }
            }
        }

        function d(t) {
            return t.length > 1 ? function(e, i, n) {
                for (var r = t.length; r--;)
                    if (!t[r](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function m(t, i, n) {
            for (var r = 0, s = i.length; s > r; r++) e(t, i[r], n);
            return n
        }

        function g(t, e, i, n, r) {
            for (var s, o = [], a = 0, l = t.length, u = null != e; l > a; a++)(s = t[a]) && (!i || i(s, n, r)) && (o.push(s), u && e.push(a));
            return o
        }

        function _(t, e, i, r, s, o) {
            return r && !r[I] && (r = _(r)), s && !s[I] && (s = _(s, o)), n(function(n, o, a, l) {
                var u, h, c, f = [],
                    p = [],
                    d = o.length,
                    _ = n || m(e || "*", a.nodeType ? [a] : a, []),
                    v = !t || !n && e ? _ : g(_, f, t, a, l),
                    y = i ? s || (n ? t : d || r) ? [] : o : v;
                if (i && i(v, y, a, l), r)
                    for (u = g(y, p), r(u, [], a, l), h = u.length; h--;)(c = u[h]) && (y[p[h]] = !(v[p[h]] = c));
                if (n) {
                    if (s || t) {
                        if (s) {
                            for (u = [], h = y.length; h--;)(c = y[h]) && u.push(v[h] = c);
                            s(null, y = [], u, l)
                        }
                        for (h = y.length; h--;)(c = y[h]) && (u = s ? tt(n, c) : f[h]) > -1 && (n[u] = !(o[u] = c))
                    }
                } else y = g(y === o ? y.splice(d, y.length) : y), s ? s(null, o, y, l) : J.apply(o, y)
            })
        }

        function v(t) {
            for (var e, i, n, r = t.length, s = T.relative[t[0].type], o = s || T.relative[" "], a = s ? 1 : 0, l = p(function(t) {
                    return t === e
                }, o, !0), u = p(function(t) {
                    return tt(e, t) > -1
                }, o, !0), h = [function(t, i, n) {
                    var r = !s && (n || i !== A) || ((e = i).nodeType ? l(t, i, n) : u(t, i, n));
                    return e = null, r
                }]; r > a; a++)
                if (i = T.relative[t[a].type]) h = [p(d(h), i)];
                else {
                    if (i = T.filter[t[a].type].apply(null, t[a].matches), i[I]) {
                        for (n = ++a; r > n && !T.relative[t[n].type]; n++);
                        return _(a > 1 && d(h), a > 1 && f(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(at, "$1"), i, n > a && v(t.slice(a, n)), r > n && v(t = t.slice(n)), r > n && f(t))
                    }
                    h.push(i)
                }
            return d(h)
        }

        function y(t, i) {
            var r = i.length > 0,
                s = t.length > 0,
                o = function(n, o, a, l, u) {
                    var h, c, f, p = 0,
                        d = "0",
                        m = n && [],
                        _ = [],
                        v = A,
                        y = n || s && T.find.TAG("*", u),
                        w = H += null == v ? 1 : Math.random() || .1,
                        x = y.length;
                    for (u && (A = o === E || o || u); d !== x && null != (h = y[d]); d++) {
                        if (s && h) {
                            for (c = 0, o || h.ownerDocument === E || (D(h), a = !L); f = t[c++];)
                                if (f(h, o || E, a)) {
                                    l.push(h);
                                    break
                                }
                            u && (H = w)
                        }
                        r && ((h = !f && h) && p--, n && m.push(h))
                    }
                    if (p += d, r && d !== p) {
                        for (c = 0; f = i[c++];) f(m, _, o, a);
                        if (n) {
                            if (p > 0)
                                for (; d--;) m[d] || _[d] || (_[d] = Q.call(l));
                            _ = g(_)
                        }
                        J.apply(l, _), u && !n && _.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                    }
                    return u && (H = w, A = v), m
                };
            return r ? n(o) : o
        }
        var w, x, T, b, S, P, C, k, A, R, O, D, E, N, L, M, F, j, z, I = "sizzle" + 1 * new Date,
            q = t.document,
            H = 0,
            B = 0,
            W = i(),
            X = i(),
            $ = i(),
            U = function(t, e) {
                return t === e && (O = !0), 0
            },
            Y = 1 << 31,
            V = {}.hasOwnProperty,
            G = [],
            Q = G.pop,
            Z = G.push,
            J = G.push,
            K = G.slice,
            tt = function(t, e) {
                for (var i = 0, n = t.length; n > i; i++)
                    if (t[i] === e) return i;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            it = "[\\x20\\t\\r\\n\\f]",
            nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            rt = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + it + "*\\]",
            st = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
            ot = new RegExp(it + "+", "g"),
            at = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
            lt = new RegExp("^" + it + "*," + it + "*"),
            ut = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
            ht = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
            ct = new RegExp(st),
            ft = new RegExp("^" + nt + "$"),
            pt = {
                ID: new RegExp("^#(" + nt + ")"),
                CLASS: new RegExp("^\\.(" + nt + ")"),
                TAG: new RegExp("^(" + nt + "|[*])"),
                ATTR: new RegExp("^" + rt),
                PSEUDO: new RegExp("^" + st),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
            },
            dt = /^(?:input|select|textarea|button)$/i,
            mt = /^h\d$/i,
            gt = /^[^{]+\{\s*\[native \w/,
            _t = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            vt = /[+~]/,
            yt = /'|\\/g,
            wt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
            xt = function(t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            Tt = function() {
                D()
            };
        try {
            J.apply(G = K.call(q.childNodes), q.childNodes), G[q.childNodes.length].nodeType
        } catch (bt) {
            J = {
                apply: G.length ? function(t, e) {
                    Z.apply(t, K.call(e))
                } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }
        x = e.support = {}, S = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, D = e.setDocument = function(t) {
            var e, i, n = t ? t.ownerDocument || t : q;
            return n !== E && 9 === n.nodeType && n.documentElement ? (E = n, N = E.documentElement, L = !S(E), (i = E.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", Tt, !1) : i.attachEvent && i.attachEvent("onunload", Tt)), x.attributes = r(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), x.getElementsByTagName = r(function(t) {
                return t.appendChild(E.createComment("")), !t.getElementsByTagName("*").length
            }), x.getElementsByClassName = gt.test(E.getElementsByClassName), x.getById = r(function(t) {
                return N.appendChild(t).id = I, !E.getElementsByName || !E.getElementsByName(I).length
            }), x.getById ? (T.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && L) {
                    var i = e.getElementById(t);
                    return i ? [i] : []
                }
            }, T.filter.ID = function(t) {
                var e = t.replace(wt, xt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete T.find.ID, T.filter.ID = function(t) {
                var e = t.replace(wt, xt);
                return function(t) {
                    var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }), T.find.TAG = x.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var i, n = [],
                    r = 0,
                    s = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = s[r++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return s
            }, T.find.CLASS = x.getElementsByClassName && function(t, e) {
                return "undefined" != typeof e.getElementsByClassName && L ? e.getElementsByClassName(t) : void 0
            }, F = [], M = [], (x.qsa = gt.test(E.querySelectorAll)) && (r(function(t) {
                N.appendChild(t).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || M.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + I + "-]").length || M.push("~="), t.querySelectorAll(":checked").length || M.push(":checked"), t.querySelectorAll("a#" + I + "+*").length || M.push(".#.+[+~]")
            }), r(function(t) {
                var e = E.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && M.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), M.push(",.*:")
            })), (x.matchesSelector = gt.test(j = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && r(function(t) {
                x.disconnectedMatch = j.call(t, "div"), j.call(t, "[s!='']:x"), F.push("!=", st)
            }), M = M.length && new RegExp(M.join("|")), F = F.length && new RegExp(F.join("|")), e = gt.test(N.compareDocumentPosition), z = e || gt.test(N.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t,
                    n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, U = e ? function(t, e) {
                if (t === e) return O = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !x.sortDetached && e.compareDocumentPosition(t) === i ? t === E || t.ownerDocument === q && z(q, t) ? -1 : e === E || e.ownerDocument === q && z(q, e) ? 1 : R ? tt(R, t) - tt(R, e) : 0 : 4 & i ? -1 : 1)
            } : function(t, e) {
                if (t === e) return O = !0, 0;
                var i, n = 0,
                    r = t.parentNode,
                    s = e.parentNode,
                    a = [t],
                    l = [e];
                if (!r || !s) return t === E ? -1 : e === E ? 1 : r ? -1 : s ? 1 : R ? tt(R, t) - tt(R, e) : 0;
                if (r === s) return o(t, e);
                for (i = t; i = i.parentNode;) a.unshift(i);
                for (i = e; i = i.parentNode;) l.unshift(i);
                for (; a[n] === l[n];) n++;
                return n ? o(a[n], l[n]) : a[n] === q ? -1 : l[n] === q ? 1 : 0
            }, E) : E
        }, e.matches = function(t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== E && D(t), i = i.replace(ht, "='$1']"), x.matchesSelector && L && !$[i + " "] && (!F || !F.test(i)) && (!M || !M.test(i))) try {
                var n = j.call(t, i);
                if (n || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch (r) {}
            return e(i, E, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== E && D(t), z(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== E && D(t);
            var i = T.attrHandle[e.toLowerCase()],
                n = i && V.call(T.attrHandle, e.toLowerCase()) ? i(t, e, !L) : void 0;
            return void 0 !== n ? n : x.attributes || !L ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, i = [],
                n = 0,
                r = 0;
            if (O = !x.detectDuplicates, R = !x.sortStable && t.slice(0), t.sort(U), O) {
                for (; e = t[r++];) e === t[r] && (n = i.push(r));
                for (; n--;) t.splice(i[n], 1)
            }
            return R = null, t
        }, b = e.getText = function(t) {
            var e, i = "",
                n = 0,
                r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += b(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else
                for (; e = t[n++];) i += b(e);
            return i
        }, T = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: pt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(wt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ct.test(i) && (e = P(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(wt, xt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = W[t + " "];
                    return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && W(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, i, n) {
                    return function(r) {
                        var s = e.attr(r, t);
                        return null == s ? "!=" === i : i ? (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s.replace(ot, " ") + " ").indexOf(n) > -1 : "|=" === i ? s === n || s.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, i, n, r) {
                    var s = "nth" !== t.slice(0, 3),
                        o = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === n && 0 === r ? function(t) {
                        return !!t.parentNode
                    } : function(e, i, l) {
                        var u, h, c, f, p, d, m = s !== o ? "nextSibling" : "previousSibling",
                            g = e.parentNode,
                            _ = a && e.nodeName.toLowerCase(),
                            v = !l && !a,
                            y = !1;
                        if (g) {
                            if (s) {
                                for (; m;) {
                                    for (f = e; f = f[m];)
                                        if (a ? f.nodeName.toLowerCase() === _ : 1 === f.nodeType) return !1;
                                    d = m = "only" === t && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [o ? g.firstChild : g.lastChild], o && v) {
                                for (f = g, c = f[I] || (f[I] = {}), h = c[f.uniqueID] || (c[f.uniqueID] = {}), u = h[t] || [], p = u[0] === H && u[1], y = p && u[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (y = p = 0) || d.pop();)
                                    if (1 === f.nodeType && ++y && f === e) {
                                        h[t] = [H, p, y];
                                        break
                                    }
                            } else if (v && (f = e, c = f[I] || (f[I] = {}), h = c[f.uniqueID] || (c[f.uniqueID] = {}), u = h[t] || [], p = u[0] === H && u[1], y = p), y === !1)
                                for (;
                                    (f = ++p && f && f[m] || (y = p = 0) || d.pop()) && ((a ? f.nodeName.toLowerCase() !== _ : 1 !== f.nodeType) || !++y || (v && (c = f[I] || (f[I] = {}), h = c[f.uniqueID] || (c[f.uniqueID] = {}), h[t] = [H, y]), f !== e)););
                            return y -= r, y === n || y % n === 0 && y / n >= 0
                        }
                    }
                },
                PSEUDO: function(t, i) {
                    var r, s = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return s[I] ? s(i) : s.length > 1 ? (r = [t, t, "", i], T.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                        for (var n, r = s(t, i), o = r.length; o--;) n = tt(t, r[o]), t[n] = !(e[n] = r[o])
                    }) : function(t) {
                        return s(t, 0, r)
                    }) : s
                }
            },
            pseudos: {
                not: n(function(t) {
                    var e = [],
                        i = [],
                        r = C(t.replace(at, "$1"));
                    return r[I] ? n(function(t, e, i, n) {
                        for (var s, o = r(t, null, n, []), a = t.length; a--;)(s = o[a]) && (t[a] = !(e[a] = s))
                    }) : function(t, n, s) {
                        return e[0] = t, r(e, null, s, i), e[0] = null, !i.pop()
                    }
                }),
                has: n(function(t) {
                    return function(i) {
                        return e(t, i).length > 0
                    }
                }),
                contains: n(function(t) {
                    return t = t.replace(wt, xt),
                        function(e) {
                            return (e.textContent || e.innerText || b(e)).indexOf(t) > -1
                        }
                }),
                lang: n(function(t) {
                    return ft.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, xt).toLowerCase(),
                        function(e) {
                            var i;
                            do
                                if (i = L ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                },
                root: function(t) {
                    return t === N
                },
                focus: function(t) {
                    return t === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !T.pseudos.empty(t)
                },
                header: function(t) {
                    return mt.test(t.nodeName)
                },
                input: function(t) {
                    return dt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(t, e) {
                    return [e - 1]
                }),
                eq: u(function(t, e, i) {
                    return [0 > i ? i + e : i]
                }),
                even: u(function(t, e) {
                    for (var i = 0; e > i; i += 2) t.push(i);
                    return t
                }),
                odd: u(function(t, e) {
                    for (var i = 1; e > i; i += 2) t.push(i);
                    return t;
                }),
                lt: u(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                    return t
                }),
                gt: u(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                    return t
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[w] = a(w);
        for (w in {
                submit: !0,
                reset: !0
            }) T.pseudos[w] = l(w);
        return c.prototype = T.filters = T.pseudos, T.setFilters = new c, P = e.tokenize = function(t, i) {
            var n, r, s, o, a, l, u, h = X[t + " "];
            if (h) return i ? 0 : h.slice(0);
            for (a = t, l = [], u = T.preFilter; a;) {
                (!n || (r = lt.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(s = [])), n = !1, (r = ut.exec(a)) && (n = r.shift(), s.push({
                    value: n,
                    type: r[0].replace(at, " ")
                }), a = a.slice(n.length));
                for (o in T.filter) !(r = pt[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), s.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return i ? a.length : a ? e.error(t) : X(t, l).slice(0)
        }, C = e.compile = function(t, e) {
            var i, n = [],
                r = [],
                s = $[t + " "];
            if (!s) {
                for (e || (e = P(t)), i = e.length; i--;) s = v(e[i]), s[I] ? n.push(s) : r.push(s);
                s = $(t, y(r, n)), s.selector = t
            }
            return s
        }, k = e.select = function(t, e, i, n) {
            var r, s, o, a, l, u = "function" == typeof t && t,
                c = !n && P(t = u.selector || t);
            if (i = i || [], 1 === c.length) {
                if (s = c[0] = c[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && x.getById && 9 === e.nodeType && L && T.relative[s[1].type]) {
                    if (e = (T.find.ID(o.matches[0].replace(wt, xt), e) || [])[0], !e) return i;
                    u && (e = e.parentNode), t = t.slice(s.shift().value.length)
                }
                for (r = pt.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !T.relative[a = o.type]);)
                    if ((l = T.find[a]) && (n = l(o.matches[0].replace(wt, xt), vt.test(s[0].type) && h(e.parentNode) || e))) {
                        if (s.splice(r, 1), t = n.length && f(s), !t) return J.apply(i, n), i;
                        break
                    }
            }
            return (u || C(t, c))(n, e, !L, i, !e || vt.test(t) && h(e.parentNode) || e), i
        }, x.sortStable = I.split("").sort(U).join("") === I, x.detectDuplicates = !!O, D(), x.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(E.createElement("div"))
        }), r(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function(t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), x.attributes && r(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || s("value", function(t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), r(function(t) {
            return null == t.getAttribute("disabled")
        }) || s(et, function(t, e, i) {
            var n;
            return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), e
    }(t);
    st.find = ht, st.expr = ht.selectors, st.expr[":"] = st.expr.pseudos, st.uniqueSort = st.unique = ht.uniqueSort, st.text = ht.getText, st.isXMLDoc = ht.isXML, st.contains = ht.contains;
    var ct = function(t, e, i) {
            for (var n = [], r = void 0 !== i;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && st(t).is(i)) break;
                    n.push(t)
                }
            return n
        },
        ft = function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        },
        pt = st.expr.match.needsContext,
        dt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        mt = /^.[^:#\[\.,]*$/;
    st.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? st.find.matchesSelector(n, t) ? [n] : [] : st.find.matches(t, st.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, st.fn.extend({
        find: function(t) {
            var e, i = this.length,
                n = [],
                r = this;
            if ("string" != typeof t) return this.pushStack(st(t).filter(function() {
                for (e = 0; i > e; e++)
                    if (st.contains(r[e], this)) return !0
            }));
            for (e = 0; i > e; e++) st.find(t, r[e], n);
            return n = this.pushStack(i > 1 ? st.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) {
            return this.pushStack(n(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(n(this, t || [], !0))
        },
        is: function(t) {
            return !!n(this, "string" == typeof t && pt.test(t) ? st(t) : t || [], !1).length
        }
    });
    var gt, _t = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        vt = st.fn.init = function(t, e, i) {
            var n, r;
            if (!t) return this;
            if (i = i || gt, "string" == typeof t) {
                if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : _t.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof st ? e[0] : e, st.merge(this, st.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : G, !0)), dt.test(n[1]) && st.isPlainObject(e))
                        for (n in e) st.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return r = G.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = G, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : st.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(st) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), st.makeArray(t, this))
        };
    vt.prototype = st.fn, gt = st(G);
    var yt = /^(?:parents|prev(?:Until|All))/,
        wt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    st.fn.extend({
        has: function(t) {
            var e = st(t, this),
                i = e.length;
            return this.filter(function() {
                for (var t = 0; i > t; t++)
                    if (st.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            for (var i, n = 0, r = this.length, s = [], o = pt.test(t) || "string" != typeof t ? st(t, e || this.context) : 0; r > n; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && st.find.matchesSelector(i, t))) {
                        s.push(i);
                        break
                    }
            return this.pushStack(s.length > 1 ? st.uniqueSort(s) : s)
        },
        index: function(t) {
            return t ? "string" == typeof t ? K.call(st(t), this[0]) : K.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(st.uniqueSort(st.merge(this.get(), st(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), st.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return ct(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return ct(t, "parentNode", i)
        },
        next: function(t) {
            return r(t, "nextSibling")
        },
        prev: function(t) {
            return r(t, "previousSibling")
        },
        nextAll: function(t) {
            return ct(t, "nextSibling")
        },
        prevAll: function(t) {
            return ct(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return ct(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return ct(t, "previousSibling", i)
        },
        siblings: function(t) {
            return ft((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return ft(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || st.merge([], t.childNodes)
        }
    }, function(t, e) {
        st.fn[t] = function(i, n) {
            var r = st.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = st.filter(n, r)), this.length > 1 && (wt[t] || st.uniqueSort(r), yt.test(t) && r.reverse()), this.pushStack(r)
        }
    });
    var xt = /\S+/g;
    st.Callbacks = function(t) {
        t = "string" == typeof t ? s(t) : st.extend({}, t);
        var e, i, n, r, o = [],
            a = [],
            l = -1,
            u = function() {
                for (r = t.once, n = e = !0; a.length; l = -1)
                    for (i = a.shift(); ++l < o.length;) o[l].apply(i[0], i[1]) === !1 && t.stopOnFalse && (l = o.length, i = !1);
                t.memory || (i = !1), e = !1, r && (o = i ? [] : "")
            },
            h = {
                add: function() {
                    return o && (i && !e && (l = o.length - 1, a.push(i)), function n(e) {
                        st.each(e, function(e, i) {
                            st.isFunction(i) ? t.unique && h.has(i) || o.push(i) : i && i.length && "string" !== st.type(i) && n(i)
                        })
                    }(arguments), i && !e && u()), this
                },
                remove: function() {
                    return st.each(arguments, function(t, e) {
                        for (var i;
                            (i = st.inArray(e, o, i)) > -1;) o.splice(i, 1), l >= i && l--
                    }), this
                },
                has: function(t) {
                    return t ? st.inArray(t, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return r = a = [], o = i = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return r = a = [], i || (o = i = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(t, i) {
                    return r || (i = i || [], i = [t, i.slice ? i.slice() : i], a.push(i), e || u()), this
                },
                fire: function() {
                    return h.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return h
    }, st.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", st.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", st.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", st.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return st.Deferred(function(i) {
                            st.each(e, function(e, s) {
                                var o = st.isFunction(t[e]) && t[e];
                                r[s[1]](function() {
                                    var t = o && o.apply(this, arguments);
                                    t && st.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[s[0] + "With"](this === n ? i.promise() : this, o ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? st.extend(t, n) : n
                    }
                },
                r = {};
            return n.pipe = n.then, st.each(e, function(t, s) {
                var o = s[2],
                    a = s[3];
                n[s[1]] = o.add, a && o.add(function() {
                    i = a
                }, e[1 ^ t][2].disable, e[2][2].lock), r[s[0]] = function() {
                    return r[s[0] + "With"](this === r ? n : this, arguments), this
                }, r[s[0] + "With"] = o.fireWith
            }), n.promise(r), t && t.call(r, r), r
        },
        when: function(t) {
            var e, i, n, r = 0,
                s = Q.call(arguments),
                o = s.length,
                a = 1 !== o || t && st.isFunction(t.promise) ? o : 0,
                l = 1 === a ? t : st.Deferred(),
                u = function(t, i, n) {
                    return function(r) {
                        i[t] = this, n[t] = arguments.length > 1 ? Q.call(arguments) : r, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                    }
                };
            if (o > 1)
                for (e = new Array(o), i = new Array(o), n = new Array(o); o > r; r++) s[r] && st.isFunction(s[r].promise) ? s[r].promise().progress(u(r, i, e)).done(u(r, n, s)).fail(l.reject) : --a;
            return a || l.resolveWith(n, s), l.promise()
        }
    });
    var Tt;
    st.fn.ready = function(t) {
        return st.ready.promise().done(t), this
    }, st.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? st.readyWait++ : st.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --st.readyWait : st.isReady) || (st.isReady = !0, t !== !0 && --st.readyWait > 0 || (Tt.resolveWith(G, [st]), st.fn.triggerHandler && (st(G).triggerHandler("ready"), st(G).off("ready"))))
        }
    }), st.ready.promise = function(e) {
        return Tt || (Tt = st.Deferred(), "complete" === G.readyState || "loading" !== G.readyState && !G.documentElement.doScroll ? t.setTimeout(st.ready) : (G.addEventListener("DOMContentLoaded", o), t.addEventListener("load", o))), Tt.promise(e)
    }, st.ready.promise();
    var bt = function(t, e, i, n, r, s, o) {
            var a = 0,
                l = t.length,
                u = null == i;
            if ("object" === st.type(i)) {
                r = !0;
                for (a in i) bt(t, e, a, i[a], !0, s, o)
            } else if (void 0 !== n && (r = !0, st.isFunction(n) || (o = !0), u && (o ? (e.call(t, n), e = null) : (u = e, e = function(t, e, i) {
                    return u.call(st(t), i)
                })), e))
                for (; l > a; a++) e(t[a], i, o ? n : n.call(t[a], a, e(t[a], i)));
            return r ? t : u ? e.call(t) : l ? e(t[0], i) : s
        },
        St = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
    a.uid = 1, a.prototype = {
        register: function(t, e) {
            var i = e || {};
            return t.nodeType ? t[this.expando] = i : Object.defineProperty(t, this.expando, {
                value: i,
                writable: !0,
                configurable: !0
            }), t[this.expando]
        },
        cache: function(t) {
            if (!St(t)) return {};
            var e = t[this.expando];
            return e || (e = {}, St(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function(t, e, i) {
            var n, r = this.cache(t);
            if ("string" == typeof e) r[e] = i;
            else
                for (n in e) r[n] = e[n];
            return r
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
        },
        access: function(t, e, i) {
            var n;
            return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, st.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e)
        },
        remove: function(t, e) {
            var i, n, r, s = t[this.expando];
            if (void 0 !== s) {
                if (void 0 === e) this.register(t);
                else {
                    st.isArray(e) ? n = e.concat(e.map(st.camelCase)) : (r = st.camelCase(e), e in s ? n = [e, r] : (n = r, n = n in s ? [n] : n.match(xt) || [])), i = n.length;
                    for (; i--;) delete s[n[i]]
                }(void 0 === e || st.isEmptyObject(s)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !st.isEmptyObject(e)
        }
    };
    var Pt = new a,
        Ct = new a,
        kt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        At = /[A-Z]/g;
    st.extend({
        hasData: function(t) {
            return Ct.hasData(t) || Pt.hasData(t)
        },
        data: function(t, e, i) {
            return Ct.access(t, e, i)
        },
        removeData: function(t, e) {
            Ct.remove(t, e)
        },
        _data: function(t, e, i) {
            return Pt.access(t, e, i)
        },
        _removeData: function(t, e) {
            Pt.remove(t, e)
        }
    }), st.fn.extend({
        data: function(t, e) {
            var i, n, r, s = this[0],
                o = s && s.attributes;
            if (void 0 === t) {
                if (this.length && (r = Ct.get(s), 1 === s.nodeType && !Pt.get(s, "hasDataAttrs"))) {
                    for (i = o.length; i--;) o[i] && (n = o[i].name, 0 === n.indexOf("data-") && (n = st.camelCase(n.slice(5)), l(s, n, r[n])));
                    Pt.set(s, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                Ct.set(this, t)
            }) : bt(this, function(e) {
                var i, n;
                if (s && void 0 === e) {
                    if (i = Ct.get(s, t) || Ct.get(s, t.replace(At, "-$&").toLowerCase()), void 0 !== i) return i;
                    if (n = st.camelCase(t), i = Ct.get(s, n), void 0 !== i) return i;
                    if (i = l(s, n, void 0), void 0 !== i) return i
                } else n = st.camelCase(t), this.each(function() {
                    var i = Ct.get(this, n);
                    Ct.set(this, n, e), t.indexOf("-") > -1 && void 0 !== i && Ct.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                Ct.remove(this, t)
            })
        }
    }), st.extend({
        queue: function(t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue", n = Pt.get(t, e), i && (!n || st.isArray(i) ? n = Pt.access(t, e, st.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = st.queue(t, e),
                n = i.length,
                r = i.shift(),
                s = st._queueHooks(t, e),
                o = function() {
                    st.dequeue(t, e)
                };
            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete s.stop, r.call(t, o, s)), !n && s && s.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return Pt.get(t, i) || Pt.access(t, i, {
                empty: st.Callbacks("once memory").add(function() {
                    Pt.remove(t, [e + "queue", i])
                })
            })
        }
    }), st.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? st.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var i = st.queue(this, t, e);
                st._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && st.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                st.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i, n = 1,
                r = st.Deferred(),
                s = this,
                o = this.length,
                a = function() {
                    --n || r.resolveWith(s, [s])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;) i = Pt.get(s[o], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var Rt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ot = new RegExp("^(?:([+-])=|)(" + Rt + ")([a-z%]*)$", "i"),
        Dt = ["Top", "Right", "Bottom", "Left"],
        Et = function(t, e) {
            return t = e || t, "none" === st.css(t, "display") || !st.contains(t.ownerDocument, t)
        },
        Nt = /^(?:checkbox|radio)$/i,
        Lt = /<([\w:-]+)/,
        Mt = /^$|\/(?:java|ecma)script/i,
        Ft = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ft.optgroup = Ft.option, Ft.tbody = Ft.tfoot = Ft.colgroup = Ft.caption = Ft.thead, Ft.th = Ft.td;
    var jt = /<|&#?\w+;/;
    ! function() {
        var t = G.createDocumentFragment(),
            e = t.appendChild(G.createElement("div")),
            i = G.createElement("input");
        i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), nt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var zt = /^key/,
        It = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        qt = /^([^.]*)(?:\.(.+)|)/;
    st.event = {
        global: {},
        add: function(t, e, i, n, r) {
            var s, o, a, l, u, h, c, f, p, d, m, g = Pt.get(t);
            if (g)
                for (i.handler && (s = i, i = s.handler, r = s.selector), i.guid || (i.guid = st.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function(e) {
                        return "undefined" != typeof st && st.event.triggered !== e.type ? st.event.dispatch.apply(t, arguments) : void 0
                    }), e = (e || "").match(xt) || [""], u = e.length; u--;) a = qt.exec(e[u]) || [], p = m = a[1], d = (a[2] || "").split(".").sort(), p && (c = st.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, c = st.event.special[p] || {}, h = st.extend({
                    type: p,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && st.expr.match.needsContext.test(r),
                    namespace: d.join(".")
                }, s), (f = l[p]) || (f = l[p] = [], f.delegateCount = 0, c.setup && c.setup.call(t, n, d, o) !== !1 || t.addEventListener && t.addEventListener(p, o)), c.add && (c.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), r ? f.splice(f.delegateCount++, 0, h) : f.push(h), st.event.global[p] = !0)
        },
        remove: function(t, e, i, n, r) {
            var s, o, a, l, u, h, c, f, p, d, m, g = Pt.hasData(t) && Pt.get(t);
            if (g && (l = g.events)) {
                for (e = (e || "").match(xt) || [""], u = e.length; u--;)
                    if (a = qt.exec(e[u]) || [], p = m = a[1], d = (a[2] || "").split(".").sort(), p) {
                        for (c = st.event.special[p] || {}, p = (n ? c.delegateType : c.bindType) || p, f = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = f.length; s--;) h = f[s], !r && m !== h.origType || i && i.guid !== h.guid || a && !a.test(h.namespace) || n && n !== h.selector && ("**" !== n || !h.selector) || (f.splice(s, 1), h.selector && f.delegateCount--, c.remove && c.remove.call(t, h));
                        o && !f.length && (c.teardown && c.teardown.call(t, d, g.handle) !== !1 || st.removeEvent(t, p, g.handle), delete l[p])
                    } else
                        for (p in l) st.event.remove(t, p + e[u], i, n, !0);
                st.isEmptyObject(l) && Pt.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            t = st.event.fix(t);
            var e, i, n, r, s, o = [],
                a = Q.call(arguments),
                l = (Pt.get(this, "events") || {})[t.type] || [],
                u = st.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                for (o = st.event.handlers.call(this, t, l), e = 0;
                    (r = o[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, i = 0;
                        (s = r.handlers[i++]) && !t.isImmediatePropagationStopped();)(!t.rnamespace || t.rnamespace.test(s.namespace)) && (t.handleObj = s, t.data = s.data, n = ((st.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var i, n, r, s, o = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (n = [], i = 0; a > i; i++) s = e[i], r = s.selector + " ", void 0 === n[r] && (n[r] = s.needsContext ? st(r, this).index(l) > -1 : st.find(r, this, null, [l]).length), n[r] && n.push(s);
                        n.length && o.push({
                            elem: l,
                            handlers: n
                        })
                    }
            return a < e.length && o.push({
                elem: this,
                handlers: e.slice(a)
            }), o
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var i, n, r, s = e.button;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || G, n = i.documentElement, r = i.body, t.pageX = e.clientX + (n && n.scrollLeft || r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n.clientTop || r && r.clientTop || 0)), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
            }
        },
        fix: function(t) {
            if (t[st.expando]) return t;
            var e, i, n, r = t.type,
                s = t,
                o = this.fixHooks[r];
            for (o || (this.fixHooks[r] = o = It.test(r) ? this.mouseHooks : zt.test(r) ? this.keyHooks : {}), n = o.props ? this.props.concat(o.props) : this.props, t = new st.Event(s), e = n.length; e--;) i = n[e], t[i] = s[i];
            return t.target || (t.target = G), 3 === t.target.nodeType && (t.target = t.target.parentNode), o.filter ? o.filter(t, s) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== m() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === m() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && st.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return st.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, st.removeEvent = function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    }, st.Event = function(t, e) {
        return this instanceof st.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? p : d) : this.type = t, e && st.extend(this, e), this.timeStamp = t && t.timeStamp || st.now(), void(this[st.expando] = !0)) : new st.Event(t, e)
    }, st.Event.prototype = {
        constructor: st.Event,
        isDefaultPrevented: d,
        isPropagationStopped: d,
        isImmediatePropagationStopped: d,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = p, t && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = p, t && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = p, t && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, st.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        st.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = this,
                    r = t.relatedTarget,
                    s = t.handleObj;
                return (!r || r !== n && !st.contains(n, r)) && (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), st.fn.extend({
        on: function(t, e, i, n) {
            return g(this, t, e, i, n)
        },
        one: function(t, e, i, n) {
            return g(this, t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, r;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, st(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = d), this.each(function() {
                st.event.remove(this, t, i, e)
            })
        }
    });
    var Ht = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Bt = /<script|<style|<link/i,
        Wt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Xt = /^true\/(.*)/,
        $t = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    st.extend({
        htmlPrefilter: function(t) {
            return t.replace(Ht, "<$1></$2>")
        },
        clone: function(t, e, i) {
            var n, r, s, o, a = t.cloneNode(!0),
                l = st.contains(t.ownerDocument, t);
            if (!(nt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || st.isXMLDoc(t)))
                for (o = h(a), s = h(t), n = 0, r = s.length; r > n; n++) x(s[n], o[n]);
            if (e)
                if (i)
                    for (s = s || h(t), o = o || h(a), n = 0, r = s.length; r > n; n++) w(s[n], o[n]);
                else w(t, a);
            return o = h(a, "script"), o.length > 0 && c(o, !l && h(t, "script")), a
        },
        cleanData: function(t) {
            for (var e, i, n, r = st.event.special, s = 0; void 0 !== (i = t[s]); s++)
                if (St(i)) {
                    if (e = i[Pt.expando]) {
                        if (e.events)
                            for (n in e.events) r[n] ? st.event.remove(i, n) : st.removeEvent(i, n, e.handle);
                        i[Pt.expando] = void 0
                    }
                    i[Ct.expando] && (i[Ct.expando] = void 0)
                }
        }
    }), st.fn.extend({
        domManip: T,
        detach: function(t) {
            return b(this, t, !0)
        },
        remove: function(t) {
            return b(this, t)
        },
        text: function(t) {
            return bt(this, function(t) {
                return void 0 === t ? st.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return T(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = _(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return T(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = _(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return T(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return T(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (st.cleanData(h(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return st.clone(this, t, e)
            })
        },
        html: function(t) {
            return bt(this, function(t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Bt.test(t) && !Ft[(Lt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = st.htmlPrefilter(t);
                    try {
                        for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (st.cleanData(h(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return T(this, arguments, function(e) {
                var i = this.parentNode;
                st.inArray(this, t) < 0 && (st.cleanData(h(this)), i && i.replaceChild(e, this))
            }, t)
        }
    }), st.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        st.fn[t] = function(t) {
            for (var i, n = [], r = st(t), s = r.length - 1, o = 0; s >= o; o++) i = o === s ? this : this.clone(!0), st(r[o])[e](i), J.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var Ut, Yt = {
            HTML: "block",
            BODY: "block"
        },
        Vt = /^margin/,
        Gt = new RegExp("^(" + Rt + ")(?!px)[a-z%]+$", "i"),
        Qt = function(e) {
            var i = e.ownerDocument.defaultView;
            return i.opener || (i = t), i.getComputedStyle(e)
        },
        Zt = function(t, e, i, n) {
            var r, s, o = {};
            for (s in e) o[s] = t.style[s], t.style[s] = e[s];
            r = i.apply(t, n || []);
            for (s in e) t.style[s] = o[s];
            return r
        },
        Jt = G.documentElement;
    ! function() {
        function e() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Jt.appendChild(o);
            var e = t.getComputedStyle(a);
            i = "1%" !== e.top, s = "2px" === e.marginLeft, n = "4px" === e.width, a.style.marginRight = "50%", r = "4px" === e.marginRight, Jt.removeChild(o)
        }
        var i, n, r, s, o = G.createElement("div"),
            a = G.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(a), st.extend(nt, {
            pixelPosition: function() {
                return e(), i
            },
            boxSizingReliable: function() {
                return null == n && e(), n
            },
            pixelMarginRight: function() {
                return null == n && e(), r
            },
            reliableMarginLeft: function() {
                return null == n && e(), s
            },
            reliableMarginRight: function() {
                var e, i = a.appendChild(G.createElement("div"));
                return i.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", a.style.width = "1px", Jt.appendChild(o), e = !parseFloat(t.getComputedStyle(i).marginRight), Jt.removeChild(o), a.removeChild(i), e
            }
        }))
    }();
    var Kt = /^(none|table(?!-c[ea]).+)/,
        te = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ee = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ie = ["Webkit", "O", "Moz", "ms"],
        ne = G.createElement("div").style;
    st.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = C(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, s, o, a = st.camelCase(e),
                    l = t.style;
                return e = st.cssProps[a] || (st.cssProps[a] = A(a) || a), o = st.cssHooks[e] || st.cssHooks[a], void 0 === i ? o && "get" in o && void 0 !== (r = o.get(t, !1, n)) ? r : l[e] : (s = typeof i, "string" === s && (r = Ot.exec(i)) && r[1] && (i = u(t, e, r), s = "number"), null != i && i === i && ("number" === s && (i += r && r[3] || (st.cssNumber[a] ? "" : "px")), nt.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), o && "set" in o && void 0 === (i = o.set(t, i, n)) || (l[e] = i)), void 0)
            }
        },
        css: function(t, e, i, n) {
            var r, s, o, a = st.camelCase(e);
            return e = st.cssProps[a] || (st.cssProps[a] = A(a) || a), o = st.cssHooks[e] || st.cssHooks[a], o && "get" in o && (r = o.get(t, !0, i)), void 0 === r && (r = C(t, e, n)), "normal" === r && e in ee && (r = ee[e]), "" === i || i ? (s = parseFloat(r), i === !0 || isFinite(s) ? s || 0 : r) : r
        }
    }), st.each(["height", "width"], function(t, e) {
        st.cssHooks[e] = {
            get: function(t, i, n) {
                return i ? Kt.test(st.css(t, "display")) && 0 === t.offsetWidth ? Zt(t, te, function() {
                    return D(t, e, n)
                }) : D(t, e, n) : void 0
            },
            set: function(t, i, n) {
                var r, s = n && Qt(t),
                    o = n && O(t, e, n, "border-box" === st.css(t, "boxSizing", !1, s), s);
                return o && (r = Ot.exec(i)) && "px" !== (r[3] || "px") && (t.style[e] = i, i = st.css(t, e)), R(t, i, o)
            }
        }
    }), st.cssHooks.marginLeft = k(nt.reliableMarginLeft, function(t, e) {
        return e ? (parseFloat(C(t, "marginLeft")) || t.getBoundingClientRect().left - Zt(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        })) + "px" : void 0
    }), st.cssHooks.marginRight = k(nt.reliableMarginRight, function(t, e) {
        return e ? Zt(t, {
            display: "inline-block"
        }, C, [t, "marginRight"]) : void 0
    }), st.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        st.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[t + Dt[n] + e] = s[n] || s[n - 2] || s[0];
                return r
            }
        }, Vt.test(t) || (st.cssHooks[t + e].set = R)
    }), st.fn.extend({
        css: function(t, e) {
            return bt(this, function(t, e, i) {
                var n, r, s = {},
                    o = 0;
                if (st.isArray(e)) {
                    for (n = Qt(t), r = e.length; r > o; o++) s[e[o]] = st.css(t, e[o], !1, n);
                    return s
                }
                return void 0 !== i ? st.style(t, e, i) : st.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return E(this, !0)
        },
        hide: function() {
            return E(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Et(this) ? st(this).show() : st(this).hide()
            })
        }
    }), st.Tween = N, N.prototype = {
        constructor: N,
        init: function(t, e, i, n, r, s) {
            this.elem = t, this.prop = i, this.easing = r || st.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (st.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = N.propHooks[this.prop];
            return t && t.get ? t.get(this) : N.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = N.propHooks[this.prop];
            return this.options.duration ? this.pos = e = st.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : N.propHooks._default.set(this), this
        }
    }, N.prototype.init.prototype = N.prototype, N.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = st.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            },
            set: function(t) {
                st.fx.step[t.prop] ? st.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[st.cssProps[t.prop]] && !st.cssHooks[t.prop] ? t.elem[t.prop] = t.now : st.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, N.propHooks.scrollTop = N.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, st.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, st.fx = N.prototype.init, st.fx.step = {};
    var re, se, oe = /^(?:toggle|show|hide)$/,
        ae = /queueHooks$/;
    st.Animation = st.extend(I, {
            tweeners: {
                "*": [function(t, e) {
                    var i = this.createTween(t, e);
                    return u(i.elem, t, Ot.exec(e), i), i
                }]
            },
            tweener: function(t, e) {
                st.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(xt);
                for (var i, n = 0, r = t.length; r > n; n++) i = t[n], I.tweeners[i] = I.tweeners[i] || [], I.tweeners[i].unshift(e)
            },
            prefilters: [j],
            prefilter: function(t, e) {
                e ? I.prefilters.unshift(t) : I.prefilters.push(t)
            }
        }), st.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? st.extend({}, t) : {
                complete: i || !i && e || st.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !st.isFunction(e) && e
            };
            return n.duration = st.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in st.fx.speeds ? st.fx.speeds[n.duration] : st.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                st.isFunction(n.old) && n.old.call(this), n.queue && st.dequeue(this, n.queue)
            }, n
        }, st.fn.extend({
            fadeTo: function(t, e, i, n) {
                return this.filter(Et).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function(t, e, i, n) {
                var r = st.isEmptyObject(t),
                    s = st.speed(e, i, n),
                    o = function() {
                        var e = I(this, st.extend({}, t), s);
                        (r || Pt.get(this, "finish")) && e.stop(!0)
                    };
                return o.finish = o, r || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
            },
            stop: function(t, e, i) {
                var n = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        r = null != t && t + "queueHooks",
                        s = st.timers,
                        o = Pt.get(this);
                    if (r) o[r] && o[r].stop && n(o[r]);
                    else
                        for (r in o) o[r] && o[r].stop && ae.test(r) && n(o[r]);
                    for (r = s.length; r--;) s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(i), e = !1, s.splice(r, 1));
                    (e || !i) && st.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, i = Pt.get(this),
                        n = i[t + "queue"],
                        r = i[t + "queueHooks"],
                        s = st.timers,
                        o = n ? n.length : 0;
                    for (i.finish = !0, st.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                    for (e = 0; o > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }), st.each(["toggle", "show", "hide"], function(t, e) {
            var i = st.fn[e];
            st.fn[e] = function(t, n, r) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(M(e, !0), t, n, r)
            }
        }), st.each({
            slideDown: M("show"),
            slideUp: M("hide"),
            slideToggle: M("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            st.fn[t] = function(t, i, n) {
                return this.animate(e, t, i, n)
            }
        }), st.timers = [], st.fx.tick = function() {
            var t, e = 0,
                i = st.timers;
            for (re = st.now(); e < i.length; e++) t = i[e], t() || i[e] !== t || i.splice(e--, 1);
            i.length || st.fx.stop(), re = void 0
        }, st.fx.timer = function(t) {
            st.timers.push(t),
                t() ? st.fx.start() : st.timers.pop()
        }, st.fx.interval = 13, st.fx.start = function() {
            se || (se = t.setInterval(st.fx.tick, st.fx.interval))
        }, st.fx.stop = function() {
            t.clearInterval(se), se = null
        }, st.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, st.fn.delay = function(e, i) {
            return e = st.fx ? st.fx.speeds[e] || e : e, i = i || "fx", this.queue(i, function(i, n) {
                var r = t.setTimeout(i, e);
                n.stop = function() {
                    t.clearTimeout(r)
                }
            })
        },
        function() {
            var t = G.createElement("input"),
                e = G.createElement("select"),
                i = e.appendChild(G.createElement("option"));
            t.type = "checkbox", nt.checkOn = "" !== t.value, nt.optSelected = i.selected, e.disabled = !0, nt.optDisabled = !i.disabled, t = G.createElement("input"), t.value = "t", t.type = "radio", nt.radioValue = "t" === t.value
        }();
    var le, ue = st.expr.attrHandle;
    st.fn.extend({
        attr: function(t, e) {
            return bt(this, st.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                st.removeAttr(this, t)
            })
        }
    }), st.extend({
        attr: function(t, e, i) {
            var n, r, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return "undefined" == typeof t.getAttribute ? st.prop(t, e, i) : (1 === s && st.isXMLDoc(t) || (e = e.toLowerCase(), r = st.attrHooks[e] || (st.expr.match.bool.test(e) ? le : void 0)), void 0 !== i ? null === i ? void st.removeAttr(t, e) : r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : r && "get" in r && null !== (n = r.get(t, e)) ? n : (n = st.find.attr(t, e), null == n ? void 0 : n))
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!nt.radioValue && "radio" === e && st.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var i, n, r = 0,
                s = e && e.match(xt);
            if (s && 1 === t.nodeType)
                for (; i = s[r++];) n = st.propFix[i] || i, st.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
        }
    }), le = {
        set: function(t, e, i) {
            return e === !1 ? st.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, st.each(st.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = ue[e] || st.find.attr;
        ue[e] = function(t, e, n) {
            var r, s;
            return n || (s = ue[e], ue[e] = r, r = null != i(t, e, n) ? e.toLowerCase() : null, ue[e] = s), r
        }
    });
    var he = /^(?:input|select|textarea|button)$/i,
        ce = /^(?:a|area)$/i;
    st.fn.extend({
        prop: function(t, e) {
            return bt(this, st.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[st.propFix[t] || t]
            })
        }
    }), st.extend({
        prop: function(t, e, i) {
            var n, r, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && st.isXMLDoc(t) || (e = st.propFix[e] || e, r = st.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = st.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : he.test(t.nodeName) || ce.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), nt.optSelected || (st.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }
    }), st.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        st.propFix[this.toLowerCase()] = this
    });
    var fe = /[\t\r\n\f]/g;
    st.fn.extend({
        addClass: function(t) {
            var e, i, n, r, s, o, a, l = 0;
            if (st.isFunction(t)) return this.each(function(e) {
                st(this).addClass(t.call(this, e, q(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(xt) || []; i = this[l++];)
                    if (r = q(i), n = 1 === i.nodeType && (" " + r + " ").replace(fe, " ")) {
                        for (o = 0; s = e[o++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        a = st.trim(n), r !== a && i.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, r, s, o, a, l = 0;
            if (st.isFunction(t)) return this.each(function(e) {
                st(this).removeClass(t.call(this, e, q(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(xt) || []; i = this[l++];)
                    if (r = q(i), n = 1 === i.nodeType && (" " + r + " ").replace(fe, " ")) {
                        for (o = 0; s = e[o++];)
                            for (; n.indexOf(" " + s + " ") > -1;) n = n.replace(" " + s + " ", " ");
                        a = st.trim(n), r !== a && i.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : st.isFunction(t) ? this.each(function(i) {
                st(this).toggleClass(t.call(this, i, q(this), e), e)
            }) : this.each(function() {
                var e, n, r, s;
                if ("string" === i)
                    for (n = 0, r = st(this), s = t.match(xt) || []; e = s[n++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else(void 0 === t || "boolean" === i) && (e = q(this), e && Pt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : Pt.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++];)
                if (1 === i.nodeType && (" " + q(i) + " ").replace(fe, " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var pe = /\r/g;
    st.fn.extend({
        val: function(t) {
            var e, i, n, r = this[0]; {
                if (arguments.length) return n = st.isFunction(t), this.each(function(i) {
                    var r;
                    1 === this.nodeType && (r = n ? t.call(this, i, st(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : st.isArray(r) && (r = st.map(r, function(t) {
                        return null == t ? "" : t + ""
                    })), e = st.valHooks[this.type] || st.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                });
                if (r) return e = st.valHooks[r.type] || st.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : (i = r.value, "string" == typeof i ? i.replace(pe, "") : null == i ? "" : i)
            }
        }
    }), st.extend({
        valHooks: {
            option: {
                get: function(t) {
                    return st.trim(t.value)
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, r = t.selectedIndex, s = "select-one" === t.type || 0 > r, o = s ? null : [], a = s ? r + 1 : n.length, l = 0 > r ? a : s ? r : 0; a > l; l++)
                        if (i = n[l], (i.selected || l === r) && (nt.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !st.nodeName(i.parentNode, "optgroup"))) {
                            if (e = st(i).val(), s) return e;
                            o.push(e)
                        }
                    return o
                },
                set: function(t, e) {
                    for (var i, n, r = t.options, s = st.makeArray(e), o = r.length; o--;) n = r[o], (n.selected = st.inArray(st.valHooks.option.get(n), s) > -1) && (i = !0);
                    return i || (t.selectedIndex = -1), s
                }
            }
        }
    }), st.each(["radio", "checkbox"], function() {
        st.valHooks[this] = {
            set: function(t, e) {
                return st.isArray(e) ? t.checked = st.inArray(st(t).val(), e) > -1 : void 0
            }
        }, nt.checkOn || (st.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var de = /^(?:focusinfocus|focusoutblur)$/;
    st.extend(st.event, {
        trigger: function(e, i, n, r) {
            var s, o, a, l, u, h, c, f = [n || G],
                p = it.call(e, "type") ? e.type : e,
                d = it.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = a = n = n || G, 3 !== n.nodeType && 8 !== n.nodeType && !de.test(p + st.event.triggered) && (p.indexOf(".") > -1 && (d = p.split("."), p = d.shift(), d.sort()), u = p.indexOf(":") < 0 && "on" + p, e = e[st.expando] ? e : new st.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : st.makeArray(i, [e]), c = st.event.special[p] || {}, r || !c.trigger || c.trigger.apply(n, i) !== !1)) {
                if (!r && !c.noBubble && !st.isWindow(n)) {
                    for (l = c.delegateType || p, de.test(l + p) || (o = o.parentNode); o; o = o.parentNode) f.push(o), a = o;
                    a === (n.ownerDocument || G) && f.push(a.defaultView || a.parentWindow || t)
                }
                for (s = 0;
                    (o = f[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? l : c.bindType || p, h = (Pt.get(o, "events") || {})[e.type] && Pt.get(o, "handle"), h && h.apply(o, i), h = u && o[u], h && h.apply && St(o) && (e.result = h.apply(o, i), e.result === !1 && e.preventDefault());
                return e.type = p, r || e.isDefaultPrevented() || c._default && c._default.apply(f.pop(), i) !== !1 || !St(n) || u && st.isFunction(n[p]) && !st.isWindow(n) && (a = n[u], a && (n[u] = null), st.event.triggered = p, n[p](), st.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(t, e, i) {
            var n = st.extend(new st.Event, i, {
                type: t,
                isSimulated: !0
            });
            st.event.trigger(n, null, e), n.isDefaultPrevented() && i.preventDefault()
        }
    }), st.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                st.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            return i ? st.event.trigger(t, e, i, !0) : void 0
        }
    }), st.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        st.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), st.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), nt.focusin = "onfocusin" in t, nt.focusin || st.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = function(t) {
            st.event.simulate(e, t.target, st.event.fix(t))
        };
        st.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    r = Pt.access(n, e);
                r || n.addEventListener(t, i, !0), Pt.access(n, e, (r || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    r = Pt.access(n, e) - 1;
                r ? Pt.access(n, e, r) : (n.removeEventListener(t, i, !0), Pt.remove(n, e))
            }
        }
    });
    var me = t.location,
        ge = st.now(),
        _e = /\?/;
    st.parseJSON = function(t) {
        return JSON.parse(t + "")
    }, st.parseXML = function(e) {
        var i;
        if (!e || "string" != typeof e) return null;
        try {
            i = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (n) {
            i = void 0
        }
        return (!i || i.getElementsByTagName("parsererror").length) && st.error("Invalid XML: " + e), i
    };
    var ve = /#.*$/,
        ye = /([?&])_=[^&]*/,
        we = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        xe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Te = /^(?:GET|HEAD)$/,
        be = /^\/\//,
        Se = {},
        Pe = {},
        Ce = "*/".concat("*"),
        ke = G.createElement("a");
    ke.href = me.href, st.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: me.href,
            type: "GET",
            isLocal: xe.test(me.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ce,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": st.parseJSON,
                "text xml": st.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? W(W(t, st.ajaxSettings), e) : W(st.ajaxSettings, t)
        },
        ajaxPrefilter: H(Se),
        ajaxTransport: H(Pe),
        ajax: function(e, i) {
            function n(e, i, n, a) {
                var u, c, v, y, x, b = i;
                2 !== w && (w = 2, l && t.clearTimeout(l), r = void 0, o = a || "", T.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (y = X(f, T, n)), y = $(f, y, T, u), u ? (f.ifModified && (x = T.getResponseHeader("Last-Modified"), x && (st.lastModified[s] = x), x = T.getResponseHeader("etag"), x && (st.etag[s] = x)), 204 === e || "HEAD" === f.type ? b = "nocontent" : 304 === e ? b = "notmodified" : (b = y.state, c = y.data, v = y.error, u = !v)) : (v = b, (e || !b) && (b = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (i || b) + "", u ? m.resolveWith(p, [c, b, T]) : m.rejectWith(p, [T, b, v]), T.statusCode(_), _ = void 0, h && d.trigger(u ? "ajaxSuccess" : "ajaxError", [T, f, u ? c : v]), g.fireWith(p, [T, b]), h && (d.trigger("ajaxComplete", [T, f]), --st.active || st.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (i = e, e = void 0), i = i || {};
            var r, s, o, a, l, u, h, c, f = st.ajaxSetup({}, i),
                p = f.context || f,
                d = f.context && (p.nodeType || p.jquery) ? st(p) : st.event,
                m = st.Deferred(),
                g = st.Callbacks("once memory"),
                _ = f.statusCode || {},
                v = {},
                y = {},
                w = 0,
                x = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === w) {
                            if (!a)
                                for (a = {}; e = we.exec(o);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? o : null
                    },
                    setRequestHeader: function(t, e) {
                        var i = t.toLowerCase();
                        return w || (t = y[i] = y[i] || t, v[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return w || (f.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > w)
                                for (e in t) _[e] = [_[e], t[e]];
                            else T.always(t[T.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || x;
                        return r && r.abort(e), n(0, e), this
                    }
                };
            if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, f.url = ((e || f.url || me.href) + "").replace(ve, "").replace(be, me.protocol + "//"), f.type = i.method || i.type || f.method || f.type, f.dataTypes = st.trim(f.dataType || "*").toLowerCase().match(xt) || [""], null == f.crossDomain) {
                u = G.createElement("a");
                try {
                    u.href = f.url, u.href = u.href, f.crossDomain = ke.protocol + "//" + ke.host != u.protocol + "//" + u.host
                } catch (b) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = st.param(f.data, f.traditional)), B(Se, f, i, T), 2 === w) return T;
            h = st.event && f.global, h && 0 === st.active++ && st.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Te.test(f.type), s = f.url, f.hasContent || (f.data && (s = f.url += (_e.test(s) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = ye.test(s) ? s.replace(ye, "$1_=" + ge++) : s + (_e.test(s) ? "&" : "?") + "_=" + ge++)), f.ifModified && (st.lastModified[s] && T.setRequestHeader("If-Modified-Since", st.lastModified[s]), st.etag[s] && T.setRequestHeader("If-None-Match", st.etag[s])), (f.data && f.hasContent && f.contentType !== !1 || i.contentType) && T.setRequestHeader("Content-Type", f.contentType), T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ce + "; q=0.01" : "") : f.accepts["*"]);
            for (c in f.headers) T.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (f.beforeSend.call(p, T, f) === !1 || 2 === w)) return T.abort();
            x = "abort";
            for (c in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[c](f[c]);
            if (r = B(Pe, f, i, T)) {
                if (T.readyState = 1, h && d.trigger("ajaxSend", [T, f]), 2 === w) return T;
                f.async && f.timeout > 0 && (l = t.setTimeout(function() {
                    T.abort("timeout")
                }, f.timeout));
                try {
                    w = 1, r.send(v, n)
                } catch (b) {
                    if (!(2 > w)) throw b;
                    n(-1, b)
                }
            } else n(-1, "No Transport");
            return T
        },
        getJSON: function(t, e, i) {
            return st.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return st.get(t, void 0, e, "script")
        }
    }), st.each(["get", "post"], function(t, e) {
        st[e] = function(t, i, n, r) {
            return st.isFunction(i) && (r = r || n, n = i, i = void 0), st.ajax(st.extend({
                url: t,
                type: e,
                dataType: r,
                data: i,
                success: n
            }, st.isPlainObject(t) && t))
        }
    }), st._evalUrl = function(t) {
        return st.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, st.fn.extend({
        wrapAll: function(t) {
            var e;
            return st.isFunction(t) ? this.each(function(e) {
                st(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = st(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function(t) {
            return st.isFunction(t) ? this.each(function(e) {
                st(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = st(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = st.isFunction(t);
            return this.each(function(i) {
                st(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                st.nodeName(this, "body") || st(this).replaceWith(this.childNodes)
            }).end()
        }
    }), st.expr.filters.hidden = function(t) {
        return !st.expr.filters.visible(t)
    }, st.expr.filters.visible = function(t) {
        return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
    };
    var Ae = /%20/g,
        Re = /\[\]$/,
        Oe = /\r?\n/g,
        De = /^(?:submit|button|image|reset|file)$/i,
        Ee = /^(?:input|select|textarea|keygen)/i;
    st.param = function(t, e) {
        var i, n = [],
            r = function(t, e) {
                e = st.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = st.ajaxSettings && st.ajaxSettings.traditional), st.isArray(t) || t.jquery && !st.isPlainObject(t)) st.each(t, function() {
            r(this.name, this.value)
        });
        else
            for (i in t) U(i, t[i], e, r);
        return n.join("&").replace(Ae, "+")
    }, st.fn.extend({
        serialize: function() {
            return st.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = st.prop(this, "elements");
                return t ? st.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !st(this).is(":disabled") && Ee.test(this.nodeName) && !De.test(t) && (this.checked || !Nt.test(t))
            }).map(function(t, e) {
                var i = st(this).val();
                return null == i ? null : st.isArray(i) ? st.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Oe, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(Oe, "\r\n")
                }
            }).get()
        }
    }), st.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    };
    var Ne = {
            0: 200,
            1223: 204
        },
        Le = st.ajaxSettings.xhr();
    nt.cors = !!Le && "withCredentials" in Le, nt.ajax = Le = !!Le, st.ajaxTransport(function(e) {
        var i, n;
        return nt.cors || Le && !e.crossDomain ? {
            send: function(r, s) {
                var o, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (o in e.xhrFields) a[o] = e.xhrFields[o];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (o in r) a.setRequestHeader(o, r[o]);
                i = function(t) {
                    return function() {
                        i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Ne[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = i(), n = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                    4 === a.readyState && t.setTimeout(function() {
                        i && n()
                    })
                }, i = i("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (l) {
                    if (i) throw l
                }
            },
            abort: function() {
                i && i()
            }
        } : void 0
    }), st.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return st.globalEval(t), t
            }
        }
    }), st.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), st.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, i;
            return {
                send: function(n, r) {
                    e = st("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", i = function(t) {
                        e.remove(), i = null, t && r("error" === t.type ? 404 : 200, t.type)
                    }), G.head.appendChild(e[0])
                },
                abort: function() {
                    i && i()
                }
            }
        }
    });
    var Me = [],
        Fe = /(=)\?(?=&|$)|\?\?/;
    st.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Me.pop() || st.expando + "_" + ge++;
            return this[t] = !0, t
        }
    }), st.ajaxPrefilter("json jsonp", function(e, i, n) {
        var r, s, o, a = e.jsonp !== !1 && (Fe.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Fe.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = st.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Fe, "$1" + r) : e.jsonp !== !1 && (e.url += (_e.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || st.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", s = t[r], t[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === s ? st(t).removeProp(r) : t[r] = s, e[r] && (e.jsonpCallback = i.jsonpCallback, Me.push(r)), o && st.isFunction(s) && s(o[0]), o = s = void 0
        }), "script") : void 0
    }), nt.createHTMLDocument = function() {
        var t = G.implementation.createHTMLDocument("").body;
        return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
    }(), st.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || (nt.createHTMLDocument ? G.implementation.createHTMLDocument("") : G);
        var n = dt.exec(t),
            r = !i && [];
        return n ? [e.createElement(n[1])] : (n = f([t], e, r), r && r.length && st(r).remove(), st.merge([], n.childNodes))
    };
    var je = st.fn.load;
    st.fn.load = function(t, e, i) {
        if ("string" != typeof t && je) return je.apply(this, arguments);
        var n, r, s, o = this,
            a = t.indexOf(" ");
        return a > -1 && (n = st.trim(t.slice(a)), t = t.slice(0, a)), st.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), o.length > 0 && st.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            s = arguments, o.html(n ? st("<div>").append(st.parseHTML(t)).find(n) : t)
        }).always(i && function(t, e) {
            o.each(function() {
                i.apply(o, s || [t.responseText, e, t])
            })
        }), this
    }, st.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        st.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), st.expr.filters.animated = function(t) {
        return st.grep(st.timers, function(e) {
            return t === e.elem
        }).length
    }, st.offset = {
        setOffset: function(t, e, i) {
            var n, r, s, o, a, l, u, h = st.css(t, "position"),
                c = st(t),
                f = {};
            "static" === h && (t.style.position = "relative"), a = c.offset(), s = st.css(t, "top"), l = st.css(t, "left"), u = ("absolute" === h || "fixed" === h) && (s + l).indexOf("auto") > -1, u ? (n = c.position(), o = n.top, r = n.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), st.isFunction(e) && (e = e.call(t, i, st.extend({}, a))), null != e.top && (f.top = e.top - a.top + o), null != e.left && (f.left = e.left - a.left + r), "using" in e ? e.using.call(t, f) : c.css(f)
        }
    }, st.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                st.offset.setOffset(this, t, e)
            });
            var e, i, n = this[0],
                r = {
                    top: 0,
                    left: 0
                },
                s = n && n.ownerDocument;
            if (s) return e = s.documentElement, st.contains(e, n) ? (r = n.getBoundingClientRect(), i = Y(s), {
                top: r.top + i.pageYOffset - e.clientTop,
                left: r.left + i.pageXOffset - e.clientLeft
            }) : r
        },
        position: function() {
            if (this[0]) {
                var t, e, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === st.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), st.nodeName(t[0], "html") || (n = t.offset()), n.top += st.css(t[0], "borderTopWidth", !0) - t.scrollTop(), n.left += st.css(t[0], "borderLeftWidth", !0) - t.scrollLeft()), {
                    top: e.top - n.top - st.css(i, "marginTop", !0),
                    left: e.left - n.left - st.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === st.css(t, "position");) t = t.offsetParent;
                return t || Jt
            })
        }
    }), st.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var i = "pageYOffset" === e;
        st.fn[t] = function(n) {
            return bt(this, function(t, n, r) {
                var s = Y(t);
                return void 0 === r ? s ? s[e] : t[n] : void(s ? s.scrollTo(i ? s.pageXOffset : r, i ? r : s.pageYOffset) : t[n] = r)
            }, t, n, arguments.length)
        }
    }), st.each(["top", "left"], function(t, e) {
        st.cssHooks[e] = k(nt.pixelPosition, function(t, i) {
            return i ? (i = C(t, e), Gt.test(i) ? st(t).position()[e] + "px" : i) : void 0
        })
    }), st.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        st.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(i, n) {
            st.fn[n] = function(n, r) {
                var s = arguments.length && (i || "boolean" != typeof n),
                    o = i || (n === !0 || r === !0 ? "margin" : "border");
                return bt(this, function(e, i, n) {
                    var r;
                    return st.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === n ? st.css(e, i, o) : st.style(e, i, n, o)
                }, e, s ? n : void 0, s, null)
            }
        })
    }), st.fn.extend({
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        },
        size: function() {
            return this.length
        }
    }), st.fn.andSelf = st.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return st
    });
    var ze = t.jQuery,
        Ie = t.$;
    return st.noConflict = function(e) {
        return t.$ === st && (t.$ = Ie), e && t.jQuery === st && (t.jQuery = ze), st
    }, e || (t.jQuery = t.$ = st), st
}), ! function(t, e, i) {
    function n(t, e) {
        return typeof t === e
    }

    function r() {
        var t, e, i, r, s, o, a;
        for (var l in y)
            if (y.hasOwnProperty(l)) {
                if (t = [], e = y[l], e.name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                    for (i = 0; i < e.options.aliases.length; i++) t.push(e.options.aliases[i].toLowerCase());
                for (r = n(e.fn, "function") ? e.fn() : e.fn, s = 0; s < t.length; s++) o = t[s], a = o.split("."), 1 === a.length ? x[a[0]] = r : (!x[a[0]] || x[a[0]] instanceof Boolean || (x[a[0]] = new Boolean(x[a[0]])), x[a[0]][a[1]] = r), v.push((r ? "" : "no-") + a.join("-"))
            }
    }

    function s(t) {
        var e = T.className,
            i = x._config.classPrefix || "";
        if (b && (e = e.baseVal), x._config.enableJSClass) {
            var n = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
            e = e.replace(n, "$1" + i + "js$2")
        }
        x._config.enableClasses && (e += " " + i + t.join(" " + i), b ? T.className.baseVal = e : T.className = e)
    }

    function o() {
        return "function" != typeof e.createElement ? e.createElement(arguments[0]) : b ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
    }

    function a(t) {
        return t.replace(/([a-z])-([a-z])/g, function(t, e, i) {
            return e + i.toUpperCase()
        }).replace(/^-/, "")
    }

    function l() {
        var t = e.body;
        return t || (t = o(b ? "svg" : "body"), t.fake = !0), t
    }

    function u(t, i, n, r) {
        var s, a, u, h, c = "modernizr",
            f = o("div"),
            p = l();
        if (parseInt(n, 10))
            for (; n--;) u = o("div"), u.id = r ? r[n] : c + (n + 1), f.appendChild(u);
        return s = o("style"), s.type = "text/css", s.id = "s" + c, (p.fake ? p : f).appendChild(s), p.appendChild(f), s.styleSheet ? s.styleSheet.cssText = t : s.appendChild(e.createTextNode(t)), f.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", h = T.style.overflow, T.style.overflow = "hidden", T.appendChild(p)), a = i(f, t), p.fake ? (p.parentNode.removeChild(p), T.style.overflow = h, T.offsetHeight) : f.parentNode.removeChild(f), !!a
    }

    function h(t, e) {
        return !!~("" + t).indexOf(e)
    }

    function c(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }

    function f(t, e, i) {
        var r;
        for (var s in t)
            if (t[s] in e) return i === !1 ? t[s] : (r = e[t[s]], n(r, "function") ? c(r, i || e) : r);
        return !1
    }

    function p(t) {
        return t.replace(/([A-Z])/g, function(t, e) {
            return "-" + e.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function d(e, n) {
        var r = e.length;
        if ("CSS" in t && "supports" in t.CSS) {
            for (; r--;)
                if (t.CSS.supports(p(e[r]), n)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in t) {
            for (var s = []; r--;) s.push("(" + p(e[r]) + ":" + n + ")");
            return s = s.join(" or "), u("@supports (" + s + ") { #modernizr { position: absolute; } }", function(t) {
                return "absolute" == getComputedStyle(t, null).position
            })
        }
        return i
    }

    function m(t, e, r, s) {
        function l() {
            c && (delete R.style, delete R.modElem)
        }
        if (s = n(s, "undefined") ? !1 : s, !n(r, "undefined")) {
            var u = d(t, r);
            if (!n(u, "undefined")) return u
        }
        for (var c, f, p, m, g, _ = ["modernizr", "tspan"]; !R.style;) c = !0, R.modElem = o(_.shift()), R.style = R.modElem.style;
        for (p = t.length, f = 0; p > f; f++)
            if (m = t[f], g = R.style[m], h(m, "-") && (m = a(m)), R.style[m] !== i) {
                if (s || n(r, "undefined")) return l(), "pfx" == e ? m : !0;
                try {
                    R.style[m] = r
                } catch (v) {}
                if (R.style[m] != g) return l(), "pfx" == e ? m : !0
            }
        return l(), !1
    }

    function g(t, e, i, r, s) {
        var o = t.charAt(0).toUpperCase() + t.slice(1),
            a = (t + " " + D.join(o + " ") + o).split(" ");
        return n(e, "string") || n(e, "undefined") ? m(a, e, r, s) : (a = (t + " " + N.join(o + " ") + o).split(" "), f(a, e, i))
    }

    function _(t, e, n) {
        return g(t, i, i, e, n)
    }
    var v = [],
        y = [],
        w = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(t, e) {
                var i = this;
                setTimeout(function() {
                    e(i[t])
                }, 0)
            },
            addTest: function(t, e, i) {
                y.push({
                    name: t,
                    fn: e,
                    options: i
                })
            },
            addAsyncTest: function(t) {
                y.push({
                    name: null,
                    fn: t
                })
            }
        },
        x = function() {};
    x.prototype = w, x = new x, x.addTest("svg", !!e.createElementNS && !!e.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect), x.addTest("json", "JSON" in t && "parse" in JSON && "stringify" in JSON);
    var T = e.documentElement,
        b = "svg" === T.nodeName.toLowerCase();
    x.addTest("audio", function() {
        var t = o("audio"),
            e = !1;
        try {
            (e = !!t.canPlayType) && (e = new Boolean(e), e.ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), e.mp3 = t.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""), e.opus = t.canPlayType('audio/ogg; codecs="opus"') || t.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""), e.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), e.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (i) {}
        return e
    }), x.addTest("canvas", function() {
        var t = o("canvas");
        return !(!t.getContext || !t.getContext("2d"))
    }), x.addTest("canvastext", function() {
        return x.canvas === !1 ? !1 : "function" == typeof o("canvas").getContext("2d").fillText
    }), x.addTest("rgba", function() {
        var t = o("a").style;
        return t.cssText = "background-color:rgba(150,255,150,.5)", ("" + t.backgroundColor).indexOf("rgba") > -1
    }), x.addTest("inlinesvg", function() {
        var t = o("div");
        return t.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && t.firstChild && t.firstChild.namespaceURI)
    });
    var S = {
        elem: o("modernizr")
    };
    x._q.push(function() {
        delete S.elem
    }), x.addTest("csschunit", function() {
        var t, e = S.elem.style;
        try {
            e.fontSize = "3ch", t = -1 !== e.fontSize.indexOf("ch")
        } catch (i) {
            t = !1
        }
        return t
    });
    var P = "CSS" in t && "supports" in t.CSS,
        C = "supportsCSS" in t;
    x.addTest("supports", P || C);
    var k = {}.toString;
    x.addTest("svgclippaths", function() {
        return !!e.createElementNS && /SVGClipPath/.test(k.call(e.createElementNS("http://www.w3.org/2000/svg", "clipPath")))
    });
    var A = w.testStyles = u;
    A("#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#subpixel{float: left; font-size: 33.3333%;}", function(e) {
        var i = e.firstChild;
        i.innerHTML = "This is a text written in Arial", x.addTest("subpixelfont", t.getComputedStyle ? "44px" !== t.getComputedStyle(i, null).getPropertyValue("width") : !1)
    }, 1, ["subpixel"]);
    var R = {
        style: S.elem.style
    };
    x._q.unshift(function() {
        delete R.style
    });
    var O = "Moz O ms Webkit",
        D = w._config.usePrefixes ? O.split(" ") : [];
    w._cssomPrefixes = D;
    var E = function(e) {
        var n, r = prefixes.length,
            s = t.CSSRule;
        if ("undefined" == typeof s) return i;
        if (!e) return !1;
        if (e = e.replace(/^@/, ""), n = e.replace(/-/g, "_").toUpperCase() + "_RULE", n in s) return "@" + e;
        for (var o = 0; r > o; o++) {
            var a = prefixes[o],
                l = a.toUpperCase() + "_" + n;
            if (l in s) return "@-" + a.toLowerCase() + "-" + e
        }
        return !1
    };
    w.atRule = E;
    var N = w._config.usePrefixes ? O.toLowerCase().split(" ") : [];
    w._domPrefixes = N;
    var L = w.testProp = function(t, e, n) {
        return m([t], i, e, n)
    };
    x.addTest("textshadow", L("textShadow", "1px 1px")), w.testAllProps = g;
    var M = w.prefixed = function(t, e, i) {
        return 0 === t.indexOf("@") ? E(t) : (-1 != t.indexOf("-") && (t = a(t)), e ? g(t, e, i) : g(t, "pfx"))
    };
    x.addTest("fullscreen", !(!M("exitFullscreen", e, !1) && !M("cancelFullScreen", e, !1))), w.testAllProps = _, x.addTest("boxshadow", _("boxShadow", "1px 1px", !0)), x.addTest("boxsizing", _("boxSizing", "border-box", !0) && (e.documentMode === i || e.documentMode > 7)), x.addTest("flexbox", _("flexBasis", "1px", !0)), x.addTest("flexboxtweener", _("flexAlign", "end", !0)), x.addTest("textalignlast", _("textAlignLast")), x.addTest("csstransforms3d", function() {
        var t = !!_("perspective", "1px", !0),
            e = x._config.usePrefixes;
        if (t && (!e || "webkitPerspective" in T.style)) {
            var i, n = "#modernizr{width:0;height:0}";
            x.supports ? i = "@supports (perspective: 1px)" : (i = "@media (transform-3d)", e && (i += ",(-webkit-transform-3d)")), i += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", A(n + i, function(e) {
                t = 7 === e.offsetWidth && 18 === e.offsetHeight
            })
        }
        return t
    }), x.addTest("preserve3d", _("transformStyle", "preserve-3d")), r(), s(v), delete w.addTest, delete w.addAsyncTest;
    for (var F = 0; F < x._q.length; F++) x._q[F]();
    t.Modernizr = x
}(window, document);
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    r = function(t, e, i) {
                        var n, r, s = t.cycle;
                        for (n in s) r = s[n], t[n] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
                        delete t.cycle
                    },
                    s = function(t, e, n) {
                        i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = s.prototype.render
                    },
                    o = 1e-10,
                    a = i._internals,
                    l = a.isSelector,
                    u = a.isArray,
                    h = s.prototype = i.to({}, .1, {}),
                    c = [];
                s.version = "1.18.2", h.constructor = s, h.kill()._gc = !1, s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf, s.getTweensOf = i.getTweensOf, s.lagSmoothing = i.lagSmoothing, s.ticker = i.ticker, s.render = i.render, h.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, h.updateTo = function(t, e) {
                    var n, r = this.ratio,
                        s = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (n in t) this.vars[n] = t[n];
                    if (this._initted || s)
                        if (e) this._initted = !1, s && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var o = this._totalTime;
                        this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
                    } else if (this._initted = !1, this._init(), this._time > 0 || s)
                        for (var a, l = 1 / (1 - r), u = this._firstPT; u;) a = u.s + u.c, u.c *= l, u.s = a - u.c, u = u._next;
                    return this
                }, h.render = function(t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var n, r, s, l, u, h, c, f, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        d = this._time,
                        m = this._totalTime,
                        g = this._cycle,
                        _ = this._duration,
                        v = this._rawPrevTime;
                    if (t >= p - 1e-7 ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = _, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === _ && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > v || 0 >= t && t >= -1e-7 || v === o && "isPause" !== this.data) && v !== t && (i = !0,
                            v > o && (r = "onReverseComplete")), this._rawPrevTime = f = !e || t || v === t ? t : o)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === _ && v > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === _ && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0), this._rawPrevTime = f = !e || t || v === t ? t : o)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = _ + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = _ - this._time), this._time > _ ? this._time = _ : this._time < 0 && (this._time = 0)), this._easeType ? (u = this._time / _, h = this._easeType, c = this._easePower, (1 === h || 3 === h && u >= .5) && (u = 1 - u), 3 === h && (u *= 2), 1 === c ? u *= u : 2 === c ? u *= u * u : 3 === c ? u *= u * u * u : 4 === c && (u *= u * u * u * u), 1 === h ? this.ratio = 1 - u : 2 === h ? this.ratio = u : this._time / _ < .5 ? this.ratio = u / 2 : this.ratio = 1 - u / 2) : this.ratio = this._ease.getRatio(this._time / _)), d === this._time && !i && g === this._cycle) return void(m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = d, this._totalTime = m, this._rawPrevTime = v, this._cycle = g, a.lazyTweens.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / _) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== d && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === _) && (e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== m || n) && this._callback("onUpdate")), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === _ && this._rawPrevTime === o && f !== o && (this._rawPrevTime = 0))
                }, s.to = function(t, e, i) {
                    return new s(t, e, i)
                }, s.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new s(t, e, i)
                }, s.fromTo = function(t, e, i, n) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new s(t, e, n)
                }, s.staggerTo = s.allTo = function(t, e, o, a, h, f, p) {
                    a = a || 0;
                    var d, m, g, _, v = 0,
                        y = [],
                        w = function() {
                            o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), h.apply(p || o.callbackScope || this, f || c)
                        },
                        x = o.cycle,
                        T = o.startAt && o.startAt.cycle;
                    for (u(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t))), t = t || [], 0 > a && (t = n(t), t.reverse(), a *= -1), d = t.length - 1, g = 0; d >= g; g++) {
                        m = {};
                        for (_ in o) m[_] = o[_];
                        if (x && r(m, t, g), T) {
                            T = m.startAt = {};
                            for (_ in o.startAt) T[_] = o.startAt[_];
                            r(m.startAt, t, g)
                        }
                        m.delay = v + (m.delay || 0), g === d && h && (m.onComplete = w), y[g] = new s(t[g], e, m), v += a
                    }
                    return y
                }, s.staggerFrom = s.allFrom = function(t, e, i, n, r, o, a) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, s.staggerTo(t, e, i, n, r, o, a)
                }, s.staggerFromTo = s.allFromTo = function(t, e, i, n, r, o, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, s.staggerTo(t, e, n, r, o, a, l)
                }, s.delayedCall = function(t, e, i, n, r) {
                    return new s(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: n,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: r,
                        overwrite: 0
                    })
                }, s.set = function(t, e) {
                    return new s(t, 0, e)
                }, s.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var f = function(t, e) {
                        for (var n = [], r = 0, s = t._first; s;) s instanceof i ? n[r++] = s : (e && (n[r++] = s), n = n.concat(f(s, e)), r = n.length), s = s._next;
                        return n
                    },
                    p = s.getAllTweens = function(e) {
                        return f(t._rootTimeline, e).concat(f(t._rootFramesTimeline, e))
                    };
                s.killAll = function(t, i, n, r) {
                    null == i && (i = !0), null == n && (n = !0);
                    var s, o, a, l = p(0 != r),
                        u = l.length,
                        h = i && n && r;
                    for (a = 0; u > a; a++) o = l[a], (h || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
                }, s.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var r, o, h, c, f, p = a.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t)), u(t))
                            for (c = t.length; --c > -1;) s.killChildTweensOf(t[c], e);
                        else {
                            r = [];
                            for (h in p)
                                for (o = p[h].target.parentNode; o;) o === t && (r = r.concat(p[h].tweens)), o = o.parentNode;
                            for (f = r.length, c = 0; f > c; c++) e && r[c].totalTime(r[c].totalDuration()), r[c]._enabled(!1, !1)
                        }
                    }
                };
                var d = function(t, i, n, r) {
                    i = i !== !1, n = n !== !1, r = r !== !1;
                    for (var s, o, a = p(r), l = i && n && r, u = a.length; --u > -1;) o = a[u], (l || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && o.paused(t)
                };
                return s.pauseAll = function(t, e, i) {
                    d(!0, t, e, i)
                }, s.resumeAll = function(t, e, i) {
                    d(!1, t, e, i)
                }, s.globalTimeScale = function(e) {
                    var n = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || o, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                }, h.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, h.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, h.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, h.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, h.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, h.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, h.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, h.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, s
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, n, r = this.vars;
                        for (n in r) i = r[n], l(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                        l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = 1e-10,
                    s = i._internals,
                    o = n._internals = {},
                    a = s.isSelector,
                    l = s.isArray,
                    u = s.lazyTweens,
                    h = s.lazyRender,
                    c = _gsScope._gsDefine.globals,
                    f = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    p = function(t, e, i) {
                        var n, r, s = t.cycle;
                        for (n in s) r = s[n], t[n] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
                        delete t.cycle
                    },
                    d = o.pauseCallback = function() {},
                    m = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    g = n.prototype = new e;
                return n.version = "1.18.2", g.constructor = n, g.kill()._gc = g._forcingPlayhead = g._hasPause = !1, g.to = function(t, e, n, r) {
                    var s = n.repeat && c.TweenMax || i;
                    return e ? this.add(new s(t, e, n), r) : this.set(t, n, r)
                }, g.from = function(t, e, n, r) {
                    return this.add((n.repeat && c.TweenMax || i).from(t, e, n), r)
                }, g.fromTo = function(t, e, n, r, s) {
                    var o = r.repeat && c.TweenMax || i;
                    return e ? this.add(o.fromTo(t, e, n, r), s) : this.set(t, r, s)
                }, g.staggerTo = function(t, e, r, s, o, l, u, h) {
                    var c, d, g = new n({
                            onComplete: l,
                            onCompleteParams: u,
                            callbackScope: h,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        _ = r.cycle;
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = m(t)), s = s || 0, 0 > s && (t = m(t), t.reverse(), s *= -1), d = 0; d < t.length; d++) c = f(r), c.startAt && (c.startAt = f(c.startAt), c.startAt.cycle && p(c.startAt, t, d)), _ && p(c, t, d), g.to(t[d], e, c, d * s);
                    return this.add(g, o)
                }, g.staggerFrom = function(t, e, i, n, r, s, o, a) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, o, a)
                }, g.staggerFromTo = function(t, e, i, n, r, s, o, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, o, a, l)
                }, g.call = function(t, e, n, r) {
                    return this.add(i.delayedCall(0, t, e, n), r)
                }, g.set = function(t, e, n) {
                    return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
                }, n.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, s, o = new n(t),
                        a = o._timeline;
                    for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, r = a._first; r;) s = r._next, e && r instanceof i && r.target === r.vars.onComplete || o.add(r, r._startTime - r._delay), r = s;
                    return a.add(o, 0), o
                }, g.add = function(r, s, o, a) {
                    var u, h, c, f, p, d;
                    if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && l(r)) {
                            for (o = o || "normal", a = a || 0, u = s, h = r.length, c = 0; h > c; c++) l(f = r[c]) && (f = new n({
                                tweens: f
                            })), this.add(f, u), "string" != typeof f && "function" != typeof f && ("sequence" === o ? u = f._startTime + f.totalDuration() / f._timeScale : "start" === o && (f._startTime -= f.delay())), u += a;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, s);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, s), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (p = this, d = p.rawTime() > r._startTime; p._timeline;) d && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                    return this
                }, g.remove = function(e) {
                    if (e instanceof t) {
                        this._remove(e, !1);
                        var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                    }
                    if (e instanceof Array || e && e.push && l(e)) {
                        for (var n = e.length; --n > -1;) this.remove(e[n]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, g._remove = function(t, i) {
                    e.prototype._remove.call(this, t, i);
                    var n = this._last;
                    return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, g.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, g.insert = g.insertMultiple = function(t, e, i, n) {
                    return this.add(t, e || 0, i, n)
                }, g.appendMultiple = function(t, e, i, n) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                }, g.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, g.addPause = function(t, e, n, r) {
                    var s = i.delayedCall(0, d, n, r || this);
                    return s.vars.onComplete = s.vars.onReverseComplete = e, s.data = "isPause", this._hasPause = !0, this.add(s, t)
                }, g.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, g.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, g._parseTimeOrLabel = function(e, i, n, r) {
                    var s;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && l(r)))
                        for (s = r.length; --s > -1;) r[s] instanceof t && r[s].timeline === this && this.remove(r[s]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (s = e.indexOf("="), -1 === s) return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s + 1)), e = s > 1 ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, n) : this.duration()
                    }
                    return Number(e) + i
                }, g.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                }, g.stop = function() {
                    return this.paused(!0)
                }, g.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, g.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, g.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, s, o, a, l, c, f, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        d = this._time,
                        m = this._startTime,
                        g = this._timeScale,
                        _ = this._paused;
                    if (t >= p - 1e-7) this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (s = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = p + 1e-4;
                    else if (1e-7 > t)
                        if (this._totalTime = this._time = 0, (0 !== d || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", s = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = s = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && s)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                            t = 0, this._initted || (l = !0)
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !e) {
                            if (t >= d)
                                for (n = this._first; n && n._startTime <= t && !c;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (c = n), n = n._next;
                            else
                                for (n = this._last; n && n._startTime >= t && !c;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (c = n), n = n._prev;
                            c && (this._time = t = c._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = t
                    }
                    if (this._time !== d && this._first || i || l || c) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), f = this._time, f >= d)
                            for (n = this._first; n && (o = n._next, f === this._time && (!this._paused || _));)(n._active || n._startTime <= f && !n._paused && !n._gc) && (c === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                        else
                            for (n = this._last; n && (o = n._prev, f === this._time && (!this._paused || _));) {
                                if (n._active || n._startTime <= d && !n._paused && !n._gc) {
                                    if (c === n) {
                                        for (c = n._prev; c && c.endTime() > this._time;) c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale : (t - c._startTime) * c._timeScale, e, i), c = c._prev;
                                        c = null, this.pause()
                                    }
                                    n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                }
                                n = o
                            }
                        this._onUpdate && (e || (u.length && h(), this._callback("onUpdate"))), a && (this._gc || (m === this._startTime || g !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (s && (u.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
                    }
                }, g._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, g.getChildren = function(t, e, n, r) {
                    r = r || -9999999999;
                    for (var s = [], o = this._first, a = 0; o;) o._startTime < r || (o instanceof i ? e !== !1 && (s[a++] = o) : (n !== !1 && (s[a++] = o), t !== !1 && (s = s.concat(o.getChildren(!0, e, n)), a = s.length))), o = o._next;
                    return s
                }, g.getTweensOf = function(t, e) {
                    var n, r, s = this._gc,
                        o = [],
                        a = 0;
                    for (s && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1;)(n[r].timeline === this || e && this._contains(n[r])) && (o[a++] = n[r]);
                    return s && this._enabled(!1, !0), o
                }, g.recent = function() {
                    return this._recent
                }, g._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, g.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var n, r = this._first, s = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (n in s) s[n] >= i && (s[n] += t);
                    return this._uncache(!0)
                }, g._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0);
                    return r
                }, g.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0)
                }, g.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, g._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                    return e.prototype._enabled.call(this, t, i)
                }, g.totalTime = function(e, i, n) {
                    this._forcingPlayhead = !0;
                    var r = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, r
                }, g.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, g.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, n = 0, r = this._last, s = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
                            this._duration = this._totalDuration = n, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                }, g.paused = function(e) {
                    if (!e)
                        for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, g.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, g.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, n
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var n = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    r = 1e-10,
                    s = e._internals,
                    o = s.lazyTweens,
                    a = s.lazyRender,
                    l = new i(null, null, 1, 0),
                    u = n.prototype = new t;
                return u.constructor = n, u.kill()._gc = !1, n.version = "1.18.2", u.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, u.addCallback = function(t, i, n, r) {
                    return this.add(e.delayedCall(0, t, n, r), i)
                }, u.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
                    return this
                }, u.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, u.tweenTo = function(t, i) {
                    i = i || {};
                    var n, r, s, o = {
                        ease: l,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (r in i) o[r] = i[r];
                    return o.time = this._parseTimeOrLabel(t), n = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, s = new e(this, n, o), o.onStart = function() {
                        s.target.paused(!0), s.vars.time !== s.target.time() && n === s.duration() && s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale), i.onStart && s._callback("onStart")
                    }, s
                }, u.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var n = this.tweenTo(e, i);
                    return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                }, u.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, s, l, u, h, c, f, p, d = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._duration,
                        g = this._time,
                        _ = this._totalTime,
                        v = this._startTime,
                        y = this._timeScale,
                        w = this._rawPrevTime,
                        x = this._paused,
                        T = this._cycle;
                    if (t >= d - 1e-7) this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (s = !0, u = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || 0 > w || w === r) && w !== t && this._first && (h = !0, w > r && (u = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = m, t = m + 1e-4);
                    else if (1e-7 > t)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== g || 0 === m && w !== r && (w > 0 || 0 > t && w >= 0) && !this._locked) && (u = "onReverseComplete", s = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = s = !0, u = "onReverseComplete") : w >= 0 && this._first && (h = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = m || !e || t || this._rawPrevTime === t ? t : r, 0 === t && s)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                            t = 0, this._initted || (h = !0)
                        }
                    else if (0 === m && 0 > w && (h = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (c = m + this._repeatDelay, this._cycle = this._totalTime / c >> 0, 0 !== this._cycle && this._cycle === this._totalTime / c && this._cycle--, this._time = this._totalTime - this._cycle * c, this._yoyo && 0 !== (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, t = m + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                        if (t = this._time, t >= g)
                            for (n = this._first; n && n._startTime <= t && !f;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (f = n), n = n._next;
                        else
                            for (n = this._last; n && n._startTime >= t && !f;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (f = n), n = n._prev;
                        f && (this._time = t = f._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== T && !this._locked) {
                        var b = this._yoyo && 0 !== (1 & T),
                            S = b === (this._yoyo && 0 !== (1 & this._cycle)),
                            P = this._totalTime,
                            C = this._cycle,
                            k = this._rawPrevTime,
                            A = this._time;
                        if (this._totalTime = T * m, this._cycle < T ? b = !b : this._totalTime += m, this._time = g, this._rawPrevTime = 0 === m ? w - 1e-4 : w, this._cycle = T, this._locked = !0, g = b ? 0 : m, this.render(g, e, 0 === m), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), g !== this._time) return;
                        if (S && (g = b ? m + 1e-4 : -1e-4, this.render(g, !0, !1)), this._locked = !1, this._paused && !x) return;
                        this._time = A, this._totalTime = P, this._cycle = C, this._rawPrevTime = k
                    }
                    if (!(this._time !== g && this._first || i || h || f)) return void(_ !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== _ && t > 0 && (this._active = !0), 0 === _ && this.vars.onStart && 0 !== this._totalTime && (e || this._callback("onStart")), p = this._time, p >= g)
                        for (n = this._first; n && (l = n._next, p === this._time && (!this._paused || x));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (f === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = l;
                    else
                        for (n = this._last; n && (l = n._prev, p === this._time && (!this._paused || x));) {
                            if (n._active || n._startTime <= g && !n._paused && !n._gc) {
                                if (f === n) {
                                    for (f = n._prev; f && f.endTime() > this._time;) f.render(f._reversed ? f.totalDuration() - (t - f._startTime) * f._timeScale : (t - f._startTime) * f._timeScale, e, i), f = f._prev;
                                    f = null, this.pause()
                                }
                                n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                            }
                            n = l
                        }
                    this._onUpdate && (e || (o.length && a(), this._callback("onUpdate"))), u && (this._locked || this._gc || (v === this._startTime || y !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (s && (o.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[u] && this._callback(u)))
                }, u.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var n, r, s = [],
                        o = this.getChildren(t, e, i),
                        a = 0,
                        l = o.length;
                    for (n = 0; l > n; n++) r = o[n], r.isActive() && (s[a++] = r);
                    return s
                }, u.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        n = i.length;
                    for (e = 0; n > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, u.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (e[i].time < t) return e[i].name;
                    return null
                }, u.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, u.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, u.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, u.totalDuration = function(e) {
                    return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, u.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, u.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, u.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, u.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, u.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, n
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    n = [],
                    r = {},
                    s = _gsScope._gsDefine.globals,
                    o = function(t, e, i, n) {
                        this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
                    },
                    a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    l = function(t, e, i, n) {
                        var r = {
                                a: t
                            },
                            s = {},
                            o = {},
                            a = {
                                c: n
                            },
                            l = (t + e) / 2,
                            u = (e + i) / 2,
                            h = (i + n) / 2,
                            c = (l + u) / 2,
                            f = (u + h) / 2,
                            p = (f - c) / 8;
                        return r.b = l + (t - l) / 4, s.b = c + p, r.c = s.a = (r.b + s.b) / 2, s.c = o.a = (c + f) / 2, o.b = f - p, a.b = h + (n - h) / 4, o.c = a.a = (o.b + a.b) / 2, [r, s, o, a]
                    },
                    u = function(t, r, s, o, a) {
                        var u, h, c, f, p, d, m, g, _, v, y, w, x, T = t.length - 1,
                            b = 0,
                            S = t[0].a;
                        for (u = 0; T > u; u++) p = t[b], h = p.a, c = p.d, f = t[b + 1].d, a ? (y = e[u], w = i[u], x = (w + y) * r * .25 / (o ? .5 : n[u] || .5), d = c - (c - h) * (o ? .5 * r : 0 !== y ? x / y : 0), m = c + (f - c) * (o ? .5 * r : 0 !== w ? x / w : 0), g = c - (d + ((m - d) * (3 * y / (y + w) + .5) / 4 || 0))) : (d = c - (c - h) * r * .5, m = c + (f - c) * r * .5, g = c - (d + m) / 2), d += g, m += g, p.c = _ = d, 0 !== u ? p.b = S : p.b = S = p.a + .6 * (p.c - p.a), p.da = c - h, p.ca = _ - h, p.ba = S - h, s ? (v = l(h, S, _, c), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, S = m;
                        p = t[b], p.b = S, p.c = S + .4 * (p.d - S), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = S - p.a, s && (v = l(p.a, S, p.c, p.d), t.splice(b, 1, v[0], v[1], v[2], v[3]))
                    },
                    h = function(t, n, r, s) {
                        var a, l, u, h, c, f, p = [];
                        if (s)
                            for (t = [s].concat(t), l = t.length; --l > -1;) "string" == typeof(f = t[l][n]) && "=" === f.charAt(1) && (t[l][n] = s[n] + Number(f.charAt(0) + f.substr(2)));
                        if (a = t.length - 2, 0 > a) return p[0] = new o(t[0][n], 0, 0, t[-1 > a ? 0 : 1][n]), p;
                        for (l = 0; a > l; l++) u = t[l][n], h = t[l + 1][n], p[l] = new o(u, 0, 0, h), r && (c = t[l + 2][n], e[l] = (e[l] || 0) + (h - u) * (h - u), i[l] = (i[l] || 0) + (c - h) * (c - h));
                        return p[l] = new o(t[l][n], 0, 0, t[l + 1][n]), p
                    },
                    c = function(t, s, o, l, c, f) {
                        var p, d, m, g, _, v, y, w, x = {},
                            T = [],
                            b = f || t[0];
                        c = "string" == typeof c ? "," + c + "," : a, null == s && (s = 1);
                        for (d in t[0]) T.push(d);
                        if (t.length > 1) {
                            for (w = t[t.length - 1], y = !0, p = T.length; --p > -1;)
                                if (d = T[p], Math.abs(b[d] - w[d]) > .05) {
                                    y = !1;
                                    break
                                }
                            y && (t = t.concat(), f && t.unshift(f), t.push(t[1]), f = t[t.length - 3])
                        }
                        for (e.length = i.length = n.length = 0, p = T.length; --p > -1;) d = T[p], r[d] = -1 !== c.indexOf("," + d + ","), x[d] = h(t, d, r[d], f);
                        for (p = e.length; --p > -1;) e[p] = Math.sqrt(e[p]), i[p] = Math.sqrt(i[p]);
                        if (!l) {
                            for (p = T.length; --p > -1;)
                                if (r[d])
                                    for (m = x[T[p]], v = m.length - 1, g = 0; v > g; g++) _ = m[g + 1].da / i[g] + m[g].da / e[g], n[g] = (n[g] || 0) + _ * _;
                            for (p = n.length; --p > -1;) n[p] = Math.sqrt(n[p])
                        }
                        for (p = T.length, g = o ? 4 : 1; --p > -1;) d = T[p], m = x[d], u(m, s, o, l, r[d]), y && (m.splice(0, g), m.splice(m.length - g, g));
                        return x
                    },
                    f = function(t, e, i) {
                        e = e || "soft";
                        var n, r, s, a, l, u, h, c, f, p, d, m = {},
                            g = "cubic" === e ? 3 : 2,
                            _ = "soft" === e,
                            v = [];
                        if (_ && i && (t = [i].concat(t)), null == t || t.length < g + 1) throw "invalid Bezier data";
                        for (f in t[0]) v.push(f);
                        for (u = v.length; --u > -1;) {
                            for (f = v[u], m[f] = l = [], p = 0, c = t.length, h = 0; c > h; h++) n = null == i ? t[h][f] : "string" == typeof(d = t[h][f]) && "=" === d.charAt(1) ? i[f] + Number(d.charAt(0) + d.substr(2)) : Number(d), _ && h > 1 && c - 1 > h && (l[p++] = (n + l[p - 2]) / 2), l[p++] = n;
                            for (c = p - g + 1, p = 0, h = 0; c > h; h += g) n = l[h], r = l[h + 1], s = l[h + 2], a = 2 === g ? 0 : l[h + 3], l[p++] = d = 3 === g ? new o(n, r, s, a) : new o(n, (2 * r + n) / 3, (2 * r + s) / 3, s);
                            l.length = p
                        }
                        return m
                    },
                    p = function(t, e, i) {
                        for (var n, r, s, o, a, l, u, h, c, f, p, d = 1 / i, m = t.length; --m > -1;)
                            for (f = t[m], s = f.a, o = f.d - s, a = f.c - s, l = f.b - s, n = r = 0, h = 1; i >= h; h++) u = d * h, c = 1 - u, n = r - (r = (u * u * o + 3 * c * (u * a + c * l)) * u), p = m * i + h - 1, e[p] = (e[p] || 0) + n * n
                    },
                    d = function(t, e) {
                        e = e >> 0 || 6;
                        var i, n, r, s, o = [],
                            a = [],
                            l = 0,
                            u = 0,
                            h = e - 1,
                            c = [],
                            f = [];
                        for (i in t) p(t[i], o, e);
                        for (r = o.length, n = 0; r > n; n++) l += Math.sqrt(o[n]), s = n % e, f[s] = l, s === h && (u += l, s = n / e >> 0, c[s] = f, a[s] = u, l = 0, f = []);
                        return {
                            length: u,
                            lengths: a,
                            segments: c
                        }
                    },
                    m = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.4",
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var n, r, s, o, a, l = e.values || [],
                                u = {},
                                h = l[0],
                                p = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = p ? p instanceof Array ? p : [
                                ["x", "y", "rotation", p === !0 ? 0 : Number(p) || 0]
                            ] : null;
                            for (n in h) this._props.push(n);
                            for (s = this._props.length; --s > -1;) n = this._props[s], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], u[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || u[n] !== l[0][n] && (a = u);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? c(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : f(l, e.type, u), this._segCount = this._beziers[n].length, this._timeRes) {
                                var m = d(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (p = this._autoRotate)
                                for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), s = p.length; --s > -1;) {
                                    for (o = 0; 3 > o; o++) n = p[s][o], this._func[n] = "function" == typeof t[n] ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)] : !1;
                                    n = p[s][2], this._initialRotations[s] = this._func[n] ? this._func[n].call(this._target) : this._target[n]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(e) {
                            var i, n, r, s, o, a, l, u, h, c, f = this._segCount,
                                p = this._func,
                                d = this._target,
                                m = e !== this._startRatio;
                            if (this._timeRes) {
                                if (h = this._lengths, c = this._curSeg, e *= this._length, r = this._li, e > this._l2 && f - 1 > r) {
                                    for (u = f - 1; u > r && (this._l2 = h[++r]) <= e;);
                                    this._l1 = h[r - 1], this._li = r, this._curSeg = c = this._segments[r], this._s2 = c[this._s1 = this._si = 0]
                                } else if (e < this._l1 && r > 0) {
                                    for (; r > 0 && (this._l1 = h[--r]) >= e;);
                                    0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = h[r], this._li = r, this._curSeg = c = this._segments[r], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                                }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < c.length - 1) {
                                    for (u = c.length - 1; u > r && (this._s2 = c[++r]) <= e;);
                                    this._s1 = c[r - 1], this._si = r
                                } else if (e < this._s1 && r > 0) {
                                    for (; r > 0 && (this._s1 = c[--r]) >= e;);
                                    0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = c[r], this._si = r
                                }
                                a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? f - 1 : f * e >> 0, a = (e - i * (1 / f)) * f;
                            for (n = 1 - a, r = this._props.length; --r > -1;) s = this._props[r], o = this._beziers[s][i], l = (a * a * o.da + 3 * n * (a * o.ca + n * o.ba)) * a + o.a, this._round[s] && (l = Math.round(l)), p[s] ? d[s](l) : d[s] = l;
                            if (this._autoRotate) {
                                var g, _, v, y, w, x, T, b = this._autoRotate;
                                for (r = b.length; --r > -1;) s = b[r][2], x = b[r][3] || 0, T = b[r][4] === !0 ? 1 : t, o = this._beziers[b[r][0]], g = this._beziers[b[r][1]], o && g && (o = o[i],
                                    g = g[i], _ = o.a + (o.b - o.a) * a, y = o.b + (o.c - o.b) * a, _ += (y - _) * a, y += (o.c + (o.d - o.c) * a - y) * a, v = g.a + (g.b - g.a) * a, w = g.b + (g.c - g.b) * a, v += (w - v) * a, w += (g.c + (g.d - g.c) * a - w) * a, l = m ? Math.atan2(w - v, y - _) * T + x : this._initialRotations[r], p[s] ? d[s](l) : d[s] = l)
                            }
                        }
                    }),
                    g = m.prototype;
                m.bezierThrough = c, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) {
                    return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, m._cssRegister = function() {
                    var t = s.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            n = e._setPluginRatio,
                            r = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, s, o, a, l) {
                                e instanceof Array && (e = {
                                    values: e
                                }), l = new m;
                                var u, h, c, f = e.values,
                                    p = f.length - 1,
                                    d = [],
                                    g = {};
                                if (0 > p) return a;
                                for (u = 0; p >= u; u++) c = i(t, f[u], o, a, l, p !== u), d[u] = c.end;
                                for (h in e) g[h] = e[h];
                                return g.values = d, a = new r(t, "bezier", 0, 0, c.pt, 2), a.data = c, a.plugin = l, a.setRatio = n, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (u = g.autoRotate === !0 ? 0 : Number(g.autoRotate), g.autoRotate = null != c.end.left ? [
                                    ["left", "top", "rotation", u, !1]
                                ] : null != c.end.x ? [
                                    ["x", "y", "rotation", u, !1]
                                ] : !1), g.autoRotate && (o._transform || o._enableTransforms(!1), c.autoRotate = o._target._gsTransform), l._onInitTween(c.proxy, g, o._tween), a
                            }
                        })
                    }
                }, g._roundProps = function(t, e) {
                    for (var i = this._overwriteProps, n = i.length; --n > -1;)(t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e)
                }, g._kill = function(t) {
                    var e, i, n = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, n, r, s, o = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
                    },
                    a = _gsScope._gsDefine.globals,
                    l = {},
                    u = o.prototype = new t("css");
                u.constructor = o, o.version = "1.18.2", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, u = "px", o.suffixMap = {
                    top: u,
                    right: u,
                    bottom: u,
                    left: u,
                    width: u,
                    height: u,
                    fontSize: u,
                    padding: u,
                    margin: u,
                    perspective: u,
                    lineHeight: ""
                };
                var h, c, f, p, d, m, g = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    _ = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    w = /(?:\d|\-|\+|=|#|\.)*/g,
                    x = /opacity *= *([^)]*)/i,
                    T = /opacity:([^;]*)/i,
                    b = /alpha\(opacity *=.+?\)/i,
                    S = /^(rgb|hsl)/,
                    P = /([A-Z])/g,
                    C = /-([a-z])/gi,
                    k = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    A = function(t, e) {
                        return e.toUpperCase()
                    },
                    R = /(?:Left|Right|Width)/i,
                    O = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    E = /,(?=[^\)]*(?:\(|$))/gi,
                    N = Math.PI / 180,
                    L = 180 / Math.PI,
                    M = {},
                    F = document,
                    j = function(t) {
                        return F.createElementNS ? F.createElementNS("http://www.w3.org/1999/xhtml", t) : F.createElement(t)
                    },
                    z = j("div"),
                    I = j("img"),
                    q = o._internals = {
                        _specialProps: l
                    },
                    H = navigator.userAgent,
                    B = function() {
                        var t = H.indexOf("Android"),
                            e = j("a");
                        return f = -1 !== H.indexOf("Safari") && -1 === H.indexOf("Chrome") && (-1 === t || Number(H.substr(t + 8, 1)) > 3), d = f && Number(H.substr(H.indexOf("Version/") + 8, 1)) < 6, p = -1 !== H.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(H) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(H)) && (m = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
                    }(),
                    W = function(t) {
                        return x.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    X = function(t) {
                        window.console && console.log(t)
                    },
                    $ = "",
                    U = "",
                    Y = function(t, e) {
                        e = e || z;
                        var i, n, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];);
                        return n >= 0 ? (U = 3 === n ? "ms" : i[n], $ = "-" + U.toLowerCase() + "-", U + t) : null
                    },
                    V = F.defaultView ? F.defaultView.getComputedStyle : function() {},
                    G = o.getStyle = function(t, e, i, n, r) {
                        var s;
                        return B || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || V(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(P, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : W(t)
                    },
                    Q = q.convertToPixels = function(t, i, n, r, s) {
                        if ("px" === r || !r) return n;
                        if ("auto" === r || !n) return 0;
                        var a, l, u, h = R.test(i),
                            c = t,
                            f = z.style,
                            p = 0 > n;
                        if (p && (n = -n), "%" === r && -1 !== i.indexOf("border")) a = n / 100 * (h ? t.clientWidth : t.clientHeight);
                        else {
                            if (f.cssText = "border:0 solid red;position:" + G(t, "position") + ";line-height:0;", "%" !== r && c.appendChild && "v" !== r.charAt(0) && "rem" !== r) f[h ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                            else {
                                if (c = t.parentNode || F.body, l = c._gsCache, u = e.ticker.frame, l && h && l.time === u) return l.width * n / 100;
                                f[h ? "width" : "height"] = n + r
                            }
                            c.appendChild(z), a = parseFloat(z[h ? "offsetWidth" : "offsetHeight"]), c.removeChild(z), h && "%" === r && o.cacheWidths !== !1 && (l = c._gsCache = c._gsCache || {}, l.time = u, l.width = a / n * 100), 0 !== a || s || (a = Q(t, i, n, r, !0))
                        }
                        return p ? -a : a
                    },
                    Z = q.calculateOffset = function(t, e, i) {
                        if ("absolute" !== G(t, "position", i)) return 0;
                        var n = "left" === e ? "Left" : "Top",
                            r = G(t, "margin" + n, i);
                        return t["offset" + n] - (Q(t, e, parseFloat(r), r.replace(w, "")) || 0)
                    },
                    J = function(t, e) {
                        var i, n, r, s = {};
                        if (e = e || V(t, null))
                            if (i = e.length)
                                for (; --i > -1;) r = e[i], (-1 === r.indexOf("-transform") || Pt === r) && (s[r.replace(C, A)] = e.getPropertyValue(r));
                            else
                                for (i in e)(-1 === i.indexOf("Transform") || St === i) && (s[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(C, A)] = e[i]);
                        return B || (s.opacity = W(t)), n = jt(t, e, !1), s.rotation = n.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n.scaleY, s.x = n.x, s.y = n.y, kt && (s.z = n.z, s.rotationX = n.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ), s.filters && delete s.filters, s
                    },
                    K = function(t, e, i, n, r) {
                        var s, o, a, l = {},
                            u = t.style;
                        for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = i[o]) || r && r[o]) && -1 === o.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(y, "") ? s : 0 : Z(t, o), void 0 !== u[o] && (a = new dt(u, o, u[o], a)));
                        if (n)
                            for (o in n) "className" !== o && (l[o] = n[o]);
                        return {
                            difs: l,
                            firstMPT: a
                        }
                    },
                    tt = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    et = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    it = function(t, e, i) {
                        var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = tt[e],
                            s = r.length;
                        for (i = i || V(t, null); --s > -1;) n -= parseFloat(G(t, "padding" + r[s], i, !0)) || 0, n -= parseFloat(G(t, "border" + r[s] + "Width", i, !0)) || 0;
                        return n
                    },
                    nt = function(t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                        (null == t || "" === t) && (t = "0 0");
                        var i = t.split(" "),
                            n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == r ? r = "center" === n ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), t = n + " " + r + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(n.replace(y, "")), e.oy = parseFloat(r.replace(y, "")), e.v = t), e || t
                    },
                    rt = function(t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    st = function(t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                    },
                    ot = function(t, e, i, n) {
                        var r, s, o, a, l, u = 1e-6;
                        return null == t ? a = e : "number" == typeof t ? a = t : (r = 360, s = t.split("_"), l = "=" === t.charAt(1), o = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : L) - (l ? 0 : e), s.length && (n && (n[i] = e + o), -1 !== t.indexOf("short") && (o %= r, o !== o % (r / 2) && (o = 0 > o ? o + r : o - r)), -1 !== t.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * r) % r - (o / r | 0) * r : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * r) % r - (o / r | 0) * r)), a = e + o), u > a && a > -u && (a = 0), a
                    },
                    at = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    lt = function(t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 255 * (1 > 6 * t ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                    },
                    ut = o.parseColor = function(t, e) {
                        var i, n, r, s, o, a, l, u, h, c, f;
                        if (t)
                            if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                            else {
                                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), at[t]) i = at[t];
                                else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), r = t.charAt(2), s = t.charAt(3), t = "#" + n + n + r + r + s + s), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (i = f = t.match(g), e) {
                                        if (-1 !== t.indexOf("=")) return t.match(_)
                                    } else o = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, l = Number(i[2]) / 100, r = .5 >= l ? l * (a + 1) : l + a - l * a, n = 2 * l - r, i.length > 3 && (i[3] = Number(t[3])), i[0] = lt(o + 1 / 3, n, r), i[1] = lt(o, n, r), i[2] = lt(o - 1 / 3, n, r);
                                else i = t.match(g) || at.transparent;
                                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                            }
                        else i = at.black;
                        return e && !f && (n = i[0] / 255, r = i[1] / 255, s = i[2] / 255, u = Math.max(n, r, s), h = Math.min(n, r, s), l = (u + h) / 2, u === h ? o = a = 0 : (c = u - h, a = l > .5 ? c / (2 - u - h) : c / (u + h), o = u === n ? (r - s) / c + (s > r ? 6 : 0) : u === r ? (s - n) / c + 2 : (n - r) / c + 4, o *= 60), i[0] = o + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
                    },
                    ht = function(t, e) {
                        var i, n, r, s = t.match(ct) || [],
                            o = 0,
                            a = s.length ? "" : t;
                        for (i = 0; i < s.length; i++) n = s[i], r = t.substr(o, t.indexOf(n, o) - o), o += r.length + n.length, n = ut(n, e), 3 === n.length && n.push(1), a += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                        return a
                    },
                    ct = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (u in at) ct += "|" + u + "\\b";
                ct = new RegExp(ct + ")", "gi"), o.colorStringFilter = function(t) {
                    var e, i = t[0] + t[1];
                    ct.lastIndex = 0, ct.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = ht(t[0], e), t[1] = ht(t[1], e))
                }, e.defaultStringFilter || (e.defaultStringFilter = o.colorStringFilter);
                var ft = function(t, e, i, n) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var r, s = e ? (t.match(ct) || [""])[0] : "",
                            o = t.split(s).join("").match(v) || [],
                            a = t.substr(0, t.indexOf(o[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            u = -1 !== t.indexOf(" ") ? " " : ",",
                            h = o.length,
                            c = h > 0 ? o[0].replace(g, "") : "";
                        return h ? r = e ? function(t) {
                            var e, f, p, d;
                            if ("number" == typeof t) t += c;
                            else if (n && E.test(t)) {
                                for (d = t.replace(E, "|").split("|"), p = 0; p < d.length; p++) d[p] = r(d[p]);
                                return d.join(",")
                            }
                            if (e = (t.match(ct) || [s])[0], f = t.split(e).join("").match(v) || [], p = f.length, h > p--)
                                for (; ++p < h;) f[p] = i ? f[(p - 1) / 2 | 0] : o[p];
                            return a + f.join(u) + u + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, s, f;
                            if ("number" == typeof t) t += c;
                            else if (n && E.test(t)) {
                                for (s = t.replace(E, "|").split("|"), f = 0; f < s.length; f++) s[f] = r(s[f]);
                                return s.join(",")
                            }
                            if (e = t.match(v) || [], f = e.length, h > f--)
                                for (; ++f < h;) e[f] = i ? e[(f - 1) / 2 | 0] : o[f];
                            return a + e.join(u) + l
                        } : function(t) {
                            return t
                        }
                    },
                    pt = function(t) {
                        return t = t.split(","),
                            function(e, i, n, r, s, o, a) {
                                var l, u = (i + "").split(" ");
                                for (a = {}, l = 0; 4 > l; l++) a[t[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
                                return r.parse(e, a, s, o)
                            }
                    },
                    dt = (q._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, n, r, s, o = this.data, a = o.proxy, l = o.firstMPT, u = 1e-6; l;) e = a[l.v], l.r ? e = Math.round(e) : u > e && e > -u && (e = 0), l.t[l.p] = e, l = l._next;
                        if (o.autoRotate && (o.autoRotate.rotation = a.rotation), 1 === t || 0 === t)
                            for (l = o.firstMPT, s = 1 === t ? "e" : "b"; l;) {
                                if (i = l.t, i.type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                        i[s] = r
                                    }
                                } else i[s] = i.s + i.xs0;
                                l = l._next
                            }
                    }, function(t, e, i, n, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
                    }),
                    mt = (q._parseToProxy = function(t, e, i, n, r, s) {
                        var o, a, l, u, h, c = n,
                            f = {},
                            p = {},
                            d = i._transform,
                            m = M;
                        for (i._transform = null, M = e, n = h = i.parse(t, e, n, r), M = m, s && (i._transform = d, c && (c._prev = null, c._prev && (c._prev._next = null))); n && n !== c;) {
                            if (n.type <= 1 && (a = n.p, p[a] = n.s + n.c, f[a] = n.s, s || (u = new dt(n, "s", a, u, n.r), n.c = 0), 1 === n.type))
                                for (o = n.l; --o > 0;) l = "xn" + o, a = n.p + "_" + l, p[a] = n.data[l], f[a] = n[l], s || (u = new dt(n, l, a, u, n.rxp[l]));
                            n = n._next
                        }
                        return {
                            proxy: f,
                            end: p,
                            firstMPT: u,
                            pt: h
                        }
                    }, q.CSSPropTween = function(t, e, n, r, o, a, l, u, h, c, f) {
                        this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof mt || s.push(this.n), this.r = u, this.type = a || 0, h && (this.pr = h, i = !0), this.b = void 0 === c ? n : c, this.e = void 0 === f ? n + r : f, o && (this._next = o, o._prev = this)
                    }),
                    gt = function(t, e, i, n, r, s) {
                        var o = new mt(t, e, i, n - i, r, -1, s);
                        return o.b = i, o.e = o.xs0 = n, o
                    },
                    _t = o.parseComplex = function(t, e, i, n, r, s, o, a, l, u) {
                        i = i || s || "", o = new mt(t, e, 0, 0, o, u ? 2 : 1, null, !1, a, i, n), n += "";
                        var c, f, p, d, m, v, y, w, x, T, b, S, P, C = i.split(", ").join(",").split(" "),
                            k = n.split(", ").join(",").split(" "),
                            A = C.length,
                            R = h !== !1;
                        for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (C = C.join(" ").replace(E, ", ").split(" "), k = k.join(" ").replace(E, ", ").split(" "), A = C.length), A !== k.length && (C = (s || "").split(" "), A = C.length), o.plugin = l, o.setRatio = u, ct.lastIndex = 0, c = 0; A > c; c++)
                            if (d = C[c], m = k[c], w = parseFloat(d), w || 0 === w) o.appendXtra("", w, rt(m, w), m.replace(_, ""), R && -1 !== m.indexOf("px"), !0);
                            else if (r && ct.test(d)) S = "," === m.charAt(m.length - 1) ? ")," : ")", P = -1 !== m.indexOf("hsl") && B, d = ut(d, P), m = ut(m, P), x = d.length + m.length > 6, x && !B && 0 === m[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(k[c]).join("transparent")) : (B || (x = !1), P ? o.appendXtra(x ? "hsla(" : "hsl(", d[0], rt(m[0], d[0]), ",", !1, !0).appendXtra("", d[1], rt(m[1], d[1]), "%,", !1).appendXtra("", d[2], rt(m[2], d[2]), x ? "%," : "%" + S, !1) : o.appendXtra(x ? "rgba(" : "rgb(", d[0], m[0] - d[0], ",", !0, !0).appendXtra("", d[1], m[1] - d[1], ",", !0).appendXtra("", d[2], m[2] - d[2], x ? "," : S, !0), x && (d = d.length < 4 ? 1 : d[3], o.appendXtra("", d, (m.length < 4 ? 1 : m[3]) - d, S, !1))), ct.lastIndex = 0;
                        else if (v = d.match(g)) {
                            if (y = m.match(_), !y || y.length !== v.length) return o;
                            for (p = 0, f = 0; f < v.length; f++) b = v[f], T = d.indexOf(b, p), o.appendXtra(d.substr(p, T - p), Number(b), rt(y[f], b), "", R && "px" === d.substr(T + b.length, 2), 0 === f), p = T + b.length;
                            o["xs" + o.l] += d.substr(p)
                        } else o["xs" + o.l] += o.l ? " " + m : m;
                        if (-1 !== n.indexOf("=") && o.data) {
                            for (S = o.xs0 + o.data.s, c = 1; c < o.l; c++) S += o["xs" + c] + o.data["xn" + c];
                            o.e = S + o["xs" + c]
                        }
                        return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                    },
                    vt = 9;
                for (u = mt.prototype, u.l = u.pr = 0; --vt > 0;) u["xn" + vt] = 0, u["xs" + vt] = "";
                u.xs0 = "", u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null, u.appendXtra = function(t, e, i, n, r, s) {
                    var o = this,
                        a = o.l;
                    return o["xs" + a] += s && a ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", a > 0 ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = r, o["xn" + a] = e, o.plugin || (o.xfirst = new mt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, r, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                        s: e + i
                    }, o.rxp = {}, o.s = e, o.c = i, o.r = r, o)) : (o["xs" + a] += e + (n || ""), o)
                };
                var yt = function(t, e) {
                        e = e || {}, this.p = e.prefix ? Y(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || ft(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    wt = q._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var n, r, s = t.split(","),
                            o = e.defaultValue;
                        for (i = i || [o], n = 0; n < s.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || o, r = new yt(s[n], e)
                    },
                    xt = function(t) {
                        if (!l[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            wt(t, {
                                parser: function(t, i, n, r, s, o, u) {
                                    var h = a.com.greensock.plugins[e];
                                    return h ? (h._cssRegister(), l[n].parse(t, i, n, r, s, o, u)) : (X("Error: " + e + " js file not loaded."), s)
                                }
                            })
                        }
                    };
                u = yt.prototype, u.parseComplex = function(t, e, i, n, r, s) {
                    var o, a, l, u, h, c, f = this.keyword;
                    if (this.multi && (E.test(i) || E.test(e) ? (a = e.replace(E, "|").split("|"), l = i.replace(E, "|").split("|")) : f && (a = [e], l = [i])), l) {
                        for (u = l.length > a.length ? l.length : a.length, o = 0; u > o; o++) e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, f && (h = e.indexOf(f), c = i.indexOf(f), h !== c && (-1 === c ? a[o] = a[o].split(f).join("") : -1 === h && (a[o] += " " + f)));
                        e = a.join(", "), i = l.join(", ")
                    }
                    return _t(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
                }, u.parse = function(t, e, i, n, s, o, a) {
                    return this.parseComplex(t.style, this.format(G(t, this.p, r, !1, this.dflt)), this.format(e), s, o)
                }, o.registerSpecialProp = function(t, e, i) {
                    wt(t, {
                        parser: function(t, n, r, s, o, a, l) {
                            var u = new mt(t, r, 0, 0, o, 2, r, !1, i);
                            return u.plugin = a, u.setRatio = e(t, n, s._tween, r), u
                        },
                        priority: i
                    })
                }, o.useSVGTransformAttr = f || p;
                var Tt, bt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    St = Y("transform"),
                    Pt = $ + "transform",
                    Ct = Y("transformOrigin"),
                    kt = null !== Y("perspective"),
                    At = q.Transform = function() {
                        this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = o.defaultForce3D !== !1 && kt ? o.defaultForce3D || "auto" : !1
                    },
                    Rt = window.SVGElement,
                    Ot = function(t, e, i) {
                        var n, r = F.createElementNS("http://www.w3.org/2000/svg", t),
                            s = /([a-z])([A-Z])/g;
                        for (n in i) r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
                        return e.appendChild(r), r
                    },
                    Dt = F.documentElement,
                    Et = function() {
                        var t, e, i, n = m || /Android/i.test(H) && !window.chrome;
                        return F.createElementNS && !n && (t = Ot("svg", Dt), e = Ot("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = e.getBoundingClientRect().width, e.style[Ct] = "50% 50%", e.style[St] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(p && kt), Dt.removeChild(t)), n
                    }(),
                    Nt = function(t, e, i, n, r) {
                        var s, a, l, u, h, c, f, p, d, m, g, _, v, y, w = t._gsTransform,
                            x = Ft(t, !0);
                        w && (v = w.xOrigin, y = w.yOrigin), (!n || (s = n.split(" ")).length < 2) && (f = t.getBBox(), e = nt(e).split(" "), s = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * f.width : parseFloat(e[0])) + f.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * f.height : parseFloat(e[1])) + f.y]), i.xOrigin = u = parseFloat(s[0]), i.yOrigin = h = parseFloat(s[1]), n && x !== Mt && (c = x[0], f = x[1], p = x[2], d = x[3], m = x[4], g = x[5], _ = c * d - f * p, a = u * (d / _) + h * (-p / _) + (p * g - d * m) / _, l = u * (-f / _) + h * (c / _) - (c * g - f * m) / _, u = i.xOrigin = s[0] = a, h = i.yOrigin = s[1] = l), w && (r || r !== !1 && o.defaultSmoothOrigin !== !1 ? (a = u - v, l = h - y, w.xOffset += a * x[0] + l * x[2] - a, w.yOffset += a * x[1] + l * x[3] - l) : w.xOffset = w.yOffset = 0), t.setAttribute("data-svg-origin", s.join(" "))
                    },
                    Lt = function(t) {
                        return !!(Rt && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                    },
                    Mt = [1, 0, 0, 1, 0, 0],
                    Ft = function(t, e) {
                        var i, n, r, s, o, a = t._gsTransform || new At,
                            l = 1e5;
                        if (St ? n = G(t, Pt, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(O), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), a.x || 0, a.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, (a.svg || t.getBBox && Lt(t)) && (i && -1 !== (t.style[St] + "").indexOf("matrix") && (n = t.style[St], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (n = r, i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Mt;
                        for (r = (n || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], vt = r.length; --vt > -1;) s = Number(r[vt]), r[vt] = (o = s - (s |= 0)) ? (o * l + (0 > o ? -.5 : .5) | 0) / l + s : s;
                        return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                    },
                    jt = q.getTransform = function(t, i, n, s) {
                        if (t._gsTransform && n && !s) return t._gsTransform;
                        var a, l, u, h, c, f, p = n ? t._gsTransform || new At : new At,
                            d = p.scaleX < 0,
                            m = 2e-5,
                            g = 1e5,
                            _ = kt ? parseFloat(G(t, Ct, i, !1, "0 0 0").split(" ")[2]) || p.zOrigin || 0 : 0,
                            v = parseFloat(o.defaultTransformPerspective) || 0;
                        if (p.svg = !(!t.getBBox || !Lt(t)), p.svg && (Nt(t, G(t, Ct, r, !1, "50% 50%") + "", p, t.getAttribute("data-svg-origin")), Tt = o.useSVGTransformAttr || Et), a = Ft(t), a !== Mt) {
                            if (16 === a.length) {
                                var y, w, x, T, b, S = a[0],
                                    P = a[1],
                                    C = a[2],
                                    k = a[3],
                                    A = a[4],
                                    R = a[5],
                                    O = a[6],
                                    D = a[7],
                                    E = a[8],
                                    N = a[9],
                                    M = a[10],
                                    F = a[12],
                                    j = a[13],
                                    z = a[14],
                                    I = a[11],
                                    q = Math.atan2(O, M);
                                p.zOrigin && (z = -p.zOrigin, F = E * z - a[12], j = N * z - a[13], z = M * z + p.zOrigin - a[14]), p.rotationX = q * L, q && (T = Math.cos(-q), b = Math.sin(-q), y = A * T + E * b, w = R * T + N * b, x = O * T + M * b, E = A * -b + E * T, N = R * -b + N * T, M = O * -b + M * T, I = D * -b + I * T, A = y, R = w, O = x), q = Math.atan2(-C, M), p.rotationY = q * L, q && (T = Math.cos(-q), b = Math.sin(-q), y = S * T - E * b, w = P * T - N * b, x = C * T - M * b, N = P * b + N * T, M = C * b + M * T, I = k * b + I * T, S = y, P = w, C = x), q = Math.atan2(P, S), p.rotation = q * L, q && (T = Math.cos(-q), b = Math.sin(-q), S = S * T + A * b, w = P * T + R * b, R = P * -b + R * T, O = C * -b + O * T, P = w), p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0, p.rotationY = 180 - p.rotationY), p.scaleX = (Math.sqrt(S * S + P * P) * g + .5 | 0) / g, p.scaleY = (Math.sqrt(R * R + N * N) * g + .5 | 0) / g, p.scaleZ = (Math.sqrt(O * O + M * M) * g + .5 | 0) / g, p.skewX = 0, p.perspective = I ? 1 / (0 > I ? -I : I) : 0, p.x = F, p.y = j, p.z = z, p.svg && (p.x -= p.xOrigin - (p.xOrigin * S - p.yOrigin * A), p.y -= p.yOrigin - (p.yOrigin * P - p.xOrigin * R))
                            } else if ((!kt || s || !a.length || p.x !== a[4] || p.y !== a[5] || !p.rotationX && !p.rotationY) && (void 0 === p.x || "none" !== G(t, "display", i))) {
                                var H = a.length >= 6,
                                    B = H ? a[0] : 1,
                                    W = a[1] || 0,
                                    X = a[2] || 0,
                                    $ = H ? a[3] : 1;
                                p.x = a[4] || 0, p.y = a[5] || 0, u = Math.sqrt(B * B + W * W), h = Math.sqrt($ * $ + X * X), c = B || W ? Math.atan2(W, B) * L : p.rotation || 0, f = X || $ ? Math.atan2(X, $) * L + c : p.skewX || 0, Math.abs(f) > 90 && Math.abs(f) < 270 && (d ? (u *= -1, f += 0 >= c ? 180 : -180, c += 0 >= c ? 180 : -180) : (h *= -1, f += 0 >= f ? 180 : -180)), p.scaleX = u, p.scaleY = h, p.rotation = c, p.skewX = f, kt && (p.rotationX = p.rotationY = p.z = 0, p.perspective = v, p.scaleZ = 1), p.svg && (p.x -= p.xOrigin - (p.xOrigin * B + p.yOrigin * X), p.y -= p.yOrigin - (p.xOrigin * W + p.yOrigin * $))
                            }
                            p.zOrigin = _;
                            for (l in p) p[l] < m && p[l] > -m && (p[l] = 0)
                        }
                        return n && (t._gsTransform = p, p.svg && (Tt && t.style[St] ? e.delayedCall(.001, function() {
                            Ht(t.style, St)
                        }) : !Tt && t.getAttribute("transform") && e.delayedCall(.001, function() {
                            t.removeAttribute("transform")
                        }))), p
                    },
                    zt = function(t) {
                        var e, i, n = this.data,
                            r = -n.rotation * N,
                            s = r + n.skewX * N,
                            o = 1e5,
                            a = (Math.cos(r) * n.scaleX * o | 0) / o,
                            l = (Math.sin(r) * n.scaleX * o | 0) / o,
                            u = (Math.sin(s) * -n.scaleY * o | 0) / o,
                            h = (Math.cos(s) * n.scaleY * o | 0) / o,
                            c = this.t.style,
                            f = this.t.currentStyle;
                        if (f) {
                            i = l, l = -u, u = -i, e = f.filter, c.filter = "";
                            var p, d, g = this.t.offsetWidth,
                                _ = this.t.offsetHeight,
                                v = "absolute" !== f.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + u + ", M22=" + h,
                                T = n.x + g * n.xPercent / 100,
                                b = n.y + _ * n.yPercent / 100;
                            if (null != n.ox && (p = (n.oxp ? g * n.ox * .01 : n.ox) - g / 2, d = (n.oyp ? _ * n.oy * .01 : n.oy) - _ / 2, T += p - (p * a + d * l), b += d - (p * u + d * h)), v ? (p = g / 2, d = _ / 2, y += ", Dx=" + (p - (p * a + d * l) + T) + ", Dy=" + (d - (p * u + d * h) + b) + ")") : y += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? c.filter = e.replace(D, y) : c.filter = y + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === u && 1 === h && (v && -1 === y.indexOf("Dx=0, Dy=0") || x.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")), !v) {
                                var S, P, C, k = 8 > m ? 1 : -1;
                                for (p = n.ieOffsetX || 0, d = n.ieOffsetY || 0, n.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * _)) / 2 + T), n.ieOffsetY = Math.round((_ - ((0 > h ? -h : h) * _ + (0 > u ? -u : u) * g)) / 2 + b), vt = 0; 4 > vt; vt++) P = et[vt], S = f[P], i = -1 !== S.indexOf("px") ? parseFloat(S) : Q(this.t, P, parseFloat(S), S.replace(w, "")) || 0, C = i !== n[P] ? 2 > vt ? -n.ieOffsetX : -n.ieOffsetY : 2 > vt ? p - n.ieOffsetX : d - n.ieOffsetY, c[P] = (n[P] = Math.round(i - C * (0 === vt || 2 === vt ? 1 : k))) + "px"
                            }
                        }
                    },
                    It = q.set3DTransformRatio = q.setTransformRatio = function(t) {
                        var e, i, n, r, s, o, a, l, u, h, c, f, d, m, g, _, v, y, w, x, T, b, S, P = this.data,
                            C = this.t.style,
                            k = P.rotation,
                            A = P.rotationX,
                            R = P.rotationY,
                            O = P.scaleX,
                            D = P.scaleY,
                            E = P.scaleZ,
                            L = P.x,
                            M = P.y,
                            F = P.z,
                            j = P.svg,
                            z = P.perspective,
                            I = P.force3D;
                        if (((1 === t || 0 === t) && "auto" === I && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !I) && !F && !z && !R && !A && 1 === E || Tt && j || !kt) return void(k || P.skewX || j ? (k *= N, b = P.skewX * N, S = 1e5, e = Math.cos(k) * O, r = Math.sin(k) * O, i = Math.sin(k - b) * -D, s = Math.cos(k - b) * D, b && "simple" === P.skewType && (v = Math.tan(b), v = Math.sqrt(1 + v * v), i *= v, s *= v, P.skewY && (e *= v, r *= v)), j && (L += P.xOrigin - (P.xOrigin * e + P.yOrigin * i) + P.xOffset, M += P.yOrigin - (P.xOrigin * r + P.yOrigin * s) + P.yOffset, Tt && (P.xPercent || P.yPercent) && (m = this.t.getBBox(), L += .01 * P.xPercent * m.width, M += .01 * P.yPercent * m.height), m = 1e-6, m > L && L > -m && (L = 0), m > M && M > -m && (M = 0)), w = (e * S | 0) / S + "," + (r * S | 0) / S + "," + (i * S | 0) / S + "," + (s * S | 0) / S + "," + L + "," + M + ")", j && Tt ? this.t.setAttribute("transform", "matrix(" + w) : C[St] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix(" : "matrix(") + w) : C[St] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix(" : "matrix(") + O + ",0,0," + D + "," + L + "," + M + ")");
                        if (p && (m = 1e-4, m > O && O > -m && (O = E = 2e-5), m > D && D > -m && (D = E = 2e-5), !z || P.z || P.rotationX || P.rotationY || (z = 0)), k || P.skewX) k *= N, g = e = Math.cos(k), _ = r = Math.sin(k), P.skewX && (k -= P.skewX * N, g = Math.cos(k), _ = Math.sin(k), "simple" === P.skewType && (v = Math.tan(P.skewX * N), v = Math.sqrt(1 + v * v), g *= v, _ *= v, P.skewY && (e *= v, r *= v))), i = -_, s = g;
                        else {
                            if (!(R || A || 1 !== E || z || j)) return void(C[St] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) translate3d(" : "translate3d(") + L + "px," + M + "px," + F + "px)" + (1 !== O || 1 !== D ? " scale(" + O + "," + D + ")" : ""));
                            e = s = 1, i = r = 0
                        }
                        u = 1, n = o = a = l = h = c = 0, f = z ? -1 / z : 0, d = P.zOrigin, m = 1e-6, x = ",", T = "0", k = R * N, k && (g = Math.cos(k), _ = Math.sin(k), a = -_, h = f * -_, n = e * _, o = r * _, u = g, f *= g, e *= g, r *= g), k = A * N, k && (g = Math.cos(k), _ = Math.sin(k), v = i * g + n * _, y = s * g + o * _, l = u * _, c = f * _, n = i * -_ + n * g, o = s * -_ + o * g, u *= g, f *= g, i = v, s = y), 1 !== E && (n *= E, o *= E, u *= E, f *= E), 1 !== D && (i *= D, s *= D, l *= D, c *= D), 1 !== O && (e *= O, r *= O, a *= O, h *= O), (d || j) && (d && (L += n * -d, M += o * -d, F += u * -d + d), j && (L += P.xOrigin - (P.xOrigin * e + P.yOrigin * i) + P.xOffset, M += P.yOrigin - (P.xOrigin * r + P.yOrigin * s) + P.yOffset), m > L && L > -m && (L = T), m > M && M > -m && (M = T), m > F && F > -m && (F = 0)), w = P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix3d(" : "matrix3d(", w += (m > e && e > -m ? T : e) + x + (m > r && r > -m ? T : r) + x + (m > a && a > -m ? T : a), w += x + (m > h && h > -m ? T : h) + x + (m > i && i > -m ? T : i) + x + (m > s && s > -m ? T : s), A || R || 1 !== E ? (w += x + (m > l && l > -m ? T : l) + x + (m > c && c > -m ? T : c) + x + (m > n && n > -m ? T : n), w += x + (m > o && o > -m ? T : o) + x + (m > u && u > -m ? T : u) + x + (m > f && f > -m ? T : f) + x) : w += ",0,0,0,0,1,0,", w += L + x + M + x + F + x + (z ? 1 + -F / z : 1) + ")", C[St] = w
                    };
                u = At.prototype, u.x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = u.xOffset = u.yOffset = 0, u.scaleX = u.scaleY = u.scaleZ = 1, wt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(t, e, i, n, s, a, l) {
                        if (n._lastParsedTransform === l) return s;
                        n._lastParsedTransform = l;
                        var u, h, c, f, p, d, m, g, _, v, y = t._gsTransform,
                            w = t.style,
                            x = 1e-6,
                            T = bt.length,
                            b = l,
                            S = {},
                            P = "transformOrigin";
                        if (l.display ? (f = G(t, "display"), w.display = "block", u = jt(t, r, !0, l.parseTransform), w.display = f) : u = jt(t, r, !0, l.parseTransform), n._transform = u, "string" == typeof b.transform && St) f = z.style, f[St] = b.transform, f.display = "block", f.position = "absolute", F.body.appendChild(z), h = jt(z, null, !1), F.body.removeChild(z), h.perspective || (h.perspective = u.perspective), null != b.xPercent && (h.xPercent = st(b.xPercent, u.xPercent)), null != b.yPercent && (h.yPercent = st(b.yPercent, u.yPercent));
                        else if ("object" == typeof b) {
                            if (h = {
                                    scaleX: st(null != b.scaleX ? b.scaleX : b.scale, u.scaleX),
                                    scaleY: st(null != b.scaleY ? b.scaleY : b.scale, u.scaleY),
                                    scaleZ: st(b.scaleZ, u.scaleZ),
                                    x: st(b.x, u.x),
                                    y: st(b.y, u.y),
                                    z: st(b.z, u.z),
                                    xPercent: st(b.xPercent, u.xPercent),
                                    yPercent: st(b.yPercent, u.yPercent),
                                    perspective: st(b.transformPerspective, u.perspective)
                                }, g = b.directionalRotation, null != g)
                                if ("object" == typeof g)
                                    for (f in g) b[f] = g[f];
                                else b.rotation = g;
                                "string" == typeof b.x && -1 !== b.x.indexOf("%") && (h.x = 0, h.xPercent = st(b.x, u.xPercent)), "string" == typeof b.y && -1 !== b.y.indexOf("%") && (h.y = 0, h.yPercent = st(b.y, u.yPercent)), h.rotation = ot("rotation" in b ? b.rotation : "shortRotation" in b ? b.shortRotation + "_short" : "rotationZ" in b ? b.rotationZ : u.rotation, u.rotation, "rotation", S), kt && (h.rotationX = ot("rotationX" in b ? b.rotationX : "shortRotationX" in b ? b.shortRotationX + "_short" : u.rotationX || 0, u.rotationX, "rotationX", S), h.rotationY = ot("rotationY" in b ? b.rotationY : "shortRotationY" in b ? b.shortRotationY + "_short" : u.rotationY || 0, u.rotationY, "rotationY", S)), h.skewX = null == b.skewX ? u.skewX : ot(b.skewX, u.skewX), h.skewY = null == b.skewY ? u.skewY : ot(b.skewY, u.skewY), (c = h.skewY - u.skewY) && (h.skewX += c, h.rotation += c)
                        }
                        for (kt && null != b.force3D && (u.force3D = b.force3D, m = !0), u.skewType = b.skewType || u.skewType || o.defaultSkewType, d = u.force3D || u.z || u.rotationX || u.rotationY || h.z || h.rotationX || h.rotationY || h.perspective, d || null == b.scale || (h.scaleZ = 1); --T > -1;) i = bt[T], p = h[i] - u[i], (p > x || -x > p || null != b[i] || null != M[i]) && (m = !0, s = new mt(u, i, u[i], p, s), i in S && (s.e = S[i]), s.xs0 = 0, s.plugin = a, n._overwriteProps.push(s.n));
                        return p = b.transformOrigin, u.svg && (p || b.svgOrigin) && (_ = u.xOffset, v = u.yOffset, Nt(t, nt(p), h, b.svgOrigin, b.smoothOrigin), s = gt(u, "xOrigin", (y ? u : h).xOrigin, h.xOrigin, s, P), s = gt(u, "yOrigin", (y ? u : h).yOrigin, h.yOrigin, s, P), (_ !== u.xOffset || v !== u.yOffset) && (s = gt(u, "xOffset", y ? _ : u.xOffset, u.xOffset, s, P), s = gt(u, "yOffset", y ? v : u.yOffset, u.yOffset, s, P)), p = Tt ? null : "0px 0px"), (p || kt && d && u.zOrigin) && (St ? (m = !0, i = Ct, p = (p || G(t, i, r, !1, "50% 50%")) + "", s = new mt(w, i, 0, 0, s, -1, P), s.b = w[i], s.plugin = a, kt ? (f = u.zOrigin, p = p.split(" "), u.zOrigin = (p.length > 2 && (0 === f || "0px" !== p[2]) ? parseFloat(p[2]) : f) || 0, s.xs0 = s.e = p[0] + " " + (p[1] || "50%") + " 0px", s = new mt(u, "zOrigin", 0, 0, s, -1, s.n), s.b = f, s.xs0 = s.e = u.zOrigin) : s.xs0 = s.e = p) : nt(p + "", u)), m && (n._transformType = u.svg && Tt || !d && 3 !== this._transformType ? 2 : 3), s
                    },
                    prefix: !0
                }), wt("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), wt("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, s, o, a) {
                        e = this.format(e);
                        var l, u, h, c, f, p, d, m, g, _, v, y, w, x, T, b, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            P = t.style;
                        for (g = parseFloat(t.offsetWidth), _ = parseFloat(t.offsetHeight), l = e.split(" "), u = 0; u < S.length; u++) this.p.indexOf("border") && (S[u] = Y(S[u])), f = c = G(t, S[u], r, !1, "0px"), -1 !== f.indexOf(" ") && (c = f.split(" "), f = c[0], c = c[1]), p = h = l[u], d = parseFloat(f), y = f.substr((d + "").length), w = "=" === p.charAt(1), w ? (m = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), m *= parseFloat(p), v = p.substr((m + "").length - (0 > m ? 1 : 0)) || "") : (m = parseFloat(p), v = p.substr((m + "").length)), "" === v && (v = n[i] || y), v !== y && (x = Q(t, "borderLeft", d, y), T = Q(t, "borderTop", d, y), "%" === v ? (f = x / g * 100 + "%", c = T / _ * 100 + "%") : "em" === v ? (b = Q(t, "borderLeft", 1, "em"), f = x / b + "em", c = T / b + "em") : (f = x + "px", c = T + "px"), w && (p = parseFloat(f) + m + v, h = parseFloat(c) + m + v)), o = _t(P, S[u], f + " " + c, p + " " + h, !1, "0px", o);
                        return o
                    },
                    prefix: !0,
                    formatter: ft("0px 0px 0px 0px", !1, !0)
                }), wt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, n, s, o) {
                        var a, l, u, h, c, f, p = "background-position",
                            d = r || V(t, null),
                            g = this.format((d ? m ? d.getPropertyValue(p + "-x") + " " + d.getPropertyValue(p + "-y") : d.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            _ = this.format(e);
                        if (-1 !== g.indexOf("%") != (-1 !== _.indexOf("%")) && (f = G(t, "backgroundImage").replace(k, ""), f && "none" !== f)) {
                            for (a = g.split(" "), l = _.split(" "), I.setAttribute("src", f), u = 2; --u > -1;) g = a[u], h = -1 !== g.indexOf("%"), h !== (-1 !== l[u].indexOf("%")) && (c = 0 === u ? t.offsetWidth - I.width : t.offsetHeight - I.height, a[u] = h ? parseFloat(g) / 100 * c + "px" : parseFloat(g) / c * 100 + "%");
                            g = a.join(" ")
                        }
                        return this.parseComplex(t.style, g, _, s, o)
                    },
                    formatter: nt
                }), wt("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: nt
                }), wt("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), wt("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), wt("transformStyle", {
                    prefix: !0
                }), wt("backfaceVisibility", {
                    prefix: !0
                }), wt("userSelect", {
                    prefix: !0
                }), wt("margin", {
                    parser: pt("marginTop,marginRight,marginBottom,marginLeft")
                }), wt("padding", {
                    parser: pt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), wt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, n, s, o) {
                        var a, l, u;
                        return 9 > m ? (l = t.currentStyle, u = 8 > m ? " " : ",", a = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")", e = this.format(e).split(",").join(u)) : (a = this.format(G(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, s, o)
                    }
                }), wt("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), wt("autoRound,strictUnits", {
                    parser: function(t, e, i, n, r) {
                        return r
                    }
                }), wt("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, n, s, o) {
                        return this.parseComplex(t.style, this.format(G(t, "borderTopWidth", r, !1, "0px") + " " + G(t, "borderTopStyle", r, !1, "solid") + " " + G(t, "borderTopColor", r, !1, "#000")), this.format(e), s, o)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(ct) || ["#000"])[0]
                    }
                }), wt("borderWidth", {
                    parser: pt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), wt("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, n, r, s) {
                        var o = t.style,
                            a = "cssFloat" in o ? "cssFloat" : "styleFloat";
                        return new mt(o, a, 0, 0, r, -1, i, !1, 0, o[a], e)
                    }
                });
                var qt = function(t) {
                    var e, i = this.t,
                        n = i.filter || G(this.data, "filter") || "",
                        r = this.s + this.c * t | 0;
                    100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !G(this.data, "filter")) : (i.filter = n.replace(b, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(x, "opacity=" + r));
                };
                wt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, n, s, o) {
                        var a = parseFloat(G(t, "opacity", r, !1, "1")),
                            l = t.style,
                            u = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), u && 1 === a && "hidden" === G(t, "visibility", r) && 0 !== e && (a = 0), B ? s = new mt(l, "opacity", a, e - a, s) : (s = new mt(l, "opacity", 100 * a, 100 * (e - a), s), s.xn1 = u ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = t, s.plugin = o, s.setRatio = qt), u && (s = new mt(l, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), s.xs0 = "inherit", n._overwriteProps.push(s.n), n._overwriteProps.push(i)), s
                    }
                });
                var Ht = function(t, e) {
                        e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(P, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    Bt = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Ht(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                wt("className", {
                    parser: function(t, e, n, s, o, a, l) {
                        var u, h, c, f, p, d = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if (o = s._classNamePT = new mt(t, n, 0, 0, o, 2), o.setRatio = Bt, o.pr = -11, i = !0, o.b = d, h = J(t, r), c = t._gsClassPT) {
                            for (f = {}, p = c.data; p;) f[p.p] = 1, p = p._next;
                            c.setRatio(1)
                        }
                        return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : d.replace(new RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), u = K(t, h, J(t), l, f), t.setAttribute("class", d), o.data = u.firstMPT, t.style.cssText = m, o = o.xfirst = s.parse(t, u.difs, o, a)
                    }
                });
                var Wt = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, n, r, s, o = this.t.style,
                            a = l.transform.parse;
                        if ("all" === this.e) o.cssText = "", r = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], l[i] && (l[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Ct : l[i].p), Ht(o, i);
                        r && (Ht(o, St), s = this.t._gsTransform, s && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (wt("clearProps", {
                        parser: function(t, e, n, r, s) {
                            return s = new mt(t, n, 0, 0, s, 2), s.setRatio = Wt, s.e = e, s.pr = -10, s.data = r._tween, i = !0, s
                        }
                    }), u = "bezier,throwProps,physicsProps,physics2D".split(","), vt = u.length; vt--;) xt(u[vt]);
                u = o.prototype, u._firstPT = u._lastParsedTransform = u._transform = null, u._onInitTween = function(t, e, a) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = a, this._vars = e, h = e.autoRound, i = !1, n = e.suffixMap || o.suffixMap, r = V(t, ""), s = this._overwriteProps;
                    var u, p, m, g, _, v, y, w, x, b = t.style;
                    if (c && "" === b.zIndex && (u = G(t, "zIndex", r), ("auto" === u || "" === u) && this._addLazySet(b, "zIndex", 0)), "string" == typeof e && (g = b.cssText, u = J(t, r), b.cssText = g + ";" + e, u = K(t, u, J(t)).difs, !B && T.test(e) && (u.opacity = parseFloat(RegExp.$1)), e = u, b.cssText = g), e.className ? this._firstPT = p = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = p = this.parse(t, e, null), this._transformType) {
                        for (x = 3 === this._transformType, St ? f && (c = !0, "" === b.zIndex && (y = G(t, "zIndex", r), ("auto" === y || "" === y) && this._addLazySet(b, "zIndex", 0)), d && this._addLazySet(b, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : b.zoom = 1, m = p; m && m._next;) m = m._next;
                        w = new mt(t, "transform", 0, 0, null, 2), this._linkCSSP(w, null, m), w.setRatio = St ? It : zt, w.data = this._transform || jt(t, r, !0), w.tween = a, w.pr = -1, s.pop()
                    }
                    if (i) {
                        for (; p;) {
                            for (v = p._next, m = g; m && m.pr > p.pr;) m = m._next;
                            (p._prev = m ? m._prev : _) ? p._prev._next = p: g = p, (p._next = m) ? m._prev = p : _ = p, p = v
                        }
                        this._firstPT = g
                    }
                    return !0
                }, u.parse = function(t, e, i, s) {
                    var o, a, u, c, f, p, d, m, g, _, v = t.style;
                    for (o in e) p = e[o], a = l[o], a ? i = a.parse(t, p, o, this, i, s, e) : (f = G(t, o, r) + "", g = "string" == typeof p, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || g && S.test(p) ? (g || (p = ut(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = _t(v, o, f, p, !0, "transparent", i, 0, s)) : !g || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (u = parseFloat(f), d = u || 0 === u ? f.substr((u + "").length) : "", ("" === f || "auto" === f) && ("width" === o || "height" === o ? (u = it(t, o, r), d = "px") : "left" === o || "top" === o ? (u = Z(t, o, r), d = "px") : (u = "opacity" !== o ? 0 : 1, d = "")), _ = g && "=" === p.charAt(1), _ ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c *= parseFloat(p), m = p.replace(w, "")) : (c = parseFloat(p), m = g ? p.replace(w, "") : ""), "" === m && (m = o in n ? n[o] : d), p = c || 0 === c ? (_ ? c + u : c) + m : e[o], d !== m && "" !== m && (c || 0 === c) && u && (u = Q(t, o, u, d), "%" === m ? (u /= Q(t, o, 100, "%") / 100, e.strictUnits !== !0 && (f = u + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? u /= Q(t, o, 1, m) : "px" !== m && (c = Q(t, o, c, m), m = "px"), _ && (c || 0 === c) && (p = c + u + m)), _ && (c += u), !u && 0 !== u || !c && 0 !== c ? void 0 !== v[o] && (p || p + "" != "NaN" && null != p) ? (i = new mt(v, o, c || u || 0, 0, i, -1, o, !1, 0, f, p), i.xs0 = "none" !== p || "display" !== o && -1 === o.indexOf("Style") ? p : f) : X("invalid " + o + " tween value: " + e[o]) : (i = new mt(v, o, u, c - u, i, 0, o, h !== !1 && ("px" === m || "zIndex" === o), 0, f, p), i.xs0 = m)) : i = _t(v, o, f, p, !0, null, i, 0, s)), s && i && !i.plugin && (i.plugin = s);
                    return i
                }, u.setRatio = function(t) {
                    var e, i, n, r = this._firstPT,
                        s = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : s > e && e > -s && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (n = r.l, 2 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                    r.t[r.p] = i
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) {
                                if (2 !== r.type)
                                    if (r.r && -1 !== r.type)
                                        if (e = Math.round(r.s + r.c), r.type) {
                                            if (1 === r.type) {
                                                for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                                r.t[r.p] = i
                                            }
                                        } else r.t[r.p] = e + r.xs0;
                                else r.t[r.p] = r.e;
                                else r.setRatio(t);
                                r = r._next
                            }
                }, u._enableTransforms = function(t) {
                    this._transform = this._transform || jt(this._target, r, !0), this._transformType = this._transform.svg && Tt || !t && 3 !== this._transformType ? 2 : 3
                };
                var Xt = function(t) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                u._addLazySet = function(t, e, i) {
                    var n = this._firstPT = new mt(t, e, 0, 0, this._firstPT, 2);
                    n.e = i, n.setRatio = Xt, n.data = this
                }, u._linkCSSP = function(t, e, i, n) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, u._kill = function(e) {
                    var i, n, r, s = e;
                    if (e.autoAlpha || e.alpha) {
                        s = {};
                        for (n in e) s[n] = e[n];
                        s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, s)
                };
                var $t = function(t, e, i) {
                    var n, r, s, o;
                    if (t.slice)
                        for (r = t.length; --r > -1;) $t(t[r], e, i);
                    else
                        for (n = t.childNodes, r = n.length; --r > -1;) s = n[r], o = s.type, s.style && (e.push(J(s)), i && i.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || $t(s, e, i)
                };
                return o.cascadeTo = function(t, i, n) {
                    var r, s, o, a, l = e.to(t, i, n),
                        u = [l],
                        h = [],
                        c = [],
                        f = [],
                        p = e._internals.reservedProps;
                    for (t = l._targets || l.target, $t(t, h, f), l.render(i, !0, !0), $t(t, c), l.render(0, !0, !0), l._enabled(!0), r = f.length; --r > -1;)
                        if (s = K(f[r], h[r], c[r]), s.firstMPT) {
                            s = s.difs;
                            for (o in n) p[o] && (s[o] = n[o]);
                            a = {};
                            for (o in s) a[o] = h[r][o];
                            u.push(e.fromTo(f[r], i, a, s))
                        }
                    return u
                }, t.activate([o]), o
            }, !0),
            function() {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.5",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = function(t) {
                        for (; t;) t.f || t.blob || (t.r = 1), t = t._next
                    },
                    i = t.prototype;
                i._onInitAllProps = function() {
                    for (var t, i, n, r = this._tween, s = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), o = s.length, a = {}, l = r._propLookup.roundProps; --o > -1;) a[s[o]] = 1;
                    for (o = s.length; --o > -1;)
                        for (t = s[o], i = r._firstPT; i;) n = i._next, i.pg ? i.t._roundProps(a, !0) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n : r._firstPT === i && (r._firstPT = n), i._next = i._prev = null, r._propLookup[t] = l)), i = n;
                    return !1
                }, i._add = function(t, e, i, n) {
                    this._addTween(t, e, i, i + n, e, !0), this._overwriteProps.push(e)
                }
            }(),
            function() {
                _gsScope._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.5.0",
                    init: function(t, e, i) {
                        var n;
                        if ("function" != typeof t.setAttribute) return !1;
                        for (n in e) this._addTween(t, "setAttribute", t.getAttribute(n) + "", e[n] + "", n, !1, n), this._overwriteProps.push(n);
                        return !0
                    }
                })
            }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function(t, e, i) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var n, r, s, o, a, l, u = e.useRadians === !0 ? 2 * Math.PI : 360,
                        h = 1e-6;
                    for (n in e) "useRadians" !== n && (l = (e[n] + "").split("_"), r = l[0], s = parseFloat("function" != typeof t[n] ? t[n] : t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]()), o = this.finals[n] = "string" == typeof r && "=" === r.charAt(1) ? s + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0, a = o - s, l.length && (r = l.join("_"), -1 !== r.indexOf("short") && (a %= u, a !== a % (u / 2) && (a = 0 > a ? a + u : a - u)), -1 !== r.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * u) % u - (a / u | 0) * u : -1 !== r.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * u) % u - (a / u | 0) * u)), (a > h || -h > a) && (this._addTween(t, n, s, s + a, n), this._overwriteProps.push(n)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, n, r = _gsScope.GreenSockGlobals || _gsScope,
                    s = r.com.greensock,
                    o = 2 * Math.PI,
                    a = Math.PI / 2,
                    l = s._class,
                    u = function(e, i) {
                        var n = l("easing." + e, function() {}, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, n
                    },
                    h = t.register || function() {},
                    c = function(t, e, i, n, r) {
                        var s = l("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new n
                        }, !0);
                        return h(s, t), s
                    },
                    f = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    p = function(e, i) {
                        var n = l("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, r.config = function(t) {
                            return new n(t)
                        }, n
                    },
                    d = c("Back", p("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), p("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), p("BackInOut", function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = l("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    g = m.prototype = new t;
                return g.constructor = m, g.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), g.config = m.config = function(t, e, i) {
                    return new m(t, e, i)
                }, e = l("easing.SteppedEase", function(t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), g = e.prototype = new t, g.constructor = e, g.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, g.config = e.config = function(t) {
                    return new e(t)
                }, i = l("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, n, r, s, o, a, l = e.taper || "none", u = [], h = 0, c = 0 | (e.points || 20), p = c, d = e.randomize !== !1, m = e.clamp === !0, g = e.template instanceof t ? e.template : null, _ = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) i = d ? Math.random() : 1 / c * p, n = g ? g.getRatio(i) : i, "none" === l ? r = _ : "out" === l ? (s = 1 - i, r = s * s * _) : "in" === l ? r = i * i * _ : .5 > i ? (s = 2 * i, r = s * s * .5 * _) : (s = 2 * (1 - i), r = s * s * .5 * _), d ? n += Math.random() * r - .5 * r : p % 2 ? n += .5 * r : n -= .5 * r, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), u[h++] = {
                        x: i,
                        y: n
                    };
                    for (u.sort(function(t, e) {
                            return t.x - e.x
                        }), a = new f(1, 1, null), p = c; --p > -1;) o = u[p], a = new f(o.x, o.y, a);
                    this._prev = new f(0, 0, 0 !== a.t ? a : a.next)
                }, !0), g = i.prototype = new t, g.constructor = i, g.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && t <= e.t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, g.config = function(t) {
                    return new i(t)
                }, i.ease = new i, c("Bounce", u("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), u("BounceIn", function(t) {
                    return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), u("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), c("Circ", u("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), u("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), u("CircInOut", function(t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), n = function(e, i, n) {
                    var r = l("easing." + e, function(t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (1 > t ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
                        }, !0),
                        s = r.prototype = new t;
                    return s.constructor = r, s.getRatio = i, s.config = function(t, e) {
                        return new r(t, e)
                    }, r
                }, c("Elastic", n("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), n("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
                }, .3), n("ElasticInOut", function(t) {
                    return (t *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                }, .45)), c("Expo", u("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), u("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), u("ExpoInOut", function(t) {
                    return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), c("Sine", u("SineOut", function(t) {
                    return Math.sin(t * a)
                }), u("SineIn", function(t) {
                    return -Math.cos(t * a) + 1
                }), u("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), l("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), h(r.SlowMo, "SlowMo", "ease,"), h(i, "RoughEase", "ease,"), h(e, "SteppedEase", "ease,"), d
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var n, r, s, o, a, l = function(t) {
                    var e, n = t.split("."),
                        r = i;
                    for (e = 0; e < n.length; e++) r[n[e]] = r = r[n[e]] || {};
                    return r
                },
                u = l("com.greensock"),
                h = 1e-10,
                c = function(t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                f = function() {},
                p = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                d = {},
                m = function(n, r, s, o) {
                    this.sc = d[n] ? d[n].sc : [], d[n] = this, this.gsClass = null, this.func = s;
                    var a = [];
                    this.check = function(u) {
                        for (var h, c, f, p, g, _ = r.length, v = _; --_ > -1;)(h = d[r[_]] || new m(r[_], [])).gsClass ? (a[_] = h.gsClass, v--) : u && h.sc.push(this);
                        if (0 === v && s)
                            for (c = ("com.greensock." + n).split("."), f = c.pop(), p = l(c.join("."))[f] = this.gsClass = s.apply(s, a), o && (i[f] = p, g = "undefined" != typeof module && module.exports, !g && "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                                    return p
                                }) : n === e && g && (module.exports = p)), _ = 0; _ < this.sc.length; _++) this.sc[_].check()
                    }, this.check(!0)
                },
                g = t._gsDefine = function(t, e, i, n) {
                    return new m(t, e, i, n)
                },
                _ = u._class = function(t, e, i) {
                    return e = e || function() {}, g(t, [], function() {
                        return e
                    }, i), e
                };
            g.globals = i;
            var v = [0, 0, 1, 1],
                y = [],
                w = _("easing.Ease", function(t, e, i, n) {
                    this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? v.concat(e) : v
                }, !0),
                x = w.map = {},
                T = w.register = function(t, e, i, n) {
                    for (var r, s, o, a, l = e.split(","), h = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                        for (s = l[h], r = n ? _("easing." + s, null, !0) : u.easing[s] || {}, o = c.length; --o > -1;) a = c[o], x[s + "." + a] = x[a + s] = r[a] = t.getRatio ? t : t[a] || new t
                };
            for (s = w.prototype, s._calcEnd = !1, s.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
                }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = n.length; --r > -1;) s = n[r] + ",Power" + r, T(new w(null, null, 1, r), s, "easeOut", !0), T(new w(null, null, 2, r), s, "easeIn" + (0 === r ? ",easeNone" : "")), T(new w(null, null, 3, r), s, "easeInOut");
            x.linear = u.easing.Linear.easeIn, x.swing = u.easing.Quad.easeInOut;
            var b = _("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            s = b.prototype, s.addEventListener = function(t, e, i, n, r) {
                r = r || 0;
                var s, l, u = this._listeners[t],
                    h = 0;
                for (null == u && (this._listeners[t] = u = []), l = u.length; --l > -1;) s = u[l], s.c === e && s.s === i ? u.splice(l, 1) : 0 === h && s.pr < r && (h = l + 1);
                u.splice(h, 0, {
                    c: e,
                    s: i,
                    up: n,
                    pr: r
                }), this !== o || a || o.wake()
            }, s.removeEventListener = function(t, e) {
                var i, n = this._listeners[t];
                if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === e) return void n.splice(i, 1)
            }, s.dispatchEvent = function(t) {
                var e, i, n, r = this._listeners[t];
                if (r)
                    for (e = r.length, i = this._eventTarget; --e > -1;) n = r[e], n && (n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i))
            };
            var S = t.requestAnimationFrame,
                P = t.cancelAnimationFrame,
                C = Date.now || function() {
                    return (new Date).getTime()
                },
                k = C();
            for (n = ["ms", "moz", "webkit", "o"], r = n.length; --r > -1 && !S;) S = t[n[r] + "RequestAnimationFrame"], P = t[n[r] + "CancelAnimationFrame"] || t[n[r] + "CancelRequestAnimationFrame"];
            _("Ticker", function(t, e) {
                var i, n, r, s, l, u = this,
                    c = C(),
                    p = e !== !1 && S ? "auto" : !1,
                    d = 500,
                    m = 33,
                    g = "tick",
                    _ = function(t) {
                        var e, o, a = C() - k;
                        a > d && (c += a - m), k += a, u.time = (k - c) / 1e3, e = u.time - l, (!i || e > 0 || t === !0) && (u.frame++, l += e + (e >= s ? .004 : s - e), o = !0), t !== !0 && (r = n(_)), o && u.dispatchEvent(g)
                    };
                b.call(u), u.time = u.frame = 0, u.tick = function() {
                    _(!0)
                }, u.lagSmoothing = function(t, e) {
                    d = t || 1 / h, m = Math.min(e, d, 0)
                }, u.sleep = function() {
                    null != r && (p && P ? P(r) : clearTimeout(r), n = f, r = null, u === o && (a = !1))
                }, u.wake = function(t) {
                    null !== r ? u.sleep() : t ? c += -k + (k = C()) : u.frame > 10 && (k = C() - d + 5), n = 0 === i ? f : p && S ? S : function(t) {
                        return setTimeout(t, 1e3 * (l - u.time) + 1 | 0)
                    }, u === o && (a = !0), _(2)
                }, u.fps = function(t) {
                    return arguments.length ? (i = t, s = 1 / (i || 60), l = this.time + s, void u.wake()) : i
                }, u.useRAF = function(t) {
                    return arguments.length ? (u.sleep(), p = t, void u.fps(i)) : p
                }, u.fps(t), setTimeout(function() {
                    "auto" === p && u.frame < 5 && "hidden" !== document.visibilityState && u.useRAF(!1)
                }, 1500)
            }), s = u.Ticker.prototype = new u.events.EventDispatcher, s.constructor = u.Ticker;
            var A = _("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, Y) {
                    a || o.wake();
                    var i = this.vars.useFrames ? U : Y;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            o = A.ticker = new u.Ticker, s = A.prototype, s._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
            var R = function() {
                a && C() - k > 2e3 && o.wake(), setTimeout(R, 2e3)
            };
            R(), s.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, s.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, s.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, s.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, s.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, s.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, s.render = function(t, e, i) {}, s.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, s.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
            }, s._enabled = function(t, e) {
                return a || o.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, s._kill = function(t, e) {
                return this._enabled(!1, !1)
            }, s.kill = function(t, e) {
                return this._kill(t, e), this
            }, s._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, s._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, s._callback = function(t) {
                var e = this.vars;
                e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || y)
            }, s.eventCallback = function(t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = p(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, s.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, s.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, s.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, s.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, s.totalTime = function(t, e, i) {
                if (a || o.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            r = this._timeline;
                        if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (L.length && G(), this.render(t, e, !1), L.length && G())
                }
                return this
            }, s.progress = s.totalProgress = function(t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
            }, s.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, s.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, s.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || h, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, s.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, s.paused = function(t) {
                if (!arguments.length) return this._paused;
                var e, i, n = this._timeline;
                return t != this._paused && n && (a || t || o.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
            };
            var O = _("core.SimpleTimeline", function(t) {
                A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            s = O.prototype = new A, s.constructor = O, s.kill()._gc = !1, s._first = s._last = s._recent = null, s._sortChildren = !1, s.add = s.insert = function(t, e, i, n) {
                var r, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                    for (s = t._startTime; r && r._startTime > s;) r = r._prev;
                return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
            }, s._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, s.render = function(t, e, i) {
                var n, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
            }, s.rawTime = function() {
                return a || o.wake(), this._totalTime
            };
            var D = _("TweenLite", function(e, i, n) {
                    if (A.call(this, i, n), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : D.selector(e) || e;
                    var r, s, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? $[D.defaultOverwrite] : "number" == typeof l ? l >> 0 : $[l], (a || e instanceof Array || e.push && p(e)) && "number" != typeof e[0])
                        for (this._targets = o = c(e), this._propLookup = [], this._siblings = [], r = 0; r < o.length; r++) s = o[r], s ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(r--, 1), this._targets = o = o.concat(c(s))) : (this._siblings[r] = Q(s, this, !1), 1 === l && this._siblings[r].length > 1 && J(s, this, null, 1, this._siblings[r])) : (s = o[r--] = D.selector(s), "string" == typeof s && o.splice(r + 1, 1)) : o.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = Q(e, this, !1), 1 === l && this._siblings.length > 1 && J(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -h, this.render(-this._delay))
                }, !0),
                E = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                N = function(t, e) {
                    var i, n = {};
                    for (i in t) X[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!H[i] || H[i] && H[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                    t.css = n
                };
            s = D.prototype = new A, s.constructor = D, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = s._lazy = !1, D.version = "1.18.2", D.defaultEase = s._ease = new w(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = o, D.autoSleep = 120, D.lagSmoothing = function(t, e) {
                o.lagSmoothing(t, e)
            }, D.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (D.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var L = [],
                M = {},
                F = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                j = function(t) {
                    for (var e, i = this._firstPT, n = 1e-6; i;) e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                },
                z = function(t, e, i, n) {
                    var r, s, o, a, l, u, h, c = [t, e],
                        f = 0,
                        p = "",
                        d = 0;
                    for (c.start = t, i && (i(c), t = c[0], e = c[1]), c.length = 0, r = t.match(F) || [], s = e.match(F) || [], n && (n._next = null, n.blob = 1, c._firstPT = n), l = s.length, a = 0; l > a; a++) h = s[a], u = e.substr(f, e.indexOf(h, f) - f), p += u || !a ? u : ",", f += u.length, d ? d = (d + 1) % 5 : "rgba(" === u.substr(-5) && (d = 1), h === r[a] || r.length <= a ? p += h : (p && (c.push(p), p = ""), o = parseFloat(r[a]), c.push(o), c._firstPT = {
                        _next: c._firstPT,
                        t: c,
                        p: c.length - 1,
                        s: o,
                        c: ("=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * parseFloat(h.substr(2)) : parseFloat(h) - o) || 0,
                        f: 0,
                        r: d && 4 > d
                    }), f += h.length;
                    return p += e.substr(f), p && c.push(p), c.setRatio = j, c
                },
                I = function(t, e, i, n, r, s, o, a) {
                    var l, u, h = "get" === i ? t[e] : i,
                        c = typeof t[e],
                        f = "string" == typeof n && "=" === n.charAt(1),
                        p = {
                            t: t,
                            p: e,
                            s: h,
                            f: "function" === c,
                            pg: 0,
                            n: r || e,
                            r: s,
                            pr: 0,
                            c: f ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - h || 0
                        };
                    return "number" !== c && ("function" === c && "get" === i && (u = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), p.s = h = o ? t[u](o) : t[u]()), "string" == typeof h && (o || isNaN(h)) ? (p.fp = o, l = z(h, n, a || D.defaultStringFilter, p), p = {
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: r || e,
                        pr: 0
                    }) : f || (p.s = parseFloat(h), p.c = parseFloat(n) - p.s || 0)), p.c ? ((p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p, p) : void 0
                },
                q = D._internals = {
                    isArray: p,
                    isSelector: E,
                    lazyTweens: L,
                    blobDif: z
                },
                H = D._plugins = {},
                B = q.tweenLookup = {},
                W = 0,
                X = q.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1
                },
                $ = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                U = A._rootFramesTimeline = new O,
                Y = A._rootTimeline = new O,
                V = 30,
                G = q.lazyRender = function() {
                    var t, e = L.length;
                    for (M = {}; --e > -1;) t = L[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    L.length = 0
                };
            Y._startTime = o.time, U._startTime = o.frame, Y._active = U._active = !0, setTimeout(G, 1), A._updateRoot = D.render = function() {
                var t, e, i;
                if (L.length && G(), Y.render((o.time - Y._startTime) * Y._timeScale, !1, !1), U.render((o.frame - U._startTime) * U._timeScale, !1, !1), L.length && G(), o.frame >= V) {
                    V = o.frame + (parseInt(D.autoSleep, 10) || 120);
                    for (i in B) {
                        for (e = B[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete B[i]
                    }
                    if (i = Y._first, (!i || i._paused) && D.autoSleep && !U._first && 1 === o._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || o.sleep()
                    }
                }
            }, o.addEventListener("tick", A._updateRoot);
            var Q = function(t, e, i) {
                    var n, r, s = t._gsTweenID;
                    if (B[s || (t._gsTweenID = s = "t" + W++)] || (B[s] = {
                            target: t,
                            tweens: []
                        }), e && (n = B[s].tweens, n[r = n.length] = e, i))
                        for (; --r > -1;) n[r] === e && n.splice(r, 1);
                    return B[s].tweens
                },
                Z = function(t, e, i, n) {
                    var r, s, o = t.vars.onOverwrite;
                    return o && (r = o(t, e, i, n)), o = D.onOverwrite, o && (s = o(t, e, i, n)), r !== !1 && s !== !1
                },
                J = function(t, e, i, n, r) {
                    var s, o, a, l;
                    if (1 === n || n >= 4) {
                        for (l = r.length, s = 0; l > s; s++)
                            if ((a = r[s]) !== e) a._gc || a._kill(null, t, e) && (o = !0);
                            else if (5 === n) break;
                        return o
                    }
                    var u, c = e._startTime + h,
                        f = [],
                        p = 0,
                        d = 0 === e._duration;
                    for (s = r.length; --s > -1;)(a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || K(e, 0, d), 0 === K(a, u, d) && (f[p++] = a)) : a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && ((d || !a._initted) && c - a._startTime <= 2e-10 || (f[p++] = a)));
                    for (s = p; --s > -1;)
                        if (a = f[s], 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || !a._firstPT && a._initted) {
                            if (2 !== n && !Z(a, e)) continue;
                            a._enabled(!1, !1) && (o = !0)
                        }
                    return o
                },
                K = function(t, e, i) {
                    for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;) {
                        if (s += n._startTime, r *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return s /= r, s > e ? s - e : i && s === e || !t._initted && 2 * h > s - e ? h : (s += t.totalDuration() / t._timeScale / r) > e + h ? 0 : s - e - h
                };
            s._init = function() {
                var t, e, i, n, r, s = this.vars,
                    o = this._overwrittenProps,
                    a = this._duration,
                    l = !!s.immediateRender,
                    u = s.ease;
                if (s.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (n in s.startAt) r[n] = s.startAt[n];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && s.lazy !== !1, r.startAt = r.delay = null, this._startAt = D.to(this.target, 0, r), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== a) return
                } else if (s.runBackwards && 0 !== a)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (l = !1), i = {};
                        for (n in s) X[n] && "autoCSS" !== n || (i[n] = s[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && s.lazy !== !1, i.immediateRender = l, this._startAt = D.to(this.target, 0, i),
                            l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = u = u ? u instanceof w ? u : "function" == typeof u ? new w(u, s.easeParams) : x[u] || D.defaultEase : D.defaultEase, s.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, o);
                if (e && D._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = s.onUpdate, this._initted = !0
            }, s._initProps = function(e, i, n, r) {
                var s, o, a, l, u, h;
                if (null == e) return !1;
                M[e._gsTweenID] && G(), this.vars.css || e.style && e !== t && e.nodeType && H.css && this.vars.autoCSS !== !1 && N(this.vars, e);
                for (s in this.vars)
                    if (h = this.vars[s], X[s]) h && (h instanceof Array || h.push && p(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[s] = h = this._swapSelfInParams(h, this));
                    else if (H[s] && (l = new H[s])._onInitTween(e, this.vars[s], this)) {
                    for (this._firstPT = u = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: s,
                            pg: 1,
                            pr: l._priority
                        }, o = l._overwriteProps.length; --o > -1;) i[l._overwriteProps[o]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u)
                } else i[s] = I.call(this, e, s, "get", h, s, 0, null, this.vars.stringFilter);
                return r && this._kill(r, e) ? this._initProps(e, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && J(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (M[e._gsTweenID] = !0), a)
            }, s.render = function(t, e, i) {
                var n, r, s, o, a = this._time,
                    l = this._duration,
                    u = this._rawPrevTime;
                if (t >= l - 1e-7) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > u || 0 >= t && t >= -1e-7 || u === h && "isPause" !== this.data) && u !== t && (i = !0, u > h && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || u === t ? t : h);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && u > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (u >= 0 && (u !== h || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || u === t ? t : h)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var c = t / l,
                        f = this._easeType,
                        p = this._easePower;
                    (1 === f || 3 === f && c >= .5) && (c = 1 - c), 3 === f && (c *= 2), 1 === p ? c *= c : 2 === p ? c *= c * c : 3 === p ? c *= c * c * c : 4 === p && (c *= c * c * c * c), 1 === f ? this.ratio = 1 - c : 2 === f ? this.ratio = c : .5 > t / l ? this.ratio = c / 2 : this.ratio = 1 - c / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = u, L.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== a || n) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === h && o !== h && (this._rawPrevTime = 0))
                }
            }, s._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
                var n, r, s, o, a, l, u, h, c, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((p(e) || E(e)) && "number" != typeof e[0])
                    for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; --n > -1;)
                            if (e === this._targets[n]) {
                                a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        if (u = t || a, h = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
                            for (s in u) a[s] && (c || (c = []), c.push(s));
                            if ((c || !t) && !Z(this, i, e, c)) return !1
                        }
                        for (s in u)(o = a[s]) && (f && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(u) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), h && (r[s] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, s.invalidate = function() {
                return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -h, this.render(-this._delay)), this
            }, s._enabled = function(t, e) {
                if (a || o.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = Q(n[i], this, !0);
                    else this._siblings = Q(this.target, this, !0)
                }
                return A.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
            }, D.to = function(t, e, i) {
                return new D(t, e, i)
            }, D.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i)
            }, D.fromTo = function(t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new D(t, e, n)
            }, D.delayedCall = function(t, e, i, n, r) {
                return new D(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, D.set = function(t, e) {
                return new D(t, 0, e)
            }, D.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : D.selector(t) || t;
                var i, n, r, s;
                if ((p(t) || E(t)) && "number" != typeof t[0]) {
                    for (i = t.length, n = []; --i > -1;) n = n.concat(D.getTweensOf(t[i], e));
                    for (i = n.length; --i > -1;)
                        for (s = n[i], r = i; --r > -1;) s === n[r] && n.splice(i, 1)
                } else
                    for (n = Q(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                return n
            }, D.killTweensOf = D.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var n = D.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
            };
            var tt = _("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = tt.prototype
            }, !0);
            if (s = tt.prototype, tt.version = "1.18.0", tt.API = 2, s._firstPT = null, s._addTween = I, s.setRatio = j, s._kill = function(t) {
                    var e, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, s._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, D._onPluginEvent = function(t, e) {
                    var i, n, r, s, o, a = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; a;) {
                            for (o = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                            (a._prev = n ? n._prev : s) ? a._prev._next = a: r = a, (a._next = n) ? n._prev = a : s = a, a = o
                        }
                        a = e._firstPT = r
                    }
                    for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                    return i
                }, tt.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === tt.API && (H[(new t[e])._propName] = t[e]);
                    return !0
                }, g.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        n = t.priority || 0,
                        r = t.overwriteProps,
                        s = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        o = _("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            tt.call(this, i, n), this._overwriteProps = r || []
                        }, t.global === !0),
                        a = o.prototype = new tt(i);
                    a.constructor = o, o.API = t.API;
                    for (e in s) "function" == typeof t[e] && (a[s[e]] = t[e]);
                    return o.version = t.version, tt.activate([o]), o
                }, n = t._gsQueue) {
                for (r = 0; r < n.length; r++) n[r]();
                for (s in d) d[s].func || t.console.log("GSAP encountered missing dependency: com.greensock." + s)
            }
            a = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
            var n = function(e) {
                    t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                },
                r = 1e-10,
                s = [],
                o = e._internals,
                a = o.lazyTweens,
                l = o.lazyRender,
                u = new i(null, null, 1, 0),
                h = n.prototype = new t;
            return h.constructor = n, h.kill()._gc = !1, n.version = "1.15.1", h.invalidate = function() {
                return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
            }, h.addCallback = function(t, i, n, r) {
                return this.add(e.delayedCall(0, t, n, r), i)
            }, h.removeCallback = function(t, e) {
                if (t)
                    if (null == e) this._kill(null, t);
                    else
                        for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
                return this
            }, h.removePause = function(e) {
                return this.removeCallback(t._internals.pauseCallback, e)
            }, h.tweenTo = function(t, i) {
                i = i || {};
                var n, r, o, a = {
                    ease: u,
                    useFrames: this.usesFrames(),
                    immediateRender: !1
                };
                for (r in i) a[r] = i[r];
                return a.time = this._parseTimeOrLabel(t), n = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, o = new e(this, n, a), a.onStart = function() {
                    o.target.paused(!0), o.vars.time !== o.target.time() && n === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || o, i.onStartParams || s)
                }, o
            }, h.tweenFromTo = function(t, e, i) {
                i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                    onComplete: this.seek,
                    onCompleteParams: [t],
                    onCompleteScope: this
                }, i.immediateRender = i.immediateRender !== !1;
                var n = this.tweenTo(e, i);
                return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
            }, h.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var n, o, u, h, c, f, p = this._dirty ? this.totalDuration() : this._totalDuration,
                    d = this._duration,
                    m = this._time,
                    g = this._totalTime,
                    _ = this._startTime,
                    v = this._timeScale,
                    y = this._rawPrevTime,
                    w = this._paused,
                    x = this._cycle;
                if (t >= p ? (this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (o = !0, h = "onComplete", 0 === this._duration && (0 === t || 0 > y || y === r) && y !== t && this._first && (c = !0, y > r && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = d, t = d + 1e-4)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === d && y !== r && (y > 0 || 0 > t && y >= 0) && !this._locked) && (h = "onReverseComplete", o = this._reversed), 0 > t ? (this._active = !1, y >= 0 && this._first && (c = !0), this._rawPrevTime = t) : (this._rawPrevTime = d || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (c = !0))) : (0 === d && 0 > y && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (f = d + this._repeatDelay, this._cycle = this._totalTime / f >> 0, 0 !== this._cycle && this._cycle === this._totalTime / f && this._cycle--, this._time = this._totalTime - this._cycle * f, this._yoyo && 0 !== (1 & this._cycle) && (this._time = d - this._time), this._time > d ? (this._time = d, t = d + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time))), this._cycle !== x && !this._locked) {
                    var T = this._yoyo && 0 !== (1 & x),
                        b = T === (this._yoyo && 0 !== (1 & this._cycle)),
                        S = this._totalTime,
                        P = this._cycle,
                        C = this._rawPrevTime,
                        k = this._time;
                    if (this._totalTime = x * d, x > this._cycle ? T = !T : this._totalTime += d, this._time = m, this._rawPrevTime = 0 === d ? y - 1e-4 : y, this._cycle = x, this._locked = !0, m = T ? 0 : d, this.render(m, e, 0 === d), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || s), b && (m = T ? d + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !w) return;
                    this._time = k, this._totalTime = S, this._cycle = P, this._rawPrevTime = C
                }
                if (!(this._time !== m && this._first || i || c)) return void(g !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)));
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || s)), this._time >= m)
                    for (n = this._first; n && (u = n._next, !this._paused || w);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = u;
                else
                    for (n = this._last; n && (u = n._prev, !this._paused || w);)(n._active || m >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = u;
                this._onUpdate && (e || (a.length && l(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s))), h && (this._locked || this._gc || (_ === this._startTime || v !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (o && (a.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this.vars[h].apply(this.vars[h + "Scope"] || this, this.vars[h + "Params"] || s)))
            }, h.getActive = function(t, e, i) {
                null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                var n, r, s = [],
                    o = this.getChildren(t, e, i),
                    a = 0,
                    l = o.length;
                for (n = 0; l > n; n++) r = o[n], r.isActive() && (s[a++] = r);
                return s
            }, h.getLabelAfter = function(t) {
                t || 0 !== t && (t = this._time);
                var e, i = this.getLabelsArray(),
                    n = i.length;
                for (e = 0; n > e; e++)
                    if (i[e].time > t) return i[e].name;
                return null
            }, h.getLabelBefore = function(t) {
                null == t && (t = this._time);
                for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                    if (t > e[i].time) return e[i].name;
                return null
            }, h.getLabelsArray = function() {
                var t, e = [],
                    i = 0;
                for (t in this._labels) e[i++] = {
                    time: this._labels[t],
                    name: t
                };
                return e.sort(function(t, e) {
                    return t.time - e.time
                }), e
            }, h.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
            }, h.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
            }, h.totalDuration = function(e) {
                return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
            }, h.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
            }, h.repeat = function(t) {
                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, h.repeatDelay = function(t) {
                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, h.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, h.currentLabel = function(t) {
                return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
            }, n
        }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
            var n = function(t) {
                    e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                    var i, n, r = this.vars;
                    for (n in r) i = r[n], l(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                    l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                },
                r = 1e-10,
                s = i._internals,
                o = n._internals = {},
                a = s.isSelector,
                l = s.isArray,
                u = s.lazyTweens,
                h = s.lazyRender,
                c = [],
                f = _gsScope._gsDefine.globals,
                p = function(t) {
                    var e, i = {};
                    for (e in t) i[e] = t[e];
                    return i
                },
                d = o.pauseCallback = function(t, e, i, n) {
                    var r = t._timeline,
                        s = r._totalTime;
                    !e && this._forcingPlayhead || r._rawPrevTime === t._startTime || (r.pause(t._startTime), e && e.apply(n || r, i || c), this._forcingPlayhead && r.seek(s))
                },
                m = function(t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                g = n.prototype = new e;
            return n.version = "1.15.1", g.constructor = n, g.kill()._gc = g._forcingPlayhead = !1, g.to = function(t, e, n, r) {
                var s = n.repeat && f.TweenMax || i;
                return e ? this.add(new s(t, e, n), r) : this.set(t, n, r)
            }, g.from = function(t, e, n, r) {
                return this.add((n.repeat && f.TweenMax || i).from(t, e, n), r)
            }, g.fromTo = function(t, e, n, r, s) {
                var o = r.repeat && f.TweenMax || i;
                return e ? this.add(o.fromTo(t, e, n, r), s) : this.set(t, r, s)
            }, g.staggerTo = function(t, e, r, s, o, l, u, h) {
                var c, f = new n({
                    onComplete: l,
                    onCompleteParams: u,
                    onCompleteScope: h,
                    smoothChildTiming: this.smoothChildTiming
                });
                for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = m(t)), s = s || 0, 0 > s && (t = m(t), t.reverse(), s *= -1), c = 0; t.length > c; c++) r.startAt && (r.startAt = p(r.startAt)), f.to(t[c], e, p(r), c * s);
                return this.add(f, o)
            }, g.staggerFrom = function(t, e, i, n, r, s, o, a) {
                return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, o, a)
            }, g.staggerFromTo = function(t, e, i, n, r, s, o, a, l) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, o, a, l)
            }, g.call = function(t, e, n, r) {
                return this.add(i.delayedCall(0, t, e, n), r)
            }, g.set = function(t, e, n) {
                return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
            }, n.exportRoot = function(t, e) {
                t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                var r, s, o = new n(t),
                    a = o._timeline;
                for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, r = a._first; r;) s = r._next, e && r instanceof i && r.target === r.vars.onComplete || o.add(r, r._startTime - r._delay), r = s;
                return a.add(o, 0), o
            }, g.add = function(r, s, o, a) {
                var u, h, c, f, p, d;
                if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)), !(r instanceof t)) {
                    if (r instanceof Array || r && r.push && l(r)) {
                        for (o = o || "normal", a = a || 0, u = s, h = r.length, c = 0; h > c; c++) l(f = r[c]) && (f = new n({
                            tweens: f
                        })), this.add(f, u), "string" != typeof f && "function" != typeof f && ("sequence" === o ? u = f._startTime + f.totalDuration() / f._timeScale : "start" === o && (f._startTime -= f.delay())), u += a;
                        return this._uncache(!0)
                    }
                    if ("string" == typeof r) return this.addLabel(r, s);
                    if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                    r = i.delayedCall(0, r)
                }
                if (e.prototype.add.call(this, r, s), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                    for (p = this, d = p.rawTime() > r._startTime; p._timeline;) d && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                return this
            }, g.remove = function(e) {
                if (e instanceof t) return this._remove(e, !1);
                if (e instanceof Array || e && e.push && l(e)) {
                    for (var i = e.length; --i > -1;) this.remove(e[i]);
                    return this
                }
                return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
            }, g._remove = function(t, i) {
                e.prototype._remove.call(this, t, i);
                var n = this._last;
                return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, g.append = function(t, e) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
            }, g.insert = g.insertMultiple = function(t, e, i, n) {
                return this.add(t, e || 0, i, n)
            }, g.appendMultiple = function(t, e, i, n) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
            }, g.addLabel = function(t, e) {
                return this._labels[t] = this._parseTimeOrLabel(e), this
            }, g.addPause = function(t, e, n, r) {
                var s = i.delayedCall(0, d, ["{self}", e, n, r], this);
                return s.data = "isPause", this.add(s, t)
            }, g.removeLabel = function(t) {
                return delete this._labels[t], this
            }, g.getLabelTime = function(t) {
                return null != this._labels[t] ? this._labels[t] : -1
            }, g._parseTimeOrLabel = function(e, i, n, r) {
                var s;
                if (r instanceof t && r.timeline === this) this.remove(r);
                else if (r && (r instanceof Array || r.push && l(r)))
                    for (s = r.length; --s > -1;) r[s] instanceof t && r[s].timeline === this && this.remove(r[s]);
                if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
                if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                else {
                    if (s = e.indexOf("="), -1 === s) return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                    i = parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s + 1)), e = s > 1 ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, n) : this.duration()
                }
                return Number(e) + i
            }, g.seek = function(t, e) {
                return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
            }, g.stop = function() {
                return this.paused(!0)
            }, g.gotoAndPlay = function(t, e) {
                return this.play(t, e)
            }, g.gotoAndStop = function(t, e) {
                return this.pause(t, e)
            }, g.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var n, s, o, a, l, f = this._dirty ? this.totalDuration() : this._totalDuration,
                    p = this._time,
                    d = this._startTime,
                    m = this._timeScale,
                    g = this._paused;
                if (t >= f ? (this._totalTime = this._time = f, this._reversed || this._hasPausedChild() || (s = !0, a = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = f + 1e-4) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (l = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== p && this._first || i || l) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || c)), this._time >= p)
                        for (n = this._first; n && (o = n._next, !this._paused || g);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                    else
                        for (n = this._last; n && (o = n._prev, !this._paused || g);)(n._active || p >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                    this._onUpdate && (e || (u.length && h(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c))), a && (this._gc || (d === this._startTime || m !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (s && (u.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this.vars[a].apply(this.vars[a + "Scope"] || this, this.vars[a + "Params"] || c)))
                }
            }, g._hasPausedChild = function() {
                for (var t = this._first; t;) {
                    if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                    t = t._next
                }
                return !1
            }, g.getChildren = function(t, e, n, r) {
                r = r || -9999999999;
                for (var s = [], o = this._first, a = 0; o;) r > o._startTime || (o instanceof i ? e !== !1 && (s[a++] = o) : (n !== !1 && (s[a++] = o), t !== !1 && (s = s.concat(o.getChildren(!0, e, n)), a = s.length))), o = o._next;
                return s
            }, g.getTweensOf = function(t, e) {
                var n, r, s = this._gc,
                    o = [],
                    a = 0;
                for (s && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1;)(n[r].timeline === this || e && this._contains(n[r])) && (o[a++] = n[r]);
                return s && this._enabled(!1, !0), o
            }, g.recent = function() {
                return this._recent
            }, g._contains = function(t) {
                for (var e = t.timeline; e;) {
                    if (e === this) return !0;
                    e = e.timeline
                }
                return !1
            }, g.shiftChildren = function(t, e, i) {
                i = i || 0;
                for (var n, r = this._first, s = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                if (e)
                    for (n in s) s[n] >= i && (s[n] += t);
                return this._uncache(!0)
            }, g._kill = function(t, e) {
                if (!t && !e) return this._enabled(!1, !1);
                for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0);
                return r
            }, g.clear = function(t) {
                var e = this.getChildren(!1, !0, !0),
                    i = e.length;
                for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                return t !== !1 && (this._labels = {}), this._uncache(!0)
            }, g.invalidate = function() {
                for (var e = this._first; e;) e.invalidate(), e = e._next;
                return t.prototype.invalidate.call(this)
            }, g._enabled = function(t, i) {
                if (t === this._gc)
                    for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                return e.prototype._enabled.call(this, t, i)
            }, g.totalTime = function() {
                this._forcingPlayhead = !0;
                var e = t.prototype.totalTime.apply(this, arguments);
                return this._forcingPlayhead = !1, e
            }, g.duration = function(t) {
                return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
            }, g.totalDuration = function(t) {
                if (!arguments.length) {
                    if (this._dirty) {
                        for (var e, i, n = 0, r = this._last, s = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime, 0 > r._startTime && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
                        this._duration = this._totalDuration = n, this._dirty = !1
                    }
                    return this._totalDuration
                }
                return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
            }, g.usesFrames = function() {
                for (var e = this._timeline; e._timeline;) e = e._timeline;
                return e === t._rootFramesTimeline
            }, g.rawTime = function() {
                return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
            }, n
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[t]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("./TweenLite.js"), module.exports = e())
    }("TimelineMax"),
    function(t, e) {
        "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.ScrollMagic = e()
    }(this, function() {
        "use strict";
        var t = function() {
            r.log(2, "(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")
        };
        t.version = "2.0.5", window.addEventListener("mousewheel", function() {});
        var e = "data-scrollmagic-pin-spacer";
        t.Controller = function(n) {
            var s, o, a = "ScrollMagic.Controller",
                l = "FORWARD",
                u = "REVERSE",
                h = "PAUSED",
                c = i.defaults,
                f = this,
                p = r.extend({}, c, n),
                d = [],
                m = !1,
                g = 0,
                _ = h,
                v = !0,
                y = 0,
                w = !0,
                x = function() {
                    for (var e in p) c.hasOwnProperty(e) || (O(2, 'WARNING: Unknown option "' + e + '"'), delete p[e]);
                    if (p.container = r.get.elements(p.container)[0], !p.container) throw O(1, "ERROR creating object " + a + ": No valid scroll container supplied"), a + " init failed.";
                    v = p.container === window || p.container === document.body || !document.body.contains(p.container), v && (p.container = window), y = S(), p.container.addEventListener("resize", A), p.container.addEventListener("scroll", A), p.refreshInterval = parseInt(p.refreshInterval) || c.refreshInterval, T(), O(3, "added new " + a + " controller (v" + t.version + ")")
                },
                T = function() {
                    p.refreshInterval > 0 && (o = window.setTimeout(R, p.refreshInterval))
                },
                b = function() {
                    return p.vertical ? r.get.scrollTop(p.container) : r.get.scrollLeft(p.container)
                },
                S = function() {
                    return p.vertical ? r.get.height(p.container) : r.get.width(p.container)
                },
                P = this._setScrollPos = function(t) {
                    p.vertical ? v ? window.scrollTo(r.get.scrollLeft(), t) : p.container.scrollTop = t : v ? window.scrollTo(t, r.get.scrollTop()) : p.container.scrollLeft = t
                },
                C = function() {
                    if (w && m) {
                        var t = r.type.Array(m) ? m : d.slice(0);
                        m = !1;
                        var e = g;
                        g = f.scrollPos();
                        var i = g - e;
                        0 !== i && (_ = i > 0 ? l : u), _ === u && t.reverse(), t.forEach(function(e, i) {
                            O(3, "updating Scene " + (i + 1) + "/" + t.length + " (" + d.length + " total)"), e.update(!0)
                        }), 0 === t.length && p.loglevel >= 3 && O(3, "updating 0 Scenes (nothing added to controller)")
                    }
                },
                k = function() {
                    s = r.rAF(C)
                },
                A = function(t) {
                    O(3, "event fired causing an update:", t.type), "resize" == t.type && (y = S(), _ = h), m !== !0 && (m = !0, k())
                },
                R = function() {
                    if (!v && y != S()) {
                        var t;
                        try {
                            t = new Event("resize", {
                                bubbles: !1,
                                cancelable: !1
                            })
                        } catch (e) {
                            t = document.createEvent("Event"), t.initEvent("resize", !1, !1)
                        }
                        p.container.dispatchEvent(t)
                    }
                    d.forEach(function(t, e) {
                        t.refresh()
                    }), T()
                },
                O = this._log = function(t, e) {
                    p.loglevel >= t && (Array.prototype.splice.call(arguments, 1, 0, "(" + a + ") ->"), r.log.apply(window, arguments))
                };
            this._options = p;
            var D = function(t) {
                if (t.length <= 1) return t;
                var e = t.slice(0);
                return e.sort(function(t, e) {
                    return t.scrollOffset() > e.scrollOffset() ? 1 : -1
                }), e
            };
            return this.addScene = function(e) {
                    if (r.type.Array(e)) e.forEach(function(t, e) {
                        f.addScene(t)
                    });
                    else if (e instanceof t.Scene) {
                        if (e.controller() !== f) e.addTo(f);
                        else if (d.indexOf(e) < 0) {
                            d.push(e), d = D(d), e.on("shift.controller_sort", function() {
                                d = D(d)
                            });
                            for (var i in p.globalSceneOptions) e[i] && e[i].call(e, p.globalSceneOptions[i]);
                            O(3, "adding Scene (now " + d.length + " total)")
                        }
                    } else O(1, "ERROR: invalid argument supplied for '.addScene()'");
                    return f
                }, this.removeScene = function(t) {
                    if (r.type.Array(t)) t.forEach(function(t, e) {
                        f.removeScene(t)
                    });
                    else {
                        var e = d.indexOf(t);
                        e > -1 && (t.off("shift.controller_sort"), d.splice(e, 1), O(3, "removing Scene (now " + d.length + " left)"), t.remove())
                    }
                    return f
                }, this.updateScene = function(e, i) {
                    return r.type.Array(e) ? e.forEach(function(t, e) {
                        f.updateScene(t, i)
                    }) : i ? e.update(!0) : m !== !0 && e instanceof t.Scene && (m = m || [], -1 == m.indexOf(e) && m.push(e), m = D(m), k()), f
                }, this.update = function(t) {
                    return A({
                        type: "resize"
                    }), t && C(), f
                }, this.scrollTo = function(i, n) {
                    if (r.type.Number(i)) P.call(p.container, i, n);
                    else if (i instanceof t.Scene) i.controller() === f ? f.scrollTo(i.scrollOffset(), n) : O(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", i);
                    else if (r.type.Function(i)) P = i;
                    else {
                        var s = r.get.elements(i)[0];
                        if (s) {
                            for (; s.parentNode.hasAttribute(e);) s = s.parentNode;
                            var o = p.vertical ? "top" : "left",
                                a = r.get.offset(p.container),
                                l = r.get.offset(s);
                            v || (a[o] -= f.scrollPos()), f.scrollTo(l[o] - a[o], n)
                        } else O(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", i)
                    }
                    return f
                }, this.scrollPos = function(t) {
                    return arguments.length ? (r.type.Function(t) ? b = t : O(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."), f) : b.call(f)
                }, this.info = function(t) {
                    var e = {
                        size: y,
                        vertical: p.vertical,
                        scrollPos: g,
                        scrollDirection: _,
                        container: p.container,
                        isDocument: v
                    };
                    return arguments.length ? void 0 !== e[t] ? e[t] : void O(1, 'ERROR: option "' + t + '" is not available') : e
                }, this.loglevel = function(t) {
                    return arguments.length ? (p.loglevel != t && (p.loglevel = t), f) : p.loglevel
                }, this.enabled = function(t) {
                    return arguments.length ? (w != t && (w = !!t, f.updateScene(d, !0)), f) : w
                }, this.destroy = function(t) {
                    window.clearTimeout(o);
                    for (var e = d.length; e--;) d[e].destroy(t);
                    return p.container.removeEventListener("resize", A), p.container.removeEventListener("scroll", A), r.cAF(s), O(3, "destroyed " + a + " (reset: " + (t ? "true" : "false") + ")"), null
                },
                x(), f
        };
        var i = {
            defaults: {
                container: window,
                vertical: !0,
                globalSceneOptions: {},
                loglevel: 2,
                refreshInterval: 100
            }
        };
        t.Controller.addOption = function(t, e) {
            i.defaults[t] = e
        }, t.Controller.extend = function(e) {
            var i = this;
            t.Controller = function() {
                return i.apply(this, arguments), this.$super = r.extend({}, this), e.apply(this, arguments) || this
            }, r.extend(t.Controller, i), t.Controller.prototype = i.prototype, t.Controller.prototype.constructor = t.Controller
        }, t.Scene = function(i) {
            var s, o, a = "ScrollMagic.Scene",
                l = "BEFORE",
                u = "DURING",
                h = "AFTER",
                c = n.defaults,
                f = this,
                p = r.extend({}, c, i),
                d = l,
                m = 0,
                g = {
                    start: 0,
                    end: 0
                },
                _ = 0,
                v = !0,
                y = function() {
                    for (var t in p) c.hasOwnProperty(t) || (x(2, 'WARNING: Unknown option "' + t + '"'), delete p[t]);
                    for (var e in c) R(e);
                    k()
                },
                w = {};
            this.on = function(t, e) {
                return r.type.Function(e) ? (t = t.trim().split(" "), t.forEach(function(t) {
                    var i = t.split("."),
                        n = i[0],
                        r = i[1];
                    "*" != n && (w[n] || (w[n] = []), w[n].push({
                        namespace: r || "",
                        callback: e
                    }))
                })) : x(1, "ERROR when calling '.on()': Supplied callback for '" + t + "' is not a valid function!"), f
            }, this.off = function(t, e) {
                return t ? (t = t.trim().split(" "), t.forEach(function(t, i) {
                    var n = t.split("."),
                        r = n[0],
                        s = n[1] || "",
                        o = "*" === r ? Object.keys(w) : [r];
                    o.forEach(function(t) {
                        for (var i = w[t] || [], n = i.length; n--;) {
                            var r = i[n];
                            !r || s !== r.namespace && "*" !== s || e && e != r.callback || i.splice(n, 1)
                        }
                        i.length || delete w[t]
                    })
                }), f) : (x(1, "ERROR: Invalid event name supplied."), f)
            }, this.trigger = function(e, i) {
                if (e) {
                    var n = e.trim().split("."),
                        r = n[0],
                        s = n[1],
                        o = w[r];
                    x(3, "event fired:", r, i ? "->" : "", i || ""), o && o.forEach(function(e, n) {
                        s && s !== e.namespace || e.callback.call(f, new t.Event(r, e.namespace, f, i))
                    })
                } else x(1, "ERROR: Invalid event name supplied.");
                return f
            }, f.on("change.internal", function(t) {
                "loglevel" !== t.what && "tweenChanges" !== t.what && ("triggerElement" === t.what ? S() : "reverse" === t.what && f.update())
            }).on("shift.internal", function(t) {
                T(), f.update()
            });
            var x = this._log = function(t, e) {
                p.loglevel >= t && (Array.prototype.splice.call(arguments, 1, 0, "(" + a + ") ->"), r.log.apply(window, arguments))
            };
            this.addTo = function(e) {
                return e instanceof t.Controller ? o != e && (o && o.removeScene(f), o = e, k(), b(!0), S(!0), T(), o.info("container").addEventListener("resize", P), e.addScene(f), f.trigger("add", {
                    controller: o
                }), x(3, "added " + a + " to controller"), f.update()) : x(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"), f
            }, this.enabled = function(t) {
                return arguments.length ? (v != t && (v = !!t, f.update(!0)), f) : v
            }, this.remove = function() {
                if (o) {
                    o.info("container").removeEventListener("resize", P);
                    var t = o;
                    o = void 0, t.removeScene(f), f.trigger("remove"), x(3, "removed " + a + " from controller")
                }
                return f
            }, this.destroy = function(t) {
                return f.trigger("destroy", {
                    reset: t
                }), f.remove(), f.off("*.*"), x(3, "destroyed " + a + " (reset: " + (t ? "true" : "false") + ")"), null
            }, this.update = function(t) {
                if (o)
                    if (t)
                        if (o.enabled() && v) {
                            var e, i = o.info("scrollPos");
                            e = p.duration > 0 ? (i - g.start) / (g.end - g.start) : i >= g.start ? 1 : 0, f.trigger("update", {
                                startPos: g.start,
                                endPos: g.end,
                                scrollPos: i
                            }), f.progress(e)
                        } else O && d === u && E(!0);
                else o.updateScene(f, !1);
                return f
            }, this.refresh = function() {
                return b(), S(), f
            }, this.progress = function(t) {
                if (arguments.length) {
                    var e = !1,
                        i = d,
                        n = o ? o.info("scrollDirection") : "PAUSED",
                        r = p.reverse || t >= m;
                    if (0 === p.duration ? (e = m != t, m = 1 > t && r ? 0 : 1, d = 0 === m ? l : u) : 0 > t && d !== l && r ? (m = 0, d = l, e = !0) : t >= 0 && 1 > t && r ? (m = t, d = u, e = !0) : t >= 1 && d !== h ? (m = 1, d = h, e = !0) : d !== u || r || E(), e) {
                        var s = {
                                progress: m,
                                state: d,
                                scrollDirection: n
                            },
                            a = d != i,
                            c = function(t) {
                                f.trigger(t, s)
                            };
                        a && i !== u && (c("enter"), c(i === l ? "start" : "end")), c("progress"), a && d !== u && (c(d === l ? "start" : "end"), c("leave"))
                    }
                    return f
                }
                return m
            };
            var T = function() {
                    g = {
                        start: _ + p.offset
                    }, o && p.triggerElement && (g.start -= o.info("size") * p.triggerHook), g.end = g.start + p.duration
                },
                b = function(t) {
                    if (s) {
                        var e = "duration";
                        A(e, s.call(f)) && !t && (f.trigger("change", {
                            what: e,
                            newval: p[e]
                        }), f.trigger("shift", {
                            reason: e
                        }))
                    }
                },
                S = function(t) {
                    var i = 0,
                        n = p.triggerElement;
                    if (o && n) {
                        for (var s = o.info(), a = r.get.offset(s.container), l = s.vertical ? "top" : "left"; n.parentNode.hasAttribute(e);) n = n.parentNode;
                        var u = r.get.offset(n);
                        s.isDocument || (a[l] -= o.scrollPos()), i = u[l] - a[l]
                    }
                    var h = i != _;
                    _ = i, h && !t && f.trigger("shift", {
                        reason: "triggerElementPosition"
                    })
                },
                P = function(t) {
                    p.triggerHook > 0 && f.trigger("shift", {
                        reason: "containerResize"
                    })
                },
                C = r.extend(n.validate, {
                    duration: function(t) {
                        if (r.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                            var e = parseFloat(t) / 100;
                            t = function() {
                                return o ? o.info("size") * e : 0
                            }
                        }
                        if (r.type.Function(t)) {
                            s = t;
                            try {
                                t = parseFloat(s())
                            } catch (i) {
                                t = -1
                            }
                        }
                        if (t = parseFloat(t), !r.type.Number(t) || 0 > t) throw s ? (s = void 0, ['Invalid return value of supplied function for option "duration":', t]) : ['Invalid value for option "duration":', t];
                        return t
                    }
                }),
                k = function(t) {
                    t = arguments.length ? [t] : Object.keys(C), t.forEach(function(t, e) {
                        var i;
                        if (C[t]) try {
                            i = C[t](p[t])
                        } catch (n) {
                            i = c[t];
                            var s = r.type.String(n) ? [n] : n;
                            r.type.Array(s) ? (s[0] = "ERROR: " + s[0], s.unshift(1), x.apply(this, s)) : x(1, "ERROR: Problem executing validation callback for option '" + t + "':", n.message)
                        } finally {
                            p[t] = i
                        }
                    })
                },
                A = function(t, e) {
                    var i = !1,
                        n = p[t];
                    return p[t] != e && (p[t] = e, k(t), i = n != p[t]), i
                },
                R = function(t) {
                    f[t] || (f[t] = function(e) {
                        return arguments.length ? ("duration" === t && (s = void 0), A(t, e) && (f.trigger("change", {
                            what: t,
                            newval: p[t]
                        }), n.shifts.indexOf(t) > -1 && f.trigger("shift", {
                            reason: t
                        })), f) : p[t]
                    })
                };
            this.controller = function() {
                return o
            }, this.state = function() {
                return d
            }, this.scrollOffset = function() {
                return g.start
            }, this.triggerPosition = function() {
                var t = p.offset;
                return o && (t += p.triggerElement ? _ : o.info("size") * f.triggerHook()), t
            };
            var O, D;
            f.on("shift.internal", function(t) {
                var e = "duration" === t.reason;
                (d === h && e || d === u && 0 === p.duration) && E(), e && N()
            }).on("progress.internal", function(t) {
                E()
            }).on("add.internal", function(t) {
                N()
            }).on("destroy.internal", function(t) {
                f.removePin(t.reset)
            });
            var E = function(t) {
                    if (O && o) {
                        var e = o.info(),
                            i = D.spacer.firstChild;
                        if (t || d !== u) {
                            var n = {
                                    position: D.inFlow ? "relative" : "absolute",
                                    top: 0,
                                    left: 0
                                },
                                s = r.css(i, "position") != n.position;
                            D.pushFollowers ? p.duration > 0 && (d === h && 0 === parseFloat(r.css(D.spacer, "padding-top")) ? s = !0 : d === l && 0 === parseFloat(r.css(D.spacer, "padding-bottom")) && (s = !0)) : n[e.vertical ? "top" : "left"] = p.duration * m, r.css(i, n), s && N()
                        } else {
                            "fixed" != r.css(i, "position") && (r.css(i, {
                                position: "fixed"
                            }), N());
                            var a = r.get.offset(D.spacer, !0),
                                c = p.reverse || 0 === p.duration ? e.scrollPos - g.start : Math.round(m * p.duration * 10) / 10;
                            a[e.vertical ? "top" : "left"] += c, r.css(D.spacer.firstChild, {
                                top: a.top,
                                left: a.left
                            })
                        }
                    }
                },
                N = function() {
                    if (O && o && D.inFlow) {
                        var t = d === u,
                            e = o.info("vertical"),
                            i = D.spacer.firstChild,
                            n = r.isMarginCollapseType(r.css(D.spacer, "display")),
                            s = {};
                        D.relSize.width || D.relSize.autoFullWidth ? t ? r.css(O, {
                            width: r.get.width(D.spacer)
                        }) : r.css(O, {
                            width: "100%"
                        }) : (s["min-width"] = r.get.width(e ? O : i, !0, !0), s.width = t ? s["min-width"] : "auto"), D.relSize.height ? t ? r.css(O, {
                            height: r.get.height(D.spacer) - (D.pushFollowers ? p.duration : 0)
                        }) : r.css(O, {
                            height: "100%"
                        }) : (s["min-height"] = r.get.height(e ? i : O, !0, !n), s.height = t ? s["min-height"] : "auto"), D.pushFollowers && (s["padding" + (e ? "Top" : "Left")] = p.duration * m, s["padding" + (e ? "Bottom" : "Right")] = p.duration * (1 - m)), r.css(D.spacer, s)
                    }
                },
                L = function() {
                    o && O && d === u && !o.info("isDocument") && E()
                },
                M = function() {
                    o && O && d === u && ((D.relSize.width || D.relSize.autoFullWidth) && r.get.width(window) != r.get.width(D.spacer.parentNode) || D.relSize.height && r.get.height(window) != r.get.height(D.spacer.parentNode)) && N()
                },
                F = function(t) {
                    o && O && d === u && !o.info("isDocument") && (t.preventDefault(), o._setScrollPos(o.info("scrollPos") - ((t.wheelDelta || t[o.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -t.detail)))
                };
            this.setPin = function(t, i) {
                var n = {
                    pushFollowers: !0,
                    spacerClass: "scrollmagic-pin-spacer"
                };
                if (i = r.extend({}, n, i), t = r.get.elements(t)[0], !t) return x(1, "ERROR calling method 'setPin()': Invalid pin element supplied."), f;
                if ("fixed" === r.css(t, "position")) return x(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."), f;
                if (O) {
                    if (O === t) return f;
                    f.removePin()
                }
                O = t;
                var s = O.parentNode.style.display,
                    o = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                O.parentNode.style.display = "none";
                var a = "absolute" != r.css(O, "position"),
                    l = r.css(O, o.concat(["display"])),
                    u = r.css(O, ["width", "height"]);
                O.parentNode.style.display = s, !a && i.pushFollowers && (x(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."), i.pushFollowers = !1), window.setTimeout(function() {
                    O && 0 === p.duration && i.pushFollowers && x(2, "WARNING: pushFollowers =", !0, "has no effect, when scene duration is 0.")
                }, 0);
                var h = O.parentNode.insertBefore(document.createElement("div"), O),
                    c = r.extend(l, {
                        position: a ? "relative" : "absolute",
                        boxSizing: "content-box",
                        mozBoxSizing: "content-box",
                        webkitBoxSizing: "content-box"
                    });
                if (a || r.extend(c, r.css(O, ["width", "height"])), r.css(h, c), h.setAttribute(e, ""), r.addClass(h, i.spacerClass), D = {
                        spacer: h,
                        relSize: {
                            width: "%" === u.width.slice(-1),
                            height: "%" === u.height.slice(-1),
                            autoFullWidth: "auto" === u.width && a && r.isMarginCollapseType(l.display)
                        },
                        pushFollowers: i.pushFollowers,
                        inFlow: a
                    }, !O.___origStyle) {
                    O.___origStyle = {};
                    var d = O.style,
                        m = o.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
                    m.forEach(function(t) {
                        O.___origStyle[t] = d[t] || ""
                    })
                }
                return D.relSize.width && r.css(h, {
                    width: u.width
                }), D.relSize.height && r.css(h, {
                    height: u.height
                }), h.appendChild(O), r.css(O, {
                    position: a ? "relative" : "absolute",
                    margin: "auto",
                    top: "auto",
                    left: "auto",
                    bottom: "auto",
                    right: "auto"
                }), (D.relSize.width || D.relSize.autoFullWidth) && r.css(O, {
                    boxSizing: "border-box",
                    mozBoxSizing: "border-box",
                    webkitBoxSizing: "border-box"
                }), window.addEventListener("scroll", L), window.addEventListener("resize", L), window.addEventListener("resize", M), O.addEventListener("mousewheel", F), O.addEventListener("DOMMouseScroll", F), x(3, "added pin"), E(), f
            }, this.removePin = function(t) {
                if (O) {
                    if (d === u && E(!0), t || !o) {
                        var i = D.spacer.firstChild;
                        if (i.hasAttribute(e)) {
                            var n = D.spacer.style,
                                s = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                            margins = {}, s.forEach(function(t) {
                                margins[t] = n[t] || ""
                            }), r.css(i, margins)
                        }
                        D.spacer.parentNode.insertBefore(i, D.spacer), D.spacer.parentNode.removeChild(D.spacer), O.parentNode.hasAttribute(e) || (r.css(O, O.___origStyle), delete O.___origStyle)
                    }
                    window.removeEventListener("scroll", L), window.removeEventListener("resize", L), window.removeEventListener("resize", M), O.removeEventListener("mousewheel", F), O.removeEventListener("DOMMouseScroll", F), O = void 0, x(3, "removed pin (reset: " + (t ? "true" : "false") + ")")
                }
                return f
            };
            var j, z = [];
            return f.on("destroy.internal", function(t) {
                f.removeClassToggle(t.reset)
            }), this.setClassToggle = function(t, e) {
                var i = r.get.elements(t);
                return 0 !== i.length && r.type.String(e) ? (z.length > 0 && f.removeClassToggle(), j = e, z = i, f.on("enter.internal_class leave.internal_class", function(t) {
                    var e = "enter" === t.type ? r.addClass : r.removeClass;
                    z.forEach(function(t, i) {
                        e(t, j)
                    })
                }), f) : (x(1, "ERROR calling method 'setClassToggle()': Invalid " + (0 === i.length ? "element" : "classes") + " supplied."), f)
            }, this.removeClassToggle = function(t) {
                return t && z.forEach(function(t, e) {
                    r.removeClass(t, j)
                }), f.off("start.internal_class end.internal_class"), j = void 0, z = [], f
            }, y(), f
        };
        var n = {
            defaults: {
                duration: 0,
                offset: 0,
                triggerElement: void 0,
                triggerHook: .5,
                reverse: !0,
                loglevel: 2
            },
            validate: {
                offset: function(t) {
                    if (t = parseFloat(t), !r.type.Number(t)) throw ['Invalid value for option "offset":', t];
                    return t
                },
                triggerElement: function(t) {
                    if (t = t || void 0) {
                        var e = r.get.elements(t)[0];
                        if (!e) throw ['Element defined in option "triggerElement" was not found:', t];
                        t = e
                    }
                    return t
                },
                triggerHook: function(t) {
                    var e = {
                        onCenter: .5,
                        onEnter: 1,
                        onLeave: 0
                    };
                    if (r.type.Number(t)) t = Math.max(0, Math.min(parseFloat(t), 1));
                    else {
                        if (!(t in e)) throw ['Invalid value for option "triggerHook": ', t];
                        t = e[t]
                    }
                    return t
                },
                reverse: function(t) {
                    return !!t
                },
                loglevel: function(t) {
                    if (t = parseInt(t), !r.type.Number(t) || 0 > t || t > 3) throw ['Invalid value for option "loglevel":', t];
                    return t
                }
            },
            shifts: ["duration", "offset", "triggerHook"]
        };
        t.Scene.addOption = function(e, i, r, s) {
            e in n.defaults ? t._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + e + "', because it already exists.") : (n.defaults[e] = i, n.validate[e] = r, s && n.shifts.push(e))
        }, t.Scene.extend = function(e) {
            var i = this;
            t.Scene = function() {
                return i.apply(this, arguments), this.$super = r.extend({}, this), e.apply(this, arguments) || this
            }, r.extend(t.Scene, i), t.Scene.prototype = i.prototype, t.Scene.prototype.constructor = t.Scene
        }, t.Event = function(t, e, i, n) {
            n = n || {};
            for (var r in n) this[r] = n[r];
            return this.type = t, this.target = this.currentTarget = i, this.namespace = e || "", this.timeStamp = this.timestamp = Date.now(), this
        };
        var r = t._util = function(t) {
            var e, i = {},
                n = function(t) {
                    return parseFloat(t) || 0
                },
                r = function(e) {
                    return e.currentStyle ? e.currentStyle : t.getComputedStyle(e)
                },
                s = function(e, i, s, o) {
                    if (i = i === document ? t : i, i === t) o = !1;
                    else if (!d.DomElement(i)) return 0;
                    e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
                    var a = (s ? i["offset" + e] || i["outer" + e] : i["client" + e] || i["inner" + e]) || 0;
                    if (s && o) {
                        var l = r(i);
                        a += "Height" === e ? n(l.marginTop) + n(l.marginBottom) : n(l.marginLeft) + n(l.marginRight)
                    }
                    return a
                },
                o = function(t) {
                    return t.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(t) {
                        return t[1].toUpperCase()
                    })
                };
            i.extend = function(t) {
                for (t = t || {}, e = 1; e < arguments.length; e++)
                    if (arguments[e])
                        for (var i in arguments[e]) arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]);
                return t
            }, i.isMarginCollapseType = function(t) {
                return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(t) > -1
            };
            var a = 0,
                l = ["ms", "moz", "webkit", "o"],
                u = t.requestAnimationFrame,
                h = t.cancelAnimationFrame;
            for (e = 0; !u && e < l.length; ++e) u = t[l[e] + "RequestAnimationFrame"], h = t[l[e] + "CancelAnimationFrame"] || t[l[e] + "CancelRequestAnimationFrame"];
            u || (u = function(e) {
                var i = (new Date).getTime(),
                    n = Math.max(0, 16 - (i - a)),
                    r = t.setTimeout(function() {
                        e(i + n)
                    }, n);
                return a = i + n, r
            }), h || (h = function(e) {
                t.clearTimeout(e)
            }), i.rAF = u.bind(t), i.cAF = h.bind(t);
            var c = ["error", "warn", "log"],
                f = t.console || {};
            for (f.log = f.log || function() {}, e = 0; e < c.length; e++) {
                var p = c[e];
                f[p] || (f[p] = f.log)
            }
            i.log = function(t) {
                (t > c.length || 0 >= t) && (t = c.length);
                var e = new Date,
                    i = ("0" + e.getHours()).slice(-2) + ":" + ("0" + e.getMinutes()).slice(-2) + ":" + ("0" + e.getSeconds()).slice(-2) + ":" + ("00" + e.getMilliseconds()).slice(-3),
                    n = c[t - 1],
                    r = Array.prototype.splice.call(arguments, 1),
                    s = Function.prototype.bind.call(f[n], f);
                r.unshift(i), s.apply(f, r)
            };
            var d = i.type = function(t) {
                return Object.prototype.toString.call(t).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
            };
            d.String = function(t) {
                return "string" === d(t)
            }, d.Function = function(t) {
                return "function" === d(t)
            }, d.Array = function(t) {
                return Array.isArray(t)
            }, d.Number = function(t) {
                return !d.Array(t) && t - parseFloat(t) + 1 >= 0
            }, d.DomElement = function(t) {
                return "object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName
            };
            var m = i.get = {};
            return m.elements = function(e) {
                var i = [];
                if (d.String(e)) try {
                    e = document.querySelectorAll(e)
                } catch (n) {
                    return i
                }
                if ("nodelist" === d(e) || d.Array(e))
                    for (var r = 0, s = i.length = e.length; s > r; r++) {
                        var o = e[r];
                        i[r] = d.DomElement(o) ? o : m.elements(o)
                    } else(d.DomElement(e) || e === document || e === t) && (i = [e]);
                return i
            }, m.scrollTop = function(e) {
                return e && "number" == typeof e.scrollTop ? e.scrollTop : t.pageYOffset || 0
            }, m.scrollLeft = function(e) {
                return e && "number" == typeof e.scrollLeft ? e.scrollLeft : t.pageXOffset || 0
            }, m.width = function(t, e, i) {
                return s("width", t, e, i)
            }, m.height = function(t, e, i) {
                return s("height", t, e, i)
            }, m.offset = function(t, e) {
                var i = {
                    top: 0,
                    left: 0
                };
                if (t && t.getBoundingClientRect) {
                    var n = t.getBoundingClientRect();
                    i.top = n.top, i.left = n.left, e || (i.top += m.scrollTop(), i.left += m.scrollLeft())
                }
                return i
            }, i.addClass = function(t, e) {
                e && (t.classList ? t.classList.add(e) : t.className += " " + e)
            }, i.removeClass = function(t, e) {
                e && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "))
            }, i.css = function(t, e) {
                if (d.String(e)) return r(t)[o(e)];
                if (d.Array(e)) {
                    var i = {},
                        n = r(t);
                    return e.forEach(function(t, e) {
                        i[t] = n[o(t)]
                    }), i
                }
                for (var s in e) {
                    var a = e[s];
                    a == parseFloat(a) && (a += "px"), t.style[o(s)] = a
                }
            }, i
        }(window || {});
        return t.Scene.prototype.addIndicators = function() {
            return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this
        }, t.Scene.prototype.removeIndicators = function() {
            return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this
        }, t.Scene.prototype.setTween = function() {
            return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this
        }, t.Scene.prototype.removeTween = function() {
            return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this
        }, t.Scene.prototype.setVelocity = function() {
            return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this
        }, t.Scene.prototype.removeVelocity = function() {
            return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this
        }, t
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], e) : "object" == typeof exports ? (require("gsap"), e(require("scrollmagic"), TweenMax, TimelineMax)) : e(t.ScrollMagic || t.jQuery && t.jQuery.ScrollMagic, t.TweenMax || t.TweenLite, t.TimelineMax || t.TimelineLite)
    }(this, function(t, e, i) {
        "use strict";
        var n = "animation.gsap",
            r = window.console || {},
            s = Function.prototype.bind.call(r.error || r.log || function() {}, r);
        t || s("(" + n + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."), e || s("(" + n + ") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs."), t.Scene.addOption("tweenChanges", !1, function(t) {
            return !!t
        }), t.Scene.extend(function() {
            var t, r = this,
                s = function() {
                    r._log && (Array.prototype.splice.call(arguments, 1, 0, "(" + n + ")", "->"), r._log.apply(this, arguments))
                };
            r.on("progress.plugin_gsap", function() {
                o()
            }), r.on("destroy.plugin_gsap", function(t) {
                r.removeTween(t.reset)
            });
            var o = function() {
                if (t) {
                    var e = r.progress(),
                        i = r.state();
                    t.repeat && -1 === t.repeat() ? "DURING" === i && t.paused() ? t.play() : "DURING" === i || t.paused() || t.pause() : e != t.progress() && (0 === r.duration() ? e > 0 ? t.play() : t.reverse() : r.tweenChanges() && t.tweenTo ? t.tweenTo(e * t.duration()) : t.progress(e).pause())
                }
            };
            r.setTween = function(n, a, l) {
                var u;
                arguments.length > 1 && (arguments.length < 3 && (l = a, a = 1), n = e.to(n, a, l));
                try {
                    u = i ? new i({
                        smoothChildTiming: !0
                    }).add(n) : n, u.pause()
                } catch (h) {
                    return s(1, "ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject"), r
                }
                if (t && r.removeTween(), t = u, n.repeat && -1 === n.repeat() && (t.repeat(-1), t.yoyo(n.yoyo())), r.tweenChanges() && !t.tweenTo && s(2, "WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic."), t && r.controller() && r.triggerElement() && r.loglevel() >= 2) {
                    var c = e.getTweensOf(r.triggerElement()),
                        f = r.controller().info("vertical");
                    c.forEach(function(t, e) {
                        var i = t.vars.css || t.vars,
                            n = f ? void 0 !== i.top || void 0 !== i.bottom : void 0 !== i.left || void 0 !== i.right;
                        return n ? (s(2, "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"), !1) : void 0
                    })
                }
                if (parseFloat(TweenLite.version) >= 1.14)
                    for (var p, d, m = t.getChildren ? t.getChildren(!0, !0, !1) : [t], g = function() {
                            s(2, "WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another")
                        }, _ = 0; _ < m.length; _++) p = m[_], d !== g && (d = p.vars.onOverwrite, p.vars.onOverwrite = function() {
                        d && d.apply(this, arguments), g.apply(this, arguments)
                    });
                return s(3, "added tween"), o(), r
            }, r.removeTween = function(e) {
                return t && (e && t.progress(0).pause(), t.kill(), t = void 0, s(3, "removed tween (reset: " + (e ? "true" : "false") + ")")), r
            }
        })
    }), ! function() {
        "use strict";

        function t(n) {
            if (!n) throw new Error("No options passed to Waypoint constructor");
            if (!n.element) throw new Error("No element option passed to Waypoint constructor");
            if (!n.handler) throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, n), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = n.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
        }
        var e = 0,
            i = {};
        t.prototype.queueTrigger = function(t) {
            this.group.queueTrigger(this, t)
        }, t.prototype.trigger = function(t) {
            this.enabled && this.callback && this.callback.apply(this, t)
        }, t.prototype.destroy = function() {
            this.context.remove(this), this.group.remove(this), delete i[this.key]
        }, t.prototype.disable = function() {
            return this.enabled = !1, this
        }, t.prototype.enable = function() {
            return this.context.refresh(), this.enabled = !0, this
        }, t.prototype.next = function() {
            return this.group.next(this)
        }, t.prototype.previous = function() {
            return this.group.previous(this)
        }, t.invokeAll = function(t) {
            var e = [];
            for (var n in i) e.push(i[n]);
            for (var r = 0, s = e.length; s > r; r++) e[r][t]()
        }, t.destroyAll = function() {
            t.invokeAll("destroy")
        }, t.disableAll = function() {
            t.invokeAll("disable")
        }, t.enableAll = function() {
            t.invokeAll("enable")
        }, t.refreshAll = function() {
            t.Context.refreshAll()
        }, t.viewportHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight
        }, t.viewportWidth = function() {
            return document.documentElement.clientWidth
        }, t.adapters = [], t.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        }, t.offsetAliases = {
            "bottom-in-view": function() {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function() {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        }, window.Waypoint = t
    }(),
    function() {
        "use strict";

        function t(t) {
            window.setTimeout(t, 1e3 / 60)
        }

        function e(t) {
            this.element = t, this.Adapter = r.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            }, this.waypoints = {
                vertical: {},
                horizontal: {}
            }, t.waypointContextKey = this.key, n[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
        }
        var i = 0,
            n = {},
            r = window.Waypoint,
            s = window.onload;
        e.prototype.add = function(t) {
            var e = t.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[e][t.key] = t, this.refresh()
        }, e.prototype.checkEmpty = function() {
            var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                e = this.Adapter.isEmptyObject(this.waypoints.vertical);
            t && e && (this.adapter.off(".waypoints"), delete n[this.key])
        }, e.prototype.createThrottledResizeHandler = function() {
            function t() {
                e.handleResize(), e.didResize = !1
            }
            var e = this;
            this.adapter.on("resize.waypoints", function() {
                e.didResize || (e.didResize = !0, r.requestAnimationFrame(t))
            })
        }, e.prototype.createThrottledScrollHandler = function() {
            function t() {
                e.handleScroll(), e.didScroll = !1
            }
            var e = this;
            this.adapter.on("scroll.waypoints", function() {
                (!e.didScroll || r.isTouch) && (e.didScroll = !0, r.requestAnimationFrame(t))
            })
        }, e.prototype.handleResize = function() {
            r.Context.refreshAll()
        }, e.prototype.handleScroll = function() {
            var t = {},
                e = {
                    horizontal: {
                        newScroll: this.adapter.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.adapter.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
            for (var i in e) {
                var n = e[i],
                    r = n.newScroll > n.oldScroll,
                    s = r ? n.forward : n.backward;
                for (var o in this.waypoints[i]) {
                    var a = this.waypoints[i][o],
                        l = n.oldScroll < a.triggerPoint,
                        u = n.newScroll >= a.triggerPoint,
                        h = l && u,
                        c = !l && !u;
                    (h || c) && (a.queueTrigger(s), t[a.group.id] = a.group)
                }
            }
            for (var f in t) t[f].flushTriggers();
            this.oldScroll = {
                x: e.horizontal.newScroll,
                y: e.vertical.newScroll
            }
        }, e.prototype.innerHeight = function() {
            return this.element == this.element.window ? r.viewportHeight() : this.adapter.innerHeight()
        }, e.prototype.remove = function(t) {
            delete this.waypoints[t.axis][t.key], this.checkEmpty()
        }, e.prototype.innerWidth = function() {
            return this.element == this.element.window ? r.viewportWidth() : this.adapter.innerWidth()
        }, e.prototype.destroy = function() {
            var t = [];
            for (var e in this.waypoints)
                for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
            for (var n = 0, r = t.length; r > n; n++) t[n].destroy()
        }, e.prototype.refresh = function() {
            var t, e = this.element == this.element.window,
                i = e ? void 0 : this.adapter.offset(),
                n = {};
            this.handleScroll(), t = {
                horizontal: {
                    contextOffset: e ? 0 : i.left,
                    contextScroll: e ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: e ? 0 : i.top,
                    contextScroll: e ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            };
            for (var s in t) {
                var o = t[s];
                for (var a in this.waypoints[s]) {
                    var l, u, h, c, f, p = this.waypoints[s][a],
                        d = p.options.offset,
                        m = p.triggerPoint,
                        g = 0,
                        _ = null == m;
                    p.element !== p.element.window && (g = p.adapter.offset()[o.offsetProp]), "function" == typeof d ? d = d.apply(p) : "string" == typeof d && (d = parseFloat(d), p.options.offset.indexOf("%") > -1 && (d = Math.ceil(o.contextDimension * d / 100))), l = o.contextScroll - o.contextOffset, p.triggerPoint = g + l - d, u = m < o.oldScroll, h = p.triggerPoint >= o.oldScroll, c = u && h, f = !u && !h, !_ && c ? (p.queueTrigger(o.backward), n[p.group.id] = p.group) : !_ && f ? (p.queueTrigger(o.forward), n[p.group.id] = p.group) : _ && o.oldScroll >= p.triggerPoint && (p.queueTrigger(o.forward), n[p.group.id] = p.group)
                }
            }
            return r.requestAnimationFrame(function() {
                for (var t in n) n[t].flushTriggers()
            }), this
        }, e.findOrCreateByElement = function(t) {
            return e.findByElement(t) || new e(t)
        }, e.refreshAll = function() {
            for (var t in n) n[t].refresh()
        }, e.findByElement = function(t) {
            return n[t.waypointContextKey]
        }, window.onload = function() {
            s && s(), e.refreshAll()
        }, r.requestAnimationFrame = function(e) {
            var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
            i.call(window, e)
        }, r.Context = e
    }(),
    function() {
        "use strict";

        function t(t, e) {
            return t.triggerPoint - e.triggerPoint
        }

        function e(t, e) {
            return e.triggerPoint - t.triggerPoint
        }

        function i(t) {
            this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), n[this.axis][this.name] = this
        }
        var n = {
                vertical: {},
                horizontal: {}
            },
            r = window.Waypoint;
        i.prototype.add = function(t) {
            this.waypoints.push(t)
        }, i.prototype.clearTriggerQueues = function() {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        }, i.prototype.flushTriggers = function() {
            for (var i in this.triggerQueues) {
                var n = this.triggerQueues[i],
                    r = "up" === i || "left" === i;
                n.sort(r ? e : t);
                for (var s = 0, o = n.length; o > s; s += 1) {
                    var a = n[s];
                    (a.options.continuous || s === n.length - 1) && a.trigger([i])
                }
            }
            this.clearTriggerQueues()
        }, i.prototype.next = function(e) {
            this.waypoints.sort(t);
            var i = r.Adapter.inArray(e, this.waypoints),
                n = i === this.waypoints.length - 1;
            return n ? null : this.waypoints[i + 1]
        }, i.prototype.previous = function(e) {
            this.waypoints.sort(t);
            var i = r.Adapter.inArray(e, this.waypoints);
            return i ? this.waypoints[i - 1] : null
        }, i.prototype.queueTrigger = function(t, e) {
            this.triggerQueues[e].push(t)
        }, i.prototype.remove = function(t) {
            var e = r.Adapter.inArray(t, this.waypoints);
            e > -1 && this.waypoints.splice(e, 1)
        }, i.prototype.first = function() {
            return this.waypoints[0]
        }, i.prototype.last = function() {
            return this.waypoints[this.waypoints.length - 1]
        }, i.findOrCreate = function(t) {
            return n[t.axis][t.name] || new i(t)
        }, r.Group = i
    }(),
    function() {
        "use strict";

        function t(t) {
            this.$element = e(t)
        }
        var e = window.jQuery,
            i = window.Waypoint;
        e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) {
            t.prototype[i] = function() {
                var t = Array.prototype.slice.call(arguments);
                return this.$element[i].apply(this.$element, t)
            }
        }), e.each(["extend", "inArray", "isEmptyObject"], function(i, n) {
            t[n] = e[n]
        }), i.adapters.push({
            name: "jquery",
            Adapter: t
        }), i.Adapter = t
    }(),
    function() {
        "use strict";

        function t(t) {
            return function() {
                var i = [],
                    n = arguments[0];
                return t.isFunction(arguments[0]) && (n = t.extend({}, arguments[1]), n.handler = arguments[0]), this.each(function() {
                    var r = t.extend({}, n, {
                        element: this
                    });
                    "string" == typeof r.context && (r.context = t(this).closest(r.context)[0]), i.push(new e(r))
                }), i
            }
        }
        var e = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
    }();
