!function () {
  var t = {
    1530: function (t, n, e) {
      "use strict";
      var r = e(8710).charAt;
      t.exports = function (t, n, e) {
        return n + (e ? r(t, n).length : 1);
      };
    }, 9670: function (t, n, e) {
      var r = e(111);
      t.exports = function (t) {
        if (!r(t)) throw TypeError(String(t) + " is not an object");
        return t;
      };
    }, 1318: function (t, n, e) {
      var r = e(5656), o = e(7466), i = e(1400), u = function (t) {
        return function (n, e, u) {
          var c, f = r(n), a = o(f.length), s = i(u, a);
          if (t && e != e) {
            for (; a > s;) if ((c = f[s++]) != c) return !0;
          } else for (; a > s; s++) if ((t || s in f) && f[s] === e) return t || s || 0;
          return !t && -1;
        };
      };
      t.exports = {includes: u(!0), indexOf: u(!1)};
    }, 9341: function (t, n, e) {
      "use strict";
      var r = e(7293);
      t.exports = function (t, n) {
        var e = [][t];
        return !!e && r((function () {
          e.call(null, n || function () {
            throw 1;
          }, 1);
        }));
      };
    }, 4326: function (t) {
      var n = {}.toString;
      t.exports = function (t) {
        return n.call(t).slice(8, -1);
      };
    }, 9920: function (t, n, e) {
      var r = e(6656), o = e(3887), i = e(1236), u = e(3070);
      t.exports = function (t, n) {
        for (var e = o(n), c = u.f, f = i.f, a = 0; a < e.length; a++) {
          var s = e[a];
          r(t, s) || c(t, s, f(n, s));
        }
      };
    }, 8880: function (t, n, e) {
      var r = e(9781), o = e(3070), i = e(9114);
      t.exports = r ? function (t, n, e) {
        return o.f(t, n, i(1, e));
      } : function (t, n, e) {
        return t[n] = e, t;
      };
    }, 9114: function (t) {
      t.exports = function (t, n) {
        return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n};
      };
    }, 9781: function (t, n, e) {
      var r = e(7293);
      t.exports = !r((function () {
        return 7 != Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          }
        })[1];
      }));
    }, 317: function (t, n, e) {
      var r = e(7854), o = e(111), i = r.document, u = o(i) && o(i.createElement);
      t.exports = function (t) {
        return u ? i.createElement(t) : {};
      };
    }, 748: function (t) {
      t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    }, 2109: function (t, n, e) {
      var r = e(7854), o = e(1236).f, i = e(8880), u = e(1320), c = e(3505), f = e(9920), a = e(4705);
      t.exports = function (t, n) {
        var e, s, l, p, v, d = t.target, y = t.global, x = t.stat;
        if (e = y ? r : x ? r[d] || c(d, {}) : (r[d] || {}).prototype) for (s in n) {
          if (p = n[s], l = t.noTargetGet ? (v = o(e, s)) && v.value : e[s], !a(y ? s : d + (x ? "." : "#") + s, t.forced) && void 0 !== l) {
            if (typeof p == typeof l) continue;
            f(p, l);
          }
          (t.sham || l && l.sham) && i(p, "sham", !0), u(e, s, p, t);
        }
      };
    }, 7293: function (t) {
      t.exports = function (t) {
        try {
          return !!t();
        } catch (t) {
          return !0;
        }
      };
    }, 7007: function (t, n, e) {
      "use strict";
      e(4916);
      var r = e(1320), o = e(7293), i = e(5112), u = e(2261), c = e(8880), f = i("species"), a = !o((function () {
          var t = /./;
          return t.exec = function () {
            var t = [];
            return t.groups = {a: "7"}, t;
          }, "7" !== "".replace(t, "$<a>");
        })), s = "$0" === "a".replace(/./, "$0"), l = i("replace"), p = !!/./[l] && "" === /./[l]("a", "$0"),
        v = !o((function () {
          var t = /(?:)/, n = t.exec;
          t.exec = function () {
            return n.apply(this, arguments);
          };
          var e = "ab".split(t);
          return 2 !== e.length || "a" !== e[0] || "b" !== e[1];
        }));
      t.exports = function (t, n, e, l) {
        var d = i(t), y = !o((function () {
          var n = {};
          return n[d] = function () {
            return 7;
          }, 7 != ""[t](n);
        })), x = y && !o((function () {
          var n = !1, e = /a/;
          return "split" === t && ((e = {}).constructor = {}, e.constructor[f] = function () {
            return e;
          }, e.flags = "", e[d] = /./[d]), e.exec = function () {
            return n = !0, null;
          }, e[d](""), !n;
        }));
        if (!y || !x || "replace" === t && (!a || !s || p) || "split" === t && !v) {
          var h = /./[d], g = e(d, ""[t], (function (t, n, e, r, o) {
            return n.exec === u ? y && !o ? {done: !0, value: h.call(n, e, r)} : {
              done: !0,
              value: t.call(e, n, r)
            } : {done: !1};
          }), {REPLACE_KEEPS_$0: s, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: p}), b = g[0], m = g[1];
          r(String.prototype, t, b), r(RegExp.prototype, d, 2 == n ? function (t, n) {
            return m.call(t, this, n);
          } : function (t) {
            return m.call(t, this);
          });
        }
        l && c(RegExp.prototype[d], "sham", !0);
      };
    }, 5005: function (t, n, e) {
      var r = e(857), o = e(7854), i = function (t) {
        return "function" == typeof t ? t : void 0;
      };
      t.exports = function (t, n) {
        return arguments.length < 2 ? i(r[t]) || i(o[t]) : r[t] && r[t][n] || o[t] && o[t][n];
      };
    }, 7854: function (t, n, e) {
      var r = function (t) {
        return t && t.Math == Math && t;
      };
      t.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof e.g && e.g) || function () {
        return this;
      }() || Function("return this")();
    }, 6656: function (t) {
      var n = {}.hasOwnProperty;
      t.exports = function (t, e) {
        return n.call(t, e);
      };
    }, 3501: function (t) {
      t.exports = {};
    }, 4664: function (t, n, e) {
      var r = e(9781), o = e(7293), i = e(317);
      t.exports = !r && !o((function () {
        return 7 != Object.defineProperty(i("div"), "a", {
          get: function () {
            return 7;
          }
        }).a;
      }));
    }, 8361: function (t, n, e) {
      var r = e(7293), o = e(4326), i = "".split;
      t.exports = r((function () {
        return !Object("z").propertyIsEnumerable(0);
      })) ? function (t) {
        return "String" == o(t) ? i.call(t, "") : Object(t);
      } : Object;
    }, 2788: function (t, n, e) {
      var r = e(5465), o = Function.toString;
      "function" != typeof r.inspectSource && (r.inspectSource = function (t) {
        return o.call(t);
      }), t.exports = r.inspectSource;
    }, 9909: function (t, n, e) {
      var r, o, i, u = e(8536), c = e(7854), f = e(111), a = e(8880), s = e(6656), l = e(5465), p = e(6200),
        v = e(3501), d = c.WeakMap;
      if (u) {
        var y = l.state || (l.state = new d), x = y.get, h = y.has, g = y.set;
        r = function (t, n) {
          return n.facade = t, g.call(y, t, n), n;
        }, o = function (t) {
          return x.call(y, t) || {};
        }, i = function (t) {
          return h.call(y, t);
        };
      } else {
        var b = p("state");
        v[b] = !0, r = function (t, n) {
          return n.facade = t, a(t, b, n), n;
        }, o = function (t) {
          return s(t, b) ? t[b] : {};
        }, i = function (t) {
          return s(t, b);
        };
      }
      t.exports = {
        set: r, get: o, has: i, enforce: function (t) {
          return i(t) ? o(t) : r(t, {});
        }, getterFor: function (t) {
          return function (n) {
            var e;
            if (!f(n) || (e = o(n)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
            return e;
          };
        }
      };
    }, 4705: function (t, n, e) {
      var r = e(7293), o = /#|\.prototype\./, i = function (t, n) {
        var e = c[u(t)];
        return e == a || e != f && ("function" == typeof n ? r(n) : !!n);
      }, u = i.normalize = function (t) {
        return String(t).replace(o, ".").toLowerCase();
      }, c = i.data = {}, f = i.NATIVE = "N", a = i.POLYFILL = "P";
      t.exports = i;
    }, 111: function (t) {
      t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t;
      };
    }, 1913: function (t) {
      t.exports = !1;
    }, 133: function (t, n, e) {
      var r = e(7293);
      t.exports = !!Object.getOwnPropertySymbols && !r((function () {
        return !String(Symbol());
      }));
    }, 8536: function (t, n, e) {
      var r = e(7854), o = e(2788), i = r.WeakMap;
      t.exports = "function" == typeof i && /native code/.test(o(i));
    }, 3070: function (t, n, e) {
      var r = e(9781), o = e(4664), i = e(9670), u = e(7593), c = Object.defineProperty;
      n.f = r ? c : function (t, n, e) {
        if (i(t), n = u(n, !0), i(e), o) try {
          return c(t, n, e);
        } catch (t) {
        }
        if ("get" in e || "set" in e) throw TypeError("Accessors not supported");
        return "value" in e && (t[n] = e.value), t;
      };
    }, 1236: function (t, n, e) {
      var r = e(9781), o = e(5296), i = e(9114), u = e(5656), c = e(7593), f = e(6656), a = e(4664),
        s = Object.getOwnPropertyDescriptor;
      n.f = r ? s : function (t, n) {
        if (t = u(t), n = c(n, !0), a) try {
          return s(t, n);
        } catch (t) {
        }
        if (f(t, n)) return i(!o.f.call(t, n), t[n]);
      };
    }, 8006: function (t, n, e) {
      var r = e(6324), o = e(748).concat("length", "prototype");
      n.f = Object.getOwnPropertyNames || function (t) {
        return r(t, o);
      };
    }, 5181: function (t, n) {
      n.f = Object.getOwnPropertySymbols;
    }, 6324: function (t, n, e) {
      var r = e(6656), o = e(5656), i = e(1318).indexOf, u = e(3501);
      t.exports = function (t, n) {
        var e, c = o(t), f = 0, a = [];
        for (e in c) !r(u, e) && r(c, e) && a.push(e);
        for (; n.length > f;) r(c, e = n[f++]) && (~i(a, e) || a.push(e));
        return a;
      };
    }, 5296: function (t, n) {
      "use strict";
      var e = {}.propertyIsEnumerable, r = Object.getOwnPropertyDescriptor, o = r && !e.call({1: 2}, 1);
      n.f = o ? function (t) {
        var n = r(this, t);
        return !!n && n.enumerable;
      } : e;
    }, 3887: function (t, n, e) {
      var r = e(5005), o = e(8006), i = e(5181), u = e(9670);
      t.exports = r("Reflect", "ownKeys") || function (t) {
        var n = o.f(u(t)), e = i.f;
        return e ? n.concat(e(t)) : n;
      };
    }, 857: function (t, n, e) {
      var r = e(7854);
      t.exports = r;
    }, 1320: function (t, n, e) {
      var r = e(7854), o = e(8880), i = e(6656), u = e(3505), c = e(2788), f = e(9909), a = f.get, s = f.enforce,
        l = String(String).split("String");
      (t.exports = function (t, n, e, c) {
        var f, a = !!c && !!c.unsafe, p = !!c && !!c.enumerable, v = !!c && !!c.noTargetGet;
        "function" == typeof e && ("string" != typeof n || i(e, "name") || o(e, "name", n), (f = s(e)).source || (f.source = l.join("string" == typeof n ? n : ""))), t !== r ? (a ? !v && t[n] && (p = !0) : delete t[n], p ? t[n] = e : o(t, n, e)) : p ? t[n] = e : u(n, e);
      })(Function.prototype, "toString", (function () {
        return "function" == typeof this && a(this).source || c(this);
      }));
    }, 7651: function (t, n, e) {
      var r = e(4326), o = e(2261);
      t.exports = function (t, n) {
        var e = t.exec;
        if ("function" == typeof e) {
          var i = e.call(t, n);
          if ("object" != typeof i) throw TypeError("RegExp exec method returned something other than an Object or null");
          return i;
        }
        if ("RegExp" !== r(t)) throw TypeError("RegExp#exec called on incompatible receiver");
        return o.call(t, n);
      };
    }, 2261: function (t, n, e) {
      "use strict";
      var r, o, i = e(7066), u = e(2999), c = RegExp.prototype.exec, f = String.prototype.replace, a = c,
        s = (r = /a/, o = /b*/g, c.call(r, "a"), c.call(o, "a"), 0 !== r.lastIndex || 0 !== o.lastIndex),
        l = u.UNSUPPORTED_Y || u.BROKEN_CARET, p = void 0 !== /()??/.exec("")[1];
      (s || p || l) && (a = function (t) {
        var n, e, r, o, u = this, a = l && u.sticky, v = i.call(u), d = u.source, y = 0, x = t;
        return a && (-1 === (v = v.replace("y", "")).indexOf("g") && (v += "g"), x = String(t).slice(u.lastIndex), u.lastIndex > 0 && (!u.multiline || u.multiline && "\n" !== t[u.lastIndex - 1]) && (d = "(?: " + d + ")", x = " " + x, y++), e = new RegExp("^(?:" + d + ")", v)), p && (e = new RegExp("^" + d + "$(?!\\s)", v)), s && (n = u.lastIndex), r = c.call(a ? e : u, x), a ? r ? (r.input = r.input.slice(y), r[0] = r[0].slice(y), r.index = u.lastIndex, u.lastIndex += r[0].length) : u.lastIndex = 0 : s && r && (u.lastIndex = u.global ? r.index + r[0].length : n), p && r && r.length > 1 && f.call(r[0], e, (function () {
          for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0);
        })), r;
      }), t.exports = a;
    }, 7066: function (t, n, e) {
      "use strict";
      var r = e(9670);
      t.exports = function () {
        var t = r(this), n = "";
        return t.global && (n += "g"), t.ignoreCase && (n += "i"), t.multiline && (n += "m"), t.dotAll && (n += "s"), t.unicode && (n += "u"), t.sticky && (n += "y"), n;
      };
    }, 2999: function (t, n, e) {
      "use strict";
      var r = e(7293);

      function o(t, n) {
        return RegExp(t, n);
      }

      n.UNSUPPORTED_Y = r((function () {
        var t = o("a", "y");
        return t.lastIndex = 2, null != t.exec("abcd");
      })), n.BROKEN_CARET = r((function () {
        var t = o("^r", "gy");
        return t.lastIndex = 2, null != t.exec("str");
      }));
    }, 4488: function (t) {
      t.exports = function (t) {
        if (null == t) throw TypeError("Can't call method on " + t);
        return t;
      };
    }, 3505: function (t, n, e) {
      var r = e(7854), o = e(8880);
      t.exports = function (t, n) {
        try {
          o(r, t, n);
        } catch (e) {
          r[t] = n;
        }
        return n;
      };
    }, 6200: function (t, n, e) {
      var r = e(2309), o = e(9711), i = r("keys");
      t.exports = function (t) {
        return i[t] || (i[t] = o(t));
      };
    }, 5465: function (t, n, e) {
      var r = e(7854), o = e(3505), i = "__core-js_shared__", u = r[i] || o(i, {});
      t.exports = u;
    }, 2309: function (t, n, e) {
      var r = e(1913), o = e(5465);
      (t.exports = function (t, n) {
        return o[t] || (o[t] = void 0 !== n ? n : {});
      })("versions", []).push({
        version: "3.9.0",
        mode: r ? "pure" : "global",
        copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
      });
    }, 8710: function (t, n, e) {
      var r = e(9958), o = e(4488), i = function (t) {
        return function (n, e) {
          var i, u, c = String(o(n)), f = r(e), a = c.length;
          return f < 0 || f >= a ? t ? "" : void 0 : (i = c.charCodeAt(f)) < 55296 || i > 56319 || f + 1 === a || (u = c.charCodeAt(f + 1)) < 56320 || u > 57343 ? t ? c.charAt(f) : i : t ? c.slice(f, f + 2) : u - 56320 + (i - 55296 << 10) + 65536;
        };
      };
      t.exports = {codeAt: i(!1), charAt: i(!0)};
    }, 1400: function (t, n, e) {
      var r = e(9958), o = Math.max, i = Math.min;
      t.exports = function (t, n) {
        var e = r(t);
        return e < 0 ? o(e + n, 0) : i(e, n);
      };
    }, 5656: function (t, n, e) {
      var r = e(8361), o = e(4488);
      t.exports = function (t) {
        return r(o(t));
      };
    }, 9958: function (t) {
      var n = Math.ceil, e = Math.floor;
      t.exports = function (t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? e : n)(t);
      };
    }, 7466: function (t, n, e) {
      var r = e(9958), o = Math.min;
      t.exports = function (t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0;
      };
    }, 7593: function (t, n, e) {
      var r = e(111);
      t.exports = function (t, n) {
        if (!r(t)) return t;
        var e, o;
        if (n && "function" == typeof (e = t.toString) && !r(o = e.call(t))) return o;
        if ("function" == typeof (e = t.valueOf) && !r(o = e.call(t))) return o;
        if (!n && "function" == typeof (e = t.toString) && !r(o = e.call(t))) return o;
        throw TypeError("Can't convert object to primitive value");
      };
    }, 9711: function (t) {
      var n = 0, e = Math.random();
      t.exports = function (t) {
        return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + e).toString(36);
      };
    }, 3307: function (t, n, e) {
      var r = e(133);
      t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    }, 5112: function (t, n, e) {
      var r = e(7854), o = e(2309), i = e(6656), u = e(9711), c = e(133), f = e(3307), a = o("wks"), s = r.Symbol,
        l = f ? s : s && s.withoutSetter || u;
      t.exports = function (t) {
        return i(a, t) || (c && i(s, t) ? a[t] = s[t] : a[t] = l("Symbol." + t)), a[t];
      };
    }, 2772: function (t, n, e) {
      "use strict";
      var r = e(2109), o = e(1318).indexOf, i = e(9341), u = [].indexOf, c = !!u && 1 / [1].indexOf(1, -0) < 0,
        f = i("indexOf");
      r({target: "Array", proto: !0, forced: c || !f}, {
        indexOf: function (t) {
          return c ? u.apply(this, arguments) || 0 : o(this, t, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
    }, 4916: function (t, n, e) {
      "use strict";
      var r = e(2109), o = e(2261);
      r({target: "RegExp", proto: !0, forced: /./.exec !== o}, {exec: o});
    }, 4723: function (t, n, e) {
      "use strict";
      var r = e(7007), o = e(9670), i = e(7466), u = e(4488), c = e(1530), f = e(7651);
      r("match", 1, (function (t, n, e) {
        return [function (n) {
          var e = u(this), r = null == n ? void 0 : n[t];
          return void 0 !== r ? r.call(n, e) : new RegExp(n)[t](String(e));
        }, function (t) {
          var r = e(n, t, this);
          if (r.done) return r.value;
          var u = o(t), a = String(this);
          if (!u.global) return f(u, a);
          var s = u.unicode;
          u.lastIndex = 0;
          for (var l, p = [], v = 0; null !== (l = f(u, a));) {
            var d = String(l[0]);
            p[v] = d, "" === d && (u.lastIndex = c(a, i(u.lastIndex), s)), v++;
          }
          return 0 === v ? null : p;
        }];
      }));
    }
  }, n = {};

  function e(r) {
    if (n[r]) return n[r].exports;
    var o = n[r] = {exports: {}};
    return t[r](o, o.exports, e), o.exports;
  }

  e.n = function (t) {
    var n = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return e.d(n, {a: n}), n;
  }, e.d = function (t, n) {
    for (var r in n) e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, {enumerable: !0, get: n[r]});
  }, e.g = function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (t) {
      if ("object" == typeof window) return window;
    }
  }(), e.o = function (t, n) {
    return Object.prototype.hasOwnProperty.call(t, n);
  }, function () {
    "use strict";
    e(2772), e(4916), e(4723);
    var t, n, r, o,
      i = (t = "undefined" != typeof $request, n = "undefined" != typeof $httpClient, r = "undefined" != typeof $task, {
        isRequest: t,
        isQuanX: r,
        isSurge: n,
        notify: function (t, e, o) {
          r && $notify(t, e, o), n && $notification.post(t, e, o);
        },
        write: function (t, e) {
          return r ? $prefs.setValueForKey(t, e) : n ? $persistentStore.write(t, e) : void 0;
        },
        read: function (t) {
          return r ? $prefs.valueForKey(t) : n ? $persistentStore.read(t) : void 0;
        },
        post: function (t, e) {
          r && ("string" == typeof t && (t = {url: t}), t.method = "POST", $task.fetch(t).then((function (t) {
            t.status = t.statusCode, e(null, t, t.body);
          }), (function (t) {
            return e(t.error, null, null);
          }))), n && $httpClient.post(t, e);
        },
        end: function () {
          if (r) return $done({});
          n && (t ? $done({}) : $done());
        }
      });
    i.isRequest ? function () {
      var t = "CookieBM";
      if ($request.headers) {
        var n = $request.headers.Cookie ? $request.headers.Cookie : "";
        if (-1 != n.indexOf("SESSDATA=")) {
          var e = /SESSDATA=.+?;/.exec(n)[0];
          i.read(t) ? i.read(t) != e && (i.write(e, t) ? i.notify("更新B站漫画Cookie成功 🎉", "", "") : i.notify("更新B站漫画Cookie失败‼️", "", "")) : i.write(e, t) ? i.notify("首次写入B站漫画Cookie成功 🎉", "", "") : i.notify("首次写入B站漫画Cookie失败‼️", "", "");
        } else i.notify("写入B站漫画Cookie失败‼️", "", "Cookie关键值缺失");
      } else i.notify("写入B站漫画Cookie失败‼️", "", "配置错误, 无法读取请求头,");
      i.end();
    }() : (o = {
      url: "https://manga.bilibili.com/twirp/activity.v1.Activity/ClockIn",
      headers: {Cookie: i.read("CookieBM")},
      body: "platform=ios"
    }, i.post(o, (function (t, n, e) {
      t ? i.notify("哔哩哔哩漫画 - 签到接口请求失败", "", t) : 200 == parseInt(n.status) ? (console.log("bilibili success response : \n" + e), i.notify("哔哩哔哩漫画 - 签到成功！🎉", "", "")) : (console.log("bilibili failed response : \n" + e), e.match(/duplicate/) ? i.notify("哔哩哔哩漫画 - 今日已签过 ⚠️", "", "") : e.match(/uid must/) ? i.notify("哔哩哔哩漫画 - Cookie无效 ‼️‼️", "", "") : i.notify("哔哩哔哩漫画 - 签到失败 ‼️", "", e)), i.end();
    })));
  }();
}();
//# sourceMappingURL=main.js.map
