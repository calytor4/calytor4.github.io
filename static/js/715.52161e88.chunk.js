(self.webpackChunkmetakuma_io = self.webpackChunkmetakuma_io || []).push([
    [715], {
        8207: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return se
                }
            });
            var n, i = a(6871),
                r = a(885),
                l = a(2791),
                s = ["title", "titleId"];

            function o() {
                return o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }, o.apply(this, arguments)
            }

            function c(e, t) {
                if (null == e) return {};
                var a, n, i = function(e, t) {
                    if (null == e) return {};
                    var a, n, i = {},
                        r = Object.keys(e);
                    for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || (i[a] = e[a]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (i[a] = e[a])
                }
                return i
            }

            function d(e, t) {
                var a = e.title,
                    i = e.titleId,
                    r = c(e, s);
                return l.createElement("svg", o({
                    width: 18,
                    height: 16,
                    viewBox: "0 0 18 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": i
                }, r), a ? l.createElement("title", {
                    id: i
                }, a) : null, n || (n = l.createElement("path", {
                    d: "M4.28307 15L17 15M16.9996 8L1 8M17 1L9.97186 1",
                    stroke: "white",
                    strokeWidth: 1.5,
                    strokeLinecap: "round"
                })))
            }
            var u, m, h = l.forwardRef(d),
                x = (a.p, a(184)),
                f = function(e) {
                    var t = e.setIsToggle;
                    return (0, x.jsxs)(x.Fragment, {
                        children: [(0, x.jsx)("a", {
                            className: "navbar-brand",
                            href: "/",
                            children: (0, x.jsx)("img", {
                                src: "./assets/images/logo.png",
                                alt: "Logo"
                            })
                        }), (0, x.jsx)("button", {
                            className: "navbar-toggle",
                            type: "button",
                            onClick: t,
                            children: (0, x.jsx)("i", {
                                className: "toggle-icon",
                                children: (0, x.jsx)(h, {})
                            })
                        })]
                    })
                },
                g = a(5861),
                p = a(7757),
                v = a.n(p),
                b = a(5667),
                j = a(1459),
                w = (a(5692), a(8739), function(e) {
                    var t = e.navItem,
                        a = t.link,
                        n = t.text,
                        i = function(e) {
                            b.OK.scrollTo(e, {
                                smooth: !0,
                                duration: 700
                            })
                        },
                        r = function() {
                            var e = (0, g.Z)(v().mark((function e(t, a) {
                                return v().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            t.preventDefault(), i(a);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, a) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, x.jsx)("li", {
                        children: (0, x.jsx)("a", {
                            className: "nav-link",
                            href: "#".concat(a),
                            onClick: function(e) {
                                return r(e, a)
                            },
                            children: n
                        })
                    })
                }),
                y = function(e) {
                    var t = e.isToggle,
                        a = e.navs,
                        n = (0, j.K)(),
                        i = (n.account, n.activate, n.chainId, n.deactivate);
                    (0, l.useEffect)((function() {
                        i()
                    }), []);
                    return (0, x.jsx)("div", {
                        className: "navbar-collapse ".concat(t && "show"),
                        children: (0, x.jsx)("ul", {
                            className: "navbar-nav",
                            children: a.map((function(e, t) {
                                return (0, x.jsx)(w, {
                                    navItem: e
                                }, "nav-link-".concat(t))
                            }))
                        })
                    })
                },
                N = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = (0, l.useState)(e),
                        a = (0, r.Z)(t, 2),
                        n = a[0],
                        i = a[1],
                        s = (0, l.useCallback)((function() {
                            return i((function(e) {
                                return !e
                            }))
                        }), []);
                    return [n, s]
                },
                M = function(e) {
                    var t = e.blackBanner,
                        a = e.navs,
                        n = N(),
                        i = (0, r.Z)(n, 2),
                        l = i[0],
                        s = i[1];
                    return (0, x.jsx)("div", {
                        className: t ? "header black-overlay" : "header",
                        children: (0, x.jsx)("nav", {
                            className: "navbar",
                            children: (0, x.jsxs)("div", {
                                className: "container",
                                children: [(0, x.jsx)(f, {
                                    setIsToggle: s
                                }), (0, x.jsx)(y, {
                                    isToggle: l,
                                    navs: a
                                })]
                            })
                        })
                    })
                },
                O = ["title", "titleId"];

            function k() {
                return k = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }, k.apply(this, arguments)
            }

            function E(e, t) {
                if (null == e) return {};
                var a, n, i = function(e, t) {
                    if (null == e) return {};
                    var a, n, i = {},
                        r = Object.keys(e);
                    for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || (i[a] = e[a]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (i[a] = e[a])
                }
                return i
            }

            function T(e, t) {
                var a = e.title,
                    n = e.titleId,
                    i = E(e, O);
                return l.createElement("svg", k({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    ref: t,
                    "aria-labelledby": n
                }, i), a ? l.createElement("title", {
                    id: n
                }, a) : null, u || (u = l.createElement("rect", {
                    opacity: .5,
                    x: 13,
                    y: 6,
                    width: 13,
                    height: 2,
                    rx: 1,
                    transform: "rotate(90 13 6)",
                    fill: "rgba(0,0,0,0.575)"
                })), m || (m = l.createElement("path", {
                    d: "M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z",
                    fill: "rgba(0,0,0,0.575)"
                })))
            }
            var C, I = l.forwardRef(T),
                L = (a.p, a(9135)),
                F = function(e) {
                    var t = e.visible;
                    return (0, x.jsxs)(x.Fragment, {
                        children: [(0, x.jsx)("div", {
                            className: "footer",
                            children: (0, x.jsxs)("div", {
                                className: "container",
                                children: [(0, x.jsx)("div", {
                                    className: "flex justify-between items-center",
                                    children: (0, x.jsx)("div", {
                                        className: "flex items-center",
                                        children: (0, x.jsx)("img", {
                                            src: "./assets/images/logo.png",
                                            className: "max-h-12 w-full",
                                            alt: "Logo"
                                        })
                                    })
                                }), (0, x.jsxs)("div", {
                                    className: "flex flex-col justify-center",
                                    children: [(0, x.jsx)("p", {
                                        className: "text-white mb-4 text-lg md:text-xl xl:text-2xl",
                                        children: "FOLLOW US"
                                    }), (0, x.jsxs)("div", {
                                        className: "flex gap-4 justify-between",
                                        children: [(0, x.jsx)("a", {
                                            href: "https://twitter.com",
                                            className: "bg-violet-500 p-3 text-xl text-white hover:text-gray-800 transition-all duration-300 ease-in-out rounded-tl-lg rounded-br-lg",
                                            children: (0, x.jsx)(L.fWC, {})
                                        }), (0, x.jsx)("a", {
                                            href: "https://discord.com",
                                            className: "bg-violet-500 p-3 text-xl text-white hover:text-gray-800 transition-all duration-300 ease-in-out rounded-tl-lg rounded-br-lg",
                                            children: (0, x.jsx)(L.j2d, {})
                                        }), (0, x.jsx)("a", {
                                            href: "https://instagram.com",
                                            className: "bg-violet-500 p-3 text-xl text-white hover:text-gray-800 transition-all duration-300 ease-in-out rounded-tl-lg rounded-br-lg",
                                            children: (0, x.jsx)(L.Zf_, {})
                                        })]
                                    })]
                                })]
                            })
                        }), t && (0, x.jsx)("div", {
                            className: "scrolltop",
                            children: (0, x.jsx)("span", {
                                onClick: function() {
                                    b.NY.scrollToTop()
                                },
                                children: (0, x.jsx)(I, {})
                            })
                        })]
                    })
                },
                S = function(e) {
                    var t = (0, l.useState)(!1),
                        a = (0, r.Z)(t, 2),
                        n = a[0],
                        i = a[1];
                    (0, l.useEffect)((function() {
                        var e;
                        null === (e = window) || void 0 === e || e.addEventListener("scroll", s)
                    }), []);
                    var s = function() {
                        var e, t = 0,
                            a = null === (e = window) || void 0 === e ? void 0 : e.pageYOffset;
                        !n && a > t ? i(!0) : 0 === a && i(!1), t = a
                    };
                    return (0, x.jsxs)("div", {
                        className: "app-layout",
                        children: [(0, x.jsx)(M, {
                            navs: e.navs,
                            blackBanner: n
                        }), e.children, (0, x.jsx)(F, {
                            visible: n
                        })]
                    })
                },
                P = function(e) {
                    var t = e.className,
                        a = e.handleClick,
                        n = e.title;
                    return (0, x.jsx)("button", {
                        className: "btn ".concat(t),
                        onClick: a,
                        children: n
                    })
                },
                R = function() {
                    var e = (0, i.s0)();
                    return (0, x.jsx)("div", {
                        className: "banner-section",
                        children: (0, x.jsx)("div", {
                            className: "content",
                            children: (0, x.jsxs)("div", {
                                className: "banner",
                                children: [(0, x.jsx)("img", {
                                    src: "./assets/images/join-club-text.png",
                                    alt: "Join our club"
                                }), (0, x.jsx)("p", {
                                    children: "MetaKuma is an exclusive collection of 9999 uniquely designed and hand drawn NFTs (Non-Fungible Tokens). They are made up of over 200 traits revolving around teddy bears that have escaped our world and entered the Metaverse."}), (0, x.jsx)("div", {
                                    className: "btn-actions",
                                    children: (0, x.jsx)(P, {
                                        className: "btn-primary",
                                        handleClick: function() {
                                            e("mint")
                                        },
                                        title: "Mint Live"
                                    })
                                })]
                            })
                        })
                    })
                },
                W = function(e) {
                    var t = e.data,
                        a = t.image,
                        n = t.title,
                        i = t.description;
                    return (0, x.jsxs)("div", {
                        className: "max-w-sm flex items-center justify-between h-full flex-col text-center w-full sm:w-1/2 lg:w-1/3",
                        children: [(0, x.jsx)("img", {
                            className: "mb-5 max-w-[128px]",
                            src: "./assets/images/".concat(a),
                            alt: "Utility"
                        }), (0, x.jsx)("h5", {
                            className: "uppercase mb-5 text-lg md:text-2xl text-indigo-300",
                            children: n
                        }), (0, x.jsx)("p", {
                            className: "text-sm md:text-base text-white",
                            children: i
                        })]
                    })
                },
                _ = [{
                    image: "utility.png",
                    title: "Play 2 Earn",
                    description: "We will be developing a video game based on on our NFT that will reward you $KUMA tokens once you complete certain tasks and win battles."
                }, {
                    image: "utility.png",
                    title: "NFT Staking",
                    description: "Holders will able to stake their NFT to receive $KUMA which can be used to breed your NFT, buy our products, or simply sell on the marketplace."
                }, {
                    image: "utility.png",
                    title: "Metaverse Parties & Private Events",
                    description: "Holders will be able to join us in our Sandbox Mansion for Metaverse parties. We will also be hosting private events with A-List Celebrities in LA, Miami, and Dubai."
                }, {
                    image: "utility.png",
                    title: "Merch",
                    description: "Owning a MetaKuma gives you exclusive access to merch drops and giveaways."
                }, {
                    image: "utility.png",
                    title: "Governance",
                    description: "Being a part of our community means you get a voice in all future decisions and events in order to ensure we all get the best return."
                }, {
                    image: "utility.png",
                    title: "Charity",
                    description: "Inclusivity and Charity is something we, as a team, are extremely passionate about. Upon the sell out of our collection, we will be donating a portion of the profits to Kids Cancer Society and another portion to the top voted organization by our DAO."
                }],
                A = function() {
                    return (0, x.jsx)("div", {
                        className: "utility-section",
                        id: "utility",
                        children: (0, x.jsx)("div", {
                            className: "container",
                            children: (0, x.jsxs)("div", {
                                className: "flex flex-col items-center",
                                children: [(0, x.jsx)("h2", {
                                    className: "mb-12 text-white font-bold text-4xl md:text-5xl lg:text-6xl",
                                    children: "NFT Utilities"
                                }), (0, x.jsx)("div", {
                                    className: "flex flex-wrap justify-center items-start gap-x-6 md:gap-x-8 gap-y-12",
                                    children: _.map((function(e, t) {
                                        return (0, x.jsx)(W, {
                                            data: e
                                        }, "utility_".concat(t))
                                    }))
                                })]
                            })
                        })
                    })
                },
                BF = function(e) {
                    var t = e.data,
                        a = t.image,
                        n = t.title,
                        i = t.description;
                    return (0, x.jsxs)("div", {
                        className: "flex items-center mb-8 justify-center flex-col md:flex-row gap-8 md:gap-12",
                        children: [(0, x.jsx)("div", {
                            className: "flex justify-center items-center w-32",
                            children: (0, x.jsx)("img", {
                                src: "./assets/images/".concat(a)
                                
                            })
                        }), (0, x.jsxs)("div", {
                            className: "flex flex-col text-center md:text-left",
                            children: [(0, x.jsx)("h5", {
                                className: "mb-4 text-indigo-300 text-lg md:text-xl lg:text-2xl",
                                children: n
                            }), (0, x.jsx)("p", {
                                className: "text-white text-sm md:text-base lg:text-lg",
                                children: i
                            })]
                        })]
                    })
                },
                U = function(e) {
                    var t = e.data,
                        a = t.image,
                        n = t.title,
                        i = t.description;
                    return (0, x.jsxs)("div", {
                        className: "flex items-center mb-8 justify-center flex-col md:flex-row gap-8 md:gap-12",
                        children: [(0, x.jsx)("div", {
                            className: "flex justify-center items-center w-32",
                            children: (0, x.jsx)("img", {
                                src: "./assets/images/".concat(a)
                            })
                        }), (0, x.jsxs)("div", {
                            className: "flex flex-col text-center md:text-left",
                            children: [(0, x.jsx)("h5", {
                                className: "mb-4 text-indigo-300 text-lg md:text-xl lg:text-2xl",
                                children: n
                            }), (0, x.jsx)("p", {
                                className: "text-white text-sm md:text-base lg:text-lg",
                                children: i
                            })]
                        })]
                    })
                },
                D = [{
                    image: "roadmap_step_1.png",
                    title: "Presale",
                    description: "We are the Kumas, the most extraordinary in the Metaverse. Join our discord group, get whitelisted for our presales, as well as receive the latest information, giveaways, and more. 9,999 Kumas are waiting to be unleashed!"
                }, {
                    image: "roadmap_step_2.png",
                    title: "Q2 2022",
                    description: "After reaching 25,000 members on Discord, we will be giving away 10 exclusive Kumas in a giveaway as a token to our early investors. 1500 whitelist spots will be available to our Discord members. whitelist means you are guaranteed early access to the PRESALE for a lower price than MINT day."
                }, {
                    image: "roadmap_step_4.png",
                    title: "Q3 2022",
                    description: "As we have been so privileged to create this community of Kumas, we only feel it is right to give back to the community that helped and supported us up to this point. We will be investing $50,000 in our community's personal projects whether it be to help develop, help marketing, or purchase from a collection our community has created. In addition to this, we will be donating $100,000 to charities of our communities’ choice. This will be the first of many donations we use to make a positive impact on the world as a team. In addition, we will be raffling off physical, digital, and cash prizes up to $100,000 within our Discords Giveaways!. As we promise our holders real value you will be able to stake your Kuma on our staking website."
                }, {
                    image: "roadmap_step_6.png",
                    title: "Q4 2022",
                    description: "The MetaKuma team will be hosting community events for all of our holders, creators, influencers, and developers to meet in person. Owners will use their NFT located in their wallet as a pass to enter, and all event expenses will be accommodated. An exclusive limited quantity MetaKuma's merch drop will be available to holders as well. Whitelist members will be guaranteed MK merch. Events location, date, and time will be decided as a whole by our discord community."
                }, {
                    image: "n1-1s.png",
                    title: "THE METAVERSE",
                    description: "To the Metaverse we go, this is where the project gets real. The Kuma team has already begun investing in digital land and will soon begin developing a society that will change the way we network, interact, purchase, and trade assets. In the sandbox metaverse, we plan to build our very own “Kuma Hub”. Expect to see Kuma shops, Kuma arcades, and community events. We are beginning a development plan with top-tier Devs to create a fully decentralized “Play to Earn” Gaming Platform. Kuma Coin will be the currency used to power our platform’s economy. Will be dropping our 3D kumas as our next project as we giving away 10 3D Kumas to our early investors."
                }],
                B = function() {
                    return (0, x.jsx)("div", {
                        className: "roadmap-section",
                        id: "roadmap",
                        children: (0, x.jsx)("div", {
                            className: "container",
                            children: (0, x.jsxs)("div", {
                                className: "max-w-5xl mx-auto flex flex-col items-center",
                                children: [(0, x.jsx)("h2", {
                                    className: "mb-12 text-white font-bold text-4xl md:text-5xl lg:text-6xl",
                                    children: "Launch Roadmap"
                                }), (0, x.jsx)("div", {
                                    className: "",
                                    children: D.map((function(e, t) {
                                        return (0, x.jsx)(U, {
                                            data: e
                                        }, "roadmap_step_".concat(t))
                                    }))
                                })]
                            })
                        })
                    })
                },
                q = function(e) {
                    var t = e.data,
                        a = t.image,
                        n = t.name,
                        i = t.role;
                    return (0, x.jsxs)("div", {
                        className: "max-w-sm flex items-center justify-between h-full flex-col text-center w-full",
                        children: [(0, x.jsx)("img", {
                            className: "mb-5 rounded-full",
                            src: "./assets/images/".concat(a),
                            alt: "Member"
                        }), (0, x.jsx)("h5", {
                            className: "uppercase mb-5 md:text-lg lg:text-xl text-indigo-300 font-black underline",
                            children: n
                        }), (0, x.jsx)("p", {
                            className: "text-sm md:text-base text-white",
                            children: i
                        })]
                    })
                },
                J = [{
                    image: "1.png",
                    name: "KingKuma",
                    role: "FOUNDER | FINANCE MANAGER"
                }, {
                    image: "2.png",
                    name: "SuperKuma",
                    role: "2D/3D | ARTIST"
                }, {
                    image: "3.png",
                    name: "MegaKuma",
                    role: "MARKETER | COMMUNITY MANAGER"
                }, {
                    image: "4.png",
                    name: "Calytor",
                    role: "DEVELOPER"
                }],
                K = function() {
                    return (0, x.jsx)("div", {
                        className: "team-section",
                        id: "team",
                        children: (0, x.jsx)("div", {
                            className: "container",
                            children: (0, x.jsxs)("div", {
                                className: "mx-auto flex flex-col items-center",
                                children: [(0, x.jsx)("h2", {
                                    className: "mb-12 text-white font-bold text-4xl md:text-5xl lg:text-6xl",
                                    children: "Meet The Kumas!"
                                }), (0, x.jsx)("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-12",
                                    children: J.map((function(e, t) {
                                        return (0, x.jsx)(q, {
                                            data: e
                                        }, "member_".concat(t))
                                    }))
                                })]
                            })
                        })
                    })
                },
                Z = ["title", "titleId"];

            function H() {
                return H = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }, H.apply(this, arguments)
            }

            function G(e, t) {
                if (null == e) return {};
                var a, n, i = function(e, t) {
                    if (null == e) return {};
                    var a, n, i = {},
                        r = Object.keys(e);
                    for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || (i[a] = e[a]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (i[a] = e[a])
                }
                return i
            }

            function Q(e, t) {
                var a = e.title,
                    n = e.titleId,
                    i = G(e, Z);
                return l.createElement("svg", H({
                    stroke: "currentColor",
                    fill: "currentColor",
                    strokeWidth: 0,
                    viewBox: "0 0 24 24",
                    height: "28px",
                    width: "28px",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": n
                }, i), a ? l.createElement("title", {
                    id: n
                }, a) : null, C || (C = l.createElement("path", {
                    d: "m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"
                })))
            }
            var Y, z = l.forwardRef(Q),
                $ = (a.p, ["title", "titleId"]);

            function V() {
                return V = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }, V.apply(this, arguments)
            }

            function X(e, t) {
                if (null == e) return {};
                var a, n, i = function(e, t) {
                    if (null == e) return {};
                    var a, n, i = {},
                        r = Object.keys(e);
                    for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || (i[a] = e[a]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < r.length; n++) a = r[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (i[a] = e[a])
                }
                return i
            }

            function ee(e, t) {
                var a = e.title,
                    n = e.titleId,
                    i = X(e, $);
                return l.createElement("svg", V({
                    stroke: "currentColor",
                    fill: "currentColor",
                    strokeWidth: 0,
                    viewBox: "0 0 24 24",
                    height: "28px",
                    width: "28px",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": n
                }, i), a ? l.createElement("title", {
                    id: n
                }, a) : null, Y || (Y = l.createElement("path", {
                    d: "M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
                })))
            }
            var te = l.forwardRef(ee),
                ae = (a.p, function(e) {
                    var t, a = e.faq,
                        n = e.active,
                        i = e.onToggle,
                        r = a.title,
                        s = a.content,
                        o = (0, l.useRef)();
                    return (0, x.jsxs)("li", {
                        className: "accordion-item ".concat(n ? "active" : ""),
                        children: [(0, x.jsxs)("button", {
                            className: "accordion-item-button",
                            onClick: i,
                            children: [r, (0, x.jsxs)("span", {
                                className: "accordion-item-control",
                                children: [n ? (0, x.jsx)(z, {}) : (0, x.jsx)(te, {}), " "]
                            })]
                        }), (0, x.jsx)("div", {
                            ref: o,
                            className: "accordion-item-wrapper",
                            style: n ? {
                                height: null === o || void 0 === o || null === (t = o.current) || void 0 === t ? void 0 : t.scrollHeight
                            } : {
                                height: "0px"
                            },
                            children: (0, x.jsx)("div", {
                                className: "accordion-item-content",
                                dangerouslySetInnerHTML: {
                                    __html: s
                                }
                            })
                        })]
                    })
                }),
                ne = function(e) {
                    var t = (0, l.useState)(-1),
                        a = (0, r.Z)(t, 2),
                        n = a[0],
                        i = a[1];
                    return (0, x.jsx)("ul", {
                        className: "accordion",
                        children: e.data.map((function(e, t) {
                            return (0, x.jsx)(ae, {
                                onToggle: function() {
                                    return function(e) {
                                        if (n === e) return i(-1);
                                        i(e)
                                    }(t)
                                },
                                active: n === t,
                                faq: e
                            }, t)
                        }))
                    })
                },
                ie = [{
                    title: "What is a MetaKuma NFT?",
                    content: "The MetaKuma NFT is a project that living in the Ethereum blockchain. Each MetaKuma is unique and packed with promising utilities."
                }, {
                    title: "How do I Mint?",
                    content: "You can mint a MetaKuma on Launch Day. Minting is best done on Meta Mask, however we will provide information on the release date via discord."
                }, {
                    title: "What will I be able to do with my MetaKuma NFT?",
                    content: "Being a holder of a MetaKuma, you can do various things! You will be able to stake your Kumas ti receuve $KUMA which can be used for breeding, buying our products/merch, or simply selling it! A web3 game will be developed based on MetaKuma and $KUMA will be the currency used, complete tasks and fight in battles!.\n"
                }, {
                    title: "Are there any Royalty Fees?",
                    content: "The royalty fees are set at 7.5%. A strong portion of these royalties will be put towards marketing, more giveaways for the community, as well as charitable donations. We are committed to longitivtiy, and success."
                }, {
                    title: "Will there be a presale?",
                    content: "Yes, there will be a one day presale before the public launch. Please, join the MetaKuma Discord to learn more about joining the whitelist."
                }],
                re = function() {
                    return (0, x.jsx)("div", {
                        className: "faq-section",
                        id: "faq",
                        children: (0, x.jsx)("div", {
                            className: "container",
                            children: (0, x.jsxs)("div", {
                                className: "max-w-5xl mx-auto flex flex-col items-center",
                                children: [(0, x.jsx)("h2", {
                                    className: "mb-12 text-white font-bold text-4xl md:text-5xl lg:text-6xl",
                                    children: "Frequently Asked Questions"
                                }), (0, x.jsx)("div", {
                                    className: "flex flex-col",
                                    children: (0, x.jsx)(ne, {
                                        data: ie
                                    })
                                })]
                            })
                        })
                    })
                },
                le = [{
                    link: "utility",
                    text: "Utilities"
                }, {
                    link: "roadmap",
                    text: "Roadmap"
                }, {
                    link: "team",
                    text: "Team"
                }, {
                    link: "faq",
                    text: "FAQ"
                }],
                se = function() {
                    (0, i.s0)();
                    return (0, x.jsxs)(S, {
                        navs: le,
                        children: [(0, x.jsx)(R, {}), (0, x.jsx)(A, {}), (0, x.jsx)(B, {}), (0, x.jsx)(K, {}), (0, x.jsx)(re, {})]
                    })
                }
        },
        6563: function() {},
        9214: function() {},
        2361: function() {},
        4616: function() {},
        6567: function() {}
    }
]);
//# sourceMappingURL=715.52161e88.chunk.js.map