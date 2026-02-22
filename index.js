(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        n(s);
    new MutationObserver(s => {
        for (const u of s)
            if (u.type === "childList")
                for (const o of u.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && n(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function a(s) {
        const u = {};
        return s.integrity && (u.integrity = s.integrity),
        s.referrerPolicy && (u.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials" ? u.credentials = "include" : s.crossOrigin === "anonymous" ? u.credentials = "omit" : u.credentials = "same-origin",
        u
    }
    function n(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const u = a(s);
        fetch(s.href, u)
    }
}
)();
var uB = {
    exports: {}
}
  , Ll = {};
var JQ;
function Nv() {
    if (JQ)
        return Ll;
    JQ = 1;
    var i = Symbol.for("react.transitional.element")
      , t = Symbol.for("react.fragment");
    function a(n, s, u) {
        var o = null;
        if (u !== void 0 && (o = "" + u),
        s.key !== void 0 && (o = "" + s.key),
        "key"in s) {
            u = {};
            for (var B in s)
                B !== "key" && (u[B] = s[B])
        } else
            u = s;
        return s = u.ref,
        {
            $$typeof: i,
            type: n,
            key: o,
            ref: s !== void 0 ? s : null,
            props: u
        }
    }
    return Ll.Fragment = t,
    Ll.jsx = a,
    Ll.jsxs = a,
    Ll
}
var kQ;
function Gv() {
    return kQ || (kQ = 1,
    uB.exports = Nv()),
    uB.exports
}
var V = Gv()
  , cB = {
    exports: {}
}
  , UA = {};
var jQ;
function Vv() {
    if (jQ)
        return UA;
    jQ = 1;
    var i = Symbol.for("react.transitional.element")
      , t = Symbol.for("react.portal")
      , a = Symbol.for("react.fragment")
      , n = Symbol.for("react.strict_mode")
      , s = Symbol.for("react.profiler")
      , u = Symbol.for("react.consumer")
      , o = Symbol.for("react.context")
      , B = Symbol.for("react.forward_ref")
      , h = Symbol.for("react.suspense")
      , g = Symbol.for("react.memo")
      , d = Symbol.for("react.lazy")
      , w = Symbol.for("react.activity")
      , C = Symbol.iterator;
    function m(y) {
        return y === null || typeof y != "object" ? null : (y = C && y[C] || y["@@iterator"],
        typeof y == "function" ? y : null)
    }
    var v = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , p = Object.assign
      , b = {};
    function E(y, X, P) {
        this.props = y,
        this.context = X,
        this.refs = b,
        this.updater = P || v
    }
    E.prototype.isReactComponent = {},
    E.prototype.setState = function(y, X) {
        if (typeof y != "object" && typeof y != "function" && y != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, y, X, "setState")
    }
    ,
    E.prototype.forceUpdate = function(y) {
        this.updater.enqueueForceUpdate(this, y, "forceUpdate")
    }
    ;
    function S() {}
    S.prototype = E.prototype;
    function O(y, X, P) {
        this.props = y,
        this.context = X,
        this.refs = b,
        this.updater = P || v
    }
    var G = O.prototype = new S;
    G.constructor = O,
    p(G, E.prototype),
    G.isPureReactComponent = !0;
    var x = Array.isArray;
    function L() {}
    var K = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , k = Object.prototype.hasOwnProperty;
    function N(y, X, P) {
        var eA = P.ref;
        return {
            $$typeof: i,
            type: y,
            key: X,
            ref: eA !== void 0 ? eA : null,
            props: P
        }
    }
    function iA(y, X) {
        return N(y.type, X, y.props)
    }
    function uA(y) {
        return typeof y == "object" && y !== null && y.$$typeof === i
    }
    function oA(y) {
        var X = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + y.replace(/[=:]/g, function(P) {
            return X[P]
        })
    }
    var lA = /\/+/g;
    function hA(y, X) {
        return typeof y == "object" && y !== null && y.key != null ? oA("" + y.key) : X.toString(36)
    }
    function CA(y) {
        switch (y.status) {
        case "fulfilled":
            return y.value;
        case "rejected":
            throw y.reason;
        default:
            switch (typeof y.status == "string" ? y.then(L, L) : (y.status = "pending",
            y.then(function(X) {
                y.status === "pending" && (y.status = "fulfilled",
                y.value = X)
            }, function(X) {
                y.status === "pending" && (y.status = "rejected",
                y.reason = X)
            })),
            y.status) {
            case "fulfilled":
                return y.value;
            case "rejected":
                throw y.reason
            }
        }
        throw y
    }
    function D(y, X, P, eA, cA) {
        var QA = typeof y;
        (QA === "undefined" || QA === "boolean") && (y = null);
        var vA = !1;
        if (y === null)
            vA = !0;
        else
            switch (QA) {
            case "bigint":
            case "string":
            case "number":
                vA = !0;
                break;
            case "object":
                switch (y.$$typeof) {
                case i:
                case t:
                    vA = !0;
                    break;
                case d:
                    return vA = y._init,
                    D(vA(y._payload), X, P, eA, cA)
                }
            }
        if (vA)
            return cA = cA(y),
            vA = eA === "" ? "." + hA(y, 0) : eA,
            x(cA) ? (P = "",
            vA != null && (P = vA.replace(lA, "$&/") + "/"),
            D(cA, X, P, "", function(gn) {
                return gn
            })) : cA != null && (uA(cA) && (cA = iA(cA, P + (cA.key == null || y && y.key === cA.key ? "" : ("" + cA.key).replace(lA, "$&/") + "/") + vA)),
            X.push(cA)),
            1;
        vA = 0;
        var ve = eA === "" ? "." : eA + ":";
        if (x(y))
            for (var WA = 0; WA < y.length; WA++)
                eA = y[WA],
                QA = ve + hA(eA, WA),
                vA += D(eA, X, P, QA, cA);
        else if (WA = m(y),
        typeof WA == "function")
            for (y = WA.call(y),
            WA = 0; !(eA = y.next()).done; )
                eA = eA.value,
                QA = ve + hA(eA, WA++),
                vA += D(eA, X, P, QA, cA);
        else if (QA === "object") {
            if (typeof y.then == "function")
                return D(CA(y), X, P, eA, cA);
            throw X = String(y),
            Error("Objects are not valid as a React child (found: " + (X === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : X) + "). If you meant to render a collection of children, use an array instead.")
        }
        return vA
    }
    function Z(y, X, P) {
        if (y == null)
            return y;
        var eA = []
          , cA = 0;
        return D(y, eA, "", "", function(QA) {
            return X.call(P, QA, cA++)
        }),
        eA
    }
    function rA(y) {
        if (y._status === -1) {
            var X = y._result;
            X = X(),
            X.then(function(P) {
                (y._status === 0 || y._status === -1) && (y._status = 1,
                y._result = P)
            }, function(P) {
                (y._status === 0 || y._status === -1) && (y._status = 2,
                y._result = P)
            }),
            y._status === -1 && (y._status = 0,
            y._result = X)
        }
        if (y._status === 1)
            return y._result.default;
        throw y._result
    }
    var dA = typeof reportError == "function" ? reportError : function(y) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var X = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
                error: y
            });
            if (!window.dispatchEvent(X))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", y);
            return
        }
        console.error(y)
    }
      , wA = {
        map: Z,
        forEach: function(y, X, P) {
            Z(y, function() {
                X.apply(this, arguments)
            }, P)
        },
        count: function(y) {
            var X = 0;
            return Z(y, function() {
                X++
            }),
            X
        },
        toArray: function(y) {
            return Z(y, function(X) {
                return X
            }) || []
        },
        only: function(y) {
            if (!uA(y))
                throw Error("React.Children.only expected to receive a single React element child.");
            return y
        }
    };
    return UA.Activity = w,
    UA.Children = wA,
    UA.Component = E,
    UA.Fragment = a,
    UA.Profiler = s,
    UA.PureComponent = O,
    UA.StrictMode = n,
    UA.Suspense = h,
    UA.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K,
    UA.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(y) {
            return K.H.useMemoCache(y)
        }
    },
    UA.cache = function(y) {
        return function() {
            return y.apply(null, arguments)
        }
    }
    ,
    UA.cacheSignal = function() {
        return null
    }
    ,
    UA.cloneElement = function(y, X, P) {
        if (y == null)
            throw Error("The argument must be a React element, but you passed " + y + ".");
        var eA = p({}, y.props)
          , cA = y.key;
        if (X != null)
            for (QA in X.key !== void 0 && (cA = "" + X.key),
            X)
                !k.call(X, QA) || QA === "key" || QA === "__self" || QA === "__source" || QA === "ref" && X.ref === void 0 || (eA[QA] = X[QA]);
        var QA = arguments.length - 2;
        if (QA === 1)
            eA.children = P;
        else if (1 < QA) {
            for (var vA = Array(QA), ve = 0; ve < QA; ve++)
                vA[ve] = arguments[ve + 2];
            eA.children = vA
        }
        return N(y.type, cA, eA)
    }
    ,
    UA.createContext = function(y) {
        return y = {
            $$typeof: o,
            _currentValue: y,
            _currentValue2: y,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        y.Provider = y,
        y.Consumer = {
            $$typeof: u,
            _context: y
        },
        y
    }
    ,
    UA.createElement = function(y, X, P) {
        var eA, cA = {}, QA = null;
        if (X != null)
            for (eA in X.key !== void 0 && (QA = "" + X.key),
            X)
                k.call(X, eA) && eA !== "key" && eA !== "__self" && eA !== "__source" && (cA[eA] = X[eA]);
        var vA = arguments.length - 2;
        if (vA === 1)
            cA.children = P;
        else if (1 < vA) {
            for (var ve = Array(vA), WA = 0; WA < vA; WA++)
                ve[WA] = arguments[WA + 2];
            cA.children = ve
        }
        if (y && y.defaultProps)
            for (eA in vA = y.defaultProps,
            vA)
                cA[eA] === void 0 && (cA[eA] = vA[eA]);
        return N(y, QA, cA)
    }
    ,
    UA.createRef = function() {
        return {
            current: null
        }
    }
    ,
    UA.forwardRef = function(y) {
        return {
            $$typeof: B,
            render: y
        }
    }
    ,
    UA.isValidElement = uA,
    UA.lazy = function(y) {
        return {
            $$typeof: d,
            _payload: {
                _status: -1,
                _result: y
            },
            _init: rA
        }
    }
    ,
    UA.memo = function(y, X) {
        return {
            $$typeof: g,
            type: y,
            compare: X === void 0 ? null : X
        }
    }
    ,
    UA.startTransition = function(y) {
        var X = K.T
          , P = {};
        K.T = P;
        try {
            var eA = y()
              , cA = K.S;
            cA !== null && cA(P, eA),
            typeof eA == "object" && eA !== null && typeof eA.then == "function" && eA.then(L, dA)
        } catch (QA) {
            dA(QA)
        } finally {
            X !== null && P.types !== null && (X.types = P.types),
            K.T = X
        }
    }
    ,
    UA.unstable_useCacheRefresh = function() {
        return K.H.useCacheRefresh()
    }
    ,
    UA.use = function(y) {
        return K.H.use(y)
    }
    ,
    UA.useActionState = function(y, X, P) {
        return K.H.useActionState(y, X, P)
    }
    ,
    UA.useCallback = function(y, X) {
        return K.H.useCallback(y, X)
    }
    ,
    UA.useContext = function(y) {
        return K.H.useContext(y)
    }
    ,
    UA.useDebugValue = function() {}
    ,
    UA.useDeferredValue = function(y, X) {
        return K.H.useDeferredValue(y, X)
    }
    ,
    UA.useEffect = function(y, X) {
        return K.H.useEffect(y, X)
    }
    ,
    UA.useEffectEvent = function(y) {
        return K.H.useEffectEvent(y)
    }
    ,
    UA.useId = function() {
        return K.H.useId()
    }
    ,
    UA.useImperativeHandle = function(y, X, P) {
        return K.H.useImperativeHandle(y, X, P)
    }
    ,
    UA.useInsertionEffect = function(y, X) {
        return K.H.useInsertionEffect(y, X)
    }
    ,
    UA.useLayoutEffect = function(y, X) {
        return K.H.useLayoutEffect(y, X)
    }
    ,
    UA.useMemo = function(y, X) {
        return K.H.useMemo(y, X)
    }
    ,
    UA.useOptimistic = function(y, X) {
        return K.H.useOptimistic(y, X)
    }
    ,
    UA.useReducer = function(y, X, P) {
        return K.H.useReducer(y, X, P)
    }
    ,
    UA.useRef = function(y) {
        return K.H.useRef(y)
    }
    ,
    UA.useState = function(y) {
        return K.H.useState(y)
    }
    ,
    UA.useSyncExternalStore = function(y, X, P) {
        return K.H.useSyncExternalStore(y, X, P)
    }
    ,
    UA.useTransition = function() {
        return K.H.useTransition()
    }
    ,
    UA.version = "19.2.4",
    UA
}
var ZQ;
function Dh() {
    return ZQ || (ZQ = 1,
    cB.exports = Vv()),
    cB.exports
}
var $ = Dh()
  , oB = {
    exports: {}
}
  , Ol = {}
  , fB = {
    exports: {}
}
  , BB = {};
var qQ;
function zv() {
    return qQ || (qQ = 1,
    (function(i) {
        function t(D, Z) {
            var rA = D.length;
            D.push(Z);
            A: for (; 0 < rA; ) {
                var dA = rA - 1 >>> 1
                  , wA = D[dA];
                if (0 < s(wA, Z))
                    D[dA] = Z,
                    D[rA] = wA,
                    rA = dA;
                else
                    break A
            }
        }
        function a(D) {
            return D.length === 0 ? null : D[0]
        }
        function n(D) {
            if (D.length === 0)
                return null;
            var Z = D[0]
              , rA = D.pop();
            if (rA !== Z) {
                D[0] = rA;
                A: for (var dA = 0, wA = D.length, y = wA >>> 1; dA < y; ) {
                    var X = 2 * (dA + 1) - 1
                      , P = D[X]
                      , eA = X + 1
                      , cA = D[eA];
                    if (0 > s(P, rA))
                        eA < wA && 0 > s(cA, P) ? (D[dA] = cA,
                        D[eA] = rA,
                        dA = eA) : (D[dA] = P,
                        D[X] = rA,
                        dA = X);
                    else if (eA < wA && 0 > s(cA, rA))
                        D[dA] = cA,
                        D[eA] = rA,
                        dA = eA;
                    else
                        break A
                }
            }
            return Z
        }
        function s(D, Z) {
            var rA = D.sortIndex - Z.sortIndex;
            return rA !== 0 ? rA : D.id - Z.id
        }
        if (i.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var u = performance;
            i.unstable_now = function() {
                return u.now()
            }
        } else {
            var o = Date
              , B = o.now();
            i.unstable_now = function() {
                return o.now() - B
            }
        }
        var h = []
          , g = []
          , d = 1
          , w = null
          , C = 3
          , m = !1
          , v = !1
          , p = !1
          , b = !1
          , E = typeof setTimeout == "function" ? setTimeout : null
          , S = typeof clearTimeout == "function" ? clearTimeout : null
          , O = typeof setImmediate < "u" ? setImmediate : null;
        function G(D) {
            for (var Z = a(g); Z !== null; ) {
                if (Z.callback === null)
                    n(g);
                else if (Z.startTime <= D)
                    n(g),
                    Z.sortIndex = Z.expirationTime,
                    t(h, Z);
                else
                    break;
                Z = a(g)
            }
        }
        function x(D) {
            if (p = !1,
            G(D),
            !v)
                if (a(h) !== null)
                    v = !0,
                    L || (L = !0,
                    oA());
                else {
                    var Z = a(g);
                    Z !== null && CA(x, Z.startTime - D)
                }
        }
        var L = !1
          , K = -1
          , k = 5
          , N = -1;
        function iA() {
            return b ? !0 : !(i.unstable_now() - N < k)
        }
        function uA() {
            if (b = !1,
            L) {
                var D = i.unstable_now();
                N = D;
                var Z = !0;
                try {
                    A: {
                        v = !1,
                        p && (p = !1,
                        S(K),
                        K = -1),
                        m = !0;
                        var rA = C;
                        try {
                            e: {
                                for (G(D),
                                w = a(h); w !== null && !(w.expirationTime > D && iA()); ) {
                                    var dA = w.callback;
                                    if (typeof dA == "function") {
                                        w.callback = null,
                                        C = w.priorityLevel;
                                        var wA = dA(w.expirationTime <= D);
                                        if (D = i.unstable_now(),
                                        typeof wA == "function") {
                                            w.callback = wA,
                                            G(D),
                                            Z = !0;
                                            break e
                                        }
                                        w === a(h) && n(h),
                                        G(D)
                                    } else
                                        n(h);
                                    w = a(h)
                                }
                                if (w !== null)
                                    Z = !0;
                                else {
                                    var y = a(g);
                                    y !== null && CA(x, y.startTime - D),
                                    Z = !1
                                }
                            }
                            break A
                        } finally {
                            w = null,
                            C = rA,
                            m = !1
                        }
                        Z = void 0
                    }
                } finally {
                    Z ? oA() : L = !1
                }
            }
        }
        var oA;
        if (typeof O == "function")
            oA = function() {
                O(uA)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var lA = new MessageChannel
              , hA = lA.port2;
            lA.port1.onmessage = uA,
            oA = function() {
                hA.postMessage(null)
            }
        } else
            oA = function() {
                E(uA, 0)
            }
            ;
        function CA(D, Z) {
            K = E(function() {
                D(i.unstable_now())
            }, Z)
        }
        i.unstable_IdlePriority = 5,
        i.unstable_ImmediatePriority = 1,
        i.unstable_LowPriority = 4,
        i.unstable_NormalPriority = 3,
        i.unstable_Profiling = null,
        i.unstable_UserBlockingPriority = 2,
        i.unstable_cancelCallback = function(D) {
            D.callback = null
        }
        ,
        i.unstable_forceFrameRate = function(D) {
            0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : k = 0 < D ? Math.floor(1e3 / D) : 5
        }
        ,
        i.unstable_getCurrentPriorityLevel = function() {
            return C
        }
        ,
        i.unstable_next = function(D) {
            switch (C) {
            case 1:
            case 2:
            case 3:
                var Z = 3;
                break;
            default:
                Z = C
            }
            var rA = C;
            C = Z;
            try {
                return D()
            } finally {
                C = rA
            }
        }
        ,
        i.unstable_requestPaint = function() {
            b = !0
        }
        ,
        i.unstable_runWithPriority = function(D, Z) {
            switch (D) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                D = 3
            }
            var rA = C;
            C = D;
            try {
                return Z()
            } finally {
                C = rA
            }
        }
        ,
        i.unstable_scheduleCallback = function(D, Z, rA) {
            var dA = i.unstable_now();
            switch (typeof rA == "object" && rA !== null ? (rA = rA.delay,
            rA = typeof rA == "number" && 0 < rA ? dA + rA : dA) : rA = dA,
            D) {
            case 1:
                var wA = -1;
                break;
            case 2:
                wA = 250;
                break;
            case 5:
                wA = 1073741823;
                break;
            case 4:
                wA = 1e4;
                break;
            default:
                wA = 5e3
            }
            return wA = rA + wA,
            D = {
                id: d++,
                callback: Z,
                priorityLevel: D,
                startTime: rA,
                expirationTime: wA,
                sortIndex: -1
            },
            rA > dA ? (D.sortIndex = rA,
            t(g, D),
            a(h) === null && D === a(g) && (p ? (S(K),
            K = -1) : p = !0,
            CA(x, rA - dA))) : (D.sortIndex = wA,
            t(h, D),
            v || m || (v = !0,
            L || (L = !0,
            oA()))),
            D
        }
        ,
        i.unstable_shouldYield = iA,
        i.unstable_wrapCallback = function(D) {
            var Z = C;
            return function() {
                var rA = C;
                C = Z;
                try {
                    return D.apply(this, arguments)
                } finally {
                    C = rA
                }
            }
        }
    }
    )(BB)),
    BB
}
var WQ;
function Xv() {
    return WQ || (WQ = 1,
    fB.exports = zv()),
    fB.exports
}
var hB = {
    exports: {}
}
  , Ke = {};
var PQ;
function Yv() {
    if (PQ)
        return Ke;
    PQ = 1;
    var i = Dh();
    function t(h) {
        var g = "https://react.dev/errors/" + h;
        if (1 < arguments.length) {
            g += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var d = 2; d < arguments.length; d++)
                g += "&args[]=" + encodeURIComponent(arguments[d])
        }
        return "Minified React error #" + h + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function a() {}
    var n = {
        d: {
            f: a,
            r: function() {
                throw Error(t(522))
            },
            D: a,
            C: a,
            L: a,
            m: a,
            X: a,
            S: a,
            M: a
        },
        p: 0,
        findDOMNode: null
    }
      , s = Symbol.for("react.portal");
    function u(h, g, d) {
        var w = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: s,
            key: w == null ? null : "" + w,
            children: h,
            containerInfo: g,
            implementation: d
        }
    }
    var o = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function B(h, g) {
        if (h === "font")
            return "";
        if (typeof g == "string")
            return g === "use-credentials" ? g : ""
    }
    return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n,
    Ke.createPortal = function(h, g) {
        var d = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
            throw Error(t(299));
        return u(h, g, null, d)
    }
    ,
    Ke.flushSync = function(h) {
        var g = o.T
          , d = n.p;
        try {
            if (o.T = null,
            n.p = 2,
            h)
                return h()
        } finally {
            o.T = g,
            n.p = d,
            n.d.f()
        }
    }
    ,
    Ke.preconnect = function(h, g) {
        typeof h == "string" && (g ? (g = g.crossOrigin,
        g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null,
        n.d.C(h, g))
    }
    ,
    Ke.prefetchDNS = function(h) {
        typeof h == "string" && n.d.D(h)
    }
    ,
    Ke.preinit = function(h, g) {
        if (typeof h == "string" && g && typeof g.as == "string") {
            var d = g.as
              , w = B(d, g.crossOrigin)
              , C = typeof g.integrity == "string" ? g.integrity : void 0
              , m = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
            d === "style" ? n.d.S(h, typeof g.precedence == "string" ? g.precedence : void 0, {
                crossOrigin: w,
                integrity: C,
                fetchPriority: m
            }) : d === "script" && n.d.X(h, {
                crossOrigin: w,
                integrity: C,
                fetchPriority: m,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0
            })
        }
    }
    ,
    Ke.preinitModule = function(h, g) {
        if (typeof h == "string")
            if (typeof g == "object" && g !== null) {
                if (g.as == null || g.as === "script") {
                    var d = B(g.as, g.crossOrigin);
                    n.d.M(h, {
                        crossOrigin: d,
                        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                        nonce: typeof g.nonce == "string" ? g.nonce : void 0
                    })
                }
            } else
                g == null && n.d.M(h)
    }
    ,
    Ke.preload = function(h, g) {
        if (typeof h == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
            var d = g.as
              , w = B(d, g.crossOrigin);
            n.d.L(h, d, {
                crossOrigin: w,
                integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0,
                type: typeof g.type == "string" ? g.type : void 0,
                fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
                referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
                imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
                imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
                media: typeof g.media == "string" ? g.media : void 0
            })
        }
    }
    ,
    Ke.preloadModule = function(h, g) {
        if (typeof h == "string")
            if (g) {
                var d = B(g.as, g.crossOrigin);
                n.d.m(h, {
                    as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
                    crossOrigin: d,
                    integrity: typeof g.integrity == "string" ? g.integrity : void 0
                })
            } else
                n.d.m(h)
    }
    ,
    Ke.requestFormReset = function(h) {
        n.d.r(h)
    }
    ,
    Ke.unstable_batchedUpdates = function(h, g) {
        return h(g)
    }
    ,
    Ke.useFormState = function(h, g, d) {
        return o.H.useFormState(h, g, d)
    }
    ,
    Ke.useFormStatus = function() {
        return o.H.useHostTransitionStatus()
    }
    ,
    Ke.version = "19.2.4",
    Ke
}
var $Q;
function yC() {
    if ($Q)
        return hB.exports;
    $Q = 1;
    function i() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
            } catch (t) {
                console.error(t)
            }
    }
    return i(),
    hB.exports = Yv(),
    hB.exports
}
var Aw;
function Jv() {
    if (Aw)
        return Ol;
    Aw = 1;
    var i = Xv()
      , t = Dh()
      , a = yC();
    function n(A) {
        var e = "https://react.dev/errors/" + A;
        if (1 < arguments.length) {
            e += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var r = 2; r < arguments.length; r++)
                e += "&args[]=" + encodeURIComponent(arguments[r])
        }
        return "Minified React error #" + A + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function s(A) {
        return !(!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11)
    }
    function u(A) {
        var e = A
          , r = A;
        if (A.alternate)
            for (; e.return; )
                e = e.return;
        else {
            A = e;
            do
                e = A,
                (e.flags & 4098) !== 0 && (r = e.return),
                A = e.return;
            while (A)
        }
        return e.tag === 3 ? r : null
    }
    function o(A) {
        if (A.tag === 13) {
            var e = A.memoizedState;
            if (e === null && (A = A.alternate,
            A !== null && (e = A.memoizedState)),
            e !== null)
                return e.dehydrated
        }
        return null
    }
    function B(A) {
        if (A.tag === 31) {
            var e = A.memoizedState;
            if (e === null && (A = A.alternate,
            A !== null && (e = A.memoizedState)),
            e !== null)
                return e.dehydrated
        }
        return null
    }
    function h(A) {
        if (u(A) !== A)
            throw Error(n(188))
    }
    function g(A) {
        var e = A.alternate;
        if (!e) {
            if (e = u(A),
            e === null)
                throw Error(n(188));
            return e !== A ? null : A
        }
        for (var r = A, l = e; ; ) {
            var c = r.return;
            if (c === null)
                break;
            var f = c.alternate;
            if (f === null) {
                if (l = c.return,
                l !== null) {
                    r = l;
                    continue
                }
                break
            }
            if (c.child === f.child) {
                for (f = c.child; f; ) {
                    if (f === r)
                        return h(c),
                        A;
                    if (f === l)
                        return h(c),
                        e;
                    f = f.sibling
                }
                throw Error(n(188))
            }
            if (r.return !== l.return)
                r = c,
                l = f;
            else {
                for (var Q = !1, U = c.child; U; ) {
                    if (U === r) {
                        Q = !0,
                        r = c,
                        l = f;
                        break
                    }
                    if (U === l) {
                        Q = !0,
                        l = c,
                        r = f;
                        break
                    }
                    U = U.sibling
                }
                if (!Q) {
                    for (U = f.child; U; ) {
                        if (U === r) {
                            Q = !0,
                            r = f,
                            l = c;
                            break
                        }
                        if (U === l) {
                            Q = !0,
                            l = f,
                            r = c;
                            break
                        }
                        U = U.sibling
                    }
                    if (!Q)
                        throw Error(n(189))
                }
            }
            if (r.alternate !== l)
                throw Error(n(190))
        }
        if (r.tag !== 3)
            throw Error(n(188));
        return r.stateNode.current === r ? A : e
    }
    function d(A) {
        var e = A.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return A;
        for (A = A.child; A !== null; ) {
            if (e = d(A),
            e !== null)
                return e;
            A = A.sibling
        }
        return null
    }
    var w = Object.assign
      , C = Symbol.for("react.element")
      , m = Symbol.for("react.transitional.element")
      , v = Symbol.for("react.portal")
      , p = Symbol.for("react.fragment")
      , b = Symbol.for("react.strict_mode")
      , E = Symbol.for("react.profiler")
      , S = Symbol.for("react.consumer")
      , O = Symbol.for("react.context")
      , G = Symbol.for("react.forward_ref")
      , x = Symbol.for("react.suspense")
      , L = Symbol.for("react.suspense_list")
      , K = Symbol.for("react.memo")
      , k = Symbol.for("react.lazy")
      , N = Symbol.for("react.activity")
      , iA = Symbol.for("react.memo_cache_sentinel")
      , uA = Symbol.iterator;
    function oA(A) {
        return A === null || typeof A != "object" ? null : (A = uA && A[uA] || A["@@iterator"],
        typeof A == "function" ? A : null)
    }
    var lA = Symbol.for("react.client.reference");
    function hA(A) {
        if (A == null)
            return null;
        if (typeof A == "function")
            return A.$$typeof === lA ? null : A.displayName || A.name || null;
        if (typeof A == "string")
            return A;
        switch (A) {
        case p:
            return "Fragment";
        case E:
            return "Profiler";
        case b:
            return "StrictMode";
        case x:
            return "Suspense";
        case L:
            return "SuspenseList";
        case N:
            return "Activity"
        }
        if (typeof A == "object")
            switch (A.$$typeof) {
            case v:
                return "Portal";
            case O:
                return A.displayName || "Context";
            case S:
                return (A._context.displayName || "Context") + ".Consumer";
            case G:
                var e = A.render;
                return A = A.displayName,
                A || (A = e.displayName || e.name || "",
                A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef"),
                A;
            case K:
                return e = A.displayName || null,
                e !== null ? e : hA(A.type) || "Memo";
            case k:
                e = A._payload,
                A = A._init;
                try {
                    return hA(A(e))
                } catch {}
            }
        return null
    }
    var CA = Array.isArray
      , D = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , Z = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , rA = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , dA = []
      , wA = -1;
    function y(A) {
        return {
            current: A
        }
    }
    function X(A) {
        0 > wA || (A.current = dA[wA],
        dA[wA] = null,
        wA--)
    }
    function P(A, e) {
        wA++,
        dA[wA] = A.current,
        A.current = e
    }
    var eA = y(null)
      , cA = y(null)
      , QA = y(null)
      , vA = y(null);
    function ve(A, e) {
        switch (P(QA, e),
        P(cA, A),
        P(eA, null),
        e.nodeType) {
        case 9:
        case 11:
            A = (A = e.documentElement) && (A = A.namespaceURI) ? gQ(A) : 0;
            break;
        default:
            if (A = e.tagName,
            e = e.namespaceURI)
                e = gQ(e),
                A = dQ(e, A);
            else
                switch (A) {
                case "svg":
                    A = 1;
                    break;
                case "math":
                    A = 2;
                    break;
                default:
                    A = 0
                }
        }
        X(eA),
        P(eA, A)
    }
    function WA() {
        X(eA),
        X(cA),
        X(QA)
    }
    function gn(A) {
        A.memoizedState !== null && P(vA, A);
        var e = eA.current
          , r = dQ(e, A.type);
        e !== r && (P(cA, A),
        P(eA, r))
    }
    function Vr(A) {
        cA.current === A && (X(eA),
        X(cA)),
        vA.current === A && (X(vA),
        Sl._currentValue = rA)
    }
    var zr, Mi;
    function ye(A) {
        if (zr === void 0)
            try {
                throw Error()
            } catch (r) {
                var e = r.stack.trim().match(/\n( *(at )?)/);
                zr = e && e[1] || "",
                Mi = -1 < r.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < r.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + zr + A + Mi
    }
    var Jn = !1;
    function Xr(A, e) {
        if (!A || Jn)
            return "";
        Jn = !0;
        var r = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var l = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (e) {
                            var q = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(q.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(q, [])
                                } catch (z) {
                                    var R = z
                                }
                                Reflect.construct(A, [], q)
                            } else {
                                try {
                                    q.call()
                                } catch (z) {
                                    R = z
                                }
                                A.call(q.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (z) {
                                R = z
                            }
                            (q = A()) && typeof q.catch == "function" && q.catch(function() {})
                        }
                    } catch (z) {
                        if (z && R && typeof z.stack == "string")
                            return [z.stack, R.stack]
                    }
                    return [null, null]
                }
            };
            l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var c = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
            c && c.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var f = l.DetermineComponentFrameRoot()
              , Q = f[0]
              , U = f[1];
            if (Q && U) {
                var F = Q.split(`
`)
                  , I = U.split(`
`);
                for (c = l = 0; l < F.length && !F[l].includes("DetermineComponentFrameRoot"); )
                    l++;
                for (; c < I.length && !I[c].includes("DetermineComponentFrameRoot"); )
                    c++;
                if (l === F.length || c === I.length)
                    for (l = F.length - 1,
                    c = I.length - 1; 1 <= l && 0 <= c && F[l] !== I[c]; )
                        c--;
                for (; 1 <= l && 0 <= c; l--,
                c--)
                    if (F[l] !== I[c]) {
                        if (l !== 1 || c !== 1)
                            do
                                if (l--,
                                c--,
                                0 > c || F[l] !== I[c]) {
                                    var J = `
` + F[l].replace(" at new ", " at ");
                                    return A.displayName && J.includes("<anonymous>") && (J = J.replace("<anonymous>", A.displayName)),
                                    J
                                }
                            while (1 <= l && 0 <= c);
                        break
                    }
            }
        } finally {
            Jn = !1,
            Error.prepareStackTrace = r
        }
        return (r = A ? A.displayName || A.name : "") ? ye(r) : ""
    }
    function kn(A, e) {
        switch (A.tag) {
        case 26:
        case 27:
        case 5:
            return ye(A.type);
        case 16:
            return ye("Lazy");
        case 13:
            return A.child !== e && e !== null ? ye("Suspense Fallback") : ye("Suspense");
        case 19:
            return ye("SuspenseList");
        case 0:
        case 15:
            return Xr(A.type, !1);
        case 11:
            return Xr(A.type.render, !1);
        case 1:
            return Xr(A.type, !0);
        case 31:
            return ye("Activity");
        default:
            return ""
        }
    }
    function ms(A) {
        try {
            var e = ""
              , r = null;
            do
                e += kn(A, r),
                r = A,
                A = A.return;
            while (A);
            return e
        } catch (l) {
            return `
Error generating stack: ` + l.message + `
` + l.stack
        }
    }
    var Ii = Object.prototype.hasOwnProperty
      , lt = i.unstable_scheduleCallback
      , jn = i.unstable_cancelCallback
      , Ki = i.unstable_shouldYield
      , Ri = i.unstable_requestPaint
      , Ce = i.unstable_now
      , Zn = i.unstable_getCurrentPriorityLevel
      , qt = i.unstable_ImmediatePriority
      , dn = i.unstable_UserBlockingPriority
      , Qn = i.unstable_NormalPriority
      , vs = i.unstable_LowPriority
      , Fa = i.unstable_IdlePriority
      , Ni = i.log
      , Yr = i.unstable_setDisableYieldValue
      , Wt = null
      , Fe = null;
    function Gt(A) {
        if (typeof Ni == "function" && Yr(A),
        Fe && typeof Fe.setStrictMode == "function")
            try {
                Fe.setStrictMode(Wt, A)
            } catch {}
    }
    var Ie = Math.clz32 ? Math.clz32 : Fs
      , ys = Math.log
      , Ea = Math.LN2;
    function Fs(A) {
        return A >>>= 0,
        A === 0 ? 32 : 31 - (ys(A) / Ea | 0) | 0
    }
    var _a = 256
      , wn = 262144
      , Ha = 4194304;
    function Pt(A) {
        var e = A & 42;
        if (e !== 0)
            return e;
        switch (A & -A) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
            return A & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return A & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return A & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return A
        }
    }
    function Jr(A, e, r) {
        var l = A.pendingLanes;
        if (l === 0)
            return 0;
        var c = 0
          , f = A.suspendedLanes
          , Q = A.pingedLanes;
        A = A.warmLanes;
        var U = l & 134217727;
        return U !== 0 ? (l = U & ~f,
        l !== 0 ? c = Pt(l) : (Q &= U,
        Q !== 0 ? c = Pt(Q) : r || (r = U & ~A,
        r !== 0 && (c = Pt(r))))) : (U = l & ~f,
        U !== 0 ? c = Pt(U) : Q !== 0 ? c = Pt(Q) : r || (r = l & ~A,
        r !== 0 && (c = Pt(r)))),
        c === 0 ? 0 : e !== 0 && e !== c && (e & f) === 0 && (f = c & -c,
        r = e & -e,
        f >= r || f === 32 && (r & 4194048) !== 0) ? e : c
    }
    function qn(A, e) {
        return (A.pendingLanes & ~(A.suspendedLanes & ~A.pingedLanes) & e) === 0
    }
    function Es(A, e) {
        switch (A) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return e + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function Wn() {
        var A = Ha;
        return Ha <<= 1,
        (Ha & 62914560) === 0 && (Ha = 4194304),
        A
    }
    function ba(A) {
        for (var e = [], r = 0; 31 > r; r++)
            e.push(A);
        return e
    }
    function $t(A, e) {
        A.pendingLanes |= e,
        e !== 268435456 && (A.suspendedLanes = 0,
        A.pingedLanes = 0,
        A.warmLanes = 0)
    }
    function Gi(A, e, r, l, c, f) {
        var Q = A.pendingLanes;
        A.pendingLanes = r,
        A.suspendedLanes = 0,
        A.pingedLanes = 0,
        A.warmLanes = 0,
        A.expiredLanes &= r,
        A.entangledLanes &= r,
        A.errorRecoveryDisabledLanes &= r,
        A.shellSuspendCounter = 0;
        var U = A.entanglements
          , F = A.expirationTimes
          , I = A.hiddenUpdates;
        for (r = Q & ~r; 0 < r; ) {
            var J = 31 - Ie(r)
              , q = 1 << J;
            U[J] = 0,
            F[J] = -1;
            var R = I[J];
            if (R !== null)
                for (I[J] = null,
                J = 0; J < R.length; J++) {
                    var z = R[J];
                    z !== null && (z.lane &= -536870913)
                }
            r &= ~q
        }
        l !== 0 && Vi(A, l, 0),
        f !== 0 && c === 0 && A.tag !== 0 && (A.suspendedLanes |= f & ~(Q & ~e))
    }
    function Vi(A, e, r) {
        A.pendingLanes |= e,
        A.suspendedLanes &= ~e;
        var l = 31 - Ie(e);
        A.entangledLanes |= e,
        A.entanglements[l] = A.entanglements[l] | 1073741824 | r & 261930
    }
    function zi(A, e) {
        var r = A.entangledLanes |= e;
        for (A = A.entanglements; r; ) {
            var l = 31 - Ie(r)
              , c = 1 << l;
            c & e | A[l] & e && (A[l] |= e),
            r &= ~c
        }
    }
    function _s(A, e) {
        var r = e & -e;
        return r = (r & 42) !== 0 ? 1 : Xi(r),
        (r & (A.suspendedLanes | e)) !== 0 ? 0 : r
    }
    function Xi(A) {
        switch (A) {
        case 2:
            A = 1;
            break;
        case 8:
            A = 4;
            break;
        case 32:
            A = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            A = 128;
            break;
        case 268435456:
            A = 134217728;
            break;
        default:
            A = 0
        }
        return A
    }
    function kr(A) {
        return A &= -A,
        2 < A ? 8 < A ? (A & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function Pn() {
        var A = Z.p;
        return A !== 0 ? A : (A = window.event,
        A === void 0 ? 32 : RQ(A.type))
    }
    function Yi(A, e) {
        var r = Z.p;
        try {
            return Z.p = A,
            e()
        } finally {
            Z.p = r
        }
    }
    var st = Math.random().toString(36).slice(2)
      , H = "__reactFiber$" + st
      , Y = "__reactProps$" + st
      , AA = "__reactContainer$" + st
      , W = "__reactEvents$" + st
      , tA = "__reactListeners$" + st
      , yA = "__reactHandles$" + st
      , DA = "__reactResources$" + st
      , FA = "__reactMarker$" + st;
    function LA(A) {
        delete A[H],
        delete A[Y],
        delete A[W],
        delete A[tA],
        delete A[yA]
    }
    function Ue(A) {
        var e = A[H];
        if (e)
            return e;
        for (var r = A.parentNode; r; ) {
            if (e = r[AA] || r[H]) {
                if (r = e.alternate,
                e.child !== null || r !== null && r.child !== null)
                    for (A = vQ(A); A !== null; ) {
                        if (r = A[H])
                            return r;
                        A = vQ(A)
                    }
                return e
            }
            A = r,
            r = A.parentNode
        }
        return null
    }
    function ze(A) {
        if (A = A[H] || A[AA]) {
            var e = A.tag;
            if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
                return A
        }
        return null
    }
    function ke(A) {
        var e = A.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return A.stateNode;
        throw Error(n(33))
    }
    function An(A) {
        var e = A[DA];
        return e || (e = A[DA] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        e
    }
    function re(A) {
        A[FA] = !0
    }
    var jr = new Set
      , Hs = {};
    function Vt(A, e) {
        en(A, e),
        en(A + "Capture", e)
    }
    function en(A, e) {
        for (Hs[A] = e,
        A = 0; A < e.length; A++)
            jr.add(e[A])
    }
    var $c = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , bs = {}
      , Ji = {};
    function Ss(A) {
        return Ii.call(Ji, A) ? !0 : Ii.call(bs, A) ? !1 : $c.test(A) ? Ji[A] = !0 : (bs[A] = !0,
        !1)
    }
    function Sa(A, e, r) {
        if (Ss(e))
            if (r === null)
                A.removeAttribute(e);
            else {
                switch (typeof r) {
                case "undefined":
                case "function":
                case "symbol":
                    A.removeAttribute(e);
                    return;
                case "boolean":
                    var l = e.toLowerCase().slice(0, 5);
                    if (l !== "data-" && l !== "aria-") {
                        A.removeAttribute(e);
                        return
                    }
                }
                A.setAttribute(e, "" + r)
            }
    }
    function Ta(A, e, r) {
        if (r === null)
            A.removeAttribute(e);
        else {
            switch (typeof r) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                A.removeAttribute(e);
                return
            }
            A.setAttribute(e, "" + r)
        }
    }
    function zt(A, e, r, l) {
        if (l === null)
            A.removeAttribute(r);
        else {
            switch (typeof l) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                A.removeAttribute(r);
                return
            }
            A.setAttributeNS(e, r, "" + l)
        }
    }
    function je(A) {
        switch (typeof A) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return A;
        case "object":
            return A;
        default:
            return ""
        }
    }
    function Ts(A) {
        var e = A.type;
        return (A = A.nodeName) && A.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
    }
    function Dp(A, e, r) {
        var l = Object.getOwnPropertyDescriptor(A.constructor.prototype, e);
        if (!A.hasOwnProperty(e) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
            var c = l.get
              , f = l.set;
            return Object.defineProperty(A, e, {
                configurable: !0,
                get: function() {
                    return c.call(this)
                },
                set: function(Q) {
                    r = "" + Q,
                    f.call(this, Q)
                }
            }),
            Object.defineProperty(A, e, {
                enumerable: l.enumerable
            }),
            {
                getValue: function() {
                    return r
                },
                setValue: function(Q) {
                    r = "" + Q
                },
                stopTracking: function() {
                    A._valueTracker = null,
                    delete A[e]
                }
            }
        }
    }
    function Ao(A) {
        if (!A._valueTracker) {
            var e = Ts(A) ? "checked" : "value";
            A._valueTracker = Dp(A, e, "" + A[e])
        }
    }
    function sg(A) {
        if (!A)
            return !1;
        var e = A._valueTracker;
        if (!e)
            return !0;
        var r = e.getValue()
          , l = "";
        return A && (l = Ts(A) ? A.checked ? "true" : "false" : A.value),
        A = l,
        A !== r ? (e.setValue(A),
        !0) : !1
    }
    function xs(A) {
        if (A = A || (typeof document < "u" ? document : void 0),
        typeof A > "u")
            return null;
        try {
            return A.activeElement || A.body
        } catch {
            return A.body
        }
    }
    var Lp = /[\n"\\]/g;
    function yt(A) {
        return A.replace(Lp, function(e) {
            return "\\" + e.charCodeAt(0).toString(16) + " "
        })
    }
    function eo(A, e, r, l, c, f, Q, U) {
        A.name = "",
        Q != null && typeof Q != "function" && typeof Q != "symbol" && typeof Q != "boolean" ? A.type = Q : A.removeAttribute("type"),
        e != null ? Q === "number" ? (e === 0 && A.value === "" || A.value != e) && (A.value = "" + je(e)) : A.value !== "" + je(e) && (A.value = "" + je(e)) : Q !== "submit" && Q !== "reset" || A.removeAttribute("value"),
        e != null ? to(A, Q, je(e)) : r != null ? to(A, Q, je(r)) : l != null && A.removeAttribute("value"),
        c == null && f != null && (A.defaultChecked = !!f),
        c != null && (A.checked = c && typeof c != "function" && typeof c != "symbol"),
        U != null && typeof U != "function" && typeof U != "symbol" && typeof U != "boolean" ? A.name = "" + je(U) : A.removeAttribute("name")
    }
    function ug(A, e, r, l, c, f, Q, U) {
        if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (A.type = f),
        e != null || r != null) {
            if (!(f !== "submit" && f !== "reset" || e != null)) {
                Ao(A);
                return
            }
            r = r != null ? "" + je(r) : "",
            e = e != null ? "" + je(e) : r,
            U || e === A.value || (A.value = e),
            A.defaultValue = e
        }
        l = l ?? c,
        l = typeof l != "function" && typeof l != "symbol" && !!l,
        A.checked = U ? A.checked : !!l,
        A.defaultChecked = !!l,
        Q != null && typeof Q != "function" && typeof Q != "symbol" && typeof Q != "boolean" && (A.name = Q),
        Ao(A)
    }
    function to(A, e, r) {
        e === "number" && xs(A.ownerDocument) === A || A.defaultValue === "" + r || (A.defaultValue = "" + r)
    }
    function xa(A, e, r, l) {
        if (A = A.options,
        e) {
            e = {};
            for (var c = 0; c < r.length; c++)
                e["$" + r[c]] = !0;
            for (r = 0; r < A.length; r++)
                c = e.hasOwnProperty("$" + A[r].value),
                A[r].selected !== c && (A[r].selected = c),
                c && l && (A[r].defaultSelected = !0)
        } else {
            for (r = "" + je(r),
            e = null,
            c = 0; c < A.length; c++) {
                if (A[c].value === r) {
                    A[c].selected = !0,
                    l && (A[c].defaultSelected = !0);
                    return
                }
                e !== null || A[c].disabled || (e = A[c])
            }
            e !== null && (e.selected = !0)
        }
    }
    function cg(A, e, r) {
        if (e != null && (e = "" + je(e),
        e !== A.value && (A.value = e),
        r == null)) {
            A.defaultValue !== e && (A.defaultValue = e);
            return
        }
        A.defaultValue = r != null ? "" + je(r) : ""
    }
    function og(A, e, r, l) {
        if (e == null) {
            if (l != null) {
                if (r != null)
                    throw Error(n(92));
                if (CA(l)) {
                    if (1 < l.length)
                        throw Error(n(93));
                    l = l[0]
                }
                r = l
            }
            r == null && (r = ""),
            e = r
        }
        r = je(e),
        A.defaultValue = r,
        l = A.textContent,
        l === r && l !== "" && l !== null && (A.value = l),
        Ao(A)
    }
    function Da(A, e) {
        if (e) {
            var r = A.firstChild;
            if (r && r === A.lastChild && r.nodeType === 3) {
                r.nodeValue = e;
                return
            }
        }
        A.textContent = e
    }
    var Op = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function fg(A, e, r) {
        var l = e.indexOf("--") === 0;
        r == null || typeof r == "boolean" || r === "" ? l ? A.setProperty(e, "") : e === "float" ? A.cssFloat = "" : A[e] = "" : l ? A.setProperty(e, r) : typeof r != "number" || r === 0 || Op.has(e) ? e === "float" ? A.cssFloat = r : A[e] = ("" + r).trim() : A[e] = r + "px"
    }
    function Bg(A, e, r) {
        if (e != null && typeof e != "object")
            throw Error(n(62));
        if (A = A.style,
        r != null) {
            for (var l in r)
                !r.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? A.setProperty(l, "") : l === "float" ? A.cssFloat = "" : A[l] = "");
            for (var c in e)
                l = e[c],
                e.hasOwnProperty(c) && r[c] !== l && fg(A, c, l)
        } else
            for (var f in e)
                e.hasOwnProperty(f) && fg(A, f, e[f])
    }
    function no(A) {
        if (A.indexOf("-") === -1)
            return !1;
        switch (A) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var Mp = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , Ip = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Ds(A) {
        return Ip.test("" + A) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : A
    }
    function Cn() {}
    var ro = null;
    function ao(A) {
        return A = A.target || A.srcElement || window,
        A.correspondingUseElement && (A = A.correspondingUseElement),
        A.nodeType === 3 ? A.parentNode : A
    }
    var La = null
      , Oa = null;
    function hg(A) {
        var e = ze(A);
        if (e && (A = e.stateNode)) {
            var r = A[Y] || null;
            A: switch (A = e.stateNode,
            e.type) {
            case "input":
                if (eo(A, r.value, r.defaultValue, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name),
                e = r.name,
                r.type === "radio" && e != null) {
                    for (r = A; r.parentNode; )
                        r = r.parentNode;
                    for (r = r.querySelectorAll('input[name="' + yt("" + e) + '"][type="radio"]'),
                    e = 0; e < r.length; e++) {
                        var l = r[e];
                        if (l !== A && l.form === A.form) {
                            var c = l[Y] || null;
                            if (!c)
                                throw Error(n(90));
                            eo(l, c.value, c.defaultValue, c.defaultValue, c.checked, c.defaultChecked, c.type, c.name)
                        }
                    }
                    for (e = 0; e < r.length; e++)
                        l = r[e],
                        l.form === A.form && sg(l)
                }
                break A;
            case "textarea":
                cg(A, r.value, r.defaultValue);
                break A;
            case "select":
                e = r.value,
                e != null && xa(A, !!r.multiple, e, !1)
            }
        }
    }
    var io = !1;
    function gg(A, e, r) {
        if (io)
            return A(e, r);
        io = !0;
        try {
            var l = A(e);
            return l
        } finally {
            if (io = !1,
            (La !== null || Oa !== null) && (Uu(),
            La && (e = La,
            A = Oa,
            Oa = La = null,
            hg(e),
            A)))
                for (e = 0; e < A.length; e++)
                    hg(A[e])
        }
    }
    function ki(A, e) {
        var r = A.stateNode;
        if (r === null)
            return null;
        var l = r[Y] || null;
        if (l === null)
            return null;
        r = l[e];
        A: switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (l = !l.disabled) || (A = A.type,
            l = !(A === "button" || A === "input" || A === "select" || A === "textarea")),
            A = !l;
            break A;
        default:
            A = !1
        }
        if (A)
            return null;
        if (r && typeof r != "function")
            throw Error(n(231, e, typeof r));
        return r
    }
    var Un = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , lo = !1;
    if (Un)
        try {
            var ji = {};
            Object.defineProperty(ji, "passive", {
                get: function() {
                    lo = !0
                }
            }),
            window.addEventListener("test", ji, ji),
            window.removeEventListener("test", ji, ji)
        } catch {
            lo = !1
        }
    var $n = null
      , so = null
      , Ls = null;
    function dg() {
        if (Ls)
            return Ls;
        var A, e = so, r = e.length, l, c = "value"in $n ? $n.value : $n.textContent, f = c.length;
        for (A = 0; A < r && e[A] === c[A]; A++)
            ;
        var Q = r - A;
        for (l = 1; l <= Q && e[r - l] === c[f - l]; l++)
            ;
        return Ls = c.slice(A, 1 < l ? 1 - l : void 0)
    }
    function Os(A) {
        var e = A.keyCode;
        return "charCode"in A ? (A = A.charCode,
        A === 0 && e === 13 && (A = 13)) : A = e,
        A === 10 && (A = 13),
        32 <= A || A === 13 ? A : 0
    }
    function Ms() {
        return !0
    }
    function Qg() {
        return !1
    }
    function Ze(A) {
        function e(r, l, c, f, Q) {
            this._reactName = r,
            this._targetInst = c,
            this.type = l,
            this.nativeEvent = f,
            this.target = Q,
            this.currentTarget = null;
            for (var U in A)
                A.hasOwnProperty(U) && (r = A[U],
                this[U] = r ? r(f) : f[U]);
            return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Ms : Qg,
            this.isPropagationStopped = Qg,
            this
        }
        return w(e.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var r = this.nativeEvent;
                r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1),
                this.isDefaultPrevented = Ms)
            },
            stopPropagation: function() {
                var r = this.nativeEvent;
                r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
                this.isPropagationStopped = Ms)
            },
            persist: function() {},
            isPersistent: Ms
        }),
        e
    }
    var Zr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(A) {
            return A.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Is = Ze(Zr), Zi = w({}, Zr, {
        view: 0,
        detail: 0
    }), Kp = Ze(Zi), uo, co, qi, Ks = w({}, Zi, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: fo,
        button: 0,
        buttons: 0,
        relatedTarget: function(A) {
            return A.relatedTarget === void 0 ? A.fromElement === A.srcElement ? A.toElement : A.fromElement : A.relatedTarget
        },
        movementX: function(A) {
            return "movementX"in A ? A.movementX : (A !== qi && (qi && A.type === "mousemove" ? (uo = A.screenX - qi.screenX,
            co = A.screenY - qi.screenY) : co = uo = 0,
            qi = A),
            uo)
        },
        movementY: function(A) {
            return "movementY"in A ? A.movementY : co
        }
    }), wg = Ze(Ks), Rp = w({}, Ks, {
        dataTransfer: 0
    }), Np = Ze(Rp), Gp = w({}, Zi, {
        relatedTarget: 0
    }), oo = Ze(Gp), Vp = w({}, Zr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), zp = Ze(Vp), Xp = w({}, Zr, {
        clipboardData: function(A) {
            return "clipboardData"in A ? A.clipboardData : window.clipboardData
        }
    }), Yp = Ze(Xp), Jp = w({}, Zr, {
        data: 0
    }), Cg = Ze(Jp), kp = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, jp = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, Zp = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function qp(A) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(A) : (A = Zp[A]) ? !!e[A] : !1
    }
    function fo() {
        return qp
    }
    var Wp = w({}, Zi, {
        key: function(A) {
            if (A.key) {
                var e = kp[A.key] || A.key;
                if (e !== "Unidentified")
                    return e
            }
            return A.type === "keypress" ? (A = Os(A),
            A === 13 ? "Enter" : String.fromCharCode(A)) : A.type === "keydown" || A.type === "keyup" ? jp[A.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: fo,
        charCode: function(A) {
            return A.type === "keypress" ? Os(A) : 0
        },
        keyCode: function(A) {
            return A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0
        },
        which: function(A) {
            return A.type === "keypress" ? Os(A) : A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0
        }
    })
      , Pp = Ze(Wp)
      , $p = w({}, Ks, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , Ug = Ze($p)
      , Am = w({}, Zi, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: fo
    })
      , em = Ze(Am)
      , tm = w({}, Zr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , nm = Ze(tm)
      , rm = w({}, Ks, {
        deltaX: function(A) {
            return "deltaX"in A ? A.deltaX : "wheelDeltaX"in A ? -A.wheelDeltaX : 0
        },
        deltaY: function(A) {
            return "deltaY"in A ? A.deltaY : "wheelDeltaY"in A ? -A.wheelDeltaY : "wheelDelta"in A ? -A.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , am = Ze(rm)
      , im = w({}, Zr, {
        newState: 0,
        oldState: 0
    })
      , lm = Ze(im)
      , sm = [9, 13, 27, 32]
      , Bo = Un && "CompositionEvent"in window
      , Wi = null;
    Un && "documentMode"in document && (Wi = document.documentMode);
    var um = Un && "TextEvent"in window && !Wi
      , pg = Un && (!Bo || Wi && 8 < Wi && 11 >= Wi)
      , mg = " "
      , vg = !1;
    function yg(A, e) {
        switch (A) {
        case "keyup":
            return sm.indexOf(e.keyCode) !== -1;
        case "keydown":
            return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Fg(A) {
        return A = A.detail,
        typeof A == "object" && "data"in A ? A.data : null
    }
    var Ma = !1;
    function cm(A, e) {
        switch (A) {
        case "compositionend":
            return Fg(e);
        case "keypress":
            return e.which !== 32 ? null : (vg = !0,
            mg);
        case "textInput":
            return A = e.data,
            A === mg && vg ? null : A;
        default:
            return null
        }
    }
    function om(A, e) {
        if (Ma)
            return A === "compositionend" || !Bo && yg(A, e) ? (A = dg(),
            Ls = so = $n = null,
            Ma = !1,
            A) : null;
        switch (A) {
        case "paste":
            return null;
        case "keypress":
            if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                if (e.char && 1 < e.char.length)
                    return e.char;
                if (e.which)
                    return String.fromCharCode(e.which)
            }
            return null;
        case "compositionend":
            return pg && e.locale !== "ko" ? null : e.data;
        default:
            return null
        }
    }
    var fm = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Eg(A) {
        var e = A && A.nodeName && A.nodeName.toLowerCase();
        return e === "input" ? !!fm[A.type] : e === "textarea"
    }
    function _g(A, e, r, l) {
        La ? Oa ? Oa.push(l) : Oa = [l] : La = l,
        e = _u(e, "onChange"),
        0 < e.length && (r = new Is("onChange","change",null,r,l),
        A.push({
            event: r,
            listeners: e
        }))
    }
    var Pi = null
      , $i = null;
    function Bm(A) {
        uQ(A, 0)
    }
    function Rs(A) {
        var e = ke(A);
        if (sg(e))
            return A
    }
    function Hg(A, e) {
        if (A === "change")
            return e
    }
    var bg = !1;
    if (Un) {
        var ho;
        if (Un) {
            var go = "oninput"in document;
            if (!go) {
                var Sg = document.createElement("div");
                Sg.setAttribute("oninput", "return;"),
                go = typeof Sg.oninput == "function"
            }
            ho = go
        } else
            ho = !1;
        bg = ho && (!document.documentMode || 9 < document.documentMode)
    }
    function Tg() {
        Pi && (Pi.detachEvent("onpropertychange", xg),
        $i = Pi = null)
    }
    function xg(A) {
        if (A.propertyName === "value" && Rs($i)) {
            var e = [];
            _g(e, $i, A, ao(A)),
            gg(Bm, e)
        }
    }
    function hm(A, e, r) {
        A === "focusin" ? (Tg(),
        Pi = e,
        $i = r,
        Pi.attachEvent("onpropertychange", xg)) : A === "focusout" && Tg()
    }
    function gm(A) {
        if (A === "selectionchange" || A === "keyup" || A === "keydown")
            return Rs($i)
    }
    function dm(A, e) {
        if (A === "click")
            return Rs(e)
    }
    function Qm(A, e) {
        if (A === "input" || A === "change")
            return Rs(e)
    }
    function wm(A, e) {
        return A === e && (A !== 0 || 1 / A === 1 / e) || A !== A && e !== e
    }
    var ut = typeof Object.is == "function" ? Object.is : wm;
    function Al(A, e) {
        if (ut(A, e))
            return !0;
        if (typeof A != "object" || A === null || typeof e != "object" || e === null)
            return !1;
        var r = Object.keys(A)
          , l = Object.keys(e);
        if (r.length !== l.length)
            return !1;
        for (l = 0; l < r.length; l++) {
            var c = r[l];
            if (!Ii.call(e, c) || !ut(A[c], e[c]))
                return !1
        }
        return !0
    }
    function Dg(A) {
        for (; A && A.firstChild; )
            A = A.firstChild;
        return A
    }
    function Lg(A, e) {
        var r = Dg(A);
        A = 0;
        for (var l; r; ) {
            if (r.nodeType === 3) {
                if (l = A + r.textContent.length,
                A <= e && l >= e)
                    return {
                        node: r,
                        offset: e - A
                    };
                A = l
            }
            A: {
                for (; r; ) {
                    if (r.nextSibling) {
                        r = r.nextSibling;
                        break A
                    }
                    r = r.parentNode
                }
                r = void 0
            }
            r = Dg(r)
        }
    }
    function Og(A, e) {
        return A && e ? A === e ? !0 : A && A.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Og(A, e.parentNode) : "contains"in A ? A.contains(e) : A.compareDocumentPosition ? !!(A.compareDocumentPosition(e) & 16) : !1 : !1
    }
    function Mg(A) {
        A = A != null && A.ownerDocument != null && A.ownerDocument.defaultView != null ? A.ownerDocument.defaultView : window;
        for (var e = xs(A.document); e instanceof A.HTMLIFrameElement; ) {
            try {
                var r = typeof e.contentWindow.location.href == "string"
            } catch {
                r = !1
            }
            if (r)
                A = e.contentWindow;
            else
                break;
            e = xs(A.document)
        }
        return e
    }
    function Qo(A) {
        var e = A && A.nodeName && A.nodeName.toLowerCase();
        return e && (e === "input" && (A.type === "text" || A.type === "search" || A.type === "tel" || A.type === "url" || A.type === "password") || e === "textarea" || A.contentEditable === "true")
    }
    var Cm = Un && "documentMode"in document && 11 >= document.documentMode
      , Ia = null
      , wo = null
      , el = null
      , Co = !1;
    function Ig(A, e, r) {
        var l = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
        Co || Ia == null || Ia !== xs(l) || (l = Ia,
        "selectionStart"in l && Qo(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(),
        l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }),
        el && Al(el, l) || (el = l,
        l = _u(wo, "onSelect"),
        0 < l.length && (e = new Is("onSelect","select",null,e,r),
        A.push({
            event: e,
            listeners: l
        }),
        e.target = Ia)))
    }
    function qr(A, e) {
        var r = {};
        return r[A.toLowerCase()] = e.toLowerCase(),
        r["Webkit" + A] = "webkit" + e,
        r["Moz" + A] = "moz" + e,
        r
    }
    var Ka = {
        animationend: qr("Animation", "AnimationEnd"),
        animationiteration: qr("Animation", "AnimationIteration"),
        animationstart: qr("Animation", "AnimationStart"),
        transitionrun: qr("Transition", "TransitionRun"),
        transitionstart: qr("Transition", "TransitionStart"),
        transitioncancel: qr("Transition", "TransitionCancel"),
        transitionend: qr("Transition", "TransitionEnd")
    }
      , Uo = {}
      , Kg = {};
    Un && (Kg = document.createElement("div").style,
    "AnimationEvent"in window || (delete Ka.animationend.animation,
    delete Ka.animationiteration.animation,
    delete Ka.animationstart.animation),
    "TransitionEvent"in window || delete Ka.transitionend.transition);
    function Wr(A) {
        if (Uo[A])
            return Uo[A];
        if (!Ka[A])
            return A;
        var e = Ka[A], r;
        for (r in e)
            if (e.hasOwnProperty(r) && r in Kg)
                return Uo[A] = e[r];
        return A
    }
    var Rg = Wr("animationend")
      , Ng = Wr("animationiteration")
      , Gg = Wr("animationstart")
      , Um = Wr("transitionrun")
      , pm = Wr("transitionstart")
      , mm = Wr("transitioncancel")
      , Vg = Wr("transitionend")
      , zg = new Map
      , po = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    po.push("scrollEnd");
    function Xt(A, e) {
        zg.set(A, e),
        Vt(e, [A])
    }
    var Ns = typeof reportError == "function" ? reportError : function(A) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var e = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof A == "object" && A !== null && typeof A.message == "string" ? String(A.message) : String(A),
                error: A
            });
            if (!window.dispatchEvent(e))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", A);
            return
        }
        console.error(A)
    }
      , Ft = []
      , Ra = 0
      , mo = 0;
    function Gs() {
        for (var A = Ra, e = mo = Ra = 0; e < A; ) {
            var r = Ft[e];
            Ft[e++] = null;
            var l = Ft[e];
            Ft[e++] = null;
            var c = Ft[e];
            Ft[e++] = null;
            var f = Ft[e];
            if (Ft[e++] = null,
            l !== null && c !== null) {
                var Q = l.pending;
                Q === null ? c.next = c : (c.next = Q.next,
                Q.next = c),
                l.pending = c
            }
            f !== 0 && Xg(r, c, f)
        }
    }
    function Vs(A, e, r, l) {
        Ft[Ra++] = A,
        Ft[Ra++] = e,
        Ft[Ra++] = r,
        Ft[Ra++] = l,
        mo |= l,
        A.lanes |= l,
        A = A.alternate,
        A !== null && (A.lanes |= l)
    }
    function vo(A, e, r, l) {
        return Vs(A, e, r, l),
        zs(A)
    }
    function Pr(A, e) {
        return Vs(A, null, null, e),
        zs(A)
    }
    function Xg(A, e, r) {
        A.lanes |= r;
        var l = A.alternate;
        l !== null && (l.lanes |= r);
        for (var c = !1, f = A.return; f !== null; )
            f.childLanes |= r,
            l = f.alternate,
            l !== null && (l.childLanes |= r),
            f.tag === 22 && (A = f.stateNode,
            A === null || A._visibility & 1 || (c = !0)),
            A = f,
            f = f.return;
        return A.tag === 3 ? (f = A.stateNode,
        c && e !== null && (c = 31 - Ie(r),
        A = f.hiddenUpdates,
        l = A[c],
        l === null ? A[c] = [e] : l.push(e),
        e.lane = r | 536870912),
        f) : null
    }
    function zs(A) {
        if (50 < vl)
            throw vl = 0,
            Df = null,
            Error(n(185));
        for (var e = A.return; e !== null; )
            A = e,
            e = A.return;
        return A.tag === 3 ? A.stateNode : null
    }
    var Na = {};
    function vm(A, e, r, l) {
        this.tag = A,
        this.key = r,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = e,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = l,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function ct(A, e, r, l) {
        return new vm(A,e,r,l)
    }
    function yo(A) {
        return A = A.prototype,
        !(!A || !A.isReactComponent)
    }
    function pn(A, e) {
        var r = A.alternate;
        return r === null ? (r = ct(A.tag, e, A.key, A.mode),
        r.elementType = A.elementType,
        r.type = A.type,
        r.stateNode = A.stateNode,
        r.alternate = A,
        A.alternate = r) : (r.pendingProps = e,
        r.type = A.type,
        r.flags = 0,
        r.subtreeFlags = 0,
        r.deletions = null),
        r.flags = A.flags & 65011712,
        r.childLanes = A.childLanes,
        r.lanes = A.lanes,
        r.child = A.child,
        r.memoizedProps = A.memoizedProps,
        r.memoizedState = A.memoizedState,
        r.updateQueue = A.updateQueue,
        e = A.dependencies,
        r.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        },
        r.sibling = A.sibling,
        r.index = A.index,
        r.ref = A.ref,
        r.refCleanup = A.refCleanup,
        r
    }
    function Yg(A, e) {
        A.flags &= 65011714;
        var r = A.alternate;
        return r === null ? (A.childLanes = 0,
        A.lanes = e,
        A.child = null,
        A.subtreeFlags = 0,
        A.memoizedProps = null,
        A.memoizedState = null,
        A.updateQueue = null,
        A.dependencies = null,
        A.stateNode = null) : (A.childLanes = r.childLanes,
        A.lanes = r.lanes,
        A.child = r.child,
        A.subtreeFlags = 0,
        A.deletions = null,
        A.memoizedProps = r.memoizedProps,
        A.memoizedState = r.memoizedState,
        A.updateQueue = r.updateQueue,
        A.type = r.type,
        e = r.dependencies,
        A.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }),
        A
    }
    function Xs(A, e, r, l, c, f) {
        var Q = 0;
        if (l = A,
        typeof A == "function")
            yo(A) && (Q = 1);
        else if (typeof A == "string")
            Q = Hv(A, r, eA.current) ? 26 : A === "html" || A === "head" || A === "body" ? 27 : 5;
        else
            A: switch (A) {
            case N:
                return A = ct(31, r, e, c),
                A.elementType = N,
                A.lanes = f,
                A;
            case p:
                return $r(r.children, c, f, e);
            case b:
                Q = 8,
                c |= 24;
                break;
            case E:
                return A = ct(12, r, e, c | 2),
                A.elementType = E,
                A.lanes = f,
                A;
            case x:
                return A = ct(13, r, e, c),
                A.elementType = x,
                A.lanes = f,
                A;
            case L:
                return A = ct(19, r, e, c),
                A.elementType = L,
                A.lanes = f,
                A;
            default:
                if (typeof A == "object" && A !== null)
                    switch (A.$$typeof) {
                    case O:
                        Q = 10;
                        break A;
                    case S:
                        Q = 9;
                        break A;
                    case G:
                        Q = 11;
                        break A;
                    case K:
                        Q = 14;
                        break A;
                    case k:
                        Q = 16,
                        l = null;
                        break A
                    }
                Q = 29,
                r = Error(n(130, A === null ? "null" : typeof A, "")),
                l = null
            }
        return e = ct(Q, r, e, c),
        e.elementType = A,
        e.type = l,
        e.lanes = f,
        e
    }
    function $r(A, e, r, l) {
        return A = ct(7, A, l, e),
        A.lanes = r,
        A
    }
    function Fo(A, e, r) {
        return A = ct(6, A, null, e),
        A.lanes = r,
        A
    }
    function Jg(A) {
        var e = ct(18, null, null, 0);
        return e.stateNode = A,
        e
    }
    function Eo(A, e, r) {
        return e = ct(4, A.children !== null ? A.children : [], A.key, e),
        e.lanes = r,
        e.stateNode = {
            containerInfo: A.containerInfo,
            pendingChildren: null,
            implementation: A.implementation
        },
        e
    }
    var kg = new WeakMap;
    function Et(A, e) {
        if (typeof A == "object" && A !== null) {
            var r = kg.get(A);
            return r !== void 0 ? r : (e = {
                value: A,
                source: e,
                stack: ms(e)
            },
            kg.set(A, e),
            e)
        }
        return {
            value: A,
            source: e,
            stack: ms(e)
        }
    }
    var Ga = []
      , Va = 0
      , Ys = null
      , tl = 0
      , _t = []
      , Ht = 0
      , Ar = null
      , tn = 1
      , nn = "";
    function mn(A, e) {
        Ga[Va++] = tl,
        Ga[Va++] = Ys,
        Ys = A,
        tl = e
    }
    function jg(A, e, r) {
        _t[Ht++] = tn,
        _t[Ht++] = nn,
        _t[Ht++] = Ar,
        Ar = A;
        var l = tn;
        A = nn;
        var c = 32 - Ie(l) - 1;
        l &= ~(1 << c),
        r += 1;
        var f = 32 - Ie(e) + c;
        if (30 < f) {
            var Q = c - c % 5;
            f = (l & (1 << Q) - 1).toString(32),
            l >>= Q,
            c -= Q,
            tn = 1 << 32 - Ie(e) + c | r << c | l,
            nn = f + A
        } else
            tn = 1 << f | r << c | l,
            nn = A
    }
    function _o(A) {
        A.return !== null && (mn(A, 1),
        jg(A, 1, 0))
    }
    function Ho(A) {
        for (; A === Ys; )
            Ys = Ga[--Va],
            Ga[Va] = null,
            tl = Ga[--Va],
            Ga[Va] = null;
        for (; A === Ar; )
            Ar = _t[--Ht],
            _t[Ht] = null,
            nn = _t[--Ht],
            _t[Ht] = null,
            tn = _t[--Ht],
            _t[Ht] = null
    }
    function Zg(A, e) {
        _t[Ht++] = tn,
        _t[Ht++] = nn,
        _t[Ht++] = Ar,
        tn = e.id,
        nn = e.overflow,
        Ar = A
    }
    var be = null
      , ZA = null
      , TA = !1
      , er = null
      , bt = !1
      , bo = Error(n(519));
    function tr(A) {
        var e = Error(n(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw nl(Et(e, A)),
        bo
    }
    function qg(A) {
        var e = A.stateNode
          , r = A.type
          , l = A.memoizedProps;
        switch (e[H] = A,
        e[Y] = l,
        r) {
        case "dialog":
            _A("cancel", e),
            _A("close", e);
            break;
        case "iframe":
        case "object":
        case "embed":
            _A("load", e);
            break;
        case "video":
        case "audio":
            for (r = 0; r < Fl.length; r++)
                _A(Fl[r], e);
            break;
        case "source":
            _A("error", e);
            break;
        case "img":
        case "image":
        case "link":
            _A("error", e),
            _A("load", e);
            break;
        case "details":
            _A("toggle", e);
            break;
        case "input":
            _A("invalid", e),
            ug(e, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0);
            break;
        case "select":
            _A("invalid", e);
            break;
        case "textarea":
            _A("invalid", e),
            og(e, l.value, l.defaultValue, l.children)
        }
        r = l.children,
        typeof r != "string" && typeof r != "number" && typeof r != "bigint" || e.textContent === "" + r || l.suppressHydrationWarning === !0 || BQ(e.textContent, r) ? (l.popover != null && (_A("beforetoggle", e),
        _A("toggle", e)),
        l.onScroll != null && _A("scroll", e),
        l.onScrollEnd != null && _A("scrollend", e),
        l.onClick != null && (e.onclick = Cn),
        e = !0) : e = !1,
        e || tr(A, !0)
    }
    function Wg(A) {
        for (be = A.return; be; )
            switch (be.tag) {
            case 5:
            case 31:
            case 13:
                bt = !1;
                return;
            case 27:
            case 3:
                bt = !0;
                return;
            default:
                be = be.return
            }
    }
    function za(A) {
        if (A !== be)
            return !1;
        if (!TA)
            return Wg(A),
            TA = !0,
            !1;
        var e = A.tag, r;
        if ((r = e !== 3 && e !== 27) && ((r = e === 5) && (r = A.type,
        r = !(r !== "form" && r !== "button") || jf(A.type, A.memoizedProps)),
        r = !r),
        r && ZA && tr(A),
        Wg(A),
        e === 13) {
            if (A = A.memoizedState,
            A = A !== null ? A.dehydrated : null,
            !A)
                throw Error(n(317));
            ZA = mQ(A)
        } else if (e === 31) {
            if (A = A.memoizedState,
            A = A !== null ? A.dehydrated : null,
            !A)
                throw Error(n(317));
            ZA = mQ(A)
        } else
            e === 27 ? (e = ZA,
            dr(A.type) ? (A = $f,
            $f = null,
            ZA = A) : ZA = e) : ZA = be ? Tt(A.stateNode.nextSibling) : null;
        return !0
    }
    function Aa() {
        ZA = be = null,
        TA = !1
    }
    function So() {
        var A = er;
        return A !== null && ($e === null ? $e = A : $e.push.apply($e, A),
        er = null),
        A
    }
    function nl(A) {
        er === null ? er = [A] : er.push(A)
    }
    var To = y(null)
      , ea = null
      , vn = null;
    function nr(A, e, r) {
        P(To, e._currentValue),
        e._currentValue = r
    }
    function yn(A) {
        A._currentValue = To.current,
        X(To)
    }
    function xo(A, e, r) {
        for (; A !== null; ) {
            var l = A.alternate;
            if ((A.childLanes & e) !== e ? (A.childLanes |= e,
            l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e),
            A === r)
                break;
            A = A.return
        }
    }
    function Do(A, e, r, l) {
        var c = A.child;
        for (c !== null && (c.return = A); c !== null; ) {
            var f = c.dependencies;
            if (f !== null) {
                var Q = c.child;
                f = f.firstContext;
                A: for (; f !== null; ) {
                    var U = f;
                    f = c;
                    for (var F = 0; F < e.length; F++)
                        if (U.context === e[F]) {
                            f.lanes |= r,
                            U = f.alternate,
                            U !== null && (U.lanes |= r),
                            xo(f.return, r, A),
                            l || (Q = null);
                            break A
                        }
                    f = U.next
                }
            } else if (c.tag === 18) {
                if (Q = c.return,
                Q === null)
                    throw Error(n(341));
                Q.lanes |= r,
                f = Q.alternate,
                f !== null && (f.lanes |= r),
                xo(Q, r, A),
                Q = null
            } else
                Q = c.child;
            if (Q !== null)
                Q.return = c;
            else
                for (Q = c; Q !== null; ) {
                    if (Q === A) {
                        Q = null;
                        break
                    }
                    if (c = Q.sibling,
                    c !== null) {
                        c.return = Q.return,
                        Q = c;
                        break
                    }
                    Q = Q.return
                }
            c = Q
        }
    }
    function Xa(A, e, r, l) {
        A = null;
        for (var c = e, f = !1; c !== null; ) {
            if (!f) {
                if ((c.flags & 524288) !== 0)
                    f = !0;
                else if ((c.flags & 262144) !== 0)
                    break
            }
            if (c.tag === 10) {
                var Q = c.alternate;
                if (Q === null)
                    throw Error(n(387));
                if (Q = Q.memoizedProps,
                Q !== null) {
                    var U = c.type;
                    ut(c.pendingProps.value, Q.value) || (A !== null ? A.push(U) : A = [U])
                }
            } else if (c === vA.current) {
                if (Q = c.alternate,
                Q === null)
                    throw Error(n(387));
                Q.memoizedState.memoizedState !== c.memoizedState.memoizedState && (A !== null ? A.push(Sl) : A = [Sl])
            }
            c = c.return
        }
        A !== null && Do(e, A, r, l),
        e.flags |= 262144
    }
    function Js(A) {
        for (A = A.firstContext; A !== null; ) {
            if (!ut(A.context._currentValue, A.memoizedValue))
                return !0;
            A = A.next
        }
        return !1
    }
    function ta(A) {
        ea = A,
        vn = null,
        A = A.dependencies,
        A !== null && (A.firstContext = null)
    }
    function Se(A) {
        return Pg(ea, A)
    }
    function ks(A, e) {
        return ea === null && ta(A),
        Pg(A, e)
    }
    function Pg(A, e) {
        var r = e._currentValue;
        if (e = {
            context: e,
            memoizedValue: r,
            next: null
        },
        vn === null) {
            if (A === null)
                throw Error(n(308));
            vn = e,
            A.dependencies = {
                lanes: 0,
                firstContext: e
            },
            A.flags |= 524288
        } else
            vn = vn.next = e;
        return r
    }
    var ym = typeof AbortController < "u" ? AbortController : function() {
        var A = []
          , e = this.signal = {
            aborted: !1,
            addEventListener: function(r, l) {
                A.push(l)
            }
        };
        this.abort = function() {
            e.aborted = !0,
            A.forEach(function(r) {
                return r()
            })
        }
    }
      , Fm = i.unstable_scheduleCallback
      , Em = i.unstable_NormalPriority
      , Be = {
        $$typeof: O,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Lo() {
        return {
            controller: new ym,
            data: new Map,
            refCount: 0
        }
    }
    function rl(A) {
        A.refCount--,
        A.refCount === 0 && Fm(Em, function() {
            A.controller.abort()
        })
    }
    var al = null
      , Oo = 0
      , Ya = 0
      , Ja = null;
    function _m(A, e) {
        if (al === null) {
            var r = al = [];
            Oo = 0,
            Ya = Rf(),
            Ja = {
                status: "pending",
                value: void 0,
                then: function(l) {
                    r.push(l)
                }
            }
        }
        return Oo++,
        e.then($g, $g),
        e
    }
    function $g() {
        if (--Oo === 0 && al !== null) {
            Ja !== null && (Ja.status = "fulfilled");
            var A = al;
            al = null,
            Ya = 0,
            Ja = null;
            for (var e = 0; e < A.length; e++)
                (0,
                A[e])()
        }
    }
    function Hm(A, e) {
        var r = []
          , l = {
            status: "pending",
            value: null,
            reason: null,
            then: function(c) {
                r.push(c)
            }
        };
        return A.then(function() {
            l.status = "fulfilled",
            l.value = e;
            for (var c = 0; c < r.length; c++)
                (0,
                r[c])(e)
        }, function(c) {
            for (l.status = "rejected",
            l.reason = c,
            c = 0; c < r.length; c++)
                (0,
                r[c])(void 0)
        }),
        l
    }
    var Ad = D.S;
    D.S = function(A, e) {
        I0 = Ce(),
        typeof e == "object" && e !== null && typeof e.then == "function" && _m(A, e),
        Ad !== null && Ad(A, e)
    }
    ;
    var na = y(null);
    function Mo() {
        var A = na.current;
        return A !== null ? A : YA.pooledCache
    }
    function js(A, e) {
        e === null ? P(na, na.current) : P(na, e.pool)
    }
    function ed() {
        var A = Mo();
        return A === null ? null : {
            parent: Be._currentValue,
            pool: A
        }
    }
    var ka = Error(n(460))
      , Io = Error(n(474))
      , Zs = Error(n(542))
      , qs = {
        then: function() {}
    };
    function td(A) {
        return A = A.status,
        A === "fulfilled" || A === "rejected"
    }
    function nd(A, e, r) {
        switch (r = A[r],
        r === void 0 ? A.push(e) : r !== e && (e.then(Cn, Cn),
        e = r),
        e.status) {
        case "fulfilled":
            return e.value;
        case "rejected":
            throw A = e.reason,
            ad(A),
            A;
        default:
            if (typeof e.status == "string")
                e.then(Cn, Cn);
            else {
                if (A = YA,
                A !== null && 100 < A.shellSuspendCounter)
                    throw Error(n(482));
                A = e,
                A.status = "pending",
                A.then(function(l) {
                    if (e.status === "pending") {
                        var c = e;
                        c.status = "fulfilled",
                        c.value = l
                    }
                }, function(l) {
                    if (e.status === "pending") {
                        var c = e;
                        c.status = "rejected",
                        c.reason = l
                    }
                })
            }
            switch (e.status) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw A = e.reason,
                ad(A),
                A
            }
            throw aa = e,
            ka
        }
    }
    function ra(A) {
        try {
            var e = A._init;
            return e(A._payload)
        } catch (r) {
            throw r !== null && typeof r == "object" && typeof r.then == "function" ? (aa = r,
            ka) : r
        }
    }
    var aa = null;
    function rd() {
        if (aa === null)
            throw Error(n(459));
        var A = aa;
        return aa = null,
        A
    }
    function ad(A) {
        if (A === ka || A === Zs)
            throw Error(n(483))
    }
    var ja = null
      , il = 0;
    function Ws(A) {
        var e = il;
        return il += 1,
        ja === null && (ja = []),
        nd(ja, A, e)
    }
    function ll(A, e) {
        e = e.props.ref,
        A.ref = e !== void 0 ? e : null
    }
    function Ps(A, e) {
        throw e.$$typeof === C ? Error(n(525)) : (A = Object.prototype.toString.call(e),
        Error(n(31, A === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : A)))
    }
    function id(A) {
        function e(T, _) {
            if (A) {
                var M = T.deletions;
                M === null ? (T.deletions = [_],
                T.flags |= 16) : M.push(_)
            }
        }
        function r(T, _) {
            if (!A)
                return null;
            for (; _ !== null; )
                e(T, _),
                _ = _.sibling;
            return null
        }
        function l(T) {
            for (var _ = new Map; T !== null; )
                T.key !== null ? _.set(T.key, T) : _.set(T.index, T),
                T = T.sibling;
            return _
        }
        function c(T, _) {
            return T = pn(T, _),
            T.index = 0,
            T.sibling = null,
            T
        }
        function f(T, _, M) {
            return T.index = M,
            A ? (M = T.alternate,
            M !== null ? (M = M.index,
            M < _ ? (T.flags |= 67108866,
            _) : M) : (T.flags |= 67108866,
            _)) : (T.flags |= 1048576,
            _)
        }
        function Q(T) {
            return A && T.alternate === null && (T.flags |= 67108866),
            T
        }
        function U(T, _, M, j) {
            return _ === null || _.tag !== 6 ? (_ = Fo(M, T.mode, j),
            _.return = T,
            _) : (_ = c(_, M),
            _.return = T,
            _)
        }
        function F(T, _, M, j) {
            var BA = M.type;
            return BA === p ? J(T, _, M.props.children, j, M.key) : _ !== null && (_.elementType === BA || typeof BA == "object" && BA !== null && BA.$$typeof === k && ra(BA) === _.type) ? (_ = c(_, M.props),
            ll(_, M),
            _.return = T,
            _) : (_ = Xs(M.type, M.key, M.props, null, T.mode, j),
            ll(_, M),
            _.return = T,
            _)
        }
        function I(T, _, M, j) {
            return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== M.containerInfo || _.stateNode.implementation !== M.implementation ? (_ = Eo(M, T.mode, j),
            _.return = T,
            _) : (_ = c(_, M.children || []),
            _.return = T,
            _)
        }
        function J(T, _, M, j, BA) {
            return _ === null || _.tag !== 7 ? (_ = $r(M, T.mode, j, BA),
            _.return = T,
            _) : (_ = c(_, M),
            _.return = T,
            _)
        }
        function q(T, _, M) {
            if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
                return _ = Fo("" + _, T.mode, M),
                _.return = T,
                _;
            if (typeof _ == "object" && _ !== null) {
                switch (_.$$typeof) {
                case m:
                    return M = Xs(_.type, _.key, _.props, null, T.mode, M),
                    ll(M, _),
                    M.return = T,
                    M;
                case v:
                    return _ = Eo(_, T.mode, M),
                    _.return = T,
                    _;
                case k:
                    return _ = ra(_),
                    q(T, _, M)
                }
                if (CA(_) || oA(_))
                    return _ = $r(_, T.mode, M, null),
                    _.return = T,
                    _;
                if (typeof _.then == "function")
                    return q(T, Ws(_), M);
                if (_.$$typeof === O)
                    return q(T, ks(T, _), M);
                Ps(T, _)
            }
            return null
        }
        function R(T, _, M, j) {
            var BA = _ !== null ? _.key : null;
            if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
                return BA !== null ? null : U(T, _, "" + M, j);
            if (typeof M == "object" && M !== null) {
                switch (M.$$typeof) {
                case m:
                    return M.key === BA ? F(T, _, M, j) : null;
                case v:
                    return M.key === BA ? I(T, _, M, j) : null;
                case k:
                    return M = ra(M),
                    R(T, _, M, j)
                }
                if (CA(M) || oA(M))
                    return BA !== null ? null : J(T, _, M, j, null);
                if (typeof M.then == "function")
                    return R(T, _, Ws(M), j);
                if (M.$$typeof === O)
                    return R(T, _, ks(T, M), j);
                Ps(T, M)
            }
            return null
        }
        function z(T, _, M, j, BA) {
            if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
                return T = T.get(M) || null,
                U(_, T, "" + j, BA);
            if (typeof j == "object" && j !== null) {
                switch (j.$$typeof) {
                case m:
                    return T = T.get(j.key === null ? M : j.key) || null,
                    F(_, T, j, BA);
                case v:
                    return T = T.get(j.key === null ? M : j.key) || null,
                    I(_, T, j, BA);
                case k:
                    return j = ra(j),
                    z(T, _, M, j, BA)
                }
                if (CA(j) || oA(j))
                    return T = T.get(M) || null,
                    J(_, T, j, BA, null);
                if (typeof j.then == "function")
                    return z(T, _, M, Ws(j), BA);
                if (j.$$typeof === O)
                    return z(T, _, M, ks(_, j), BA);
                Ps(_, j)
            }
            return null
        }
        function sA(T, _, M, j) {
            for (var BA = null, OA = null, fA = _, mA = _ = 0, bA = null; fA !== null && mA < M.length; mA++) {
                fA.index > mA ? (bA = fA,
                fA = null) : bA = fA.sibling;
                var MA = R(T, fA, M[mA], j);
                if (MA === null) {
                    fA === null && (fA = bA);
                    break
                }
                A && fA && MA.alternate === null && e(T, fA),
                _ = f(MA, _, mA),
                OA === null ? BA = MA : OA.sibling = MA,
                OA = MA,
                fA = bA
            }
            if (mA === M.length)
                return r(T, fA),
                TA && mn(T, mA),
                BA;
            if (fA === null) {
                for (; mA < M.length; mA++)
                    fA = q(T, M[mA], j),
                    fA !== null && (_ = f(fA, _, mA),
                    OA === null ? BA = fA : OA.sibling = fA,
                    OA = fA);
                return TA && mn(T, mA),
                BA
            }
            for (fA = l(fA); mA < M.length; mA++)
                bA = z(fA, T, mA, M[mA], j),
                bA !== null && (A && bA.alternate !== null && fA.delete(bA.key === null ? mA : bA.key),
                _ = f(bA, _, mA),
                OA === null ? BA = bA : OA.sibling = bA,
                OA = bA);
            return A && fA.forEach(function(pr) {
                return e(T, pr)
            }),
            TA && mn(T, mA),
            BA
        }
        function gA(T, _, M, j) {
            if (M == null)
                throw Error(n(151));
            for (var BA = null, OA = null, fA = _, mA = _ = 0, bA = null, MA = M.next(); fA !== null && !MA.done; mA++,
            MA = M.next()) {
                fA.index > mA ? (bA = fA,
                fA = null) : bA = fA.sibling;
                var pr = R(T, fA, MA.value, j);
                if (pr === null) {
                    fA === null && (fA = bA);
                    break
                }
                A && fA && pr.alternate === null && e(T, fA),
                _ = f(pr, _, mA),
                OA === null ? BA = pr : OA.sibling = pr,
                OA = pr,
                fA = bA
            }
            if (MA.done)
                return r(T, fA),
                TA && mn(T, mA),
                BA;
            if (fA === null) {
                for (; !MA.done; mA++,
                MA = M.next())
                    MA = q(T, MA.value, j),
                    MA !== null && (_ = f(MA, _, mA),
                    OA === null ? BA = MA : OA.sibling = MA,
                    OA = MA);
                return TA && mn(T, mA),
                BA
            }
            for (fA = l(fA); !MA.done; mA++,
            MA = M.next())
                MA = z(fA, T, mA, MA.value, j),
                MA !== null && (A && MA.alternate !== null && fA.delete(MA.key === null ? mA : MA.key),
                _ = f(MA, _, mA),
                OA === null ? BA = MA : OA.sibling = MA,
                OA = MA);
            return A && fA.forEach(function(Rv) {
                return e(T, Rv)
            }),
            TA && mn(T, mA),
            BA
        }
        function zA(T, _, M, j) {
            if (typeof M == "object" && M !== null && M.type === p && M.key === null && (M = M.props.children),
            typeof M == "object" && M !== null) {
                switch (M.$$typeof) {
                case m:
                    A: {
                        for (var BA = M.key; _ !== null; ) {
                            if (_.key === BA) {
                                if (BA = M.type,
                                BA === p) {
                                    if (_.tag === 7) {
                                        r(T, _.sibling),
                                        j = c(_, M.props.children),
                                        j.return = T,
                                        T = j;
                                        break A
                                    }
                                } else if (_.elementType === BA || typeof BA == "object" && BA !== null && BA.$$typeof === k && ra(BA) === _.type) {
                                    r(T, _.sibling),
                                    j = c(_, M.props),
                                    ll(j, M),
                                    j.return = T,
                                    T = j;
                                    break A
                                }
                                r(T, _);
                                break
                            } else
                                e(T, _);
                            _ = _.sibling
                        }
                        M.type === p ? (j = $r(M.props.children, T.mode, j, M.key),
                        j.return = T,
                        T = j) : (j = Xs(M.type, M.key, M.props, null, T.mode, j),
                        ll(j, M),
                        j.return = T,
                        T = j)
                    }
                    return Q(T);
                case v:
                    A: {
                        for (BA = M.key; _ !== null; ) {
                            if (_.key === BA)
                                if (_.tag === 4 && _.stateNode.containerInfo === M.containerInfo && _.stateNode.implementation === M.implementation) {
                                    r(T, _.sibling),
                                    j = c(_, M.children || []),
                                    j.return = T,
                                    T = j;
                                    break A
                                } else {
                                    r(T, _);
                                    break
                                }
                            else
                                e(T, _);
                            _ = _.sibling
                        }
                        j = Eo(M, T.mode, j),
                        j.return = T,
                        T = j
                    }
                    return Q(T);
                case k:
                    return M = ra(M),
                    zA(T, _, M, j)
                }
                if (CA(M))
                    return sA(T, _, M, j);
                if (oA(M)) {
                    if (BA = oA(M),
                    typeof BA != "function")
                        throw Error(n(150));
                    return M = BA.call(M),
                    gA(T, _, M, j)
                }
                if (typeof M.then == "function")
                    return zA(T, _, Ws(M), j);
                if (M.$$typeof === O)
                    return zA(T, _, ks(T, M), j);
                Ps(T, M)
            }
            return typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint" ? (M = "" + M,
            _ !== null && _.tag === 6 ? (r(T, _.sibling),
            j = c(_, M),
            j.return = T,
            T = j) : (r(T, _),
            j = Fo(M, T.mode, j),
            j.return = T,
            T = j),
            Q(T)) : r(T, _)
        }
        return function(T, _, M, j) {
            try {
                il = 0;
                var BA = zA(T, _, M, j);
                return ja = null,
                BA
            } catch (fA) {
                if (fA === ka || fA === Zs)
                    throw fA;
                var OA = ct(29, fA, null, T.mode);
                return OA.lanes = j,
                OA.return = T,
                OA
            }
        }
    }
    var ia = id(!0)
      , ld = id(!1)
      , rr = !1;
    function Ko(A) {
        A.updateQueue = {
            baseState: A.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function Ro(A, e) {
        A = A.updateQueue,
        e.updateQueue === A && (e.updateQueue = {
            baseState: A.baseState,
            firstBaseUpdate: A.firstBaseUpdate,
            lastBaseUpdate: A.lastBaseUpdate,
            shared: A.shared,
            callbacks: null
        })
    }
    function ar(A) {
        return {
            lane: A,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function ir(A, e, r) {
        var l = A.updateQueue;
        if (l === null)
            return null;
        if (l = l.shared,
        (IA & 2) !== 0) {
            var c = l.pending;
            return c === null ? e.next = e : (e.next = c.next,
            c.next = e),
            l.pending = e,
            e = zs(A),
            Xg(A, null, r),
            e
        }
        return Vs(A, l, e, r),
        zs(A)
    }
    function sl(A, e, r) {
        if (e = e.updateQueue,
        e !== null && (e = e.shared,
        (r & 4194048) !== 0)) {
            var l = e.lanes;
            l &= A.pendingLanes,
            r |= l,
            e.lanes = r,
            zi(A, r)
        }
    }
    function No(A, e) {
        var r = A.updateQueue
          , l = A.alternate;
        if (l !== null && (l = l.updateQueue,
        r === l)) {
            var c = null
              , f = null;
            if (r = r.firstBaseUpdate,
            r !== null) {
                do {
                    var Q = {
                        lane: r.lane,
                        tag: r.tag,
                        payload: r.payload,
                        callback: null,
                        next: null
                    };
                    f === null ? c = f = Q : f = f.next = Q,
                    r = r.next
                } while (r !== null);
                f === null ? c = f = e : f = f.next = e
            } else
                c = f = e;
            r = {
                baseState: l.baseState,
                firstBaseUpdate: c,
                lastBaseUpdate: f,
                shared: l.shared,
                callbacks: l.callbacks
            },
            A.updateQueue = r;
            return
        }
        A = r.lastBaseUpdate,
        A === null ? r.firstBaseUpdate = e : A.next = e,
        r.lastBaseUpdate = e
    }
    var Go = !1;
    function ul() {
        if (Go) {
            var A = Ja;
            if (A !== null)
                throw A
        }
    }
    function cl(A, e, r, l) {
        Go = !1;
        var c = A.updateQueue;
        rr = !1;
        var f = c.firstBaseUpdate
          , Q = c.lastBaseUpdate
          , U = c.shared.pending;
        if (U !== null) {
            c.shared.pending = null;
            var F = U
              , I = F.next;
            F.next = null,
            Q === null ? f = I : Q.next = I,
            Q = F;
            var J = A.alternate;
            J !== null && (J = J.updateQueue,
            U = J.lastBaseUpdate,
            U !== Q && (U === null ? J.firstBaseUpdate = I : U.next = I,
            J.lastBaseUpdate = F))
        }
        if (f !== null) {
            var q = c.baseState;
            Q = 0,
            J = I = F = null,
            U = f;
            do {
                var R = U.lane & -536870913
                  , z = R !== U.lane;
                if (z ? (HA & R) === R : (l & R) === R) {
                    R !== 0 && R === Ya && (Go = !0),
                    J !== null && (J = J.next = {
                        lane: 0,
                        tag: U.tag,
                        payload: U.payload,
                        callback: null,
                        next: null
                    });
                    A: {
                        var sA = A
                          , gA = U;
                        R = e;
                        var zA = r;
                        switch (gA.tag) {
                        case 1:
                            if (sA = gA.payload,
                            typeof sA == "function") {
                                q = sA.call(zA, q, R);
                                break A
                            }
                            q = sA;
                            break A;
                        case 3:
                            sA.flags = sA.flags & -65537 | 128;
                        case 0:
                            if (sA = gA.payload,
                            R = typeof sA == "function" ? sA.call(zA, q, R) : sA,
                            R == null)
                                break A;
                            q = w({}, q, R);
                            break A;
                        case 2:
                            rr = !0
                        }
                    }
                    R = U.callback,
                    R !== null && (A.flags |= 64,
                    z && (A.flags |= 8192),
                    z = c.callbacks,
                    z === null ? c.callbacks = [R] : z.push(R))
                } else
                    z = {
                        lane: R,
                        tag: U.tag,
                        payload: U.payload,
                        callback: U.callback,
                        next: null
                    },
                    J === null ? (I = J = z,
                    F = q) : J = J.next = z,
                    Q |= R;
                if (U = U.next,
                U === null) {
                    if (U = c.shared.pending,
                    U === null)
                        break;
                    z = U,
                    U = z.next,
                    z.next = null,
                    c.lastBaseUpdate = z,
                    c.shared.pending = null
                }
            } while (!0);
            J === null && (F = q),
            c.baseState = F,
            c.firstBaseUpdate = I,
            c.lastBaseUpdate = J,
            f === null && (c.shared.lanes = 0),
            or |= Q,
            A.lanes = Q,
            A.memoizedState = q
        }
    }
    function sd(A, e) {
        if (typeof A != "function")
            throw Error(n(191, A));
        A.call(e)
    }
    function ud(A, e) {
        var r = A.callbacks;
        if (r !== null)
            for (A.callbacks = null,
            A = 0; A < r.length; A++)
                sd(r[A], e)
    }
    var Za = y(null)
      , $s = y(0);
    function cd(A, e) {
        A = Dn,
        P($s, A),
        P(Za, e),
        Dn = A | e.baseLanes
    }
    function Vo() {
        P($s, Dn),
        P(Za, Za.current)
    }
    function zo() {
        Dn = $s.current,
        X(Za),
        X($s)
    }
    var ot = y(null)
      , St = null;
    function lr(A) {
        var e = A.alternate;
        P(se, se.current & 1),
        P(ot, A),
        St === null && (e === null || Za.current !== null || e.memoizedState !== null) && (St = A)
    }
    function Xo(A) {
        P(se, se.current),
        P(ot, A),
        St === null && (St = A)
    }
    function od(A) {
        A.tag === 22 ? (P(se, se.current),
        P(ot, A),
        St === null && (St = A)) : sr()
    }
    function sr() {
        P(se, se.current),
        P(ot, ot.current)
    }
    function ft(A) {
        X(ot),
        St === A && (St = null),
        X(se)
    }
    var se = y(0);
    function Au(A) {
        for (var e = A; e !== null; ) {
            if (e.tag === 13) {
                var r = e.memoizedState;
                if (r !== null && (r = r.dehydrated,
                r === null || Wf(r) || Pf(r)))
                    return e
            } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
                if ((e.flags & 128) !== 0)
                    return e
            } else if (e.child !== null) {
                e.child.return = e,
                e = e.child;
                continue
            }
            if (e === A)
                break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === A)
                    return null;
                e = e.return
            }
            e.sibling.return = e.return,
            e = e.sibling
        }
        return null
    }
    var Fn = 0
      , pA = null
      , GA = null
      , he = null
      , eu = !1
      , qa = !1
      , la = !1
      , tu = 0
      , ol = 0
      , Wa = null
      , bm = 0;
    function ae() {
        throw Error(n(321))
    }
    function Yo(A, e) {
        if (e === null)
            return !1;
        for (var r = 0; r < e.length && r < A.length; r++)
            if (!ut(A[r], e[r]))
                return !1;
        return !0
    }
    function Jo(A, e, r, l, c, f) {
        return Fn = f,
        pA = e,
        e.memoizedState = null,
        e.updateQueue = null,
        e.lanes = 0,
        D.H = A === null || A.memoizedState === null ? jd : sf,
        la = !1,
        f = r(l, c),
        la = !1,
        qa && (f = Bd(e, r, l, c)),
        fd(A),
        f
    }
    function fd(A) {
        D.H = hl;
        var e = GA !== null && GA.next !== null;
        if (Fn = 0,
        he = GA = pA = null,
        eu = !1,
        ol = 0,
        Wa = null,
        e)
            throw Error(n(300));
        A === null || ge || (A = A.dependencies,
        A !== null && Js(A) && (ge = !0))
    }
    function Bd(A, e, r, l) {
        pA = A;
        var c = 0;
        do {
            if (qa && (Wa = null),
            ol = 0,
            qa = !1,
            25 <= c)
                throw Error(n(301));
            if (c += 1,
            he = GA = null,
            A.updateQueue != null) {
                var f = A.updateQueue;
                f.lastEffect = null,
                f.events = null,
                f.stores = null,
                f.memoCache != null && (f.memoCache.index = 0)
            }
            D.H = Zd,
            f = e(r, l)
        } while (qa);
        return f
    }
    function Sm() {
        var A = D.H
          , e = A.useState()[0];
        return e = typeof e.then == "function" ? fl(e) : e,
        A = A.useState()[0],
        (GA !== null ? GA.memoizedState : null) !== A && (pA.flags |= 1024),
        e
    }
    function ko() {
        var A = tu !== 0;
        return tu = 0,
        A
    }
    function jo(A, e, r) {
        e.updateQueue = A.updateQueue,
        e.flags &= -2053,
        A.lanes &= ~r
    }
    function Zo(A) {
        if (eu) {
            for (A = A.memoizedState; A !== null; ) {
                var e = A.queue;
                e !== null && (e.pending = null),
                A = A.next
            }
            eu = !1
        }
        Fn = 0,
        he = GA = pA = null,
        qa = !1,
        ol = tu = 0,
        Wa = null
    }
    function Xe() {
        var A = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return he === null ? pA.memoizedState = he = A : he = he.next = A,
        he
    }
    function ue() {
        if (GA === null) {
            var A = pA.alternate;
            A = A !== null ? A.memoizedState : null
        } else
            A = GA.next;
        var e = he === null ? pA.memoizedState : he.next;
        if (e !== null)
            he = e,
            GA = A;
        else {
            if (A === null)
                throw pA.alternate === null ? Error(n(467)) : Error(n(310));
            GA = A,
            A = {
                memoizedState: GA.memoizedState,
                baseState: GA.baseState,
                baseQueue: GA.baseQueue,
                queue: GA.queue,
                next: null
            },
            he === null ? pA.memoizedState = he = A : he = he.next = A
        }
        return he
    }
    function nu() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function fl(A) {
        var e = ol;
        return ol += 1,
        Wa === null && (Wa = []),
        A = nd(Wa, A, e),
        e = pA,
        (he === null ? e.memoizedState : he.next) === null && (e = e.alternate,
        D.H = e === null || e.memoizedState === null ? jd : sf),
        A
    }
    function ru(A) {
        if (A !== null && typeof A == "object") {
            if (typeof A.then == "function")
                return fl(A);
            if (A.$$typeof === O)
                return Se(A)
        }
        throw Error(n(438, String(A)))
    }
    function qo(A) {
        var e = null
          , r = pA.updateQueue;
        if (r !== null && (e = r.memoCache),
        e == null) {
            var l = pA.alternate;
            l !== null && (l = l.updateQueue,
            l !== null && (l = l.memoCache,
            l != null && (e = {
                data: l.data.map(function(c) {
                    return c.slice()
                }),
                index: 0
            })))
        }
        if (e == null && (e = {
            data: [],
            index: 0
        }),
        r === null && (r = nu(),
        pA.updateQueue = r),
        r.memoCache = e,
        r = e.data[e.index],
        r === void 0)
            for (r = e.data[e.index] = Array(A),
            l = 0; l < A; l++)
                r[l] = iA;
        return e.index++,
        r
    }
    function En(A, e) {
        return typeof e == "function" ? e(A) : e
    }
    function au(A) {
        var e = ue();
        return Wo(e, GA, A)
    }
    function Wo(A, e, r) {
        var l = A.queue;
        if (l === null)
            throw Error(n(311));
        l.lastRenderedReducer = r;
        var c = A.baseQueue
          , f = l.pending;
        if (f !== null) {
            if (c !== null) {
                var Q = c.next;
                c.next = f.next,
                f.next = Q
            }
            e.baseQueue = c = f,
            l.pending = null
        }
        if (f = A.baseState,
        c === null)
            A.memoizedState = f;
        else {
            e = c.next;
            var U = Q = null
              , F = null
              , I = e
              , J = !1;
            do {
                var q = I.lane & -536870913;
                if (q !== I.lane ? (HA & q) === q : (Fn & q) === q) {
                    var R = I.revertLane;
                    if (R === 0)
                        F !== null && (F = F.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: I.action,
                            hasEagerState: I.hasEagerState,
                            eagerState: I.eagerState,
                            next: null
                        }),
                        q === Ya && (J = !0);
                    else if ((Fn & R) === R) {
                        I = I.next,
                        R === Ya && (J = !0);
                        continue
                    } else
                        q = {
                            lane: 0,
                            revertLane: I.revertLane,
                            gesture: null,
                            action: I.action,
                            hasEagerState: I.hasEagerState,
                            eagerState: I.eagerState,
                            next: null
                        },
                        F === null ? (U = F = q,
                        Q = f) : F = F.next = q,
                        pA.lanes |= R,
                        or |= R;
                    q = I.action,
                    la && r(f, q),
                    f = I.hasEagerState ? I.eagerState : r(f, q)
                } else
                    R = {
                        lane: q,
                        revertLane: I.revertLane,
                        gesture: I.gesture,
                        action: I.action,
                        hasEagerState: I.hasEagerState,
                        eagerState: I.eagerState,
                        next: null
                    },
                    F === null ? (U = F = R,
                    Q = f) : F = F.next = R,
                    pA.lanes |= q,
                    or |= q;
                I = I.next
            } while (I !== null && I !== e);
            if (F === null ? Q = f : F.next = U,
            !ut(f, A.memoizedState) && (ge = !0,
            J && (r = Ja,
            r !== null)))
                throw r;
            A.memoizedState = f,
            A.baseState = Q,
            A.baseQueue = F,
            l.lastRenderedState = f
        }
        return c === null && (l.lanes = 0),
        [A.memoizedState, l.dispatch]
    }
    function Po(A) {
        var e = ue()
          , r = e.queue;
        if (r === null)
            throw Error(n(311));
        r.lastRenderedReducer = A;
        var l = r.dispatch
          , c = r.pending
          , f = e.memoizedState;
        if (c !== null) {
            r.pending = null;
            var Q = c = c.next;
            do
                f = A(f, Q.action),
                Q = Q.next;
            while (Q !== c);
            ut(f, e.memoizedState) || (ge = !0),
            e.memoizedState = f,
            e.baseQueue === null && (e.baseState = f),
            r.lastRenderedState = f
        }
        return [f, l]
    }
    function hd(A, e, r) {
        var l = pA
          , c = ue()
          , f = TA;
        if (f) {
            if (r === void 0)
                throw Error(n(407));
            r = r()
        } else
            r = e();
        var Q = !ut((GA || c).memoizedState, r);
        if (Q && (c.memoizedState = r,
        ge = !0),
        c = c.queue,
        ef(Qd.bind(null, l, c, A), [A]),
        c.getSnapshot !== e || Q || he !== null && he.memoizedState.tag & 1) {
            if (l.flags |= 2048,
            Pa(9, {
                destroy: void 0
            }, dd.bind(null, l, c, r, e), null),
            YA === null)
                throw Error(n(349));
            f || (Fn & 127) !== 0 || gd(l, e, r)
        }
        return r
    }
    function gd(A, e, r) {
        A.flags |= 16384,
        A = {
            getSnapshot: e,
            value: r
        },
        e = pA.updateQueue,
        e === null ? (e = nu(),
        pA.updateQueue = e,
        e.stores = [A]) : (r = e.stores,
        r === null ? e.stores = [A] : r.push(A))
    }
    function dd(A, e, r, l) {
        e.value = r,
        e.getSnapshot = l,
        wd(e) && Cd(A)
    }
    function Qd(A, e, r) {
        return r(function() {
            wd(e) && Cd(A)
        })
    }
    function wd(A) {
        var e = A.getSnapshot;
        A = A.value;
        try {
            var r = e();
            return !ut(A, r)
        } catch {
            return !0
        }
    }
    function Cd(A) {
        var e = Pr(A, 2);
        e !== null && At(e, A, 2)
    }
    function $o(A) {
        var e = Xe();
        if (typeof A == "function") {
            var r = A;
            if (A = r(),
            la) {
                Gt(!0);
                try {
                    r()
                } finally {
                    Gt(!1)
                }
            }
        }
        return e.memoizedState = e.baseState = A,
        e.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: En,
            lastRenderedState: A
        },
        e
    }
    function Ud(A, e, r, l) {
        return A.baseState = r,
        Wo(A, GA, typeof l == "function" ? l : En)
    }
    function Tm(A, e, r, l, c) {
        if (su(A))
            throw Error(n(485));
        if (A = e.action,
        A !== null) {
            var f = {
                payload: c,
                action: A,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(Q) {
                    f.listeners.push(Q)
                }
            };
            D.T !== null ? r(!0) : f.isTransition = !1,
            l(f),
            r = e.pending,
            r === null ? (f.next = e.pending = f,
            pd(e, f)) : (f.next = r.next,
            e.pending = r.next = f)
        }
    }
    function pd(A, e) {
        var r = e.action
          , l = e.payload
          , c = A.state;
        if (e.isTransition) {
            var f = D.T
              , Q = {};
            D.T = Q;
            try {
                var U = r(c, l)
                  , F = D.S;
                F !== null && F(Q, U),
                md(A, e, U)
            } catch (I) {
                Af(A, e, I)
            } finally {
                f !== null && Q.types !== null && (f.types = Q.types),
                D.T = f
            }
        } else
            try {
                f = r(c, l),
                md(A, e, f)
            } catch (I) {
                Af(A, e, I)
            }
    }
    function md(A, e, r) {
        r !== null && typeof r == "object" && typeof r.then == "function" ? r.then(function(l) {
            vd(A, e, l)
        }, function(l) {
            return Af(A, e, l)
        }) : vd(A, e, r)
    }
    function vd(A, e, r) {
        e.status = "fulfilled",
        e.value = r,
        yd(e),
        A.state = r,
        e = A.pending,
        e !== null && (r = e.next,
        r === e ? A.pending = null : (r = r.next,
        e.next = r,
        pd(A, r)))
    }
    function Af(A, e, r) {
        var l = A.pending;
        if (A.pending = null,
        l !== null) {
            l = l.next;
            do
                e.status = "rejected",
                e.reason = r,
                yd(e),
                e = e.next;
            while (e !== l)
        }
        A.action = null
    }
    function yd(A) {
        A = A.listeners;
        for (var e = 0; e < A.length; e++)
            (0,
            A[e])()
    }
    function Fd(A, e) {
        return e
    }
    function Ed(A, e) {
        if (TA) {
            var r = YA.formState;
            if (r !== null) {
                A: {
                    var l = pA;
                    if (TA) {
                        if (ZA) {
                            e: {
                                for (var c = ZA, f = bt; c.nodeType !== 8; ) {
                                    if (!f) {
                                        c = null;
                                        break e
                                    }
                                    if (c = Tt(c.nextSibling),
                                    c === null) {
                                        c = null;
                                        break e
                                    }
                                }
                                f = c.data,
                                c = f === "F!" || f === "F" ? c : null
                            }
                            if (c) {
                                ZA = Tt(c.nextSibling),
                                l = c.data === "F!";
                                break A
                            }
                        }
                        tr(l)
                    }
                    l = !1
                }
                l && (e = r[0])
            }
        }
        return r = Xe(),
        r.memoizedState = r.baseState = e,
        l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Fd,
            lastRenderedState: e
        },
        r.queue = l,
        r = Yd.bind(null, pA, l),
        l.dispatch = r,
        l = $o(!1),
        f = lf.bind(null, pA, !1, l.queue),
        l = Xe(),
        c = {
            state: e,
            dispatch: null,
            action: A,
            pending: null
        },
        l.queue = c,
        r = Tm.bind(null, pA, c, f, r),
        c.dispatch = r,
        l.memoizedState = A,
        [e, r, !1]
    }
    function _d(A) {
        var e = ue();
        return Hd(e, GA, A)
    }
    function Hd(A, e, r) {
        if (e = Wo(A, e, Fd)[0],
        A = au(En)[0],
        typeof e == "object" && e !== null && typeof e.then == "function")
            try {
                var l = fl(e)
            } catch (Q) {
                throw Q === ka ? Zs : Q
            }
        else
            l = e;
        e = ue();
        var c = e.queue
          , f = c.dispatch;
        return r !== e.memoizedState && (pA.flags |= 2048,
        Pa(9, {
            destroy: void 0
        }, xm.bind(null, c, r), null)),
        [l, f, A]
    }
    function xm(A, e) {
        A.action = e
    }
    function bd(A) {
        var e = ue()
          , r = GA;
        if (r !== null)
            return Hd(e, r, A);
        ue(),
        e = e.memoizedState,
        r = ue();
        var l = r.queue.dispatch;
        return r.memoizedState = A,
        [e, l, !1]
    }
    function Pa(A, e, r, l) {
        return A = {
            tag: A,
            create: r,
            deps: l,
            inst: e,
            next: null
        },
        e = pA.updateQueue,
        e === null && (e = nu(),
        pA.updateQueue = e),
        r = e.lastEffect,
        r === null ? e.lastEffect = A.next = A : (l = r.next,
        r.next = A,
        A.next = l,
        e.lastEffect = A),
        A
    }
    function Sd() {
        return ue().memoizedState
    }
    function iu(A, e, r, l) {
        var c = Xe();
        pA.flags |= A,
        c.memoizedState = Pa(1 | e, {
            destroy: void 0
        }, r, l === void 0 ? null : l)
    }
    function lu(A, e, r, l) {
        var c = ue();
        l = l === void 0 ? null : l;
        var f = c.memoizedState.inst;
        GA !== null && l !== null && Yo(l, GA.memoizedState.deps) ? c.memoizedState = Pa(e, f, r, l) : (pA.flags |= A,
        c.memoizedState = Pa(1 | e, f, r, l))
    }
    function Td(A, e) {
        iu(8390656, 8, A, e)
    }
    function ef(A, e) {
        lu(2048, 8, A, e)
    }
    function Dm(A) {
        pA.flags |= 4;
        var e = pA.updateQueue;
        if (e === null)
            e = nu(),
            pA.updateQueue = e,
            e.events = [A];
        else {
            var r = e.events;
            r === null ? e.events = [A] : r.push(A)
        }
    }
    function xd(A) {
        var e = ue().memoizedState;
        return Dm({
            ref: e,
            nextImpl: A
        }),
        function() {
            if ((IA & 2) !== 0)
                throw Error(n(440));
            return e.impl.apply(void 0, arguments)
        }
    }
    function Dd(A, e) {
        return lu(4, 2, A, e)
    }
    function Ld(A, e) {
        return lu(4, 4, A, e)
    }
    function Od(A, e) {
        if (typeof e == "function") {
            A = A();
            var r = e(A);
            return function() {
                typeof r == "function" ? r() : e(null)
            }
        }
        if (e != null)
            return A = A(),
            e.current = A,
            function() {
                e.current = null
            }
    }
    function Md(A, e, r) {
        r = r != null ? r.concat([A]) : null,
        lu(4, 4, Od.bind(null, e, A), r)
    }
    function tf() {}
    function Id(A, e) {
        var r = ue();
        e = e === void 0 ? null : e;
        var l = r.memoizedState;
        return e !== null && Yo(e, l[1]) ? l[0] : (r.memoizedState = [A, e],
        A)
    }
    function Kd(A, e) {
        var r = ue();
        e = e === void 0 ? null : e;
        var l = r.memoizedState;
        if (e !== null && Yo(e, l[1]))
            return l[0];
        if (l = A(),
        la) {
            Gt(!0);
            try {
                A()
            } finally {
                Gt(!1)
            }
        }
        return r.memoizedState = [l, e],
        l
    }
    function nf(A, e, r) {
        return r === void 0 || (Fn & 1073741824) !== 0 && (HA & 261930) === 0 ? A.memoizedState = e : (A.memoizedState = r,
        A = R0(),
        pA.lanes |= A,
        or |= A,
        r)
    }
    function Rd(A, e, r, l) {
        return ut(r, e) ? r : Za.current !== null ? (A = nf(A, r, l),
        ut(A, e) || (ge = !0),
        A) : (Fn & 42) === 0 || (Fn & 1073741824) !== 0 && (HA & 261930) === 0 ? (ge = !0,
        A.memoizedState = r) : (A = R0(),
        pA.lanes |= A,
        or |= A,
        e)
    }
    function Nd(A, e, r, l, c) {
        var f = Z.p;
        Z.p = f !== 0 && 8 > f ? f : 8;
        var Q = D.T
          , U = {};
        D.T = U,
        lf(A, !1, e, r);
        try {
            var F = c()
              , I = D.S;
            if (I !== null && I(U, F),
            F !== null && typeof F == "object" && typeof F.then == "function") {
                var J = Hm(F, l);
                Bl(A, e, J, gt(A))
            } else
                Bl(A, e, l, gt(A))
        } catch (q) {
            Bl(A, e, {
                then: function() {},
                status: "rejected",
                reason: q
            }, gt())
        } finally {
            Z.p = f,
            Q !== null && U.types !== null && (Q.types = U.types),
            D.T = Q
        }
    }
    function Lm() {}
    function rf(A, e, r, l) {
        if (A.tag !== 5)
            throw Error(n(476));
        var c = Gd(A).queue;
        Nd(A, c, e, rA, r === null ? Lm : function() {
            return Vd(A),
            r(l)
        }
        )
    }
    function Gd(A) {
        var e = A.memoizedState;
        if (e !== null)
            return e;
        e = {
            memoizedState: rA,
            baseState: rA,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: En,
                lastRenderedState: rA
            },
            next: null
        };
        var r = {};
        return e.next = {
            memoizedState: r,
            baseState: r,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: En,
                lastRenderedState: r
            },
            next: null
        },
        A.memoizedState = e,
        A = A.alternate,
        A !== null && (A.memoizedState = e),
        e
    }
    function Vd(A) {
        var e = Gd(A);
        e.next === null && (e = A.alternate.memoizedState),
        Bl(A, e.next.queue, {}, gt())
    }
    function af() {
        return Se(Sl)
    }
    function zd() {
        return ue().memoizedState
    }
    function Xd() {
        return ue().memoizedState
    }
    function Om(A) {
        for (var e = A.return; e !== null; ) {
            switch (e.tag) {
            case 24:
            case 3:
                var r = gt();
                A = ar(r);
                var l = ir(e, A, r);
                l !== null && (At(l, e, r),
                sl(l, e, r)),
                e = {
                    cache: Lo()
                },
                A.payload = e;
                return
            }
            e = e.return
        }
    }
    function Mm(A, e, r) {
        var l = gt();
        r = {
            lane: l,
            revertLane: 0,
            gesture: null,
            action: r,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        su(A) ? Jd(e, r) : (r = vo(A, e, r, l),
        r !== null && (At(r, A, l),
        kd(r, e, l)))
    }
    function Yd(A, e, r) {
        var l = gt();
        Bl(A, e, r, l)
    }
    function Bl(A, e, r, l) {
        var c = {
            lane: l,
            revertLane: 0,
            gesture: null,
            action: r,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (su(A))
            Jd(e, c);
        else {
            var f = A.alternate;
            if (A.lanes === 0 && (f === null || f.lanes === 0) && (f = e.lastRenderedReducer,
            f !== null))
                try {
                    var Q = e.lastRenderedState
                      , U = f(Q, r);
                    if (c.hasEagerState = !0,
                    c.eagerState = U,
                    ut(U, Q))
                        return Vs(A, e, c, 0),
                        YA === null && Gs(),
                        !1
                } catch {}
            if (r = vo(A, e, c, l),
            r !== null)
                return At(r, A, l),
                kd(r, e, l),
                !0
        }
        return !1
    }
    function lf(A, e, r, l) {
        if (l = {
            lane: 2,
            revertLane: Rf(),
            gesture: null,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        su(A)) {
            if (e)
                throw Error(n(479))
        } else
            e = vo(A, r, l, 2),
            e !== null && At(e, A, 2)
    }
    function su(A) {
        var e = A.alternate;
        return A === pA || e !== null && e === pA
    }
    function Jd(A, e) {
        qa = eu = !0;
        var r = A.pending;
        r === null ? e.next = e : (e.next = r.next,
        r.next = e),
        A.pending = e
    }
    function kd(A, e, r) {
        if ((r & 4194048) !== 0) {
            var l = e.lanes;
            l &= A.pendingLanes,
            r |= l,
            e.lanes = r,
            zi(A, r)
        }
    }
    var hl = {
        readContext: Se,
        use: ru,
        useCallback: ae,
        useContext: ae,
        useEffect: ae,
        useImperativeHandle: ae,
        useLayoutEffect: ae,
        useInsertionEffect: ae,
        useMemo: ae,
        useReducer: ae,
        useRef: ae,
        useState: ae,
        useDebugValue: ae,
        useDeferredValue: ae,
        useTransition: ae,
        useSyncExternalStore: ae,
        useId: ae,
        useHostTransitionStatus: ae,
        useFormState: ae,
        useActionState: ae,
        useOptimistic: ae,
        useMemoCache: ae,
        useCacheRefresh: ae
    };
    hl.useEffectEvent = ae;
    var jd = {
        readContext: Se,
        use: ru,
        useCallback: function(A, e) {
            return Xe().memoizedState = [A, e === void 0 ? null : e],
            A
        },
        useContext: Se,
        useEffect: Td,
        useImperativeHandle: function(A, e, r) {
            r = r != null ? r.concat([A]) : null,
            iu(4194308, 4, Od.bind(null, e, A), r)
        },
        useLayoutEffect: function(A, e) {
            return iu(4194308, 4, A, e)
        },
        useInsertionEffect: function(A, e) {
            iu(4, 2, A, e)
        },
        useMemo: function(A, e) {
            var r = Xe();
            e = e === void 0 ? null : e;
            var l = A();
            if (la) {
                Gt(!0);
                try {
                    A()
                } finally {
                    Gt(!1)
                }
            }
            return r.memoizedState = [l, e],
            l
        },
        useReducer: function(A, e, r) {
            var l = Xe();
            if (r !== void 0) {
                var c = r(e);
                if (la) {
                    Gt(!0);
                    try {
                        r(e)
                    } finally {
                        Gt(!1)
                    }
                }
            } else
                c = e;
            return l.memoizedState = l.baseState = c,
            A = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: A,
                lastRenderedState: c
            },
            l.queue = A,
            A = A.dispatch = Mm.bind(null, pA, A),
            [l.memoizedState, A]
        },
        useRef: function(A) {
            var e = Xe();
            return A = {
                current: A
            },
            e.memoizedState = A
        },
        useState: function(A) {
            A = $o(A);
            var e = A.queue
              , r = Yd.bind(null, pA, e);
            return e.dispatch = r,
            [A.memoizedState, r]
        },
        useDebugValue: tf,
        useDeferredValue: function(A, e) {
            var r = Xe();
            return nf(r, A, e)
        },
        useTransition: function() {
            var A = $o(!1);
            return A = Nd.bind(null, pA, A.queue, !0, !1),
            Xe().memoizedState = A,
            [!1, A]
        },
        useSyncExternalStore: function(A, e, r) {
            var l = pA
              , c = Xe();
            if (TA) {
                if (r === void 0)
                    throw Error(n(407));
                r = r()
            } else {
                if (r = e(),
                YA === null)
                    throw Error(n(349));
                (HA & 127) !== 0 || gd(l, e, r)
            }
            c.memoizedState = r;
            var f = {
                value: r,
                getSnapshot: e
            };
            return c.queue = f,
            Td(Qd.bind(null, l, f, A), [A]),
            l.flags |= 2048,
            Pa(9, {
                destroy: void 0
            }, dd.bind(null, l, f, r, e), null),
            r
        },
        useId: function() {
            var A = Xe()
              , e = YA.identifierPrefix;
            if (TA) {
                var r = nn
                  , l = tn;
                r = (l & ~(1 << 32 - Ie(l) - 1)).toString(32) + r,
                e = "_" + e + "R_" + r,
                r = tu++,
                0 < r && (e += "H" + r.toString(32)),
                e += "_"
            } else
                r = bm++,
                e = "_" + e + "r_" + r.toString(32) + "_";
            return A.memoizedState = e
        },
        useHostTransitionStatus: af,
        useFormState: Ed,
        useActionState: Ed,
        useOptimistic: function(A) {
            var e = Xe();
            e.memoizedState = e.baseState = A;
            var r = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return e.queue = r,
            e = lf.bind(null, pA, !0, r),
            r.dispatch = e,
            [A, e]
        },
        useMemoCache: qo,
        useCacheRefresh: function() {
            return Xe().memoizedState = Om.bind(null, pA)
        },
        useEffectEvent: function(A) {
            var e = Xe()
              , r = {
                impl: A
            };
            return e.memoizedState = r,
            function() {
                if ((IA & 2) !== 0)
                    throw Error(n(440));
                return r.impl.apply(void 0, arguments)
            }
        }
    }
      , sf = {
        readContext: Se,
        use: ru,
        useCallback: Id,
        useContext: Se,
        useEffect: ef,
        useImperativeHandle: Md,
        useInsertionEffect: Dd,
        useLayoutEffect: Ld,
        useMemo: Kd,
        useReducer: au,
        useRef: Sd,
        useState: function() {
            return au(En)
        },
        useDebugValue: tf,
        useDeferredValue: function(A, e) {
            var r = ue();
            return Rd(r, GA.memoizedState, A, e)
        },
        useTransition: function() {
            var A = au(En)[0]
              , e = ue().memoizedState;
            return [typeof A == "boolean" ? A : fl(A), e]
        },
        useSyncExternalStore: hd,
        useId: zd,
        useHostTransitionStatus: af,
        useFormState: _d,
        useActionState: _d,
        useOptimistic: function(A, e) {
            var r = ue();
            return Ud(r, GA, A, e)
        },
        useMemoCache: qo,
        useCacheRefresh: Xd
    };
    sf.useEffectEvent = xd;
    var Zd = {
        readContext: Se,
        use: ru,
        useCallback: Id,
        useContext: Se,
        useEffect: ef,
        useImperativeHandle: Md,
        useInsertionEffect: Dd,
        useLayoutEffect: Ld,
        useMemo: Kd,
        useReducer: Po,
        useRef: Sd,
        useState: function() {
            return Po(En)
        },
        useDebugValue: tf,
        useDeferredValue: function(A, e) {
            var r = ue();
            return GA === null ? nf(r, A, e) : Rd(r, GA.memoizedState, A, e)
        },
        useTransition: function() {
            var A = Po(En)[0]
              , e = ue().memoizedState;
            return [typeof A == "boolean" ? A : fl(A), e]
        },
        useSyncExternalStore: hd,
        useId: zd,
        useHostTransitionStatus: af,
        useFormState: bd,
        useActionState: bd,
        useOptimistic: function(A, e) {
            var r = ue();
            return GA !== null ? Ud(r, GA, A, e) : (r.baseState = A,
            [A, r.queue.dispatch])
        },
        useMemoCache: qo,
        useCacheRefresh: Xd
    };
    Zd.useEffectEvent = xd;
    function uf(A, e, r, l) {
        e = A.memoizedState,
        r = r(l, e),
        r = r == null ? e : w({}, e, r),
        A.memoizedState = r,
        A.lanes === 0 && (A.updateQueue.baseState = r)
    }
    var cf = {
        enqueueSetState: function(A, e, r) {
            A = A._reactInternals;
            var l = gt()
              , c = ar(l);
            c.payload = e,
            r != null && (c.callback = r),
            e = ir(A, c, l),
            e !== null && (At(e, A, l),
            sl(e, A, l))
        },
        enqueueReplaceState: function(A, e, r) {
            A = A._reactInternals;
            var l = gt()
              , c = ar(l);
            c.tag = 1,
            c.payload = e,
            r != null && (c.callback = r),
            e = ir(A, c, l),
            e !== null && (At(e, A, l),
            sl(e, A, l))
        },
        enqueueForceUpdate: function(A, e) {
            A = A._reactInternals;
            var r = gt()
              , l = ar(r);
            l.tag = 2,
            e != null && (l.callback = e),
            e = ir(A, l, r),
            e !== null && (At(e, A, r),
            sl(e, A, r))
        }
    };
    function qd(A, e, r, l, c, f, Q) {
        return A = A.stateNode,
        typeof A.shouldComponentUpdate == "function" ? A.shouldComponentUpdate(l, f, Q) : e.prototype && e.prototype.isPureReactComponent ? !Al(r, l) || !Al(c, f) : !0
    }
    function Wd(A, e, r, l) {
        A = e.state,
        typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(r, l),
        typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(r, l),
        e.state !== A && cf.enqueueReplaceState(e, e.state, null)
    }
    function sa(A, e) {
        var r = e;
        if ("ref"in e) {
            r = {};
            for (var l in e)
                l !== "ref" && (r[l] = e[l])
        }
        if (A = A.defaultProps) {
            r === e && (r = w({}, r));
            for (var c in A)
                r[c] === void 0 && (r[c] = A[c])
        }
        return r
    }
    function Pd(A) {
        Ns(A)
    }
    function $d(A) {
        console.error(A)
    }
    function A0(A) {
        Ns(A)
    }
    function uu(A, e) {
        try {
            var r = A.onUncaughtError;
            r(e.value, {
                componentStack: e.stack
            })
        } catch (l) {
            setTimeout(function() {
                throw l
            })
        }
    }
    function e0(A, e, r) {
        try {
            var l = A.onCaughtError;
            l(r.value, {
                componentStack: r.stack,
                errorBoundary: e.tag === 1 ? e.stateNode : null
            })
        } catch (c) {
            setTimeout(function() {
                throw c
            })
        }
    }
    function of(A, e, r) {
        return r = ar(r),
        r.tag = 3,
        r.payload = {
            element: null
        },
        r.callback = function() {
            uu(A, e)
        }
        ,
        r
    }
    function t0(A) {
        return A = ar(A),
        A.tag = 3,
        A
    }
    function n0(A, e, r, l) {
        var c = r.type.getDerivedStateFromError;
        if (typeof c == "function") {
            var f = l.value;
            A.payload = function() {
                return c(f)
            }
            ,
            A.callback = function() {
                e0(e, r, l)
            }
        }
        var Q = r.stateNode;
        Q !== null && typeof Q.componentDidCatch == "function" && (A.callback = function() {
            e0(e, r, l),
            typeof c != "function" && (fr === null ? fr = new Set([this]) : fr.add(this));
            var U = l.stack;
            this.componentDidCatch(l.value, {
                componentStack: U !== null ? U : ""
            })
        }
        )
    }
    function Im(A, e, r, l, c) {
        if (r.flags |= 32768,
        l !== null && typeof l == "object" && typeof l.then == "function") {
            if (e = r.alternate,
            e !== null && Xa(e, r, c, !0),
            r = ot.current,
            r !== null) {
                switch (r.tag) {
                case 31:
                case 13:
                    return St === null ? pu() : r.alternate === null && ie === 0 && (ie = 3),
                    r.flags &= -257,
                    r.flags |= 65536,
                    r.lanes = c,
                    l === qs ? r.flags |= 16384 : (e = r.updateQueue,
                    e === null ? r.updateQueue = new Set([l]) : e.add(l),
                    Mf(A, l, c)),
                    !1;
                case 22:
                    return r.flags |= 65536,
                    l === qs ? r.flags |= 16384 : (e = r.updateQueue,
                    e === null ? (e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l])
                    },
                    r.updateQueue = e) : (r = e.retryQueue,
                    r === null ? e.retryQueue = new Set([l]) : r.add(l)),
                    Mf(A, l, c)),
                    !1
                }
                throw Error(n(435, r.tag))
            }
            return Mf(A, l, c),
            pu(),
            !1
        }
        if (TA)
            return e = ot.current,
            e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            e.flags |= 65536,
            e.lanes = c,
            l !== bo && (A = Error(n(422), {
                cause: l
            }),
            nl(Et(A, r)))) : (l !== bo && (e = Error(n(423), {
                cause: l
            }),
            nl(Et(e, r))),
            A = A.current.alternate,
            A.flags |= 65536,
            c &= -c,
            A.lanes |= c,
            l = Et(l, r),
            c = of(A.stateNode, l, c),
            No(A, c),
            ie !== 4 && (ie = 2)),
            !1;
        var f = Error(n(520), {
            cause: l
        });
        if (f = Et(f, r),
        ml === null ? ml = [f] : ml.push(f),
        ie !== 4 && (ie = 2),
        e === null)
            return !0;
        l = Et(l, r),
        r = e;
        do {
            switch (r.tag) {
            case 3:
                return r.flags |= 65536,
                A = c & -c,
                r.lanes |= A,
                A = of(r.stateNode, l, A),
                No(r, A),
                !1;
            case 1:
                if (e = r.type,
                f = r.stateNode,
                (r.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (fr === null || !fr.has(f))))
                    return r.flags |= 65536,
                    c &= -c,
                    r.lanes |= c,
                    c = t0(c),
                    n0(c, A, r, l),
                    No(r, c),
                    !1
            }
            r = r.return
        } while (r !== null);
        return !1
    }
    var ff = Error(n(461))
      , ge = !1;
    function Te(A, e, r, l) {
        e.child = A === null ? ld(e, null, r, l) : ia(e, A.child, r, l)
    }
    function r0(A, e, r, l, c) {
        r = r.render;
        var f = e.ref;
        if ("ref"in l) {
            var Q = {};
            for (var U in l)
                U !== "ref" && (Q[U] = l[U])
        } else
            Q = l;
        return ta(e),
        l = Jo(A, e, r, Q, f, c),
        U = ko(),
        A !== null && !ge ? (jo(A, e, c),
        _n(A, e, c)) : (TA && U && _o(e),
        e.flags |= 1,
        Te(A, e, l, c),
        e.child)
    }
    function a0(A, e, r, l, c) {
        if (A === null) {
            var f = r.type;
            return typeof f == "function" && !yo(f) && f.defaultProps === void 0 && r.compare === null ? (e.tag = 15,
            e.type = f,
            i0(A, e, f, l, c)) : (A = Xs(r.type, null, l, e, e.mode, c),
            A.ref = e.ref,
            A.return = e,
            e.child = A)
        }
        if (f = A.child,
        !Uf(A, c)) {
            var Q = f.memoizedProps;
            if (r = r.compare,
            r = r !== null ? r : Al,
            r(Q, l) && A.ref === e.ref)
                return _n(A, e, c)
        }
        return e.flags |= 1,
        A = pn(f, l),
        A.ref = e.ref,
        A.return = e,
        e.child = A
    }
    function i0(A, e, r, l, c) {
        if (A !== null) {
            var f = A.memoizedProps;
            if (Al(f, l) && A.ref === e.ref)
                if (ge = !1,
                e.pendingProps = l = f,
                Uf(A, c))
                    (A.flags & 131072) !== 0 && (ge = !0);
                else
                    return e.lanes = A.lanes,
                    _n(A, e, c)
        }
        return Bf(A, e, r, l, c)
    }
    function l0(A, e, r, l) {
        var c = l.children
          , f = A !== null ? A.memoizedState : null;
        if (A === null && e.stateNode === null && (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        l.mode === "hidden") {
            if ((e.flags & 128) !== 0) {
                if (f = f !== null ? f.baseLanes | r : r,
                A !== null) {
                    for (l = e.child = A.child,
                    c = 0; l !== null; )
                        c = c | l.lanes | l.childLanes,
                        l = l.sibling;
                    l = c & ~f
                } else
                    l = 0,
                    e.child = null;
                return s0(A, e, f, r, l)
            }
            if ((r & 536870912) !== 0)
                e.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                A !== null && js(e, f !== null ? f.cachePool : null),
                f !== null ? cd(e, f) : Vo(),
                od(e);
            else
                return l = e.lanes = 536870912,
                s0(A, e, f !== null ? f.baseLanes | r : r, r, l)
        } else
            f !== null ? (js(e, f.cachePool),
            cd(e, f),
            sr(),
            e.memoizedState = null) : (A !== null && js(e, null),
            Vo(),
            sr());
        return Te(A, e, c, r),
        e.child
    }
    function gl(A, e) {
        return A !== null && A.tag === 22 || e.stateNode !== null || (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        e.sibling
    }
    function s0(A, e, r, l, c) {
        var f = Mo();
        return f = f === null ? null : {
            parent: Be._currentValue,
            pool: f
        },
        e.memoizedState = {
            baseLanes: r,
            cachePool: f
        },
        A !== null && js(e, null),
        Vo(),
        od(e),
        A !== null && Xa(A, e, l, !0),
        e.childLanes = c,
        null
    }
    function cu(A, e) {
        return e = fu({
            mode: e.mode,
            children: e.children
        }, A.mode),
        e.ref = A.ref,
        A.child = e,
        e.return = A,
        e
    }
    function u0(A, e, r) {
        return ia(e, A.child, null, r),
        A = cu(e, e.pendingProps),
        A.flags |= 2,
        ft(e),
        e.memoizedState = null,
        A
    }
    function Km(A, e, r) {
        var l = e.pendingProps
          , c = (e.flags & 128) !== 0;
        if (e.flags &= -129,
        A === null) {
            if (TA) {
                if (l.mode === "hidden")
                    return A = cu(e, l),
                    e.lanes = 536870912,
                    gl(null, A);
                if (Xo(e),
                (A = ZA) ? (A = pQ(A, bt),
                A = A !== null && A.data === "&" ? A : null,
                A !== null && (e.memoizedState = {
                    dehydrated: A,
                    treeContext: Ar !== null ? {
                        id: tn,
                        overflow: nn
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                r = Jg(A),
                r.return = e,
                e.child = r,
                be = e,
                ZA = null)) : A = null,
                A === null)
                    throw tr(e);
                return e.lanes = 536870912,
                null
            }
            return cu(e, l)
        }
        var f = A.memoizedState;
        if (f !== null) {
            var Q = f.dehydrated;
            if (Xo(e),
            c)
                if (e.flags & 256)
                    e.flags &= -257,
                    e = u0(A, e, r);
                else if (e.memoizedState !== null)
                    e.child = A.child,
                    e.flags |= 128,
                    e = null;
                else
                    throw Error(n(558));
            else if (ge || Xa(A, e, r, !1),
            c = (r & A.childLanes) !== 0,
            ge || c) {
                if (l = YA,
                l !== null && (Q = _s(l, r),
                Q !== 0 && Q !== f.retryLane))
                    throw f.retryLane = Q,
                    Pr(A, Q),
                    At(l, A, Q),
                    ff;
                pu(),
                e = u0(A, e, r)
            } else
                A = f.treeContext,
                ZA = Tt(Q.nextSibling),
                be = e,
                TA = !0,
                er = null,
                bt = !1,
                A !== null && Zg(e, A),
                e = cu(e, l),
                e.flags |= 4096;
            return e
        }
        return A = pn(A.child, {
            mode: l.mode,
            children: l.children
        }),
        A.ref = e.ref,
        e.child = A,
        A.return = e,
        A
    }
    function ou(A, e) {
        var r = e.ref;
        if (r === null)
            A !== null && A.ref !== null && (e.flags |= 4194816);
        else {
            if (typeof r != "function" && typeof r != "object")
                throw Error(n(284));
            (A === null || A.ref !== r) && (e.flags |= 4194816)
        }
    }
    function Bf(A, e, r, l, c) {
        return ta(e),
        r = Jo(A, e, r, l, void 0, c),
        l = ko(),
        A !== null && !ge ? (jo(A, e, c),
        _n(A, e, c)) : (TA && l && _o(e),
        e.flags |= 1,
        Te(A, e, r, c),
        e.child)
    }
    function c0(A, e, r, l, c, f) {
        return ta(e),
        e.updateQueue = null,
        r = Bd(e, l, r, c),
        fd(A),
        l = ko(),
        A !== null && !ge ? (jo(A, e, f),
        _n(A, e, f)) : (TA && l && _o(e),
        e.flags |= 1,
        Te(A, e, r, f),
        e.child)
    }
    function o0(A, e, r, l, c) {
        if (ta(e),
        e.stateNode === null) {
            var f = Na
              , Q = r.contextType;
            typeof Q == "object" && Q !== null && (f = Se(Q)),
            f = new r(l,f),
            e.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null,
            f.updater = cf,
            e.stateNode = f,
            f._reactInternals = e,
            f = e.stateNode,
            f.props = l,
            f.state = e.memoizedState,
            f.refs = {},
            Ko(e),
            Q = r.contextType,
            f.context = typeof Q == "object" && Q !== null ? Se(Q) : Na,
            f.state = e.memoizedState,
            Q = r.getDerivedStateFromProps,
            typeof Q == "function" && (uf(e, r, Q, l),
            f.state = e.memoizedState),
            typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (Q = f.state,
            typeof f.componentWillMount == "function" && f.componentWillMount(),
            typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(),
            Q !== f.state && cf.enqueueReplaceState(f, f.state, null),
            cl(e, l, f, c),
            ul(),
            f.state = e.memoizedState),
            typeof f.componentDidMount == "function" && (e.flags |= 4194308),
            l = !0
        } else if (A === null) {
            f = e.stateNode;
            var U = e.memoizedProps
              , F = sa(r, U);
            f.props = F;
            var I = f.context
              , J = r.contextType;
            Q = Na,
            typeof J == "object" && J !== null && (Q = Se(J));
            var q = r.getDerivedStateFromProps;
            J = typeof q == "function" || typeof f.getSnapshotBeforeUpdate == "function",
            U = e.pendingProps !== U,
            J || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (U || I !== Q) && Wd(e, f, l, Q),
            rr = !1;
            var R = e.memoizedState;
            f.state = R,
            cl(e, l, f, c),
            ul(),
            I = e.memoizedState,
            U || R !== I || rr ? (typeof q == "function" && (uf(e, r, q, l),
            I = e.memoizedState),
            (F = rr || qd(e, r, F, l, R, I, Q)) ? (J || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(),
            typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()),
            typeof f.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (e.flags |= 4194308),
            e.memoizedProps = l,
            e.memoizedState = I),
            f.props = l,
            f.state = I,
            f.context = Q,
            l = F) : (typeof f.componentDidMount == "function" && (e.flags |= 4194308),
            l = !1)
        } else {
            f = e.stateNode,
            Ro(A, e),
            Q = e.memoizedProps,
            J = sa(r, Q),
            f.props = J,
            q = e.pendingProps,
            R = f.context,
            I = r.contextType,
            F = Na,
            typeof I == "object" && I !== null && (F = Se(I)),
            U = r.getDerivedStateFromProps,
            (I = typeof U == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (Q !== q || R !== F) && Wd(e, f, l, F),
            rr = !1,
            R = e.memoizedState,
            f.state = R,
            cl(e, l, f, c),
            ul();
            var z = e.memoizedState;
            Q !== q || R !== z || rr || A !== null && A.dependencies !== null && Js(A.dependencies) ? (typeof U == "function" && (uf(e, r, U, l),
            z = e.memoizedState),
            (J = rr || qd(e, r, J, l, R, z, F) || A !== null && A.dependencies !== null && Js(A.dependencies)) ? (I || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(l, z, F),
            typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(l, z, F)),
            typeof f.componentDidUpdate == "function" && (e.flags |= 4),
            typeof f.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || Q === A.memoizedProps && R === A.memoizedState || (e.flags |= 4),
            typeof f.getSnapshotBeforeUpdate != "function" || Q === A.memoizedProps && R === A.memoizedState || (e.flags |= 1024),
            e.memoizedProps = l,
            e.memoizedState = z),
            f.props = l,
            f.state = z,
            f.context = F,
            l = J) : (typeof f.componentDidUpdate != "function" || Q === A.memoizedProps && R === A.memoizedState || (e.flags |= 4),
            typeof f.getSnapshotBeforeUpdate != "function" || Q === A.memoizedProps && R === A.memoizedState || (e.flags |= 1024),
            l = !1)
        }
        return f = l,
        ou(A, e),
        l = (e.flags & 128) !== 0,
        f || l ? (f = e.stateNode,
        r = l && typeof r.getDerivedStateFromError != "function" ? null : f.render(),
        e.flags |= 1,
        A !== null && l ? (e.child = ia(e, A.child, null, c),
        e.child = ia(e, null, r, c)) : Te(A, e, r, c),
        e.memoizedState = f.state,
        A = e.child) : A = _n(A, e, c),
        A
    }
    function f0(A, e, r, l) {
        return Aa(),
        e.flags |= 256,
        Te(A, e, r, l),
        e.child
    }
    var hf = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function gf(A) {
        return {
            baseLanes: A,
            cachePool: ed()
        }
    }
    function df(A, e, r) {
        return A = A !== null ? A.childLanes & ~r : 0,
        e && (A |= ht),
        A
    }
    function B0(A, e, r) {
        var l = e.pendingProps, c = !1, f = (e.flags & 128) !== 0, Q;
        if ((Q = f) || (Q = A !== null && A.memoizedState === null ? !1 : (se.current & 2) !== 0),
        Q && (c = !0,
        e.flags &= -129),
        Q = (e.flags & 32) !== 0,
        e.flags &= -33,
        A === null) {
            if (TA) {
                if (c ? lr(e) : sr(),
                (A = ZA) ? (A = pQ(A, bt),
                A = A !== null && A.data !== "&" ? A : null,
                A !== null && (e.memoizedState = {
                    dehydrated: A,
                    treeContext: Ar !== null ? {
                        id: tn,
                        overflow: nn
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                r = Jg(A),
                r.return = e,
                e.child = r,
                be = e,
                ZA = null)) : A = null,
                A === null)
                    throw tr(e);
                return Pf(A) ? e.lanes = 32 : e.lanes = 536870912,
                null
            }
            var U = l.children;
            return l = l.fallback,
            c ? (sr(),
            c = e.mode,
            U = fu({
                mode: "hidden",
                children: U
            }, c),
            l = $r(l, c, r, null),
            U.return = e,
            l.return = e,
            U.sibling = l,
            e.child = U,
            l = e.child,
            l.memoizedState = gf(r),
            l.childLanes = df(A, Q, r),
            e.memoizedState = hf,
            gl(null, l)) : (lr(e),
            Qf(e, U))
        }
        var F = A.memoizedState;
        if (F !== null && (U = F.dehydrated,
        U !== null)) {
            if (f)
                e.flags & 256 ? (lr(e),
                e.flags &= -257,
                e = wf(A, e, r)) : e.memoizedState !== null ? (sr(),
                e.child = A.child,
                e.flags |= 128,
                e = null) : (sr(),
                U = l.fallback,
                c = e.mode,
                l = fu({
                    mode: "visible",
                    children: l.children
                }, c),
                U = $r(U, c, r, null),
                U.flags |= 2,
                l.return = e,
                U.return = e,
                l.sibling = U,
                e.child = l,
                ia(e, A.child, null, r),
                l = e.child,
                l.memoizedState = gf(r),
                l.childLanes = df(A, Q, r),
                e.memoizedState = hf,
                e = gl(null, l));
            else if (lr(e),
            Pf(U)) {
                if (Q = U.nextSibling && U.nextSibling.dataset,
                Q)
                    var I = Q.dgst;
                Q = I,
                l = Error(n(419)),
                l.stack = "",
                l.digest = Q,
                nl({
                    value: l,
                    source: null,
                    stack: null
                }),
                e = wf(A, e, r)
            } else if (ge || Xa(A, e, r, !1),
            Q = (r & A.childLanes) !== 0,
            ge || Q) {
                if (Q = YA,
                Q !== null && (l = _s(Q, r),
                l !== 0 && l !== F.retryLane))
                    throw F.retryLane = l,
                    Pr(A, l),
                    At(Q, A, l),
                    ff;
                Wf(U) || pu(),
                e = wf(A, e, r)
            } else
                Wf(U) ? (e.flags |= 192,
                e.child = A.child,
                e = null) : (A = F.treeContext,
                ZA = Tt(U.nextSibling),
                be = e,
                TA = !0,
                er = null,
                bt = !1,
                A !== null && Zg(e, A),
                e = Qf(e, l.children),
                e.flags |= 4096);
            return e
        }
        return c ? (sr(),
        U = l.fallback,
        c = e.mode,
        F = A.child,
        I = F.sibling,
        l = pn(F, {
            mode: "hidden",
            children: l.children
        }),
        l.subtreeFlags = F.subtreeFlags & 65011712,
        I !== null ? U = pn(I, U) : (U = $r(U, c, r, null),
        U.flags |= 2),
        U.return = e,
        l.return = e,
        l.sibling = U,
        e.child = l,
        gl(null, l),
        l = e.child,
        U = A.child.memoizedState,
        U === null ? U = gf(r) : (c = U.cachePool,
        c !== null ? (F = Be._currentValue,
        c = c.parent !== F ? {
            parent: F,
            pool: F
        } : c) : c = ed(),
        U = {
            baseLanes: U.baseLanes | r,
            cachePool: c
        }),
        l.memoizedState = U,
        l.childLanes = df(A, Q, r),
        e.memoizedState = hf,
        gl(A.child, l)) : (lr(e),
        r = A.child,
        A = r.sibling,
        r = pn(r, {
            mode: "visible",
            children: l.children
        }),
        r.return = e,
        r.sibling = null,
        A !== null && (Q = e.deletions,
        Q === null ? (e.deletions = [A],
        e.flags |= 16) : Q.push(A)),
        e.child = r,
        e.memoizedState = null,
        r)
    }
    function Qf(A, e) {
        return e = fu({
            mode: "visible",
            children: e
        }, A.mode),
        e.return = A,
        A.child = e
    }
    function fu(A, e) {
        return A = ct(22, A, null, e),
        A.lanes = 0,
        A
    }
    function wf(A, e, r) {
        return ia(e, A.child, null, r),
        A = Qf(e, e.pendingProps.children),
        A.flags |= 2,
        e.memoizedState = null,
        A
    }
    function h0(A, e, r) {
        A.lanes |= e;
        var l = A.alternate;
        l !== null && (l.lanes |= e),
        xo(A.return, e, r)
    }
    function Cf(A, e, r, l, c, f) {
        var Q = A.memoizedState;
        Q === null ? A.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: r,
            tailMode: c,
            treeForkCount: f
        } : (Q.isBackwards = e,
        Q.rendering = null,
        Q.renderingStartTime = 0,
        Q.last = l,
        Q.tail = r,
        Q.tailMode = c,
        Q.treeForkCount = f)
    }
    function g0(A, e, r) {
        var l = e.pendingProps
          , c = l.revealOrder
          , f = l.tail;
        l = l.children;
        var Q = se.current
          , U = (Q & 2) !== 0;
        if (U ? (Q = Q & 1 | 2,
        e.flags |= 128) : Q &= 1,
        P(se, Q),
        Te(A, e, l, r),
        l = TA ? tl : 0,
        !U && A !== null && (A.flags & 128) !== 0)
            A: for (A = e.child; A !== null; ) {
                if (A.tag === 13)
                    A.memoizedState !== null && h0(A, r, e);
                else if (A.tag === 19)
                    h0(A, r, e);
                else if (A.child !== null) {
                    A.child.return = A,
                    A = A.child;
                    continue
                }
                if (A === e)
                    break A;
                for (; A.sibling === null; ) {
                    if (A.return === null || A.return === e)
                        break A;
                    A = A.return
                }
                A.sibling.return = A.return,
                A = A.sibling
            }
        switch (c) {
        case "forwards":
            for (r = e.child,
            c = null; r !== null; )
                A = r.alternate,
                A !== null && Au(A) === null && (c = r),
                r = r.sibling;
            r = c,
            r === null ? (c = e.child,
            e.child = null) : (c = r.sibling,
            r.sibling = null),
            Cf(e, !1, c, r, f, l);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (r = null,
            c = e.child,
            e.child = null; c !== null; ) {
                if (A = c.alternate,
                A !== null && Au(A) === null) {
                    e.child = c;
                    break
                }
                A = c.sibling,
                c.sibling = r,
                r = c,
                c = A
            }
            Cf(e, !0, r, null, f, l);
            break;
        case "together":
            Cf(e, !1, null, null, void 0, l);
            break;
        default:
            e.memoizedState = null
        }
        return e.child
    }
    function _n(A, e, r) {
        if (A !== null && (e.dependencies = A.dependencies),
        or |= e.lanes,
        (r & e.childLanes) === 0)
            if (A !== null) {
                if (Xa(A, e, r, !1),
                (r & e.childLanes) === 0)
                    return null
            } else
                return null;
        if (A !== null && e.child !== A.child)
            throw Error(n(153));
        if (e.child !== null) {
            for (A = e.child,
            r = pn(A, A.pendingProps),
            e.child = r,
            r.return = e; A.sibling !== null; )
                A = A.sibling,
                r = r.sibling = pn(A, A.pendingProps),
                r.return = e;
            r.sibling = null
        }
        return e.child
    }
    function Uf(A, e) {
        return (A.lanes & e) !== 0 ? !0 : (A = A.dependencies,
        !!(A !== null && Js(A)))
    }
    function Rm(A, e, r) {
        switch (e.tag) {
        case 3:
            ve(e, e.stateNode.containerInfo),
            nr(e, Be, A.memoizedState.cache),
            Aa();
            break;
        case 27:
        case 5:
            gn(e);
            break;
        case 4:
            ve(e, e.stateNode.containerInfo);
            break;
        case 10:
            nr(e, e.type, e.memoizedProps.value);
            break;
        case 31:
            if (e.memoizedState !== null)
                return e.flags |= 128,
                Xo(e),
                null;
            break;
        case 13:
            var l = e.memoizedState;
            if (l !== null)
                return l.dehydrated !== null ? (lr(e),
                e.flags |= 128,
                null) : (r & e.child.childLanes) !== 0 ? B0(A, e, r) : (lr(e),
                A = _n(A, e, r),
                A !== null ? A.sibling : null);
            lr(e);
            break;
        case 19:
            var c = (A.flags & 128) !== 0;
            if (l = (r & e.childLanes) !== 0,
            l || (Xa(A, e, r, !1),
            l = (r & e.childLanes) !== 0),
            c) {
                if (l)
                    return g0(A, e, r);
                e.flags |= 128
            }
            if (c = e.memoizedState,
            c !== null && (c.rendering = null,
            c.tail = null,
            c.lastEffect = null),
            P(se, se.current),
            l)
                break;
            return null;
        case 22:
            return e.lanes = 0,
            l0(A, e, r, e.pendingProps);
        case 24:
            nr(e, Be, A.memoizedState.cache)
        }
        return _n(A, e, r)
    }
    function d0(A, e, r) {
        if (A !== null)
            if (A.memoizedProps !== e.pendingProps)
                ge = !0;
            else {
                if (!Uf(A, r) && (e.flags & 128) === 0)
                    return ge = !1,
                    Rm(A, e, r);
                ge = (A.flags & 131072) !== 0
            }
        else
            ge = !1,
            TA && (e.flags & 1048576) !== 0 && jg(e, tl, e.index);
        switch (e.lanes = 0,
        e.tag) {
        case 16:
            A: {
                var l = e.pendingProps;
                if (A = ra(e.elementType),
                e.type = A,
                typeof A == "function")
                    yo(A) ? (l = sa(A, l),
                    e.tag = 1,
                    e = o0(null, e, A, l, r)) : (e.tag = 0,
                    e = Bf(null, e, A, l, r));
                else {
                    if (A != null) {
                        var c = A.$$typeof;
                        if (c === G) {
                            e.tag = 11,
                            e = r0(null, e, A, l, r);
                            break A
                        } else if (c === K) {
                            e.tag = 14,
                            e = a0(null, e, A, l, r);
                            break A
                        }
                    }
                    throw e = hA(A) || A,
                    Error(n(306, e, ""))
                }
            }
            return e;
        case 0:
            return Bf(A, e, e.type, e.pendingProps, r);
        case 1:
            return l = e.type,
            c = sa(l, e.pendingProps),
            o0(A, e, l, c, r);
        case 3:
            A: {
                if (ve(e, e.stateNode.containerInfo),
                A === null)
                    throw Error(n(387));
                l = e.pendingProps;
                var f = e.memoizedState;
                c = f.element,
                Ro(A, e),
                cl(e, l, null, r);
                var Q = e.memoizedState;
                if (l = Q.cache,
                nr(e, Be, l),
                l !== f.cache && Do(e, [Be], r, !0),
                ul(),
                l = Q.element,
                f.isDehydrated)
                    if (f = {
                        element: l,
                        isDehydrated: !1,
                        cache: Q.cache
                    },
                    e.updateQueue.baseState = f,
                    e.memoizedState = f,
                    e.flags & 256) {
                        e = f0(A, e, l, r);
                        break A
                    } else if (l !== c) {
                        c = Et(Error(n(424)), e),
                        nl(c),
                        e = f0(A, e, l, r);
                        break A
                    } else
                        for (A = e.stateNode.containerInfo,
                        A.nodeType === 9 ? A = A.body : A = A.nodeName === "HTML" ? A.ownerDocument.body : A,
                        ZA = Tt(A.firstChild),
                        be = e,
                        TA = !0,
                        er = null,
                        bt = !0,
                        r = ld(e, null, l, r),
                        e.child = r; r; )
                            r.flags = r.flags & -3 | 4096,
                            r = r.sibling;
                else {
                    if (Aa(),
                    l === c) {
                        e = _n(A, e, r);
                        break A
                    }
                    Te(A, e, l, r)
                }
                e = e.child
            }
            return e;
        case 26:
            return ou(A, e),
            A === null ? (r = _Q(e.type, null, e.pendingProps, null)) ? e.memoizedState = r : TA || (r = e.type,
            A = e.pendingProps,
            l = Hu(QA.current).createElement(r),
            l[H] = e,
            l[Y] = A,
            xe(l, r, A),
            re(l),
            e.stateNode = l) : e.memoizedState = _Q(e.type, A.memoizedProps, e.pendingProps, A.memoizedState),
            null;
        case 27:
            return gn(e),
            A === null && TA && (l = e.stateNode = yQ(e.type, e.pendingProps, QA.current),
            be = e,
            bt = !0,
            c = ZA,
            dr(e.type) ? ($f = c,
            ZA = Tt(l.firstChild)) : ZA = c),
            Te(A, e, e.pendingProps.children, r),
            ou(A, e),
            A === null && (e.flags |= 4194304),
            e.child;
        case 5:
            return A === null && TA && ((c = l = ZA) && (l = gv(l, e.type, e.pendingProps, bt),
            l !== null ? (e.stateNode = l,
            be = e,
            ZA = Tt(l.firstChild),
            bt = !1,
            c = !0) : c = !1),
            c || tr(e)),
            gn(e),
            c = e.type,
            f = e.pendingProps,
            Q = A !== null ? A.memoizedProps : null,
            l = f.children,
            jf(c, f) ? l = null : Q !== null && jf(c, Q) && (e.flags |= 32),
            e.memoizedState !== null && (c = Jo(A, e, Sm, null, null, r),
            Sl._currentValue = c),
            ou(A, e),
            Te(A, e, l, r),
            e.child;
        case 6:
            return A === null && TA && ((A = r = ZA) && (r = dv(r, e.pendingProps, bt),
            r !== null ? (e.stateNode = r,
            be = e,
            ZA = null,
            A = !0) : A = !1),
            A || tr(e)),
            null;
        case 13:
            return B0(A, e, r);
        case 4:
            return ve(e, e.stateNode.containerInfo),
            l = e.pendingProps,
            A === null ? e.child = ia(e, null, l, r) : Te(A, e, l, r),
            e.child;
        case 11:
            return r0(A, e, e.type, e.pendingProps, r);
        case 7:
            return Te(A, e, e.pendingProps, r),
            e.child;
        case 8:
            return Te(A, e, e.pendingProps.children, r),
            e.child;
        case 12:
            return Te(A, e, e.pendingProps.children, r),
            e.child;
        case 10:
            return l = e.pendingProps,
            nr(e, e.type, l.value),
            Te(A, e, l.children, r),
            e.child;
        case 9:
            return c = e.type._context,
            l = e.pendingProps.children,
            ta(e),
            c = Se(c),
            l = l(c),
            e.flags |= 1,
            Te(A, e, l, r),
            e.child;
        case 14:
            return a0(A, e, e.type, e.pendingProps, r);
        case 15:
            return i0(A, e, e.type, e.pendingProps, r);
        case 19:
            return g0(A, e, r);
        case 31:
            return Km(A, e, r);
        case 22:
            return l0(A, e, r, e.pendingProps);
        case 24:
            return ta(e),
            l = Se(Be),
            A === null ? (c = Mo(),
            c === null && (c = YA,
            f = Lo(),
            c.pooledCache = f,
            f.refCount++,
            f !== null && (c.pooledCacheLanes |= r),
            c = f),
            e.memoizedState = {
                parent: l,
                cache: c
            },
            Ko(e),
            nr(e, Be, c)) : ((A.lanes & r) !== 0 && (Ro(A, e),
            cl(e, null, null, r),
            ul()),
            c = A.memoizedState,
            f = e.memoizedState,
            c.parent !== l ? (c = {
                parent: l,
                cache: l
            },
            e.memoizedState = c,
            e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = c),
            nr(e, Be, l)) : (l = f.cache,
            nr(e, Be, l),
            l !== c.cache && Do(e, [Be], r, !0))),
            Te(A, e, e.pendingProps.children, r),
            e.child;
        case 29:
            throw e.pendingProps
        }
        throw Error(n(156, e.tag))
    }
    function Hn(A) {
        A.flags |= 4
    }
    function pf(A, e, r, l, c) {
        if ((e = (A.mode & 32) !== 0) && (e = !1),
        e) {
            if (A.flags |= 16777216,
            (c & 335544128) === c)
                if (A.stateNode.complete)
                    A.flags |= 8192;
                else if (z0())
                    A.flags |= 8192;
                else
                    throw aa = qs,
                    Io
        } else
            A.flags &= -16777217
    }
    function Q0(A, e) {
        if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
            A.flags &= -16777217;
        else if (A.flags |= 16777216,
        !xQ(e))
            if (z0())
                A.flags |= 8192;
            else
                throw aa = qs,
                Io
    }
    function Bu(A, e) {
        e !== null && (A.flags |= 4),
        A.flags & 16384 && (e = A.tag !== 22 ? Wn() : 536870912,
        A.lanes |= e,
        ti |= e)
    }
    function dl(A, e) {
        if (!TA)
            switch (A.tailMode) {
            case "hidden":
                e = A.tail;
                for (var r = null; e !== null; )
                    e.alternate !== null && (r = e),
                    e = e.sibling;
                r === null ? A.tail = null : r.sibling = null;
                break;
            case "collapsed":
                r = A.tail;
                for (var l = null; r !== null; )
                    r.alternate !== null && (l = r),
                    r = r.sibling;
                l === null ? e || A.tail === null ? A.tail = null : A.tail.sibling = null : l.sibling = null
            }
    }
    function qA(A) {
        var e = A.alternate !== null && A.alternate.child === A.child
          , r = 0
          , l = 0;
        if (e)
            for (var c = A.child; c !== null; )
                r |= c.lanes | c.childLanes,
                l |= c.subtreeFlags & 65011712,
                l |= c.flags & 65011712,
                c.return = A,
                c = c.sibling;
        else
            for (c = A.child; c !== null; )
                r |= c.lanes | c.childLanes,
                l |= c.subtreeFlags,
                l |= c.flags,
                c.return = A,
                c = c.sibling;
        return A.subtreeFlags |= l,
        A.childLanes = r,
        e
    }
    function Nm(A, e, r) {
        var l = e.pendingProps;
        switch (Ho(e),
        e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return qA(e),
            null;
        case 1:
            return qA(e),
            null;
        case 3:
            return r = e.stateNode,
            l = null,
            A !== null && (l = A.memoizedState.cache),
            e.memoizedState.cache !== l && (e.flags |= 2048),
            yn(Be),
            WA(),
            r.pendingContext && (r.context = r.pendingContext,
            r.pendingContext = null),
            (A === null || A.child === null) && (za(e) ? Hn(e) : A === null || A.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024,
            So())),
            qA(e),
            null;
        case 26:
            var c = e.type
              , f = e.memoizedState;
            return A === null ? (Hn(e),
            f !== null ? (qA(e),
            Q0(e, f)) : (qA(e),
            pf(e, c, null, l, r))) : f ? f !== A.memoizedState ? (Hn(e),
            qA(e),
            Q0(e, f)) : (qA(e),
            e.flags &= -16777217) : (A = A.memoizedProps,
            A !== l && Hn(e),
            qA(e),
            pf(e, c, A, l, r)),
            null;
        case 27:
            if (Vr(e),
            r = QA.current,
            c = e.type,
            A !== null && e.stateNode != null)
                A.memoizedProps !== l && Hn(e);
            else {
                if (!l) {
                    if (e.stateNode === null)
                        throw Error(n(166));
                    return qA(e),
                    null
                }
                A = eA.current,
                za(e) ? qg(e) : (A = yQ(c, l, r),
                e.stateNode = A,
                Hn(e))
            }
            return qA(e),
            null;
        case 5:
            if (Vr(e),
            c = e.type,
            A !== null && e.stateNode != null)
                A.memoizedProps !== l && Hn(e);
            else {
                if (!l) {
                    if (e.stateNode === null)
                        throw Error(n(166));
                    return qA(e),
                    null
                }
                if (f = eA.current,
                za(e))
                    qg(e);
                else {
                    var Q = Hu(QA.current);
                    switch (f) {
                    case 1:
                        f = Q.createElementNS("http://www.w3.org/2000/svg", c);
                        break;
                    case 2:
                        f = Q.createElementNS("http://www.w3.org/1998/Math/MathML", c);
                        break;
                    default:
                        switch (c) {
                        case "svg":
                            f = Q.createElementNS("http://www.w3.org/2000/svg", c);
                            break;
                        case "math":
                            f = Q.createElementNS("http://www.w3.org/1998/Math/MathML", c);
                            break;
                        case "script":
                            f = Q.createElement("div"),
                            f.innerHTML = "<script><\/script>",
                            f = f.removeChild(f.firstChild);
                            break;
                        case "select":
                            f = typeof l.is == "string" ? Q.createElement("select", {
                                is: l.is
                            }) : Q.createElement("select"),
                            l.multiple ? f.multiple = !0 : l.size && (f.size = l.size);
                            break;
                        default:
                            f = typeof l.is == "string" ? Q.createElement(c, {
                                is: l.is
                            }) : Q.createElement(c)
                        }
                    }
                    f[H] = e,
                    f[Y] = l;
                    A: for (Q = e.child; Q !== null; ) {
                        if (Q.tag === 5 || Q.tag === 6)
                            f.appendChild(Q.stateNode);
                        else if (Q.tag !== 4 && Q.tag !== 27 && Q.child !== null) {
                            Q.child.return = Q,
                            Q = Q.child;
                            continue
                        }
                        if (Q === e)
                            break A;
                        for (; Q.sibling === null; ) {
                            if (Q.return === null || Q.return === e)
                                break A;
                            Q = Q.return
                        }
                        Q.sibling.return = Q.return,
                        Q = Q.sibling
                    }
                    e.stateNode = f;
                    A: switch (xe(f, c, l),
                    c) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        l = !!l.autoFocus;
                        break A;
                    case "img":
                        l = !0;
                        break A;
                    default:
                        l = !1
                    }
                    l && Hn(e)
                }
            }
            return qA(e),
            pf(e, e.type, A === null ? null : A.memoizedProps, e.pendingProps, r),
            null;
        case 6:
            if (A && e.stateNode != null)
                A.memoizedProps !== l && Hn(e);
            else {
                if (typeof l != "string" && e.stateNode === null)
                    throw Error(n(166));
                if (A = QA.current,
                za(e)) {
                    if (A = e.stateNode,
                    r = e.memoizedProps,
                    l = null,
                    c = be,
                    c !== null)
                        switch (c.tag) {
                        case 27:
                        case 5:
                            l = c.memoizedProps
                        }
                    A[H] = e,
                    A = !!(A.nodeValue === r || l !== null && l.suppressHydrationWarning === !0 || BQ(A.nodeValue, r)),
                    A || tr(e, !0)
                } else
                    A = Hu(A).createTextNode(l),
                    A[H] = e,
                    e.stateNode = A
            }
            return qA(e),
            null;
        case 31:
            if (r = e.memoizedState,
            A === null || A.memoizedState !== null) {
                if (l = za(e),
                r !== null) {
                    if (A === null) {
                        if (!l)
                            throw Error(n(318));
                        if (A = e.memoizedState,
                        A = A !== null ? A.dehydrated : null,
                        !A)
                            throw Error(n(557));
                        A[H] = e
                    } else
                        Aa(),
                        (e.flags & 128) === 0 && (e.memoizedState = null),
                        e.flags |= 4;
                    qA(e),
                    A = !1
                } else
                    r = So(),
                    A !== null && A.memoizedState !== null && (A.memoizedState.hydrationErrors = r),
                    A = !0;
                if (!A)
                    return e.flags & 256 ? (ft(e),
                    e) : (ft(e),
                    null);
                if ((e.flags & 128) !== 0)
                    throw Error(n(558))
            }
            return qA(e),
            null;
        case 13:
            if (l = e.memoizedState,
            A === null || A.memoizedState !== null && A.memoizedState.dehydrated !== null) {
                if (c = za(e),
                l !== null && l.dehydrated !== null) {
                    if (A === null) {
                        if (!c)
                            throw Error(n(318));
                        if (c = e.memoizedState,
                        c = c !== null ? c.dehydrated : null,
                        !c)
                            throw Error(n(317));
                        c[H] = e
                    } else
                        Aa(),
                        (e.flags & 128) === 0 && (e.memoizedState = null),
                        e.flags |= 4;
                    qA(e),
                    c = !1
                } else
                    c = So(),
                    A !== null && A.memoizedState !== null && (A.memoizedState.hydrationErrors = c),
                    c = !0;
                if (!c)
                    return e.flags & 256 ? (ft(e),
                    e) : (ft(e),
                    null)
            }
            return ft(e),
            (e.flags & 128) !== 0 ? (e.lanes = r,
            e) : (r = l !== null,
            A = A !== null && A.memoizedState !== null,
            r && (l = e.child,
            c = null,
            l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (c = l.alternate.memoizedState.cachePool.pool),
            f = null,
            l.memoizedState !== null && l.memoizedState.cachePool !== null && (f = l.memoizedState.cachePool.pool),
            f !== c && (l.flags |= 2048)),
            r !== A && r && (e.child.flags |= 8192),
            Bu(e, e.updateQueue),
            qA(e),
            null);
        case 4:
            return WA(),
            A === null && zf(e.stateNode.containerInfo),
            qA(e),
            null;
        case 10:
            return yn(e.type),
            qA(e),
            null;
        case 19:
            if (X(se),
            l = e.memoizedState,
            l === null)
                return qA(e),
                null;
            if (c = (e.flags & 128) !== 0,
            f = l.rendering,
            f === null)
                if (c)
                    dl(l, !1);
                else {
                    if (ie !== 0 || A !== null && (A.flags & 128) !== 0)
                        for (A = e.child; A !== null; ) {
                            if (f = Au(A),
                            f !== null) {
                                for (e.flags |= 128,
                                dl(l, !1),
                                A = f.updateQueue,
                                e.updateQueue = A,
                                Bu(e, A),
                                e.subtreeFlags = 0,
                                A = r,
                                r = e.child; r !== null; )
                                    Yg(r, A),
                                    r = r.sibling;
                                return P(se, se.current & 1 | 2),
                                TA && mn(e, l.treeForkCount),
                                e.child
                            }
                            A = A.sibling
                        }
                    l.tail !== null && Ce() > wu && (e.flags |= 128,
                    c = !0,
                    dl(l, !1),
                    e.lanes = 4194304)
                }
            else {
                if (!c)
                    if (A = Au(f),
                    A !== null) {
                        if (e.flags |= 128,
                        c = !0,
                        A = A.updateQueue,
                        e.updateQueue = A,
                        Bu(e, A),
                        dl(l, !0),
                        l.tail === null && l.tailMode === "hidden" && !f.alternate && !TA)
                            return qA(e),
                            null
                    } else
                        2 * Ce() - l.renderingStartTime > wu && r !== 536870912 && (e.flags |= 128,
                        c = !0,
                        dl(l, !1),
                        e.lanes = 4194304);
                l.isBackwards ? (f.sibling = e.child,
                e.child = f) : (A = l.last,
                A !== null ? A.sibling = f : e.child = f,
                l.last = f)
            }
            return l.tail !== null ? (A = l.tail,
            l.rendering = A,
            l.tail = A.sibling,
            l.renderingStartTime = Ce(),
            A.sibling = null,
            r = se.current,
            P(se, c ? r & 1 | 2 : r & 1),
            TA && mn(e, l.treeForkCount),
            A) : (qA(e),
            null);
        case 22:
        case 23:
            return ft(e),
            zo(),
            l = e.memoizedState !== null,
            A !== null ? A.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192),
            l ? (r & 536870912) !== 0 && (e.flags & 128) === 0 && (qA(e),
            e.subtreeFlags & 6 && (e.flags |= 8192)) : qA(e),
            r = e.updateQueue,
            r !== null && Bu(e, r.retryQueue),
            r = null,
            A !== null && A.memoizedState !== null && A.memoizedState.cachePool !== null && (r = A.memoizedState.cachePool.pool),
            l = null,
            e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool),
            l !== r && (e.flags |= 2048),
            A !== null && X(na),
            null;
        case 24:
            return r = null,
            A !== null && (r = A.memoizedState.cache),
            e.memoizedState.cache !== r && (e.flags |= 2048),
            yn(Be),
            qA(e),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(n(156, e.tag))
    }
    function Gm(A, e) {
        switch (Ho(e),
        e.tag) {
        case 1:
            return A = e.flags,
            A & 65536 ? (e.flags = A & -65537 | 128,
            e) : null;
        case 3:
            return yn(Be),
            WA(),
            A = e.flags,
            (A & 65536) !== 0 && (A & 128) === 0 ? (e.flags = A & -65537 | 128,
            e) : null;
        case 26:
        case 27:
        case 5:
            return Vr(e),
            null;
        case 31:
            if (e.memoizedState !== null) {
                if (ft(e),
                e.alternate === null)
                    throw Error(n(340));
                Aa()
            }
            return A = e.flags,
            A & 65536 ? (e.flags = A & -65537 | 128,
            e) : null;
        case 13:
            if (ft(e),
            A = e.memoizedState,
            A !== null && A.dehydrated !== null) {
                if (e.alternate === null)
                    throw Error(n(340));
                Aa()
            }
            return A = e.flags,
            A & 65536 ? (e.flags = A & -65537 | 128,
            e) : null;
        case 19:
            return X(se),
            null;
        case 4:
            return WA(),
            null;
        case 10:
            return yn(e.type),
            null;
        case 22:
        case 23:
            return ft(e),
            zo(),
            A !== null && X(na),
            A = e.flags,
            A & 65536 ? (e.flags = A & -65537 | 128,
            e) : null;
        case 24:
            return yn(Be),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function w0(A, e) {
        switch (Ho(e),
        e.tag) {
        case 3:
            yn(Be),
            WA();
            break;
        case 26:
        case 27:
        case 5:
            Vr(e);
            break;
        case 4:
            WA();
            break;
        case 31:
            e.memoizedState !== null && ft(e);
            break;
        case 13:
            ft(e);
            break;
        case 19:
            X(se);
            break;
        case 10:
            yn(e.type);
            break;
        case 22:
        case 23:
            ft(e),
            zo(),
            A !== null && X(na);
            break;
        case 24:
            yn(Be)
        }
    }
    function Ql(A, e) {
        try {
            var r = e.updateQueue
              , l = r !== null ? r.lastEffect : null;
            if (l !== null) {
                var c = l.next;
                r = c;
                do {
                    if ((r.tag & A) === A) {
                        l = void 0;
                        var f = r.create
                          , Q = r.inst;
                        l = f(),
                        Q.destroy = l
                    }
                    r = r.next
                } while (r !== c)
            }
        } catch (U) {
            NA(e, e.return, U)
        }
    }
    function ur(A, e, r) {
        try {
            var l = e.updateQueue
              , c = l !== null ? l.lastEffect : null;
            if (c !== null) {
                var f = c.next;
                l = f;
                do {
                    if ((l.tag & A) === A) {
                        var Q = l.inst
                          , U = Q.destroy;
                        if (U !== void 0) {
                            Q.destroy = void 0,
                            c = e;
                            var F = r
                              , I = U;
                            try {
                                I()
                            } catch (J) {
                                NA(c, F, J)
                            }
                        }
                    }
                    l = l.next
                } while (l !== f)
            }
        } catch (J) {
            NA(e, e.return, J)
        }
    }
    function C0(A) {
        var e = A.updateQueue;
        if (e !== null) {
            var r = A.stateNode;
            try {
                ud(e, r)
            } catch (l) {
                NA(A, A.return, l)
            }
        }
    }
    function U0(A, e, r) {
        r.props = sa(A.type, A.memoizedProps),
        r.state = A.memoizedState;
        try {
            r.componentWillUnmount()
        } catch (l) {
            NA(A, e, l)
        }
    }
    function wl(A, e) {
        try {
            var r = A.ref;
            if (r !== null) {
                switch (A.tag) {
                case 26:
                case 27:
                case 5:
                    var l = A.stateNode;
                    break;
                case 30:
                    l = A.stateNode;
                    break;
                default:
                    l = A.stateNode
                }
                typeof r == "function" ? A.refCleanup = r(l) : r.current = l
            }
        } catch (c) {
            NA(A, e, c)
        }
    }
    function rn(A, e) {
        var r = A.ref
          , l = A.refCleanup;
        if (r !== null)
            if (typeof l == "function")
                try {
                    l()
                } catch (c) {
                    NA(A, e, c)
                } finally {
                    A.refCleanup = null,
                    A = A.alternate,
                    A != null && (A.refCleanup = null)
                }
            else if (typeof r == "function")
                try {
                    r(null)
                } catch (c) {
                    NA(A, e, c)
                }
            else
                r.current = null
    }
    function p0(A) {
        var e = A.type
          , r = A.memoizedProps
          , l = A.stateNode;
        try {
            A: switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                r.autoFocus && l.focus();
                break A;
            case "img":
                r.src ? l.src = r.src : r.srcSet && (l.srcset = r.srcSet)
            }
        } catch (c) {
            NA(A, A.return, c)
        }
    }
    function mf(A, e, r) {
        try {
            var l = A.stateNode;
            uv(l, A.type, r, e),
            l[Y] = e
        } catch (c) {
            NA(A, A.return, c)
        }
    }
    function m0(A) {
        return A.tag === 5 || A.tag === 3 || A.tag === 26 || A.tag === 27 && dr(A.type) || A.tag === 4
    }
    function vf(A) {
        A: for (; ; ) {
            for (; A.sibling === null; ) {
                if (A.return === null || m0(A.return))
                    return null;
                A = A.return
            }
            for (A.sibling.return = A.return,
            A = A.sibling; A.tag !== 5 && A.tag !== 6 && A.tag !== 18; ) {
                if (A.tag === 27 && dr(A.type) || A.flags & 2 || A.child === null || A.tag === 4)
                    continue A;
                A.child.return = A,
                A = A.child
            }
            if (!(A.flags & 2))
                return A.stateNode
        }
    }
    function yf(A, e, r) {
        var l = A.tag;
        if (l === 5 || l === 6)
            A = A.stateNode,
            e ? (r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r).insertBefore(A, e) : (e = r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r,
            e.appendChild(A),
            r = r._reactRootContainer,
            r != null || e.onclick !== null || (e.onclick = Cn));
        else if (l !== 4 && (l === 27 && dr(A.type) && (r = A.stateNode,
        e = null),
        A = A.child,
        A !== null))
            for (yf(A, e, r),
            A = A.sibling; A !== null; )
                yf(A, e, r),
                A = A.sibling
    }
    function hu(A, e, r) {
        var l = A.tag;
        if (l === 5 || l === 6)
            A = A.stateNode,
            e ? r.insertBefore(A, e) : r.appendChild(A);
        else if (l !== 4 && (l === 27 && dr(A.type) && (r = A.stateNode),
        A = A.child,
        A !== null))
            for (hu(A, e, r),
            A = A.sibling; A !== null; )
                hu(A, e, r),
                A = A.sibling
    }
    function v0(A) {
        var e = A.stateNode
          , r = A.memoizedProps;
        try {
            for (var l = A.type, c = e.attributes; c.length; )
                e.removeAttributeNode(c[0]);
            xe(e, l, r),
            e[H] = A,
            e[Y] = r
        } catch (f) {
            NA(A, A.return, f)
        }
    }
    var bn = !1
      , de = !1
      , Ff = !1
      , y0 = typeof WeakSet == "function" ? WeakSet : Set
      , Ee = null;
    function Vm(A, e) {
        if (A = A.containerInfo,
        Jf = Ou,
        A = Mg(A),
        Qo(A)) {
            if ("selectionStart"in A)
                var r = {
                    start: A.selectionStart,
                    end: A.selectionEnd
                };
            else
                A: {
                    r = (r = A.ownerDocument) && r.defaultView || window;
                    var l = r.getSelection && r.getSelection();
                    if (l && l.rangeCount !== 0) {
                        r = l.anchorNode;
                        var c = l.anchorOffset
                          , f = l.focusNode;
                        l = l.focusOffset;
                        try {
                            r.nodeType,
                            f.nodeType
                        } catch {
                            r = null;
                            break A
                        }
                        var Q = 0
                          , U = -1
                          , F = -1
                          , I = 0
                          , J = 0
                          , q = A
                          , R = null;
                        e: for (; ; ) {
                            for (var z; q !== r || c !== 0 && q.nodeType !== 3 || (U = Q + c),
                            q !== f || l !== 0 && q.nodeType !== 3 || (F = Q + l),
                            q.nodeType === 3 && (Q += q.nodeValue.length),
                            (z = q.firstChild) !== null; )
                                R = q,
                                q = z;
                            for (; ; ) {
                                if (q === A)
                                    break e;
                                if (R === r && ++I === c && (U = Q),
                                R === f && ++J === l && (F = Q),
                                (z = q.nextSibling) !== null)
                                    break;
                                q = R,
                                R = q.parentNode
                            }
                            q = z
                        }
                        r = U === -1 || F === -1 ? null : {
                            start: U,
                            end: F
                        }
                    } else
                        r = null
                }
            r = r || {
                start: 0,
                end: 0
            }
        } else
            r = null;
        for (kf = {
            focusedElem: A,
            selectionRange: r
        },
        Ou = !1,
        Ee = e; Ee !== null; )
            if (e = Ee,
            A = e.child,
            (e.subtreeFlags & 1028) !== 0 && A !== null)
                A.return = e,
                Ee = A;
            else
                for (; Ee !== null; ) {
                    switch (e = Ee,
                    f = e.alternate,
                    A = e.flags,
                    e.tag) {
                    case 0:
                        if ((A & 4) !== 0 && (A = e.updateQueue,
                        A = A !== null ? A.events : null,
                        A !== null))
                            for (r = 0; r < A.length; r++)
                                c = A[r],
                                c.ref.impl = c.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((A & 1024) !== 0 && f !== null) {
                            A = void 0,
                            r = e,
                            c = f.memoizedProps,
                            f = f.memoizedState,
                            l = r.stateNode;
                            try {
                                var sA = sa(r.type, c);
                                A = l.getSnapshotBeforeUpdate(sA, f),
                                l.__reactInternalSnapshotBeforeUpdate = A
                            } catch (gA) {
                                NA(r, r.return, gA)
                            }
                        }
                        break;
                    case 3:
                        if ((A & 1024) !== 0) {
                            if (A = e.stateNode.containerInfo,
                            r = A.nodeType,
                            r === 9)
                                qf(A);
                            else if (r === 1)
                                switch (A.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    qf(A);
                                    break;
                                default:
                                    A.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((A & 1024) !== 0)
                            throw Error(n(163))
                    }
                    if (A = e.sibling,
                    A !== null) {
                        A.return = e.return,
                        Ee = A;
                        break
                    }
                    Ee = e.return
                }
    }
    function F0(A, e, r) {
        var l = r.flags;
        switch (r.tag) {
        case 0:
        case 11:
        case 15:
            Tn(A, r),
            l & 4 && Ql(5, r);
            break;
        case 1:
            if (Tn(A, r),
            l & 4)
                if (A = r.stateNode,
                e === null)
                    try {
                        A.componentDidMount()
                    } catch (Q) {
                        NA(r, r.return, Q)
                    }
                else {
                    var c = sa(r.type, e.memoizedProps);
                    e = e.memoizedState;
                    try {
                        A.componentDidUpdate(c, e, A.__reactInternalSnapshotBeforeUpdate)
                    } catch (Q) {
                        NA(r, r.return, Q)
                    }
                }
            l & 64 && C0(r),
            l & 512 && wl(r, r.return);
            break;
        case 3:
            if (Tn(A, r),
            l & 64 && (A = r.updateQueue,
            A !== null)) {
                if (e = null,
                r.child !== null)
                    switch (r.child.tag) {
                    case 27:
                    case 5:
                        e = r.child.stateNode;
                        break;
                    case 1:
                        e = r.child.stateNode
                    }
                try {
                    ud(A, e)
                } catch (Q) {
                    NA(r, r.return, Q)
                }
            }
            break;
        case 27:
            e === null && l & 4 && v0(r);
        case 26:
        case 5:
            Tn(A, r),
            e === null && l & 4 && p0(r),
            l & 512 && wl(r, r.return);
            break;
        case 12:
            Tn(A, r);
            break;
        case 31:
            Tn(A, r),
            l & 4 && H0(A, r);
            break;
        case 13:
            Tn(A, r),
            l & 4 && b0(A, r),
            l & 64 && (A = r.memoizedState,
            A !== null && (A = A.dehydrated,
            A !== null && (r = Wm.bind(null, r),
            Qv(A, r))));
            break;
        case 22:
            if (l = r.memoizedState !== null || bn,
            !l) {
                e = e !== null && e.memoizedState !== null || de,
                c = bn;
                var f = de;
                bn = l,
                (de = e) && !f ? xn(A, r, (r.subtreeFlags & 8772) !== 0) : Tn(A, r),
                bn = c,
                de = f
            }
            break;
        case 30:
            break;
        default:
            Tn(A, r)
        }
    }
    function E0(A) {
        var e = A.alternate;
        e !== null && (A.alternate = null,
        E0(e)),
        A.child = null,
        A.deletions = null,
        A.sibling = null,
        A.tag === 5 && (e = A.stateNode,
        e !== null && LA(e)),
        A.stateNode = null,
        A.return = null,
        A.dependencies = null,
        A.memoizedProps = null,
        A.memoizedState = null,
        A.pendingProps = null,
        A.stateNode = null,
        A.updateQueue = null
    }
    var PA = null
      , qe = !1;
    function Sn(A, e, r) {
        for (r = r.child; r !== null; )
            _0(A, e, r),
            r = r.sibling
    }
    function _0(A, e, r) {
        if (Fe && typeof Fe.onCommitFiberUnmount == "function")
            try {
                Fe.onCommitFiberUnmount(Wt, r)
            } catch {}
        switch (r.tag) {
        case 26:
            de || rn(r, e),
            Sn(A, e, r),
            r.memoizedState ? r.memoizedState.count-- : r.stateNode && (r = r.stateNode,
            r.parentNode.removeChild(r));
            break;
        case 27:
            de || rn(r, e);
            var l = PA
              , c = qe;
            dr(r.type) && (PA = r.stateNode,
            qe = !1),
            Sn(A, e, r),
            _l(r.stateNode),
            PA = l,
            qe = c;
            break;
        case 5:
            de || rn(r, e);
        case 6:
            if (l = PA,
            c = qe,
            PA = null,
            Sn(A, e, r),
            PA = l,
            qe = c,
            PA !== null)
                if (qe)
                    try {
                        (PA.nodeType === 9 ? PA.body : PA.nodeName === "HTML" ? PA.ownerDocument.body : PA).removeChild(r.stateNode)
                    } catch (f) {
                        NA(r, e, f)
                    }
                else
                    try {
                        PA.removeChild(r.stateNode)
                    } catch (f) {
                        NA(r, e, f)
                    }
            break;
        case 18:
            PA !== null && (qe ? (A = PA,
            CQ(A.nodeType === 9 ? A.body : A.nodeName === "HTML" ? A.ownerDocument.body : A, r.stateNode),
            ci(A)) : CQ(PA, r.stateNode));
            break;
        case 4:
            l = PA,
            c = qe,
            PA = r.stateNode.containerInfo,
            qe = !0,
            Sn(A, e, r),
            PA = l,
            qe = c;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            ur(2, r, e),
            de || ur(4, r, e),
            Sn(A, e, r);
            break;
        case 1:
            de || (rn(r, e),
            l = r.stateNode,
            typeof l.componentWillUnmount == "function" && U0(r, e, l)),
            Sn(A, e, r);
            break;
        case 21:
            Sn(A, e, r);
            break;
        case 22:
            de = (l = de) || r.memoizedState !== null,
            Sn(A, e, r),
            de = l;
            break;
        default:
            Sn(A, e, r)
        }
    }
    function H0(A, e) {
        if (e.memoizedState === null && (A = e.alternate,
        A !== null && (A = A.memoizedState,
        A !== null))) {
            A = A.dehydrated;
            try {
                ci(A)
            } catch (r) {
                NA(e, e.return, r)
            }
        }
    }
    function b0(A, e) {
        if (e.memoizedState === null && (A = e.alternate,
        A !== null && (A = A.memoizedState,
        A !== null && (A = A.dehydrated,
        A !== null))))
            try {
                ci(A)
            } catch (r) {
                NA(e, e.return, r)
            }
    }
    function zm(A) {
        switch (A.tag) {
        case 31:
        case 13:
        case 19:
            var e = A.stateNode;
            return e === null && (e = A.stateNode = new y0),
            e;
        case 22:
            return A = A.stateNode,
            e = A._retryCache,
            e === null && (e = A._retryCache = new y0),
            e;
        default:
            throw Error(n(435, A.tag))
        }
    }
    function gu(A, e) {
        var r = zm(A);
        e.forEach(function(l) {
            if (!r.has(l)) {
                r.add(l);
                var c = Pm.bind(null, A, l);
                l.then(c, c)
            }
        })
    }
    function We(A, e) {
        var r = e.deletions;
        if (r !== null)
            for (var l = 0; l < r.length; l++) {
                var c = r[l]
                  , f = A
                  , Q = e
                  , U = Q;
                A: for (; U !== null; ) {
                    switch (U.tag) {
                    case 27:
                        if (dr(U.type)) {
                            PA = U.stateNode,
                            qe = !1;
                            break A
                        }
                        break;
                    case 5:
                        PA = U.stateNode,
                        qe = !1;
                        break A;
                    case 3:
                    case 4:
                        PA = U.stateNode.containerInfo,
                        qe = !0;
                        break A
                    }
                    U = U.return
                }
                if (PA === null)
                    throw Error(n(160));
                _0(f, Q, c),
                PA = null,
                qe = !1,
                f = c.alternate,
                f !== null && (f.return = null),
                c.return = null
            }
        if (e.subtreeFlags & 13886)
            for (e = e.child; e !== null; )
                S0(e, A),
                e = e.sibling
    }
    var Yt = null;
    function S0(A, e) {
        var r = A.alternate
          , l = A.flags;
        switch (A.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            We(e, A),
            Pe(A),
            l & 4 && (ur(3, A, A.return),
            Ql(3, A),
            ur(5, A, A.return));
            break;
        case 1:
            We(e, A),
            Pe(A),
            l & 512 && (de || r === null || rn(r, r.return)),
            l & 64 && bn && (A = A.updateQueue,
            A !== null && (l = A.callbacks,
            l !== null && (r = A.shared.hiddenCallbacks,
            A.shared.hiddenCallbacks = r === null ? l : r.concat(l))));
            break;
        case 26:
            var c = Yt;
            if (We(e, A),
            Pe(A),
            l & 512 && (de || r === null || rn(r, r.return)),
            l & 4) {
                var f = r !== null ? r.memoizedState : null;
                if (l = A.memoizedState,
                r === null)
                    if (l === null)
                        if (A.stateNode === null) {
                            A: {
                                l = A.type,
                                r = A.memoizedProps,
                                c = c.ownerDocument || c;
                                e: switch (l) {
                                case "title":
                                    f = c.getElementsByTagName("title")[0],
                                    (!f || f[FA] || f[H] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = c.createElement(l),
                                    c.head.insertBefore(f, c.querySelector("head > title"))),
                                    xe(f, l, r),
                                    f[H] = A,
                                    re(f),
                                    l = f;
                                    break A;
                                case "link":
                                    var Q = SQ("link", "href", c).get(l + (r.href || ""));
                                    if (Q) {
                                        for (var U = 0; U < Q.length; U++)
                                            if (f = Q[U],
                                            f.getAttribute("href") === (r.href == null || r.href === "" ? null : r.href) && f.getAttribute("rel") === (r.rel == null ? null : r.rel) && f.getAttribute("title") === (r.title == null ? null : r.title) && f.getAttribute("crossorigin") === (r.crossOrigin == null ? null : r.crossOrigin)) {
                                                Q.splice(U, 1);
                                                break e
                                            }
                                    }
                                    f = c.createElement(l),
                                    xe(f, l, r),
                                    c.head.appendChild(f);
                                    break;
                                case "meta":
                                    if (Q = SQ("meta", "content", c).get(l + (r.content || ""))) {
                                        for (U = 0; U < Q.length; U++)
                                            if (f = Q[U],
                                            f.getAttribute("content") === (r.content == null ? null : "" + r.content) && f.getAttribute("name") === (r.name == null ? null : r.name) && f.getAttribute("property") === (r.property == null ? null : r.property) && f.getAttribute("http-equiv") === (r.httpEquiv == null ? null : r.httpEquiv) && f.getAttribute("charset") === (r.charSet == null ? null : r.charSet)) {
                                                Q.splice(U, 1);
                                                break e
                                            }
                                    }
                                    f = c.createElement(l),
                                    xe(f, l, r),
                                    c.head.appendChild(f);
                                    break;
                                default:
                                    throw Error(n(468, l))
                                }
                                f[H] = A,
                                re(f),
                                l = f
                            }
                            A.stateNode = l
                        } else
                            TQ(c, A.type, A.stateNode);
                    else
                        A.stateNode = bQ(c, l, A.memoizedProps);
                else
                    f !== l ? (f === null ? r.stateNode !== null && (r = r.stateNode,
                    r.parentNode.removeChild(r)) : f.count--,
                    l === null ? TQ(c, A.type, A.stateNode) : bQ(c, l, A.memoizedProps)) : l === null && A.stateNode !== null && mf(A, A.memoizedProps, r.memoizedProps)
            }
            break;
        case 27:
            We(e, A),
            Pe(A),
            l & 512 && (de || r === null || rn(r, r.return)),
            r !== null && l & 4 && mf(A, A.memoizedProps, r.memoizedProps);
            break;
        case 5:
            if (We(e, A),
            Pe(A),
            l & 512 && (de || r === null || rn(r, r.return)),
            A.flags & 32) {
                c = A.stateNode;
                try {
                    Da(c, "")
                } catch (sA) {
                    NA(A, A.return, sA)
                }
            }
            l & 4 && A.stateNode != null && (c = A.memoizedProps,
            mf(A, c, r !== null ? r.memoizedProps : c)),
            l & 1024 && (Ff = !0);
            break;
        case 6:
            if (We(e, A),
            Pe(A),
            l & 4) {
                if (A.stateNode === null)
                    throw Error(n(162));
                l = A.memoizedProps,
                r = A.stateNode;
                try {
                    r.nodeValue = l
                } catch (sA) {
                    NA(A, A.return, sA)
                }
            }
            break;
        case 3:
            if (Tu = null,
            c = Yt,
            Yt = bu(e.containerInfo),
            We(e, A),
            Yt = c,
            Pe(A),
            l & 4 && r !== null && r.memoizedState.isDehydrated)
                try {
                    ci(e.containerInfo)
                } catch (sA) {
                    NA(A, A.return, sA)
                }
            Ff && (Ff = !1,
            T0(A));
            break;
        case 4:
            l = Yt,
            Yt = bu(A.stateNode.containerInfo),
            We(e, A),
            Pe(A),
            Yt = l;
            break;
        case 12:
            We(e, A),
            Pe(A);
            break;
        case 31:
            We(e, A),
            Pe(A),
            l & 4 && (l = A.updateQueue,
            l !== null && (A.updateQueue = null,
            gu(A, l)));
            break;
        case 13:
            We(e, A),
            Pe(A),
            A.child.flags & 8192 && A.memoizedState !== null != (r !== null && r.memoizedState !== null) && (Qu = Ce()),
            l & 4 && (l = A.updateQueue,
            l !== null && (A.updateQueue = null,
            gu(A, l)));
            break;
        case 22:
            c = A.memoizedState !== null;
            var F = r !== null && r.memoizedState !== null
              , I = bn
              , J = de;
            if (bn = I || c,
            de = J || F,
            We(e, A),
            de = J,
            bn = I,
            Pe(A),
            l & 8192)
                A: for (e = A.stateNode,
                e._visibility = c ? e._visibility & -2 : e._visibility | 1,
                c && (r === null || F || bn || de || ua(A)),
                r = null,
                e = A; ; ) {
                    if (e.tag === 5 || e.tag === 26) {
                        if (r === null) {
                            F = r = e;
                            try {
                                if (f = F.stateNode,
                                c)
                                    Q = f.style,
                                    typeof Q.setProperty == "function" ? Q.setProperty("display", "none", "important") : Q.display = "none";
                                else {
                                    U = F.stateNode;
                                    var q = F.memoizedProps.style
                                      , R = q != null && q.hasOwnProperty("display") ? q.display : null;
                                    U.style.display = R == null || typeof R == "boolean" ? "" : ("" + R).trim()
                                }
                            } catch (sA) {
                                NA(F, F.return, sA)
                            }
                        }
                    } else if (e.tag === 6) {
                        if (r === null) {
                            F = e;
                            try {
                                F.stateNode.nodeValue = c ? "" : F.memoizedProps
                            } catch (sA) {
                                NA(F, F.return, sA)
                            }
                        }
                    } else if (e.tag === 18) {
                        if (r === null) {
                            F = e;
                            try {
                                var z = F.stateNode;
                                c ? UQ(z, !0) : UQ(F.stateNode, !1)
                            } catch (sA) {
                                NA(F, F.return, sA)
                            }
                        }
                    } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === A) && e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === A)
                        break A;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === A)
                            break A;
                        r === e && (r = null),
                        e = e.return
                    }
                    r === e && (r = null),
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            l & 4 && (l = A.updateQueue,
            l !== null && (r = l.retryQueue,
            r !== null && (l.retryQueue = null,
            gu(A, r))));
            break;
        case 19:
            We(e, A),
            Pe(A),
            l & 4 && (l = A.updateQueue,
            l !== null && (A.updateQueue = null,
            gu(A, l)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            We(e, A),
            Pe(A)
        }
    }
    function Pe(A) {
        var e = A.flags;
        if (e & 2) {
            try {
                for (var r, l = A.return; l !== null; ) {
                    if (m0(l)) {
                        r = l;
                        break
                    }
                    l = l.return
                }
                if (r == null)
                    throw Error(n(160));
                switch (r.tag) {
                case 27:
                    var c = r.stateNode
                      , f = vf(A);
                    hu(A, f, c);
                    break;
                case 5:
                    var Q = r.stateNode;
                    r.flags & 32 && (Da(Q, ""),
                    r.flags &= -33);
                    var U = vf(A);
                    hu(A, U, Q);
                    break;
                case 3:
                case 4:
                    var F = r.stateNode.containerInfo
                      , I = vf(A);
                    yf(A, I, F);
                    break;
                default:
                    throw Error(n(161))
                }
            } catch (J) {
                NA(A, A.return, J)
            }
            A.flags &= -3
        }
        e & 4096 && (A.flags &= -4097)
    }
    function T0(A) {
        if (A.subtreeFlags & 1024)
            for (A = A.child; A !== null; ) {
                var e = A;
                T0(e),
                e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
                A = A.sibling
            }
    }
    function Tn(A, e) {
        if (e.subtreeFlags & 8772)
            for (e = e.child; e !== null; )
                F0(A, e.alternate, e),
                e = e.sibling
    }
    function ua(A) {
        for (A = A.child; A !== null; ) {
            var e = A;
            switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                ur(4, e, e.return),
                ua(e);
                break;
            case 1:
                rn(e, e.return);
                var r = e.stateNode;
                typeof r.componentWillUnmount == "function" && U0(e, e.return, r),
                ua(e);
                break;
            case 27:
                _l(e.stateNode);
            case 26:
            case 5:
                rn(e, e.return),
                ua(e);
                break;
            case 22:
                e.memoizedState === null && ua(e);
                break;
            case 30:
                ua(e);
                break;
            default:
                ua(e)
            }
            A = A.sibling
        }
    }
    function xn(A, e, r) {
        for (r = r && (e.subtreeFlags & 8772) !== 0,
        e = e.child; e !== null; ) {
            var l = e.alternate
              , c = A
              , f = e
              , Q = f.flags;
            switch (f.tag) {
            case 0:
            case 11:
            case 15:
                xn(c, f, r),
                Ql(4, f);
                break;
            case 1:
                if (xn(c, f, r),
                l = f,
                c = l.stateNode,
                typeof c.componentDidMount == "function")
                    try {
                        c.componentDidMount()
                    } catch (I) {
                        NA(l, l.return, I)
                    }
                if (l = f,
                c = l.updateQueue,
                c !== null) {
                    var U = l.stateNode;
                    try {
                        var F = c.shared.hiddenCallbacks;
                        if (F !== null)
                            for (c.shared.hiddenCallbacks = null,
                            c = 0; c < F.length; c++)
                                sd(F[c], U)
                    } catch (I) {
                        NA(l, l.return, I)
                    }
                }
                r && Q & 64 && C0(f),
                wl(f, f.return);
                break;
            case 27:
                v0(f);
            case 26:
            case 5:
                xn(c, f, r),
                r && l === null && Q & 4 && p0(f),
                wl(f, f.return);
                break;
            case 12:
                xn(c, f, r);
                break;
            case 31:
                xn(c, f, r),
                r && Q & 4 && H0(c, f);
                break;
            case 13:
                xn(c, f, r),
                r && Q & 4 && b0(c, f);
                break;
            case 22:
                f.memoizedState === null && xn(c, f, r),
                wl(f, f.return);
                break;
            case 30:
                break;
            default:
                xn(c, f, r)
            }
            e = e.sibling
        }
    }
    function Ef(A, e) {
        var r = null;
        A !== null && A.memoizedState !== null && A.memoizedState.cachePool !== null && (r = A.memoizedState.cachePool.pool),
        A = null,
        e.memoizedState !== null && e.memoizedState.cachePool !== null && (A = e.memoizedState.cachePool.pool),
        A !== r && (A != null && A.refCount++,
        r != null && rl(r))
    }
    function _f(A, e) {
        A = null,
        e.alternate !== null && (A = e.alternate.memoizedState.cache),
        e = e.memoizedState.cache,
        e !== A && (e.refCount++,
        A != null && rl(A))
    }
    function Jt(A, e, r, l) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                x0(A, e, r, l),
                e = e.sibling
    }
    function x0(A, e, r, l) {
        var c = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Jt(A, e, r, l),
            c & 2048 && Ql(9, e);
            break;
        case 1:
            Jt(A, e, r, l);
            break;
        case 3:
            Jt(A, e, r, l),
            c & 2048 && (A = null,
            e.alternate !== null && (A = e.alternate.memoizedState.cache),
            e = e.memoizedState.cache,
            e !== A && (e.refCount++,
            A != null && rl(A)));
            break;
        case 12:
            if (c & 2048) {
                Jt(A, e, r, l),
                A = e.stateNode;
                try {
                    var f = e.memoizedProps
                      , Q = f.id
                      , U = f.onPostCommit;
                    typeof U == "function" && U(Q, e.alternate === null ? "mount" : "update", A.passiveEffectDuration, -0)
                } catch (F) {
                    NA(e, e.return, F)
                }
            } else
                Jt(A, e, r, l);
            break;
        case 31:
            Jt(A, e, r, l);
            break;
        case 13:
            Jt(A, e, r, l);
            break;
        case 23:
            break;
        case 22:
            f = e.stateNode,
            Q = e.alternate,
            e.memoizedState !== null ? f._visibility & 2 ? Jt(A, e, r, l) : Cl(A, e) : f._visibility & 2 ? Jt(A, e, r, l) : (f._visibility |= 2,
            $a(A, e, r, l, (e.subtreeFlags & 10256) !== 0 || !1)),
            c & 2048 && Ef(Q, e);
            break;
        case 24:
            Jt(A, e, r, l),
            c & 2048 && _f(e.alternate, e);
            break;
        default:
            Jt(A, e, r, l)
        }
    }
    function $a(A, e, r, l, c) {
        for (c = c && ((e.subtreeFlags & 10256) !== 0 || !1),
        e = e.child; e !== null; ) {
            var f = A
              , Q = e
              , U = r
              , F = l
              , I = Q.flags;
            switch (Q.tag) {
            case 0:
            case 11:
            case 15:
                $a(f, Q, U, F, c),
                Ql(8, Q);
                break;
            case 23:
                break;
            case 22:
                var J = Q.stateNode;
                Q.memoizedState !== null ? J._visibility & 2 ? $a(f, Q, U, F, c) : Cl(f, Q) : (J._visibility |= 2,
                $a(f, Q, U, F, c)),
                c && I & 2048 && Ef(Q.alternate, Q);
                break;
            case 24:
                $a(f, Q, U, F, c),
                c && I & 2048 && _f(Q.alternate, Q);
                break;
            default:
                $a(f, Q, U, F, c)
            }
            e = e.sibling
        }
    }
    function Cl(A, e) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; ) {
                var r = A
                  , l = e
                  , c = l.flags;
                switch (l.tag) {
                case 22:
                    Cl(r, l),
                    c & 2048 && Ef(l.alternate, l);
                    break;
                case 24:
                    Cl(r, l),
                    c & 2048 && _f(l.alternate, l);
                    break;
                default:
                    Cl(r, l)
                }
                e = e.sibling
            }
    }
    var Ul = 8192;
    function Ai(A, e, r) {
        if (A.subtreeFlags & Ul)
            for (A = A.child; A !== null; )
                D0(A, e, r),
                A = A.sibling
    }
    function D0(A, e, r) {
        switch (A.tag) {
        case 26:
            Ai(A, e, r),
            A.flags & Ul && A.memoizedState !== null && bv(r, Yt, A.memoizedState, A.memoizedProps);
            break;
        case 5:
            Ai(A, e, r);
            break;
        case 3:
        case 4:
            var l = Yt;
            Yt = bu(A.stateNode.containerInfo),
            Ai(A, e, r),
            Yt = l;
            break;
        case 22:
            A.memoizedState === null && (l = A.alternate,
            l !== null && l.memoizedState !== null ? (l = Ul,
            Ul = 16777216,
            Ai(A, e, r),
            Ul = l) : Ai(A, e, r));
            break;
        default:
            Ai(A, e, r)
        }
    }
    function L0(A) {
        var e = A.alternate;
        if (e !== null && (A = e.child,
        A !== null)) {
            e.child = null;
            do
                e = A.sibling,
                A.sibling = null,
                A = e;
            while (A !== null)
        }
    }
    function pl(A) {
        var e = A.deletions;
        if ((A.flags & 16) !== 0) {
            if (e !== null)
                for (var r = 0; r < e.length; r++) {
                    var l = e[r];
                    Ee = l,
                    M0(l, A)
                }
            L0(A)
        }
        if (A.subtreeFlags & 10256)
            for (A = A.child; A !== null; )
                O0(A),
                A = A.sibling
    }
    function O0(A) {
        switch (A.tag) {
        case 0:
        case 11:
        case 15:
            pl(A),
            A.flags & 2048 && ur(9, A, A.return);
            break;
        case 3:
            pl(A);
            break;
        case 12:
            pl(A);
            break;
        case 22:
            var e = A.stateNode;
            A.memoizedState !== null && e._visibility & 2 && (A.return === null || A.return.tag !== 13) ? (e._visibility &= -3,
            du(A)) : pl(A);
            break;
        default:
            pl(A)
        }
    }
    function du(A) {
        var e = A.deletions;
        if ((A.flags & 16) !== 0) {
            if (e !== null)
                for (var r = 0; r < e.length; r++) {
                    var l = e[r];
                    Ee = l,
                    M0(l, A)
                }
            L0(A)
        }
        for (A = A.child; A !== null; ) {
            switch (e = A,
            e.tag) {
            case 0:
            case 11:
            case 15:
                ur(8, e, e.return),
                du(e);
                break;
            case 22:
                r = e.stateNode,
                r._visibility & 2 && (r._visibility &= -3,
                du(e));
                break;
            default:
                du(e)
            }
            A = A.sibling
        }
    }
    function M0(A, e) {
        for (; Ee !== null; ) {
            var r = Ee;
            switch (r.tag) {
            case 0:
            case 11:
            case 15:
                ur(8, r, e);
                break;
            case 23:
            case 22:
                if (r.memoizedState !== null && r.memoizedState.cachePool !== null) {
                    var l = r.memoizedState.cachePool.pool;
                    l != null && l.refCount++
                }
                break;
            case 24:
                rl(r.memoizedState.cache)
            }
            if (l = r.child,
            l !== null)
                l.return = r,
                Ee = l;
            else
                A: for (r = A; Ee !== null; ) {
                    l = Ee;
                    var c = l.sibling
                      , f = l.return;
                    if (E0(l),
                    l === r) {
                        Ee = null;
                        break A
                    }
                    if (c !== null) {
                        c.return = f,
                        Ee = c;
                        break A
                    }
                    Ee = f
                }
        }
    }
    var Xm = {
        getCacheForType: function(A) {
            var e = Se(Be)
              , r = e.data.get(A);
            return r === void 0 && (r = A(),
            e.data.set(A, r)),
            r
        },
        cacheSignal: function() {
            return Se(Be).controller.signal
        }
    }
      , Ym = typeof WeakMap == "function" ? WeakMap : Map
      , IA = 0
      , YA = null
      , EA = null
      , HA = 0
      , RA = 0
      , Bt = null
      , cr = !1
      , ei = !1
      , Hf = !1
      , Dn = 0
      , ie = 0
      , or = 0
      , ca = 0
      , bf = 0
      , ht = 0
      , ti = 0
      , ml = null
      , $e = null
      , Sf = !1
      , Qu = 0
      , I0 = 0
      , wu = 1 / 0
      , Cu = null
      , fr = null
      , pe = 0
      , Br = null
      , ni = null
      , Ln = 0
      , Tf = 0
      , xf = null
      , K0 = null
      , vl = 0
      , Df = null;
    function gt() {
        return (IA & 2) !== 0 && HA !== 0 ? HA & -HA : D.T !== null ? Rf() : Pn()
    }
    function R0() {
        if (ht === 0)
            if ((HA & 536870912) === 0 || TA) {
                var A = wn;
                wn <<= 1,
                (wn & 3932160) === 0 && (wn = 262144),
                ht = A
            } else
                ht = 536870912;
        return A = ot.current,
        A !== null && (A.flags |= 32),
        ht
    }
    function At(A, e, r) {
        (A === YA && (RA === 2 || RA === 9) || A.cancelPendingCommit !== null) && (ri(A, 0),
        hr(A, HA, ht, !1)),
        $t(A, r),
        ((IA & 2) === 0 || A !== YA) && (A === YA && ((IA & 2) === 0 && (ca |= r),
        ie === 4 && hr(A, HA, ht, !1)),
        an(A))
    }
    function N0(A, e, r) {
        if ((IA & 6) !== 0)
            throw Error(n(327));
        var l = !r && (e & 127) === 0 && (e & A.expiredLanes) === 0 || qn(A, e)
          , c = l ? jm(A, e) : Of(A, e, !0)
          , f = l;
        do {
            if (c === 0) {
                ei && !l && hr(A, e, 0, !1);
                break
            } else {
                if (r = A.current.alternate,
                f && !Jm(r)) {
                    c = Of(A, e, !1),
                    f = !1;
                    continue
                }
                if (c === 2) {
                    if (f = e,
                    A.errorRecoveryDisabledLanes & f)
                        var Q = 0;
                    else
                        Q = A.pendingLanes & -536870913,
                        Q = Q !== 0 ? Q : Q & 536870912 ? 536870912 : 0;
                    if (Q !== 0) {
                        e = Q;
                        A: {
                            var U = A;
                            c = ml;
                            var F = U.current.memoizedState.isDehydrated;
                            if (F && (ri(U, Q).flags |= 256),
                            Q = Of(U, Q, !1),
                            Q !== 2) {
                                if (Hf && !F) {
                                    U.errorRecoveryDisabledLanes |= f,
                                    ca |= f,
                                    c = 4;
                                    break A
                                }
                                f = $e,
                                $e = c,
                                f !== null && ($e === null ? $e = f : $e.push.apply($e, f))
                            }
                            c = Q
                        }
                        if (f = !1,
                        c !== 2)
                            continue
                    }
                }
                if (c === 1) {
                    ri(A, 0),
                    hr(A, e, 0, !0);
                    break
                }
                A: {
                    switch (l = A,
                    f = c,
                    f) {
                    case 0:
                    case 1:
                        throw Error(n(345));
                    case 4:
                        if ((e & 4194048) !== e)
                            break;
                    case 6:
                        hr(l, e, ht, !cr);
                        break A;
                    case 2:
                        $e = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(n(329))
                    }
                    if ((e & 62914560) === e && (c = Qu + 300 - Ce(),
                    10 < c)) {
                        if (hr(l, e, ht, !cr),
                        Jr(l, 0, !0) !== 0)
                            break A;
                        Ln = e,
                        l.timeoutHandle = QQ(G0.bind(null, l, r, $e, Cu, Sf, e, ht, ca, ti, cr, f, "Throttled", -0, 0), c);
                        break A
                    }
                    G0(l, r, $e, Cu, Sf, e, ht, ca, ti, cr, f, null, -0, 0)
                }
            }
            break
        } while (!0);
        an(A)
    }
    function G0(A, e, r, l, c, f, Q, U, F, I, J, q, R, z) {
        if (A.timeoutHandle = -1,
        q = e.subtreeFlags,
        q & 8192 || (q & 16785408) === 16785408) {
            q = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: Cn
            },
            D0(e, f, q);
            var sA = (f & 62914560) === f ? Qu - Ce() : (f & 4194048) === f ? I0 - Ce() : 0;
            if (sA = Sv(q, sA),
            sA !== null) {
                Ln = f,
                A.cancelPendingCommit = sA(Z0.bind(null, A, e, f, r, l, c, Q, U, F, J, q, null, R, z)),
                hr(A, f, Q, !I);
                return
            }
        }
        Z0(A, e, f, r, l, c, Q, U, F)
    }
    function Jm(A) {
        for (var e = A; ; ) {
            var r = e.tag;
            if ((r === 0 || r === 11 || r === 15) && e.flags & 16384 && (r = e.updateQueue,
            r !== null && (r = r.stores,
            r !== null)))
                for (var l = 0; l < r.length; l++) {
                    var c = r[l]
                      , f = c.getSnapshot;
                    c = c.value;
                    try {
                        if (!ut(f(), c))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (r = e.child,
            e.subtreeFlags & 16384 && r !== null)
                r.return = e,
                e = r;
            else {
                if (e === A)
                    break;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === A)
                        return !0;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        }
        return !0
    }
    function hr(A, e, r, l) {
        e &= ~bf,
        e &= ~ca,
        A.suspendedLanes |= e,
        A.pingedLanes &= ~e,
        l && (A.warmLanes |= e),
        l = A.expirationTimes;
        for (var c = e; 0 < c; ) {
            var f = 31 - Ie(c)
              , Q = 1 << f;
            l[f] = -1,
            c &= ~Q
        }
        r !== 0 && Vi(A, r, e)
    }
    function Uu() {
        return (IA & 6) === 0 ? (yl(0),
        !1) : !0
    }
    function Lf() {
        if (EA !== null) {
            if (RA === 0)
                var A = EA.return;
            else
                A = EA,
                vn = ea = null,
                Zo(A),
                ja = null,
                il = 0,
                A = EA;
            for (; A !== null; )
                w0(A.alternate, A),
                A = A.return;
            EA = null
        }
    }
    function ri(A, e) {
        var r = A.timeoutHandle;
        r !== -1 && (A.timeoutHandle = -1,
        fv(r)),
        r = A.cancelPendingCommit,
        r !== null && (A.cancelPendingCommit = null,
        r()),
        Ln = 0,
        Lf(),
        YA = A,
        EA = r = pn(A.current, null),
        HA = e,
        RA = 0,
        Bt = null,
        cr = !1,
        ei = qn(A, e),
        Hf = !1,
        ti = ht = bf = ca = or = ie = 0,
        $e = ml = null,
        Sf = !1,
        (e & 8) !== 0 && (e |= e & 32);
        var l = A.entangledLanes;
        if (l !== 0)
            for (A = A.entanglements,
            l &= e; 0 < l; ) {
                var c = 31 - Ie(l)
                  , f = 1 << c;
                e |= A[c],
                l &= ~f
            }
        return Dn = e,
        Gs(),
        r
    }
    function V0(A, e) {
        pA = null,
        D.H = hl,
        e === ka || e === Zs ? (e = rd(),
        RA = 3) : e === Io ? (e = rd(),
        RA = 4) : RA = e === ff ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1,
        Bt = e,
        EA === null && (ie = 1,
        uu(A, Et(e, A.current)))
    }
    function z0() {
        var A = ot.current;
        return A === null ? !0 : (HA & 4194048) === HA ? St === null : (HA & 62914560) === HA || (HA & 536870912) !== 0 ? A === St : !1
    }
    function X0() {
        var A = D.H;
        return D.H = hl,
        A === null ? hl : A
    }
    function Y0() {
        var A = D.A;
        return D.A = Xm,
        A
    }
    function pu() {
        ie = 4,
        cr || (HA & 4194048) !== HA && ot.current !== null || (ei = !0),
        (or & 134217727) === 0 && (ca & 134217727) === 0 || YA === null || hr(YA, HA, ht, !1)
    }
    function Of(A, e, r) {
        var l = IA;
        IA |= 2;
        var c = X0()
          , f = Y0();
        (YA !== A || HA !== e) && (Cu = null,
        ri(A, e)),
        e = !1;
        var Q = ie;
        A: do
            try {
                if (RA !== 0 && EA !== null) {
                    var U = EA
                      , F = Bt;
                    switch (RA) {
                    case 8:
                        Lf(),
                        Q = 6;
                        break A;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        ot.current === null && (e = !0);
                        var I = RA;
                        if (RA = 0,
                        Bt = null,
                        ai(A, U, F, I),
                        r && ei) {
                            Q = 0;
                            break A
                        }
                        break;
                    default:
                        I = RA,
                        RA = 0,
                        Bt = null,
                        ai(A, U, F, I)
                    }
                }
                km(),
                Q = ie;
                break
            } catch (J) {
                V0(A, J)
            }
        while (!0);
        return e && A.shellSuspendCounter++,
        vn = ea = null,
        IA = l,
        D.H = c,
        D.A = f,
        EA === null && (YA = null,
        HA = 0,
        Gs()),
        Q
    }
    function km() {
        for (; EA !== null; )
            J0(EA)
    }
    function jm(A, e) {
        var r = IA;
        IA |= 2;
        var l = X0()
          , c = Y0();
        YA !== A || HA !== e ? (Cu = null,
        wu = Ce() + 500,
        ri(A, e)) : ei = qn(A, e);
        A: do
            try {
                if (RA !== 0 && EA !== null) {
                    e = EA;
                    var f = Bt;
                    e: switch (RA) {
                    case 1:
                        RA = 0,
                        Bt = null,
                        ai(A, e, f, 1);
                        break;
                    case 2:
                    case 9:
                        if (td(f)) {
                            RA = 0,
                            Bt = null,
                            k0(e);
                            break
                        }
                        e = function() {
                            RA !== 2 && RA !== 9 || YA !== A || (RA = 7),
                            an(A)
                        }
                        ,
                        f.then(e, e);
                        break A;
                    case 3:
                        RA = 7;
                        break A;
                    case 4:
                        RA = 5;
                        break A;
                    case 7:
                        td(f) ? (RA = 0,
                        Bt = null,
                        k0(e)) : (RA = 0,
                        Bt = null,
                        ai(A, e, f, 7));
                        break;
                    case 5:
                        var Q = null;
                        switch (EA.tag) {
                        case 26:
                            Q = EA.memoizedState;
                        case 5:
                        case 27:
                            var U = EA;
                            if (Q ? xQ(Q) : U.stateNode.complete) {
                                RA = 0,
                                Bt = null;
                                var F = U.sibling;
                                if (F !== null)
                                    EA = F;
                                else {
                                    var I = U.return;
                                    I !== null ? (EA = I,
                                    mu(I)) : EA = null
                                }
                                break e
                            }
                        }
                        RA = 0,
                        Bt = null,
                        ai(A, e, f, 5);
                        break;
                    case 6:
                        RA = 0,
                        Bt = null,
                        ai(A, e, f, 6);
                        break;
                    case 8:
                        Lf(),
                        ie = 6;
                        break A;
                    default:
                        throw Error(n(462))
                    }
                }
                Zm();
                break
            } catch (J) {
                V0(A, J)
            }
        while (!0);
        return vn = ea = null,
        D.H = l,
        D.A = c,
        IA = r,
        EA !== null ? 0 : (YA = null,
        HA = 0,
        Gs(),
        ie)
    }
    function Zm() {
        for (; EA !== null && !Ki(); )
            J0(EA)
    }
    function J0(A) {
        var e = d0(A.alternate, A, Dn);
        A.memoizedProps = A.pendingProps,
        e === null ? mu(A) : EA = e
    }
    function k0(A) {
        var e = A
          , r = e.alternate;
        switch (e.tag) {
        case 15:
        case 0:
            e = c0(r, e, e.pendingProps, e.type, void 0, HA);
            break;
        case 11:
            e = c0(r, e, e.pendingProps, e.type.render, e.ref, HA);
            break;
        case 5:
            Zo(e);
        default:
            w0(r, e),
            e = EA = Yg(e, Dn),
            e = d0(r, e, Dn)
        }
        A.memoizedProps = A.pendingProps,
        e === null ? mu(A) : EA = e
    }
    function ai(A, e, r, l) {
        vn = ea = null,
        Zo(e),
        ja = null,
        il = 0;
        var c = e.return;
        try {
            if (Im(A, c, e, r, HA)) {
                ie = 1,
                uu(A, Et(r, A.current)),
                EA = null;
                return
            }
        } catch (f) {
            if (c !== null)
                throw EA = c,
                f;
            ie = 1,
            uu(A, Et(r, A.current)),
            EA = null;
            return
        }
        e.flags & 32768 ? (TA || l === 1 ? A = !0 : ei || (HA & 536870912) !== 0 ? A = !1 : (cr = A = !0,
        (l === 2 || l === 9 || l === 3 || l === 6) && (l = ot.current,
        l !== null && l.tag === 13 && (l.flags |= 16384))),
        j0(e, A)) : mu(e)
    }
    function mu(A) {
        var e = A;
        do {
            if ((e.flags & 32768) !== 0) {
                j0(e, cr);
                return
            }
            A = e.return;
            var r = Nm(e.alternate, e, Dn);
            if (r !== null) {
                EA = r;
                return
            }
            if (e = e.sibling,
            e !== null) {
                EA = e;
                return
            }
            EA = e = A
        } while (e !== null);
        ie === 0 && (ie = 5)
    }
    function j0(A, e) {
        do {
            var r = Gm(A.alternate, A);
            if (r !== null) {
                r.flags &= 32767,
                EA = r;
                return
            }
            if (r = A.return,
            r !== null && (r.flags |= 32768,
            r.subtreeFlags = 0,
            r.deletions = null),
            !e && (A = A.sibling,
            A !== null)) {
                EA = A;
                return
            }
            EA = A = r
        } while (A !== null);
        ie = 6,
        EA = null
    }
    function Z0(A, e, r, l, c, f, Q, U, F) {
        A.cancelPendingCommit = null;
        do
            vu();
        while (pe !== 0);
        if ((IA & 6) !== 0)
            throw Error(n(327));
        if (e !== null) {
            if (e === A.current)
                throw Error(n(177));
            if (f = e.lanes | e.childLanes,
            f |= mo,
            Gi(A, r, f, Q, U, F),
            A === YA && (EA = YA = null,
            HA = 0),
            ni = e,
            Br = A,
            Ln = r,
            Tf = f,
            xf = c,
            K0 = l,
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (A.callbackNode = null,
            A.callbackPriority = 0,
            $m(Qn, function() {
                return AQ(),
                null
            })) : (A.callbackNode = null,
            A.callbackPriority = 0),
            l = (e.flags & 13878) !== 0,
            (e.subtreeFlags & 13878) !== 0 || l) {
                l = D.T,
                D.T = null,
                c = Z.p,
                Z.p = 2,
                Q = IA,
                IA |= 4;
                try {
                    Vm(A, e, r)
                } finally {
                    IA = Q,
                    Z.p = c,
                    D.T = l
                }
            }
            pe = 1,
            q0(),
            W0(),
            P0()
        }
    }
    function q0() {
        if (pe === 1) {
            pe = 0;
            var A = Br
              , e = ni
              , r = (e.flags & 13878) !== 0;
            if ((e.subtreeFlags & 13878) !== 0 || r) {
                r = D.T,
                D.T = null;
                var l = Z.p;
                Z.p = 2;
                var c = IA;
                IA |= 4;
                try {
                    S0(e, A);
                    var f = kf
                      , Q = Mg(A.containerInfo)
                      , U = f.focusedElem
                      , F = f.selectionRange;
                    if (Q !== U && U && U.ownerDocument && Og(U.ownerDocument.documentElement, U)) {
                        if (F !== null && Qo(U)) {
                            var I = F.start
                              , J = F.end;
                            if (J === void 0 && (J = I),
                            "selectionStart"in U)
                                U.selectionStart = I,
                                U.selectionEnd = Math.min(J, U.value.length);
                            else {
                                var q = U.ownerDocument || document
                                  , R = q && q.defaultView || window;
                                if (R.getSelection) {
                                    var z = R.getSelection()
                                      , sA = U.textContent.length
                                      , gA = Math.min(F.start, sA)
                                      , zA = F.end === void 0 ? gA : Math.min(F.end, sA);
                                    !z.extend && gA > zA && (Q = zA,
                                    zA = gA,
                                    gA = Q);
                                    var T = Lg(U, gA)
                                      , _ = Lg(U, zA);
                                    if (T && _ && (z.rangeCount !== 1 || z.anchorNode !== T.node || z.anchorOffset !== T.offset || z.focusNode !== _.node || z.focusOffset !== _.offset)) {
                                        var M = q.createRange();
                                        M.setStart(T.node, T.offset),
                                        z.removeAllRanges(),
                                        gA > zA ? (z.addRange(M),
                                        z.extend(_.node, _.offset)) : (M.setEnd(_.node, _.offset),
                                        z.addRange(M))
                                    }
                                }
                            }
                        }
                        for (q = [],
                        z = U; z = z.parentNode; )
                            z.nodeType === 1 && q.push({
                                element: z,
                                left: z.scrollLeft,
                                top: z.scrollTop
                            });
                        for (typeof U.focus == "function" && U.focus(),
                        U = 0; U < q.length; U++) {
                            var j = q[U];
                            j.element.scrollLeft = j.left,
                            j.element.scrollTop = j.top
                        }
                    }
                    Ou = !!Jf,
                    kf = Jf = null
                } finally {
                    IA = c,
                    Z.p = l,
                    D.T = r
                }
            }
            A.current = e,
            pe = 2
        }
    }
    function W0() {
        if (pe === 2) {
            pe = 0;
            var A = Br
              , e = ni
              , r = (e.flags & 8772) !== 0;
            if ((e.subtreeFlags & 8772) !== 0 || r) {
                r = D.T,
                D.T = null;
                var l = Z.p;
                Z.p = 2;
                var c = IA;
                IA |= 4;
                try {
                    F0(A, e.alternate, e)
                } finally {
                    IA = c,
                    Z.p = l,
                    D.T = r
                }
            }
            pe = 3
        }
    }
    function P0() {
        if (pe === 4 || pe === 3) {
            pe = 0,
            Ri();
            var A = Br
              , e = ni
              , r = Ln
              , l = K0;
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? pe = 5 : (pe = 0,
            ni = Br = null,
            $0(A, A.pendingLanes));
            var c = A.pendingLanes;
            if (c === 0 && (fr = null),
            kr(r),
            e = e.stateNode,
            Fe && typeof Fe.onCommitFiberRoot == "function")
                try {
                    Fe.onCommitFiberRoot(Wt, e, void 0, (e.current.flags & 128) === 128)
                } catch {}
            if (l !== null) {
                e = D.T,
                c = Z.p,
                Z.p = 2,
                D.T = null;
                try {
                    for (var f = A.onRecoverableError, Q = 0; Q < l.length; Q++) {
                        var U = l[Q];
                        f(U.value, {
                            componentStack: U.stack
                        })
                    }
                } finally {
                    D.T = e,
                    Z.p = c
                }
            }
            (Ln & 3) !== 0 && vu(),
            an(A),
            c = A.pendingLanes,
            (r & 261930) !== 0 && (c & 42) !== 0 ? A === Df ? vl++ : (vl = 0,
            Df = A) : vl = 0,
            yl(0)
        }
    }
    function $0(A, e) {
        (A.pooledCacheLanes &= e) === 0 && (e = A.pooledCache,
        e != null && (A.pooledCache = null,
        rl(e)))
    }
    function vu() {
        return q0(),
        W0(),
        P0(),
        AQ()
    }
    function AQ() {
        if (pe !== 5)
            return !1;
        var A = Br
          , e = Tf;
        Tf = 0;
        var r = kr(Ln)
          , l = D.T
          , c = Z.p;
        try {
            Z.p = 32 > r ? 32 : r,
            D.T = null,
            r = xf,
            xf = null;
            var f = Br
              , Q = Ln;
            if (pe = 0,
            ni = Br = null,
            Ln = 0,
            (IA & 6) !== 0)
                throw Error(n(331));
            var U = IA;
            if (IA |= 4,
            O0(f.current),
            x0(f, f.current, Q, r),
            IA = U,
            yl(0, !1),
            Fe && typeof Fe.onPostCommitFiberRoot == "function")
                try {
                    Fe.onPostCommitFiberRoot(Wt, f)
                } catch {}
            return !0
        } finally {
            Z.p = c,
            D.T = l,
            $0(A, e)
        }
    }
    function eQ(A, e, r) {
        e = Et(r, e),
        e = of(A.stateNode, e, 2),
        A = ir(A, e, 2),
        A !== null && ($t(A, 2),
        an(A))
    }
    function NA(A, e, r) {
        if (A.tag === 3)
            eQ(A, A, r);
        else
            for (; e !== null; ) {
                if (e.tag === 3) {
                    eQ(e, A, r);
                    break
                } else if (e.tag === 1) {
                    var l = e.stateNode;
                    if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (fr === null || !fr.has(l))) {
                        A = Et(r, A),
                        r = t0(2),
                        l = ir(e, r, 2),
                        l !== null && (n0(r, l, e, A),
                        $t(l, 2),
                        an(l));
                        break
                    }
                }
                e = e.return
            }
    }
    function Mf(A, e, r) {
        var l = A.pingCache;
        if (l === null) {
            l = A.pingCache = new Ym;
            var c = new Set;
            l.set(e, c)
        } else
            c = l.get(e),
            c === void 0 && (c = new Set,
            l.set(e, c));
        c.has(r) || (Hf = !0,
        c.add(r),
        A = qm.bind(null, A, e, r),
        e.then(A, A))
    }
    function qm(A, e, r) {
        var l = A.pingCache;
        l !== null && l.delete(e),
        A.pingedLanes |= A.suspendedLanes & r,
        A.warmLanes &= ~r,
        YA === A && (HA & r) === r && (ie === 4 || ie === 3 && (HA & 62914560) === HA && 300 > Ce() - Qu ? (IA & 2) === 0 && ri(A, 0) : bf |= r,
        ti === HA && (ti = 0)),
        an(A)
    }
    function tQ(A, e) {
        e === 0 && (e = Wn()),
        A = Pr(A, e),
        A !== null && ($t(A, e),
        an(A))
    }
    function Wm(A) {
        var e = A.memoizedState
          , r = 0;
        e !== null && (r = e.retryLane),
        tQ(A, r)
    }
    function Pm(A, e) {
        var r = 0;
        switch (A.tag) {
        case 31:
        case 13:
            var l = A.stateNode
              , c = A.memoizedState;
            c !== null && (r = c.retryLane);
            break;
        case 19:
            l = A.stateNode;
            break;
        case 22:
            l = A.stateNode._retryCache;
            break;
        default:
            throw Error(n(314))
        }
        l !== null && l.delete(e),
        tQ(A, r)
    }
    function $m(A, e) {
        return lt(A, e)
    }
    var yu = null
      , ii = null
      , If = !1
      , Fu = !1
      , Kf = !1
      , gr = 0;
    function an(A) {
        A !== ii && A.next === null && (ii === null ? yu = ii = A : ii = ii.next = A),
        Fu = !0,
        If || (If = !0,
        ev())
    }
    function yl(A, e) {
        if (!Kf && Fu) {
            Kf = !0;
            do
                for (var r = !1, l = yu; l !== null; ) {
                    if (A !== 0) {
                        var c = l.pendingLanes;
                        if (c === 0)
                            var f = 0;
                        else {
                            var Q = l.suspendedLanes
                              , U = l.pingedLanes;
                            f = (1 << 31 - Ie(42 | A) + 1) - 1,
                            f &= c & ~(Q & ~U),
                            f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0
                        }
                        f !== 0 && (r = !0,
                        iQ(l, f))
                    } else
                        f = HA,
                        f = Jr(l, l === YA ? f : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1),
                        (f & 3) === 0 || qn(l, f) || (r = !0,
                        iQ(l, f));
                    l = l.next
                }
            while (r);
            Kf = !1
        }
    }
    function Av() {
        nQ()
    }
    function nQ() {
        Fu = If = !1;
        var A = 0;
        gr !== 0 && ov() && (A = gr);
        for (var e = Ce(), r = null, l = yu; l !== null; ) {
            var c = l.next
              , f = rQ(l, e);
            f === 0 ? (l.next = null,
            r === null ? yu = c : r.next = c,
            c === null && (ii = r)) : (r = l,
            (A !== 0 || (f & 3) !== 0) && (Fu = !0)),
            l = c
        }
        pe !== 0 && pe !== 5 || yl(A),
        gr !== 0 && (gr = 0)
    }
    function rQ(A, e) {
        for (var r = A.suspendedLanes, l = A.pingedLanes, c = A.expirationTimes, f = A.pendingLanes & -62914561; 0 < f; ) {
            var Q = 31 - Ie(f)
              , U = 1 << Q
              , F = c[Q];
            F === -1 ? ((U & r) === 0 || (U & l) !== 0) && (c[Q] = Es(U, e)) : F <= e && (A.expiredLanes |= U),
            f &= ~U
        }
        if (e = YA,
        r = HA,
        r = Jr(A, A === e ? r : 0, A.cancelPendingCommit !== null || A.timeoutHandle !== -1),
        l = A.callbackNode,
        r === 0 || A === e && (RA === 2 || RA === 9) || A.cancelPendingCommit !== null)
            return l !== null && l !== null && jn(l),
            A.callbackNode = null,
            A.callbackPriority = 0;
        if ((r & 3) === 0 || qn(A, r)) {
            if (e = r & -r,
            e === A.callbackPriority)
                return e;
            switch (l !== null && jn(l),
            kr(r)) {
            case 2:
            case 8:
                r = dn;
                break;
            case 32:
                r = Qn;
                break;
            case 268435456:
                r = Fa;
                break;
            default:
                r = Qn
            }
            return l = aQ.bind(null, A),
            r = lt(r, l),
            A.callbackPriority = e,
            A.callbackNode = r,
            e
        }
        return l !== null && l !== null && jn(l),
        A.callbackPriority = 2,
        A.callbackNode = null,
        2
    }
    function aQ(A, e) {
        if (pe !== 0 && pe !== 5)
            return A.callbackNode = null,
            A.callbackPriority = 0,
            null;
        var r = A.callbackNode;
        if (vu() && A.callbackNode !== r)
            return null;
        var l = HA;
        return l = Jr(A, A === YA ? l : 0, A.cancelPendingCommit !== null || A.timeoutHandle !== -1),
        l === 0 ? null : (N0(A, l, e),
        rQ(A, Ce()),
        A.callbackNode != null && A.callbackNode === r ? aQ.bind(null, A) : null)
    }
    function iQ(A, e) {
        if (vu())
            return null;
        N0(A, e, !0)
    }
    function ev() {
        Bv(function() {
            (IA & 6) !== 0 ? lt(qt, Av) : nQ()
        })
    }
    function Rf() {
        if (gr === 0) {
            var A = Ya;
            A === 0 && (A = _a,
            _a <<= 1,
            (_a & 261888) === 0 && (_a = 256)),
            gr = A
        }
        return gr
    }
    function lQ(A) {
        return A == null || typeof A == "symbol" || typeof A == "boolean" ? null : typeof A == "function" ? A : Ds("" + A)
    }
    function sQ(A, e) {
        var r = e.ownerDocument.createElement("input");
        return r.name = e.name,
        r.value = e.value,
        A.id && r.setAttribute("form", A.id),
        e.parentNode.insertBefore(r, e),
        A = new FormData(A),
        r.parentNode.removeChild(r),
        A
    }
    function tv(A, e, r, l, c) {
        if (e === "submit" && r && r.stateNode === c) {
            var f = lQ((c[Y] || null).action)
              , Q = l.submitter;
            Q && (e = (e = Q[Y] || null) ? lQ(e.formAction) : Q.getAttribute("formAction"),
            e !== null && (f = e,
            Q = null));
            var U = new Is("action","action",null,l,c);
            A.push({
                event: U,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (l.defaultPrevented) {
                            if (gr !== 0) {
                                var F = Q ? sQ(c, Q) : new FormData(c);
                                rf(r, {
                                    pending: !0,
                                    data: F,
                                    method: c.method,
                                    action: f
                                }, null, F)
                            }
                        } else
                            typeof f == "function" && (U.preventDefault(),
                            F = Q ? sQ(c, Q) : new FormData(c),
                            rf(r, {
                                pending: !0,
                                data: F,
                                method: c.method,
                                action: f
                            }, f, F))
                    },
                    currentTarget: c
                }]
            })
        }
    }
    for (var Nf = 0; Nf < po.length; Nf++) {
        var Gf = po[Nf]
          , nv = Gf.toLowerCase()
          , rv = Gf[0].toUpperCase() + Gf.slice(1);
        Xt(nv, "on" + rv)
    }
    Xt(Rg, "onAnimationEnd"),
    Xt(Ng, "onAnimationIteration"),
    Xt(Gg, "onAnimationStart"),
    Xt("dblclick", "onDoubleClick"),
    Xt("focusin", "onFocus"),
    Xt("focusout", "onBlur"),
    Xt(Um, "onTransitionRun"),
    Xt(pm, "onTransitionStart"),
    Xt(mm, "onTransitionCancel"),
    Xt(Vg, "onTransitionEnd"),
    en("onMouseEnter", ["mouseout", "mouseover"]),
    en("onMouseLeave", ["mouseout", "mouseover"]),
    en("onPointerEnter", ["pointerout", "pointerover"]),
    en("onPointerLeave", ["pointerout", "pointerover"]),
    Vt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Vt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Vt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Vt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Vt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Vt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Fl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , av = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fl));
    function uQ(A, e) {
        e = (e & 4) !== 0;
        for (var r = 0; r < A.length; r++) {
            var l = A[r]
              , c = l.event;
            l = l.listeners;
            A: {
                var f = void 0;
                if (e)
                    for (var Q = l.length - 1; 0 <= Q; Q--) {
                        var U = l[Q]
                          , F = U.instance
                          , I = U.currentTarget;
                        if (U = U.listener,
                        F !== f && c.isPropagationStopped())
                            break A;
                        f = U,
                        c.currentTarget = I;
                        try {
                            f(c)
                        } catch (J) {
                            Ns(J)
                        }
                        c.currentTarget = null,
                        f = F
                    }
                else
                    for (Q = 0; Q < l.length; Q++) {
                        if (U = l[Q],
                        F = U.instance,
                        I = U.currentTarget,
                        U = U.listener,
                        F !== f && c.isPropagationStopped())
                            break A;
                        f = U,
                        c.currentTarget = I;
                        try {
                            f(c)
                        } catch (J) {
                            Ns(J)
                        }
                        c.currentTarget = null,
                        f = F
                    }
            }
        }
    }
    function _A(A, e) {
        var r = e[W];
        r === void 0 && (r = e[W] = new Set);
        var l = A + "__bubble";
        r.has(l) || (cQ(e, A, 2, !1),
        r.add(l))
    }
    function Vf(A, e, r) {
        var l = 0;
        e && (l |= 4),
        cQ(r, A, l, e)
    }
    var Eu = "_reactListening" + Math.random().toString(36).slice(2);
    function zf(A) {
        if (!A[Eu]) {
            A[Eu] = !0,
            jr.forEach(function(r) {
                r !== "selectionchange" && (av.has(r) || Vf(r, !1, A),
                Vf(r, !0, A))
            });
            var e = A.nodeType === 9 ? A : A.ownerDocument;
            e === null || e[Eu] || (e[Eu] = !0,
            Vf("selectionchange", !1, e))
        }
    }
    function cQ(A, e, r, l) {
        switch (RQ(e)) {
        case 2:
            var c = Dv;
            break;
        case 8:
            c = Lv;
            break;
        default:
            c = rB
        }
        r = c.bind(null, e, r, A),
        c = void 0,
        !lo || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (c = !0),
        l ? c !== void 0 ? A.addEventListener(e, r, {
            capture: !0,
            passive: c
        }) : A.addEventListener(e, r, !0) : c !== void 0 ? A.addEventListener(e, r, {
            passive: c
        }) : A.addEventListener(e, r, !1)
    }
    function Xf(A, e, r, l, c) {
        var f = l;
        if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
            A: for (; ; ) {
                if (l === null)
                    return;
                var Q = l.tag;
                if (Q === 3 || Q === 4) {
                    var U = l.stateNode.containerInfo;
                    if (U === c)
                        break;
                    if (Q === 4)
                        for (Q = l.return; Q !== null; ) {
                            var F = Q.tag;
                            if ((F === 3 || F === 4) && Q.stateNode.containerInfo === c)
                                return;
                            Q = Q.return
                        }
                    for (; U !== null; ) {
                        if (Q = Ue(U),
                        Q === null)
                            return;
                        if (F = Q.tag,
                        F === 5 || F === 6 || F === 26 || F === 27) {
                            l = f = Q;
                            continue A
                        }
                        U = U.parentNode
                    }
                }
                l = l.return
            }
        gg(function() {
            var I = f
              , J = ao(r)
              , q = [];
            A: {
                var R = zg.get(A);
                if (R !== void 0) {
                    var z = Is
                      , sA = A;
                    switch (A) {
                    case "keypress":
                        if (Os(r) === 0)
                            break A;
                    case "keydown":
                    case "keyup":
                        z = Pp;
                        break;
                    case "focusin":
                        sA = "focus",
                        z = oo;
                        break;
                    case "focusout":
                        sA = "blur",
                        z = oo;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        z = oo;
                        break;
                    case "click":
                        if (r.button === 2)
                            break A;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        z = wg;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        z = Np;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        z = em;
                        break;
                    case Rg:
                    case Ng:
                    case Gg:
                        z = zp;
                        break;
                    case Vg:
                        z = nm;
                        break;
                    case "scroll":
                    case "scrollend":
                        z = Kp;
                        break;
                    case "wheel":
                        z = am;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        z = Yp;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        z = Ug;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        z = lm
                    }
                    var gA = (e & 4) !== 0
                      , zA = !gA && (A === "scroll" || A === "scrollend")
                      , T = gA ? R !== null ? R + "Capture" : null : R;
                    gA = [];
                    for (var _ = I, M; _ !== null; ) {
                        var j = _;
                        if (M = j.stateNode,
                        j = j.tag,
                        j !== 5 && j !== 26 && j !== 27 || M === null || T === null || (j = ki(_, T),
                        j != null && gA.push(El(_, j, M))),
                        zA)
                            break;
                        _ = _.return
                    }
                    0 < gA.length && (R = new z(R,sA,null,r,J),
                    q.push({
                        event: R,
                        listeners: gA
                    }))
                }
            }
            if ((e & 7) === 0) {
                A: {
                    if (R = A === "mouseover" || A === "pointerover",
                    z = A === "mouseout" || A === "pointerout",
                    R && r !== ro && (sA = r.relatedTarget || r.fromElement) && (Ue(sA) || sA[AA]))
                        break A;
                    if ((z || R) && (R = J.window === J ? J : (R = J.ownerDocument) ? R.defaultView || R.parentWindow : window,
                    z ? (sA = r.relatedTarget || r.toElement,
                    z = I,
                    sA = sA ? Ue(sA) : null,
                    sA !== null && (zA = u(sA),
                    gA = sA.tag,
                    sA !== zA || gA !== 5 && gA !== 27 && gA !== 6) && (sA = null)) : (z = null,
                    sA = I),
                    z !== sA)) {
                        if (gA = wg,
                        j = "onMouseLeave",
                        T = "onMouseEnter",
                        _ = "mouse",
                        (A === "pointerout" || A === "pointerover") && (gA = Ug,
                        j = "onPointerLeave",
                        T = "onPointerEnter",
                        _ = "pointer"),
                        zA = z == null ? R : ke(z),
                        M = sA == null ? R : ke(sA),
                        R = new gA(j,_ + "leave",z,r,J),
                        R.target = zA,
                        R.relatedTarget = M,
                        j = null,
                        Ue(J) === I && (gA = new gA(T,_ + "enter",sA,r,J),
                        gA.target = M,
                        gA.relatedTarget = zA,
                        j = gA),
                        zA = j,
                        z && sA)
                            e: {
                                for (gA = iv,
                                T = z,
                                _ = sA,
                                M = 0,
                                j = T; j; j = gA(j))
                                    M++;
                                j = 0;
                                for (var BA = _; BA; BA = gA(BA))
                                    j++;
                                for (; 0 < M - j; )
                                    T = gA(T),
                                    M--;
                                for (; 0 < j - M; )
                                    _ = gA(_),
                                    j--;
                                for (; M--; ) {
                                    if (T === _ || _ !== null && T === _.alternate) {
                                        gA = T;
                                        break e
                                    }
                                    T = gA(T),
                                    _ = gA(_)
                                }
                                gA = null
                            }
                        else
                            gA = null;
                        z !== null && oQ(q, R, z, gA, !1),
                        sA !== null && zA !== null && oQ(q, zA, sA, gA, !0)
                    }
                }
                A: {
                    if (R = I ? ke(I) : window,
                    z = R.nodeName && R.nodeName.toLowerCase(),
                    z === "select" || z === "input" && R.type === "file")
                        var OA = Hg;
                    else if (Eg(R))
                        if (bg)
                            OA = Qm;
                        else {
                            OA = gm;
                            var fA = hm
                        }
                    else
                        z = R.nodeName,
                        !z || z.toLowerCase() !== "input" || R.type !== "checkbox" && R.type !== "radio" ? I && no(I.elementType) && (OA = Hg) : OA = dm;
                    if (OA && (OA = OA(A, I))) {
                        _g(q, OA, r, J);
                        break A
                    }
                    fA && fA(A, R, I),
                    A === "focusout" && I && R.type === "number" && I.memoizedProps.value != null && to(R, "number", R.value)
                }
                switch (fA = I ? ke(I) : window,
                A) {
                case "focusin":
                    (Eg(fA) || fA.contentEditable === "true") && (Ia = fA,
                    wo = I,
                    el = null);
                    break;
                case "focusout":
                    el = wo = Ia = null;
                    break;
                case "mousedown":
                    Co = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Co = !1,
                    Ig(q, r, J);
                    break;
                case "selectionchange":
                    if (Cm)
                        break;
                case "keydown":
                case "keyup":
                    Ig(q, r, J)
                }
                var mA;
                if (Bo)
                    A: {
                        switch (A) {
                        case "compositionstart":
                            var bA = "onCompositionStart";
                            break A;
                        case "compositionend":
                            bA = "onCompositionEnd";
                            break A;
                        case "compositionupdate":
                            bA = "onCompositionUpdate";
                            break A
                        }
                        bA = void 0
                    }
                else
                    Ma ? yg(A, r) && (bA = "onCompositionEnd") : A === "keydown" && r.keyCode === 229 && (bA = "onCompositionStart");
                bA && (pg && r.locale !== "ko" && (Ma || bA !== "onCompositionStart" ? bA === "onCompositionEnd" && Ma && (mA = dg()) : ($n = J,
                so = "value"in $n ? $n.value : $n.textContent,
                Ma = !0)),
                fA = _u(I, bA),
                0 < fA.length && (bA = new Cg(bA,A,null,r,J),
                q.push({
                    event: bA,
                    listeners: fA
                }),
                mA ? bA.data = mA : (mA = Fg(r),
                mA !== null && (bA.data = mA)))),
                (mA = um ? cm(A, r) : om(A, r)) && (bA = _u(I, "onBeforeInput"),
                0 < bA.length && (fA = new Cg("onBeforeInput","beforeinput",null,r,J),
                q.push({
                    event: fA,
                    listeners: bA
                }),
                fA.data = mA)),
                tv(q, A, I, r, J)
            }
            uQ(q, e)
        })
    }
    function El(A, e, r) {
        return {
            instance: A,
            listener: e,
            currentTarget: r
        }
    }
    function _u(A, e) {
        for (var r = e + "Capture", l = []; A !== null; ) {
            var c = A
              , f = c.stateNode;
            if (c = c.tag,
            c !== 5 && c !== 26 && c !== 27 || f === null || (c = ki(A, r),
            c != null && l.unshift(El(A, c, f)),
            c = ki(A, e),
            c != null && l.push(El(A, c, f))),
            A.tag === 3)
                return l;
            A = A.return
        }
        return []
    }
    function iv(A) {
        if (A === null)
            return null;
        do
            A = A.return;
        while (A && A.tag !== 5 && A.tag !== 27);
        return A || null
    }
    function oQ(A, e, r, l, c) {
        for (var f = e._reactName, Q = []; r !== null && r !== l; ) {
            var U = r
              , F = U.alternate
              , I = U.stateNode;
            if (U = U.tag,
            F !== null && F === l)
                break;
            U !== 5 && U !== 26 && U !== 27 || I === null || (F = I,
            c ? (I = ki(r, f),
            I != null && Q.unshift(El(r, I, F))) : c || (I = ki(r, f),
            I != null && Q.push(El(r, I, F)))),
            r = r.return
        }
        Q.length !== 0 && A.push({
            event: e,
            listeners: Q
        })
    }
    var lv = /\r\n?/g
      , sv = /\u0000|\uFFFD/g;
    function fQ(A) {
        return (typeof A == "string" ? A : "" + A).replace(lv, `
`).replace(sv, "")
    }
    function BQ(A, e) {
        return e = fQ(e),
        fQ(A) === e
    }
    function VA(A, e, r, l, c, f) {
        switch (r) {
        case "children":
            typeof l == "string" ? e === "body" || e === "textarea" && l === "" || Da(A, l) : (typeof l == "number" || typeof l == "bigint") && e !== "body" && Da(A, "" + l);
            break;
        case "className":
            Ta(A, "class", l);
            break;
        case "tabIndex":
            Ta(A, "tabindex", l);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            Ta(A, r, l);
            break;
        case "style":
            Bg(A, l, f);
            break;
        case "data":
            if (e !== "object") {
                Ta(A, "data", l);
                break
            }
        case "src":
        case "href":
            if (l === "" && (e !== "a" || r !== "href")) {
                A.removeAttribute(r);
                break
            }
            if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
                A.removeAttribute(r);
                break
            }
            l = Ds("" + l),
            A.setAttribute(r, l);
            break;
        case "action":
        case "formAction":
            if (typeof l == "function") {
                A.setAttribute(r, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof f == "function" && (r === "formAction" ? (e !== "input" && VA(A, e, "name", c.name, c, null),
                VA(A, e, "formEncType", c.formEncType, c, null),
                VA(A, e, "formMethod", c.formMethod, c, null),
                VA(A, e, "formTarget", c.formTarget, c, null)) : (VA(A, e, "encType", c.encType, c, null),
                VA(A, e, "method", c.method, c, null),
                VA(A, e, "target", c.target, c, null)));
            if (l == null || typeof l == "symbol" || typeof l == "boolean") {
                A.removeAttribute(r);
                break
            }
            l = Ds("" + l),
            A.setAttribute(r, l);
            break;
        case "onClick":
            l != null && (A.onclick = Cn);
            break;
        case "onScroll":
            l != null && _A("scroll", A);
            break;
        case "onScrollEnd":
            l != null && _A("scrollend", A);
            break;
        case "dangerouslySetInnerHTML":
            if (l != null) {
                if (typeof l != "object" || !("__html"in l))
                    throw Error(n(61));
                if (r = l.__html,
                r != null) {
                    if (c.children != null)
                        throw Error(n(60));
                    A.innerHTML = r
                }
            }
            break;
        case "multiple":
            A.multiple = l && typeof l != "function" && typeof l != "symbol";
            break;
        case "muted":
            A.muted = l && typeof l != "function" && typeof l != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
                A.removeAttribute("xlink:href");
                break
            }
            r = Ds("" + l),
            A.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            l != null && typeof l != "function" && typeof l != "symbol" ? A.setAttribute(r, "" + l) : A.removeAttribute(r);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            l && typeof l != "function" && typeof l != "symbol" ? A.setAttribute(r, "") : A.removeAttribute(r);
            break;
        case "capture":
        case "download":
            l === !0 ? A.setAttribute(r, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? A.setAttribute(r, l) : A.removeAttribute(r);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? A.setAttribute(r, l) : A.removeAttribute(r);
            break;
        case "rowSpan":
        case "start":
            l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? A.removeAttribute(r) : A.setAttribute(r, l);
            break;
        case "popover":
            _A("beforetoggle", A),
            _A("toggle", A),
            Sa(A, "popover", l);
            break;
        case "xlinkActuate":
            zt(A, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
            break;
        case "xlinkArcrole":
            zt(A, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
            break;
        case "xlinkRole":
            zt(A, "http://www.w3.org/1999/xlink", "xlink:role", l);
            break;
        case "xlinkShow":
            zt(A, "http://www.w3.org/1999/xlink", "xlink:show", l);
            break;
        case "xlinkTitle":
            zt(A, "http://www.w3.org/1999/xlink", "xlink:title", l);
            break;
        case "xlinkType":
            zt(A, "http://www.w3.org/1999/xlink", "xlink:type", l);
            break;
        case "xmlBase":
            zt(A, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
            break;
        case "xmlLang":
            zt(A, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
            break;
        case "xmlSpace":
            zt(A, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
            break;
        case "is":
            Sa(A, "is", l);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (r = Mp.get(r) || r,
            Sa(A, r, l))
        }
    }
    function Yf(A, e, r, l, c, f) {
        switch (r) {
        case "style":
            Bg(A, l, f);
            break;
        case "dangerouslySetInnerHTML":
            if (l != null) {
                if (typeof l != "object" || !("__html"in l))
                    throw Error(n(61));
                if (r = l.__html,
                r != null) {
                    if (c.children != null)
                        throw Error(n(60));
                    A.innerHTML = r
                }
            }
            break;
        case "children":
            typeof l == "string" ? Da(A, l) : (typeof l == "number" || typeof l == "bigint") && Da(A, "" + l);
            break;
        case "onScroll":
            l != null && _A("scroll", A);
            break;
        case "onScrollEnd":
            l != null && _A("scrollend", A);
            break;
        case "onClick":
            l != null && (A.onclick = Cn);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!Hs.hasOwnProperty(r))
                A: {
                    if (r[0] === "o" && r[1] === "n" && (c = r.endsWith("Capture"),
                    e = r.slice(2, c ? r.length - 7 : void 0),
                    f = A[Y] || null,
                    f = f != null ? f[r] : null,
                    typeof f == "function" && A.removeEventListener(e, f, c),
                    typeof l == "function")) {
                        typeof f != "function" && f !== null && (r in A ? A[r] = null : A.hasAttribute(r) && A.removeAttribute(r)),
                        A.addEventListener(e, l, c);
                        break A
                    }
                    r in A ? A[r] = l : l === !0 ? A.setAttribute(r, "") : Sa(A, r, l)
                }
        }
    }
    function xe(A, e, r) {
        switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            _A("error", A),
            _A("load", A);
            var l = !1, c = !1, f;
            for (f in r)
                if (r.hasOwnProperty(f)) {
                    var Q = r[f];
                    if (Q != null)
                        switch (f) {
                        case "src":
                            l = !0;
                            break;
                        case "srcSet":
                            c = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(n(137, e));
                        default:
                            VA(A, e, f, Q, r, null)
                        }
                }
            c && VA(A, e, "srcSet", r.srcSet, r, null),
            l && VA(A, e, "src", r.src, r, null);
            return;
        case "input":
            _A("invalid", A);
            var U = f = Q = c = null
              , F = null
              , I = null;
            for (l in r)
                if (r.hasOwnProperty(l)) {
                    var J = r[l];
                    if (J != null)
                        switch (l) {
                        case "name":
                            c = J;
                            break;
                        case "type":
                            Q = J;
                            break;
                        case "checked":
                            F = J;
                            break;
                        case "defaultChecked":
                            I = J;
                            break;
                        case "value":
                            f = J;
                            break;
                        case "defaultValue":
                            U = J;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (J != null)
                                throw Error(n(137, e));
                            break;
                        default:
                            VA(A, e, l, J, r, null)
                        }
                }
            ug(A, f, U, F, I, Q, c, !1);
            return;
        case "select":
            _A("invalid", A),
            l = Q = f = null;
            for (c in r)
                if (r.hasOwnProperty(c) && (U = r[c],
                U != null))
                    switch (c) {
                    case "value":
                        f = U;
                        break;
                    case "defaultValue":
                        Q = U;
                        break;
                    case "multiple":
                        l = U;
                    default:
                        VA(A, e, c, U, r, null)
                    }
            e = f,
            r = Q,
            A.multiple = !!l,
            e != null ? xa(A, !!l, e, !1) : r != null && xa(A, !!l, r, !0);
            return;
        case "textarea":
            _A("invalid", A),
            f = c = l = null;
            for (Q in r)
                if (r.hasOwnProperty(Q) && (U = r[Q],
                U != null))
                    switch (Q) {
                    case "value":
                        l = U;
                        break;
                    case "defaultValue":
                        c = U;
                        break;
                    case "children":
                        f = U;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (U != null)
                            throw Error(n(91));
                        break;
                    default:
                        VA(A, e, Q, U, r, null)
                    }
            og(A, l, c, f);
            return;
        case "option":
            for (F in r)
                r.hasOwnProperty(F) && (l = r[F],
                l != null) && (F === "selected" ? A.selected = l && typeof l != "function" && typeof l != "symbol" : VA(A, e, F, l, r, null));
            return;
        case "dialog":
            _A("beforetoggle", A),
            _A("toggle", A),
            _A("cancel", A),
            _A("close", A);
            break;
        case "iframe":
        case "object":
            _A("load", A);
            break;
        case "video":
        case "audio":
            for (l = 0; l < Fl.length; l++)
                _A(Fl[l], A);
            break;
        case "image":
            _A("error", A),
            _A("load", A);
            break;
        case "details":
            _A("toggle", A);
            break;
        case "embed":
        case "source":
        case "link":
            _A("error", A),
            _A("load", A);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (I in r)
                if (r.hasOwnProperty(I) && (l = r[I],
                l != null))
                    switch (I) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(n(137, e));
                    default:
                        VA(A, e, I, l, r, null)
                    }
            return;
        default:
            if (no(e)) {
                for (J in r)
                    r.hasOwnProperty(J) && (l = r[J],
                    l !== void 0 && Yf(A, e, J, l, r, void 0));
                return
            }
        }
        for (U in r)
            r.hasOwnProperty(U) && (l = r[U],
            l != null && VA(A, e, U, l, r, null))
    }
    function uv(A, e, r, l) {
        switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var c = null
              , f = null
              , Q = null
              , U = null
              , F = null
              , I = null
              , J = null;
            for (z in r) {
                var q = r[z];
                if (r.hasOwnProperty(z) && q != null)
                    switch (z) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        F = q;
                    default:
                        l.hasOwnProperty(z) || VA(A, e, z, null, l, q)
                    }
            }
            for (var R in l) {
                var z = l[R];
                if (q = r[R],
                l.hasOwnProperty(R) && (z != null || q != null))
                    switch (R) {
                    case "type":
                        f = z;
                        break;
                    case "name":
                        c = z;
                        break;
                    case "checked":
                        I = z;
                        break;
                    case "defaultChecked":
                        J = z;
                        break;
                    case "value":
                        Q = z;
                        break;
                    case "defaultValue":
                        U = z;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (z != null)
                            throw Error(n(137, e));
                        break;
                    default:
                        z !== q && VA(A, e, R, z, l, q)
                    }
            }
            eo(A, Q, U, F, I, J, f, c);
            return;
        case "select":
            z = Q = U = R = null;
            for (f in r)
                if (F = r[f],
                r.hasOwnProperty(f) && F != null)
                    switch (f) {
                    case "value":
                        break;
                    case "multiple":
                        z = F;
                    default:
                        l.hasOwnProperty(f) || VA(A, e, f, null, l, F)
                    }
            for (c in l)
                if (f = l[c],
                F = r[c],
                l.hasOwnProperty(c) && (f != null || F != null))
                    switch (c) {
                    case "value":
                        R = f;
                        break;
                    case "defaultValue":
                        U = f;
                        break;
                    case "multiple":
                        Q = f;
                    default:
                        f !== F && VA(A, e, c, f, l, F)
                    }
            e = U,
            r = Q,
            l = z,
            R != null ? xa(A, !!r, R, !1) : !!l != !!r && (e != null ? xa(A, !!r, e, !0) : xa(A, !!r, r ? [] : "", !1));
            return;
        case "textarea":
            z = R = null;
            for (U in r)
                if (c = r[U],
                r.hasOwnProperty(U) && c != null && !l.hasOwnProperty(U))
                    switch (U) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        VA(A, e, U, null, l, c)
                    }
            for (Q in l)
                if (c = l[Q],
                f = r[Q],
                l.hasOwnProperty(Q) && (c != null || f != null))
                    switch (Q) {
                    case "value":
                        R = c;
                        break;
                    case "defaultValue":
                        z = c;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (c != null)
                            throw Error(n(91));
                        break;
                    default:
                        c !== f && VA(A, e, Q, c, l, f)
                    }
            cg(A, R, z);
            return;
        case "option":
            for (var sA in r)
                R = r[sA],
                r.hasOwnProperty(sA) && R != null && !l.hasOwnProperty(sA) && (sA === "selected" ? A.selected = !1 : VA(A, e, sA, null, l, R));
            for (F in l)
                R = l[F],
                z = r[F],
                l.hasOwnProperty(F) && R !== z && (R != null || z != null) && (F === "selected" ? A.selected = R && typeof R != "function" && typeof R != "symbol" : VA(A, e, F, R, l, z));
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var gA in r)
                R = r[gA],
                r.hasOwnProperty(gA) && R != null && !l.hasOwnProperty(gA) && VA(A, e, gA, null, l, R);
            for (I in l)
                if (R = l[I],
                z = r[I],
                l.hasOwnProperty(I) && R !== z && (R != null || z != null))
                    switch (I) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (R != null)
                            throw Error(n(137, e));
                        break;
                    default:
                        VA(A, e, I, R, l, z)
                    }
            return;
        default:
            if (no(e)) {
                for (var zA in r)
                    R = r[zA],
                    r.hasOwnProperty(zA) && R !== void 0 && !l.hasOwnProperty(zA) && Yf(A, e, zA, void 0, l, R);
                for (J in l)
                    R = l[J],
                    z = r[J],
                    !l.hasOwnProperty(J) || R === z || R === void 0 && z === void 0 || Yf(A, e, J, R, l, z);
                return
            }
        }
        for (var T in r)
            R = r[T],
            r.hasOwnProperty(T) && R != null && !l.hasOwnProperty(T) && VA(A, e, T, null, l, R);
        for (q in l)
            R = l[q],
            z = r[q],
            !l.hasOwnProperty(q) || R === z || R == null && z == null || VA(A, e, q, R, l, z)
    }
    function hQ(A) {
        switch (A) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function cv() {
        if (typeof performance.getEntriesByType == "function") {
            for (var A = 0, e = 0, r = performance.getEntriesByType("resource"), l = 0; l < r.length; l++) {
                var c = r[l]
                  , f = c.transferSize
                  , Q = c.initiatorType
                  , U = c.duration;
                if (f && U && hQ(Q)) {
                    for (Q = 0,
                    U = c.responseEnd,
                    l += 1; l < r.length; l++) {
                        var F = r[l]
                          , I = F.startTime;
                        if (I > U)
                            break;
                        var J = F.transferSize
                          , q = F.initiatorType;
                        J && hQ(q) && (F = F.responseEnd,
                        Q += J * (F < U ? 1 : (U - I) / (F - I)))
                    }
                    if (--l,
                    e += 8 * (f + Q) / (c.duration / 1e3),
                    A++,
                    10 < A)
                        break
                }
            }
            if (0 < A)
                return e / A / 1e6
        }
        return navigator.connection && (A = navigator.connection.downlink,
        typeof A == "number") ? A : 5
    }
    var Jf = null
      , kf = null;
    function Hu(A) {
        return A.nodeType === 9 ? A : A.ownerDocument
    }
    function gQ(A) {
        switch (A) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function dQ(A, e) {
        if (A === 0)
            switch (e) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return A === 1 && e === "foreignObject" ? 0 : A
    }
    function jf(A, e) {
        return A === "textarea" || A === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
    }
    var Zf = null;
    function ov() {
        var A = window.event;
        return A && A.type === "popstate" ? A === Zf ? !1 : (Zf = A,
        !0) : (Zf = null,
        !1)
    }
    var QQ = typeof setTimeout == "function" ? setTimeout : void 0
      , fv = typeof clearTimeout == "function" ? clearTimeout : void 0
      , wQ = typeof Promise == "function" ? Promise : void 0
      , Bv = typeof queueMicrotask == "function" ? queueMicrotask : typeof wQ < "u" ? function(A) {
        return wQ.resolve(null).then(A).catch(hv)
    }
    : QQ;
    function hv(A) {
        setTimeout(function() {
            throw A
        })
    }
    function dr(A) {
        return A === "head"
    }
    function CQ(A, e) {
        var r = e
          , l = 0;
        do {
            var c = r.nextSibling;
            if (A.removeChild(r),
            c && c.nodeType === 8)
                if (r = c.data,
                r === "/$" || r === "/&") {
                    if (l === 0) {
                        A.removeChild(c),
                        ci(e);
                        return
                    }
                    l--
                } else if (r === "$" || r === "$?" || r === "$~" || r === "$!" || r === "&")
                    l++;
                else if (r === "html")
                    _l(A.ownerDocument.documentElement);
                else if (r === "head") {
                    r = A.ownerDocument.head,
                    _l(r);
                    for (var f = r.firstChild; f; ) {
                        var Q = f.nextSibling
                          , U = f.nodeName;
                        f[FA] || U === "SCRIPT" || U === "STYLE" || U === "LINK" && f.rel.toLowerCase() === "stylesheet" || r.removeChild(f),
                        f = Q
                    }
                } else
                    r === "body" && _l(A.ownerDocument.body);
            r = c
        } while (r);
        ci(e)
    }
    function UQ(A, e) {
        var r = A;
        A = 0;
        do {
            var l = r.nextSibling;
            if (r.nodeType === 1 ? e ? (r._stashedDisplay = r.style.display,
            r.style.display = "none") : (r.style.display = r._stashedDisplay || "",
            r.getAttribute("style") === "" && r.removeAttribute("style")) : r.nodeType === 3 && (e ? (r._stashedText = r.nodeValue,
            r.nodeValue = "") : r.nodeValue = r._stashedText || ""),
            l && l.nodeType === 8)
                if (r = l.data,
                r === "/$") {
                    if (A === 0)
                        break;
                    A--
                } else
                    r !== "$" && r !== "$?" && r !== "$~" && r !== "$!" || A++;
            r = l
        } while (r)
    }
    function qf(A) {
        var e = A.firstChild;
        for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
            var r = e;
            switch (e = e.nextSibling,
            r.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                qf(r),
                LA(r);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (r.rel.toLowerCase() === "stylesheet")
                    continue
            }
            A.removeChild(r)
        }
    }
    function gv(A, e, r, l) {
        for (; A.nodeType === 1; ) {
            var c = r;
            if (A.nodeName.toLowerCase() !== e.toLowerCase()) {
                if (!l && (A.nodeName !== "INPUT" || A.type !== "hidden"))
                    break
            } else if (l) {
                if (!A[FA])
                    switch (e) {
                    case "meta":
                        if (!A.hasAttribute("itemprop"))
                            break;
                        return A;
                    case "link":
                        if (f = A.getAttribute("rel"),
                        f === "stylesheet" && A.hasAttribute("data-precedence"))
                            break;
                        if (f !== c.rel || A.getAttribute("href") !== (c.href == null || c.href === "" ? null : c.href) || A.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin) || A.getAttribute("title") !== (c.title == null ? null : c.title))
                            break;
                        return A;
                    case "style":
                        if (A.hasAttribute("data-precedence"))
                            break;
                        return A;
                    case "script":
                        if (f = A.getAttribute("src"),
                        (f !== (c.src == null ? null : c.src) || A.getAttribute("type") !== (c.type == null ? null : c.type) || A.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin)) && f && A.hasAttribute("async") && !A.hasAttribute("itemprop"))
                            break;
                        return A;
                    default:
                        return A
                    }
            } else if (e === "input" && A.type === "hidden") {
                var f = c.name == null ? null : "" + c.name;
                if (c.type === "hidden" && A.getAttribute("name") === f)
                    return A
            } else
                return A;
            if (A = Tt(A.nextSibling),
            A === null)
                break
        }
        return null
    }
    function dv(A, e, r) {
        if (e === "")
            return null;
        for (; A.nodeType !== 3; )
            if ((A.nodeType !== 1 || A.nodeName !== "INPUT" || A.type !== "hidden") && !r || (A = Tt(A.nextSibling),
            A === null))
                return null;
        return A
    }
    function pQ(A, e) {
        for (; A.nodeType !== 8; )
            if ((A.nodeType !== 1 || A.nodeName !== "INPUT" || A.type !== "hidden") && !e || (A = Tt(A.nextSibling),
            A === null))
                return null;
        return A
    }
    function Wf(A) {
        return A.data === "$?" || A.data === "$~"
    }
    function Pf(A) {
        return A.data === "$!" || A.data === "$?" && A.ownerDocument.readyState !== "loading"
    }
    function Qv(A, e) {
        var r = A.ownerDocument;
        if (A.data === "$~")
            A._reactRetry = e;
        else if (A.data !== "$?" || r.readyState !== "loading")
            e();
        else {
            var l = function() {
                e(),
                r.removeEventListener("DOMContentLoaded", l)
            };
            r.addEventListener("DOMContentLoaded", l),
            A._reactRetry = l
        }
    }
    function Tt(A) {
        for (; A != null; A = A.nextSibling) {
            var e = A.nodeType;
            if (e === 1 || e === 3)
                break;
            if (e === 8) {
                if (e = A.data,
                e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
                    break;
                if (e === "/$" || e === "/&")
                    return null
            }
        }
        return A
    }
    var $f = null;
    function mQ(A) {
        A = A.nextSibling;
        for (var e = 0; A; ) {
            if (A.nodeType === 8) {
                var r = A.data;
                if (r === "/$" || r === "/&") {
                    if (e === 0)
                        return Tt(A.nextSibling);
                    e--
                } else
                    r !== "$" && r !== "$!" && r !== "$?" && r !== "$~" && r !== "&" || e++
            }
            A = A.nextSibling
        }
        return null
    }
    function vQ(A) {
        A = A.previousSibling;
        for (var e = 0; A; ) {
            if (A.nodeType === 8) {
                var r = A.data;
                if (r === "$" || r === "$!" || r === "$?" || r === "$~" || r === "&") {
                    if (e === 0)
                        return A;
                    e--
                } else
                    r !== "/$" && r !== "/&" || e++
            }
            A = A.previousSibling
        }
        return null
    }
    function yQ(A, e, r) {
        switch (e = Hu(r),
        A) {
        case "html":
            if (A = e.documentElement,
            !A)
                throw Error(n(452));
            return A;
        case "head":
            if (A = e.head,
            !A)
                throw Error(n(453));
            return A;
        case "body":
            if (A = e.body,
            !A)
                throw Error(n(454));
            return A;
        default:
            throw Error(n(451))
        }
    }
    function _l(A) {
        for (var e = A.attributes; e.length; )
            A.removeAttributeNode(e[0]);
        LA(A)
    }
    var xt = new Map
      , FQ = new Set;
    function bu(A) {
        return typeof A.getRootNode == "function" ? A.getRootNode() : A.nodeType === 9 ? A : A.ownerDocument
    }
    var On = Z.d;
    Z.d = {
        f: wv,
        r: Cv,
        D: Uv,
        C: pv,
        L: mv,
        m: vv,
        X: Fv,
        S: yv,
        M: Ev
    };
    function wv() {
        var A = On.f()
          , e = Uu();
        return A || e
    }
    function Cv(A) {
        var e = ze(A);
        e !== null && e.tag === 5 && e.type === "form" ? Vd(e) : On.r(A)
    }
    var li = typeof document > "u" ? null : document;
    function EQ(A, e, r) {
        var l = li;
        if (l && typeof e == "string" && e) {
            var c = yt(e);
            c = 'link[rel="' + A + '"][href="' + c + '"]',
            typeof r == "string" && (c += '[crossorigin="' + r + '"]'),
            FQ.has(c) || (FQ.add(c),
            A = {
                rel: A,
                crossOrigin: r,
                href: e
            },
            l.querySelector(c) === null && (e = l.createElement("link"),
            xe(e, "link", A),
            re(e),
            l.head.appendChild(e)))
        }
    }
    function Uv(A) {
        On.D(A),
        EQ("dns-prefetch", A, null)
    }
    function pv(A, e) {
        On.C(A, e),
        EQ("preconnect", A, e)
    }
    function mv(A, e, r) {
        On.L(A, e, r);
        var l = li;
        if (l && A && e) {
            var c = 'link[rel="preload"][as="' + yt(e) + '"]';
            e === "image" && r && r.imageSrcSet ? (c += '[imagesrcset="' + yt(r.imageSrcSet) + '"]',
            typeof r.imageSizes == "string" && (c += '[imagesizes="' + yt(r.imageSizes) + '"]')) : c += '[href="' + yt(A) + '"]';
            var f = c;
            switch (e) {
            case "style":
                f = si(A);
                break;
            case "script":
                f = ui(A)
            }
            xt.has(f) || (A = w({
                rel: "preload",
                href: e === "image" && r && r.imageSrcSet ? void 0 : A,
                as: e
            }, r),
            xt.set(f, A),
            l.querySelector(c) !== null || e === "style" && l.querySelector(Hl(f)) || e === "script" && l.querySelector(bl(f)) || (e = l.createElement("link"),
            xe(e, "link", A),
            re(e),
            l.head.appendChild(e)))
        }
    }
    function vv(A, e) {
        On.m(A, e);
        var r = li;
        if (r && A) {
            var l = e && typeof e.as == "string" ? e.as : "script"
              , c = 'link[rel="modulepreload"][as="' + yt(l) + '"][href="' + yt(A) + '"]'
              , f = c;
            switch (l) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                f = ui(A)
            }
            if (!xt.has(f) && (A = w({
                rel: "modulepreload",
                href: A
            }, e),
            xt.set(f, A),
            r.querySelector(c) === null)) {
                switch (l) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (r.querySelector(bl(f)))
                        return
                }
                l = r.createElement("link"),
                xe(l, "link", A),
                re(l),
                r.head.appendChild(l)
            }
        }
    }
    function yv(A, e, r) {
        On.S(A, e, r);
        var l = li;
        if (l && A) {
            var c = An(l).hoistableStyles
              , f = si(A);
            e = e || "default";
            var Q = c.get(f);
            if (!Q) {
                var U = {
                    loading: 0,
                    preload: null
                };
                if (Q = l.querySelector(Hl(f)))
                    U.loading = 5;
                else {
                    A = w({
                        rel: "stylesheet",
                        href: A,
                        "data-precedence": e
                    }, r),
                    (r = xt.get(f)) && AB(A, r);
                    var F = Q = l.createElement("link");
                    re(F),
                    xe(F, "link", A),
                    F._p = new Promise(function(I, J) {
                        F.onload = I,
                        F.onerror = J
                    }
                    ),
                    F.addEventListener("load", function() {
                        U.loading |= 1
                    }),
                    F.addEventListener("error", function() {
                        U.loading |= 2
                    }),
                    U.loading |= 4,
                    Su(Q, e, l)
                }
                Q = {
                    type: "stylesheet",
                    instance: Q,
                    count: 1,
                    state: U
                },
                c.set(f, Q)
            }
        }
    }
    function Fv(A, e) {
        On.X(A, e);
        var r = li;
        if (r && A) {
            var l = An(r).hoistableScripts
              , c = ui(A)
              , f = l.get(c);
            f || (f = r.querySelector(bl(c)),
            f || (A = w({
                src: A,
                async: !0
            }, e),
            (e = xt.get(c)) && eB(A, e),
            f = r.createElement("script"),
            re(f),
            xe(f, "link", A),
            r.head.appendChild(f)),
            f = {
                type: "script",
                instance: f,
                count: 1,
                state: null
            },
            l.set(c, f))
        }
    }
    function Ev(A, e) {
        On.M(A, e);
        var r = li;
        if (r && A) {
            var l = An(r).hoistableScripts
              , c = ui(A)
              , f = l.get(c);
            f || (f = r.querySelector(bl(c)),
            f || (A = w({
                src: A,
                async: !0,
                type: "module"
            }, e),
            (e = xt.get(c)) && eB(A, e),
            f = r.createElement("script"),
            re(f),
            xe(f, "link", A),
            r.head.appendChild(f)),
            f = {
                type: "script",
                instance: f,
                count: 1,
                state: null
            },
            l.set(c, f))
        }
    }
    function _Q(A, e, r, l) {
        var c = (c = QA.current) ? bu(c) : null;
        if (!c)
            throw Error(n(446));
        switch (A) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof r.precedence == "string" && typeof r.href == "string" ? (e = si(r.href),
            r = An(c).hoistableStyles,
            l = r.get(e),
            l || (l = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            r.set(e, l)),
            l) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (r.rel === "stylesheet" && typeof r.href == "string" && typeof r.precedence == "string") {
                A = si(r.href);
                var f = An(c).hoistableStyles
                  , Q = f.get(A);
                if (Q || (c = c.ownerDocument || c,
                Q = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                f.set(A, Q),
                (f = c.querySelector(Hl(A))) && !f._p && (Q.instance = f,
                Q.state.loading = 5),
                xt.has(A) || (r = {
                    rel: "preload",
                    as: "style",
                    href: r.href,
                    crossOrigin: r.crossOrigin,
                    integrity: r.integrity,
                    media: r.media,
                    hrefLang: r.hrefLang,
                    referrerPolicy: r.referrerPolicy
                },
                xt.set(A, r),
                f || _v(c, A, r, Q.state))),
                e && l === null)
                    throw Error(n(528, ""));
                return Q
            }
            if (e && l !== null)
                throw Error(n(529, ""));
            return null;
        case "script":
            return e = r.async,
            r = r.src,
            typeof r == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = ui(r),
            r = An(c).hoistableScripts,
            l = r.get(e),
            l || (l = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            r.set(e, l)),
            l) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(n(444, A))
        }
    }
    function si(A) {
        return 'href="' + yt(A) + '"'
    }
    function Hl(A) {
        return 'link[rel="stylesheet"][' + A + "]"
    }
    function HQ(A) {
        return w({}, A, {
            "data-precedence": A.precedence,
            precedence: null
        })
    }
    function _v(A, e, r, l) {
        A.querySelector('link[rel="preload"][as="style"][' + e + "]") ? l.loading = 1 : (e = A.createElement("link"),
        l.preload = e,
        e.addEventListener("load", function() {
            return l.loading |= 1
        }),
        e.addEventListener("error", function() {
            return l.loading |= 2
        }),
        xe(e, "link", r),
        re(e),
        A.head.appendChild(e))
    }
    function ui(A) {
        return '[src="' + yt(A) + '"]'
    }
    function bl(A) {
        return "script[async]" + A
    }
    function bQ(A, e, r) {
        if (e.count++,
        e.instance === null)
            switch (e.type) {
            case "style":
                var l = A.querySelector('style[data-href~="' + yt(r.href) + '"]');
                if (l)
                    return e.instance = l,
                    re(l),
                    l;
                var c = w({}, r, {
                    "data-href": r.href,
                    "data-precedence": r.precedence,
                    href: null,
                    precedence: null
                });
                return l = (A.ownerDocument || A).createElement("style"),
                re(l),
                xe(l, "style", c),
                Su(l, r.precedence, A),
                e.instance = l;
            case "stylesheet":
                c = si(r.href);
                var f = A.querySelector(Hl(c));
                if (f)
                    return e.state.loading |= 4,
                    e.instance = f,
                    re(f),
                    f;
                l = HQ(r),
                (c = xt.get(c)) && AB(l, c),
                f = (A.ownerDocument || A).createElement("link"),
                re(f);
                var Q = f;
                return Q._p = new Promise(function(U, F) {
                    Q.onload = U,
                    Q.onerror = F
                }
                ),
                xe(f, "link", l),
                e.state.loading |= 4,
                Su(f, r.precedence, A),
                e.instance = f;
            case "script":
                return f = ui(r.src),
                (c = A.querySelector(bl(f))) ? (e.instance = c,
                re(c),
                c) : (l = r,
                (c = xt.get(f)) && (l = w({}, r),
                eB(l, c)),
                A = A.ownerDocument || A,
                c = A.createElement("script"),
                re(c),
                xe(c, "link", l),
                A.head.appendChild(c),
                e.instance = c);
            case "void":
                return null;
            default:
                throw Error(n(443, e.type))
            }
        else
            e.type === "stylesheet" && (e.state.loading & 4) === 0 && (l = e.instance,
            e.state.loading |= 4,
            Su(l, r.precedence, A));
        return e.instance
    }
    function Su(A, e, r) {
        for (var l = r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), c = l.length ? l[l.length - 1] : null, f = c, Q = 0; Q < l.length; Q++) {
            var U = l[Q];
            if (U.dataset.precedence === e)
                f = U;
            else if (f !== c)
                break
        }
        f ? f.parentNode.insertBefore(A, f.nextSibling) : (e = r.nodeType === 9 ? r.head : r,
        e.insertBefore(A, e.firstChild))
    }
    function AB(A, e) {
        A.crossOrigin == null && (A.crossOrigin = e.crossOrigin),
        A.referrerPolicy == null && (A.referrerPolicy = e.referrerPolicy),
        A.title == null && (A.title = e.title)
    }
    function eB(A, e) {
        A.crossOrigin == null && (A.crossOrigin = e.crossOrigin),
        A.referrerPolicy == null && (A.referrerPolicy = e.referrerPolicy),
        A.integrity == null && (A.integrity = e.integrity)
    }
    var Tu = null;
    function SQ(A, e, r) {
        if (Tu === null) {
            var l = new Map
              , c = Tu = new Map;
            c.set(r, l)
        } else
            c = Tu,
            l = c.get(r),
            l || (l = new Map,
            c.set(r, l));
        if (l.has(A))
            return l;
        for (l.set(A, null),
        r = r.getElementsByTagName(A),
        c = 0; c < r.length; c++) {
            var f = r[c];
            if (!(f[FA] || f[H] || A === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
                var Q = f.getAttribute(e) || "";
                Q = A + Q;
                var U = l.get(Q);
                U ? U.push(f) : l.set(Q, [f])
            }
        }
        return l
    }
    function TQ(A, e, r) {
        A = A.ownerDocument || A,
        A.head.insertBefore(r, e === "title" ? A.querySelector("head > title") : null)
    }
    function Hv(A, e, r) {
        if (r === 1 || e.itemProp != null)
            return !1;
        switch (A) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
                break;
            return !0;
        case "link":
            if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
                break;
            return e.rel === "stylesheet" ? (A = e.disabled,
            typeof e.precedence == "string" && A == null) : !0;
        case "script":
            if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
                return !0
        }
        return !1
    }
    function xQ(A) {
        return !(A.type === "stylesheet" && (A.state.loading & 3) === 0)
    }
    function bv(A, e, r, l) {
        if (r.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (r.state.loading & 4) === 0) {
            if (r.instance === null) {
                var c = si(l.href)
                  , f = e.querySelector(Hl(c));
                if (f) {
                    e = f._p,
                    e !== null && typeof e == "object" && typeof e.then == "function" && (A.count++,
                    A = xu.bind(A),
                    e.then(A, A)),
                    r.state.loading |= 4,
                    r.instance = f,
                    re(f);
                    return
                }
                f = e.ownerDocument || e,
                l = HQ(l),
                (c = xt.get(c)) && AB(l, c),
                f = f.createElement("link"),
                re(f);
                var Q = f;
                Q._p = new Promise(function(U, F) {
                    Q.onload = U,
                    Q.onerror = F
                }
                ),
                xe(f, "link", l),
                r.instance = f
            }
            A.stylesheets === null && (A.stylesheets = new Map),
            A.stylesheets.set(r, e),
            (e = r.state.preload) && (r.state.loading & 3) === 0 && (A.count++,
            r = xu.bind(A),
            e.addEventListener("load", r),
            e.addEventListener("error", r))
        }
    }
    var tB = 0;
    function Sv(A, e) {
        return A.stylesheets && A.count === 0 && Lu(A, A.stylesheets),
        0 < A.count || 0 < A.imgCount ? function(r) {
            var l = setTimeout(function() {
                if (A.stylesheets && Lu(A, A.stylesheets),
                A.unsuspend) {
                    var f = A.unsuspend;
                    A.unsuspend = null,
                    f()
                }
            }, 6e4 + e);
            0 < A.imgBytes && tB === 0 && (tB = 62500 * cv());
            var c = setTimeout(function() {
                if (A.waitingForImages = !1,
                A.count === 0 && (A.stylesheets && Lu(A, A.stylesheets),
                A.unsuspend)) {
                    var f = A.unsuspend;
                    A.unsuspend = null,
                    f()
                }
            }, (A.imgBytes > tB ? 50 : 800) + e);
            return A.unsuspend = r,
            function() {
                A.unsuspend = null,
                clearTimeout(l),
                clearTimeout(c)
            }
        }
        : null
    }
    function xu() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                Lu(this, this.stylesheets);
            else if (this.unsuspend) {
                var A = this.unsuspend;
                this.unsuspend = null,
                A()
            }
        }
    }
    var Du = null;
    function Lu(A, e) {
        A.stylesheets = null,
        A.unsuspend !== null && (A.count++,
        Du = new Map,
        e.forEach(Tv, A),
        Du = null,
        xu.call(A))
    }
    function Tv(A, e) {
        if (!(e.state.loading & 4)) {
            var r = Du.get(A);
            if (r)
                var l = r.get(null);
            else {
                r = new Map,
                Du.set(A, r);
                for (var c = A.querySelectorAll("link[data-precedence],style[data-precedence]"), f = 0; f < c.length; f++) {
                    var Q = c[f];
                    (Q.nodeName === "LINK" || Q.getAttribute("media") !== "not all") && (r.set(Q.dataset.precedence, Q),
                    l = Q)
                }
                l && r.set(null, l)
            }
            c = e.instance,
            Q = c.getAttribute("data-precedence"),
            f = r.get(Q) || l,
            f === l && r.set(null, c),
            r.set(Q, c),
            this.count++,
            l = xu.bind(this),
            c.addEventListener("load", l),
            c.addEventListener("error", l),
            f ? f.parentNode.insertBefore(c, f.nextSibling) : (A = A.nodeType === 9 ? A.head : A,
            A.insertBefore(c, A.firstChild)),
            e.state.loading |= 4
        }
    }
    var Sl = {
        $$typeof: O,
        Provider: null,
        Consumer: null,
        _currentValue: rA,
        _currentValue2: rA,
        _threadCount: 0
    };
    function xv(A, e, r, l, c, f, Q, U, F) {
        this.tag = 1,
        this.containerInfo = A,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = ba(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = ba(0),
        this.hiddenUpdates = ba(null),
        this.identifierPrefix = l,
        this.onUncaughtError = c,
        this.onCaughtError = f,
        this.onRecoverableError = Q,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = F,
        this.incompleteTransitions = new Map
    }
    function DQ(A, e, r, l, c, f, Q, U, F, I, J, q) {
        return A = new xv(A,e,r,Q,F,I,J,q,U),
        e = 1,
        f === !0 && (e |= 24),
        f = ct(3, null, null, e),
        A.current = f,
        f.stateNode = A,
        e = Lo(),
        e.refCount++,
        A.pooledCache = e,
        e.refCount++,
        f.memoizedState = {
            element: l,
            isDehydrated: r,
            cache: e
        },
        Ko(f),
        A
    }
    function LQ(A) {
        return A ? (A = Na,
        A) : Na
    }
    function OQ(A, e, r, l, c, f) {
        c = LQ(c),
        l.context === null ? l.context = c : l.pendingContext = c,
        l = ar(e),
        l.payload = {
            element: r
        },
        f = f === void 0 ? null : f,
        f !== null && (l.callback = f),
        r = ir(A, l, e),
        r !== null && (At(r, A, e),
        sl(r, A, e))
    }
    function MQ(A, e) {
        if (A = A.memoizedState,
        A !== null && A.dehydrated !== null) {
            var r = A.retryLane;
            A.retryLane = r !== 0 && r < e ? r : e
        }
    }
    function nB(A, e) {
        MQ(A, e),
        (A = A.alternate) && MQ(A, e)
    }
    function IQ(A) {
        if (A.tag === 13 || A.tag === 31) {
            var e = Pr(A, 67108864);
            e !== null && At(e, A, 67108864),
            nB(A, 67108864)
        }
    }
    function KQ(A) {
        if (A.tag === 13 || A.tag === 31) {
            var e = gt();
            e = Xi(e);
            var r = Pr(A, e);
            r !== null && At(r, A, e),
            nB(A, e)
        }
    }
    var Ou = !0;
    function Dv(A, e, r, l) {
        var c = D.T;
        D.T = null;
        var f = Z.p;
        try {
            Z.p = 2,
            rB(A, e, r, l)
        } finally {
            Z.p = f,
            D.T = c
        }
    }
    function Lv(A, e, r, l) {
        var c = D.T;
        D.T = null;
        var f = Z.p;
        try {
            Z.p = 8,
            rB(A, e, r, l)
        } finally {
            Z.p = f,
            D.T = c
        }
    }
    function rB(A, e, r, l) {
        if (Ou) {
            var c = aB(l);
            if (c === null)
                Xf(A, e, l, Mu, r),
                NQ(A, l);
            else if (Mv(c, A, e, r, l))
                l.stopPropagation();
            else if (NQ(A, l),
            e & 4 && -1 < Ov.indexOf(A)) {
                for (; c !== null; ) {
                    var f = ze(c);
                    if (f !== null)
                        switch (f.tag) {
                        case 3:
                            if (f = f.stateNode,
                            f.current.memoizedState.isDehydrated) {
                                var Q = Pt(f.pendingLanes);
                                if (Q !== 0) {
                                    var U = f;
                                    for (U.pendingLanes |= 2,
                                    U.entangledLanes |= 2; Q; ) {
                                        var F = 1 << 31 - Ie(Q);
                                        U.entanglements[1] |= F,
                                        Q &= ~F
                                    }
                                    an(f),
                                    (IA & 6) === 0 && (wu = Ce() + 500,
                                    yl(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            U = Pr(f, 2),
                            U !== null && At(U, f, 2),
                            Uu(),
                            nB(f, 2)
                        }
                    if (f = aB(l),
                    f === null && Xf(A, e, l, Mu, r),
                    f === c)
                        break;
                    c = f
                }
                c !== null && l.stopPropagation()
            } else
                Xf(A, e, l, null, r)
        }
    }
    function aB(A) {
        return A = ao(A),
        iB(A)
    }
    var Mu = null;
    function iB(A) {
        if (Mu = null,
        A = Ue(A),
        A !== null) {
            var e = u(A);
            if (e === null)
                A = null;
            else {
                var r = e.tag;
                if (r === 13) {
                    if (A = o(e),
                    A !== null)
                        return A;
                    A = null
                } else if (r === 31) {
                    if (A = B(e),
                    A !== null)
                        return A;
                    A = null
                } else if (r === 3) {
                    if (e.stateNode.current.memoizedState.isDehydrated)
                        return e.tag === 3 ? e.stateNode.containerInfo : null;
                    A = null
                } else
                    e !== A && (A = null)
            }
        }
        return Mu = A,
        null
    }
    function RQ(A) {
        switch (A) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (Zn()) {
            case qt:
                return 2;
            case dn:
                return 8;
            case Qn:
            case vs:
                return 32;
            case Fa:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var lB = !1
      , Qr = null
      , wr = null
      , Cr = null
      , Tl = new Map
      , xl = new Map
      , Ur = []
      , Ov = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function NQ(A, e) {
        switch (A) {
        case "focusin":
        case "focusout":
            Qr = null;
            break;
        case "dragenter":
        case "dragleave":
            wr = null;
            break;
        case "mouseover":
        case "mouseout":
            Cr = null;
            break;
        case "pointerover":
        case "pointerout":
            Tl.delete(e.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            xl.delete(e.pointerId)
        }
    }
    function Dl(A, e, r, l, c, f) {
        return A === null || A.nativeEvent !== f ? (A = {
            blockedOn: e,
            domEventName: r,
            eventSystemFlags: l,
            nativeEvent: f,
            targetContainers: [c]
        },
        e !== null && (e = ze(e),
        e !== null && IQ(e)),
        A) : (A.eventSystemFlags |= l,
        e = A.targetContainers,
        c !== null && e.indexOf(c) === -1 && e.push(c),
        A)
    }
    function Mv(A, e, r, l, c) {
        switch (e) {
        case "focusin":
            return Qr = Dl(Qr, A, e, r, l, c),
            !0;
        case "dragenter":
            return wr = Dl(wr, A, e, r, l, c),
            !0;
        case "mouseover":
            return Cr = Dl(Cr, A, e, r, l, c),
            !0;
        case "pointerover":
            var f = c.pointerId;
            return Tl.set(f, Dl(Tl.get(f) || null, A, e, r, l, c)),
            !0;
        case "gotpointercapture":
            return f = c.pointerId,
            xl.set(f, Dl(xl.get(f) || null, A, e, r, l, c)),
            !0
        }
        return !1
    }
    function GQ(A) {
        var e = Ue(A.target);
        if (e !== null) {
            var r = u(e);
            if (r !== null) {
                if (e = r.tag,
                e === 13) {
                    if (e = o(r),
                    e !== null) {
                        A.blockedOn = e,
                        Yi(A.priority, function() {
                            KQ(r)
                        });
                        return
                    }
                } else if (e === 31) {
                    if (e = B(r),
                    e !== null) {
                        A.blockedOn = e,
                        Yi(A.priority, function() {
                            KQ(r)
                        });
                        return
                    }
                } else if (e === 3 && r.stateNode.current.memoizedState.isDehydrated) {
                    A.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
                    return
                }
            }
        }
        A.blockedOn = null
    }
    function Iu(A) {
        if (A.blockedOn !== null)
            return !1;
        for (var e = A.targetContainers; 0 < e.length; ) {
            var r = aB(A.nativeEvent);
            if (r === null) {
                r = A.nativeEvent;
                var l = new r.constructor(r.type,r);
                ro = l,
                r.target.dispatchEvent(l),
                ro = null
            } else
                return e = ze(r),
                e !== null && IQ(e),
                A.blockedOn = r,
                !1;
            e.shift()
        }
        return !0
    }
    function VQ(A, e, r) {
        Iu(A) && r.delete(e)
    }
    function Iv() {
        lB = !1,
        Qr !== null && Iu(Qr) && (Qr = null),
        wr !== null && Iu(wr) && (wr = null),
        Cr !== null && Iu(Cr) && (Cr = null),
        Tl.forEach(VQ),
        xl.forEach(VQ)
    }
    function Ku(A, e) {
        A.blockedOn === e && (A.blockedOn = null,
        lB || (lB = !0,
        i.unstable_scheduleCallback(i.unstable_NormalPriority, Iv)))
    }
    var Ru = null;
    function zQ(A) {
        Ru !== A && (Ru = A,
        i.unstable_scheduleCallback(i.unstable_NormalPriority, function() {
            Ru === A && (Ru = null);
            for (var e = 0; e < A.length; e += 3) {
                var r = A[e]
                  , l = A[e + 1]
                  , c = A[e + 2];
                if (typeof l != "function") {
                    if (iB(l || r) === null)
                        continue;
                    break
                }
                var f = ze(r);
                f !== null && (A.splice(e, 3),
                e -= 3,
                rf(f, {
                    pending: !0,
                    data: c,
                    method: r.method,
                    action: l
                }, l, c))
            }
        }))
    }
    function ci(A) {
        function e(F) {
            return Ku(F, A)
        }
        Qr !== null && Ku(Qr, A),
        wr !== null && Ku(wr, A),
        Cr !== null && Ku(Cr, A),
        Tl.forEach(e),
        xl.forEach(e);
        for (var r = 0; r < Ur.length; r++) {
            var l = Ur[r];
            l.blockedOn === A && (l.blockedOn = null)
        }
        for (; 0 < Ur.length && (r = Ur[0],
        r.blockedOn === null); )
            GQ(r),
            r.blockedOn === null && Ur.shift();
        if (r = (A.ownerDocument || A).$$reactFormReplay,
        r != null)
            for (l = 0; l < r.length; l += 3) {
                var c = r[l]
                  , f = r[l + 1]
                  , Q = c[Y] || null;
                if (typeof f == "function")
                    Q || zQ(r);
                else if (Q) {
                    var U = null;
                    if (f && f.hasAttribute("formAction")) {
                        if (c = f,
                        Q = f[Y] || null)
                            U = Q.formAction;
                        else if (iB(c) !== null)
                            continue
                    } else
                        U = Q.action;
                    typeof U == "function" ? r[l + 1] = U : (r.splice(l, 3),
                    l -= 3),
                    zQ(r)
                }
            }
    }
    function XQ() {
        function A(f) {
            f.canIntercept && f.info === "react-transition" && f.intercept({
                handler: function() {
                    return new Promise(function(Q) {
                        return c = Q
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function e() {
            c !== null && (c(),
            c = null),
            l || setTimeout(r, 20)
        }
        function r() {
            if (!l && !navigation.transition) {
                var f = navigation.currentEntry;
                f && f.url != null && navigation.navigate(f.url, {
                    state: f.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var l = !1
              , c = null;
            return navigation.addEventListener("navigate", A),
            navigation.addEventListener("navigatesuccess", e),
            navigation.addEventListener("navigateerror", e),
            setTimeout(r, 100),
            function() {
                l = !0,
                navigation.removeEventListener("navigate", A),
                navigation.removeEventListener("navigatesuccess", e),
                navigation.removeEventListener("navigateerror", e),
                c !== null && (c(),
                c = null)
            }
        }
    }
    function sB(A) {
        this._internalRoot = A
    }
    Nu.prototype.render = sB.prototype.render = function(A) {
        var e = this._internalRoot;
        if (e === null)
            throw Error(n(409));
        var r = e.current
          , l = gt();
        OQ(r, l, A, e, null, null)
    }
    ,
    Nu.prototype.unmount = sB.prototype.unmount = function() {
        var A = this._internalRoot;
        if (A !== null) {
            this._internalRoot = null;
            var e = A.containerInfo;
            OQ(A.current, 2, null, A, null, null),
            Uu(),
            e[AA] = null
        }
    }
    ;
    function Nu(A) {
        this._internalRoot = A
    }
    Nu.prototype.unstable_scheduleHydration = function(A) {
        if (A) {
            var e = Pn();
            A = {
                blockedOn: null,
                target: A,
                priority: e
            };
            for (var r = 0; r < Ur.length && e !== 0 && e < Ur[r].priority; r++)
                ;
            Ur.splice(r, 0, A),
            r === 0 && GQ(A)
        }
    }
    ;
    var YQ = t.version;
    if (YQ !== "19.2.4")
        throw Error(n(527, YQ, "19.2.4"));
    Z.findDOMNode = function(A) {
        var e = A._reactInternals;
        if (e === void 0)
            throw typeof A.render == "function" ? Error(n(188)) : (A = Object.keys(A).join(","),
            Error(n(268, A)));
        return A = g(e),
        A = A !== null ? d(A) : null,
        A = A === null ? null : A.stateNode,
        A
    }
    ;
    var Kv = {
        bundleType: 0,
        version: "19.2.4",
        rendererPackageName: "react-dom",
        currentDispatcherRef: D,
        reconcilerVersion: "19.2.4"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Gu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Gu.isDisabled && Gu.supportsFiber)
            try {
                Wt = Gu.inject(Kv),
                Fe = Gu
            } catch {}
    }
    return Ol.createRoot = function(A, e) {
        if (!s(A))
            throw Error(n(299));
        var r = !1
          , l = ""
          , c = Pd
          , f = $d
          , Q = A0;
        return e != null && (e.unstable_strictMode === !0 && (r = !0),
        e.identifierPrefix !== void 0 && (l = e.identifierPrefix),
        e.onUncaughtError !== void 0 && (c = e.onUncaughtError),
        e.onCaughtError !== void 0 && (f = e.onCaughtError),
        e.onRecoverableError !== void 0 && (Q = e.onRecoverableError)),
        e = DQ(A, 1, !1, null, null, r, l, null, c, f, Q, XQ),
        A[AA] = e.current,
        zf(A),
        new sB(e)
    }
    ,
    Ol.hydrateRoot = function(A, e, r) {
        if (!s(A))
            throw Error(n(299));
        var l = !1
          , c = ""
          , f = Pd
          , Q = $d
          , U = A0
          , F = null;
        return r != null && (r.unstable_strictMode === !0 && (l = !0),
        r.identifierPrefix !== void 0 && (c = r.identifierPrefix),
        r.onUncaughtError !== void 0 && (f = r.onUncaughtError),
        r.onCaughtError !== void 0 && (Q = r.onCaughtError),
        r.onRecoverableError !== void 0 && (U = r.onRecoverableError),
        r.formState !== void 0 && (F = r.formState)),
        e = DQ(A, 1, !0, e, r ?? null, l, c, F, f, Q, U, XQ),
        e.context = LQ(null),
        r = e.current,
        l = gt(),
        l = Xi(l),
        c = ar(l),
        c.callback = null,
        ir(r, c, l),
        r = l,
        e.current.lanes = r,
        $t(e, r),
        an(e),
        A[AA] = e.current,
        zf(A),
        new Nu(e)
    }
    ,
    Ol.version = "19.2.4",
    Ol
}
var ew;
function kv() {
    if (ew)
        return oB.exports;
    ew = 1;
    function i() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
            } catch (t) {
                console.error(t)
            }
    }
    return i(),
    oB.exports = Jv(),
    oB.exports
}
var jv = kv();
const Le = 100
  , Zv = 7
  , tw = 8
  , Ml = 10;
function qv() {
    const i = tw
      , t = Le - tw
      , n = (t - i) / Ml
      , s = Math.min(Zv, n * .45)
      , u = [];
    u.push(`M ${i} ${i}`);
    for (let o = 0; o < Ml; o += 1) {
        const B = i + o * n
          , h = B + n / 2
          , g = B + n;
        u.push(`L ${h - s} ${i}`, `A ${s} ${s} 0 0 1 ${h + s} ${i}`, `L ${g} ${i}`)
    }
    for (let o = 0; o < Ml; o += 1) {
        const B = i + o * n
          , h = B + n / 2
          , g = B + n;
        u.push(`L ${t} ${h - s}`, `A ${s} ${s} 0 0 1 ${t} ${h + s}`, `L ${t} ${g}`)
    }
    for (let o = Ml - 1; o >= 0; o -= 1) {
        const B = i + o * n
          , h = B + n / 2;
        u.push(`L ${h + s} ${t}`, `A ${s} ${s} 0 0 1 ${h - s} ${t}`, `L ${B} ${t}`)
    }
    for (let o = Ml - 1; o >= 0; o -= 1) {
        const B = i + o * n
          , h = B + n / 2;
        u.push(`L ${i} ${h + s}`, `A ${s} ${s} 0 0 1 ${i} ${h - s}`, `L ${i} ${B}`)
    }
    return u.push("Z"),
    u.join(" ")
}
const Gn = qv()
  , Wv = "/sounds/punch.mp3";
let Il = null
  , gB = !1;
function FC() {
    return Il || (Il = new Audio(Wv),
    Il.preload = "auto",
    Il.volume = .42),
    Il
}
function ls() {
    const i = FC();
    if (gB)
        return;
    const t = i.play();
    t && t.then( () => {
        i.pause(),
        i.currentTime = 0,
        gB = !0
    }
    ).catch( () => {
        gB = !1
    }
    )
}
async function ss({soft: i=!1}={}) {
    const t = FC();
    try {
        t.pause(),
        t.currentTime = 0,
        t.volume = i ? .24 : .42,
        await t.play()
    } catch {}
}
let dB = null;
function Lh() {
    try {
        return dB || (dB = new (window.AudioContext || window.webkitAudioContext)),
        dB
    } catch {
        return null
    }
}
function Pv() {
    const i = Lh();
    if (!i)
        return;
    const t = .22
      , a = i.sampleRate
      , n = Math.floor(a * t)
      , s = i.createBuffer(1, n, a)
      , u = s.getChannelData(0);
    for (let g = 0; g < n; g++) {
        const d = g / a
          , w = d < .005 ? d / .005 : Math.exp(-(d - .005) * 12);
        u[g] = (Math.random() * 2 - 1) * w * .3
    }
    const o = i.createBufferSource();
    o.buffer = s;
    const B = i.createBiquadFilter();
    B.type = "bandpass",
    B.frequency.value = 3200,
    B.Q.value = .8;
    const h = i.createGain();
    h.gain.value = .35,
    o.connect(B).connect(h).connect(i.destination),
    o.start()
}
function $v() {
    const i = Lh();
    if (!i)
        return;
    const t = .04
      , a = i.sampleRate
      , n = Math.floor(a * t)
      , s = i.createBuffer(1, n, a)
      , u = s.getChannelData(0);
    for (let g = 0; g < n; g++) {
        const d = g / a
          , w = Math.exp(-d * 80);
        u[g] = (Math.random() * 2 - 1) * w * .2
    }
    const o = i.createBufferSource();
    o.buffer = s;
    const B = i.createBiquadFilter();
    B.type = "highpass",
    B.frequency.value = 2e3;
    const h = i.createGain();
    h.gain.value = .25,
    o.connect(B).connect(h).connect(i.destination),
    o.start()
}
function Ay() {
    const i = Lh();
    if (!i)
        return;
    const t = i.currentTime
      , n = Math.floor(i.sampleRate * .08)
      , s = i.createBuffer(1, n, i.sampleRate)
      , u = s.getChannelData(0);
    for (let w = 0; w < n; w++) {
        const C = w / i.sampleRate
          , m = Math.exp(-C * 60);
        u[w] = (Math.random() * 2 - 1) * m * .4
    }
    const o = i.createBufferSource();
    o.buffer = s;
    const B = i.createBiquadFilter();
    B.type = "bandpass",
    B.frequency.value = 1800,
    B.Q.value = 1.2;
    const h = i.createGain();
    h.gain.value = .3,
    o.connect(B).connect(h).connect(i.destination),
    o.start(t);
    const g = i.createOscillator();
    g.type = "sine",
    g.frequency.setValueAtTime(120, t),
    g.frequency.exponentialRampToValueAtTime(50, t + .06);
    const d = i.createGain();
    d.gain.setValueAtTime(.18, t),
    d.gain.exponentialRampToValueAtTime(.001, t + .08),
    g.connect(d).connect(i.destination),
    g.start(t),
    g.stop(t + .1)
}
function ey({day: i, photoUrl: t, rotationDeg: a=0, erased: n=!1, isAnimating: s=!1, animationLayer: u, onSelectImage: o, onRemove: B}) {
    const [h,g] = $.useState(!1)
      , [d,w] = $.useState(!1)
      , C = $.useRef(null)
      , m = $.useRef(null)
      , v = $.useMemo( () => `day-cell-stamp-clip-${i}-${Math.random().toString(36).slice(2, 8)}`, [i])
      , p = () => {
        ls(),
        C.current?.click()
    }
      , b = () => {
        if (!s) {
            if (!t) {
                p();
                return
            }
            g(E => !E)
        }
    }
    ;
    return $.useEffect( () => {
        if (!h)
            return;
        const E = S => {
            m.current?.contains(S.target) || g(!1)
        }
        ;
        return window.addEventListener("mousedown", E),
        () => window.removeEventListener("mousedown", E)
    }
    , [h]),
    V.jsxs("div", {
        className: `day-cell ${n ? "is-erased" : ""}`,
        children: [V.jsxs("button", {
            type: "button",
            className: "day-cell-hit",
            onClick: b,
            onKeyDown: E => {
                (E.key === "Enter" || E.key === " ") && (E.preventDefault(),
                b())
            }
            ,
            "aria-label": t ? `Day ${i}. Photo already stamped. Open actions.` : `Day ${i}. Add a photo to stamp.`,
            children: [V.jsx("span", {
                className: "day-cell-day",
                children: i
            }), !t && !s && V.jsx("span", {
                className: "day-cell-placeholder",
                children: "Tap to stamp photo"
            })]
        }), t && !s && V.jsx("div", {
            className: "day-cell-stamp",
            style: {
                transform: `rotate(${a}deg)`
            },
            "aria-hidden": !0,
            children: V.jsxs("svg", {
                viewBox: `0 0 ${Le} ${Le}`,
                className: "day-cell-stamp-svg",
                role: "presentation",
                children: [V.jsx("defs", {
                    children: V.jsx("clipPath", {
                        id: v,
                        clipPathUnits: "userSpaceOnUse",
                        children: V.jsx("path", {
                            d: Gn
                        })
                    })
                }), V.jsx("path", {
                    className: "day-cell-stamp-paper",
                    d: Gn
                }), V.jsx("image", {
                    href: t,
                    width: Le,
                    height: Le,
                    preserveAspectRatio: "xMidYMid slice",
                    clipPath: `url(#${v})`
                })]
            })
        }), t && h && V.jsxs("div", {
            className: "day-cell-menu",
            ref: m,
            children: [V.jsx("button", {
                type: "button",
                onClick: () => {
                    ls(),
                    w(!0),
                    g(!1)
                }
                ,
                children: "View"
            }), V.jsx("button", {
                type: "button",
                onClick: () => {
                    g(!1),
                    p()
                }
                ,
                children: "Replace"
            }), V.jsx("button", {
                type: "button",
                onClick: () => {
                    g(!1),
                    B()
                }
                ,
                children: "Remove"
            })]
        }), d && t && V.jsx("button", {
            type: "button",
            className: "day-cell-preview",
            onClick: () => w(!1),
            "aria-label": `Close preview for day ${i}`,
            children: V.jsx("img", {
                src: t,
                alt: `Day ${i} photo preview`
            })
        }), u, V.jsx("input", {
            ref: C,
            type: "file",
            accept: "image/*",
            className: "day-cell-file-input",
            onChange: E => {
                const S = E.target.files?.[0];
                S && o(S),
                E.currentTarget.value = ""
            }
        })]
    })
}
const ty = 220
  , ny = 270
  , ry = 430
  , ay = 980;
function iy({imageUrl: i, finalRotationDeg: t, reducedMotion: a, onComplete: n, onImpact: s}) {
    const [u,o] = $.useState(!1)
      , [B,h] = $.useState(!1)
      , [g,d] = $.useState(!1)
      , [w,C] = $.useState(!1)
      , m = $.useRef(!1)
      , v = $.useMemo( () => `stamp-clip-${Math.random().toString(36).slice(2, 9)}`, [])
      , p = () => {
        m.current || (m.current = !0,
        C(!0),
        n())
    }
      , b = () => {
        d(!0),
        o(!1),
        h(!1),
        p()
    }
    ;
    return $.useEffect( () => {
        if (a) {
            ss({
                soft: !0
            }).then( () => {
                s?.(),
                p()
            }
            );
            return
        }
        const E = [];
        return E.push(window.setTimeout( () => o(!0), 12)),
        E.push(window.setTimeout( () => o(!0), ty)),
        E.push(window.setTimeout( () => h(!0), ny)),
        E.push(window.setTimeout( () => {
            d(!0),
            ss(),
            s?.()
        }
        , ry)),
        E.push(window.setTimeout( () => p(), ay)),
        () => {
            E.forEach(S => window.clearTimeout(S))
        }
    }
    , [a]),
    w ? null : V.jsx("button", {
        type: "button",
        className: "punch-overlay",
        onClick: b,
        onKeyDown: E => {
            (E.key === "Enter" || E.key === " ") && (E.preventDefault(),
            b())
        }
        ,
        "aria-label": "Stamping photo in progress. Activate to skip animation.",
        children: V.jsxs("div", {
            className: "punch-stage",
            "aria-hidden": !0,
            children: [V.jsx("div", {
                className: `punch-source-card ${g ? "is-fading" : ""}`,
                children: V.jsx("img", {
                    src: i,
                    alt: ""
                })
            }), V.jsx("div", {
                className: `punch-scrap ${g ? "is-gone" : ""}`
            }), V.jsx("div", {
                className: `punch-stamp-layer ${g ? "is-snapped" : ""}`,
                style: {
                    "--stamp-rotate": `${t}deg`
                },
                children: V.jsxs("svg", {
                    viewBox: `0 0 ${Le} ${Le}`,
                    className: "punch-stamp-svg",
                    role: "presentation",
                    children: [V.jsx("defs", {
                        children: V.jsx("clipPath", {
                            id: v,
                            clipPathUnits: "userSpaceOnUse",
                            children: V.jsx("path", {
                                d: Gn
                            })
                        })
                    }), V.jsx("path", {
                        className: "punch-stamp-paper",
                        d: Gn
                    }), V.jsx("image", {
                        href: i,
                        width: Le,
                        height: Le,
                        preserveAspectRatio: "xMidYMid slice",
                        clipPath: `url(#${v})`
                    })]
                })
            }), V.jsxs("div", {
                className: ["punch-tool", u ? "is-visible" : "", B ? "is-pressing" : ""].join(" ").trim(),
                children: [V.jsx("div", {
                    className: "punch-tool-head",
                    children: V.jsx("div", {
                        className: "punch-tool-lever"
                    })
                }), V.jsx("div", {
                    className: "punch-tool-base"
                })]
            })]
        })
    })
}
const ly = 14;
function sy() {
    return Number((Math.random() * 3 - 1.5).toFixed(2))
}
function uy() {
    return Array.from({
        length: ly
    }, (i, t) => ({
        day: t + 1,
        photoUrl: null,
        pendingUrl: null,
        rotationDeg: 0,
        pendingRotationDeg: 0,
        animating: !1,
        erased: !1
    }))
}
function cy() {}
function oy() {
    const [i,t] = $.useState(uy)
      , [a,n] = $.useState(!1)
      , s = $.useMemo( () => window.matchMedia("(prefers-reduced-motion: reduce)"), []);
    $.useEffect( () => {
        const h = () => n(s.matches);
        return h(),
        s.addEventListener("change", h),
        () => s.removeEventListener("change", h)
    }
    , [s]),
    $.useEffect( () => () => {
        i.forEach(h => {
            h.photoUrl && URL.revokeObjectURL(h.photoUrl),
            h.pendingUrl && URL.revokeObjectURL(h.pendingUrl)
        }
        )
    }
    , []);
    const u = async (h, g) => {
        ls();
        const d = URL.createObjectURL(g)
          , w = sy();
        if (a) {
            await ss({
                soft: !0
            }),
            t(C => C.map( (m, v) => v !== h ? m : (m.photoUrl && URL.revokeObjectURL(m.photoUrl),
            m.pendingUrl && URL.revokeObjectURL(m.pendingUrl),
            {
                ...m,
                photoUrl: d,
                pendingUrl: null,
                animating: !1,
                rotationDeg: w,
                pendingRotationDeg: 0,
                erased: !1
            })));
            return
        }
        t(C => C.map( (m, v) => v !== h ? m : (m.pendingUrl && URL.revokeObjectURL(m.pendingUrl),
        {
            ...m,
            pendingUrl: d,
            pendingRotationDeg: w,
            animating: !0,
            erased: !1
        })))
    }
      , o = h => {
        t(g => g.map( (d, w) => w !== h ? d : d.pendingUrl ? (d.photoUrl && URL.revokeObjectURL(d.photoUrl),
        {
            ...d,
            photoUrl: d.pendingUrl,
            pendingUrl: null,
            animating: !1,
            rotationDeg: d.pendingRotationDeg,
            pendingRotationDeg: 0,
            erased: !1
        }) : {
            ...d,
            animating: !1,
            pendingRotationDeg: 0
        }))
    }
      , B = h => {
        t(g => g.map( (d, w) => w !== h ? d : (d.photoUrl && URL.revokeObjectURL(d.photoUrl),
        d.pendingUrl && URL.revokeObjectURL(d.pendingUrl),
        {
            ...d,
            photoUrl: null,
            pendingUrl: null,
            pendingRotationDeg: 0,
            animating: !1,
            erased: !0
        })))
    }
    ;
    return V.jsxs("main", {
        className: "demo-calendar-page",
        children: [V.jsxs("header", {
            className: "demo-calendar-header",
            children: [V.jsx("h1", {
                children: "Scrapbook Stamp Calendar"
            }), V.jsx("p", {
                children: "Choose a day, punch a memory into place, and keep one stamp per day."
            })]
        }), V.jsx("section", {
            className: "demo-calendar-grid",
            "aria-label": "Calendar day cells",
            children: i.map( (h, g) => V.jsx(ey, {
                day: h.day,
                photoUrl: h.photoUrl ?? void 0,
                rotationDeg: h.rotationDeg,
                erased: h.erased,
                isAnimating: h.animating,
                onSelectImage: d => {
                    u(g, d)
                }
                ,
                onRemove: () => B(g),
                animationLayer: h.animating && h.pendingUrl ? V.jsx(iy, {
                    imageUrl: h.pendingUrl,
                    finalRotationDeg: h.pendingRotationDeg,
                    reducedMotion: a,
                    onImpact: cy,
                    onComplete: () => o(g)
                }) : void 0
            }, h.day))
        })]
    })
}
var EC = yC();
const fy = "queensjournal"
  , By = 2
  , Ot = "photos"
  , jB = i => String(i).padStart(2, "0")
  , Oh = (i, t, a) => `${i}-${jB(t + 1)}-${jB(a)}`
  , hy = i => {
    const [t,a,n] = i.split("-").map(Number);
    return {
        year: t,
        month: a - 1,
        day: n
    }
}
  , gy = (i, t) => `${i}-${jB(t + 1)}-`;
let Vu = null;
function Mh() {
    return Vu || (Vu = new Promise( (i, t) => {
        const a = indexedDB.open(fy, By);
        a.onupgradeneeded = n => {
            const s = a.result
              , u = n.oldVersion;
            if (u < 1)
                s.objectStoreNames.contains(Ot) || s.createObjectStore(Ot, {
                    keyPath: "id"
                });
            else if (u < 2) {
                const o = a.transaction;
                if (s.objectStoreNames.contains(Ot)) {
                    const h = o.objectStore(Ot).getAll();
                    h.onsuccess = () => {
                        const g = h.result || [];
                        s.deleteObjectStore(Ot);
                        const d = s.createObjectStore(Ot, {
                            keyPath: "id"
                        })
                          , w = new Date
                          , C = w.getFullYear()
                          , m = w.getMonth();
                        for (const v of g) {
                            const p = Oh(C, m, v.day);
                            d.put({
                                id: p,
                                dataUrl: v.dataUrl,
                                crop: v.crop
                            })
                        }
                    }
                }
            }
        }
        ,
        a.onsuccess = () => i(a.result),
        a.onerror = () => t(a.error)
    }
    ),
    Vu)
}
async function dy(i, t) {
    const a = await Mh()
      , n = gy(i, t);
    return new Promise( (s, u) => {
        const h = a.transaction(Ot, "readonly").objectStore(Ot).getAll();
        h.onsuccess = () => {
            const g = {};
            for (const d of h.result)
                if (d.id && d.id.startsWith(n)) {
                    const {day: w} = hy(d.id);
                    g[w] = {
                        dataUrl: d.dataUrl,
                        crop: d.crop
                    }
                }
            s(g)
        }
        ,
        h.onerror = () => u(h.error)
    }
    )
}
async function Qy(i, t, a, n, s) {
    const u = await Mh()
      , o = Oh(i, t, a);
    return new Promise( (B, h) => {
        const g = u.transaction(Ot, "readwrite");
        g.objectStore(Ot).put({
            id: o,
            dataUrl: n,
            crop: s
        }),
        g.oncomplete = () => B(),
        g.onerror = () => h(g.error)
    }
    )
}
async function wy(i, t, a) {
    const n = await Mh()
      , s = Oh(i, t, a);
    return new Promise( (u, o) => {
        const B = n.transaction(Ot, "readwrite");
        B.objectStore(Ot).delete(s),
        B.oncomplete = () => u(),
        B.onerror = () => o(B.error)
    }
    )
}
function Rn(i) {
    if (i === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return i
}
function _C(i, t) {
    i.prototype = Object.create(t.prototype),
    i.prototype.constructor = i,
    i.__proto__ = t
}
var pt = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, Hi = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, Ih, Me, Ae, It = 1e8, kA = 1 / It, ZB = Math.PI * 2, Cy = ZB / 4, Uy = 0, HC = Math.sqrt, py = Math.cos, my = Math.sin, He = function(t) {
    return typeof t == "string"
}, le = function(t) {
    return typeof t == "function"
}, zn = function(t) {
    return typeof t == "number"
}, Kh = function(t) {
    return typeof t > "u"
}, fn = function(t) {
    return typeof t == "object"
}, tt = function(t) {
    return t !== !1
}, Rh = function() {
    return typeof window < "u"
}, zu = function(t) {
    return le(t) || He(t)
}, bC = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
, Ve = Array.isArray, vy = /random\([^)]+\)/g, yy = /,\s*/g, nw = /(?:-?\.?\d|\.)+/gi, SC = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, pi = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, QB = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, TC = /[+-]=-?[.\d]+/, Fy = /[^,'"\[\]\s]+/gi, Ey = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, te, sn, qB, Nh, mt = {}, vc = {}, xC, DC = function(t) {
    return (vc = bi(t, mt)) && it
}, Gh = function(t, a) {
    return console.warn("Invalid property", t, "set to", a, "Missing plugin? gsap.registerPlugin()")
}, us = function(t, a) {
    return !a && console.warn(t)
}, LC = function(t, a) {
    return t && (mt[t] = a) && vc && (vc[t] = a) || mt
}, cs = function() {
    return 0
}, _y = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
}, gc = {
    suppressEvents: !0,
    kill: !1
}, Hy = {
    suppressEvents: !0
}, Vh = {}, Dr = [], WB = {}, OC, Qt = {}, wB = {}, rw = 30, dc = [], zh = "", Xh = function(t) {
    var a = t[0], n, s;
    if (fn(a) || le(a) || (t = [t]),
    !(n = (a._gsap || {}).harness)) {
        for (s = dc.length; s-- && !dc[s].targetTest(a); )
            ;
        n = dc[s]
    }
    for (s = t.length; s--; )
        t[s] && (t[s]._gsap || (t[s]._gsap = new aU(t[s],n))) || t.splice(s, 1);
    return t
}, wa = function(t) {
    return t._gsap || Xh(Kt(t))[0]._gsap
}, MC = function(t, a, n) {
    return (n = t[a]) && le(n) ? t[a]() : Kh(n) && t.getAttribute && t.getAttribute(a) || n
}, nt = function(t, a) {
    return (t = t.split(",")).forEach(a) || t
}, fe = function(t) {
    return Math.round(t * 1e5) / 1e5 || 0
}, ee = function(t) {
    return Math.round(t * 1e7) / 1e7 || 0
}, yi = function(t, a) {
    var n = a.charAt(0)
      , s = parseFloat(a.substr(2));
    return t = parseFloat(t),
    n === "+" ? t + s : n === "-" ? t - s : n === "*" ? t * s : t / s
}, by = function(t, a) {
    for (var n = a.length, s = 0; t.indexOf(a[s]) < 0 && ++s < n; )
        ;
    return s < n
}, yc = function() {
    var t = Dr.length, a = Dr.slice(0), n, s;
    for (WB = {},
    Dr.length = 0,
    n = 0; n < t; n++)
        s = a[n],
        s && s._lazy && (s.render(s._lazy[0], s._lazy[1], !0)._lazy = 0)
}, Yh = function(t) {
    return !!(t._initted || t._startAt || t.add)
}, IC = function(t, a, n, s) {
    Dr.length && !Me && yc(),
    t.render(a, n, !!(Me && a < 0 && Yh(t))),
    Dr.length && !Me && yc()
}, KC = function(t) {
    var a = parseFloat(t);
    return (a || a === 0) && (t + "").match(Fy).length < 2 ? a : He(t) ? t.trim() : t
}, RC = function(t) {
    return t
}, vt = function(t, a) {
    for (var n in a)
        n in t || (t[n] = a[n]);
    return t
}, Sy = function(t) {
    return function(a, n) {
        for (var s in n)
            s in a || s === "duration" && t || s === "ease" || (a[s] = n[s])
    }
}, bi = function(t, a) {
    for (var n in a)
        t[n] = a[n];
    return t
}, aw = function i(t, a) {
    for (var n in a)
        n !== "__proto__" && n !== "constructor" && n !== "prototype" && (t[n] = fn(a[n]) ? i(t[n] || (t[n] = {}), a[n]) : a[n]);
    return t
}, Fc = function(t, a) {
    var n = {}, s;
    for (s in t)
        s in a || (n[s] = t[s]);
    return n
}, $l = function(t) {
    var a = t.parent || te
      , n = t.keyframes ? Sy(Ve(t.keyframes)) : vt;
    if (tt(t.inherit))
        for (; a; )
            n(t, a.vars.defaults),
            a = a.parent || a._dp;
    return t
}, Ty = function(t, a) {
    for (var n = t.length, s = n === a.length; s && n-- && t[n] === a[n]; )
        ;
    return n < 0
}, NC = function(t, a, n, s, u) {
    var o = t[s], B;
    if (u)
        for (B = a[u]; o && o[u] > B; )
            o = o._prev;
    return o ? (a._next = o._next,
    o._next = a) : (a._next = t[n],
    t[n] = a),
    a._next ? a._next._prev = a : t[s] = a,
    a._prev = o,
    a.parent = a._dp = t,
    a
}, Nc = function(t, a, n, s) {
    n === void 0 && (n = "_first"),
    s === void 0 && (s = "_last");
    var u = a._prev
      , o = a._next;
    u ? u._next = o : t[n] === a && (t[n] = o),
    o ? o._prev = u : t[s] === a && (t[s] = u),
    a._next = a._prev = a.parent = null
}, Ir = function(t, a) {
    t.parent && (!a || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t),
    t._act = 0
}, Ca = function(t, a) {
    if (t && (!a || a._end > t._dur || a._start < 0))
        for (var n = t; n; )
            n._dirty = 1,
            n = n.parent;
    return t
}, xy = function(t) {
    for (var a = t.parent; a && a.parent; )
        a._dirty = 1,
        a.totalDuration(),
        a = a.parent;
    return t
}, PB = function(t, a, n, s) {
    return t._startAt && (Me ? t._startAt.revert(gc) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(a, !0, s))
}, Dy = function i(t) {
    return !t || t._ts && i(t.parent)
}, iw = function(t) {
    return t._repeat ? Si(t._tTime, t = t.duration() + t._rDelay) * t : 0
}, Si = function(t, a) {
    var n = Math.floor(t = ee(t / a));
    return t && n === t ? n - 1 : n
}, Ec = function(t, a) {
    return (t - a._start) * a._ts + (a._ts >= 0 ? 0 : a._dirty ? a.totalDuration() : a._tDur)
}, Gc = function(t) {
    return t._end = ee(t._start + (t._tDur / Math.abs(t._ts || t._rts || kA) || 0))
}, Vc = function(t, a) {
    var n = t._dp;
    return n && n.smoothChildTiming && t._ts && (t._start = ee(n._time - (t._ts > 0 ? a / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - a) / -t._ts)),
    Gc(t),
    n._dirty || Ca(n, t)),
    t
}, GC = function(t, a) {
    var n;
    if ((a._time || !a._dur && a._initted || a._start < t._time && (a._dur || !a.add)) && (n = Ec(t.rawTime(), a),
    (!a._dur || Cs(0, a.totalDuration(), n) - a._tTime > kA) && a.render(n, !0)),
    Ca(t, a)._dp && t._initted && t._time >= t._dur && t._ts) {
        if (t._dur < t.duration())
            for (n = t; n._dp; )
                n.rawTime() >= 0 && n.totalTime(n._tTime),
                n = n._dp;
        t._zTime = -kA
    }
}, un = function(t, a, n, s) {
    return a.parent && Ir(a),
    a._start = ee((zn(n) ? n : n || t !== te ? Dt(t, n, a) : t._time) + a._delay),
    a._end = ee(a._start + (a.totalDuration() / Math.abs(a.timeScale()) || 0)),
    NC(t, a, "_first", "_last", t._sort ? "_start" : 0),
    $B(a) || (t._recent = a),
    s || GC(t, a),
    t._ts < 0 && Vc(t, t._tTime),
    t
}, VC = function(t, a) {
    return (mt.ScrollTrigger || Gh("scrollTrigger", a)) && mt.ScrollTrigger.create(a, t)
}, zC = function(t, a, n, s, u) {
    if (kh(t, a, u),
    !t._initted)
        return 1;
    if (!n && t._pt && !Me && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && OC !== wt.frame)
        return Dr.push(t),
        t._lazy = [u, s],
        1
}, Ly = function i(t) {
    var a = t.parent;
    return a && a._ts && a._initted && !a._lock && (a.rawTime() < 0 || i(a))
}, $B = function(t) {
    var a = t.data;
    return a === "isFromStart" || a === "isStart"
}, Oy = function(t, a, n, s) {
    var u = t.ratio, o = a < 0 || !a && (!t._start && Ly(t) && !(!t._initted && $B(t)) || (t._ts < 0 || t._dp._ts < 0) && !$B(t)) ? 0 : 1, B = t._rDelay, h = 0, g, d, w;
    if (B && t._repeat && (h = Cs(0, t._tDur, a),
    d = Si(h, B),
    t._yoyo && d & 1 && (o = 1 - o),
    d !== Si(t._tTime, B) && (u = 1 - o,
    t.vars.repeatRefresh && t._initted && t.invalidate())),
    o !== u || Me || s || t._zTime === kA || !a && t._zTime) {
        if (!t._initted && zC(t, a, s, n, h))
            return;
        for (w = t._zTime,
        t._zTime = a || (n ? kA : 0),
        n || (n = a && !w),
        t.ratio = o,
        t._from && (o = 1 - o),
        t._time = 0,
        t._tTime = h,
        g = t._pt; g; )
            g.r(o, g.d),
            g = g._next;
        a < 0 && PB(t, a, n, !0),
        t._onUpdate && !n && Ct(t, "onUpdate"),
        h && t._repeat && !n && t.parent && Ct(t, "onRepeat"),
        (a >= t._tDur || a < 0) && t.ratio === o && (o && Ir(t, 1),
        !n && !Me && (Ct(t, o ? "onComplete" : "onReverseComplete", !0),
        t._prom && t._prom()))
    } else
        t._zTime || (t._zTime = a)
}, My = function(t, a, n) {
    var s;
    if (n > a)
        for (s = t._first; s && s._start <= n; ) {
            if (s.data === "isPause" && s._start > a)
                return s;
            s = s._next
        }
    else
        for (s = t._last; s && s._start >= n; ) {
            if (s.data === "isPause" && s._start < a)
                return s;
            s = s._prev
        }
}, Ti = function(t, a, n, s) {
    var u = t._repeat
      , o = ee(a) || 0
      , B = t._tTime / t._tDur;
    return B && !s && (t._time *= o / t._dur),
    t._dur = o,
    t._tDur = u ? u < 0 ? 1e10 : ee(o * (u + 1) + t._rDelay * u) : o,
    B > 0 && !s && Vc(t, t._tTime = t._tDur * B),
    t.parent && Gc(t),
    n || Ca(t.parent, t),
    t
}, lw = function(t) {
    return t instanceof Je ? Ca(t) : Ti(t, t._dur)
}, Iy = {
    _start: 0,
    endTime: cs,
    totalDuration: cs
}, Dt = function i(t, a, n) {
    var s = t.labels, u = t._recent || Iy, o = t.duration() >= It ? u.endTime(!1) : t._dur, B, h, g;
    return He(a) && (isNaN(a) || a in s) ? (h = a.charAt(0),
    g = a.substr(-1) === "%",
    B = a.indexOf("="),
    h === "<" || h === ">" ? (B >= 0 && (a = a.replace(/=/, "")),
    (h === "<" ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(a.substr(1)) || 0) * (g ? (B < 0 ? u : n).totalDuration() / 100 : 1)) : B < 0 ? (a in s || (s[a] = o),
    s[a]) : (h = parseFloat(a.charAt(B - 1) + a.substr(B + 1)),
    g && n && (h = h / 100 * (Ve(n) ? n[0] : n).totalDuration()),
    B > 1 ? i(t, a.substr(0, B - 1), n) + h : o + h)) : a == null ? o : +a
}, As = function(t, a, n) {
    var s = zn(a[1]), u = (s ? 2 : 1) + (t < 2 ? 0 : 1), o = a[u], B, h;
    if (s && (o.duration = a[1]),
    o.parent = n,
    t) {
        for (B = o,
        h = n; h && !("immediateRender"in B); )
            B = h.vars.defaults || {},
            h = tt(h.vars.inherit) && h.parent;
        o.immediateRender = tt(B.immediateRender),
        t < 2 ? o.runBackwards = 1 : o.startAt = a[u - 1]
    }
    return new Qe(a[0],o,a[u + 1])
}, Gr = function(t, a) {
    return t || t === 0 ? a(t) : a
}, Cs = function(t, a, n) {
    return n < t ? t : n > a ? a : n
}, Ge = function(t, a) {
    return !He(t) || !(a = Ey.exec(t)) ? "" : a[1]
}, Ky = function(t, a, n) {
    return Gr(n, function(s) {
        return Cs(t, a, s)
    })
}, Ah = [].slice, XC = function(t, a) {
    return t && fn(t) && "length"in t && (!a && !t.length || t.length - 1 in t && fn(t[0])) && !t.nodeType && t !== sn
}, Ry = function(t, a, n) {
    return n === void 0 && (n = []),
    t.forEach(function(s) {
        var u;
        return He(s) && !a || XC(s, 1) ? (u = n).push.apply(u, Kt(s)) : n.push(s)
    }) || n
}, Kt = function(t, a, n) {
    return Ae && !a && Ae.selector ? Ae.selector(t) : He(t) && !n && (qB || !xi()) ? Ah.call((a || Nh).querySelectorAll(t), 0) : Ve(t) ? Ry(t, n) : XC(t) ? Ah.call(t, 0) : t ? [t] : []
}, eh = function(t) {
    return t = Kt(t)[0] || us("Invalid scope") || {},
    function(a) {
        var n = t.current || t.nativeElement || t;
        return Kt(a, n.querySelectorAll ? n : n === t ? us("Invalid scope") || Nh.createElement("div") : t)
    }
}, YC = function(t) {
    return t.sort(function() {
        return .5 - Math.random()
    })
}, JC = function(t) {
    if (le(t))
        return t;
    var a = fn(t) ? t : {
        each: t
    }
      , n = Ua(a.ease)
      , s = a.from || 0
      , u = parseFloat(a.base) || 0
      , o = {}
      , B = s > 0 && s < 1
      , h = isNaN(s) || B
      , g = a.axis
      , d = s
      , w = s;
    return He(s) ? d = w = {
        center: .5,
        edges: .5,
        end: 1
    }[s] || 0 : !B && h && (d = s[0],
    w = s[1]),
    function(C, m, v) {
        var p = (v || a).length, b = o[p], E, S, O, G, x, L, K, k, N;
        if (!b) {
            if (N = a.grid === "auto" ? 0 : (a.grid || [1, It])[1],
            !N) {
                for (K = -It; K < (K = v[N++].getBoundingClientRect().left) && N < p; )
                    ;
                N < p && N--
            }
            for (b = o[p] = [],
            E = h ? Math.min(N, p) * d - .5 : s % N,
            S = N === It ? 0 : h ? p * w / N - .5 : s / N | 0,
            K = 0,
            k = It,
            L = 0; L < p; L++)
                O = L % N - E,
                G = S - (L / N | 0),
                b[L] = x = g ? Math.abs(g === "y" ? G : O) : HC(O * O + G * G),
                x > K && (K = x),
                x < k && (k = x);
            s === "random" && YC(b),
            b.max = K - k,
            b.min = k,
            b.v = p = (parseFloat(a.amount) || parseFloat(a.each) * (N > p ? p - 1 : g ? g === "y" ? p / N : N : Math.max(N, p / N)) || 0) * (s === "edges" ? -1 : 1),
            b.b = p < 0 ? u - p : u,
            b.u = Ge(a.amount || a.each) || 0,
            n = n && p < 0 ? tU(n) : n
        }
        return p = (b[C] - b.min) / b.max || 0,
        ee(b.b + (n ? n(p) : p) * b.v) + b.u
    }
}, th = function(t) {
    var a = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function(n) {
        var s = ee(Math.round(parseFloat(n) / t) * t * a);
        return (s - s % 1) / a + (zn(n) ? 0 : Ge(n))
    }
}, kC = function(t, a) {
    var n = Ve(t), s, u;
    return !n && fn(t) && (s = n = t.radius || It,
    t.values ? (t = Kt(t.values),
    (u = !zn(t[0])) && (s *= s)) : t = th(t.increment)),
    Gr(a, n ? le(t) ? function(o) {
        return u = t(o),
        Math.abs(u - o) <= s ? u : o
    }
    : function(o) {
        for (var B = parseFloat(u ? o.x : o), h = parseFloat(u ? o.y : 0), g = It, d = 0, w = t.length, C, m; w--; )
            u ? (C = t[w].x - B,
            m = t[w].y - h,
            C = C * C + m * m) : C = Math.abs(t[w] - B),
            C < g && (g = C,
            d = w);
        return d = !s || g <= s ? t[d] : o,
        u || d === o || zn(o) ? d : d + Ge(o)
    }
    : th(t))
}, jC = function(t, a, n, s) {
    return Gr(Ve(t) ? !a : n === !0 ? !!(n = 0) : !s, function() {
        return Ve(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (s = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (a - t + n * .99)) / n) * n * s) / s
    })
}, Ny = function() {
    for (var t = arguments.length, a = new Array(t), n = 0; n < t; n++)
        a[n] = arguments[n];
    return function(s) {
        return a.reduce(function(u, o) {
            return o(u)
        }, s)
    }
}, Gy = function(t, a) {
    return function(n) {
        return t(parseFloat(n)) + (a || Ge(n))
    }
}, Vy = function(t, a, n) {
    return qC(t, a, 0, 1, n)
}, ZC = function(t, a, n) {
    return Gr(n, function(s) {
        return t[~~a(s)]
    })
}, zy = function i(t, a, n) {
    var s = a - t;
    return Ve(t) ? ZC(t, i(0, t.length), a) : Gr(n, function(u) {
        return (s + (u - t) % s) % s + t
    })
}, Xy = function i(t, a, n) {
    var s = a - t
      , u = s * 2;
    return Ve(t) ? ZC(t, i(0, t.length - 1), a) : Gr(n, function(o) {
        return o = (u + (o - t) % u) % u || 0,
        t + (o > s ? u - o : o)
    })
}, os = function(t) {
    return t.replace(vy, function(a) {
        var n = a.indexOf("[") + 1
          , s = a.substring(n || 7, n ? a.indexOf("]") : a.length - 1).split(yy);
        return jC(n ? s : +s[0], n ? 0 : +s[1], +s[2] || 1e-5)
    })
}, qC = function(t, a, n, s, u) {
    var o = a - t
      , B = s - n;
    return Gr(u, function(h) {
        return n + ((h - t) / o * B || 0)
    })
}, Yy = function i(t, a, n, s) {
    var u = isNaN(t + a) ? 0 : function(m) {
        return (1 - m) * t + m * a
    }
    ;
    if (!u) {
        var o = He(t), B = {}, h, g, d, w, C;
        if (n === !0 && (s = 1) && (n = null),
        o)
            t = {
                p: t
            },
            a = {
                p: a
            };
        else if (Ve(t) && !Ve(a)) {
            for (d = [],
            w = t.length,
            C = w - 2,
            g = 1; g < w; g++)
                d.push(i(t[g - 1], t[g]));
            w--,
            u = function(v) {
                v *= w;
                var p = Math.min(C, ~~v);
                return d[p](v - p)
            }
            ,
            n = a
        } else
            s || (t = bi(Ve(t) ? [] : {}, t));
        if (!d) {
            for (h in a)
                Jh.call(B, t, h, "get", a[h]);
            u = function(v) {
                return qh(v, B) || (o ? t.p : t)
            }
        }
    }
    return Gr(n, u)
}, sw = function(t, a, n) {
    var s = t.labels, u = It, o, B, h;
    for (o in s)
        B = s[o] - a,
        B < 0 == !!n && B && u > (B = Math.abs(B)) && (h = o,
        u = B);
    return h
}, Ct = function(t, a, n) {
    var s = t.vars, u = s[a], o = Ae, B = t._ctx, h, g, d;
    if (u)
        return h = s[a + "Params"],
        g = s.callbackScope || t,
        n && Dr.length && yc(),
        B && (Ae = B),
        d = h ? u.apply(g, h) : u.call(g),
        Ae = o,
        d
}, Xl = function(t) {
    return Ir(t),
    t.scrollTrigger && t.scrollTrigger.kill(!!Me),
    t.progress() < 1 && Ct(t, "onInterrupt"),
    t
}, mi, WC = [], PC = function(t) {
    if (t)
        if (t = !t.name && t.default || t,
        Rh() || t.headless) {
            var a = t.name
              , n = le(t)
              , s = a && !n && t.init ? function() {
                this._props = []
            }
            : t
              , u = {
                init: cs,
                render: qh,
                add: Jh,
                kill: lF,
                modifier: iF,
                rawVars: 0
            }
              , o = {
                targetTest: 0,
                get: 0,
                getSetter: Zh,
                aliases: {},
                register: 0
            };
            if (xi(),
            t !== s) {
                if (Qt[a])
                    return;
                vt(s, vt(Fc(t, u), o)),
                bi(s.prototype, bi(u, Fc(t, o))),
                Qt[s.prop = a] = s,
                t.targetTest && (dc.push(s),
                Vh[a] = 1),
                a = (a === "css" ? "CSS" : a.charAt(0).toUpperCase() + a.substr(1)) + "Plugin"
            }
            LC(a, s),
            t.register && t.register(it, s, rt)
        } else
            WC.push(t)
}, JA = 255, Yl = {
    aqua: [0, JA, JA],
    lime: [0, JA, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, JA],
    navy: [0, 0, 128],
    white: [JA, JA, JA],
    olive: [128, 128, 0],
    yellow: [JA, JA, 0],
    orange: [JA, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [JA, 0, 0],
    pink: [JA, 192, 203],
    cyan: [0, JA, JA],
    transparent: [JA, JA, JA, 0]
}, CB = function(t, a, n) {
    return t += t < 0 ? 1 : t > 1 ? -1 : 0,
    (t * 6 < 1 ? a + (n - a) * t * 6 : t < .5 ? n : t * 3 < 2 ? a + (n - a) * (2 / 3 - t) * 6 : a) * JA + .5 | 0
}, $C = function(t, a, n) {
    var s = t ? zn(t) ? [t >> 16, t >> 8 & JA, t & JA] : 0 : Yl.black, u, o, B, h, g, d, w, C, m, v;
    if (!s) {
        if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)),
        Yl[t])
            s = Yl[t];
        else if (t.charAt(0) === "#") {
            if (t.length < 6 && (u = t.charAt(1),
            o = t.charAt(2),
            B = t.charAt(3),
            t = "#" + u + u + o + o + B + B + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")),
            t.length === 9)
                return s = parseInt(t.substr(1, 6), 16),
                [s >> 16, s >> 8 & JA, s & JA, parseInt(t.substr(7), 16) / 255];
            t = parseInt(t.substr(1), 16),
            s = [t >> 16, t >> 8 & JA, t & JA]
        } else if (t.substr(0, 3) === "hsl") {
            if (s = v = t.match(nw),
            !a)
                h = +s[0] % 360 / 360,
                g = +s[1] / 100,
                d = +s[2] / 100,
                o = d <= .5 ? d * (g + 1) : d + g - d * g,
                u = d * 2 - o,
                s.length > 3 && (s[3] *= 1),
                s[0] = CB(h + 1 / 3, u, o),
                s[1] = CB(h, u, o),
                s[2] = CB(h - 1 / 3, u, o);
            else if (~t.indexOf("="))
                return s = t.match(SC),
                n && s.length < 4 && (s[3] = 1),
                s
        } else
            s = t.match(nw) || Yl.transparent;
        s = s.map(Number)
    }
    return a && !v && (u = s[0] / JA,
    o = s[1] / JA,
    B = s[2] / JA,
    w = Math.max(u, o, B),
    C = Math.min(u, o, B),
    d = (w + C) / 2,
    w === C ? h = g = 0 : (m = w - C,
    g = d > .5 ? m / (2 - w - C) : m / (w + C),
    h = w === u ? (o - B) / m + (o < B ? 6 : 0) : w === o ? (B - u) / m + 2 : (u - o) / m + 4,
    h *= 60),
    s[0] = ~~(h + .5),
    s[1] = ~~(g * 100 + .5),
    s[2] = ~~(d * 100 + .5)),
    n && s.length < 4 && (s[3] = 1),
    s
}, AU = function(t) {
    var a = []
      , n = []
      , s = -1;
    return t.split(Lr).forEach(function(u) {
        var o = u.match(pi) || [];
        a.push.apply(a, o),
        n.push(s += o.length + 1)
    }),
    a.c = n,
    a
}, uw = function(t, a, n) {
    var s = "", u = (t + s).match(Lr), o = a ? "hsla(" : "rgba(", B = 0, h, g, d, w;
    if (!u)
        return t;
    if (u = u.map(function(C) {
        return (C = $C(C, a, 1)) && o + (a ? C[0] + "," + C[1] + "%," + C[2] + "%," + C[3] : C.join(",")) + ")"
    }),
    n && (d = AU(t),
    h = n.c,
    h.join(s) !== d.c.join(s)))
        for (g = t.replace(Lr, "1").split(pi),
        w = g.length - 1; B < w; B++)
            s += g[B] + (~h.indexOf(B) ? u.shift() || o + "0,0,0,0)" : (d.length ? d : u.length ? u : n).shift());
    if (!g)
        for (g = t.split(Lr),
        w = g.length - 1; B < w; B++)
            s += g[B] + u[B];
    return s + g[w]
}, Lr = (function() {
    var i = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
    for (t in Yl)
        i += "|" + t + "\\b";
    return new RegExp(i + ")","gi")
}
)(), Jy = /hsl[a]?\(/, eU = function(t) {
    var a = t.join(" "), n;
    if (Lr.lastIndex = 0,
    Lr.test(a))
        return n = Jy.test(a),
        t[1] = uw(t[1], n),
        t[0] = uw(t[0], n, AU(t[1])),
        !0
}, fs, wt = (function() {
    var i = Date.now, t = 500, a = 33, n = i(), s = n, u = 1e3 / 240, o = u, B = [], h, g, d, w, C, m, v = function p(b) {
        var E = i() - s, S = b === !0, O, G, x, L;
        if ((E > t || E < 0) && (n += E - a),
        s += E,
        x = s - n,
        O = x - o,
        (O > 0 || S) && (L = ++w.frame,
        C = x - w.time * 1e3,
        w.time = x = x / 1e3,
        o += O + (O >= u ? 4 : u - O),
        G = 1),
        S || (h = g(p)),
        G)
            for (m = 0; m < B.length; m++)
                B[m](x, C, L, b)
    };
    return w = {
        time: 0,
        frame: 0,
        tick: function() {
            v(!0)
        },
        deltaRatio: function(b) {
            return C / (1e3 / (b || 60))
        },
        wake: function() {
            xC && (!qB && Rh() && (sn = qB = window,
            Nh = sn.document || {},
            mt.gsap = it,
            (sn.gsapVersions || (sn.gsapVersions = [])).push(it.version),
            DC(vc || sn.GreenSockGlobals || !sn.gsap && sn || {}),
            WC.forEach(PC)),
            d = typeof requestAnimationFrame < "u" && requestAnimationFrame,
            h && w.sleep(),
            g = d || function(b) {
                return setTimeout(b, o - w.time * 1e3 + 1 | 0)
            }
            ,
            fs = 1,
            v(2))
        },
        sleep: function() {
            (d ? cancelAnimationFrame : clearTimeout)(h),
            fs = 0,
            g = cs
        },
        lagSmoothing: function(b, E) {
            t = b || 1 / 0,
            a = Math.min(E || 33, t)
        },
        fps: function(b) {
            u = 1e3 / (b || 240),
            o = w.time * 1e3 + u
        },
        add: function(b, E, S) {
            var O = E ? function(G, x, L, K) {
                b(G, x, L, K),
                w.remove(O)
            }
            : b;
            return w.remove(b),
            B[S ? "unshift" : "push"](O),
            xi(),
            O
        },
        remove: function(b, E) {
            ~(E = B.indexOf(b)) && B.splice(E, 1) && m >= E && m--
        },
        _listeners: B
    },
    w
}
)(), xi = function() {
    return !fs && wt.wake()
}, xA = {}, ky = /^[\d.\-M][\d.\-,\s]/, jy = /["']/g, Zy = function(t) {
    for (var a = {}, n = t.substr(1, t.length - 3).split(":"), s = n[0], u = 1, o = n.length, B, h, g; u < o; u++)
        h = n[u],
        B = u !== o - 1 ? h.lastIndexOf(",") : h.length,
        g = h.substr(0, B),
        a[s] = isNaN(g) ? g.replace(jy, "").trim() : +g,
        s = h.substr(B + 1).trim();
    return a
}, qy = function(t) {
    var a = t.indexOf("(") + 1
      , n = t.indexOf(")")
      , s = t.indexOf("(", a);
    return t.substring(a, ~s && s < n ? t.indexOf(")", n + 1) : n)
}, Wy = function(t) {
    var a = (t + "").split("(")
      , n = xA[a[0]];
    return n && a.length > 1 && n.config ? n.config.apply(null, ~t.indexOf("{") ? [Zy(a[1])] : qy(t).split(",").map(KC)) : xA._CE && ky.test(t) ? xA._CE("", t) : n
}, tU = function(t) {
    return function(a) {
        return 1 - t(1 - a)
    }
}, nU = function i(t, a) {
    for (var n = t._first, s; n; )
        n instanceof Je ? i(n, a) : n.vars.yoyoEase && (!n._yoyo || !n._repeat) && n._yoyo !== a && (n.timeline ? i(n.timeline, a) : (s = n._ease,
        n._ease = n._yEase,
        n._yEase = s,
        n._yoyo = a)),
        n = n._next
}, Ua = function(t, a) {
    return t && (le(t) ? t : xA[t] || Wy(t)) || a
}, ya = function(t, a, n, s) {
    n === void 0 && (n = function(h) {
        return 1 - a(1 - h)
    }
    ),
    s === void 0 && (s = function(h) {
        return h < .5 ? a(h * 2) / 2 : 1 - a((1 - h) * 2) / 2
    }
    );
    var u = {
        easeIn: a,
        easeOut: n,
        easeInOut: s
    }, o;
    return nt(t, function(B) {
        xA[B] = mt[B] = u,
        xA[o = B.toLowerCase()] = n;
        for (var h in u)
            xA[o + (h === "easeIn" ? ".in" : h === "easeOut" ? ".out" : ".inOut")] = xA[B + "." + h] = u[h]
    }),
    u
}, rU = function(t) {
    return function(a) {
        return a < .5 ? (1 - t(1 - a * 2)) / 2 : .5 + t((a - .5) * 2) / 2
    }
}, UB = function i(t, a, n) {
    var s = a >= 1 ? a : 1
      , u = (n || (t ? .3 : .45)) / (a < 1 ? a : 1)
      , o = u / ZB * (Math.asin(1 / s) || 0)
      , B = function(d) {
        return d === 1 ? 1 : s * Math.pow(2, -10 * d) * my((d - o) * u) + 1
    }
      , h = t === "out" ? B : t === "in" ? function(g) {
        return 1 - B(1 - g)
    }
    : rU(B);
    return u = ZB / u,
    h.config = function(g, d) {
        return i(t, g, d)
    }
    ,
    h
}, pB = function i(t, a) {
    a === void 0 && (a = 1.70158);
    var n = function(o) {
        return o ? --o * o * ((a + 1) * o + a) + 1 : 0
    }
      , s = t === "out" ? n : t === "in" ? function(u) {
        return 1 - n(1 - u)
    }
    : rU(n);
    return s.config = function(u) {
        return i(t, u)
    }
    ,
    s
};
nt("Linear,Quad,Cubic,Quart,Quint,Strong", function(i, t) {
    var a = t < 5 ? t + 1 : t;
    ya(i + ",Power" + (a - 1), t ? function(n) {
        return Math.pow(n, a)
    }
    : function(n) {
        return n
    }
    , function(n) {
        return 1 - Math.pow(1 - n, a)
    }, function(n) {
        return n < .5 ? Math.pow(n * 2, a) / 2 : 1 - Math.pow((1 - n) * 2, a) / 2
    })
});
xA.Linear.easeNone = xA.none = xA.Linear.easeIn;
ya("Elastic", UB("in"), UB("out"), UB());
(function(i, t) {
    var a = 1 / t
      , n = 2 * a
      , s = 2.5 * a
      , u = function(B) {
        return B < a ? i * B * B : B < n ? i * Math.pow(B - 1.5 / t, 2) + .75 : B < s ? i * (B -= 2.25 / t) * B + .9375 : i * Math.pow(B - 2.625 / t, 2) + .984375
    };
    ya("Bounce", function(o) {
        return 1 - u(1 - o)
    }, u)
}
)(7.5625, 2.75);
ya("Expo", function(i) {
    return Math.pow(2, 10 * (i - 1)) * i + i * i * i * i * i * i * (1 - i)
});
ya("Circ", function(i) {
    return -(HC(1 - i * i) - 1)
});
ya("Sine", function(i) {
    return i === 1 ? 1 : -py(i * Cy) + 1
});
ya("Back", pB("in"), pB("out"), pB());
xA.SteppedEase = xA.steps = mt.SteppedEase = {
    config: function(t, a) {
        t === void 0 && (t = 1);
        var n = 1 / t
          , s = t + (a ? 0 : 1)
          , u = a ? 1 : 0
          , o = 1 - kA;
        return function(B) {
            return ((s * Cs(0, o, B) | 0) + u) * n
        }
    }
};
Hi.ease = xA["quad.out"];
nt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(i) {
    return zh += i + "," + i + "Params,"
});
var aU = function(t, a) {
    this.id = Uy++,
    t._gsap = this,
    this.target = t,
    this.harness = a,
    this.get = a ? a.get : MC,
    this.set = a ? a.getSetter : Zh
}
  , Bs = (function() {
    function i(a) {
        this.vars = a,
        this._delay = +a.delay || 0,
        (this._repeat = a.repeat === 1 / 0 ? -2 : a.repeat || 0) && (this._rDelay = a.repeatDelay || 0,
        this._yoyo = !!a.yoyo || !!a.yoyoEase),
        this._ts = 1,
        Ti(this, +a.duration, 1, 1),
        this.data = a.data,
        Ae && (this._ctx = Ae,
        Ae.data.push(this)),
        fs || wt.wake()
    }
    var t = i.prototype;
    return t.delay = function(n) {
        return n || n === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + n - this._delay),
        this._delay = n,
        this) : this._delay
    }
    ,
    t.duration = function(n) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n) : this.totalDuration() && this._dur
    }
    ,
    t.totalDuration = function(n) {
        return arguments.length ? (this._dirty = 0,
        Ti(this, this._repeat < 0 ? n : (n - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    t.totalTime = function(n, s) {
        if (xi(),
        !arguments.length)
            return this._tTime;
        var u = this._dp;
        if (u && u.smoothChildTiming && this._ts) {
            for (Vc(this, n),
            !u._dp || u.parent || GC(u, this); u && u.parent; )
                u.parent._time !== u._start + (u._ts >= 0 ? u._tTime / u._ts : (u.totalDuration() - u._tTime) / -u._ts) && u.totalTime(u._tTime, !0),
                u = u.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && n < this._tDur || this._ts < 0 && n > 0 || !this._tDur && !n) && un(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== n || !this._dur && !s || this._initted && Math.abs(this._zTime) === kA || !this._initted && this._dur && n || !n && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = n),
        IC(this, n, s)),
        this
    }
    ,
    t.time = function(n, s) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), n + iw(this)) % (this._dur + this._rDelay) || (n ? this._dur : 0), s) : this._time
    }
    ,
    t.totalProgress = function(n, s) {
        return arguments.length ? this.totalTime(this.totalDuration() * n, s) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
    }
    ,
    t.progress = function(n, s) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) + iw(this), s) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
    }
    ,
    t.iteration = function(n, s) {
        var u = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (n - 1) * u, s) : this._repeat ? Si(this._tTime, u) + 1 : 1
    }
    ,
    t.timeScale = function(n, s) {
        if (!arguments.length)
            return this._rts === -kA ? 0 : this._rts;
        if (this._rts === n)
            return this;
        var u = this.parent && this._ts ? Ec(this.parent._time, this) : this._tTime;
        return this._rts = +n || 0,
        this._ts = this._ps || n === -kA ? 0 : this._rts,
        this.totalTime(Cs(-Math.abs(this._delay), this.totalDuration(), u), s !== !1),
        Gc(this),
        xy(this)
    }
    ,
    t.paused = function(n) {
        return arguments.length ? (this._ps !== n && (this._ps = n,
        n ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (xi(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== kA && (this._tTime -= kA)))),
        this) : this._ps
    }
    ,
    t.startTime = function(n) {
        if (arguments.length) {
            this._start = ee(n);
            var s = this.parent || this._dp;
            return s && (s._sort || !this.parent) && un(s, this, this._start - this._delay),
            this
        }
        return this._start
    }
    ,
    t.endTime = function(n) {
        return this._start + (tt(n) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    t.rawTime = function(n) {
        var s = this.parent || this._dp;
        return s ? n && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ec(s.rawTime(n), this) : this._tTime : this._tTime
    }
    ,
    t.revert = function(n) {
        n === void 0 && (n = Hy);
        var s = Me;
        return Me = n,
        Yh(this) && (this.timeline && this.timeline.revert(n),
        this.totalTime(-.01, n.suppressEvents)),
        this.data !== "nested" && n.kill !== !1 && this.kill(),
        Me = s,
        this
    }
    ,
    t.globalTime = function(n) {
        for (var s = this, u = arguments.length ? n : s.rawTime(); s; )
            u = s._start + u / (Math.abs(s._ts) || 1),
            s = s._dp;
        return !this.parent && this._sat ? this._sat.globalTime(n) : u
    }
    ,
    t.repeat = function(n) {
        return arguments.length ? (this._repeat = n === 1 / 0 ? -2 : n,
        lw(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }
    ,
    t.repeatDelay = function(n) {
        if (arguments.length) {
            var s = this._time;
            return this._rDelay = n,
            lw(this),
            s ? this.time(s) : this
        }
        return this._rDelay
    }
    ,
    t.yoyo = function(n) {
        return arguments.length ? (this._yoyo = n,
        this) : this._yoyo
    }
    ,
    t.seek = function(n, s) {
        return this.totalTime(Dt(this, n), tt(s))
    }
    ,
    t.restart = function(n, s) {
        return this.play().totalTime(n ? -this._delay : 0, tt(s)),
        this._dur || (this._zTime = -kA),
        this
    }
    ,
    t.play = function(n, s) {
        return n != null && this.seek(n, s),
        this.reversed(!1).paused(!1)
    }
    ,
    t.reverse = function(n, s) {
        return n != null && this.seek(n || this.totalDuration(), s),
        this.reversed(!0).paused(!1)
    }
    ,
    t.pause = function(n, s) {
        return n != null && this.seek(n, s),
        this.paused(!0)
    }
    ,
    t.resume = function() {
        return this.paused(!1)
    }
    ,
    t.reversed = function(n) {
        return arguments.length ? (!!n !== this.reversed() && this.timeScale(-this._rts || (n ? -kA : 0)),
        this) : this._rts < 0
    }
    ,
    t.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -kA,
        this
    }
    ,
    t.isActive = function() {
        var n = this.parent || this._dp, s = this._start, u;
        return !!(!n || this._ts && this._initted && n.isActive() && (u = n.rawTime(!0)) >= s && u < this.endTime(!0) - kA)
    }
    ,
    t.eventCallback = function(n, s, u) {
        var o = this.vars;
        return arguments.length > 1 ? (s ? (o[n] = s,
        u && (o[n + "Params"] = u),
        n === "onUpdate" && (this._onUpdate = s)) : delete o[n],
        this) : o[n]
    }
    ,
    t.then = function(n) {
        var s = this
          , u = s._prom;
        return new Promise(function(o) {
            var B = le(n) ? n : RC
              , h = function() {
                var d = s.then;
                s.then = null,
                u && u(),
                le(B) && (B = B(s)) && (B.then || B === s) && (s.then = d),
                o(B),
                s.then = d
            };
            s._initted && s.totalProgress() === 1 && s._ts >= 0 || !s._tTime && s._ts < 0 ? h() : s._prom = h
        }
        )
    }
    ,
    t.kill = function() {
        Xl(this)
    }
    ,
    i
}
)();
vt(Bs.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -kA,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var Je = (function(i) {
    _C(t, i);
    function t(n, s) {
        var u;
        return n === void 0 && (n = {}),
        u = i.call(this, n) || this,
        u.labels = {},
        u.smoothChildTiming = !!n.smoothChildTiming,
        u.autoRemoveChildren = !!n.autoRemoveChildren,
        u._sort = tt(n.sortChildren),
        te && un(n.parent || te, Rn(u), s),
        n.reversed && u.reverse(),
        n.paused && u.paused(!0),
        n.scrollTrigger && VC(Rn(u), n.scrollTrigger),
        u
    }
    var a = t.prototype;
    return a.to = function(s, u, o) {
        return As(0, arguments, this),
        this
    }
    ,
    a.from = function(s, u, o) {
        return As(1, arguments, this),
        this
    }
    ,
    a.fromTo = function(s, u, o, B) {
        return As(2, arguments, this),
        this
    }
    ,
    a.set = function(s, u, o) {
        return u.duration = 0,
        u.parent = this,
        $l(u).repeatDelay || (u.repeat = 0),
        u.immediateRender = !!u.immediateRender,
        new Qe(s,u,Dt(this, o),1),
        this
    }
    ,
    a.call = function(s, u, o) {
        return un(this, Qe.delayedCall(0, s, u), o)
    }
    ,
    a.staggerTo = function(s, u, o, B, h, g, d) {
        return o.duration = u,
        o.stagger = o.stagger || B,
        o.onComplete = g,
        o.onCompleteParams = d,
        o.parent = this,
        new Qe(s,o,Dt(this, h)),
        this
    }
    ,
    a.staggerFrom = function(s, u, o, B, h, g, d) {
        return o.runBackwards = 1,
        $l(o).immediateRender = tt(o.immediateRender),
        this.staggerTo(s, u, o, B, h, g, d)
    }
    ,
    a.staggerFromTo = function(s, u, o, B, h, g, d, w) {
        return B.startAt = o,
        $l(B).immediateRender = tt(B.immediateRender),
        this.staggerTo(s, u, B, h, g, d, w)
    }
    ,
    a.render = function(s, u, o) {
        var B = this._time, h = this._dirty ? this.totalDuration() : this._tDur, g = this._dur, d = s <= 0 ? 0 : ee(s), w = this._zTime < 0 != s < 0 && (this._initted || !g), C, m, v, p, b, E, S, O, G, x, L, K;
        if (this !== te && d > h && s >= 0 && (d = h),
        d !== this._tTime || o || w) {
            if (B !== this._time && g && (d += this._time - B,
            s += this._time - B),
            C = d,
            G = this._start,
            O = this._ts,
            E = !O,
            w && (g || (B = this._zTime),
            (s || !u) && (this._zTime = s)),
            this._repeat) {
                if (L = this._yoyo,
                b = g + this._rDelay,
                this._repeat < -1 && s < 0)
                    return this.totalTime(b * 100 + s, u, o);
                if (C = ee(d % b),
                d === h ? (p = this._repeat,
                C = g) : (x = ee(d / b),
                p = ~~x,
                p && p === x && (C = g,
                p--),
                C > g && (C = g)),
                x = Si(this._tTime, b),
                !B && this._tTime && x !== p && this._tTime - x * b - this._dur <= 0 && (x = p),
                L && p & 1 && (C = g - C,
                K = 1),
                p !== x && !this._lock) {
                    var k = L && x & 1
                      , N = k === (L && p & 1);
                    if (p < x && (k = !k),
                    B = k ? 0 : d % g ? g : d,
                    this._lock = 1,
                    this.render(B || (K ? 0 : ee(p * b)), u, !g)._lock = 0,
                    this._tTime = d,
                    !u && this.parent && Ct(this, "onRepeat"),
                    this.vars.repeatRefresh && !K && (this.invalidate()._lock = 1,
                    x = p),
                    B && B !== this._time || E !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (g = this._dur,
                    h = this._tDur,
                    N && (this._lock = 2,
                    B = k ? g : -1e-4,
                    this.render(B, !0),
                    this.vars.repeatRefresh && !K && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !E)
                        return this;
                    nU(this, K)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (S = My(this, ee(B), ee(C)),
            S && (d -= C - (C = S._start))),
            this._tTime = d,
            this._time = C,
            this._act = !O,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = s,
            B = 0),
            !B && d && g && !u && !x && (Ct(this, "onStart"),
            this._tTime !== d))
                return this;
            if (C >= B && s >= 0)
                for (m = this._first; m; ) {
                    if (v = m._next,
                    (m._act || C >= m._start) && m._ts && S !== m) {
                        if (m.parent !== this)
                            return this.render(s, u, o);
                        if (m.render(m._ts > 0 ? (C - m._start) * m._ts : (m._dirty ? m.totalDuration() : m._tDur) + (C - m._start) * m._ts, u, o),
                        C !== this._time || !this._ts && !E) {
                            S = 0,
                            v && (d += this._zTime = -kA);
                            break
                        }
                    }
                    m = v
                }
            else {
                m = this._last;
                for (var iA = s < 0 ? s : C; m; ) {
                    if (v = m._prev,
                    (m._act || iA <= m._end) && m._ts && S !== m) {
                        if (m.parent !== this)
                            return this.render(s, u, o);
                        if (m.render(m._ts > 0 ? (iA - m._start) * m._ts : (m._dirty ? m.totalDuration() : m._tDur) + (iA - m._start) * m._ts, u, o || Me && Yh(m)),
                        C !== this._time || !this._ts && !E) {
                            S = 0,
                            v && (d += this._zTime = iA ? -kA : kA);
                            break
                        }
                    }
                    m = v
                }
            }
            if (S && !u && (this.pause(),
            S.render(C >= B ? 0 : -kA)._zTime = C >= B ? 1 : -1,
            this._ts))
                return this._start = G,
                Gc(this),
                this.render(s, u, o);
            this._onUpdate && !u && Ct(this, "onUpdate", !0),
            (d === h && this._tTime >= this.totalDuration() || !d && B) && (G === this._start || Math.abs(O) !== Math.abs(this._ts)) && (this._lock || ((s || !g) && (d === h && this._ts > 0 || !d && this._ts < 0) && Ir(this, 1),
            !u && !(s < 0 && !B) && (d || B || !h) && (Ct(this, d === h && s >= 0 ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(d < h && this.timeScale() > 0) && this._prom())))
        }
        return this
    }
    ,
    a.add = function(s, u) {
        var o = this;
        if (zn(u) || (u = Dt(this, u, s)),
        !(s instanceof Bs)) {
            if (Ve(s))
                return s.forEach(function(B) {
                    return o.add(B, u)
                }),
                this;
            if (He(s))
                return this.addLabel(s, u);
            if (le(s))
                s = Qe.delayedCall(0, s);
            else
                return this
        }
        return this !== s ? un(this, s, u) : this
    }
    ,
    a.getChildren = function(s, u, o, B) {
        s === void 0 && (s = !0),
        u === void 0 && (u = !0),
        o === void 0 && (o = !0),
        B === void 0 && (B = -It);
        for (var h = [], g = this._first; g; )
            g._start >= B && (g instanceof Qe ? u && h.push(g) : (o && h.push(g),
            s && h.push.apply(h, g.getChildren(!0, u, o)))),
            g = g._next;
        return h
    }
    ,
    a.getById = function(s) {
        for (var u = this.getChildren(1, 1, 1), o = u.length; o--; )
            if (u[o].vars.id === s)
                return u[o]
    }
    ,
    a.remove = function(s) {
        return He(s) ? this.removeLabel(s) : le(s) ? this.killTweensOf(s) : (s.parent === this && Nc(this, s),
        s === this._recent && (this._recent = this._last),
        Ca(this))
    }
    ,
    a.totalTime = function(s, u) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = ee(wt.time - (this._ts > 0 ? s / this._ts : (this.totalDuration() - s) / -this._ts))),
        i.prototype.totalTime.call(this, s, u),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    a.addLabel = function(s, u) {
        return this.labels[s] = Dt(this, u),
        this
    }
    ,
    a.removeLabel = function(s) {
        return delete this.labels[s],
        this
    }
    ,
    a.addPause = function(s, u, o) {
        var B = Qe.delayedCall(0, u || cs, o);
        return B.data = "isPause",
        this._hasPause = 1,
        un(this, B, Dt(this, s))
    }
    ,
    a.removePause = function(s) {
        var u = this._first;
        for (s = Dt(this, s); u; )
            u._start === s && u.data === "isPause" && Ir(u),
            u = u._next
    }
    ,
    a.killTweensOf = function(s, u, o) {
        for (var B = this.getTweensOf(s, o), h = B.length; h--; )
            _r !== B[h] && B[h].kill(s, u);
        return this
    }
    ,
    a.getTweensOf = function(s, u) {
        for (var o = [], B = Kt(s), h = this._first, g = zn(u), d; h; )
            h instanceof Qe ? by(h._targets, B) && (g ? (!_r || h._initted && h._ts) && h.globalTime(0) <= u && h.globalTime(h.totalDuration()) > u : !u || h.isActive()) && o.push(h) : (d = h.getTweensOf(B, u)).length && o.push.apply(o, d),
            h = h._next;
        return o
    }
    ,
    a.tweenTo = function(s, u) {
        u = u || {};
        var o = this, B = Dt(o, s), h = u, g = h.startAt, d = h.onStart, w = h.onStartParams, C = h.immediateRender, m, v = Qe.to(o, vt({
            ease: u.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: B,
            overwrite: "auto",
            duration: u.duration || Math.abs((B - (g && "time"in g ? g.time : o._time)) / o.timeScale()) || kA,
            onStart: function() {
                if (o.pause(),
                !m) {
                    var b = u.duration || Math.abs((B - (g && "time"in g ? g.time : o._time)) / o.timeScale());
                    v._dur !== b && Ti(v, b, 0, 1).render(v._time, !0, !0),
                    m = 1
                }
                d && d.apply(v, w || [])
            }
        }, u));
        return C ? v.render(0) : v
    }
    ,
    a.tweenFromTo = function(s, u, o) {
        return this.tweenTo(u, vt({
            startAt: {
                time: Dt(this, s)
            }
        }, o))
    }
    ,
    a.recent = function() {
        return this._recent
    }
    ,
    a.nextLabel = function(s) {
        return s === void 0 && (s = this._time),
        sw(this, Dt(this, s))
    }
    ,
    a.previousLabel = function(s) {
        return s === void 0 && (s = this._time),
        sw(this, Dt(this, s), 1)
    }
    ,
    a.currentLabel = function(s) {
        return arguments.length ? this.seek(s, !0) : this.previousLabel(this._time + kA)
    }
    ,
    a.shiftChildren = function(s, u, o) {
        o === void 0 && (o = 0);
        var B = this._first, h = this.labels, g;
        for (s = ee(s); B; )
            B._start >= o && (B._start += s,
            B._end += s),
            B = B._next;
        if (u)
            for (g in h)
                h[g] >= o && (h[g] += s);
        return Ca(this)
    }
    ,
    a.invalidate = function(s) {
        var u = this._first;
        for (this._lock = 0; u; )
            u.invalidate(s),
            u = u._next;
        return i.prototype.invalidate.call(this, s)
    }
    ,
    a.clear = function(s) {
        s === void 0 && (s = !0);
        for (var u = this._first, o; u; )
            o = u._next,
            this.remove(u),
            u = o;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        s && (this.labels = {}),
        Ca(this)
    }
    ,
    a.totalDuration = function(s) {
        var u = 0, o = this, B = o._last, h = It, g, d, w;
        if (arguments.length)
            return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -s : s));
        if (o._dirty) {
            for (w = o.parent; B; )
                g = B._prev,
                B._dirty && B.totalDuration(),
                d = B._start,
                d > h && o._sort && B._ts && !o._lock ? (o._lock = 1,
                un(o, B, d - B._delay, 1)._lock = 0) : h = d,
                d < 0 && B._ts && (u -= d,
                (!w && !o._dp || w && w.smoothChildTiming) && (o._start += ee(d / o._ts),
                o._time -= d,
                o._tTime -= d),
                o.shiftChildren(-d, !1, -1 / 0),
                h = 0),
                B._end > u && B._ts && (u = B._end),
                B = g;
            Ti(o, o === te && o._time > u ? o._time : u, 1, 1),
            o._dirty = 0
        }
        return o._tDur
    }
    ,
    t.updateRoot = function(s) {
        if (te._ts && (IC(te, Ec(s, te)),
        OC = wt.frame),
        wt.frame >= rw) {
            rw += pt.autoSleep || 120;
            var u = te._first;
            if ((!u || !u._ts) && pt.autoSleep && wt._listeners.length < 2) {
                for (; u && !u._ts; )
                    u = u._next;
                u || wt.sleep()
            }
        }
    }
    ,
    t
}
)(Bs);
vt(Je.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var Py = function(t, a, n, s, u, o, B) {
    var h = new rt(this._pt,t,a,0,1,oU,null,u), g = 0, d = 0, w, C, m, v, p, b, E, S;
    for (h.b = n,
    h.e = s,
    n += "",
    s += "",
    (E = ~s.indexOf("random(")) && (s = os(s)),
    o && (S = [n, s],
    o(S, t, a),
    n = S[0],
    s = S[1]),
    C = n.match(QB) || []; w = QB.exec(s); )
        v = w[0],
        p = s.substring(g, w.index),
        m ? m = (m + 1) % 5 : p.substr(-5) === "rgba(" && (m = 1),
        v !== C[d++] && (b = parseFloat(C[d - 1]) || 0,
        h._pt = {
            _next: h._pt,
            p: p || d === 1 ? p : ",",
            s: b,
            c: v.charAt(1) === "=" ? yi(b, v) - b : parseFloat(v) - b,
            m: m && m < 4 ? Math.round : 0
        },
        g = QB.lastIndex);
    return h.c = g < s.length ? s.substring(g, s.length) : "",
    h.fp = B,
    (TC.test(s) || E) && (h.e = 0),
    this._pt = h,
    h
}, Jh = function(t, a, n, s, u, o, B, h, g, d) {
    le(s) && (s = s(u || 0, t, o));
    var w = t[a], C = n !== "get" ? n : le(w) ? g ? t[a.indexOf("set") || !le(t["get" + a.substr(3)]) ? a : "get" + a.substr(3)](g) : t[a]() : w, m = le(w) ? g ? nF : uU : jh, v;
    if (He(s) && (~s.indexOf("random(") && (s = os(s)),
    s.charAt(1) === "=" && (v = yi(C, s) + (Ge(C) || 0),
    (v || v === 0) && (s = v))),
    !d || C !== s || nh)
        return !isNaN(C * s) && s !== "" ? (v = new rt(this._pt,t,a,+C || 0,s - (C || 0),typeof w == "boolean" ? aF : cU,0,m),
        g && (v.fp = g),
        B && v.modifier(B, this, t),
        this._pt = v) : (!w && !(a in t) && Gh(a, s),
        Py.call(this, t, a, C, s, m, h || pt.stringFilter, g))
}, $y = function(t, a, n, s, u) {
    if (le(t) && (t = es(t, u, a, n, s)),
    !fn(t) || t.style && t.nodeType || Ve(t) || bC(t))
        return He(t) ? es(t, u, a, n, s) : t;
    var o = {}, B;
    for (B in t)
        o[B] = es(t[B], u, a, n, s);
    return o
}, iU = function(t, a, n, s, u, o) {
    var B, h, g, d;
    if (Qt[t] && (B = new Qt[t]).init(u, B.rawVars ? a[t] : $y(a[t], s, u, o, n), n, s, o) !== !1 && (n._pt = h = new rt(n._pt,u,t,0,1,B.render,B,0,B.priority),
    n !== mi))
        for (g = n._ptLookup[n._targets.indexOf(u)],
        d = B._props.length; d--; )
            g[B._props[d]] = h;
    return B
}, _r, nh, kh = function i(t, a, n) {
    var s = t.vars, u = s.ease, o = s.startAt, B = s.immediateRender, h = s.lazy, g = s.onUpdate, d = s.runBackwards, w = s.yoyoEase, C = s.keyframes, m = s.autoRevert, v = t._dur, p = t._startAt, b = t._targets, E = t.parent, S = E && E.data === "nested" ? E.vars.targets : b, O = t._overwrite === "auto" && !Ih, G = t.timeline, x, L, K, k, N, iA, uA, oA, lA, hA, CA, D, Z;
    if (G && (!C || !u) && (u = "none"),
    t._ease = Ua(u, Hi.ease),
    t._yEase = w ? tU(Ua(w === !0 ? u : w, Hi.ease)) : 0,
    w && t._yoyo && !t._repeat && (w = t._yEase,
    t._yEase = t._ease,
    t._ease = w),
    t._from = !G && !!s.runBackwards,
    !G || C && !s.stagger) {
        if (oA = b[0] ? wa(b[0]).harness : 0,
        D = oA && s[oA.prop],
        x = Fc(s, Vh),
        p && (p._zTime < 0 && p.progress(1),
        a < 0 && d && B && !m ? p.render(-1, !0) : p.revert(d && v ? gc : _y),
        p._lazy = 0),
        o) {
            if (Ir(t._startAt = Qe.set(b, vt({
                data: "isStart",
                overwrite: !1,
                parent: E,
                immediateRender: !0,
                lazy: !p && tt(h),
                startAt: null,
                delay: 0,
                onUpdate: g && function() {
                    return Ct(t, "onUpdate")
                }
                ,
                stagger: 0
            }, o))),
            t._startAt._dp = 0,
            t._startAt._sat = t,
            a < 0 && (Me || !B && !m) && t._startAt.revert(gc),
            B && v && a <= 0 && n <= 0) {
                a && (t._zTime = a);
                return
            }
        } else if (d && v && !p) {
            if (a && (B = !1),
            K = vt({
                overwrite: !1,
                data: "isFromStart",
                lazy: B && !p && tt(h),
                immediateRender: B,
                stagger: 0,
                parent: E
            }, x),
            D && (K[oA.prop] = D),
            Ir(t._startAt = Qe.set(b, K)),
            t._startAt._dp = 0,
            t._startAt._sat = t,
            a < 0 && (Me ? t._startAt.revert(gc) : t._startAt.render(-1, !0)),
            t._zTime = a,
            !B)
                i(t._startAt, kA, kA);
            else if (!a)
                return
        }
        for (t._pt = t._ptCache = 0,
        h = v && tt(h) || h && !v,
        L = 0; L < b.length; L++) {
            if (N = b[L],
            uA = N._gsap || Xh(b)[L]._gsap,
            t._ptLookup[L] = hA = {},
            WB[uA.id] && Dr.length && yc(),
            CA = S === b ? L : S.indexOf(N),
            oA && (lA = new oA).init(N, D || x, t, CA, S) !== !1 && (t._pt = k = new rt(t._pt,N,lA.name,0,1,lA.render,lA,0,lA.priority),
            lA._props.forEach(function(rA) {
                hA[rA] = k
            }),
            lA.priority && (iA = 1)),
            !oA || D)
                for (K in x)
                    Qt[K] && (lA = iU(K, x, t, CA, N, S)) ? lA.priority && (iA = 1) : hA[K] = k = Jh.call(t, N, K, "get", x[K], CA, S, 0, s.stringFilter);
            t._op && t._op[L] && t.kill(N, t._op[L]),
            O && t._pt && (_r = t,
            te.killTweensOf(N, hA, t.globalTime(a)),
            Z = !t.parent,
            _r = 0),
            t._pt && h && (WB[uA.id] = 1)
        }
        iA && fU(t),
        t._onInit && t._onInit(t)
    }
    t._onUpdate = g,
    t._initted = (!t._op || t._pt) && !Z,
    C && a <= 0 && G.render(It, !0, !0)
}, AF = function(t, a, n, s, u, o, B, h) {
    var g = (t._pt && t._ptCache || (t._ptCache = {}))[a], d, w, C, m;
    if (!g)
        for (g = t._ptCache[a] = [],
        C = t._ptLookup,
        m = t._targets.length; m--; ) {
            if (d = C[m][a],
            d && d.d && d.d._pt)
                for (d = d.d._pt; d && d.p !== a && d.fp !== a; )
                    d = d._next;
            if (!d)
                return nh = 1,
                t.vars[a] = "+=0",
                kh(t, B),
                nh = 0,
                h ? us(a + " not eligible for reset") : 1;
            g.push(d)
        }
    for (m = g.length; m--; )
        w = g[m],
        d = w._pt || w,
        d.s = (s || s === 0) && !u ? s : d.s + (s || 0) + o * d.c,
        d.c = n - d.s,
        w.e && (w.e = fe(n) + Ge(w.e)),
        w.b && (w.b = d.s + Ge(w.b))
}, eF = function(t, a) {
    var n = t[0] ? wa(t[0]).harness : 0, s = n && n.aliases, u, o, B, h;
    if (!s)
        return a;
    u = bi({}, a);
    for (o in s)
        if (o in u)
            for (h = s[o].split(","),
            B = h.length; B--; )
                u[h[B]] = u[o];
    return u
}, tF = function(t, a, n, s) {
    var u = a.ease || s || "power1.inOut", o, B;
    if (Ve(a))
        B = n[t] || (n[t] = []),
        a.forEach(function(h, g) {
            return B.push({
                t: g / (a.length - 1) * 100,
                v: h,
                e: u
            })
        });
    else
        for (o in a)
            B = n[o] || (n[o] = []),
            o === "ease" || B.push({
                t: parseFloat(t),
                v: a[o],
                e: u
            })
}, es = function(t, a, n, s, u) {
    return le(t) ? t.call(a, n, s, u) : He(t) && ~t.indexOf("random(") ? os(t) : t
}, lU = zh + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", sU = {};
nt(lU + ",id,stagger,delay,duration,paused,scrollTrigger", function(i) {
    return sU[i] = 1
});
var Qe = (function(i) {
    _C(t, i);
    function t(n, s, u, o) {
        var B;
        typeof s == "number" && (u.duration = s,
        s = u,
        u = null),
        B = i.call(this, o ? s : $l(s)) || this;
        var h = B.vars, g = h.duration, d = h.delay, w = h.immediateRender, C = h.stagger, m = h.overwrite, v = h.keyframes, p = h.defaults, b = h.scrollTrigger, E = h.yoyoEase, S = s.parent || te, O = (Ve(n) || bC(n) ? zn(n[0]) : "length"in s) ? [n] : Kt(n), G, x, L, K, k, N, iA, uA;
        if (B._targets = O.length ? Xh(O) : us("GSAP target " + n + " not found. https://gsap.com", !pt.nullTargetWarn) || [],
        B._ptLookup = [],
        B._overwrite = m,
        v || C || zu(g) || zu(d)) {
            if (s = B.vars,
            G = B.timeline = new Je({
                data: "nested",
                defaults: p || {},
                targets: S && S.data === "nested" ? S.vars.targets : O
            }),
            G.kill(),
            G.parent = G._dp = Rn(B),
            G._start = 0,
            C || zu(g) || zu(d)) {
                if (K = O.length,
                iA = C && JC(C),
                fn(C))
                    for (k in C)
                        ~lU.indexOf(k) && (uA || (uA = {}),
                        uA[k] = C[k]);
                for (x = 0; x < K; x++)
                    L = Fc(s, sU),
                    L.stagger = 0,
                    E && (L.yoyoEase = E),
                    uA && bi(L, uA),
                    N = O[x],
                    L.duration = +es(g, Rn(B), x, N, O),
                    L.delay = (+es(d, Rn(B), x, N, O) || 0) - B._delay,
                    !C && K === 1 && L.delay && (B._delay = d = L.delay,
                    B._start += d,
                    L.delay = 0),
                    G.to(N, L, iA ? iA(x, N, O) : 0),
                    G._ease = xA.none;
                G.duration() ? g = d = 0 : B.timeline = 0
            } else if (v) {
                $l(vt(G.vars.defaults, {
                    ease: "none"
                })),
                G._ease = Ua(v.ease || s.ease || "none");
                var oA = 0, lA, hA, CA;
                if (Ve(v))
                    v.forEach(function(D) {
                        return G.to(O, D, ">")
                    }),
                    G.duration();
                else {
                    L = {};
                    for (k in v)
                        k === "ease" || k === "easeEach" || tF(k, v[k], L, v.easeEach);
                    for (k in L)
                        for (lA = L[k].sort(function(D, Z) {
                            return D.t - Z.t
                        }),
                        oA = 0,
                        x = 0; x < lA.length; x++)
                            hA = lA[x],
                            CA = {
                                ease: hA.e,
                                duration: (hA.t - (x ? lA[x - 1].t : 0)) / 100 * g
                            },
                            CA[k] = hA.v,
                            G.to(O, CA, oA),
                            oA += CA.duration;
                    G.duration() < g && G.to({}, {
                        duration: g - G.duration()
                    })
                }
            }
            g || B.duration(g = G.duration())
        } else
            B.timeline = 0;
        return m === !0 && !Ih && (_r = Rn(B),
        te.killTweensOf(O),
        _r = 0),
        un(S, Rn(B), u),
        s.reversed && B.reverse(),
        s.paused && B.paused(!0),
        (w || !g && !v && B._start === ee(S._time) && tt(w) && Dy(Rn(B)) && S.data !== "nested") && (B._tTime = -kA,
        B.render(Math.max(0, -d) || 0)),
        b && VC(Rn(B), b),
        B
    }
    var a = t.prototype;
    return a.render = function(s, u, o) {
        var B = this._time, h = this._tDur, g = this._dur, d = s < 0, w = s > h - kA && !d ? h : s < kA ? 0 : s, C, m, v, p, b, E, S, O, G;
        if (!g)
            Oy(this, s, u, o);
        else if (w !== this._tTime || !s || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== d || this._lazy) {
            if (C = w,
            O = this.timeline,
            this._repeat) {
                if (p = g + this._rDelay,
                this._repeat < -1 && d)
                    return this.totalTime(p * 100 + s, u, o);
                if (C = ee(w % p),
                w === h ? (v = this._repeat,
                C = g) : (b = ee(w / p),
                v = ~~b,
                v && v === b ? (C = g,
                v--) : C > g && (C = g)),
                E = this._yoyo && v & 1,
                E && (G = this._yEase,
                C = g - C),
                b = Si(this._tTime, p),
                C === B && !o && this._initted && v === b)
                    return this._tTime = w,
                    this;
                v !== b && (O && this._yEase && nU(O, E),
                this.vars.repeatRefresh && !E && !this._lock && C !== p && this._initted && (this._lock = o = 1,
                this.render(ee(p * v), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (zC(this, d ? s : C, o, u, w))
                    return this._tTime = 0,
                    this;
                if (B !== this._time && !(o && this.vars.repeatRefresh && v !== b))
                    return this;
                if (g !== this._dur)
                    return this.render(s, u, o)
            }
            if (this._tTime = w,
            this._time = C,
            !this._act && this._ts && (this._act = 1,
            this._lazy = 0),
            this.ratio = S = (G || this._ease)(C / g),
            this._from && (this.ratio = S = 1 - S),
            !B && w && !u && !b && (Ct(this, "onStart"),
            this._tTime !== w))
                return this;
            for (m = this._pt; m; )
                m.r(S, m.d),
                m = m._next;
            O && O.render(s < 0 ? s : O._dur * O._ease(C / this._dur), u, o) || this._startAt && (this._zTime = s),
            this._onUpdate && !u && (d && PB(this, s, u, o),
            Ct(this, "onUpdate")),
            this._repeat && v !== b && this.vars.onRepeat && !u && this.parent && Ct(this, "onRepeat"),
            (w === this._tDur || !w) && this._tTime === w && (d && !this._onUpdate && PB(this, s, !0, !0),
            (s || !g) && (w === this._tDur && this._ts > 0 || !w && this._ts < 0) && Ir(this, 1),
            !u && !(d && !B) && (w || B || E) && (Ct(this, w === h ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(w < h && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
    ,
    a.targets = function() {
        return this._targets
    }
    ,
    a.invalidate = function(s) {
        return (!s || !this.vars.runBackwards) && (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(s),
        i.prototype.invalidate.call(this, s)
    }
    ,
    a.resetTo = function(s, u, o, B, h) {
        fs || wt.wake(),
        this._ts || this.play();
        var g = Math.min(this._dur, (this._dp._time - this._start) * this._ts), d;
        return this._initted || kh(this, g),
        d = this._ease(g / this._dur),
        AF(this, s, u, o, B, d, g, h) ? this.resetTo(s, u, o, B, 1) : (Vc(this, 0),
        this.parent || NC(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    a.kill = function(s, u) {
        if (u === void 0 && (u = "all"),
        !s && (!u || u === "all"))
            return this._lazy = this._pt = 0,
            this.parent ? Xl(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Me),
            this;
        if (this.timeline) {
            var o = this.timeline.totalDuration();
            return this.timeline.killTweensOf(s, u, _r && _r.vars.overwrite !== !0)._first || Xl(this),
            this.parent && o !== this.timeline.totalDuration() && Ti(this, this._dur * this.timeline._tDur / o, 0, 1),
            this
        }
        var B = this._targets, h = s ? Kt(s) : B, g = this._ptLookup, d = this._pt, w, C, m, v, p, b, E;
        if ((!u || u === "all") && Ty(B, h))
            return u === "all" && (this._pt = 0),
            Xl(this);
        for (w = this._op = this._op || [],
        u !== "all" && (He(u) && (p = {},
        nt(u, function(S) {
            return p[S] = 1
        }),
        u = p),
        u = eF(B, u)),
        E = B.length; E--; )
            if (~h.indexOf(B[E])) {
                C = g[E],
                u === "all" ? (w[E] = u,
                v = C,
                m = {}) : (m = w[E] = w[E] || {},
                v = u);
                for (p in v)
                    b = C && C[p],
                    b && ((!("kill"in b.d) || b.d.kill(p) === !0) && Nc(this, b, "_pt"),
                    delete C[p]),
                    m !== "all" && (m[p] = 1)
            }
        return this._initted && !this._pt && d && Xl(this),
        this
    }
    ,
    t.to = function(s, u) {
        return new t(s,u,arguments[2])
    }
    ,
    t.from = function(s, u) {
        return As(1, arguments)
    }
    ,
    t.delayedCall = function(s, u, o, B) {
        return new t(u,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: s,
            onComplete: u,
            onReverseComplete: u,
            onCompleteParams: o,
            onReverseCompleteParams: o,
            callbackScope: B
        })
    }
    ,
    t.fromTo = function(s, u, o) {
        return As(2, arguments)
    }
    ,
    t.set = function(s, u) {
        return u.duration = 0,
        u.repeatDelay || (u.repeat = 0),
        new t(s,u)
    }
    ,
    t.killTweensOf = function(s, u, o) {
        return te.killTweensOf(s, u, o)
    }
    ,
    t
}
)(Bs);
vt(Qe.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
nt("staggerTo,staggerFrom,staggerFromTo", function(i) {
    Qe[i] = function() {
        var t = new Je
          , a = Ah.call(arguments, 0);
        return a.splice(i === "staggerFromTo" ? 5 : 4, 0, 0),
        t[i].apply(t, a)
    }
});
var jh = function(t, a, n) {
    return t[a] = n
}
  , uU = function(t, a, n) {
    return t[a](n)
}
  , nF = function(t, a, n, s) {
    return t[a](s.fp, n)
}
  , rF = function(t, a, n) {
    return t.setAttribute(a, n)
}
  , Zh = function(t, a) {
    return le(t[a]) ? uU : Kh(t[a]) && t.setAttribute ? rF : jh
}
  , cU = function(t, a) {
    return a.set(a.t, a.p, Math.round((a.s + a.c * t) * 1e6) / 1e6, a)
}
  , aF = function(t, a) {
    return a.set(a.t, a.p, !!(a.s + a.c * t), a)
}
  , oU = function(t, a) {
    var n = a._pt
      , s = "";
    if (!t && a.b)
        s = a.b;
    else if (t === 1 && a.e)
        s = a.e;
    else {
        for (; n; )
            s = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round((n.s + n.c * t) * 1e4) / 1e4) + s,
            n = n._next;
        s += a.c
    }
    a.set(a.t, a.p, s, a)
}
  , qh = function(t, a) {
    for (var n = a._pt; n; )
        n.r(t, n.d),
        n = n._next
}
  , iF = function(t, a, n, s) {
    for (var u = this._pt, o; u; )
        o = u._next,
        u.p === s && u.modifier(t, a, n),
        u = o
}
  , lF = function(t) {
    for (var a = this._pt, n, s; a; )
        s = a._next,
        a.p === t && !a.op || a.op === t ? Nc(this, a, "_pt") : a.dep || (n = 1),
        a = s;
    return !n
}
  , sF = function(t, a, n, s) {
    s.mSet(t, a, s.m.call(s.tween, n, s.mt), s)
}
  , fU = function(t) {
    for (var a = t._pt, n, s, u, o; a; ) {
        for (n = a._next,
        s = u; s && s.pr > a.pr; )
            s = s._next;
        (a._prev = s ? s._prev : o) ? a._prev._next = a : u = a,
        (a._next = s) ? s._prev = a : o = a,
        a = n
    }
    t._pt = u
}
  , rt = (function() {
    function i(a, n, s, u, o, B, h, g, d) {
        this.t = n,
        this.s = u,
        this.c = o,
        this.p = s,
        this.r = B || cU,
        this.d = h || this,
        this.set = g || jh,
        this.pr = d || 0,
        this._next = a,
        a && (a._prev = this)
    }
    var t = i.prototype;
    return t.modifier = function(n, s, u) {
        this.mSet = this.mSet || this.set,
        this.set = sF,
        this.m = n,
        this.mt = u,
        this.tween = s
    }
    ,
    i
}
)();
nt(zh + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(i) {
    return Vh[i] = 1
});
mt.TweenMax = mt.TweenLite = Qe;
mt.TimelineLite = mt.TimelineMax = Je;
te = new Je({
    sortChildren: !1,
    defaults: Hi,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
pt.stringFilter = eU;
var pa = []
  , Qc = {}
  , uF = []
  , cw = 0
  , cF = 0
  , mB = function(t) {
    return (Qc[t] || uF).map(function(a) {
        return a()
    })
}
  , rh = function() {
    var t = Date.now()
      , a = [];
    t - cw > 2 && (mB("matchMediaInit"),
    pa.forEach(function(n) {
        var s = n.queries, u = n.conditions, o, B, h, g;
        for (B in s)
            o = sn.matchMedia(s[B]).matches,
            o && (h = 1),
            o !== u[B] && (u[B] = o,
            g = 1);
        g && (n.revert(),
        h && a.push(n))
    }),
    mB("matchMediaRevert"),
    a.forEach(function(n) {
        return n.onMatch(n, function(s) {
            return n.add(null, s)
        })
    }),
    cw = t,
    mB("matchMedia"))
}
  , BU = (function() {
    function i(a, n) {
        this.selector = n && eh(n),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        this.id = cF++,
        a && this.add(a)
    }
    var t = i.prototype;
    return t.add = function(n, s, u) {
        le(n) && (u = s,
        s = n,
        n = le);
        var o = this
          , B = function() {
            var g = Ae, d = o.selector, w;
            return g && g !== o && g.data.push(o),
            u && (o.selector = eh(u)),
            Ae = o,
            w = s.apply(o, arguments),
            le(w) && o._r.push(w),
            Ae = g,
            o.selector = d,
            o.isReverted = !1,
            w
        };
        return o.last = B,
        n === le ? B(o, function(h) {
            return o.add(null, h)
        }) : n ? o[n] = B : B
    }
    ,
    t.ignore = function(n) {
        var s = Ae;
        Ae = null,
        n(this),
        Ae = s
    }
    ,
    t.getTweens = function() {
        var n = [];
        return this.data.forEach(function(s) {
            return s instanceof i ? n.push.apply(n, s.getTweens()) : s instanceof Qe && !(s.parent && s.parent.data === "nested") && n.push(s)
        }),
        n
    }
    ,
    t.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    t.kill = function(n, s) {
        var u = this;
        if (n ? (function() {
            for (var B = u.getTweens(), h = u.data.length, g; h--; )
                g = u.data[h],
                g.data === "isFlip" && (g.revert(),
                g.getChildren(!0, !0, !1).forEach(function(d) {
                    return B.splice(B.indexOf(d), 1)
                }));
            for (B.map(function(d) {
                return {
                    g: d._dur || d._delay || d._sat && !d._sat.vars.immediateRender ? d.globalTime(0) : -1 / 0,
                    t: d
                }
            }).sort(function(d, w) {
                return w.g - d.g || -1 / 0
            }).forEach(function(d) {
                return d.t.revert(n)
            }),
            h = u.data.length; h--; )
                g = u.data[h],
                g instanceof Je ? g.data !== "nested" && (g.scrollTrigger && g.scrollTrigger.revert(),
                g.kill()) : !(g instanceof Qe) && g.revert && g.revert(n);
            u._r.forEach(function(d) {
                return d(n, u)
            }),
            u.isReverted = !0
        }
        )() : this.data.forEach(function(B) {
            return B.kill && B.kill()
        }),
        this.clear(),
        s)
            for (var o = pa.length; o--; )
                pa[o].id === this.id && pa.splice(o, 1)
    }
    ,
    t.revert = function(n) {
        this.kill(n || {})
    }
    ,
    i
}
)()
  , oF = (function() {
    function i(a) {
        this.contexts = [],
        this.scope = a,
        Ae && Ae.data.push(this)
    }
    var t = i.prototype;
    return t.add = function(n, s, u) {
        fn(n) || (n = {
            matches: n
        });
        var o = new BU(0,u || this.scope), B = o.conditions = {}, h, g, d;
        Ae && !o.selector && (o.selector = Ae.selector),
        this.contexts.push(o),
        s = o.add("onMatch", s),
        o.queries = n;
        for (g in n)
            g === "all" ? d = 1 : (h = sn.matchMedia(n[g]),
            h && (pa.indexOf(o) < 0 && pa.push(o),
            (B[g] = h.matches) && (d = 1),
            h.addListener ? h.addListener(rh) : h.addEventListener("change", rh)));
        return d && s(o, function(w) {
            return o.add(null, w)
        }),
        this
    }
    ,
    t.revert = function(n) {
        this.kill(n || {})
    }
    ,
    t.kill = function(n) {
        this.contexts.forEach(function(s) {
            return s.kill(n, !0)
        })
    }
    ,
    i
}
)()
  , _c = {
    registerPlugin: function() {
        for (var t = arguments.length, a = new Array(t), n = 0; n < t; n++)
            a[n] = arguments[n];
        a.forEach(function(s) {
            return PC(s)
        })
    },
    timeline: function(t) {
        return new Je(t)
    },
    getTweensOf: function(t, a) {
        return te.getTweensOf(t, a)
    },
    getProperty: function(t, a, n, s) {
        He(t) && (t = Kt(t)[0]);
        var u = wa(t || {}).get
          , o = n ? RC : KC;
        return n === "native" && (n = ""),
        t && (a ? o((Qt[a] && Qt[a].get || u)(t, a, n, s)) : function(B, h, g) {
            return o((Qt[B] && Qt[B].get || u)(t, B, h, g))
        }
        )
    },
    quickSetter: function(t, a, n) {
        if (t = Kt(t),
        t.length > 1) {
            var s = t.map(function(d) {
                return it.quickSetter(d, a, n)
            })
              , u = s.length;
            return function(d) {
                for (var w = u; w--; )
                    s[w](d)
            }
        }
        t = t[0] || {};
        var o = Qt[a]
          , B = wa(t)
          , h = B.harness && (B.harness.aliases || {})[a] || a
          , g = o ? function(d) {
            var w = new o;
            mi._pt = 0,
            w.init(t, n ? d + n : d, mi, 0, [t]),
            w.render(1, w),
            mi._pt && qh(1, mi)
        }
        : B.set(t, h);
        return o ? g : function(d) {
            return g(t, h, n ? d + n : d, B, 1)
        }
    },
    quickTo: function(t, a, n) {
        var s, u = it.to(t, vt((s = {},
        s[a] = "+=0.1",
        s.paused = !0,
        s.stagger = 0,
        s), n || {})), o = function(h, g, d) {
            return u.resetTo(a, h, g, d)
        };
        return o.tween = u,
        o
    },
    isTweening: function(t) {
        return te.getTweensOf(t, !0).length > 0
    },
    defaults: function(t) {
        return t && t.ease && (t.ease = Ua(t.ease, Hi.ease)),
        aw(Hi, t || {})
    },
    config: function(t) {
        return aw(pt, t || {})
    },
    registerEffect: function(t) {
        var a = t.name
          , n = t.effect
          , s = t.plugins
          , u = t.defaults
          , o = t.extendTimeline;
        (s || "").split(",").forEach(function(B) {
            return B && !Qt[B] && !mt[B] && us(a + " effect requires " + B + " plugin.")
        }),
        wB[a] = function(B, h, g) {
            return n(Kt(B), vt(h || {}, u), g)
        }
        ,
        o && (Je.prototype[a] = function(B, h, g) {
            return this.add(wB[a](B, fn(h) ? h : (g = h) && {}, this), g)
        }
        )
    },
    registerEase: function(t, a) {
        xA[t] = Ua(a)
    },
    parseEase: function(t, a) {
        return arguments.length ? Ua(t, a) : xA
    },
    getById: function(t) {
        return te.getById(t)
    },
    exportRoot: function(t, a) {
        t === void 0 && (t = {});
        var n = new Je(t), s, u;
        for (n.smoothChildTiming = tt(t.smoothChildTiming),
        te.remove(n),
        n._dp = 0,
        n._time = n._tTime = te._time,
        s = te._first; s; )
            u = s._next,
            (a || !(!s._dur && s instanceof Qe && s.vars.onComplete === s._targets[0])) && un(n, s, s._start - s._delay),
            s = u;
        return un(te, n, 0),
        n
    },
    context: function(t, a) {
        return t ? new BU(t,a) : Ae
    },
    matchMedia: function(t) {
        return new oF(t)
    },
    matchMediaRefresh: function() {
        return pa.forEach(function(t) {
            var a = t.conditions, n, s;
            for (s in a)
                a[s] && (a[s] = !1,
                n = 1);
            n && t.revert()
        }) || rh()
    },
    addEventListener: function(t, a) {
        var n = Qc[t] || (Qc[t] = []);
        ~n.indexOf(a) || n.push(a)
    },
    removeEventListener: function(t, a) {
        var n = Qc[t]
          , s = n && n.indexOf(a);
        s >= 0 && n.splice(s, 1)
    },
    utils: {
        wrap: zy,
        wrapYoyo: Xy,
        distribute: JC,
        random: jC,
        snap: kC,
        normalize: Vy,
        getUnit: Ge,
        clamp: Ky,
        splitColor: $C,
        toArray: Kt,
        selector: eh,
        mapRange: qC,
        pipe: Ny,
        unitize: Gy,
        interpolate: Yy,
        shuffle: YC
    },
    install: DC,
    effects: wB,
    ticker: wt,
    updateRoot: Je.updateRoot,
    plugins: Qt,
    globalTimeline: te,
    core: {
        PropTween: rt,
        globals: LC,
        Tween: Qe,
        Timeline: Je,
        Animation: Bs,
        getCache: wa,
        _removeLinkedListItem: Nc,
        reverting: function() {
            return Me
        },
        context: function(t) {
            return t && Ae && (Ae.data.push(t),
            t._ctx = Ae),
            Ae
        },
        suppressOverwrites: function(t) {
            return Ih = t
        }
    }
};
nt("to,from,fromTo,delayedCall,set,killTweensOf", function(i) {
    return _c[i] = Qe[i]
});
wt.add(Je.updateRoot);
mi = _c.to({}, {
    duration: 0
});
var fF = function(t, a) {
    for (var n = t._pt; n && n.p !== a && n.op !== a && n.fp !== a; )
        n = n._next;
    return n
}
  , BF = function(t, a) {
    var n = t._targets, s, u, o;
    for (s in a)
        for (u = n.length; u--; )
            o = t._ptLookup[u][s],
            o && (o = o.d) && (o._pt && (o = fF(o, s)),
            o && o.modifier && o.modifier(a[s], t, n[u], s))
}
  , vB = function(t, a) {
    return {
        name: t,
        headless: 1,
        rawVars: 1,
        init: function(s, u, o) {
            o._onInit = function(B) {
                var h, g;
                if (He(u) && (h = {},
                nt(u, function(d) {
                    return h[d] = 1
                }),
                u = h),
                a) {
                    h = {};
                    for (g in u)
                        h[g] = a(u[g]);
                    u = h
                }
                BF(B, u)
            }
        }
    }
}
  , it = _c.registerPlugin({
    name: "attr",
    init: function(t, a, n, s, u) {
        var o, B, h;
        this.tween = n;
        for (o in a)
            h = t.getAttribute(o) || "",
            B = this.add(t, "setAttribute", (h || 0) + "", a[o], s, u, 0, 0, o),
            B.op = o,
            B.b = h,
            this._props.push(o)
    },
    render: function(t, a) {
        for (var n = a._pt; n; )
            Me ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d),
            n = n._next
    }
}, {
    name: "endArray",
    headless: 1,
    init: function(t, a) {
        for (var n = a.length; n--; )
            this.add(t, n, t[n] || 0, a[n], 0, 0, 0, 0, 0, 1)
    }
}, vB("roundProps", th), vB("modifiers"), vB("snap", kC)) || _c;
Qe.version = Je.version = it.version = "3.14.2";
xC = 1;
Rh() && xi();
xA.Power0;
xA.Power1;
xA.Power2;
xA.Power3;
xA.Power4;
xA.Linear;
xA.Quad;
xA.Cubic;
xA.Quart;
xA.Quint;
xA.Strong;
xA.Elastic;
xA.Back;
xA.SteppedEase;
xA.Bounce;
xA.Sine;
xA.Expo;
xA.Circ;
var ow, Hr, Fi, Wh, da, fw, Ph, hF = function() {
    return typeof window < "u"
}, Xn = {}, ha = 180 / Math.PI, Ei = Math.PI / 180, oi = Math.atan2, Bw = 1e8, $h = /([A-Z])/g, gF = /(left|right|width|margin|padding|x)/i, dF = /[\s,\(]\S/, on = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, ah = function(t, a) {
    return a.set(a.t, a.p, Math.round((a.s + a.c * t) * 1e4) / 1e4 + a.u, a)
}, QF = function(t, a) {
    return a.set(a.t, a.p, t === 1 ? a.e : Math.round((a.s + a.c * t) * 1e4) / 1e4 + a.u, a)
}, wF = function(t, a) {
    return a.set(a.t, a.p, t ? Math.round((a.s + a.c * t) * 1e4) / 1e4 + a.u : a.b, a)
}, CF = function(t, a) {
    return a.set(a.t, a.p, t === 1 ? a.e : t ? Math.round((a.s + a.c * t) * 1e4) / 1e4 + a.u : a.b, a)
}, UF = function(t, a) {
    var n = a.s + a.c * t;
    a.set(a.t, a.p, ~~(n + (n < 0 ? -.5 : .5)) + a.u, a)
}, hU = function(t, a) {
    return a.set(a.t, a.p, t ? a.e : a.b, a)
}, gU = function(t, a) {
    return a.set(a.t, a.p, t !== 1 ? a.b : a.e, a)
}, pF = function(t, a, n) {
    return t.style[a] = n
}, mF = function(t, a, n) {
    return t.style.setProperty(a, n)
}, vF = function(t, a, n) {
    return t._gsap[a] = n
}, yF = function(t, a, n) {
    return t._gsap.scaleX = t._gsap.scaleY = n
}, FF = function(t, a, n, s, u) {
    var o = t._gsap;
    o.scaleX = o.scaleY = n,
    o.renderTransform(u, o)
}, EF = function(t, a, n, s, u) {
    var o = t._gsap;
    o[a] = n,
    o.renderTransform(u, o)
}, ne = "transform", at = ne + "Origin", _F = function i(t, a) {
    var n = this
      , s = this.target
      , u = s.style
      , o = s._gsap;
    if (t in Xn && u) {
        if (this.tfm = this.tfm || {},
        t !== "transform")
            t = on[t] || t,
            ~t.indexOf(",") ? t.split(",").forEach(function(B) {
                return n.tfm[B] = Nn(s, B)
            }) : this.tfm[t] = o.x ? o[t] : Nn(s, t),
            t === at && (this.tfm.zOrigin = o.zOrigin);
        else
            return on.transform.split(",").forEach(function(B) {
                return i.call(n, B, a)
            });
        if (this.props.indexOf(ne) >= 0)
            return;
        o.svg && (this.svgo = s.getAttribute("data-svg-origin"),
        this.props.push(at, a, "")),
        t = ne
    }
    (u || a) && this.props.push(t, a, u[t])
}, dU = function(t) {
    t.translate && (t.removeProperty("translate"),
    t.removeProperty("scale"),
    t.removeProperty("rotate"))
}, HF = function() {
    var t = this.props, a = this.target, n = a.style, s = a._gsap, u, o;
    for (u = 0; u < t.length; u += 3)
        t[u + 1] ? t[u + 1] === 2 ? a[t[u]](t[u + 2]) : a[t[u]] = t[u + 2] : t[u + 2] ? n[t[u]] = t[u + 2] : n.removeProperty(t[u].substr(0, 2) === "--" ? t[u] : t[u].replace($h, "-$1").toLowerCase());
    if (this.tfm) {
        for (o in this.tfm)
            s[o] = this.tfm[o];
        s.svg && (s.renderTransform(),
        a.setAttribute("data-svg-origin", this.svgo || "")),
        u = Ph(),
        (!u || !u.isStart) && !n[ne] && (dU(n),
        s.zOrigin && n[at] && (n[at] += " " + s.zOrigin + "px",
        s.zOrigin = 0,
        s.renderTransform()),
        s.uncache = 1)
    }
}, QU = function(t, a) {
    var n = {
        target: t,
        props: [],
        revert: HF,
        save: _F
    };
    return t._gsap || it.core.getCache(t),
    a && t.style && t.nodeType && a.split(",").forEach(function(s) {
        return n.save(s)
    }),
    n
}, wU, ih = function(t, a) {
    var n = Hr.createElementNS ? Hr.createElementNS((a || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Hr.createElement(t);
    return n && n.style ? n : Hr.createElement(t)
}, Ut = function i(t, a, n) {
    var s = getComputedStyle(t);
    return s[a] || s.getPropertyValue(a.replace($h, "-$1").toLowerCase()) || s.getPropertyValue(a) || !n && i(t, Di(a) || a, 1) || ""
}, hw = "O,Moz,ms,Ms,Webkit".split(","), Di = function(t, a, n) {
    var s = a || da
      , u = s.style
      , o = 5;
    if (t in u && !n)
        return t;
    for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !(hw[o] + t in u); )
        ;
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? hw[o] : "") + t
}, lh = function() {
    hF() && window.document && (ow = window,
    Hr = ow.document,
    Fi = Hr.documentElement,
    da = ih("div") || {
        style: {}
    },
    ih("div"),
    ne = Di(ne),
    at = ne + "Origin",
    da.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
    wU = !!Di("perspective"),
    Ph = it.core.reverting,
    Wh = 1)
}, gw = function(t) {
    var a = t.ownerSVGElement, n = ih("svg", a && a.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), s = t.cloneNode(!0), u;
    s.style.display = "block",
    n.appendChild(s),
    Fi.appendChild(n);
    try {
        u = s.getBBox()
    } catch {}
    return n.removeChild(s),
    Fi.removeChild(n),
    u
}, dw = function(t, a) {
    for (var n = a.length; n--; )
        if (t.hasAttribute(a[n]))
            return t.getAttribute(a[n])
}, CU = function(t) {
    var a, n;
    try {
        a = t.getBBox()
    } catch {
        a = gw(t),
        n = 1
    }
    return a && (a.width || a.height) || n || (a = gw(t)),
    a && !a.width && !a.x && !a.y ? {
        x: +dw(t, ["x", "cx", "x1"]) || 0,
        y: +dw(t, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
    } : a
}, UU = function(t) {
    return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && CU(t))
}, Kr = function(t, a) {
    if (a) {
        var n = t.style, s;
        a in Xn && a !== at && (a = ne),
        n.removeProperty ? (s = a.substr(0, 2),
        (s === "ms" || a.substr(0, 6) === "webkit") && (a = "-" + a),
        n.removeProperty(s === "--" ? a : a.replace($h, "-$1").toLowerCase())) : n.removeAttribute(a)
    }
}, br = function(t, a, n, s, u, o) {
    var B = new rt(t._pt,a,n,0,1,o ? gU : hU);
    return t._pt = B,
    B.b = s,
    B.e = u,
    t._props.push(n),
    B
}, Qw = {
    deg: 1,
    rad: 1,
    turn: 1
}, bF = {
    grid: 1,
    flex: 1
}, Rr = function i(t, a, n, s) {
    var u = parseFloat(n) || 0, o = (n + "").trim().substr((u + "").length) || "px", B = da.style, h = gF.test(a), g = t.tagName.toLowerCase() === "svg", d = (g ? "client" : "offset") + (h ? "Width" : "Height"), w = 100, C = s === "px", m = s === "%", v, p, b, E;
    if (s === o || !u || Qw[s] || Qw[o])
        return u;
    if (o !== "px" && !C && (u = i(t, a, n, "px")),
    E = t.getCTM && UU(t),
    (m || o === "%") && (Xn[a] || ~a.indexOf("adius")))
        return v = E ? t.getBBox()[h ? "width" : "height"] : t[d],
        fe(m ? u / v * w : u / 100 * v);
    if (B[h ? "width" : "height"] = w + (C ? o : s),
    p = s !== "rem" && ~a.indexOf("adius") || s === "em" && t.appendChild && !g ? t : t.parentNode,
    E && (p = (t.ownerSVGElement || {}).parentNode),
    (!p || p === Hr || !p.appendChild) && (p = Hr.body),
    b = p._gsap,
    b && m && b.width && h && b.time === wt.time && !b.uncache)
        return fe(u / b.width * w);
    if (m && (a === "height" || a === "width")) {
        var S = t.style[a];
        t.style[a] = w + s,
        v = t[d],
        S ? t.style[a] = S : Kr(t, a)
    } else
        (m || o === "%") && !bF[Ut(p, "display")] && (B.position = Ut(t, "position")),
        p === t && (B.position = "static"),
        p.appendChild(da),
        v = da[d],
        p.removeChild(da),
        B.position = "absolute";
    return h && m && (b = wa(p),
    b.time = wt.time,
    b.width = p[d]),
    fe(C ? v * u / w : v && u ? w / v * u : 0)
}, Nn = function(t, a, n, s) {
    var u;
    return Wh || lh(),
    a in on && a !== "transform" && (a = on[a],
    ~a.indexOf(",") && (a = a.split(",")[0])),
    Xn[a] && a !== "transform" ? (u = gs(t, s),
    u = a !== "transformOrigin" ? u[a] : u.svg ? u.origin : bc(Ut(t, at)) + " " + u.zOrigin + "px") : (u = t.style[a],
    (!u || u === "auto" || s || ~(u + "").indexOf("calc(")) && (u = Hc[a] && Hc[a](t, a, n) || Ut(t, a) || MC(t, a) || (a === "opacity" ? 1 : 0))),
    n && !~(u + "").trim().indexOf(" ") ? Rr(t, a, u, n) + n : u
}, SF = function(t, a, n, s) {
    if (!n || n === "none") {
        var u = Di(a, t, 1)
          , o = u && Ut(t, u, 1);
        o && o !== n ? (a = u,
        n = o) : a === "borderColor" && (n = Ut(t, "borderTopColor"))
    }
    var B = new rt(this._pt,t.style,a,0,1,oU), h = 0, g = 0, d, w, C, m, v, p, b, E, S, O, G, x;
    if (B.b = n,
    B.e = s,
    n += "",
    s += "",
    s.substring(0, 6) === "var(--" && (s = Ut(t, s.substring(4, s.indexOf(")")))),
    s === "auto" && (p = t.style[a],
    t.style[a] = s,
    s = Ut(t, a) || s,
    p ? t.style[a] = p : Kr(t, a)),
    d = [n, s],
    eU(d),
    n = d[0],
    s = d[1],
    C = n.match(pi) || [],
    x = s.match(pi) || [],
    x.length) {
        for (; w = pi.exec(s); )
            b = w[0],
            S = s.substring(h, w.index),
            v ? v = (v + 1) % 5 : (S.substr(-5) === "rgba(" || S.substr(-5) === "hsla(") && (v = 1),
            b !== (p = C[g++] || "") && (m = parseFloat(p) || 0,
            G = p.substr((m + "").length),
            b.charAt(1) === "=" && (b = yi(m, b) + G),
            E = parseFloat(b),
            O = b.substr((E + "").length),
            h = pi.lastIndex - O.length,
            O || (O = O || pt.units[a] || G,
            h === s.length && (s += O,
            B.e += O)),
            G !== O && (m = Rr(t, a, p, O) || 0),
            B._pt = {
                _next: B._pt,
                p: S || g === 1 ? S : ",",
                s: m,
                c: E - m,
                m: v && v < 4 || a === "zIndex" ? Math.round : 0
            });
        B.c = h < s.length ? s.substring(h, s.length) : ""
    } else
        B.r = a === "display" && s === "none" ? gU : hU;
    return TC.test(s) && (B.e = 0),
    this._pt = B,
    B
}, ww = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, TF = function(t) {
    var a = t.split(" ")
      , n = a[0]
      , s = a[1] || "50%";
    return (n === "top" || n === "bottom" || s === "left" || s === "right") && (t = n,
    n = s,
    s = t),
    a[0] = ww[n] || n,
    a[1] = ww[s] || s,
    a.join(" ")
}, xF = function(t, a) {
    if (a.tween && a.tween._time === a.tween._dur) {
        var n = a.t, s = n.style, u = a.u, o = n._gsap, B, h, g;
        if (u === "all" || u === !0)
            s.cssText = "",
            h = 1;
        else
            for (u = u.split(","),
            g = u.length; --g > -1; )
                B = u[g],
                Xn[B] && (h = 1,
                B = B === "transformOrigin" ? at : ne),
                Kr(n, B);
        h && (Kr(n, ne),
        o && (o.svg && n.removeAttribute("transform"),
        s.scale = s.rotate = s.translate = "none",
        gs(n, 1),
        o.uncache = 1,
        dU(s)))
    }
}, Hc = {
    clearProps: function(t, a, n, s, u) {
        if (u.data !== "isFromStart") {
            var o = t._pt = new rt(t._pt,a,n,0,0,xF);
            return o.u = s,
            o.pr = -10,
            o.tween = u,
            t._props.push(n),
            1
        }
    }
}, hs = [1, 0, 0, 1, 0, 0], pU = {}, mU = function(t) {
    return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t
}, Cw = function(t) {
    var a = Ut(t, ne);
    return mU(a) ? hs : a.substr(7).match(SC).map(fe)
}, Ag = function(t, a) {
    var n = t._gsap || wa(t), s = t.style, u = Cw(t), o, B, h, g;
    return n.svg && t.getAttribute("transform") ? (h = t.transform.baseVal.consolidate().matrix,
    u = [h.a, h.b, h.c, h.d, h.e, h.f],
    u.join(",") === "1,0,0,1,0,0" ? hs : u) : (u === hs && !t.offsetParent && t !== Fi && !n.svg && (h = s.display,
    s.display = "block",
    o = t.parentNode,
    (!o || !t.offsetParent && !t.getBoundingClientRect().width) && (g = 1,
    B = t.nextElementSibling,
    Fi.appendChild(t)),
    u = Cw(t),
    h ? s.display = h : Kr(t, "display"),
    g && (B ? o.insertBefore(t, B) : o ? o.appendChild(t) : Fi.removeChild(t))),
    a && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
}, sh = function(t, a, n, s, u, o) {
    var B = t._gsap, h = u || Ag(t, !0), g = B.xOrigin || 0, d = B.yOrigin || 0, w = B.xOffset || 0, C = B.yOffset || 0, m = h[0], v = h[1], p = h[2], b = h[3], E = h[4], S = h[5], O = a.split(" "), G = parseFloat(O[0]) || 0, x = parseFloat(O[1]) || 0, L, K, k, N;
    n ? h !== hs && (K = m * b - v * p) && (k = G * (b / K) + x * (-p / K) + (p * S - b * E) / K,
    N = G * (-v / K) + x * (m / K) - (m * S - v * E) / K,
    G = k,
    x = N) : (L = CU(t),
    G = L.x + (~O[0].indexOf("%") ? G / 100 * L.width : G),
    x = L.y + (~(O[1] || O[0]).indexOf("%") ? x / 100 * L.height : x)),
    s || s !== !1 && B.smooth ? (E = G - g,
    S = x - d,
    B.xOffset = w + (E * m + S * p) - E,
    B.yOffset = C + (E * v + S * b) - S) : B.xOffset = B.yOffset = 0,
    B.xOrigin = G,
    B.yOrigin = x,
    B.smooth = !!s,
    B.origin = a,
    B.originIsAbsolute = !!n,
    t.style[at] = "0px 0px",
    o && (br(o, B, "xOrigin", g, G),
    br(o, B, "yOrigin", d, x),
    br(o, B, "xOffset", w, B.xOffset),
    br(o, B, "yOffset", C, B.yOffset)),
    t.setAttribute("data-svg-origin", G + " " + x)
}, gs = function(t, a) {
    var n = t._gsap || new aU(t);
    if ("x"in n && !a && !n.uncache)
        return n;
    var s = t.style, u = n.scaleX < 0, o = "px", B = "deg", h = getComputedStyle(t), g = Ut(t, at) || "0", d, w, C, m, v, p, b, E, S, O, G, x, L, K, k, N, iA, uA, oA, lA, hA, CA, D, Z, rA, dA, wA, y, X, P, eA, cA;
    return d = w = C = p = b = E = S = O = G = 0,
    m = v = 1,
    n.svg = !!(t.getCTM && UU(t)),
    h.translate && ((h.translate !== "none" || h.scale !== "none" || h.rotate !== "none") && (s[ne] = (h.translate !== "none" ? "translate3d(" + (h.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (h.rotate !== "none" ? "rotate(" + h.rotate + ") " : "") + (h.scale !== "none" ? "scale(" + h.scale.split(" ").join(",") + ") " : "") + (h[ne] !== "none" ? h[ne] : "")),
    s.scale = s.rotate = s.translate = "none"),
    K = Ag(t, n.svg),
    n.svg && (n.uncache ? (rA = t.getBBox(),
    g = n.xOrigin - rA.x + "px " + (n.yOrigin - rA.y) + "px",
    Z = "") : Z = !a && t.getAttribute("data-svg-origin"),
    sh(t, Z || g, !!Z || n.originIsAbsolute, n.smooth !== !1, K)),
    x = n.xOrigin || 0,
    L = n.yOrigin || 0,
    K !== hs && (uA = K[0],
    oA = K[1],
    lA = K[2],
    hA = K[3],
    d = CA = K[4],
    w = D = K[5],
    K.length === 6 ? (m = Math.sqrt(uA * uA + oA * oA),
    v = Math.sqrt(hA * hA + lA * lA),
    p = uA || oA ? oi(oA, uA) * ha : 0,
    S = lA || hA ? oi(lA, hA) * ha + p : 0,
    S && (v *= Math.abs(Math.cos(S * Ei))),
    n.svg && (d -= x - (x * uA + L * lA),
    w -= L - (x * oA + L * hA))) : (cA = K[6],
    P = K[7],
    wA = K[8],
    y = K[9],
    X = K[10],
    eA = K[11],
    d = K[12],
    w = K[13],
    C = K[14],
    k = oi(cA, X),
    b = k * ha,
    k && (N = Math.cos(-k),
    iA = Math.sin(-k),
    Z = CA * N + wA * iA,
    rA = D * N + y * iA,
    dA = cA * N + X * iA,
    wA = CA * -iA + wA * N,
    y = D * -iA + y * N,
    X = cA * -iA + X * N,
    eA = P * -iA + eA * N,
    CA = Z,
    D = rA,
    cA = dA),
    k = oi(-lA, X),
    E = k * ha,
    k && (N = Math.cos(-k),
    iA = Math.sin(-k),
    Z = uA * N - wA * iA,
    rA = oA * N - y * iA,
    dA = lA * N - X * iA,
    eA = hA * iA + eA * N,
    uA = Z,
    oA = rA,
    lA = dA),
    k = oi(oA, uA),
    p = k * ha,
    k && (N = Math.cos(k),
    iA = Math.sin(k),
    Z = uA * N + oA * iA,
    rA = CA * N + D * iA,
    oA = oA * N - uA * iA,
    D = D * N - CA * iA,
    uA = Z,
    CA = rA),
    b && Math.abs(b) + Math.abs(p) > 359.9 && (b = p = 0,
    E = 180 - E),
    m = fe(Math.sqrt(uA * uA + oA * oA + lA * lA)),
    v = fe(Math.sqrt(D * D + cA * cA)),
    k = oi(CA, D),
    S = Math.abs(k) > 2e-4 ? k * ha : 0,
    G = eA ? 1 / (eA < 0 ? -eA : eA) : 0),
    n.svg && (Z = t.getAttribute("transform"),
    n.forceCSS = t.setAttribute("transform", "") || !mU(Ut(t, ne)),
    Z && t.setAttribute("transform", Z))),
    Math.abs(S) > 90 && Math.abs(S) < 270 && (u ? (m *= -1,
    S += p <= 0 ? 180 : -180,
    p += p <= 0 ? 180 : -180) : (v *= -1,
    S += S <= 0 ? 180 : -180)),
    a = a || n.uncache,
    n.x = d - ((n.xPercent = d && (!a && n.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-d) ? -50 : 0))) ? t.offsetWidth * n.xPercent / 100 : 0) + o,
    n.y = w - ((n.yPercent = w && (!a && n.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-w) ? -50 : 0))) ? t.offsetHeight * n.yPercent / 100 : 0) + o,
    n.z = C + o,
    n.scaleX = fe(m),
    n.scaleY = fe(v),
    n.rotation = fe(p) + B,
    n.rotationX = fe(b) + B,
    n.rotationY = fe(E) + B,
    n.skewX = S + B,
    n.skewY = O + B,
    n.transformPerspective = G + o,
    (n.zOrigin = parseFloat(g.split(" ")[2]) || !a && n.zOrigin || 0) && (s[at] = bc(g)),
    n.xOffset = n.yOffset = 0,
    n.force3D = pt.force3D,
    n.renderTransform = n.svg ? LF : wU ? vU : DF,
    n.uncache = 0,
    n
}, bc = function(t) {
    return (t = t.split(" "))[0] + " " + t[1]
}, yB = function(t, a, n) {
    var s = Ge(a);
    return fe(parseFloat(a) + parseFloat(Rr(t, "x", n + "px", s))) + s
}, DF = function(t, a) {
    a.z = "0px",
    a.rotationY = a.rotationX = "0deg",
    a.force3D = 0,
    vU(t, a)
}, oa = "0deg", Kl = "0px", fa = ") ", vU = function(t, a) {
    var n = a || this
      , s = n.xPercent
      , u = n.yPercent
      , o = n.x
      , B = n.y
      , h = n.z
      , g = n.rotation
      , d = n.rotationY
      , w = n.rotationX
      , C = n.skewX
      , m = n.skewY
      , v = n.scaleX
      , p = n.scaleY
      , b = n.transformPerspective
      , E = n.force3D
      , S = n.target
      , O = n.zOrigin
      , G = ""
      , x = E === "auto" && t && t !== 1 || E === !0;
    if (O && (w !== oa || d !== oa)) {
        var L = parseFloat(d) * Ei, K = Math.sin(L), k = Math.cos(L), N;
        L = parseFloat(w) * Ei,
        N = Math.cos(L),
        o = yB(S, o, K * N * -O),
        B = yB(S, B, -Math.sin(L) * -O),
        h = yB(S, h, k * N * -O + O)
    }
    b !== Kl && (G += "perspective(" + b + fa),
    (s || u) && (G += "translate(" + s + "%, " + u + "%) "),
    (x || o !== Kl || B !== Kl || h !== Kl) && (G += h !== Kl || x ? "translate3d(" + o + ", " + B + ", " + h + ") " : "translate(" + o + ", " + B + fa),
    g !== oa && (G += "rotate(" + g + fa),
    d !== oa && (G += "rotateY(" + d + fa),
    w !== oa && (G += "rotateX(" + w + fa),
    (C !== oa || m !== oa) && (G += "skew(" + C + ", " + m + fa),
    (v !== 1 || p !== 1) && (G += "scale(" + v + ", " + p + fa),
    S.style[ne] = G || "translate(0, 0)"
}, LF = function(t, a) {
    var n = a || this, s = n.xPercent, u = n.yPercent, o = n.x, B = n.y, h = n.rotation, g = n.skewX, d = n.skewY, w = n.scaleX, C = n.scaleY, m = n.target, v = n.xOrigin, p = n.yOrigin, b = n.xOffset, E = n.yOffset, S = n.forceCSS, O = parseFloat(o), G = parseFloat(B), x, L, K, k, N;
    h = parseFloat(h),
    g = parseFloat(g),
    d = parseFloat(d),
    d && (d = parseFloat(d),
    g += d,
    h += d),
    h || g ? (h *= Ei,
    g *= Ei,
    x = Math.cos(h) * w,
    L = Math.sin(h) * w,
    K = Math.sin(h - g) * -C,
    k = Math.cos(h - g) * C,
    g && (d *= Ei,
    N = Math.tan(g - d),
    N = Math.sqrt(1 + N * N),
    K *= N,
    k *= N,
    d && (N = Math.tan(d),
    N = Math.sqrt(1 + N * N),
    x *= N,
    L *= N)),
    x = fe(x),
    L = fe(L),
    K = fe(K),
    k = fe(k)) : (x = w,
    k = C,
    L = K = 0),
    (O && !~(o + "").indexOf("px") || G && !~(B + "").indexOf("px")) && (O = Rr(m, "x", o, "px"),
    G = Rr(m, "y", B, "px")),
    (v || p || b || E) && (O = fe(O + v - (v * x + p * K) + b),
    G = fe(G + p - (v * L + p * k) + E)),
    (s || u) && (N = m.getBBox(),
    O = fe(O + s / 100 * N.width),
    G = fe(G + u / 100 * N.height)),
    N = "matrix(" + x + "," + L + "," + K + "," + k + "," + O + "," + G + ")",
    m.setAttribute("transform", N),
    S && (m.style[ne] = N)
}, OF = function(t, a, n, s, u) {
    var o = 360, B = He(u), h = parseFloat(u) * (B && ~u.indexOf("rad") ? ha : 1), g = h - s, d = s + g + "deg", w, C;
    return B && (w = u.split("_")[1],
    w === "short" && (g %= o,
    g !== g % (o / 2) && (g += g < 0 ? o : -o)),
    w === "cw" && g < 0 ? g = (g + o * Bw) % o - ~~(g / o) * o : w === "ccw" && g > 0 && (g = (g - o * Bw) % o - ~~(g / o) * o)),
    t._pt = C = new rt(t._pt,a,n,s,g,QF),
    C.e = d,
    C.u = "deg",
    t._props.push(n),
    C
}, Uw = function(t, a) {
    for (var n in a)
        t[n] = a[n];
    return t
}, MF = function(t, a, n) {
    var s = Uw({}, n._gsap), u = "perspective,force3D,transformOrigin,svgOrigin", o = n.style, B, h, g, d, w, C, m, v;
    s.svg ? (g = n.getAttribute("transform"),
    n.setAttribute("transform", ""),
    o[ne] = a,
    B = gs(n, 1),
    Kr(n, ne),
    n.setAttribute("transform", g)) : (g = getComputedStyle(n)[ne],
    o[ne] = a,
    B = gs(n, 1),
    o[ne] = g);
    for (h in Xn)
        g = s[h],
        d = B[h],
        g !== d && u.indexOf(h) < 0 && (m = Ge(g),
        v = Ge(d),
        w = m !== v ? Rr(n, h, g, v) : parseFloat(g),
        C = parseFloat(d),
        t._pt = new rt(t._pt,B,h,w,C - w,ah),
        t._pt.u = v || 0,
        t._props.push(h));
    Uw(B, s)
};
nt("padding,margin,Width,Radius", function(i, t) {
    var a = "Top"
      , n = "Right"
      , s = "Bottom"
      , u = "Left"
      , o = (t < 3 ? [a, n, s, u] : [a + u, a + n, s + n, s + u]).map(function(B) {
        return t < 2 ? i + B : "border" + B + i
    });
    Hc[t > 1 ? "border" + i : i] = function(B, h, g, d, w) {
        var C, m;
        if (arguments.length < 4)
            return C = o.map(function(v) {
                return Nn(B, v, g)
            }),
            m = C.join(" "),
            m.split(C[0]).length === 5 ? C[0] : m;
        C = (d + "").split(" "),
        m = {},
        o.forEach(function(v, p) {
            return m[v] = C[p] = C[p] || C[(p - 1) / 2 | 0]
        }),
        B.init(h, m, w)
    }
});
var yU = {
    name: "css",
    register: lh,
    targetTest: function(t) {
        return t.style && t.nodeType
    },
    init: function(t, a, n, s, u) {
        var o = this._props, B = t.style, h = n.vars.startAt, g, d, w, C, m, v, p, b, E, S, O, G, x, L, K, k, N;
        Wh || lh(),
        this.styles = this.styles || QU(t),
        k = this.styles.props,
        this.tween = n;
        for (p in a)
            if (p !== "autoRound" && (d = a[p],
            !(Qt[p] && iU(p, a, n, s, t, u)))) {
                if (m = typeof d,
                v = Hc[p],
                m === "function" && (d = d.call(n, s, t, u),
                m = typeof d),
                m === "string" && ~d.indexOf("random(") && (d = os(d)),
                v)
                    v(this, t, p, d, n) && (K = 1);
                else if (p.substr(0, 2) === "--")
                    g = (getComputedStyle(t).getPropertyValue(p) + "").trim(),
                    d += "",
                    Lr.lastIndex = 0,
                    Lr.test(g) || (b = Ge(g),
                    E = Ge(d),
                    E ? b !== E && (g = Rr(t, p, g, E) + E) : b && (d += b)),
                    this.add(B, "setProperty", g, d, s, u, 0, 0, p),
                    o.push(p),
                    k.push(p, 0, B[p]);
                else if (m !== "undefined") {
                    if (h && p in h ? (g = typeof h[p] == "function" ? h[p].call(n, s, t, u) : h[p],
                    He(g) && ~g.indexOf("random(") && (g = os(g)),
                    Ge(g + "") || g === "auto" || (g += pt.units[p] || Ge(Nn(t, p)) || ""),
                    (g + "").charAt(1) === "=" && (g = Nn(t, p))) : g = Nn(t, p),
                    C = parseFloat(g),
                    S = m === "string" && d.charAt(1) === "=" && d.substr(0, 2),
                    S && (d = d.substr(2)),
                    w = parseFloat(d),
                    p in on && (p === "autoAlpha" && (C === 1 && Nn(t, "visibility") === "hidden" && w && (C = 0),
                    k.push("visibility", 0, B.visibility),
                    br(this, B, "visibility", C ? "inherit" : "hidden", w ? "inherit" : "hidden", !w)),
                    p !== "scale" && p !== "transform" && (p = on[p],
                    ~p.indexOf(",") && (p = p.split(",")[0]))),
                    O = p in Xn,
                    O) {
                        if (this.styles.save(p),
                        N = d,
                        m === "string" && d.substring(0, 6) === "var(--") {
                            if (d = Ut(t, d.substring(4, d.indexOf(")"))),
                            d.substring(0, 5) === "calc(") {
                                var iA = t.style.perspective;
                                t.style.perspective = d,
                                d = Ut(t, "perspective"),
                                iA ? t.style.perspective = iA : Kr(t, "perspective")
                            }
                            w = parseFloat(d)
                        }
                        if (G || (x = t._gsap,
                        x.renderTransform && !a.parseTransform || gs(t, a.parseTransform),
                        L = a.smoothOrigin !== !1 && x.smooth,
                        G = this._pt = new rt(this._pt,B,ne,0,1,x.renderTransform,x,0,-1),
                        G.dep = 1),
                        p === "scale")
                            this._pt = new rt(this._pt,x,"scaleY",x.scaleY,(S ? yi(x.scaleY, S + w) : w) - x.scaleY || 0,ah),
                            this._pt.u = 0,
                            o.push("scaleY", p),
                            p += "X";
                        else if (p === "transformOrigin") {
                            k.push(at, 0, B[at]),
                            d = TF(d),
                            x.svg ? sh(t, d, 0, L, 0, this) : (E = parseFloat(d.split(" ")[2]) || 0,
                            E !== x.zOrigin && br(this, x, "zOrigin", x.zOrigin, E),
                            br(this, B, p, bc(g), bc(d)));
                            continue
                        } else if (p === "svgOrigin") {
                            sh(t, d, 1, L, 0, this);
                            continue
                        } else if (p in pU) {
                            OF(this, x, p, C, S ? yi(C, S + d) : d);
                            continue
                        } else if (p === "smoothOrigin") {
                            br(this, x, "smooth", x.smooth, d);
                            continue
                        } else if (p === "force3D") {
                            x[p] = d;
                            continue
                        } else if (p === "transform") {
                            MF(this, d, t);
                            continue
                        }
                    } else
                        p in B || (p = Di(p) || p);
                    if (O || (w || w === 0) && (C || C === 0) && !dF.test(d) && p in B)
                        b = (g + "").substr((C + "").length),
                        w || (w = 0),
                        E = Ge(d) || (p in pt.units ? pt.units[p] : b),
                        b !== E && (C = Rr(t, p, g, E)),
                        this._pt = new rt(this._pt,O ? x : B,p,C,(S ? yi(C, S + w) : w) - C,!O && (E === "px" || p === "zIndex") && a.autoRound !== !1 ? UF : ah),
                        this._pt.u = E || 0,
                        O && N !== d ? (this._pt.b = g,
                        this._pt.e = N,
                        this._pt.r = CF) : b !== E && E !== "%" && (this._pt.b = g,
                        this._pt.r = wF);
                    else if (p in B)
                        SF.call(this, t, p, g, S ? S + d : d);
                    else if (p in t)
                        this.add(t, p, g || t[p], S ? S + d : d, s, u);
                    else if (p !== "parseTransform") {
                        Gh(p, d);
                        continue
                    }
                    O || (p in B ? k.push(p, 0, B[p]) : typeof t[p] == "function" ? k.push(p, 2, t[p]()) : k.push(p, 1, g || t[p])),
                    o.push(p)
                }
            }
        K && fU(this)
    },
    render: function(t, a) {
        if (a.tween._time || !Ph())
            for (var n = a._pt; n; )
                n.r(t, n.d),
                n = n._next;
        else
            a.styles.revert()
    },
    get: Nn,
    aliases: on,
    getSetter: function(t, a, n) {
        var s = on[a];
        return s && s.indexOf(",") < 0 && (a = s),
        a in Xn && a !== at && (t._gsap.x || Nn(t, "x")) ? n && fw === n ? a === "scale" ? yF : vF : (fw = n || {}) && (a === "scale" ? FF : EF) : t.style && !Kh(t.style[a]) ? pF : ~a.indexOf("-") ? mF : Zh(t, a)
    },
    core: {
        _removeProperty: Kr,
        _getMatrix: Ag
    }
};
it.utils.checkPrefix = Di;
it.core.getStyleSaver = QU;
(function(i, t, a, n) {
    var s = nt(i + "," + t + "," + a, function(u) {
        Xn[u] = 1
    });
    nt(t, function(u) {
        pt.units[u] = "deg",
        pU[u] = 1
    }),
    on[s[13]] = i + "," + t,
    nt(n, function(u) {
        var o = u.split(":");
        on[o[1]] = s[o[0]]
    })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
nt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(i) {
    pt.units[i] = "px"
});
it.registerPlugin(yU);
var FU = it.registerPlugin(yU) || it;
FU.core.Tween;
const Xu = 130
  , Yu = 160
  , cn = (i, t, a) => Math.min(Math.max(i, t), a);
function IF(i, t, a) {
    const n = i?.sourceAspect > 0 ? i.sourceAspect : 1
      , s = cn(i?.zoom ?? 1, 1, 12)
      , u = t / a;
    let o, B;
    n > u ? (o = a * n,
    B = a) : (o = t,
    B = t / n);
    const h = o * s
      , g = B * s
      , d = Math.max(0, (h - t) / 2)
      , w = Math.max(0, (g - a) / 2)
      , C = cn(i?.panX ?? 0, -1, 1) * d
      , m = cn(i?.panY ?? 0, -1, 1) * w;
    return {
        x: (t - h) / 2 + C,
        y: (a - g) / 2 + m,
        width: h,
        height: g
    }
}
function KF(i, t, a, n) {
    return new Promise(s => {
        const u = new Image;
        u.onload = () => {
            const o = IF(t, Xu, Yu)
              , B = a / Xu
              , h = n / Yu
              , g = window.devicePixelRatio || 1
              , d = document.createElement("canvas");
            d.width = Math.round(a * g),
            d.height = Math.round(n * g);
            const w = d.getContext("2d");
            if (!w) {
                s(null);
                return
            }
            w.scale(g, g);
            const C = new Path2D
              , m = Xu / Le * (a / Xu)
              , v = Yu / Le * (n / Yu);
            C.addPath(new Path2D(Gn), new DOMMatrix().scale(m, v)),
            w.save(),
            w.fillStyle = "#f8efdd",
            w.fill(C),
            w.strokeStyle = "rgba(112, 92, 63, 0.34)",
            w.lineWidth = .85 * Math.min(m, v),
            w.stroke(C),
            w.restore(),
            w.save(),
            w.clip(C),
            w.drawImage(u, o.x * B, o.y * h, o.width * B, o.height * h),
            w.restore();
            try {
                s(d.toDataURL("image/png"))
            } catch {
                s(null)
            }
        }
        ,
        u.onerror = () => s(null),
        u.src = i
    }
    )
}
function RF(i) {
    i = cn(i, 0, 1);
    const t = 1.05 - 2.1 * i;
    if (i < .002)
        return {
            stuck: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
            flap: "polygon(100% 0%,100% 0%,100% 0%)",
            foldMidX: 1,
            foldMidY: 0
        };
    if (i > .998)
        return {
            stuck: "polygon(0% 100%,0% 100%,0% 100%)",
            flap: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
            foldMidX: 0,
            foldMidY: 1
        };
    const a = []
      , n = (h, g) => {
        h >= -.002 && h <= 1.002 && g >= -.002 && g <= 1.002 && a.push([cn(h, 0, 1), cn(g, 0, 1)])
    }
    ;
    if (n(t, 0),
    n(1, 1 - t),
    n(t + 1, 1),
    n(0, -t),
    a.length >= 2) {
        const [h,g] = a[0]
          , [d,w] = a[a.length - 1]
          , C = -.7071
          , m = .7071;
        for (let v = 1; v <= 2; v++) {
            const p = v / 3
              , b = h + (d - h) * p
              , E = g + (w - g) * p
              , S = Math.sin(p * Math.PI + i * 4) * .012
              , O = cn(b + C * S, 0, 1)
              , G = cn(E + m * S, 0, 1);
            a.splice(v, 0, [O, G])
        }
    }
    const s = [[0, 0], [1, 0], [1, 1], [0, 1]]
      , u = s.filter( ([h,g]) => h - g <= t)
      , o = s.filter( ([h,g]) => h - g > t)
      , B = h => {
        const g = [...h, ...a];
        if (g.length < 3)
            return "polygon(0% 0%,0% 0%,0% 0%)";
        const d = g.reduce( (C, m) => C + m[0], 0) / g.length
          , w = g.reduce( (C, m) => C + m[1], 0) / g.length;
        return g.sort( (C, m) => Math.atan2(C[1] - w, C[0] - d) - Math.atan2(m[1] - w, m[0] - d)),
        `polygon(${g.map( ([C,m]) => `${(C * 100).toFixed(1)}% ${(m * 100).toFixed(1)}%`).join(",")})`
    }
    ;
    return {
        stuck: B(u),
        flap: B(o),
        foldMidX: (t + 1) / 2,
        foldMidY: (1 - t) / 2
    }
}
function NF({stampRect: i, photoUrl: t, crop: a, fromCorner: n="topRight", onComplete: s}) {
    const u = $.useRef(null)
      , o = $.useRef(null)
      , B = $.useRef(null)
      , h = $.useRef(null)
      , g = $.useRef(null)
      , d = $.useRef(!1)
      , w = $.useRef(s);
    w.current = s;
    const C = $.useRef(a);
    C.current = a;
    const m = $.useRef(i);
    m.current = i;
    const v = $.useCallback(p => {
        const b = o.current
          , E = B.current
          , S = h.current;
        if (!b || !E)
            return;
        const {stuck: O, flap: G, foldMidX: x, foldMidY: L} = RF(p);
        b.style.clipPath = O,
        E.style.clipPath = G;
        let K;
        p < .12 ? K = p / .12 * 12 : p < .85 ? K = 12 + 43 * ((p - .12) / .73) : K = 55 - 20 * ((p - .85) / .15);
        const k = Math.sin(p * 7 * Math.PI) * Math.exp(-p * 4) * 2.5
          , N = K + k
          , iA = 4 + 50 * p
          , uA = cn(x * 100, 0, 100)
          , oA = cn(L * 100, 0, 100);
        if (E.style.transformOrigin = `${uA}% ${oA}%`,
        E.style.transform = ["perspective(800px)", `rotate3d(1, 1, 0, ${-N}deg)`, `translateZ(${iA}px)`].join(" "),
        S) {
            S.style.opacity = 0;
            const lA = -15 * p
              , hA = 12 * p;
            S.style.transform = `translate(${lA}px, ${hA}px) scale(${1 + .15 * p})`
        }
    }
    , []);
    return $.useEffect( () => {
        const p = m.current;
        if (!(!p || !t || d.current))
            return d.current = !0,
            KF(t, C.current, p.width, p.height).then(b => {
                if (!b) {
                    w.current?.();
                    return
                }
                const E = p.width
                  , S = p.height;
                [o.current, B.current].forEach(O => {
                    O && (O.style.backgroundImage = `url(${b})`,
                    O.style.backgroundSize = `${E}px ${S}px`)
                }
                ),
                v(0),
                requestAnimationFrame( () => {
                    const O = u.current;
                    if (!O)
                        return;
                    Pv();
                    const G = {
                        p: 0
                    }
                      , x = FU.timeline({
                        onUpdate: () => v(G.p),
                        onComplete: () => w.current?.()
                    });
                    x.to(G, {
                        p: .12,
                        duration: .18,
                        ease: "power2.out"
                    }),
                    x.to(G, {
                        p: .85,
                        duration: .75,
                        ease: "power2.inOut"
                    }),
                    x.call( () => $v(), null, .8),
                    x.to(G, {
                        p: 1,
                        duration: .18,
                        ease: "power3.out"
                    }),
                    x.to(O, {
                        duration: .8,
                        ease: "power2.out",
                        x: 140,
                        y: -140,
                        scale: 1.08,
                        rotate: 12
                    }, ">-0.04"),
                    g.current = x
                }
                )
            }
            ),
            () => {
                g.current && (g.current.kill(),
                g.current = null)
            }
    }
    , []),
    i ? EC.createPortal(V.jsxs("div", {
        ref: u,
        className: "sticker-peel",
        style: {
            left: `${i.left}px`,
            top: `${i.top}px`,
            width: `${i.width}px`,
            height: `${i.height}px`
        },
        children: [V.jsx("div", {
            className: "sticker-peel__stuck",
            ref: o
        }), V.jsx("div", {
            className: "sticker-peel__shadow",
            ref: h
        }), V.jsx("div", {
            className: "sticker-peel__flap",
            ref: B
        })]
    }), document.body) : null
}
const wc = [{
    code: "jp",
    days: ["日", "月", "火", "水", "木", "金", "土"]
}, {
    code: "en",
    days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
}, {
    code: "kr",
    days: ["일", "월", "화", "수", "목", "금", "토"]
}, {
    code: "id",
    days: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"]
}, {
    code: "hi",
    days: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"]
}, {
    code: "pt",
    days: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]
}, {
    code: "es",
    days: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
}, {
    code: "ar",
    days: ["أحد", "إثن", "ثلا", "أرب", "خمي", "جمع", "سبت"]
}, {
    code: "zh",
    days: ["日", "一", "二", "三", "四", "五", "六"]
}]
  , GF = wc.map(i => i.code)
  , pw = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
  , VF = 300
  , zF = 430
  , XF = 1100
  , FB = .324
  , EB = .206
  , Rl = .352
  , mr = 130
  , vr = 160
  , EU = 1
  , _U = 12
  , YF = 1
  , JF = 5
  , jt = (i, t, a) => Math.min(Math.max(i, t), a)
  , fi = () => {
    const i = window.innerWidth * .15 * 2.2;
    return {
        width: i,
        height: i * (4 / 3)
    }
}
  , Kn = (i=1) => ({
    panX: 0,
    panY: 0,
    zoom: 1,
    sourceAspect: i > 0 ? i : 1
})
  , kF = (i, t, a) => {
    const n = t / a;
    return i > n ? {
        width: a * i,
        height: a
    } : {
        width: t,
        height: t / i
    }
}
  , mw = (i, t, a) => {
    const n = i ?? Kn(1)
      , s = n.sourceAspect > 0 ? n.sourceAspect : 1
      , u = jt(n.zoom ?? 1, EU, _U)
      , {width: o, height: B} = kF(s, t, a)
      , h = o * u
      , g = B * u
      , d = Math.max(0, (h - t) / 2)
      , w = Math.max(0, (g - a) / 2)
      , C = jt(n.panX ?? 0, -1, 1) * d
      , m = jt(n.panY ?? 0, -1, 1) * w;
    return {
        x: (t - h) / 2 + C,
        y: (a - g) / 2 + m,
        width: h,
        height: g
    }
}
;
function jF({externalPunchTrigger: i=0, onPunchAvailabilityChange: t, notebookOpen: a=!0}) {
    const [n,s] = $.useState( () => new Date().getFullYear())
      , [u,o] = $.useState( () => new Date().getMonth())
      , [B,h] = $.useState(!1)
      , [g,d] = $.useState( () => {
        try {
            const H = localStorage.getItem("calendarLang");
            return GF.includes(H) ? H : "jp"
        } catch {
            return "jp"
        }
    }
    )
      , [w,C] = $.useState(!1)
      , m = H => {
        d(H),
        C(!1);
        try {
            localStorage.setItem("calendarLang", H)
        } catch {}
    }
      , v = wc.find(H => H.code === g) || wc[0]
      , p = v.days.slice(0, 4)
      , b = v.days.slice(4)
      , [E,S] = $.useState({})
      , [O,G] = $.useState(null)
      , [x,L] = $.useState(null)
      , [K,k] = $.useState(Kn(1))
      , [N,iA] = $.useState(!1)
      , [uA,oA] = $.useState(!1)
      , [lA,hA] = $.useState(!1)
      , [CA,D] = $.useState(!1)
      , [Z,rA] = $.useState(null)
      , [dA,wA] = $.useState(null)
      , [y,X] = $.useState(null)
      , [P,eA] = $.useState(null)
      , [cA,QA] = $.useState(!1)
      , [vA,ve] = $.useState(1)
      , [WA,gn] = $.useState({
        x: 0,
        y: 0
    })
      , Vr = $.useRef(null)
      , zr = $.useRef(null)
      , Mi = $.useRef({})
      , ye = $.useRef(null)
      , Jn = $.useRef(Kn(1))
      , Xr = $.useRef(null)
      , kn = $.useRef({})
      , ms = $.useRef(null)
      , Ii = $.useRef(null)
      , lt = $.useRef(null)
      , jn = $.useRef(null)
      , Ki = $.useRef({
        x: 0,
        y: 0
    })
      , Ri = $.useRef({
        x: 0,
        y: 0
    })
      , Ce = $.useRef(!1)
      , Zn = $.useRef(!1)
      , qt = $.useRef(1)
      , dn = $.useRef({
        x: 0,
        y: 0
    })
      , Qn = $.useRef(null)
      , vs = $.useRef(1)
      , Fa = $.useRef({
        x: 0,
        y: 0
    })
      , Ni = $.useRef({
        x: 0,
        y: 0
    })
      , Yr = $.useRef(!1)
      , Wt = $.useRef(!1)
      , Fe = $.useRef([])
      , Gt = $.useMemo( () => `calendar-stamp-clip-${Math.random().toString(36).slice(2, 10)}`, [])
      , {monthName: Ie, days: ys, rows: Ea} = $.useMemo( () => {
        const H = u
          , Y = n
          , AA = pw[H]
          , W = new Date(Y,H,1).getDay()
          , tA = new Date(Y,H + 1,0).getDate()
          , yA = [];
        for (let LA = 0; LA < W; LA++)
            yA.push(null);
        for (let LA = 1; LA <= tA; LA++)
            yA.push(LA);
        const DA = Math.ceil(yA.length / 7)
          , FA = DA * 7;
        for (; yA.length < FA; )
            yA.push(null);
        return {
            monthName: AA,
            days: yA,
            rows: DA
        }
    }
    , [u, n]);
    $.useEffect( () => {
        let H = !1;
        return S({}),
        dy(n, u).then(Y => {
            if (H || !Y)
                return;
            const AA = {};
            for (const [W,tA] of Object.entries(Y))
                AA[W] = {
                    url: tA.dataUrl,
                    crop: tA.crop
                };
            S(AA)
        }
        ).catch(Y => console.warn("Failed to load saved photos:", Y)),
        () => {
            H = !0
        }
    }
    , [n, u]),
    $.useEffect( () => {
        if (a) {
            Wt.current = !0;
            const H = window.setTimeout( () => {
                Wt.current = !1
            }
            , 800);
            return () => window.clearTimeout(H)
        }
    }
    , [a]);
    const Fs = H => {
        if (Wt.current || !H || Z || !E[H])
            return;
        const Y = kn.current[H]?.querySelector(".calendar__cell-stamp");
        if (!Y)
            return;
        const AA = Y.style.transform;
        Y.style.transform = "none";
        const W = Y.getBoundingClientRect();
        Y.style.transform = AA;
        const tA = mr / vr
          , yA = W.width / W.height;
        let DA, FA;
        yA > tA ? (FA = W.height,
        DA = FA * tA) : (DA = W.width,
        FA = DA / tA);
        const LA = W.left + (W.width - DA) / 2
          , Ue = W.top + (W.height - FA) / 2;
        wA({
            left: LA,
            top: Ue,
            width: DA,
            height: FA
        }),
        rA(H)
    }
      , _a = $.useCallback( () => {
        const H = Z;
        S(Y => {
            const AA = {
                ...Y
            };
            if (H) {
                const W = AA[H]
                  , tA = typeof W == "string" ? W : W?.url;
                tA && tA.startsWith("blob:") && URL.revokeObjectURL(tA),
                delete AA[H]
            }
            return AA
        }
        ),
        H && wy(n, u, Number(H)).catch(Y => console.warn("Failed to delete photo from storage:", Y)),
        rA(null),
        wA(null)
    }
    , [Z])
      , wn = H => {
        if (!Wt.current && !(!H || ye.current)) {
            if (E[H]) {
                Fs(H);
                return
            }
            ls(),
            zr.current = H,
            Vr.current?.click()
        }
    }
      , Ha = H => {
        const Y = H.target.files?.[0]
          , AA = zr.current;
        if (zr.current = null,
        H.target.value = "",
        !Y || !AA)
            return;
        const W = URL.createObjectURL(Y);
        ye.current && URL.revokeObjectURL(ye.current),
        Xr.current = W,
        G(W),
        L(AA),
        k(Kn(1)),
        iA(!1),
        oA(!1),
        hA(!1),
        eA(null);
        const tA = new Image;
        tA.onload = () => {
            Xr.current === W && (!tA.naturalWidth || !tA.naturalHeight || k(yA => ({
                ...yA,
                sourceAspect: tA.naturalWidth / tA.naturalHeight
            })))
        }
        ,
        tA.src = W
    }
      , Pt = (H, Y, AA) => {
        if (Y <= 1)
            return {
                x: 0,
                y: 0
            };
        const W = AA?.getBoundingClientRect();
        if (!W)
            return H;
        const tA = W.width * (Y - 1) / 2
          , yA = W.height * (Y - 1) / 2;
        return {
            x: jt(H.x, -tA, tA),
            y: jt(H.y, -yA, yA)
        }
    }
      , Jr = H => {
        const Y = jt(H, YF, JF);
        ve(Y),
        qt.current = Y;
        const AA = Pt(dn.current, Y, lt.current);
        return gn(AA),
        dn.current = AA,
        Y
    }
      , qn = ({revoke: H=!0}={}) => {
        Fe.current.forEach(Y => window.clearTimeout(Y)),
        Fe.current = [],
        H && ye.current && URL.revokeObjectURL(ye.current),
        G(null),
        L(null),
        iA(!1),
        oA(!1),
        hA(!1),
        D(!1),
        X(null),
        eA(null),
        k(Kn(1)),
        Jn.current = Kn(1),
        Xr.current = null,
        ve(1),
        qt.current = 1,
        gn({
            x: 0,
            y: 0
        }),
        dn.current = {
            x: 0,
            y: 0
        }
    }
      , Es = H => {
        const Y = lt.current?.getBoundingClientRect()
          , AA = jn.current?.getBoundingClientRect();
        if (!Y)
            return null;
        const W = Y.width
          , tA = Y.height
          , yA = AA?.width ?? fi().width
          , DA = AA?.height ?? fi().height
          , FA = H ?? y;
        if (!FA || W <= 0 || tA <= 0 || yA <= 0 || DA <= 0)
            return null;
        const LA = yA * Rl
          , Ue = LA
          , ze = FA.x - yA / 2 + yA * FB
          , ke = FA.y - DA / 2 + DA * EB;
        return {
            stageRect: Y,
            stageWidth: W,
            stageHeight: tA,
            punchWidth: yA,
            punchHeight: DA,
            holeLeft: ze,
            holeTop: ke,
            holeWidth: LA,
            holeHeight: Ue,
            holeCenterX: ze + LA / 2,
            holeCenterY: ke + Ue / 2
        }
    }
      , Wn = H => {
        const Y = Es(H);
        if (!Y)
            return;
        const AA = Jn.current?.sourceAspect ?? 1
          , W = qt.current
          , tA = dn.current
          , yA = Y.stageWidth / 2
          , DA = Y.stageHeight / 2
          , FA = (Y.holeCenterX - tA.x - yA) / W + yA
          , LA = (Y.holeCenterY - tA.y - DA) / W + DA
          , Ue = Y.holeHeight / W
          , ze = Math.max(.001, Ue / Y.stageHeight)
          , ke = jt(1 / ze, EU, _U)
          , An = FA / Y.stageWidth * AA
          , re = LA / Y.stageHeight
          , jr = AA > 1 ? AA : 1
          , Hs = AA > 1 ? 1 : 1 / AA
          , Vt = jr * ke
          , en = Hs * ke
          , $c = (1 - Vt) / 2
          , bs = (1 - en) / 2
          , Ji = Math.max(0, (Vt - 1) / 2)
          , Ss = Math.max(0, (en - 1) / 2)
          , Sa = $c + An / AA * Vt
          , Ta = bs + re * en
          , zt = Ji > 0 ? jt((.5 - Sa) / Ji, -1, 1) : 0
          , je = Ss > 0 ? jt((.5 - Ta) / Ss, -1, 1) : 0;
        k(Ts => ({
            ...Ts,
            zoom: ke,
            panX: zt,
            panY: je
        }))
    }
      , ba = (H, Y) => {
        const AA = lt.current?.getBoundingClientRect()
          , W = jn.current?.getBoundingClientRect();
        if (!AA)
            return;
        const tA = AA.width
          , yA = AA.height
          , DA = W?.width ?? fi().width
          , FA = W?.height ?? fi().height
          , LA = DA * (FB + Rl / 2) - DA / 2
          , Ue = FA * (EB + Rl / 2) - FA / 2
          , ze = -LA
          , ke = tA - LA
          , An = -Ue
          , re = yA - Ue
          , jr = {
            x: jt(H, ze, ke),
            y: jt(Y, An, re)
        };
        X(jr),
        Wn(jr)
    }
      , $t = $.useCallback( () => {
        if (!x || !ye.current)
            return;
        const H = Jn.current ?? Kn(1)
          , Y = ye.current
          , AA = x;
        S(tA => {
            const yA = {
                ...tA
            }
              , DA = yA[AA]
              , FA = typeof DA == "string" ? DA : DA?.url;
            return FA && FA !== Y && FA.startsWith("blob:") && URL.revokeObjectURL(FA),
            yA[AA] = {
                url: Y,
                crop: H
            },
            yA
        }
        ),
        qn({
            revoke: !1
        });
        const W = new Image;
        W.crossOrigin = "anonymous",
        W.onload = () => {
            const tA = document.createElement("canvas");
            tA.width = W.naturalWidth,
            tA.height = W.naturalHeight,
            tA.getContext("2d").drawImage(W, 0, 0);
            const DA = tA.toDataURL("image/jpeg", .85);
            S(FA => {
                const LA = FA[AA];
                return !LA || (typeof LA == "string" ? LA : LA?.url) !== Y ? FA : {
                    ...FA,
                    [AA]: {
                        url: DA,
                        crop: LA.crop ?? H
                    }
                }
            }
            ),
            URL.revokeObjectURL(Y),
            Qy(n, u, AA, DA, H).catch(FA => console.warn("Failed to persist photo:", FA))
        }
        ,
        W.onerror = () => {
            console.warn("Could not convert photo for persistence")
        }
        ,
        W.src = Y
    }
    , [x])
      , Gi = $.useCallback( () => {
        if (!O || !x || N || !y)
            return;
        ls(),
        Ay();
        const H = Es()
          , Y = H ? {
            left: H.stageRect.left + H.holeLeft,
            top: H.stageRect.top + H.holeTop,
            width: H.holeWidth,
            height: H.holeHeight
        } : null
          , AA = kn.current[x]?.getBoundingClientRect();
        if (!Y || !AA) {
            $t();
            return
        }
        const W = Y.left + Y.width / 2
          , tA = Y.top + Y.height / 2;
        if (eA({
            left: W - AA.width / 2,
            top: tA - AA.height / 2,
            width: AA.width,
            height: AA.height,
            targetLeft: AA.left,
            targetTop: AA.top,
            targetWidth: AA.width,
            targetHeight: AA.height
        }),
        iA(!0),
        cA) {
            ss({
                soft: !0
            }).then( () => {
                oA(!0),
                hA(!0),
                $t()
            }
            );
            return
        }
        const yA = [window.setTimeout( () => {
            oA(!0),
            ss()
        }
        , VF), window.setTimeout( () => {
            hA(!0)
        }
        , zF), window.setTimeout( () => {
            $t()
        }
        , XF)];
        Fe.current = yA
    }
    , [$t, N, x, O, y, cA]);
    $.useEffect( () => {
        Mi.current = E
    }
    , [E]),
    $.useEffect( () => {
        ye.current = O
    }
    , [O]),
    $.useEffect( () => {
        Jn.current = K
    }
    , [K]),
    $.useEffect( () => {
        const H = lt.current;
        if (!H || !O)
            return;
        const Y = AA => {
            if (uA)
                return;
            AA.preventDefault();
            const W = AA.deltaY > 0 ? -.15 : .15;
            Jr(qt.current + W),
            y && Wn(y)
        }
        ;
        return H.addEventListener("wheel", Y, {
            passive: !1
        }),
        () => H.removeEventListener("wheel", Y)
    }
    , [O, uA, y]),
    $.useEffect( () => {
        if (typeof window > "u")
            return;
        const H = window.matchMedia("(prefers-reduced-motion: reduce)")
          , Y = () => QA(H.matches);
        return Y(),
        H.addEventListener("change", Y),
        () => H.removeEventListener("change", Y)
    }
    , []),
    $.useEffect( () => {
        if (!O)
            return;
        const H = window.requestAnimationFrame( () => {
            const Y = lt.current?.getBoundingClientRect()
              , AA = jn.current?.getBoundingClientRect();
            if (!Y)
                return;
            const W = AA?.width ?? fi().width
              , tA = AA?.height ?? fi().height
              , yA = W * (FB + Rl / 2) - W / 2
              , DA = tA * (EB + Rl / 2) - tA / 2;
            ba(Y.width / 2 - yA, Y.height / 2 - DA)
        }
        );
        return () => window.cancelAnimationFrame(H)
    }
    , [O]),
    $.useEffect( () => {
        !O || !y || Wn(y)
    }
    , [K.sourceAspect]),
    $.useEffect( () => () => {
        Fe.current.forEach(H => window.clearTimeout(H)),
        Object.values(Mi.current).forEach(H => {
            const Y = typeof H == "string" ? H : H?.url;
            Y && Y.startsWith("blob:") && URL.revokeObjectURL(Y)
        }
        ),
        ye.current && URL.revokeObjectURL(ye.current)
    }
    , []);
    const Vi = !!(O && x && y && !N && !uA);
    $.useEffect( () => {
        t?.(Vi)
    }
    , [Vi, t]);
    const zi = $.useRef(i);
    $.useEffect( () => {
        i !== zi.current && (zi.current = i,
        Gi())
    }
    , [i, Gi]);
    const _s = () => {
        O || (u <= 0 ? (s(H => H - 1),
        o(11)) : o(H => H - 1))
    }
      , Xi = () => {
        O || (u >= 11 ? (s(H => H + 1),
        o(0)) : o(H => H + 1))
    }
      , kr = []
      , Pn = []
      , Yi = H => {
        const Y = E[H]
          , AA = typeof Y == "string" ? Y : Y?.url;
        if (!AA)
            return null;
        const W = typeof Y == "string" ? Kn(1) : Y?.crop ?? Kn(1)
          , tA = `calendar-cell-stamp-clip-${H}`
          , yA = mr / Le
          , DA = vr / Le
          , FA = `scale(${yA} ${DA})`
          , LA = mw(W, mr, vr)
          , Ue = Z === H;
        return V.jsx("div", {
            className: "calendar__cell-stamp",
            style: Ue ? {
                opacity: 0,
                pointerEvents: "none"
            } : void 0,
            onClick: ze => {
                ze.stopPropagation(),
                Fs(H)
            }
            ,
            "aria-hidden": !0,
            children: V.jsxs("svg", {
                viewBox: `0 0 ${mr} ${vr}`,
                className: "calendar__cell-stamp-svg",
                role: "presentation",
                children: [V.jsx("defs", {
                    children: V.jsx("clipPath", {
                        id: tA,
                        clipPathUnits: "userSpaceOnUse",
                        children: V.jsx("path", {
                            d: Gn,
                            transform: FA
                        })
                    })
                }), V.jsx("path", {
                    className: "calendar__cell-stamp-paper",
                    d: Gn,
                    transform: FA
                }), V.jsx("image", {
                    href: AA,
                    x: LA.x,
                    y: LA.y,
                    width: LA.width,
                    height: LA.height,
                    preserveAspectRatio: "none",
                    clipPath: `url(#${tA})`
                })]
            })
        })
    }
    ;
    p.forEach(H => {
        kr.push(V.jsx("div", {
            className: "calendar__day-header",
            children: H
        }, `h-${H}`))
    }
    ),
    b.forEach(H => {
        Pn.push(V.jsx("div", {
            className: "calendar__day-header",
            children: H
        }, `h-${H}`))
    }
    ),
    Pn.push(V.jsx("div", {
        className: "calendar__day-header calendar__day-header--empty"
    }, "h-extra"));
    for (let H = 0; H < Ea; H++) {
        for (let Y = 0; Y < 4; Y++) {
            const AA = H * 7 + Y
              , W = ys[AA];
            kr.push(V.jsxs("div", {
                className: `calendar__cell ${W && !E[W] ? "calendar__cell--empty-day" : ""} ${W && x === W ? "calendar__cell--pending-target" : ""}`,
                ref: tA => {
                    W && (tA ? kn.current[W] = tA : delete kn.current[W])
                }
                ,
                onClick: tA => {
                    tA.stopPropagation(),
                    wn(W)
                }
                ,
                onKeyDown: tA => {
                    (tA.key === "Enter" || tA.key === " ") && (tA.preventDefault(),
                    tA.stopPropagation(),
                    wn(W))
                }
                ,
                role: W ? "button" : void 0,
                tabIndex: W ? 0 : -1,
                "aria-label": W ? E[W] ? `Day ${W} has an image` : `Day ${W} is empty. Add image` : "Empty calendar slot",
                children: [W && V.jsx("span", {
                    className: "calendar__date",
                    children: W
                }), W && Yi(W)]
            }, `c-${AA}`))
        }
        for (let Y = 4; Y < 7; Y++) {
            const AA = H * 7 + Y
              , W = ys[AA];
            Pn.push(V.jsxs("div", {
                className: `calendar__cell ${W && !E[W] ? "calendar__cell--empty-day" : ""} ${W && x === W ? "calendar__cell--pending-target" : ""}`,
                ref: tA => {
                    W && (tA ? kn.current[W] = tA : delete kn.current[W])
                }
                ,
                onClick: tA => {
                    tA.stopPropagation(),
                    wn(W)
                }
                ,
                onKeyDown: tA => {
                    (tA.key === "Enter" || tA.key === " ") && (tA.preventDefault(),
                    tA.stopPropagation(),
                    wn(W))
                }
                ,
                role: W ? "button" : void 0,
                tabIndex: W ? 0 : -1,
                "aria-label": W ? E[W] ? `Day ${W} has an image` : `Day ${W} is empty. Add image` : "Empty calendar slot",
                children: [W && V.jsx("span", {
                    className: "calendar__date",
                    children: W
                }), W && Yi(W)]
            }, `c-${AA}`))
        }
    }
    Pn.push(V.jsx("div", {
        className: "calendar__extra-column",
        style: {
            gridColumn: 4,
            gridRow: `2 / ${Ea + 2}`
        }
    }, "extra-col"));
    const st = mw(K, mr, vr);
    return V.jsxs("div", {
        ref: ms,
        className: "calendar",
        "data-lang": g,
        onClick: H => H.stopPropagation(),
        onPointerDown: H => H.stopPropagation(),
        children: [V.jsxs("div", {
            className: "calendar__flip-wrapper",
            ref: Ii,
            children: [V.jsxs("div", {
                className: "calendar__page calendar__page--left",
                children: [V.jsx("div", {
                    className: "calendar__header",
                    children: V.jsx("h1", {
                        className: "calendar__month calendar__month--clickable",
                        onClick: () => h(H => !H),
                        role: "button",
                        tabIndex: 0,
                        onKeyDown: H => {
                            (H.key === "Enter" || H.key === " ") && (H.preventDefault(),
                            h(Y => !Y))
                        }
                        ,
                        "aria-label": `Month ${Ie}, click to change`,
                        children: Ie
                    })
                }), B && V.jsx("div", {
                    className: "calendar__month-picker-backdrop",
                    onClick: () => h(!1),
                    children: V.jsxs("div", {
                        className: "calendar__month-picker",
                        onClick: H => H.stopPropagation(),
                        children: [V.jsxs("div", {
                            className: "calendar__month-picker-year-row",
                            children: [V.jsx("button", {
                                className: "calendar__month-picker-arrow",
                                onClick: () => s(H => H - 1),
                                "aria-label": "Previous year",
                                children: "‹"
                            }), V.jsx("span", {
                                className: "calendar__month-picker-year",
                                children: n
                            }), V.jsx("button", {
                                className: "calendar__month-picker-arrow",
                                onClick: () => s(H => H + 1),
                                "aria-label": "Next year",
                                children: "›"
                            })]
                        }), V.jsx("div", {
                            className: "calendar__month-picker-grid",
                            children: pw.map( (H, Y) => V.jsx("button", {
                                className: `calendar__month-picker-btn${Y === u ? " calendar__month-picker-btn--active" : ""}`,
                                onClick: () => {
                                    o(Y),
                                    h(!1)
                                }
                                ,
                                children: H
                            }, Y))
                        })]
                    })
                }), V.jsx("div", {
                    className: "calendar__grid calendar__grid--left",
                    style: {
                        "--rows": Ea
                    },
                    children: kr
                })]
            }), V.jsxs("div", {
                className: "calendar__page calendar__page--right",
                children: [V.jsx("div", {
                    className: "calendar__header calendar__header--right",
                    children: V.jsxs("div", {
                        className: "calendar__lang-wrapper",
                        children: [V.jsx("button", {
                            className: "calendar__lang-toggle",
                            onClick: () => C(H => !H),
                            "aria-label": "Select language",
                            title: "Select language",
                            children: "LAN"
                        }), w && V.jsxs(V.Fragment, {
                            children: [V.jsx("div", {
                                className: "calendar__lang-backdrop",
                                onClick: () => C(!1)
                            }), V.jsx("div", {
                                className: "calendar__lang-dropdown",
                                children: wc.map(H => V.jsx("button", {
                                    className: `calendar__lang-option${g === H.code ? " calendar__lang-option--active" : ""}`,
                                    onClick: () => m(H.code),
                                    children: H.code.toUpperCase()
                                }, H.code))
                            })]
                        })]
                    })
                }), V.jsx("div", {
                    className: "calendar__grid calendar__grid--right",
                    style: {
                        "--rows": Ea
                    },
                    children: Pn
                })]
            }), V.jsx("button", {
                type: "button",
                className: "calendar__nav-arrow calendar__nav-arrow--prev",
                onClick: _s,
                "aria-label": "Previous month",
                children: "‹"
            }), V.jsx("button", {
                type: "button",
                className: "calendar__nav-arrow calendar__nav-arrow--next",
                onClick: Xi,
                "aria-label": "Next month",
                children: "›"
            })]
        }), Z && dA && ( () => {
            const H = E[Z]
              , Y = typeof H == "string" ? H : H?.url
              , AA = typeof H == "string" ? void 0 : H?.crop;
            return Y ? V.jsx(NF, {
                stampRect: dA,
                photoUrl: Y,
                crop: AA,
                fromCorner: "topRight",
                onComplete: _a
            }) : null
        }
        )(), V.jsx("input", {
            ref: Vr,
            type: "file",
            accept: "image/*",
            onChange: Ha,
            className: "calendar__file-input"
        }), O && x && EC.createPortal(V.jsxs("div", {
            className: `calendar__punch-overlay${lA ? " is-fading" : ""}`,
            "aria-live": "polite",
            children: [V.jsx("button", {
                type: "button",
                className: "calendar__punch-backdrop",
                onClick: () => qn({
                    revoke: !0
                }),
                "aria-label": "Cancel photo stamping"
            }), V.jsx("div", {
                className: "calendar__staging-center",
                children: V.jsxs("div", {
                    ref: lt,
                    className: `calendar__punch-workbench ${uA ? "is-cutout" : ""}`,
                    style: {
                        "--workbench-aspect": K.sourceAspect
                    },
                    "aria-label": `Punch alignment for day ${x}`,
                    onTouchStart: H => {
                        if (!uA)
                            if (H.touches.length === 2) {
                                const Y = H.touches[0].clientX - H.touches[1].clientX
                                  , AA = H.touches[0].clientY - H.touches[1].clientY;
                                Qn.current = Math.hypot(Y, AA),
                                vs.current = qt.current
                            } else
                                H.touches.length === 1 && !Zn.current && (Fa.current = {
                                    ...dn.current
                                },
                                Ni.current = {
                                    x: H.touches[0].clientX,
                                    y: H.touches[0].clientY
                                },
                                Yr.current = !1)
                    }
                    ,
                    onTouchMove: H => {
                        if (!uA) {
                            if (H.touches.length === 2 && Qn.current != null) {
                                const Y = H.touches[0].clientX - H.touches[1].clientX
                                  , AA = H.touches[0].clientY - H.touches[1].clientY
                                  , tA = Math.hypot(Y, AA) / Qn.current;
                                Jr(vs.current * tA),
                                y && Wn(y),
                                H.preventDefault()
                            } else if (H.touches.length === 1 && !Zn.current && qt.current > 1) {
                                const Y = H.touches[0].clientX - Ni.current.x
                                  , AA = H.touches[0].clientY - Ni.current.y;
                                if (!Yr.current && Y * Y + AA * AA > 9 && (Yr.current = !0),
                                Yr.current) {
                                    const W = {
                                        x: Fa.current.x + Y,
                                        y: Fa.current.y + AA
                                    }
                                      , tA = Pt(W, qt.current, lt.current);
                                    gn(tA),
                                    dn.current = tA,
                                    y && Wn(y),
                                    H.preventDefault()
                                }
                            }
                        }
                    }
                    ,
                    onTouchEnd: H => {
                        H.touches.length < 2 && (Qn.current = null),
                        H.touches.length === 0 && (Yr.current = !1)
                    }
                    ,
                    children: [V.jsx("div", {
                        className: "calendar__workbench-photo-wrapper",
                        children: V.jsx("img", {
                            src: O,
                            alt: "",
                            className: "calendar__workbench-photo",
                            style: {
                                transform: `scale(${vA}) translate(${WA.x / vA}px, ${WA.y / vA}px)`
                            },
                            draggable: !1,
                            "aria-hidden": !0
                        })
                    }), y && V.jsx("div", {
                        ref: jn,
                        className: `calendar__punch-device ${CA ? "is-dragging" : ""} ${N ? "is-pressing" : ""}`,
                        style: {
                            left: `${y.x}px`,
                            top: `${y.y}px`
                        },
                        onPointerDown: H => {
                            if (uA || H.button !== void 0 && H.button !== 0)
                                return;
                            const Y = lt.current?.getBoundingClientRect();
                            if (!Y)
                                return;
                            const AA = y?.x ?? 0
                              , W = y?.y ?? 0;
                            Ki.current = {
                                x: H.clientX - Y.left - AA,
                                y: H.clientY - Y.top - W
                            },
                            Ri.current = {
                                x: H.clientX,
                                y: H.clientY
                            },
                            Ce.current = !1,
                            Zn.current = !0,
                            H.currentTarget.setPointerCapture?.(H.pointerId),
                            H.preventDefault()
                        }
                        ,
                        onPointerMove: H => {
                            if (!Zn.current || uA)
                                return;
                            const Y = H.clientX - Ri.current.x
                              , AA = H.clientY - Ri.current.y;
                            if (Y * Y + AA * AA > 9 && (Ce.current = !0,
                            CA || D(!0)),
                            !Ce.current)
                                return;
                            const W = lt.current?.getBoundingClientRect();
                            W && ba(H.clientX - W.left - Ki.current.x, H.clientY - W.top - Ki.current.y)
                        }
                        ,
                        onPointerUp: H => {
                            Zn.current = !1,
                            CA && D(!1),
                            H.currentTarget.releasePointerCapture?.(H.pointerId)
                        }
                        ,
                        onPointerCancel: H => {
                            Zn.current = !1,
                            CA && D(!1),
                            H.currentTarget.releasePointerCapture?.(H.pointerId)
                        }
                        ,
                        onClick: H => {
                            if (H.stopPropagation(),
                            !(uA || N)) {
                                if (Ce.current) {
                                    Ce.current = !1;
                                    return
                                }
                                Gi()
                            }
                        }
                        ,
                        children: V.jsx("img", {
                            src: "/stampbackside.png",
                            alt: "",
                            className: "calendar__punch-guide-photo",
                            draggable: !1,
                            "aria-hidden": !0
                        })
                    })]
                })
            }), P && V.jsx("div", {
                className: `calendar__flying-stamp ${uA ? "is-visible" : ""} ${lA ? "is-flying" : ""}`,
                style: {
                    left: `${P.left}px`,
                    top: `${P.top}px`,
                    width: `${P.width}px`,
                    height: `${P.height}px`,
                    "--stamp-target-x": `${P.targetLeft - P.left}px`,
                    "--stamp-target-y": `${P.targetTop - P.top}px`,
                    "--stamp-target-scale-x": P.width > 0 ? P.targetWidth / P.width : 1,
                    "--stamp-target-scale-y": P.height > 0 ? P.targetHeight / P.height : 1
                },
                "aria-hidden": !0,
                children: V.jsxs("svg", {
                    viewBox: `0 0 ${mr} ${vr}`,
                    className: "calendar__flying-stamp-svg",
                    role: "presentation",
                    children: [V.jsx("defs", {
                        children: V.jsx("clipPath", {
                            id: Gt,
                            clipPathUnits: "userSpaceOnUse",
                            children: V.jsx("path", {
                                d: Gn,
                                transform: `scale(${mr / Le} ${vr / Le})`
                            })
                        })
                    }), V.jsx("path", {
                        className: "calendar__flying-stamp-paper",
                        d: Gn,
                        transform: `scale(${mr / Le} ${vr / Le})`
                    }), V.jsx("image", {
                        href: O,
                        x: st.x,
                        y: st.y,
                        width: st.width,
                        height: st.height,
                        preserveAspectRatio: "none",
                        clipPath: `url(#${Gt})`
                    })]
                })
            })]
        }), document.body)]
    })
}
var uh = function(i, t) {
    return uh = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(a, n) {
        a.__proto__ = n
    }
    || function(a, n) {
        for (var s in n)
            Object.prototype.hasOwnProperty.call(n, s) && (a[s] = n[s])
    }
    ,
    uh(i, t)
};
function Zt(i, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    uh(i, t);
    function a() {
        this.constructor = i
    }
    i.prototype = t === null ? Object.create(t) : (a.prototype = t.prototype,
    new a)
}
var ch = function() {
    return ch = Object.assign || function(t) {
        for (var a, n = 1, s = arguments.length; n < s; n++) {
            a = arguments[n];
            for (var u in a)
                Object.prototype.hasOwnProperty.call(a, u) && (t[u] = a[u])
        }
        return t
    }
    ,
    ch.apply(this, arguments)
};
function Ye(i, t, a, n) {
    function s(u) {
        return u instanceof a ? u : new a(function(o) {
            o(u)
        }
        )
    }
    return new (a || (a = Promise))(function(u, o) {
        function B(d) {
            try {
                g(n.next(d))
            } catch (w) {
                o(w)
            }
        }
        function h(d) {
            try {
                g(n.throw(d))
            } catch (w) {
                o(w)
            }
        }
        function g(d) {
            d.done ? u(d.value) : s(d.value).then(B, h)
        }
        g((n = n.apply(i, [])).next())
    }
    )
}
function Re(i, t) {
    var a = {
        label: 0,
        sent: function() {
            if (u[0] & 1)
                throw u[1];
            return u[1]
        },
        trys: [],
        ops: []
    }, n, s, u, o;
    return o = {
        next: B(0),
        throw: B(1),
        return: B(2)
    },
    typeof Symbol == "function" && (o[Symbol.iterator] = function() {
        return this
    }
    ),
    o;
    function B(g) {
        return function(d) {
            return h([g, d])
        }
    }
    function h(g) {
        if (n)
            throw new TypeError("Generator is already executing.");
        for (; a; )
            try {
                if (n = 1,
                s && (u = g[0] & 2 ? s.return : g[0] ? s.throw || ((u = s.return) && u.call(s),
                0) : s.next) && !(u = u.call(s, g[1])).done)
                    return u;
                switch (s = 0,
                u && (g = [g[0] & 2, u.value]),
                g[0]) {
                case 0:
                case 1:
                    u = g;
                    break;
                case 4:
                    return a.label++,
                    {
                        value: g[1],
                        done: !1
                    };
                case 5:
                    a.label++,
                    s = g[1],
                    g = [0];
                    continue;
                case 7:
                    g = a.ops.pop(),
                    a.trys.pop();
                    continue;
                default:
                    if (u = a.trys,
                    !(u = u.length > 0 && u[u.length - 1]) && (g[0] === 6 || g[0] === 2)) {
                        a = 0;
                        continue
                    }
                    if (g[0] === 3 && (!u || g[1] > u[0] && g[1] < u[3])) {
                        a.label = g[1];
                        break
                    }
                    if (g[0] === 6 && a.label < u[1]) {
                        a.label = u[1],
                        u = g;
                        break
                    }
                    if (u && a.label < u[2]) {
                        a.label = u[2],
                        a.ops.push(g);
                        break
                    }
                    u[2] && a.ops.pop(),
                    a.trys.pop();
                    continue
                }
                g = t.call(i, a)
            } catch (d) {
                g = [6, d],
                s = 0
            } finally {
                n = u = 0
            }
        if (g[0] & 5)
            throw g[1];
        return {
            value: g[0] ? g[1] : void 0,
            done: !0
        }
    }
}
function Ju(i, t, a) {
    if (arguments.length === 2)
        for (var n = 0, s = t.length, u; n < s; n++)
            (u || !(n in t)) && (u || (u = Array.prototype.slice.call(t, 0, n)),
            u[n] = t[n]);
    return i.concat(u || t)
}
var Yn = (function() {
    function i(t, a, n, s) {
        this.left = t,
        this.top = a,
        this.width = n,
        this.height = s
    }
    return i.prototype.add = function(t, a, n, s) {
        return new i(this.left + t,this.top + a,this.width + n,this.height + s)
    }
    ,
    i.fromClientRect = function(t, a) {
        return new i(a.left + t.windowBounds.left,a.top + t.windowBounds.top,a.width,a.height)
    }
    ,
    i.fromDOMRectList = function(t, a) {
        var n = Array.from(a).find(function(s) {
            return s.width !== 0
        });
        return n ? new i(n.left + t.windowBounds.left,n.top + t.windowBounds.top,n.width,n.height) : i.EMPTY
    }
    ,
    i.EMPTY = new i(0,0,0,0),
    i
}
)()
  , zc = function(i, t) {
    return Yn.fromClientRect(i, t.getBoundingClientRect())
}
  , ZF = function(i) {
    var t = i.body
      , a = i.documentElement;
    if (!t || !a)
        throw new Error("Unable to get document size");
    var n = Math.max(Math.max(t.scrollWidth, a.scrollWidth), Math.max(t.offsetWidth, a.offsetWidth), Math.max(t.clientWidth, a.clientWidth))
      , s = Math.max(Math.max(t.scrollHeight, a.scrollHeight), Math.max(t.offsetHeight, a.offsetHeight), Math.max(t.clientHeight, a.clientHeight));
    return new Yn(0,0,n,s)
}
  , Xc = function(i) {
    for (var t = [], a = 0, n = i.length; a < n; ) {
        var s = i.charCodeAt(a++);
        if (s >= 55296 && s <= 56319 && a < n) {
            var u = i.charCodeAt(a++);
            (u & 64512) === 56320 ? t.push(((s & 1023) << 10) + (u & 1023) + 65536) : (t.push(s),
            a--)
        } else
            t.push(s)
    }
    return t
}
  , oe = function() {
    for (var i = [], t = 0; t < arguments.length; t++)
        i[t] = arguments[t];
    if (String.fromCodePoint)
        return String.fromCodePoint.apply(String, i);
    var a = i.length;
    if (!a)
        return "";
    for (var n = [], s = -1, u = ""; ++s < a; ) {
        var o = i[s];
        o <= 65535 ? n.push(o) : (o -= 65536,
        n.push((o >> 10) + 55296, o % 1024 + 56320)),
        (s + 1 === a || n.length > 16384) && (u += String.fromCharCode.apply(String, n),
        n.length = 0)
    }
    return u
}
  , vw = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , qF = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ku = 0; ku < vw.length; ku++)
    qF[vw.charCodeAt(ku)] = ku;
var yw = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , Jl = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ju = 0; ju < yw.length; ju++)
    Jl[yw.charCodeAt(ju)] = ju;
var WF = function(i) {
    var t = i.length * .75, a = i.length, n, s = 0, u, o, B, h;
    i[i.length - 1] === "=" && (t--,
    i[i.length - 2] === "=" && t--);
    var g = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(t) : new Array(t)
      , d = Array.isArray(g) ? g : new Uint8Array(g);
    for (n = 0; n < a; n += 4)
        u = Jl[i.charCodeAt(n)],
        o = Jl[i.charCodeAt(n + 1)],
        B = Jl[i.charCodeAt(n + 2)],
        h = Jl[i.charCodeAt(n + 3)],
        d[s++] = u << 2 | o >> 4,
        d[s++] = (o & 15) << 4 | B >> 2,
        d[s++] = (B & 3) << 6 | h & 63;
    return g
}
  , PF = function(i) {
    for (var t = i.length, a = [], n = 0; n < t; n += 2)
        a.push(i[n + 1] << 8 | i[n]);
    return a
}
  , $F = function(i) {
    for (var t = i.length, a = [], n = 0; n < t; n += 4)
        a.push(i[n + 3] << 24 | i[n + 2] << 16 | i[n + 1] << 8 | i[n]);
    return a
}
  , ma = 5
  , eg = 11
  , _B = 2
  , AE = eg - ma
  , HU = 65536 >> ma
  , eE = 1 << ma
  , HB = eE - 1
  , tE = 1024 >> ma
  , nE = HU + tE
  , rE = nE
  , aE = 32
  , iE = rE + aE
  , lE = 65536 >> eg
  , sE = 1 << AE
  , uE = sE - 1
  , Fw = function(i, t, a) {
    return i.slice ? i.slice(t, a) : new Uint16Array(Array.prototype.slice.call(i, t, a))
}
  , cE = function(i, t, a) {
    return i.slice ? i.slice(t, a) : new Uint32Array(Array.prototype.slice.call(i, t, a))
}
  , oE = function(i, t) {
    var a = WF(i)
      , n = Array.isArray(a) ? $F(a) : new Uint32Array(a)
      , s = Array.isArray(a) ? PF(a) : new Uint16Array(a)
      , u = 24
      , o = Fw(s, u / 2, n[4] / 2)
      , B = n[5] === 2 ? Fw(s, (u + n[4]) / 2) : cE(n, Math.ceil((u + n[4]) / 4));
    return new fE(n[0],n[1],n[2],n[3],o,B)
}
  , fE = (function() {
    function i(t, a, n, s, u, o) {
        this.initialValue = t,
        this.errorValue = a,
        this.highStart = n,
        this.highValueIndex = s,
        this.index = u,
        this.data = o
    }
    return i.prototype.get = function(t) {
        var a;
        if (t >= 0) {
            if (t < 55296 || t > 56319 && t <= 65535)
                return a = this.index[t >> ma],
                a = (a << _B) + (t & HB),
                this.data[a];
            if (t <= 65535)
                return a = this.index[HU + (t - 55296 >> ma)],
                a = (a << _B) + (t & HB),
                this.data[a];
            if (t < this.highStart)
                return a = iE - lE + (t >> eg),
                a = this.index[a],
                a += t >> ma & uE,
                a = this.index[a],
                a = (a << _B) + (t & HB),
                this.data[a];
            if (t <= 1114111)
                return this.data[this.highValueIndex]
        }
        return this.errorValue
    }
    ,
    i
}
)()
  , Ew = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , BE = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Zu = 0; Zu < Ew.length; Zu++)
    BE[Ew.charCodeAt(Zu)] = Zu;
var hE = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA=="
  , _w = 50
  , gE = 1
  , bU = 2
  , SU = 3
  , dE = 4
  , QE = 5
  , Hw = 7
  , TU = 8
  , bw = 9
  , Sr = 10
  , oh = 11
  , Sw = 12
  , fh = 13
  , wE = 14
  , kl = 15
  , Bh = 16
  , qu = 17
  , Nl = 18
  , CE = 19
  , Tw = 20
  , hh = 21
  , Gl = 22
  , bB = 23
  , Bi = 24
  , dt = 25
  , jl = 26
  , Zl = 27
  , hi = 28
  , UE = 29
  , ga = 30
  , pE = 31
  , Wu = 32
  , Pu = 33
  , gh = 34
  , dh = 35
  , Qh = 36
  , ds = 37
  , wh = 38
  , Cc = 39
  , Uc = 40
  , SB = 41
  , xU = 42
  , mE = 43
  , vE = [9001, 65288]
  , DU = "!"
  , SA = "×"
  , $u = "÷"
  , Ch = oE(hE)
  , Mn = [ga, Qh]
  , Uh = [gE, bU, SU, QE]
  , LU = [Sr, TU]
  , xw = [Zl, jl]
  , yE = Uh.concat(LU)
  , Dw = [wh, Cc, Uc, gh, dh]
  , FE = [kl, fh]
  , EE = function(i, t) {
    t === void 0 && (t = "strict");
    var a = []
      , n = []
      , s = [];
    return i.forEach(function(u, o) {
        var B = Ch.get(u);
        if (B > _w ? (s.push(!0),
        B -= _w) : s.push(!1),
        ["normal", "auto", "loose"].indexOf(t) !== -1 && [8208, 8211, 12316, 12448].indexOf(u) !== -1)
            return n.push(o),
            a.push(Bh);
        if (B === dE || B === oh) {
            if (o === 0)
                return n.push(o),
                a.push(ga);
            var h = a[o - 1];
            return yE.indexOf(h) === -1 ? (n.push(n[o - 1]),
            a.push(h)) : (n.push(o),
            a.push(ga))
        }
        if (n.push(o),
        B === pE)
            return a.push(t === "strict" ? hh : ds);
        if (B === xU || B === UE)
            return a.push(ga);
        if (B === mE)
            return u >= 131072 && u <= 196605 || u >= 196608 && u <= 262141 ? a.push(ds) : a.push(ga);
        a.push(B)
    }),
    [n, a, s]
}
  , TB = function(i, t, a, n) {
    var s = n[a];
    if (Array.isArray(i) ? i.indexOf(s) !== -1 : i === s)
        for (var u = a; u <= n.length; ) {
            u++;
            var o = n[u];
            if (o === t)
                return !0;
            if (o !== Sr)
                break
        }
    if (s === Sr)
        for (var u = a; u > 0; ) {
            u--;
            var B = n[u];
            if (Array.isArray(i) ? i.indexOf(B) !== -1 : i === B)
                for (var h = a; h <= n.length; ) {
                    h++;
                    var o = n[h];
                    if (o === t)
                        return !0;
                    if (o !== Sr)
                        break
                }
            if (B !== Sr)
                break
        }
    return !1
}
  , Lw = function(i, t) {
    for (var a = i; a >= 0; ) {
        var n = t[a];
        if (n === Sr)
            a--;
        else
            return n
    }
    return 0
}
  , _E = function(i, t, a, n, s) {
    if (a[n] === 0)
        return SA;
    var u = n - 1;
    if (Array.isArray(s) && s[u] === !0)
        return SA;
    var o = u - 1
      , B = u + 1
      , h = t[u]
      , g = o >= 0 ? t[o] : 0
      , d = t[B];
    if (h === bU && d === SU)
        return SA;
    if (Uh.indexOf(h) !== -1)
        return DU;
    if (Uh.indexOf(d) !== -1 || LU.indexOf(d) !== -1)
        return SA;
    if (Lw(u, t) === TU)
        return $u;
    if (Ch.get(i[u]) === oh || (h === Wu || h === Pu) && Ch.get(i[B]) === oh || h === Hw || d === Hw || h === bw || [Sr, fh, kl].indexOf(h) === -1 && d === bw || [qu, Nl, CE, Bi, hi].indexOf(d) !== -1 || Lw(u, t) === Gl || TB(bB, Gl, u, t) || TB([qu, Nl], hh, u, t) || TB(Sw, Sw, u, t))
        return SA;
    if (h === Sr)
        return $u;
    if (h === bB || d === bB)
        return SA;
    if (d === Bh || h === Bh)
        return $u;
    if ([fh, kl, hh].indexOf(d) !== -1 || h === wE || g === Qh && FE.indexOf(h) !== -1 || h === hi && d === Qh || d === Tw || Mn.indexOf(d) !== -1 && h === dt || Mn.indexOf(h) !== -1 && d === dt || h === Zl && [ds, Wu, Pu].indexOf(d) !== -1 || [ds, Wu, Pu].indexOf(h) !== -1 && d === jl || Mn.indexOf(h) !== -1 && xw.indexOf(d) !== -1 || xw.indexOf(h) !== -1 && Mn.indexOf(d) !== -1 || [Zl, jl].indexOf(h) !== -1 && (d === dt || [Gl, kl].indexOf(d) !== -1 && t[B + 1] === dt) || [Gl, kl].indexOf(h) !== -1 && d === dt || h === dt && [dt, hi, Bi].indexOf(d) !== -1)
        return SA;
    if ([dt, hi, Bi, qu, Nl].indexOf(d) !== -1)
        for (var w = u; w >= 0; ) {
            var C = t[w];
            if (C === dt)
                return SA;
            if ([hi, Bi].indexOf(C) !== -1)
                w--;
            else
                break
        }
    if ([Zl, jl].indexOf(d) !== -1)
        for (var w = [qu, Nl].indexOf(h) !== -1 ? o : u; w >= 0; ) {
            var C = t[w];
            if (C === dt)
                return SA;
            if ([hi, Bi].indexOf(C) !== -1)
                w--;
            else
                break
        }
    if (wh === h && [wh, Cc, gh, dh].indexOf(d) !== -1 || [Cc, gh].indexOf(h) !== -1 && [Cc, Uc].indexOf(d) !== -1 || [Uc, dh].indexOf(h) !== -1 && d === Uc || Dw.indexOf(h) !== -1 && [Tw, jl].indexOf(d) !== -1 || Dw.indexOf(d) !== -1 && h === Zl || Mn.indexOf(h) !== -1 && Mn.indexOf(d) !== -1 || h === Bi && Mn.indexOf(d) !== -1 || Mn.concat(dt).indexOf(h) !== -1 && d === Gl && vE.indexOf(i[B]) === -1 || Mn.concat(dt).indexOf(d) !== -1 && h === Nl)
        return SA;
    if (h === SB && d === SB) {
        for (var m = a[u], v = 1; m > 0 && (m--,
        t[m] === SB); )
            v++;
        if (v % 2 !== 0)
            return SA
    }
    return h === Wu && d === Pu ? SA : $u
}
  , HE = function(i, t) {
    t || (t = {
        lineBreak: "normal",
        wordBreak: "normal"
    });
    var a = EE(i, t.lineBreak)
      , n = a[0]
      , s = a[1]
      , u = a[2];
    (t.wordBreak === "break-all" || t.wordBreak === "break-word") && (s = s.map(function(B) {
        return [dt, ga, xU].indexOf(B) !== -1 ? ds : B
    }));
    var o = t.wordBreak === "keep-all" ? u.map(function(B, h) {
        return B && i[h] >= 19968 && i[h] <= 40959
    }) : void 0;
    return [n, s, o]
}
  , bE = (function() {
    function i(t, a, n, s) {
        this.codePoints = t,
        this.required = a === DU,
        this.start = n,
        this.end = s
    }
    return i.prototype.slice = function() {
        return oe.apply(void 0, this.codePoints.slice(this.start, this.end))
    }
    ,
    i
}
)()
  , SE = function(i, t) {
    var a = Xc(i)
      , n = HE(a, t)
      , s = n[0]
      , u = n[1]
      , o = n[2]
      , B = a.length
      , h = 0
      , g = 0;
    return {
        next: function() {
            if (g >= B)
                return {
                    done: !0,
                    value: null
                };
            for (var d = SA; g < B && (d = _E(a, u, s, ++g, o)) === SA; )
                ;
            if (d !== SA || g === B) {
                var w = new bE(a,d,h,g);
                return h = g,
                {
                    value: w,
                    done: !1
                }
            }
            return {
                done: !0,
                value: null
            }
        }
    }
}
  , TE = 1
  , xE = 2
  , Us = 4
  , Ow = 8
  , Sc = 10
  , Mw = 47
  , ts = 92
  , DE = 9
  , LE = 32
  , Ac = 34
  , Vl = 61
  , OE = 35
  , ME = 36
  , IE = 37
  , ec = 39
  , tc = 40
  , zl = 41
  , KE = 95
  , et = 45
  , RE = 33
  , NE = 60
  , GE = 62
  , VE = 64
  , zE = 91
  , XE = 93
  , YE = 61
  , JE = 123
  , nc = 63
  , kE = 125
  , Iw = 124
  , jE = 126
  , ZE = 128
  , Kw = 65533
  , xB = 42
  , Qa = 43
  , qE = 44
  , WE = 58
  , PE = 59
  , Qs = 46
  , $E = 0
  , A1 = 8
  , e1 = 11
  , t1 = 14
  , n1 = 31
  , r1 = 127
  , ln = -1
  , OU = 48
  , MU = 97
  , IU = 101
  , a1 = 102
  , i1 = 117
  , l1 = 122
  , KU = 65
  , RU = 69
  , NU = 70
  , s1 = 85
  , u1 = 90
  , Ne = function(i) {
    return i >= OU && i <= 57
}
  , c1 = function(i) {
    return i >= 55296 && i <= 57343
}
  , gi = function(i) {
    return Ne(i) || i >= KU && i <= NU || i >= MU && i <= a1
}
  , o1 = function(i) {
    return i >= MU && i <= l1
}
  , f1 = function(i) {
    return i >= KU && i <= u1
}
  , B1 = function(i) {
    return o1(i) || f1(i)
}
  , h1 = function(i) {
    return i >= ZE
}
  , rc = function(i) {
    return i === Sc || i === DE || i === LE
}
  , Tc = function(i) {
    return B1(i) || h1(i) || i === KE
}
  , Rw = function(i) {
    return Tc(i) || Ne(i) || i === et
}
  , g1 = function(i) {
    return i >= $E && i <= A1 || i === e1 || i >= t1 && i <= n1 || i === r1
}
  , Er = function(i, t) {
    return i !== ts ? !1 : t !== Sc
}
  , ac = function(i, t, a) {
    return i === et ? Tc(t) || Er(t, a) : Tc(i) ? !0 : !!(i === ts && Er(i, t))
}
  , DB = function(i, t, a) {
    return i === Qa || i === et ? Ne(t) ? !0 : t === Qs && Ne(a) : Ne(i === Qs ? t : i)
}
  , d1 = function(i) {
    var t = 0
      , a = 1;
    (i[t] === Qa || i[t] === et) && (i[t] === et && (a = -1),
    t++);
    for (var n = []; Ne(i[t]); )
        n.push(i[t++]);
    var s = n.length ? parseInt(oe.apply(void 0, n), 10) : 0;
    i[t] === Qs && t++;
    for (var u = []; Ne(i[t]); )
        u.push(i[t++]);
    var o = u.length
      , B = o ? parseInt(oe.apply(void 0, u), 10) : 0;
    (i[t] === RU || i[t] === IU) && t++;
    var h = 1;
    (i[t] === Qa || i[t] === et) && (i[t] === et && (h = -1),
    t++);
    for (var g = []; Ne(i[t]); )
        g.push(i[t++]);
    var d = g.length ? parseInt(oe.apply(void 0, g), 10) : 0;
    return a * (s + B * Math.pow(10, -o)) * Math.pow(10, h * d)
}
  , Q1 = {
    type: 2
}
  , w1 = {
    type: 3
}
  , C1 = {
    type: 4
}
  , U1 = {
    type: 13
}
  , p1 = {
    type: 8
}
  , m1 = {
    type: 21
}
  , v1 = {
    type: 9
}
  , y1 = {
    type: 10
}
  , F1 = {
    type: 11
}
  , E1 = {
    type: 12
}
  , _1 = {
    type: 14
}
  , ic = {
    type: 23
}
  , H1 = {
    type: 1
}
  , b1 = {
    type: 25
}
  , S1 = {
    type: 24
}
  , T1 = {
    type: 26
}
  , x1 = {
    type: 27
}
  , D1 = {
    type: 28
}
  , L1 = {
    type: 29
}
  , O1 = {
    type: 31
}
  , ph = {
    type: 32
}
  , GU = (function() {
    function i() {
        this._value = []
    }
    return i.prototype.write = function(t) {
        this._value = this._value.concat(Xc(t))
    }
    ,
    i.prototype.read = function() {
        for (var t = [], a = this.consumeToken(); a !== ph; )
            t.push(a),
            a = this.consumeToken();
        return t
    }
    ,
    i.prototype.consumeToken = function() {
        var t = this.consumeCodePoint();
        switch (t) {
        case Ac:
            return this.consumeStringToken(Ac);
        case OE:
            var a = this.peekCodePoint(0)
              , n = this.peekCodePoint(1)
              , s = this.peekCodePoint(2);
            if (Rw(a) || Er(n, s)) {
                var u = ac(a, n, s) ? xE : TE
                  , o = this.consumeName();
                return {
                    type: 5,
                    value: o,
                    flags: u
                }
            }
            break;
        case ME:
            if (this.peekCodePoint(0) === Vl)
                return this.consumeCodePoint(),
                U1;
            break;
        case ec:
            return this.consumeStringToken(ec);
        case tc:
            return Q1;
        case zl:
            return w1;
        case xB:
            if (this.peekCodePoint(0) === Vl)
                return this.consumeCodePoint(),
                _1;
            break;
        case Qa:
            if (DB(t, this.peekCodePoint(0), this.peekCodePoint(1)))
                return this.reconsumeCodePoint(t),
                this.consumeNumericToken();
            break;
        case qE:
            return C1;
        case et:
            var B = t
              , h = this.peekCodePoint(0)
              , g = this.peekCodePoint(1);
            if (DB(B, h, g))
                return this.reconsumeCodePoint(t),
                this.consumeNumericToken();
            if (ac(B, h, g))
                return this.reconsumeCodePoint(t),
                this.consumeIdentLikeToken();
            if (h === et && g === GE)
                return this.consumeCodePoint(),
                this.consumeCodePoint(),
                S1;
            break;
        case Qs:
            if (DB(t, this.peekCodePoint(0), this.peekCodePoint(1)))
                return this.reconsumeCodePoint(t),
                this.consumeNumericToken();
            break;
        case Mw:
            if (this.peekCodePoint(0) === xB)
                for (this.consumeCodePoint(); ; ) {
                    var d = this.consumeCodePoint();
                    if (d === xB && (d = this.consumeCodePoint(),
                    d === Mw))
                        return this.consumeToken();
                    if (d === ln)
                        return this.consumeToken()
                }
            break;
        case WE:
            return T1;
        case PE:
            return x1;
        case NE:
            if (this.peekCodePoint(0) === RE && this.peekCodePoint(1) === et && this.peekCodePoint(2) === et)
                return this.consumeCodePoint(),
                this.consumeCodePoint(),
                b1;
            break;
        case VE:
            var w = this.peekCodePoint(0)
              , C = this.peekCodePoint(1)
              , m = this.peekCodePoint(2);
            if (ac(w, C, m)) {
                var o = this.consumeName();
                return {
                    type: 7,
                    value: o
                }
            }
            break;
        case zE:
            return D1;
        case ts:
            if (Er(t, this.peekCodePoint(0)))
                return this.reconsumeCodePoint(t),
                this.consumeIdentLikeToken();
            break;
        case XE:
            return L1;
        case YE:
            if (this.peekCodePoint(0) === Vl)
                return this.consumeCodePoint(),
                p1;
            break;
        case JE:
            return F1;
        case kE:
            return E1;
        case i1:
        case s1:
            var v = this.peekCodePoint(0)
              , p = this.peekCodePoint(1);
            return v === Qa && (gi(p) || p === nc) && (this.consumeCodePoint(),
            this.consumeUnicodeRangeToken()),
            this.reconsumeCodePoint(t),
            this.consumeIdentLikeToken();
        case Iw:
            if (this.peekCodePoint(0) === Vl)
                return this.consumeCodePoint(),
                v1;
            if (this.peekCodePoint(0) === Iw)
                return this.consumeCodePoint(),
                m1;
            break;
        case jE:
            if (this.peekCodePoint(0) === Vl)
                return this.consumeCodePoint(),
                y1;
            break;
        case ln:
            return ph
        }
        return rc(t) ? (this.consumeWhiteSpace(),
        O1) : Ne(t) ? (this.reconsumeCodePoint(t),
        this.consumeNumericToken()) : Tc(t) ? (this.reconsumeCodePoint(t),
        this.consumeIdentLikeToken()) : {
            type: 6,
            value: oe(t)
        }
    }
    ,
    i.prototype.consumeCodePoint = function() {
        var t = this._value.shift();
        return typeof t > "u" ? -1 : t
    }
    ,
    i.prototype.reconsumeCodePoint = function(t) {
        this._value.unshift(t)
    }
    ,
    i.prototype.peekCodePoint = function(t) {
        return t >= this._value.length ? -1 : this._value[t]
    }
    ,
    i.prototype.consumeUnicodeRangeToken = function() {
        for (var t = [], a = this.consumeCodePoint(); gi(a) && t.length < 6; )
            t.push(a),
            a = this.consumeCodePoint();
        for (var n = !1; a === nc && t.length < 6; )
            t.push(a),
            a = this.consumeCodePoint(),
            n = !0;
        if (n) {
            var s = parseInt(oe.apply(void 0, t.map(function(h) {
                return h === nc ? OU : h
            })), 16)
              , u = parseInt(oe.apply(void 0, t.map(function(h) {
                return h === nc ? NU : h
            })), 16);
            return {
                type: 30,
                start: s,
                end: u
            }
        }
        var o = parseInt(oe.apply(void 0, t), 16);
        if (this.peekCodePoint(0) === et && gi(this.peekCodePoint(1))) {
            this.consumeCodePoint(),
            a = this.consumeCodePoint();
            for (var B = []; gi(a) && B.length < 6; )
                B.push(a),
                a = this.consumeCodePoint();
            var u = parseInt(oe.apply(void 0, B), 16);
            return {
                type: 30,
                start: o,
                end: u
            }
        } else
            return {
                type: 30,
                start: o,
                end: o
            }
    }
    ,
    i.prototype.consumeIdentLikeToken = function() {
        var t = this.consumeName();
        return t.toLowerCase() === "url" && this.peekCodePoint(0) === tc ? (this.consumeCodePoint(),
        this.consumeUrlToken()) : this.peekCodePoint(0) === tc ? (this.consumeCodePoint(),
        {
            type: 19,
            value: t
        }) : {
            type: 20,
            value: t
        }
    }
    ,
    i.prototype.consumeUrlToken = function() {
        var t = [];
        if (this.consumeWhiteSpace(),
        this.peekCodePoint(0) === ln)
            return {
                type: 22,
                value: ""
            };
        var a = this.peekCodePoint(0);
        if (a === ec || a === Ac) {
            var n = this.consumeStringToken(this.consumeCodePoint());
            return n.type === 0 && (this.consumeWhiteSpace(),
            this.peekCodePoint(0) === ln || this.peekCodePoint(0) === zl) ? (this.consumeCodePoint(),
            {
                type: 22,
                value: n.value
            }) : (this.consumeBadUrlRemnants(),
            ic)
        }
        for (; ; ) {
            var s = this.consumeCodePoint();
            if (s === ln || s === zl)
                return {
                    type: 22,
                    value: oe.apply(void 0, t)
                };
            if (rc(s))
                return this.consumeWhiteSpace(),
                this.peekCodePoint(0) === ln || this.peekCodePoint(0) === zl ? (this.consumeCodePoint(),
                {
                    type: 22,
                    value: oe.apply(void 0, t)
                }) : (this.consumeBadUrlRemnants(),
                ic);
            if (s === Ac || s === ec || s === tc || g1(s))
                return this.consumeBadUrlRemnants(),
                ic;
            if (s === ts)
                if (Er(s, this.peekCodePoint(0)))
                    t.push(this.consumeEscapedCodePoint());
                else
                    return this.consumeBadUrlRemnants(),
                    ic;
            else
                t.push(s)
        }
    }
    ,
    i.prototype.consumeWhiteSpace = function() {
        for (; rc(this.peekCodePoint(0)); )
            this.consumeCodePoint()
    }
    ,
    i.prototype.consumeBadUrlRemnants = function() {
        for (; ; ) {
            var t = this.consumeCodePoint();
            if (t === zl || t === ln)
                return;
            Er(t, this.peekCodePoint(0)) && this.consumeEscapedCodePoint()
        }
    }
    ,
    i.prototype.consumeStringSlice = function(t) {
        for (var a = 5e4, n = ""; t > 0; ) {
            var s = Math.min(a, t);
            n += oe.apply(void 0, this._value.splice(0, s)),
            t -= s
        }
        return this._value.shift(),
        n
    }
    ,
    i.prototype.consumeStringToken = function(t) {
        var a = ""
          , n = 0;
        do {
            var s = this._value[n];
            if (s === ln || s === void 0 || s === t)
                return a += this.consumeStringSlice(n),
                {
                    type: 0,
                    value: a
                };
            if (s === Sc)
                return this._value.splice(0, n),
                H1;
            if (s === ts) {
                var u = this._value[n + 1];
                u !== ln && u !== void 0 && (u === Sc ? (a += this.consumeStringSlice(n),
                n = -1,
                this._value.shift()) : Er(s, u) && (a += this.consumeStringSlice(n),
                a += oe(this.consumeEscapedCodePoint()),
                n = -1))
            }
            n++
        } while (!0)
    }
    ,
    i.prototype.consumeNumber = function() {
        var t = []
          , a = Us
          , n = this.peekCodePoint(0);
        for ((n === Qa || n === et) && t.push(this.consumeCodePoint()); Ne(this.peekCodePoint(0)); )
            t.push(this.consumeCodePoint());
        n = this.peekCodePoint(0);
        var s = this.peekCodePoint(1);
        if (n === Qs && Ne(s))
            for (t.push(this.consumeCodePoint(), this.consumeCodePoint()),
            a = Ow; Ne(this.peekCodePoint(0)); )
                t.push(this.consumeCodePoint());
        n = this.peekCodePoint(0),
        s = this.peekCodePoint(1);
        var u = this.peekCodePoint(2);
        if ((n === RU || n === IU) && ((s === Qa || s === et) && Ne(u) || Ne(s)))
            for (t.push(this.consumeCodePoint(), this.consumeCodePoint()),
            a = Ow; Ne(this.peekCodePoint(0)); )
                t.push(this.consumeCodePoint());
        return [d1(t), a]
    }
    ,
    i.prototype.consumeNumericToken = function() {
        var t = this.consumeNumber()
          , a = t[0]
          , n = t[1]
          , s = this.peekCodePoint(0)
          , u = this.peekCodePoint(1)
          , o = this.peekCodePoint(2);
        if (ac(s, u, o)) {
            var B = this.consumeName();
            return {
                type: 15,
                number: a,
                flags: n,
                unit: B
            }
        }
        return s === IE ? (this.consumeCodePoint(),
        {
            type: 16,
            number: a,
            flags: n
        }) : {
            type: 17,
            number: a,
            flags: n
        }
    }
    ,
    i.prototype.consumeEscapedCodePoint = function() {
        var t = this.consumeCodePoint();
        if (gi(t)) {
            for (var a = oe(t); gi(this.peekCodePoint(0)) && a.length < 6; )
                a += oe(this.consumeCodePoint());
            rc(this.peekCodePoint(0)) && this.consumeCodePoint();
            var n = parseInt(a, 16);
            return n === 0 || c1(n) || n > 1114111 ? Kw : n
        }
        return t === ln ? Kw : t
    }
    ,
    i.prototype.consumeName = function() {
        for (var t = ""; ; ) {
            var a = this.consumeCodePoint();
            if (Rw(a))
                t += oe(a);
            else if (Er(a, this.peekCodePoint(0)))
                t += oe(this.consumeEscapedCodePoint());
            else
                return this.reconsumeCodePoint(a),
                t
        }
    }
    ,
    i
}
)()
  , VU = (function() {
    function i(t) {
        this._tokens = t
    }
    return i.create = function(t) {
        var a = new GU;
        return a.write(t),
        new i(a.read())
    }
    ,
    i.parseValue = function(t) {
        return i.create(t).parseComponentValue()
    }
    ,
    i.parseValues = function(t) {
        return i.create(t).parseComponentValues()
    }
    ,
    i.prototype.parseComponentValue = function() {
        for (var t = this.consumeToken(); t.type === 31; )
            t = this.consumeToken();
        if (t.type === 32)
            throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
        this.reconsumeToken(t);
        var a = this.consumeComponentValue();
        do
            t = this.consumeToken();
        while (t.type === 31);
        if (t.type === 32)
            return a;
        throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")
    }
    ,
    i.prototype.parseComponentValues = function() {
        for (var t = []; ; ) {
            var a = this.consumeComponentValue();
            if (a.type === 32)
                return t;
            t.push(a),
            t.push()
        }
    }
    ,
    i.prototype.consumeComponentValue = function() {
        var t = this.consumeToken();
        switch (t.type) {
        case 11:
        case 28:
        case 2:
            return this.consumeSimpleBlock(t.type);
        case 19:
            return this.consumeFunction(t)
        }
        return t
    }
    ,
    i.prototype.consumeSimpleBlock = function(t) {
        for (var a = {
            type: t,
            values: []
        }, n = this.consumeToken(); ; ) {
            if (n.type === 32 || I1(n, t))
                return a;
            this.reconsumeToken(n),
            a.values.push(this.consumeComponentValue()),
            n = this.consumeToken()
        }
    }
    ,
    i.prototype.consumeFunction = function(t) {
        for (var a = {
            name: t.value,
            values: [],
            type: 18
        }; ; ) {
            var n = this.consumeToken();
            if (n.type === 32 || n.type === 3)
                return a;
            this.reconsumeToken(n),
            a.values.push(this.consumeComponentValue())
        }
    }
    ,
    i.prototype.consumeToken = function() {
        var t = this._tokens.shift();
        return typeof t > "u" ? ph : t
    }
    ,
    i.prototype.reconsumeToken = function(t) {
        this._tokens.unshift(t)
    }
    ,
    i
}
)()
  , ps = function(i) {
    return i.type === 15
}
  , Oi = function(i) {
    return i.type === 17
}
  , XA = function(i) {
    return i.type === 20
}
  , M1 = function(i) {
    return i.type === 0
}
  , mh = function(i, t) {
    return XA(i) && i.value === t
}
  , zU = function(i) {
    return i.type !== 31
}
  , Li = function(i) {
    return i.type !== 31 && i.type !== 4
}
  , Bn = function(i) {
    var t = []
      , a = [];
    return i.forEach(function(n) {
        if (n.type === 4) {
            if (a.length === 0)
                throw new Error("Error parsing function args, zero tokens for arg");
            t.push(a),
            a = [];
            return
        }
        n.type !== 31 && a.push(n)
    }),
    a.length && t.push(a),
    t
}
  , I1 = function(i, t) {
    return t === 11 && i.type === 12 || t === 28 && i.type === 29 ? !0 : t === 2 && i.type === 3
}
  , Nr = function(i) {
    return i.type === 17 || i.type === 15
}
  , we = function(i) {
    return i.type === 16 || Nr(i)
}
  , XU = function(i) {
    return i.length > 1 ? [i[0], i[1]] : [i[0]]
}
  , Oe = {
    type: 17,
    number: 0,
    flags: Us
}
  , tg = {
    type: 16,
    number: 50,
    flags: Us
}
  , Tr = {
    type: 16,
    number: 100,
    flags: Us
}
  , ql = function(i, t, a) {
    var n = i[0]
      , s = i[1];
    return [jA(n, t), jA(typeof s < "u" ? s : n, a)]
}
  , jA = function(i, t) {
    if (i.type === 16)
        return i.number / 100 * t;
    if (ps(i))
        switch (i.unit) {
        case "rem":
        case "em":
            return 16 * i.number;
        default:
            return i.number
        }
    return i.number
}
  , YU = "deg"
  , JU = "grad"
  , kU = "rad"
  , jU = "turn"
  , Yc = {
    name: "angle",
    parse: function(i, t) {
        if (t.type === 15)
            switch (t.unit) {
            case YU:
                return Math.PI * t.number / 180;
            case JU:
                return Math.PI / 200 * t.number;
            case kU:
                return t.number;
            case jU:
                return Math.PI * 2 * t.number
            }
        throw new Error("Unsupported angle type")
    }
}
  , ZU = function(i) {
    return i.type === 15 && (i.unit === YU || i.unit === JU || i.unit === kU || i.unit === jU)
}
  , qU = function(i) {
    var t = i.filter(XA).map(function(a) {
        return a.value
    }).join(" ");
    switch (t) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
        return [Oe, Oe];
    case "to top":
    case "bottom":
        return Rt(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
        return [Oe, Tr];
    case "to right":
    case "left":
        return Rt(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
        return [Tr, Tr];
    case "to bottom":
    case "top":
        return Rt(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
        return [Tr, Oe];
    case "to left":
    case "right":
        return Rt(270)
    }
    return 0
}
  , Rt = function(i) {
    return Math.PI * i / 180
}
  , Or = {
    name: "color",
    parse: function(i, t) {
        if (t.type === 18) {
            var a = K1[t.name];
            if (typeof a > "u")
                throw new Error('Attempting to parse an unsupported color function "' + t.name + '"');
            return a(i, t.values)
        }
        if (t.type === 5) {
            if (t.value.length === 3) {
                var n = t.value.substring(0, 1)
                  , s = t.value.substring(1, 2)
                  , u = t.value.substring(2, 3);
                return xr(parseInt(n + n, 16), parseInt(s + s, 16), parseInt(u + u, 16), 1)
            }
            if (t.value.length === 4) {
                var n = t.value.substring(0, 1)
                  , s = t.value.substring(1, 2)
                  , u = t.value.substring(2, 3)
                  , o = t.value.substring(3, 4);
                return xr(parseInt(n + n, 16), parseInt(s + s, 16), parseInt(u + u, 16), parseInt(o + o, 16) / 255)
            }
            if (t.value.length === 6) {
                var n = t.value.substring(0, 2)
                  , s = t.value.substring(2, 4)
                  , u = t.value.substring(4, 6);
                return xr(parseInt(n, 16), parseInt(s, 16), parseInt(u, 16), 1)
            }
            if (t.value.length === 8) {
                var n = t.value.substring(0, 2)
                  , s = t.value.substring(2, 4)
                  , u = t.value.substring(4, 6)
                  , o = t.value.substring(6, 8);
                return xr(parseInt(n, 16), parseInt(s, 16), parseInt(u, 16), parseInt(o, 16) / 255)
            }
        }
        if (t.type === 20) {
            var B = Vn[t.value.toUpperCase()];
            if (typeof B < "u")
                return B
        }
        return Vn.TRANSPARENT
    }
}
  , Mr = function(i) {
    return (255 & i) === 0
}
  , _e = function(i) {
    var t = 255 & i
      , a = 255 & i >> 8
      , n = 255 & i >> 16
      , s = 255 & i >> 24;
    return t < 255 ? "rgba(" + s + "," + n + "," + a + "," + t / 255 + ")" : "rgb(" + s + "," + n + "," + a + ")"
}
  , xr = function(i, t, a, n) {
    return (i << 24 | t << 16 | a << 8 | Math.round(n * 255) << 0) >>> 0
}
  , Nw = function(i, t) {
    if (i.type === 17)
        return i.number;
    if (i.type === 16) {
        var a = t === 3 ? 1 : 255;
        return t === 3 ? i.number / 100 * a : Math.round(i.number / 100 * a)
    }
    return 0
}
  , Gw = function(i, t) {
    var a = t.filter(Li);
    if (a.length === 3) {
        var n = a.map(Nw)
          , s = n[0]
          , u = n[1]
          , o = n[2];
        return xr(s, u, o, 1)
    }
    if (a.length === 4) {
        var B = a.map(Nw)
          , s = B[0]
          , u = B[1]
          , o = B[2]
          , h = B[3];
        return xr(s, u, o, h)
    }
    return 0
};
function LB(i, t, a) {
    return a < 0 && (a += 1),
    a >= 1 && (a -= 1),
    a < 1 / 6 ? (t - i) * a * 6 + i : a < 1 / 2 ? t : a < 2 / 3 ? (t - i) * 6 * (2 / 3 - a) + i : i
}
var Vw = function(i, t) {
    var a = t.filter(Li)
      , n = a[0]
      , s = a[1]
      , u = a[2]
      , o = a[3]
      , B = (n.type === 17 ? Rt(n.number) : Yc.parse(i, n)) / (Math.PI * 2)
      , h = we(s) ? s.number / 100 : 0
      , g = we(u) ? u.number / 100 : 0
      , d = typeof o < "u" && we(o) ? jA(o, 1) : 1;
    if (h === 0)
        return xr(g * 255, g * 255, g * 255, 1);
    var w = g <= .5 ? g * (h + 1) : g + h - g * h
      , C = g * 2 - w
      , m = LB(C, w, B + 1 / 3)
      , v = LB(C, w, B)
      , p = LB(C, w, B - 1 / 3);
    return xr(m * 255, v * 255, p * 255, d)
}
  , K1 = {
    hsl: Vw,
    hsla: Vw,
    rgb: Gw,
    rgba: Gw
}
  , ns = function(i, t) {
    return Or.parse(i, VU.create(t).parseComponentValue())
}
  , Vn = {
    ALICEBLUE: 4042850303,
    ANTIQUEWHITE: 4209760255,
    AQUA: 16777215,
    AQUAMARINE: 2147472639,
    AZURE: 4043309055,
    BEIGE: 4126530815,
    BISQUE: 4293182719,
    BLACK: 255,
    BLANCHEDALMOND: 4293643775,
    BLUE: 65535,
    BLUEVIOLET: 2318131967,
    BROWN: 2771004159,
    BURLYWOOD: 3736635391,
    CADETBLUE: 1604231423,
    CHARTREUSE: 2147418367,
    CHOCOLATE: 3530104575,
    CORAL: 4286533887,
    CORNFLOWERBLUE: 1687547391,
    CORNSILK: 4294499583,
    CRIMSON: 3692313855,
    CYAN: 16777215,
    DARKBLUE: 35839,
    DARKCYAN: 9145343,
    DARKGOLDENROD: 3095837695,
    DARKGRAY: 2846468607,
    DARKGREEN: 6553855,
    DARKGREY: 2846468607,
    DARKKHAKI: 3182914559,
    DARKMAGENTA: 2332068863,
    DARKOLIVEGREEN: 1433087999,
    DARKORANGE: 4287365375,
    DARKORCHID: 2570243327,
    DARKRED: 2332033279,
    DARKSALMON: 3918953215,
    DARKSEAGREEN: 2411499519,
    DARKSLATEBLUE: 1211993087,
    DARKSLATEGRAY: 793726975,
    DARKSLATEGREY: 793726975,
    DARKTURQUOISE: 13554175,
    DARKVIOLET: 2483082239,
    DEEPPINK: 4279538687,
    DEEPSKYBLUE: 12582911,
    DIMGRAY: 1768516095,
    DIMGREY: 1768516095,
    DODGERBLUE: 512819199,
    FIREBRICK: 2988581631,
    FLORALWHITE: 4294635775,
    FORESTGREEN: 579543807,
    FUCHSIA: 4278255615,
    GAINSBORO: 3705462015,
    GHOSTWHITE: 4177068031,
    GOLD: 4292280575,
    GOLDENROD: 3668254975,
    GRAY: 2155905279,
    GREEN: 8388863,
    GREENYELLOW: 2919182335,
    GREY: 2155905279,
    HONEYDEW: 4043305215,
    HOTPINK: 4285117695,
    INDIANRED: 3445382399,
    INDIGO: 1258324735,
    IVORY: 4294963455,
    KHAKI: 4041641215,
    LAVENDER: 3873897215,
    LAVENDERBLUSH: 4293981695,
    LAWNGREEN: 2096890111,
    LEMONCHIFFON: 4294626815,
    LIGHTBLUE: 2916673279,
    LIGHTCORAL: 4034953471,
    LIGHTCYAN: 3774873599,
    LIGHTGOLDENRODYELLOW: 4210742015,
    LIGHTGRAY: 3553874943,
    LIGHTGREEN: 2431553791,
    LIGHTGREY: 3553874943,
    LIGHTPINK: 4290167295,
    LIGHTSALMON: 4288707327,
    LIGHTSEAGREEN: 548580095,
    LIGHTSKYBLUE: 2278488831,
    LIGHTSLATEGRAY: 2005441023,
    LIGHTSLATEGREY: 2005441023,
    LIGHTSTEELBLUE: 2965692159,
    LIGHTYELLOW: 4294959359,
    LIME: 16711935,
    LIMEGREEN: 852308735,
    LINEN: 4210091775,
    MAGENTA: 4278255615,
    MAROON: 2147483903,
    MEDIUMAQUAMARINE: 1724754687,
    MEDIUMBLUE: 52735,
    MEDIUMORCHID: 3126187007,
    MEDIUMPURPLE: 2473647103,
    MEDIUMSEAGREEN: 1018393087,
    MEDIUMSLATEBLUE: 2070474495,
    MEDIUMSPRINGGREEN: 16423679,
    MEDIUMTURQUOISE: 1221709055,
    MEDIUMVIOLETRED: 3340076543,
    MIDNIGHTBLUE: 421097727,
    MINTCREAM: 4127193855,
    MISTYROSE: 4293190143,
    MOCCASIN: 4293178879,
    NAVAJOWHITE: 4292783615,
    NAVY: 33023,
    OLDLACE: 4260751103,
    OLIVE: 2155872511,
    OLIVEDRAB: 1804477439,
    ORANGE: 4289003775,
    ORANGERED: 4282712319,
    ORCHID: 3664828159,
    PALEGOLDENROD: 4008225535,
    PALEGREEN: 2566625535,
    PALETURQUOISE: 2951671551,
    PALEVIOLETRED: 3681588223,
    PAPAYAWHIP: 4293907967,
    PEACHPUFF: 4292524543,
    PERU: 3448061951,
    PINK: 4290825215,
    PLUM: 3718307327,
    POWDERBLUE: 2967529215,
    PURPLE: 2147516671,
    REBECCAPURPLE: 1714657791,
    RED: 4278190335,
    ROSYBROWN: 3163525119,
    ROYALBLUE: 1097458175,
    SADDLEBROWN: 2336560127,
    SALMON: 4202722047,
    SANDYBROWN: 4104413439,
    SEAGREEN: 780883967,
    SEASHELL: 4294307583,
    SIENNA: 2689740287,
    SILVER: 3233857791,
    SKYBLUE: 2278484991,
    SLATEBLUE: 1784335871,
    SLATEGRAY: 1887473919,
    SLATEGREY: 1887473919,
    SNOW: 4294638335,
    SPRINGGREEN: 16744447,
    STEELBLUE: 1182971135,
    TAN: 3535047935,
    TEAL: 8421631,
    THISTLE: 3636451583,
    TOMATO: 4284696575,
    TRANSPARENT: 0,
    TURQUOISE: 1088475391,
    VIOLET: 4001558271,
    WHEAT: 4125012991,
    WHITE: 4294967295,
    WHITESMOKE: 4126537215,
    YELLOW: 4294902015,
    YELLOWGREEN: 2597139199
}
  , R1 = {
    name: "background-clip",
    initialValue: "border-box",
    prefix: !1,
    type: 1,
    parse: function(i, t) {
        return t.map(function(a) {
            if (XA(a))
                switch (a.value) {
                case "padding-box":
                    return 1;
                case "content-box":
                    return 2
                }
            return 0
        })
    }
}
  , N1 = {
    name: "background-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
}
  , Jc = function(i, t) {
    var a = Or.parse(i, t[0])
      , n = t[1];
    return n && we(n) ? {
        color: a,
        stop: n
    } : {
        color: a,
        stop: null
    }
}
  , zw = function(i, t) {
    var a = i[0]
      , n = i[i.length - 1];
    a.stop === null && (a.stop = Oe),
    n.stop === null && (n.stop = Tr);
    for (var s = [], u = 0, o = 0; o < i.length; o++) {
        var B = i[o].stop;
        if (B !== null) {
            var h = jA(B, t);
            h > u ? s.push(h) : s.push(u),
            u = h
        } else
            s.push(null)
    }
    for (var g = null, o = 0; o < s.length; o++) {
        var d = s[o];
        if (d === null)
            g === null && (g = o);
        else if (g !== null) {
            for (var w = o - g, C = s[g - 1], m = (d - C) / (w + 1), v = 1; v <= w; v++)
                s[g + v - 1] = m * v;
            g = null
        }
    }
    return i.map(function(p, b) {
        var E = p.color;
        return {
            color: E,
            stop: Math.max(Math.min(1, s[b] / t), 0)
        }
    })
}
  , G1 = function(i, t, a) {
    var n = t / 2
      , s = a / 2
      , u = jA(i[0], t) - n
      , o = s - jA(i[1], a);
    return (Math.atan2(o, u) + Math.PI * 2) % (Math.PI * 2)
}
  , V1 = function(i, t, a) {
    var n = typeof i == "number" ? i : G1(i, t, a)
      , s = Math.abs(t * Math.sin(n)) + Math.abs(a * Math.cos(n))
      , u = t / 2
      , o = a / 2
      , B = s / 2
      , h = Math.sin(n - Math.PI / 2) * B
      , g = Math.cos(n - Math.PI / 2) * B;
    return [s, u - g, u + g, o - h, o + h]
}
  , kt = function(i, t) {
    return Math.sqrt(i * i + t * t)
}
  , Xw = function(i, t, a, n, s) {
    var u = [[0, 0], [0, t], [i, 0], [i, t]];
    return u.reduce(function(o, B) {
        var h = B[0]
          , g = B[1]
          , d = kt(a - h, n - g);
        return (s ? d < o.optimumDistance : d > o.optimumDistance) ? {
            optimumCorner: B,
            optimumDistance: d
        } : o
    }, {
        optimumDistance: s ? 1 / 0 : -1 / 0,
        optimumCorner: null
    }).optimumCorner
}
  , z1 = function(i, t, a, n, s) {
    var u = 0
      , o = 0;
    switch (i.size) {
    case 0:
        i.shape === 0 ? u = o = Math.min(Math.abs(t), Math.abs(t - n), Math.abs(a), Math.abs(a - s)) : i.shape === 1 && (u = Math.min(Math.abs(t), Math.abs(t - n)),
        o = Math.min(Math.abs(a), Math.abs(a - s)));
        break;
    case 2:
        if (i.shape === 0)
            u = o = Math.min(kt(t, a), kt(t, a - s), kt(t - n, a), kt(t - n, a - s));
        else if (i.shape === 1) {
            var B = Math.min(Math.abs(a), Math.abs(a - s)) / Math.min(Math.abs(t), Math.abs(t - n))
              , h = Xw(n, s, t, a, !0)
              , g = h[0]
              , d = h[1];
            u = kt(g - t, (d - a) / B),
            o = B * u
        }
        break;
    case 1:
        i.shape === 0 ? u = o = Math.max(Math.abs(t), Math.abs(t - n), Math.abs(a), Math.abs(a - s)) : i.shape === 1 && (u = Math.max(Math.abs(t), Math.abs(t - n)),
        o = Math.max(Math.abs(a), Math.abs(a - s)));
        break;
    case 3:
        if (i.shape === 0)
            u = o = Math.max(kt(t, a), kt(t, a - s), kt(t - n, a), kt(t - n, a - s));
        else if (i.shape === 1) {
            var B = Math.max(Math.abs(a), Math.abs(a - s)) / Math.max(Math.abs(t), Math.abs(t - n))
              , w = Xw(n, s, t, a, !1)
              , g = w[0]
              , d = w[1];
            u = kt(g - t, (d - a) / B),
            o = B * u
        }
        break
    }
    return Array.isArray(i.size) && (u = jA(i.size[0], n),
    o = i.size.length === 2 ? jA(i.size[1], s) : u),
    [u, o]
}
  , X1 = function(i, t) {
    var a = Rt(180)
      , n = [];
    return Bn(t).forEach(function(s, u) {
        if (u === 0) {
            var o = s[0];
            if (o.type === 20 && o.value === "to") {
                a = qU(s);
                return
            } else if (ZU(o)) {
                a = Yc.parse(i, o);
                return
            }
        }
        var B = Jc(i, s);
        n.push(B)
    }),
    {
        angle: a,
        stops: n,
        type: 1
    }
}
  , lc = function(i, t) {
    var a = Rt(180)
      , n = [];
    return Bn(t).forEach(function(s, u) {
        if (u === 0) {
            var o = s[0];
            if (o.type === 20 && ["top", "left", "right", "bottom"].indexOf(o.value) !== -1) {
                a = qU(s);
                return
            } else if (ZU(o)) {
                a = (Yc.parse(i, o) + Rt(270)) % Rt(360);
                return
            }
        }
        var B = Jc(i, s);
        n.push(B)
    }),
    {
        angle: a,
        stops: n,
        type: 1
    }
}
  , Y1 = function(i, t) {
    var a = Rt(180)
      , n = []
      , s = 1
      , u = 0
      , o = 3
      , B = [];
    return Bn(t).forEach(function(h, g) {
        var d = h[0];
        if (g === 0) {
            if (XA(d) && d.value === "linear") {
                s = 1;
                return
            } else if (XA(d) && d.value === "radial") {
                s = 2;
                return
            }
        }
        if (d.type === 18) {
            if (d.name === "from") {
                var w = Or.parse(i, d.values[0]);
                n.push({
                    stop: Oe,
                    color: w
                })
            } else if (d.name === "to") {
                var w = Or.parse(i, d.values[0]);
                n.push({
                    stop: Tr,
                    color: w
                })
            } else if (d.name === "color-stop") {
                var C = d.values.filter(Li);
                if (C.length === 2) {
                    var w = Or.parse(i, C[1])
                      , m = C[0];
                    Oi(m) && n.push({
                        stop: {
                            type: 16,
                            number: m.number * 100,
                            flags: m.flags
                        },
                        color: w
                    })
                }
            }
        }
    }),
    s === 1 ? {
        angle: (a + Rt(180)) % Rt(360),
        stops: n,
        type: s
    } : {
        size: o,
        shape: u,
        stops: n,
        position: B,
        type: s
    }
}
  , WU = "closest-side"
  , PU = "farthest-side"
  , $U = "closest-corner"
  , Ap = "farthest-corner"
  , ep = "circle"
  , tp = "ellipse"
  , np = "cover"
  , rp = "contain"
  , J1 = function(i, t) {
    var a = 0
      , n = 3
      , s = []
      , u = [];
    return Bn(t).forEach(function(o, B) {
        var h = !0;
        if (B === 0) {
            var g = !1;
            h = o.reduce(function(w, C) {
                if (g)
                    if (XA(C))
                        switch (C.value) {
                        case "center":
                            return u.push(tg),
                            w;
                        case "top":
                        case "left":
                            return u.push(Oe),
                            w;
                        case "right":
                        case "bottom":
                            return u.push(Tr),
                            w
                        }
                    else
                        (we(C) || Nr(C)) && u.push(C);
                else if (XA(C))
                    switch (C.value) {
                    case ep:
                        return a = 0,
                        !1;
                    case tp:
                        return a = 1,
                        !1;
                    case "at":
                        return g = !0,
                        !1;
                    case WU:
                        return n = 0,
                        !1;
                    case np:
                    case PU:
                        return n = 1,
                        !1;
                    case rp:
                    case $U:
                        return n = 2,
                        !1;
                    case Ap:
                        return n = 3,
                        !1
                    }
                else if (Nr(C) || we(C))
                    return Array.isArray(n) || (n = []),
                    n.push(C),
                    !1;
                return w
            }, h)
        }
        if (h) {
            var d = Jc(i, o);
            s.push(d)
        }
    }),
    {
        size: n,
        shape: a,
        stops: s,
        position: u,
        type: 2
    }
}
  , sc = function(i, t) {
    var a = 0
      , n = 3
      , s = []
      , u = [];
    return Bn(t).forEach(function(o, B) {
        var h = !0;
        if (B === 0 ? h = o.reduce(function(d, w) {
            if (XA(w))
                switch (w.value) {
                case "center":
                    return u.push(tg),
                    !1;
                case "top":
                case "left":
                    return u.push(Oe),
                    !1;
                case "right":
                case "bottom":
                    return u.push(Tr),
                    !1
                }
            else if (we(w) || Nr(w))
                return u.push(w),
                !1;
            return d
        }, h) : B === 1 && (h = o.reduce(function(d, w) {
            if (XA(w))
                switch (w.value) {
                case ep:
                    return a = 0,
                    !1;
                case tp:
                    return a = 1,
                    !1;
                case rp:
                case WU:
                    return n = 0,
                    !1;
                case PU:
                    return n = 1,
                    !1;
                case $U:
                    return n = 2,
                    !1;
                case np:
                case Ap:
                    return n = 3,
                    !1
                }
            else if (Nr(w) || we(w))
                return Array.isArray(n) || (n = []),
                n.push(w),
                !1;
            return d
        }, h)),
        h) {
            var g = Jc(i, o);
            s.push(g)
        }
    }),
    {
        size: n,
        shape: a,
        stops: s,
        position: u,
        type: 2
    }
}
  , k1 = function(i) {
    return i.type === 1
}
  , j1 = function(i) {
    return i.type === 2
}
  , ng = {
    name: "image",
    parse: function(i, t) {
        if (t.type === 22) {
            var a = {
                url: t.value,
                type: 0
            };
            return i.cache.addImage(t.value),
            a
        }
        if (t.type === 18) {
            var n = ap[t.name];
            if (typeof n > "u")
                throw new Error('Attempting to parse an unsupported image function "' + t.name + '"');
            return n(i, t.values)
        }
        throw new Error("Unsupported image type " + t.type)
    }
};
function Z1(i) {
    return !(i.type === 20 && i.value === "none") && (i.type !== 18 || !!ap[i.name])
}
var ap = {
    "linear-gradient": X1,
    "-moz-linear-gradient": lc,
    "-ms-linear-gradient": lc,
    "-o-linear-gradient": lc,
    "-webkit-linear-gradient": lc,
    "radial-gradient": J1,
    "-moz-radial-gradient": sc,
    "-ms-radial-gradient": sc,
    "-o-radial-gradient": sc,
    "-webkit-radial-gradient": sc,
    "-webkit-gradient": Y1
}, q1 = {
    name: "background-image",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function(i, t) {
        if (t.length === 0)
            return [];
        var a = t[0];
        return a.type === 20 && a.value === "none" ? [] : t.filter(function(n) {
            return Li(n) && Z1(n)
        }).map(function(n) {
            return ng.parse(i, n)
        })
    }
}, W1 = {
    name: "background-origin",
    initialValue: "border-box",
    prefix: !1,
    type: 1,
    parse: function(i, t) {
        return t.map(function(a) {
            if (XA(a))
                switch (a.value) {
                case "padding-box":
                    return 1;
                case "content-box":
                    return 2
                }
            return 0
        })
    }
}, P1 = {
    name: "background-position",
    initialValue: "0% 0%",
    type: 1,
    prefix: !1,
    parse: function(i, t) {
        return Bn(t).map(function(a) {
            return a.filter(we)
        }).map(XU)
    }
}, $1 = {
    name: "background-repeat",
    initialValue: "repeat",
    prefix: !1,
    type: 1,
    parse: function(i, t) {
        return Bn(t).map(function(a) {
            return a.filter(XA).map(function(n) {
                return n.value
            }).join(" ")
        }).map(A_)
    }
}, A_ = function(i) {
    switch (i) {
    case "no-repeat":
        return 1;
    case "repeat-x":
    case "repeat no-repeat":
        return 2;
    case "repeat-y":
    case "no-repeat repeat":
        return 3;
    default:
        return 0
    }
}, _i;
(function(i) {
    i.AUTO = "auto",
    i.CONTAIN = "contain",
    i.COVER = "cover"
}
)(_i || (_i = {}));
var e_ = {
    name: "background-size",
    initialValue: "0",
    prefix: !1,
    type: 1,
    parse: function(i, t) {
        return Bn(t).map(function(a) {
            return a.filter(t_)
        })
    }
}, t_ = function(i) {
    return XA(i) || we(i)
}, kc = function(i) {
    return {
        name: "border-" + i + "-color",
        initialValue: "transparent",
        prefix: !1,
        type: 3,
        format: "color"
    }
}, n_ = kc("top"), r_ = kc("right"), a_ = kc("bottom"), i_ = kc("left"), jc = function(i) {
    return {
        name: "border-radius-" + i,
        initialValue: "0 0",
        prefix: !1,
        type: 1,
        parse: function(t, a) {
            return XU(a.filter(we))
        }
    }
}, l_ = jc("top-left"), s_ = jc("top-right"), u_ = jc("bottom-right"), c_ = jc("bottom-left"), Zc = function(i) {
    return {
        name: "border-" + i + "-style",
        initialValue: "solid",
        prefix: !1,
        type: 2,
        parse: function(t, a) {
            switch (a) {
            case "none":
                return 0;
            case "dashed":
                return 2;
            case "dotted":
                return 3;
            case "double":
                return 4
            }
            return 1
        }
    }
}, o_ = Zc("top"), f_ = Zc("right"), B_ = Zc("bottom"), h_ = Zc("left"), qc = function(i) {
    return {
        name: "border-" + i + "-width",
        initialValue: "0",
        type: 0,
        prefix: !1,
        parse: function(t, a) {
            return ps(a) ? a.number : 0
        }
    }
}, g_ = qc("top"), d_ = qc("right"), Q_ = qc("bottom"), w_ = qc("left"), C_ = {
    name: "color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
}, U_ = {
    name: "direction",
    initialValue: "ltr",
    prefix: !1,
    type: 2,
    parse: function(i, t) {
        return t === "rtl" ? 1 : 0
    }
}, p_ = {
    name: "display",
    initialValue: "inline-block",
    prefix: !1,
    type: 1,
    parse: function(i, t) {
        return t.filter(XA).reduce(function(a, n) {
            return a | m_(n.value)
        }, 0)
    }
}, m_ = function(i) {
    switch (i) {
    case "block":
    case "-webkit-box":
        return 2;
    case "inline":
        return 4;
    case "run-in":
        return 8;
    case "flow":
        return 16;
    case "flow-root":
        return 32;
    case "table":
        return 64;
    case "flex":
    case "-webkit-flex":
        return 128;
    case "grid":
    case "-ms-grid":
        return 256;
    case "ruby":
        return 512;
    case "subgrid":
        return 1024;
    case "list-item":
        return 2048;
    case "table-row-group":
        return 4096;
    case "table-header-group":
        return 8192;
    case "table-footer-group":
        return 16384;
    case "table-row":
        return 32768;
    case "table-cell":
        return 65536;
    case "table-column-group":
        return 131072;
    case "table-column":
        return 262144;
    case "table-caption":
        return 524288;
    case "ruby-base":
        return 1048576;
    case "ruby-text":
        return 2097152;
    case "ruby-base-container":
        return 4194304;
    case "ruby-text-container":
        return 8388608;
    case "contents":
        return 16777216;
    case "inline-block":
        return 33554432;
    case "inline-list-item":
        return 67108864;
    case "inline-table":
        return 134217728;
    case "inline-flex":
        return 268435456;
    case "inline-grid":
        return 536870912
    }
    return 0
}, v_ = {
    name: "float",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function(i, t) {
        switch (t) {
        case "left":
            return 1;
        case "right":
            return 2;
        case "inline-start":
            return 3;
        case "inline-end":
            return 4
        }
        return 0
    }
}, y_ = {
    name: "letter-spacing",
    initialValue: "0",
    prefix: !1,
    type: 0,
    parse: function(i, t) {
        return t.type === 20 && t.value === "normal" ? 0 : t.type === 17 || t.type === 15 ? t.number : 0
    }
}, xc;
(function(i) {
    i.NORMAL = "normal",
    i.STRICT = "strict"
}
)(xc || (xc = {}));
var F_ = {
    name: "line-break",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function(i, t) {
        return t === "strict" ? xc.STRICT : xc.NORMAL
    }
}, E_ = {
    name: "line-height",
    initialValue: "normal",
    prefix: !1,
    type: 4
}, Yw = function(i, t) {
    return XA(i) && i.value === "normal" ? 1.2 * t : i.type === 17 ? t * i.number : we(i) ? jA(i, t) : t
}, __ = {
    name: "list-style-image",
    initialValue: "none",
    type: 0,
    prefix: !1,
    parse: function(i, t) {
        return t.type === 20 && t.value === "none" ? null : ng.parse(i, t)
    }
}, H_ = {
    name: "list-style-position",
    initialValue: "outside",
    prefix: !1,
    type: 2,
    parse: function(i, t) {
        return t === "inside" ? 0 : 1
    }
}, vh = {
    name: "list-style-type",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function(i, t) {
        switch (t) {
        case "disc":
            return 0;
        case "circle":
            return 1;
        case "square":
            return 2;
        case "decimal":
            return 3;
        case "cjk-decimal":
            return 4;
        case "decimal-leading-zero":
            return 5;
        case "lower-roman":
            return 6;
        case "upper-roman":
            return 7;
        case "lower-greek":
            return 8;
        case "lower-alpha":
            return 9;
        case "upper-alpha":
            return 10;
        case "arabic-indic":
            return 11;
        case "armenian":
            return 12;
        case "bengali":
            return 13;
        case "cambodian":
            return 14;
        case "cjk-earthly-branch":
            return 15;
        case "cjk-heavenly-stem":
            return 16;
        case "cjk-ideographic":
            return 17;
        case "devanagari":
            return 18;
        case "ethiopic-numeric":
            return 19;
        case "georgian":
            return 20;
        case "gujarati":
            return 21;
        case "gurmukhi":
            return 22;
        case "hebrew":
            return 22;
        case "hiragana":
            return 23;
        case "hiragana-iroha":
            return 24;
        case "japanese-formal":
            return 25;
        case "japanese-informal":
            return 26;
        case "kannada":
            return 27;
        case "katakana":
            return 28;
        case "katakana-iroha":
            return 29;
        case "khmer":
            return 30;
        case "korean-hangul-formal":
            return 31;
        case "korean-hanja-formal":
            return 32;
        case "korean-hanja-informal":
            return 33;
        case "lao":
            return 34;
        case "lower-armenian":
            return 35;
        case "malayalam":
            return 36;
        case "mongolian":
            return 37;
        case "myanmar":
            return 38;
        case "oriya":
            return 39;
        case "persian":
            return 40;
        case "simp-chinese-formal":
            return 41;
        case "simp-chinese-informal":
            return 42;
        case "tamil":
            return 43;
        case "telugu":
            return 44;
        case "thai":
            return 45;
        case "tibetan":
            return 46;
        case "trad-chinese-formal":
            return 47;
        case "trad-chinese-informal":
            return 48;
        case "upper-armenian":
            return 49;
        case "disclosure-open":
            return 50;
        case "disclosure-closed":
            return 51;
        default:
            return -1
        }
    }
}, Wc = function(i) {
    return {
        name: "margin-" + i,
        initialValue: "0",
        prefix: !1,
        type: 4
    }
}, b_ = Wc("top"), S_ = Wc("right"), T_ = Wc("bottom"), x_ = Wc("left"), D_ = {
    name: "overflow",
    initialValue: "visible",
    prefix: !1,
    type: 1,
    parse: function(i, t) {
        return t.filter(XA).map(function(a) {
            switch (a.value) {
            case "hidden":
                return 1;
            case "scroll":
                return 2;
            case "clip":
                return 3;
            case "auto":
                return 4;
            default:
                return 0
            }
        })
    }
}, L_ = {
    name: "overflow-wrap",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function(i, t) {
        return t === "break-word" ? "break-word" : "normal"
    }
}, Pc = function(i) {
    return {
        name: "padding-" + i,
        initialValue: "0",
        prefix: !1,
        type: 3,
        format: "length-percentage"
    }
}, O_ = Pc("top"), M_ = Pc("right"), I_ = Pc("bottom"), K_ = Pc("left"), R_ = {
    name: "text-align",
    initialValue: "left",
    prefix: !1,
    type: 2,
    parse: function(i, t) {
        switch (t) {
        case "right":
            return 2;
        case "center":
        case "justify":
            return 1;
        default:
            return 0
        }
    }
}, N_ = {
    name: "position",
    initialValue: "static",
    prefix: !1,
    type: 2,
    parse: function(i, t) {
        switch (t) {
        case "relative":
            return 1;
        case "absolute":
            return 2;
        case "fixed":
            return 3;
        case "sticky":
            return 4
        }
        return 0
    }
}, G_ = {
    name: "text-shadow",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function(i, t) {
        return t.length === 1 && mh(t[0], "none") ? [] : Bn(t).map(function(a) {
            for (var n = {
                color: Vn.TRANSPARENT,
                offsetX: Oe,
                offsetY: Oe,
                blur: Oe
            }, s = 0, u = 0; u < a.length; u++) {
                var o = a[u];
                Nr(o) ? (s === 0 ? n.offsetX = o : s === 1 ? n.offsetY = o : n.blur = o,
                s++) : n.color = Or.parse(i, o)
            }
            return n
        })
    }
}, V_ = {
    name: "text-transform",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function(i, t) {
        switch (t) {
        case "uppercase":
            return 2;
        case "lowercase":
            return 1;
        case "capitalize":
            return 3
        }
        return 0
    }
}, z_ = {
    name: "transform",
    initialValue: "none",
    prefix: !0,
    type: 0,
    parse: function(i, t) {
        if (t.type === 20 && t.value === "none")
            return null;
        if (t.type === 18) {
            var a = J_[t.name];
            if (typeof a > "u")
                throw new Error('Attempting to parse an unsupported transform function "' + t.name + '"');
            return a(t.values)
        }
        return null
    }
}, X_ = function(i) {
    var t = i.filter(function(a) {
        return a.type === 17
    }).map(function(a) {
        return a.number
    });
    return t.length === 6 ? t : null
}, Y_ = function(i) {
    var t = i.filter(function(h) {
        return h.type === 17
    }).map(function(h) {
        return h.number
    })
      , a = t[0]
      , n = t[1];
    t[2],
    t[3];
    var s = t[4]
      , u = t[5];
    t[6],
    t[7],
    t[8],
    t[9],
    t[10],
    t[11];
    var o = t[12]
      , B = t[13];
    return t[14],
    t[15],
    t.length === 16 ? [a, n, s, u, o, B] : null
}, J_ = {
    matrix: X_,
    matrix3d: Y_
}, Jw = {
    type: 16,
    number: 50,
    flags: Us
}, k_ = [Jw, Jw], j_ = {
    name: "transform-origin",
    initialValue: "50% 50%",
    prefix: !0,
    type: 1,
    parse: function(i, t) {
        var a = t.filter(we);
        return a.length !== 2 ? k_ : [a[0], a[1]]
    }
}, Z_ = {
    name: "visible",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function(i, t) {
        switch (t) {
        case "hidden":
            return 1;
        case "collapse":
            return 2;
        default:
            return 0
        }
    }
}, rs;
(function(i) {
    i.NORMAL = "normal",
    i.BREAK_ALL = "break-all",
    i.KEEP_ALL = "keep-all"
}
)(rs || (rs = {}));
var q_ = {
    name: "word-break",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function(i, t) {
        switch (t) {
        case "break-all":
            return rs.BREAK_ALL;
        case "keep-all":
            return rs.KEEP_ALL;
        default:
            return rs.NORMAL
        }
    }
}
  , W_ = {
    name: "z-index",
    initialValue: "auto",
    prefix: !1,
    type: 0,
    parse: function(i, t) {
        if (t.type === 20)
            return {
                auto: !0,
                order: 0
            };
        if (Oi(t))
            return {
                auto: !1,
                order: t.number
            };
        throw new Error("Invalid z-index number parsed")
    }
}
  , ip = {
    name: "time",
    parse: function(i, t) {
        if (t.type === 15)
            switch (t.unit.toLowerCase()) {
            case "s":
                return 1e3 * t.number;
            case "ms":
                return t.number
            }
        throw new Error("Unsupported time type")
    }
}
  , P_ = {
    name: "opacity",
    initialValue: "1",
    type: 0,
    prefix: !1,
    parse: function(i, t) {
        return Oi(t) ? t.number : 1
    }
}
  , $_ = {
    name: "text-decoration-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
}
  , AH = {
    name: "text-decoration-line",
    initialValue: "none",
    prefix: !1,
    type: 1,
    parse: function(i, t) {
        return t.filter(XA).map(function(a) {
            switch (a.value) {
            case "underline":
                return 1;
            case "overline":
                return 2;
            case "line-through":
                return 3;
            case "none":
                return 4
            }
            return 0
        }).filter(function(a) {
            return a !== 0
        })
    }
}
  , eH = {
    name: "font-family",
    initialValue: "",
    prefix: !1,
    type: 1,
    parse: function(i, t) {
        var a = []
          , n = [];
        return t.forEach(function(s) {
            switch (s.type) {
            case 20:
            case 0:
                a.push(s.value);
                break;
            case 17:
                a.push(s.number.toString());
                break;
            case 4:
                n.push(a.join(" ")),
                a.length = 0;
                break
            }
        }),
        a.length && n.push(a.join(" ")),
        n.map(function(s) {
            return s.indexOf(" ") === -1 ? s : "'" + s + "'"
        })
    }
}
  , tH = {
    name: "font-size",
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length"
}
  , nH = {
    name: "font-weight",
    initialValue: "normal",
    type: 0,
    prefix: !1,
    parse: function(i, t) {
        return Oi(t) ? t.number : XA(t) && t.value === "bold" ? 700 : 400
    }
}
  , rH = {
    name: "font-variant",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function(i, t) {
        return t.filter(XA).map(function(a) {
            return a.value
        })
    }
}
  , aH = {
    name: "font-style",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function(i, t) {
        switch (t) {
        case "oblique":
            return "oblique";
        case "italic":
            return "italic";
        default:
            return "normal"
        }
    }
}
  , me = function(i, t) {
    return (i & t) !== 0
}
  , iH = {
    name: "content",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function(i, t) {
        if (t.length === 0)
            return [];
        var a = t[0];
        return a.type === 20 && a.value === "none" ? [] : t
    }
}
  , lH = {
    name: "counter-increment",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function(i, t) {
        if (t.length === 0)
            return null;
        var a = t[0];
        if (a.type === 20 && a.value === "none")
            return null;
        for (var n = [], s = t.filter(zU), u = 0; u < s.length; u++) {
            var o = s[u]
              , B = s[u + 1];
            if (o.type === 20) {
                var h = B && Oi(B) ? B.number : 1;
                n.push({
                    counter: o.value,
                    increment: h
                })
            }
        }
        return n
    }
}
  , sH = {
    name: "counter-reset",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function(i, t) {
        if (t.length === 0)
            return [];
        for (var a = [], n = t.filter(zU), s = 0; s < n.length; s++) {
            var u = n[s]
              , o = n[s + 1];
            if (XA(u) && u.value !== "none") {
                var B = o && Oi(o) ? o.number : 0;
                a.push({
                    counter: u.value,
                    reset: B
                })
            }
        }
        return a
    }
}
  , uH = {
    name: "duration",
    initialValue: "0s",
    prefix: !1,
    type: 1,
    parse: function(i, t) {
        return t.filter(ps).map(function(a) {
            return ip.parse(i, a)
        })
    }
}
  , cH = {
    name: "quotes",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function(i, t) {
        if (t.length === 0)
            return null;
        var a = t[0];
        if (a.type === 20 && a.value === "none")
            return null;
        var n = []
          , s = t.filter(M1);
        if (s.length % 2 !== 0)
            return null;
        for (var u = 0; u < s.length; u += 2) {
            var o = s[u].value
              , B = s[u + 1].value;
            n.push({
                open: o,
                close: B
            })
        }
        return n
    }
}
  , kw = function(i, t, a) {
    if (!i)
        return "";
    var n = i[Math.min(t, i.length - 1)];
    return n ? a ? n.open : n.close : ""
}
  , oH = {
    name: "box-shadow",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function(i, t) {
        return t.length === 1 && mh(t[0], "none") ? [] : Bn(t).map(function(a) {
            for (var n = {
                color: 255,
                offsetX: Oe,
                offsetY: Oe,
                blur: Oe,
                spread: Oe,
                inset: !1
            }, s = 0, u = 0; u < a.length; u++) {
                var o = a[u];
                mh(o, "inset") ? n.inset = !0 : Nr(o) ? (s === 0 ? n.offsetX = o : s === 1 ? n.offsetY = o : s === 2 ? n.blur = o : n.spread = o,
                s++) : n.color = Or.parse(i, o)
            }
            return n
        })
    }
}
  , fH = {
    name: "paint-order",
    initialValue: "normal",
    prefix: !1,
    type: 1,
    parse: function(i, t) {
        var a = [0, 1, 2]
          , n = [];
        return t.filter(XA).forEach(function(s) {
            switch (s.value) {
            case "stroke":
                n.push(1);
                break;
            case "fill":
                n.push(0);
                break;
            case "markers":
                n.push(2);
                break
            }
        }),
        a.forEach(function(s) {
            n.indexOf(s) === -1 && n.push(s)
        }),
        n
    }
}
  , BH = {
    name: "-webkit-text-stroke-color",
    initialValue: "currentcolor",
    prefix: !1,
    type: 3,
    format: "color"
}
  , hH = {
    name: "-webkit-text-stroke-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(i, t) {
        return ps(t) ? t.number : 0
    }
}
  , gH = (function() {
    function i(t, a) {
        var n, s;
        this.animationDuration = aA(t, uH, a.animationDuration),
        this.backgroundClip = aA(t, R1, a.backgroundClip),
        this.backgroundColor = aA(t, N1, a.backgroundColor),
        this.backgroundImage = aA(t, q1, a.backgroundImage),
        this.backgroundOrigin = aA(t, W1, a.backgroundOrigin),
        this.backgroundPosition = aA(t, P1, a.backgroundPosition),
        this.backgroundRepeat = aA(t, $1, a.backgroundRepeat),
        this.backgroundSize = aA(t, e_, a.backgroundSize),
        this.borderTopColor = aA(t, n_, a.borderTopColor),
        this.borderRightColor = aA(t, r_, a.borderRightColor),
        this.borderBottomColor = aA(t, a_, a.borderBottomColor),
        this.borderLeftColor = aA(t, i_, a.borderLeftColor),
        this.borderTopLeftRadius = aA(t, l_, a.borderTopLeftRadius),
        this.borderTopRightRadius = aA(t, s_, a.borderTopRightRadius),
        this.borderBottomRightRadius = aA(t, u_, a.borderBottomRightRadius),
        this.borderBottomLeftRadius = aA(t, c_, a.borderBottomLeftRadius),
        this.borderTopStyle = aA(t, o_, a.borderTopStyle),
        this.borderRightStyle = aA(t, f_, a.borderRightStyle),
        this.borderBottomStyle = aA(t, B_, a.borderBottomStyle),
        this.borderLeftStyle = aA(t, h_, a.borderLeftStyle),
        this.borderTopWidth = aA(t, g_, a.borderTopWidth),
        this.borderRightWidth = aA(t, d_, a.borderRightWidth),
        this.borderBottomWidth = aA(t, Q_, a.borderBottomWidth),
        this.borderLeftWidth = aA(t, w_, a.borderLeftWidth),
        this.boxShadow = aA(t, oH, a.boxShadow),
        this.color = aA(t, C_, a.color),
        this.direction = aA(t, U_, a.direction),
        this.display = aA(t, p_, a.display),
        this.float = aA(t, v_, a.cssFloat),
        this.fontFamily = aA(t, eH, a.fontFamily),
        this.fontSize = aA(t, tH, a.fontSize),
        this.fontStyle = aA(t, aH, a.fontStyle),
        this.fontVariant = aA(t, rH, a.fontVariant),
        this.fontWeight = aA(t, nH, a.fontWeight),
        this.letterSpacing = aA(t, y_, a.letterSpacing),
        this.lineBreak = aA(t, F_, a.lineBreak),
        this.lineHeight = aA(t, E_, a.lineHeight),
        this.listStyleImage = aA(t, __, a.listStyleImage),
        this.listStylePosition = aA(t, H_, a.listStylePosition),
        this.listStyleType = aA(t, vh, a.listStyleType),
        this.marginTop = aA(t, b_, a.marginTop),
        this.marginRight = aA(t, S_, a.marginRight),
        this.marginBottom = aA(t, T_, a.marginBottom),
        this.marginLeft = aA(t, x_, a.marginLeft),
        this.opacity = aA(t, P_, a.opacity);
        var u = aA(t, D_, a.overflow);
        this.overflowX = u[0],
        this.overflowY = u[u.length > 1 ? 1 : 0],
        this.overflowWrap = aA(t, L_, a.overflowWrap),
        this.paddingTop = aA(t, O_, a.paddingTop),
        this.paddingRight = aA(t, M_, a.paddingRight),
        this.paddingBottom = aA(t, I_, a.paddingBottom),
        this.paddingLeft = aA(t, K_, a.paddingLeft),
        this.paintOrder = aA(t, fH, a.paintOrder),
        this.position = aA(t, N_, a.position),
        this.textAlign = aA(t, R_, a.textAlign),
        this.textDecorationColor = aA(t, $_, (n = a.textDecorationColor) !== null && n !== void 0 ? n : a.color),
        this.textDecorationLine = aA(t, AH, (s = a.textDecorationLine) !== null && s !== void 0 ? s : a.textDecoration),
        this.textShadow = aA(t, G_, a.textShadow),
        this.textTransform = aA(t, V_, a.textTransform),
        this.transform = aA(t, z_, a.transform),
        this.transformOrigin = aA(t, j_, a.transformOrigin),
        this.visibility = aA(t, Z_, a.visibility),
        this.webkitTextStrokeColor = aA(t, BH, a.webkitTextStrokeColor),
        this.webkitTextStrokeWidth = aA(t, hH, a.webkitTextStrokeWidth),
        this.wordBreak = aA(t, q_, a.wordBreak),
        this.zIndex = aA(t, W_, a.zIndex)
    }
    return i.prototype.isVisible = function() {
        return this.display > 0 && this.opacity > 0 && this.visibility === 0
    }
    ,
    i.prototype.isTransparent = function() {
        return Mr(this.backgroundColor)
    }
    ,
    i.prototype.isTransformed = function() {
        return this.transform !== null
    }
    ,
    i.prototype.isPositioned = function() {
        return this.position !== 0
    }
    ,
    i.prototype.isPositionedWithZIndex = function() {
        return this.isPositioned() && !this.zIndex.auto
    }
    ,
    i.prototype.isFloating = function() {
        return this.float !== 0
    }
    ,
    i.prototype.isInlineLevel = function() {
        return me(this.display, 4) || me(this.display, 33554432) || me(this.display, 268435456) || me(this.display, 536870912) || me(this.display, 67108864) || me(this.display, 134217728)
    }
    ,
    i
}
)()
  , dH = (function() {
    function i(t, a) {
        this.content = aA(t, iH, a.content),
        this.quotes = aA(t, cH, a.quotes)
    }
    return i
}
)()
  , jw = (function() {
    function i(t, a) {
        this.counterIncrement = aA(t, lH, a.counterIncrement),
        this.counterReset = aA(t, sH, a.counterReset)
    }
    return i
}
)()
  , aA = function(i, t, a) {
    var n = new GU
      , s = a !== null && typeof a < "u" ? a.toString() : t.initialValue;
    n.write(s);
    var u = new VU(n.read());
    switch (t.type) {
    case 2:
        var o = u.parseComponentValue();
        return t.parse(i, XA(o) ? o.value : t.initialValue);
    case 0:
        return t.parse(i, u.parseComponentValue());
    case 1:
        return t.parse(i, u.parseComponentValues());
    case 4:
        return u.parseComponentValue();
    case 3:
        switch (t.format) {
        case "angle":
            return Yc.parse(i, u.parseComponentValue());
        case "color":
            return Or.parse(i, u.parseComponentValue());
        case "image":
            return ng.parse(i, u.parseComponentValue());
        case "length":
            var B = u.parseComponentValue();
            return Nr(B) ? B : Oe;
        case "length-percentage":
            var h = u.parseComponentValue();
            return we(h) ? h : Oe;
        case "time":
            return ip.parse(i, u.parseComponentValue())
        }
        break
    }
}
  , QH = "data-html2canvas-debug"
  , wH = function(i) {
    var t = i.getAttribute(QH);
    switch (t) {
    case "all":
        return 1;
    case "clone":
        return 2;
    case "parse":
        return 3;
    case "render":
        return 4;
    default:
        return 0
    }
}
  , yh = function(i, t) {
    var a = wH(i);
    return a === 1 || t === a
}
  , hn = (function() {
    function i(t, a) {
        if (this.context = t,
        this.textNodes = [],
        this.elements = [],
        this.flags = 0,
        yh(a, 3))
            debugger ;this.styles = new gH(t,window.getComputedStyle(a, null)),
        _h(a) && (this.styles.animationDuration.some(function(n) {
            return n > 0
        }) && (a.style.animationDuration = "0s"),
        this.styles.transform !== null && (a.style.transform = "none")),
        this.bounds = zc(this.context, a),
        yh(a, 4) && (this.flags |= 16)
    }
    return i
}
)()
  , CH = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA="
  , Zw = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , Wl = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var uc = 0; uc < Zw.length; uc++)
    Wl[Zw.charCodeAt(uc)] = uc;
var UH = function(i) {
    var t = i.length * .75, a = i.length, n, s = 0, u, o, B, h;
    i[i.length - 1] === "=" && (t--,
    i[i.length - 2] === "=" && t--);
    var g = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(t) : new Array(t)
      , d = Array.isArray(g) ? g : new Uint8Array(g);
    for (n = 0; n < a; n += 4)
        u = Wl[i.charCodeAt(n)],
        o = Wl[i.charCodeAt(n + 1)],
        B = Wl[i.charCodeAt(n + 2)],
        h = Wl[i.charCodeAt(n + 3)],
        d[s++] = u << 2 | o >> 4,
        d[s++] = (o & 15) << 4 | B >> 2,
        d[s++] = (B & 3) << 6 | h & 63;
    return g
}
  , pH = function(i) {
    for (var t = i.length, a = [], n = 0; n < t; n += 2)
        a.push(i[n + 1] << 8 | i[n]);
    return a
}
  , mH = function(i) {
    for (var t = i.length, a = [], n = 0; n < t; n += 4)
        a.push(i[n + 3] << 24 | i[n + 2] << 16 | i[n + 1] << 8 | i[n]);
    return a
}
  , va = 5
  , rg = 11
  , OB = 2
  , vH = rg - va
  , lp = 65536 >> va
  , yH = 1 << va
  , MB = yH - 1
  , FH = 1024 >> va
  , EH = lp + FH
  , _H = EH
  , HH = 32
  , bH = _H + HH
  , SH = 65536 >> rg
  , TH = 1 << vH
  , xH = TH - 1
  , qw = function(i, t, a) {
    return i.slice ? i.slice(t, a) : new Uint16Array(Array.prototype.slice.call(i, t, a))
}
  , DH = function(i, t, a) {
    return i.slice ? i.slice(t, a) : new Uint32Array(Array.prototype.slice.call(i, t, a))
}
  , LH = function(i, t) {
    var a = UH(i)
      , n = Array.isArray(a) ? mH(a) : new Uint32Array(a)
      , s = Array.isArray(a) ? pH(a) : new Uint16Array(a)
      , u = 24
      , o = qw(s, u / 2, n[4] / 2)
      , B = n[5] === 2 ? qw(s, (u + n[4]) / 2) : DH(n, Math.ceil((u + n[4]) / 4));
    return new OH(n[0],n[1],n[2],n[3],o,B)
}
  , OH = (function() {
    function i(t, a, n, s, u, o) {
        this.initialValue = t,
        this.errorValue = a,
        this.highStart = n,
        this.highValueIndex = s,
        this.index = u,
        this.data = o
    }
    return i.prototype.get = function(t) {
        var a;
        if (t >= 0) {
            if (t < 55296 || t > 56319 && t <= 65535)
                return a = this.index[t >> va],
                a = (a << OB) + (t & MB),
                this.data[a];
            if (t <= 65535)
                return a = this.index[lp + (t - 55296 >> va)],
                a = (a << OB) + (t & MB),
                this.data[a];
            if (t < this.highStart)
                return a = bH - SH + (t >> rg),
                a = this.index[a],
                a += t >> va & xH,
                a = this.index[a],
                a = (a << OB) + (t & MB),
                this.data[a];
            if (t <= 1114111)
                return this.data[this.highValueIndex]
        }
        return this.errorValue
    }
    ,
    i
}
)()
  , Ww = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , MH = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var cc = 0; cc < Ww.length; cc++)
    MH[Ww.charCodeAt(cc)] = cc;
var IH = 1, IB = 2, KB = 3, Pw = 4, $w = 5, KH = 7, AC = 8, RB = 9, NB = 10, eC = 11, tC = 12, nC = 13, rC = 14, GB = 15, RH = function(i) {
    for (var t = [], a = 0, n = i.length; a < n; ) {
        var s = i.charCodeAt(a++);
        if (s >= 55296 && s <= 56319 && a < n) {
            var u = i.charCodeAt(a++);
            (u & 64512) === 56320 ? t.push(((s & 1023) << 10) + (u & 1023) + 65536) : (t.push(s),
            a--)
        } else
            t.push(s)
    }
    return t
}, NH = function() {
    for (var i = [], t = 0; t < arguments.length; t++)
        i[t] = arguments[t];
    if (String.fromCodePoint)
        return String.fromCodePoint.apply(String, i);
    var a = i.length;
    if (!a)
        return "";
    for (var n = [], s = -1, u = ""; ++s < a; ) {
        var o = i[s];
        o <= 65535 ? n.push(o) : (o -= 65536,
        n.push((o >> 10) + 55296, o % 1024 + 56320)),
        (s + 1 === a || n.length > 16384) && (u += String.fromCharCode.apply(String, n),
        n.length = 0)
    }
    return u
}, GH = LH(CH), Lt = "×", VB = "÷", VH = function(i) {
    return GH.get(i)
}, zH = function(i, t, a) {
    var n = a - 2
      , s = t[n]
      , u = t[a - 1]
      , o = t[a];
    if (u === IB && o === KB)
        return Lt;
    if (u === IB || u === KB || u === Pw || o === IB || o === KB || o === Pw)
        return VB;
    if (u === AC && [AC, RB, eC, tC].indexOf(o) !== -1 || (u === eC || u === RB) && (o === RB || o === NB) || (u === tC || u === NB) && o === NB || o === nC || o === $w || o === KH || u === IH)
        return Lt;
    if (u === nC && o === rC) {
        for (; s === $w; )
            s = t[--n];
        if (s === rC)
            return Lt
    }
    if (u === GB && o === GB) {
        for (var B = 0; s === GB; )
            B++,
            s = t[--n];
        if (B % 2 === 0)
            return Lt
    }
    return VB
}, XH = function(i) {
    var t = RH(i)
      , a = t.length
      , n = 0
      , s = 0
      , u = t.map(VH);
    return {
        next: function() {
            if (n >= a)
                return {
                    done: !0,
                    value: null
                };
            for (var o = Lt; n < a && (o = zH(t, u, ++n)) === Lt; )
                ;
            if (o !== Lt || n === a) {
                var B = NH.apply(null, t.slice(s, n));
                return s = n,
                {
                    value: B,
                    done: !1
                }
            }
            return {
                done: !0,
                value: null
            }
        }
    }
}, YH = function(i) {
    for (var t = XH(i), a = [], n; !(n = t.next()).done; )
        n.value && a.push(n.value.slice());
    return a
}, JH = function(i) {
    var t = 123;
    if (i.createRange) {
        var a = i.createRange();
        if (a.getBoundingClientRect) {
            var n = i.createElement("boundtest");
            n.style.height = t + "px",
            n.style.display = "block",
            i.body.appendChild(n),
            a.selectNode(n);
            var s = a.getBoundingClientRect()
              , u = Math.round(s.height);
            if (i.body.removeChild(n),
            u === t)
                return !0
        }
    }
    return !1
}, kH = function(i) {
    var t = i.createElement("boundtest");
    t.style.width = "50px",
    t.style.display = "block",
    t.style.fontSize = "12px",
    t.style.letterSpacing = "0px",
    t.style.wordSpacing = "0px",
    i.body.appendChild(t);
    var a = i.createRange();
    t.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
    var n = t.firstChild
      , s = Xc(n.data).map(function(h) {
        return oe(h)
    })
      , u = 0
      , o = {}
      , B = s.every(function(h, g) {
        a.setStart(n, u),
        a.setEnd(n, u + h.length);
        var d = a.getBoundingClientRect();
        u += h.length;
        var w = d.x > o.x || d.y > o.y;
        return o = d,
        g === 0 ? !0 : w
    });
    return i.body.removeChild(t),
    B
}, jH = function() {
    return typeof new Image().crossOrigin < "u"
}, ZH = function() {
    return typeof new XMLHttpRequest().responseType == "string"
}, qH = function(i) {
    var t = new Image
      , a = i.createElement("canvas")
      , n = a.getContext("2d");
    if (!n)
        return !1;
    t.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
        n.drawImage(t, 0, 0),
        a.toDataURL()
    } catch {
        return !1
    }
    return !0
}, aC = function(i) {
    return i[0] === 0 && i[1] === 255 && i[2] === 0 && i[3] === 255
}, WH = function(i) {
    var t = i.createElement("canvas")
      , a = 100;
    t.width = a,
    t.height = a;
    var n = t.getContext("2d");
    if (!n)
        return Promise.reject(!1);
    n.fillStyle = "rgb(0, 255, 0)",
    n.fillRect(0, 0, a, a);
    var s = new Image
      , u = t.toDataURL();
    s.src = u;
    var o = Fh(a, a, 0, 0, s);
    return n.fillStyle = "red",
    n.fillRect(0, 0, a, a),
    iC(o).then(function(B) {
        n.drawImage(B, 0, 0);
        var h = n.getImageData(0, 0, a, a).data;
        n.fillStyle = "red",
        n.fillRect(0, 0, a, a);
        var g = i.createElement("div");
        return g.style.backgroundImage = "url(" + u + ")",
        g.style.height = a + "px",
        aC(h) ? iC(Fh(a, a, 0, 0, g)) : Promise.reject(!1)
    }).then(function(B) {
        return n.drawImage(B, 0, 0),
        aC(n.getImageData(0, 0, a, a).data)
    }).catch(function() {
        return !1
    })
}, Fh = function(i, t, a, n, s) {
    var u = "http://www.w3.org/2000/svg"
      , o = document.createElementNS(u, "svg")
      , B = document.createElementNS(u, "foreignObject");
    return o.setAttributeNS(null, "width", i.toString()),
    o.setAttributeNS(null, "height", t.toString()),
    B.setAttributeNS(null, "width", "100%"),
    B.setAttributeNS(null, "height", "100%"),
    B.setAttributeNS(null, "x", a.toString()),
    B.setAttributeNS(null, "y", n.toString()),
    B.setAttributeNS(null, "externalResourcesRequired", "true"),
    o.appendChild(B),
    B.appendChild(s),
    o
}, iC = function(i) {
    return new Promise(function(t, a) {
        var n = new Image;
        n.onload = function() {
            return t(n)
        }
        ,
        n.onerror = a,
        n.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(i))
    }
    )
}, De = {
    get SUPPORT_RANGE_BOUNDS() {
        var i = JH(document);
        return Object.defineProperty(De, "SUPPORT_RANGE_BOUNDS", {
            value: i
        }),
        i
    },
    get SUPPORT_WORD_BREAKING() {
        var i = De.SUPPORT_RANGE_BOUNDS && kH(document);
        return Object.defineProperty(De, "SUPPORT_WORD_BREAKING", {
            value: i
        }),
        i
    },
    get SUPPORT_SVG_DRAWING() {
        var i = qH(document);
        return Object.defineProperty(De, "SUPPORT_SVG_DRAWING", {
            value: i
        }),
        i
    },
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
        var i = typeof Array.from == "function" && typeof window.fetch == "function" ? WH(document) : Promise.resolve(!1);
        return Object.defineProperty(De, "SUPPORT_FOREIGNOBJECT_DRAWING", {
            value: i
        }),
        i
    },
    get SUPPORT_CORS_IMAGES() {
        var i = jH();
        return Object.defineProperty(De, "SUPPORT_CORS_IMAGES", {
            value: i
        }),
        i
    },
    get SUPPORT_RESPONSE_TYPE() {
        var i = ZH();
        return Object.defineProperty(De, "SUPPORT_RESPONSE_TYPE", {
            value: i
        }),
        i
    },
    get SUPPORT_CORS_XHR() {
        var i = "withCredentials"in new XMLHttpRequest;
        return Object.defineProperty(De, "SUPPORT_CORS_XHR", {
            value: i
        }),
        i
    },
    get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
        var i = !!(typeof Intl < "u" && Intl.Segmenter);
        return Object.defineProperty(De, "SUPPORT_NATIVE_TEXT_SEGMENTATION", {
            value: i
        }),
        i
    }
}, as = (function() {
    function i(t, a) {
        this.text = t,
        this.bounds = a
    }
    return i
}
)(), PH = function(i, t, a, n) {
    var s = eb(t, a)
      , u = []
      , o = 0;
    return s.forEach(function(B) {
        if (a.textDecorationLine.length || B.trim().length > 0)
            if (De.SUPPORT_RANGE_BOUNDS) {
                var h = lC(n, o, B.length).getClientRects();
                if (h.length > 1) {
                    var g = ag(B)
                      , d = 0;
                    g.forEach(function(C) {
                        u.push(new as(C,Yn.fromDOMRectList(i, lC(n, d + o, C.length).getClientRects()))),
                        d += C.length
                    })
                } else
                    u.push(new as(B,Yn.fromDOMRectList(i, h)))
            } else {
                var w = n.splitText(B.length);
                u.push(new as(B,$H(i, n))),
                n = w
            }
        else
            De.SUPPORT_RANGE_BOUNDS || (n = n.splitText(B.length));
        o += B.length
    }),
    u
}, $H = function(i, t) {
    var a = t.ownerDocument;
    if (a) {
        var n = a.createElement("html2canvaswrapper");
        n.appendChild(t.cloneNode(!0));
        var s = t.parentNode;
        if (s) {
            s.replaceChild(n, t);
            var u = zc(i, n);
            return n.firstChild && s.replaceChild(n.firstChild, n),
            u
        }
    }
    return Yn.EMPTY
}, lC = function(i, t, a) {
    var n = i.ownerDocument;
    if (!n)
        throw new Error("Node has no owner document");
    var s = n.createRange();
    return s.setStart(i, t),
    s.setEnd(i, t + a),
    s
}, ag = function(i) {
    if (De.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
        var t = new Intl.Segmenter(void 0,{
            granularity: "grapheme"
        });
        return Array.from(t.segment(i)).map(function(a) {
            return a.segment
        })
    }
    return YH(i)
}, Ab = function(i, t) {
    if (De.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
        var a = new Intl.Segmenter(void 0,{
            granularity: "word"
        });
        return Array.from(a.segment(i)).map(function(n) {
            return n.segment
        })
    }
    return nb(i, t)
}, eb = function(i, t) {
    return t.letterSpacing !== 0 ? ag(i) : Ab(i, t)
}, tb = [32, 160, 4961, 65792, 65793, 4153, 4241], nb = function(i, t) {
    for (var a = SE(i, {
        lineBreak: t.lineBreak,
        wordBreak: t.overflowWrap === "break-word" ? "break-word" : t.wordBreak
    }), n = [], s, u = function() {
        if (s.value) {
            var o = s.value.slice()
              , B = Xc(o)
              , h = "";
            B.forEach(function(g) {
                tb.indexOf(g) === -1 ? h += oe(g) : (h.length && n.push(h),
                n.push(oe(g)),
                h = "")
            }),
            h.length && n.push(h)
        }
    }; !(s = a.next()).done; )
        u();
    return n
}, rb = (function() {
    function i(t, a, n) {
        this.text = ab(a.data, n.textTransform),
        this.textBounds = PH(t, this.text, n, a)
    }
    return i
}
)(), ab = function(i, t) {
    switch (t) {
    case 1:
        return i.toLowerCase();
    case 3:
        return i.replace(ib, lb);
    case 2:
        return i.toUpperCase();
    default:
        return i
    }
}, ib = /(^|\s|:|-|\(|\))([a-z])/g, lb = function(i, t, a) {
    return i.length > 0 ? t + a.toUpperCase() : i
}, sp = (function(i) {
    Zt(t, i);
    function t(a, n) {
        var s = i.call(this, a, n) || this;
        return s.src = n.currentSrc || n.src,
        s.intrinsicWidth = n.naturalWidth,
        s.intrinsicHeight = n.naturalHeight,
        s.context.cache.addImage(s.src),
        s
    }
    return t
}
)(hn), up = (function(i) {
    Zt(t, i);
    function t(a, n) {
        var s = i.call(this, a, n) || this;
        return s.canvas = n,
        s.intrinsicWidth = n.width,
        s.intrinsicHeight = n.height,
        s
    }
    return t
}
)(hn), cp = (function(i) {
    Zt(t, i);
    function t(a, n) {
        var s = i.call(this, a, n) || this
          , u = new XMLSerializer
          , o = zc(a, n);
        return n.setAttribute("width", o.width + "px"),
        n.setAttribute("height", o.height + "px"),
        s.svg = "data:image/svg+xml," + encodeURIComponent(u.serializeToString(n)),
        s.intrinsicWidth = n.width.baseVal.value,
        s.intrinsicHeight = n.height.baseVal.value,
        s.context.cache.addImage(s.svg),
        s
    }
    return t
}
)(hn), op = (function(i) {
    Zt(t, i);
    function t(a, n) {
        var s = i.call(this, a, n) || this;
        return s.value = n.value,
        s
    }
    return t
}
)(hn), Eh = (function(i) {
    Zt(t, i);
    function t(a, n) {
        var s = i.call(this, a, n) || this;
        return s.start = n.start,
        s.reversed = typeof n.reversed == "boolean" && n.reversed === !0,
        s
    }
    return t
}
)(hn), sb = [{
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
}], ub = [{
    type: 16,
    flags: 0,
    number: 50
}], cb = function(i) {
    return i.width > i.height ? new Yn(i.left + (i.width - i.height) / 2,i.top,i.height,i.height) : i.width < i.height ? new Yn(i.left,i.top + (i.height - i.width) / 2,i.width,i.width) : i
}, ob = function(i) {
    var t = i.type === fb ? new Array(i.value.length + 1).join("•") : i.value;
    return t.length === 0 ? i.placeholder || "" : t
}, Dc = "checkbox", Lc = "radio", fb = "password", sC = 707406591, ig = (function(i) {
    Zt(t, i);
    function t(a, n) {
        var s = i.call(this, a, n) || this;
        switch (s.type = n.type.toLowerCase(),
        s.checked = n.checked,
        s.value = ob(n),
        (s.type === Dc || s.type === Lc) && (s.styles.backgroundColor = 3739148031,
        s.styles.borderTopColor = s.styles.borderRightColor = s.styles.borderBottomColor = s.styles.borderLeftColor = 2779096575,
        s.styles.borderTopWidth = s.styles.borderRightWidth = s.styles.borderBottomWidth = s.styles.borderLeftWidth = 1,
        s.styles.borderTopStyle = s.styles.borderRightStyle = s.styles.borderBottomStyle = s.styles.borderLeftStyle = 1,
        s.styles.backgroundClip = [0],
        s.styles.backgroundOrigin = [0],
        s.bounds = cb(s.bounds)),
        s.type) {
        case Dc:
            s.styles.borderTopRightRadius = s.styles.borderTopLeftRadius = s.styles.borderBottomRightRadius = s.styles.borderBottomLeftRadius = sb;
            break;
        case Lc:
            s.styles.borderTopRightRadius = s.styles.borderTopLeftRadius = s.styles.borderBottomRightRadius = s.styles.borderBottomLeftRadius = ub;
            break
        }
        return s
    }
    return t
}
)(hn), fp = (function(i) {
    Zt(t, i);
    function t(a, n) {
        var s = i.call(this, a, n) || this
          , u = n.options[n.selectedIndex || 0];
        return s.value = u && u.text || "",
        s
    }
    return t
}
)(hn), Bp = (function(i) {
    Zt(t, i);
    function t(a, n) {
        var s = i.call(this, a, n) || this;
        return s.value = n.value,
        s
    }
    return t
}
)(hn), hp = (function(i) {
    Zt(t, i);
    function t(a, n) {
        var s = i.call(this, a, n) || this;
        s.src = n.src,
        s.width = parseInt(n.width, 10) || 0,
        s.height = parseInt(n.height, 10) || 0,
        s.backgroundColor = s.styles.backgroundColor;
        try {
            if (n.contentWindow && n.contentWindow.document && n.contentWindow.document.documentElement) {
                s.tree = dp(a, n.contentWindow.document.documentElement);
                var u = n.contentWindow.document.documentElement ? ns(a, getComputedStyle(n.contentWindow.document.documentElement).backgroundColor) : Vn.TRANSPARENT
                  , o = n.contentWindow.document.body ? ns(a, getComputedStyle(n.contentWindow.document.body).backgroundColor) : Vn.TRANSPARENT;
                s.backgroundColor = Mr(u) ? Mr(o) ? s.styles.backgroundColor : o : u
            }
        } catch {}
        return s
    }
    return t
}
)(hn), Bb = ["OL", "UL", "MENU"], pc = function(i, t, a, n) {
    for (var s = t.firstChild, u = void 0; s; s = u)
        if (u = s.nextSibling,
        Qp(s) && s.data.trim().length > 0)
            a.textNodes.push(new rb(i,s,a.styles));
        else if (vi(s))
            if (pp(s) && s.assignedNodes)
                s.assignedNodes().forEach(function(B) {
                    return pc(i, B, a, n)
                });
            else {
                var o = gp(i, s);
                o.styles.isVisible() && (hb(s, o, n) ? o.flags |= 4 : gb(o.styles) && (o.flags |= 2),
                Bb.indexOf(s.tagName) !== -1 && (o.flags |= 8),
                a.elements.push(o),
                s.slot,
                s.shadowRoot ? pc(i, s.shadowRoot, o, n) : !Oc(s) && !wp(s) && !Mc(s) && pc(i, s, o, n))
            }
}, gp = function(i, t) {
    return Hh(t) ? new sp(i,t) : Cp(t) ? new up(i,t) : wp(t) ? new cp(i,t) : db(t) ? new op(i,t) : Qb(t) ? new Eh(i,t) : wb(t) ? new ig(i,t) : Mc(t) ? new fp(i,t) : Oc(t) ? new Bp(i,t) : Up(t) ? new hp(i,t) : new hn(i,t)
}, dp = function(i, t) {
    var a = gp(i, t);
    return a.flags |= 4,
    pc(i, t, a, a),
    a
}, hb = function(i, t, a) {
    return t.styles.isPositionedWithZIndex() || t.styles.opacity < 1 || t.styles.isTransformed() || lg(i) && a.styles.isTransparent()
}, gb = function(i) {
    return i.isPositioned() || i.isFloating()
}, Qp = function(i) {
    return i.nodeType === Node.TEXT_NODE
}, vi = function(i) {
    return i.nodeType === Node.ELEMENT_NODE
}, _h = function(i) {
    return vi(i) && typeof i.style < "u" && !mc(i)
}, mc = function(i) {
    return typeof i.className == "object"
}, db = function(i) {
    return i.tagName === "LI"
}, Qb = function(i) {
    return i.tagName === "OL"
}, wb = function(i) {
    return i.tagName === "INPUT"
}, Cb = function(i) {
    return i.tagName === "HTML"
}, wp = function(i) {
    return i.tagName === "svg"
}, lg = function(i) {
    return i.tagName === "BODY"
}, Cp = function(i) {
    return i.tagName === "CANVAS"
}, uC = function(i) {
    return i.tagName === "VIDEO"
}, Hh = function(i) {
    return i.tagName === "IMG"
}, Up = function(i) {
    return i.tagName === "IFRAME"
}, cC = function(i) {
    return i.tagName === "STYLE"
}, Ub = function(i) {
    return i.tagName === "SCRIPT"
}, Oc = function(i) {
    return i.tagName === "TEXTAREA"
}, Mc = function(i) {
    return i.tagName === "SELECT"
}, pp = function(i) {
    return i.tagName === "SLOT"
}, oC = function(i) {
    return i.tagName.indexOf("-") > 0
}, pb = (function() {
    function i() {
        this.counters = {}
    }
    return i.prototype.getCounterValue = function(t) {
        var a = this.counters[t];
        return a && a.length ? a[a.length - 1] : 1
    }
    ,
    i.prototype.getCounterValues = function(t) {
        var a = this.counters[t];
        return a || []
    }
    ,
    i.prototype.pop = function(t) {
        var a = this;
        t.forEach(function(n) {
            return a.counters[n].pop()
        })
    }
    ,
    i.prototype.parse = function(t) {
        var a = this
          , n = t.counterIncrement
          , s = t.counterReset
          , u = !0;
        n !== null && n.forEach(function(B) {
            var h = a.counters[B.counter];
            h && B.increment !== 0 && (u = !1,
            h.length || h.push(1),
            h[Math.max(0, h.length - 1)] += B.increment)
        });
        var o = [];
        return u && s.forEach(function(B) {
            var h = a.counters[B.counter];
            o.push(B.counter),
            h || (h = a.counters[B.counter] = []),
            h.push(B.reset)
        }),
        o
    }
    ,
    i
}
)(), fC = {
    integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, BC = {
    integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"]
}, mb = {
    integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"]
}, vb = {
    integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"]
}, di = function(i, t, a, n, s, u) {
    return i < t || i > a ? ws(i, s, u.length > 0) : n.integers.reduce(function(o, B, h) {
        for (; i >= B; )
            i -= B,
            o += n.values[h];
        return o
    }, "") + u
}, mp = function(i, t, a, n) {
    var s = "";
    do
        a || i--,
        s = n(i) + s,
        i /= t;
    while (i * t >= t);
    return s
}, ce = function(i, t, a, n, s) {
    var u = a - t + 1;
    return (i < 0 ? "-" : "") + (mp(Math.abs(i), u, n, function(o) {
        return oe(Math.floor(o % u) + t)
    }) + s)
}, Ba = function(i, t, a) {
    a === void 0 && (a = ". ");
    var n = t.length;
    return mp(Math.abs(i), n, !1, function(s) {
        return t[Math.floor(s % n)]
    }) + a
}, Ci = 1, yr = 2, Fr = 4, Pl = 8, In = function(i, t, a, n, s, u) {
    if (i < -9999 || i > 9999)
        return ws(i, 4, s.length > 0);
    var o = Math.abs(i)
      , B = s;
    if (o === 0)
        return t[0] + B;
    for (var h = 0; o > 0 && h <= 4; h++) {
        var g = o % 10;
        g === 0 && me(u, Ci) && B !== "" ? B = t[g] + B : g > 1 || g === 1 && h === 0 || g === 1 && h === 1 && me(u, yr) || g === 1 && h === 1 && me(u, Fr) && i > 100 || g === 1 && h > 1 && me(u, Pl) ? B = t[g] + (h > 0 ? a[h - 1] : "") + B : g === 1 && h > 0 && (B = a[h - 1] + B),
        o = Math.floor(o / 10)
    }
    return (i < 0 ? n : "") + B
}, hC = "十百千萬", gC = "拾佰仟萬", dC = "マイナス", zB = "마이너스", ws = function(i, t, a) {
    var n = a ? ". " : ""
      , s = a ? "、" : ""
      , u = a ? ", " : ""
      , o = a ? " " : "";
    switch (t) {
    case 0:
        return "•" + o;
    case 1:
        return "◦" + o;
    case 2:
        return "◾" + o;
    case 5:
        var B = ce(i, 48, 57, !0, n);
        return B.length < 4 ? "0" + B : B;
    case 4:
        return Ba(i, "〇一二三四五六七八九", s);
    case 6:
        return di(i, 1, 3999, fC, 3, n).toLowerCase();
    case 7:
        return di(i, 1, 3999, fC, 3, n);
    case 8:
        return ce(i, 945, 969, !1, n);
    case 9:
        return ce(i, 97, 122, !1, n);
    case 10:
        return ce(i, 65, 90, !1, n);
    case 11:
        return ce(i, 1632, 1641, !0, n);
    case 12:
    case 49:
        return di(i, 1, 9999, BC, 3, n);
    case 35:
        return di(i, 1, 9999, BC, 3, n).toLowerCase();
    case 13:
        return ce(i, 2534, 2543, !0, n);
    case 14:
    case 30:
        return ce(i, 6112, 6121, !0, n);
    case 15:
        return Ba(i, "子丑寅卯辰巳午未申酉戌亥", s);
    case 16:
        return Ba(i, "甲乙丙丁戊己庚辛壬癸", s);
    case 17:
    case 48:
        return In(i, "零一二三四五六七八九", hC, "負", s, yr | Fr | Pl);
    case 47:
        return In(i, "零壹貳參肆伍陸柒捌玖", gC, "負", s, Ci | yr | Fr | Pl);
    case 42:
        return In(i, "零一二三四五六七八九", hC, "负", s, yr | Fr | Pl);
    case 41:
        return In(i, "零壹贰叁肆伍陆柒捌玖", gC, "负", s, Ci | yr | Fr | Pl);
    case 26:
        return In(i, "〇一二三四五六七八九", "十百千万", dC, s, 0);
    case 25:
        return In(i, "零壱弐参四伍六七八九", "拾百千万", dC, s, Ci | yr | Fr);
    case 31:
        return In(i, "영일이삼사오육칠팔구", "십백천만", zB, u, Ci | yr | Fr);
    case 33:
        return In(i, "零一二三四五六七八九", "十百千萬", zB, u, 0);
    case 32:
        return In(i, "零壹貳參四五六七八九", "拾百千", zB, u, Ci | yr | Fr);
    case 18:
        return ce(i, 2406, 2415, !0, n);
    case 20:
        return di(i, 1, 19999, vb, 3, n);
    case 21:
        return ce(i, 2790, 2799, !0, n);
    case 22:
        return ce(i, 2662, 2671, !0, n);
    case 22:
        return di(i, 1, 10999, mb, 3, n);
    case 23:
        return Ba(i, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
        return Ba(i, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
        return ce(i, 3302, 3311, !0, n);
    case 28:
        return Ba(i, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", s);
    case 29:
        return Ba(i, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", s);
    case 34:
        return ce(i, 3792, 3801, !0, n);
    case 37:
        return ce(i, 6160, 6169, !0, n);
    case 38:
        return ce(i, 4160, 4169, !0, n);
    case 39:
        return ce(i, 2918, 2927, !0, n);
    case 40:
        return ce(i, 1776, 1785, !0, n);
    case 43:
        return ce(i, 3046, 3055, !0, n);
    case 44:
        return ce(i, 3174, 3183, !0, n);
    case 45:
        return ce(i, 3664, 3673, !0, n);
    case 46:
        return ce(i, 3872, 3881, !0, n);
    default:
        return ce(i, 48, 57, !0, n)
    }
}, vp = "data-html2canvas-ignore", QC = (function() {
    function i(t, a, n) {
        if (this.context = t,
        this.options = n,
        this.scrolledElements = [],
        this.referenceElement = a,
        this.counters = new pb,
        this.quoteDepth = 0,
        !a.ownerDocument)
            throw new Error("Cloned element does not have an owner document");
        this.documentElement = this.cloneNode(a.ownerDocument.documentElement, !1)
    }
    return i.prototype.toIFrame = function(t, a) {
        var n = this
          , s = yb(t, a);
        if (!s.contentWindow)
            return Promise.reject("Unable to find iframe window");
        var u = t.defaultView.pageXOffset
          , o = t.defaultView.pageYOffset
          , B = s.contentWindow
          , h = B.document
          , g = _b(s).then(function() {
            return Ye(n, void 0, void 0, function() {
                var d, w;
                return Re(this, function(C) {
                    switch (C.label) {
                    case 0:
                        return this.scrolledElements.forEach(Tb),
                        B && (B.scrollTo(a.left, a.top),
                        /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (B.scrollY !== a.top || B.scrollX !== a.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"),
                        this.context.windowBounds = this.context.windowBounds.add(B.scrollX - a.left, B.scrollY - a.top, 0, 0))),
                        d = this.options.onclone,
                        w = this.clonedReferenceElement,
                        typeof w > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : h.fonts && h.fonts.ready ? [4, h.fonts.ready] : [3, 2];
                    case 1:
                        C.sent(),
                        C.label = 2;
                    case 2:
                        return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, Eb(h)] : [3, 4];
                    case 3:
                        C.sent(),
                        C.label = 4;
                    case 4:
                        return typeof d == "function" ? [2, Promise.resolve().then(function() {
                            return d(h, w)
                        }).then(function() {
                            return s
                        })] : [2, s]
                    }
                })
            })
        });
        return h.open(),
        h.write(bb(document.doctype) + "<html></html>"),
        Sb(this.referenceElement.ownerDocument, u, o),
        h.replaceChild(h.adoptNode(this.documentElement), h.documentElement),
        h.close(),
        g
    }
    ,
    i.prototype.createElementClone = function(t) {
        if (yh(t, 2))
            debugger ;if (Cp(t))
            return this.createCanvasClone(t);
        if (uC(t))
            return this.createVideoClone(t);
        if (cC(t))
            return this.createStyleClone(t);
        var a = t.cloneNode(!1);
        return Hh(a) && (Hh(t) && t.currentSrc && t.currentSrc !== t.src && (a.src = t.currentSrc,
        a.srcset = ""),
        a.loading === "lazy" && (a.loading = "eager")),
        oC(a) ? this.createCustomElementClone(a) : a
    }
    ,
    i.prototype.createCustomElementClone = function(t) {
        var a = document.createElement("html2canvascustomelement");
        return XB(t.style, a),
        a
    }
    ,
    i.prototype.createStyleClone = function(t) {
        try {
            var a = t.sheet;
            if (a && a.cssRules) {
                var n = [].slice.call(a.cssRules, 0).reduce(function(u, o) {
                    return o && typeof o.cssText == "string" ? u + o.cssText : u
                }, "")
                  , s = t.cloneNode(!1);
                return s.textContent = n,
                s
            }
        } catch (u) {
            if (this.context.logger.error("Unable to access cssRules property", u),
            u.name !== "SecurityError")
                throw u
        }
        return t.cloneNode(!1)
    }
    ,
    i.prototype.createCanvasClone = function(t) {
        var a;
        if (this.options.inlineImages && t.ownerDocument) {
            var n = t.ownerDocument.createElement("img");
            try {
                return n.src = t.toDataURL(),
                n
            } catch {
                this.context.logger.info("Unable to inline canvas contents, canvas is tainted", t)
            }
        }
        var s = t.cloneNode(!1);
        try {
            s.width = t.width,
            s.height = t.height;
            var u = t.getContext("2d")
              , o = s.getContext("2d");
            if (o)
                if (!this.options.allowTaint && u)
                    o.putImageData(u.getImageData(0, 0, t.width, t.height), 0, 0);
                else {
                    var B = (a = t.getContext("webgl2")) !== null && a !== void 0 ? a : t.getContext("webgl");
                    if (B) {
                        var h = B.getContextAttributes();
                        h?.preserveDrawingBuffer === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", t)
                    }
                    o.drawImage(t, 0, 0)
                }
            return s
        } catch {
            this.context.logger.info("Unable to clone canvas as it is tainted", t)
        }
        return s
    }
    ,
    i.prototype.createVideoClone = function(t) {
        var a = t.ownerDocument.createElement("canvas");
        a.width = t.offsetWidth,
        a.height = t.offsetHeight;
        var n = a.getContext("2d");
        try {
            return n && (n.drawImage(t, 0, 0, a.width, a.height),
            this.options.allowTaint || n.getImageData(0, 0, a.width, a.height)),
            a
        } catch {
            this.context.logger.info("Unable to clone video as it is tainted", t)
        }
        var s = t.ownerDocument.createElement("canvas");
        return s.width = t.offsetWidth,
        s.height = t.offsetHeight,
        s
    }
    ,
    i.prototype.appendChildNode = function(t, a, n) {
        (!vi(a) || !Ub(a) && !a.hasAttribute(vp) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(a))) && (!this.options.copyStyles || !vi(a) || !cC(a)) && t.appendChild(this.cloneNode(a, n))
    }
    ,
    i.prototype.cloneChildNodes = function(t, a, n) {
        for (var s = this, u = t.shadowRoot ? t.shadowRoot.firstChild : t.firstChild; u; u = u.nextSibling)
            if (vi(u) && pp(u) && typeof u.assignedNodes == "function") {
                var o = u.assignedNodes();
                o.length && o.forEach(function(B) {
                    return s.appendChildNode(a, B, n)
                })
            } else
                this.appendChildNode(a, u, n)
    }
    ,
    i.prototype.cloneNode = function(t, a) {
        if (Qp(t))
            return document.createTextNode(t.data);
        if (!t.ownerDocument)
            return t.cloneNode(!1);
        var n = t.ownerDocument.defaultView;
        if (n && vi(t) && (_h(t) || mc(t))) {
            var s = this.createElementClone(t);
            s.style.transitionProperty = "none";
            var u = n.getComputedStyle(t)
              , o = n.getComputedStyle(t, ":before")
              , B = n.getComputedStyle(t, ":after");
            this.referenceElement === t && _h(s) && (this.clonedReferenceElement = s),
            lg(s) && Lb(s);
            var h = this.counters.parse(new jw(this.context,u))
              , g = this.resolvePseudoContent(t, s, o, is.BEFORE);
            oC(t) && (a = !0),
            uC(t) || this.cloneChildNodes(t, s, a),
            g && s.insertBefore(g, s.firstChild);
            var d = this.resolvePseudoContent(t, s, B, is.AFTER);
            return d && s.appendChild(d),
            this.counters.pop(h),
            (u && (this.options.copyStyles || mc(t)) && !Up(t) || a) && XB(u, s),
            (t.scrollTop !== 0 || t.scrollLeft !== 0) && this.scrolledElements.push([s, t.scrollLeft, t.scrollTop]),
            (Oc(t) || Mc(t)) && (Oc(s) || Mc(s)) && (s.value = t.value),
            s
        }
        return t.cloneNode(!1)
    }
    ,
    i.prototype.resolvePseudoContent = function(t, a, n, s) {
        var u = this;
        if (n) {
            var o = n.content
              , B = a.ownerDocument;
            if (!(!B || !o || o === "none" || o === "-moz-alt-content" || n.display === "none")) {
                this.counters.parse(new jw(this.context,n));
                var h = new dH(this.context,n)
                  , g = B.createElement("html2canvaspseudoelement");
                XB(n, g),
                h.content.forEach(function(w) {
                    if (w.type === 0)
                        g.appendChild(B.createTextNode(w.value));
                    else if (w.type === 22) {
                        var C = B.createElement("img");
                        C.src = w.value,
                        C.style.opacity = "1",
                        g.appendChild(C)
                    } else if (w.type === 18) {
                        if (w.name === "attr") {
                            var m = w.values.filter(XA);
                            m.length && g.appendChild(B.createTextNode(t.getAttribute(m[0].value) || ""))
                        } else if (w.name === "counter") {
                            var v = w.values.filter(Li)
                              , p = v[0]
                              , b = v[1];
                            if (p && XA(p)) {
                                var E = u.counters.getCounterValue(p.value)
                                  , S = b && XA(b) ? vh.parse(u.context, b.value) : 3;
                                g.appendChild(B.createTextNode(ws(E, S, !1)))
                            }
                        } else if (w.name === "counters") {
                            var O = w.values.filter(Li)
                              , p = O[0]
                              , G = O[1]
                              , b = O[2];
                            if (p && XA(p)) {
                                var x = u.counters.getCounterValues(p.value)
                                  , L = b && XA(b) ? vh.parse(u.context, b.value) : 3
                                  , K = G && G.type === 0 ? G.value : ""
                                  , k = x.map(function(uA) {
                                    return ws(uA, L, !1)
                                }).join(K);
                                g.appendChild(B.createTextNode(k))
                            }
                        }
                    } else if (w.type === 20)
                        switch (w.value) {
                        case "open-quote":
                            g.appendChild(B.createTextNode(kw(h.quotes, u.quoteDepth++, !0)));
                            break;
                        case "close-quote":
                            g.appendChild(B.createTextNode(kw(h.quotes, --u.quoteDepth, !1)));
                            break;
                        default:
                            g.appendChild(B.createTextNode(w.value))
                        }
                }),
                g.className = bh + " " + Sh;
                var d = s === is.BEFORE ? " " + bh : " " + Sh;
                return mc(a) ? a.className.baseValue += d : a.className += d,
                g
            }
        }
    }
    ,
    i.destroy = function(t) {
        return t.parentNode ? (t.parentNode.removeChild(t),
        !0) : !1
    }
    ,
    i
}
)(), is;
(function(i) {
    i[i.BEFORE = 0] = "BEFORE",
    i[i.AFTER = 1] = "AFTER"
}
)(is || (is = {}));
var yb = function(i, t) {
    var a = i.createElement("iframe");
    return a.className = "html2canvas-container",
    a.style.visibility = "hidden",
    a.style.position = "fixed",
    a.style.left = "-10000px",
    a.style.top = "0px",
    a.style.border = "0",
    a.width = t.width.toString(),
    a.height = t.height.toString(),
    a.scrolling = "no",
    a.setAttribute(vp, "true"),
    i.body.appendChild(a),
    a
}, Fb = function(i) {
    return new Promise(function(t) {
        if (i.complete) {
            t();
            return
        }
        if (!i.src) {
            t();
            return
        }
        i.onload = t,
        i.onerror = t
    }
    )
}, Eb = function(i) {
    return Promise.all([].slice.call(i.images, 0).map(Fb))
}, _b = function(i) {
    return new Promise(function(t, a) {
        var n = i.contentWindow;
        if (!n)
            return a("No window assigned for iframe");
        var s = n.document;
        n.onload = i.onload = function() {
            n.onload = i.onload = null;
            var u = setInterval(function() {
                s.body.childNodes.length > 0 && s.readyState === "complete" && (clearInterval(u),
                t(i))
            }, 50)
        }
    }
    )
}, Hb = ["all", "d", "content"], XB = function(i, t) {
    for (var a = i.length - 1; a >= 0; a--) {
        var n = i.item(a);
        Hb.indexOf(n) === -1 && t.style.setProperty(n, i.getPropertyValue(n))
    }
    return t
}, bb = function(i) {
    var t = "";
    return i && (t += "<!DOCTYPE ",
    i.name && (t += i.name),
    i.internalSubset && (t += i.internalSubset),
    i.publicId && (t += '"' + i.publicId + '"'),
    i.systemId && (t += '"' + i.systemId + '"'),
    t += ">"),
    t
}, Sb = function(i, t, a) {
    i && i.defaultView && (t !== i.defaultView.pageXOffset || a !== i.defaultView.pageYOffset) && i.defaultView.scrollTo(t, a)
}, Tb = function(i) {
    var t = i[0]
      , a = i[1]
      , n = i[2];
    t.scrollLeft = a,
    t.scrollTop = n
}, xb = ":before", Db = ":after", bh = "___html2canvas___pseudoelement_before", Sh = "___html2canvas___pseudoelement_after", wC = `{
    content: "" !important;
    display: none !important;
}`, Lb = function(i) {
    Ob(i, "." + bh + xb + wC + `
         .` + Sh + Db + wC)
}, Ob = function(i, t) {
    var a = i.ownerDocument;
    if (a) {
        var n = a.createElement("style");
        n.textContent = t,
        i.appendChild(n)
    }
}, yp = (function() {
    function i() {}
    return i.getOrigin = function(t) {
        var a = i._link;
        return a ? (a.href = t,
        a.href = a.href,
        a.protocol + a.hostname + a.port) : "about:blank"
    }
    ,
    i.isSameOrigin = function(t) {
        return i.getOrigin(t) === i._origin
    }
    ,
    i.setContext = function(t) {
        i._link = t.document.createElement("a"),
        i._origin = i.getOrigin(t.location.href)
    }
    ,
    i._origin = "about:blank",
    i
}
)(), Mb = (function() {
    function i(t, a) {
        this.context = t,
        this._options = a,
        this._cache = {}
    }
    return i.prototype.addImage = function(t) {
        var a = Promise.resolve();
        return this.has(t) || (JB(t) || Nb(t)) && (this._cache[t] = this.loadImage(t)).catch(function() {}),
        a
    }
    ,
    i.prototype.match = function(t) {
        return this._cache[t]
    }
    ,
    i.prototype.loadImage = function(t) {
        return Ye(this, void 0, void 0, function() {
            var a, n, s, u, o = this;
            return Re(this, function(B) {
                switch (B.label) {
                case 0:
                    return a = yp.isSameOrigin(t),
                    n = !YB(t) && this._options.useCORS === !0 && De.SUPPORT_CORS_IMAGES && !a,
                    s = !YB(t) && !a && !JB(t) && typeof this._options.proxy == "string" && De.SUPPORT_CORS_XHR && !n,
                    !a && this._options.allowTaint === !1 && !YB(t) && !JB(t) && !s && !n ? [2] : (u = t,
                    s ? [4, this.proxy(u)] : [3, 2]);
                case 1:
                    u = B.sent(),
                    B.label = 2;
                case 2:
                    return this.context.logger.debug("Added image " + t.substring(0, 256)),
                    [4, new Promise(function(h, g) {
                        var d = new Image;
                        d.onload = function() {
                            return h(d)
                        }
                        ,
                        d.onerror = g,
                        (Gb(u) || n) && (d.crossOrigin = "anonymous"),
                        d.src = u,
                        d.complete === !0 && setTimeout(function() {
                            return h(d)
                        }, 500),
                        o._options.imageTimeout > 0 && setTimeout(function() {
                            return g("Timed out (" + o._options.imageTimeout + "ms) loading image")
                        }, o._options.imageTimeout)
                    }
                    )];
                case 3:
                    return [2, B.sent()]
                }
            })
        })
    }
    ,
    i.prototype.has = function(t) {
        return typeof this._cache[t] < "u"
    }
    ,
    i.prototype.keys = function() {
        return Promise.resolve(Object.keys(this._cache))
    }
    ,
    i.prototype.proxy = function(t) {
        var a = this
          , n = this._options.proxy;
        if (!n)
            throw new Error("No proxy defined");
        var s = t.substring(0, 256);
        return new Promise(function(u, o) {
            var B = De.SUPPORT_RESPONSE_TYPE ? "blob" : "text"
              , h = new XMLHttpRequest;
            h.onload = function() {
                if (h.status === 200)
                    if (B === "text")
                        u(h.response);
                    else {
                        var w = new FileReader;
                        w.addEventListener("load", function() {
                            return u(w.result)
                        }, !1),
                        w.addEventListener("error", function(C) {
                            return o(C)
                        }, !1),
                        w.readAsDataURL(h.response)
                    }
                else
                    o("Failed to proxy resource " + s + " with status code " + h.status)
            }
            ,
            h.onerror = o;
            var g = n.indexOf("?") > -1 ? "&" : "?";
            if (h.open("GET", "" + n + g + "url=" + encodeURIComponent(t) + "&responseType=" + B),
            B !== "text" && h instanceof XMLHttpRequest && (h.responseType = B),
            a._options.imageTimeout) {
                var d = a._options.imageTimeout;
                h.timeout = d,
                h.ontimeout = function() {
                    return o("Timed out (" + d + "ms) proxying " + s)
                }
            }
            h.send()
        }
        )
    }
    ,
    i
}
)(), Ib = /^data:image\/svg\+xml/i, Kb = /^data:image\/.*;base64,/i, Rb = /^data:image\/.*/i, Nb = function(i) {
    return De.SUPPORT_SVG_DRAWING || !Vb(i)
}, YB = function(i) {
    return Rb.test(i)
}, Gb = function(i) {
    return Kb.test(i)
}, JB = function(i) {
    return i.substr(0, 4) === "blob"
}, Vb = function(i) {
    return i.substr(-3).toLowerCase() === "svg" || Ib.test(i)
}, nA = (function() {
    function i(t, a) {
        this.type = 0,
        this.x = t,
        this.y = a
    }
    return i.prototype.add = function(t, a) {
        return new i(this.x + t,this.y + a)
    }
    ,
    i
}
)(), Qi = function(i, t, a) {
    return new nA(i.x + (t.x - i.x) * a,i.y + (t.y - i.y) * a)
}, oc = (function() {
    function i(t, a, n, s) {
        this.type = 1,
        this.start = t,
        this.startControl = a,
        this.endControl = n,
        this.end = s
    }
    return i.prototype.subdivide = function(t, a) {
        var n = Qi(this.start, this.startControl, t)
          , s = Qi(this.startControl, this.endControl, t)
          , u = Qi(this.endControl, this.end, t)
          , o = Qi(n, s, t)
          , B = Qi(s, u, t)
          , h = Qi(o, B, t);
        return a ? new i(this.start,n,o,h) : new i(h,B,u,this.end)
    }
    ,
    i.prototype.add = function(t, a) {
        return new i(this.start.add(t, a),this.startControl.add(t, a),this.endControl.add(t, a),this.end.add(t, a))
    }
    ,
    i.prototype.reverse = function() {
        return new i(this.end,this.endControl,this.startControl,this.start)
    }
    ,
    i
}
)(), Mt = function(i) {
    return i.type === 1
}, zb = (function() {
    function i(t) {
        var a = t.styles
          , n = t.bounds
          , s = ql(a.borderTopLeftRadius, n.width, n.height)
          , u = s[0]
          , o = s[1]
          , B = ql(a.borderTopRightRadius, n.width, n.height)
          , h = B[0]
          , g = B[1]
          , d = ql(a.borderBottomRightRadius, n.width, n.height)
          , w = d[0]
          , C = d[1]
          , m = ql(a.borderBottomLeftRadius, n.width, n.height)
          , v = m[0]
          , p = m[1]
          , b = [];
        b.push((u + h) / n.width),
        b.push((v + w) / n.width),
        b.push((o + p) / n.height),
        b.push((g + C) / n.height);
        var E = Math.max.apply(Math, b);
        E > 1 && (u /= E,
        o /= E,
        h /= E,
        g /= E,
        w /= E,
        C /= E,
        v /= E,
        p /= E);
        var S = n.width - h
          , O = n.height - C
          , G = n.width - w
          , x = n.height - p
          , L = a.borderTopWidth
          , K = a.borderRightWidth
          , k = a.borderBottomWidth
          , N = a.borderLeftWidth
          , iA = jA(a.paddingTop, t.bounds.width)
          , uA = jA(a.paddingRight, t.bounds.width)
          , oA = jA(a.paddingBottom, t.bounds.width)
          , lA = jA(a.paddingLeft, t.bounds.width);
        this.topLeftBorderDoubleOuterBox = u > 0 || o > 0 ? $A(n.left + N / 3, n.top + L / 3, u - N / 3, o - L / 3, KA.TOP_LEFT) : new nA(n.left + N / 3,n.top + L / 3),
        this.topRightBorderDoubleOuterBox = u > 0 || o > 0 ? $A(n.left + S, n.top + L / 3, h - K / 3, g - L / 3, KA.TOP_RIGHT) : new nA(n.left + n.width - K / 3,n.top + L / 3),
        this.bottomRightBorderDoubleOuterBox = w > 0 || C > 0 ? $A(n.left + G, n.top + O, w - K / 3, C - k / 3, KA.BOTTOM_RIGHT) : new nA(n.left + n.width - K / 3,n.top + n.height - k / 3),
        this.bottomLeftBorderDoubleOuterBox = v > 0 || p > 0 ? $A(n.left + N / 3, n.top + x, v - N / 3, p - k / 3, KA.BOTTOM_LEFT) : new nA(n.left + N / 3,n.top + n.height - k / 3),
        this.topLeftBorderDoubleInnerBox = u > 0 || o > 0 ? $A(n.left + N * 2 / 3, n.top + L * 2 / 3, u - N * 2 / 3, o - L * 2 / 3, KA.TOP_LEFT) : new nA(n.left + N * 2 / 3,n.top + L * 2 / 3),
        this.topRightBorderDoubleInnerBox = u > 0 || o > 0 ? $A(n.left + S, n.top + L * 2 / 3, h - K * 2 / 3, g - L * 2 / 3, KA.TOP_RIGHT) : new nA(n.left + n.width - K * 2 / 3,n.top + L * 2 / 3),
        this.bottomRightBorderDoubleInnerBox = w > 0 || C > 0 ? $A(n.left + G, n.top + O, w - K * 2 / 3, C - k * 2 / 3, KA.BOTTOM_RIGHT) : new nA(n.left + n.width - K * 2 / 3,n.top + n.height - k * 2 / 3),
        this.bottomLeftBorderDoubleInnerBox = v > 0 || p > 0 ? $A(n.left + N * 2 / 3, n.top + x, v - N * 2 / 3, p - k * 2 / 3, KA.BOTTOM_LEFT) : new nA(n.left + N * 2 / 3,n.top + n.height - k * 2 / 3),
        this.topLeftBorderStroke = u > 0 || o > 0 ? $A(n.left + N / 2, n.top + L / 2, u - N / 2, o - L / 2, KA.TOP_LEFT) : new nA(n.left + N / 2,n.top + L / 2),
        this.topRightBorderStroke = u > 0 || o > 0 ? $A(n.left + S, n.top + L / 2, h - K / 2, g - L / 2, KA.TOP_RIGHT) : new nA(n.left + n.width - K / 2,n.top + L / 2),
        this.bottomRightBorderStroke = w > 0 || C > 0 ? $A(n.left + G, n.top + O, w - K / 2, C - k / 2, KA.BOTTOM_RIGHT) : new nA(n.left + n.width - K / 2,n.top + n.height - k / 2),
        this.bottomLeftBorderStroke = v > 0 || p > 0 ? $A(n.left + N / 2, n.top + x, v - N / 2, p - k / 2, KA.BOTTOM_LEFT) : new nA(n.left + N / 2,n.top + n.height - k / 2),
        this.topLeftBorderBox = u > 0 || o > 0 ? $A(n.left, n.top, u, o, KA.TOP_LEFT) : new nA(n.left,n.top),
        this.topRightBorderBox = h > 0 || g > 0 ? $A(n.left + S, n.top, h, g, KA.TOP_RIGHT) : new nA(n.left + n.width,n.top),
        this.bottomRightBorderBox = w > 0 || C > 0 ? $A(n.left + G, n.top + O, w, C, KA.BOTTOM_RIGHT) : new nA(n.left + n.width,n.top + n.height),
        this.bottomLeftBorderBox = v > 0 || p > 0 ? $A(n.left, n.top + x, v, p, KA.BOTTOM_LEFT) : new nA(n.left,n.top + n.height),
        this.topLeftPaddingBox = u > 0 || o > 0 ? $A(n.left + N, n.top + L, Math.max(0, u - N), Math.max(0, o - L), KA.TOP_LEFT) : new nA(n.left + N,n.top + L),
        this.topRightPaddingBox = h > 0 || g > 0 ? $A(n.left + Math.min(S, n.width - K), n.top + L, S > n.width + K ? 0 : Math.max(0, h - K), Math.max(0, g - L), KA.TOP_RIGHT) : new nA(n.left + n.width - K,n.top + L),
        this.bottomRightPaddingBox = w > 0 || C > 0 ? $A(n.left + Math.min(G, n.width - N), n.top + Math.min(O, n.height - k), Math.max(0, w - K), Math.max(0, C - k), KA.BOTTOM_RIGHT) : new nA(n.left + n.width - K,n.top + n.height - k),
        this.bottomLeftPaddingBox = v > 0 || p > 0 ? $A(n.left + N, n.top + Math.min(x, n.height - k), Math.max(0, v - N), Math.max(0, p - k), KA.BOTTOM_LEFT) : new nA(n.left + N,n.top + n.height - k),
        this.topLeftContentBox = u > 0 || o > 0 ? $A(n.left + N + lA, n.top + L + iA, Math.max(0, u - (N + lA)), Math.max(0, o - (L + iA)), KA.TOP_LEFT) : new nA(n.left + N + lA,n.top + L + iA),
        this.topRightContentBox = h > 0 || g > 0 ? $A(n.left + Math.min(S, n.width + N + lA), n.top + L + iA, S > n.width + N + lA ? 0 : h - N + lA, g - (L + iA), KA.TOP_RIGHT) : new nA(n.left + n.width - (K + uA),n.top + L + iA),
        this.bottomRightContentBox = w > 0 || C > 0 ? $A(n.left + Math.min(G, n.width - (N + lA)), n.top + Math.min(O, n.height + L + iA), Math.max(0, w - (K + uA)), C - (k + oA), KA.BOTTOM_RIGHT) : new nA(n.left + n.width - (K + uA),n.top + n.height - (k + oA)),
        this.bottomLeftContentBox = v > 0 || p > 0 ? $A(n.left + N + lA, n.top + x, Math.max(0, v - (N + lA)), p - (k + oA), KA.BOTTOM_LEFT) : new nA(n.left + N + lA,n.top + n.height - (k + oA))
    }
    return i
}
)(), KA;
(function(i) {
    i[i.TOP_LEFT = 0] = "TOP_LEFT",
    i[i.TOP_RIGHT = 1] = "TOP_RIGHT",
    i[i.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT",
    i[i.BOTTOM_LEFT = 3] = "BOTTOM_LEFT"
}
)(KA || (KA = {}));
var $A = function(i, t, a, n, s) {
    var u = 4 * ((Math.sqrt(2) - 1) / 3)
      , o = a * u
      , B = n * u
      , h = i + a
      , g = t + n;
    switch (s) {
    case KA.TOP_LEFT:
        return new oc(new nA(i,g),new nA(i,g - B),new nA(h - o,t),new nA(h,t));
    case KA.TOP_RIGHT:
        return new oc(new nA(i,t),new nA(i + o,t),new nA(h,g - B),new nA(h,g));
    case KA.BOTTOM_RIGHT:
        return new oc(new nA(h,t),new nA(h,t + B),new nA(i + o,g),new nA(i,g));
    case KA.BOTTOM_LEFT:
    default:
        return new oc(new nA(h,g),new nA(h - o,g),new nA(i,t + B),new nA(i,t))
    }
}
  , Ic = function(i) {
    return [i.topLeftBorderBox, i.topRightBorderBox, i.bottomRightBorderBox, i.bottomLeftBorderBox]
}
  , Xb = function(i) {
    return [i.topLeftContentBox, i.topRightContentBox, i.bottomRightContentBox, i.bottomLeftContentBox]
}
  , Kc = function(i) {
    return [i.topLeftPaddingBox, i.topRightPaddingBox, i.bottomRightPaddingBox, i.bottomLeftPaddingBox]
}
  , Yb = (function() {
    function i(t, a, n) {
        this.offsetX = t,
        this.offsetY = a,
        this.matrix = n,
        this.type = 0,
        this.target = 6
    }
    return i
}
)()
  , fc = (function() {
    function i(t, a) {
        this.path = t,
        this.target = a,
        this.type = 1
    }
    return i
}
)()
  , Jb = (function() {
    function i(t) {
        this.opacity = t,
        this.type = 2,
        this.target = 6
    }
    return i
}
)()
  , kb = function(i) {
    return i.type === 0
}
  , Fp = function(i) {
    return i.type === 1
}
  , jb = function(i) {
    return i.type === 2
}
  , CC = function(i, t) {
    return i.length === t.length ? i.some(function(a, n) {
        return a === t[n]
    }) : !1
}
  , Zb = function(i, t, a, n, s) {
    return i.map(function(u, o) {
        switch (o) {
        case 0:
            return u.add(t, a);
        case 1:
            return u.add(t + n, a);
        case 2:
            return u.add(t + n, a + s);
        case 3:
            return u.add(t, a + s)
        }
        return u
    })
}
  , Ep = (function() {
    function i(t) {
        this.element = t,
        this.inlineLevel = [],
        this.nonInlineLevel = [],
        this.negativeZIndex = [],
        this.zeroOrAutoZIndexOrTransformedOrOpacity = [],
        this.positiveZIndex = [],
        this.nonPositionedFloats = [],
        this.nonPositionedInlineLevel = []
    }
    return i
}
)()
  , _p = (function() {
    function i(t, a) {
        if (this.container = t,
        this.parent = a,
        this.effects = [],
        this.curves = new zb(this.container),
        this.container.styles.opacity < 1 && this.effects.push(new Jb(this.container.styles.opacity)),
        this.container.styles.transform !== null) {
            var n = this.container.bounds.left + this.container.styles.transformOrigin[0].number
              , s = this.container.bounds.top + this.container.styles.transformOrigin[1].number
              , u = this.container.styles.transform;
            this.effects.push(new Yb(n,s,u))
        }
        if (this.container.styles.overflowX !== 0) {
            var o = Ic(this.curves)
              , B = Kc(this.curves);
            CC(o, B) ? this.effects.push(new fc(o,6)) : (this.effects.push(new fc(o,2)),
            this.effects.push(new fc(B,4)))
        }
    }
    return i.prototype.getEffects = function(t) {
        for (var a = [2, 3].indexOf(this.container.styles.position) === -1, n = this.parent, s = this.effects.slice(0); n; ) {
            var u = n.effects.filter(function(h) {
                return !Fp(h)
            });
            if (a || n.container.styles.position !== 0 || !n.parent) {
                if (s.unshift.apply(s, u),
                a = [2, 3].indexOf(n.container.styles.position) === -1,
                n.container.styles.overflowX !== 0) {
                    var o = Ic(n.curves)
                      , B = Kc(n.curves);
                    CC(o, B) || s.unshift(new fc(B,6))
                }
            } else
                s.unshift.apply(s, u);
            n = n.parent
        }
        return s.filter(function(h) {
            return me(h.target, t)
        })
    }
    ,
    i
}
)()
  , Th = function(i, t, a, n) {
    i.container.elements.forEach(function(s) {
        var u = me(s.flags, 4)
          , o = me(s.flags, 2)
          , B = new _p(s,i);
        me(s.styles.display, 2048) && n.push(B);
        var h = me(s.flags, 8) ? [] : n;
        if (u || o) {
            var g = u || s.styles.isPositioned() ? a : t
              , d = new Ep(B);
            if (s.styles.isPositioned() || s.styles.opacity < 1 || s.styles.isTransformed()) {
                var w = s.styles.zIndex.order;
                if (w < 0) {
                    var C = 0;
                    g.negativeZIndex.some(function(v, p) {
                        return w > v.element.container.styles.zIndex.order ? (C = p,
                        !1) : C > 0
                    }),
                    g.negativeZIndex.splice(C, 0, d)
                } else if (w > 0) {
                    var m = 0;
                    g.positiveZIndex.some(function(v, p) {
                        return w >= v.element.container.styles.zIndex.order ? (m = p + 1,
                        !1) : m > 0
                    }),
                    g.positiveZIndex.splice(m, 0, d)
                } else
                    g.zeroOrAutoZIndexOrTransformedOrOpacity.push(d)
            } else
                s.styles.isFloating() ? g.nonPositionedFloats.push(d) : g.nonPositionedInlineLevel.push(d);
            Th(B, d, u ? d : a, h)
        } else
            s.styles.isInlineLevel() ? t.inlineLevel.push(B) : t.nonInlineLevel.push(B),
            Th(B, t, a, h);
        me(s.flags, 8) && Hp(s, h)
    })
}
  , Hp = function(i, t) {
    for (var a = i instanceof Eh ? i.start : 1, n = i instanceof Eh ? i.reversed : !1, s = 0; s < t.length; s++) {
        var u = t[s];
        u.container instanceof op && typeof u.container.value == "number" && u.container.value !== 0 && (a = u.container.value),
        u.listValue = ws(a, u.container.styles.listStyleType, !0),
        a += n ? -1 : 1
    }
}
  , qb = function(i) {
    var t = new _p(i,null)
      , a = new Ep(t)
      , n = [];
    return Th(t, a, a, n),
    Hp(t.container, n),
    a
}
  , UC = function(i, t) {
    switch (t) {
    case 0:
        return Nt(i.topLeftBorderBox, i.topLeftPaddingBox, i.topRightBorderBox, i.topRightPaddingBox);
    case 1:
        return Nt(i.topRightBorderBox, i.topRightPaddingBox, i.bottomRightBorderBox, i.bottomRightPaddingBox);
    case 2:
        return Nt(i.bottomRightBorderBox, i.bottomRightPaddingBox, i.bottomLeftBorderBox, i.bottomLeftPaddingBox);
    default:
        return Nt(i.bottomLeftBorderBox, i.bottomLeftPaddingBox, i.topLeftBorderBox, i.topLeftPaddingBox)
    }
}
  , Wb = function(i, t) {
    switch (t) {
    case 0:
        return Nt(i.topLeftBorderBox, i.topLeftBorderDoubleOuterBox, i.topRightBorderBox, i.topRightBorderDoubleOuterBox);
    case 1:
        return Nt(i.topRightBorderBox, i.topRightBorderDoubleOuterBox, i.bottomRightBorderBox, i.bottomRightBorderDoubleOuterBox);
    case 2:
        return Nt(i.bottomRightBorderBox, i.bottomRightBorderDoubleOuterBox, i.bottomLeftBorderBox, i.bottomLeftBorderDoubleOuterBox);
    default:
        return Nt(i.bottomLeftBorderBox, i.bottomLeftBorderDoubleOuterBox, i.topLeftBorderBox, i.topLeftBorderDoubleOuterBox)
    }
}
  , Pb = function(i, t) {
    switch (t) {
    case 0:
        return Nt(i.topLeftBorderDoubleInnerBox, i.topLeftPaddingBox, i.topRightBorderDoubleInnerBox, i.topRightPaddingBox);
    case 1:
        return Nt(i.topRightBorderDoubleInnerBox, i.topRightPaddingBox, i.bottomRightBorderDoubleInnerBox, i.bottomRightPaddingBox);
    case 2:
        return Nt(i.bottomRightBorderDoubleInnerBox, i.bottomRightPaddingBox, i.bottomLeftBorderDoubleInnerBox, i.bottomLeftPaddingBox);
    default:
        return Nt(i.bottomLeftBorderDoubleInnerBox, i.bottomLeftPaddingBox, i.topLeftBorderDoubleInnerBox, i.topLeftPaddingBox)
    }
}
  , $b = function(i, t) {
    switch (t) {
    case 0:
        return Bc(i.topLeftBorderStroke, i.topRightBorderStroke);
    case 1:
        return Bc(i.topRightBorderStroke, i.bottomRightBorderStroke);
    case 2:
        return Bc(i.bottomRightBorderStroke, i.bottomLeftBorderStroke);
    default:
        return Bc(i.bottomLeftBorderStroke, i.topLeftBorderStroke)
    }
}
  , Bc = function(i, t) {
    var a = [];
    return Mt(i) ? a.push(i.subdivide(.5, !1)) : a.push(i),
    Mt(t) ? a.push(t.subdivide(.5, !0)) : a.push(t),
    a
}
  , Nt = function(i, t, a, n) {
    var s = [];
    return Mt(i) ? s.push(i.subdivide(.5, !1)) : s.push(i),
    Mt(a) ? s.push(a.subdivide(.5, !0)) : s.push(a),
    Mt(n) ? s.push(n.subdivide(.5, !0).reverse()) : s.push(n),
    Mt(t) ? s.push(t.subdivide(.5, !1).reverse()) : s.push(t),
    s
}
  , bp = function(i) {
    var t = i.bounds
      , a = i.styles;
    return t.add(a.borderLeftWidth, a.borderTopWidth, -(a.borderRightWidth + a.borderLeftWidth), -(a.borderTopWidth + a.borderBottomWidth))
}
  , Rc = function(i) {
    var t = i.styles
      , a = i.bounds
      , n = jA(t.paddingLeft, a.width)
      , s = jA(t.paddingRight, a.width)
      , u = jA(t.paddingTop, a.width)
      , o = jA(t.paddingBottom, a.width);
    return a.add(n + t.borderLeftWidth, u + t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth + n + s), -(t.borderTopWidth + t.borderBottomWidth + u + o))
}
  , AS = function(i, t) {
    return i === 0 ? t.bounds : i === 2 ? Rc(t) : bp(t)
}
  , eS = function(i, t) {
    return i === 0 ? t.bounds : i === 2 ? Rc(t) : bp(t)
}
  , kB = function(i, t, a) {
    var n = AS(Ui(i.styles.backgroundOrigin, t), i)
      , s = eS(Ui(i.styles.backgroundClip, t), i)
      , u = tS(Ui(i.styles.backgroundSize, t), a, n)
      , o = u[0]
      , B = u[1]
      , h = ql(Ui(i.styles.backgroundPosition, t), n.width - o, n.height - B)
      , g = nS(Ui(i.styles.backgroundRepeat, t), h, u, n, s)
      , d = Math.round(n.left + h[0])
      , w = Math.round(n.top + h[1]);
    return [g, d, w, o, B]
}
  , wi = function(i) {
    return XA(i) && i.value === _i.AUTO
}
  , hc = function(i) {
    return typeof i == "number"
}
  , tS = function(i, t, a) {
    var n = t[0]
      , s = t[1]
      , u = t[2]
      , o = i[0]
      , B = i[1];
    if (!o)
        return [0, 0];
    if (we(o) && B && we(B))
        return [jA(o, a.width), jA(B, a.height)];
    var h = hc(u);
    if (XA(o) && (o.value === _i.CONTAIN || o.value === _i.COVER)) {
        if (hc(u)) {
            var g = a.width / a.height;
            return g < u != (o.value === _i.COVER) ? [a.width, a.width / u] : [a.height * u, a.height]
        }
        return [a.width, a.height]
    }
    var d = hc(n)
      , w = hc(s)
      , C = d || w;
    if (wi(o) && (!B || wi(B))) {
        if (d && w)
            return [n, s];
        if (!h && !C)
            return [a.width, a.height];
        if (C && h) {
            var m = d ? n : s * u
              , v = w ? s : n / u;
            return [m, v]
        }
        var p = d ? n : a.width
          , b = w ? s : a.height;
        return [p, b]
    }
    if (h) {
        var E = 0
          , S = 0;
        return we(o) ? E = jA(o, a.width) : we(B) && (S = jA(B, a.height)),
        wi(o) ? E = S * u : (!B || wi(B)) && (S = E / u),
        [E, S]
    }
    var O = null
      , G = null;
    if (we(o) ? O = jA(o, a.width) : B && we(B) && (G = jA(B, a.height)),
    O !== null && (!B || wi(B)) && (G = d && w ? O / n * s : a.height),
    G !== null && wi(o) && (O = d && w ? G / s * n : a.width),
    O !== null && G !== null)
        return [O, G];
    throw new Error("Unable to calculate background-size for element")
}
  , Ui = function(i, t) {
    var a = i[t];
    return typeof a > "u" ? i[0] : a
}
  , nS = function(i, t, a, n, s) {
    var u = t[0]
      , o = t[1]
      , B = a[0]
      , h = a[1];
    switch (i) {
    case 2:
        return [new nA(Math.round(n.left),Math.round(n.top + o)), new nA(Math.round(n.left + n.width),Math.round(n.top + o)), new nA(Math.round(n.left + n.width),Math.round(h + n.top + o)), new nA(Math.round(n.left),Math.round(h + n.top + o))];
    case 3:
        return [new nA(Math.round(n.left + u),Math.round(n.top)), new nA(Math.round(n.left + u + B),Math.round(n.top)), new nA(Math.round(n.left + u + B),Math.round(n.height + n.top)), new nA(Math.round(n.left + u),Math.round(n.height + n.top))];
    case 1:
        return [new nA(Math.round(n.left + u),Math.round(n.top + o)), new nA(Math.round(n.left + u + B),Math.round(n.top + o)), new nA(Math.round(n.left + u + B),Math.round(n.top + o + h)), new nA(Math.round(n.left + u),Math.round(n.top + o + h))];
    default:
        return [new nA(Math.round(s.left),Math.round(s.top)), new nA(Math.round(s.left + s.width),Math.round(s.top)), new nA(Math.round(s.left + s.width),Math.round(s.height + s.top)), new nA(Math.round(s.left),Math.round(s.height + s.top))]
    }
}
  , rS = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
  , pC = "Hidden Text"
  , aS = (function() {
    function i(t) {
        this._data = {},
        this._document = t
    }
    return i.prototype.parseMetrics = function(t, a) {
        var n = this._document.createElement("div")
          , s = this._document.createElement("img")
          , u = this._document.createElement("span")
          , o = this._document.body;
        n.style.visibility = "hidden",
        n.style.fontFamily = t,
        n.style.fontSize = a,
        n.style.margin = "0",
        n.style.padding = "0",
        n.style.whiteSpace = "nowrap",
        o.appendChild(n),
        s.src = rS,
        s.width = 1,
        s.height = 1,
        s.style.margin = "0",
        s.style.padding = "0",
        s.style.verticalAlign = "baseline",
        u.style.fontFamily = t,
        u.style.fontSize = a,
        u.style.margin = "0",
        u.style.padding = "0",
        u.appendChild(this._document.createTextNode(pC)),
        n.appendChild(u),
        n.appendChild(s);
        var B = s.offsetTop - u.offsetTop + 2;
        n.removeChild(u),
        n.appendChild(this._document.createTextNode(pC)),
        n.style.lineHeight = "normal",
        s.style.verticalAlign = "super";
        var h = s.offsetTop - n.offsetTop + 2;
        return o.removeChild(n),
        {
            baseline: B,
            middle: h
        }
    }
    ,
    i.prototype.getMetrics = function(t, a) {
        var n = t + " " + a;
        return typeof this._data[n] > "u" && (this._data[n] = this.parseMetrics(t, a)),
        this._data[n]
    }
    ,
    i
}
)()
  , Sp = (function() {
    function i(t, a) {
        this.context = t,
        this.options = a
    }
    return i
}
)()
  , iS = 1e4
  , lS = (function(i) {
    Zt(t, i);
    function t(a, n) {
        var s = i.call(this, a, n) || this;
        return s._activeEffects = [],
        s.canvas = n.canvas ? n.canvas : document.createElement("canvas"),
        s.ctx = s.canvas.getContext("2d"),
        n.canvas || (s.canvas.width = Math.floor(n.width * n.scale),
        s.canvas.height = Math.floor(n.height * n.scale),
        s.canvas.style.width = n.width + "px",
        s.canvas.style.height = n.height + "px"),
        s.fontMetrics = new aS(document),
        s.ctx.scale(s.options.scale, s.options.scale),
        s.ctx.translate(-n.x, -n.y),
        s.ctx.textBaseline = "bottom",
        s._activeEffects = [],
        s.context.logger.debug("Canvas renderer initialized (" + n.width + "x" + n.height + ") with scale " + n.scale),
        s
    }
    return t.prototype.applyEffects = function(a) {
        for (var n = this; this._activeEffects.length; )
            this.popEffect();
        a.forEach(function(s) {
            return n.applyEffect(s)
        })
    }
    ,
    t.prototype.applyEffect = function(a) {
        this.ctx.save(),
        jb(a) && (this.ctx.globalAlpha = a.opacity),
        kb(a) && (this.ctx.translate(a.offsetX, a.offsetY),
        this.ctx.transform(a.matrix[0], a.matrix[1], a.matrix[2], a.matrix[3], a.matrix[4], a.matrix[5]),
        this.ctx.translate(-a.offsetX, -a.offsetY)),
        Fp(a) && (this.path(a.path),
        this.ctx.clip()),
        this._activeEffects.push(a)
    }
    ,
    t.prototype.popEffect = function() {
        this._activeEffects.pop(),
        this.ctx.restore()
    }
    ,
    t.prototype.renderStack = function(a) {
        return Ye(this, void 0, void 0, function() {
            var n;
            return Re(this, function(s) {
                switch (s.label) {
                case 0:
                    return n = a.element.container.styles,
                    n.isVisible() ? [4, this.renderStackContent(a)] : [3, 2];
                case 1:
                    s.sent(),
                    s.label = 2;
                case 2:
                    return [2]
                }
            })
        })
    }
    ,
    t.prototype.renderNode = function(a) {
        return Ye(this, void 0, void 0, function() {
            return Re(this, function(n) {
                switch (n.label) {
                case 0:
                    if (me(a.container.flags, 16))
                        debugger ;return a.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(a)] : [3, 3];
                case 1:
                    return n.sent(),
                    [4, this.renderNodeContent(a)];
                case 2:
                    n.sent(),
                    n.label = 3;
                case 3:
                    return [2]
                }
            })
        })
    }
    ,
    t.prototype.renderTextWithLetterSpacing = function(a, n, s) {
        var u = this;
        if (n === 0)
            this.ctx.fillText(a.text, a.bounds.left, a.bounds.top + s);
        else {
            var o = ag(a.text);
            o.reduce(function(B, h) {
                return u.ctx.fillText(h, B, a.bounds.top + s),
                B + u.ctx.measureText(h).width
            }, a.bounds.left)
        }
    }
    ,
    t.prototype.createFontStyle = function(a) {
        var n = a.fontVariant.filter(function(o) {
            return o === "normal" || o === "small-caps"
        }).join("")
          , s = fS(a.fontFamily).join(", ")
          , u = ps(a.fontSize) ? "" + a.fontSize.number + a.fontSize.unit : a.fontSize.number + "px";
        return [[a.fontStyle, n, a.fontWeight, u, s].join(" "), s, u]
    }
    ,
    t.prototype.renderTextNode = function(a, n) {
        return Ye(this, void 0, void 0, function() {
            var s, u, o, B, h, g, d, w, C = this;
            return Re(this, function(m) {
                return s = this.createFontStyle(n),
                u = s[0],
                o = s[1],
                B = s[2],
                this.ctx.font = u,
                this.ctx.direction = n.direction === 1 ? "rtl" : "ltr",
                this.ctx.textAlign = "left",
                this.ctx.textBaseline = "alphabetic",
                h = this.fontMetrics.getMetrics(o, B),
                g = h.baseline,
                d = h.middle,
                w = n.paintOrder,
                a.textBounds.forEach(function(v) {
                    w.forEach(function(p) {
                        switch (p) {
                        case 0:
                            C.ctx.fillStyle = _e(n.color),
                            C.renderTextWithLetterSpacing(v, n.letterSpacing, g);
                            var b = n.textShadow;
                            b.length && v.text.trim().length && (b.slice(0).reverse().forEach(function(E) {
                                C.ctx.shadowColor = _e(E.color),
                                C.ctx.shadowOffsetX = E.offsetX.number * C.options.scale,
                                C.ctx.shadowOffsetY = E.offsetY.number * C.options.scale,
                                C.ctx.shadowBlur = E.blur.number,
                                C.renderTextWithLetterSpacing(v, n.letterSpacing, g)
                            }),
                            C.ctx.shadowColor = "",
                            C.ctx.shadowOffsetX = 0,
                            C.ctx.shadowOffsetY = 0,
                            C.ctx.shadowBlur = 0),
                            n.textDecorationLine.length && (C.ctx.fillStyle = _e(n.textDecorationColor || n.color),
                            n.textDecorationLine.forEach(function(E) {
                                switch (E) {
                                case 1:
                                    C.ctx.fillRect(v.bounds.left, Math.round(v.bounds.top + g), v.bounds.width, 1);
                                    break;
                                case 2:
                                    C.ctx.fillRect(v.bounds.left, Math.round(v.bounds.top), v.bounds.width, 1);
                                    break;
                                case 3:
                                    C.ctx.fillRect(v.bounds.left, Math.ceil(v.bounds.top + d), v.bounds.width, 1);
                                    break
                                }
                            }));
                            break;
                        case 1:
                            n.webkitTextStrokeWidth && v.text.trim().length && (C.ctx.strokeStyle = _e(n.webkitTextStrokeColor),
                            C.ctx.lineWidth = n.webkitTextStrokeWidth,
                            C.ctx.lineJoin = window.chrome ? "miter" : "round",
                            C.ctx.strokeText(v.text, v.bounds.left, v.bounds.top + g)),
                            C.ctx.strokeStyle = "",
                            C.ctx.lineWidth = 0,
                            C.ctx.lineJoin = "miter";
                            break
                        }
                    })
                }),
                [2]
            })
        })
    }
    ,
    t.prototype.renderReplacedElement = function(a, n, s) {
        if (s && a.intrinsicWidth > 0 && a.intrinsicHeight > 0) {
            var u = Rc(a)
              , o = Kc(n);
            this.path(o),
            this.ctx.save(),
            this.ctx.clip(),
            this.ctx.drawImage(s, 0, 0, a.intrinsicWidth, a.intrinsicHeight, u.left, u.top, u.width, u.height),
            this.ctx.restore()
        }
    }
    ,
    t.prototype.renderNodeContent = function(a) {
        return Ye(this, void 0, void 0, function() {
            var n, s, u, o, B, h, S, S, g, d, w, C, G, m, v, x, p, b, E, S, O, G, x;
            return Re(this, function(L) {
                switch (L.label) {
                case 0:
                    this.applyEffects(a.getEffects(4)),
                    n = a.container,
                    s = a.curves,
                    u = n.styles,
                    o = 0,
                    B = n.textNodes,
                    L.label = 1;
                case 1:
                    return o < B.length ? (h = B[o],
                    [4, this.renderTextNode(h, u)]) : [3, 4];
                case 2:
                    L.sent(),
                    L.label = 3;
                case 3:
                    return o++,
                    [3, 1];
                case 4:
                    if (!(n instanceof sp))
                        return [3, 8];
                    L.label = 5;
                case 5:
                    return L.trys.push([5, 7, , 8]),
                    [4, this.context.cache.match(n.src)];
                case 6:
                    return S = L.sent(),
                    this.renderReplacedElement(n, s, S),
                    [3, 8];
                case 7:
                    return L.sent(),
                    this.context.logger.error("Error loading image " + n.src),
                    [3, 8];
                case 8:
                    if (n instanceof up && this.renderReplacedElement(n, s, n.canvas),
                    !(n instanceof cp))
                        return [3, 12];
                    L.label = 9;
                case 9:
                    return L.trys.push([9, 11, , 12]),
                    [4, this.context.cache.match(n.svg)];
                case 10:
                    return S = L.sent(),
                    this.renderReplacedElement(n, s, S),
                    [3, 12];
                case 11:
                    return L.sent(),
                    this.context.logger.error("Error loading svg " + n.svg.substring(0, 255)),
                    [3, 12];
                case 12:
                    return n instanceof hp && n.tree ? (g = new t(this.context,{
                        scale: this.options.scale,
                        backgroundColor: n.backgroundColor,
                        x: 0,
                        y: 0,
                        width: n.width,
                        height: n.height
                    }),
                    [4, g.render(n.tree)]) : [3, 14];
                case 13:
                    d = L.sent(),
                    n.width && n.height && this.ctx.drawImage(d, 0, 0, n.width, n.height, n.bounds.left, n.bounds.top, n.bounds.width, n.bounds.height),
                    L.label = 14;
                case 14:
                    if (n instanceof ig && (w = Math.min(n.bounds.width, n.bounds.height),
                    n.type === Dc ? n.checked && (this.ctx.save(),
                    this.path([new nA(n.bounds.left + w * .39363,n.bounds.top + w * .79), new nA(n.bounds.left + w * .16,n.bounds.top + w * .5549), new nA(n.bounds.left + w * .27347,n.bounds.top + w * .44071), new nA(n.bounds.left + w * .39694,n.bounds.top + w * .5649), new nA(n.bounds.left + w * .72983,n.bounds.top + w * .23), new nA(n.bounds.left + w * .84,n.bounds.top + w * .34085), new nA(n.bounds.left + w * .39363,n.bounds.top + w * .79)]),
                    this.ctx.fillStyle = _e(sC),
                    this.ctx.fill(),
                    this.ctx.restore()) : n.type === Lc && n.checked && (this.ctx.save(),
                    this.ctx.beginPath(),
                    this.ctx.arc(n.bounds.left + w / 2, n.bounds.top + w / 2, w / 4, 0, Math.PI * 2, !0),
                    this.ctx.fillStyle = _e(sC),
                    this.ctx.fill(),
                    this.ctx.restore())),
                    sS(n) && n.value.length) {
                        switch (C = this.createFontStyle(u),
                        G = C[0],
                        m = C[1],
                        v = this.fontMetrics.getMetrics(G, m).baseline,
                        this.ctx.font = G,
                        this.ctx.fillStyle = _e(u.color),
                        this.ctx.textBaseline = "alphabetic",
                        this.ctx.textAlign = cS(n.styles.textAlign),
                        x = Rc(n),
                        p = 0,
                        n.styles.textAlign) {
                        case 1:
                            p += x.width / 2;
                            break;
                        case 2:
                            p += x.width;
                            break
                        }
                        b = x.add(p, 0, 0, -x.height / 2 + 1),
                        this.ctx.save(),
                        this.path([new nA(x.left,x.top), new nA(x.left + x.width,x.top), new nA(x.left + x.width,x.top + x.height), new nA(x.left,x.top + x.height)]),
                        this.ctx.clip(),
                        this.renderTextWithLetterSpacing(new as(n.value,b), u.letterSpacing, v),
                        this.ctx.restore(),
                        this.ctx.textBaseline = "alphabetic",
                        this.ctx.textAlign = "left"
                    }
                    if (!me(n.styles.display, 2048))
                        return [3, 20];
                    if (n.styles.listStyleImage === null)
                        return [3, 19];
                    if (E = n.styles.listStyleImage,
                    E.type !== 0)
                        return [3, 18];
                    S = void 0,
                    O = E.url,
                    L.label = 15;
                case 15:
                    return L.trys.push([15, 17, , 18]),
                    [4, this.context.cache.match(O)];
                case 16:
                    return S = L.sent(),
                    this.ctx.drawImage(S, n.bounds.left - (S.width + 10), n.bounds.top),
                    [3, 18];
                case 17:
                    return L.sent(),
                    this.context.logger.error("Error loading list-style-image " + O),
                    [3, 18];
                case 18:
                    return [3, 20];
                case 19:
                    a.listValue && n.styles.listStyleType !== -1 && (G = this.createFontStyle(u)[0],
                    this.ctx.font = G,
                    this.ctx.fillStyle = _e(u.color),
                    this.ctx.textBaseline = "middle",
                    this.ctx.textAlign = "right",
                    x = new Yn(n.bounds.left,n.bounds.top + jA(n.styles.paddingTop, n.bounds.width),n.bounds.width,Yw(u.lineHeight, u.fontSize.number) / 2 + 1),
                    this.renderTextWithLetterSpacing(new as(a.listValue,x), u.letterSpacing, Yw(u.lineHeight, u.fontSize.number) / 2 + 2),
                    this.ctx.textBaseline = "bottom",
                    this.ctx.textAlign = "left"),
                    L.label = 20;
                case 20:
                    return [2]
                }
            })
        })
    }
    ,
    t.prototype.renderStackContent = function(a) {
        return Ye(this, void 0, void 0, function() {
            var n, s, E, u, o, E, B, h, E, g, d, E, w, C, E, m, v, E, p, b, E;
            return Re(this, function(S) {
                switch (S.label) {
                case 0:
                    if (me(a.element.container.flags, 16))
                        debugger ;return [4, this.renderNodeBackgroundAndBorders(a.element)];
                case 1:
                    S.sent(),
                    n = 0,
                    s = a.negativeZIndex,
                    S.label = 2;
                case 2:
                    return n < s.length ? (E = s[n],
                    [4, this.renderStack(E)]) : [3, 5];
                case 3:
                    S.sent(),
                    S.label = 4;
                case 4:
                    return n++,
                    [3, 2];
                case 5:
                    return [4, this.renderNodeContent(a.element)];
                case 6:
                    S.sent(),
                    u = 0,
                    o = a.nonInlineLevel,
                    S.label = 7;
                case 7:
                    return u < o.length ? (E = o[u],
                    [4, this.renderNode(E)]) : [3, 10];
                case 8:
                    S.sent(),
                    S.label = 9;
                case 9:
                    return u++,
                    [3, 7];
                case 10:
                    B = 0,
                    h = a.nonPositionedFloats,
                    S.label = 11;
                case 11:
                    return B < h.length ? (E = h[B],
                    [4, this.renderStack(E)]) : [3, 14];
                case 12:
                    S.sent(),
                    S.label = 13;
                case 13:
                    return B++,
                    [3, 11];
                case 14:
                    g = 0,
                    d = a.nonPositionedInlineLevel,
                    S.label = 15;
                case 15:
                    return g < d.length ? (E = d[g],
                    [4, this.renderStack(E)]) : [3, 18];
                case 16:
                    S.sent(),
                    S.label = 17;
                case 17:
                    return g++,
                    [3, 15];
                case 18:
                    w = 0,
                    C = a.inlineLevel,
                    S.label = 19;
                case 19:
                    return w < C.length ? (E = C[w],
                    [4, this.renderNode(E)]) : [3, 22];
                case 20:
                    S.sent(),
                    S.label = 21;
                case 21:
                    return w++,
                    [3, 19];
                case 22:
                    m = 0,
                    v = a.zeroOrAutoZIndexOrTransformedOrOpacity,
                    S.label = 23;
                case 23:
                    return m < v.length ? (E = v[m],
                    [4, this.renderStack(E)]) : [3, 26];
                case 24:
                    S.sent(),
                    S.label = 25;
                case 25:
                    return m++,
                    [3, 23];
                case 26:
                    p = 0,
                    b = a.positiveZIndex,
                    S.label = 27;
                case 27:
                    return p < b.length ? (E = b[p],
                    [4, this.renderStack(E)]) : [3, 30];
                case 28:
                    S.sent(),
                    S.label = 29;
                case 29:
                    return p++,
                    [3, 27];
                case 30:
                    return [2]
                }
            })
        })
    }
    ,
    t.prototype.mask = function(a) {
        this.ctx.beginPath(),
        this.ctx.moveTo(0, 0),
        this.ctx.lineTo(this.canvas.width, 0),
        this.ctx.lineTo(this.canvas.width, this.canvas.height),
        this.ctx.lineTo(0, this.canvas.height),
        this.ctx.lineTo(0, 0),
        this.formatPath(a.slice(0).reverse()),
        this.ctx.closePath()
    }
    ,
    t.prototype.path = function(a) {
        this.ctx.beginPath(),
        this.formatPath(a),
        this.ctx.closePath()
    }
    ,
    t.prototype.formatPath = function(a) {
        var n = this;
        a.forEach(function(s, u) {
            var o = Mt(s) ? s.start : s;
            u === 0 ? n.ctx.moveTo(o.x, o.y) : n.ctx.lineTo(o.x, o.y),
            Mt(s) && n.ctx.bezierCurveTo(s.startControl.x, s.startControl.y, s.endControl.x, s.endControl.y, s.end.x, s.end.y)
        })
    }
    ,
    t.prototype.renderRepeat = function(a, n, s, u) {
        this.path(a),
        this.ctx.fillStyle = n,
        this.ctx.translate(s, u),
        this.ctx.fill(),
        this.ctx.translate(-s, -u)
    }
    ,
    t.prototype.resizeImage = function(a, n, s) {
        var u;
        if (a.width === n && a.height === s)
            return a;
        var o = (u = this.canvas.ownerDocument) !== null && u !== void 0 ? u : document
          , B = o.createElement("canvas");
        B.width = Math.max(1, n),
        B.height = Math.max(1, s);
        var h = B.getContext("2d");
        return h.drawImage(a, 0, 0, a.width, a.height, 0, 0, n, s),
        B
    }
    ,
    t.prototype.renderBackgroundImage = function(a) {
        return Ye(this, void 0, void 0, function() {
            var n, s, u, o, B, h;
            return Re(this, function(g) {
                switch (g.label) {
                case 0:
                    n = a.styles.backgroundImage.length - 1,
                    s = function(d) {
                        var w, C, m, iA, D, Z, lA, hA, k, v, iA, D, Z, lA, hA, p, b, E, S, O, G, x, L, K, k, N, iA, uA, oA, lA, hA, CA, D, Z, rA, dA, wA, y, X, P, eA, cA;
                        return Re(this, function(QA) {
                            switch (QA.label) {
                            case 0:
                                if (d.type !== 0)
                                    return [3, 5];
                                w = void 0,
                                C = d.url,
                                QA.label = 1;
                            case 1:
                                return QA.trys.push([1, 3, , 4]),
                                [4, u.context.cache.match(C)];
                            case 2:
                                return w = QA.sent(),
                                [3, 4];
                            case 3:
                                return QA.sent(),
                                u.context.logger.error("Error loading background-image " + C),
                                [3, 4];
                            case 4:
                                return w && (m = kB(a, n, [w.width, w.height, w.width / w.height]),
                                iA = m[0],
                                D = m[1],
                                Z = m[2],
                                lA = m[3],
                                hA = m[4],
                                k = u.ctx.createPattern(u.resizeImage(w, lA, hA), "repeat"),
                                u.renderRepeat(iA, k, D, Z)),
                                [3, 6];
                            case 5:
                                k1(d) ? (v = kB(a, n, [null, null, null]),
                                iA = v[0],
                                D = v[1],
                                Z = v[2],
                                lA = v[3],
                                hA = v[4],
                                p = V1(d.angle, lA, hA),
                                b = p[0],
                                E = p[1],
                                S = p[2],
                                O = p[3],
                                G = p[4],
                                x = document.createElement("canvas"),
                                x.width = lA,
                                x.height = hA,
                                L = x.getContext("2d"),
                                K = L.createLinearGradient(E, O, S, G),
                                zw(d.stops, b).forEach(function(vA) {
                                    return K.addColorStop(vA.stop, _e(vA.color))
                                }),
                                L.fillStyle = K,
                                L.fillRect(0, 0, lA, hA),
                                lA > 0 && hA > 0 && (k = u.ctx.createPattern(x, "repeat"),
                                u.renderRepeat(iA, k, D, Z))) : j1(d) && (N = kB(a, n, [null, null, null]),
                                iA = N[0],
                                uA = N[1],
                                oA = N[2],
                                lA = N[3],
                                hA = N[4],
                                CA = d.position.length === 0 ? [tg] : d.position,
                                D = jA(CA[0], lA),
                                Z = jA(CA[CA.length - 1], hA),
                                rA = z1(d, D, Z, lA, hA),
                                dA = rA[0],
                                wA = rA[1],
                                dA > 0 && wA > 0 && (y = u.ctx.createRadialGradient(uA + D, oA + Z, 0, uA + D, oA + Z, dA),
                                zw(d.stops, dA * 2).forEach(function(vA) {
                                    return y.addColorStop(vA.stop, _e(vA.color))
                                }),
                                u.path(iA),
                                u.ctx.fillStyle = y,
                                dA !== wA ? (X = a.bounds.left + .5 * a.bounds.width,
                                P = a.bounds.top + .5 * a.bounds.height,
                                eA = wA / dA,
                                cA = 1 / eA,
                                u.ctx.save(),
                                u.ctx.translate(X, P),
                                u.ctx.transform(1, 0, 0, eA, 0, 0),
                                u.ctx.translate(-X, -P),
                                u.ctx.fillRect(uA, cA * (oA - P) + P, lA, hA * cA),
                                u.ctx.restore()) : u.ctx.fill())),
                                QA.label = 6;
                            case 6:
                                return n--,
                                [2]
                            }
                        })
                    }
                    ,
                    u = this,
                    o = 0,
                    B = a.styles.backgroundImage.slice(0).reverse(),
                    g.label = 1;
                case 1:
                    return o < B.length ? (h = B[o],
                    [5, s(h)]) : [3, 4];
                case 2:
                    g.sent(),
                    g.label = 3;
                case 3:
                    return o++,
                    [3, 1];
                case 4:
                    return [2]
                }
            })
        })
    }
    ,
    t.prototype.renderSolidBorder = function(a, n, s) {
        return Ye(this, void 0, void 0, function() {
            return Re(this, function(u) {
                return this.path(UC(s, n)),
                this.ctx.fillStyle = _e(a),
                this.ctx.fill(),
                [2]
            })
        })
    }
    ,
    t.prototype.renderDoubleBorder = function(a, n, s, u) {
        return Ye(this, void 0, void 0, function() {
            var o, B;
            return Re(this, function(h) {
                switch (h.label) {
                case 0:
                    return n < 3 ? [4, this.renderSolidBorder(a, s, u)] : [3, 2];
                case 1:
                    return h.sent(),
                    [2];
                case 2:
                    return o = Wb(u, s),
                    this.path(o),
                    this.ctx.fillStyle = _e(a),
                    this.ctx.fill(),
                    B = Pb(u, s),
                    this.path(B),
                    this.ctx.fill(),
                    [2]
                }
            })
        })
    }
    ,
    t.prototype.renderNodeBackgroundAndBorders = function(a) {
        return Ye(this, void 0, void 0, function() {
            var n, s, u, o, B, h, g, d, w = this;
            return Re(this, function(C) {
                switch (C.label) {
                case 0:
                    return this.applyEffects(a.getEffects(2)),
                    n = a.container.styles,
                    s = !Mr(n.backgroundColor) || n.backgroundImage.length,
                    u = [{
                        style: n.borderTopStyle,
                        color: n.borderTopColor,
                        width: n.borderTopWidth
                    }, {
                        style: n.borderRightStyle,
                        color: n.borderRightColor,
                        width: n.borderRightWidth
                    }, {
                        style: n.borderBottomStyle,
                        color: n.borderBottomColor,
                        width: n.borderBottomWidth
                    }, {
                        style: n.borderLeftStyle,
                        color: n.borderLeftColor,
                        width: n.borderLeftWidth
                    }],
                    o = uS(Ui(n.backgroundClip, 0), a.curves),
                    s || n.boxShadow.length ? (this.ctx.save(),
                    this.path(o),
                    this.ctx.clip(),
                    Mr(n.backgroundColor) || (this.ctx.fillStyle = _e(n.backgroundColor),
                    this.ctx.fill()),
                    [4, this.renderBackgroundImage(a.container)]) : [3, 2];
                case 1:
                    C.sent(),
                    this.ctx.restore(),
                    n.boxShadow.slice(0).reverse().forEach(function(m) {
                        w.ctx.save();
                        var v = Ic(a.curves)
                          , p = m.inset ? 0 : iS
                          , b = Zb(v, -p + (m.inset ? 1 : -1) * m.spread.number, (m.inset ? 1 : -1) * m.spread.number, m.spread.number * (m.inset ? -2 : 2), m.spread.number * (m.inset ? -2 : 2));
                        m.inset ? (w.path(v),
                        w.ctx.clip(),
                        w.mask(b)) : (w.mask(v),
                        w.ctx.clip(),
                        w.path(b)),
                        w.ctx.shadowOffsetX = m.offsetX.number + p,
                        w.ctx.shadowOffsetY = m.offsetY.number,
                        w.ctx.shadowColor = _e(m.color),
                        w.ctx.shadowBlur = m.blur.number,
                        w.ctx.fillStyle = m.inset ? _e(m.color) : "rgba(0,0,0,1)",
                        w.ctx.fill(),
                        w.ctx.restore()
                    }),
                    C.label = 2;
                case 2:
                    B = 0,
                    h = 0,
                    g = u,
                    C.label = 3;
                case 3:
                    return h < g.length ? (d = g[h],
                    d.style !== 0 && !Mr(d.color) && d.width > 0 ? d.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(d.color, d.width, B, a.curves, 2)] : [3, 11]) : [3, 13];
                case 4:
                    return C.sent(),
                    [3, 11];
                case 5:
                    return d.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(d.color, d.width, B, a.curves, 3)];
                case 6:
                    return C.sent(),
                    [3, 11];
                case 7:
                    return d.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(d.color, d.width, B, a.curves)];
                case 8:
                    return C.sent(),
                    [3, 11];
                case 9:
                    return [4, this.renderSolidBorder(d.color, B, a.curves)];
                case 10:
                    C.sent(),
                    C.label = 11;
                case 11:
                    B++,
                    C.label = 12;
                case 12:
                    return h++,
                    [3, 3];
                case 13:
                    return [2]
                }
            })
        })
    }
    ,
    t.prototype.renderDashedDottedBorder = function(a, n, s, u, o) {
        return Ye(this, void 0, void 0, function() {
            var B, h, g, d, w, C, m, v, p, b, E, S, O, G, x, L, x, L;
            return Re(this, function(K) {
                return this.ctx.save(),
                B = $b(u, s),
                h = UC(u, s),
                o === 2 && (this.path(h),
                this.ctx.clip()),
                Mt(h[0]) ? (g = h[0].start.x,
                d = h[0].start.y) : (g = h[0].x,
                d = h[0].y),
                Mt(h[1]) ? (w = h[1].end.x,
                C = h[1].end.y) : (w = h[1].x,
                C = h[1].y),
                s === 0 || s === 2 ? m = Math.abs(g - w) : m = Math.abs(d - C),
                this.ctx.beginPath(),
                o === 3 ? this.formatPath(B) : this.formatPath(h.slice(0, 2)),
                v = n < 3 ? n * 3 : n * 2,
                p = n < 3 ? n * 2 : n,
                o === 3 && (v = n,
                p = n),
                b = !0,
                m <= v * 2 ? b = !1 : m <= v * 2 + p ? (E = m / (2 * v + p),
                v *= E,
                p *= E) : (S = Math.floor((m + p) / (v + p)),
                O = (m - S * v) / (S - 1),
                G = (m - (S + 1) * v) / S,
                p = G <= 0 || Math.abs(p - O) < Math.abs(p - G) ? O : G),
                b && (o === 3 ? this.ctx.setLineDash([0, v + p]) : this.ctx.setLineDash([v, p])),
                o === 3 ? (this.ctx.lineCap = "round",
                this.ctx.lineWidth = n) : this.ctx.lineWidth = n * 2 + 1.1,
                this.ctx.strokeStyle = _e(a),
                this.ctx.stroke(),
                this.ctx.setLineDash([]),
                o === 2 && (Mt(h[0]) && (x = h[3],
                L = h[0],
                this.ctx.beginPath(),
                this.formatPath([new nA(x.end.x,x.end.y), new nA(L.start.x,L.start.y)]),
                this.ctx.stroke()),
                Mt(h[1]) && (x = h[1],
                L = h[2],
                this.ctx.beginPath(),
                this.formatPath([new nA(x.end.x,x.end.y), new nA(L.start.x,L.start.y)]),
                this.ctx.stroke())),
                this.ctx.restore(),
                [2]
            })
        })
    }
    ,
    t.prototype.render = function(a) {
        return Ye(this, void 0, void 0, function() {
            var n;
            return Re(this, function(s) {
                switch (s.label) {
                case 0:
                    return this.options.backgroundColor && (this.ctx.fillStyle = _e(this.options.backgroundColor),
                    this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)),
                    n = qb(a),
                    [4, this.renderStack(n)];
                case 1:
                    return s.sent(),
                    this.applyEffects([]),
                    [2, this.canvas]
                }
            })
        })
    }
    ,
    t
}
)(Sp)
  , sS = function(i) {
    return i instanceof Bp || i instanceof fp ? !0 : i instanceof ig && i.type !== Lc && i.type !== Dc
}
  , uS = function(i, t) {
    switch (i) {
    case 0:
        return Ic(t);
    case 2:
        return Xb(t);
    default:
        return Kc(t)
    }
}
  , cS = function(i) {
    switch (i) {
    case 1:
        return "center";
    case 2:
        return "right";
    default:
        return "left"
    }
}
  , oS = ["-apple-system", "system-ui"]
  , fS = function(i) {
    return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? i.filter(function(t) {
        return oS.indexOf(t) === -1
    }) : i
}
  , BS = (function(i) {
    Zt(t, i);
    function t(a, n) {
        var s = i.call(this, a, n) || this;
        return s.canvas = n.canvas ? n.canvas : document.createElement("canvas"),
        s.ctx = s.canvas.getContext("2d"),
        s.options = n,
        s.canvas.width = Math.floor(n.width * n.scale),
        s.canvas.height = Math.floor(n.height * n.scale),
        s.canvas.style.width = n.width + "px",
        s.canvas.style.height = n.height + "px",
        s.ctx.scale(s.options.scale, s.options.scale),
        s.ctx.translate(-n.x, -n.y),
        s.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + n.width + "x" + n.height + " at " + n.x + "," + n.y + ") with scale " + n.scale),
        s
    }
    return t.prototype.render = function(a) {
        return Ye(this, void 0, void 0, function() {
            var n, s;
            return Re(this, function(u) {
                switch (u.label) {
                case 0:
                    return n = Fh(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, a),
                    [4, hS(n)];
                case 1:
                    return s = u.sent(),
                    this.options.backgroundColor && (this.ctx.fillStyle = _e(this.options.backgroundColor),
                    this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)),
                    this.ctx.drawImage(s, -this.options.x * this.options.scale, -this.options.y * this.options.scale),
                    [2, this.canvas]
                }
            })
        })
    }
    ,
    t
}
)(Sp)
  , hS = function(i) {
    return new Promise(function(t, a) {
        var n = new Image;
        n.onload = function() {
            t(n)
        }
        ,
        n.onerror = a,
        n.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(i))
    }
    )
}
  , gS = (function() {
    function i(t) {
        var a = t.id
          , n = t.enabled;
        this.id = a,
        this.enabled = n,
        this.start = Date.now()
    }
    return i.prototype.debug = function() {
        for (var t = [], a = 0; a < arguments.length; a++)
            t[a] = arguments[a];
        this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, Ju([this.id, this.getTime() + "ms"], t)) : this.info.apply(this, t))
    }
    ,
    i.prototype.getTime = function() {
        return Date.now() - this.start
    }
    ,
    i.prototype.info = function() {
        for (var t = [], a = 0; a < arguments.length; a++)
            t[a] = arguments[a];
        this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, Ju([this.id, this.getTime() + "ms"], t))
    }
    ,
    i.prototype.warn = function() {
        for (var t = [], a = 0; a < arguments.length; a++)
            t[a] = arguments[a];
        this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, Ju([this.id, this.getTime() + "ms"], t)) : this.info.apply(this, t))
    }
    ,
    i.prototype.error = function() {
        for (var t = [], a = 0; a < arguments.length; a++)
            t[a] = arguments[a];
        this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, Ju([this.id, this.getTime() + "ms"], t)) : this.info.apply(this, t))
    }
    ,
    i.instances = {},
    i
}
)()
  , dS = (function() {
    function i(t, a) {
        var n;
        this.windowBounds = a,
        this.instanceName = "#" + i.instanceCount++,
        this.logger = new gS({
            id: this.instanceName,
            enabled: t.logging
        }),
        this.cache = (n = t.cache) !== null && n !== void 0 ? n : new Mb(this,t)
    }
    return i.instanceCount = 1,
    i
}
)()
  , QS = function(i, t) {
    return t === void 0 && (t = {}),
    wS(i, t)
};
typeof window < "u" && yp.setContext(window);
var wS = function(i, t) {
    return Ye(void 0, void 0, void 0, function() {
        var a, n, s, u, o, B, h, g, d, w, C, m, v, p, b, E, S, O, G, x, K, L, K, k, N, iA, uA, oA, lA, hA, CA, D, Z, rA, dA, wA, y, X, P, eA;
        return Re(this, function(cA) {
            switch (cA.label) {
            case 0:
                if (!i || typeof i != "object")
                    return [2, Promise.reject("Invalid element provided as first argument")];
                if (a = i.ownerDocument,
                !a)
                    throw new Error("Element is not attached to a Document");
                if (n = a.defaultView,
                !n)
                    throw new Error("Document is not attached to a Window");
                return s = {
                    allowTaint: (k = t.allowTaint) !== null && k !== void 0 ? k : !1,
                    imageTimeout: (N = t.imageTimeout) !== null && N !== void 0 ? N : 15e3,
                    proxy: t.proxy,
                    useCORS: (iA = t.useCORS) !== null && iA !== void 0 ? iA : !1
                },
                u = ch({
                    logging: (uA = t.logging) !== null && uA !== void 0 ? uA : !0,
                    cache: t.cache
                }, s),
                o = {
                    windowWidth: (oA = t.windowWidth) !== null && oA !== void 0 ? oA : n.innerWidth,
                    windowHeight: (lA = t.windowHeight) !== null && lA !== void 0 ? lA : n.innerHeight,
                    scrollX: (hA = t.scrollX) !== null && hA !== void 0 ? hA : n.pageXOffset,
                    scrollY: (CA = t.scrollY) !== null && CA !== void 0 ? CA : n.pageYOffset
                },
                B = new Yn(o.scrollX,o.scrollY,o.windowWidth,o.windowHeight),
                h = new dS(u,B),
                g = (D = t.foreignObjectRendering) !== null && D !== void 0 ? D : !1,
                d = {
                    allowTaint: (Z = t.allowTaint) !== null && Z !== void 0 ? Z : !1,
                    onclone: t.onclone,
                    ignoreElements: t.ignoreElements,
                    inlineImages: g,
                    copyStyles: g
                },
                h.logger.debug("Starting document clone with size " + B.width + "x" + B.height + " scrolled to " + -B.left + "," + -B.top),
                w = new QC(h,i,d),
                C = w.clonedReferenceElement,
                C ? [4, w.toIFrame(a, B)] : [2, Promise.reject("Unable to find element in cloned iframe")];
            case 1:
                return m = cA.sent(),
                v = lg(C) || Cb(C) ? ZF(C.ownerDocument) : zc(h, C),
                p = v.width,
                b = v.height,
                E = v.left,
                S = v.top,
                O = CS(h, C, t.backgroundColor),
                G = {
                    canvas: t.canvas,
                    backgroundColor: O,
                    scale: (dA = (rA = t.scale) !== null && rA !== void 0 ? rA : n.devicePixelRatio) !== null && dA !== void 0 ? dA : 1,
                    x: ((wA = t.x) !== null && wA !== void 0 ? wA : 0) + E,
                    y: ((y = t.y) !== null && y !== void 0 ? y : 0) + S,
                    width: (X = t.width) !== null && X !== void 0 ? X : Math.ceil(p),
                    height: (P = t.height) !== null && P !== void 0 ? P : Math.ceil(b)
                },
                g ? (h.logger.debug("Document cloned, using foreign object rendering"),
                K = new BS(h,G),
                [4, K.render(C)]) : [3, 3];
            case 2:
                return x = cA.sent(),
                [3, 5];
            case 3:
                return h.logger.debug("Document cloned, element located at " + E + "," + S + " with size " + p + "x" + b + " using computed rendering"),
                h.logger.debug("Starting DOM parsing"),
                L = dp(h, C),
                O === L.styles.backgroundColor && (L.styles.backgroundColor = Vn.TRANSPARENT),
                h.logger.debug("Starting renderer for element at " + G.x + "," + G.y + " with size " + G.width + "x" + G.height),
                K = new lS(h,G),
                [4, K.render(L)];
            case 4:
                x = cA.sent(),
                cA.label = 5;
            case 5:
                return (!((eA = t.removeContainer) !== null && eA !== void 0) || eA) && (QC.destroy(m) || h.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),
                h.logger.debug("Finished rendering"),
                [2, x]
            }
        })
    })
}
  , CS = function(i, t, a) {
    var n = t.ownerDocument
      , s = n.documentElement ? ns(i, getComputedStyle(n.documentElement).backgroundColor) : Vn.TRANSPARENT
      , u = n.body ? ns(i, getComputedStyle(n.body).backgroundColor) : Vn.TRANSPARENT
      , o = typeof a == "string" ? ns(i, a) : a === null ? Vn.TRANSPARENT : 4294967295;
    return t === n.documentElement ? Mr(s) ? Mr(u) ? o : u : s : o
};
function US({targetRef: i}) {
    const [t,a] = $.useState(!1)
      , [n,s] = $.useState(!1)
      , u = $.useRef(!1)
      , o = $.useCallback(async () => {
        if (u.current || t)
            return;
        const B = i?.current;
        if (B) {
            u.current = !0,
            a(!0);
            try {
                B.classList.add("is-capturing");
                const h = B.getBoundingClientRect()
                  , g = await QS(B, {
                    backgroundColor: "#faf9f4",
                    scale: 3,
                    width: h.width,
                    height: h.height,
                    windowWidth: document.documentElement.clientWidth,
                    windowHeight: document.documentElement.clientHeight,
                    useCORS: !0,
                    logging: !1,
                    ignoreElements: m => m.classList?.contains("calendar__nav-arrow") || m.classList?.contains("calendar__month-picker-backdrop")
                });
                B.classList.remove("is-capturing"),
                s(!0),
                setTimeout( () => s(!1), 420);
                const d = await new Promise(m => g.toBlob(m, "image/png"));
                if (!d) {
                    console.warn("Failed to create image blob");
                    return
                }
                const w = new Date
                  , C = `calendar-${w.getFullYear()}-${String(w.getMonth() + 1).padStart(2, "0")}.png`;
                if (navigator.share && navigator.canShare) {
                    const v = {
                        files: [new File([d],C,{
                            type: "image/png"
                        })]
                    };
                    if (navigator.canShare(v)) {
                        try {
                            await navigator.share(v)
                        } catch (p) {
                            p.name !== "AbortError" && (console.warn("Share failed, falling back to download:", p),
                            mC(d, C))
                        }
                        return
                    }
                }
                mC(d, C)
            } catch (h) {
                console.error("Screenshot failed:", h)
            } finally {
                B.classList.remove("is-capturing"),
                a(!1),
                setTimeout( () => {
                    u.current = !1
                }
                , 600)
            }
        }
    }
    , [i, t]);
    return V.jsxs(V.Fragment, {
        children: [V.jsxs("button", {
            type: "button",
            className: `share-btn ${t ? "share-btn--capturing" : ""}`,
            onClick: o,
            "aria-label": "Share calendar screenshot",
            title: "Share",
            children: [V.jsxs("svg", {
                className: "share-btn__icon",
                viewBox: "0 0 24 24",
                width: "18",
                height: "18",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.8",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [V.jsx("path", {
                    d: "M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7"
                }), V.jsx("polyline", {
                    points: "16,6 12,2 8,6"
                }), V.jsx("line", {
                    x1: "12",
                    y1: "2",
                    x2: "12",
                    y2: "15"
                })]
            }), V.jsx("span", {
                className: "share-btn__label",
                children: "share"
            })]
        }), n && V.jsx("div", {
            className: "share-flash",
            "aria-hidden": !0
        })]
    })
}
function mC(i, t) {
    const a = URL.createObjectURL(i)
      , n = document.createElement("a");
    n.href = a,
    n.download = t,
    document.body.appendChild(n),
    n.click(),
    document.body.removeChild(n),
    setTimeout( () => URL.revokeObjectURL(a), 1e3)
}
function pS() {
    const i = $.useRef(null);
    return V.jsxs("div", {
        className: "notebook-scene",
        children: [V.jsxs("div", {
            className: "notebook__credit",
            children: [V.jsx("a", {
                href: "mailto:mail@jeongyoon.com",
                className: "notebook__credit-link",
                children: "mail@jeongyoon.com"
            }), V.jsx("a", {
                href: "https://www.instagram.com/jeongyoon.design",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "notebook__credit-link",
                children: "@jeongyoon.design"
            }), V.jsx("span", {
                className: "notebook__credit-copy",
                children: "© 2026 jeongyoon"
            })]
        }), V.jsx("div", {
            className: "notebook__rotate-prompt",
            "aria-live": "polite",
            children: V.jsxs("div", {
                className: "notebook__rotate-prompt-content",
                children: [V.jsxs("svg", {
                    className: "notebook__rotate-icon",
                    viewBox: "0 0 64 64",
                    width: "56",
                    height: "56",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    "aria-hidden": "true",
                    children: [V.jsx("rect", {
                        x: "16",
                        y: "6",
                        width: "24",
                        height: "44",
                        rx: "4"
                    }), V.jsx("rect", {
                        x: "19",
                        y: "12",
                        width: "18",
                        height: "32",
                        rx: "1",
                        opacity: "0.3"
                    }), V.jsx("circle", {
                        cx: "28",
                        cy: "47",
                        r: "1.5"
                    }), V.jsx("path", {
                        d: "M48 20 a16 16 0 0 1 -4 22"
                    }), V.jsx("polyline", {
                        points: "44,42 44,36 50,38"
                    })]
                }), V.jsx("p", {
                    children: "Rotate your device for the best experience"
                })]
            })
        }), V.jsxs("div", {
            className: "notebook__layout",
            children: [V.jsxs("div", {
                ref: i,
                className: "notebook notebook--open",
                "aria-label": "Open notebook",
                children: [V.jsxs("div", {
                    className: "notebook__pages",
                    children: [V.jsx("div", {
                        className: "notebook__page notebook__page--left"
                    }), V.jsx("div", {
                        className: "notebook__page notebook__page--right"
                    }), V.jsx("div", {
                        className: "notebook__gutter"
                    })]
                }), V.jsx("div", {
                    className: "notebook__page-content",
                    style: {
                        opacity: 1,
                        pointerEvents: "auto"
                    },
                    children: V.jsx(jF, {
                        notebookOpen: !0
                    })
                }), V.jsxs("div", {
                    className: "notebook__cover",
                    style: {
                        transform: "rotateY(-180deg)",
                        pointerEvents: "none"
                    },
                    children: [V.jsx("div", {
                        className: "notebook__cover-front",
                        children: V.jsx("div", {
                            className: "notebook__elastic"
                        })
                    }), V.jsx("div", {
                        className: "notebook__cover-back"
                    })]
                })]
            }), V.jsx("div", {
                className: "notebook__sidebar",
                children: V.jsx(US, {
                    targetRef: i
                })
            })]
        })]
    })
}
var vC = {}
  , mS = "@vercel/analytics"
  , vS = "1.6.1"
  , yS = () => {
    window.va || (window.va = function(...t) {
        (window.vaq = window.vaq || []).push(t)
    }
    )
}
;
function Tp() {
    return typeof window < "u"
}
function xp() {
    try {
        const i = "production"
    } catch {}
    return "production"
}
function FS(i="auto") {
    if (i === "auto") {
        window.vam = xp();
        return
    }
    window.vam = i
}
function ES() {
    return (Tp() ? window.vam : xp()) || "production"
}
function xh() {
    return ES() === "development"
}
function _S(i) {
    return i.scriptSrc ? i.scriptSrc : xh() ? "https://va.vercel-scripts.com/v1/script.debug.js" : i.basePath ? `${i.basePath}/insights/script.js` : "/_vercel/insights/script.js"
}
function HS(i={
    debug: !0
}) {
    var t;
    if (!Tp())
        return;
    FS(i.mode),
    yS(),
    i.beforeSend && ((t = window.va) == null || t.call(window, "beforeSend", i.beforeSend));
    const a = _S(i);
    if (document.head.querySelector(`script[src*="${a}"]`))
        return;
    const n = document.createElement("script");
    n.src = a,
    n.defer = !0,
    n.dataset.sdkn = mS + (i.framework ? `/${i.framework}` : ""),
    n.dataset.sdkv = vS,
    i.disableAutoTrack && (n.dataset.disableAutoTrack = "1"),
    i.endpoint ? n.dataset.endpoint = i.endpoint : i.basePath && (n.dataset.endpoint = `${i.basePath}/insights`),
    i.dsn && (n.dataset.dsn = i.dsn),
    n.onerror = () => {
        const s = xh() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
        console.log(`[Vercel Web Analytics] Failed to load script from ${a}. ${s}`)
    }
    ,
    xh() && i.debug === !1 && (n.dataset.debug = "false"),
    document.head.appendChild(n)
}
function bS({route: i, path: t}) {
    var a;
    (a = window.va) == null || a.call(window, "pageview", {
        route: i,
        path: t
    })
}
function SS() {
    if (!(typeof process > "u" || typeof vC > "u"))
        return vC.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH
}
function TS(i) {
    return $.useEffect( () => {
        var t;
        i.beforeSend && ((t = window.va) == null || t.call(window, "beforeSend", i.beforeSend))
    }
    , [i.beforeSend]),
    $.useEffect( () => {
        HS({
            framework: i.framework || "react",
            basePath: i.basePath ?? SS(),
            ...i.route !== void 0 && {
                disableAutoTrack: !0
            },
            ...i
        })
    }
    , []),
    $.useEffect( () => {
        i.route && i.path && bS({
            route: i.route,
            path: i.path
        })
    }
    , [i.route, i.path]),
    null
}
function xS() {
    const i = typeof window < "u" && new URLSearchParams(window.location.search).get("demo") === "stamp";
    return V.jsxs(V.Fragment, {
        children: [i ? V.jsx(oy, {}) : V.jsx(pS, {}), V.jsx(TS, {})]
    })
}
jv.createRoot(document.getElementById("root")).render(V.jsx($.StrictMode, {
    children: V.jsx(xS, {})
}));
