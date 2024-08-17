const t={KEY_FAVORITE:"favorite",KEY_CART:"cart"};var n={};function e(t){n.create(`\n\t    <div class="modal">\n      <img src="${t.img}" alt="${t.name}" width="300" />\n      <h2 class="title">${t.name}</h2>\n      <h3 class="price">${t.price} грн.</h3>\n      <p class="description">${t.description}</p>\n      <div class="button-wrap">\n        <button type="button" class="button js-favorite">Add to favorite</button>\n        <button type="button" class="button js-cart">Add to products cart</button>\n      </div>\n    </div>\n    `,{handler:null,onShow(t){this.handler=i.bind(t),document.addEventListener("keydown",this.handler)},onClose(){document.removeEventListener("keydown",this.handler)}}).show()}function i(t){"Escape"===t.code&&this.close()}n=function t(n,e,i){function o(a,s){if(!e[a]){if(!n[a]){var c=void 0;if(!s&&c)return c(a,!0);if(r)return r(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var d=e[a]={exports:{}};n[a][0].call(d.exports,(function(t){return o(n[a][1][t]||t)}),d,d.exports,t,n,e,i)}return e[a].exports}for(var r=void 0,a=0;a<i.length;a++)o(i[a]);return o}({1:[function(t,n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.create=e.visible=void 0;var i=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=document.createElement("div");return e.innerHTML=t.trim(),!0===n?e.children:e.firstChild},o=function(t,n){var e=t.children;return 1===e.length&&e[0].tagName===n},r=function(t){return null!=(t=t||document.querySelector(".basicLightbox"))&&!0===t.ownerDocument.body.contains(t)};e.visible=r,e.create=function(t,n){var e=function(t,n){var e=i('\n\t\t<div class="basicLightbox '.concat(n.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),r=e.querySelector(".basicLightbox__placeholder");t.forEach((function(t){return r.appendChild(t)}));var a=o(r,"IMG"),s=o(r,"VIDEO"),c=o(r,"IFRAME");return!0===a&&e.classList.add("basicLightbox--img"),!0===s&&e.classList.add("basicLightbox--video"),!0===c&&e.classList.add("basicLightbox--iframe"),e}(t=function(t){var n="string"==typeof t,e=t instanceof HTMLElement==1;if(!1===n&&!1===e)throw new Error("Content must be a DOM element/node or string");return!0===n?Array.from(i(t,!0)):"TEMPLATE"===t.tagName?[t.content.cloneNode(!0)]:Array.from(t.children)}(t),n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).closable&&(t.closable=!0),null==t.className&&(t.className=""),null==t.onShow&&(t.onShow=function(){}),null==t.onClose&&(t.onClose=function(){}),"boolean"!=typeof t.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof t.className)throw new Error("Property `className` must be a string");if("function"!=typeof t.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof t.onClose)throw new Error("Property `onClose` must be a function");return t}(n)),a=function(t){return!1!==n.onClose(s)&&function(t,n){return t.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===r(t)||t.parentElement.removeChild(t),n()}),410),!0}(e,(function(){if("function"==typeof t)return t(s)}))};!0===n.closable&&e.addEventListener("click",(function(t){t.target===e&&a()}));var s={element:function(){return e},visible:function(){return r(e)},show:function(t){return!1!==n.onShow(s)&&function(t,n){return document.body.appendChild(t),setTimeout((function(){requestAnimationFrame((function(){return t.classList.add("basicLightbox--visible"),n()}))}),10),!0}(e,(function(){if("function"==typeof t)return t(s)}))},close:a};return s}},{}]},{},[1])(1);const o=[{id:1,img:"https://static.dnipro-m.ua/cache/products/4878/catalog_origin_325618.jpg",name:"Шуруповерт",price:1290,description:"Мережевий дриль-шуруповерт TD-30 - надійний помічник для робіт по дому"},{id:2,img:"https://static.dnipro-m.ua/cache/products/5691/catalog_origin_191583.jpg",name:"Перфоратор",price:3948,description:"Перфоратор бочковий Dnipro-M ВН-20 використовується для виконання широкого спектру будівельних та ремонтних робіт"},{id:3,img:"https://static.dnipro-m.ua/cache/products/1248/catalog_origin_320661.jpg",name:"Шліфмашина",price:1299,description:"Кутова шліфувальна машина Dnipro-M GS-98 модель, яка поєднує в собі оптимальне співвідношення потужності та якості"},{id:4,img:"https://static.dnipro-m.ua/cache/products/5022/catalog_origin_317573.jpg",name:"Пила",price:11049,description:"Мобільна акумуляторна ланцюгова пила DSC-200BC DUAL, призначена для обрізання зайвих гілок, спилювання невеликих дерев"},{id:5,img:"https://static.dnipro-m.ua/cache/products/2298/catalog_origin_326046.jpg",name:"Рівень",price:897,description:"Рівень серії ProVision виробництва DNIPRO-M має високу точність вимірювань та чудові захисні властивоті"},{id:6,img:"https://static.dnipro-m.ua/cache/products/6566/catalog_origin_316315.jpg",name:"Тример",price:3699,description:"Тример електричний Dnipro-M 110 призначений для покосу густої трави, також кущів з діаметром стовбура до 20 мм."},{id:7,img:"https://static.dnipro-m.ua/cache/products/6483/catalog_origin_325859.jpg",name:"Мотокоса",price:4485,description:"Мотокоса Dnipro-M 43 призначена для покосу трави, чагарників, бурʼянів, газонів, а також для заготівлі сіна"},{id:8,img:"https://static.dnipro-m.ua/cache/products/2741/catalog_origin_318327.jpg",name:"Генератор",price:13470,description:"Бензиновий генератор GX-25 номінальною потужністю 2,5 кВт забезпечить автономність побутових приладів"}],r=document.querySelector(".js-list"),a=JSON.parse(localStorage.getItem(t.KEY_FAVORITE))??[],s=JSON.parse(localStorage.getItem(t.KEY_CART))??[];function c(t){return o.find((({id:n})=>n===t))}!function(t,n){let e;e=t.length?t.map((({id:t,img:n,name:e})=>` <li class="item js-card" data-id="${t}">\n      <img src="${n}" alt="${e}" width="300" />\n      <h2 class="title">${e}</h2>\n      <p class="info js-info">More information...</p>\n      <div class="button-wrap">\n        <button type="button" class="button js-favorite">Add to favorite</button>\n        <button type="button" class="button js-cart">Add to products cart</button>\n      </div>\n    </li>`)).join(""):' <li class="empty-item">\n      <img src="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg"  class="empty-img" alt="404" width="600" />\n    </li>',n.innerHTML=e}(o,r),r.addEventListener("click",(function(n){if(n.target.classList.contains("js-info")){const{id:t}=n.target.closest(".js-card").dataset;e(c(Number(t)))}if(n.target.classList.contains("js-favorite")){const{id:e}=n.target.closest(".js-card").dataset,i=c(Number(e));if(a.some((({id:t})=>t===i.id)))return;a.push(i),localStorage.setItem(t.KEY_FAVORITE,JSON.stringify(a))}if(n.target.classList.contains("js-cart")){const{id:e}=n.target.closest(".js-card").dataset,i=c(Number(e));s.push(i),localStorage.setItem(t.KEY_CART,JSON.stringify(s))}}));
//# sourceMappingURL=index.b32fce86.js.map
