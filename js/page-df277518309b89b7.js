(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[974], {
    7676: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 4996))
    }
    ,
    4996: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            default: () => x
        });
        var s = r(5155);
        r(8173);
        var n = r(3463)
          , l = r(9795);
        let o = function() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return (0,
            l.QP)((0,
            n.A)(t))
        }
          , a = e => {
            let {children: t, className: r, as: n="p"} = e;
            return (0,
            s.jsx)(n, {
                className: o("text-base font-medium text-default", r),
                children: t
            })
        }
        ;
        var i = r(2115)
          , c = r(1478);
        let d = e => {
            let {children: t, onClick: r, className: n, secondary: l, animationBgColor: d="black"} = e
              , x = (0,
            i.useRef)(null)
              , u = (0,
            i.useRef)(null);
            return (0,
            i.useEffect)( () => {
                let e = x.current
                  , t = u.current;
                if (!e || !t)
                    return;
                let r = r => {
                    let s = e.getBoundingClientRect()
                      , n = r.clientX - s.left
                      , l = r.clientY - s.top;
                    c.os.set(t, {
                        x: n,
                        y: l,
                        xPercent: -50,
                        yPercent: -50
                    }),
                    c.os.to(t, {
                        width: s.width + 50,
                        height: 200,
                        duration: 1,
                        ease: "power1.out"
                    })
                }
                  , s = () => {
                    c.os.to(t, {
                        width: 0,
                        height: 0,
                        duration: 1,
                        ease: "power1.out"
                    })
                }
                ;
                return e.addEventListener("mousemove", r),
                e.addEventListener("mouseleave", s),
                () => {
                    e.removeEventListener("mousemove", r),
                    e.removeEventListener("mouseleave", s)
                }
            }
            , []),
            (0,
            s.jsxs)("button", {
                ref: x,
                className: o("relative flex h-[55px] px-[120px] py-[15px] justify-center items-center gap-[10px] self-stretch rounded-[99px] border border-white transition duration-300 ease-in-out hover:scale-100 active:scale-90 overflow-hidden group", l && "bg-secondary-800", n),
                onClick: r,
                children: [(0,
                s.jsx)("span", {
                    ref: u,
                    className: "absolute top-0 left-0 z-0 origin-center rounded-full pointer-events-none",
                    style: {
                        backgroundColor: d,
                        width: 0,
                        height: 0,
                        zIndex: 0
                    }
                }), (0,
                s.jsx)(a, {
                    as: "span",
                    className: o("relative z-20 transition-colors duration-300 whitespace-nowrap text-primary-neon"),
                    children: t
                })]
            })
        }
        ;
        function x() {
            return (0,
            s.jsxs)("div", {
                className: "flex flex-col items-center justify-center md:mb-[calc(100vh/4)]",
                children: [(0,
                s.jsx)("h1", {
                    className: "text-white mb-[30px] text-center text-2xl md:text-[50px] font-bold uppercase tracking-wider text-shadow-glow text-stroke-custom textStroke textShadow",
                    children: "WELCOME TO Wolf AGENT!"
                }), (0,
                s.jsx)("p", {
                    className: "text-sm md:text-[30px] mb-[70px] tracking-[1.5px] font-bold uppercase text-white text-shadow-glow text-stroke-custom textStroke textShadow",
                    children: "YOUR SONAR IN THE AIGENTFI"
                }), (0,
                s.jsxs)("div", {
                    className: "flex flex-col gap-4 items-center md:w-[634px] w-screen",
                    children: [(0,
                    s.jsx)(d, {
                        className: "md:w-full mx-auto",
                        children: "LITEPAPER"
                    }), (0,
                    s.jsxs)("div", {
                        className: "flex flex-col md:flex-row gap-4 md:w-full mx-auto justify-between",
                        children: [(0,
                        s.jsx)(d, {
                            children: "PURCHASE"
                        }), (0,
                        s.jsx)(d, {
                            children: "LET'S TALK"
                        })]
                    })]
                })]
            })
        }
    }
}, e => {
    var t = t => e(e.s = t);
    e.O(0, [592, 173, 50, 441, 517, 358], () => t(7676)),
    _N_E = e.O()
}
]);
