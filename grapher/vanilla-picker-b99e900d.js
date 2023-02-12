/*!
 * vanilla-picker v2.12.1
 * https://vanilla-picker.js.org
 *
 * Copyright 2017-2021 Andreas Borgen (https://github.com/Sphinxxxx), Adam Brooks (https://github.com/dissimulate)
 * Released under the ISC license.
 */
var O = function(l, i) {
  if (!(l instanceof i))
    throw new TypeError("Cannot call a class as a function");
}, R = function() {
  function l(i, e) {
    for (var t = 0; t < e.length; t++) {
      var r = e[t];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, r.key, r);
    }
  }
  return function(i, e, t) {
    return e && l(i.prototype, e), t && l(i, t), i;
  };
}(), y = function() {
  function l(i, e) {
    var t = [], r = !0, n = !1, o = void 0;
    try {
      for (var c = i[Symbol.iterator](), a; !(r = (a = c.next()).done) && (t.push(a.value), !(e && t.length === e)); r = !0)
        ;
    } catch (s) {
      n = !0, o = s;
    } finally {
      try {
        !r && c.return && c.return();
      } finally {
        if (n)
          throw o;
      }
    }
    return t;
  }
  return function(i, e) {
    if (Array.isArray(i))
      return i;
    if (Symbol.iterator in Object(i))
      return l(i, e);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };
}();
String.prototype.startsWith = String.prototype.startsWith || function(l) {
  return this.indexOf(l) === 0;
};
String.prototype.padStart = String.prototype.padStart || function(l, i) {
  for (var e = this; e.length < l; )
    e = i + e;
  return e;
};
var N = { cb: "0f8ff", tqw: "aebd7", q: "-ffff", qmrn: "7fffd4", zr: "0ffff", bg: "5f5dc", bsq: "e4c4", bck: "---", nch: "ebcd", b: "--ff", bvt: "8a2be2", brwn: "a52a2a", brw: "deb887", ctb: "5f9ea0", hrt: "7fff-", chcT: "d2691e", cr: "7f50", rnw: "6495ed", crns: "8dc", crms: "dc143c", cn: "-ffff", Db: "--8b", Dcn: "-8b8b", Dgnr: "b8860b", Dgr: "a9a9a9", Dgrn: "-64-", Dkhk: "bdb76b", Dmgn: "8b-8b", Dvgr: "556b2f", Drng: "8c-", Drch: "9932cc", Dr: "8b--", Dsmn: "e9967a", Dsgr: "8fbc8f", DsTb: "483d8b", DsTg: "2f4f4f", Dtrq: "-ced1", Dvt: "94-d3", ppnk: "1493", pskb: "-bfff", mgr: "696969", grb: "1e90ff", rbrc: "b22222", rwht: "af0", stg: "228b22", chs: "-ff", gnsb: "dcdcdc", st: "8f8ff", g: "d7-", gnr: "daa520", gr: "808080", grn: "-8-0", grnw: "adff2f", hnw: "0fff0", htpn: "69b4", nnr: "cd5c5c", ng: "4b-82", vr: "0", khk: "0e68c", vnr: "e6e6fa", nrb: "0f5", wngr: "7cfc-", mnch: "acd", Lb: "add8e6", Lcr: "08080", Lcn: "e0ffff", Lgnr: "afad2", Lgr: "d3d3d3", Lgrn: "90ee90", Lpnk: "b6c1", Lsmn: "a07a", Lsgr: "20b2aa", Lskb: "87cefa", LsTg: "778899", Lstb: "b0c4de", Lw: "e0", m: "-ff-", mgrn: "32cd32", nn: "af0e6", mgnt: "-ff", mrn: "8--0", mqm: "66cdaa", mmb: "--cd", mmrc: "ba55d3", mmpr: "9370db", msg: "3cb371", mmsT: "7b68ee", "": "-fa9a", mtr: "48d1cc", mmvt: "c71585", mnLb: "191970", ntc: "5fffa", mstr: "e4e1", mccs: "e4b5", vjw: "dead", nv: "--80", c: "df5e6", v: "808-0", vrb: "6b8e23", rng: "a5-", rngr: "45-", rch: "da70d6", pgnr: "eee8aa", pgrn: "98fb98", ptrq: "afeeee", pvtr: "db7093", ppwh: "efd5", pchp: "dab9", pr: "cd853f", pnk: "c0cb", pm: "dda0dd", pwrb: "b0e0e6", prp: "8-080", cc: "663399", r: "--", sbr: "bc8f8f", rb: "4169e1", sbrw: "8b4513", smn: "a8072", nbr: "4a460", sgrn: "2e8b57", ssh: "5ee", snn: "a0522d", svr: "c0c0c0", skb: "87ceeb", sTb: "6a5acd", sTgr: "708090", snw: "afa", n: "-ff7f", stb: "4682b4", tn: "d2b48c", t: "-8080", thst: "d8bfd8", tmT: "6347", trqs: "40e0d0", vt: "ee82ee", whT: "5deb3", wht: "", hts: "5f5f5", w: "-", wgrn: "9acd32" };
function A(l) {
  var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, e = i > 0 ? l.toFixed(i).replace(/0+$/, "").replace(/\.$/, "") : l.toString();
  return e || "0";
}
var z = function() {
  function l(i, e, t, r) {
    O(this, l);
    var n = this;
    function o(a) {
      if (a.startsWith("hsl")) {
        var s = a.match(/([\-\d\.e]+)/g).map(Number), p = y(s, 4), u = p[0], f = p[1], d = p[2], b = p[3];
        b === void 0 && (b = 1), u /= 360, f /= 100, d /= 100, n.hsla = [u, f, d, b];
      } else if (a.startsWith("rgb")) {
        var m = a.match(/([\-\d\.e]+)/g).map(Number), h = y(m, 4), v = h[0], g = h[1], E = h[2], k = h[3];
        k === void 0 && (k = 1), n.rgba = [v, g, E, k];
      } else
        a.startsWith("#") ? n.rgba = l.hexToRgb(a) : n.rgba = l.nameToRgb(a) || l.hexToRgb(a);
    }
    if (i !== void 0)
      if (Array.isArray(i))
        this.rgba = i;
      else if (t === void 0) {
        var c = i && "" + i;
        c && o(c.toLowerCase());
      } else
        this.rgba = [i, e, t, r === void 0 ? 1 : r];
  }
  return R(l, [{
    key: "printRGB",
    value: function(e) {
      var t = e ? this.rgba : this.rgba.slice(0, 3), r = t.map(function(n, o) {
        return A(n, o === 3 ? 3 : 0);
      });
      return e ? "rgba(" + r + ")" : "rgb(" + r + ")";
    }
  }, {
    key: "printHSL",
    value: function(e) {
      var t = [360, 100, 100, 1], r = ["", "%", "%", ""], n = e ? this.hsla : this.hsla.slice(0, 3), o = n.map(function(c, a) {
        return A(c * t[a], a === 3 ? 3 : 1) + r[a];
      });
      return e ? "hsla(" + o + ")" : "hsl(" + o + ")";
    }
  }, {
    key: "printHex",
    value: function(e) {
      var t = this.hex;
      return e ? t : t.substring(0, 7);
    }
  }, {
    key: "rgba",
    get: function() {
      if (this._rgba)
        return this._rgba;
      if (!this._hsla)
        throw new Error("No color is set");
      return this._rgba = l.hslToRgb(this._hsla);
    },
    set: function(e) {
      e.length === 3 && (e[3] = 1), this._rgba = e, this._hsla = null;
    }
  }, {
    key: "rgbString",
    get: function() {
      return this.printRGB();
    }
  }, {
    key: "rgbaString",
    get: function() {
      return this.printRGB(!0);
    }
  }, {
    key: "hsla",
    get: function() {
      if (this._hsla)
        return this._hsla;
      if (!this._rgba)
        throw new Error("No color is set");
      return this._hsla = l.rgbToHsl(this._rgba);
    },
    set: function(e) {
      e.length === 3 && (e[3] = 1), this._hsla = e, this._rgba = null;
    }
  }, {
    key: "hslString",
    get: function() {
      return this.printHSL();
    }
  }, {
    key: "hslaString",
    get: function() {
      return this.printHSL(!0);
    }
  }, {
    key: "hex",
    get: function() {
      var e = this.rgba, t = e.map(function(r, n) {
        return n < 3 ? r.toString(16) : Math.round(r * 255).toString(16);
      });
      return "#" + t.map(function(r) {
        return r.padStart(2, "0");
      }).join("");
    },
    set: function(e) {
      this.rgba = l.hexToRgb(e);
    }
  }], [{
    key: "hexToRgb",
    value: function(e) {
      var t = (e.startsWith("#") ? e.slice(1) : e).replace(/^(\w{3})$/, "$1F").replace(/^(\w)(\w)(\w)(\w)$/, "$1$1$2$2$3$3$4$4").replace(/^(\w{6})$/, "$1FF");
      if (!t.match(/^([0-9a-fA-F]{8})$/))
        throw new Error("Unknown hex color; " + e);
      var r = t.match(/^(\w\w)(\w\w)(\w\w)(\w\w)$/).slice(1).map(function(n) {
        return parseInt(n, 16);
      });
      return r[3] = r[3] / 255, r;
    }
  }, {
    key: "nameToRgb",
    value: function(e) {
      var t = e.toLowerCase().replace("at", "T").replace(/[aeiouyldf]/g, "").replace("ght", "L").replace("rk", "D").slice(-5, 4), r = N[t];
      return r === void 0 ? r : l.hexToRgb(r.replace(/\-/g, "00").padStart(6, "f"));
    }
  }, {
    key: "rgbToHsl",
    value: function(e) {
      var t = y(e, 4), r = t[0], n = t[1], o = t[2], c = t[3];
      r /= 255, n /= 255, o /= 255;
      var a = Math.max(r, n, o), s = Math.min(r, n, o), p = void 0, u = void 0, f = (a + s) / 2;
      if (a === s)
        p = u = 0;
      else {
        var d = a - s;
        switch (u = f > 0.5 ? d / (2 - a - s) : d / (a + s), a) {
          case r:
            p = (n - o) / d + (n < o ? 6 : 0);
            break;
          case n:
            p = (o - r) / d + 2;
            break;
          case o:
            p = (r - n) / d + 4;
            break;
        }
        p /= 6;
      }
      return [p, u, f, c];
    }
  }, {
    key: "hslToRgb",
    value: function(e) {
      var t = y(e, 4), r = t[0], n = t[1], o = t[2], c = t[3], a = void 0, s = void 0, p = void 0;
      if (n === 0)
        a = s = p = o;
      else {
        var u = function(h, v, g) {
          return g < 0 && (g += 1), g > 1 && (g -= 1), g < 0.16666666666666666 ? h + (v - h) * 6 * g : g < 0.5 ? v : g < 0.6666666666666666 ? h + (v - h) * (0.6666666666666666 - g) * 6 : h;
        }, f = o < 0.5 ? o * (1 + n) : o + n - o * n, d = 2 * o - f;
        a = u(d, f, r + 1 / 3), s = u(d, f, r), p = u(d, f, r - 1 / 3);
      }
      var b = [a * 255, s * 255, p * 255].map(Math.round);
      return b[3] = c, b;
    }
  }]), l;
}(), F = function() {
  function l() {
    O(this, l), this._events = [];
  }
  return R(l, [{
    key: "add",
    value: function(e, t, r) {
      e.addEventListener(t, r, !1), this._events.push({
        target: e,
        type: t,
        handler: r
      });
    }
  }, {
    key: "remove",
    value: function(e, t, r) {
      this._events = this._events.filter(function(n) {
        var o = !0;
        return e && e !== n.target && (o = !1), t && t !== n.type && (o = !1), r && r !== n.handler && (o = !1), o && l._doRemove(n.target, n.type, n.handler), !o;
      });
    }
  }, {
    key: "destroy",
    value: function() {
      this._events.forEach(function(e) {
        return l._doRemove(e.target, e.type, e.handler);
      }), this._events = [];
    }
  }], [{
    key: "_doRemove",
    value: function(e, t, r) {
      e.removeEventListener(t, r, !1);
    }
  }]), l;
}();
function U(l) {
  var i = document.createElement("div");
  return i.innerHTML = l, i.firstElementChild;
}
function L(l, i, e) {
  var t = !1;
  function r(a, s, p) {
    return Math.max(s, Math.min(a, p));
  }
  function n(a, s, p) {
    if (p && (t = !0), !!t) {
      a.preventDefault();
      var u = i.getBoundingClientRect(), f = u.width, d = u.height, b = s.clientX, m = s.clientY, h = r(b - u.left, 0, f), v = r(m - u.top, 0, d);
      e(h / f, v / d);
    }
  }
  function o(a, s) {
    var p = a.buttons === void 0 ? a.which : a.buttons;
    p === 1 ? n(a, a, s) : t = !1;
  }
  function c(a, s) {
    a.touches.length === 1 ? n(a, a.touches[0], s) : t = !1;
  }
  l.add(i, "mousedown", function(a) {
    o(a, !0);
  }), l.add(i, "touchstart", function(a) {
    c(a, !0);
  }), l.add(window, "mousemove", o), l.add(i, "touchmove", c), l.add(window, "mouseup", function(a) {
    t = !1;
  }), l.add(i, "touchend", function(a) {
    t = !1;
  }), l.add(i, "touchcancel", function(a) {
    t = !1;
  });
}
var B = `linear-gradient(45deg, lightgrey 25%, transparent 25%, transparent 75%, lightgrey 75%) 0 0 / 2em 2em,
                   linear-gradient(45deg, lightgrey 25%,       white 25%,       white 75%, lightgrey 75%) 1em 1em / 2em 2em`, G = 360, P = "keydown", x = "mousedown", T = "focusin";
function _(l, i) {
  return (i || document).querySelector(l);
}
function M(l) {
  l.preventDefault(), l.stopPropagation();
}
function H(l, i, e, t, r) {
  l.add(i, P, function(n) {
    e.indexOf(n.key) >= 0 && (r && M(n), t(n));
  });
}
var W = function() {
  function l(i) {
    O(this, l), this.settings = {
      popup: "right",
      layout: "default",
      alpha: !0,
      editor: !0,
      editorFormat: "hex",
      cancelButton: !1,
      defaultColor: "#0cf"
    }, this._events = new F(), this.onChange = null, this.onDone = null, this.onOpen = null, this.onClose = null, this.setOptions(i);
  }
  return R(l, [{
    key: "setOptions",
    value: function(e) {
      var t = this;
      if (!e)
        return;
      var r = this.settings;
      function n(s, p, u) {
        for (var f in s)
          u && u.indexOf(f) >= 0 || (p[f] = s[f]);
      }
      if (e instanceof HTMLElement)
        r.parent = e;
      else {
        r.parent && e.parent && r.parent !== e.parent && (this._events.remove(r.parent), this._popupInited = !1), n(e, r), e.onChange && (this.onChange = e.onChange), e.onDone && (this.onDone = e.onDone), e.onOpen && (this.onOpen = e.onOpen), e.onClose && (this.onClose = e.onClose);
        var o = e.color || e.colour;
        o && this._setColor(o);
      }
      var c = r.parent;
      if (c && r.popup && !this._popupInited) {
        var a = function(p) {
          return t.openHandler(p);
        };
        this._events.add(c, "click", a), H(this._events, c, [" ", "Spacebar", "Enter"], a), this._popupInited = !0;
      } else
        e.parent && !r.popup && this.show();
    }
  }, {
    key: "openHandler",
    value: function(e) {
      if (this.show()) {
        e && e.preventDefault(), this.settings.parent.style.pointerEvents = "none";
        var t = e && e.type === P ? this._domEdit : this.domElement;
        setTimeout(function() {
          return t.focus();
        }, 100), this.onOpen && this.onOpen(this.colour);
      }
    }
  }, {
    key: "closeHandler",
    value: function(e) {
      var t = e && e.type, r = !1;
      if (!e)
        r = !0;
      else if (t === x || t === T) {
        var n = (this.__containedEvent || 0) + 100;
        e.timeStamp > n && (r = !0);
      } else
        M(e), r = !0;
      r && this.hide() && (this.settings.parent.style.pointerEvents = "", t !== x && this.settings.parent.focus(), this.onClose && this.onClose(this.colour));
    }
  }, {
    key: "movePopup",
    value: function(e, t) {
      this.closeHandler(), this.setOptions(e), t && this.openHandler();
    }
  }, {
    key: "setColor",
    value: function(e, t) {
      this._setColor(e, { silent: t });
    }
  }, {
    key: "_setColor",
    value: function(e, t) {
      if (typeof e == "string" && (e = e.trim()), !!e) {
        t = t || {};
        var r = void 0;
        try {
          r = new z(e);
        } catch (o) {
          if (t.failSilently)
            return;
          throw o;
        }
        if (!this.settings.alpha) {
          var n = r.hsla;
          n[3] = 1, r.hsla = n;
        }
        this.colour = this.color = r, this._setHSLA(null, null, null, null, t);
      }
    }
  }, {
    key: "setColour",
    value: function(e, t) {
      this.setColor(e, t);
    }
  }, {
    key: "show",
    value: function() {
      var e = this.settings.parent;
      if (!e)
        return !1;
      if (this.domElement) {
        var t = this._toggleDOM(!0);
        return this._setPosition(), t;
      }
      var r = this.settings.template || '<div class="picker_wrapper" tabindex="-1"><div class="picker_arrow"></div><div class="picker_hue picker_slider"><div class="picker_selector"></div></div><div class="picker_sl"><div class="picker_selector"></div></div><div class="picker_alpha picker_slider"><div class="picker_selector"></div></div><div class="picker_editor"><input aria-label="Type a color name or hex value"/></div><div class="picker_sample"></div><div class="picker_done"><button>Ok</button></div><div class="picker_cancel"><button>Cancel</button></div></div>', n = U(r);
      return this.domElement = n, this._domH = _(".picker_hue", n), this._domSL = _(".picker_sl", n), this._domA = _(".picker_alpha", n), this._domEdit = _(".picker_editor input", n), this._domSample = _(".picker_sample", n), this._domOkay = _(".picker_done button", n), this._domCancel = _(".picker_cancel button", n), n.classList.add("layout_" + this.settings.layout), this.settings.alpha || n.classList.add("no_alpha"), this.settings.editor || n.classList.add("no_editor"), this.settings.cancelButton || n.classList.add("no_cancel"), this._ifPopup(function() {
        return n.classList.add("popup");
      }), this._setPosition(), this.colour ? this._updateUI() : this._setColor(this.settings.defaultColor), this._bindEvents(), !0;
    }
  }, {
    key: "hide",
    value: function() {
      return this._toggleDOM(!1);
    }
  }, {
    key: "destroy",
    value: function() {
      this._events.destroy(), this.domElement && this.settings.parent.removeChild(this.domElement);
    }
  }, {
    key: "_bindEvents",
    value: function() {
      var e = this, t = this, r = this.domElement, n = this._events;
      function o(s, p, u) {
        n.add(s, p, u);
      }
      o(r, "click", function(s) {
        return s.preventDefault();
      }), L(n, this._domH, function(s, p) {
        return t._setHSLA(s);
      }), L(n, this._domSL, function(s, p) {
        return t._setHSLA(null, s, 1 - p);
      }), this.settings.alpha && L(n, this._domA, function(s, p) {
        return t._setHSLA(null, null, null, 1 - p);
      });
      var c = this._domEdit;
      o(c, "input", function(s) {
        t._setColor(this.value, { fromEditor: !0, failSilently: !0 });
      }), o(c, "focus", function(s) {
        var p = this;
        p.selectionStart === p.selectionEnd && p.select();
      }), this._ifPopup(function() {
        var s = function(f) {
          return e.closeHandler(f);
        };
        o(window, x, s), o(window, T, s), H(n, r, ["Esc", "Escape"], s);
        var p = function(f) {
          e.__containedEvent = f.timeStamp;
        };
        o(r, x, p), o(r, T, p), o(e._domCancel, "click", s);
      });
      var a = function(p) {
        e._ifPopup(function() {
          return e.closeHandler(p);
        }), e.onDone && e.onDone(e.colour);
      };
      o(this._domOkay, "click", a), H(n, r, ["Enter"], a);
    }
  }, {
    key: "_setPosition",
    value: function() {
      var e = this.settings.parent, t = this.domElement;
      e !== t.parentNode && e.appendChild(t), this._ifPopup(function(r) {
        getComputedStyle(e).position === "static" && (e.style.position = "relative");
        var n = r === !0 ? "popup_right" : "popup_" + r;
        ["popup_top", "popup_bottom", "popup_left", "popup_right"].forEach(function(o) {
          o === n ? t.classList.add(o) : t.classList.remove(o);
        }), t.classList.add(n);
      });
    }
  }, {
    key: "_setHSLA",
    value: function(e, t, r, n, o) {
      o = o || {};
      var c = this.colour, a = c.hsla;
      [e, t, r, n].forEach(function(s, p) {
        (s || s === 0) && (a[p] = s);
      }), c.hsla = a, this._updateUI(o), this.onChange && !o.silent && this.onChange(c);
    }
  }, {
    key: "_updateUI",
    value: function(e) {
      if (!this.domElement)
        return;
      e = e || {};
      var t = this.colour, r = t.hsla, n = "hsl(" + r[0] * G + ", 100%, 50%)", o = t.hslString, c = t.hslaString, a = this._domH, s = this._domSL, p = this._domA, u = _(".picker_selector", a), f = _(".picker_selector", s), d = _(".picker_selector", p);
      function b(I, S, C) {
        S.style.left = C * 100 + "%";
      }
      function m(I, S, C) {
        S.style.top = C * 100 + "%";
      }
      b(a, u, r[0]), this._domSL.style.backgroundColor = this._domH.style.color = n, b(s, f, r[1]), m(s, f, 1 - r[2]), s.style.color = o, m(p, d, 1 - r[3]);
      var h = o, v = h.replace("hsl", "hsla").replace(")", ", 0)"), g = "linear-gradient(" + [h, v] + ")";
      if (this._domA.style.background = g + ", " + B, !e.fromEditor) {
        var E = this.settings.editorFormat, k = this.settings.alpha, w = void 0;
        switch (E) {
          case "rgb":
            w = t.printRGB(k);
            break;
          case "hsl":
            w = t.printHSL(k);
            break;
          default:
            w = t.printHex(k);
        }
        this._domEdit.value = w;
      }
      this._domSample.style.color = c;
    }
  }, {
    key: "_ifPopup",
    value: function(e, t) {
      this.settings.parent && this.settings.popup ? e && e(this.settings.popup) : t && t();
    }
  }, {
    key: "_toggleDOM",
    value: function(e) {
      var t = this.domElement;
      if (!t)
        return !1;
      var r = e ? "" : "none", n = t.style.display !== r;
      return n && (t.style.display = r), n;
    }
  }]), l;
}();
{
  var D = document.createElement("style");
  D.textContent = '.picker_wrapper.no_alpha .picker_alpha{display:none}.picker_wrapper.no_editor .picker_editor{position:absolute;z-index:-1;opacity:0}.picker_wrapper.no_cancel .picker_cancel{display:none}.layout_default.picker_wrapper{display:flex;flex-flow:row wrap;justify-content:space-between;align-items:stretch;font-size:10px;width:25em;padding:.5em}.layout_default.picker_wrapper input,.layout_default.picker_wrapper button{font-size:1rem}.layout_default.picker_wrapper>*{margin:.5em}.layout_default.picker_wrapper::before{content:"";display:block;width:100%;height:0;order:1}.layout_default .picker_slider,.layout_default .picker_selector{padding:1em}.layout_default .picker_hue{width:100%}.layout_default .picker_sl{flex:1 1 auto}.layout_default .picker_sl::before{content:"";display:block;padding-bottom:100%}.layout_default .picker_editor{order:1;width:6.5rem}.layout_default .picker_editor input{width:100%;height:100%}.layout_default .picker_sample{order:1;flex:1 1 auto}.layout_default .picker_done,.layout_default .picker_cancel{order:1}.picker_wrapper{box-sizing:border-box;background:#f2f2f2;box-shadow:0 0 0 1px silver;cursor:default;font-family:sans-serif;color:#444;pointer-events:auto}.picker_wrapper:focus{outline:none}.picker_wrapper button,.picker_wrapper input{box-sizing:border-box;border:none;box-shadow:0 0 0 1px silver;outline:none}.picker_wrapper button:focus,.picker_wrapper button:active,.picker_wrapper input:focus,.picker_wrapper input:active{box-shadow:0 0 2px 1px #1e90ff}.picker_wrapper button{padding:.4em .6em;cursor:pointer;background-color:#f5f5f5;background-image:linear-gradient(0deg, gainsboro, transparent)}.picker_wrapper button:active{background-image:linear-gradient(0deg, transparent, gainsboro)}.picker_wrapper button:hover{background-color:#fff}.picker_selector{position:absolute;z-index:1;display:block;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);border:2px solid #fff;border-radius:100%;box-shadow:0 0 3px 1px #67b9ff;background:currentColor;cursor:pointer}.picker_slider .picker_selector{border-radius:2px}.picker_hue{position:relative;background-image:linear-gradient(90deg, red, yellow, lime, cyan, blue, magenta, red);box-shadow:0 0 0 1px silver}.picker_sl{position:relative;box-shadow:0 0 0 1px silver;background-image:linear-gradient(180deg, white, rgba(255, 255, 255, 0) 50%),linear-gradient(0deg, black, rgba(0, 0, 0, 0) 50%),linear-gradient(90deg, #808080, rgba(128, 128, 128, 0))}.picker_alpha,.picker_sample{position:relative;background:linear-gradient(45deg, lightgrey 25%, transparent 25%, transparent 75%, lightgrey 75%) 0 0/2em 2em,linear-gradient(45deg, lightgrey 25%, white 25%, white 75%, lightgrey 75%) 1em 1em/2em 2em;box-shadow:0 0 0 1px silver}.picker_alpha .picker_selector,.picker_sample .picker_selector{background:none}.picker_editor input{font-family:monospace;padding:.2em .4em}.picker_sample::before{content:"";position:absolute;display:block;width:100%;height:100%;background:currentColor}.picker_arrow{position:absolute;z-index:-1}.picker_wrapper.popup{position:absolute;z-index:2;margin:1.5em}.picker_wrapper.popup,.picker_wrapper.popup .picker_arrow::before,.picker_wrapper.popup .picker_arrow::after{background:#f2f2f2;box-shadow:0 0 10px 1px rgba(0,0,0,.4)}.picker_wrapper.popup .picker_arrow{width:3em;height:3em;margin:0}.picker_wrapper.popup .picker_arrow::before,.picker_wrapper.popup .picker_arrow::after{content:"";display:block;position:absolute;top:0;left:0;z-index:-99}.picker_wrapper.popup .picker_arrow::before{width:100%;height:100%;-webkit-transform:skew(45deg);transform:skew(45deg);-webkit-transform-origin:0 100%;transform-origin:0 100%}.picker_wrapper.popup .picker_arrow::after{width:150%;height:150%;box-shadow:none}.popup.popup_top{bottom:100%;left:0}.popup.popup_top .picker_arrow{bottom:0;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.popup.popup_bottom{top:100%;left:0}.popup.popup_bottom .picker_arrow{top:0;left:0;-webkit-transform:rotate(90deg) scale(1, -1);transform:rotate(90deg) scale(1, -1)}.popup.popup_left{top:0;right:100%}.popup.popup_left .picker_arrow{top:0;right:0;-webkit-transform:scale(-1, 1);transform:scale(-1, 1)}.popup.popup_right{top:0;left:100%}.popup.popup_right .picker_arrow{top:0;left:0}', document.documentElement.firstElementChild.appendChild(D), W.StyleElement = D;
}
export {
  W as default
};
