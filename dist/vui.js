import Sr, { openBlock as Se, createElementBlock as Oe, normalizeClass as _t, withModifiers as Sn, createElementVNode as lt, createCommentVNode as qe, renderSlot as st, Fragment as Mt, createTextVNode as Ht, toDisplayString as yt, mergeProps as yr, renderList as Bt, normalizeStyle as nr, resolveComponent as rr, createBlock as sr, defineComponent as Tr } from "vue";
const Or = {}, Nr = {}, Cr = {
  en: Or,
  fr: Nr
}, Ar = {
  duration: 125
}, Kt = {
  data() {
    return {
      toggled: !1,
      animating: !1
    };
  },
  created() {
    this.$bus.on("outclick", (e) => {
      this.toggled && this.componentGroupId !== e && this.blur();
    });
  },
  methods: {
    animate() {
      this.animating || (this.animating = !0, setTimeout(() => {
        this.animating = !1;
      }, Ar.duration));
    },
    blur() {
      this.toggled = !1;
    },
    focus() {
      this.toggled = !0, this.$bus.emit("outclick", this.componentGroupId);
    },
    onAnimate(e = !1) {
      this.animate(), e || !this.toggled ? this.focus() : this.blur();
    }
  }
}, ut = {
  inject: ["$bus"],
  props: {
    id: {
      type: String
    },
    groupId: {
      type: String
    },
    loading: {
      type: Boolean
    }
  },
  deactivated() {
    this.$bus.off("outclick");
  },
  created() {
    this.uuid = Math.random().toString(36).slice(-6);
  },
  data() {
    return {
      uuid: null
    };
  },
  computed: {
    componentId() {
      return this.id ? this.id : this.uuid;
    },
    componentGroupId() {
      return this.groupId ? this.groupId : this.uuid;
    }
  }
};
var zt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Nt = {}, Ut = {}, Ir = {
  get exports() {
    return Ut;
  },
  set exports(e) {
    Ut = e;
  }
}, Ve = {};
/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
var An;
function kr() {
  if (An)
    return Ve;
  An = 1, Object.defineProperty(Ve, "__esModule", { value: !0 });
  const e = typeof window < "u";
  let t, a;
  const f = /\{([0-9a-zA-Z]+)\}/g;
  function u(X, ...fe) {
    return fe.length === 1 && $e(fe[0]) && (fe = fe[0]), (!fe || !fe.hasOwnProperty) && (fe = {}), X.replace(f, (me, Ie) => fe.hasOwnProperty(Ie) ? fe[Ie] : "");
  }
  const i = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol", c = (X) => i ? Symbol(X) : X, _ = (X, fe, me) => p({ l: X, k: fe, s: me }), p = (X) => JSON.stringify(X).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), h = (X) => typeof X == "number" && isFinite(X), v = (X) => Me(X) === "[object Date]", y = (X) => Me(X) === "[object RegExp]", w = (X) => tt(X) && Object.keys(X).length === 0;
  function M(X, fe) {
    typeof console < "u" && (console.warn("[intlify] " + X), fe && console.warn(fe.stack));
  }
  const j = Object.assign;
  let $;
  const Y = () => $ || ($ = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof zt < "u" ? zt : {});
  function oe(X) {
    return X.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }
  const J = Object.prototype.hasOwnProperty;
  function ae(X, fe) {
    return J.call(X, fe);
  }
  const D = Array.isArray, T = (X) => typeof X == "function", ee = (X) => typeof X == "string", K = (X) => typeof X == "boolean", be = (X) => typeof X == "symbol", $e = (X) => X !== null && typeof X == "object", Le = (X) => $e(X) && T(X.then) && T(X.catch), je = Object.prototype.toString, Me = (X) => je.call(X), tt = (X) => Me(X) === "[object Object]", Ze = (X) => X == null ? "" : D(X) || tt(X) && X.toString === je ? JSON.stringify(X, null, 2) : String(X), nt = 2;
  function Q(X, fe = 0, me = X.length) {
    const Ie = X.split(/\r?\n/);
    let d = 0;
    const E = [];
    for (let I = 0; I < Ie.length; I++)
      if (d += Ie[I].length + 1, d >= fe) {
        for (let U = I - nt; U <= I + nt || me > d; U++) {
          if (U < 0 || U >= Ie.length)
            continue;
          const G = U + 1;
          E.push(`${G}${" ".repeat(3 - String(G).length)}|  ${Ie[U]}`);
          const A = Ie[U].length;
          if (U === I) {
            const Z = fe - (d - A) + 1, ye = Math.max(1, me > d ? A - Z : me - fe);
            E.push("   |  " + " ".repeat(Z) + "^".repeat(ye));
          } else if (U > I) {
            if (me > d) {
              const Z = Math.max(Math.min(me - d, A), 1);
              E.push("   |  " + "^".repeat(Z));
            }
            d += A + 1;
          }
        }
        break;
      }
    return E.join(`
`);
  }
  function de() {
    const X = /* @__PURE__ */ new Map();
    return {
      events: X,
      on(me, Ie) {
        const d = X.get(me);
        d && d.push(Ie) || X.set(me, [Ie]);
      },
      off(me, Ie) {
        const d = X.get(me);
        d && d.splice(d.indexOf(Ie) >>> 0, 1);
      },
      emit(me, Ie) {
        (X.get(me) || []).slice().map((d) => d(Ie)), (X.get("*") || []).slice().map((d) => d(me, Ie));
      }
    };
  }
  return Ve.assign = j, Ve.createEmitter = de, Ve.escapeHtml = oe, Ve.format = u, Ve.friendlyJSONstringify = p, Ve.generateCodeFrame = Q, Ve.generateFormatCacheKey = _, Ve.getGlobalThis = Y, Ve.hasOwn = ae, Ve.inBrowser = e, Ve.isArray = D, Ve.isBoolean = K, Ve.isDate = v, Ve.isEmptyObject = w, Ve.isFunction = T, Ve.isNumber = h, Ve.isObject = $e, Ve.isPlainObject = tt, Ve.isPromise = Le, Ve.isRegExp = y, Ve.isString = ee, Ve.isSymbol = be, Ve.makeSymbol = c, Ve.mark = t, Ve.measure = a, Ve.objectToString = je, Ve.toDisplayString = Ze, Ve.toTypeString = Me, Ve.warn = M, Ve;
}
var Ue = {};
/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
var In;
function Mr() {
  if (In)
    return Ue;
  In = 1, Object.defineProperty(Ue, "__esModule", { value: !0 });
  const e = typeof window < "u";
  Ue.mark = void 0, Ue.measure = void 0;
  {
    const Q = e && window.performance;
    Q && Q.mark && Q.measure && Q.clearMarks && Q.clearMeasures && (Ue.mark = (de) => Q.mark(de), Ue.measure = (de, X, fe) => {
      Q.measure(de, X, fe), Q.clearMarks(X), Q.clearMarks(fe);
    });
  }
  const t = /\{([0-9a-zA-Z]+)\}/g;
  function a(Q, ...de) {
    return de.length === 1 && K(de[0]) && (de = de[0]), (!de || !de.hasOwnProperty) && (de = {}), Q.replace(t, (X, fe) => de.hasOwnProperty(fe) ? de[fe] : "");
  }
  const f = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol", u = (Q) => f ? Symbol(Q) : Q, i = (Q, de, X) => c({ l: Q, k: de, s: X }), c = (Q) => JSON.stringify(Q).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), _ = (Q) => typeof Q == "number" && isFinite(Q), p = (Q) => Le(Q) === "[object Date]", h = (Q) => Le(Q) === "[object RegExp]", v = (Q) => je(Q) && Object.keys(Q).length === 0;
  function y(Q, de) {
    typeof console < "u" && (console.warn("[intlify] " + Q), de && console.warn(de.stack));
  }
  const w = Object.assign;
  let M;
  const j = () => M || (M = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof zt < "u" ? zt : {});
  function $(Q) {
    return Q.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }
  const Y = Object.prototype.hasOwnProperty;
  function oe(Q, de) {
    return Y.call(Q, de);
  }
  const J = Array.isArray, ae = (Q) => typeof Q == "function", D = (Q) => typeof Q == "string", T = (Q) => typeof Q == "boolean", ee = (Q) => typeof Q == "symbol", K = (Q) => Q !== null && typeof Q == "object", be = (Q) => K(Q) && ae(Q.then) && ae(Q.catch), $e = Object.prototype.toString, Le = (Q) => $e.call(Q), je = (Q) => Le(Q) === "[object Object]", Me = (Q) => Q == null ? "" : J(Q) || je(Q) && Q.toString === $e ? JSON.stringify(Q, null, 2) : String(Q), tt = 2;
  function Ze(Q, de = 0, X = Q.length) {
    const fe = Q.split(/\r?\n/);
    let me = 0;
    const Ie = [];
    for (let d = 0; d < fe.length; d++)
      if (me += fe[d].length + 1, me >= de) {
        for (let E = d - tt; E <= d + tt || X > me; E++) {
          if (E < 0 || E >= fe.length)
            continue;
          const I = E + 1;
          Ie.push(`${I}${" ".repeat(3 - String(I).length)}|  ${fe[E]}`);
          const U = fe[E].length;
          if (E === d) {
            const G = de - (me - U) + 1, A = Math.max(1, X > me ? U - G : X - de);
            Ie.push("   |  " + " ".repeat(G) + "^".repeat(A));
          } else if (E > d) {
            if (X > me) {
              const G = Math.max(Math.min(X - me, U), 1);
              Ie.push("   |  " + "^".repeat(G));
            }
            me += U + 1;
          }
        }
        break;
      }
    return Ie.join(`
`);
  }
  function nt() {
    const Q = /* @__PURE__ */ new Map();
    return {
      events: Q,
      on(X, fe) {
        const me = Q.get(X);
        me && me.push(fe) || Q.set(X, [fe]);
      },
      off(X, fe) {
        const me = Q.get(X);
        me && me.splice(me.indexOf(fe) >>> 0, 1);
      },
      emit(X, fe) {
        (Q.get(X) || []).slice().map((me) => me(fe)), (Q.get("*") || []).slice().map((me) => me(X, fe));
      }
    };
  }
  return Ue.assign = w, Ue.createEmitter = nt, Ue.escapeHtml = $, Ue.format = a, Ue.friendlyJSONstringify = c, Ue.generateCodeFrame = Ze, Ue.generateFormatCacheKey = i, Ue.getGlobalThis = j, Ue.hasOwn = oe, Ue.inBrowser = e, Ue.isArray = J, Ue.isBoolean = T, Ue.isDate = p, Ue.isEmptyObject = v, Ue.isFunction = ae, Ue.isNumber = _, Ue.isObject = K, Ue.isPlainObject = je, Ue.isPromise = be, Ue.isRegExp = h, Ue.isString = D, Ue.isSymbol = ee, Ue.makeSymbol = u, Ue.objectToString = $e, Ue.toDisplayString = Me, Ue.toTypeString = Le, Ue.warn = y, Ue;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = kr() : e.exports = Mr();
})(Ir);
var dn = {}, Pr = {
  get exports() {
    return dn;
  },
  set exports(e) {
    dn = e;
  }
}, pe = {}, en = {}, Rr = {
  get exports() {
    return en;
  },
  set exports(e) {
    en = e;
  }
}, ht = {}, Wt = {}, sn = {}, Xt = {}, Yt = {}, kn;
function Dr() {
  if (kn)
    return Yt;
  kn = 1;
  var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return Yt.encode = function(t) {
    if (0 <= t && t < e.length)
      return e[t];
    throw new TypeError("Must be between 0 and 63: " + t);
  }, Yt.decode = function(t) {
    var a = 65, f = 90, u = 97, i = 122, c = 48, _ = 57, p = 43, h = 47, v = 26, y = 52;
    return a <= t && t <= f ? t - a : u <= t && t <= i ? t - u + v : c <= t && t <= _ ? t - c + y : t == p ? 62 : t == h ? 63 : -1;
  }, Yt;
}
var Mn;
function ar() {
  if (Mn)
    return Xt;
  Mn = 1;
  var e = Dr(), t = 5, a = 1 << t, f = a - 1, u = a;
  function i(_) {
    return _ < 0 ? (-_ << 1) + 1 : (_ << 1) + 0;
  }
  function c(_) {
    var p = (_ & 1) === 1, h = _ >> 1;
    return p ? -h : h;
  }
  return Xt.encode = function(p) {
    var h = "", v, y = i(p);
    do
      v = y & f, y >>>= t, y > 0 && (v |= u), h += e.encode(v);
    while (y > 0);
    return h;
  }, Xt.decode = function(p, h, v) {
    var y = p.length, w = 0, M = 0, j, $;
    do {
      if (h >= y)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if ($ = e.decode(p.charCodeAt(h++)), $ === -1)
        throw new Error("Invalid base64 digit: " + p.charAt(h - 1));
      j = !!($ & u), $ &= f, w = w + ($ << M), M += t;
    } while (j);
    v.value = c(w), v.rest = h;
  }, Xt;
}
var an = {}, Pn;
function xt() {
  return Pn || (Pn = 1, function(e) {
    function t(D, T, ee) {
      if (T in D)
        return D[T];
      if (arguments.length === 3)
        return ee;
      throw new Error('"' + T + '" is a required argument.');
    }
    e.getArg = t;
    var a = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, f = /^data:.+\,.+$/;
    function u(D) {
      var T = D.match(a);
      return T ? {
        scheme: T[1],
        auth: T[2],
        host: T[3],
        port: T[4],
        path: T[5]
      } : null;
    }
    e.urlParse = u;
    function i(D) {
      var T = "";
      return D.scheme && (T += D.scheme + ":"), T += "//", D.auth && (T += D.auth + "@"), D.host && (T += D.host), D.port && (T += ":" + D.port), D.path && (T += D.path), T;
    }
    e.urlGenerate = i;
    function c(D) {
      var T = D, ee = u(D);
      if (ee) {
        if (!ee.path)
          return D;
        T = ee.path;
      }
      for (var K = e.isAbsolute(T), be = T.split(/\/+/), $e, Le = 0, je = be.length - 1; je >= 0; je--)
        $e = be[je], $e === "." ? be.splice(je, 1) : $e === ".." ? Le++ : Le > 0 && ($e === "" ? (be.splice(je + 1, Le), Le = 0) : (be.splice(je, 2), Le--));
      return T = be.join("/"), T === "" && (T = K ? "/" : "."), ee ? (ee.path = T, i(ee)) : T;
    }
    e.normalize = c;
    function _(D, T) {
      D === "" && (D = "."), T === "" && (T = ".");
      var ee = u(T), K = u(D);
      if (K && (D = K.path || "/"), ee && !ee.scheme)
        return K && (ee.scheme = K.scheme), i(ee);
      if (ee || T.match(f))
        return T;
      if (K && !K.host && !K.path)
        return K.host = T, i(K);
      var be = T.charAt(0) === "/" ? T : c(D.replace(/\/+$/, "") + "/" + T);
      return K ? (K.path = be, i(K)) : be;
    }
    e.join = _, e.isAbsolute = function(D) {
      return D.charAt(0) === "/" || a.test(D);
    };
    function p(D, T) {
      D === "" && (D = "."), D = D.replace(/\/$/, "");
      for (var ee = 0; T.indexOf(D + "/") !== 0; ) {
        var K = D.lastIndexOf("/");
        if (K < 0 || (D = D.slice(0, K), D.match(/^([^\/]+:\/)?\/*$/)))
          return T;
        ++ee;
      }
      return Array(ee + 1).join("../") + T.substr(D.length + 1);
    }
    e.relative = p;
    var h = function() {
      var D = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in D);
    }();
    function v(D) {
      return D;
    }
    function y(D) {
      return M(D) ? "$" + D : D;
    }
    e.toSetString = h ? v : y;
    function w(D) {
      return M(D) ? D.slice(1) : D;
    }
    e.fromSetString = h ? v : w;
    function M(D) {
      if (!D)
        return !1;
      var T = D.length;
      if (T < 9 || D.charCodeAt(T - 1) !== 95 || D.charCodeAt(T - 2) !== 95 || D.charCodeAt(T - 3) !== 111 || D.charCodeAt(T - 4) !== 116 || D.charCodeAt(T - 5) !== 111 || D.charCodeAt(T - 6) !== 114 || D.charCodeAt(T - 7) !== 112 || D.charCodeAt(T - 8) !== 95 || D.charCodeAt(T - 9) !== 95)
        return !1;
      for (var ee = T - 10; ee >= 0; ee--)
        if (D.charCodeAt(ee) !== 36)
          return !1;
      return !0;
    }
    function j(D, T, ee) {
      var K = Y(D.source, T.source);
      return K !== 0 || (K = D.originalLine - T.originalLine, K !== 0) || (K = D.originalColumn - T.originalColumn, K !== 0 || ee) || (K = D.generatedColumn - T.generatedColumn, K !== 0) || (K = D.generatedLine - T.generatedLine, K !== 0) ? K : Y(D.name, T.name);
    }
    e.compareByOriginalPositions = j;
    function $(D, T, ee) {
      var K = D.generatedLine - T.generatedLine;
      return K !== 0 || (K = D.generatedColumn - T.generatedColumn, K !== 0 || ee) || (K = Y(D.source, T.source), K !== 0) || (K = D.originalLine - T.originalLine, K !== 0) || (K = D.originalColumn - T.originalColumn, K !== 0) ? K : Y(D.name, T.name);
    }
    e.compareByGeneratedPositionsDeflated = $;
    function Y(D, T) {
      return D === T ? 0 : D === null ? 1 : T === null ? -1 : D > T ? 1 : -1;
    }
    function oe(D, T) {
      var ee = D.generatedLine - T.generatedLine;
      return ee !== 0 || (ee = D.generatedColumn - T.generatedColumn, ee !== 0) || (ee = Y(D.source, T.source), ee !== 0) || (ee = D.originalLine - T.originalLine, ee !== 0) || (ee = D.originalColumn - T.originalColumn, ee !== 0) ? ee : Y(D.name, T.name);
    }
    e.compareByGeneratedPositionsInflated = oe;
    function J(D) {
      return JSON.parse(D.replace(/^\)]}'[^\n]*\n/, ""));
    }
    e.parseSourceMapInput = J;
    function ae(D, T, ee) {
      if (T = T || "", D && (D[D.length - 1] !== "/" && T[0] !== "/" && (D += "/"), T = D + T), ee) {
        var K = u(ee);
        if (!K)
          throw new Error("sourceMapURL could not be parsed");
        if (K.path) {
          var be = K.path.lastIndexOf("/");
          be >= 0 && (K.path = K.path.substring(0, be + 1));
        }
        T = _(i(K), T);
      }
      return c(T);
    }
    e.computeSourceURL = ae;
  }(an)), an;
}
var on = {}, Rn;
function ir() {
  if (Rn)
    return on;
  Rn = 1;
  var e = xt(), t = Object.prototype.hasOwnProperty, a = typeof Map < "u";
  function f() {
    this._array = [], this._set = a ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return f.fromArray = function(i, c) {
    for (var _ = new f(), p = 0, h = i.length; p < h; p++)
      _.add(i[p], c);
    return _;
  }, f.prototype.size = function() {
    return a ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, f.prototype.add = function(i, c) {
    var _ = a ? i : e.toSetString(i), p = a ? this.has(i) : t.call(this._set, _), h = this._array.length;
    (!p || c) && this._array.push(i), p || (a ? this._set.set(i, h) : this._set[_] = h);
  }, f.prototype.has = function(i) {
    if (a)
      return this._set.has(i);
    var c = e.toSetString(i);
    return t.call(this._set, c);
  }, f.prototype.indexOf = function(i) {
    if (a) {
      var c = this._set.get(i);
      if (c >= 0)
        return c;
    } else {
      var _ = e.toSetString(i);
      if (t.call(this._set, _))
        return this._set[_];
    }
    throw new Error('"' + i + '" is not in the set.');
  }, f.prototype.at = function(i) {
    if (i >= 0 && i < this._array.length)
      return this._array[i];
    throw new Error("No element indexed by " + i);
  }, f.prototype.toArray = function() {
    return this._array.slice();
  }, on.ArraySet = f, on;
}
var ln = {}, Dn;
function Fr() {
  if (Dn)
    return ln;
  Dn = 1;
  var e = xt();
  function t(f, u) {
    var i = f.generatedLine, c = u.generatedLine, _ = f.generatedColumn, p = u.generatedColumn;
    return c > i || c == i && p >= _ || e.compareByGeneratedPositionsInflated(f, u) <= 0;
  }
  function a() {
    this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  return a.prototype.unsortedForEach = function(u, i) {
    this._array.forEach(u, i);
  }, a.prototype.add = function(u) {
    t(this._last, u) ? (this._last = u, this._array.push(u)) : (this._sorted = !1, this._array.push(u));
  }, a.prototype.toArray = function() {
    return this._sorted || (this._array.sort(e.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, ln.MappingList = a, ln;
}
var Fn;
function or() {
  if (Fn)
    return sn;
  Fn = 1;
  var e = ar(), t = xt(), a = ir().ArraySet, f = Fr().MappingList;
  function u(i) {
    i || (i = {}), this._file = t.getArg(i, "file", null), this._sourceRoot = t.getArg(i, "sourceRoot", null), this._skipValidation = t.getArg(i, "skipValidation", !1), this._sources = new a(), this._names = new a(), this._mappings = new f(), this._sourcesContents = null;
  }
  return u.prototype._version = 3, u.fromSourceMap = function(c) {
    var _ = c.sourceRoot, p = new u({
      file: c.file,
      sourceRoot: _
    });
    return c.eachMapping(function(h) {
      var v = {
        generated: {
          line: h.generatedLine,
          column: h.generatedColumn
        }
      };
      h.source != null && (v.source = h.source, _ != null && (v.source = t.relative(_, v.source)), v.original = {
        line: h.originalLine,
        column: h.originalColumn
      }, h.name != null && (v.name = h.name)), p.addMapping(v);
    }), c.sources.forEach(function(h) {
      var v = h;
      _ !== null && (v = t.relative(_, h)), p._sources.has(v) || p._sources.add(v);
      var y = c.sourceContentFor(h);
      y != null && p.setSourceContent(h, y);
    }), p;
  }, u.prototype.addMapping = function(c) {
    var _ = t.getArg(c, "generated"), p = t.getArg(c, "original", null), h = t.getArg(c, "source", null), v = t.getArg(c, "name", null);
    this._skipValidation || this._validateMapping(_, p, h, v), h != null && (h = String(h), this._sources.has(h) || this._sources.add(h)), v != null && (v = String(v), this._names.has(v) || this._names.add(v)), this._mappings.add({
      generatedLine: _.line,
      generatedColumn: _.column,
      originalLine: p != null && p.line,
      originalColumn: p != null && p.column,
      source: h,
      name: v
    });
  }, u.prototype.setSourceContent = function(c, _) {
    var p = c;
    this._sourceRoot != null && (p = t.relative(this._sourceRoot, p)), _ != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[t.toSetString(p)] = _) : this._sourcesContents && (delete this._sourcesContents[t.toSetString(p)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, u.prototype.applySourceMap = function(c, _, p) {
    var h = _;
    if (_ == null) {
      if (c.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      h = c.file;
    }
    var v = this._sourceRoot;
    v != null && (h = t.relative(v, h));
    var y = new a(), w = new a();
    this._mappings.unsortedForEach(function(M) {
      if (M.source === h && M.originalLine != null) {
        var j = c.originalPositionFor({
          line: M.originalLine,
          column: M.originalColumn
        });
        j.source != null && (M.source = j.source, p != null && (M.source = t.join(p, M.source)), v != null && (M.source = t.relative(v, M.source)), M.originalLine = j.line, M.originalColumn = j.column, j.name != null && (M.name = j.name));
      }
      var $ = M.source;
      $ != null && !y.has($) && y.add($);
      var Y = M.name;
      Y != null && !w.has(Y) && w.add(Y);
    }, this), this._sources = y, this._names = w, c.sources.forEach(function(M) {
      var j = c.sourceContentFor(M);
      j != null && (p != null && (M = t.join(p, M)), v != null && (M = t.relative(v, M)), this.setSourceContent(M, j));
    }, this);
  }, u.prototype._validateMapping = function(c, _, p, h) {
    if (_ && typeof _.line != "number" && typeof _.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(c && "line" in c && "column" in c && c.line > 0 && c.column >= 0 && !_ && !p && !h)) {
      if (c && "line" in c && "column" in c && _ && "line" in _ && "column" in _ && c.line > 0 && c.column >= 0 && _.line > 0 && _.column >= 0 && p)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: c,
        source: p,
        original: _,
        name: h
      }));
    }
  }, u.prototype._serializeMappings = function() {
    for (var c = 0, _ = 1, p = 0, h = 0, v = 0, y = 0, w = "", M, j, $, Y, oe = this._mappings.toArray(), J = 0, ae = oe.length; J < ae; J++) {
      if (j = oe[J], M = "", j.generatedLine !== _)
        for (c = 0; j.generatedLine !== _; )
          M += ";", _++;
      else if (J > 0) {
        if (!t.compareByGeneratedPositionsInflated(j, oe[J - 1]))
          continue;
        M += ",";
      }
      M += e.encode(j.generatedColumn - c), c = j.generatedColumn, j.source != null && (Y = this._sources.indexOf(j.source), M += e.encode(Y - y), y = Y, M += e.encode(j.originalLine - 1 - h), h = j.originalLine - 1, M += e.encode(j.originalColumn - p), p = j.originalColumn, j.name != null && ($ = this._names.indexOf(j.name), M += e.encode($ - v), v = $)), w += M;
    }
    return w;
  }, u.prototype._generateSourcesContent = function(c, _) {
    return c.map(function(p) {
      if (!this._sourcesContents)
        return null;
      _ != null && (p = t.relative(_, p));
      var h = t.toSetString(p);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, h) ? this._sourcesContents[h] : null;
    }, this);
  }, u.prototype.toJSON = function() {
    var c = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (c.file = this._file), this._sourceRoot != null && (c.sourceRoot = this._sourceRoot), this._sourcesContents && (c.sourcesContent = this._generateSourcesContent(c.sources, c.sourceRoot)), c;
  }, u.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  }, sn.SourceMapGenerator = u, sn;
}
var Vt = {}, un = {}, wn;
function wr() {
  return wn || (wn = 1, function(e) {
    e.GREATEST_LOWER_BOUND = 1, e.LEAST_UPPER_BOUND = 2;
    function t(a, f, u, i, c, _) {
      var p = Math.floor((f - a) / 2) + a, h = c(u, i[p], !0);
      return h === 0 ? p : h > 0 ? f - p > 1 ? t(p, f, u, i, c, _) : _ == e.LEAST_UPPER_BOUND ? f < i.length ? f : -1 : p : p - a > 1 ? t(a, p, u, i, c, _) : _ == e.LEAST_UPPER_BOUND ? p : a < 0 ? -1 : a;
    }
    e.search = function(f, u, i, c) {
      if (u.length === 0)
        return -1;
      var _ = t(
        -1,
        u.length,
        f,
        u,
        i,
        c || e.GREATEST_LOWER_BOUND
      );
      if (_ < 0)
        return -1;
      for (; _ - 1 >= 0 && i(u[_], u[_ - 1], !0) === 0; )
        --_;
      return _;
    };
  }(un)), un;
}
var cn = {}, $n;
function $r() {
  if ($n)
    return cn;
  $n = 1;
  function e(f, u, i) {
    var c = f[u];
    f[u] = f[i], f[i] = c;
  }
  function t(f, u) {
    return Math.round(f + Math.random() * (u - f));
  }
  function a(f, u, i, c) {
    if (i < c) {
      var _ = t(i, c), p = i - 1;
      e(f, _, c);
      for (var h = f[c], v = i; v < c; v++)
        u(f[v], h) <= 0 && (p += 1, e(f, p, v));
      e(f, p + 1, v);
      var y = p + 1;
      a(f, u, i, y - 1), a(f, u, y + 1, c);
    }
  }
  return cn.quickSort = function(f, u) {
    a(f, u, 0, f.length - 1);
  }, cn;
}
var Un;
function Ur() {
  if (Un)
    return Vt;
  Un = 1;
  var e = xt(), t = wr(), a = ir().ArraySet, f = ar(), u = $r().quickSort;
  function i(h, v) {
    var y = h;
    return typeof h == "string" && (y = e.parseSourceMapInput(h)), y.sections != null ? new p(y, v) : new c(y, v);
  }
  i.fromSourceMap = function(h, v) {
    return c.fromSourceMap(h, v);
  }, i.prototype._version = 3, i.prototype.__generatedMappings = null, Object.defineProperty(i.prototype, "_generatedMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
    }
  }), i.prototype.__originalMappings = null, Object.defineProperty(i.prototype, "_originalMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
    }
  }), i.prototype._charIsMappingSeparator = function(v, y) {
    var w = v.charAt(y);
    return w === ";" || w === ",";
  }, i.prototype._parseMappings = function(v, y) {
    throw new Error("Subclasses must implement _parseMappings");
  }, i.GENERATED_ORDER = 1, i.ORIGINAL_ORDER = 2, i.GREATEST_LOWER_BOUND = 1, i.LEAST_UPPER_BOUND = 2, i.prototype.eachMapping = function(v, y, w) {
    var M = y || null, j = w || i.GENERATED_ORDER, $;
    switch (j) {
      case i.GENERATED_ORDER:
        $ = this._generatedMappings;
        break;
      case i.ORIGINAL_ORDER:
        $ = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var Y = this.sourceRoot;
    $.map(function(oe) {
      var J = oe.source === null ? null : this._sources.at(oe.source);
      return J = e.computeSourceURL(Y, J, this._sourceMapURL), {
        source: J,
        generatedLine: oe.generatedLine,
        generatedColumn: oe.generatedColumn,
        originalLine: oe.originalLine,
        originalColumn: oe.originalColumn,
        name: oe.name === null ? null : this._names.at(oe.name)
      };
    }, this).forEach(v, M);
  }, i.prototype.allGeneratedPositionsFor = function(v) {
    var y = e.getArg(v, "line"), w = {
      source: e.getArg(v, "source"),
      originalLine: y,
      originalColumn: e.getArg(v, "column", 0)
    };
    if (w.source = this._findSourceIndex(w.source), w.source < 0)
      return [];
    var M = [], j = this._findMapping(
      w,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      e.compareByOriginalPositions,
      t.LEAST_UPPER_BOUND
    );
    if (j >= 0) {
      var $ = this._originalMappings[j];
      if (v.column === void 0)
        for (var Y = $.originalLine; $ && $.originalLine === Y; )
          M.push({
            line: e.getArg($, "generatedLine", null),
            column: e.getArg($, "generatedColumn", null),
            lastColumn: e.getArg($, "lastGeneratedColumn", null)
          }), $ = this._originalMappings[++j];
      else
        for (var oe = $.originalColumn; $ && $.originalLine === y && $.originalColumn == oe; )
          M.push({
            line: e.getArg($, "generatedLine", null),
            column: e.getArg($, "generatedColumn", null),
            lastColumn: e.getArg($, "lastGeneratedColumn", null)
          }), $ = this._originalMappings[++j];
    }
    return M;
  }, Vt.SourceMapConsumer = i;
  function c(h, v) {
    var y = h;
    typeof h == "string" && (y = e.parseSourceMapInput(h));
    var w = e.getArg(y, "version"), M = e.getArg(y, "sources"), j = e.getArg(y, "names", []), $ = e.getArg(y, "sourceRoot", null), Y = e.getArg(y, "sourcesContent", null), oe = e.getArg(y, "mappings"), J = e.getArg(y, "file", null);
    if (w != this._version)
      throw new Error("Unsupported version: " + w);
    $ && ($ = e.normalize($)), M = M.map(String).map(e.normalize).map(function(ae) {
      return $ && e.isAbsolute($) && e.isAbsolute(ae) ? e.relative($, ae) : ae;
    }), this._names = a.fromArray(j.map(String), !0), this._sources = a.fromArray(M, !0), this._absoluteSources = this._sources.toArray().map(function(ae) {
      return e.computeSourceURL($, ae, v);
    }), this.sourceRoot = $, this.sourcesContent = Y, this._mappings = oe, this._sourceMapURL = v, this.file = J;
  }
  c.prototype = Object.create(i.prototype), c.prototype.consumer = i, c.prototype._findSourceIndex = function(h) {
    var v = h;
    if (this.sourceRoot != null && (v = e.relative(this.sourceRoot, v)), this._sources.has(v))
      return this._sources.indexOf(v);
    var y;
    for (y = 0; y < this._absoluteSources.length; ++y)
      if (this._absoluteSources[y] == h)
        return y;
    return -1;
  }, c.fromSourceMap = function(v, y) {
    var w = Object.create(c.prototype), M = w._names = a.fromArray(v._names.toArray(), !0), j = w._sources = a.fromArray(v._sources.toArray(), !0);
    w.sourceRoot = v._sourceRoot, w.sourcesContent = v._generateSourcesContent(
      w._sources.toArray(),
      w.sourceRoot
    ), w.file = v._file, w._sourceMapURL = y, w._absoluteSources = w._sources.toArray().map(function(ee) {
      return e.computeSourceURL(w.sourceRoot, ee, y);
    });
    for (var $ = v._mappings.toArray().slice(), Y = w.__generatedMappings = [], oe = w.__originalMappings = [], J = 0, ae = $.length; J < ae; J++) {
      var D = $[J], T = new _();
      T.generatedLine = D.generatedLine, T.generatedColumn = D.generatedColumn, D.source && (T.source = j.indexOf(D.source), T.originalLine = D.originalLine, T.originalColumn = D.originalColumn, D.name && (T.name = M.indexOf(D.name)), oe.push(T)), Y.push(T);
    }
    return u(w.__originalMappings, e.compareByOriginalPositions), w;
  }, c.prototype._version = 3, Object.defineProperty(c.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function _() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  c.prototype._parseMappings = function(v, y) {
    for (var w = 1, M = 0, j = 0, $ = 0, Y = 0, oe = 0, J = v.length, ae = 0, D = {}, T = {}, ee = [], K = [], be, $e, Le, je, Me; ae < J; )
      if (v.charAt(ae) === ";")
        w++, ae++, M = 0;
      else if (v.charAt(ae) === ",")
        ae++;
      else {
        for (be = new _(), be.generatedLine = w, je = ae; je < J && !this._charIsMappingSeparator(v, je); je++)
          ;
        if ($e = v.slice(ae, je), Le = D[$e], Le)
          ae += $e.length;
        else {
          for (Le = []; ae < je; )
            f.decode(v, ae, T), Me = T.value, ae = T.rest, Le.push(Me);
          if (Le.length === 2)
            throw new Error("Found a source, but no line and column");
          if (Le.length === 3)
            throw new Error("Found a source and line, but no column");
          D[$e] = Le;
        }
        be.generatedColumn = M + Le[0], M = be.generatedColumn, Le.length > 1 && (be.source = Y + Le[1], Y += Le[1], be.originalLine = j + Le[2], j = be.originalLine, be.originalLine += 1, be.originalColumn = $ + Le[3], $ = be.originalColumn, Le.length > 4 && (be.name = oe + Le[4], oe += Le[4])), K.push(be), typeof be.originalLine == "number" && ee.push(be);
      }
    u(K, e.compareByGeneratedPositionsDeflated), this.__generatedMappings = K, u(ee, e.compareByOriginalPositions), this.__originalMappings = ee;
  }, c.prototype._findMapping = function(v, y, w, M, j, $) {
    if (v[w] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + v[w]);
    if (v[M] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + v[M]);
    return t.search(v, y, j, $);
  }, c.prototype.computeColumnSpans = function() {
    for (var v = 0; v < this._generatedMappings.length; ++v) {
      var y = this._generatedMappings[v];
      if (v + 1 < this._generatedMappings.length) {
        var w = this._generatedMappings[v + 1];
        if (y.generatedLine === w.generatedLine) {
          y.lastGeneratedColumn = w.generatedColumn - 1;
          continue;
        }
      }
      y.lastGeneratedColumn = 1 / 0;
    }
  }, c.prototype.originalPositionFor = function(v) {
    var y = {
      generatedLine: e.getArg(v, "line"),
      generatedColumn: e.getArg(v, "column")
    }, w = this._findMapping(
      y,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      e.compareByGeneratedPositionsDeflated,
      e.getArg(v, "bias", i.GREATEST_LOWER_BOUND)
    );
    if (w >= 0) {
      var M = this._generatedMappings[w];
      if (M.generatedLine === y.generatedLine) {
        var j = e.getArg(M, "source", null);
        j !== null && (j = this._sources.at(j), j = e.computeSourceURL(this.sourceRoot, j, this._sourceMapURL));
        var $ = e.getArg(M, "name", null);
        return $ !== null && ($ = this._names.at($)), {
          source: j,
          line: e.getArg(M, "originalLine", null),
          column: e.getArg(M, "originalColumn", null),
          name: $
        };
      }
    }
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, c.prototype.hasContentsOfAllSources = function() {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(v) {
      return v == null;
    }) : !1;
  }, c.prototype.sourceContentFor = function(v, y) {
    if (!this.sourcesContent)
      return null;
    var w = this._findSourceIndex(v);
    if (w >= 0)
      return this.sourcesContent[w];
    var M = v;
    this.sourceRoot != null && (M = e.relative(this.sourceRoot, M));
    var j;
    if (this.sourceRoot != null && (j = e.urlParse(this.sourceRoot))) {
      var $ = M.replace(/^file:\/\//, "");
      if (j.scheme == "file" && this._sources.has($))
        return this.sourcesContent[this._sources.indexOf($)];
      if ((!j.path || j.path == "/") && this._sources.has("/" + M))
        return this.sourcesContent[this._sources.indexOf("/" + M)];
    }
    if (y)
      return null;
    throw new Error('"' + M + '" is not in the SourceMap.');
  }, c.prototype.generatedPositionFor = function(v) {
    var y = e.getArg(v, "source");
    if (y = this._findSourceIndex(y), y < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var w = {
      source: y,
      originalLine: e.getArg(v, "line"),
      originalColumn: e.getArg(v, "column")
    }, M = this._findMapping(
      w,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      e.compareByOriginalPositions,
      e.getArg(v, "bias", i.GREATEST_LOWER_BOUND)
    );
    if (M >= 0) {
      var j = this._originalMappings[M];
      if (j.source === w.source)
        return {
          line: e.getArg(j, "generatedLine", null),
          column: e.getArg(j, "generatedColumn", null),
          lastColumn: e.getArg(j, "lastGeneratedColumn", null)
        };
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, Vt.BasicSourceMapConsumer = c;
  function p(h, v) {
    var y = h;
    typeof h == "string" && (y = e.parseSourceMapInput(h));
    var w = e.getArg(y, "version"), M = e.getArg(y, "sections");
    if (w != this._version)
      throw new Error("Unsupported version: " + w);
    this._sources = new a(), this._names = new a();
    var j = {
      line: -1,
      column: 0
    };
    this._sections = M.map(function($) {
      if ($.url)
        throw new Error("Support for url field in sections not implemented.");
      var Y = e.getArg($, "offset"), oe = e.getArg(Y, "line"), J = e.getArg(Y, "column");
      if (oe < j.line || oe === j.line && J < j.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return j = Y, {
        generatedOffset: {
          generatedLine: oe + 1,
          generatedColumn: J + 1
        },
        consumer: new i(e.getArg($, "map"), v)
      };
    });
  }
  return p.prototype = Object.create(i.prototype), p.prototype.constructor = i, p.prototype._version = 3, Object.defineProperty(p.prototype, "sources", {
    get: function() {
      for (var h = [], v = 0; v < this._sections.length; v++)
        for (var y = 0; y < this._sections[v].consumer.sources.length; y++)
          h.push(this._sections[v].consumer.sources[y]);
      return h;
    }
  }), p.prototype.originalPositionFor = function(v) {
    var y = {
      generatedLine: e.getArg(v, "line"),
      generatedColumn: e.getArg(v, "column")
    }, w = t.search(
      y,
      this._sections,
      function(j, $) {
        var Y = j.generatedLine - $.generatedOffset.generatedLine;
        return Y || j.generatedColumn - $.generatedOffset.generatedColumn;
      }
    ), M = this._sections[w];
    return M ? M.consumer.originalPositionFor({
      line: y.generatedLine - (M.generatedOffset.generatedLine - 1),
      column: y.generatedColumn - (M.generatedOffset.generatedLine === y.generatedLine ? M.generatedOffset.generatedColumn - 1 : 0),
      bias: v.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, p.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(v) {
      return v.consumer.hasContentsOfAllSources();
    });
  }, p.prototype.sourceContentFor = function(v, y) {
    for (var w = 0; w < this._sections.length; w++) {
      var M = this._sections[w], j = M.consumer.sourceContentFor(v, !0);
      if (j)
        return j;
    }
    if (y)
      return null;
    throw new Error('"' + v + '" is not in the SourceMap.');
  }, p.prototype.generatedPositionFor = function(v) {
    for (var y = 0; y < this._sections.length; y++) {
      var w = this._sections[y];
      if (w.consumer._findSourceIndex(e.getArg(v, "source")) !== -1) {
        var M = w.consumer.generatedPositionFor(v);
        if (M) {
          var j = {
            line: M.line + (w.generatedOffset.generatedLine - 1),
            column: M.column + (w.generatedOffset.generatedLine === M.line ? w.generatedOffset.generatedColumn - 1 : 0)
          };
          return j;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, p.prototype._parseMappings = function(v, y) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var w = 0; w < this._sections.length; w++)
      for (var M = this._sections[w], j = M.consumer._generatedMappings, $ = 0; $ < j.length; $++) {
        var Y = j[$], oe = M.consumer._sources.at(Y.source);
        oe = e.computeSourceURL(M.consumer.sourceRoot, oe, this._sourceMapURL), this._sources.add(oe), oe = this._sources.indexOf(oe);
        var J = null;
        Y.name && (J = M.consumer._names.at(Y.name), this._names.add(J), J = this._names.indexOf(J));
        var ae = {
          source: oe,
          generatedLine: Y.generatedLine + (M.generatedOffset.generatedLine - 1),
          generatedColumn: Y.generatedColumn + (M.generatedOffset.generatedLine === Y.generatedLine ? M.generatedOffset.generatedColumn - 1 : 0),
          originalLine: Y.originalLine,
          originalColumn: Y.originalColumn,
          name: J
        };
        this.__generatedMappings.push(ae), typeof ae.originalLine == "number" && this.__originalMappings.push(ae);
      }
    u(this.__generatedMappings, e.compareByGeneratedPositionsDeflated), u(this.__originalMappings, e.compareByOriginalPositions);
  }, Vt.IndexedSourceMapConsumer = p, Vt;
}
var fn = {}, jn;
function jr() {
  if (jn)
    return fn;
  jn = 1;
  var e = or().SourceMapGenerator, t = xt(), a = /(\r?\n)/, f = 10, u = "$$$isSourceNode$$$";
  function i(c, _, p, h, v) {
    this.children = [], this.sourceContents = {}, this.line = c ?? null, this.column = _ ?? null, this.source = p ?? null, this.name = v ?? null, this[u] = !0, h != null && this.add(h);
  }
  return i.fromStringWithSourceMap = function(_, p, h) {
    var v = new i(), y = _.split(a), w = 0, M = function() {
      var J = D(), ae = D() || "";
      return J + ae;
      function D() {
        return w < y.length ? y[w++] : void 0;
      }
    }, j = 1, $ = 0, Y = null;
    return p.eachMapping(function(J) {
      if (Y !== null)
        if (j < J.generatedLine)
          oe(Y, M()), j++, $ = 0;
        else {
          var ae = y[w] || "", D = ae.substr(0, J.generatedColumn - $);
          y[w] = ae.substr(J.generatedColumn - $), $ = J.generatedColumn, oe(Y, D), Y = J;
          return;
        }
      for (; j < J.generatedLine; )
        v.add(M()), j++;
      if ($ < J.generatedColumn) {
        var ae = y[w] || "";
        v.add(ae.substr(0, J.generatedColumn)), y[w] = ae.substr(J.generatedColumn), $ = J.generatedColumn;
      }
      Y = J;
    }, this), w < y.length && (Y && oe(Y, M()), v.add(y.splice(w).join(""))), p.sources.forEach(function(J) {
      var ae = p.sourceContentFor(J);
      ae != null && (h != null && (J = t.join(h, J)), v.setSourceContent(J, ae));
    }), v;
    function oe(J, ae) {
      if (J === null || J.source === void 0)
        v.add(ae);
      else {
        var D = h ? t.join(h, J.source) : J.source;
        v.add(new i(
          J.originalLine,
          J.originalColumn,
          D,
          ae,
          J.name
        ));
      }
    }
  }, i.prototype.add = function(_) {
    if (Array.isArray(_))
      _.forEach(function(p) {
        this.add(p);
      }, this);
    else if (_[u] || typeof _ == "string")
      _ && this.children.push(_);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + _
      );
    return this;
  }, i.prototype.prepend = function(_) {
    if (Array.isArray(_))
      for (var p = _.length - 1; p >= 0; p--)
        this.prepend(_[p]);
    else if (_[u] || typeof _ == "string")
      this.children.unshift(_);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + _
      );
    return this;
  }, i.prototype.walk = function(_) {
    for (var p, h = 0, v = this.children.length; h < v; h++)
      p = this.children[h], p[u] ? p.walk(_) : p !== "" && _(p, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, i.prototype.join = function(_) {
    var p, h, v = this.children.length;
    if (v > 0) {
      for (p = [], h = 0; h < v - 1; h++)
        p.push(this.children[h]), p.push(_);
      p.push(this.children[h]), this.children = p;
    }
    return this;
  }, i.prototype.replaceRight = function(_, p) {
    var h = this.children[this.children.length - 1];
    return h[u] ? h.replaceRight(_, p) : typeof h == "string" ? this.children[this.children.length - 1] = h.replace(_, p) : this.children.push("".replace(_, p)), this;
  }, i.prototype.setSourceContent = function(_, p) {
    this.sourceContents[t.toSetString(_)] = p;
  }, i.prototype.walkSourceContents = function(_) {
    for (var p = 0, h = this.children.length; p < h; p++)
      this.children[p][u] && this.children[p].walkSourceContents(_);
    for (var v = Object.keys(this.sourceContents), p = 0, h = v.length; p < h; p++)
      _(t.fromSetString(v[p]), this.sourceContents[v[p]]);
  }, i.prototype.toString = function() {
    var _ = "";
    return this.walk(function(p) {
      _ += p;
    }), _;
  }, i.prototype.toStringWithSourceMap = function(_) {
    var p = {
      code: "",
      line: 1,
      column: 0
    }, h = new e(_), v = !1, y = null, w = null, M = null, j = null;
    return this.walk(function($, Y) {
      p.code += $, Y.source !== null && Y.line !== null && Y.column !== null ? ((y !== Y.source || w !== Y.line || M !== Y.column || j !== Y.name) && h.addMapping({
        source: Y.source,
        original: {
          line: Y.line,
          column: Y.column
        },
        generated: {
          line: p.line,
          column: p.column
        },
        name: Y.name
      }), y = Y.source, w = Y.line, M = Y.column, j = Y.name, v = !0) : v && (h.addMapping({
        generated: {
          line: p.line,
          column: p.column
        }
      }), y = null, v = !1);
      for (var oe = 0, J = $.length; oe < J; oe++)
        $.charCodeAt(oe) === f ? (p.line++, p.column = 0, oe + 1 === J ? (y = null, v = !1) : v && h.addMapping({
          source: Y.source,
          original: {
            line: Y.line,
            column: Y.column
          },
          generated: {
            line: p.line,
            column: p.column
          },
          name: Y.name
        })) : p.column++;
    }), this.walkSourceContents(function($, Y) {
      h.setSourceContent($, Y);
    }), { code: p.code, map: h };
  }, fn.SourceNode = i, fn;
}
var Wn;
function lr() {
  return Wn || (Wn = 1, Wt.SourceMapGenerator = or().SourceMapGenerator, Wt.SourceMapConsumer = Ur().SourceMapConsumer, Wt.SourceNode = jr().SourceNode), Wt;
}
/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
var Vn;
function Wr() {
  if (Vn)
    return ht;
  Vn = 1, Object.defineProperty(ht, "__esModule", { value: !0 });
  var e = Ut, t = lr();
  const a = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    __EXTEND_POINT__: 15
  }, f = {
    [a.EXPECTED_TOKEN]: "Expected token: '{0}'",
    [a.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
    [a.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
    [a.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
    [a.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
    [a.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
    [a.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
    [a.EMPTY_PLACEHOLDER]: "Empty placeholder",
    [a.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
    [a.INVALID_LINKED_FORMAT]: "Invalid linked format",
    [a.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
    [a.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
    [a.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
    [a.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'"
  };
  function u(d, E, I = {}) {
    const { domain: U, messages: G, args: A } = I, Z = d, ye = new SyntaxError(String(Z));
    return ye.code = d, E && (ye.location = E), ye.domain = U, ye;
  }
  function i(d) {
    throw d;
  }
  const c = {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 1, column: 1, offset: 0 }
  };
  function _(d, E, I) {
    return { line: d, column: E, offset: I };
  }
  function p(d, E, I) {
    const U = { start: d, end: E };
    return I != null && (U.source = I), U;
  }
  const h = " ", v = "\r", y = `
`, w = String.fromCharCode(8232), M = String.fromCharCode(8233);
  function j(d) {
    const E = d;
    let I = 0, U = 1, G = 1, A = 0;
    const Z = (q) => E[q] === v && E[q + 1] === y, ye = (q) => E[q] === y, ne = (q) => E[q] === M, De = (q) => E[q] === w, We = (q) => Z(q) || ye(q) || ne(q) || De(q), le = () => I, F = () => U, ue = () => G, He = () => A, Ce = (q) => Z(q) || ne(q) || De(q) ? y : E[q], z = () => Ce(I), m = () => Ce(I + A);
    function P() {
      return A = 0, We(I) && (U++, G = 0), Z(I) && I++, I++, G++, E[I];
    }
    function V() {
      return Z(I + A) && A++, A++, E[I + A];
    }
    function C() {
      I = 0, U = 1, G = 1, A = 0;
    }
    function L(q = 0) {
      A = q;
    }
    function O() {
      const q = I + A;
      for (; q !== I; )
        P();
      A = 0;
    }
    return {
      index: le,
      line: F,
      column: ue,
      peekOffset: He,
      charAt: Ce,
      currentChar: z,
      currentPeek: m,
      next: P,
      peek: V,
      reset: C,
      resetPeek: L,
      skipToPeek: O
    };
  }
  const $ = void 0, Y = "'", oe = "tokenizer";
  function J(d, E = {}) {
    const I = E.location !== !1, U = j(d), G = () => U.index(), A = () => _(U.line(), U.column(), U.index()), Z = A(), ye = G(), ne = {
      currentType: 14,
      offset: ye,
      startLoc: Z,
      endLoc: Z,
      lastType: 14,
      lastOffset: ye,
      lastStartLoc: Z,
      lastEndLoc: Z,
      braceNest: 0,
      inLinked: !1,
      text: ""
    }, De = () => ne, { onError: We } = E;
    function le(n, r, o, ...b) {
      const k = De();
      if (r.column += o, r.offset += o, We) {
        const s = p(k.startLoc, r), g = u(n, s, {
          domain: oe,
          args: b
        });
        We(g);
      }
    }
    function F(n, r, o) {
      n.endLoc = A(), n.currentType = r;
      const b = { type: r };
      return I && (b.loc = p(n.startLoc, n.endLoc)), o != null && (b.value = o), b;
    }
    const ue = (n) => F(n, 14);
    function He(n, r) {
      return n.currentChar() === r ? (n.next(), r) : (le(a.EXPECTED_TOKEN, A(), 0, r), "");
    }
    function Ce(n) {
      let r = "";
      for (; n.currentPeek() === h || n.currentPeek() === y; )
        r += n.currentPeek(), n.peek();
      return r;
    }
    function z(n) {
      const r = Ce(n);
      return n.skipToPeek(), r;
    }
    function m(n) {
      if (n === $)
        return !1;
      const r = n.charCodeAt(0);
      return r >= 97 && r <= 122 || r >= 65 && r <= 90 || r === 95;
    }
    function P(n) {
      if (n === $)
        return !1;
      const r = n.charCodeAt(0);
      return r >= 48 && r <= 57;
    }
    function V(n, r) {
      const { currentType: o } = r;
      if (o !== 2)
        return !1;
      Ce(n);
      const b = m(n.currentPeek());
      return n.resetPeek(), b;
    }
    function C(n, r) {
      const { currentType: o } = r;
      if (o !== 2)
        return !1;
      Ce(n);
      const b = n.currentPeek() === "-" ? n.peek() : n.currentPeek(), k = P(b);
      return n.resetPeek(), k;
    }
    function L(n, r) {
      const { currentType: o } = r;
      if (o !== 2)
        return !1;
      Ce(n);
      const b = n.currentPeek() === Y;
      return n.resetPeek(), b;
    }
    function O(n, r) {
      const { currentType: o } = r;
      if (o !== 8)
        return !1;
      Ce(n);
      const b = n.currentPeek() === ".";
      return n.resetPeek(), b;
    }
    function q(n, r) {
      const { currentType: o } = r;
      if (o !== 9)
        return !1;
      Ce(n);
      const b = m(n.currentPeek());
      return n.resetPeek(), b;
    }
    function Fe(n, r) {
      const { currentType: o } = r;
      if (!(o === 8 || o === 12))
        return !1;
      Ce(n);
      const b = n.currentPeek() === ":";
      return n.resetPeek(), b;
    }
    function Pe(n, r) {
      const { currentType: o } = r;
      if (o !== 10)
        return !1;
      const b = () => {
        const s = n.currentPeek();
        return s === "{" ? m(n.peek()) : s === "@" || s === "%" || s === "|" || s === ":" || s === "." || s === h || !s ? !1 : s === y ? (n.peek(), b()) : m(s);
      }, k = b();
      return n.resetPeek(), k;
    }
    function Ye(n) {
      Ce(n);
      const r = n.currentPeek() === "|";
      return n.resetPeek(), r;
    }
    function at(n) {
      const r = Ce(n), o = n.currentPeek() === "%" && n.peek() === "{";
      return n.resetPeek(), {
        isModulo: o,
        hasSpace: r.length > 0
      };
    }
    function xe(n, r = !0) {
      const o = (k = !1, s = "", g = !1) => {
        const S = n.currentPeek();
        return S === "{" ? s === "%" ? !1 : k : S === "@" || !S ? s === "%" ? !0 : k : S === "%" ? (n.peek(), o(k, "%", !0)) : S === "|" ? s === "%" || g ? !0 : !(s === h || s === y) : S === h ? (n.peek(), o(!0, h, g)) : S === y ? (n.peek(), o(!0, y, g)) : !0;
      }, b = o();
      return r && n.resetPeek(), b;
    }
    function Qe(n, r) {
      const o = n.currentChar();
      return o === $ ? $ : r(o) ? (n.next(), o) : null;
    }
    function it(n) {
      return Qe(n, (o) => {
        const b = o.charCodeAt(0);
        return b >= 97 && b <= 122 || b >= 65 && b <= 90 || b >= 48 && b <= 57 || b === 95 || b === 36;
      });
    }
    function Je(n) {
      return Qe(n, (o) => {
        const b = o.charCodeAt(0);
        return b >= 48 && b <= 57;
      });
    }
    function gt(n) {
      return Qe(n, (o) => {
        const b = o.charCodeAt(0);
        return b >= 48 && b <= 57 || b >= 65 && b <= 70 || b >= 97 && b <= 102;
      });
    }
    function Ct(n) {
      let r = "", o = "";
      for (; r = Je(n); )
        o += r;
      return o;
    }
    function At(n) {
      z(n);
      const r = n.currentChar();
      return r !== "%" && le(a.EXPECTED_TOKEN, A(), 0, r), n.next(), "%";
    }
    function ze(n) {
      let r = "";
      for (; ; ) {
        const o = n.currentChar();
        if (o === "{" || o === "}" || o === "@" || o === "|" || !o)
          break;
        if (o === "%")
          if (xe(n))
            r += o, n.next();
          else
            break;
        else if (o === h || o === y)
          if (xe(n))
            r += o, n.next();
          else {
            if (Ye(n))
              break;
            r += o, n.next();
          }
        else
          r += o, n.next();
      }
      return r;
    }
    function wt(n) {
      z(n);
      let r = "", o = "";
      for (; r = it(n); )
        o += r;
      return n.currentChar() === $ && le(a.UNTERMINATED_CLOSING_BRACE, A(), 0), o;
    }
    function Pt(n) {
      z(n);
      let r = "";
      return n.currentChar() === "-" ? (n.next(), r += `-${Ct(n)}`) : r += Ct(n), n.currentChar() === $ && le(a.UNTERMINATED_CLOSING_BRACE, A(), 0), r;
    }
    function Rt(n) {
      z(n), He(n, "'");
      let r = "", o = "";
      const b = (s) => s !== Y && s !== y;
      for (; r = Qe(n, b); )
        r === "\\" ? o += Dt(n) : o += r;
      const k = n.currentChar();
      return k === y || k === $ ? (le(a.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, A(), 0), k === y && (n.next(), He(n, "'")), o) : (He(n, "'"), o);
    }
    function Dt(n) {
      const r = n.currentChar();
      switch (r) {
        case "\\":
        case "'":
          return n.next(), `\\${r}`;
        case "u":
          return It(n, r, 4);
        case "U":
          return It(n, r, 6);
        default:
          return le(a.UNKNOWN_ESCAPE_SEQUENCE, A(), 0, r), "";
      }
    }
    function It(n, r, o) {
      He(n, r);
      let b = "";
      for (let k = 0; k < o; k++) {
        const s = gt(n);
        if (!s) {
          le(a.INVALID_UNICODE_ESCAPE_SEQUENCE, A(), 0, `\\${r}${b}${n.currentChar()}`);
          break;
        }
        b += s;
      }
      return `\\${r}${b}`;
    }
    function kt(n) {
      z(n);
      let r = "", o = "";
      const b = (k) => k !== "{" && k !== "}" && k !== h && k !== y;
      for (; r = Qe(n, b); )
        o += r;
      return o;
    }
    function Ft(n) {
      let r = "", o = "";
      for (; r = it(n); )
        o += r;
      return o;
    }
    function $t(n) {
      const r = (o = !1, b) => {
        const k = n.currentChar();
        return k === "{" || k === "%" || k === "@" || k === "|" || !k || k === h ? b : k === y ? (b += k, n.next(), r(o, b)) : (b += k, n.next(), r(!0, b));
      };
      return r(!1, "");
    }
    function bt(n) {
      z(n);
      const r = He(n, "|");
      return z(n), r;
    }
    function pt(n, r) {
      let o = null;
      switch (n.currentChar()) {
        case "{":
          return r.braceNest >= 1 && le(a.NOT_ALLOW_NEST_PLACEHOLDER, A(), 0), n.next(), o = F(r, 2, "{"), z(n), r.braceNest++, o;
        case "}":
          return r.braceNest > 0 && r.currentType === 2 && le(a.EMPTY_PLACEHOLDER, A(), 0), n.next(), o = F(r, 3, "}"), r.braceNest--, r.braceNest > 0 && z(n), r.inLinked && r.braceNest === 0 && (r.inLinked = !1), o;
        case "@":
          return r.braceNest > 0 && le(a.UNTERMINATED_CLOSING_BRACE, A(), 0), o = dt(n, r) || ue(r), r.braceNest = 0, o;
        default:
          let k = !0, s = !0, g = !0;
          if (Ye(n))
            return r.braceNest > 0 && le(a.UNTERMINATED_CLOSING_BRACE, A(), 0), o = F(r, 1, bt(n)), r.braceNest = 0, r.inLinked = !1, o;
          if (r.braceNest > 0 && (r.currentType === 5 || r.currentType === 6 || r.currentType === 7))
            return le(a.UNTERMINATED_CLOSING_BRACE, A(), 0), r.braceNest = 0, vt(n, r);
          if (k = V(n, r))
            return o = F(r, 5, wt(n)), z(n), o;
          if (s = C(n, r))
            return o = F(r, 6, Pt(n)), z(n), o;
          if (g = L(n, r))
            return o = F(r, 7, Rt(n)), z(n), o;
          if (!k && !s && !g)
            return o = F(r, 13, kt(n)), le(a.INVALID_TOKEN_IN_PLACEHOLDER, A(), 0, o.value), z(n), o;
          break;
      }
      return o;
    }
    function dt(n, r) {
      const { currentType: o } = r;
      let b = null;
      const k = n.currentChar();
      switch ((o === 8 || o === 9 || o === 12 || o === 10) && (k === y || k === h) && le(a.INVALID_LINKED_FORMAT, A(), 0), k) {
        case "@":
          return n.next(), b = F(r, 8, "@"), r.inLinked = !0, b;
        case ".":
          return z(n), n.next(), F(r, 9, ".");
        case ":":
          return z(n), n.next(), F(r, 10, ":");
        default:
          return Ye(n) ? (b = F(r, 1, bt(n)), r.braceNest = 0, r.inLinked = !1, b) : O(n, r) || Fe(n, r) ? (z(n), dt(n, r)) : q(n, r) ? (z(n), F(r, 12, Ft(n))) : Pe(n, r) ? (z(n), k === "{" ? pt(n, r) || b : F(r, 11, $t(n))) : (o === 8 && le(a.INVALID_LINKED_FORMAT, A(), 0), r.braceNest = 0, r.inLinked = !1, vt(n, r));
      }
    }
    function vt(n, r) {
      let o = { type: 14 };
      if (r.braceNest > 0)
        return pt(n, r) || ue(r);
      if (r.inLinked)
        return dt(n, r) || ue(r);
      switch (n.currentChar()) {
        case "{":
          return pt(n, r) || ue(r);
        case "}":
          return le(a.UNBALANCED_CLOSING_BRACE, A(), 0), n.next(), F(r, 3, "}");
        case "@":
          return dt(n, r) || ue(r);
        default:
          if (Ye(n))
            return o = F(r, 1, bt(n)), r.braceNest = 0, r.inLinked = !1, o;
          const { isModulo: k, hasSpace: s } = at(n);
          if (k)
            return s ? F(r, 0, ze(n)) : F(r, 4, At(n));
          if (xe(n))
            return F(r, 0, ze(n));
          break;
      }
      return o;
    }
    function l() {
      const { currentType: n, offset: r, startLoc: o, endLoc: b } = ne;
      return ne.lastType = n, ne.lastOffset = r, ne.lastStartLoc = o, ne.lastEndLoc = b, ne.offset = G(), ne.startLoc = A(), U.currentChar() === $ ? F(ne, 14) : vt(U, ne);
    }
    return {
      nextToken: l,
      currentOffset: G,
      currentPosition: A,
      context: De
    };
  }
  const ae = "parser", D = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
  function T(d, E, I) {
    switch (d) {
      case "\\\\":
        return "\\";
      case "\\'":
        return "'";
      default: {
        const U = parseInt(E || I, 16);
        return U <= 55295 || U >= 57344 ? String.fromCodePoint(U) : "�";
      }
    }
  }
  function ee(d = {}) {
    const E = d.location !== !1, { onError: I } = d;
    function U(m, P, V, C, ...L) {
      const O = m.currentPosition();
      if (O.offset += C, O.column += C, I) {
        const q = p(V, O), Fe = u(P, q, {
          domain: ae,
          args: L
        });
        I(Fe);
      }
    }
    function G(m, P, V) {
      const C = {
        type: m,
        start: P,
        end: P
      };
      return E && (C.loc = { start: V, end: V }), C;
    }
    function A(m, P, V, C) {
      m.end = P, C && (m.type = C), E && m.loc && (m.loc.end = V);
    }
    function Z(m, P) {
      const V = m.context(), C = G(3, V.offset, V.startLoc);
      return C.value = P, A(C, m.currentOffset(), m.currentPosition()), C;
    }
    function ye(m, P) {
      const V = m.context(), { lastOffset: C, lastStartLoc: L } = V, O = G(5, C, L);
      return O.index = parseInt(P, 10), m.nextToken(), A(O, m.currentOffset(), m.currentPosition()), O;
    }
    function ne(m, P) {
      const V = m.context(), { lastOffset: C, lastStartLoc: L } = V, O = G(4, C, L);
      return O.key = P, m.nextToken(), A(O, m.currentOffset(), m.currentPosition()), O;
    }
    function De(m, P) {
      const V = m.context(), { lastOffset: C, lastStartLoc: L } = V, O = G(9, C, L);
      return O.value = P.replace(D, T), m.nextToken(), A(O, m.currentOffset(), m.currentPosition()), O;
    }
    function We(m) {
      const P = m.nextToken(), V = m.context(), { lastOffset: C, lastStartLoc: L } = V, O = G(8, C, L);
      return P.type !== 12 ? (U(m, a.UNEXPECTED_EMPTY_LINKED_MODIFIER, V.lastStartLoc, 0), O.value = "", A(O, C, L), {
        nextConsumeToken: P,
        node: O
      }) : (P.value == null && U(m, a.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, K(P)), O.value = P.value || "", A(O, m.currentOffset(), m.currentPosition()), {
        node: O
      });
    }
    function le(m, P) {
      const V = m.context(), C = G(7, V.offset, V.startLoc);
      return C.value = P, A(C, m.currentOffset(), m.currentPosition()), C;
    }
    function F(m) {
      const P = m.context(), V = G(6, P.offset, P.startLoc);
      let C = m.nextToken();
      if (C.type === 9) {
        const L = We(m);
        V.modifier = L.node, C = L.nextConsumeToken || m.nextToken();
      }
      switch (C.type !== 10 && U(m, a.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, K(C)), C = m.nextToken(), C.type === 2 && (C = m.nextToken()), C.type) {
        case 11:
          C.value == null && U(m, a.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, K(C)), V.key = le(m, C.value || "");
          break;
        case 5:
          C.value == null && U(m, a.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, K(C)), V.key = ne(m, C.value || "");
          break;
        case 6:
          C.value == null && U(m, a.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, K(C)), V.key = ye(m, C.value || "");
          break;
        case 7:
          C.value == null && U(m, a.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, K(C)), V.key = De(m, C.value || "");
          break;
        default:
          U(m, a.UNEXPECTED_EMPTY_LINKED_KEY, P.lastStartLoc, 0);
          const L = m.context(), O = G(7, L.offset, L.startLoc);
          return O.value = "", A(O, L.offset, L.startLoc), V.key = O, A(V, L.offset, L.startLoc), {
            nextConsumeToken: C,
            node: V
          };
      }
      return A(V, m.currentOffset(), m.currentPosition()), {
        node: V
      };
    }
    function ue(m) {
      const P = m.context(), V = P.currentType === 1 ? m.currentOffset() : P.offset, C = P.currentType === 1 ? P.endLoc : P.startLoc, L = G(2, V, C);
      L.items = [];
      let O = null;
      do {
        const Pe = O || m.nextToken();
        switch (O = null, Pe.type) {
          case 0:
            Pe.value == null && U(m, a.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, K(Pe)), L.items.push(Z(m, Pe.value || ""));
            break;
          case 6:
            Pe.value == null && U(m, a.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, K(Pe)), L.items.push(ye(m, Pe.value || ""));
            break;
          case 5:
            Pe.value == null && U(m, a.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, K(Pe)), L.items.push(ne(m, Pe.value || ""));
            break;
          case 7:
            Pe.value == null && U(m, a.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, K(Pe)), L.items.push(De(m, Pe.value || ""));
            break;
          case 8:
            const Ye = F(m);
            L.items.push(Ye.node), O = Ye.nextConsumeToken || null;
            break;
        }
      } while (P.currentType !== 14 && P.currentType !== 1);
      const q = P.currentType === 1 ? P.lastOffset : m.currentOffset(), Fe = P.currentType === 1 ? P.lastEndLoc : m.currentPosition();
      return A(L, q, Fe), L;
    }
    function He(m, P, V, C) {
      const L = m.context();
      let O = C.items.length === 0;
      const q = G(1, P, V);
      q.cases = [], q.cases.push(C);
      do {
        const Fe = ue(m);
        O || (O = Fe.items.length === 0), q.cases.push(Fe);
      } while (L.currentType !== 14);
      return O && U(m, a.MUST_HAVE_MESSAGES_IN_PLURAL, V, 0), A(q, m.currentOffset(), m.currentPosition()), q;
    }
    function Ce(m) {
      const P = m.context(), { offset: V, startLoc: C } = P, L = ue(m);
      return P.currentType === 14 ? L : He(m, V, C, L);
    }
    function z(m) {
      const P = J(m, e.assign({}, d)), V = P.context(), C = G(0, V.offset, V.startLoc);
      return E && C.loc && (C.loc.source = m), C.body = Ce(P), V.currentType !== 14 && U(P, a.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, m[V.offset] || ""), A(C, P.currentOffset(), P.currentPosition()), C;
    }
    return { parse: z };
  }
  function K(d) {
    if (d.type === 14)
      return "EOF";
    const E = (d.value || "").replace(/\r?\n/gu, "\\n");
    return E.length > 10 ? E.slice(0, 9) + "…" : E;
  }
  function be(d, E = {}) {
    const I = {
      ast: d,
      helpers: /* @__PURE__ */ new Set()
    };
    return { context: () => I, helper: (A) => (I.helpers.add(A), A) };
  }
  function $e(d, E) {
    for (let I = 0; I < d.length; I++)
      Le(d[I], E);
  }
  function Le(d, E) {
    switch (d.type) {
      case 1:
        $e(d.cases, E), E.helper("plural");
        break;
      case 2:
        $e(d.items, E);
        break;
      case 6:
        Le(d.key, E), E.helper("linked"), E.helper("type");
        break;
      case 5:
        E.helper("interpolate"), E.helper("list");
        break;
      case 4:
        E.helper("interpolate"), E.helper("named");
        break;
    }
  }
  function je(d, E = {}) {
    const I = be(d);
    I.helper("normalize"), d.body && Le(d.body, I);
    const U = I.context();
    d.helpers = Array.from(U.helpers);
  }
  function Me(d, E) {
    const { sourceMap: I, filename: U, breakLineCode: G, needIndent: A } = E, Z = {
      source: d.loc.source,
      filename: U,
      code: "",
      column: 1,
      line: 1,
      offset: 0,
      map: void 0,
      breakLineCode: G,
      needIndent: A,
      indentLevel: 0
    }, ye = () => Z;
    function ne(z, m) {
      Z.code += z, Z.map && (m && m.loc && m.loc !== c && Ce(m.loc.start, fe(m)), me(Z, z));
    }
    function De(z, m = !0) {
      const P = m ? G : "";
      ne(A ? P + "  ".repeat(z) : P);
    }
    function We(z = !0) {
      const m = ++Z.indentLevel;
      z && De(m);
    }
    function le(z = !0) {
      const m = --Z.indentLevel;
      z && De(m);
    }
    function F() {
      De(Z.indentLevel);
    }
    const ue = (z) => `_${z}`, He = () => Z.needIndent;
    function Ce(z, m) {
      Z.map.addMapping({
        name: m,
        source: Z.filename,
        original: {
          line: z.line,
          column: z.column - 1
        },
        generated: {
          line: Z.line,
          column: Z.column - 1
        }
      });
    }
    return I && (Z.map = new t.SourceMapGenerator(), Z.map.setSourceContent(U, Z.source)), {
      context: ye,
      push: ne,
      indent: We,
      deindent: le,
      newline: F,
      helper: ue,
      needIndent: He
    };
  }
  function tt(d, E) {
    const { helper: I } = d;
    d.push(`${I("linked")}(`), de(d, E.key), E.modifier ? (d.push(", "), de(d, E.modifier), d.push(", _type")) : d.push(", undefined, _type"), d.push(")");
  }
  function Ze(d, E) {
    const { helper: I, needIndent: U } = d;
    d.push(`${I("normalize")}([`), d.indent(U());
    const G = E.items.length;
    for (let A = 0; A < G && (de(d, E.items[A]), A !== G - 1); A++)
      d.push(", ");
    d.deindent(U()), d.push("])");
  }
  function nt(d, E) {
    const { helper: I, needIndent: U } = d;
    if (E.cases.length > 1) {
      d.push(`${I("plural")}([`), d.indent(U());
      const G = E.cases.length;
      for (let A = 0; A < G && (de(d, E.cases[A]), A !== G - 1); A++)
        d.push(", ");
      d.deindent(U()), d.push("])");
    }
  }
  function Q(d, E) {
    E.body ? de(d, E.body) : d.push("null");
  }
  function de(d, E) {
    const { helper: I } = d;
    switch (E.type) {
      case 0:
        Q(d, E);
        break;
      case 1:
        nt(d, E);
        break;
      case 2:
        Ze(d, E);
        break;
      case 6:
        tt(d, E);
        break;
      case 8:
        d.push(JSON.stringify(E.value), E);
        break;
      case 7:
        d.push(JSON.stringify(E.value), E);
        break;
      case 5:
        d.push(`${I("interpolate")}(${I("list")}(${E.index}))`, E);
        break;
      case 4:
        d.push(`${I("interpolate")}(${I("named")}(${JSON.stringify(E.key)}))`, E);
        break;
      case 9:
        d.push(JSON.stringify(E.value), E);
        break;
      case 3:
        d.push(JSON.stringify(E.value), E);
        break;
    }
  }
  const X = (d, E = {}) => {
    const I = e.isString(E.mode) ? E.mode : "normal", U = e.isString(E.filename) ? E.filename : "message.intl", G = !!E.sourceMap, A = E.breakLineCode != null ? E.breakLineCode : I === "arrow" ? ";" : `
`, Z = E.needIndent ? E.needIndent : I !== "arrow", ye = d.helpers || [], ne = Me(d, {
      mode: I,
      filename: U,
      sourceMap: G,
      breakLineCode: A,
      needIndent: Z
    });
    ne.push(I === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), ne.indent(Z), ye.length > 0 && (ne.push(`const { ${ye.map((le) => `${le}: _${le}`).join(", ")} } = ctx`), ne.newline()), ne.push("return "), de(ne, d), ne.deindent(Z), ne.push("}");
    const { code: De, map: We } = ne.context();
    return {
      ast: d,
      code: De,
      map: We ? We.toJSON() : void 0
    };
  };
  function fe(d) {
    switch (d.type) {
      case 3:
      case 9:
      case 8:
      case 7:
        return d.value;
      case 5:
        return d.index.toString();
      case 4:
        return d.key;
      default:
        return;
    }
  }
  function me(d, E, I = E.length) {
    let U = 0, G = -1;
    for (let A = 0; A < I; A++)
      E.charCodeAt(A) === 10 && (U++, G = A);
    return d.offset += I, d.line += U, d.column = G === -1 ? d.column + I : I - G, d;
  }
  function Ie(d, E = {}) {
    const I = e.assign({}, E), G = ee(I).parse(d);
    return je(G, I), X(G, I);
  }
  return ht.CompileErrorCodes = a, ht.ERROR_DOMAIN = ae, ht.LocationStub = c, ht.baseCompile = Ie, ht.createCompileError = u, ht.createLocation = p, ht.createParser = ee, ht.createPosition = _, ht.defaultOnError = i, ht.errorMessages = f, ht;
}
var Et = {};
/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
var Bn;
function Vr() {
  if (Bn)
    return Et;
  Bn = 1, Object.defineProperty(Et, "__esModule", { value: !0 });
  var e = Ut, t = lr();
  const a = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    __EXTEND_POINT__: 15
  }, f = {
    [a.EXPECTED_TOKEN]: "Expected token: '{0}'",
    [a.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
    [a.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
    [a.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
    [a.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
    [a.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
    [a.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
    [a.EMPTY_PLACEHOLDER]: "Empty placeholder",
    [a.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
    [a.INVALID_LINKED_FORMAT]: "Invalid linked format",
    [a.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
    [a.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
    [a.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
    [a.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'"
  };
  function u(d, E, I = {}) {
    const { domain: U, messages: G, args: A } = I, Z = e.format((G || f)[d] || "", ...A || []), ye = new SyntaxError(String(Z));
    return ye.code = d, E && (ye.location = E), ye.domain = U, ye;
  }
  function i(d) {
    throw d;
  }
  const c = {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 1, column: 1, offset: 0 }
  };
  function _(d, E, I) {
    return { line: d, column: E, offset: I };
  }
  function p(d, E, I) {
    const U = { start: d, end: E };
    return I != null && (U.source = I), U;
  }
  const h = " ", v = "\r", y = `
`, w = String.fromCharCode(8232), M = String.fromCharCode(8233);
  function j(d) {
    const E = d;
    let I = 0, U = 1, G = 1, A = 0;
    const Z = (q) => E[q] === v && E[q + 1] === y, ye = (q) => E[q] === y, ne = (q) => E[q] === M, De = (q) => E[q] === w, We = (q) => Z(q) || ye(q) || ne(q) || De(q), le = () => I, F = () => U, ue = () => G, He = () => A, Ce = (q) => Z(q) || ne(q) || De(q) ? y : E[q], z = () => Ce(I), m = () => Ce(I + A);
    function P() {
      return A = 0, We(I) && (U++, G = 0), Z(I) && I++, I++, G++, E[I];
    }
    function V() {
      return Z(I + A) && A++, A++, E[I + A];
    }
    function C() {
      I = 0, U = 1, G = 1, A = 0;
    }
    function L(q = 0) {
      A = q;
    }
    function O() {
      const q = I + A;
      for (; q !== I; )
        P();
      A = 0;
    }
    return {
      index: le,
      line: F,
      column: ue,
      peekOffset: He,
      charAt: Ce,
      currentChar: z,
      currentPeek: m,
      next: P,
      peek: V,
      reset: C,
      resetPeek: L,
      skipToPeek: O
    };
  }
  const $ = void 0, Y = "'", oe = "tokenizer";
  function J(d, E = {}) {
    const I = E.location !== !1, U = j(d), G = () => U.index(), A = () => _(U.line(), U.column(), U.index()), Z = A(), ye = G(), ne = {
      currentType: 14,
      offset: ye,
      startLoc: Z,
      endLoc: Z,
      lastType: 14,
      lastOffset: ye,
      lastStartLoc: Z,
      lastEndLoc: Z,
      braceNest: 0,
      inLinked: !1,
      text: ""
    }, De = () => ne, { onError: We } = E;
    function le(n, r, o, ...b) {
      const k = De();
      if (r.column += o, r.offset += o, We) {
        const s = p(k.startLoc, r), g = u(n, s, {
          domain: oe,
          args: b
        });
        We(g);
      }
    }
    function F(n, r, o) {
      n.endLoc = A(), n.currentType = r;
      const b = { type: r };
      return I && (b.loc = p(n.startLoc, n.endLoc)), o != null && (b.value = o), b;
    }
    const ue = (n) => F(n, 14);
    function He(n, r) {
      return n.currentChar() === r ? (n.next(), r) : (le(a.EXPECTED_TOKEN, A(), 0, r), "");
    }
    function Ce(n) {
      let r = "";
      for (; n.currentPeek() === h || n.currentPeek() === y; )
        r += n.currentPeek(), n.peek();
      return r;
    }
    function z(n) {
      const r = Ce(n);
      return n.skipToPeek(), r;
    }
    function m(n) {
      if (n === $)
        return !1;
      const r = n.charCodeAt(0);
      return r >= 97 && r <= 122 || r >= 65 && r <= 90 || r === 95;
    }
    function P(n) {
      if (n === $)
        return !1;
      const r = n.charCodeAt(0);
      return r >= 48 && r <= 57;
    }
    function V(n, r) {
      const { currentType: o } = r;
      if (o !== 2)
        return !1;
      Ce(n);
      const b = m(n.currentPeek());
      return n.resetPeek(), b;
    }
    function C(n, r) {
      const { currentType: o } = r;
      if (o !== 2)
        return !1;
      Ce(n);
      const b = n.currentPeek() === "-" ? n.peek() : n.currentPeek(), k = P(b);
      return n.resetPeek(), k;
    }
    function L(n, r) {
      const { currentType: o } = r;
      if (o !== 2)
        return !1;
      Ce(n);
      const b = n.currentPeek() === Y;
      return n.resetPeek(), b;
    }
    function O(n, r) {
      const { currentType: o } = r;
      if (o !== 8)
        return !1;
      Ce(n);
      const b = n.currentPeek() === ".";
      return n.resetPeek(), b;
    }
    function q(n, r) {
      const { currentType: o } = r;
      if (o !== 9)
        return !1;
      Ce(n);
      const b = m(n.currentPeek());
      return n.resetPeek(), b;
    }
    function Fe(n, r) {
      const { currentType: o } = r;
      if (!(o === 8 || o === 12))
        return !1;
      Ce(n);
      const b = n.currentPeek() === ":";
      return n.resetPeek(), b;
    }
    function Pe(n, r) {
      const { currentType: o } = r;
      if (o !== 10)
        return !1;
      const b = () => {
        const s = n.currentPeek();
        return s === "{" ? m(n.peek()) : s === "@" || s === "%" || s === "|" || s === ":" || s === "." || s === h || !s ? !1 : s === y ? (n.peek(), b()) : m(s);
      }, k = b();
      return n.resetPeek(), k;
    }
    function Ye(n) {
      Ce(n);
      const r = n.currentPeek() === "|";
      return n.resetPeek(), r;
    }
    function at(n) {
      const r = Ce(n), o = n.currentPeek() === "%" && n.peek() === "{";
      return n.resetPeek(), {
        isModulo: o,
        hasSpace: r.length > 0
      };
    }
    function xe(n, r = !0) {
      const o = (k = !1, s = "", g = !1) => {
        const S = n.currentPeek();
        return S === "{" ? s === "%" ? !1 : k : S === "@" || !S ? s === "%" ? !0 : k : S === "%" ? (n.peek(), o(k, "%", !0)) : S === "|" ? s === "%" || g ? !0 : !(s === h || s === y) : S === h ? (n.peek(), o(!0, h, g)) : S === y ? (n.peek(), o(!0, y, g)) : !0;
      }, b = o();
      return r && n.resetPeek(), b;
    }
    function Qe(n, r) {
      const o = n.currentChar();
      return o === $ ? $ : r(o) ? (n.next(), o) : null;
    }
    function it(n) {
      return Qe(n, (o) => {
        const b = o.charCodeAt(0);
        return b >= 97 && b <= 122 || b >= 65 && b <= 90 || b >= 48 && b <= 57 || b === 95 || b === 36;
      });
    }
    function Je(n) {
      return Qe(n, (o) => {
        const b = o.charCodeAt(0);
        return b >= 48 && b <= 57;
      });
    }
    function gt(n) {
      return Qe(n, (o) => {
        const b = o.charCodeAt(0);
        return b >= 48 && b <= 57 || b >= 65 && b <= 70 || b >= 97 && b <= 102;
      });
    }
    function Ct(n) {
      let r = "", o = "";
      for (; r = Je(n); )
        o += r;
      return o;
    }
    function At(n) {
      z(n);
      const r = n.currentChar();
      return r !== "%" && le(a.EXPECTED_TOKEN, A(), 0, r), n.next(), "%";
    }
    function ze(n) {
      let r = "";
      for (; ; ) {
        const o = n.currentChar();
        if (o === "{" || o === "}" || o === "@" || o === "|" || !o)
          break;
        if (o === "%")
          if (xe(n))
            r += o, n.next();
          else
            break;
        else if (o === h || o === y)
          if (xe(n))
            r += o, n.next();
          else {
            if (Ye(n))
              break;
            r += o, n.next();
          }
        else
          r += o, n.next();
      }
      return r;
    }
    function wt(n) {
      z(n);
      let r = "", o = "";
      for (; r = it(n); )
        o += r;
      return n.currentChar() === $ && le(a.UNTERMINATED_CLOSING_BRACE, A(), 0), o;
    }
    function Pt(n) {
      z(n);
      let r = "";
      return n.currentChar() === "-" ? (n.next(), r += `-${Ct(n)}`) : r += Ct(n), n.currentChar() === $ && le(a.UNTERMINATED_CLOSING_BRACE, A(), 0), r;
    }
    function Rt(n) {
      z(n), He(n, "'");
      let r = "", o = "";
      const b = (s) => s !== Y && s !== y;
      for (; r = Qe(n, b); )
        r === "\\" ? o += Dt(n) : o += r;
      const k = n.currentChar();
      return k === y || k === $ ? (le(a.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, A(), 0), k === y && (n.next(), He(n, "'")), o) : (He(n, "'"), o);
    }
    function Dt(n) {
      const r = n.currentChar();
      switch (r) {
        case "\\":
        case "'":
          return n.next(), `\\${r}`;
        case "u":
          return It(n, r, 4);
        case "U":
          return It(n, r, 6);
        default:
          return le(a.UNKNOWN_ESCAPE_SEQUENCE, A(), 0, r), "";
      }
    }
    function It(n, r, o) {
      He(n, r);
      let b = "";
      for (let k = 0; k < o; k++) {
        const s = gt(n);
        if (!s) {
          le(a.INVALID_UNICODE_ESCAPE_SEQUENCE, A(), 0, `\\${r}${b}${n.currentChar()}`);
          break;
        }
        b += s;
      }
      return `\\${r}${b}`;
    }
    function kt(n) {
      z(n);
      let r = "", o = "";
      const b = (k) => k !== "{" && k !== "}" && k !== h && k !== y;
      for (; r = Qe(n, b); )
        o += r;
      return o;
    }
    function Ft(n) {
      let r = "", o = "";
      for (; r = it(n); )
        o += r;
      return o;
    }
    function $t(n) {
      const r = (o = !1, b) => {
        const k = n.currentChar();
        return k === "{" || k === "%" || k === "@" || k === "|" || !k || k === h ? b : k === y ? (b += k, n.next(), r(o, b)) : (b += k, n.next(), r(!0, b));
      };
      return r(!1, "");
    }
    function bt(n) {
      z(n);
      const r = He(n, "|");
      return z(n), r;
    }
    function pt(n, r) {
      let o = null;
      switch (n.currentChar()) {
        case "{":
          return r.braceNest >= 1 && le(a.NOT_ALLOW_NEST_PLACEHOLDER, A(), 0), n.next(), o = F(r, 2, "{"), z(n), r.braceNest++, o;
        case "}":
          return r.braceNest > 0 && r.currentType === 2 && le(a.EMPTY_PLACEHOLDER, A(), 0), n.next(), o = F(r, 3, "}"), r.braceNest--, r.braceNest > 0 && z(n), r.inLinked && r.braceNest === 0 && (r.inLinked = !1), o;
        case "@":
          return r.braceNest > 0 && le(a.UNTERMINATED_CLOSING_BRACE, A(), 0), o = dt(n, r) || ue(r), r.braceNest = 0, o;
        default:
          let k = !0, s = !0, g = !0;
          if (Ye(n))
            return r.braceNest > 0 && le(a.UNTERMINATED_CLOSING_BRACE, A(), 0), o = F(r, 1, bt(n)), r.braceNest = 0, r.inLinked = !1, o;
          if (r.braceNest > 0 && (r.currentType === 5 || r.currentType === 6 || r.currentType === 7))
            return le(a.UNTERMINATED_CLOSING_BRACE, A(), 0), r.braceNest = 0, vt(n, r);
          if (k = V(n, r))
            return o = F(r, 5, wt(n)), z(n), o;
          if (s = C(n, r))
            return o = F(r, 6, Pt(n)), z(n), o;
          if (g = L(n, r))
            return o = F(r, 7, Rt(n)), z(n), o;
          if (!k && !s && !g)
            return o = F(r, 13, kt(n)), le(a.INVALID_TOKEN_IN_PLACEHOLDER, A(), 0, o.value), z(n), o;
          break;
      }
      return o;
    }
    function dt(n, r) {
      const { currentType: o } = r;
      let b = null;
      const k = n.currentChar();
      switch ((o === 8 || o === 9 || o === 12 || o === 10) && (k === y || k === h) && le(a.INVALID_LINKED_FORMAT, A(), 0), k) {
        case "@":
          return n.next(), b = F(r, 8, "@"), r.inLinked = !0, b;
        case ".":
          return z(n), n.next(), F(r, 9, ".");
        case ":":
          return z(n), n.next(), F(r, 10, ":");
        default:
          return Ye(n) ? (b = F(r, 1, bt(n)), r.braceNest = 0, r.inLinked = !1, b) : O(n, r) || Fe(n, r) ? (z(n), dt(n, r)) : q(n, r) ? (z(n), F(r, 12, Ft(n))) : Pe(n, r) ? (z(n), k === "{" ? pt(n, r) || b : F(r, 11, $t(n))) : (o === 8 && le(a.INVALID_LINKED_FORMAT, A(), 0), r.braceNest = 0, r.inLinked = !1, vt(n, r));
      }
    }
    function vt(n, r) {
      let o = { type: 14 };
      if (r.braceNest > 0)
        return pt(n, r) || ue(r);
      if (r.inLinked)
        return dt(n, r) || ue(r);
      switch (n.currentChar()) {
        case "{":
          return pt(n, r) || ue(r);
        case "}":
          return le(a.UNBALANCED_CLOSING_BRACE, A(), 0), n.next(), F(r, 3, "}");
        case "@":
          return dt(n, r) || ue(r);
        default:
          if (Ye(n))
            return o = F(r, 1, bt(n)), r.braceNest = 0, r.inLinked = !1, o;
          const { isModulo: k, hasSpace: s } = at(n);
          if (k)
            return s ? F(r, 0, ze(n)) : F(r, 4, At(n));
          if (xe(n))
            return F(r, 0, ze(n));
          break;
      }
      return o;
    }
    function l() {
      const { currentType: n, offset: r, startLoc: o, endLoc: b } = ne;
      return ne.lastType = n, ne.lastOffset = r, ne.lastStartLoc = o, ne.lastEndLoc = b, ne.offset = G(), ne.startLoc = A(), U.currentChar() === $ ? F(ne, 14) : vt(U, ne);
    }
    return {
      nextToken: l,
      currentOffset: G,
      currentPosition: A,
      context: De
    };
  }
  const ae = "parser", D = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
  function T(d, E, I) {
    switch (d) {
      case "\\\\":
        return "\\";
      case "\\'":
        return "'";
      default: {
        const U = parseInt(E || I, 16);
        return U <= 55295 || U >= 57344 ? String.fromCodePoint(U) : "�";
      }
    }
  }
  function ee(d = {}) {
    const E = d.location !== !1, { onError: I } = d;
    function U(m, P, V, C, ...L) {
      const O = m.currentPosition();
      if (O.offset += C, O.column += C, I) {
        const q = p(V, O), Fe = u(P, q, {
          domain: ae,
          args: L
        });
        I(Fe);
      }
    }
    function G(m, P, V) {
      const C = {
        type: m,
        start: P,
        end: P
      };
      return E && (C.loc = { start: V, end: V }), C;
    }
    function A(m, P, V, C) {
      m.end = P, C && (m.type = C), E && m.loc && (m.loc.end = V);
    }
    function Z(m, P) {
      const V = m.context(), C = G(3, V.offset, V.startLoc);
      return C.value = P, A(C, m.currentOffset(), m.currentPosition()), C;
    }
    function ye(m, P) {
      const V = m.context(), { lastOffset: C, lastStartLoc: L } = V, O = G(5, C, L);
      return O.index = parseInt(P, 10), m.nextToken(), A(O, m.currentOffset(), m.currentPosition()), O;
    }
    function ne(m, P) {
      const V = m.context(), { lastOffset: C, lastStartLoc: L } = V, O = G(4, C, L);
      return O.key = P, m.nextToken(), A(O, m.currentOffset(), m.currentPosition()), O;
    }
    function De(m, P) {
      const V = m.context(), { lastOffset: C, lastStartLoc: L } = V, O = G(9, C, L);
      return O.value = P.replace(D, T), m.nextToken(), A(O, m.currentOffset(), m.currentPosition()), O;
    }
    function We(m) {
      const P = m.nextToken(), V = m.context(), { lastOffset: C, lastStartLoc: L } = V, O = G(8, C, L);
      return P.type !== 12 ? (U(m, a.UNEXPECTED_EMPTY_LINKED_MODIFIER, V.lastStartLoc, 0), O.value = "", A(O, C, L), {
        nextConsumeToken: P,
        node: O
      }) : (P.value == null && U(m, a.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, K(P)), O.value = P.value || "", A(O, m.currentOffset(), m.currentPosition()), {
        node: O
      });
    }
    function le(m, P) {
      const V = m.context(), C = G(7, V.offset, V.startLoc);
      return C.value = P, A(C, m.currentOffset(), m.currentPosition()), C;
    }
    function F(m) {
      const P = m.context(), V = G(6, P.offset, P.startLoc);
      let C = m.nextToken();
      if (C.type === 9) {
        const L = We(m);
        V.modifier = L.node, C = L.nextConsumeToken || m.nextToken();
      }
      switch (C.type !== 10 && U(m, a.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, K(C)), C = m.nextToken(), C.type === 2 && (C = m.nextToken()), C.type) {
        case 11:
          C.value == null && U(m, a.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, K(C)), V.key = le(m, C.value || "");
          break;
        case 5:
          C.value == null && U(m, a.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, K(C)), V.key = ne(m, C.value || "");
          break;
        case 6:
          C.value == null && U(m, a.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, K(C)), V.key = ye(m, C.value || "");
          break;
        case 7:
          C.value == null && U(m, a.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, K(C)), V.key = De(m, C.value || "");
          break;
        default:
          U(m, a.UNEXPECTED_EMPTY_LINKED_KEY, P.lastStartLoc, 0);
          const L = m.context(), O = G(7, L.offset, L.startLoc);
          return O.value = "", A(O, L.offset, L.startLoc), V.key = O, A(V, L.offset, L.startLoc), {
            nextConsumeToken: C,
            node: V
          };
      }
      return A(V, m.currentOffset(), m.currentPosition()), {
        node: V
      };
    }
    function ue(m) {
      const P = m.context(), V = P.currentType === 1 ? m.currentOffset() : P.offset, C = P.currentType === 1 ? P.endLoc : P.startLoc, L = G(2, V, C);
      L.items = [];
      let O = null;
      do {
        const Pe = O || m.nextToken();
        switch (O = null, Pe.type) {
          case 0:
            Pe.value == null && U(m, a.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, K(Pe)), L.items.push(Z(m, Pe.value || ""));
            break;
          case 6:
            Pe.value == null && U(m, a.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, K(Pe)), L.items.push(ye(m, Pe.value || ""));
            break;
          case 5:
            Pe.value == null && U(m, a.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, K(Pe)), L.items.push(ne(m, Pe.value || ""));
            break;
          case 7:
            Pe.value == null && U(m, a.UNEXPECTED_LEXICAL_ANALYSIS, P.lastStartLoc, 0, K(Pe)), L.items.push(De(m, Pe.value || ""));
            break;
          case 8:
            const Ye = F(m);
            L.items.push(Ye.node), O = Ye.nextConsumeToken || null;
            break;
        }
      } while (P.currentType !== 14 && P.currentType !== 1);
      const q = P.currentType === 1 ? P.lastOffset : m.currentOffset(), Fe = P.currentType === 1 ? P.lastEndLoc : m.currentPosition();
      return A(L, q, Fe), L;
    }
    function He(m, P, V, C) {
      const L = m.context();
      let O = C.items.length === 0;
      const q = G(1, P, V);
      q.cases = [], q.cases.push(C);
      do {
        const Fe = ue(m);
        O || (O = Fe.items.length === 0), q.cases.push(Fe);
      } while (L.currentType !== 14);
      return O && U(m, a.MUST_HAVE_MESSAGES_IN_PLURAL, V, 0), A(q, m.currentOffset(), m.currentPosition()), q;
    }
    function Ce(m) {
      const P = m.context(), { offset: V, startLoc: C } = P, L = ue(m);
      return P.currentType === 14 ? L : He(m, V, C, L);
    }
    function z(m) {
      const P = J(m, e.assign({}, d)), V = P.context(), C = G(0, V.offset, V.startLoc);
      return E && C.loc && (C.loc.source = m), C.body = Ce(P), V.currentType !== 14 && U(P, a.UNEXPECTED_LEXICAL_ANALYSIS, V.lastStartLoc, 0, m[V.offset] || ""), A(C, P.currentOffset(), P.currentPosition()), C;
    }
    return { parse: z };
  }
  function K(d) {
    if (d.type === 14)
      return "EOF";
    const E = (d.value || "").replace(/\r?\n/gu, "\\n");
    return E.length > 10 ? E.slice(0, 9) + "…" : E;
  }
  function be(d, E = {}) {
    const I = {
      ast: d,
      helpers: /* @__PURE__ */ new Set()
    };
    return { context: () => I, helper: (A) => (I.helpers.add(A), A) };
  }
  function $e(d, E) {
    for (let I = 0; I < d.length; I++)
      Le(d[I], E);
  }
  function Le(d, E) {
    switch (d.type) {
      case 1:
        $e(d.cases, E), E.helper("plural");
        break;
      case 2:
        $e(d.items, E);
        break;
      case 6:
        Le(d.key, E), E.helper("linked"), E.helper("type");
        break;
      case 5:
        E.helper("interpolate"), E.helper("list");
        break;
      case 4:
        E.helper("interpolate"), E.helper("named");
        break;
    }
  }
  function je(d, E = {}) {
    const I = be(d);
    I.helper("normalize"), d.body && Le(d.body, I);
    const U = I.context();
    d.helpers = Array.from(U.helpers);
  }
  function Me(d, E) {
    const { sourceMap: I, filename: U, breakLineCode: G, needIndent: A } = E, Z = {
      source: d.loc.source,
      filename: U,
      code: "",
      column: 1,
      line: 1,
      offset: 0,
      map: void 0,
      breakLineCode: G,
      needIndent: A,
      indentLevel: 0
    }, ye = () => Z;
    function ne(z, m) {
      Z.code += z, Z.map && (m && m.loc && m.loc !== c && Ce(m.loc.start, fe(m)), me(Z, z));
    }
    function De(z, m = !0) {
      const P = m ? G : "";
      ne(A ? P + "  ".repeat(z) : P);
    }
    function We(z = !0) {
      const m = ++Z.indentLevel;
      z && De(m);
    }
    function le(z = !0) {
      const m = --Z.indentLevel;
      z && De(m);
    }
    function F() {
      De(Z.indentLevel);
    }
    const ue = (z) => `_${z}`, He = () => Z.needIndent;
    function Ce(z, m) {
      Z.map.addMapping({
        name: m,
        source: Z.filename,
        original: {
          line: z.line,
          column: z.column - 1
        },
        generated: {
          line: Z.line,
          column: Z.column - 1
        }
      });
    }
    return I && (Z.map = new t.SourceMapGenerator(), Z.map.setSourceContent(U, Z.source)), {
      context: ye,
      push: ne,
      indent: We,
      deindent: le,
      newline: F,
      helper: ue,
      needIndent: He
    };
  }
  function tt(d, E) {
    const { helper: I } = d;
    d.push(`${I("linked")}(`), de(d, E.key), E.modifier ? (d.push(", "), de(d, E.modifier), d.push(", _type")) : d.push(", undefined, _type"), d.push(")");
  }
  function Ze(d, E) {
    const { helper: I, needIndent: U } = d;
    d.push(`${I("normalize")}([`), d.indent(U());
    const G = E.items.length;
    for (let A = 0; A < G && (de(d, E.items[A]), A !== G - 1); A++)
      d.push(", ");
    d.deindent(U()), d.push("])");
  }
  function nt(d, E) {
    const { helper: I, needIndent: U } = d;
    if (E.cases.length > 1) {
      d.push(`${I("plural")}([`), d.indent(U());
      const G = E.cases.length;
      for (let A = 0; A < G && (de(d, E.cases[A]), A !== G - 1); A++)
        d.push(", ");
      d.deindent(U()), d.push("])");
    }
  }
  function Q(d, E) {
    E.body ? de(d, E.body) : d.push("null");
  }
  function de(d, E) {
    const { helper: I } = d;
    switch (E.type) {
      case 0:
        Q(d, E);
        break;
      case 1:
        nt(d, E);
        break;
      case 2:
        Ze(d, E);
        break;
      case 6:
        tt(d, E);
        break;
      case 8:
        d.push(JSON.stringify(E.value), E);
        break;
      case 7:
        d.push(JSON.stringify(E.value), E);
        break;
      case 5:
        d.push(`${I("interpolate")}(${I("list")}(${E.index}))`, E);
        break;
      case 4:
        d.push(`${I("interpolate")}(${I("named")}(${JSON.stringify(E.key)}))`, E);
        break;
      case 9:
        d.push(JSON.stringify(E.value), E);
        break;
      case 3:
        d.push(JSON.stringify(E.value), E);
        break;
      default:
        throw new Error(`unhandled codegen node type: ${E.type}`);
    }
  }
  const X = (d, E = {}) => {
    const I = e.isString(E.mode) ? E.mode : "normal", U = e.isString(E.filename) ? E.filename : "message.intl", G = !!E.sourceMap, A = E.breakLineCode != null ? E.breakLineCode : I === "arrow" ? ";" : `
`, Z = E.needIndent ? E.needIndent : I !== "arrow", ye = d.helpers || [], ne = Me(d, {
      mode: I,
      filename: U,
      sourceMap: G,
      breakLineCode: A,
      needIndent: Z
    });
    ne.push(I === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), ne.indent(Z), ye.length > 0 && (ne.push(`const { ${ye.map((le) => `${le}: _${le}`).join(", ")} } = ctx`), ne.newline()), ne.push("return "), de(ne, d), ne.deindent(Z), ne.push("}");
    const { code: De, map: We } = ne.context();
    return {
      ast: d,
      code: De,
      map: We ? We.toJSON() : void 0
    };
  };
  function fe(d) {
    switch (d.type) {
      case 3:
      case 9:
      case 8:
      case 7:
        return d.value;
      case 5:
        return d.index.toString();
      case 4:
        return d.key;
      default:
        return;
    }
  }
  function me(d, E, I = E.length) {
    let U = 0, G = -1;
    for (let A = 0; A < I; A++)
      E.charCodeAt(A) === 10 && (U++, G = A);
    return d.offset += I, d.line += U, d.column = G === -1 ? d.column + I : I - G, d;
  }
  function Ie(d, E = {}) {
    const I = e.assign({}, E), G = ee(I).parse(d);
    return je(G, I), X(G, I);
  }
  return Et.CompileErrorCodes = a, Et.ERROR_DOMAIN = ae, Et.LocationStub = c, Et.baseCompile = Ie, Et.createCompileError = u, Et.createLocation = p, Et.createParser = ee, Et.createPosition = _, Et.defaultOnError = i, Et.errorMessages = f, Et;
}
var Gn;
function ur() {
  return Gn || (Gn = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = Wr() : e.exports = Vr();
  }(Rr)), en;
}
var tn = {}, Br = {
  get exports() {
    return tn;
  },
  set exports(e) {
    tn = e;
  }
}, qt = {};
/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
var Hn;
function Gr() {
  if (Hn)
    return qt;
  Hn = 1, Object.defineProperty(qt, "__esModule", { value: !0 });
  const e = {
    I18nInit: "i18n:init",
    FunctionTranslate: "function:translate"
  };
  return qt.IntlifyDevToolsHooks = e, qt;
}
var Qt = {};
/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
var Kn;
function Hr() {
  if (Kn)
    return Qt;
  Kn = 1, Object.defineProperty(Qt, "__esModule", { value: !0 });
  const e = {
    I18nInit: "i18n:init",
    FunctionTranslate: "function:translate"
  };
  return Qt.IntlifyDevToolsHooks = e, Qt;
}
var xn;
function cr() {
  return xn || (xn = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = Gr() : e.exports = Hr();
  }(Br)), tn;
}
/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
var Xn;
function Kr() {
  if (Xn)
    return pe;
  Xn = 1, Object.defineProperty(pe, "__esModule", { value: !0 });
  var e = ur(), t = Ut, a = cr();
  const f = [];
  f[0] = {
    w: [0],
    i: [3, 0],
    ["["]: [4],
    o: [7]
  }, f[1] = {
    w: [1],
    ["."]: [2],
    ["["]: [4],
    o: [7]
  }, f[2] = {
    w: [2],
    i: [3, 0],
    [0]: [3, 0]
  }, f[3] = {
    i: [3, 0],
    [0]: [3, 0],
    w: [1, 1],
    ["."]: [2, 1],
    ["["]: [4, 1],
    o: [7, 1]
  }, f[4] = {
    ["'"]: [5, 0],
    ['"']: [6, 0],
    ["["]: [
      4,
      2
    ],
    ["]"]: [1, 3],
    o: 8,
    l: [4, 0]
  }, f[5] = {
    ["'"]: [4, 0],
    o: 8,
    l: [5, 0]
  }, f[6] = {
    ['"']: [4, 0],
    o: 8,
    l: [6, 0]
  };
  const u = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
  function i(l) {
    return u.test(l);
  }
  function c(l) {
    const n = l.charCodeAt(0), r = l.charCodeAt(l.length - 1);
    return n === r && (n === 34 || n === 39) ? l.slice(1, -1) : l;
  }
  function _(l) {
    if (l == null)
      return "o";
    switch (l.charCodeAt(0)) {
      case 91:
      case 93:
      case 46:
      case 34:
      case 39:
        return l;
      case 95:
      case 36:
      case 45:
        return "i";
      case 9:
      case 10:
      case 13:
      case 160:
      case 65279:
      case 8232:
      case 8233:
        return "w";
    }
    return "i";
  }
  function p(l) {
    const n = l.trim();
    return l.charAt(0) === "0" && isNaN(parseInt(l)) ? !1 : i(n) ? c(n) : "*" + n;
  }
  function h(l) {
    const n = [];
    let r = -1, o = 0, b = 0, k, s, g, S, R, W, x;
    const H = [];
    H[0] = () => {
      s === void 0 ? s = g : s += g;
    }, H[1] = () => {
      s !== void 0 && (n.push(s), s = void 0);
    }, H[2] = () => {
      H[0](), b++;
    }, H[3] = () => {
      if (b > 0)
        b--, o = 4, H[0]();
      else {
        if (b = 0, s === void 0 || (s = p(s), s === !1))
          return !1;
        H[1]();
      }
    };
    function te() {
      const B = l[r + 1];
      if (o === 5 && B === "'" || o === 6 && B === '"')
        return r++, g = "\\" + B, H[0](), !0;
    }
    for (; o !== null; )
      if (r++, k = l[r], !(k === "\\" && te())) {
        if (S = _(k), x = f[o], R = x[S] || x.l || 8, R === 8 || (o = R[0], R[1] !== void 0 && (W = H[R[1]], W && (g = k, W() === !1))))
          return;
        if (o === 7)
          return n;
      }
  }
  const v = /* @__PURE__ */ new Map();
  function y(l, n) {
    return t.isObject(l) ? l[n] : null;
  }
  function w(l, n) {
    if (!t.isObject(l))
      return null;
    let r = v.get(n);
    if (r || (r = h(n), r && v.set(n, r)), !r)
      return null;
    const o = r.length;
    let b = l, k = 0;
    for (; k < o; ) {
      const s = b[r[k]];
      if (s === void 0)
        return null;
      b = s, k++;
    }
    return b;
  }
  const M = (l) => l, j = (l) => "", $ = "text", Y = (l) => l.length === 0 ? "" : l.join(""), oe = t.toDisplayString;
  function J(l, n) {
    return l = Math.abs(l), n === 2 ? l ? l > 1 ? 1 : 0 : 1 : l ? Math.min(l, 2) : 0;
  }
  function ae(l) {
    const n = t.isNumber(l.pluralIndex) ? l.pluralIndex : -1;
    return l.named && (t.isNumber(l.named.count) || t.isNumber(l.named.n)) ? t.isNumber(l.named.count) ? l.named.count : t.isNumber(l.named.n) ? l.named.n : n : n;
  }
  function D(l, n) {
    n.count || (n.count = l), n.n || (n.n = l);
  }
  function T(l = {}) {
    const n = l.locale, r = ae(l), o = t.isObject(l.pluralRules) && t.isString(n) && t.isFunction(l.pluralRules[n]) ? l.pluralRules[n] : J, b = t.isObject(l.pluralRules) && t.isString(n) && t.isFunction(l.pluralRules[n]) ? J : void 0, k = (ie) => ie[o(r, ie.length, b)], s = l.list || [], g = (ie) => s[ie], S = l.named || {};
    t.isNumber(l.pluralIndex) && D(r, S);
    const R = (ie) => S[ie];
    function W(ie) {
      const se = t.isFunction(l.messages) ? l.messages(ie) : t.isObject(l.messages) ? l.messages[ie] : !1;
      return se || (l.parent ? l.parent.message(ie) : j);
    }
    const x = (ie) => l.modifiers ? l.modifiers[ie] : M, H = t.isPlainObject(l.processor) && t.isFunction(l.processor.normalize) ? l.processor.normalize : Y, te = t.isPlainObject(l.processor) && t.isFunction(l.processor.interpolate) ? l.processor.interpolate : oe, B = t.isPlainObject(l.processor) && t.isString(l.processor.type) ? l.processor.type : $, ce = {
      list: g,
      named: R,
      plural: k,
      linked: (ie, ...se) => {
        const [ve, _e] = se;
        let ge = "text", Ne = "";
        se.length === 1 ? t.isObject(ve) ? (Ne = ve.modifier || Ne, ge = ve.type || ge) : t.isString(ve) && (Ne = ve || Ne) : se.length === 2 && (t.isString(ve) && (Ne = ve || Ne), t.isString(_e) && (ge = _e || ge));
        let Te = W(ie)(ce);
        return ge === "vnode" && t.isArray(Te) && Ne && (Te = Te[0]), Ne ? x(Ne)(Te, ge) : Te;
      },
      message: W,
      type: B,
      interpolate: te,
      normalize: H
    };
    return ce;
  }
  let ee = null;
  function K(l) {
    ee = l;
  }
  function be() {
    return ee;
  }
  function $e(l, n, r) {
    ee && ee.emit(a.IntlifyDevToolsHooks.I18nInit, {
      timestamp: Date.now(),
      i18n: l,
      version: n,
      meta: r
    });
  }
  const Le = /* @__PURE__ */ je(a.IntlifyDevToolsHooks.FunctionTranslate);
  function je(l) {
    return (n) => ee && ee.emit(l, n);
  }
  const Me = {
    NOT_FOUND_KEY: 1,
    FALLBACK_TO_TRANSLATE: 2,
    CANNOT_FORMAT_NUMBER: 3,
    FALLBACK_TO_NUMBER_FORMAT: 4,
    CANNOT_FORMAT_DATE: 5,
    FALLBACK_TO_DATE_FORMAT: 6,
    __EXTEND_POINT__: 7
  }, tt = {
    [Me.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
    [Me.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
    [Me.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
    [Me.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
    [Me.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
    [Me.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale."
  };
  function Ze(l, ...n) {
    return t.format(tt[l], ...n);
  }
  function nt(l, n, r) {
    return [.../* @__PURE__ */ new Set([
      r,
      ...t.isArray(n) ? n : t.isObject(n) ? Object.keys(n) : t.isString(n) ? [n] : [r]
    ])];
  }
  function Q(l, n, r) {
    const o = t.isString(r) ? r : d, b = l;
    b.__localeChainCache || (b.__localeChainCache = /* @__PURE__ */ new Map());
    let k = b.__localeChainCache.get(o);
    if (!k) {
      k = [];
      let s = [r];
      for (; t.isArray(s); )
        s = de(k, s, n);
      const g = t.isArray(n) || !t.isPlainObject(n) ? n : n.default ? n.default : null;
      s = t.isString(g) ? [g] : g, t.isArray(s) && de(k, s, !1), b.__localeChainCache.set(o, k);
    }
    return k;
  }
  function de(l, n, r) {
    let o = !0;
    for (let b = 0; b < n.length && t.isBoolean(o); b++) {
      const k = n[b];
      t.isString(k) && (o = X(l, n[b], r));
    }
    return o;
  }
  function X(l, n, r) {
    let o;
    const b = n.split("-");
    do {
      const k = b.join("-");
      o = fe(l, k, r), b.splice(-1, 1);
    } while (b.length && o === !0);
    return o;
  }
  function fe(l, n, r) {
    let o = !1;
    if (!l.includes(n) && (o = !0, n)) {
      o = n[n.length - 1] !== "!";
      const b = n.replace(/!/g, "");
      l.push(b), (t.isArray(r) || t.isPlainObject(r)) && r[b] && (o = r[b]);
    }
    return o;
  }
  const me = "9.2.2", Ie = -1, d = "en-US", E = "", I = (l) => `${l.charAt(0).toLocaleUpperCase()}${l.substr(1)}`;
  function U() {
    return {
      upper: (l, n) => n === "text" && t.isString(l) ? l.toUpperCase() : n === "vnode" && t.isObject(l) && "__v_isVNode" in l ? l.children.toUpperCase() : l,
      lower: (l, n) => n === "text" && t.isString(l) ? l.toLowerCase() : n === "vnode" && t.isObject(l) && "__v_isVNode" in l ? l.children.toLowerCase() : l,
      capitalize: (l, n) => n === "text" && t.isString(l) ? I(l) : n === "vnode" && t.isObject(l) && "__v_isVNode" in l ? I(l.children) : l
    };
  }
  let G;
  function A(l) {
    G = l;
  }
  let Z;
  function ye(l) {
    Z = l;
  }
  let ne;
  function De(l) {
    ne = l;
  }
  let We = null;
  const le = (l) => {
    We = l;
  }, F = () => We;
  let ue = null;
  const He = (l) => {
    ue = l;
  }, Ce = () => ue;
  let z = 0;
  function m(l = {}) {
    const n = t.isString(l.version) ? l.version : me, r = t.isString(l.locale) ? l.locale : d, o = t.isArray(l.fallbackLocale) || t.isPlainObject(l.fallbackLocale) || t.isString(l.fallbackLocale) || l.fallbackLocale === !1 ? l.fallbackLocale : r, b = t.isPlainObject(l.messages) ? l.messages : { [r]: {} }, k = t.isPlainObject(l.datetimeFormats) ? l.datetimeFormats : { [r]: {} }, s = t.isPlainObject(l.numberFormats) ? l.numberFormats : { [r]: {} }, g = t.assign({}, l.modifiers || {}, U()), S = l.pluralRules || {}, R = t.isFunction(l.missing) ? l.missing : null, W = t.isBoolean(l.missingWarn) || t.isRegExp(l.missingWarn) ? l.missingWarn : !0, x = t.isBoolean(l.fallbackWarn) || t.isRegExp(l.fallbackWarn) ? l.fallbackWarn : !0, H = !!l.fallbackFormat, te = !!l.unresolving, B = t.isFunction(l.postTranslation) ? l.postTranslation : null, re = t.isPlainObject(l.processor) ? l.processor : null, ce = t.isBoolean(l.warnHtmlMessage) ? l.warnHtmlMessage : !0, ie = !!l.escapeParameter, se = t.isFunction(l.messageCompiler) ? l.messageCompiler : G, ve = t.isFunction(l.messageResolver) ? l.messageResolver : Z || y, _e = t.isFunction(l.localeFallbacker) ? l.localeFallbacker : ne || nt, ge = t.isObject(l.fallbackContext) ? l.fallbackContext : void 0, Ne = t.isFunction(l.onWarn) ? l.onWarn : t.warn, Te = l, Ae = t.isObject(Te.__datetimeFormatters) ? Te.__datetimeFormatters : /* @__PURE__ */ new Map(), Ge = t.isObject(Te.__numberFormatters) ? Te.__numberFormatters : /* @__PURE__ */ new Map(), Re = t.isObject(Te.__meta) ? Te.__meta : {};
    z++;
    const Be = {
      version: n,
      cid: z,
      locale: r,
      fallbackLocale: o,
      messages: b,
      modifiers: g,
      pluralRules: S,
      missing: R,
      missingWarn: W,
      fallbackWarn: x,
      fallbackFormat: H,
      unresolving: te,
      postTranslation: B,
      processor: re,
      warnHtmlMessage: ce,
      escapeParameter: ie,
      messageCompiler: se,
      messageResolver: ve,
      localeFallbacker: _e,
      fallbackContext: ge,
      onWarn: Ne,
      __meta: Re
    };
    return Be.datetimeFormats = k, Be.numberFormats = s, Be.__datetimeFormatters = Ae, Be.__numberFormatters = Ge, Be;
  }
  function P(l, n) {
    return l instanceof RegExp ? l.test(n) : l;
  }
  function V(l, n) {
    return l instanceof RegExp ? l.test(n) : l;
  }
  function C(l, n, r, o, b) {
    const { missing: k, onWarn: s } = l;
    if (k !== null) {
      const g = k(l, r, n, b);
      return t.isString(g) ? g : n;
    } else
      return n;
  }
  function L(l, n, r) {
    const o = l;
    o.__localeChainCache = /* @__PURE__ */ new Map(), l.localeFallbacker(l, r, n);
  }
  const O = (l) => l;
  let q = /* @__PURE__ */ Object.create(null);
  function Fe() {
    q = /* @__PURE__ */ Object.create(null);
  }
  function Pe(l, n = {}) {
    {
      const o = (n.onCacheKey || O)(l), b = q[o];
      if (b)
        return b;
      let k = !1;
      const s = n.onError || e.defaultOnError;
      n.onError = (R) => {
        k = !0, s(R);
      };
      const { code: g } = e.baseCompile(l, n), S = new Function(`return ${g}`)();
      return k ? S : q[o] = S;
    }
  }
  let Ye = e.CompileErrorCodes.__EXTEND_POINT__;
  const at = () => ++Ye, xe = {
    INVALID_ARGUMENT: Ye,
    INVALID_DATE_ARGUMENT: at(),
    INVALID_ISO_DATE_ARGUMENT: at(),
    __EXTEND_POINT__: at()
  };
  function Qe(l) {
    return e.createCompileError(l, null, void 0);
  }
  xe.INVALID_ARGUMENT + "", xe.INVALID_DATE_ARGUMENT + "", xe.INVALID_ISO_DATE_ARGUMENT + "";
  const it = () => "", Je = (l) => t.isFunction(l);
  function gt(l, ...n) {
    const { fallbackFormat: r, postTranslation: o, unresolving: b, messageCompiler: k, fallbackLocale: s, messages: g } = l, [S, R] = Pt(...n), W = t.isBoolean(R.missingWarn) ? R.missingWarn : l.missingWarn, x = t.isBoolean(R.fallbackWarn) ? R.fallbackWarn : l.fallbackWarn, H = t.isBoolean(R.escapeParameter) ? R.escapeParameter : l.escapeParameter, te = !!R.resolvedMessage, B = t.isString(R.default) || t.isBoolean(R.default) ? t.isBoolean(R.default) ? k ? S : () => S : R.default : r ? k ? S : () => S : "", re = r || B !== "", ce = t.isString(R.locale) ? R.locale : l.locale;
    H && Ct(R);
    let [ie, se, ve] = te ? [
      S,
      ce,
      g[ce] || {}
    ] : At(l, S, ce, s, x, W), _e = ie, ge = S;
    if (!te && !(t.isString(_e) || Je(_e)) && re && (_e = B, ge = _e), !te && (!(t.isString(_e) || Je(_e)) || !t.isString(se)))
      return b ? Ie : S;
    let Ne = !1;
    const Te = () => {
      Ne = !0;
    }, Ae = Je(_e) ? _e : ze(l, S, se, _e, ge, Te);
    if (Ne)
      return _e;
    const Ge = Dt(l, se, ve, R), Re = T(Ge), Be = wt(l, Ae, Re);
    return o ? o(Be, S) : Be;
  }
  function Ct(l) {
    t.isArray(l.list) ? l.list = l.list.map((n) => t.isString(n) ? t.escapeHtml(n) : n) : t.isObject(l.named) && Object.keys(l.named).forEach((n) => {
      t.isString(l.named[n]) && (l.named[n] = t.escapeHtml(l.named[n]));
    });
  }
  function At(l, n, r, o, b, k) {
    const { messages: s, onWarn: g, messageResolver: S, localeFallbacker: R } = l, W = R(l, o, r);
    let x = {}, H, te = null;
    const B = "translate";
    for (let re = 0; re < W.length && (H = W[re], x = s[H] || {}, (te = S(x, n)) === null && (te = x[n]), !(t.isString(te) || t.isFunction(te))); re++) {
      const ce = C(
        l,
        n,
        H,
        k,
        B
      );
      ce !== n && (te = ce);
    }
    return [te, H, x];
  }
  function ze(l, n, r, o, b, k) {
    const { messageCompiler: s, warnHtmlMessage: g } = l;
    if (Je(o)) {
      const R = o;
      return R.locale = R.locale || r, R.key = R.key || n, R;
    }
    if (s == null) {
      const R = () => o;
      return R.locale = r, R.key = n, R;
    }
    const S = s(o, Rt(l, r, b, o, g, k));
    return S.locale = r, S.key = n, S.source = o, S;
  }
  function wt(l, n, r) {
    return n(r);
  }
  function Pt(...l) {
    const [n, r, o] = l, b = {};
    if (!t.isString(n) && !t.isNumber(n) && !Je(n))
      throw Qe(xe.INVALID_ARGUMENT);
    const k = t.isNumber(n) ? String(n) : (Je(n), n);
    return t.isNumber(r) ? b.plural = r : t.isString(r) ? b.default = r : t.isPlainObject(r) && !t.isEmptyObject(r) ? b.named = r : t.isArray(r) && (b.list = r), t.isNumber(o) ? b.plural = o : t.isString(o) ? b.default = o : t.isPlainObject(o) && t.assign(b, o), [k, b];
  }
  function Rt(l, n, r, o, b, k) {
    return {
      warnHtmlMessage: b,
      onError: (s) => {
        throw k && k(s), s;
      },
      onCacheKey: (s) => t.generateFormatCacheKey(n, r, s)
    };
  }
  function Dt(l, n, r, o) {
    const { modifiers: b, pluralRules: k, messageResolver: s, fallbackLocale: g, fallbackWarn: S, missingWarn: R, fallbackContext: W } = l, H = {
      locale: n,
      modifiers: b,
      pluralRules: k,
      messages: (te) => {
        let B = s(r, te);
        if (B == null && W) {
          const [, , re] = At(W, te, n, g, S, R);
          B = s(re, te);
        }
        if (t.isString(B)) {
          let re = !1;
          const ie = ze(l, te, n, B, te, () => {
            re = !0;
          });
          return re ? it : ie;
        } else
          return Je(B) ? B : it;
      }
    };
    return l.processor && (H.processor = l.processor), o.list && (H.list = o.list), o.named && (H.named = o.named), t.isNumber(o.plural) && (H.pluralIndex = o.plural), H;
  }
  function It(l, ...n) {
    const { datetimeFormats: r, unresolving: o, fallbackLocale: b, onWarn: k, localeFallbacker: s } = l, { __datetimeFormatters: g } = l, [S, R, W, x] = Ft(...n), H = t.isBoolean(W.missingWarn) ? W.missingWarn : l.missingWarn;
    t.isBoolean(W.fallbackWarn) ? W.fallbackWarn : l.fallbackWarn;
    const te = !!W.part, B = t.isString(W.locale) ? W.locale : l.locale, re = s(
      l,
      b,
      B
    );
    if (!t.isString(S) || S === "")
      return new Intl.DateTimeFormat(B, x).format(R);
    let ce = {}, ie, se = null;
    const ve = "datetime format";
    for (let Ne = 0; Ne < re.length && (ie = re[Ne], ce = r[ie] || {}, se = ce[S], !t.isPlainObject(se)); Ne++)
      C(l, S, ie, H, ve);
    if (!t.isPlainObject(se) || !t.isString(ie))
      return o ? Ie : S;
    let _e = `${ie}__${S}`;
    t.isEmptyObject(x) || (_e = `${_e}__${JSON.stringify(x)}`);
    let ge = g.get(_e);
    return ge || (ge = new Intl.DateTimeFormat(ie, t.assign({}, se, x)), g.set(_e, ge)), te ? ge.formatToParts(R) : ge.format(R);
  }
  const kt = [
    "localeMatcher",
    "weekday",
    "era",
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "timeZoneName",
    "formatMatcher",
    "hour12",
    "timeZone",
    "dateStyle",
    "timeStyle",
    "calendar",
    "dayPeriod",
    "numberingSystem",
    "hourCycle",
    "fractionalSecondDigits"
  ];
  function Ft(...l) {
    const [n, r, o, b] = l, k = {};
    let s = {}, g;
    if (t.isString(n)) {
      const S = n.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
      if (!S)
        throw Qe(xe.INVALID_ISO_DATE_ARGUMENT);
      const R = S[3] ? S[3].trim().startsWith("T") ? `${S[1].trim()}${S[3].trim()}` : `${S[1].trim()}T${S[3].trim()}` : S[1].trim();
      g = new Date(R);
      try {
        g.toISOString();
      } catch {
        throw Qe(xe.INVALID_ISO_DATE_ARGUMENT);
      }
    } else if (t.isDate(n)) {
      if (isNaN(n.getTime()))
        throw Qe(xe.INVALID_DATE_ARGUMENT);
      g = n;
    } else if (t.isNumber(n))
      g = n;
    else
      throw Qe(xe.INVALID_ARGUMENT);
    return t.isString(r) ? k.key = r : t.isPlainObject(r) && Object.keys(r).forEach((S) => {
      kt.includes(S) ? s[S] = r[S] : k[S] = r[S];
    }), t.isString(o) ? k.locale = o : t.isPlainObject(o) && (s = o), t.isPlainObject(b) && (s = b), [k.key || "", g, k, s];
  }
  function $t(l, n, r) {
    const o = l;
    for (const b in r) {
      const k = `${n}__${b}`;
      o.__datetimeFormatters.has(k) && o.__datetimeFormatters.delete(k);
    }
  }
  function bt(l, ...n) {
    const { numberFormats: r, unresolving: o, fallbackLocale: b, onWarn: k, localeFallbacker: s } = l, { __numberFormatters: g } = l, [S, R, W, x] = dt(...n), H = t.isBoolean(W.missingWarn) ? W.missingWarn : l.missingWarn;
    t.isBoolean(W.fallbackWarn) ? W.fallbackWarn : l.fallbackWarn;
    const te = !!W.part, B = t.isString(W.locale) ? W.locale : l.locale, re = s(
      l,
      b,
      B
    );
    if (!t.isString(S) || S === "")
      return new Intl.NumberFormat(B, x).format(R);
    let ce = {}, ie, se = null;
    const ve = "number format";
    for (let Ne = 0; Ne < re.length && (ie = re[Ne], ce = r[ie] || {}, se = ce[S], !t.isPlainObject(se)); Ne++)
      C(l, S, ie, H, ve);
    if (!t.isPlainObject(se) || !t.isString(ie))
      return o ? Ie : S;
    let _e = `${ie}__${S}`;
    t.isEmptyObject(x) || (_e = `${_e}__${JSON.stringify(x)}`);
    let ge = g.get(_e);
    return ge || (ge = new Intl.NumberFormat(ie, t.assign({}, se, x)), g.set(_e, ge)), te ? ge.formatToParts(R) : ge.format(R);
  }
  const pt = [
    "localeMatcher",
    "style",
    "currency",
    "currencyDisplay",
    "currencySign",
    "useGrouping",
    "minimumIntegerDigits",
    "minimumFractionDigits",
    "maximumFractionDigits",
    "minimumSignificantDigits",
    "maximumSignificantDigits",
    "compactDisplay",
    "notation",
    "signDisplay",
    "unit",
    "unitDisplay",
    "roundingMode",
    "roundingPriority",
    "roundingIncrement",
    "trailingZeroDisplay"
  ];
  function dt(...l) {
    const [n, r, o, b] = l, k = {};
    let s = {};
    if (!t.isNumber(n))
      throw Qe(xe.INVALID_ARGUMENT);
    const g = n;
    return t.isString(r) ? k.key = r : t.isPlainObject(r) && Object.keys(r).forEach((S) => {
      pt.includes(S) ? s[S] = r[S] : k[S] = r[S];
    }), t.isString(o) ? k.locale = o : t.isPlainObject(o) && (s = o), t.isPlainObject(b) && (s = b), [k.key || "", g, k, s];
  }
  function vt(l, n, r) {
    const o = l;
    for (const b in r) {
      const k = `${n}__${b}`;
      o.__numberFormatters.has(k) && o.__numberFormatters.delete(k);
    }
  }
  return pe.CompileErrorCodes = e.CompileErrorCodes, pe.createCompileError = e.createCompileError, pe.CoreErrorCodes = xe, pe.CoreWarnCodes = Me, pe.DATETIME_FORMAT_OPTIONS_KEYS = kt, pe.DEFAULT_LOCALE = d, pe.DEFAULT_MESSAGE_DATA_TYPE = $, pe.MISSING_RESOLVE_VALUE = E, pe.NOT_REOSLVED = Ie, pe.NUMBER_FORMAT_OPTIONS_KEYS = pt, pe.VERSION = me, pe.clearCompileCache = Fe, pe.clearDateTimeFormat = $t, pe.clearNumberFormat = vt, pe.compileToFunction = Pe, pe.createCoreContext = m, pe.createCoreError = Qe, pe.createMessageContext = T, pe.datetime = It, pe.fallbackWithLocaleChain = Q, pe.fallbackWithSimple = nt, pe.getAdditionalMeta = F, pe.getDevToolsHook = be, pe.getFallbackContext = Ce, pe.getWarnMessage = Ze, pe.handleMissing = C, pe.initI18nDevTools = $e, pe.isMessageFunction = Je, pe.isTranslateFallbackWarn = P, pe.isTranslateMissingWarn = V, pe.number = bt, pe.parse = h, pe.parseDateTimeArgs = Ft, pe.parseNumberArgs = dt, pe.parseTranslateArgs = Pt, pe.registerLocaleFallbacker = De, pe.registerMessageCompiler = A, pe.registerMessageResolver = ye, pe.resolveValue = w, pe.resolveWithKeyValue = y, pe.setAdditionalMeta = le, pe.setDevToolsHook = K, pe.setFallbackContext = He, pe.translate = gt, pe.translateDevTools = Le, pe.updateFallbackLocale = L, pe;
}
var he = {};
/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
var Yn;
function xr() {
  if (Yn)
    return he;
  Yn = 1, Object.defineProperty(he, "__esModule", { value: !0 });
  var e = ur(), t = Ut, a = cr();
  const f = [];
  f[0] = {
    w: [0],
    i: [3, 0],
    ["["]: [4],
    o: [7]
  }, f[1] = {
    w: [1],
    ["."]: [2],
    ["["]: [4],
    o: [7]
  }, f[2] = {
    w: [2],
    i: [3, 0],
    [0]: [3, 0]
  }, f[3] = {
    i: [3, 0],
    [0]: [3, 0],
    w: [1, 1],
    ["."]: [2, 1],
    ["["]: [4, 1],
    o: [7, 1]
  }, f[4] = {
    ["'"]: [5, 0],
    ['"']: [6, 0],
    ["["]: [
      4,
      2
    ],
    ["]"]: [1, 3],
    o: 8,
    l: [4, 0]
  }, f[5] = {
    ["'"]: [4, 0],
    o: 8,
    l: [5, 0]
  }, f[6] = {
    ['"']: [4, 0],
    o: 8,
    l: [6, 0]
  };
  const u = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
  function i(s) {
    return u.test(s);
  }
  function c(s) {
    const g = s.charCodeAt(0), S = s.charCodeAt(s.length - 1);
    return g === S && (g === 34 || g === 39) ? s.slice(1, -1) : s;
  }
  function _(s) {
    if (s == null)
      return "o";
    switch (s.charCodeAt(0)) {
      case 91:
      case 93:
      case 46:
      case 34:
      case 39:
        return s;
      case 95:
      case 36:
      case 45:
        return "i";
      case 9:
      case 10:
      case 13:
      case 160:
      case 65279:
      case 8232:
      case 8233:
        return "w";
    }
    return "i";
  }
  function p(s) {
    const g = s.trim();
    return s.charAt(0) === "0" && isNaN(parseInt(s)) ? !1 : i(g) ? c(g) : "*" + g;
  }
  function h(s) {
    const g = [];
    let S = -1, R = 0, W = 0, x, H, te, B, re, ce, ie;
    const se = [];
    se[0] = () => {
      H === void 0 ? H = te : H += te;
    }, se[1] = () => {
      H !== void 0 && (g.push(H), H = void 0);
    }, se[2] = () => {
      se[0](), W++;
    }, se[3] = () => {
      if (W > 0)
        W--, R = 4, se[0]();
      else {
        if (W = 0, H === void 0 || (H = p(H), H === !1))
          return !1;
        se[1]();
      }
    };
    function ve() {
      const _e = s[S + 1];
      if (R === 5 && _e === "'" || R === 6 && _e === '"')
        return S++, te = "\\" + _e, se[0](), !0;
    }
    for (; R !== null; )
      if (S++, x = s[S], !(x === "\\" && ve())) {
        if (B = _(x), ie = f[R], re = ie[B] || ie.l || 8, re === 8 || (R = re[0], re[1] !== void 0 && (ce = se[re[1]], ce && (te = x, ce() === !1))))
          return;
        if (R === 7)
          return g;
      }
  }
  const v = /* @__PURE__ */ new Map();
  function y(s, g) {
    return t.isObject(s) ? s[g] : null;
  }
  function w(s, g) {
    if (!t.isObject(s))
      return null;
    let S = v.get(g);
    if (S || (S = h(g), S && v.set(g, S)), !S)
      return null;
    const R = S.length;
    let W = s, x = 0;
    for (; x < R; ) {
      const H = W[S[x]];
      if (H === void 0)
        return null;
      W = H, x++;
    }
    return W;
  }
  const M = (s) => s, j = (s) => "", $ = "text", Y = (s) => s.length === 0 ? "" : s.join(""), oe = t.toDisplayString;
  function J(s, g) {
    return s = Math.abs(s), g === 2 ? s ? s > 1 ? 1 : 0 : 1 : s ? Math.min(s, 2) : 0;
  }
  function ae(s) {
    const g = t.isNumber(s.pluralIndex) ? s.pluralIndex : -1;
    return s.named && (t.isNumber(s.named.count) || t.isNumber(s.named.n)) ? t.isNumber(s.named.count) ? s.named.count : t.isNumber(s.named.n) ? s.named.n : g : g;
  }
  function D(s, g) {
    g.count || (g.count = s), g.n || (g.n = s);
  }
  function T(s = {}) {
    const g = s.locale, S = ae(s), R = t.isObject(s.pluralRules) && t.isString(g) && t.isFunction(s.pluralRules[g]) ? s.pluralRules[g] : J, W = t.isObject(s.pluralRules) && t.isString(g) && t.isFunction(s.pluralRules[g]) ? J : void 0, x = (Te) => Te[R(S, Te.length, W)], H = s.list || [], te = (Te) => H[Te], B = s.named || {};
    t.isNumber(s.pluralIndex) && D(S, B);
    const re = (Te) => B[Te];
    function ce(Te) {
      const Ae = t.isFunction(s.messages) ? s.messages(Te) : t.isObject(s.messages) ? s.messages[Te] : !1;
      return Ae || (s.parent ? s.parent.message(Te) : j);
    }
    const ie = (Te) => s.modifiers ? s.modifiers[Te] : M, se = t.isPlainObject(s.processor) && t.isFunction(s.processor.normalize) ? s.processor.normalize : Y, ve = t.isPlainObject(s.processor) && t.isFunction(s.processor.interpolate) ? s.processor.interpolate : oe, _e = t.isPlainObject(s.processor) && t.isString(s.processor.type) ? s.processor.type : $, Ne = {
      list: te,
      named: re,
      plural: x,
      linked: (Te, ...Ae) => {
        const [Ge, Re] = Ae;
        let Be = "text", Xe = "";
        Ae.length === 1 ? t.isObject(Ge) ? (Xe = Ge.modifier || Xe, Be = Ge.type || Be) : t.isString(Ge) && (Xe = Ge || Xe) : Ae.length === 2 && (t.isString(Ge) && (Xe = Ge || Xe), t.isString(Re) && (Be = Re || Be));
        let Ke = ce(Te)(Ne);
        return Be === "vnode" && t.isArray(Ke) && Xe && (Ke = Ke[0]), Xe ? ie(Xe)(Ke, Be) : Ke;
      },
      message: ce,
      type: _e,
      interpolate: ve,
      normalize: se
    };
    return Ne;
  }
  let ee = null;
  function K(s) {
    ee = s;
  }
  function be() {
    return ee;
  }
  function $e(s, g, S) {
    ee && ee.emit(a.IntlifyDevToolsHooks.I18nInit, {
      timestamp: Date.now(),
      i18n: s,
      version: g,
      meta: S
    });
  }
  const Le = /* @__PURE__ */ je(a.IntlifyDevToolsHooks.FunctionTranslate);
  function je(s) {
    return (g) => ee && ee.emit(s, g);
  }
  const Me = {
    NOT_FOUND_KEY: 1,
    FALLBACK_TO_TRANSLATE: 2,
    CANNOT_FORMAT_NUMBER: 3,
    FALLBACK_TO_NUMBER_FORMAT: 4,
    CANNOT_FORMAT_DATE: 5,
    FALLBACK_TO_DATE_FORMAT: 6,
    __EXTEND_POINT__: 7
  }, tt = {
    [Me.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
    [Me.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
    [Me.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
    [Me.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
    [Me.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
    [Me.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale."
  };
  function Ze(s, ...g) {
    return t.format(tt[s], ...g);
  }
  function nt(s, g, S) {
    return [.../* @__PURE__ */ new Set([
      S,
      ...t.isArray(g) ? g : t.isObject(g) ? Object.keys(g) : t.isString(g) ? [g] : [S]
    ])];
  }
  function Q(s, g, S) {
    const R = t.isString(S) ? S : d, W = s;
    W.__localeChainCache || (W.__localeChainCache = /* @__PURE__ */ new Map());
    let x = W.__localeChainCache.get(R);
    if (!x) {
      x = [];
      let H = [S];
      for (; t.isArray(H); )
        H = de(x, H, g);
      const te = t.isArray(g) || !t.isPlainObject(g) ? g : g.default ? g.default : null;
      H = t.isString(te) ? [te] : te, t.isArray(H) && de(x, H, !1), W.__localeChainCache.set(R, x);
    }
    return x;
  }
  function de(s, g, S) {
    let R = !0;
    for (let W = 0; W < g.length && t.isBoolean(R); W++) {
      const x = g[W];
      t.isString(x) && (R = X(s, g[W], S));
    }
    return R;
  }
  function X(s, g, S) {
    let R;
    const W = g.split("-");
    do {
      const x = W.join("-");
      R = fe(s, x, S), W.splice(-1, 1);
    } while (W.length && R === !0);
    return R;
  }
  function fe(s, g, S) {
    let R = !1;
    if (!s.includes(g) && (R = !0, g)) {
      R = g[g.length - 1] !== "!";
      const W = g.replace(/!/g, "");
      s.push(W), (t.isArray(S) || t.isPlainObject(S)) && S[W] && (R = S[W]);
    }
    return R;
  }
  const me = "9.2.2", Ie = -1, d = "en-US", E = "", I = (s) => `${s.charAt(0).toLocaleUpperCase()}${s.substr(1)}`;
  function U() {
    return {
      upper: (s, g) => g === "text" && t.isString(s) ? s.toUpperCase() : g === "vnode" && t.isObject(s) && "__v_isVNode" in s ? s.children.toUpperCase() : s,
      lower: (s, g) => g === "text" && t.isString(s) ? s.toLowerCase() : g === "vnode" && t.isObject(s) && "__v_isVNode" in s ? s.children.toLowerCase() : s,
      capitalize: (s, g) => g === "text" && t.isString(s) ? I(s) : g === "vnode" && t.isObject(s) && "__v_isVNode" in s ? I(s.children) : s
    };
  }
  let G;
  function A(s) {
    G = s;
  }
  let Z;
  function ye(s) {
    Z = s;
  }
  let ne;
  function De(s) {
    ne = s;
  }
  let We = null;
  const le = (s) => {
    We = s;
  }, F = () => We;
  let ue = null;
  const He = (s) => {
    ue = s;
  }, Ce = () => ue;
  let z = 0;
  function m(s = {}) {
    const g = t.isString(s.version) ? s.version : me, S = t.isString(s.locale) ? s.locale : d, R = t.isArray(s.fallbackLocale) || t.isPlainObject(s.fallbackLocale) || t.isString(s.fallbackLocale) || s.fallbackLocale === !1 ? s.fallbackLocale : S, W = t.isPlainObject(s.messages) ? s.messages : { [S]: {} }, x = t.isPlainObject(s.datetimeFormats) ? s.datetimeFormats : { [S]: {} }, H = t.isPlainObject(s.numberFormats) ? s.numberFormats : { [S]: {} }, te = t.assign({}, s.modifiers || {}, U()), B = s.pluralRules || {}, re = t.isFunction(s.missing) ? s.missing : null, ce = t.isBoolean(s.missingWarn) || t.isRegExp(s.missingWarn) ? s.missingWarn : !0, ie = t.isBoolean(s.fallbackWarn) || t.isRegExp(s.fallbackWarn) ? s.fallbackWarn : !0, se = !!s.fallbackFormat, ve = !!s.unresolving, _e = t.isFunction(s.postTranslation) ? s.postTranslation : null, ge = t.isPlainObject(s.processor) ? s.processor : null, Ne = t.isBoolean(s.warnHtmlMessage) ? s.warnHtmlMessage : !0, Te = !!s.escapeParameter, Ae = t.isFunction(s.messageCompiler) ? s.messageCompiler : G, Ge = t.isFunction(s.messageResolver) ? s.messageResolver : Z || y, Re = t.isFunction(s.localeFallbacker) ? s.localeFallbacker : ne || nt, Be = t.isObject(s.fallbackContext) ? s.fallbackContext : void 0, Xe = t.isFunction(s.onWarn) ? s.onWarn : t.warn, Ke = s, ot = t.isObject(Ke.__datetimeFormatters) ? Ke.__datetimeFormatters : /* @__PURE__ */ new Map(), Lt = t.isObject(Ke.__numberFormatters) ? Ke.__numberFormatters : /* @__PURE__ */ new Map(), Tt = t.isObject(Ke.__meta) ? Ke.__meta : {};
    z++;
    const Ot = {
      version: g,
      cid: z,
      locale: S,
      fallbackLocale: R,
      messages: W,
      modifiers: te,
      pluralRules: B,
      missing: re,
      missingWarn: ce,
      fallbackWarn: ie,
      fallbackFormat: se,
      unresolving: ve,
      postTranslation: _e,
      processor: ge,
      warnHtmlMessage: Ne,
      escapeParameter: Te,
      messageCompiler: Ae,
      messageResolver: Ge,
      localeFallbacker: Re,
      fallbackContext: Be,
      onWarn: Xe,
      __meta: Tt
    };
    return Ot.datetimeFormats = x, Ot.numberFormats = H, Ot.__datetimeFormatters = ot, Ot.__numberFormatters = Lt, Ot.__v_emitter = Ke.__v_emitter != null ? Ke.__v_emitter : void 0, $e(Ot, g, Tt), Ot;
  }
  function P(s, g) {
    return s instanceof RegExp ? s.test(g) : s;
  }
  function V(s, g) {
    return s instanceof RegExp ? s.test(g) : s;
  }
  function C(s, g, S, R, W) {
    const { missing: x, onWarn: H } = s;
    {
      const te = s.__v_emitter;
      te && te.emit("missing", {
        locale: S,
        key: g,
        type: W,
        groupId: `${W}:${g}`
      });
    }
    if (x !== null) {
      const te = x(s, S, g, W);
      return t.isString(te) ? te : g;
    } else
      return V(R, g) && H(Ze(Me.NOT_FOUND_KEY, { key: g, locale: S })), g;
  }
  function L(s, g, S) {
    const R = s;
    R.__localeChainCache = /* @__PURE__ */ new Map(), s.localeFallbacker(s, S, g);
  }
  const O = /<\/?[\w\s="/.':;#-\/]+>/, q = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
  function Fe(s, g) {
    (t.isBoolean(g.warnHtmlMessage) ? g.warnHtmlMessage : !0) && O.test(s) && t.warn(t.format(q, { source: s }));
  }
  const Pe = (s) => s;
  let Ye = /* @__PURE__ */ Object.create(null);
  function at() {
    Ye = /* @__PURE__ */ Object.create(null);
  }
  function xe(s, g = {}) {
    {
      Fe(s, g);
      const R = (g.onCacheKey || Pe)(s), W = Ye[R];
      if (W)
        return W;
      let x = !1;
      const H = g.onError || e.defaultOnError;
      g.onError = (re) => {
        x = !0, H(re);
      };
      const { code: te } = e.baseCompile(s, g), B = new Function(`return ${te}`)();
      return x ? B : Ye[R] = B;
    }
  }
  let Qe = e.CompileErrorCodes.__EXTEND_POINT__;
  const it = () => ++Qe, Je = {
    INVALID_ARGUMENT: Qe,
    INVALID_DATE_ARGUMENT: it(),
    INVALID_ISO_DATE_ARGUMENT: it(),
    __EXTEND_POINT__: it()
  };
  function gt(s) {
    return e.createCompileError(s, null, { messages: Ct });
  }
  const Ct = {
    [Je.INVALID_ARGUMENT]: "Invalid arguments",
    [Je.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
    [Je.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string"
  }, At = () => "", ze = (s) => t.isFunction(s);
  function wt(s, ...g) {
    const { fallbackFormat: S, postTranslation: R, unresolving: W, messageCompiler: x, fallbackLocale: H, messages: te } = s, [B, re] = kt(...g), ce = t.isBoolean(re.missingWarn) ? re.missingWarn : s.missingWarn, ie = t.isBoolean(re.fallbackWarn) ? re.fallbackWarn : s.fallbackWarn, se = t.isBoolean(re.escapeParameter) ? re.escapeParameter : s.escapeParameter, ve = !!re.resolvedMessage, _e = t.isString(re.default) || t.isBoolean(re.default) ? t.isBoolean(re.default) ? x ? B : () => B : re.default : S ? x ? B : () => B : "", ge = S || _e !== "", Ne = t.isString(re.locale) ? re.locale : s.locale;
    se && Pt(re);
    let [Te, Ae, Ge] = ve ? [
      B,
      Ne,
      te[Ne] || {}
    ] : Rt(s, B, Ne, H, ie, ce), Re = Te, Be = B;
    if (!ve && !(t.isString(Re) || ze(Re)) && ge && (Re = _e, Be = Re), !ve && (!(t.isString(Re) || ze(Re)) || !t.isString(Ae)))
      return W ? Ie : B;
    if (t.isString(Re) && s.messageCompiler == null)
      return t.warn(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${B}'.`), B;
    let Xe = !1;
    const Ke = () => {
      Xe = !0;
    }, ot = ze(Re) ? Re : Dt(s, B, Ae, Re, Be, Ke);
    if (Xe)
      return Re;
    const Lt = $t(s, Ae, Ge, re), Tt = T(Lt), Ot = It(s, ot, Tt), Nn = R ? R(Ot, B) : Ot;
    {
      const Cn = {
        timestamp: Date.now(),
        key: t.isString(B) ? B : ze(Re) ? Re.key : "",
        locale: Ae || (ze(Re) ? Re.locale : ""),
        format: t.isString(Re) ? Re : ze(Re) ? Re.source : "",
        message: Nn
      };
      Cn.meta = t.assign({}, s.__meta, F() || {}), Le(Cn);
    }
    return Nn;
  }
  function Pt(s) {
    t.isArray(s.list) ? s.list = s.list.map((g) => t.isString(g) ? t.escapeHtml(g) : g) : t.isObject(s.named) && Object.keys(s.named).forEach((g) => {
      t.isString(s.named[g]) && (s.named[g] = t.escapeHtml(s.named[g]));
    });
  }
  function Rt(s, g, S, R, W, x) {
    const { messages: H, onWarn: te, messageResolver: B, localeFallbacker: re } = s, ce = re(s, R, S);
    let ie = {}, se, ve = null, _e = S, ge = null;
    const Ne = "translate";
    for (let Te = 0; Te < ce.length; Te++) {
      if (se = ge = ce[Te], S !== se && P(W, g) && te(Ze(Me.FALLBACK_TO_TRANSLATE, {
        key: g,
        target: se
      })), S !== se) {
        const Xe = s.__v_emitter;
        Xe && Xe.emit("fallback", {
          type: Ne,
          key: g,
          from: _e,
          to: ge,
          groupId: `${Ne}:${g}`
        });
      }
      ie = H[se] || {};
      let Ae = null, Ge, Re;
      if (t.inBrowser && (Ae = window.performance.now(), Ge = "intlify-message-resolve-start", Re = "intlify-message-resolve-end", t.mark && t.mark(Ge)), (ve = B(ie, g)) === null && (ve = ie[g]), t.inBrowser) {
        const Xe = window.performance.now(), Ke = s.__v_emitter;
        Ke && Ae && ve && Ke.emit("message-resolve", {
          type: "message-resolve",
          key: g,
          message: ve,
          time: Xe - Ae,
          groupId: `${Ne}:${g}`
        }), Ge && Re && t.mark && t.measure && (t.mark(Re), t.measure("intlify message resolve", Ge, Re));
      }
      if (t.isString(ve) || t.isFunction(ve))
        break;
      const Be = C(
        s,
        g,
        se,
        x,
        Ne
      );
      Be !== g && (ve = Be), _e = ge;
    }
    return [ve, se, ie];
  }
  function Dt(s, g, S, R, W, x) {
    const { messageCompiler: H, warnHtmlMessage: te } = s;
    if (ze(R)) {
      const se = R;
      return se.locale = se.locale || S, se.key = se.key || g, se;
    }
    if (H == null) {
      const se = () => R;
      return se.locale = S, se.key = g, se;
    }
    let B = null, re, ce;
    t.inBrowser && (B = window.performance.now(), re = "intlify-message-compilation-start", ce = "intlify-message-compilation-end", t.mark && t.mark(re));
    const ie = H(R, Ft(s, S, W, R, te, x));
    if (t.inBrowser) {
      const se = window.performance.now(), ve = s.__v_emitter;
      ve && B && ve.emit("message-compilation", {
        type: "message-compilation",
        message: R,
        time: se - B,
        groupId: `translate:${g}`
      }), re && ce && t.mark && t.measure && (t.mark(ce), t.measure("intlify message compilation", re, ce));
    }
    return ie.locale = S, ie.key = g, ie.source = R, ie;
  }
  function It(s, g, S) {
    let R = null, W, x;
    t.inBrowser && (R = window.performance.now(), W = "intlify-message-evaluation-start", x = "intlify-message-evaluation-end", t.mark && t.mark(W));
    const H = g(S);
    if (t.inBrowser) {
      const te = window.performance.now(), B = s.__v_emitter;
      B && R && B.emit("message-evaluation", {
        type: "message-evaluation",
        value: H,
        time: te - R,
        groupId: `translate:${g.key}`
      }), W && x && t.mark && t.measure && (t.mark(x), t.measure("intlify message evaluation", W, x));
    }
    return H;
  }
  function kt(...s) {
    const [g, S, R] = s, W = {};
    if (!t.isString(g) && !t.isNumber(g) && !ze(g))
      throw gt(Je.INVALID_ARGUMENT);
    const x = t.isNumber(g) ? String(g) : (ze(g), g);
    return t.isNumber(S) ? W.plural = S : t.isString(S) ? W.default = S : t.isPlainObject(S) && !t.isEmptyObject(S) ? W.named = S : t.isArray(S) && (W.list = S), t.isNumber(R) ? W.plural = R : t.isString(R) ? W.default = R : t.isPlainObject(R) && t.assign(W, R), [x, W];
  }
  function Ft(s, g, S, R, W, x) {
    return {
      warnHtmlMessage: W,
      onError: (H) => {
        x && x(H);
        {
          const te = `Message compilation error: ${H.message}`, B = H.location && t.generateCodeFrame(R, H.location.start.offset, H.location.end.offset), re = s.__v_emitter;
          re && re.emit("compile-error", {
            message: R,
            error: H.message,
            start: H.location && H.location.start.offset,
            end: H.location && H.location.end.offset,
            groupId: `translate:${S}`
          }), console.error(B ? `${te}
${B}` : te);
        }
      },
      onCacheKey: (H) => t.generateFormatCacheKey(g, S, H)
    };
  }
  function $t(s, g, S, R) {
    const { modifiers: W, pluralRules: x, messageResolver: H, fallbackLocale: te, fallbackWarn: B, missingWarn: re, fallbackContext: ce } = s, se = {
      locale: g,
      modifiers: W,
      pluralRules: x,
      messages: (ve) => {
        let _e = H(S, ve);
        if (_e == null && ce) {
          const [, , ge] = Rt(ce, ve, g, te, B, re);
          _e = H(ge, ve);
        }
        if (t.isString(_e)) {
          let ge = !1;
          const Te = Dt(s, ve, g, _e, ve, () => {
            ge = !0;
          });
          return ge ? At : Te;
        } else
          return ze(_e) ? _e : At;
      }
    };
    return s.processor && (se.processor = s.processor), R.list && (se.list = R.list), R.named && (se.named = R.named), t.isNumber(R.plural) && (se.pluralIndex = R.plural), se;
  }
  const bt = typeof Intl < "u", pt = {
    dateTimeFormat: bt && typeof Intl.DateTimeFormat < "u",
    numberFormat: bt && typeof Intl.NumberFormat < "u"
  };
  function dt(s, ...g) {
    const { datetimeFormats: S, unresolving: R, fallbackLocale: W, onWarn: x, localeFallbacker: H } = s, { __datetimeFormatters: te } = s;
    if (!pt.dateTimeFormat)
      return x(Ze(Me.CANNOT_FORMAT_DATE)), E;
    const [B, re, ce, ie] = l(...g), se = t.isBoolean(ce.missingWarn) ? ce.missingWarn : s.missingWarn, ve = t.isBoolean(ce.fallbackWarn) ? ce.fallbackWarn : s.fallbackWarn, _e = !!ce.part, ge = t.isString(ce.locale) ? ce.locale : s.locale, Ne = H(
      s,
      W,
      ge
    );
    if (!t.isString(B) || B === "")
      return new Intl.DateTimeFormat(ge, ie).format(re);
    let Te = {}, Ae, Ge = null, Re = ge, Be = null;
    const Xe = "datetime format";
    for (let Lt = 0; Lt < Ne.length; Lt++) {
      if (Ae = Be = Ne[Lt], ge !== Ae && P(ve, B) && x(Ze(Me.FALLBACK_TO_DATE_FORMAT, {
        key: B,
        target: Ae
      })), ge !== Ae) {
        const Tt = s.__v_emitter;
        Tt && Tt.emit("fallback", {
          type: Xe,
          key: B,
          from: Re,
          to: Be,
          groupId: `${Xe}:${B}`
        });
      }
      if (Te = S[Ae] || {}, Ge = Te[B], t.isPlainObject(Ge))
        break;
      C(s, B, Ae, se, Xe), Re = Be;
    }
    if (!t.isPlainObject(Ge) || !t.isString(Ae))
      return R ? Ie : B;
    let Ke = `${Ae}__${B}`;
    t.isEmptyObject(ie) || (Ke = `${Ke}__${JSON.stringify(ie)}`);
    let ot = te.get(Ke);
    return ot || (ot = new Intl.DateTimeFormat(Ae, t.assign({}, Ge, ie)), te.set(Ke, ot)), _e ? ot.formatToParts(re) : ot.format(re);
  }
  const vt = [
    "localeMatcher",
    "weekday",
    "era",
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "timeZoneName",
    "formatMatcher",
    "hour12",
    "timeZone",
    "dateStyle",
    "timeStyle",
    "calendar",
    "dayPeriod",
    "numberingSystem",
    "hourCycle",
    "fractionalSecondDigits"
  ];
  function l(...s) {
    const [g, S, R, W] = s, x = {};
    let H = {}, te;
    if (t.isString(g)) {
      const B = g.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
      if (!B)
        throw gt(Je.INVALID_ISO_DATE_ARGUMENT);
      const re = B[3] ? B[3].trim().startsWith("T") ? `${B[1].trim()}${B[3].trim()}` : `${B[1].trim()}T${B[3].trim()}` : B[1].trim();
      te = new Date(re);
      try {
        te.toISOString();
      } catch {
        throw gt(Je.INVALID_ISO_DATE_ARGUMENT);
      }
    } else if (t.isDate(g)) {
      if (isNaN(g.getTime()))
        throw gt(Je.INVALID_DATE_ARGUMENT);
      te = g;
    } else if (t.isNumber(g))
      te = g;
    else
      throw gt(Je.INVALID_ARGUMENT);
    return t.isString(S) ? x.key = S : t.isPlainObject(S) && Object.keys(S).forEach((B) => {
      vt.includes(B) ? H[B] = S[B] : x[B] = S[B];
    }), t.isString(R) ? x.locale = R : t.isPlainObject(R) && (H = R), t.isPlainObject(W) && (H = W), [x.key || "", te, x, H];
  }
  function n(s, g, S) {
    const R = s;
    for (const W in S) {
      const x = `${g}__${W}`;
      R.__datetimeFormatters.has(x) && R.__datetimeFormatters.delete(x);
    }
  }
  function r(s, ...g) {
    const { numberFormats: S, unresolving: R, fallbackLocale: W, onWarn: x, localeFallbacker: H } = s, { __numberFormatters: te } = s;
    if (!pt.numberFormat)
      return x(Ze(Me.CANNOT_FORMAT_NUMBER)), E;
    const [B, re, ce, ie] = b(...g), se = t.isBoolean(ce.missingWarn) ? ce.missingWarn : s.missingWarn, ve = t.isBoolean(ce.fallbackWarn) ? ce.fallbackWarn : s.fallbackWarn, _e = !!ce.part, ge = t.isString(ce.locale) ? ce.locale : s.locale, Ne = H(
      s,
      W,
      ge
    );
    if (!t.isString(B) || B === "")
      return new Intl.NumberFormat(ge, ie).format(re);
    let Te = {}, Ae, Ge = null, Re = ge, Be = null;
    const Xe = "number format";
    for (let Lt = 0; Lt < Ne.length; Lt++) {
      if (Ae = Be = Ne[Lt], ge !== Ae && P(ve, B) && x(Ze(Me.FALLBACK_TO_NUMBER_FORMAT, {
        key: B,
        target: Ae
      })), ge !== Ae) {
        const Tt = s.__v_emitter;
        Tt && Tt.emit("fallback", {
          type: Xe,
          key: B,
          from: Re,
          to: Be,
          groupId: `${Xe}:${B}`
        });
      }
      if (Te = S[Ae] || {}, Ge = Te[B], t.isPlainObject(Ge))
        break;
      C(s, B, Ae, se, Xe), Re = Be;
    }
    if (!t.isPlainObject(Ge) || !t.isString(Ae))
      return R ? Ie : B;
    let Ke = `${Ae}__${B}`;
    t.isEmptyObject(ie) || (Ke = `${Ke}__${JSON.stringify(ie)}`);
    let ot = te.get(Ke);
    return ot || (ot = new Intl.NumberFormat(Ae, t.assign({}, Ge, ie)), te.set(Ke, ot)), _e ? ot.formatToParts(re) : ot.format(re);
  }
  const o = [
    "localeMatcher",
    "style",
    "currency",
    "currencyDisplay",
    "currencySign",
    "useGrouping",
    "minimumIntegerDigits",
    "minimumFractionDigits",
    "maximumFractionDigits",
    "minimumSignificantDigits",
    "maximumSignificantDigits",
    "compactDisplay",
    "notation",
    "signDisplay",
    "unit",
    "unitDisplay",
    "roundingMode",
    "roundingPriority",
    "roundingIncrement",
    "trailingZeroDisplay"
  ];
  function b(...s) {
    const [g, S, R, W] = s, x = {};
    let H = {};
    if (!t.isNumber(g))
      throw gt(Je.INVALID_ARGUMENT);
    const te = g;
    return t.isString(S) ? x.key = S : t.isPlainObject(S) && Object.keys(S).forEach((B) => {
      o.includes(B) ? H[B] = S[B] : x[B] = S[B];
    }), t.isString(R) ? x.locale = R : t.isPlainObject(R) && (H = R), t.isPlainObject(W) && (H = W), [x.key || "", te, x, H];
  }
  function k(s, g, S) {
    const R = s;
    for (const W in S) {
      const x = `${g}__${W}`;
      R.__numberFormatters.has(x) && R.__numberFormatters.delete(x);
    }
  }
  return he.CompileErrorCodes = e.CompileErrorCodes, he.createCompileError = e.createCompileError, he.CoreErrorCodes = Je, he.CoreWarnCodes = Me, he.DATETIME_FORMAT_OPTIONS_KEYS = vt, he.DEFAULT_LOCALE = d, he.DEFAULT_MESSAGE_DATA_TYPE = $, he.MISSING_RESOLVE_VALUE = E, he.NOT_REOSLVED = Ie, he.NUMBER_FORMAT_OPTIONS_KEYS = o, he.VERSION = me, he.clearCompileCache = at, he.clearDateTimeFormat = n, he.clearNumberFormat = k, he.compileToFunction = xe, he.createCoreContext = m, he.createCoreError = gt, he.createMessageContext = T, he.datetime = dt, he.fallbackWithLocaleChain = Q, he.fallbackWithSimple = nt, he.getAdditionalMeta = F, he.getDevToolsHook = be, he.getFallbackContext = Ce, he.getWarnMessage = Ze, he.handleMissing = C, he.initI18nDevTools = $e, he.isMessageFunction = ze, he.isTranslateFallbackWarn = P, he.isTranslateMissingWarn = V, he.number = r, he.parse = h, he.parseDateTimeArgs = l, he.parseNumberArgs = b, he.parseTranslateArgs = kt, he.registerLocaleFallbacker = De, he.registerMessageCompiler = A, he.registerMessageResolver = ye, he.resolveValue = w, he.resolveWithKeyValue = y, he.setAdditionalMeta = le, he.setDevToolsHook = K, he.setFallbackContext = He, he.translate = wt, he.translateDevTools = Le, he.updateFallbackLocale = L, he;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Kr() : e.exports = xr();
})(Pr);
/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
Object.defineProperty(Nt, "__esModule", { value: !0 });
var N = Ut, Ee = dn, ke = Sr;
const fr = "9.2.2";
let dr = Ee.CoreWarnCodes.__EXTEND_POINT__;
const jt = () => ++dr, rt = {
  FALLBACK_TO_ROOT: dr,
  NOT_SUPPORTED_PRESERVE: jt(),
  NOT_SUPPORTED_FORMATTER: jt(),
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: jt(),
  NOT_SUPPORTED_GET_CHOICE_INDEX: jt(),
  COMPONENT_NAME_LEGACY_COMPATIBLE: jt(),
  NOT_FOUND_PARENT_SCOPE: jt()
}, Xr = {
  [rt.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [rt.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [rt.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [rt.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [rt.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [rt.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [rt.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope."
};
function St(e, ...t) {
  return N.format(Xr[e], ...t);
}
let mr = Ee.CompileErrorCodes.__EXTEND_POINT__;
const mt = () => ++mr, we = {
  UNEXPECTED_RETURN_TYPE: mr,
  INVALID_ARGUMENT: mt(),
  MUST_BE_CALL_SETUP_TOP: mt(),
  NOT_INSLALLED: mt(),
  NOT_AVAILABLE_IN_LEGACY_MODE: mt(),
  REQUIRED_VALUE: mt(),
  INVALID_VALUE: mt(),
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: mt(),
  NOT_INSLALLED_WITH_PROVIDE: mt(),
  UNEXPECTED_ERROR: mt(),
  NOT_COMPATIBLE_LEGACY_VUE_I18N: mt(),
  BRIDGE_SUPPORT_VUE_2_ONLY: mt(),
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: mt(),
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: mt(),
  __EXTEND_POINT__: mt()
};
function et(e, ...t) {
  return Ee.createCompileError(e, null, { messages: Yr, args: t });
}
const Yr = {
  [we.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [we.INVALID_ARGUMENT]: "Invalid argument",
  [we.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [we.NOT_INSLALLED]: "Need to install with `app.use` function",
  [we.UNEXPECTED_ERROR]: "Unexpected error",
  [we.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [we.REQUIRED_VALUE]: "Required in value: {0}",
  [we.INVALID_VALUE]: "Invalid value",
  [we.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [we.NOT_INSLALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [we.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [we.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [we.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
  [we.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, mn = /* @__PURE__ */ N.makeSymbol("__transrateVNode"), _n = /* @__PURE__ */ N.makeSymbol("__datetimeParts"), gn = /* @__PURE__ */ N.makeSymbol("__numberParts"), pn = /* @__PURE__ */ N.makeSymbol("__enableEmitter"), hn = /* @__PURE__ */ N.makeSymbol("__disableEmitter"), _r = N.makeSymbol("__setPluralRules");
N.makeSymbol("__intlifyMeta");
const gr = /* @__PURE__ */ N.makeSymbol("__injectWithOption"), qr = "__VUE_I18N_BRIDGE__";
function En(e) {
  if (!N.isObject(e))
    return e;
  for (const t in e)
    if (N.hasOwn(e, t))
      if (!t.includes("."))
        N.isObject(e[t]) && En(e[t]);
      else {
        const a = t.split("."), f = a.length - 1;
        let u = e;
        for (let i = 0; i < f; i++)
          a[i] in u || (u[a[i]] = {}), u = u[a[i]];
        u[a[f]] = e[t], delete e[t], N.isObject(u[a[f]]) && En(u[a[f]]);
      }
  return e;
}
function nn(e, t) {
  const { messages: a, __i18n: f, messageResolver: u, flatJson: i } = t, c = N.isPlainObject(a) ? a : N.isArray(f) ? {} : { [e]: {} };
  if (N.isArray(f) && f.forEach((_) => {
    if ("locale" in _ && "resource" in _) {
      const { locale: p, resource: h } = _;
      p ? (c[p] = c[p] || {}, Gt(h, c[p])) : Gt(h, c);
    } else
      N.isString(_) && Gt(JSON.parse(_), c);
  }), u == null && i)
    for (const _ in c)
      N.hasOwn(c, _) && En(c[_]);
  return c;
}
const Jt = (e) => !N.isObject(e) || N.isArray(e);
function Gt(e, t) {
  if (Jt(e) || Jt(t))
    throw et(we.INVALID_VALUE);
  for (const a in e)
    N.hasOwn(e, a) && (Jt(e[a]) || Jt(t[a]) ? t[a] = e[a] : Gt(e[a], t[a]));
}
function pr(e) {
  return e.type;
}
function hr(e, t, a) {
  let f = N.isObject(t.messages) ? t.messages : {};
  "__i18nGlobal" in a && (f = nn(e.locale.value, {
    messages: f,
    __i18n: a.__i18nGlobal
  }));
  const u = Object.keys(f);
  u.length && u.forEach((i) => {
    e.mergeLocaleMessage(i, f[i]);
  });
  {
    if (N.isObject(t.datetimeFormats)) {
      const i = Object.keys(t.datetimeFormats);
      i.length && i.forEach((c) => {
        e.mergeDateTimeFormat(c, t.datetimeFormats[c]);
      });
    }
    if (N.isObject(t.numberFormats)) {
      const i = Object.keys(t.numberFormats);
      i.length && i.forEach((c) => {
        e.mergeNumberFormat(c, t.numberFormats[c]);
      });
    }
  }
}
function qn(e) {
  return ke.createVNode(ke.Text, null, e, 0);
}
const Qn = "__INTLIFY_META__";
let Jn = 0;
function Zn(e) {
  return (t, a, f, u) => e(a, f, ke.getCurrentInstance() || void 0, u);
}
const Qr = () => {
  const e = ke.getCurrentInstance();
  let t = null;
  return e && (t = pr(e)[Qn]) ? { [Qn]: t } : null;
};
function yn(e = {}, t) {
  const { __root: a } = e, f = a === void 0;
  let u = N.isBoolean(e.inheritLocale) ? e.inheritLocale : !0;
  const i = ke.ref(
    a && u ? a.locale.value : N.isString(e.locale) ? e.locale : Ee.DEFAULT_LOCALE
  ), c = ke.ref(
    a && u ? a.fallbackLocale.value : N.isString(e.fallbackLocale) || N.isArray(e.fallbackLocale) || N.isPlainObject(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), _ = ke.ref(nn(i.value, e)), p = ke.ref(N.isPlainObject(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), h = ke.ref(N.isPlainObject(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let v = a ? a.missingWarn : N.isBoolean(e.missingWarn) || N.isRegExp(e.missingWarn) ? e.missingWarn : !0, y = a ? a.fallbackWarn : N.isBoolean(e.fallbackWarn) || N.isRegExp(e.fallbackWarn) ? e.fallbackWarn : !0, w = a ? a.fallbackRoot : N.isBoolean(e.fallbackRoot) ? e.fallbackRoot : !0, M = !!e.fallbackFormat, j = N.isFunction(e.missing) ? e.missing : null, $ = N.isFunction(e.missing) ? Zn(e.missing) : null, Y = N.isFunction(e.postTranslation) ? e.postTranslation : null, oe = a ? a.warnHtmlMessage : N.isBoolean(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, J = !!e.escapeParameter;
  const ae = a ? a.modifiers : N.isPlainObject(e.modifiers) ? e.modifiers : {};
  let D = e.pluralRules || a && a.pluralRules, T;
  T = (() => {
    f && Ee.setFallbackContext(null);
    const L = {
      version: fr,
      locale: i.value,
      fallbackLocale: c.value,
      messages: _.value,
      modifiers: ae,
      pluralRules: D,
      missing: $ === null ? void 0 : $,
      missingWarn: v,
      fallbackWarn: y,
      fallbackFormat: M,
      unresolving: !0,
      postTranslation: Y === null ? void 0 : Y,
      warnHtmlMessage: oe,
      escapeParameter: J,
      messageResolver: e.messageResolver,
      __meta: { framework: "vue" }
    };
    L.datetimeFormats = p.value, L.numberFormats = h.value, L.__datetimeFormatters = N.isPlainObject(T) ? T.__datetimeFormatters : void 0, L.__numberFormatters = N.isPlainObject(T) ? T.__numberFormatters : void 0, L.__v_emitter = N.isPlainObject(T) ? T.__v_emitter : void 0;
    const O = Ee.createCoreContext(L);
    return f && Ee.setFallbackContext(O), O;
  })(), Ee.updateFallbackLocale(T, i.value, c.value);
  function K() {
    return [
      i.value,
      c.value,
      _.value,
      p.value,
      h.value
    ];
  }
  const be = ke.computed({
    get: () => i.value,
    set: (L) => {
      i.value = L, T.locale = i.value;
    }
  }), $e = ke.computed({
    get: () => c.value,
    set: (L) => {
      c.value = L, T.fallbackLocale = c.value, Ee.updateFallbackLocale(T, i.value, L);
    }
  }), Le = ke.computed(() => _.value), je = /* @__PURE__ */ ke.computed(() => p.value), Me = /* @__PURE__ */ ke.computed(() => h.value);
  function tt() {
    return N.isFunction(Y) ? Y : null;
  }
  function Ze(L) {
    Y = L, T.postTranslation = L;
  }
  function nt() {
    return j;
  }
  function Q(L) {
    L !== null && ($ = Zn(L)), j = L, T.missing = $;
  }
  function de(L, O) {
    return L !== "translate" || !O.resolvedMessage;
  }
  const X = (L, O, q, Fe, Pe, Ye) => {
    K();
    let at;
    try {
      Ee.setAdditionalMeta(Qr()), f || (T.fallbackContext = a ? Ee.getFallbackContext() : void 0), at = L(T);
    } finally {
      Ee.setAdditionalMeta(null), f || (T.fallbackContext = void 0);
    }
    if (N.isNumber(at) && at === Ee.NOT_REOSLVED) {
      const [xe, Qe] = O();
      if (a && N.isString(xe) && de(q, Qe)) {
        w && (Ee.isTranslateFallbackWarn(y, xe) || Ee.isTranslateMissingWarn(v, xe)) && N.warn(St(rt.FALLBACK_TO_ROOT, {
          key: xe,
          type: q
        }));
        {
          const { __v_emitter: it } = T;
          it && w && it.emit("fallback", {
            type: q,
            key: xe,
            to: "global",
            groupId: `${q}:${xe}`
          });
        }
      }
      return a && w ? Fe(a) : Pe(xe);
    } else {
      if (Ye(at))
        return at;
      throw et(we.UNEXPECTED_RETURN_TYPE);
    }
  };
  function fe(...L) {
    return X((O) => Reflect.apply(Ee.translate, null, [O, ...L]), () => Ee.parseTranslateArgs(...L), "translate", (O) => Reflect.apply(O.t, O, [...L]), (O) => O, (O) => N.isString(O));
  }
  function me(...L) {
    const [O, q, Fe] = L;
    if (Fe && !N.isObject(Fe))
      throw et(we.INVALID_ARGUMENT);
    return fe(O, q, N.assign({ resolvedMessage: !0 }, Fe || {}));
  }
  function Ie(...L) {
    return X((O) => Reflect.apply(Ee.datetime, null, [O, ...L]), () => Ee.parseDateTimeArgs(...L), "datetime format", (O) => Reflect.apply(O.d, O, [...L]), () => Ee.MISSING_RESOLVE_VALUE, (O) => N.isString(O));
  }
  function d(...L) {
    return X((O) => Reflect.apply(Ee.number, null, [O, ...L]), () => Ee.parseNumberArgs(...L), "number format", (O) => Reflect.apply(O.n, O, [...L]), () => Ee.MISSING_RESOLVE_VALUE, (O) => N.isString(O));
  }
  function E(L) {
    return L.map((O) => N.isString(O) || N.isNumber(O) || N.isBoolean(O) ? qn(String(O)) : O);
  }
  const U = {
    normalize: E,
    interpolate: (L) => L,
    type: "vnode"
  };
  function G(...L) {
    return X(
      (O) => {
        let q;
        const Fe = O;
        try {
          Fe.processor = U, q = Reflect.apply(Ee.translate, null, [Fe, ...L]);
        } finally {
          Fe.processor = null;
        }
        return q;
      },
      () => Ee.parseTranslateArgs(...L),
      "translate",
      (O) => O[mn](...L),
      (O) => [qn(O)],
      (O) => N.isArray(O)
    );
  }
  function A(...L) {
    return X(
      (O) => Reflect.apply(Ee.number, null, [O, ...L]),
      () => Ee.parseNumberArgs(...L),
      "number format",
      (O) => O[gn](...L),
      () => [],
      (O) => N.isString(O) || N.isArray(O)
    );
  }
  function Z(...L) {
    return X(
      (O) => Reflect.apply(Ee.datetime, null, [O, ...L]),
      () => Ee.parseDateTimeArgs(...L),
      "datetime format",
      (O) => O[_n](...L),
      () => [],
      (O) => N.isString(O) || N.isArray(O)
    );
  }
  function ye(L) {
    D = L, T.pluralRules = D;
  }
  function ne(L, O) {
    const q = N.isString(O) ? O : i.value, Fe = le(q);
    return T.messageResolver(Fe, L) !== null;
  }
  function De(L) {
    let O = null;
    const q = Ee.fallbackWithLocaleChain(T, c.value, i.value);
    for (let Fe = 0; Fe < q.length; Fe++) {
      const Pe = _.value[q[Fe]] || {}, Ye = T.messageResolver(Pe, L);
      if (Ye != null) {
        O = Ye;
        break;
      }
    }
    return O;
  }
  function We(L) {
    const O = De(L);
    return O ?? (a ? a.tm(L) || {} : {});
  }
  function le(L) {
    return _.value[L] || {};
  }
  function F(L, O) {
    _.value[L] = O, T.messages = _.value;
  }
  function ue(L, O) {
    _.value[L] = _.value[L] || {}, Gt(O, _.value[L]), T.messages = _.value;
  }
  function He(L) {
    return p.value[L] || {};
  }
  function Ce(L, O) {
    p.value[L] = O, T.datetimeFormats = p.value, Ee.clearDateTimeFormat(T, L, O);
  }
  function z(L, O) {
    p.value[L] = N.assign(p.value[L] || {}, O), T.datetimeFormats = p.value, Ee.clearDateTimeFormat(T, L, O);
  }
  function m(L) {
    return h.value[L] || {};
  }
  function P(L, O) {
    h.value[L] = O, T.numberFormats = h.value, Ee.clearNumberFormat(T, L, O);
  }
  function V(L, O) {
    h.value[L] = N.assign(h.value[L] || {}, O), T.numberFormats = h.value, Ee.clearNumberFormat(T, L, O);
  }
  Jn++, a && N.inBrowser && (ke.watch(a.locale, (L) => {
    u && (i.value = L, T.locale = L, Ee.updateFallbackLocale(T, i.value, c.value));
  }), ke.watch(a.fallbackLocale, (L) => {
    u && (c.value = L, T.fallbackLocale = L, Ee.updateFallbackLocale(T, i.value, c.value));
  }));
  const C = {
    id: Jn,
    locale: be,
    fallbackLocale: $e,
    get inheritLocale() {
      return u;
    },
    set inheritLocale(L) {
      u = L, L && a && (i.value = a.locale.value, c.value = a.fallbackLocale.value, Ee.updateFallbackLocale(T, i.value, c.value));
    },
    get availableLocales() {
      return Object.keys(_.value).sort();
    },
    messages: Le,
    get modifiers() {
      return ae;
    },
    get pluralRules() {
      return D || {};
    },
    get isGlobal() {
      return f;
    },
    get missingWarn() {
      return v;
    },
    set missingWarn(L) {
      v = L, T.missingWarn = v;
    },
    get fallbackWarn() {
      return y;
    },
    set fallbackWarn(L) {
      y = L, T.fallbackWarn = y;
    },
    get fallbackRoot() {
      return w;
    },
    set fallbackRoot(L) {
      w = L;
    },
    get fallbackFormat() {
      return M;
    },
    set fallbackFormat(L) {
      M = L, T.fallbackFormat = M;
    },
    get warnHtmlMessage() {
      return oe;
    },
    set warnHtmlMessage(L) {
      oe = L, T.warnHtmlMessage = L;
    },
    get escapeParameter() {
      return J;
    },
    set escapeParameter(L) {
      J = L, T.escapeParameter = L;
    },
    t: fe,
    getLocaleMessage: le,
    setLocaleMessage: F,
    mergeLocaleMessage: ue,
    getPostTranslationHandler: tt,
    setPostTranslationHandler: Ze,
    getMissingHandler: nt,
    setMissingHandler: Q,
    [_r]: ye
  };
  return C.datetimeFormats = je, C.numberFormats = Me, C.rt = me, C.te = ne, C.tm = We, C.d = Ie, C.n = d, C.getDateTimeFormat = He, C.setDateTimeFormat = Ce, C.mergeDateTimeFormat = z, C.getNumberFormat = m, C.setNumberFormat = P, C.mergeNumberFormat = V, C[gr] = e.__injectWithOption, C[mn] = G, C[_n] = Z, C[gn] = A, C[pn] = (L) => {
    T.__v_emitter = L;
  }, C[hn] = () => {
    T.__v_emitter = void 0;
  }, C;
}
function Jr(e) {
  const t = N.isString(e.locale) ? e.locale : Ee.DEFAULT_LOCALE, a = N.isString(e.fallbackLocale) || N.isArray(e.fallbackLocale) || N.isPlainObject(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, f = N.isFunction(e.missing) ? e.missing : void 0, u = N.isBoolean(e.silentTranslationWarn) || N.isRegExp(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, i = N.isBoolean(e.silentFallbackWarn) || N.isRegExp(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, c = N.isBoolean(e.fallbackRoot) ? e.fallbackRoot : !0, _ = !!e.formatFallbackMessages, p = N.isPlainObject(e.modifiers) ? e.modifiers : {}, h = e.pluralizationRules, v = N.isFunction(e.postTranslation) ? e.postTranslation : void 0, y = N.isString(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, w = !!e.escapeParameterHtml, M = N.isBoolean(e.sync) ? e.sync : !0;
  e.formatter && N.warn(St(rt.NOT_SUPPORTED_FORMATTER)), e.preserveDirectiveContent && N.warn(St(rt.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
  let j = e.messages;
  if (N.isPlainObject(e.sharedMessages)) {
    const T = e.sharedMessages;
    j = Object.keys(T).reduce((K, be) => {
      const $e = K[be] || (K[be] = {});
      return N.assign($e, T[be]), K;
    }, j || {});
  }
  const { __i18n: $, __root: Y, __injectWithOption: oe } = e, J = e.datetimeFormats, ae = e.numberFormats, D = e.flatJson;
  return {
    locale: t,
    fallbackLocale: a,
    messages: j,
    flatJson: D,
    datetimeFormats: J,
    numberFormats: ae,
    missing: f,
    missingWarn: u,
    fallbackWarn: i,
    fallbackRoot: c,
    fallbackFormat: _,
    modifiers: p,
    pluralRules: h,
    postTranslation: v,
    warnHtmlMessage: y,
    escapeParameter: w,
    messageResolver: e.messageResolver,
    inheritLocale: M,
    __i18n: $,
    __root: Y,
    __injectWithOption: oe
  };
}
function bn(e = {}, t) {
  {
    const a = yn(Jr(e)), f = {
      id: a.id,
      get locale() {
        return a.locale.value;
      },
      set locale(u) {
        a.locale.value = u;
      },
      get fallbackLocale() {
        return a.fallbackLocale.value;
      },
      set fallbackLocale(u) {
        a.fallbackLocale.value = u;
      },
      get messages() {
        return a.messages.value;
      },
      get datetimeFormats() {
        return a.datetimeFormats.value;
      },
      get numberFormats() {
        return a.numberFormats.value;
      },
      get availableLocales() {
        return a.availableLocales;
      },
      get formatter() {
        return N.warn(St(rt.NOT_SUPPORTED_FORMATTER)), {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(u) {
        N.warn(St(rt.NOT_SUPPORTED_FORMATTER));
      },
      get missing() {
        return a.getMissingHandler();
      },
      set missing(u) {
        a.setMissingHandler(u);
      },
      get silentTranslationWarn() {
        return N.isBoolean(a.missingWarn) ? !a.missingWarn : a.missingWarn;
      },
      set silentTranslationWarn(u) {
        a.missingWarn = N.isBoolean(u) ? !u : u;
      },
      get silentFallbackWarn() {
        return N.isBoolean(a.fallbackWarn) ? !a.fallbackWarn : a.fallbackWarn;
      },
      set silentFallbackWarn(u) {
        a.fallbackWarn = N.isBoolean(u) ? !u : u;
      },
      get modifiers() {
        return a.modifiers;
      },
      get formatFallbackMessages() {
        return a.fallbackFormat;
      },
      set formatFallbackMessages(u) {
        a.fallbackFormat = u;
      },
      get postTranslation() {
        return a.getPostTranslationHandler();
      },
      set postTranslation(u) {
        a.setPostTranslationHandler(u);
      },
      get sync() {
        return a.inheritLocale;
      },
      set sync(u) {
        a.inheritLocale = u;
      },
      get warnHtmlInMessage() {
        return a.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(u) {
        a.warnHtmlMessage = u !== "off";
      },
      get escapeParameterHtml() {
        return a.escapeParameter;
      },
      set escapeParameterHtml(u) {
        a.escapeParameter = u;
      },
      get preserveDirectiveContent() {
        return N.warn(St(rt.NOT_SUPPORTED_PRESERVE_DIRECTIVE)), !0;
      },
      set preserveDirectiveContent(u) {
        N.warn(St(rt.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
      },
      get pluralizationRules() {
        return a.pluralRules || {};
      },
      __composer: a,
      t(...u) {
        const [i, c, _] = u, p = {};
        let h = null, v = null;
        if (!N.isString(i))
          throw et(we.INVALID_ARGUMENT);
        const y = i;
        return N.isString(c) ? p.locale = c : N.isArray(c) ? h = c : N.isPlainObject(c) && (v = c), N.isArray(_) ? h = _ : N.isPlainObject(_) && (v = _), Reflect.apply(a.t, a, [
          y,
          h || v || {},
          p
        ]);
      },
      rt(...u) {
        return Reflect.apply(a.rt, a, [...u]);
      },
      tc(...u) {
        const [i, c, _] = u, p = { plural: 1 };
        let h = null, v = null;
        if (!N.isString(i))
          throw et(we.INVALID_ARGUMENT);
        const y = i;
        return N.isString(c) ? p.locale = c : N.isNumber(c) ? p.plural = c : N.isArray(c) ? h = c : N.isPlainObject(c) && (v = c), N.isString(_) ? p.locale = _ : N.isArray(_) ? h = _ : N.isPlainObject(_) && (v = _), Reflect.apply(a.t, a, [
          y,
          h || v || {},
          p
        ]);
      },
      te(u, i) {
        return a.te(u, i);
      },
      tm(u) {
        return a.tm(u);
      },
      getLocaleMessage(u) {
        return a.getLocaleMessage(u);
      },
      setLocaleMessage(u, i) {
        a.setLocaleMessage(u, i);
      },
      mergeLocaleMessage(u, i) {
        a.mergeLocaleMessage(u, i);
      },
      d(...u) {
        return Reflect.apply(a.d, a, [...u]);
      },
      getDateTimeFormat(u) {
        return a.getDateTimeFormat(u);
      },
      setDateTimeFormat(u, i) {
        a.setDateTimeFormat(u, i);
      },
      mergeDateTimeFormat(u, i) {
        a.mergeDateTimeFormat(u, i);
      },
      n(...u) {
        return Reflect.apply(a.n, a, [...u]);
      },
      getNumberFormat(u) {
        return a.getNumberFormat(u);
      },
      setNumberFormat(u, i) {
        a.setNumberFormat(u, i);
      },
      mergeNumberFormat(u, i) {
        a.mergeNumberFormat(u, i);
      },
      getChoiceIndex(u, i) {
        return N.warn(St(rt.NOT_SUPPORTED_GET_CHOICE_INDEX)), -1;
      },
      __onComponentInstanceCreated(u) {
        const { componentInstanceCreatedListener: i } = e;
        i && i(u, f);
      }
    };
    return f.__enableEmitter = (u) => {
      const i = a;
      i[pn] && i[pn](u);
    }, f.__disableEmitter = () => {
      const u = a;
      u[hn] && u[hn]();
    }, f;
  }
}
const Tn = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    validator: (e) => e === "parent" || e === "global",
    default: "parent"
  },
  i18n: {
    type: Object
  }
};
function Zr({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((f, u) => f = [
    ...f,
    ...N.isArray(u.children) ? u.children : [u]
  ], []) : t.reduce((a, f) => {
    const u = e[f];
    return u && (a[f] = u()), a;
  }, {});
}
function Er(e) {
  return ke.Fragment;
}
const Zt = {
  name: "i18n-t",
  props: N.assign({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      validator: (e) => N.isNumber(e) || !isNaN(e)
    }
  }, Tn),
  setup(e, t) {
    const { slots: a, attrs: f } = t, u = e.i18n || rn({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const i = Object.keys(a).filter((y) => y !== "_"), c = {};
      e.locale && (c.locale = e.locale), e.plural !== void 0 && (c.plural = N.isString(e.plural) ? +e.plural : e.plural);
      const _ = Zr(t, i), p = u[mn](e.keypath, _, c), h = N.assign({}, f), v = N.isString(e.tag) || N.isObject(e.tag) ? e.tag : Er();
      return ke.h(v, h, p);
    };
  }
};
function zr(e) {
  return N.isArray(e) && !N.isString(e[0]);
}
function br(e, t, a, f) {
  const { slots: u, attrs: i } = t;
  return () => {
    const c = { part: !0 };
    let _ = {};
    e.locale && (c.locale = e.locale), N.isString(e.format) ? c.key = e.format : N.isObject(e.format) && (N.isString(e.format.key) && (c.key = e.format.key), _ = Object.keys(e.format).reduce((w, M) => a.includes(M) ? N.assign({}, w, { [M]: e.format[M] }) : w, {}));
    const p = f(e.value, c, _);
    let h = [c.key];
    N.isArray(p) ? h = p.map((w, M) => {
      const j = u[w.type], $ = j ? j({ [w.type]: w.value, index: M, parts: p }) : [w.value];
      return zr($) && ($[0].key = `${w.type}-${M}`), $;
    }) : N.isString(p) && (h = [p]);
    const v = N.assign({}, i), y = N.isString(e.tag) || N.isObject(e.tag) ? e.tag : Er();
    return ke.h(y, v, h);
  };
}
const vn = {
  name: "i18n-n",
  props: N.assign({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, Tn),
  setup(e, t) {
    const a = e.i18n || rn({ useScope: "parent", __useComponent: !0 });
    return br(e, t, Ee.NUMBER_FORMAT_OPTIONS_KEYS, (...f) => a[gn](...f));
  }
}, Ln = {
  name: "i18n-d",
  props: N.assign({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, Tn),
  setup(e, t) {
    const a = e.i18n || rn({ useScope: "parent", __useComponent: !0 });
    return br(e, t, Ee.DATETIME_FORMAT_OPTIONS_KEYS, (...f) => a[_n](...f));
  }
};
function es(e, t) {
  const a = e;
  if (e.mode === "composition")
    return a.__getInstance(t) || e.global;
  {
    const f = a.__getInstance(t);
    return f != null ? f.__composer : e.global.__composer;
  }
}
function vr(e) {
  const t = (c) => {
    const { instance: _, modifiers: p, value: h } = c;
    if (!_ || !_.$)
      throw et(we.UNEXPECTED_ERROR);
    const v = es(e, _.$);
    p.preserve && N.warn(St(rt.NOT_SUPPORTED_PRESERVE));
    const y = zn(h);
    return [
      Reflect.apply(v.t, v, [...er(y)]),
      v
    ];
  };
  return {
    created: (c, _) => {
      const [p, h] = t(_);
      N.inBrowser && e.global === h && (c.__i18nWatcher = ke.watch(h.locale, () => {
        _.instance && _.instance.$forceUpdate();
      })), c.__composer = h, c.textContent = p;
    },
    unmounted: (c) => {
      N.inBrowser && c.__i18nWatcher && (c.__i18nWatcher(), c.__i18nWatcher = void 0, delete c.__i18nWatcher), c.__composer && (c.__composer = void 0, delete c.__composer);
    },
    beforeUpdate: (c, { value: _ }) => {
      if (c.__composer) {
        const p = c.__composer, h = zn(_);
        c.textContent = Reflect.apply(p.t, p, [
          ...er(h)
        ]);
      }
    },
    getSSRProps: (c) => {
      const [_] = t(c);
      return { textContent: _ };
    }
  };
}
function zn(e) {
  if (N.isString(e))
    return { path: e };
  if (N.isPlainObject(e)) {
    if (!("path" in e))
      throw et(we.REQUIRED_VALUE, "path");
    return e;
  } else
    throw et(we.INVALID_VALUE);
}
function er(e) {
  const { path: t, locale: a, args: f, choice: u, plural: i } = e, c = {}, _ = f || {};
  return N.isString(a) && (c.locale = a), N.isNumber(u) && (c.plural = u), N.isNumber(i) && (c.plural = i), [t, _, c];
}
function ts(e, t, ...a) {
  const f = N.isPlainObject(a[0]) ? a[0] : {}, u = !!f.useI18nComponentName, i = N.isBoolean(f.globalInstall) ? f.globalInstall : !0;
  i && u && N.warn(St(rt.COMPONENT_NAME_LEGACY_COMPATIBLE, {
    name: Zt.name
  })), i && (e.component(u ? "i18n" : Zt.name, Zt), e.component(vn.name, vn), e.component(Ln.name, Ln)), e.directive("t", vr(t));
}
function ns(e, t, a) {
  return {
    beforeCreate() {
      const f = ke.getCurrentInstance();
      if (!f)
        throw et(we.UNEXPECTED_ERROR);
      const u = this.$options;
      if (u.i18n) {
        const i = u.i18n;
        u.__i18n && (i.__i18n = u.__i18n), i.__root = t, this === this.$root ? this.$i18n = tr(e, i) : (i.__injectWithOption = !0, this.$i18n = bn(i));
      } else
        u.__i18n ? this === this.$root ? this.$i18n = tr(e, u) : this.$i18n = bn({
          __i18n: u.__i18n,
          __injectWithOption: !0,
          __root: t
        }) : this.$i18n = e;
      u.__i18nGlobal && hr(t, u, u), e.__onComponentInstanceCreated(this.$i18n), a.__setInstance(f, this.$i18n), this.$t = (...i) => this.$i18n.t(...i), this.$rt = (...i) => this.$i18n.rt(...i), this.$tc = (...i) => this.$i18n.tc(...i), this.$te = (i, c) => this.$i18n.te(i, c), this.$d = (...i) => this.$i18n.d(...i), this.$n = (...i) => this.$i18n.n(...i), this.$tm = (i) => this.$i18n.tm(i);
    },
    mounted() {
    },
    unmounted() {
      const f = ke.getCurrentInstance();
      if (!f)
        throw et(we.UNEXPECTED_ERROR);
      delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, a.__deleteInstance(f), delete this.$i18n;
    }
  };
}
function tr(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[_r](t.pluralizationRules || e.pluralizationRules);
  const a = nn(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(a).forEach((f) => e.mergeLocaleMessage(f, a[f])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((f) => e.mergeDateTimeFormat(f, t.datetimeFormats[f])), t.numberFormats && Object.keys(t.numberFormats).forEach((f) => e.mergeNumberFormat(f, t.numberFormats[f])), e;
}
const Lr = /* @__PURE__ */ N.makeSymbol("global-vue-i18n");
function rs(e = {}, t) {
  const a = N.isBoolean(e.legacy) ? e.legacy : !0, f = N.isBoolean(e.globalInjection) ? e.globalInjection : !0, u = a ? !!e.allowComposition : !0, i = /* @__PURE__ */ new Map(), [c, _] = as(e, a), p = N.makeSymbol("vue-i18n");
  function h(w) {
    return i.get(w) || null;
  }
  function v(w, M) {
    i.set(w, M);
  }
  function y(w) {
    i.delete(w);
  }
  {
    const w = {
      get mode() {
        return a ? "legacy" : "composition";
      },
      get allowComposition() {
        return u;
      },
      async install(M, ...j) {
        M.__VUE_I18N_SYMBOL__ = p, M.provide(M.__VUE_I18N_SYMBOL__, w), !a && f && _s(M, w.global), ts(M, w, ...j), a && M.mixin(ns(_, _.__composer, w));
        const $ = M.unmount;
        M.unmount = () => {
          w.dispose(), $();
        };
      },
      get global() {
        return _;
      },
      dispose() {
        c.stop();
      },
      __instances: i,
      __getInstance: h,
      __setInstance: v,
      __deleteInstance: y
    };
    return w;
  }
}
function rn(e = {}) {
  const t = ke.getCurrentInstance();
  if (t == null)
    throw et(we.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw et(we.NOT_INSLALLED);
  const a = is(t), f = ls(a), u = pr(t), i = os(e, u);
  if (a.mode === "legacy" && !e.__useComponent) {
    if (!a.allowComposition)
      throw et(we.NOT_AVAILABLE_IN_LEGACY_MODE);
    return fs(t, i, f, e);
  }
  if (i === "global")
    return hr(f, e, u), f;
  if (i === "parent") {
    let p = us(a, t, e.__useComponent);
    return p == null && (N.warn(St(rt.NOT_FOUND_PARENT_SCOPE)), p = f), p;
  }
  const c = a;
  let _ = c.__getInstance(t);
  if (_ == null) {
    const p = N.assign({}, e);
    "__i18n" in u && (p.__i18n = u.__i18n), f && (p.__root = f), _ = yn(p), cs(c, t), c.__setInstance(t, _);
  }
  return _;
}
const ss = (e) => {
  if (!(qr in e))
    throw et(we.NOT_COMPATIBLE_LEGACY_VUE_I18N);
  return e;
};
function as(e, t, a) {
  const f = ke.effectScope();
  {
    const u = t ? f.run(() => bn(e)) : f.run(() => yn(e));
    if (u == null)
      throw et(we.UNEXPECTED_ERROR);
    return [f, u];
  }
}
function is(e) {
  {
    const t = ke.inject(e.isCE ? Lr : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw et(e.isCE ? we.NOT_INSLALLED_WITH_PROVIDE : we.UNEXPECTED_ERROR);
    return t;
  }
}
function os(e, t) {
  return N.isEmptyObject(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function ls(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function us(e, t, a = !1) {
  let f = null;
  const u = t.root;
  let i = t.parent;
  for (; i != null; ) {
    const c = e;
    if (e.mode === "composition")
      f = c.__getInstance(i);
    else {
      const _ = c.__getInstance(i);
      _ != null && (f = _.__composer, a && f && !f[gr] && (f = null));
    }
    if (f != null || u === i)
      break;
    i = i.parent;
  }
  return f;
}
function cs(e, t, a) {
  ke.onMounted(() => {
  }, t), ke.onUnmounted(() => {
    e.__deleteInstance(t);
  }, t);
}
function fs(e, t, a, f = {}) {
  const u = t === "local", i = ke.shallowRef(null);
  if (u && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw et(we.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const c = N.isBoolean(f.inheritLocale) ? f.inheritLocale : !0, _ = ke.ref(
    u && c ? a.locale.value : N.isString(f.locale) ? f.locale : Ee.DEFAULT_LOCALE
  ), p = ke.ref(
    u && c ? a.fallbackLocale.value : N.isString(f.fallbackLocale) || N.isArray(f.fallbackLocale) || N.isPlainObject(f.fallbackLocale) || f.fallbackLocale === !1 ? f.fallbackLocale : _.value
  ), h = ke.ref(nn(_.value, f)), v = ke.ref(N.isPlainObject(f.datetimeFormats) ? f.datetimeFormats : { [_.value]: {} }), y = ke.ref(N.isPlainObject(f.numberFormats) ? f.numberFormats : { [_.value]: {} }), w = u ? a.missingWarn : N.isBoolean(f.missingWarn) || N.isRegExp(f.missingWarn) ? f.missingWarn : !0, M = u ? a.fallbackWarn : N.isBoolean(f.fallbackWarn) || N.isRegExp(f.fallbackWarn) ? f.fallbackWarn : !0, j = u ? a.fallbackRoot : N.isBoolean(f.fallbackRoot) ? f.fallbackRoot : !0, $ = !!f.fallbackFormat, Y = N.isFunction(f.missing) ? f.missing : null, oe = N.isFunction(f.postTranslation) ? f.postTranslation : null, J = u ? a.warnHtmlMessage : N.isBoolean(f.warnHtmlMessage) ? f.warnHtmlMessage : !0, ae = !!f.escapeParameter, D = u ? a.modifiers : N.isPlainObject(f.modifiers) ? f.modifiers : {}, T = f.pluralRules || u && a.pluralRules;
  function ee() {
    return [
      _.value,
      p.value,
      h.value,
      v.value,
      y.value
    ];
  }
  const K = ke.computed({
    get: () => i.value ? i.value.locale.value : _.value,
    set: (F) => {
      i.value && (i.value.locale.value = F), _.value = F;
    }
  }), be = ke.computed({
    get: () => i.value ? i.value.fallbackLocale.value : p.value,
    set: (F) => {
      i.value && (i.value.fallbackLocale.value = F), p.value = F;
    }
  }), $e = ke.computed(() => i.value ? i.value.messages.value : h.value), Le = ke.computed(() => v.value), je = ke.computed(() => y.value);
  function Me() {
    return i.value ? i.value.getPostTranslationHandler() : oe;
  }
  function tt(F) {
    i.value && i.value.setPostTranslationHandler(F);
  }
  function Ze() {
    return i.value ? i.value.getMissingHandler() : Y;
  }
  function nt(F) {
    i.value && i.value.setMissingHandler(F);
  }
  function Q(F) {
    return ee(), F();
  }
  function de(...F) {
    return i.value ? Q(() => Reflect.apply(i.value.t, null, [...F])) : Q(() => "");
  }
  function X(...F) {
    return i.value ? Reflect.apply(i.value.rt, null, [...F]) : "";
  }
  function fe(...F) {
    return i.value ? Q(() => Reflect.apply(i.value.d, null, [...F])) : Q(() => "");
  }
  function me(...F) {
    return i.value ? Q(() => Reflect.apply(i.value.n, null, [...F])) : Q(() => "");
  }
  function Ie(F) {
    return i.value ? i.value.tm(F) : {};
  }
  function d(F, ue) {
    return i.value ? i.value.te(F, ue) : !1;
  }
  function E(F) {
    return i.value ? i.value.getLocaleMessage(F) : {};
  }
  function I(F, ue) {
    i.value && (i.value.setLocaleMessage(F, ue), h.value[F] = ue);
  }
  function U(F, ue) {
    i.value && i.value.mergeLocaleMessage(F, ue);
  }
  function G(F) {
    return i.value ? i.value.getDateTimeFormat(F) : {};
  }
  function A(F, ue) {
    i.value && (i.value.setDateTimeFormat(F, ue), v.value[F] = ue);
  }
  function Z(F, ue) {
    i.value && i.value.mergeDateTimeFormat(F, ue);
  }
  function ye(F) {
    return i.value ? i.value.getNumberFormat(F) : {};
  }
  function ne(F, ue) {
    i.value && (i.value.setNumberFormat(F, ue), y.value[F] = ue);
  }
  function De(F, ue) {
    i.value && i.value.mergeNumberFormat(F, ue);
  }
  const We = {
    get id() {
      return i.value ? i.value.id : -1;
    },
    locale: K,
    fallbackLocale: be,
    messages: $e,
    datetimeFormats: Le,
    numberFormats: je,
    get inheritLocale() {
      return i.value ? i.value.inheritLocale : c;
    },
    set inheritLocale(F) {
      i.value && (i.value.inheritLocale = F);
    },
    get availableLocales() {
      return i.value ? i.value.availableLocales : Object.keys(h.value);
    },
    get modifiers() {
      return i.value ? i.value.modifiers : D;
    },
    get pluralRules() {
      return i.value ? i.value.pluralRules : T;
    },
    get isGlobal() {
      return i.value ? i.value.isGlobal : !1;
    },
    get missingWarn() {
      return i.value ? i.value.missingWarn : w;
    },
    set missingWarn(F) {
      i.value && (i.value.missingWarn = F);
    },
    get fallbackWarn() {
      return i.value ? i.value.fallbackWarn : M;
    },
    set fallbackWarn(F) {
      i.value && (i.value.missingWarn = F);
    },
    get fallbackRoot() {
      return i.value ? i.value.fallbackRoot : j;
    },
    set fallbackRoot(F) {
      i.value && (i.value.fallbackRoot = F);
    },
    get fallbackFormat() {
      return i.value ? i.value.fallbackFormat : $;
    },
    set fallbackFormat(F) {
      i.value && (i.value.fallbackFormat = F);
    },
    get warnHtmlMessage() {
      return i.value ? i.value.warnHtmlMessage : J;
    },
    set warnHtmlMessage(F) {
      i.value && (i.value.warnHtmlMessage = F);
    },
    get escapeParameter() {
      return i.value ? i.value.escapeParameter : ae;
    },
    set escapeParameter(F) {
      i.value && (i.value.escapeParameter = F);
    },
    t: de,
    getPostTranslationHandler: Me,
    setPostTranslationHandler: tt,
    getMissingHandler: Ze,
    setMissingHandler: nt,
    rt: X,
    d: fe,
    n: me,
    tm: Ie,
    te: d,
    getLocaleMessage: E,
    setLocaleMessage: I,
    mergeLocaleMessage: U,
    getDateTimeFormat: G,
    setDateTimeFormat: A,
    mergeDateTimeFormat: Z,
    getNumberFormat: ye,
    setNumberFormat: ne,
    mergeNumberFormat: De
  };
  function le(F) {
    F.locale.value = _.value, F.fallbackLocale.value = p.value, Object.keys(h.value).forEach((ue) => {
      F.mergeLocaleMessage(ue, h.value[ue]);
    }), Object.keys(v.value).forEach((ue) => {
      F.mergeDateTimeFormat(ue, v.value[ue]);
    }), Object.keys(y.value).forEach((ue) => {
      F.mergeNumberFormat(ue, y.value[ue]);
    }), F.escapeParameter = ae, F.fallbackFormat = $, F.fallbackRoot = j, F.fallbackWarn = M, F.missingWarn = w, F.warnHtmlMessage = J;
  }
  return ke.onBeforeMount(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw et(we.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const F = i.value = e.proxy.$i18n.__composer;
    t === "global" ? (_.value = F.locale.value, p.value = F.fallbackLocale.value, h.value = F.messages.value, v.value = F.datetimeFormats.value, y.value = F.numberFormats.value) : u && le(F);
  }), We;
}
const ds = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], ms = ["t", "rt", "d", "n", "tm"];
function _s(e, t) {
  const a = /* @__PURE__ */ Object.create(null);
  ds.forEach((f) => {
    const u = Object.getOwnPropertyDescriptor(t, f);
    if (!u)
      throw et(we.UNEXPECTED_ERROR);
    const i = ke.isRef(u.value) ? {
      get() {
        return u.value.value;
      },
      set(c) {
        u.value.value = c;
      }
    } : {
      get() {
        return u.get && u.get();
      }
    };
    Object.defineProperty(a, f, i);
  }), e.config.globalProperties.$i18n = a, ms.forEach((f) => {
    const u = Object.getOwnPropertyDescriptor(t, f);
    if (!u || !u.value)
      throw et(we.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${f}`, u);
  });
}
Ee.registerMessageCompiler(Ee.compileToFunction);
Ee.registerMessageResolver(Ee.resolveValue);
Ee.registerLocaleFallbacker(Ee.fallbackWithLocaleChain);
{
  const e = N.getGlobalThis();
  e.__INTLIFY__ = !0, Ee.setDevToolsHook(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
Nt.DatetimeFormat = Ln;
Nt.I18nInjectionKey = Lr;
Nt.NumberFormat = vn;
Nt.Translation = Zt;
Nt.VERSION = fr;
Nt.castToVueI18n = ss;
Nt.createI18n = rs;
var gs = Nt.useI18n = rn;
Nt.vTDirective = vr;
const ct = (e) => {
  const t = gs();
  return Object.keys(e).forEach((a) => {
    t.mergeLocaleMessage(a, e[a]);
  }), t;
}, ps = {
  name: "VuiButton",
  mixins: [
    Kt,
    ut
  ],
  props: {
    disabled: {
      type: Boolean
    },
    icon: {
      type: String
    },
    text: {
      type: String
    },
    type: {
      type: String,
      default: "button"
    }
  },
  created() {
    ct(Cr);
  },
  mounted() {
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    onClick() {
      this.disabled || this.onAnimate();
    }
  }
};
const ft = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [f, u] of t)
    a[f] = u;
  return a;
}, hs = ["id"], Es = ["disabled", "type"], bs = /* @__PURE__ */ lt("div", { class: "vui-button-loader" }, null, -1);
function vs(e, t, a, f, u, i) {
  return Se(), Oe("div", {
    id: e.componentId,
    class: _t([
      "vui-button",
      { "vui-button--with-icon": e.icon },
      { "vui-button--toggled": e.toggled },
      { "vui-button--animating": !e.disabled && e.animating },
      { "vui-button--loading": !e.disabled && e.loading },
      { "vui-button--disabled": e.disabled }
    ]),
    onClick: t[0] || (t[0] = Sn((...c) => e.onClick && e.onClick(...c), ["stop"]))
  }, [
    lt("button", {
      class: "vui-button-holder",
      disabled: e.disabled,
      type: e.type
    }, [
      e.icon ? (Se(), Oe("i", {
        key: 0,
        class: _t(["vui-button-icon", e.icon])
      }, null, 2)) : qe("", !0),
      e.$slots.default ? st(e.$slots, "default", { key: 1 }) : qe("", !0),
      e.text ? (Se(), Oe(Mt, { key: 2 }, [
        Ht(yt(e.text), 1)
      ], 64)) : qe("", !0)
    ], 8, Es),
    bs
  ], 10, hs);
}
const Ls = /* @__PURE__ */ ft(ps, [["render", vs]]), Ss = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ls
}, Symbol.toStringTag, { value: "Module" })), ys = {}, Ts = {}, Os = {
  en: ys,
  fr: Ts
}, Ns = {
  name: "VuiFooter",
  mixins: [
    ut
  ],
  created() {
    ct(Os);
  },
  mounted() {
  },
  data() {
    return {};
  },
  computed: {},
  components: {}
};
const Cs = ["id"];
function As(e, t, a, f, u, i) {
  return Se(), Oe("footer", {
    id: e.componentId,
    class: "vui-footer"
  }, [
    st(e.$slots, "default")
  ], 8, Cs);
}
const Is = /* @__PURE__ */ ft(Ns, [["render", As]]), ks = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Is
}, Symbol.toStringTag, { value: "Module" })), Ms = {}, Ps = {}, Rs = {
  en: Ms,
  fr: Ps
}, Ds = {
  name: "VuiForm",
  mixins: [
    ut
  ],
  created() {
    ct(Rs);
  },
  mounted() {
  },
  data() {
    return {};
  },
  computed: {},
  components: {}
};
const Fs = ["id"];
function ws(e, t, a, f, u, i) {
  return Se(), Oe("form", {
    id: e.componentId,
    class: "vui-form"
  }, [
    st(e.$slots, "default")
  ], 8, Fs);
}
const $s = /* @__PURE__ */ ft(Ds, [["render", ws]]), Us = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $s
}, Symbol.toStringTag, { value: "Module" })), js = {}, Ws = {}, Vs = {
  en: js,
  fr: Ws
}, Bs = {
  name: "VuiHeader",
  mixins: [
    ut
  ],
  created() {
    ct(Vs);
  },
  mounted() {
  },
  data() {
    return {};
  },
  computed: {},
  components: {}
};
const Gs = ["id"];
function Hs(e, t, a, f, u, i) {
  return Se(), Oe("header", {
    id: e.componentId,
    class: "vui-header"
  }, [
    st(e.$slots, "default")
  ], 8, Gs);
}
const Ks = /* @__PURE__ */ ft(Bs, [["render", Hs]]), xs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ks
}, Symbol.toStringTag, { value: "Module" })), Xs = {
  "component.input.placeholder": "Type a value ..."
}, Ys = {}, qs = {
  en: Xs,
  fr: Ys
}, Qs = {
  name: "VuiInput",
  mixins: [
    ut
  ],
  props: {
    disabled: {
      type: Boolean
    },
    placeholder: {
      type: String,
      default: null
    },
    type: {
      type: String,
      required: !0
    },
    modelValue: {
      type: [String, Number, null],
      required: !0
    }
  },
  created() {
    ct(qs);
  },
  mounted() {
  },
  data() {
    return {};
  },
  computed: {
    placeholderValue() {
      return this.placeholder ? this.placeholder : this.$t("component.input.placeholder");
    }
  },
  methods: {
    onInput(e) {
      const { value: t } = e.target;
      this.$emit("update:modelValue", t);
    }
  },
  components: {}
};
const Js = { class: "vui-input" }, Zs = ["id", "disabled", "placeholder", "type", "value"];
function zs(e, t, a, f, u, i) {
  return Se(), Oe("div", Js, [
    lt("input", yr(e.$attrs, {
      id: e.componentId,
      disabled: e.disabled,
      placeholder: e.placeholderValue,
      type: e.type,
      value: e.modelValue,
      onInput: t[0] || (t[0] = (...c) => e.onInput && e.onInput(...c))
    }), null, 16, Zs)
  ]);
}
const ea = /* @__PURE__ */ ft(Qs, [["render", zs]]), ta = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ea
}, Symbol.toStringTag, { value: "Module" })), na = {}, ra = {}, sa = {
  en: na,
  fr: ra
}, aa = {
  name: "VuiTable",
  mixins: [
    Kt,
    ut
  ],
  props: {
    disabled: {
      type: Boolean
    },
    headers: {
      type: Array
    },
    itemLabel: {
      type: String
    },
    itemValue: {
      type: String
    },
    items: {
      type: Array
    }
  },
  created() {
    ct(sa);
  },
  mounted() {
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
const ia = ["id"];
function oa(e, t, a, f, u, i) {
  return Se(), Oe("table", {
    id: e.componentId,
    class: "vui-table"
  }, [
    lt("thead", null, [
      lt("tr", null, [
        (Se(!0), Oe(Mt, null, Bt(e.headers, (c, _) => (Se(), Oe("th", {
          key: `table-${e.componentId}-header--${_}`
        }, yt(c[e.itemLabel]), 1))), 128))
      ])
    ]),
    lt("tbody", null, [
      (Se(!0), Oe(Mt, null, Bt(e.items, (c, _) => (Se(), Oe("tr", {
        key: `table-${e.componentId}-item--${_}`
      }, [
        (Se(!0), Oe(Mt, null, Bt(e.headers, (p, h) => (Se(), Oe("td", {
          key: `table-${e.componentId}-item-td--${h}`
        }, yt(c[e.headers[h][e.itemValue]]), 1))), 128))
      ]))), 128))
    ])
  ], 8, ia);
}
const la = /* @__PURE__ */ ft(aa, [["render", oa]]), ua = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: la
}, Symbol.toStringTag, { value: "Module" })), ca = {}, fa = {}, da = {
  en: ca,
  fr: fa
}, ma = {
  name: "VuiGrid",
  mixins: [
    ut
  ],
  props: {},
  created() {
    ct(da);
  },
  mounted() {
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
const _a = ["id"];
function ga(e, t, a, f, u, i) {
  return Se(), Oe("div", {
    id: e.componentId,
    class: "vui-grid"
  }, [
    st(e.$slots, "default")
  ], 8, _a);
}
const pa = /* @__PURE__ */ ft(ma, [["render", ga]]), ha = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pa
}, Symbol.toStringTag, { value: "Module" })), Ea = {}, ba = {}, va = {
  en: Ea,
  fr: ba
}, La = {
  name: "VuiGridUnit",
  mixins: [
    ut
  ],
  props: {
    flex: {
      type: String,
      default: "0 0 49%"
    }
  },
  created() {
    ct(va);
  },
  mounted() {
  },
  data() {
    return {};
  },
  computed: {
    style() {
      const { flex: e } = this;
      return [
        { flex: e }
      ];
    }
  },
  methods: {},
  components: {}
};
function Sa(e, t, a, f, u, i) {
  return Se(), Oe("div", {
    class: "vui-grid-unit",
    style: nr(e.style)
  }, [
    st(e.$slots, "default")
  ], 4);
}
const ya = /* @__PURE__ */ ft(La, [["render", Sa]]), Ta = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ya
}, Symbol.toStringTag, { value: "Module" })), Oa = {}, Na = {}, On = {
  en: Oa,
  fr: Na
}, Ca = {
  name: "VuiCard",
  mixins: [
    ut
  ],
  props: {},
  created() {
    ct(On);
  },
  mounted() {
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
const Aa = ["id"], Ia = {
  key: 0,
  class: "vui-card-header"
}, ka = {
  key: 1,
  class: "vui-card-body"
}, Ma = {
  key: 2,
  class: "vui-card-footer"
};
function Pa(e, t, a, f, u, i) {
  return Se(), Oe("div", {
    id: e.componentId,
    class: "vui-card"
  }, [
    e.$slots.header ? (Se(), Oe("div", Ia, [
      st(e.$slots, "header")
    ])) : qe("", !0),
    e.$slots.body ? (Se(), Oe("div", ka, [
      st(e.$slots, "body")
    ])) : qe("", !0),
    e.$slots.footer ? (Se(), Oe("div", Ma, [
      st(e.$slots, "footer")
    ])) : qe("", !0)
  ], 8, Aa);
}
const Ra = /* @__PURE__ */ ft(Ca, [["render", Pa]]), Da = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ra
}, Symbol.toStringTag, { value: "Module" })), Fa = {
  "component.dropdown.placeholder": "Select a value ..."
}, wa = {}, $a = {
  en: Fa,
  fr: wa
}, Ua = {
  disabled: {
    type: Boolean
  },
  items: {
    type: Array,
    required: !0
  },
  itemLabel: {
    type: String
  },
  itemValue: {
    type: String
  },
  modelValue: {
    type: [Object, Number, String, null]
  },
  placeholder: {
    type: String
  },
  value: {
    type: [Object, Number, String, null]
  }
}, ja = {
  name: "VuiDropdown",
  mixins: [
    Kt,
    ut
  ],
  props: Ua,
  created() {
    ct($a);
  },
  mounted() {
  },
  watch: {
    modelValue(e) {
      this.selected = e;
    }
  },
  data() {
    return {
      selected: null
    };
  },
  computed: {
    listTitle() {
      return this.selected ? this.placeholderLabel : null;
    },
    placeholderValue() {
      const { itemLabel: e, selected: t } = this;
      return t ? e ? t[e] : t : this.placeholderLabel;
    },
    placeholderLabel() {
      return this.placeholder ? this.placeholder : this.$t("component.dropdown.placeholder");
    }
  },
  methods: {
    onClick() {
      this.disabled || this.onAnimate();
    },
    toggleItem(e) {
      this.selected = e, this.$emit("update:modelValue", e), this.$emit("input", e), this.blur();
    }
  }
};
const Wa = ["id"], Va = { class: "vui-dropdown-placeholder-label" };
function Ba(e, t, a, f, u, i) {
  const c = rr("vui-list");
  return Se(), Oe("div", {
    id: e.componentId,
    class: "vui-dropdown"
  }, [
    lt("div", {
      class: _t([
        "vui-dropdown-placeholder",
        { "vui-dropdown-placeholder--toggled": e.toggled },
        { "vui-dropdown-placeholder--animating": e.animating },
        { "vui-dropdown-placeholder--disabled": e.disabled }
      ]),
      onClick: t[0] || (t[0] = Sn((..._) => e.onClick && e.onClick(..._), ["stop"]))
    }, [
      lt("span", Va, yt(e.placeholderValue), 1)
    ], 2),
    e.toggled ? (Se(), sr(c, {
      key: 0,
      class: "vui-dropdown-list",
      "group-id": e.componentGroupId,
      disabled: e.disabled,
      items: e.items,
      "item-label": e.itemLabel,
      "item-value": e.itemValue,
      selectable: !0,
      title: e.listTitle,
      value: e.selected,
      onInput: e.toggleItem
    }, null, 8, ["group-id", "disabled", "items", "item-label", "item-value", "title", "value", "onInput"])) : qe("", !0)
  ], 8, Wa);
}
const Ga = /* @__PURE__ */ ft(ja, [["render", Ba]]), Ha = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ga
}, Symbol.toStringTag, { value: "Module" })), Ka = {}, xa = {}, Xa = {
  en: Ka,
  fr: xa
}, Ya = {
  disabled: {
    type: Boolean
  },
  items: {
    type: Array,
    required: !0
  },
  itemLabel: {
    type: String
  },
  itemValue: {
    type: String
  },
  selectable: {
    type: Boolean
  },
  title: {
    type: String
  },
  value: {
    types: [
      Number,
      Object,
      String
    ]
  }
}, qa = {
  name: "VuiList",
  mixins: [
    Kt,
    ut
  ],
  props: Ya,
  created() {
    ct(Xa);
  },
  mounted() {
    this.value && (this.selected = this.value);
  },
  watch: {
    value(e) {
      this.selected = e;
    }
  },
  data() {
    return {
      open: null,
      selected: null
    };
  },
  computed: {},
  methods: {
    isAnimating(e) {
      return this.open === e && this.animating;
    },
    isGroup(e) {
      return Array.isArray(e == null ? void 0 : e[this.itemValue]);
    },
    isSelected(e) {
      const { itemValue: t, selected: a } = this;
      return t && a ? a[t] === e[t] : a === e;
    },
    isToggled(e) {
      return this.open === e && this.toggled;
    },
    onClick(e) {
      !this.disabled && this.selectable && (this.selected = this.isSelected(e) ? null : e, this.$emit("input", e));
    },
    onToggle(e) {
      this.disabled || (this.open = this.open === e ? null : e, this.onAnimate(this.open !== null));
    }
  }
};
const Qa = ["id"], Ja = {
  key: 0,
  class: "vui-list-title"
}, Za = { class: "vui-list-items" }, za = ["onClick"], ei = ["onClick"], ti = ["onClick"];
function ni(e, t, a, f, u, i) {
  return Se(), Oe("div", {
    id: e.componentId,
    class: "vui-list"
  }, [
    e.title ? (Se(), Oe("div", Ja, yt(e.title), 1)) : qe("", !0),
    lt("div", Za, [
      (Se(!0), Oe(Mt, null, Bt(e.items, (c, _) => (Se(), Oe("div", {
        key: `list-item-${_}`,
        class: _t([
          { "vui-list-items-item": !e.isGroup(c) },
          { "vui-list-items-group-item": e.isGroup(c) }
        ])
      }, [
        e.isGroup(c) ? qe("", !0) : (Se(), Oe("div", {
          key: 0,
          class: _t([
            { "vui-list-items-item-label": !e.isGroup(c) },
            { "vui-list-items-item-label--selectable": e.selectable },
            { "vui-list-items-item-label--selected": e.isSelected(c) }
          ]),
          onClick: () => e.onClick(c)
        }, [
          c.icon ? (Se(), Oe("i", {
            key: 0,
            class: _t([
              "vui-list-items-item-label-icon",
              c.icon
            ])
          }, null, 2)) : qe("", !0),
          Ht(" " + yt(e.itemValue ? c[e.itemLabel] : c), 1)
        ], 10, za)),
        e.isGroup(c) ? (Se(), Oe(Mt, { key: 1 }, [
          lt("div", {
            class: _t([
              "vui-list-items-item-group-label",
              { "vui-list-items-item-group-label--toggled": e.isToggled(_) },
              { "vui-list-items-item-group-label--animating": e.isAnimating(_) },
              { "vui-list-items-item-group-label--open": e.open === _ }
            ]),
            onClick: Sn(() => e.onToggle(_), ["stop"])
          }, yt(e.itemValue ? c[e.itemLabel] : c), 11, ei),
          e.open === _ ? (Se(!0), Oe(Mt, { key: 0 }, Bt(c[e.itemValue], (p, h) => (Se(), Oe("div", {
            key: `list-group-item-${h}`,
            class: _t([
              "vui-list-items-item-label",
              { "vui-list-items-item-label--selectable": e.selectable },
              { "vui-list-items-item-label--selected": e.isSelected(p) }
            ]),
            onClick: () => e.onClick(p)
          }, [
            p.icon ? (Se(), Oe("i", {
              key: 0,
              class: _t([
                "vui-list-items-item-label-icon",
                p.icon
              ])
            }, null, 2)) : qe("", !0),
            Ht(" " + yt(e.itemValue ? p[e.itemLabel] : p), 1)
          ], 10, ti))), 128)) : qe("", !0)
        ], 64)) : qe("", !0)
      ], 2))), 128))
    ])
  ], 8, Qa);
}
const ri = /* @__PURE__ */ ft(qa, [["render", ni]]), si = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ri
}, Symbol.toStringTag, { value: "Module" })), ai = {
  "component.button.close": "Close"
}, ii = {}, oi = {
  en: ai,
  fr: ii
}, li = {
  name: "VuiModal",
  mixins: [
    ut
  ],
  props: {
    loading: {
      type: Boolean
    },
    onClose: {
      type: Function
    },
    onOpen: {
      type: Function
    },
    showFooter: {
      type: Boolean
    },
    showFooterClose: {
      type: Boolean
    },
    showHeader: {
      type: Boolean
    },
    showHeaderClose: {
      type: Boolean
    },
    title: {
      type: String
    },
    visible: {
      type: Boolean
    }
  },
  created() {
    ct(oi);
  },
  mounted() {
  },
  data() {
    return {};
  },
  computed: {
    isHeaderVisible() {
      return !!this.$slots.header || this.showHeader || this.showHeaderClose;
    },
    isFooterVisible() {
      return !!this.$slots.footer || this.showFooter || this.showFooterClose;
    }
  },
  methods: {}
};
const ui = ["id"], ci = { class: "vui-modal-content" }, fi = {
  key: 0,
  class: "vui-modal-content-header"
}, di = {
  key: 0,
  class: "vui-modal-content-header-title"
}, mi = {
  key: 1,
  class: "vui-modal-content-body"
}, _i = {
  key: 2,
  class: "vui-modal-content-footer"
};
function gi(e, t, a, f, u, i) {
  const c = rr("vui-button");
  return e.visible ? (Se(), Oe("div", {
    key: 0,
    id: e.componentId,
    class: "vui-modal"
  }, [
    lt("div", ci, [
      e.isHeaderVisible ? (Se(), Oe("div", fi, [
        e.title ? (Se(), Oe("span", di, yt(e.title), 1)) : qe("", !0),
        e.showHeaderClose ? (Se(), Oe("i", {
          key: 1,
          class: "fa-regular fa-circle-xmark",
          onClick: t[0] || (t[0] = (..._) => e.onClose && e.onClose(..._))
        })) : qe("", !0),
        st(e.$slots, "header")
      ])) : qe("", !0),
      e.$slots.body || e.$slots.default ? (Se(), Oe("div", mi, [
        st(e.$slots, "body"),
        st(e.$slots, "default")
      ])) : qe("", !0),
      e.isFooterVisible ? (Se(), Oe("div", _i, [
        e.showHeaderClose ? (Se(), sr(c, {
          key: 0,
          text: e.$t("component.button.close"),
          onClick: e.onClose
        }, null, 8, ["text", "onClick"])) : qe("", !0),
        st(e.$slots, "footer")
      ])) : qe("", !0)
    ])
  ], 8, ui)) : qe("", !0);
}
const pi = /* @__PURE__ */ ft(li, [["render", gi]]), hi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pi
}, Symbol.toStringTag, { value: "Module" })), Ei = {}, bi = {}, vi = {
  en: Ei,
  fr: bi
}, Li = {
  name: "VuiPage",
  mixins: [
    Kt,
    ut
  ],
  created() {
    ct(vi);
  },
  mounted() {
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    outclick() {
      this.$bus.emit("outclick", this.componentGroupId);
    }
  },
  components: {}
};
const Si = ["id"], yi = { class: "vui-page-header" }, Ti = { class: "vui-page-body" }, Oi = { class: "vui-page-footer" };
function Ni(e, t, a, f, u, i) {
  return Se(), Oe("div", {
    id: e.componentId,
    class: "vui-page",
    onClick: t[0] || (t[0] = (...c) => e.outclick && e.outclick(...c))
  }, [
    lt("div", yi, [
      st(e.$slots, "header")
    ]),
    lt("div", Ti, [
      st(e.$slots, "body")
    ]),
    lt("div", Oi, [
      st(e.$slots, "footer")
    ])
  ], 8, Si);
}
const Ci = /* @__PURE__ */ ft(Li, [["render", Ni]]), Ai = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ci
}, Symbol.toStringTag, { value: "Module" })), Ii = {
  name: "VuiTag",
  mixins: [
    ut
  ],
  props: {
    icon: {
      type: String
    },
    text: {
      type: String
    }
  },
  created() {
    ct(On);
  },
  mounted() {
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
const ki = ["id"];
function Mi(e, t, a, f, u, i) {
  return Se(), Oe("div", {
    id: e.componentId,
    class: _t([
      "vui-tag",
      { "vui-tag--with-icon": e.icon }
    ])
  }, [
    e.icon ? (Se(), Oe("i", {
      key: 0,
      class: _t(["vui-tag-icon", e.icon])
    }, null, 2)) : qe("", !0),
    e.$slots.default ? st(e.$slots, "default", { key: 1 }) : qe("", !0),
    e.text ? (Se(), Oe(Mt, { key: 2 }, [
      Ht(yt(e.text), 1)
    ], 64)) : qe("", !0)
  ], 10, ki);
}
const Pi = /* @__PURE__ */ ft(Ii, [["render", Mi]]), Ri = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pi
}, Symbol.toStringTag, { value: "Module" })), Di = {
  name: "VuiTooltip",
  mixins: [
    ut
  ],
  props: {
    holder: {
      type: HTMLElement
    },
    icon: {
      type: String
    },
    position: {
      type: String,
      default: "right"
    },
    text: {
      type: String
    },
    visible: {
      type: Boolean
    }
  },
  created() {
    ct(On);
  },
  watch: {
    holder: {
      handler(e) {
        this.setPosition(e);
      },
      deep: !0
    },
    visible(e) {
      e && this.setContentPosition(), this.show = e;
    }
  },
  mounted() {
    this.setPosition(this.holder);
  },
  data() {
    return {
      dimension: {
        content: {},
        holder: {}
      },
      show: !1
    };
  },
  computed: {
    display() {
      return this.show ? "block" : "none";
    },
    left() {
      const { content: e, holder: t } = this.dimension;
      switch (this.position) {
        case "left":
          return t.left - (e.width + 15);
        case "bottom":
        case "top":
          const a = e.width - t.width;
          return t.left - a / 2;
        case "right":
        default:
          return t.right + 15;
      }
    },
    top() {
      const { content: e, holder: t } = this.dimension;
      switch (this.position) {
        case "bottom":
          return t.top + t.height + 15;
        case "top":
          return t.top - e.height - 15;
        case "left":
        case "right":
        default:
          return t.top - t.height / 2;
      }
    }
  },
  methods: {
    setContentPosition() {
      this.$nextTick(() => {
        const { tooltip: e } = this.$refs;
        this.dimension.content = e.getBoundingClientRect();
      });
    },
    setPosition(e) {
      e && (this.dimension.holder = e.getBoundingClientRect());
    }
  }
};
const Fi = ["id"];
function wi(e, t, a, f, u, i) {
  return Se(), Oe("div", {
    id: e.componentId,
    ref: "tooltip",
    class: _t([
      "vui-tooltip",
      { "vui-tooltip--with-icon": e.icon }
    ]),
    style: nr({
      position: "fixed",
      display: e.display,
      top: e.top,
      left: e.left
    })
  }, [
    lt("i", {
      class: _t([
        "vui-tooltip-pointer",
        `vui-tooltip-pointer--${e.position}`
      ])
    }, null, 2),
    e.icon ? (Se(), Oe("i", {
      key: 0,
      class: _t(["vui-tooltip-icon", e.icon])
    }, null, 2)) : qe("", !0),
    e.$slots.default ? st(e.$slots, "default", { key: 1 }) : qe("", !0),
    e.text ? (Se(), Oe(Mt, { key: 2 }, [
      Ht(yt(e.text), 1)
    ], 64)) : qe("", !0)
  ], 14, Fi);
}
const $i = /* @__PURE__ */ ft(Di, [["render", wi]]), Ui = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $i
}, Symbol.toStringTag, { value: "Module" }));
function ji(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(t, a) {
    var f = e.get(t);
    f ? f.push(a) : e.set(t, [a]);
  }, off: function(t, a) {
    var f = e.get(t);
    f && (a ? f.splice(f.indexOf(a) >>> 0, 1) : e.set(t, []));
  }, emit: function(t, a) {
    var f = e.get(t);
    f && f.slice().map(function(u) {
      u(a);
    }), (f = e.get("*")) && f.slice().map(function(u) {
      u(t, a);
    });
  } };
}
const Vi = {
  install(e) {
    e.provide("$bus", ji());
    const t = /* @__PURE__ */ Object.assign({ "/components/html/button/button.vue": Ss, "/components/html/footer/footer.vue": ks, "/components/html/form/form.vue": Us, "/components/html/header/header.vue": xs, "/components/html/input/input.vue": ta, "/components/html/table/table.vue": ua, "/components/layout/grid/grid.vue": ha, "/components/layout/grid/unit/unit.vue": Ta, "/components/ui/card/card.vue": Da, "/components/ui/dropdown/dropdown.vue": Ha, "/components/ui/list/list.vue": si, "/components/ui/modal/modal.vue": hi, "/components/ui/page/page.vue": Ai, "/components/ui/tag/tag.vue": Ri, "/components/ui/tooltip/tooltip.vue": Ui });
    Object.keys(t).forEach((a) => {
      const f = t[a].default;
      e.component(
        f.name,
        Tr(f)
      );
    });
  }
};
export {
  Vi as default
};
