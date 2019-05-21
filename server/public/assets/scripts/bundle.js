function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/******/(function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/var installedModules = {};
    /******/
    /******/ // The require function
    /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
            /******/return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
            /******/i: moduleId,
            /******/l: false,
            /******/exports: {}
            /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/__webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/__webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
            /******/Object.defineProperty(exports, name, {
                /******/configurable: false,
                /******/enumerable: true,
                /******/get: getter
                /******/ });
            /******/
        }
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
            return module['default'];
        } :
        /******/function getModuleExports() {
            return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/__webpack_require__.p = "";
    /******/
    /******/ // Load entry module and return exports
    /******/return __webpack_require__(__webpack_require__.s = 0);
    /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__flip__ = __webpack_require__(1);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__parallax__ = __webpack_require__(2);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(3);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__map__ = __webpack_require__(4);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__preloader__ = __webpack_require__(5);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__slider__ = __webpack_require__(6);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__sidebar__ = __webpack_require__(7);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__scroll__ = __webpack_require__(8);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_8__form__ = __webpack_require__(9);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_9__auth__ = __webpack_require__(10);

    let scrollInit = Object(__WEBPACK_IMPORTED_MODULE_7__scroll__["a" /* default */])();
    let flip = document.querySelector('#flip-container');
    let autorization = document.querySelector("#btn_autorization");
    let button = document.getElementById("hamburger-menu");
    let nav = document.getElementById("navigation");
    let slash = location.href.lastIndexOf("/");
    let container = document.getElementById("parallax");
    let hero = document.getElementById("hero");
    let blogNav = document.getElementById("blogNav");
    let url = location.href.substr(slash);


    //////


     if (url.indexOf("/about") > -1) {
         let skillList = document.querySelector(".skills-list");
         let skillCat =["Frontend","Backend","Workflow"];
         fetch("http://localhost:80/api/skills",{
             method: "GET",
         })
             .then(responce =>{

                 return  responce.json()
             }).then(data => {
             data = data.items
             console.log(data);
             console.log(skillList);
             for(let i=0;i < skillCat.length;i++){
               let skillslistItem =document.createElement("li");
                let skillRow =  document.createElement("div");
                let skillsRowTitle=document.createElement("div");
                let skillsRowlist=document.createElement("ul");
                skillslistItem.classList="skills-list__item";
                skillRow.classList="skills-row";
                skillsRowTitle.innerHTML=skillCat[i];
                skillsRowTitle.classList="skills-row__title";
                skillslistItem.appendChild(skillRow);
                skillRow.appendChild(skillsRowTitle);
                skillsRowlist.classList="skills-row__list";
                skillRow.appendChild(skillsRowlist);
                    for(let j=0;j<data.length;j++){

                        if(data[j].type !== i+1) continue;
                        let skillsRowItem =document.createElement("li");
                        let skill= document.createElement("div");
                        let skillCircle =document.createElementNS("http://www.w3.org/2000/svg","svg");
                        let skillCircleFirst= document.createElementNS("http://www.w3.org/2000/svg","circle");
                        let skillCircleSecond=document.createElementNS("http://www.w3.org/2000/svg","circle");
                        let skillTitle=document.createElement("span");
                        skillsRowItem.classList="skills-row__item";
                        skill.classList="skill";
                        skillCircle.classList="skill__circle";
                        skillCircle.setAttribute("viewBox","0 0 120 120");
                        skillCircleFirst.classList="skill__circle-first";
                        skillCircleFirst.setAttribute("r","45");
                        skillCircleFirst.setAttribute("cx","50%");
                        skillCircleFirst.setAttribute("cy","50%");
                        skillCircleFirst.setAttribute("fill","none");
                        skillCircleSecond.classList="skill__circle-second";
                        skillCircleSecond.setAttribute("r","45");
                        skillCircleSecond.setAttribute("cx","50%");
                        skillCircleSecond.setAttribute("cy","50%");
                        skillCircleSecond.setAttribute("transform","rotate(-90 60 60)");
                        skillCircleSecond.style.strokeDasharray=`${data[j].percents * 2.828} 286.6`;
                        skillTitle.classList="skill__title";
                        skillTitle.innerHTML= data[j].name;
                        skillsRowItem.appendChild(skill);
                        skill.appendChild(skillCircle);
                        skillCircle.appendChild(skillCircleFirst);
                        skillCircle.appendChild(skillCircleSecond);
                        skill.appendChild(skillTitle);
                        skillsRowlist.appendChild(skillsRowItem)

                    }
                skillList.appendChild(skillslistItem)
                 console.log(skillslistItem)
             }

       })
        Object(__WEBPACK_IMPORTED_MODULE_1__parallax__["a" /* default */])(hero, container);
        Object(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* default */])(button, nav);
        Object(__WEBPACK_IMPORTED_MODULE_3__map__["a" /* default */])();
         Object(__WEBPACK_IMPORTED_MODULE_4__preloader__["a" /* default */])();
        scrollInit.top();
    } else if (url.indexOf("/blog") > -1) {
        Object(__WEBPACK_IMPORTED_MODULE_6__sidebar__["a" /* default */])(blogNav);
        Object(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* default */])(button, nav);
        Object(__WEBPACK_IMPORTED_MODULE_4__preloader__["a" /* default */])();
        Object(__WEBPACK_IMPORTED_MODULE_1__parallax__["a" /* default */])(hero, container);
        scrollInit.top();
    } else if(url.indexOf("/my-works") > -1) {
        Object(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* default */])(button, nav);
        Object(__WEBPACK_IMPORTED_MODULE_1__parallax__["a" /* default */])(hero, container);
         Object(__WEBPACK_IMPORTED_MODULE_4__preloader__["a" /* default */])();
        Object(__WEBPACK_IMPORTED_MODULE_5__slider__["a" /* default */])(1.3);
        scrollInit.top();
        scrollInit.bottom();
        Object(__WEBPACK_IMPORTED_MODULE_8__form__["a" /* default */])();
    }
    else{
        Object(__WEBPACK_IMPORTED_MODULE_1__parallax__["a" /* default */])(hero, container, "mouse");
        Object(__WEBPACK_IMPORTED_MODULE_0__flip__["a" /* default */])(autorization, flip);
        Object(__WEBPACK_IMPORTED_MODULE_4__preloader__["a" /* default */])();
        Object(__WEBPACK_IMPORTED_MODULE_9__auth__["a" /* default */])();
    }

    /***/
},
/* 1 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony default export */
    __webpack_exports__["a"] = (button, block) => {

        button.addEventListener("click", e => {
            e.preventDefault();
            button.style.cssText = "opacity:0;cursor:default";
            block.classList.add("reverse");
        });
    };

    /***/
},
/* 2 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony default export */
    __webpack_exports__["a"] = (section, container, triger) => {
        let sectionHeight = section.offsetHeight;
        let layer = container.firstElementChild;

        const scrollParallax = e => {
            let marginTop = window.pageYOffset;
            if (marginTop <= sectionHeight) {
                layer.style.transform = `translate3d(0,-${marginTop * 0.11}px , 0)`;
            }
        };
        const moveParallax = e => {
            let initialX = window.innerWidth / 2 - e.pageX;
            let initialY = window.innerHeight / 2 - e.pageY;
            layer.style.transform = `translate3d(${initialX * 0.03}px, ${initialY * 0.03}px, 0)`;
        };
        if (triger === "mouse") {
            section.addEventListener("mousemove", moveParallax);
        } else {
            document.addEventListener("scroll", scrollParallax);
            document.addEventListener("resize", () => {
                sectionHeight = section.offsetHeight;
            });
        }
    };

    /***/
},
/* 3 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    /* harmony default export */
    __webpack_exports__["a"] = (button, menu) => {
        let flag = true;
        let menuList = menu.getElementsByTagName("li");
        let current = menu.getElementsByClassName("navigation__link_current");
        const open = () => {
            new Promise(resolve => {
                button.firstElementChild.classList.add("hamburger-menu-bars_closed");
                menu.classList.add("navigation_fixed");
                menu.style.opacity = 1;
                document.body.classList.add("fixed");
                resolve();
            }).then(setTimeout(() => {
                for (let i = 0; i < menuList.length; i++) {
                    setTimeout(() => {
                        menuList[i].style.left = 0;
                    }, i * 140);
                }
            }, 900));
        };

        const close = () => {
            new Promise(resolve => {
                document.body.classList.remove("fixed");
                for (let i = 0; i < menuList.length; i++) {
                    setTimeout(() => {
                        menuList[i].style.left = "-100%";
                    }, i * 110);
                }
                resolve();
            }).then(() => {
                menu.style.opacity = 0;
                button.firstElementChild.classList.remove("hamburger-menu-bars_closed");
                setTimeout(() => {
                    menu.classList.remove("navigation_fixed");
                    menu.style = "";
                }, 900);
            });
        };
        button.addEventListener("click", () => {
            if (flag) {
                open();
            } else {
                close();
            }
            flag = flag ? false : true;
        });
        current[0].addEventListener("click", e => {
            if (menu.classList.contains("navigation_fixed")) {
                e.preventDefault();
                close();
                flag = flag ? false : true;
            }
        });
    };

    /***/
},
/* 4 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony default export */
    __webpack_exports__["a"] = () => {
        let map;
        let screenWidth = screen.width;
        map = new google.maps.Map(document.getElementById("map"), {
            center: {
                lat: 55.64566662,
                lng: 37.7236551
            },
            zoom: 15,
            styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            }, {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            }, {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#bdbdbd"
                }]
            }, {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#f2f2f2"
                }, {
                    "lightness": 5
                }]
            }, {
                "featureType": "landscape.natural.landcover",
                "elementType": "geometry.fill",
                "stylers": [{
                    "saturation": -25
                }, {
                    "lightness": -65
                }]
            }, {
                "featureType": "landscape.natural.terrain",
                "elementType": "geometry.fill",
                "stylers": [{
                    "saturation": -100
                }, {
                    "lightness": 25
                }]
            }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            }, {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dadada"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#e8e8e8"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }, {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            }, {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            }, {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#c9c9c9"
                }]
            }, {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#4369aa"
                }]
            }, {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }]
        });
        let marker = new google.maps.Marker({
            position: {
                lat: 55.64610556,
                lng: 37.73828655
            },
            map: map,
            icon: {
                url: "assets/images/svg/map_marker.svg",
                size: new google.maps.Size(50, 30),
                origin: new google.maps.Point(0, 0)
            }

        });
        const setMap = () => {
            if (screenWidth > 780) {
                map.setCenter({ lat: 55.64566662, lng: 37.7236551 });
            } else if (screenWidth <= 780 && screenWidth > 560) {
                map.setCenter({ lat: 55.64611464, lng: 37.72957742 });
            } else if (screenWidth <= 560) {
                map.setCenter({ lat: 55.64612675, lng: 37.73675501 });
            }
        };
        setMap();
        window.addEventListener("resize", () => {
            screenWidth = screen.width;
            setMap();
        });
    };

    /***/
},
/* 5 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony default export */
    __webpack_exports__["a"] = () => {
        let container = document.getElementById("preloader");
        let text = document.getElementById("text");
        let inner = document.getElementById("inner");
        let images = document.querySelectorAll("img");
        let videos = document.querySelectorAll("video");
        let resources = Array.prototype.concat.call(...images, ...videos);
        let count = 0;

        if (sessionStorage.getItem("my-preloader")) {
            container.style.display = "none";
        }
        const stop = percents => {
            if (percents === 100) {
                setTimeout(() => {

                    container.style.display = "none";
                }, 1000);
            }
        };
        const show = number => {
            let percents = Math.round(number / resources.length * 100);
            text.innerHTML = percents;
            inner.style.strokeDasharray = `${percents * 1.57} 282.6`;
            stop(percents);
        };
        if(images.length >0){
            for (let i = 0; i <= images.length - 1; i++) {
                console.log(images[i], "loading");
                images[i].addEventListener("load", () => {
                    count++;
                    show(count);
                });
            }
        }
        if(videos.length >0){
            for (let i = 0; i <= videos.length - 1; i++) {
                videos[i].addEventListener("canplay", () => {
                    count++;
                    show(count);
                });
            }
        }

    };

    /***/
},
/* 6 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony default export */
    __webpack_exports__["a"] = duration => {
        let slide_move = (() => {
            var _ref = _asyncToGenerator(function* (flag) {
                console.log('click');
                if (!trigger) {
                    return;
                }
                trigger = false;
                const trans_wait = yield append_ins(flag);

                if (trans_wait.complete) {
                    if (flag) {

                        yield change_head(slide_right, flag);
                    } else {

                        yield change_head(slide_left);
                    }
                }
            });

            return function slide_move(_x) {
                return _ref.apply(this, arguments);
            };
        })();

        const slide_right = document.querySelector('.slider__slide_next');
        const slide_left = document.querySelector('.slider__slide_prev');
        const slide_head = document.querySelector('.slider__head');
        const height = document.querySelector('.slider__slide').clientHeight;
        const control_next = document.querySelector('.scroll__slider_next');
        const control_prev = document.querySelector('.scroll__slider_prev');
        const text = document.querySelector('.slider__title');
        const tech = document.querySelector('.slider__tech');
        const link = document.querySelector('.slider__link');
        let trigger = true;
        slide_right.appendChild(slide_right.children[0]);
        slide_left.insertBefore(slide_left.children[slide_left.children.length - 1], slide_left.children[0]);

        control_next.addEventListener('click', e => {
            e.preventDefault();
            slide_move(true);
        });

        control_prev.addEventListener('click', e => {
            e.preventDefault();
            slide_move(false);
        });

        function append_ins(flag = false) {
            if (flag) {
                slide_right.style.transition = ` transform ${duration}s linear`;
                slide_right.style.transform = `translateY(-${height}px)`;
                setTimeout(() => {
                    slide_right.appendChild(slide_right.children[0]);
                    slide_right.style = "";
                    trigger = true;
                }, duration * 1000);

                slide_left.insertBefore(slide_left.children[1], slide_left.children[0]);
                slide_left.style.top = "-" + height + "px";
                slide_left.style.transition = ` transform ${duration}s linear`;
                slide_left.style.transform = `translateY(${height}px)`;
                setTimeout(() => {
                    slide_left.appendChild(slide_left.children[1]);
                    slide_left.style = "";
                }, duration * 1000);
            } else {
                slide_left.style.top = "-" + height + "px";
                slide_left.insertBefore(slide_left.children[slide_left.children.length - 1], slide_left.children[0]);
                slide_left.style.transition = ` transform ${duration}s linear`;
                slide_left.style.transform = `translateY(${height}px)`;
                setTimeout(() => {
                    slide_left.style = "";
                    trigger = true;
                }, duration * 1000);

                slide_right.insertBefore(slide_right.children[slide_right.children.length - 1], slide_right.children[1]);
                slide_right.style.transition = ` transform ${duration}s linear`;
                slide_right.style.transform = `translateY(-${height}px)`;
                setTimeout(() => {
                    slide_right.insertBefore(slide_right.children[1], slide_right.children[0]);
                    slide_right.style = "";
                }, duration * 1000);
            }
            const trans = { complete: true };
            return trans;
        }

        function change_head(elem, flag) {
            let current;
            if (flag) {

                current = elem.firstElementChild.firstElementChild.firstElementChild;
            } else {
                current = elem.children[1].firstElementChild.firstElementChild;
            }
            let src = current.getAttribute("src");
            let name = current.getAttribute("data-title");
            let tecnologies = current.getAttribute("data-tech");
            let linkSource = current.getAttribute("data-link");
            slide_head.firstElementChild.firstElementChild.setAttribute("src", src);
            console.log(linkSource);
            text.innerHTML = name;
            tech.innerHTML = tecnologies;
            link.firstElementChild.setAttribute("href", linkSource);
        }
    };

    /***/
},
/* 7 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony default export */
    __webpack_exports__["a"] = container => {
        let blog = document.getElementById("blog");
        let articleNavList = container.firstElementChild;
       let articlesNav = Array.prototype.slice.apply(articleNavList.children);
        let article = document.getElementById("articles");
        let articlesList = article.children;
        articlesNav[0].classList.add("articles-list__item_active");
        for (let i = 0; i < articlesNav.length; i++) {
            articlesNav[i].setAttribute("data-name", `#article-${i + 1}`);
        }
        for (let i = 0; i < articlesList.length; i++) {
            articlesList[i].setAttribute("id", `#article-${i + 1}`);
        }

        const toggle = () => {
            container.classList.toggle("blog__nav_opened");
        };
        const sidebarMove = () => {
            if (blog.getBoundingClientRect().top <= 10) {
                container.classList.add("blog__nav_fixed");

                if (window.innerWidth < 768) {
                    articleNavList.style.top = "50%";
                }
                articlesNav.map(elem => {
                    let curentLink = elem.getAttribute("data-name");
                    let ref = document.getElementById(curentLink);
                    let rect = ref.getBoundingClientRect();
                    if (rect.top <= 300 && rect.top + rect.height > 0) {
                        articlesNav.map(elem => {
                            elem.classList.remove("articles-list__item_active");
                        });
                        elem.classList.add("articles-list__item_active");
                    }
                });
            } else {
                container.classList.remove("blog__nav_fixed");
                articleNavList.style = "";
            }
        };
        const slideTo = e => {
            let curentLink;
            e.stopPropagation();
            if (e.target.classList.contains("articles__text")) {
                curentLink = e.target.parentNode.getAttribute("data-name");
            } else {
                curentLink = e.target.getAttribute("data-name");
            }
            let ref = document.getElementById(curentLink);
            ref.scrollIntoView({ behavior: "smooth" });
            if (window.innerWidth < 768) {
                articlesNav.map(elem => {

                    elem.classList.remove("articles-list__item_active");
                });
                e.target.classList.add("articles-list__item_active");
                container.classList.remove("blog__nav_opened");
            }
        };
        container.addEventListener("click", toggle);
        document.addEventListener("scroll", sidebarMove);

        articleNavList.addEventListener("click", slideTo);
    };

    /***/
},
/* 8 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony default export */
    __webpack_exports__["a"] = () => {
        let top = document.querySelector(".scroll__down");
        let sections = document.querySelector(".wrapper").children;
        let bottom = document.querySelector(".scroll__up");

        console.log(top);
        const scrollTop = () => {

            sections[1].scrollIntoView({ behavior: "smooth", block: "start" });
        };
        const scrollDown = () => {
            sections[sections.length - 2].scrollIntoView({ behavior: "smooth", block: "end" });
        };

        return {
            top() {
                top.addEventListener("click", scrollTop);
            },
            bottom() {
                bottom.addEventListener("click", scrollDown);
            }
        };
    };

    /***/
},
/* 9 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony default export */
    __webpack_exports__["a"] = () => {
        let form = document.querySelector(".feedback");
        let status = document.querySelector(" .feedback__status");
        let myHeaders = new Headers({
            'Content-Type': 'application/json'
        });

        form.addEventListener("submit", e => {
            e.preventDefault();
            const data = new FormData(form);
            let object = {};
            data.forEach(function (value, key) {
                object[key] = value;
            });
            let json = JSON.stringify(object);
            fetch("http://localhost:80/contacts", {
                method: "POST",
                body: json,
                headers: myHeaders
            }).then(response => {
                return response.text().then(text => {
                    status.innerHTML = text;
                    if (text === "Письмо успешно отправлено") {
                        form.reset();
                    }
                });
            }).catch(() => {
                status.innerHTML = "Ошибка сервера";
                form.reset();
            });
        });
    };

    /***/
},
/* 10 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony default export */
    __webpack_exports__["a"] = () => {
        let form = document.querySelector(".autherization__form");

    };

    /***/
}]
/******/);