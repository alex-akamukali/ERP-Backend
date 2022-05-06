/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@inertiajs/inertia-svelte/src/createInertiaApp.js":
/*!************************************************************************!*\
  !*** ./node_modules/@inertiajs/inertia-svelte/src/createInertiaApp.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createInertiaApp)
/* harmony export */ });
/* harmony import */ var _App_svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.svelte */ "./node_modules/@inertiajs/inertia-svelte/src/App.svelte");


async function createInertiaApp({ id = 'app', resolve, setup, page, render }) {
  const isServer = typeof window === 'undefined'
  const el = isServer ? null : document.getElementById(id)
  const initialPage = page || JSON.parse(el.dataset.page)
  const resolveComponent = name => Promise.resolve(resolve(name))

  let head = []

  const svelteApp = await resolveComponent(initialPage.component).then(initialComponent => {
    return setup({
      el,
      App: _App_svelte__WEBPACK_IMPORTED_MODULE_0__["default"],
      props: {
        initialPage,
        initialComponent,
        resolveComponent,
        onHeadUpdate: isServer ? elements => (head = elements) : null,
      },
    })
  })

  if (isServer) {
    // TODO
  }
}


/***/ }),

/***/ "./node_modules/@inertiajs/inertia-svelte/src/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@inertiajs/inertia-svelte/src/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* reexport safe */ _App_svelte__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "InertiaApp": () => (/* reexport safe */ _App_svelte__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "InertiaLink": () => (/* reexport safe */ _InertiaLink_svelte__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "Link": () => (/* reexport safe */ _InertiaLink_svelte__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "app": () => (/* reexport safe */ _App_svelte__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "createInertiaApp": () => (/* reexport safe */ _createInertiaApp__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "inertia": () => (/* reexport safe */ _link__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "link": () => (/* reexport safe */ _InertiaLink_svelte__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "page": () => (/* reexport safe */ _page__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "remember": () => (/* reexport safe */ _useRemember__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "useForm": () => (/* reexport safe */ _useForm__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "useRemember": () => (/* reexport safe */ _useRemember__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ "./node_modules/@inertiajs/inertia-svelte/src/page.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ "./node_modules/@inertiajs/inertia-svelte/src/link.js");
/* harmony import */ var _useForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useForm */ "./node_modules/@inertiajs/inertia-svelte/src/useForm.js");
/* harmony import */ var _createInertiaApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createInertiaApp */ "./node_modules/@inertiajs/inertia-svelte/src/createInertiaApp.js");
/* harmony import */ var _useRemember__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useRemember */ "./node_modules/@inertiajs/inertia-svelte/src/useRemember.js");
/* harmony import */ var _App_svelte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.svelte */ "./node_modules/@inertiajs/inertia-svelte/src/App.svelte");
/* harmony import */ var _InertiaLink_svelte__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InertiaLink.svelte */ "./node_modules/@inertiajs/inertia-svelte/src/InertiaLink.svelte");









/***/ }),

/***/ "./node_modules/@inertiajs/inertia-svelte/src/link.js":
/*!************************************************************!*\
  !*** ./node_modules/@inertiajs/inertia-svelte/src/link.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((node, options = {}) => {
  const [href, data] = (0,_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.mergeDataIntoQueryString)(options.method || 'get', node.href || options.href || '', options.data || {}, options.queryStringArrayFormat || 'brackets')
  node.href = href
  options.data = data

  const dispatch = (0,svelte__WEBPACK_IMPORTED_MODULE_0__.createEventDispatcher)()

  function visit(event) {
    dispatch('click', event)

    const href = node.href || options.href

    if (!href) {
      throw new Error('Option "href" is required')
    }

    if ((0,_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.shouldIntercept)(event)) {
      event.preventDefault()
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.visit(href, options)
    }
  }

  node.addEventListener('click', visit)

  return {
    update(newOptions) {
      const [href, data] = (0,_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.mergeDataIntoQueryString)(newOptions.method || 'get', node.href || newOptions.href, newOptions.data || {}, newOptions.queryStringArrayFormat || 'brackets')
      node.href = href
      newOptions.data = data
      options = newOptions
    },
    destroy() {
      node.removeEventListener('click', visit)
    },
  }
});


/***/ }),

/***/ "./node_modules/@inertiajs/inertia-svelte/src/page.js":
/*!************************************************************!*\
  !*** ./node_modules/@inertiajs/inertia-svelte/src/page.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./node_modules/@inertiajs/inertia-svelte/src/store.js");
/* harmony import */ var svelte_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/store */ "./node_modules/svelte/store/index.mjs");



const page = (0,svelte_store__WEBPACK_IMPORTED_MODULE_1__.derived)(_store__WEBPACK_IMPORTED_MODULE_0__["default"], $store => $store.page)

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (page);


/***/ }),

/***/ "./node_modules/@inertiajs/inertia-svelte/src/store.js":
/*!*************************************************************!*\
  !*** ./node_modules/@inertiajs/inertia-svelte/src/store.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/store */ "./node_modules/svelte/store/index.mjs");


const store = (0,svelte_store__WEBPACK_IMPORTED_MODULE_0__.writable)({
  component: null,
  layout: [],
  page: {},
  key: null,
})

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);


/***/ }),

/***/ "./node_modules/@inertiajs/inertia-svelte/src/useForm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@inertiajs/inertia-svelte/src/useForm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.isequal */ "./node_modules/lodash.isequal/index.js");
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isequal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svelte_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/store */ "./node_modules/svelte/store/index.mjs");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");




function useForm(...args) {
  const rememberKey = typeof args[0] === 'string' ? args[0] : null
  const data = (typeof args[0] === 'string' ? args[1] : args[0]) || {}
  const restored = rememberKey ? _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.restore(rememberKey) : null
  let defaults = data
  let cancelToken = null
  let recentlySuccessfulTimeoutId = null
  let transform = data => data

  const store = (0,svelte_store__WEBPACK_IMPORTED_MODULE_1__.writable)({
    ...restored ? restored.data : data,
    isDirty: false,
    errors: restored ? restored.errors : {},
    hasErrors: false,
    progress: null,
    wasSuccessful: false,
    recentlySuccessful: false,
    processing: false,
    setStore(key, value) {
      store.update(store => {
        return Object.assign({}, store, typeof key === 'string' ? {[key]: value} : key)
      })
    },
    data() {
      return Object
        .keys(data)
        .reduce((carry, key) => {
          carry[key] = this[key]
          return carry
        }, {})
    },
    transform(callback) {
      transform = callback

      return this
    },
    defaults(key, value) {
      if (typeof key === 'undefined') {
        defaults = Object.assign(defaults, this.data())

        return this
      }

      defaults = Object.assign(
        defaults,
        value ? ({ [key]: value }) : key,
      )

      return this
    },
    reset(...fields) {
      if (fields.length === 0) {
        this.setStore(defaults)
      } else {
        this.setStore(Object
          .keys(defaults)
          .filter(key => fields.includes(key))
          .reduce((carry, key) => {
            carry[key] = defaults[key]
            return carry
          }, {}),
        )
      }

      return this
    },
    setError(key, value) {
      this.setStore('errors', {
        ...this.errors,
        ...(value ? { [key]: value } : key),
      })

      return this
    },
    clearErrors(...fields) {
      this.setStore('errors', Object.keys(this.errors).reduce(
        (carry, field) => ({
          ...carry,
          ...(fields.length > 0 && !fields.includes(field) ? { [field] : this.errors[field] } : {}),
        }), 
        {},
      ))

      return this
    },
    submit(method, url, options = {}) {
      const data = transform(this.data())
      const _options = {
        ...options,
        onCancelToken: (token) => {
          cancelToken = token

          if (options.onCancelToken) {
            return options.onCancelToken(token)
          }
        },
        onBefore: visit => {
          this.setStore('wasSuccessful', false)
          this.setStore('recentlySuccessful', false)
          clearTimeout(recentlySuccessfulTimeoutId)

          if (options.onBefore) {
            return options.onBefore(visit)
          }
        },
        onStart: visit => {
          this.setStore('processing', true)

          if (options.onStart) {
            return options.onStart(visit)
          }
        },
        onProgress: event => {
          this.setStore('progress', event)

          if (options.onProgress) {
            return options.onProgress(event)
          }
        },
        onSuccess: async page => {
          this.setStore('processing', false)
          this.setStore('progress', null)
          this.clearErrors()
          this.setStore('wasSuccessful', true)
          this.setStore('recentlySuccessful', true)
          recentlySuccessfulTimeoutId = setTimeout(() => this.setStore('recentlySuccessful', false), 2000)

          if (options.onSuccess) {
            return options.onSuccess(page)
          }
        },
        onError: errors => {
          this.setStore('processing', false)
          this.setStore('progress', null)
          this.clearErrors().setError(errors)

          if (options.onError) {
            return options.onError(errors)
          }
        },
        onCancel: () => {
          this.setStore('processing', false)
          this.setStore('progress', null)

          if (options.onCancel) {
            return options.onCancel()
          }
        },
        onFinish: () => {
          this.setStore('processing', false)
          this.setStore('progress', null)
          cancelToken = null

          if (options.onFinish) {
            return options.onFinish()
          }
        },
      }

      if (method === 'delete') {
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia["delete"](url, { ..._options, data  })
      } else {
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia[method](url, data, _options)
      }
    },
    get(url, options) {
      this.submit('get', url, options)
    },
    post(url, options) {
      this.submit('post', url, options)
    },
    put(url, options) {
      this.submit('put', url, options)
    },
    patch(url, options) {
      this.submit('patch', url, options)
    },
    delete(url, options) {
      this.submit('delete', url, options)
    },
    cancel() {
      if (cancelToken) {
        cancelToken.cancel()
      }
    },
  })

  store.subscribe(form => {
    if (form.isDirty === lodash_isequal__WEBPACK_IMPORTED_MODULE_0___default()(form.data(), defaults)) {
      form.setStore('isDirty', !form.isDirty)
    }

    const hasErrors = Object.keys(form.errors).length > 0
    if (form.hasErrors !== hasErrors) {
      form.setStore('hasErrors', !form.hasErrors)
    }

    if (rememberKey) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.remember({ data: form.data(), errors: form.errors }, rememberKey)
    }
  })

  return store
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useForm);


/***/ }),

/***/ "./node_modules/@inertiajs/inertia-svelte/src/useRemember.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@inertiajs/inertia-svelte/src/useRemember.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var svelte_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/store */ "./node_modules/svelte/store/index.mjs");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");




function useRemember(initialState, key) {
  const restored = _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.restore(key)
  const store = (0,svelte_store__WEBPACK_IMPORTED_MODULE_1__.writable)(restored !== undefined ? restored : initialState)
  const unsubscribe = store.subscribe(state => _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.remember(state, key))

  ;(0,svelte__WEBPACK_IMPORTED_MODULE_0__.onDestroy)(unsubscribe)

  return store
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRemember);


/***/ }),

/***/ "./node_modules/@inertiajs/inertia/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@inertiajs/inertia/dist/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=e(__webpack_require__(/*! axios */ "./node_modules/axios/index.js")),n=__webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js"),i=e(__webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/cjs.js"));function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var o,s={modal:null,listener:null,show:function(e){var t=this;"object"==typeof e&&(e="All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>"+JSON.stringify(e));var n=document.createElement("html");n.innerHTML=e,n.querySelectorAll("a").forEach(function(e){return e.setAttribute("target","_top")}),this.modal=document.createElement("div"),this.modal.style.position="fixed",this.modal.style.width="100vw",this.modal.style.height="100vh",this.modal.style.padding="50px",this.modal.style.boxSizing="border-box",this.modal.style.backgroundColor="rgba(0, 0, 0, .6)",this.modal.style.zIndex=2e5,this.modal.addEventListener("click",function(){return t.hide()});var i=document.createElement("iframe");if(i.style.backgroundColor="white",i.style.borderRadius="5px",i.style.width="100%",i.style.height="100%",this.modal.appendChild(i),document.body.prepend(this.modal),document.body.style.overflow="hidden",!i.contentWindow)throw new Error("iframe not yet ready.");i.contentWindow.document.open(),i.contentWindow.document.write(n.outerHTML),i.contentWindow.document.close(),this.listener=this.hideOnEscape.bind(this),document.addEventListener("keydown",this.listener)},hide:function(){this.modal.outerHTML="",this.modal=null,document.body.style.overflow="visible",document.removeEventListener("keydown",this.listener)},hideOnEscape:function(e){27===e.keyCode&&this.hide()}};function a(e,t){var n;return function(){var i=arguments,r=this;clearTimeout(n),n=setTimeout(function(){return e.apply(r,[].slice.call(i))},t)}}function c(e,t,n){for(var i in void 0===t&&(t=new FormData),void 0===n&&(n=null),e=e||{})Object.prototype.hasOwnProperty.call(e,i)&&d(t,l(n,i),e[i]);return t}function l(e,t){return e?e+"["+t+"]":t}function d(e,t,n){return Array.isArray(n)?Array.from(n.keys()).forEach(function(i){return d(e,l(t,i.toString()),n[i])}):n instanceof Date?e.append(t,n.toISOString()):n instanceof File?e.append(t,n,n.name):n instanceof Blob?e.append(t,n):"boolean"==typeof n?e.append(t,n?"1":"0"):"string"==typeof n?e.append(t,n):"number"==typeof n?e.append(t,""+n):null==n?e.append(t,""):void c(n,e,t)}function u(e){return new URL(e.toString(),window.location.toString())}function h(e,t,r,o){void 0===o&&(o="brackets");var s=/^https?:\/\//.test(t.toString()),a=s||t.toString().startsWith("/"),c=!a&&!t.toString().startsWith("#")&&!t.toString().startsWith("?"),l=t.toString().includes("?")||e===exports.Method.GET&&Object.keys(r).length,d=t.toString().includes("#"),u=new URL(t.toString(),"http://localhost");return e===exports.Method.GET&&Object.keys(r).length&&(u.search=n.stringify(i(n.parse(u.search,{ignoreQueryPrefix:!0}),r),{encodeValuesOnly:!0,arrayFormat:o}),r={}),[[s?u.protocol+"//"+u.host:"",a?u.pathname:"",c?u.pathname.substring(1):"",l?u.search:"",d?u.hash:""].join(""),r]}function p(e){return(e=new URL(e.href)).hash="",e}function f(e,t){return document.dispatchEvent(new CustomEvent("inertia:"+e,t))}(o=exports.Method||(exports.Method={})).GET="get",o.POST="post",o.PUT="put",o.PATCH="patch",o.DELETE="delete";var v=function(e){return f("finish",{detail:{visit:e}})},m=function(e){return f("navigate",{detail:{page:e}})},g="undefined"==typeof window,w=function(){function e(){this.visitId=null}var n=e.prototype;return n.init=function(e){var t=e.resolveComponent,n=e.swapComponent;this.page=e.initialPage,this.resolveComponent=t,this.swapComponent=n,this.isBackForwardVisit()?this.handleBackForwardVisit(this.page):this.isLocationVisit()?this.handleLocationVisit(this.page):this.handleInitialPageVisit(this.page),this.setupEventListeners()},n.handleInitialPageVisit=function(e){this.page.url+=window.location.hash,this.setPage(e,{preserveState:!0}).then(function(){return m(e)})},n.setupEventListeners=function(){window.addEventListener("popstate",this.handlePopstateEvent.bind(this)),document.addEventListener("scroll",a(this.handleScrollEvent.bind(this),100),!0)},n.scrollRegions=function(){return document.querySelectorAll("[scroll-region]")},n.handleScrollEvent=function(e){"function"==typeof e.target.hasAttribute&&e.target.hasAttribute("scroll-region")&&this.saveScrollPositions()},n.saveScrollPositions=function(){this.replaceState(r({},this.page,{scrollRegions:Array.from(this.scrollRegions()).map(function(e){return{top:e.scrollTop,left:e.scrollLeft}})}))},n.resetScrollPositions=function(){var e;document.documentElement.scrollTop=0,document.documentElement.scrollLeft=0,this.scrollRegions().forEach(function(e){e.scrollTop=0,e.scrollLeft=0}),this.saveScrollPositions(),window.location.hash&&(null==(e=document.getElementById(window.location.hash.slice(1)))||e.scrollIntoView())},n.restoreScrollPositions=function(){var e=this;this.page.scrollRegions&&this.scrollRegions().forEach(function(t,n){var i=e.page.scrollRegions[n];i&&(t.scrollTop=i.top,t.scrollLeft=i.left)})},n.isBackForwardVisit=function(){return window.history.state&&window.performance&&window.performance.getEntriesByType("navigation").length>0&&"back_forward"===window.performance.getEntriesByType("navigation")[0].type},n.handleBackForwardVisit=function(e){var t=this;window.history.state.version=e.version,this.setPage(window.history.state,{preserveScroll:!0,preserveState:!0}).then(function(){t.restoreScrollPositions(),m(e)})},n.locationVisit=function(e,t){try{window.sessionStorage.setItem("inertiaLocationVisit",JSON.stringify({preserveScroll:t})),window.location.href=e.href,p(window.location).href===p(e).href&&window.location.reload()}catch(e){return!1}},n.isLocationVisit=function(){try{return null!==window.sessionStorage.getItem("inertiaLocationVisit")}catch(e){return!1}},n.handleLocationVisit=function(e){var t,n,i,r,o=this,s=JSON.parse(window.sessionStorage.getItem("inertiaLocationVisit")||"");window.sessionStorage.removeItem("inertiaLocationVisit"),e.url+=window.location.hash,e.rememberedState=null!=(t=null==(n=window.history.state)?void 0:n.rememberedState)?t:{},e.scrollRegions=null!=(i=null==(r=window.history.state)?void 0:r.scrollRegions)?i:[],this.setPage(e,{preserveScroll:s.preserveScroll,preserveState:!0}).then(function(){s.preserveScroll&&o.restoreScrollPositions(),m(e)})},n.isLocationVisitResponse=function(e){return e&&409===e.status&&e.headers["x-inertia-location"]},n.isInertiaResponse=function(e){return null==e?void 0:e.headers["x-inertia"]},n.createVisitId=function(){return this.visitId={},this.visitId},n.cancelVisit=function(e,t){var n=t.cancelled,i=void 0!==n&&n,r=t.interrupted,o=void 0!==r&&r;!e||e.completed||e.cancelled||e.interrupted||(e.cancelToken.cancel(),e.onCancel(),e.completed=!1,e.cancelled=i,e.interrupted=o,v(e),e.onFinish(e))},n.finishVisit=function(e){e.cancelled||e.interrupted||(e.completed=!0,e.cancelled=!1,e.interrupted=!1,v(e),e.onFinish(e))},n.resolvePreserveOption=function(e,t){return"function"==typeof e?e(t):"errors"===e?Object.keys(t.props.errors||{}).length>0:e},n.visit=function(e,n){var i=this,o=void 0===n?{}:n,a=o.method,l=void 0===a?exports.Method.GET:a,d=o.data,v=void 0===d?{}:d,m=o.replace,g=void 0!==m&&m,w=o.preserveScroll,y=void 0!==w&&w,S=o.preserveState,b=void 0!==S&&S,E=o.only,P=void 0===E?[]:E,I=o.headers,x=void 0===I?{}:I,V=o.errorBag,T=void 0===V?"":V,L=o.forceFormData,O=void 0!==L&&L,k=o.onCancelToken,C=void 0===k?function(){}:k,M=o.onBefore,A=void 0===M?function(){}:M,F=o.onStart,R=void 0===F?function(){}:F,j=o.onProgress,D=void 0===j?function(){}:j,B=o.onFinish,q=void 0===B?function(){}:B,N=o.onCancel,H=void 0===N?function(){}:N,W=o.onSuccess,G=void 0===W?function(){}:W,U=o.onError,X=void 0===U?function(){}:U,J=o.queryStringArrayFormat,K=void 0===J?"brackets":J,_="string"==typeof e?u(e):e;if(!function e(t){return t instanceof File||t instanceof Blob||t instanceof FileList&&t.length>0||t instanceof FormData&&Array.from(t.values()).some(function(t){return e(t)})||"object"==typeof t&&null!==t&&Object.values(t).some(function(t){return e(t)})}(v)&&!O||v instanceof FormData||(v=c(v)),!(v instanceof FormData)){var z=h(l,_,v,K),Q=z[1];_=u(z[0]),v=Q}var Y={url:_,method:l,data:v,replace:g,preserveScroll:y,preserveState:b,only:P,headers:x,errorBag:T,forceFormData:O,queryStringArrayFormat:K,cancelled:!1,completed:!1,interrupted:!1};if(!1!==A(Y)&&function(e){return f("before",{cancelable:!0,detail:{visit:e}})}(Y)){this.activeVisit&&this.cancelVisit(this.activeVisit,{interrupted:!0}),this.saveScrollPositions();var Z=this.createVisitId();this.activeVisit=r({},Y,{onCancelToken:C,onBefore:A,onStart:R,onProgress:D,onFinish:q,onCancel:H,onSuccess:G,onError:X,queryStringArrayFormat:K,cancelToken:t.CancelToken.source()}),C({cancel:function(){i.activeVisit&&i.cancelVisit(i.activeVisit,{cancelled:!0})}}),function(e){f("start",{detail:{visit:e}})}(Y),R(Y),t({method:l,url:p(_).href,data:l===exports.Method.GET?{}:v,params:l===exports.Method.GET?v:{},cancelToken:this.activeVisit.cancelToken.token,headers:r({},x,{Accept:"text/html, application/xhtml+xml","X-Requested-With":"XMLHttpRequest","X-Inertia":!0},P.length?{"X-Inertia-Partial-Component":this.page.component,"X-Inertia-Partial-Data":P.join(",")}:{},T&&T.length?{"X-Inertia-Error-Bag":T}:{},this.page.version?{"X-Inertia-Version":this.page.version}:{}),onUploadProgress:function(e){v instanceof FormData&&(e.percentage=Math.round(e.loaded/e.total*100),function(e){f("progress",{detail:{progress:e}})}(e),D(e))}}).then(function(e){var t;if(!i.isInertiaResponse(e))return Promise.reject({response:e});var n=e.data;P.length&&n.component===i.page.component&&(n.props=r({},i.page.props,n.props)),y=i.resolvePreserveOption(y,n),(b=i.resolvePreserveOption(b,n))&&null!=(t=window.history.state)&&t.rememberedState&&n.component===i.page.component&&(n.rememberedState=window.history.state.rememberedState);var o=_,s=u(n.url);return o.hash&&!s.hash&&p(o).href===s.href&&(s.hash=o.hash,n.url=s.href),i.setPage(n,{visitId:Z,replace:g,preserveScroll:y,preserveState:b})}).then(function(){var e=i.page.props.errors||{};if(Object.keys(e).length>0){var t=T?e[T]?e[T]:{}:e;return function(e){f("error",{detail:{errors:e}})}(t),X(t)}return f("success",{detail:{page:i.page}}),G(i.page)}).catch(function(e){if(i.isInertiaResponse(e.response))return i.setPage(e.response.data,{visitId:Z});if(i.isLocationVisitResponse(e.response)){var t=u(e.response.headers["x-inertia-location"]),n=_;n.hash&&!t.hash&&p(n).href===t.href&&(t.hash=n.hash),i.locationVisit(t,!0===y)}else{if(!e.response)return Promise.reject(e);f("invalid",{cancelable:!0,detail:{response:e.response}})&&s.show(e.response.data)}}).then(function(){i.activeVisit&&i.finishVisit(i.activeVisit)}).catch(function(e){if(!t.isCancel(e)){var n=f("exception",{cancelable:!0,detail:{exception:e}});if(i.activeVisit&&i.finishVisit(i.activeVisit),n)return Promise.reject(e)}})}},n.setPage=function(e,t){var n=this,i=void 0===t?{}:t,r=i.visitId,o=void 0===r?this.createVisitId():r,s=i.replace,a=void 0!==s&&s,c=i.preserveScroll,l=void 0!==c&&c,d=i.preserveState,h=void 0!==d&&d;return Promise.resolve(this.resolveComponent(e.component)).then(function(t){o===n.visitId&&(e.scrollRegions=e.scrollRegions||[],e.rememberedState=e.rememberedState||{},(a=a||u(e.url).href===window.location.href)?n.replaceState(e):n.pushState(e),n.swapComponent({component:t,page:e,preserveState:h}).then(function(){l||n.resetScrollPositions(),a||m(e)}))})},n.pushState=function(e){this.page=e,window.history.pushState(e,"",e.url)},n.replaceState=function(e){this.page=e,window.history.replaceState(e,"",e.url)},n.handlePopstateEvent=function(e){var t=this;if(null!==e.state){var n=e.state,i=this.createVisitId();Promise.resolve(this.resolveComponent(n.component)).then(function(e){i===t.visitId&&(t.page=n,t.swapComponent({component:e,page:n,preserveState:!1}).then(function(){t.restoreScrollPositions(),m(n)}))})}else{var o=u(this.page.url);o.hash=window.location.hash,this.replaceState(r({},this.page,{url:o.href})),this.resetScrollPositions()}},n.get=function(e,t,n){return void 0===t&&(t={}),void 0===n&&(n={}),this.visit(e,r({},n,{method:exports.Method.GET,data:t}))},n.reload=function(e){return void 0===e&&(e={}),this.visit(window.location.href,r({},e,{preserveScroll:!0,preserveState:!0}))},n.replace=function(e,t){var n;return void 0===t&&(t={}),console.warn("Inertia.replace() has been deprecated and will be removed in a future release. Please use Inertia."+(null!=(n=t.method)?n:"get")+"() instead."),this.visit(e,r({preserveState:!0},t,{replace:!0}))},n.post=function(e,t,n){return void 0===t&&(t={}),void 0===n&&(n={}),this.visit(e,r({preserveState:!0},n,{method:exports.Method.POST,data:t}))},n.put=function(e,t,n){return void 0===t&&(t={}),void 0===n&&(n={}),this.visit(e,r({preserveState:!0},n,{method:exports.Method.PUT,data:t}))},n.patch=function(e,t,n){return void 0===t&&(t={}),void 0===n&&(n={}),this.visit(e,r({preserveState:!0},n,{method:exports.Method.PATCH,data:t}))},n.delete=function(e,t){return void 0===t&&(t={}),this.visit(e,r({preserveState:!0},t,{method:exports.Method.DELETE}))},n.remember=function(e,t){var n,i;void 0===t&&(t="default"),g||this.replaceState(r({},this.page,{rememberedState:r({},null==(n=this.page)?void 0:n.rememberedState,(i={},i[t]=e,i))}))},n.restore=function(e){var t,n;if(void 0===e&&(e="default"),!g)return null==(t=window.history.state)||null==(n=t.rememberedState)?void 0:n[e]},n.on=function(e,t){var n=function(e){var n=t(e);e.cancelable&&!e.defaultPrevented&&!1===n&&e.preventDefault()};return document.addEventListener("inertia:"+e,n),function(){return document.removeEventListener("inertia:"+e,n)}},e}(),y={buildDOMElement:function(e){var t=document.createElement("template");t.innerHTML=e;var n=t.content.firstChild;if(!e.startsWith("<script "))return n;var i=document.createElement("script");return i.innerHTML=n.innerHTML,n.getAttributeNames().forEach(function(e){i.setAttribute(e,n.getAttribute(e)||"")}),i},isInertiaManagedElement:function(e){return e.nodeType===Node.ELEMENT_NODE&&null!==e.getAttribute("inertia")},findMatchingElementIndex:function(e,t){var n=e.getAttribute("inertia");return null!==n?t.findIndex(function(e){return e.getAttribute("inertia")===n}):-1},update:a(function(e){var t=this,n=e.map(function(e){return t.buildDOMElement(e)});Array.from(document.head.childNodes).filter(function(e){return t.isInertiaManagedElement(e)}).forEach(function(e){var i=t.findMatchingElementIndex(e,n);if(-1!==i){var r,o=n.splice(i,1)[0];o&&!e.isEqualNode(o)&&(null==e||null==(r=e.parentNode)||r.replaceChild(o,e))}else{var s;null==e||null==(s=e.parentNode)||s.removeChild(e)}}),n.forEach(function(e){return document.head.appendChild(e)})},1)},S=new w;exports.Inertia=S,exports.createHeadManager=function(e,t,n){var i={},r=0;function o(){var e=Object.values(i).reduce(function(e,t){return e.concat(t)},[]).reduce(function(e,n){if(-1===n.indexOf("<"))return e;if(0===n.indexOf("<title ")){var i=n.match(/(<title [^>]+>)(.*?)(<\/title>)/);return e.title=i?""+i[1]+t(i[2])+i[3]:n,e}var r=n.match(/ inertia="[^"]+"/);return r?e[r[0]]=n:e[Object.keys(e).length]=n,e},{});return Object.values(e)}function s(){e?n(o()):y.update(o())}return{createProvider:function(){var e=function(){var e=r+=1;return i[e]=[],e.toString()}();return{update:function(t){return function(e,t){void 0===t&&(t=[]),null!==e&&Object.keys(i).indexOf(e)>-1&&(i[e]=t),s()}(e,t)},disconnect:function(){return function(e){null!==e&&-1!==Object.keys(i).indexOf(e)&&(delete i[e],s())}(e)}}}}},exports.hrefToUrl=u,exports.mergeDataIntoQueryString=h,exports.shouldIntercept=function(e){var t="a"===e.currentTarget.tagName.toLowerCase();return!(e.target&&null!=e&&e.target.isContentEditable||e.defaultPrevented||t&&e.which>1||t&&e.altKey||t&&e.ctrlKey||t&&e.metaKey||t&&e.shiftKey)},exports.urlWithoutHash=p;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@inertiajs/progress/dist/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@inertiajs/progress/dist/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var n,e=(n=__webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js"))&&"object"==typeof n&&"default"in n?n.default:n,t=null;function r(n){document.addEventListener("inertia:start",o.bind(null,n)),document.addEventListener("inertia:progress",i),document.addEventListener("inertia:finish",s)}function o(n){t=setTimeout(function(){return e.start()},n)}function i(n){e.isStarted()&&n.detail.progress.percentage&&e.set(Math.max(e.status,n.detail.progress.percentage/100*.9))}function s(n){clearTimeout(t),e.isStarted()&&(n.detail.visit.completed?e.done():n.detail.visit.interrupted?e.set(0):n.detail.visit.cancelled&&(e.done(),e.remove()))}exports.InertiaProgress={init:function(n){var t=void 0===n?{}:n,o=t.delay,i=t.color,s=void 0===i?"#29d":i,a=t.includeCSS,p=void 0===a||a,d=t.showSpinner,l=void 0!==d&&d;r(void 0===o?250:o),e.configure({showSpinner:l}),p&&function(n){var e=document.createElement("style");e.type="text/css",e.textContent="\n    #nprogress {\n      pointer-events: none;\n    }\n\n    #nprogress .bar {\n      background: "+n+";\n\n      position: fixed;\n      z-index: 1031;\n      top: 0;\n      left: 0;\n\n      width: 100%;\n      height: 2px;\n    }\n\n    #nprogress .peg {\n      display: block;\n      position: absolute;\n      right: 0px;\n      width: 100px;\n      height: 100%;\n      box-shadow: 0 0 10px "+n+", 0 0 5px "+n+";\n      opacity: 1.0;\n\n      -webkit-transform: rotate(3deg) translate(0px, -4px);\n          -ms-transform: rotate(3deg) translate(0px, -4px);\n              transform: rotate(3deg) translate(0px, -4px);\n    }\n\n    #nprogress .spinner {\n      display: block;\n      position: fixed;\n      z-index: 1031;\n      top: 15px;\n      right: 15px;\n    }\n\n    #nprogress .spinner-icon {\n      width: 18px;\n      height: 18px;\n      box-sizing: border-box;\n\n      border: solid 2px transparent;\n      border-top-color: "+n+";\n      border-left-color: "+n+";\n      border-radius: 50%;\n\n      -webkit-animation: nprogress-spinner 400ms linear infinite;\n              animation: nprogress-spinner 400ms linear infinite;\n    }\n\n    .nprogress-custom-parent {\n      overflow: hidden;\n      position: relative;\n    }\n\n    .nprogress-custom-parent #nprogress .spinner,\n    .nprogress-custom-parent #nprogress .bar {\n      position: absolute;\n    }\n\n    @-webkit-keyframes nprogress-spinner {\n      0%   { -webkit-transform: rotate(0deg); }\n      100% { -webkit-transform: rotate(360deg); }\n    }\n    @keyframes nprogress-spinner {\n      0%   { transform: rotate(0deg); }\n      100% { transform: rotate(360deg); }\n    }\n  ",document.head.appendChild(e)}(s)}};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        config.transitional && config.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./node_modules/axios/lib/helpers/isAxiosError.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports["default"] = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var validator = __webpack_require__(/*! ../helpers/validator */ "./node_modules/axios/lib/helpers/validator.js");

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      forcedJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      clarifyTimeoutError: validators.transitional(validators.boolean, '1.0.0')
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var defaults = __webpack_require__(/*! ./../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");
var enhanceError = __webpack_require__(/*! ./core/enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/validator.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/validator.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var pkg = __webpack_require__(/*! ./../../package.json */ "./node_modules/axios/package.json");

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};
var currentVerArr = pkg.version.split('.');

/**
 * Compare package versions
 * @param {string} version
 * @param {string?} thanVersion
 * @returns {boolean}
 */
function isOlderVersion(version, thanVersion) {
  var pkgVersionArr = thanVersion ? thanVersion.split('.') : currentVerArr;
  var destVer = version.split('.');
  for (var i = 0; i < 3; i++) {
    if (pkgVersionArr[i] > destVer[i]) {
      return true;
    } else if (pkgVersionArr[i] < destVer[i]) {
      return false;
    }
  }
  return false;
}

/**
 * Transitional option validator
 * @param {function|boolean?} validator
 * @param {string?} version
 * @param {string} message
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  var isDeprecated = version && isOlderVersion(version);

  function formatMessage(opt, desc) {
    return '[Axios v' + pkg.version + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed in ' + version));
    }

    if (isDeprecated && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

module.exports = {
  isOlderVersion: isOlderVersion,
  assertOptions: assertOptions,
  validators: validators
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "./node_modules/@inertiajs/inertia-svelte/src/App.svelte":
/*!***************************************************************!*\
  !*** ./node_modules/@inertiajs/inertia-svelte/src/App.svelte ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./node_modules/@inertiajs/inertia-svelte/src/store.js");
/* harmony import */ var _Render_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Render.svelte */ "./node_modules/@inertiajs/inertia-svelte/src/Render.svelte");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* node_modules/@inertiajs/inertia-svelte/src/App.svelte generated by Svelte v3.47.0 */





function create_fragment(ctx) {
  var render;
  var current;
  var render_spread_levels = [
  /*components*/
  ctx[0]];
  var render_props = {};

  for (var i = 0; i < render_spread_levels.length; i += 1) {
    render_props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_1__.assign)(render_props, render_spread_levels[i]);
  }

  render = new _Render_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
    props: render_props
  });
  return {
    c: function c() {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_1__.create_component)(render.$$.fragment);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_1__.mount_component)(render, target, anchor);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var render_changes = dirty &
      /*components*/
      1 ? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_1__.get_spread_update)(render_spread_levels, [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_1__.get_spread_object)(
      /*components*/
      ctx[0])]) : {};
      render.$set(render_changes);
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_1__.transition_in)(render.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_1__.transition_out)(render.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_1__.destroy_component)(render, detaching);
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var child;
  var layout;
  var components;
  var $store;
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_1__.component_subscribe)($$self, _store__WEBPACK_IMPORTED_MODULE_2__["default"], function ($$value) {
    return $$invalidate(5, $store = $$value);
  });
  var initialPage = $$props.initialPage,
      resolveComponent = $$props.resolveComponent;
  _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__.Inertia.init({
    initialPage: initialPage,
    resolveComponent: resolveComponent,
    swapComponent: function () {
      var _swapComponent = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(_ref3) {
        var component, page, preserveState;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                component = _ref3.component, page = _ref3.page, preserveState = _ref3.preserveState;
                _store__WEBPACK_IMPORTED_MODULE_2__["default"].update(function (current) {
                  return {
                    component: component,
                    page: page,
                    key: preserveState ? current.key : Date.now()
                  };
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function swapComponent(_x) {
        return _swapComponent.apply(this, arguments);
      }

      return swapComponent;
    }()
  });

  $$self.$$set = function ($$props) {
    if ('initialPage' in $$props) $$invalidate(1, initialPage = $$props.initialPage);
    if ('resolveComponent' in $$props) $$invalidate(2, resolveComponent = $$props.resolveComponent);
  };

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*$store*/
    32) {
      $: $$invalidate(3, child = $store.component && (0,_Render_svelte__WEBPACK_IMPORTED_MODULE_3__.h)($store.component["default"], $store.page.props));
    }

    if ($$self.$$.dirty &
    /*$store*/
    32) {
      $: $$invalidate(4, layout = $store.component && $store.component.layout);
    }

    if ($$self.$$.dirty &
    /*layout, child, $store*/
    56) {
      $: $$invalidate(0, components = layout ? Array.isArray(layout) ? layout.concat(child).reverse().reduce(function (child, layout) {
        return (0,_Render_svelte__WEBPACK_IMPORTED_MODULE_3__.h)(layout, $store.page.props, [child]);
      }) : (0,_Render_svelte__WEBPACK_IMPORTED_MODULE_3__.h)(layout, $store.page.props, [child]) : child);
    }
  };

  return [components, initialPage, resolveComponent, child, layout, $store];
}

var App = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(App, _SvelteComponent);

  var _super = _createSuper(App);

  function App(options) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_1__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_1__.safe_not_equal, {
      initialPage: 1,
      resolveComponent: 2
    });
    return _this;
  }

  return _createClass(App);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_1__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./node_modules/@inertiajs/inertia-svelte/src/InertiaLink.svelte":
/*!***********************************************************************!*\
  !*** ./node_modules/@inertiajs/inertia-svelte/src/InertiaLink.svelte ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* node_modules/@inertiajs/inertia-svelte/src/InertiaLink.svelte generated by Svelte v3.47.0 */




function create_fragment(ctx) {
  var a;
  var current;
  var mounted;
  var dispose;
  var default_slot_template =
  /*#slots*/
  ctx[11]["default"];
  var default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx,
  /*$$scope*/
  ctx[10], null);
  var a_levels = [
  /*$$restProps*/
  ctx[2], {
    href:
    /*href*/
    ctx[0]
  }];
  var a_data = {};

  for (var i = 0; i < a_levels.length; i += 1) {
    a_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(a_data, a_levels[i]);
  }

  return {
    c: function c() {
      a = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      if (default_slot) default_slot.c();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(a, a_data);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, a, anchor);

      if (default_slot) {
        default_slot.m(a, null);
      }

      current = true;

      if (!mounted) {
        dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(a, "click",
        /*visit*/
        ctx[1]);
        mounted = true;
      }
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot) {
        if (default_slot.p && (!current || dirty &
        /*$$scope*/
        1024)) {
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[10], !current ? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(
          /*$$scope*/
          ctx[10]) : (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(default_slot_template,
          /*$$scope*/
          ctx[10], dirty, null), null);
        }
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_attributes)(a, a_data = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(a_levels, [dirty &
      /*$$restProps*/
      4 &&
      /*$$restProps*/
      ctx[2], (!current || dirty &
      /*href*/
      1) && {
        href:
        /*href*/
        ctx[0]
      }]));
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(default_slot, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(default_slot, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(a);
      if (default_slot) default_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var omit_props_names = ["data", "href", "method", "replace", "preserveScroll", "preserveState", "only", "headers"];
  var $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names);
  var _$$props = $$props,
      _$$props$$$slots = _$$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = _$$props.$$scope;
  var dispatch = (0,svelte__WEBPACK_IMPORTED_MODULE_1__.createEventDispatcher)();
  var _$$props2 = $$props,
      _$$props2$data = _$$props2.data,
      data = _$$props2$data === void 0 ? {} : _$$props2$data,
      href = _$$props2.href,
      _$$props2$method = _$$props2.method,
      method = _$$props2$method === void 0 ? 'get' : _$$props2$method,
      _$$props2$replace = _$$props2.replace,
      replace = _$$props2$replace === void 0 ? false : _$$props2$replace,
      _$$props2$preserveScr = _$$props2.preserveScroll,
      preserveScroll = _$$props2$preserveScr === void 0 ? false : _$$props2$preserveScr,
      _$$props2$preserveSta = _$$props2.preserveState,
      preserveState = _$$props2$preserveSta === void 0 ? null : _$$props2$preserveSta,
      _$$props2$only = _$$props2.only,
      only = _$$props2$only === void 0 ? [] : _$$props2$only,
      _$$props2$headers = _$$props2.headers,
      headers = _$$props2$headers === void 0 ? {} : _$$props2$headers;
  (0,svelte__WEBPACK_IMPORTED_MODULE_1__.beforeUpdate)(function () {
    $$invalidate(4, method = method.toLowerCase());

    var _mergeDataIntoQuerySt = (0,_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.mergeDataIntoQueryString)(method, href, data),
        _mergeDataIntoQuerySt2 = _slicedToArray(_mergeDataIntoQuerySt, 2),
        _href = _mergeDataIntoQuerySt2[0],
        _data = _mergeDataIntoQuerySt2[1];

    $$invalidate(0, href = _href);
    $$invalidate(3, data = _data);

    if (method !== 'get') {
      console.warn("Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes \"Open Link in New Tab/Window\" accessibility issues.\n\nPlease specify a more appropriate element using the \"inertia\" directive. For example:\n\n<button use:inertia={{ method: 'post', href: '".concat(href, "' }}>...</button>"));
    }
  });

  function visit(event) {
    dispatch('click', event);

    if ((0,_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.shouldIntercept)(event)) {
      event.preventDefault();
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.visit(href, {
        data: data,
        method: method,
        preserveScroll: preserveScroll,
        preserveState: preserveState !== null ? preserveState : method !== 'get',
        replace: replace,
        only: only,
        headers: headers
      });
    }
  }

  $$self.$$set = function ($$new_props) {
    $$props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)({}, $$props), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.exclude_internal_props)($$new_props));
    $$invalidate(2, $$restProps = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.compute_rest_props)($$props, omit_props_names));
    if ('data' in $$new_props) $$invalidate(3, data = $$new_props.data);
    if ('href' in $$new_props) $$invalidate(0, href = $$new_props.href);
    if ('method' in $$new_props) $$invalidate(4, method = $$new_props.method);
    if ('replace' in $$new_props) $$invalidate(5, replace = $$new_props.replace);
    if ('preserveScroll' in $$new_props) $$invalidate(6, preserveScroll = $$new_props.preserveScroll);
    if ('preserveState' in $$new_props) $$invalidate(7, preserveState = $$new_props.preserveState);
    if ('only' in $$new_props) $$invalidate(8, only = $$new_props.only);
    if ('headers' in $$new_props) $$invalidate(9, headers = $$new_props.headers);
    if ('$$scope' in $$new_props) $$invalidate(10, $$scope = $$new_props.$$scope);
  };

  return [href, visit, $$restProps, data, method, replace, preserveScroll, preserveState, only, headers, $$scope, slots];
}

var InertiaLink = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(InertiaLink, _SvelteComponent);

  var _super = _createSuper(InertiaLink);

  function InertiaLink(options) {
    var _this;

    _classCallCheck(this, InertiaLink);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
      data: 3,
      href: 0,
      method: 4,
      replace: 5,
      preserveScroll: 6,
      preserveState: 7,
      only: 8,
      headers: 9
    });
    return _this;
  }

  return _createClass(InertiaLink);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InertiaLink);

/***/ }),

/***/ "./node_modules/@inertiajs/inertia-svelte/src/Render.svelte":
/*!******************************************************************!*\
  !*** ./node_modules/@inertiajs/inertia-svelte/src/Render.svelte ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "h": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./node_modules/@inertiajs/inertia-svelte/src/store.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* node_modules/@inertiajs/inertia-svelte/src/Render.svelte generated by Svelte v3.47.0 */



function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[4] = list[i];
  child_ctx[6] = i;
  return child_ctx;
} // (19:0) {#if $store.component}


function create_if_block(ctx) {
  var switch_instance;
  var switch_instance_anchor;
  var current;
  var switch_instance_spread_levels = [
  /*props*/
  ctx[1]];
  var switch_value =
  /*component*/
  ctx[0];

  function switch_props(ctx) {
    var switch_instance_props = {
      $$slots: {
        "default": [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    };

    for (var i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(switch_instance_props, switch_instance_spread_levels[i]);
    }

    return {
      props: switch_instance_props
    };
  }

  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
  }

  return {
    c: function c() {
      if (switch_instance) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(switch_instance.$$.fragment);
      switch_instance_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
    },
    m: function m(target, anchor) {
      if (switch_instance) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(switch_instance, target, anchor);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, switch_instance_anchor, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var switch_instance_changes = dirty &
      /*props*/
      2 ? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(switch_instance_spread_levels, [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_object)(
      /*props*/
      ctx[1])]) : {};

      if (dirty &
      /*$$scope, children*/
      132) {
        switch_instance_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (switch_value !== (switch_value =
      /*component*/
      ctx[0])) {
        if (switch_instance) {
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();
          var old_component = switch_instance;
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(old_component.$$.fragment, 1, 0, function () {
            (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(old_component, 1);
          });
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
        }

        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx));
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(switch_instance.$$.fragment);
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(switch_instance.$$.fragment, 1);
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i: function i(local) {
      if (current) return;
      if (switch_instance) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(switch_instance.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      if (switch_instance) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(switch_instance.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(switch_instance_anchor);
      if (switch_instance) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(switch_instance, detaching);
    }
  };
} // (21:4) {#each children as child, index (component && component.length === index ? $store.key : null)}


function create_each_block(key_1, ctx) {
  var first;
  var render;
  var current;
  var render_spread_levels = [
  /*child*/
  ctx[4]];
  var render_props = {};

  for (var i = 0; i < render_spread_levels.length; i += 1) {
    render_props = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.assign)(render_props, render_spread_levels[i]);
  }

  render = new Render({
    props: render_props
  });
  return {
    key: key_1,
    first: null,
    c: function c() {
      first = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(render.$$.fragment);
      this.first = first;
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, first, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(render, target, anchor);
      current = true;
    },
    p: function p(new_ctx, dirty) {
      ctx = new_ctx;
      var render_changes = dirty &
      /*children*/
      4 ? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_update)(render_spread_levels, [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_spread_object)(
      /*child*/
      ctx[4])]) : {};
      render.$set(render_changes);
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(render.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(render.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(first);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(render, detaching);
    }
  };
} // (20:2) <svelte:component this={component} {...props}>


function create_default_slot(ctx) {
  var each_blocks = [];
  var each_1_lookup = new Map();
  var each_1_anchor;
  var current;
  var each_value =
  /*children*/
  ctx[2];

  var get_key = function get_key(ctx) {
    return (
      /*component*/
      ctx[0] &&
      /*component*/
      ctx[0].length ===
      /*index*/
      ctx[6] ?
      /*$store*/
      ctx[3].key : null
    );
  };

  for (var i = 0; i < each_value.length; i += 1) {
    var child_ctx = get_each_context(ctx, each_value, i);
    var key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }

  return {
    c: function c() {
      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      each_1_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
    },
    m: function m(target, anchor) {
      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].m(target, anchor);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, each_1_anchor, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*children, component, $store*/
      13) {
        each_value =
        /*children*/
        ctx[2];
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();
        each_blocks = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_keyed_each)(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, each_1_anchor.parentNode, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.outro_and_destroy_block, create_each_block, each_1_anchor, get_each_context);
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
      }
    },
    i: function i(local) {
      if (current) return;

      for (var _i3 = 0; _i3 < each_value.length; _i3 += 1) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[_i3]);
      }

      current = true;
    },
    o: function o(local) {
      for (var _i4 = 0; _i4 < each_blocks.length; _i4 += 1) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(each_blocks[_i4]);
      }

      current = false;
    },
    d: function d(detaching) {
      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
        each_blocks[_i5].d(detaching);
      }

      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(each_1_anchor);
    }
  };
}

function create_fragment(ctx) {
  var if_block_anchor;
  var current;
  var if_block =
  /*$store*/
  ctx[3].component && create_if_block(ctx);
  return {
    c: function c() {
      if (if_block) if_block.c();
      if_block_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
    },
    m: function m(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, if_block_anchor, anchor);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (
      /*$store*/
      ctx[3].component) {
        if (if_block) {
          if_block.p(ctx, dirty);

          if (dirty &
          /*$store*/
          8) {
            (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block, 1, 1, function () {
          if_block = null;
        });
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
      }
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block);
      current = false;
    },
    d: function d(detaching) {
      if (if_block) if_block.d(detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(if_block_anchor);
    }
  };
}

var h = function h(component, props, children) {
  return _objectSpread(_objectSpread({
    component: component
  }, props ? {
    props: props
  } : {}), children ? {
    children: children
  } : {});
};

function instance($$self, $$props, $$invalidate) {
  var $store;
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, _store__WEBPACK_IMPORTED_MODULE_1__["default"], function ($$value) {
    return $$invalidate(3, $store = $$value);
  });
  var component = $$props.component;
  var _$$props$props = $$props.props,
      props = _$$props$props === void 0 ? {} : _$$props$props;
  var _$$props$children = $$props.children,
      children = _$$props$children === void 0 ? [] : _$$props$children;

  $$self.$$set = function ($$props) {
    if ('component' in $$props) $$invalidate(0, component = $$props.component);
    if ('props' in $$props) $$invalidate(1, props = $$props.props);
    if ('children' in $$props) $$invalidate(2, children = $$props.children);
  };

  return [component, props, children, $store];
}

var Render = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Render, _SvelteComponent);

  var _super = _createSuper(Render);

  function Render(options) {
    var _this;

    _classCallCheck(this, Render);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
      component: 0,
      props: 1,
      children: 2
    });
    return _this;
  }

  return _createClass(Render);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Render);


/***/ }),

/***/ "./resources/js/Pages/Auth/CheckAuthComponent.svelte":
/*!***********************************************************!*\
  !*** ./resources/js/Pages/Auth/CheckAuthComponent.svelte ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-svelte */ "./node_modules/@inertiajs/inertia-svelte/src/index.js");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* resources/js/Pages/Auth/CheckAuthComponent.svelte generated by Svelte v3.47.0 */




function instance($$self, $$props, $$invalidate) {
  var timeout = null;
  var checkLogged = null; //  export let name;

  function checkAuth() {
    return _checkAuth.apply(this, arguments);
  }

  function _checkAuth() {
    _checkAuth = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var url, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = '/check-auth';
              _context.next = 3;
              return fetch(url).then(function (res) {
                return res.json();
              });

            case 3:
              response = _context.sent;
              //  console.log(response);
              $$invalidate(0, checkLogged = response);
              timeout = setTimeout(function () {
                checkAuth();
              }, 5000);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _checkAuth.apply(this, arguments);
  }

  (0,svelte__WEBPACK_IMPORTED_MODULE_3__.onMount)(function () {
    checkAuth();
  });

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*checkLogged*/
    1) {
      $: if (checkLogged && !checkLogged.is_logged) {
        alert('Not Logged, logging out!');
        location.reload();
      }
    }
  };

  return [checkLogged];
}

var CheckAuthComponent = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(CheckAuthComponent, _SvelteComponent);

  var _super = _createSuper(CheckAuthComponent);

  function CheckAuthComponent(options) {
    var _this;

    _classCallCheck(this, CheckAuthComponent);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_1__.init)(_assertThisInitialized(_this), options, instance, null, svelte_internal__WEBPACK_IMPORTED_MODULE_1__.safe_not_equal, {});
    return _this;
  }

  return _createClass(CheckAuthComponent);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_1__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckAuthComponent);

/***/ }),

/***/ "./resources/js/Pages/Auth/Login.svelte":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Auth/Login.svelte ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _Components_MessageNotification_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/MessageNotification.svelte */ "./resources/js/Pages/Components/MessageNotification.svelte");
/* harmony import */ var _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-svelte */ "./node_modules/@inertiajs/inertia-svelte/src/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* resources/js/Pages/Auth/Login.svelte generated by Svelte v3.47.0 */




function add_css(target) {
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append_styles)(target, "svelte-dduplo", ".line.svelte-dduplo{display:inline-block;border-top:1px solid #aaa;height:2px;width:10%;position:relative;top:-2px}");
}

function create_fragment(ctx) {
  var messagenotification;
  var t0;
  var span4;
  var div22;
  var div0;
  var t1;
  var div21;
  var div20;
  var div19;
  var div4;
  var t5;
  var div5;
  var t6;
  var div18;
  var div17;
  var p;
  var t8;
  var form;
  var div9;
  var div8;
  var div6;
  var input0;
  var t9;
  var span2;
  var t10;
  var div7;
  var input1;
  var t11;
  var span3;
  var t12;
  var div13;
  var t16;
  var div16;
  var current;
  var mounted;
  var dispose;
  messagenotification = new _Components_MessageNotification_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({
    props: {
      errors:
      /*$loginForm*/
      ctx[2].errors,
      error:
      /*error*/
      ctx[1],
      message:
      /*message*/
      ctx[0],
      onResetMessage:
      /*onResetMessage*/
      ctx[4],
      hasErrors:
      /*$loginForm*/
      ctx[2].hasErrors
    }
  });
  return {
    c: function c() {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(messagenotification.$$.fragment);
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      span4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
      div22 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div21 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div20 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div19 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div4.innerHTML = "<div class=\"row\"><div class=\"col-md-6\" style=\"padding-top: 11px;\"><img alt=\"img\" src=\"/asset1/Olade_logo_white.png\" style=\"height: 55px;\"/></div> \n                            <div class=\"col-md-6\"><a href=\"".concat("\" style=\"color: #fff;font-size: 17px;font-weight: bold;position: relative;top: 27px;float: right;\">Contact Us</a></div></div>\n\n                        \xA0");
      t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div5.innerHTML = "<img alt=\"img\" src=\"/asset1/uNGdWHi.png\" style=\"max-width: 100%;\"/>";
      t6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div18 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div17 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      p = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
      p.innerHTML = "<span class=\"line svelte-dduplo\"></span>\n                                Sign In\n                                <span class=\"line svelte-dduplo\"></span>";
      t8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      form = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("form");
      div9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      input0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
      t9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      span2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
      t10 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      input1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
      t11 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      span3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
      t12 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div13 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div13.innerHTML = "<div class=\"col-md-6\"><div class=\"\"><label><input type=\"checkbox\"/> Remember\n                                            Me</label></div></div> \n                                <div class=\"col-md-6\"><a href=\"".concat("\" style=\"float: right;margin-bottom: 11px;font-weight: bold;\">I forgot my password</a><br/></div>");
      t16 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div16 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div16.innerHTML = "<div class=\"col-xs-8\"></div> \n                                    \n                                    <div class=\"col-xs-4\"><button style=\"background: #093F82;margin-top: 15px;\" type=\"submit\" class=\"btn btn-primary btn-block btn-flat\">Sign In</button></div>";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "login-logo");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div4, "background-color", "#093F82");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div4, "height", "92px");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div5, "class", "col-md-6");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p, "class", "login-box-msg");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(p, "font-weight", "bold");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(p, "font-size", "22px");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(p, "color", "#093F82");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input0, "type", "email");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input0, "class", "form-control");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input0, "placeholder", "Email");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span2, "class", "glyphicon glyphicon-envelope form-control-feedback");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div6, "class", "form-group has-feedback");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "type", "password");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "class", "form-control");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "placeholder", "Password");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span3, "class", "glyphicon glyphicon-lock form-control-feedback");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div7, "class", "form-group has-feedback");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div8, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div9, "class", "row");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div13, "class", "row");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div16, "class", "row");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(form, "method", "post");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div17, "class", "login-box-body");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div18, "class", "col-md-6");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div18, "border-left", "1px solid #ddd");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div19, "class", "row");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div19, "box-shadow", "3px 3px #ccc");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div20, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div20, "background-color", "#fff");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div21, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div22, "class", "login-box2");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span4, "class", "hold-transition login-page");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(span4, "display", "block");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(span4, "height", "100vh");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(span4, "padding-top", "41px");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(messagenotification, target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t0, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, span4, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span4, div22);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div22, div0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div22, t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div22, div21);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div21, div20);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div20, div19);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div19, div4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div19, t5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div19, div5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div19, t6);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div19, div18);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div18, div17);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div17, p);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div17, t8);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div17, form);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form, div9);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div9, div8);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, div6);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, input0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input0,
      /*$loginForm*/
      ctx[2].email);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, t9);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, span2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, t10);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, div7);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, input1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input1,
      /*$loginForm*/
      ctx[2].password);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, t11);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, span3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form, t12);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form, div13);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form, t16);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form, div16);
      current = true;

      if (!mounted) {
        dispose = [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input0, "input",
        /*input0_input_handler*/
        ctx[6]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input1, "input",
        /*input1_input_handler*/
        ctx[7]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(form, "submit", (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.prevent_default)(
        /*loginAction*/
        ctx[5]))];
        mounted = true;
      }
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var messagenotification_changes = {};
      if (dirty &
      /*$loginForm*/
      4) messagenotification_changes.errors =
      /*$loginForm*/
      ctx[2].errors;
      if (dirty &
      /*error*/
      2) messagenotification_changes.error =
      /*error*/
      ctx[1];
      if (dirty &
      /*message*/
      1) messagenotification_changes.message =
      /*message*/
      ctx[0];
      if (dirty &
      /*$loginForm*/
      4) messagenotification_changes.hasErrors =
      /*$loginForm*/
      ctx[2].hasErrors;
      messagenotification.$set(messagenotification_changes);

      if (dirty &
      /*$loginForm*/
      4 && input0.value !==
      /*$loginForm*/
      ctx[2].email) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input0,
        /*$loginForm*/
        ctx[2].email);
      }

      if (dirty &
      /*$loginForm*/
      4 && input1.value !==
      /*$loginForm*/
      ctx[2].password) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input1,
        /*$loginForm*/
        ctx[2].password);
      }
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(messagenotification.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(messagenotification.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(messagenotification, detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t0);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(span4);
      mounted = false;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var $loginForm;
  var message = $$props.message;
  var error = $$props.error;
  var loginForm = (0,_inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    email: "",
    password: ""
  });
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, loginForm, function (value) {
    return $$invalidate(2, $loginForm = value);
  });

  function onResetMessage() {
    $$invalidate(0, message = "");
    $loginForm.clearErrors();
  }

  function loginAction() {
    $loginForm.post("/login");
  }

  function input0_input_handler() {
    $loginForm.email = this.value;
    loginForm.set($loginForm);
  }

  function input1_input_handler() {
    $loginForm.password = this.value;
    loginForm.set($loginForm);
  }

  $$self.$$set = function ($$props) {
    if ('message' in $$props) $$invalidate(0, message = $$props.message);
    if ('error' in $$props) $$invalidate(1, error = $$props.error);
  };

  return [message, error, $loginForm, loginForm, onResetMessage, loginAction, input0_input_handler, input1_input_handler];
}

var Login = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Login, _SvelteComponent);

  var _super = _createSuper(Login);

  function Login(options) {
    var _this;

    _classCallCheck(this, Login);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
      message: 0,
      error: 1
    }, add_css);
    return _this;
  }

  return _createClass(Login);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ "./resources/js/Pages/Components/CrudLayoutComponent.svelte":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/Components/CrudLayoutComponent.svelte ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _components_Pagination_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Pagination.svelte */ "./resources/js/components/Pagination.svelte");
/* harmony import */ var _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-svelte */ "./node_modules/@inertiajs/inertia-svelte/src/index.js");
/* harmony import */ var _Dashboard_Layout_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Dashboard/Layout.svelte */ "./resources/js/Pages/Dashboard/Layout.svelte");
/* harmony import */ var _CrudLayoutComponent_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CrudLayoutComponent.svelte */ "./resources/js/Pages/Components/CrudLayoutComponent.svelte");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* resources/js/Pages/Components/CrudLayoutComponent.svelte generated by Svelte v3.47.0 */






var get_modalButtonText_slot_changes = function get_modalButtonText_slot_changes(dirty) {
  return {
    data: dirty &
    /*$inviteCandidateForm*/
    8
  };
};

var get_modalButtonText_slot_context = function get_modalButtonText_slot_context(ctx) {
  return {
    data:
    /*$inviteCandidateForm*/
    ctx[3]
  };
};

var get_modalBody_slot_changes = function get_modalBody_slot_changes(dirty) {
  return {
    data: dirty &
    /*$inviteCandidateForm*/
    8
  };
};

var get_modalBody_slot_context = function get_modalBody_slot_context(ctx) {
  return {
    data:
    /*$inviteCandidateForm*/
    ctx[3]
  };
};

var get_modalTitle_slot_changes = function get_modalTitle_slot_changes(dirty) {
  return {
    data: dirty &
    /*$inviteCandidateForm*/
    8
  };
};

var get_modalTitle_slot_context = function get_modalTitle_slot_context(ctx) {
  return {
    data:
    /*$inviteCandidateForm*/
    ctx[3]
  };
};

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[19] = list[i];
  return child_ctx;
}

var get_tableRow_slot_changes = function get_tableRow_slot_changes(dirty) {
  return {
    data: dirty &
    /*list*/
    1
  };
};

var get_tableRow_slot_context = function get_tableRow_slot_context(ctx) {
  return {
    data:
    /*item*/
    ctx[19],
    doDestroy:
    /*doDestroy*/
    ctx[6],
    selectRow:
    /*selectRow*/
    ctx[7]
  };
};

var get_tableHead_slot_changes = function get_tableHead_slot_changes(dirty) {
  return {};
};

var get_tableHead_slot_context = function get_tableHead_slot_context(ctx) {
  return {};
};

var get_addActionText_slot_changes = function get_addActionText_slot_changes(dirty) {
  return {};
};

var get_addActionText_slot_context = function get_addActionText_slot_context(ctx) {
  return {};
}; // (118:44) {#each list.data as item}


function create_each_block(ctx) {
  var current;
  var tableRow_slot_template =
  /*#slots*/
  ctx[15].tableRow;
  var tableRow_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(tableRow_slot_template, ctx,
  /*$$scope*/
  ctx[14], get_tableRow_slot_context);
  return {
    c: function c() {
      if (tableRow_slot) tableRow_slot.c();
    },
    m: function m(target, anchor) {
      if (tableRow_slot) {
        tableRow_slot.m(target, anchor);
      }

      current = true;
    },
    p: function p(ctx, dirty) {
      if (tableRow_slot) {
        if (tableRow_slot.p && (!current || dirty &
        /*$$scope, list*/
        16385)) {
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(tableRow_slot, tableRow_slot_template, ctx,
          /*$$scope*/
          ctx[14], !current ? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(
          /*$$scope*/
          ctx[14]) : (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(tableRow_slot_template,
          /*$$scope*/
          ctx[14], dirty, get_tableRow_slot_changes), get_tableRow_slot_context);
        }
      }
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(tableRow_slot, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(tableRow_slot, local);
      current = false;
    },
    d: function d(detaching) {
      if (tableRow_slot) tableRow_slot.d(detaching);
    }
  };
}

function create_fragment(ctx) {
  var section0;
  var h1;
  var t0;
  var t1;
  var ol;
  var li0;
  var t3;
  var li1;
  var t4;
  var t5;
  var section1;
  var div14;
  var div13;
  var div12;
  var div1;
  var h3;
  var t6;
  var t7;
  var div0;
  var button0;
  var t8;
  var div10;
  var div9;
  var div8;
  var div3;
  var t9;
  var div5;
  var div4;
  var table;
  var thead;
  var t10;
  var tbody;
  var t11;
  var div7;
  var div6;
  var pagination;
  var t12;
  var div11;
  var t13;
  var div21;
  var div20;
  var div19;
  var div15;
  var button1;
  var t15;
  var h4;
  var t16;
  var form;
  var div17;
  var div16;
  var t17;
  var div18;
  var button2;
  var t19;
  var button3;
  var i1;
  var t20;
  var button3_disabled_value;
  var current;
  var mounted;
  var dispose;
  var addActionText_slot_template =
  /*#slots*/
  ctx[15].addActionText;
  var addActionText_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(addActionText_slot_template, ctx,
  /*$$scope*/
  ctx[14], get_addActionText_slot_context);
  var tableHead_slot_template =
  /*#slots*/
  ctx[15].tableHead;
  var tableHead_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(tableHead_slot_template, ctx,
  /*$$scope*/
  ctx[14], get_tableHead_slot_context);
  var each_value =
  /*list*/
  ctx[0].data;
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var out = function out(i) {
    return (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  pagination = new _components_Pagination_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({
    props: {
      pages:
      /*list*/
      ctx[0].links
    }
  });
  var modalTitle_slot_template =
  /*#slots*/
  ctx[15].modalTitle;
  var modalTitle_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(modalTitle_slot_template, ctx,
  /*$$scope*/
  ctx[14], get_modalTitle_slot_context);
  var modalBody_slot_template =
  /*#slots*/
  ctx[15].modalBody;
  var modalBody_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(modalBody_slot_template, ctx,
  /*$$scope*/
  ctx[14], get_modalBody_slot_context);
  var modalButtonText_slot_template =
  /*#slots*/
  ctx[15].modalButtonText;
  var modalButtonText_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(modalButtonText_slot_template, ctx,
  /*$$scope*/
  ctx[14], get_modalButtonText_slot_context);
  return {
    c: function c() {
      section0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("section");
      h1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("h1");
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(
      /*label*/
      ctx[1]);
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      ol = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("ol");
      li0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      li0.innerHTML = "<a href=\"".concat(null, "\"><i class=\"fa fa-dashboard\"></i> Home</a>");
      t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      li1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(
      /*label*/
      ctx[1]);
      t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      section1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("section");
      div14 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div13 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div12 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      h3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("h3");
      t6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(
      /*label*/
      ctx[1]);
      t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      button0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
      if (addActionText_slot) addActionText_slot.c();
      t8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div10 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div3.innerHTML = "<div class=\"col-sm-6\"></div>";
      t9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      table = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("table");
      thead = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("thead");
      if (tableHead_slot) tableHead_slot.c();
      t10 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      tbody = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("tbody");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t11 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(pagination.$$.fragment);
      t12 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div11 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      t13 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div21 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div20 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div19 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div15 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      button1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
      button1.innerHTML = "<span aria-hidden=\"true\">\xD7</span>";
      t15 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      h4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("h4");
      if (modalTitle_slot) modalTitle_slot.c();
      t16 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      form = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("form");
      div17 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div16 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      if (modalBody_slot) modalBody_slot.c();
      t17 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div18 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      button2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
      button2.textContent = "Close";
      t19 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      button3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
      i1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("i");
      t20 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      if (modalButtonText_slot) modalButtonText_slot.c();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li1, "class", "active");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(ol, "class", "breadcrumb");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(section0, "class", "content-header");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(h3, "class", "box-title");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button0, "class", "btn btn-info");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button0, "data-toggle", "modal");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button0, "data-target", "#modal-ivuser");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "box-tools pull-right");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "box-header with-border");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "row");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(table, "class", "table table-striped");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "class", "col-sm-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div5, "class", "row");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div6, "class", "col-sm-10");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div7, "class", "row");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div9, "class", "table-responsive");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div10, "class", "box-body");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div11, "class", "box-footer clearfix");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div12, "class", "box box-info");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div13, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div14, "class", "row");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button1, "type", "button");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button1, "class", "close");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button1, "data-dismiss", "modal");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button1, "aria-label", "Close");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(h4, "class", "modal-title");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div15, "class", "modal-header");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div16, "class", "row");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div17, "class", "modal-body");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button2, "type", "button");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button2, "class", "btn btn-default pull-left");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button2, "data-dismiss", "modal");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(i1, "class", "fa fa-envelope");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button3, "type", "submit");
      button3.disabled = button3_disabled_value =
      /*$inviteCandidateForm*/
      ctx[3].processing;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button3, "class", "btn btn-primary");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div18, "class", "modal-footer");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(form, "class", "form-horizontal");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(form, "method", "post");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div19, "class", "modal-content");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div20, "class", "modal-dialog");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div21, "class", "modal fade");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div21, "id", "modal-ivuser");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(section1, "class", "content");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, section0, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(section0, h1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(h1, t0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(section0, t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(section0, ol);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ol, li0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ol, t3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ol, li1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li1, t4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t5, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, section1, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(section1, div14);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div14, div13);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div13, div12);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div12, div1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, h3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(h3, t6);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t7);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, div0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, button0);

      if (addActionText_slot) {
        addActionText_slot.m(button0, null);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div12, t8);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div12, div10);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, div9);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div9, div8);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, div3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, t9);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, div5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, div4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, table);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(table, thead);

      if (tableHead_slot) {
        tableHead_slot.m(thead, null);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(table, t10);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(table, tbody);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].m(tbody, null);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, t11);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, div7);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, div6);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(pagination, div6, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div12, t12);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div12, div11);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(section1, t13);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(section1, div21);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div21, div20);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div20, div19);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div19, div15);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div15, button1);
      /*button1_binding*/

      ctx[16](button1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div15, t15);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div15, h4);

      if (modalTitle_slot) {
        modalTitle_slot.m(h4, null);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div19, t16);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div19, form);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form, div17);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div17, div16);

      if (modalBody_slot) {
        modalBody_slot.m(div16, null);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form, t17);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form, div18);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div18, button2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div18, t19);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div18, button3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button3, i1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button3, t20);

      if (modalButtonText_slot) {
        modalButtonText_slot.m(button3, null);
      }

      current = true;

      if (!mounted) {
        dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(form, "submit", (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.prevent_default)(
        /*doAction*/
        ctx[5]));
        mounted = true;
      }
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (!current || dirty &
      /*label*/
      2) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t0,
      /*label*/
      ctx[1]);
      if (!current || dirty &
      /*label*/
      2) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t4,
      /*label*/
      ctx[1]);
      if (!current || dirty &
      /*label*/
      2) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t6,
      /*label*/
      ctx[1]);

      if (addActionText_slot) {
        if (addActionText_slot.p && (!current || dirty &
        /*$$scope*/
        16384)) {
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(addActionText_slot, addActionText_slot_template, ctx,
          /*$$scope*/
          ctx[14], !current ? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(
          /*$$scope*/
          ctx[14]) : (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(addActionText_slot_template,
          /*$$scope*/
          ctx[14], dirty, get_addActionText_slot_changes), get_addActionText_slot_context);
        }
      }

      if (tableHead_slot) {
        if (tableHead_slot.p && (!current || dirty &
        /*$$scope*/
        16384)) {
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(tableHead_slot, tableHead_slot_template, ctx,
          /*$$scope*/
          ctx[14], !current ? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(
          /*$$scope*/
          ctx[14]) : (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(tableHead_slot_template,
          /*$$scope*/
          ctx[14], dirty, get_tableHead_slot_changes), get_tableHead_slot_context);
        }
      }

      if (dirty &
      /*$$scope, list, doDestroy, selectRow*/
      16577) {
        each_value =
        /*list*/
        ctx[0].data;

        var _i3;

        for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i3);

          if (each_blocks[_i3]) {
            each_blocks[_i3].p(child_ctx, dirty);

            (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[_i3], 1);
          } else {
            each_blocks[_i3] = create_each_block(child_ctx);

            each_blocks[_i3].c();

            (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[_i3], 1);

            each_blocks[_i3].m(tbody, null);
          }
        }

        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

        for (_i3 = each_value.length; _i3 < each_blocks.length; _i3 += 1) {
          out(_i3);
        }

        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
      }

      var pagination_changes = {};
      if (dirty &
      /*list*/
      1) pagination_changes.pages =
      /*list*/
      ctx[0].links;
      pagination.$set(pagination_changes);

      if (modalTitle_slot) {
        if (modalTitle_slot.p && (!current || dirty &
        /*$$scope, $inviteCandidateForm*/
        16392)) {
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(modalTitle_slot, modalTitle_slot_template, ctx,
          /*$$scope*/
          ctx[14], !current ? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(
          /*$$scope*/
          ctx[14]) : (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(modalTitle_slot_template,
          /*$$scope*/
          ctx[14], dirty, get_modalTitle_slot_changes), get_modalTitle_slot_context);
        }
      }

      if (modalBody_slot) {
        if (modalBody_slot.p && (!current || dirty &
        /*$$scope, $inviteCandidateForm*/
        16392)) {
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(modalBody_slot, modalBody_slot_template, ctx,
          /*$$scope*/
          ctx[14], !current ? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(
          /*$$scope*/
          ctx[14]) : (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(modalBody_slot_template,
          /*$$scope*/
          ctx[14], dirty, get_modalBody_slot_changes), get_modalBody_slot_context);
        }
      }

      if (modalButtonText_slot) {
        if (modalButtonText_slot.p && (!current || dirty &
        /*$$scope, $inviteCandidateForm*/
        16392)) {
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(modalButtonText_slot, modalButtonText_slot_template, ctx,
          /*$$scope*/
          ctx[14], !current ? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(
          /*$$scope*/
          ctx[14]) : (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(modalButtonText_slot_template,
          /*$$scope*/
          ctx[14], dirty, get_modalButtonText_slot_changes), get_modalButtonText_slot_context);
        }
      }

      if (!current || dirty &
      /*$inviteCandidateForm*/
      8 && button3_disabled_value !== (button3_disabled_value =
      /*$inviteCandidateForm*/
      ctx[3].processing)) {
        button3.disabled = button3_disabled_value;
      }
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(addActionText_slot, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(tableHead_slot, local);

      for (var _i4 = 0; _i4 < each_value.length; _i4 += 1) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[_i4]);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(pagination.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(modalTitle_slot, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(modalBody_slot, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(modalButtonText_slot, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(addActionText_slot, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(tableHead_slot, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(each_blocks[_i5]);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(pagination.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(modalTitle_slot, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(modalBody_slot, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(modalButtonText_slot, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(section0);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t5);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(section1);
      if (addActionText_slot) addActionText_slot.d(detaching);
      if (tableHead_slot) tableHead_slot.d(detaching);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(pagination);
      /*button1_binding*/

      ctx[16](null);
      if (modalTitle_slot) modalTitle_slot.d(detaching);
      if (modalBody_slot) modalBody_slot.d(detaching);
      if (modalButtonText_slot) modalButtonText_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var $inviteCandidateForm;
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  var list = $$props.list;
  var store = $$props.store;
  var update = $$props.update;
  var destroy = $$props.destroy;
  var message = $$props.message;
  var error = $$props.error;
  var label = $$props.label;
  var formData = $$props.formData;
  var inviteModal = null;
  console.log(users);
  var inviteCandidateForm = (0,_inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.useForm)(formData);
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, inviteCandidateForm, function (value) {
    return $$invalidate(3, $inviteCandidateForm = value);
  });

  function doAction() {
    if ($inviteCandidateForm.id) {
      updateAction($inviteCandidateForm.id);
    } else {
      storeAction();
    }
  }

  function doDestroy(id) {
    $inviteCandidateForm["delete"](destroy + '/' + id);
  }

  function storeAction() {
    $inviteCandidateForm.post(store);
  }

  function updateAction(id) {
    $inviteCandidateForm.put(update + '/' + id);
  }

  function selectRow(item) {
    for (var i in item) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_store_value)(inviteCandidateForm, $inviteCandidateForm[i] = item[i], $inviteCandidateForm);
    }
  }

  function button1_binding($$value) {
    svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      inviteModal = $$value;
      $$invalidate(2, inviteModal);
    });
  }

  $$self.$$set = function ($$props) {
    if ('list' in $$props) $$invalidate(0, list = $$props.list);
    if ('store' in $$props) $$invalidate(9, store = $$props.store);
    if ('update' in $$props) $$invalidate(10, update = $$props.update);
    if ('destroy' in $$props) $$invalidate(11, destroy = $$props.destroy);
    if ('message' in $$props) $$invalidate(8, message = $$props.message);
    if ('error' in $$props) $$invalidate(12, error = $$props.error);
    if ('label' in $$props) $$invalidate(1, label = $$props.label);
    if ('formData' in $$props) $$invalidate(13, formData = $$props.formData);
    if ('$$scope' in $$props) $$invalidate(14, $$scope = $$props.$$scope);
  };

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*message, error, inviteModal, $inviteCandidateForm*/
    4364) {
      // inviteModal
      $: if (message != '' && !error) {
        inviteModal.click();
        toastr.success(message);
        $$invalidate(8, message = "");
        $inviteCandidateForm.reset();
      }
    }

    if ($$self.$$.dirty &
    /*$inviteCandidateForm*/
    8) {
      $: if ($inviteCandidateForm.hasErrors) {
        for (var i in $inviteCandidateForm.errors) {
          toastr.error($inviteCandidateForm.errors[i]);
        }

        $inviteCandidateForm.clearErrors();
      }
    }
  };

  return [list, label, inviteModal, $inviteCandidateForm, inviteCandidateForm, doAction, doDestroy, selectRow, message, store, update, destroy, error, formData, $$scope, slots, button1_binding];
}

var CrudLayoutComponent_1 = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(CrudLayoutComponent_1, _SvelteComponent);

  var _super = _createSuper(CrudLayoutComponent_1);

  function CrudLayoutComponent_1(options) {
    var _this;

    _classCallCheck(this, CrudLayoutComponent_1);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
      list: 0,
      store: 9,
      update: 10,
      destroy: 11,
      message: 8,
      error: 12,
      label: 1,
      formData: 13
    });
    return _this;
  }

  return _createClass(CrudLayoutComponent_1);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CrudLayoutComponent_1);

/***/ }),

/***/ "./resources/js/Pages/Components/MessageNotification.svelte":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/Components/MessageNotification.svelte ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _components_MessageStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/MessageStore */ "./resources/js/components/MessageStore.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* resources/js/Pages/Components/MessageNotification.svelte generated by Svelte v3.47.0 */



function instance($$self, $$props, $$invalidate) {
  var message = $$props.message;
  var error = $$props.error;
  var onResetMessage = $$props.onResetMessage;
  var errors = $$props.errors;
  var hasErrors = $$props.hasErrors;
  var onCloseModal = $$props.onCloseModal;

  $$self.$$set = function ($$props) {
    if ('message' in $$props) $$invalidate(0, message = $$props.message);
    if ('error' in $$props) $$invalidate(1, error = $$props.error);
    if ('onResetMessage' in $$props) $$invalidate(2, onResetMessage = $$props.onResetMessage);
    if ('errors' in $$props) $$invalidate(3, errors = $$props.errors);
    if ('hasErrors' in $$props) $$invalidate(4, hasErrors = $$props.hasErrors);
    if ('onCloseModal' in $$props) $$invalidate(5, onCloseModal = $$props.onCloseModal);
  };

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*message, error, onCloseModal, onResetMessage*/
    39) {
      $: if (message != "") {
        if (error) {
          toastr.error(message);
        }

        if (!error) {
          toastr.success(message);
          if (onCloseModal) onCloseModal();
        }

        if (onResetMessage) {
          onResetMessage();
        }
      }
    }

    if ($$self.$$.dirty &
    /*hasErrors, errors, message, onResetMessage*/
    29) {
      $: if (hasErrors) {
        for (var i in errors) {
          if (errors[i] != message) toastr.error(errors[i]);
        }

        if (onResetMessage) {
          onResetMessage();
        }
      }
    }
  };

  return [message, error, onResetMessage, errors, hasErrors, onCloseModal];
}

var MessageNotification = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(MessageNotification, _SvelteComponent);

  var _super = _createSuper(MessageNotification);

  function MessageNotification(options) {
    var _this;

    _classCallCheck(this, MessageNotification);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, null, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
      message: 0,
      error: 1,
      onResetMessage: 2,
      errors: 3,
      hasErrors: 4,
      onCloseModal: 5
    });
    return _this;
  }

  return _createClass(MessageNotification);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessageNotification);

/***/ }),

/***/ "./resources/js/Pages/Components/UserListComponent.svelte":
/*!****************************************************************!*\
  !*** ./resources/js/Pages/Components/UserListComponent.svelte ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _components_Pagination_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Pagination.svelte */ "./resources/js/components/Pagination.svelte");
/* harmony import */ var _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-svelte */ "./node_modules/@inertiajs/inertia-svelte/src/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* resources/js/Pages/Components/UserListComponent.svelte generated by Svelte v3.47.0 */


 // import Layout from "../Dashboard/Layout.svelte";



function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[20] = list[i];
  return child_ctx;
} // (196:44) {#each users.data as user}


function create_each_block(ctx) {
  var tr;
  var td0;
  var t0_value =
  /*user*/
  ctx[20].name + "";
  var t0;
  var t1;
  var td1;
  var t2_value =
  /*user*/
  ctx[20].email + "";
  var t2;
  var t3;
  var td2;
  var t4;
  var td3;
  var t5_value =
  /*user*/
  ctx[20].created_ago + "";
  var t5;
  var t6;
  var td4;
  var label0;
  var t7_value =
  /*user*/
  ctx[20].account_status + "";
  var t7;
  var t8;
  var td5;
  var t9_value =
  /*user*/
  ctx[20].account_type + "";
  var t9;
  var t10;
  var td6;
  var div;
  var label1;
  var t13;
  var ul;
  var li0;
  var t15;
  var li1;
  var a1;
  var t17;
  var mounted;
  var dispose;

  function click_handler() {
    return (
      /*click_handler*/
      ctx[12](
      /*user*/
      ctx[20])
    );
  }

  return {
    c: function c() {
      tr = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("tr");
      td0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("td");
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t0_value);
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      td1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("td");
      t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t2_value);
      t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      td2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("td");
      t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      td3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("td");
      t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t5_value);
      t6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      td4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("td");
      label0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
      t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t7_value);
      t8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      td5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("td");
      t9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t9_value);
      t10 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      td6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("td");
      div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      label1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
      label1.innerHTML = "... \n                                                                <span class=\"sr-only\">Toggle\n                                                                    Dropdown</span>";
      t13 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      ul = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("ul");
      li0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      li0.innerHTML = "<a href=\"userProfileDashboard?scand=c2aa1951a32f33b047954754f0ae\"><i class=\"fa fa-file text-info\"></i> View Profile</a>";
      t15 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      li1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      a1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      a1.innerHTML = "<i class=\"fa fa-refresh text-info\"></i> Re-invite";
      t17 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(td0, "class", "sorting_1");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label0, "class", "text-success");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label0, "id", "acctstc2aa1951a32f33b047954754f0ae");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label1, "class", "dropdown-toggle");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label1, "data-toggle", "dropdown");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a1, "href", "null");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a1, "usx", "c2aa1951a32f33b047954754f0ae");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(ul, "class", "dropdown-menu");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(ul, "role", "menu");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(ul, "z-index", "9000");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "btn-group");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(tr, "role", "row");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(tr, "class", "odd");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, tr, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, td0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td0, t0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, td1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td1, t2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, t3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, td2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, t4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, td3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td3, t5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, t6);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, td4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td4, label0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(label0, t7);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, t8);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, td5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td5, t9);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, t10);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, td6);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td6, div);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, label1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t13);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, ul);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul, li0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul, t15);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul, li1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li1, a1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, t17);

      if (!mounted) {
        dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(a1, "click", (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.prevent_default)(click_handler));
        mounted = true;
      }
    },
    p: function p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty &
      /*users*/
      1 && t0_value !== (t0_value =
      /*user*/
      ctx[20].name + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t0, t0_value);
      if (dirty &
      /*users*/
      1 && t2_value !== (t2_value =
      /*user*/
      ctx[20].email + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t2, t2_value);
      if (dirty &
      /*users*/
      1 && t5_value !== (t5_value =
      /*user*/
      ctx[20].created_ago + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t5, t5_value);
      if (dirty &
      /*users*/
      1 && t7_value !== (t7_value =
      /*user*/
      ctx[20].account_status + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t7, t7_value);
      if (dirty &
      /*users*/
      1 && t9_value !== (t9_value =
      /*user*/
      ctx[20].account_type + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t9, t9_value);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(tr);
      mounted = false;
      dispose();
    }
  };
}

function create_fragment(ctx) {
  var section0;
  var h1;
  var t0;
  var t1;
  var ol;
  var li0;
  var t3;
  var li1;
  var t4;
  var t5;
  var section1;
  var div14;
  var div13;
  var div12;
  var div1;
  var h3;
  var t6;
  var t7;
  var div0;
  var t9;
  var div10;
  var div9;
  var div8;
  var div3;
  var t10;
  var div5;
  var div4;
  var table;
  var thead;
  var t18;
  var tbody;
  var t19;
  var div7;
  var div6;
  var pagination;
  var t20;
  var div11;
  var t21;
  var div26;
  var div25;
  var div24;
  var div15;
  var button1;
  var t23;
  var h4;
  var t25;
  var form;
  var div22;
  var div21;
  var div20;
  var div16;
  var label0;
  var t28;
  var input0;
  var t29;
  var div17;
  var label1;
  var t32;
  var input1;
  var t33;
  var div18;
  var label2;
  var t36;
  var input2;
  var t37;
  var div19;
  var label3;
  var t40;
  var select;
  var option0;
  var option1;
  var option2;
  var option3;
  var t45;
  var div23;
  var button2;
  var t47;
  var button3;
  var i1;
  var t48;
  var button3_disabled_value;
  var current;
  var mounted;
  var dispose;
  var each_value =
  /*users*/
  ctx[0].data;
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  pagination = new _components_Pagination_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
    props: {
      pages:
      /*users*/
      ctx[0].links
    }
  });
  return {
    c: function c() {
      section0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("section");
      h1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("h1");
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(
      /*label*/
      ctx[1]);
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      ol = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("ol");
      li0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      li0.innerHTML = "<a href=\"".concat(null, "\"><i class=\"fa fa-dashboard\"></i> Home</a>");
      t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      li1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(
      /*label*/
      ctx[1]);
      t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      section1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("section");
      div14 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div13 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div12 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      h3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("h3");
      t6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(
      /*label*/
      ctx[1]);
      t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div0.innerHTML = "<button class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-ivuser\">Invite User</button>";
      t9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div10 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div3.innerHTML = "<div class=\"col-sm-6\"></div>";
      t10 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      table = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("table");
      thead = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("thead");
      thead.innerHTML = "<tr role=\"row\"><th class=\"sorting_asc\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-sort=\"ascending\" aria-label=\"Name: activate to sort column descending\">Name</th><th class=\"sorting\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-label=\"Email: activate to sort column ascending\">Email</th><th class=\"sorting\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-label=\"Program: activate to sort column ascending\">Program</th><th class=\"sorting\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-label=\"Date: activate to sort column ascending\">Created</th><th class=\"sorting\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-label=\"Status: activate to sort column ascending\">Status</th><th class=\"sorting\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-label=\" &amp;nbsp; : activate to sort column ascending\">Account-Type\n                                                </th><th class=\"sorting\" tabindex=\"0\" aria-controls=\"DataTables_Table_0\" rowspan=\"1\" colspan=\"1\" aria-label=\" &amp;nbsp; : activate to sort column ascending\">Actions</th></tr>";
      t18 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      tbody = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("tbody");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t19 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(pagination.$$.fragment);
      t20 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div11 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      t21 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div26 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div25 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div24 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div15 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      button1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
      button1.innerHTML = "<span aria-hidden=\"true\">\xD7</span>";
      t23 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      h4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("h4");
      h4.textContent = "Invite User";
      t25 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      form = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("form");
      div22 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div21 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div20 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div16 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      label0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
      label0.innerHTML = "First Name <b style=\"color:red\">*</b>";
      t28 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      input0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
      t29 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div17 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      label1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
      label1.innerHTML = "Last Name <b style=\"color:red\">*</b>";
      t32 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      input1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
      t33 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div18 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      label2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
      label2.innerHTML = "Email <b style=\"color:red\">*</b>";
      t36 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      input2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
      t37 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div19 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      label3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
      label3.innerHTML = "Account Type <b style=\"color:red\">*</b>";
      t40 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      select = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("select");
      option0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      option0.textContent = "Select";
      option1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      option1.textContent = "Admin";
      option2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      option2.textContent = "Candidate";
      option3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      option3.textContent = "Staff";
      t45 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div23 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      button2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
      button2.textContent = "Close";
      t47 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      button3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
      i1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("i");
      t48 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(" Send Invite");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li1, "class", "active");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(ol, "class", "breadcrumb");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(section0, "class", "content-header");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(h3, "class", "box-title");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "box-tools pull-right");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "box-header with-border");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "row");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(table, "class", "table table-striped");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "class", "col-sm-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div5, "class", "row");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div6, "class", "col-sm-10");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div7, "class", "row");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div9, "class", "table-responsive");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div10, "class", "box-body");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div11, "class", "box-footer clearfix");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div12, "class", "box box-info");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div13, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div14, "class", "row");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button1, "type", "button");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button1, "class", "close");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button1, "data-dismiss", "modal");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button1, "aria-label", "Close");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(h4, "class", "modal-title");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div15, "class", "modal-header");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label0, "for", "inputName");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label0, "class", "control-label");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input0, "type", "text");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input0, "class", "form-control");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input0, "name", "FirstName");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input0, "id", "inputName");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input0, "placeholder", "First Name");
      input0.required = "";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div16, "class", "col-md-6");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label1, "for", "inputName");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label1, "class", "control-label");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "type", "text");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "class", "form-control");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "name", "LastName");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "id", "inputName");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "placeholder", "Last Name");
      input1.required = "";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div17, "class", "col-md-6");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label2, "for", "inputName");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label2, "class", "control-label");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input2, "type", "email");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input2, "class", "form-control");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input2, "name", "Email");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input2, "id", "inputName");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input2, "placeholder", "Candidate's Email");
      input2.required = "";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div18, "class", "col-md-6");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label3, "for", "inputName");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label3, "class", "control-label");
      option0.__value = "";
      option0.value = option0.__value;
      option1.__value = "admin";
      option1.value = option1.__value;
      option2.__value = "candidate";
      option2.value = option2.__value;
      option3.__value = "staff";
      option3.value = option3.__value;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(select, "type", "email");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(select, "class", "form-control");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(select, "name", "Email");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(select, "id", "inputName");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(select, "placeholder", "Candidate's Email");
      select.required = "";
      if (
      /*$inviteCandidateForm*/
      ctx[3].account_type === void 0) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_render_callback)(function () {
        return (
          /*select_change_handler*/
          ctx[17].call(select)
        );
      });
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div19, "class", "col-md-6");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div20, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div21, "class", "row");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div22, "class", "modal-body");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button2, "type", "button");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button2, "class", "btn btn-default pull-left");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button2, "data-dismiss", "modal");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(i1, "class", "fa fa-envelope");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button3, "type", "submit");
      button3.disabled = button3_disabled_value =
      /*$inviteCandidateForm*/
      ctx[3].processing;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button3, "class", "btn btn-primary");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div23, "class", "modal-footer");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(form, "class", "form-horizontal");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(form, "method", "post");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div24, "class", "modal-content");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div25, "class", "modal-dialog");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div26, "class", "modal fade");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div26, "id", "modal-ivuser");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(section1, "class", "content");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, section0, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(section0, h1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(h1, t0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(section0, t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(section0, ol);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ol, li0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ol, t3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ol, li1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li1, t4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t5, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, section1, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(section1, div14);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div14, div13);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div13, div12);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div12, div1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, h3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(h3, t6);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t7);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, div0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div12, t9);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div12, div10);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, div9);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div9, div8);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, div3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, t10);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, div5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, div4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, table);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(table, thead);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(table, t18);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(table, tbody);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].m(tbody, null);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, t19);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, div7);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, div6);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(pagination, div6, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div12, t20);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div12, div11);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(section1, t21);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(section1, div26);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div26, div25);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div25, div24);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div24, div15);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div15, button1);
      /*button1_binding*/

      ctx[13](button1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div15, t23);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div15, h4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div24, t25);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div24, form);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form, div22);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div22, div21);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div21, div20);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div20, div16);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div16, label0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div16, t28);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div16, input0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input0,
      /*$inviteCandidateForm*/
      ctx[3].first_name);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div20, t29);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div20, div17);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div17, label1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div17, t32);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div17, input1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input1,
      /*$inviteCandidateForm*/
      ctx[3].last_name);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div20, t33);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div20, div18);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div18, label2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div18, t36);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div18, input2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input2,
      /*$inviteCandidateForm*/
      ctx[3].email);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div20, t37);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div20, div19);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div19, label3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div19, t40);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div19, select);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(select, option0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(select, option1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(select, option2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(select, option3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select,
      /*$inviteCandidateForm*/
      ctx[3].account_type);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form, t45);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form, div23);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div23, button2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div23, t47);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div23, button3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button3, i1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button3, t48);
      current = true;

      if (!mounted) {
        dispose = [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input0, "input",
        /*input0_input_handler*/
        ctx[14]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input1, "input",
        /*input1_input_handler*/
        ctx[15]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input2, "input",
        /*input2_input_handler*/
        ctx[16]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(select, "change",
        /*select_change_handler*/
        ctx[17]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(form, "submit", (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.prevent_default)(
        /*sendInvitation*/
        ctx[6]))];
        mounted = true;
      }
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (!current || dirty &
      /*label*/
      2) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t0,
      /*label*/
      ctx[1]);
      if (!current || dirty &
      /*label*/
      2) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t4,
      /*label*/
      ctx[1]);
      if (!current || dirty &
      /*label*/
      2) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t6,
      /*label*/
      ctx[1]);

      if (dirty &
      /*sendReInvitation, users*/
      129) {
        each_value =
        /*users*/
        ctx[0].data;

        var _i3;

        for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i3);

          if (each_blocks[_i3]) {
            each_blocks[_i3].p(child_ctx, dirty);
          } else {
            each_blocks[_i3] = create_each_block(child_ctx);

            each_blocks[_i3].c();

            each_blocks[_i3].m(tbody, null);
          }
        }

        for (; _i3 < each_blocks.length; _i3 += 1) {
          each_blocks[_i3].d(1);
        }

        each_blocks.length = each_value.length;
      }

      var pagination_changes = {};
      if (dirty &
      /*users*/
      1) pagination_changes.pages =
      /*users*/
      ctx[0].links;
      pagination.$set(pagination_changes);

      if (dirty &
      /*$inviteCandidateForm*/
      8 && input0.value !==
      /*$inviteCandidateForm*/
      ctx[3].first_name) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input0,
        /*$inviteCandidateForm*/
        ctx[3].first_name);
      }

      if (dirty &
      /*$inviteCandidateForm*/
      8 && input1.value !==
      /*$inviteCandidateForm*/
      ctx[3].last_name) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input1,
        /*$inviteCandidateForm*/
        ctx[3].last_name);
      }

      if (dirty &
      /*$inviteCandidateForm*/
      8 && input2.value !==
      /*$inviteCandidateForm*/
      ctx[3].email) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input2,
        /*$inviteCandidateForm*/
        ctx[3].email);
      }

      if (dirty &
      /*$inviteCandidateForm*/
      8) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select,
        /*$inviteCandidateForm*/
        ctx[3].account_type);
      }

      if (!current || dirty &
      /*$inviteCandidateForm*/
      8 && button3_disabled_value !== (button3_disabled_value =
      /*$inviteCandidateForm*/
      ctx[3].processing)) {
        button3.disabled = button3_disabled_value;
      }
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(pagination.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(pagination.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(section0);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t5);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(section1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(pagination);
      /*button1_binding*/

      ctx[13](null);
      mounted = false;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
    }
  };
}

function setCalend() {
  Calendly.initPopupWidget({
    url: 'https://calendly.com/easymagic1/30min'
  });
}

function instance($$self, $$props, $$invalidate) {
  var $reInviteCandidateForm;
  var $inviteCandidateForm;
  var users = $$props.users;
  var invite_candidate_route = $$props.invite_candidate_route;
  var reinvite_candidate_route = $$props.reinvite_candidate_route;
  var message = $$props.message;
  var error = $$props.error;
  var label = $$props.label;
  var dispatch = (0,svelte__WEBPACK_IMPORTED_MODULE_1__.createEventDispatcher)();
  var inviteModal = null; // console.log(users);

  var inviteCandidateForm = (0,_inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_3__.useForm)({
    first_name: "",
    last_name: "",
    email: "",
    account_type: ""
  });
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, inviteCandidateForm, function (value) {
    return $$invalidate(3, $inviteCandidateForm = value);
  });
  var reInviteCandidateForm = (0,_inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_3__.useForm)({
    email: ""
  });
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, reInviteCandidateForm, function (value) {
    return $$invalidate(18, $reInviteCandidateForm = value);
  }); // $:  if ($inviteCandidateForm.first_name){
  //    $inviteCandidateForm.clearErrors('first_name');
  // }
  // $:  if ($inviteCandidateForm.last_name){
  //    $inviteCandidateForm.clearErrors('last_name');
  // }
  // $:  if ($inviteCandidateForm.email){
  //    $inviteCandidateForm.clearErrors('email');
  // }
  // $:  if ($inviteCandidateForm.account_type){
  //    $inviteCandidateForm.clearErrors('account_type');
  // }

  function sendInvitation() {
    $inviteCandidateForm.post(invite_candidate_route);
  }

  function sendReInvitation(user) {
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_store_value)(reInviteCandidateForm, $reInviteCandidateForm.email = user.email, $reInviteCandidateForm);
    $reInviteCandidateForm.put(reinvite_candidate_route + '/' + user.id);
  }

  var click_handler = function click_handler(user) {
    return sendReInvitation(user);
  };

  function button1_binding($$value) {
    svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      inviteModal = $$value;
      $$invalidate(2, inviteModal);
    });
  }

  function input0_input_handler() {
    $inviteCandidateForm.first_name = this.value;
    inviteCandidateForm.set($inviteCandidateForm);
  }

  function input1_input_handler() {
    $inviteCandidateForm.last_name = this.value;
    inviteCandidateForm.set($inviteCandidateForm);
  }

  function input2_input_handler() {
    $inviteCandidateForm.email = this.value;
    inviteCandidateForm.set($inviteCandidateForm);
  }

  function select_change_handler() {
    $inviteCandidateForm.account_type = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_value)(this);
    inviteCandidateForm.set($inviteCandidateForm);
  }

  $$self.$$set = function ($$props) {
    if ('users' in $$props) $$invalidate(0, users = $$props.users);
    if ('invite_candidate_route' in $$props) $$invalidate(9, invite_candidate_route = $$props.invite_candidate_route);
    if ('reinvite_candidate_route' in $$props) $$invalidate(10, reinvite_candidate_route = $$props.reinvite_candidate_route);
    if ('message' in $$props) $$invalidate(8, message = $$props.message);
    if ('error' in $$props) $$invalidate(11, error = $$props.error);
    if ('label' in $$props) $$invalidate(1, label = $$props.label);
  };

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*message, error, inviteModal, $inviteCandidateForm*/
    2316) {
      $: if (message != '' && !error) {
        inviteModal.click();
        toastr.success(message);
        $$invalidate(8, message = "");
        dispatch("clearMessage", message);
        $inviteCandidateForm.reset();
      }
    }

    if ($$self.$$.dirty &
    /*message*/
    256) {
      // inviteModal
      $: console.log(message, 'message.');
    }

    if ($$self.$$.dirty &
    /*$inviteCandidateForm*/
    8) {
      $: if ($inviteCandidateForm.hasErrors) {
        for (var i in $inviteCandidateForm.errors) {
          toastr.error($inviteCandidateForm.errors[i]);
        }

        $inviteCandidateForm.clearErrors();
      }
    }
  };

  return [users, label, inviteModal, $inviteCandidateForm, inviteCandidateForm, reInviteCandidateForm, sendInvitation, sendReInvitation, message, invite_candidate_route, reinvite_candidate_route, error, click_handler, button1_binding, input0_input_handler, input1_input_handler, input2_input_handler, select_change_handler];
}

var UserListComponent = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(UserListComponent, _SvelteComponent);

  var _super = _createSuper(UserListComponent);

  function UserListComponent(options) {
    var _this;

    _classCallCheck(this, UserListComponent);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
      users: 0,
      invite_candidate_route: 9,
      reinvite_candidate_route: 10,
      message: 8,
      error: 11,
      label: 1
    });
    return _this;
  }

  return _createClass(UserListComponent);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserListComponent);

/***/ }),

/***/ "./resources/js/Pages/Dashboard/Dashboard.svelte":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/Dashboard/Dashboard.svelte ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "layout": () => (/* binding */ layout)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _components_Editor_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Editor.svelte */ "./resources/js/components/Editor.svelte");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _Layout_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout.svelte */ "./resources/js/Pages/Dashboard/Layout.svelte");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* resources/js/Pages/Dashboard/Dashboard.svelte generated by Svelte v3.47.0 */





function create_fragment(ctx) {
  var editor;
  var t;
  var current;
  editor = new _components_Editor_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({
    props: {
      data: 'cool'
    }
  });
  editor.$on("textChange",
  /*textChange_handler*/
  ctx[1]);
  return {
    c: function c() {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(editor.$$.fragment);
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("\nDashboard");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(editor, target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
      current = true;
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(editor.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(editor.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(editor, detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
    }
  };
}

var layout = _Layout_svelte__WEBPACK_IMPORTED_MODULE_3__["default"];

function instance($$self, $$props, $$invalidate) {
  var content = '';

  var textChange_handler = function textChange_handler(val) {
    $$invalidate(0, content = val);
  };

  return [content, textChange_handler];
}

var Dashboard = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Dashboard, _SvelteComponent);

  var _super = _createSuper(Dashboard);

  function Dashboard(options) {
    var _this;

    _classCallCheck(this, Dashboard);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {});
    return _this;
  }

  return _createClass(Dashboard);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);


/***/ }),

/***/ "./resources/js/Pages/Dashboard/Layout.svelte":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Dashboard/Layout.svelte ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _Auth_CheckAuthComponent_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Auth/CheckAuthComponent.svelte */ "./resources/js/Pages/Auth/CheckAuthComponent.svelte");
/* harmony import */ var _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-svelte */ "./node_modules/@inertiajs/inertia-svelte/src/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* resources/js/Pages/Dashboard/Layout.svelte generated by Svelte v3.47.0 */

 // import {CheckAuthComponent} from "../Auth/CheckAuthComponent.svelte";



function add_css(target) {
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append_styles)(target, "svelte-9fvhrt", "nav.svelte-9fvhrt.svelte-9fvhrt.svelte-9fvhrt{background-color:#fff !important}.sidebar-toggle.svelte-9fvhrt.svelte-9fvhrt.svelte-9fvhrt{color:#006a9d !important}.sidebar-toggle.svelte-9fvhrt.svelte-9fvhrt.svelte-9fvhrt:hover{background-color:#fff !important}.user-menu.svelte-9fvhrt a.svelte-9fvhrt.svelte-9fvhrt{color:#006a9d !important}aside.svelte-9fvhrt.svelte-9fvhrt.svelte-9fvhrt{background-color:#073367 !important}li.active.svelte-9fvhrt.svelte-9fvhrt.svelte-9fvhrt,li.active.svelte-9fvhrt a.svelte-9fvhrt.svelte-9fvhrt{color:#ffffff !important;background:#042042 !important}aside.svelte-9fvhrt li.svelte-9fvhrt.svelte-9fvhrt:hover,aside.svelte-9fvhrt li.svelte-9fvhrt:hover a.svelte-9fvhrt{color:#ffffff !important;background:#042042 !important}");
}

function create_fragment(ctx) {
  var div27;
  var header;
  var a0;
  var span0;
  var img0;
  var img0_src_value;
  var t0;
  var span1;
  var img1;
  var img1_src_value;
  var a0_href_value;
  var t1;
  var nav;
  var a1;
  var a1_href_value;
  var t3;
  var div2;
  var ul3;
  var li19;
  var t42;
  var li22;
  var a20;
  var img2;
  var img2_src_value;
  var t43;
  var span4;
  var a20_href_value;
  var t45;
  var ul2;
  var li20;
  var img3;
  var img3_src_value;
  var t46;
  var p0;
  var t49;
  var li21;
  var div0;
  var a21;
  var t50;
  var inertia_action;
  var t51;
  var div1;
  var a22;
  var t52;
  var t53;
  var aside0;
  var section;
  var ul10;
  var li23;
  var t55;
  var li24;
  var a23;
  var i18;
  var t56;
  var span5;
  var inertia_action_1;
  var t58;
  var li29;
  var a24;
  var a24_href_value;
  var t62;
  var ul4;
  var li25;
  var a25;
  var i21;
  var t63;
  var inertia_action_2;
  var t64;
  var li26;
  var t66;
  var li27;
  var t68;
  var li28;
  var t70;
  var li33;
  var t80;
  var li34;
  var t83;
  var li37;
  var t91;
  var li43;
  var t105;
  var li44;
  var t108;
  var li45;
  var t111;
  var li53;
  var a45;
  var a45_href_value;
  var t115;
  var ul8;
  var li46;
  var a46;
  var i46;
  var t116;
  var inertia_action_3;
  var t117;
  var li47;
  var a47;
  var a47_href_value;
  var inertia_action_4;
  var t119;
  var li48;
  var a48;
  var inertia_action_5;
  var t121;
  var li49;
  var t123;
  var li50;
  var a50;
  var inertia_action_6;
  var t125;
  var li51;
  var t127;
  var li52;
  var t129;
  var li56;
  var t137;
  var li57;
  var a56;
  var i57;
  var t138;
  var span15;
  var t140;
  var div3;
  var t141;
  var footer;
  var t148;
  var aside1;
  var t212;
  var div26;
  var current;
  var mounted;
  var dispose;
  var default_slot_template =
  /*#slots*/
  ctx[9]["default"];
  var default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx,
  /*$$scope*/
  ctx[8], null);
  return {
    c: function c() {
      div27 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      header = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("header");
      a0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      span0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
      img0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("img");
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      span1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
      img1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("img");
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      nav = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("nav");
      a1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      a1.innerHTML = "<span class=\"sr-only\">Toggle navigation</span>";
      t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      ul3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("ul");
      li19 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      li19.innerHTML = "<a href=\"".concat("/", "\" class=\"dropdown-toggle svelte-9fvhrt\" data-toggle=\"dropdown\"><i class=\"fa fa-bell-o\"></i> \n                            <span class=\"label label-danger\">17</span></a> \n                        <ul class=\"dropdown-menu\"><li class=\"header\">You have 17 notifications</li> \n                            <li class=\"svelte-9fvhrt\"><ul class=\"menu\"><li class=\"svelte-9fvhrt\"><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=c2aa1951a32f33b047954754f0ae\" class=\"svelte-9fvhrt\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li class=\"svelte-9fvhrt\"><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=c2aa1951a32f33b047954754f0ae\" class=\"svelte-9fvhrt\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li class=\"svelte-9fvhrt\"><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=c2aa1951a32f33b047954754f0ae\" class=\"svelte-9fvhrt\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li class=\"svelte-9fvhrt\"><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=c2aa1951a32f33b047954754f0ae\" class=\"svelte-9fvhrt\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li class=\"svelte-9fvhrt\"><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=b18550ec1bf9ec2fca2bf92fe4ce\" class=\"svelte-9fvhrt\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li class=\"svelte-9fvhrt\"><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=c2aa1951a32f33b047954754f0ae\" class=\"svelte-9fvhrt\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li class=\"svelte-9fvhrt\"><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=c2aa1951a32f33b047954754f0ae\" class=\"svelte-9fvhrt\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li class=\"svelte-9fvhrt\"><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=c2aa1951a32f33b047954754f0ae\" class=\"svelte-9fvhrt\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li class=\"svelte-9fvhrt\"><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=361306d7cc9bc413ef624c72a19b\" class=\"svelte-9fvhrt\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li class=\"svelte-9fvhrt\"><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=3907d5938ce80bf016cd6a3b6fb3\" class=\"svelte-9fvhrt\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li class=\"svelte-9fvhrt\"><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=3907d5938ce80bf016cd6a3b6fb3\" class=\"svelte-9fvhrt\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li class=\"svelte-9fvhrt\"><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=3907d5938ce80bf016cd6a3b6fb3\" class=\"svelte-9fvhrt\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li class=\"svelte-9fvhrt\"><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=64ea3b9136cd52d8aa90e38c0024\" class=\"svelte-9fvhrt\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li class=\"svelte-9fvhrt\"><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=64ea3b9136cd52d8aa90e38c0024\" class=\"svelte-9fvhrt\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li class=\"svelte-9fvhrt\"><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=64ea3b9136cd52d8aa90e38c0024\" class=\"svelte-9fvhrt\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li class=\"svelte-9fvhrt\"><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=64ea3b9136cd52d8aa90e38c0024\" class=\"svelte-9fvhrt\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li class=\"svelte-9fvhrt\"><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=64ea3b9136cd52d8aa90e38c0024\" class=\"svelte-9fvhrt\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li></ul></li></ul>");
      t42 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      li22 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      a20 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      img2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("img");
      t43 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      span4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
      span4.textContent = "".concat(
      /*user*/
      ctx[5].name);
      t45 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      ul2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("ul");
      li20 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      img3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("img");
      t46 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      p0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
      p0.innerHTML = "Alex Akamukali - \n                                    <small>Registered since Mar. 2022</small>";
      t49 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      li21 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      a21 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      t50 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Profile");
      t51 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      a22 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      t52 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Sign out");
      t53 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      aside0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("aside");
      section = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("section");
      ul10 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("ul");
      li23 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      li23.textContent = " ";
      t55 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      li24 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      a23 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      i18 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("i");
      t56 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      span5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
      span5.textContent = "Dashboard";
      t58 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      li29 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      a24 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      a24.innerHTML = "<i class=\"fa fa-users\"></i>  <span>Users</span> \n\n                        <i class=\"fa fa-angle-left pull-right\"></i>";
      t62 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      ul4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("ul");
      li25 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      a25 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      i21 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("i");
      t63 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(" All User");
      t64 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      li26 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      li26.innerHTML = "<a href=\"activeusers\" class=\"svelte-9fvhrt\"><i class=\"fa fa-id-card fa-user text-green\"></i> Active</a>";
      t66 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      li27 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      li27.innerHTML = "<a href=\"inactiveusers\" class=\"svelte-9fvhrt\"><i class=\"fa fa-user fa-id-card text-red\"></i> Inactive</a>";
      t68 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      li28 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      li28.innerHTML = "<a href=\"alumniusers\" class=\"svelte-9fvhrt\"><i class=\"fa fa-user fa-id-card text-yellow\"></i> Alumni</a>";
      t70 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      li33 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      li33.innerHTML = "<a href=\"".concat("/", "\" class=\"svelte-9fvhrt\"><i class=\"fa fa-pie-chart\"></i>  <span>Reports</span> \n                        <i class=\"fa fa-angle-left pull-right\"></i></a> \n                    <ul class=\"treeview-menu\"><li class=\"svelte-9fvhrt\"><a href=\"JobDetailsConsultants\" class=\"svelte-9fvhrt\"><i class=\"fa fa-line-chart text-green\"></i> Consultants\n                                on Job</a></li> \n                        <li class=\"svelte-9fvhrt\"><a href=\"", "/", "\" class=\"svelte-9fvhrt\"><i class=\"fa fa-bar-chart text-blue\"></i> On FTE Job</a></li> \n                        <li class=\"svelte-9fvhrt\"><a href=\"", "/", "\" class=\"svelte-9fvhrt\"><i class=\"fa fa-bar-chart text-aqua\"></i> On Contract\n                                Job</a></li></ul>");
      t80 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      li34 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      li34.innerHTML = "<a href=\"".concat("/", "\" class=\"svelte-9fvhrt\"><i class=\"fa fa-envelope\"></i> \n                        <span>Communication</span></a>");
      t83 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      li37 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      li37.innerHTML = "<a href=\"".concat("/", "\" class=\"svelte-9fvhrt\"><i class=\"fa fa-money text-aqua\"></i> \n                        <span>Accounts Payments</span> \n                        <i class=\"fa fa-angle-left pull-right\"></i></a> \n                    <ul class=\"treeview-menu\"><li class=\"svelte-9fvhrt\"><a href=\"ACCOUNTcontractPayment\" class=\"svelte-9fvhrt\"><i class=\"fa fa-money text-green\"></i> Contract Payment</a></li> \n                        <li class=\"svelte-9fvhrt\"><a href=\"ACCOUNTFTEPayment\" class=\"svelte-9fvhrt\"><i class=\"fa fa-money text-blue\"></i> FTE Payment</a></li></ul>");
      t91 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      li43 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      li43.innerHTML = "<a href=\"".concat("/", "\" class=\"svelte-9fvhrt\"><i class=\"fa fa-tasks\"></i>  <span>Document Library</span> \n                        <i class=\"fa fa-angle-left pull-right\"></i></a> \n                    <ul class=\"treeview-menu\"><li class=\"svelte-9fvhrt\"><a href=\"docContract\" class=\"svelte-9fvhrt\"><i class=\"fa fa-file\"></i> Olade Contract</a></li> \n                        <li class=\"svelte-9fvhrt\"><a href=\"", "/", "\" class=\"svelte-9fvhrt\"><i class=\"fa fa-file-o\"></i> Employment Contract</a></li> \n                        <li class=\"svelte-9fvhrt\"><a href=\"", "/", "\" class=\"svelte-9fvhrt\"><i class=\"fa fa-file text-green\"></i> Invoices</a></li> \n                        <li class=\"svelte-9fvhrt\"><a href=\"", "/", "\" class=\"svelte-9fvhrt\"><i class=\"fa fa-money\"></i> Payment Stub</a></li> \n                        <li class=\"svelte-9fvhrt\"><a href=\"", "/", "\" class=\"svelte-9fvhrt\"><i class=\"fa fa-file text-aqua\"></i> Resumes</a></li></ul>");
      t105 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      li44 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      li44.innerHTML = "<a href=\"".concat("/", "\" class=\"svelte-9fvhrt\"><i class=\"fa fa-folder\"></i>  <span>Projects</span></a>");
      t108 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      li45 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      li45.innerHTML = "<a href=\"usersTeams\" class=\"svelte-9fvhrt\"><i class=\"fa fa-users\"></i>  <span>Teams</span></a>";
      t111 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      li53 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      a45 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      a45.innerHTML = "<i class=\"fa fa-cogs\"></i>  <span>Settings</span> \n                        <i class=\"fa fa-angle-left pull-right\"></i>";
      t115 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      ul8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("ul");
      li46 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      a46 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      i46 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("i");
      t116 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(" Program Type");
      t117 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      li47 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      a47 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      a47.innerHTML = "<i class=\"fa fa-book text-orange\"></i> Knowledge Area";
      t119 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      li48 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      a48 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      a48.innerHTML = "<i class=\"fa fa-file-o text-green\"></i> Olade Contract\n                                Type";
      t121 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      li49 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      li49.innerHTML = "<a href=\"\" class=\"svelte-9fvhrt\"><i class=\"fa fa-bank text-aqua\"></i> Vendors</a>";
      t123 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      li50 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      a50 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      a50.innerHTML = "<i class=\"fa fa-bank text-aqua\"></i> Province";
      t125 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      li51 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      li51.innerHTML = "<a href=\"\" class=\"svelte-9fvhrt\"><i class=\"fa fa-money text-blue\"></i> Payroll Mgrs.</a>";
      t127 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      li52 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      li52.innerHTML = "<a href=\"\" class=\"svelte-9fvhrt\"><i class=\"fa fa-desktop text-orange\"></i> Calendly Setup</a>";
      t129 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      li56 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      li56.innerHTML = "<a href=\"".concat("/", "\" class=\"svelte-9fvhrt\"><i class=\"fa fa-key\"></i>  <span>Role Management</span> \n                        <i class=\"fa fa-angle-left pull-right\"></i></a> \n                    <ul class=\"treeview-menu\"><li class=\"svelte-9fvhrt\"><a href=\"roles\" class=\"svelte-9fvhrt\"><i class=\"fa fa-wrench text-aqua\"></i> Assign Roles</a></li> \n                        <li class=\"svelte-9fvhrt\"><a href=\"docusignsigners\" class=\"svelte-9fvhrt\"><i class=\"fa fa-edit text-aqua\"></i> DocuSign Signers</a></li></ul>");
      t137 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      li57 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      a56 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      i57 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("i");
      t138 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      span15 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
      span15.textContent = "Sign Out";
      t140 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      if (default_slot) default_slot.c();
      t141 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      footer = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("footer");
      footer.innerHTML = "<div class=\"pull-right hidden-xs\"><b>Version</b> 1.0</div> \n        <strong>Copyright \xA9 2021 <a href=\"https://oladeconsulting.com\" target=\"_blank\">Olade Consulting</a></strong> All rights reserved.";
      t148 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      aside1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("aside");
      aside1.innerHTML = "<ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\"><li class=\"svelte-9fvhrt\"><a href=\"control-sidebar-home-tab\" data-toggle=\"tab\" class=\"svelte-9fvhrt\"><i class=\"fa fa-home\"></i></a></li> \n            <li class=\"svelte-9fvhrt\"><a href=\"control-sidebar-settings-tab\" data-toggle=\"tab\" class=\"svelte-9fvhrt\"><i class=\"fa fa-gears\"></i></a></li></ul> \n        \n        <div class=\"tab-content\"><div class=\"tab-pane\" id=\"control-sidebar-home-tab\"><h3 class=\"control-sidebar-heading\">Recent Activity</h3> \n                <ul class=\"control-sidebar-menu\"><li class=\"svelte-9fvhrt\"><a href=\"".concat("/", "\" class=\"svelte-9fvhrt\"><i class=\"menu-icon fa fa-birthday-cake bg-red\"></i> \n\n                            <div class=\"menu-info\"><h4 class=\"control-sidebar-subheading\">Langdon&#39;s Birthday</h4> \n\n                                <p>Will be 23 on April 24th</p></div></a></li> \n                    <li class=\"svelte-9fvhrt\"><a href=\"", "/", "\" class=\"svelte-9fvhrt\"><i class=\"menu-icon fa fa-user bg-yellow\"></i> \n\n                            <div class=\"menu-info\"><h4 class=\"control-sidebar-subheading\">Frodo Updated His Profile</h4> \n\n                                <p>New phone +1(800)555-1234</p></div></a></li> \n                    <li class=\"svelte-9fvhrt\"><a href=\"", "/", "\" class=\"svelte-9fvhrt\"><i class=\"menu-icon fa fa-envelope-o bg-light-blue\"></i> \n\n                            <div class=\"menu-info\"><h4 class=\"control-sidebar-subheading\">Nora Joined Mailing List</h4> \n\n                                <p>nora@example.com</p></div></a></li> \n                    <li class=\"svelte-9fvhrt\"><a href=\"", "/", "\" class=\"svelte-9fvhrt\"><i class=\"menu-icon fa fa-file-code-o bg-green\"></i> \n\n                            <div class=\"menu-info\"><h4 class=\"control-sidebar-subheading\">Cron Job 254 Executed</h4> \n\n                                <p>Execution time 5 seconds</p></div></a></li></ul> \n                \n\n                <h3 class=\"control-sidebar-heading\">Tasks Progress</h3> \n                <ul class=\"control-sidebar-menu\"><li class=\"svelte-9fvhrt\"><a href=\"", "/", "\" class=\"svelte-9fvhrt\"><h4 class=\"control-sidebar-subheading\">Custom Template Design\n                                <span class=\"label label-danger pull-right\">70%</span></h4> \n\n                            <div class=\"progress progress-xxs\"><div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div></div></a></li> \n                    <li class=\"svelte-9fvhrt\"><a href=\"", "/", "\" class=\"svelte-9fvhrt\"><h4 class=\"control-sidebar-subheading\">Update Resume\n                                <span class=\"label label-success pull-right\">95%</span></h4> \n\n                            <div class=\"progress progress-xxs\"><div class=\"progress-bar progress-bar-success\" style=\"width: 95%\"></div></div></a></li> \n                    <li class=\"svelte-9fvhrt\"><a href=\"", "/", "\" class=\"svelte-9fvhrt\"><h4 class=\"control-sidebar-subheading\">Laravel Integration\n                                <span class=\"label label-warning pull-right\">50%</span></h4> \n\n                            <div class=\"progress progress-xxs\"><div class=\"progress-bar progress-bar-warning\" style=\"width: 50%\"></div></div></a></li> \n                    <li class=\"svelte-9fvhrt\"><a href=\"", "/", "\" class=\"svelte-9fvhrt\"><h4 class=\"control-sidebar-subheading\">Back End Framework\n                                <span class=\"label label-primary pull-right\">68%</span></h4> \n\n                            <div class=\"progress progress-xxs\"><div class=\"progress-bar progress-bar-primary\" style=\"width: 68%\"></div></div></a></li></ul></div> \n            \n\n            \n            <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\"><form method=\"post\"><h3 class=\"control-sidebar-heading\">General Settings</h3> \n\n                    <div class=\"form-group\"><label class=\"control-sidebar-subheading\">Report panel usage\n                            <input type=\"checkbox\" class=\"pull-right\" checked=\"\"/></label> \n\n                        <p>Some information about this general settings option</p></div> \n                    \n\n                    <div class=\"form-group\"><label class=\"control-sidebar-subheading\">Allow mail redirect\n                            <input type=\"checkbox\" class=\"pull-right\" checked=\"\"/></label> \n\n                        <p>Other sets of options are available</p></div> \n                    \n\n                    <div class=\"form-group\"><label class=\"control-sidebar-subheading\">Expose author name in posts\n                            <input type=\"checkbox\" class=\"pull-right\" checked=\"\"/></label> \n\n                        <p>Allow the user to show his name in blog posts</p></div> \n                    \n\n                    <h3 class=\"control-sidebar-heading\">Chat Settings</h3> \n\n                    <div class=\"form-group\"><label class=\"control-sidebar-subheading\">Show me as online\n                            <input type=\"checkbox\" class=\"pull-right\" checked=\"\"/></label></div> \n                    \n\n                    <div class=\"form-group\"><label class=\"control-sidebar-subheading\">Turn off notifications\n                            <input type=\"checkbox\" class=\"pull-right\"/></label></div> \n                    \n\n                    <div class=\"form-group\"><label class=\"control-sidebar-subheading\">Delete chat history\n                            <a href=\"", "/", "\" class=\"text-red pull-right svelte-9fvhrt\"><i class=\"fa fa-trash-o\"></i></a></label></div></form></div></div>");
      t212 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div26 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img0, "alt", "img");
      if (!(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(img0.src, img0_src_value =
      /*olade_logo*/
      ctx[0])) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img0, "src", img0_src_value);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(img0, "height", "37px");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span0, "class", "logo-mini");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img1, "alt", "img");
      if (!(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(img1.src, img1_src_value =
      /*olade_logo*/
      ctx[0])) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img1, "src", img1_src_value);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(img1, "height", "37px");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span1, "class", "logo-lg");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a0, "href", a0_href_value = "");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a0, "class", "logo");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(a0, "background-color", "#093F82");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a1, "href", a1_href_value = "/");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a1, "class", "sidebar-toggle svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a1, "data-toggle", "offcanvas");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a1, "role", "button");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li19, "class", "dropdown notifications-menu svelte-9fvhrt");
      if (!(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(img2.src, img2_src_value =
      /*user_logo*/
      ctx[1])) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img2, "src", img2_src_value);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img2, "class", "img-circle");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img2, "alt", " .");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(img2, "width", "20px");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(img2, "height", "20px");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span4, "class", "hidden-xs");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a20, "href", a20_href_value = "/");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a20, "class", "dropdown-toggle svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a20, "data-toggle", "dropdown");
      if (!(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(img3.src, img3_src_value =
      /*user_logo*/
      ctx[1])) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img3, "src", img3_src_value);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img3, "class", "img-circle");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img3, "alt", "img");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li20, "class", "user-header");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a21, "href",
      /*user_profile_route*/
      ctx[4]);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a21, "class", "btn btn-primary btn-flat svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "pull-left");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a22, "href",
      /*logout_route*/
      ctx[6]);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a22, "class", "btn btn-primary btn-flat svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "pull-right");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li21, "class", "user-footer svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(ul2, "class", "dropdown-menu");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li22, "class", "dropdown user user-menu svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(ul3, "class", "nav navbar-nav");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "navbar-custom-menu");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(nav, "class", "navbar navbar-static-top svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(header, "class", "main-header");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li23, "class", "header svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(li23, "background-color", "#073367");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(i18, "class", "fa fa-tachometer");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a23, "href",
      /*dashboard_route*/
      ctx[2]);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a23, "class", "svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li24, "class", "active svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a24, "href", a24_href_value = "/");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a24, "class", "svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(i21, "class", "fa fa-user");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a25, "href",
      /*all_users_route*/
      ctx[3]);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a25, "class", "svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li25, "class", "svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li26, "class", "svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li27, "class", "svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li28, "class", "svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(ul4, "class", "treeview-menu");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li29, "class", "treeview svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li33, "class", "treeview svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li34, "class", "svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li37, "class", "treeview svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li43, "class", "treeview svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li44, "class", "svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li45, "class", "svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a45, "href", a45_href_value = "/");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a45, "class", "svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(i46, "class", "fa fa-graduation-cap");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a46, "href",
      /*program_type_index_route*/
      ctx[7]);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a46, "class", "svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li46, "class", "svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a47, "href", a47_href_value = '/knowledge-area');
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a47, "class", "svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li47, "class", "svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a48, "href", "/olade-contract-type");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a48, "class", "svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li48, "class", "svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li49, "class", "svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a50, "href", "/province");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a50, "class", "svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li50, "class", "svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li51, "class", "svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li52, "class", "svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(ul8, "class", "treeview-menu");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li53, "class", "treeview svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li56, "class", "treeview svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(i57, "class", "fa fa-power-off");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a56, "href",
      /*logout_route*/
      ctx[6]);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a56, "class", "svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li57, "class", "svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(ul10, "class", "sidebar-menu tree");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(ul10, "data-widget", "tree");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(section, "class", "sidebar active");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(section, "height", "auto");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(aside0, "class", "main-sidebar svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "content-wrapper");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div3, "min-height", "531.141px");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(footer, "class", "main-footer");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(aside1, "class", "control-sidebar control-sidebar-dark svelte-9fvhrt");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div26, "class", "control-sidebar-bg");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div27, "class", "wrapper");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div27, "height", "auto");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div27, "min-height", "100%");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div27, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div27, header);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(header, a0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a0, span0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span0, img0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a0, t0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a0, span1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span1, img1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(header, t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(header, nav);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(nav, a1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(nav, t3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(nav, div2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, ul3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul3, li19);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul3, t42);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul3, li22);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li22, a20);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a20, img2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a20, t43);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a20, span4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li22, t45);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li22, ul2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul2, li20);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li20, img3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li20, t46);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li20, p0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul2, t49);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul2, li21);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li21, div0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, a21);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a21, t50);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li21, t51);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li21, div1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, a22);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a22, t52);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div27, t53);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div27, aside0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(aside0, section);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(section, ul10);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul10, li23);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul10, t55);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul10, li24);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li24, a23);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a23, i18);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a23, t56);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a23, span5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul10, t58);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul10, li29);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li29, a24);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li29, t62);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li29, ul4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul4, li25);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li25, a25);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a25, i21);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a25, t63);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul4, t64);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul4, li26);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul4, t66);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul4, li27);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul4, t68);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul4, li28);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul10, t70);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul10, li33);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul10, t80);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul10, li34);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul10, t83);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul10, li37);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul10, t91);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul10, li43);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul10, t105);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul10, li44);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul10, t108);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul10, li45);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul10, t111);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul10, li53);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li53, a45);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li53, t115);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li53, ul8);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul8, li46);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li46, a46);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a46, i46);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a46, t116);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul8, t117);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul8, li47);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li47, a47);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul8, t119);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul8, li48);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li48, a48);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul8, t121);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul8, li49);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul8, t123);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul8, li50);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li50, a50);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul8, t125);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul8, li51);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul8, t127);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul8, li52);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul10, t129);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul10, li56);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul10, t137);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul10, li57);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li57, a56);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a56, i57);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a56, t138);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a56, span15);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div27, t140);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div27, div3);

      if (default_slot) {
        default_slot.m(div3, null);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div27, t141);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div27, footer);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div27, t148);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div27, aside1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div27, t212);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div27, div26);
      current = true;

      if (!mounted) {
        dispose = [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(inertia_action = _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.inertia.call(null, a21)), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(inertia_action_1 = _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.inertia.call(null, a23)), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(inertia_action_2 = _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.inertia.call(null, a25)), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(inertia_action_3 = _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.inertia.call(null, a46)), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(inertia_action_4 = _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.inertia.call(null, a47)), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(inertia_action_5 = _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.inertia.call(null, a48)), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(inertia_action_6 = _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.inertia.call(null, a50))];
        mounted = true;
      }
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot) {
        if (default_slot.p && (!current || dirty &
        /*$$scope*/
        256)) {
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[8], !current ? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(
          /*$$scope*/
          ctx[8]) : (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(default_slot_template,
          /*$$scope*/
          ctx[8], dirty, null), null);
        }
      }
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(default_slot, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(default_slot, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div27);
      if (default_slot) default_slot.d(detaching);
      mounted = false;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
    }
  };
}

var c = 90;

function instance($$self, $$props, $$invalidate) {
  var $page;
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.page, function ($$value) {
    return $$invalidate(10, $page = $$value);
  });
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  var _$page$props = $page.props,
      olade_logo = _$page$props.olade_logo,
      user_logo = _$page$props.user_logo,
      dashboard_route = _$page$props.dashboard_route,
      all_users_route = _$page$props.all_users_route,
      user_profile_route = _$page$props.user_profile_route,
      user = _$page$props.user,
      logout_route = _$page$props.logout_route,
      csrf = _$page$props.csrf,
      program_type_index_route = _$page$props.program_type_index_route,
      settings_knowledge_area_index_route = _$page$props.settings_knowledge_area_index_route;

  $$self.$$set = function ($$props) {
    if ('$$scope' in $$props) $$invalidate(8, $$scope = $$props.$$scope);
  };

  return [olade_logo, user_logo, dashboard_route, all_users_route, user_profile_route, user, logout_route, program_type_index_route, $$scope, slots];
}

var Layout = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Layout, _SvelteComponent);

  var _super = _createSuper(Layout);

  function Layout(options) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {}, add_css);
    return _this;
  }

  return _createClass(Layout);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./resources/js/Pages/Profile/Profile.svelte":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Profile/Profile.svelte ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "layout": () => (/* binding */ layout)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _ProfileComponent_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileComponent.svelte */ "./resources/js/Pages/Profile/ProfileComponent.svelte");
/* harmony import */ var _Dashboard_Layout_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Dashboard/Layout.svelte */ "./resources/js/Pages/Dashboard/Layout.svelte");
/* harmony import */ var _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-svelte */ "./node_modules/@inertiajs/inertia-svelte/src/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* resources/js/Pages/Profile/Profile.svelte generated by Svelte v3.47.0 */





function create_default_slot(ctx) {
  var t;
  return {
    c: function c() {
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Cool...");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
    }
  };
}

function create_fragment(ctx) {
  var profilecomponent;
  var current;
  profilecomponent = new _ProfileComponent_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({
    props: {
      userName:
      /*user*/
      ctx[0].name,
      tabIndex: 1,
      $$slots: {
        "default": [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  return {
    c: function c() {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(profilecomponent.$$.fragment);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(profilecomponent, target, anchor);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var profilecomponent_changes = {};

      if (dirty &
      /*$$scope*/
      8) {
        profilecomponent_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      profilecomponent.$set(profilecomponent_changes);
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(profilecomponent.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(profilecomponent.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(profilecomponent, detaching);
    }
  };
}

var layout = _Dashboard_Layout_svelte__WEBPACK_IMPORTED_MODULE_2__["default"];

function instance($$self, $$props, $$invalidate) {
  var $page;
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_3__.page, function ($$value) {
    return $$invalidate(1, $page = $$value);
  });
  var _$page$props = $page.props,
      user_logo = _$page$props.user_logo,
      user = _$page$props.user;
  return [user];
}

var Profile = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Profile, _SvelteComponent);

  var _super = _createSuper(Profile);

  function Profile(options) {
    var _this;

    _classCallCheck(this, Profile);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {});
    return _this;
  }

  return _createClass(Profile);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);


/***/ }),

/***/ "./resources/js/Pages/Profile/ProfileComponent.svelte":
/*!************************************************************!*\
  !*** ./resources/js/Pages/Profile/ProfileComponent.svelte ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-svelte */ "./node_modules/@inertiajs/inertia-svelte/src/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* resources/js/Pages/Profile/ProfileComponent.svelte generated by Svelte v3.47.0 */



function add_css(target) {
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append_styles)(target, "svelte-59runs", ".nav-tabs.svelte-59runs>li.svelte-59runs.svelte-59runs{border-bottom:3px solid #C0C0C0;color:#C0C0C0;text-transform:uppercase;font-weight:800}.nav-tabs.svelte-59runs>li.active.svelte-59runs.svelte-59runs{border-bottom:3px solid #073367;color:#073367;text-transform:uppercase;font-weight:800}.nav-tabs.svelte-59runs li.svelte-59runs>a.svelte-59runs{color:#C8C8C8}");
}

function create_fragment(ctx) {
  var section0;
  var t6;
  var section1;
  var div6;
  var div5;
  var div4;
  var div3;
  var div1;
  var img;
  var img_src_value;
  var t7;
  var div0;
  var h3;
  var t8;
  var t9;
  var h4;
  var t11;
  var input;
  var t12;
  var div2;
  var ul;
  var li2;
  var a1;
  var a1_href_value;
  var li2_class_value;
  var t14;
  var li3;
  var a2;
  var a2_href_value;
  var li3_class_value;
  var t16;
  var li4;
  var a3;
  var a3_href_value;
  var li4_class_value;
  var t18;
  var li5;
  var a4;
  var a4_href_value;
  var li5_class_value;
  var t20;
  var li6;
  var a5;
  var a5_href_value;
  var li6_class_value;
  var t22;
  var div7;
  var current;
  var default_slot_template =
  /*#slots*/
  ctx[4]["default"];
  var default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx,
  /*$$scope*/
  ctx[3], null);
  return {
    c: function c() {
      section0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("section");
      section0.innerHTML = "<h1>User Profile\n        <small>Version 1.0</small></h1> \n      <ol class=\"breadcrumb\"><li><a href=\"./\"><i class=\"fa fa-dashboard\"></i> Home</a></li> \n        <li class=\"active\">User Profile</li></ol>";
      t6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      section1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("section");
      div6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      img = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("img");
      t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      h3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("h3");
      t8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(
      /*userName*/
      ctx[0]);
      t9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      h4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("h4");
      h4.textContent = " ";
      t11 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      input = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
      t12 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      ul = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("ul");
      li2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      a1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      a1.textContent = "Dashboard";
      t14 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      li3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      a2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      a2.textContent = "Profile";
      t16 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      li4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      a3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      a3.textContent = "Workflow";
      t18 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      li5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      a4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      a4.textContent = "Contracts";
      t20 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      li6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      a5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      a5.textContent = "Payment Portal";
      t22 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      if (default_slot) default_slot.c();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(section0, "class", "content-header");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "id", "myProfileImage");
      if (!(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(img.src, img_src_value =
      /*user_logo*/
      ctx[2])) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "src", img_src_value);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "class", "profile-user-img img-responsive img-circle");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "alt", "User Profile");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(img, "width", "70px");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(img, "height", "70px");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(img, "margin-left", "5px");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(img, "display", "inline-block");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(img, "margin-top", "-27px");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "onclick", "openfileDialog();");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(h3, "color", "#073367");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(h3, "font-weight", "700");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(h3, "text-transform", "capitalize");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(h4, "class", "text-muted");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(h4, "text-transform", "capitalize");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(input, "display", "none");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "type", "file");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "id", "fileLoader");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "name", "ProfilePhoto");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "accept", "image/*");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "onchange", "onFileSelected(event)");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div0, "display", "inline-block");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div0, "margin", "12px");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div0, "font-family", "'Arial Rounded MT Bold'");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(a1, "border", "none");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a1, "href", a1_href_value = null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a1, "class", "svelte-59runs");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li2, "class", li2_class_value = "" + ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.null_to_empty)(
      /*tabIndex*/
      ctx[1] == 1 ? 'active' : '') + " svelte-59runs"));
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(a2, "border", "none");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a2, "href", a2_href_value = null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a2, "class", "svelte-59runs");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li3, "class", li3_class_value = "" + ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.null_to_empty)(
      /*tabIndex*/
      ctx[1] == 2 ? 'active' : '') + " svelte-59runs"));
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(a3, "border", "none");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a3, "href", a3_href_value = null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a3, "class", "svelte-59runs");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li4, "class", li4_class_value = "" + ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.null_to_empty)(
      /*tabIndex*/
      ctx[1] == 3 ? 'active' : '') + " svelte-59runs"));
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(a4, "border", "none");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a4, "href", a4_href_value = null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a4, "class", "svelte-59runs");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li5, "class", li5_class_value = "" + ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.null_to_empty)(
      /*tabIndex*/
      ctx[1] == 4 ? 'active' : '') + " svelte-59runs"));
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(a5, "border", "none");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a5, "href", a5_href_value = null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a5, "class", "svelte-59runs");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li6, "class", li6_class_value = "" + ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.null_to_empty)(
      /*tabIndex*/
      ctx[1] == 5 ? 'active' : '') + " svelte-59runs"));
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(ul, "class", "nav nav-tabs nav-justified svelte-59runs");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "row");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "class", "box");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div5, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div6, "class", "row");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div7, "class", "row");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(section1, "class", "content");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, section0, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t6, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, section1, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(section1, div6);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, div5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, div4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, div3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, img);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t7);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, div0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, h3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(h3, t8);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t9);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, h4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t11);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, input);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, t12);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, ul);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul, li2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li2, a1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul, t14);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul, li3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li3, a2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul, t16);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul, li4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li4, a3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul, t18);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul, li5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li5, a4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul, t20);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ul, li6);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li6, a5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(section1, t22);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(section1, div7);

      if (default_slot) {
        default_slot.m(div7, null);
      }

      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (!current || dirty &
      /*userName*/
      1) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t8,
      /*userName*/
      ctx[0]);

      if (!current || dirty &
      /*tabIndex*/
      2 && li2_class_value !== (li2_class_value = "" + ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.null_to_empty)(
      /*tabIndex*/
      ctx[1] == 1 ? 'active' : '') + " svelte-59runs"))) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li2, "class", li2_class_value);
      }

      if (!current || dirty &
      /*tabIndex*/
      2 && li3_class_value !== (li3_class_value = "" + ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.null_to_empty)(
      /*tabIndex*/
      ctx[1] == 2 ? 'active' : '') + " svelte-59runs"))) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li3, "class", li3_class_value);
      }

      if (!current || dirty &
      /*tabIndex*/
      2 && li4_class_value !== (li4_class_value = "" + ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.null_to_empty)(
      /*tabIndex*/
      ctx[1] == 3 ? 'active' : '') + " svelte-59runs"))) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li4, "class", li4_class_value);
      }

      if (!current || dirty &
      /*tabIndex*/
      2 && li5_class_value !== (li5_class_value = "" + ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.null_to_empty)(
      /*tabIndex*/
      ctx[1] == 4 ? 'active' : '') + " svelte-59runs"))) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li5, "class", li5_class_value);
      }

      if (!current || dirty &
      /*tabIndex*/
      2 && li6_class_value !== (li6_class_value = "" + ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.null_to_empty)(
      /*tabIndex*/
      ctx[1] == 5 ? 'active' : '') + " svelte-59runs"))) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li6, "class", li6_class_value);
      }

      if (default_slot) {
        if (default_slot.p && (!current || dirty &
        /*$$scope*/
        8)) {
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[3], !current ? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(
          /*$$scope*/
          ctx[3]) : (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(default_slot_template,
          /*$$scope*/
          ctx[3], dirty, null), null);
        }
      }
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(default_slot, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(default_slot, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(section0);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t6);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(section1);
      if (default_slot) default_slot.d(detaching);
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var $page;
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_1__.page, function ($$value) {
    return $$invalidate(5, $page = $$value);
  });
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  var _$page$props = $page.props,
      user_logo = _$page$props.user_logo,
      user = _$page$props.user;
  var userName = $$props.userName;
  var _$$props$tabIndex = $$props.tabIndex,
      tabIndex = _$$props$tabIndex === void 0 ? 1 : _$$props$tabIndex;

  $$self.$$set = function ($$props) {
    if ('userName' in $$props) $$invalidate(0, userName = $$props.userName);
    if ('tabIndex' in $$props) $$invalidate(1, tabIndex = $$props.tabIndex);
    if ('$$scope' in $$props) $$invalidate(3, $$scope = $$props.$$scope);
  };

  return [userName, tabIndex, user_logo, $$scope, slots];
}

var ProfileComponent = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(ProfileComponent, _SvelteComponent);

  var _super = _createSuper(ProfileComponent);

  function ProfileComponent(options) {
    var _this;

    _classCallCheck(this, ProfileComponent);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
      userName: 0,
      tabIndex: 1
    }, add_css);
    return _this;
  }

  return _createClass(ProfileComponent);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileComponent);

/***/ }),

/***/ "./resources/js/Pages/Settings/KnowledgeArea.svelte":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/Settings/KnowledgeArea.svelte ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "layout": () => (/* binding */ layout)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _Components_MessageNotification_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/MessageNotification.svelte */ "./resources/js/Pages/Components/MessageNotification.svelte");
/* harmony import */ var _components_Modal_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Modal.svelte */ "./resources/js/components/Modal.svelte");
/* harmony import */ var _components_Page_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Page.svelte */ "./resources/js/components/Page.svelte");
/* harmony import */ var _components_Pagination_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Pagination.svelte */ "./resources/js/components/Pagination.svelte");
/* harmony import */ var _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inertiajs/inertia-svelte */ "./node_modules/@inertiajs/inertia-svelte/src/index.js");
/* harmony import */ var _Dashboard_Layout_svelte__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Dashboard/Layout.svelte */ "./resources/js/Pages/Dashboard/Layout.svelte");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* resources/js/Pages/Settings/KnowledgeArea.svelte generated by Svelte v3.47.0 */








function get_each_context_2(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[34] = list[i];
  return child_ctx;
}

function get_each_context_3(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[31] = list[i];
  return child_ctx;
}

function get_each_context_4(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[39] = list[i];
  return child_ctx;
}

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[28] = list[i];
  return child_ctx;
}

function get_each_context_1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[31] = list[i];
  return child_ctx;
} // (194:4) 


function create_title_slot_1(ctx) {
  var span;
  return {
    c: function c() {
      span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
      span.textContent = "Knowledge Area";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span, "slot", "title");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, span, anchor);
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(span);
    }
  };
} // (213:11) {#each program_types as program_type}


function create_each_block_4(ctx) {
  var option;
  var t_value =
  /*program_type*/
  ctx[39].title + "";
  var t;
  var option_value_value;
  return {
    c: function c() {
      option = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
      option.__value = option_value_value =
      /*program_type*/
      ctx[39].id;
      option.value = option.__value;
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, option, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(option, t);
    },
    p: function p(ctx, dirty) {
      if (dirty[0] &
      /*program_types*/
      4 && t_value !== (t_value =
      /*program_type*/
      ctx[39].title + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, t_value);

      if (dirty[0] &
      /*program_types*/
      4 && option_value_value !== (option_value_value =
      /*program_type*/
      ctx[39].id)) {
        option.__value = option_value_value;
        option.value = option.__value;
      }
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(option);
    }
  };
} // (234:11) {#each knowledge_area_types as knowledge_area_type}


function create_each_block_3(ctx) {
  var option;
  var t_value =
  /*knowledge_area_type*/
  ctx[31] + "";
  var t;
  var option_value_value;
  return {
    c: function c() {
      option = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
      option.__value = option_value_value =
      /*knowledge_area_type*/
      ctx[31];
      option.value = option.__value;
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, option, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(option, t);
    },
    p: function p(ctx, dirty) {
      if (dirty[0] &
      /*knowledge_area_types*/
      8 && t_value !== (t_value =
      /*knowledge_area_type*/
      ctx[31] + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, t_value);

      if (dirty[0] &
      /*knowledge_area_types*/
      8 && option_value_value !== (option_value_value =
      /*knowledge_area_type*/
      ctx[31])) {
        option.__value = option_value_value;
        option.value = option.__value;
      }
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(option);
    }
  };
} // (284:16) {#each statuses as status}


function create_each_block_2(ctx) {
  var option;
  var t_value =
  /*status*/
  ctx[34] + "";
  var t;
  var option_value_value;
  return {
    c: function c() {
      option = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
      option.__value = option_value_value =
      /*status*/
      ctx[34];
      option.value = option.__value;
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, option, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(option, t);
    },
    p: function p(ctx, dirty) {
      if (dirty[0] &
      /*statuses*/
      2 && t_value !== (t_value =
      /*status*/
      ctx[34] + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, t_value);

      if (dirty[0] &
      /*statuses*/
      2 && option_value_value !== (option_value_value =
      /*status*/
      ctx[34])) {
        option.__value = option_value_value;
        option.value = option.__value;
      }
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(option);
    }
  };
} // (289:12) {#if $form.errors.status}


function create_if_block(ctx) {
  var div;
  var t_value =
  /*$form*/
  ctx[8].errors.status + "";
  var t;
  return {
    c: function c() {
      div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div, "color", "red");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t);
    },
    p: function p(ctx, dirty) {
      if (dirty[0] &
      /*$form*/
      256 && t_value !== (t_value =
      /*$form*/
      ctx[8].errors.status + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, t_value);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
    }
  };
} // (197:4) 


function create_content_slot_1(ctx) {
  var div5;
  var div0;
  var label0;
  var t2;
  var select0;
  var option0;
  var t4;
  var div1;
  var label1;
  var t7;
  var select1;
  var option1;
  var t9;
  var div2;
  var label2;
  var t12;
  var input0;
  var t13;
  var div3;
  var label3;
  var t16;
  var input1;
  var t17;
  var div4;
  var label4;
  var t20;
  var select2;
  var option2;
  var t22;
  var mounted;
  var dispose;
  var each_value_4 =
  /*program_types*/
  ctx[2];
  var each_blocks_2 = [];

  for (var i = 0; i < each_value_4.length; i += 1) {
    each_blocks_2[i] = create_each_block_4(get_each_context_4(ctx, each_value_4, i));
  }

  var each_value_3 =
  /*knowledge_area_types*/
  ctx[3];
  var each_blocks_1 = [];

  for (var _i = 0; _i < each_value_3.length; _i += 1) {
    each_blocks_1[_i] = create_each_block_3(get_each_context_3(ctx, each_value_3, _i));
  }

  var each_value_2 =
  /*statuses*/
  ctx[1];
  var each_blocks = [];

  for (var _i2 = 0; _i2 < each_value_2.length; _i2 += 1) {
    each_blocks[_i2] = create_each_block_2(get_each_context_2(ctx, each_value_2, _i2));
  }

  var if_block =
  /*$form*/
  ctx[8].errors.status && create_if_block(ctx);
  return {
    c: function c() {
      div5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      label0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
      label0.innerHTML = "Program Type <b style=\"color:red\">*</b>";
      t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      select0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("select");
      option0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      option0.textContent = "Select";

      for (var _i3 = 0; _i3 < each_blocks_2.length; _i3 += 1) {
        each_blocks_2[_i3].c();
      }

      t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      label1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
      label1.innerHTML = "Knowledge Area Type<b style=\"color:red\">*</b>";
      t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      select1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("select");
      option1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      option1.textContent = "Select";

      for (var _i4 = 0; _i4 < each_blocks_1.length; _i4 += 1) {
        each_blocks_1[_i4].c();
      }

      t9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      label2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
      label2.innerHTML = "Name<b style=\"color:red\">*</b>";
      t12 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      input0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
      t13 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      label3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
      label3.innerHTML = "No Of Questions<b style=\"color:red\">*</b>";
      t16 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      input1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
      t17 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      label4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
      label4.innerHTML = "Status<b style=\"color:red\">*</b>";
      t20 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      select2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("select");
      option2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      option2.textContent = "Select";

      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
        each_blocks[_i5].c();
      }

      t22 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      if (if_block) if_block.c();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label0, "class", "control-label");
      option0.__value = "";
      option0.value = option0.__value;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(select0, "type", "text");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(select0, "class", "form-control");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(select0, "name", "proTitle");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(select0, "placeholder", "");
      select0.required = "";
      if (
      /*$form*/
      ctx[8].program_type_id === void 0) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_render_callback)(function () {
        return (
          /*select0_change_handler*/
          ctx[22].call(select0)
        );
      });
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label1, "class", "control-label");
      option1.__value = "";
      option1.value = option1.__value;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(select1, "type", "text");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(select1, "class", "form-control");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(select1, "name", "proTitle");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(select1, "placeholder", "");
      select1.required = "";
      if (
      /*$form*/
      ctx[8].knowledge_area_type === void 0) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_render_callback)(function () {
        return (
          /*select1_change_handler*/
          ctx[23].call(select1)
        );
      });
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label2, "class", "control-label");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input0, "class", "form-control");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input0, "name", "proDescription");
      input0.required = "";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label3, "class", "control-label");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "class", "form-control");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "name", "proDescription");
      input1.required = "";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label4, "class", "control-label");
      option2.__value = "";
      option2.value = option2.__value;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(select2, "class", "form-control");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(select2, "name", "proDescription");
      select2.required = "";
      if (
      /*$form*/
      ctx[8].status === void 0) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_render_callback)(function () {
        return (
          /*select2_change_handler*/
          ctx[26].call(select2)
        );
      });
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div5, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div5, "slot", "content");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div5, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, div0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, label0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, select0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(select0, option0);

      for (var _i6 = 0; _i6 < each_blocks_2.length; _i6 += 1) {
        each_blocks_2[_i6].m(select0, null);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select0,
      /*$form*/
      ctx[8].program_type_id);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, t4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, div1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, label1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t7);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, select1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(select1, option1);

      for (var _i7 = 0; _i7 < each_blocks_1.length; _i7 += 1) {
        each_blocks_1[_i7].m(select1, null);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select1,
      /*$form*/
      ctx[8].knowledge_area_type);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, t9);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, div2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, label2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t12);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, input0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input0,
      /*$form*/
      ctx[8].name);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, t13);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, div3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, label3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, t16);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, input1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input1,
      /*$form*/
      ctx[8].no_of_questions);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, t17);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, div4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, label4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, t20);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, select2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(select2, option2);

      for (var _i8 = 0; _i8 < each_blocks.length; _i8 += 1) {
        each_blocks[_i8].m(select2, null);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select2,
      /*$form*/
      ctx[8].status);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, t22);
      if (if_block) if_block.m(div4, null);

      if (!mounted) {
        dispose = [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(select0, "change",
        /*select0_change_handler*/
        ctx[22]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(select1, "change",
        /*select1_change_handler*/
        ctx[23]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input0, "input",
        /*input0_input_handler*/
        ctx[24]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input1, "input",
        /*input1_input_handler*/
        ctx[25]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(select2, "change",
        /*select2_change_handler*/
        ctx[26])];
        mounted = true;
      }
    },
    p: function p(ctx, dirty) {
      if (dirty[0] &
      /*program_types*/
      4) {
        each_value_4 =
        /*program_types*/
        ctx[2];

        var _i9;

        for (_i9 = 0; _i9 < each_value_4.length; _i9 += 1) {
          var child_ctx = get_each_context_4(ctx, each_value_4, _i9);

          if (each_blocks_2[_i9]) {
            each_blocks_2[_i9].p(child_ctx, dirty);
          } else {
            each_blocks_2[_i9] = create_each_block_4(child_ctx);

            each_blocks_2[_i9].c();

            each_blocks_2[_i9].m(select0, null);
          }
        }

        for (; _i9 < each_blocks_2.length; _i9 += 1) {
          each_blocks_2[_i9].d(1);
        }

        each_blocks_2.length = each_value_4.length;
      }

      if (dirty[0] &
      /*$form, program_types*/
      260) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select0,
        /*$form*/
        ctx[8].program_type_id);
      }

      if (dirty[0] &
      /*knowledge_area_types*/
      8) {
        each_value_3 =
        /*knowledge_area_types*/
        ctx[3];

        var _i10;

        for (_i10 = 0; _i10 < each_value_3.length; _i10 += 1) {
          var _child_ctx = get_each_context_3(ctx, each_value_3, _i10);

          if (each_blocks_1[_i10]) {
            each_blocks_1[_i10].p(_child_ctx, dirty);
          } else {
            each_blocks_1[_i10] = create_each_block_3(_child_ctx);

            each_blocks_1[_i10].c();

            each_blocks_1[_i10].m(select1, null);
          }
        }

        for (; _i10 < each_blocks_1.length; _i10 += 1) {
          each_blocks_1[_i10].d(1);
        }

        each_blocks_1.length = each_value_3.length;
      }

      if (dirty[0] &
      /*$form, program_types*/
      260) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select1,
        /*$form*/
        ctx[8].knowledge_area_type);
      }

      if (dirty[0] &
      /*$form, program_types*/
      260 && input0.value !==
      /*$form*/
      ctx[8].name) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input0,
        /*$form*/
        ctx[8].name);
      }

      if (dirty[0] &
      /*$form, program_types*/
      260 && input1.value !==
      /*$form*/
      ctx[8].no_of_questions) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input1,
        /*$form*/
        ctx[8].no_of_questions);
      }

      if (dirty[0] &
      /*statuses*/
      2) {
        each_value_2 =
        /*statuses*/
        ctx[1];

        var _i11;

        for (_i11 = 0; _i11 < each_value_2.length; _i11 += 1) {
          var _child_ctx2 = get_each_context_2(ctx, each_value_2, _i11);

          if (each_blocks[_i11]) {
            each_blocks[_i11].p(_child_ctx2, dirty);
          } else {
            each_blocks[_i11] = create_each_block_2(_child_ctx2);

            each_blocks[_i11].c();

            each_blocks[_i11].m(select2, null);
          }
        }

        for (; _i11 < each_blocks.length; _i11 += 1) {
          each_blocks[_i11].d(1);
        }

        each_blocks.length = each_value_2.length;
      }

      if (dirty[0] &
      /*$form, program_types*/
      260) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select2,
        /*$form*/
        ctx[8].status);
      }

      if (
      /*$form*/
      ctx[8].errors.status) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          if_block.m(div4, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks_2, detaching);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks_1, detaching);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
      if (if_block) if_block.d();
      mounted = false;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
    }
  };
} // (298:4) 


function create_storeButton_slot(ctx) {
  var button;
  var i;
  var t0;
  var t1_value = (
  /*mode*/
  ctx[6] == "create" ? "Add Knowledge Area" : "Update Knowledge Area") + "";
  var t1;
  return {
    c: function c() {
      button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
      i = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("i");
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("   ");
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t1_value);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(i, "class", "fa fa-save");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "slot", "storeButton");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "type", "submit");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "class", "btn btn-primary");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button, i);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button, t0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button, t1);
    },
    p: function p(ctx, dirty) {
      if (dirty[0] &
      /*mode*/
      64 && t1_value !== (t1_value = (
      /*mode*/
      ctx[6] == "create" ? "Add Knowledge Area" : "Update Knowledge Area") + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t1, t1_value);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button);
    }
  };
} // (96:0) <Page>


function create_default_slot(ctx) {
  var modal;
  var current;
  modal = new _components_Modal_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
    props: {
      id: "modal-progtype",
      $$slots: {
        storeButton: [create_storeButton_slot],
        content: [create_content_slot_1],
        title: [create_title_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  modal.$on("submit",
  /*callStore*/
  ctx[15]);
  modal.$on("setRef",
  /*setRef_handler*/
  ctx[27]);
  return {
    c: function c() {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(modal.$$.fragment);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(modal, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var modal_changes = {};

      if (dirty[0] &
      /*mode, $form, statuses, knowledge_area_types, program_types*/
      334 | dirty[1] &
      /*$$scope*/
      2048) {
        modal_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      modal.$set(modal_changes);
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(modal.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(modal.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(modal, detaching);
    }
  };
} // (97:2) 


function create_title_slot(ctx) {
  var span;
  return {
    c: function c() {
      span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
      span.textContent = "Knowledge Area";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span, "slot", "title");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, span, anchor);
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(span);
    }
  };
} // (99:2) 


function create_createButton_slot(ctx) {
  var button;
  var mounted;
  var dispose;
  return {
    c: function c() {
      button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
      button.innerHTML = "<i class=\"fa fa-plus\"></i>Add Knowledge Area";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "slot", "createButton");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "class", "btn btn-primary btn-sm");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "data-toggle", "modal");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "data-target", "#modal-progtype");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button, anchor);

      if (!mounted) {
        dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button, "click", (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.prevent_default)(
        /*clearForm*/
        ctx[14]));
        mounted = true;
      }
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button);
      mounted = false;
      dispose();
    }
  };
} // (114:12) {#each knowledge_area_types as knowledge_area_type}


function create_each_block_1(ctx) {
  var option;
  var t_value =
  /*knowledge_area_type*/
  ctx[31] + "";
  var t;
  var option_value_value;
  return {
    c: function c() {
      option = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
      option.__value = option_value_value =
      /*knowledge_area_type*/
      ctx[31];
      option.value = option.__value;
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, option, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(option, t);
    },
    p: function p(ctx, dirty) {
      if (dirty[0] &
      /*knowledge_area_types*/
      8 && t_value !== (t_value =
      /*knowledge_area_type*/
      ctx[31] + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, t_value);

      if (dirty[0] &
      /*knowledge_area_types*/
      8 && option_value_value !== (option_value_value =
      /*knowledge_area_type*/
      ctx[31])) {
        option.__value = option_value_value;
        option.value = option.__value;
      }
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(option);
    }
  };
} // (139:16) {#each list as item}


function create_each_block(ctx) {
  var tr;
  var td0;
  var t0_value =
  /*item*/
  ctx[28].program_type.title + "";
  var t0;
  var t1;
  var td1;
  var t2_value =
  /*item*/
  ctx[28].knowledge_area_type + "";
  var t2;
  var t3;
  var td2;
  var t4_value =
  /*item*/
  ctx[28].name + "";
  var t4;
  var t5;
  var td3;
  var t6_value =
  /*item*/
  ctx[28].no_of_questions + "";
  var t6;
  var t7;
  var td4;
  var t8_value =
  /*item*/
  ctx[28].status + "";
  var t8;
  var t9;
  var td5;
  var a0;
  var a0_href_value;
  var t10;
  var a1;
  var a1_href_value;
  var t11;
  var mounted;
  var dispose;

  function click_handler() {
    return (
      /*click_handler*/
      ctx[20](
      /*item*/
      ctx[28])
    );
  }

  function click_handler_1() {
    return (
      /*click_handler_1*/
      ctx[21](
      /*item*/
      ctx[28])
    );
  }

  return {
    c: function c() {
      tr = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("tr");
      td0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("td");
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t0_value);
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      td1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("td");
      t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t2_value);
      t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      td2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("td");
      t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t4_value);
      t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      td3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("td");
      t6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t6_value);
      t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      td4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("td");
      t8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t8_value);
      t9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      td5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("td");
      a0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      a0.innerHTML = "<i class=\"fa fa-edit text-green\"></i>";
      t10 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("\n                              \n                            ");
      a1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      a1.innerHTML = "<i class=\"fa fa-trash text-red\"></i>";
      t11 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a0, "data-toggle", "modal");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a0, "data-target", "#modal-progtype");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a0, "href", a0_href_value = null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a1, "href", a1_href_value = null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(tr, "class", "odd");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, tr, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, td0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td0, t0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, td1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td1, t2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, t3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, td2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td2, t4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, t5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, td3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td3, t6);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, t7);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, td4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td4, t8);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, t9);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, td5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td5, a0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td5, t10);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td5, a1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, t11);

      if (!mounted) {
        dispose = [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(a0, "click", (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.prevent_default)(click_handler)), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(a1, "click", (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.prevent_default)(click_handler_1))];
        mounted = true;
      }
    },
    p: function p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] &
      /*list*/
      16 && t0_value !== (t0_value =
      /*item*/
      ctx[28].program_type.title + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t0, t0_value);
      if (dirty[0] &
      /*list*/
      16 && t2_value !== (t2_value =
      /*item*/
      ctx[28].knowledge_area_type + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t2, t2_value);
      if (dirty[0] &
      /*list*/
      16 && t4_value !== (t4_value =
      /*item*/
      ctx[28].name + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t4, t4_value);
      if (dirty[0] &
      /*list*/
      16 && t6_value !== (t6_value =
      /*item*/
      ctx[28].no_of_questions + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t6, t6_value);
      if (dirty[0] &
      /*list*/
      16 && t8_value !== (t8_value =
      /*item*/
      ctx[28].status + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t8, t8_value);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(tr);
      mounted = false;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
    }
  };
} // (110:0) 


function create_content_slot(ctx) {
  var div2;
  var div0;
  var select;
  var option;
  var t1;
  var div1;
  var table;
  var thead;
  var t12;
  var tbody;
  var mounted;
  var dispose;
  var each_value_1 =
  /*knowledge_area_types*/
  ctx[3];
  var each_blocks_1 = [];

  for (var i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }

  var each_value =
  /*list*/
  ctx[4];
  var each_blocks = [];

  for (var _i12 = 0; _i12 < each_value.length; _i12 += 1) {
    each_blocks[_i12] = create_each_block(get_each_context(ctx, each_value, _i12));
  }

  return {
    c: function c() {
      div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      select = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("select");
      option = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      option.textContent = "All Types";

      for (var _i13 = 0; _i13 < each_blocks_1.length; _i13 += 1) {
        each_blocks_1[_i13].c();
      }

      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      table = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("table");
      thead = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("thead");
      thead.innerHTML = "<tr role=\"row\"><th>Program Type</th><th>Knowledge Area Type</th> \n                    <th>Name</th> \n                    <th>No Of Question</th> \n                    <th>Status</th> \n                    <th>Actions</th></tr>";
      t12 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      tbody = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("tbody");

      for (var _i14 = 0; _i14 < each_blocks.length; _i14 += 1) {
        each_blocks[_i14].c();
      }

      option.__value = "";
      option.value = option.__value;
      if (
      /*$filter*/
      ctx[9].knowledge_area_type === void 0) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_render_callback)(function () {
        return (
          /*select_change_handler*/
          ctx[19].call(select)
        );
      });
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(table, "id", "example1");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(table, "class", "table table-data table-striped table-hover dataTable no-footer");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(table, "role", "grid");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(table, "aria-describedby", "example1_info");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "col-sm-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "slot", "content");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div2, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, select);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(select, option);

      for (var _i15 = 0; _i15 < each_blocks_1.length; _i15 += 1) {
        each_blocks_1[_i15].m(select, null);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select,
      /*$filter*/
      ctx[9].knowledge_area_type);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, table);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(table, thead);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(table, t12);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(table, tbody);

      for (var _i16 = 0; _i16 < each_blocks.length; _i16 += 1) {
        each_blocks[_i16].m(tbody, null);
      }

      if (!mounted) {
        dispose = [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(select, "change",
        /*select_change_handler*/
        ctx[19]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(select, "change",
        /*doFilter*/
        ctx[16])];
        mounted = true;
      }
    },
    p: function p(ctx, dirty) {
      if (dirty[0] &
      /*knowledge_area_types*/
      8) {
        each_value_1 =
        /*knowledge_area_types*/
        ctx[3];

        var _i17;

        for (_i17 = 0; _i17 < each_value_1.length; _i17 += 1) {
          var child_ctx = get_each_context_1(ctx, each_value_1, _i17);

          if (each_blocks_1[_i17]) {
            each_blocks_1[_i17].p(child_ctx, dirty);
          } else {
            each_blocks_1[_i17] = create_each_block_1(child_ctx);

            each_blocks_1[_i17].c();

            each_blocks_1[_i17].m(select, null);
          }
        }

        for (; _i17 < each_blocks_1.length; _i17 += 1) {
          each_blocks_1[_i17].d(1);
        }

        each_blocks_1.length = each_value_1.length;
      }

      if (dirty[0] &
      /*$filter, knowledge_area_types*/
      520) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select,
        /*$filter*/
        ctx[9].knowledge_area_type);
      }

      if (dirty[0] &
      /*removeRow, list, selectRow*/
      12304) {
        each_value =
        /*list*/
        ctx[4];

        var _i18;

        for (_i18 = 0; _i18 < each_value.length; _i18 += 1) {
          var _child_ctx3 = get_each_context(ctx, each_value, _i18);

          if (each_blocks[_i18]) {
            each_blocks[_i18].p(_child_ctx3, dirty);
          } else {
            each_blocks[_i18] = create_each_block(_child_ctx3);

            each_blocks[_i18].c();

            each_blocks[_i18].m(tbody, null);
          }
        }

        for (; _i18 < each_blocks.length; _i18 += 1) {
          each_blocks[_i18].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks_1, detaching);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
      mounted = false;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
    }
  };
}

function create_fragment(ctx) {
  var messagenotification;
  var t;
  var page_1;
  var current;
  messagenotification = new _Components_MessageNotification_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({
    props: {
      onCloseModal:
      /*onCloseModal*/
      ctx[18],
      onResetMessage:
      /*onResetMessage*/
      ctx[17],
      message:
      /*message*/
      ctx[0],
      hasErrors:
      /*$form*/
      ctx[8].hasErrors,
      errors:
      /*$form*/
      ctx[8].errors,
      error:
      /*error*/
      ctx[5]
    }
  });
  page_1 = new _components_Page_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
    props: {
      $$slots: {
        content: [create_content_slot],
        createButton: [create_createButton_slot],
        title: [create_title_slot],
        "default": [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  return {
    c: function c() {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(messagenotification.$$.fragment);
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(page_1.$$.fragment);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(messagenotification, target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(page_1, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var messagenotification_changes = {};
      if (dirty[0] &
      /*message*/
      1) messagenotification_changes.message =
      /*message*/
      ctx[0];
      if (dirty[0] &
      /*$form*/
      256) messagenotification_changes.hasErrors =
      /*$form*/
      ctx[8].hasErrors;
      if (dirty[0] &
      /*$form*/
      256) messagenotification_changes.errors =
      /*$form*/
      ctx[8].errors;
      if (dirty[0] &
      /*error*/
      32) messagenotification_changes.error =
      /*error*/
      ctx[5];
      messagenotification.$set(messagenotification_changes);
      var page_1_changes = {};

      if (dirty[0] &
      /*list, $filter, knowledge_area_types, closeModal, mode, $form, statuses, program_types*/
      990 | dirty[1] &
      /*$$scope*/
      2048) {
        page_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      page_1.$set(page_1_changes);
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(messagenotification.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(page_1.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(messagenotification.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(page_1.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(messagenotification, detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(page_1, detaching);
    }
  };
}

var layout = _Dashboard_Layout_svelte__WEBPACK_IMPORTED_MODULE_6__["default"];

function instance($$self, $$props, $$invalidate) {
  var $form;
  var $filter;
  var statuses = $$props.statuses;
  var program_types = $$props.program_types;
  var knowledge_area_types = $$props.knowledge_area_types;
  var list = $$props.list;
  var message = $$props.message;
  var error = $$props.error; // export let csrf;

  var mode = "create";
  var closeModal = null; // 'program_type_id'=>'required',
  //         'knowledge_area_type'=>'required',
  //         'name'=>'required',
  //         'no_of_questions'=>'required',
  //         'status'=>'required'

  var form = (0,_inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_5__.useForm)({
    program_type_id: "",
    knowledge_area_type: "",
    name: "",
    no_of_questions: 10,
    status: "active",
    id: "0"
  });
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, form, function (value) {
    return $$invalidate(8, $form = value);
  });
  var filter = (0,_inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_5__.useForm)({
    knowledge_area_type: ''
  });
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, filter, function (value) {
    return $$invalidate(9, $filter = value);
  });

  function selectRow(data) {
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_store_value)(form, $form.program_type_id = data.program_type_id, $form);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_store_value)(form, $form.knowledge_area_type = data.knowledge_area_type, $form);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_store_value)(form, $form.name = data.name, $form);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_store_value)(form, $form.no_of_questions = data.no_of_questions, $form);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_store_value)(form, $form.status = data.status, $form);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_store_value)(form, $form.id = data.id, $form);
    $$invalidate(6, mode = "update");
  }

  function removeRow(data) {
    if (confirm("Do you want to confirm this action?")) {
      $form["delete"]("/knowledge-area/" + data.id);
    }
  }

  function clearForm() {
    $form.reset();
    $$invalidate(6, mode = "create");
  }

  function callStore() {
    if (mode == "create") {
      $form.post('/knowledge-area');
    } else {
      $form.put("/knowledge-area/" + $form.id);
    }
  }

  function doFilter() {
    $filter.get('/knowledge-area');
  }

  function onResetMessage() {
    $form.clearErrors();
    $$invalidate(0, message = '');
  }

  function onCloseModal() {
    closeModal.click();
  }

  function select_change_handler() {
    $filter.knowledge_area_type = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_value)(this);
    filter.set($filter);
    $$invalidate(3, knowledge_area_types);
  }

  var click_handler = function click_handler(item) {
    return selectRow(item);
  };

  var click_handler_1 = function click_handler_1(item) {
    return removeRow(item);
  };

  function select0_change_handler() {
    $form.program_type_id = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_value)(this);
    form.set($form);
    $$invalidate(2, program_types);
  }

  function select1_change_handler() {
    $form.knowledge_area_type = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_value)(this);
    form.set($form);
    $$invalidate(2, program_types);
  }

  function input0_input_handler() {
    $form.name = this.value;
    form.set($form);
    $$invalidate(2, program_types);
  }

  function input1_input_handler() {
    $form.no_of_questions = this.value;
    form.set($form);
    $$invalidate(2, program_types);
  }

  function select2_change_handler() {
    $form.status = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_value)(this);
    form.set($form);
    $$invalidate(2, program_types);
  }

  var setRef_handler = function setRef_handler(e) {
    return $$invalidate(7, closeModal = e.detail);
  };

  $$self.$$set = function ($$props) {
    if ('statuses' in $$props) $$invalidate(1, statuses = $$props.statuses);
    if ('program_types' in $$props) $$invalidate(2, program_types = $$props.program_types);
    if ('knowledge_area_types' in $$props) $$invalidate(3, knowledge_area_types = $$props.knowledge_area_types);
    if ('list' in $$props) $$invalidate(4, list = $$props.list);
    if ('message' in $$props) $$invalidate(0, message = $$props.message);
    if ('error' in $$props) $$invalidate(5, error = $$props.error);
  };

  return [message, statuses, program_types, knowledge_area_types, list, error, mode, closeModal, $form, $filter, form, filter, selectRow, removeRow, clearForm, callStore, doFilter, onResetMessage, onCloseModal, select_change_handler, click_handler, click_handler_1, select0_change_handler, select1_change_handler, input0_input_handler, input1_input_handler, select2_change_handler, setRef_handler];
}

var KnowledgeArea = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(KnowledgeArea, _SvelteComponent);

  var _super = _createSuper(KnowledgeArea);

  function KnowledgeArea(options) {
    var _this;

    _classCallCheck(this, KnowledgeArea);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
      statuses: 1,
      program_types: 2,
      knowledge_area_types: 3,
      list: 4,
      message: 0,
      error: 5
    }, null, [-1, -1]);
    return _this;
  }

  return _createClass(KnowledgeArea);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KnowledgeArea);


/***/ }),

/***/ "./resources/js/Pages/Settings/OladeContractType.svelte":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Settings/OladeContractType.svelte ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "layout": () => (/* binding */ layout)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _Components_MessageNotification_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/MessageNotification.svelte */ "./resources/js/Pages/Components/MessageNotification.svelte");
/* harmony import */ var _components_Modal_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Modal.svelte */ "./resources/js/components/Modal.svelte");
/* harmony import */ var _components_Page_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Page.svelte */ "./resources/js/components/Page.svelte");
/* harmony import */ var _components_Pagination_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Pagination.svelte */ "./resources/js/components/Pagination.svelte");
/* harmony import */ var _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inertiajs/inertia-svelte */ "./node_modules/@inertiajs/inertia-svelte/src/index.js");
/* harmony import */ var _Dashboard_Layout_svelte__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Dashboard/Layout.svelte */ "./resources/js/Pages/Dashboard/Layout.svelte");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* resources/js/Pages/Settings/OladeContractType.svelte generated by Svelte v3.47.0 */








function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[13] = list[i];
  return child_ctx;
}

function get_each_context_1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[16] = list[i];
  return child_ctx;
} // (73:2) 


function create_title_slot(ctx) {
  var span;
  return {
    c: function c() {
      span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
      span.textContent = "Olade Contract Types";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span, "slot", "title");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, span, anchor);
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(span);
    }
  };
} // (75:2) 


function create_createButton_slot(ctx) {
  var a;
  var i;
  var t;
  var a_href_value;
  var inertia_action;
  var mounted;
  var dispose;
  return {
    c: function c() {
      a = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      i = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("i");
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(" Add Olade Contract Type");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(i, "class", "fa fa-plus");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "href", a_href_value = resource + 'create');
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "slot", "createButton");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "class", "btn btn-primary btn-sm");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, a, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a, i);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a, t);

      if (!mounted) {
        dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(inertia_action = _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_5__.inertia.call(null, a));
        mounted = true;
      }
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(a);
      mounted = false;
      dispose();
    }
  };
} // (91:12) {#each statuses as status}


function create_each_block_1(ctx) {
  var option;
  var t_value =
  /*status*/
  ctx[16] + "";
  var t;
  var option_value_value;
  return {
    c: function c() {
      option = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
      option.__value = option_value_value =
      /*status*/
      ctx[16];
      option.value = option.__value;
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, option, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(option, t);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*statuses*/
      2 && t_value !== (t_value =
      /*status*/
      ctx[16] + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, t_value);

      if (dirty &
      /*statuses*/
      2 && option_value_value !== (option_value_value =
      /*status*/
      ctx[16])) {
        option.__value = option_value_value;
        option.value = option.__value;
      }
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(option);
    }
  };
} // (116:16) {#each list as item}


function create_each_block(ctx) {
  var tr;
  var td0;
  var t0_value =
  /*item*/
  ctx[13].title + "";
  var t0;
  var t1;
  var td1;
  var t2_value =
  /*item*/
  ctx[13].primary_commission + "";
  var t2;
  var t3;
  var td2;
  var t4_value =
  /*item*/
  ctx[13].secondary_commission + "";
  var t4;
  var t5;
  var td3;
  var t6_value =
  /*item*/
  ctx[13].no_of_months + "";
  var t6;
  var t7;
  var td4;
  var t8_value =
  /*item*/
  ctx[13].status + "";
  var t8;
  var t9;
  var td5;
  var a0;
  var i0;
  var a0_href_value;
  var inertia_action;
  var t10;
  var a1;
  var a1_href_value;
  var t11;
  var mounted;
  var dispose;

  function click_handler() {
    return (
      /*click_handler*/
      ctx[12](
      /*item*/
      ctx[13])
    );
  }

  return {
    c: function c() {
      tr = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("tr");
      td0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("td");
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t0_value);
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      td1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("td");
      t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t2_value);
      t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      td2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("td");
      t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t4_value);
      t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      td3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("td");
      t6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t6_value);
      t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      td4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("td");
      t8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t8_value);
      t9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      td5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("td");
      a0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      i0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("i");
      t10 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("\n                              \n                            ");
      a1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      a1.innerHTML = "<i class=\"fa fa-trash text-red\"></i>";
      t11 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(i0, "class", "fa fa-edit text-green");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a0, "href", a0_href_value = resource +
      /*item*/
      ctx[13].id + '/edit');
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a1, "href", a1_href_value = null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(tr, "class", "odd");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, tr, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, td0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td0, t0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, td1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td1, t2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, t3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, td2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td2, t4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, t5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, td3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td3, t6);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, t7);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, td4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td4, t8);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, t9);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, td5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td5, a0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a0, i0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td5, t10);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td5, a1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, t11);

      if (!mounted) {
        dispose = [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(inertia_action = _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_5__.inertia.call(null, a0)), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(a1, "click", (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.prevent_default)(click_handler))];
        mounted = true;
      }
    },
    p: function p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty &
      /*list*/
      4 && t0_value !== (t0_value =
      /*item*/
      ctx[13].title + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t0, t0_value);
      if (dirty &
      /*list*/
      4 && t2_value !== (t2_value =
      /*item*/
      ctx[13].primary_commission + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t2, t2_value);
      if (dirty &
      /*list*/
      4 && t4_value !== (t4_value =
      /*item*/
      ctx[13].secondary_commission + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t4, t4_value);
      if (dirty &
      /*list*/
      4 && t6_value !== (t6_value =
      /*item*/
      ctx[13].no_of_months + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t6, t6_value);
      if (dirty &
      /*list*/
      4 && t8_value !== (t8_value =
      /*item*/
      ctx[13].status + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t8, t8_value);

      if (dirty &
      /*list*/
      4 && a0_href_value !== (a0_href_value = resource +
      /*item*/
      ctx[13].id + '/edit')) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a0, "href", a0_href_value);
      }
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(tr);
      mounted = false;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
    }
  };
} // (85:0) 


function create_content_slot(ctx) {
  var div2;
  var div0;
  var select;
  var option;
  var t1;
  var div1;
  var table;
  var thead;
  var t13;
  var tbody;
  var mounted;
  var dispose;
  var each_value_1 =
  /*statuses*/
  ctx[1];
  var each_blocks_1 = [];

  for (var i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }

  var each_value =
  /*list*/
  ctx[2];
  var each_blocks = [];

  for (var _i = 0; _i < each_value.length; _i += 1) {
    each_blocks[_i] = create_each_block(get_each_context(ctx, each_value, _i));
  }

  return {
    c: function c() {
      div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      select = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("select");
      option = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      option.textContent = "All Statuses";

      for (var _i2 = 0; _i2 < each_blocks_1.length; _i2 += 1) {
        each_blocks_1[_i2].c();
      }

      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      table = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("table");
      thead = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("thead");
      thead.innerHTML = "<tr role=\"row\"><th>Title</th> \n                    <th>Primary Commission</th> \n                    <th>Secondary Commission</th> \n                    <th>No Of Months</th> \n                    <th>Status</th> \n                    <th>Actions</th></tr>";
      t13 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      tbody = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("tbody");

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].c();
      }

      option.__value = "";
      option.value = option.__value;
      if (
      /*$filter*/
      ctx[5].status === void 0) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_render_callback)(function () {
        return (
          /*select_change_handler*/
          ctx[11].call(select)
        );
      });
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(table, "id", "example1");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(table, "class", "table table-data table-striped table-hover dataTable no-footer");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(table, "role", "grid");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(table, "aria-describedby", "example1_info");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "col-sm-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "slot", "content");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div2, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, select);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(select, option);

      for (var _i4 = 0; _i4 < each_blocks_1.length; _i4 += 1) {
        each_blocks_1[_i4].m(select, null);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select,
      /*$filter*/
      ctx[5].status);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, table);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(table, thead);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(table, t13);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(table, tbody);

      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
        each_blocks[_i5].m(tbody, null);
      }

      if (!mounted) {
        dispose = [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(select, "change",
        /*select_change_handler*/
        ctx[11]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(select, "change",
        /*doFilter*/
        ctx[9])];
        mounted = true;
      }
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*statuses*/
      2) {
        each_value_1 =
        /*statuses*/
        ctx[1];

        var _i6;

        for (_i6 = 0; _i6 < each_value_1.length; _i6 += 1) {
          var child_ctx = get_each_context_1(ctx, each_value_1, _i6);

          if (each_blocks_1[_i6]) {
            each_blocks_1[_i6].p(child_ctx, dirty);
          } else {
            each_blocks_1[_i6] = create_each_block_1(child_ctx);

            each_blocks_1[_i6].c();

            each_blocks_1[_i6].m(select, null);
          }
        }

        for (; _i6 < each_blocks_1.length; _i6 += 1) {
          each_blocks_1[_i6].d(1);
        }

        each_blocks_1.length = each_value_1.length;
      }

      if (dirty &
      /*$filter, statuses*/
      34) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select,
        /*$filter*/
        ctx[5].status);
      }

      if (dirty &
      /*removeRow, list, resource*/
      260) {
        each_value =
        /*list*/
        ctx[2];

        var _i7;

        for (_i7 = 0; _i7 < each_value.length; _i7 += 1) {
          var _child_ctx = get_each_context(ctx, each_value, _i7);

          if (each_blocks[_i7]) {
            each_blocks[_i7].p(_child_ctx, dirty);
          } else {
            each_blocks[_i7] = create_each_block(_child_ctx);

            each_blocks[_i7].c();

            each_blocks[_i7].m(tbody, null);
          }
        }

        for (; _i7 < each_blocks.length; _i7 += 1) {
          each_blocks[_i7].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks_1, detaching);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
      mounted = false;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
    }
  };
}

function create_fragment(ctx) {
  var messagenotification;
  var t;
  var page_1;
  var current;
  messagenotification = new _Components_MessageNotification_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({
    props: {
      onResetMessage:
      /*onResetMessage*/
      ctx[10],
      message:
      /*message*/
      ctx[0],
      hasErrors:
      /*$form*/
      ctx[4].hasErrors,
      errors:
      /*$form*/
      ctx[4].errors,
      error:
      /*error*/
      ctx[3]
    }
  });
  page_1 = new _components_Page_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
    props: {
      $$slots: {
        content: [create_content_slot],
        createButton: [create_createButton_slot],
        title: [create_title_slot]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  return {
    c: function c() {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(messagenotification.$$.fragment);
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(page_1.$$.fragment);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(messagenotification, target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(page_1, target, anchor);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var messagenotification_changes = {};
      if (dirty &
      /*message*/
      1) messagenotification_changes.message =
      /*message*/
      ctx[0];
      if (dirty &
      /*$form*/
      16) messagenotification_changes.hasErrors =
      /*$form*/
      ctx[4].hasErrors;
      if (dirty &
      /*$form*/
      16) messagenotification_changes.errors =
      /*$form*/
      ctx[4].errors;
      if (dirty &
      /*error*/
      8) messagenotification_changes.error =
      /*error*/
      ctx[3];
      messagenotification.$set(messagenotification_changes);
      var page_1_changes = {};

      if (dirty &
      /*$$scope, list, $filter, statuses*/
      524326) {
        page_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      page_1.$set(page_1_changes);
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(messagenotification.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(page_1.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(messagenotification.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(page_1.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(messagenotification, detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(page_1, detaching);
    }
  };
}

var layout = _Dashboard_Layout_svelte__WEBPACK_IMPORTED_MODULE_6__["default"];
var mode = "create";
var resource = '/olade-contract-type/';
var closeModal = null;

function instance($$self, $$props, $$invalidate) {
  var $form;
  var $filter;
  var statuses = $$props.statuses;
  var list = $$props.list;
  var message = $$props.message;
  var error = $$props.error; // 'title' => 'required',
  //         'primary_commission' => 'required',
  //         'secondary_commission' => 'required',
  //         'no_of_months' => 'required',
  //         'status' => 'required',
  //         'body' => 'required',
  //         'instructions' => 'required'

  var form = (0,_inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_5__.useForm)({
    title: "",
    primary_commission: "",
    secondary_commission: "",
    no_of_months: 6,
    status: "active",
    body: "",
    instructions: ""
  });
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, form, function (value) {
    return $$invalidate(4, $form = value);
  });
  var filter = (0,_inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_5__.useForm)({
    status: ''
  });
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, filter, function (value) {
    return $$invalidate(5, $filter = value);
  });

  function removeRow(data) {
    if (confirm("Do you want to confirm this action?")) {
      $form["delete"](resource + data.id);
    }
  }

  function doFilter() {
    $filter.get(resource);
  }

  function onResetMessage() {
    $form.clearErrors();
    $$invalidate(0, message = '');
  }

  function select_change_handler() {
    $filter.status = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_value)(this);
    filter.set($filter);
    $$invalidate(1, statuses);
  }

  var click_handler = function click_handler(item) {
    return removeRow(item);
  };

  $$self.$$set = function ($$props) {
    if ('statuses' in $$props) $$invalidate(1, statuses = $$props.statuses);
    if ('list' in $$props) $$invalidate(2, list = $$props.list);
    if ('message' in $$props) $$invalidate(0, message = $$props.message);
    if ('error' in $$props) $$invalidate(3, error = $$props.error);
  };

  return [message, statuses, list, error, $form, $filter, form, filter, removeRow, doFilter, onResetMessage, select_change_handler, click_handler];
}

var OladeContractType = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(OladeContractType, _SvelteComponent);

  var _super = _createSuper(OladeContractType);

  function OladeContractType(options) {
    var _this;

    _classCallCheck(this, OladeContractType);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
      statuses: 1,
      list: 2,
      message: 0,
      error: 3
    });
    return _this;
  }

  return _createClass(OladeContractType);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OladeContractType);


/***/ }),

/***/ "./resources/js/Pages/Settings/OladeContractTypeCreate.svelte":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Settings/OladeContractTypeCreate.svelte ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "layout": () => (/* binding */ layout)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _Components_MessageNotification_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/MessageNotification.svelte */ "./resources/js/Pages/Components/MessageNotification.svelte");
/* harmony import */ var _components_Modal_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Modal.svelte */ "./resources/js/components/Modal.svelte");
/* harmony import */ var _components_Page_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Page.svelte */ "./resources/js/components/Page.svelte");
/* harmony import */ var _components_Pagination_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Pagination.svelte */ "./resources/js/components/Pagination.svelte");
/* harmony import */ var _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inertiajs/inertia-svelte */ "./node_modules/@inertiajs/inertia-svelte/src/index.js");
/* harmony import */ var _Dashboard_Layout_svelte__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Dashboard/Layout.svelte */ "./resources/js/Pages/Dashboard/Layout.svelte");
/* harmony import */ var _components_Editor_svelte__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Editor.svelte */ "./resources/js/components/Editor.svelte");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* resources/js/Pages/Settings/OladeContractTypeCreate.svelte generated by Svelte v3.47.0 */









function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[13] = list[i];
  return child_ctx;
} // (69:2) 


function create_title_slot(ctx) {
  var span;
  return {
    c: function c() {
      span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
      span.textContent = "Add Olade Contract Type";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span, "slot", "title");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, span, anchor);
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(span);
    }
  };
} // (71:2) 


function create_createButton_slot(ctx) {
  var a;
  var i;
  var t;
  var inertia_action;
  var mounted;
  var dispose;
  return {
    c: function c() {
      a = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      i = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("i");
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(" Back");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(i, "class", "fa fa-plus");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "href", resource);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "slot", "createButton");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "class", "btn btn-primary btn-sm");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, a, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a, i);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a, t);

      if (!mounted) {
        dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(inertia_action = _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_5__.inertia.call(null, a));
        mounted = true;
      }
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(a);
      mounted = false;
      dispose();
    }
  };
} // (156:24) {#each statuses as status}


function create_each_block(ctx) {
  var option;
  var t_value =
  /*status*/
  ctx[13] + "";
  var t;
  var option_value_value;
  return {
    c: function c() {
      option = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
      option.__value = option_value_value =
      /*status*/
      ctx[13];
      option.value = option.__value;
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, option, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(option, t);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*statuses*/
      1 && t_value !== (t_value =
      /*status*/
      ctx[13] + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, t_value);

      if (dirty &
      /*statuses*/
      1 && option_value_value !== (option_value_value =
      /*status*/
      ctx[13])) {
        option.__value = option_value_value;
        option.value = option.__value;
      }
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(option);
    }
  };
} // (81:0) 


function create_content_slot(ctx) {
  var div15;
  var form_1;
  var div14;
  var div10;
  var div1;
  var div0;
  var label0;
  var t1;
  var input0;
  var t2;
  var div3;
  var div2;
  var label1;
  var t4;
  var input1;
  var t5;
  var div5;
  var div4;
  var label2;
  var t7;
  var input2;
  var t8;
  var div7;
  var div6;
  var label3;
  var t10;
  var input3;
  var t11;
  var div8;
  var t44;
  var div9;
  var label4;
  var t46;
  var select;
  var option;
  var t48;
  var div13;
  var div11;
  var label5;
  var t50;
  var editor;
  var t51;
  var div12;
  var current;
  var mounted;
  var dispose;
  var each_value =
  /*statuses*/
  ctx[0];
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  editor = new _components_Editor_svelte__WEBPACK_IMPORTED_MODULE_7__["default"]({
    props: {
      data: ""
    }
  });
  editor.$on("textChange",
  /*textChange_handler*/
  ctx[10]);
  return {
    c: function c() {
      div15 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      form_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("form");
      div14 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div10 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      label0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
      label0.textContent = "Title*";
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      input0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
      t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      label1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
      label1.textContent = "Pri. Com. % *";
      t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      input1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
      t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      label2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
      label2.textContent = "Sec. Com. % *";
      t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      input2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
      t8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      label3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
      label3.textContent = "Months*";
      t10 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      input3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
      t11 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div8.innerHTML = "<small><b>[mDay]</b> would be replaced with Day e.g Thrusdays <br/> \n                       <b>[mContractDate]</b> would be replaced with Date - e.g 12th, July 2020  <br/> \n                       <b>[mSignerName]</b> would be replaced with Signer Full Name - e.g John Doe Smith  <br/> \n                       <b>[mSignerAddress]</b> would be replaced with Signer Address  <br/> \n                       <b>[mJobTitle]</b> would be replaced with Job Title - e.g Business Analyst  <br/> \n                       <b>[mServiceFee%]</b> would be replaced with ServiceFee Percentage - e.g 20% <br/> \n                       <b>[mSecondaryServiceFee%]</b> would be replaced with ServiceFee Percentage - e.g 20% <br/> \n                       <b>[mContractSpan]</b> would be replaced with Contract Span - e.g 12 months <br/> \n                       <b>[mSecondaryContractSpan]</b> would be replaced with Contract Span - e.g 24 months <br/> \n                       <b>[mContractorCompany]</b> would be replaced with Contract Company <br/> \n                       <b>[mContractorCompanyAddress]</b> would be replaced with Contract Company Address <br/></small>";
      t44 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      label4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
      label4.textContent = "Status*";
      t46 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      select = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("select");
      option = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      option.textContent = "Select Status";

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t48 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div13 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div11 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      label5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
      label5.textContent = "Body";
      t50 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(editor.$$.fragment);
      t51 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div12 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div12.innerHTML = "<button style=\"float: right;\" class=\"btn btn-sm btn-primary\">Create Contract Type</button>";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label0, "for", "title");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input0, "type", "text");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input0, "id", "title");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input0, "class", "form-control");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "form-group");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "col-md-6");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label1, "for", "title");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "type", "text");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "id", "title");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "class", "form-control");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "form-group");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "col-md-2");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label2, "for", "title");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input2, "type", "text");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input2, "id", "title");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input2, "class", "form-control");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "class", "form-group");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div5, "class", "col-md-2");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label3, "for", "title");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input3, "type", "text");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input3, "id", "title");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input3, "class", "form-control");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div6, "class", "form-group");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div7, "class", "col-md-2");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div8, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label4, "for", "title");
      option.__value = "";
      option.value = option.__value;
      if (
      /*$form*/
      ctx[1].status === void 0) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_render_callback)(function () {
        return (
          /*select_change_handler*/
          ctx[9].call(select)
        );
      });
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div9, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div9, "text-align", "right");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div10, "class", "row");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div11, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div12, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div13, "class", "row");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div14, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(form_1, "method", "post");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div15, "slot", "content");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div15, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div15, form_1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form_1, div14);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div14, div10);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, div1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, div0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, label0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, input0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input0,
      /*$form*/
      ctx[1].title);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, t2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, div3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, label1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, input1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input1,
      /*$form*/
      ctx[1].primary_commission);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, t5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, div5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, div4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, label2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, t7);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, input2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input2,
      /*$form*/
      ctx[1].secondary_commission);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, t8);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, div7);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, div6);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, label3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, t10);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, input3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input3,
      /*$form*/
      ctx[1].no_of_months);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, t11);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, div8);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, t44);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, div9);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div9, label4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div9, t46);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div9, select);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(select, option);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].m(select, null);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select,
      /*$form*/
      ctx[1].status);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div14, t48);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div14, div13);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div13, div11);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div11, label5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div11, t50);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(editor, div11, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div13, t51);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div13, div12);
      current = true;

      if (!mounted) {
        dispose = [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input0, "input",
        /*input0_input_handler*/
        ctx[5]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input1, "input",
        /*input1_input_handler*/
        ctx[6]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input2, "input",
        /*input2_input_handler*/
        ctx[7]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input3, "input",
        /*input3_input_handler*/
        ctx[8]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(select, "change",
        /*select_change_handler*/
        ctx[9]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(form_1, "submit", (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.prevent_default)(
        /*createContractType*/
        ctx[3]))];
        mounted = true;
      }
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*$form, statuses*/
      3 && input0.value !==
      /*$form*/
      ctx[1].title) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input0,
        /*$form*/
        ctx[1].title);
      }

      if (dirty &
      /*$form, statuses*/
      3 && input1.value !==
      /*$form*/
      ctx[1].primary_commission) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input1,
        /*$form*/
        ctx[1].primary_commission);
      }

      if (dirty &
      /*$form, statuses*/
      3 && input2.value !==
      /*$form*/
      ctx[1].secondary_commission) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input2,
        /*$form*/
        ctx[1].secondary_commission);
      }

      if (dirty &
      /*$form, statuses*/
      3 && input3.value !==
      /*$form*/
      ctx[1].no_of_months) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input3,
        /*$form*/
        ctx[1].no_of_months);
      }

      if (dirty &
      /*statuses*/
      1) {
        each_value =
        /*statuses*/
        ctx[0];

        var _i3;

        for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i3);

          if (each_blocks[_i3]) {
            each_blocks[_i3].p(child_ctx, dirty);
          } else {
            each_blocks[_i3] = create_each_block(child_ctx);

            each_blocks[_i3].c();

            each_blocks[_i3].m(select, null);
          }
        }

        for (; _i3 < each_blocks.length; _i3 += 1) {
          each_blocks[_i3].d(1);
        }

        each_blocks.length = each_value.length;
      }

      if (dirty &
      /*$form, statuses*/
      3) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select,
        /*$form*/
        ctx[1].status);
      }
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(editor.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(editor.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div15);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(editor);
      mounted = false;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
    }
  };
}

function create_fragment(ctx) {
  var messagenotification;
  var t;
  var page_1;
  var current;
  messagenotification = new _Components_MessageNotification_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({
    props: {
      onResetMessage:
      /*onResetMessage*/
      ctx[4],
      message: message,
      hasErrors:
      /*$form*/
      ctx[1].hasErrors,
      errors:
      /*$form*/
      ctx[1].errors,
      error: error
    }
  });
  page_1 = new _components_Page_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
    props: {
      $$slots: {
        content: [create_content_slot],
        createButton: [create_createButton_slot],
        title: [create_title_slot]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  return {
    c: function c() {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(messagenotification.$$.fragment);
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(page_1.$$.fragment);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(messagenotification, target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(page_1, target, anchor);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var messagenotification_changes = {};
      if (dirty &
      /*$form*/
      2) messagenotification_changes.hasErrors =
      /*$form*/
      ctx[1].hasErrors;
      if (dirty &
      /*$form*/
      2) messagenotification_changes.errors =
      /*$form*/
      ctx[1].errors;
      messagenotification.$set(messagenotification_changes);
      var page_1_changes = {};

      if (dirty &
      /*$$scope, $form, statuses*/
      65539) {
        page_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      page_1.$set(page_1_changes);
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(messagenotification.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(page_1.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(messagenotification.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(page_1.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(messagenotification, detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(page_1, detaching);
    }
  };
}

var layout = _Dashboard_Layout_svelte__WEBPACK_IMPORTED_MODULE_6__["default"];
var mode = "create";
var message = '';
var error = false;
var resource = '/olade-contract-type/';
var closeModal = null;

function instance($$self, $$props, $$invalidate) {
  var $form;
  var statuses = $$props.statuses;
  var form = (0,_inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_5__.useForm)({
    title: "",
    primary_commission: "",
    secondary_commission: "",
    no_of_months: 6,
    status: "active",
    body: "",
    instructions: ""
  });
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, form, function (value) {
    return $$invalidate(1, $form = value);
  });

  function createContractType() {
    $form.post(resource);
  }

  var filter = (0,_inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_5__.useForm)({
    knowledge_area_type: ''
  });

  function callStore() {
    $form.post(resource);
  }

  function onResetMessage() {
    $form.clearErrors();
  } // message = '';


  function input0_input_handler() {
    $form.title = this.value;
    form.set($form);
    $$invalidate(0, statuses);
  }

  function input1_input_handler() {
    $form.primary_commission = this.value;
    form.set($form);
    $$invalidate(0, statuses);
  }

  function input2_input_handler() {
    $form.secondary_commission = this.value;
    form.set($form);
    $$invalidate(0, statuses);
  }

  function input3_input_handler() {
    $form.no_of_months = this.value;
    form.set($form);
    $$invalidate(0, statuses);
  }

  function select_change_handler() {
    $form.status = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_value)(this);
    form.set($form);
    $$invalidate(0, statuses);
  }

  var textChange_handler = function textChange_handler(data) {
    return (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_store_value)(form, $form.body = data.detail, $form);
  };

  $$self.$$set = function ($$props) {
    if ('statuses' in $$props) $$invalidate(0, statuses = $$props.statuses);
  };

  return [statuses, $form, form, createContractType, onResetMessage, input0_input_handler, input1_input_handler, input2_input_handler, input3_input_handler, select_change_handler, textChange_handler];
}

var OladeContractTypeCreate = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(OladeContractTypeCreate, _SvelteComponent);

  var _super = _createSuper(OladeContractTypeCreate);

  function OladeContractTypeCreate(options) {
    var _this;

    _classCallCheck(this, OladeContractTypeCreate);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
      statuses: 0
    });
    return _this;
  }

  return _createClass(OladeContractTypeCreate);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OladeContractTypeCreate);


/***/ }),

/***/ "./resources/js/Pages/Settings/OladeContractTypeEdit.svelte":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/Settings/OladeContractTypeEdit.svelte ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "layout": () => (/* binding */ layout)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _Components_MessageNotification_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/MessageNotification.svelte */ "./resources/js/Pages/Components/MessageNotification.svelte");
/* harmony import */ var _components_Modal_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Modal.svelte */ "./resources/js/components/Modal.svelte");
/* harmony import */ var _components_Page_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Page.svelte */ "./resources/js/components/Page.svelte");
/* harmony import */ var _components_Pagination_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Pagination.svelte */ "./resources/js/components/Pagination.svelte");
/* harmony import */ var _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inertiajs/inertia-svelte */ "./node_modules/@inertiajs/inertia-svelte/src/index.js");
/* harmony import */ var _Dashboard_Layout_svelte__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Dashboard/Layout.svelte */ "./resources/js/Pages/Dashboard/Layout.svelte");
/* harmony import */ var _components_Editor_svelte__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Editor.svelte */ "./resources/js/components/Editor.svelte");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* resources/js/Pages/Settings/OladeContractTypeEdit.svelte generated by Svelte v3.47.0 */









function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[14] = list[i];
  return child_ctx;
} // (68:2) 


function create_title_slot(ctx) {
  var span;
  return {
    c: function c() {
      span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
      span.textContent = "Edit Olade Contract Type";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span, "slot", "title");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, span, anchor);
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(span);
    }
  };
} // (70:2) 


function create_createButton_slot(ctx) {
  var a;
  var i;
  var t;
  var inertia_action;
  var mounted;
  var dispose;
  return {
    c: function c() {
      a = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      i = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("i");
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(" Back");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(i, "class", "fa fa-plus");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "href", resource);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "slot", "createButton");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "class", "btn btn-primary btn-sm");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, a, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a, i);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a, t);

      if (!mounted) {
        dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(inertia_action = _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_5__.inertia.call(null, a));
        mounted = true;
      }
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(a);
      mounted = false;
      dispose();
    }
  };
} // (154:24) {#each statuses as status}


function create_each_block(ctx) {
  var option;
  var t_value =
  /*status*/
  ctx[14] + "";
  var t;
  var option_value_value;
  return {
    c: function c() {
      option = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
      option.__value = option_value_value =
      /*status*/
      ctx[14];
      option.value = option.__value;
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, option, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(option, t);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*statuses*/
      1 && t_value !== (t_value =
      /*status*/
      ctx[14] + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, t_value);

      if (dirty &
      /*statuses*/
      1 && option_value_value !== (option_value_value =
      /*status*/
      ctx[14])) {
        option.__value = option_value_value;
        option.value = option.__value;
      }
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(option);
    }
  };
} // (80:0) 


function create_content_slot(ctx) {
  var div15;
  var form_1;
  var div14;
  var div10;
  var div1;
  var div0;
  var label0;
  var t1;
  var input0;
  var t2;
  var div3;
  var div2;
  var label1;
  var t4;
  var input1;
  var t5;
  var div5;
  var div4;
  var label2;
  var t7;
  var input2;
  var t8;
  var div7;
  var div6;
  var label3;
  var t10;
  var input3;
  var t11;
  var div8;
  var t44;
  var div9;
  var label4;
  var t46;
  var select;
  var option;
  var t48;
  var div13;
  var div11;
  var label5;
  var t50;
  var editor;
  var t51;
  var div12;
  var current;
  var mounted;
  var dispose;
  var each_value =
  /*statuses*/
  ctx[0];
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  editor = new _components_Editor_svelte__WEBPACK_IMPORTED_MODULE_7__["default"]({
    props: {
      data:
      /*data*/
      ctx[1].body
    }
  });
  editor.$on("textChange",
  /*textChange_handler*/
  ctx[11]);
  return {
    c: function c() {
      div15 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      form_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("form");
      div14 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div10 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      label0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
      label0.textContent = "Title*";
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      input0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
      t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      label1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
      label1.textContent = "Pri. Com. % *";
      t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      input1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
      t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      label2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
      label2.textContent = "Sec. Com. % *";
      t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      input2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
      t8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      label3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
      label3.textContent = "Months*";
      t10 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      input3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
      t11 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div8.innerHTML = "<small><b>[mDay]</b> would be replaced with Day e.g Thrusdays <br/> \n                       <b>[mContractDate]</b> would be replaced with Date - e.g 12th, July 2020  <br/> \n                       <b>[mSignerName]</b> would be replaced with Signer Full Name - e.g John Doe Smith  <br/> \n                       <b>[mSignerAddress]</b> would be replaced with Signer Address  <br/> \n                       <b>[mJobTitle]</b> would be replaced with Job Title - e.g Business Analyst  <br/> \n                       <b>[mServiceFee%]</b> would be replaced with ServiceFee Percentage - e.g 20% <br/> \n                       <b>[mSecondaryServiceFee%]</b> would be replaced with ServiceFee Percentage - e.g 20% <br/> \n                       <b>[mContractSpan]</b> would be replaced with Contract Span - e.g 12 months <br/> \n                       <b>[mSecondaryContractSpan]</b> would be replaced with Contract Span - e.g 24 months <br/> \n                       <b>[mContractorCompany]</b> would be replaced with Contract Company <br/> \n                       <b>[mContractorCompanyAddress]</b> would be replaced with Contract Company Address <br/></small>";
      t44 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      label4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
      label4.textContent = "Status*";
      t46 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      select = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("select");
      option = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      option.textContent = "Select Status";

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t48 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div13 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div11 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      label5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
      label5.textContent = "Body";
      t50 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(editor.$$.fragment);
      t51 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div12 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div12.innerHTML = "<button style=\"float: right;\" class=\"btn btn-sm btn-primary\">Update Contract Type</button>";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label0, "for", "title");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input0, "type", "text");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input0, "id", "title");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input0, "class", "form-control");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "form-group");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "col-md-6");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label1, "for", "title");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "type", "text");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "id", "title");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input1, "class", "form-control");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "form-group");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "col-md-2");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label2, "for", "title");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input2, "type", "text");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input2, "id", "title");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input2, "class", "form-control");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "class", "form-group");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div5, "class", "col-md-2");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label3, "for", "title");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input3, "type", "text");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input3, "id", "title");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input3, "class", "form-control");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div6, "class", "form-group");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div7, "class", "col-md-2");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div8, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label4, "for", "title");
      option.__value = "";
      option.value = option.__value;
      if (
      /*$form*/
      ctx[2].status === void 0) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_render_callback)(function () {
        return (
          /*select_change_handler*/
          ctx[10].call(select)
        );
      });
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div9, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div9, "text-align", "right");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div10, "class", "row");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div11, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div12, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div13, "class", "row");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div14, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(form_1, "method", "post");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div15, "slot", "content");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div15, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div15, form_1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form_1, div14);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div14, div10);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, div1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, div0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, label0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, input0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input0,
      /*$form*/
      ctx[2].title);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, t2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, div3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, label1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, input1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input1,
      /*$form*/
      ctx[2].primary_commission);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, t5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, div5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, div4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, label2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, t7);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, input2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input2,
      /*$form*/
      ctx[2].secondary_commission);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, t8);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, div7);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div7, div6);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, label3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, t10);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, input3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input3,
      /*$form*/
      ctx[2].no_of_months);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, t11);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, div8);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, t44);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, div9);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div9, label4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div9, t46);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div9, select);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(select, option);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].m(select, null);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select,
      /*$form*/
      ctx[2].status);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div14, t48);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div14, div13);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div13, div11);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div11, label5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div11, t50);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(editor, div11, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div13, t51);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div13, div12);
      current = true;

      if (!mounted) {
        dispose = [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input0, "input",
        /*input0_input_handler*/
        ctx[6]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input1, "input",
        /*input1_input_handler*/
        ctx[7]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input2, "input",
        /*input2_input_handler*/
        ctx[8]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input3, "input",
        /*input3_input_handler*/
        ctx[9]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(select, "change",
        /*select_change_handler*/
        ctx[10]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(form_1, "submit", (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.prevent_default)(
        /*createContractType*/
        ctx[4]))];
        mounted = true;
      }
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*$form, statuses*/
      5 && input0.value !==
      /*$form*/
      ctx[2].title) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input0,
        /*$form*/
        ctx[2].title);
      }

      if (dirty &
      /*$form, statuses*/
      5 && input1.value !==
      /*$form*/
      ctx[2].primary_commission) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input1,
        /*$form*/
        ctx[2].primary_commission);
      }

      if (dirty &
      /*$form, statuses*/
      5 && input2.value !==
      /*$form*/
      ctx[2].secondary_commission) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input2,
        /*$form*/
        ctx[2].secondary_commission);
      }

      if (dirty &
      /*$form, statuses*/
      5 && input3.value !==
      /*$form*/
      ctx[2].no_of_months) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input3,
        /*$form*/
        ctx[2].no_of_months);
      }

      if (dirty &
      /*statuses*/
      1) {
        each_value =
        /*statuses*/
        ctx[0];

        var _i3;

        for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i3);

          if (each_blocks[_i3]) {
            each_blocks[_i3].p(child_ctx, dirty);
          } else {
            each_blocks[_i3] = create_each_block(child_ctx);

            each_blocks[_i3].c();

            each_blocks[_i3].m(select, null);
          }
        }

        for (; _i3 < each_blocks.length; _i3 += 1) {
          each_blocks[_i3].d(1);
        }

        each_blocks.length = each_value.length;
      }

      if (dirty &
      /*$form, statuses*/
      5) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select,
        /*$form*/
        ctx[2].status);
      }

      var editor_changes = {};
      if (dirty &
      /*data*/
      2) editor_changes.data =
      /*data*/
      ctx[1].body;
      editor.$set(editor_changes);
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(editor.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(editor.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div15);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(editor);
      mounted = false;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
    }
  };
}

function create_fragment(ctx) {
  var messagenotification;
  var t;
  var page_1;
  var current;
  messagenotification = new _Components_MessageNotification_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({
    props: {
      onResetMessage:
      /*onResetMessage*/
      ctx[5],
      message: message,
      hasErrors:
      /*$form*/
      ctx[2].hasErrors,
      errors:
      /*$form*/
      ctx[2].errors,
      error: error
    }
  });
  page_1 = new _components_Page_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
    props: {
      $$slots: {
        content: [create_content_slot],
        createButton: [create_createButton_slot],
        title: [create_title_slot]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  return {
    c: function c() {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(messagenotification.$$.fragment);
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(page_1.$$.fragment);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(messagenotification, target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(page_1, target, anchor);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var messagenotification_changes = {};
      if (dirty &
      /*$form*/
      4) messagenotification_changes.hasErrors =
      /*$form*/
      ctx[2].hasErrors;
      if (dirty &
      /*$form*/
      4) messagenotification_changes.errors =
      /*$form*/
      ctx[2].errors;
      messagenotification.$set(messagenotification_changes);
      var page_1_changes = {};

      if (dirty &
      /*$$scope, data, $form, statuses*/
      131079) {
        page_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      page_1.$set(page_1_changes);
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(messagenotification.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(page_1.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(messagenotification.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(page_1.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(messagenotification, detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(page_1, detaching);
    }
  };
}

var layout = _Dashboard_Layout_svelte__WEBPACK_IMPORTED_MODULE_6__["default"];
var mode = "create";
var message = '';
var error = false;
var resource = '/olade-contract-type/';
var closeModal = null;

function instance($$self, $$props, $$invalidate) {
  var $form;
  var statuses = $$props.statuses;
  var data = $$props.data;
  var form = (0,_inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_5__.useForm)({
    title: data.title,
    primary_commission: data.primary_commission,
    secondary_commission: data.secondary_commission,
    no_of_months: data.no_of_months,
    status: data.status,
    body: data.body
  });
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, form, function (value) {
    return $$invalidate(2, $form = value);
  });

  function createContractType() {
    $form.put(resource + data.id);
  }

  var filter = (0,_inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_5__.useForm)({
    knowledge_area_type: ''
  });

  function callStore() {
    $form.post(resource);
  }

  function onResetMessage() {
    $form.clearErrors();
  } // message = '';


  function input0_input_handler() {
    $form.title = this.value;
    form.set($form);
    $$invalidate(0, statuses);
  }

  function input1_input_handler() {
    $form.primary_commission = this.value;
    form.set($form);
    $$invalidate(0, statuses);
  }

  function input2_input_handler() {
    $form.secondary_commission = this.value;
    form.set($form);
    $$invalidate(0, statuses);
  }

  function input3_input_handler() {
    $form.no_of_months = this.value;
    form.set($form);
    $$invalidate(0, statuses);
  }

  function select_change_handler() {
    $form.status = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_value)(this);
    form.set($form);
    $$invalidate(0, statuses);
  }

  var textChange_handler = function textChange_handler(data) {
    return (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_store_value)(form, $form.body = data.detail, $form);
  };

  $$self.$$set = function ($$props) {
    if ('statuses' in $$props) $$invalidate(0, statuses = $$props.statuses);
    if ('data' in $$props) $$invalidate(1, data = $$props.data);
  };

  return [statuses, data, $form, form, createContractType, onResetMessage, input0_input_handler, input1_input_handler, input2_input_handler, input3_input_handler, select_change_handler, textChange_handler];
}

var OladeContractTypeEdit = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(OladeContractTypeEdit, _SvelteComponent);

  var _super = _createSuper(OladeContractTypeEdit);

  function OladeContractTypeEdit(options) {
    var _this;

    _classCallCheck(this, OladeContractTypeEdit);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
      statuses: 0,
      data: 1
    });
    return _this;
  }

  return _createClass(OladeContractTypeEdit);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OladeContractTypeEdit);


/***/ }),

/***/ "./resources/js/Pages/Settings/ProgramType.svelte":
/*!********************************************************!*\
  !*** ./resources/js/Pages/Settings/ProgramType.svelte ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "layout": () => (/* binding */ layout)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _Components_MessageNotification_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/MessageNotification.svelte */ "./resources/js/Pages/Components/MessageNotification.svelte");
/* harmony import */ var _components_Modal_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Modal.svelte */ "./resources/js/components/Modal.svelte");
/* harmony import */ var _components_Page_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Page.svelte */ "./resources/js/components/Page.svelte");
/* harmony import */ var _components_Pagination_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Pagination.svelte */ "./resources/js/components/Pagination.svelte");
/* harmony import */ var _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inertiajs/inertia-svelte */ "./node_modules/@inertiajs/inertia-svelte/src/index.js");
/* harmony import */ var _Dashboard_Layout_svelte__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Dashboard/Layout.svelte */ "./resources/js/Pages/Dashboard/Layout.svelte");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* resources/js/Pages/Settings/ProgramType.svelte generated by Svelte v3.47.0 */








function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[22] = list[i];
  return child_ctx;
} // (145:8) 


function create_title_slot_1(ctx) {
  var span;
  return {
    c: function c() {
      span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
      span.textContent = "Program Type";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span, "slot", "title");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, span, anchor);
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(span);
    }
  };
} // (147:8) 


function create_content_slot_1(ctx) {
  var div3;
  var div0;
  var label0;
  var t2;
  var input;
  var t3;
  var div1;
  var label1;
  var t6;
  var textarea;
  var t7;
  var div2;
  var label2;
  var t10;
  var select;
  var option0;
  var option1;
  var option2;
  var mounted;
  var dispose;
  return {
    c: function c() {
      div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      label0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
      label0.innerHTML = "Program Title <b style=\"color:red\">*</b>";
      t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      input = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
      t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      label1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
      label1.innerHTML = "Program Description <b style=\"color:red\">*</b>";
      t6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      textarea = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("textarea");
      t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      label2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
      label2.innerHTML = "Status<b style=\"color:red\">*</b>";
      t10 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      select = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("select");
      option0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      option0.textContent = "Select";
      option1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      option1.textContent = "Active";
      option2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      option2.textContent = "Inactive";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label0, "class", "control-label");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "type", "text");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "class", "form-control");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "name", "proTitle");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "placeholder", "");
      input.required = "";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label1, "class", "control-label");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(textarea, "class", "form-control");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(textarea, "name", "proDescription");
      textarea.required = "";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label2, "class", "control-label");
      option0.__value = "";
      option0.value = option0.__value;
      option1.__value = "active";
      option1.value = option1.__value;
      option2.__value = "inactive";
      option2.value = option2.__value;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(select, "class", "form-control");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(select, "name", "proDescription");
      select.required = "";
      if (
      /*$form*/
      ctx[5].status === void 0) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_render_callback)(function () {
        return (
          /*select_change_handler*/
          ctx[20].call(select)
        );
      });
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "slot", "content");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div3, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, label0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, input);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input,
      /*$form*/
      ctx[5].title);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, t3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, label1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t6);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, textarea);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(textarea,
      /*$form*/
      ctx[5].description);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, t7);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, label2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t10);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, select);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(select, option0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(select, option1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(select, option2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select,
      /*$form*/
      ctx[5].status);

      if (!mounted) {
        dispose = [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input, "input",
        /*input_input_handler*/
        ctx[18]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(textarea, "input",
        /*textarea_input_handler*/
        ctx[19]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(select, "change",
        /*select_change_handler*/
        ctx[20])];
        mounted = true;
      }
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*$form*/
      32 && input.value !==
      /*$form*/
      ctx[5].title) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input,
        /*$form*/
        ctx[5].title);
      }

      if (dirty &
      /*$form*/
      32) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(textarea,
        /*$form*/
        ctx[5].description);
      }

      if (dirty &
      /*$form*/
      32) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select,
        /*$form*/
        ctx[5].status);
      }
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div3);
      mounted = false;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
    }
  };
} // (193:8) 


function create_storeButton_slot(ctx) {
  var button;
  var i;
  var t0;
  var t1_value = (
  /*mode*/
  ctx[3] == "create" ? "Add Program Type" : "Update Program Type") + "";
  var t1;
  return {
    c: function c() {
      button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
      i = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("i");
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("   ");
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t1_value);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(i, "class", "fa fa-save");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "type", "submit");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "class", "btn btn-primary");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "slot", "storeButton");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button, i);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button, t0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button, t1);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*mode*/
      8 && t1_value !== (t1_value = (
      /*mode*/
      ctx[3] == "create" ? "Add Program Type" : "Update Program Type") + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t1, t1_value);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button);
    }
  };
} // (81:0) <Page>


function create_default_slot(ctx) {
  var modal;
  var current;
  modal = new _components_Modal_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
    props: {
      id: "modal-progtype",
      $$slots: {
        storeButton: [create_storeButton_slot],
        content: [create_content_slot_1],
        title: [create_title_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  modal.$on("submit",
  /*callStore*/
  ctx[10]);
  modal.$on("setRef",
  /*setRef_handler*/
  ctx[21]);
  return {
    c: function c() {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(modal.$$.fragment);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(modal, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var modal_changes = {};

      if (dirty &
      /*$$scope, mode, $form*/
      33554472) {
        modal_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      modal.$set(modal_changes);
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(modal.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(modal.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(modal, detaching);
    }
  };
} // (82:4) 


function create_title_slot(ctx) {
  var span;
  return {
    c: function c() {
      span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
      span.textContent = "Program Type";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span, "slot", "title");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, span, anchor);
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(span);
    }
  };
} // (83:4) 


function create_createButton_slot(ctx) {
  var button;
  var mounted;
  var dispose;
  return {
    c: function c() {
      button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
      button.innerHTML = "<i class=\"fa fa-plus\"></i> Program Type";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "slot", "createButton");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "class", "btn btn-primary btn-sm");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "data-toggle", "modal");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "data-target", "#modal-progtype");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button, anchor);

      if (!mounted) {
        dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button, "click", (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.prevent_default)(
        /*clearForm*/
        ctx[9]));
        mounted = true;
      }
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button);
      mounted = false;
      dispose();
    }
  };
} // (108:16) {#each programTypes as programType}


function create_each_block(ctx) {
  var tr;
  var td0;
  var t0_value =
  /*programType*/
  ctx[22].title + "";
  var t0;
  var t1;
  var td1;
  var t2_value =
  /*programType*/
  ctx[22].description + "";
  var t2;
  var t3;
  var td2;
  var t4_value =
  /*programType*/
  ctx[22].status + "";
  var t4;
  var t5;
  var td3;
  var a0;
  var a0_href_value;
  var t6;
  var a1;
  var a1_href_value;
  var t7;
  var mounted;
  var dispose;

  function click_handler() {
    return (
      /*click_handler*/
      ctx[16](
      /*programType*/
      ctx[22])
    );
  }

  function click_handler_1() {
    return (
      /*click_handler_1*/
      ctx[17](
      /*programType*/
      ctx[22])
    );
  }

  return {
    c: function c() {
      tr = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("tr");
      td0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("td");
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t0_value);
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      td1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("td");
      t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t2_value);
      t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      td2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("td");
      t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t4_value);
      t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      td3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("td");
      a0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      a0.innerHTML = "<i class=\"fa fa-edit text-green\"></i>";
      t6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("\n                              \n                            ");
      a1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      a1.innerHTML = "<i class=\"fa fa-trash text-red\"></i>";
      t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a0, "data-toggle", "modal");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a0, "data-target", "#modal-progtype");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a0, "href", a0_href_value = null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a1, "href", a1_href_value = null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(tr, "class", "odd");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, tr, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, td0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td0, t0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, td1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td1, t2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, t3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, td2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td2, t4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, t5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, td3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td3, a0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td3, t6);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td3, a1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, t7);

      if (!mounted) {
        dispose = [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(a0, "click", (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.prevent_default)(click_handler)), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(a1, "click", (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.prevent_default)(click_handler_1))];
        mounted = true;
      }
    },
    p: function p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty &
      /*programTypes*/
      2 && t0_value !== (t0_value =
      /*programType*/
      ctx[22].title + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t0, t0_value);
      if (dirty &
      /*programTypes*/
      2 && t2_value !== (t2_value =
      /*programType*/
      ctx[22].description + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t2, t2_value);
      if (dirty &
      /*programTypes*/
      2 && t4_value !== (t4_value =
      /*programType*/
      ctx[22].status + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t4, t4_value);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(tr);
      mounted = false;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
    }
  };
} // (93:4) 


function create_content_slot(ctx) {
  var div;
  var table;
  var thead;
  var t5;
  var tbody;
  var each_value =
  /*programTypes*/
  ctx[1];
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  return {
    c: function c() {
      div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      table = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("table");
      thead = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("thead");
      thead.innerHTML = "<tr role=\"row\"><th>Title</th><th>Description</th><th>Status</th> \n                    <th>Actions</th></tr>";
      t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      tbody = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("tbody");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(table, "id", "example1");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(table, "class", "table table-data table-striped table-hover dataTable no-footer");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(table, "role", "grid");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(table, "aria-describedby", "example1_info");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "col-sm-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "slot", "content");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, table);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(table, thead);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(table, t5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(table, tbody);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].m(tbody, null);
      }
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*removeRow, programTypes, selectRow*/
      386) {
        each_value =
        /*programTypes*/
        ctx[1];

        var _i3;

        for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i3);

          if (each_blocks[_i3]) {
            each_blocks[_i3].p(child_ctx, dirty);
          } else {
            each_blocks[_i3] = create_each_block(child_ctx);

            each_blocks[_i3].c();

            each_blocks[_i3].m(tbody, null);
          }
        }

        for (; _i3 < each_blocks.length; _i3 += 1) {
          each_blocks[_i3].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
    }
  };
}

function create_fragment(ctx) {
  var messagenotification;
  var t;
  var page_1;
  var current;
  messagenotification = new _Components_MessageNotification_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({
    props: {
      message:
      /*message*/
      ctx[0],
      error:
      /*error*/
      ctx[2],
      errors:
      /*$form*/
      ctx[5].errors,
      onResetMessage:
      /*onResetMessage*/
      ctx[11],
      hasErrors:
      /*$form*/
      ctx[5].hasErrors,
      onCloseModal:
      /*onCloseModal*/
      ctx[12]
    }
  });
  page_1 = new _components_Page_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
    props: {
      $$slots: {
        content: [create_content_slot],
        createButton: [create_createButton_slot],
        title: [create_title_slot],
        "default": [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  return {
    c: function c() {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(messagenotification.$$.fragment);
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(page_1.$$.fragment);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(messagenotification, target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(page_1, target, anchor);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var messagenotification_changes = {};
      if (dirty &
      /*message*/
      1) messagenotification_changes.message =
      /*message*/
      ctx[0];
      if (dirty &
      /*error*/
      4) messagenotification_changes.error =
      /*error*/
      ctx[2];
      if (dirty &
      /*$form*/
      32) messagenotification_changes.errors =
      /*$form*/
      ctx[5].errors;
      if (dirty &
      /*$form*/
      32) messagenotification_changes.hasErrors =
      /*$form*/
      ctx[5].hasErrors;
      messagenotification.$set(messagenotification_changes);
      var page_1_changes = {};

      if (dirty &
      /*$$scope, programTypes, closeModal, mode, $form*/
      33554490) {
        page_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      page_1.$set(page_1_changes);
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(messagenotification.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(page_1.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(messagenotification.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(page_1.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(messagenotification, detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(page_1, detaching);
    }
  };
}

var layout = _Dashboard_Layout_svelte__WEBPACK_IMPORTED_MODULE_6__["default"];

function instance($$self, $$props, $$invalidate) {
  var $form;
  var programTypes = $$props.programTypes;
  var store = $$props.store;
  var update = $$props.update;
  var destroy = $$props.destroy;
  var message = $$props.message;
  var error = $$props.error; // export let csrf;

  var mode = "create";
  var closeModal = null;
  var form = (0,_inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_5__.useForm)({
    description: "",
    title: "",
    status: "active",
    id: "0"
  });
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, form, function (value) {
    return $$invalidate(5, $form = value);
  });

  function selectRow(data) {
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_store_value)(form, $form.description = data.description, $form);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_store_value)(form, $form.title = data.title, $form);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_store_value)(form, $form.status = data.status, $form);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_store_value)(form, $form.id = data.id, $form);
    $$invalidate(3, mode = "update");
  }

  function removeRow(data) {
    if (confirm("Do you want to confirm this action?")) {
      $form["delete"](destroy + "/" + data.id);
    }
  }

  function clearForm() {
    $form.reset();
    $$invalidate(3, mode = "create");
  }

  function callStore() {
    if (mode == "create") {
      $form.post(store);
    } else {
      $form.put(update + "/" + $form.id);
    }
  }

  function onResetMessage() {
    // toastr.success(message);
    $$invalidate(0, message = "");
    $form.clearErrors();
  }

  function onCloseModal() {
    // alert('called');
    console.log(closeModal);
    closeModal.click();
  }

  var click_handler = function click_handler(programType) {
    return selectRow(programType);
  };

  var click_handler_1 = function click_handler_1(programType) {
    return removeRow(programType);
  };

  function input_input_handler() {
    $form.title = this.value;
    form.set($form);
  }

  function textarea_input_handler() {
    $form.description = this.value;
    form.set($form);
  }

  function select_change_handler() {
    $form.status = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_value)(this);
    form.set($form);
  }

  var setRef_handler = function setRef_handler(ref) {
    return $$invalidate(4, closeModal = ref.detail);
  };

  $$self.$$set = function ($$props) {
    if ('programTypes' in $$props) $$invalidate(1, programTypes = $$props.programTypes);
    if ('store' in $$props) $$invalidate(13, store = $$props.store);
    if ('update' in $$props) $$invalidate(14, update = $$props.update);
    if ('destroy' in $$props) $$invalidate(15, destroy = $$props.destroy);
    if ('message' in $$props) $$invalidate(0, message = $$props.message);
    if ('error' in $$props) $$invalidate(2, error = $$props.error);
  };

  return [message, programTypes, error, mode, closeModal, $form, form, selectRow, removeRow, clearForm, callStore, onResetMessage, onCloseModal, store, update, destroy, click_handler, click_handler_1, input_input_handler, textarea_input_handler, select_change_handler, setRef_handler];
}

var ProgramType = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(ProgramType, _SvelteComponent);

  var _super = _createSuper(ProgramType);

  function ProgramType(options) {
    var _this;

    _classCallCheck(this, ProgramType);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
      programTypes: 1,
      store: 13,
      update: 14,
      destroy: 15,
      message: 0,
      error: 2
    });
    return _this;
  }

  return _createClass(ProgramType);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgramType);


/***/ }),

/***/ "./resources/js/Pages/Settings/Province.svelte":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/Settings/Province.svelte ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "layout": () => (/* binding */ layout)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _Components_MessageNotification_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/MessageNotification.svelte */ "./resources/js/Pages/Components/MessageNotification.svelte");
/* harmony import */ var _components_Modal_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Modal.svelte */ "./resources/js/components/Modal.svelte");
/* harmony import */ var _components_Page_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Page.svelte */ "./resources/js/components/Page.svelte");
/* harmony import */ var _components_Pagination_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Pagination.svelte */ "./resources/js/components/Pagination.svelte");
/* harmony import */ var _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inertiajs/inertia-svelte */ "./node_modules/@inertiajs/inertia-svelte/src/index.js");
/* harmony import */ var _Dashboard_Layout_svelte__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Dashboard/Layout.svelte */ "./resources/js/Pages/Dashboard/Layout.svelte");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* resources/js/Pages/Settings/Province.svelte generated by Svelte v3.47.0 */








function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[17] = list[i];
  return child_ctx;
} // (135:8) 


function create_title_slot_1(ctx) {
  var span;
  return {
    c: function c() {
      span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
      span.textContent = "Province";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span, "slot", "title");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, span, anchor);
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(span);
    }
  };
} // (137:8) 


function create_content_slot_1(ctx) {
  var div1;
  var div0;
  var label;
  var t2;
  var input;
  var mounted;
  var dispose;
  return {
    c: function c() {
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      label = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
      label.innerHTML = "Name <b style=\"color:red\">*</b>";
      t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      input = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label, "class", "control-label");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "type", "text");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "class", "form-control");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "name", "proTitle");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "placeholder", "");
      input.required = "";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "slot", "content");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div1, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, div0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, label);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, input);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input,
      /*$form*/
      ctx[5].name);

      if (!mounted) {
        dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input, "input",
        /*input_input_handler*/
        ctx[15]);
        mounted = true;
      }
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*$form*/
      32 && input.value !==
      /*$form*/
      ctx[5].name) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input,
        /*$form*/
        ctx[5].name);
      }
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div1);
      mounted = false;
      dispose();
    }
  };
} // (155:8) 


function create_storeButton_slot(ctx) {
  var button;
  var i;
  var t0;
  var t1_value = (
  /*mode*/
  ctx[3] == "create" ? "Add Province" : "Update Province") + "";
  var t1;
  return {
    c: function c() {
      button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
      i = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("i");
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("   ");
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t1_value);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(i, "class", "fa fa-save");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "type", "submit");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "class", "btn btn-primary");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "slot", "storeButton");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button, i);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button, t0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button, t1);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*mode*/
      8 && t1_value !== (t1_value = (
      /*mode*/
      ctx[3] == "create" ? "Add Province" : "Update Province") + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t1, t1_value);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button);
    }
  };
} // (76:0) <Page>


function create_default_slot(ctx) {
  var modal;
  var current;
  modal = new _components_Modal_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
    props: {
      id: "modal-progtype",
      $$slots: {
        storeButton: [create_storeButton_slot],
        content: [create_content_slot_1],
        title: [create_title_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  modal.$on("submit",
  /*callStore*/
  ctx[10]);
  modal.$on("setRef",
  /*setRef_handler*/
  ctx[16]);
  return {
    c: function c() {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(modal.$$.fragment);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(modal, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var modal_changes = {};

      if (dirty &
      /*$$scope, mode, $form*/
      1048616) {
        modal_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      modal.$set(modal_changes);
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(modal.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(modal.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(modal, detaching);
    }
  };
} // (77:4) 


function create_title_slot(ctx) {
  var span;
  return {
    c: function c() {
      span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
      span.textContent = "Province";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span, "slot", "title");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, span, anchor);
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(span);
    }
  };
} // (78:4) 


function create_createButton_slot(ctx) {
  var button;
  var mounted;
  var dispose;
  return {
    c: function c() {
      button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
      button.innerHTML = "<i class=\"fa fa-plus\"></i> Add Province";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "slot", "createButton");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "class", "btn btn-primary btn-sm");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "data-toggle", "modal");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "data-target", "#modal-progtype");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button, anchor);

      if (!mounted) {
        dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button, "click", (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.prevent_default)(
        /*clearForm*/
        ctx[9]));
        mounted = true;
      }
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button);
      mounted = false;
      dispose();
    }
  };
} // (102:16) {#each list as item}


function create_each_block(ctx) {
  var tr;
  var td0;
  var t0_value =
  /*item*/
  ctx[17].name + "";
  var t0;
  var t1;
  var td1;
  var a0;
  var a0_href_value;
  var t2;
  var a1;
  var t3;
  var a1_href_value;
  var inertia_action;
  var t4;
  var a2;
  var a2_href_value;
  var t5;
  var mounted;
  var dispose;

  function click_handler() {
    return (
      /*click_handler*/
      ctx[13](
      /*item*/
      ctx[17])
    );
  }

  function click_handler_1() {
    return (
      /*click_handler_1*/
      ctx[14](
      /*item*/
      ctx[17])
    );
  }

  return {
    c: function c() {
      tr = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("tr");
      td0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("td");
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t0_value);
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      td1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("td");
      a0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      a0.innerHTML = "<i class=\"fa fa-edit text-green\"></i>";
      t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("\n                              \n                            ");
      a1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Town/Cities");
      t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("\n                              \n                            ");
      a2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      a2.innerHTML = "<i class=\"fa fa-trash text-red\"></i>";
      t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a0, "data-toggle", "modal");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a0, "data-target", "#modal-progtype");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a0, "href", a0_href_value = null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a1, "href", a1_href_value = "/province-town-city/?province_id=".concat(
      /*item*/
      ctx[17].id));
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a2, "href", a2_href_value = '#');
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(tr, "class", "odd");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, tr, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, td0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td0, t0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, td1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td1, a0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td1, t2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td1, a1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a1, t3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td1, t4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td1, a2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, t5);

      if (!mounted) {
        dispose = [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(a0, "click", (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.prevent_default)(click_handler)), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(inertia_action = _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_5__.inertia.call(null, a1)), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(a2, "click", (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.prevent_default)(click_handler_1))];
        mounted = true;
      }
    },
    p: function p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty &
      /*list*/
      2 && t0_value !== (t0_value =
      /*item*/
      ctx[17].name + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t0, t0_value);

      if (dirty &
      /*list*/
      2 && a1_href_value !== (a1_href_value = "/province-town-city/?province_id=".concat(
      /*item*/
      ctx[17].id))) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a1, "href", a1_href_value);
      }
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(tr);
      mounted = false;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
    }
  };
} // (88:4) 


function create_content_slot(ctx) {
  var div;
  var table;
  var thead;
  var t1;
  var tbody;
  var each_value =
  /*list*/
  ctx[1];
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  return {
    c: function c() {
      div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      table = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("table");
      thead = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("thead");
      thead.innerHTML = "<tr role=\"row\"><th>name</th></tr>";
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      tbody = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("tbody");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(table, "id", "example1");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(table, "class", "table table-data table-striped table-hover dataTable no-footer");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(table, "role", "grid");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(table, "aria-describedby", "example1_info");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "col-sm-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "slot", "content");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, table);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(table, thead);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(table, t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(table, tbody);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].m(tbody, null);
      }
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*removeRow, list, selectRow*/
      386) {
        each_value =
        /*list*/
        ctx[1];

        var _i3;

        for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i3);

          if (each_blocks[_i3]) {
            each_blocks[_i3].p(child_ctx, dirty);
          } else {
            each_blocks[_i3] = create_each_block(child_ctx);

            each_blocks[_i3].c();

            each_blocks[_i3].m(tbody, null);
          }
        }

        for (; _i3 < each_blocks.length; _i3 += 1) {
          each_blocks[_i3].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
    }
  };
}

function create_fragment(ctx) {
  var messagenotification;
  var t;
  var page_1;
  var current;
  messagenotification = new _Components_MessageNotification_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({
    props: {
      message:
      /*message*/
      ctx[0],
      error:
      /*error*/
      ctx[2],
      errors:
      /*$form*/
      ctx[5].errors,
      onResetMessage:
      /*onResetMessage*/
      ctx[11],
      hasErrors:
      /*$form*/
      ctx[5].hasErrors,
      onCloseModal:
      /*onCloseModal*/
      ctx[12]
    }
  });
  page_1 = new _components_Page_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
    props: {
      $$slots: {
        content: [create_content_slot],
        createButton: [create_createButton_slot],
        title: [create_title_slot],
        "default": [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  return {
    c: function c() {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(messagenotification.$$.fragment);
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(page_1.$$.fragment);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(messagenotification, target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(page_1, target, anchor);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var messagenotification_changes = {};
      if (dirty &
      /*message*/
      1) messagenotification_changes.message =
      /*message*/
      ctx[0];
      if (dirty &
      /*error*/
      4) messagenotification_changes.error =
      /*error*/
      ctx[2];
      if (dirty &
      /*$form*/
      32) messagenotification_changes.errors =
      /*$form*/
      ctx[5].errors;
      if (dirty &
      /*$form*/
      32) messagenotification_changes.hasErrors =
      /*$form*/
      ctx[5].hasErrors;
      messagenotification.$set(messagenotification_changes);
      var page_1_changes = {};

      if (dirty &
      /*$$scope, list, closeModal, mode, $form*/
      1048634) {
        page_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      page_1.$set(page_1_changes);
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(messagenotification.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(page_1.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(messagenotification.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(page_1.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(messagenotification, detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(page_1, detaching);
    }
  };
}

var layout = _Dashboard_Layout_svelte__WEBPACK_IMPORTED_MODULE_6__["default"];
var resource = '/province/';

function instance($$self, $$props, $$invalidate) {
  var $form;
  var list = $$props.list;
  var message = $$props.message;
  var error = $$props.error; // export let csrf;

  var mode = "create";
  var closeModal = null;
  var form = (0,_inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_5__.useForm)({
    name: "",
    id: "0"
  });
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, form, function (value) {
    return $$invalidate(5, $form = value);
  });

  function selectRow(data) {
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_store_value)(form, $form.name = data.name, $form);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_store_value)(form, $form.id = data.id, $form);
    $$invalidate(3, mode = "update");
  }

  function removeRow(data) {
    if (confirm("Do you want to confirm this action?")) {
      $form["delete"](resource + data.id);
    }
  }

  function clearForm() {
    $form.reset();
    $$invalidate(3, mode = "create");
  }

  function callStore() {
    if (mode == "create") {
      $form.post(resource);
    } else {
      $form.put(resource + $form.id);
    }
  }

  function onResetMessage() {
    // toastr.success(message);
    $$invalidate(0, message = "");
    $form.clearErrors();
  }

  function onCloseModal() {
    // alert('called');
    console.log(closeModal);
    closeModal.click();
  }

  var click_handler = function click_handler(item) {
    return selectRow(item);
  };

  var click_handler_1 = function click_handler_1(item) {
    return removeRow(item);
  };

  function input_input_handler() {
    $form.name = this.value;
    form.set($form);
  }

  var setRef_handler = function setRef_handler(ref) {
    return $$invalidate(4, closeModal = ref.detail);
  };

  $$self.$$set = function ($$props) {
    if ('list' in $$props) $$invalidate(1, list = $$props.list);
    if ('message' in $$props) $$invalidate(0, message = $$props.message);
    if ('error' in $$props) $$invalidate(2, error = $$props.error);
  };

  return [message, list, error, mode, closeModal, $form, form, selectRow, removeRow, clearForm, callStore, onResetMessage, onCloseModal, click_handler, click_handler_1, input_input_handler, setRef_handler];
}

var Province = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Province, _SvelteComponent);

  var _super = _createSuper(Province);

  function Province(options) {
    var _this;

    _classCallCheck(this, Province);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
      list: 1,
      message: 0,
      error: 2
    });
    return _this;
  }

  return _createClass(Province);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Province);


/***/ }),

/***/ "./resources/js/Pages/Settings/ProvinceTownCity.svelte":
/*!*************************************************************!*\
  !*** ./resources/js/Pages/Settings/ProvinceTownCity.svelte ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "layout": () => (/* binding */ layout)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _Components_MessageNotification_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/MessageNotification.svelte */ "./resources/js/Pages/Components/MessageNotification.svelte");
/* harmony import */ var _components_Modal_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Modal.svelte */ "./resources/js/components/Modal.svelte");
/* harmony import */ var _components_Page_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Page.svelte */ "./resources/js/components/Page.svelte");
/* harmony import */ var _components_Pagination_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Pagination.svelte */ "./resources/js/components/Pagination.svelte");
/* harmony import */ var _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inertiajs/inertia-svelte */ "./node_modules/@inertiajs/inertia-svelte/src/index.js");
/* harmony import */ var _Dashboard_Layout_svelte__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Dashboard/Layout.svelte */ "./resources/js/Pages/Dashboard/Layout.svelte");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* resources/js/Pages/Settings/ProvinceTownCity.svelte generated by Svelte v3.47.0 */








function get_each_context_2(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[24] = list[i];
  return child_ctx;
}

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[24] = list[i];
  return child_ctx;
}

function get_each_context_1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[27] = list[i];
  return child_ctx;
} // (169:8) 


function create_title_slot_1(ctx) {
  var span;
  return {
    c: function c() {
      span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
      span.textContent = "Town/City";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span, "slot", "title");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, span, anchor);
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(span);
    }
  };
} // (176:20) {#each provinces as item}


function create_each_block_2(ctx) {
  var option;
  var t_value =
  /*item*/
  ctx[24].name + "";
  var t;
  var option_value_value;
  return {
    c: function c() {
      option = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
      option.__value = option_value_value =
      /*item*/
      ctx[24].id;
      option.value = option.__value;
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, option, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(option, t);
    },
    p: function p(ctx, dirty) {
      if (dirty[0] &
      /*provinces*/
      4 && t_value !== (t_value =
      /*item*/
      ctx[24].name + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, t_value);

      if (dirty[0] &
      /*provinces*/
      4 && option_value_value !== (option_value_value =
      /*item*/
      ctx[24].id)) {
        option.__value = option_value_value;
        option.value = option.__value;
      }
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(option);
    }
  };
} // (171:8) 


function create_content_slot_1(ctx) {
  var div2;
  var div0;
  var label0;
  var t1;
  var select;
  var option;
  var t3;
  var div1;
  var label1;
  var t6;
  var input;
  var mounted;
  var dispose;
  var each_value_2 =
  /*provinces*/
  ctx[2];
  var each_blocks = [];

  for (var i = 0; i < each_value_2.length; i += 1) {
    each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
  }

  return {
    c: function c() {
      div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      label0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
      label0.textContent = "Province*";
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      select = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("select");
      option = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      option.textContent = "Select Province";

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      label1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
      label1.innerHTML = "Name <b style=\"color:red\">*</b>";
      t6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      input = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label0, "for", "title");
      option.__value = "";
      option.value = option.__value;
      if (
      /*$form*/
      ctx[7].province_id === void 0) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_render_callback)(function () {
        return (
          /*select_change_handler_1*/
          ctx[21].call(select)
        );
      });
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div0, "text-align", "right");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label1, "class", "control-label");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "type", "text");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "class", "form-control");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "name", "proTitle");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "placeholder", "");
      input.required = "";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "slot", "content");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div2, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, label0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, select);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(select, option);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].m(select, null);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select,
      /*$form*/
      ctx[7].province_id);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, label1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t6);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, input);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input,
      /*$form*/
      ctx[7].name);

      if (!mounted) {
        dispose = [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(select, "change",
        /*select_change_handler_1*/
        ctx[21]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input, "input",
        /*input_input_handler*/
        ctx[22])];
        mounted = true;
      }
    },
    p: function p(ctx, dirty) {
      if (dirty[0] &
      /*provinces*/
      4) {
        each_value_2 =
        /*provinces*/
        ctx[2];

        var _i3;

        for (_i3 = 0; _i3 < each_value_2.length; _i3 += 1) {
          var child_ctx = get_each_context_2(ctx, each_value_2, _i3);

          if (each_blocks[_i3]) {
            each_blocks[_i3].p(child_ctx, dirty);
          } else {
            each_blocks[_i3] = create_each_block_2(child_ctx);

            each_blocks[_i3].c();

            each_blocks[_i3].m(select, null);
          }
        }

        for (; _i3 < each_blocks.length; _i3 += 1) {
          each_blocks[_i3].d(1);
        }

        each_blocks.length = each_value_2.length;
      }

      if (dirty[0] &
      /*$form, provinces*/
      132) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select,
        /*$form*/
        ctx[7].province_id);
      }

      if (dirty[0] &
      /*$form, provinces*/
      132 && input.value !==
      /*$form*/
      ctx[7].name) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_input_value)(input,
        /*$form*/
        ctx[7].name);
      }
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
      mounted = false;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
    }
  };
} // (198:8) 


function create_storeButton_slot(ctx) {
  var button;
  var i;
  var t0;
  var t1_value = (
  /*mode*/
  ctx[4] == "create" ? "Add Town/City" : "Update Town/City") + "";
  var t1;
  return {
    c: function c() {
      button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
      i = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("i");
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("   ");
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t1_value);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(i, "class", "fa fa-save");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "type", "submit");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "class", "btn btn-primary");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "slot", "storeButton");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button, i);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button, t0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button, t1);
    },
    p: function p(ctx, dirty) {
      if (dirty[0] &
      /*mode*/
      16 && t1_value !== (t1_value = (
      /*mode*/
      ctx[4] == "create" ? "Add Town/City" : "Update Town/City") + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t1, t1_value);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button);
    }
  };
} // (96:0) <Page>


function create_default_slot(ctx) {
  var t;
  var modal;
  var current;
  modal = new _components_Modal_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
    props: {
      id: "modal-progtype",
      $$slots: {
        storeButton: [create_storeButton_slot],
        content: [create_content_slot_1],
        title: [create_title_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  modal.$on("submit",
  /*callStore*/
  ctx[13]);
  modal.$on("setRef",
  /*setRef_handler*/
  ctx[23]);
  return {
    c: function c() {
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(" \n    \n\n    \n\n    ");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(modal.$$.fragment);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(modal, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var modal_changes = {};

      if (dirty[0] &
      /*mode, $form, provinces*/
      148 | dirty[1] &
      /*$$scope*/
      2) {
        modal_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      modal.$set(modal_changes);
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(modal.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(modal.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(modal, detaching);
    }
  };
} // (97:4) 


function create_title_slot(ctx) {
  var span;
  return {
    c: function c() {
      span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
      span.textContent = "Province";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span, "slot", "title");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, span, anchor);
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(span);
    }
  };
} // (98:4) 


function create_createButton_slot(ctx) {
  var button;
  var mounted;
  var dispose;
  return {
    c: function c() {
      button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
      button.innerHTML = "<i class=\"fa fa-plus\"></i> Add Town/City";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "slot", "createButton");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "class", "btn btn-primary btn-sm");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "data-toggle", "modal");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "data-target", "#modal-progtype");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button, anchor);

      if (!mounted) {
        dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button, "click", (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.prevent_default)(
        /*clearForm*/
        ctx[12]));
        mounted = true;
      }
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button);
      mounted = false;
      dispose();
    }
  };
} // (108:4) 


function create_createButton2_slot(ctx) {
  var a;
  var inertia_action;
  var mounted;
  var dispose;
  return {
    c: function c() {
      a = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      a.textContent = "Back";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "class", "btn btn-primary btn-sm");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "href", "/province");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a, "slot", "createButton2");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, a, anchor);

      if (!mounted) {
        dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(inertia_action = _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_5__.inertia.call(null, a));
        mounted = true;
      }
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(a);
      mounted = false;
      dispose();
    }
  };
} // (117:16) {#each provinces as item1}


function create_each_block_1(ctx) {
  var option;
  var t0_value =
  /*item1*/
  ctx[27].name + "";
  var t0;
  var t1;
  var option_value_value;
  return {
    c: function c() {
      option = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t0_value);
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      option.__value = option_value_value =
      /*item1*/
      ctx[27].id;
      option.value = option.__value;
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, option, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(option, t0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(option, t1);
    },
    p: function p(ctx, dirty) {
      if (dirty[0] &
      /*provinces*/
      4 && t0_value !== (t0_value =
      /*item1*/
      ctx[27].name + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t0, t0_value);

      if (dirty[0] &
      /*provinces*/
      4 && option_value_value !== (option_value_value =
      /*item1*/
      ctx[27].id)) {
        option.__value = option_value_value;
        option.value = option.__value;
      }
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(option);
    }
  };
} // (136:16) {#each list as item}


function create_each_block(ctx) {
  var tr;
  var td0;
  var t0_value =
  /*item*/
  ctx[24].name + "";
  var t0;
  var t1;
  var td1;
  var a0;
  var a0_href_value;
  var t2;
  var a1;
  var a1_href_value;
  var t3;
  var mounted;
  var dispose;

  function click_handler() {
    return (
      /*click_handler*/
      ctx[19](
      /*item*/
      ctx[24])
    );
  }

  function click_handler_1() {
    return (
      /*click_handler_1*/
      ctx[20](
      /*item*/
      ctx[24])
    );
  }

  return {
    c: function c() {
      tr = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("tr");
      td0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("td");
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t0_value);
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      td1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("td");
      a0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      a0.innerHTML = "<i class=\"fa fa-edit text-green\"></i>";
      t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("\n                              \n                            ");
      a1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      a1.innerHTML = "<i class=\"fa fa-trash text-red\"></i>";
      t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a0, "data-toggle", "modal");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a0, "data-target", "#modal-progtype");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a0, "href", a0_href_value = null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a1, "href", a1_href_value = "#");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(tr, "class", "odd");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, tr, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, td0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td0, t0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, td1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td1, a0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td1, t2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(td1, a1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(tr, t3);

      if (!mounted) {
        dispose = [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(a0, "click", (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.prevent_default)(click_handler)), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(a1, "click", (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.prevent_default)(click_handler_1))];
        mounted = true;
      }
    },
    p: function p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] &
      /*list*/
      2 && t0_value !== (t0_value =
      /*item*/
      ctx[24].name + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t0, t0_value);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(tr);
      mounted = false;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
    }
  };
} // (110:4) 


function create_content_slot(ctx) {
  var div1;
  var div0;
  var label;
  var t1;
  var select;
  var option;
  var t3;
  var table;
  var thead;
  var t5;
  var tbody;
  var mounted;
  var dispose;
  var each_value_1 =
  /*provinces*/
  ctx[2];
  var each_blocks_1 = [];

  for (var i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }

  var each_value =
  /*list*/
  ctx[1];
  var each_blocks = [];

  for (var _i4 = 0; _i4 < each_value.length; _i4 += 1) {
    each_blocks[_i4] = create_each_block(get_each_context(ctx, each_value, _i4));
  }

  return {
    c: function c() {
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      label = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("label");
      label.textContent = "Province*";
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      select = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("select");
      option = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      option.textContent = "Select Province";

      for (var _i5 = 0; _i5 < each_blocks_1.length; _i5 += 1) {
        each_blocks_1[_i5].c();
      }

      t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      table = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("table");
      thead = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("thead");
      thead.innerHTML = "<tr role=\"row\"><th>name</th></tr>";
      t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      tbody = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("tbody");

      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        each_blocks[_i6].c();
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(label, "for", "title");
      option.__value = "";
      option.value = option.__value;
      if (
      /*$filter*/
      ctx[6].province_id === void 0) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_render_callback)(function () {
        return (
          /*select_change_handler*/
          ctx[18].call(select)
        );
      });
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "style", "");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(table, "id", "example1");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(table, "class", "table table-data table-striped table-hover dataTable no-footer");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(table, "role", "grid");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(table, "aria-describedby", "example1_info");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "col-sm-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "slot", "content");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div1, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, div0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, label);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, select);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(select, option);

      for (var _i7 = 0; _i7 < each_blocks_1.length; _i7 += 1) {
        each_blocks_1[_i7].m(select, null);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select,
      /*$filter*/
      ctx[6].province_id);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, table);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(table, thead);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(table, t5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(table, tbody);

      for (var _i8 = 0; _i8 < each_blocks.length; _i8 += 1) {
        each_blocks[_i8].m(tbody, null);
      }

      if (!mounted) {
        dispose = [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(select, "change",
        /*select_change_handler*/
        ctx[18]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(select, "change",
        /*onFilterChange*/
        ctx[16])];
        mounted = true;
      }
    },
    p: function p(ctx, dirty) {
      if (dirty[0] &
      /*provinces*/
      4) {
        each_value_1 =
        /*provinces*/
        ctx[2];

        var _i9;

        for (_i9 = 0; _i9 < each_value_1.length; _i9 += 1) {
          var child_ctx = get_each_context_1(ctx, each_value_1, _i9);

          if (each_blocks_1[_i9]) {
            each_blocks_1[_i9].p(child_ctx, dirty);
          } else {
            each_blocks_1[_i9] = create_each_block_1(child_ctx);

            each_blocks_1[_i9].c();

            each_blocks_1[_i9].m(select, null);
          }
        }

        for (; _i9 < each_blocks_1.length; _i9 += 1) {
          each_blocks_1[_i9].d(1);
        }

        each_blocks_1.length = each_value_1.length;
      }

      if (dirty[0] &
      /*$filter, provinces*/
      68) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select,
        /*$filter*/
        ctx[6].province_id);
      }

      if (dirty[0] &
      /*removeRow, list, selectRow*/
      3074) {
        each_value =
        /*list*/
        ctx[1];

        var _i10;

        for (_i10 = 0; _i10 < each_value.length; _i10 += 1) {
          var _child_ctx = get_each_context(ctx, each_value, _i10);

          if (each_blocks[_i10]) {
            each_blocks[_i10].p(_child_ctx, dirty);
          } else {
            each_blocks[_i10] = create_each_block(_child_ctx);

            each_blocks[_i10].c();

            each_blocks[_i10].m(tbody, null);
          }
        }

        for (; _i10 < each_blocks.length; _i10 += 1) {
          each_blocks[_i10].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks_1, detaching);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
      mounted = false;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
    }
  };
}

function create_fragment(ctx) {
  var messagenotification;
  var t;
  var page_1;
  var current;
  messagenotification = new _Components_MessageNotification_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({
    props: {
      message:
      /*message*/
      ctx[0],
      error:
      /*error*/
      ctx[3],
      errors:
      /*$form*/
      ctx[7].errors,
      onResetMessage:
      /*onResetMessage*/
      ctx[14],
      hasErrors:
      /*$form*/
      ctx[7].hasErrors,
      onCloseModal:
      /*onCloseModal*/
      ctx[15]
    }
  });
  page_1 = new _components_Page_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
    props: {
      $$slots: {
        content: [create_content_slot],
        createButton2: [create_createButton2_slot],
        createButton: [create_createButton_slot],
        title: [create_title_slot],
        "default": [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  return {
    c: function c() {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(messagenotification.$$.fragment);
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(page_1.$$.fragment);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(messagenotification, target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(page_1, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var messagenotification_changes = {};
      if (dirty[0] &
      /*message*/
      1) messagenotification_changes.message =
      /*message*/
      ctx[0];
      if (dirty[0] &
      /*error*/
      8) messagenotification_changes.error =
      /*error*/
      ctx[3];
      if (dirty[0] &
      /*$form*/
      128) messagenotification_changes.errors =
      /*$form*/
      ctx[7].errors;
      if (dirty[0] &
      /*$form*/
      128) messagenotification_changes.hasErrors =
      /*$form*/
      ctx[7].hasErrors;
      messagenotification.$set(messagenotification_changes);
      var page_1_changes = {};

      if (dirty[0] &
      /*list, $filter, provinces, closeModal, mode, $form*/
      246 | dirty[1] &
      /*$$scope*/
      2) {
        page_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      page_1.$set(page_1_changes);
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(messagenotification.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(page_1.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(messagenotification.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(page_1.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(messagenotification, detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(page_1, detaching);
    }
  };
}

var layout = _Dashboard_Layout_svelte__WEBPACK_IMPORTED_MODULE_6__["default"];
var resource = "/province-town-city/";

function instance($$self, $$props, $$invalidate) {
  var $filter;
  var $form;
  var list = $$props.list;
  var message = $$props.message;
  var provinces = $$props.provinces;
  var error = $$props.error;
  var id = $$props.id;
  var mode = "create";
  var closeModal = null; // alert(id);

  var form = (0,_inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_5__.useForm)({
    province_id: +id,
    name: ""
  });
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, form, function (value) {
    return $$invalidate(7, $form = value);
  });
  var filter = (0,_inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_5__.useForm)({
    province_id: +id
  });
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, filter, function (value) {
    return $$invalidate(6, $filter = value);
  }); // $: {
  //     $filter.id = id;
  // }

  function selectRow(data) {
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_store_value)(form, $form.name = data.name, $form);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_store_value)(form, $form.province_id = data.province_id, $form);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_store_value)(form, $form.id = data.id, $form);
    $$invalidate(4, mode = "update");
  }

  function removeRow(data) {
    if (confirm("Do you want to confirm this action?")) {
      $form["delete"](resource + data.id);
    }
  }

  function clearForm() {
    $form.reset();
    $$invalidate(4, mode = "create");
  }

  function callStore() {
    if (mode == "create") {
      $form.post(resource);
    } else {
      $form.put(resource + $form.id);
    }
  }

  function onResetMessage() {
    // toastr.success(message);
    $$invalidate(0, message = "");
    $form.clearErrors();
  }

  function onCloseModal() {
    // alert('called');
    console.log(closeModal);
    closeModal.click();
  }

  function onFilterChange() {
    $filter.get(resource);
  }

  function select_change_handler() {
    $filter.province_id = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_value)(this);
    filter.set($filter);
    $$invalidate(2, provinces);
  }

  var click_handler = function click_handler(item) {
    return selectRow(item);
  };

  var click_handler_1 = function click_handler_1(item) {
    return removeRow(item);
  };

  function select_change_handler_1() {
    $form.province_id = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_value)(this);
    form.set($form);
    $$invalidate(2, provinces);
  }

  function input_input_handler() {
    $form.name = this.value;
    form.set($form);
    $$invalidate(2, provinces);
  }

  var setRef_handler = function setRef_handler(ref) {
    return $$invalidate(5, closeModal = ref.detail);
  };

  $$self.$$set = function ($$props) {
    if ('list' in $$props) $$invalidate(1, list = $$props.list);
    if ('message' in $$props) $$invalidate(0, message = $$props.message);
    if ('provinces' in $$props) $$invalidate(2, provinces = $$props.provinces);
    if ('error' in $$props) $$invalidate(3, error = $$props.error);
    if ('id' in $$props) $$invalidate(17, id = $$props.id);
  };

  return [message, list, provinces, error, mode, closeModal, $filter, $form, form, filter, selectRow, removeRow, clearForm, callStore, onResetMessage, onCloseModal, onFilterChange, id, select_change_handler, click_handler, click_handler_1, select_change_handler_1, input_input_handler, setRef_handler];
}

var ProvinceTownCity = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(ProvinceTownCity, _SvelteComponent);

  var _super = _createSuper(ProvinceTownCity);

  function ProvinceTownCity(options) {
    var _this;

    _classCallCheck(this, ProvinceTownCity);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
      list: 1,
      message: 0,
      provinces: 2,
      error: 3,
      id: 17
    }, null, [-1, -1]);
    return _this;
  }

  return _createClass(ProvinceTownCity);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProvinceTownCity);


/***/ }),

/***/ "./resources/js/Pages/Test.svelte":
/*!****************************************!*\
  !*** ./resources/js/Pages/Test.svelte ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* resources/js/Pages/Test.svelte generated by Svelte v3.47.0 */


function create_fragment(ctx) {
  var div27;
  return {
    c: function c() {
      div27 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div27.innerHTML = "<header class=\"main-header\"><a href=\"".concat(null, "\" class=\"logo\"><span class=\"logo-mini\"><img alt=\"img\" src=\"../resources/olade_resources/images/Olade_logo_white-small.png\"/></span> \n            \n            <span class=\"logo-lg\"><img alt=\"img\" src=\"../resources/olade_resources/images/Olade_logo_white-small.png\"/></span></a> \n\n        \n        <nav class=\"navbar navbar-static-top\"><a href=\"", '/', "\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\"><span class=\"sr-only\">Toggle navigation</span></a> \n            \n            <div class=\"navbar-custom-menu\"><ul class=\"nav navbar-nav\"><li class=\"dropdown notifications-menu\"><a href=\"", '/', "\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-bell-o\"></i> \n                            <span class=\"label label-danger\">17</span></a> \n                        <ul class=\"dropdown-menu\"><li class=\"header\">You have 17 notifications</li> \n                            <li><ul class=\"menu\"><li><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=c2aa1951a32f33b047954754f0ae\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=c2aa1951a32f33b047954754f0ae\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=c2aa1951a32f33b047954754f0ae\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=c2aa1951a32f33b047954754f0ae\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=b18550ec1bf9ec2fca2bf92fe4ce\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=c2aa1951a32f33b047954754f0ae\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=c2aa1951a32f33b047954754f0ae\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=c2aa1951a32f33b047954754f0ae\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=361306d7cc9bc413ef624c72a19b\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=3907d5938ce80bf016cd6a3b6fb3\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=3907d5938ce80bf016cd6a3b6fb3\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=3907d5938ce80bf016cd6a3b6fb3\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=64ea3b9136cd52d8aa90e38c0024\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=64ea3b9136cd52d8aa90e38c0024\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=64ea3b9136cd52d8aa90e38c0024\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=64ea3b9136cd52d8aa90e38c0024\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li> \n                                    <li><a target=\"_blank\" href=\"ACCOUNTcontractPayment?HKG=64ea3b9136cd52d8aa90e38c0024\"><i class=\"fa fa-comment text-green\"></i> Payment Item for process</a></li></ul></li></ul></li> \n                    \n                    <li class=\"dropdown user user-menu\"><a href=\"", '/', "\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><img src=\"../resources/dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\" .\" style=\"width:20px; height:20px\"/>  <span class=\"hidden-xs\">Alex Akamukali</span></a> \n                        <ul class=\"dropdown-menu\"><li class=\"user-header\"><img src=\"../resources/dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"img\"/> \n                                <p>Alex Akamukali - \n                                    <small>Registered since Mar. 2022</small></p></li> \n                            \n                            \n                            \n                            <li class=\"user-footer\"><div class=\"pull-left\"><a href=\"myprofile\" class=\"btn btn-primary btn-flat\">Profile</a></div> \n                                <div class=\"pull-right\"><a href=\"../utility/logout\" class=\"btn btn-primary btn-flat\">Sign out</a></div></li></ul></li></ul></div></nav></header> \n    \n    <aside class=\"main-sidebar\"><section class=\"sidebar active\" style=\"height: auto;\"><ul class=\"sidebar-menu tree\" data-widget=\"tree\"><li class=\"header\">\xA0</li> \n                \n                <li class=\"active\"><a href=\"../\"><i class=\"fa fa-tachometer\"></i> \n                        <span>Dashboard</span></a></li> \n                <li class=\"treeview\"><a href=\"", '/', "\"><i class=\"fa fa-users\"></i>  <span>Users</span> \n                        <span class=\"pull-right-container\"><i class=\"fa fa-angle-left pull-right\"></i></span></a> \n                    <ul class=\"treeview-menu\"><li><a href=\"users\"><i class=\"fa fa-id-card\"></i> All User</a></li> \n                        <li><a href=\"activeusers\"><i class=\"fa fa-id-card text-green\"></i> Active</a></li> \n                        <li><a href=\"inactiveusers\"><i class=\"fa fa-id-card text-red\"></i> Inactive</a></li> \n                        <li><a href=\"alumniusers\"><i class=\"fa fa-id-card text-yellow\"></i> Alumni</a></li></ul></li> \n                \n                <li class=\"treeview\"><a href=\"", '/', "\"><i class=\"fa fa-pie-chart\"></i>  <span>Reports</span> \n                        <span class=\"pull-right-container\"><i class=\"fa fa-angle-left pull-right\"></i></span></a> \n                    <ul class=\"treeview-menu\"><li><a href=\"JobDetailsConsultants\"><i class=\"fa fa-line-chart text-green\"></i> Consultants\n                                on Job</a></li> \n                        <li><a href=\"", '/', "\"><i class=\"fa fa-bar-chart text-blue\"></i> On FTE Job</a></li> \n                        <li><a href=\"", '/', "\"><i class=\"fa fa-bar-chart text-aqua\"></i> On Contract\n                                Job</a></li></ul></li> \n                <li><a href=\"", '/', "\"><i class=\"fa fa-envelope\"></i> \n                        <span>Communication</span></a></li> \n\n                <li class=\"treeview\"><a href=\"", '/', "\"><i class=\"fa fa-money text-aqua\"></i> \n                        <span>Accounts Payments</span> \n                        <span class=\"pull-right-container\"><i class=\"fa fa-angle-left pull-right\"></i></span></a> \n                    <ul class=\"treeview-menu\"><li><a href=\"ACCOUNTcontractPayment\"><i class=\"fa fa-money text-green\"></i> Contract Payment</a></li> \n                        <li><a href=\"ACCOUNTFTEPayment\"><i class=\"fa fa-money text-blue\"></i> FTE Payment</a></li></ul></li> \n\n                <li class=\"treeview\"><a href=\"", '/', "\"><i class=\"fa fa-tasks\"></i>  <span>Document Library</span> \n                        <span class=\"pull-right-container\"><i class=\"fa fa-angle-left pull-right\"></i></span></a> \n                    <ul class=\"treeview-menu\"><li><a href=\"docContract\"><i class=\"fa fa-file\"></i> Olade Contract</a></li> \n                        <li><a href=\"", '/', "\"><i class=\"fa fa-file-o\"></i> Employment Contract</a></li> \n                        <li><a href=\"", '/', "\"><i class=\"fa fa-file text-green\"></i> Invoices</a></li> \n                        <li><a href=\"", '/', "\"><i class=\"fa fa-money\"></i> Payment Stub</a></li> \n                        <li><a href=\"", '/', "\"><i class=\"fa fa-file text-aqua\"></i> Resumes</a></li></ul></li> \n\n                <li><a href=\"", '/', "\"><i class=\"fa fa-folder\"></i>  <span>Projects</span></a></li> \n                <li><a href=\"usersTeams\"><i class=\"fa fa-users\"></i>  <span>Teams</span></a></li> \n                <li class=\"treeview\"><a href=\"", '/', "\"><i class=\"fa fa-cogs\"></i>  <span>Settings</span> \n                        <span class=\"pull-right-container\"><i class=\"fa fa-angle-left pull-right\"></i></span></a> \n                    <ul class=\"treeview-menu\"><li><a href=\"programtype\"><i class=\"fa fa-graduation-cap\"></i> Program Type</a></li> \n                        <li><a href=\"knowledgearea\"><i class=\"fa fa-book text-orange\"></i> Knowledge Area</a></li> \n                        <li><a href=\"oladecontracttype\"><i class=\"fa fa-file-o text-green\"></i> Olade Contract\n                                Type</a></li> \n                        <li><a href=\"companies\"><i class=\"fa fa-bank text-aqua\"></i> Vendors</a></li> \n                        <li><a href=\"payrollmgrs\"><i class=\"fa fa-money text-blue\"></i> Payroll Mgrs.</a></li> \n                        <li><a href=\"zoomaccount\"><i class=\"fa fa-desktop text-orange\"></i> Zoom Setup</a></li></ul></li> \n\n                <li class=\"treeview\"><a href=\"", '/', "\"><i class=\"fa fa-key\"></i>  <span>Role Management</span> \n                        <span class=\"pull-right-container\"><i class=\"fa fa-angle-left pull-right\"></i></span></a> \n                    <ul class=\"treeview-menu\"><li><a href=\"roles\"><i class=\"fa fa-wrench text-aqua\"></i> Assign Roles</a></li> \n                        <li><a href=\"docusignsigners\"><i class=\"fa fa-edit text-aqua\"></i> DocuSign Signers</a></li></ul></li> \n                <li><a href=\"../utility/logout\"><i class=\"fa fa-power-off\"></i> \n                        <span>Sign Out</span></a></li></ul></section></aside> \n    \n    <div class=\"content-wrapper\" style=\"min-height: 531.141px;\"><section class=\"content-header\"><h1>Dashboard\n                <small>Version 1.0</small></h1> \n            <ol class=\"breadcrumb\"><li><a href=\"./\"><i class=\"fa fa-dashboard\"></i> Home</a></li> \n                <li class=\"active\">Dashboard</li></ol></section> \n\n        \n        <section class=\"content\"></section></div> \n    \n\n    <footer class=\"main-footer\"><div class=\"pull-right hidden-xs\"><b>Version</b> 1.0</div> \n        <strong>Copyright \xA9 2021 <a href=\"https://oladeconsulting.com\" target=\"_blank\">Olade Consulting</a></strong> All rights reserved.</footer> \n    \n    <aside class=\"control-sidebar control-sidebar-dark\"><ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\"><li><a href=\"control-sidebar-home-tab\" data-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li> \n            <li><a href=\"control-sidebar-settings-tab\" data-toggle=\"tab\"><i class=\"fa fa-gears\"></i></a></li></ul> \n        \n        <div class=\"tab-content\"><div class=\"tab-pane\" id=\"control-sidebar-home-tab\"><h3 class=\"control-sidebar-heading\">Recent Activity</h3> \n                <ul class=\"control-sidebar-menu\"><li><a href=\"", '/', "\"><i class=\"menu-icon fa fa-birthday-cake bg-red\"></i> \n\n                            <div class=\"menu-info\"><h4 class=\"control-sidebar-subheading\">Langdon&#39;s Birthday</h4> \n\n                                <p>Will be 23 on April 24th</p></div></a></li> \n                    <li><a href=\"", '/', "\"><i class=\"menu-icon fa fa-user bg-yellow\"></i> \n\n                            <div class=\"menu-info\"><h4 class=\"control-sidebar-subheading\">Frodo Updated His Profile</h4> \n\n                                <p>New phone +1(800)555-1234</p></div></a></li> \n                    <li><a href=\"", '/', "\"><i class=\"menu-icon fa fa-envelope-o bg-light-blue\"></i> \n\n                            <div class=\"menu-info\"><h4 class=\"control-sidebar-subheading\">Nora Joined Mailing List</h4> \n\n                                <p>nora@example.com</p></div></a></li> \n                    <li><a href=\"", '/', "\"><i class=\"menu-icon fa fa-file-code-o bg-green\"></i> \n\n                            <div class=\"menu-info\"><h4 class=\"control-sidebar-subheading\">Cron Job 254 Executed</h4> \n\n                                <p>Execution time 5 seconds</p></div></a></li></ul> \n                \n\n                <h3 class=\"control-sidebar-heading\">Tasks Progress</h3> \n                <ul class=\"control-sidebar-menu\"><li><a href=\"", '/', "\"><h4 class=\"control-sidebar-subheading\">Custom Template Design\n                                <span class=\"label label-danger pull-right\">70%</span></h4> \n\n                            <div class=\"progress progress-xxs\"><div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div></div></a></li> \n                    <li><a href=\"", '/', "\"><h4 class=\"control-sidebar-subheading\">Update Resume\n                                <span class=\"label label-success pull-right\">95%</span></h4> \n\n                            <div class=\"progress progress-xxs\"><div class=\"progress-bar progress-bar-success\" style=\"width: 95%\"></div></div></a></li> \n                    <li><a href=\"", '/', "\"><h4 class=\"control-sidebar-subheading\">Laravel Integration\n                                <span class=\"label label-warning pull-right\">50%</span></h4> \n\n                            <div class=\"progress progress-xxs\"><div class=\"progress-bar progress-bar-warning\" style=\"width: 50%\"></div></div></a></li> \n                    <li><a href=\"", '/', "\"><h4 class=\"control-sidebar-subheading\">Back End Framework\n                                <span class=\"label label-primary pull-right\">68%</span></h4> \n\n                            <div class=\"progress progress-xxs\"><div class=\"progress-bar progress-bar-primary\" style=\"width: 68%\"></div></div></a></li></ul></div> \n            \n\n            \n            <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\"><form method=\"post\"><h3 class=\"control-sidebar-heading\">General Settings</h3> \n\n                    <div class=\"form-group\"><label class=\"control-sidebar-subheading\">Report panel usage\n                            <input type=\"checkbox\" class=\"pull-right\" checked=\"\"/></label> \n\n                        <p>Some information about this general settings option</p></div> \n                    \n\n                    <div class=\"form-group\"><label class=\"control-sidebar-subheading\">Allow mail redirect\n                            <input type=\"checkbox\" class=\"pull-right\" checked=\"\"/></label> \n\n                        <p>Other sets of options are available</p></div> \n                    \n\n                    <div class=\"form-group\"><label class=\"control-sidebar-subheading\">Expose author name in posts\n                            <input type=\"checkbox\" class=\"pull-right\" checked=\"\"/></label> \n\n                        <p>Allow the user to show his name in blog posts</p></div> \n                    \n\n                    <h3 class=\"control-sidebar-heading\">Chat Settings</h3> \n\n                    <div class=\"form-group\"><label class=\"control-sidebar-subheading\">Show me as online\n                            <input type=\"checkbox\" class=\"pull-right\" checked=\"\"/></label></div> \n                    \n\n                    <div class=\"form-group\"><label class=\"control-sidebar-subheading\">Turn off notifications\n                            <input type=\"checkbox\" class=\"pull-right\"/></label></div> \n                    \n\n                    <div class=\"form-group\"><label class=\"control-sidebar-subheading\">Delete chat history\n                            <a href=\"", '/', "\" class=\"text-red pull-right\"><i class=\"fa fa-trash-o\"></i></a></label></div></form></div></div></aside> \n    \n    \n    <div class=\"control-sidebar-bg\"></div>");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div27, "class", "wrapper");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div27, "height", "auto");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div27, "min-height", "100%");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div27, anchor);
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div27);
    }
  };
}

var c = 90;

var Test = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Test, _SvelteComponent);

  var _super = _createSuper(Test);

  function Test(options) {
    var _this;

    _classCallCheck(this, Test);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {});
    return _this;
  }

  return _createClass(Test);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Test);

/***/ }),

/***/ "./resources/js/Pages/User/UserList.svelte":
/*!*************************************************!*\
  !*** ./resources/js/Pages/User/UserList.svelte ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "layout": () => (/* binding */ layout)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _Components_UserListComponent_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/UserListComponent.svelte */ "./resources/js/Pages/Components/UserListComponent.svelte");
/* harmony import */ var _Dashboard_Layout_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Dashboard/Layout.svelte */ "./resources/js/Pages/Dashboard/Layout.svelte");
/* harmony import */ var svelte_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! svelte/store */ "./node_modules/svelte/store/index.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* resources/js/Pages/User/UserList.svelte generated by Svelte v3.47.0 */





function create_fragment(ctx) {
  var userlistcomponent;
  var current;
  userlistcomponent = new _Components_UserListComponent_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({
    props: {
      users:
      /*users*/
      ctx[1],
      invite_candidate_route:
      /*invite_candidate_route*/
      ctx[2],
      reinvite_candidate_route:
      /*reinvite_candidate_route*/
      ctx[3],
      message:
      /*message*/
      ctx[0],
      error:
      /*error*/
      ctx[4],
      label: "All Candidates"
    }
  });
  userlistcomponent.$on("clearMessage",
  /*clearMessage*/
  ctx[5]);
  return {
    c: function c() {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(userlistcomponent.$$.fragment);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(userlistcomponent, target, anchor);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var userlistcomponent_changes = {};
      if (dirty &
      /*users*/
      2) userlistcomponent_changes.users =
      /*users*/
      ctx[1];
      if (dirty &
      /*invite_candidate_route*/
      4) userlistcomponent_changes.invite_candidate_route =
      /*invite_candidate_route*/
      ctx[2];
      if (dirty &
      /*reinvite_candidate_route*/
      8) userlistcomponent_changes.reinvite_candidate_route =
      /*reinvite_candidate_route*/
      ctx[3];
      if (dirty &
      /*message*/
      1) userlistcomponent_changes.message =
      /*message*/
      ctx[0];
      if (dirty &
      /*error*/
      16) userlistcomponent_changes.error =
      /*error*/
      ctx[4];
      userlistcomponent.$set(userlistcomponent_changes);
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(userlistcomponent.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(userlistcomponent.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(userlistcomponent, detaching);
    }
  };
}

var layout = _Dashboard_Layout_svelte__WEBPACK_IMPORTED_MODULE_2__["default"];

function instance($$self, $$props, $$invalidate) {
  var users = $$props.users;
  var invite_candidate_route = $$props.invite_candidate_route;
  var reinvite_candidate_route = $$props.reinvite_candidate_route;
  var message = $$props.message;
  var error = $$props.error; // let msg = writable(message);

  function clearMessage() {
    $$invalidate(0, message = '');
  }

  $$self.$$set = function ($$props) {
    if ('users' in $$props) $$invalidate(1, users = $$props.users);
    if ('invite_candidate_route' in $$props) $$invalidate(2, invite_candidate_route = $$props.invite_candidate_route);
    if ('reinvite_candidate_route' in $$props) $$invalidate(3, reinvite_candidate_route = $$props.reinvite_candidate_route);
    if ('message' in $$props) $$invalidate(0, message = $$props.message);
    if ('error' in $$props) $$invalidate(4, error = $$props.error);
  };

  return [message, users, invite_candidate_route, reinvite_candidate_route, error, clearMessage];
}

var UserList = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(UserList, _SvelteComponent);

  var _super = _createSuper(UserList);

  function UserList(options) {
    var _this;

    _classCallCheck(this, UserList);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
      users: 1,
      invite_candidate_route: 2,
      reinvite_candidate_route: 3,
      message: 0,
      error: 4
    });
    return _this;
  }

  return _createClass(UserList);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserList);


/***/ }),

/***/ "./resources/js/components/Editor.svelte":
/*!***********************************************!*\
  !*** ./resources/js/components/Editor.svelte ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* resources/js/components/Editor.svelte generated by Svelte v3.47.0 */



function create_fragment(ctx) {
  var textarea;
  var t0;
  var t1_value =
  /*htmlContent*/
  ctx[2].length + "";
  var t1;
  return {
    c: function c() {
      textarea = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("textarea");
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("\nLength: ");
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t1_value);
      textarea.value =
      /*data*/
      ctx[0];
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, textarea, anchor);
      /*textarea_binding*/

      ctx[3](textarea);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t0, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t1, anchor);
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*data*/
      1) {
        textarea.value =
        /*data*/
        ctx[0];
      }

      if (dirty &
      /*htmlContent*/
      4 && t1_value !== (t1_value =
      /*htmlContent*/
      ctx[2].length + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t1, t1_value);
    },
    i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(textarea);
      /*textarea_binding*/

      ctx[3](null);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t0);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t1);
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var ref = null;
  var data = $$props.data;
  var htmlContent = '';
  var editor = null;
  var dispatch = (0,svelte__WEBPACK_IMPORTED_MODULE_1__.createEventDispatcher)(); // export let onChange;

  (0,svelte__WEBPACK_IMPORTED_MODULE_1__.onMount)(function () {
    editor = CKEDITOR.replace(ref);
    editor.on('change', function (evt) {
      console.log('content chanaged...');
      $$invalidate(2, htmlContent = evt.editor.getData());
      dispatch("textChange", htmlContent);
    });
  });
  (0,svelte__WEBPACK_IMPORTED_MODULE_1__.onDestroy)(function () {
    editor.destroy();
  }); // alert('removed...');

  function textarea_binding($$value) {
    svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      ref = $$value;
      $$invalidate(1, ref);
    });
  }

  $$self.$$set = function ($$props) {
    if ('data' in $$props) $$invalidate(0, data = $$props.data);
  };

  return [data, ref, htmlContent, textarea_binding];
}

var Editor = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Editor, _SvelteComponent);

  var _super = _createSuper(Editor);

  function Editor(options) {
    var _this;

    _classCallCheck(this, Editor);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
      data: 0
    });
    return _this;
  }

  return _createClass(Editor);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Editor);

/***/ }),

/***/ "./resources/js/components/Modal.svelte":
/*!**********************************************!*\
  !*** ./resources/js/components/Modal.svelte ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* resources/js/components/Modal.svelte generated by Svelte v3.47.0 */



var get_storeButton_slot_changes = function get_storeButton_slot_changes(dirty) {
  return {};
};

var get_storeButton_slot_context = function get_storeButton_slot_context(ctx) {
  return {};
};

var get_content_slot_changes = function get_content_slot_changes(dirty) {
  return {};
};

var get_content_slot_context = function get_content_slot_context(ctx) {
  return {};
};

var get_title_slot_changes = function get_title_slot_changes(dirty) {
  return {};
};

var get_title_slot_context = function get_title_slot_context(ctx) {
  return {};
};

function create_fragment(ctx) {
  var div6;
  var div5;
  var div4;
  var div0;
  var button0;
  var t1;
  var h4;
  var t2;
  var form;
  var div2;
  var div1;
  var t3;
  var div3;
  var button1;
  var t5;
  var current;
  var mounted;
  var dispose;
  var title_slot_template =
  /*#slots*/
  ctx[4].title;
  var title_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(title_slot_template, ctx,
  /*$$scope*/
  ctx[3], get_title_slot_context);
  var content_slot_template =
  /*#slots*/
  ctx[4].content;
  var content_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(content_slot_template, ctx,
  /*$$scope*/
  ctx[3], get_content_slot_context);
  var storeButton_slot_template =
  /*#slots*/
  ctx[4].storeButton;
  var storeButton_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(storeButton_slot_template, ctx,
  /*$$scope*/
  ctx[3], get_storeButton_slot_context);
  return {
    c: function c() {
      div6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      button0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
      button0.innerHTML = "<span aria-hidden=\"true\">\xD7</span>";
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      h4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("h4");
      if (title_slot) title_slot.c();
      t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      form = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("form");
      div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      if (content_slot) content_slot.c();
      t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      button1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
      button1.textContent = "Close";
      t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      if (storeButton_slot) storeButton_slot.c();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button0, "type", "button");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button0, "class", "close");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button0, "data-dismiss", "modal");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button0, "aria-label", "Close");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(h4, "class", "modal-title");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "modal-header");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "row");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "modal-body");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button1, "type", "button");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button1, "class", "btn btn-default pull-left");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button1, "data-dismiss", "modal");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "modal-footer");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(form, "class", "form-horizontal");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(form, "method", "post");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "class", "modal-content");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div5, "class", "modal-dialog");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div6, "class", "modal fade");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div6, "id",
      /*id*/
      ctx[0]);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div6, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, div5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, div4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, div0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, button0);
      /*button0_binding*/

      ctx[5](button0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, h4);

      if (title_slot) {
        title_slot.m(h4, null);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, t2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, form);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form, div2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);

      if (content_slot) {
        content_slot.m(div1, null);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form, t3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(form, div3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, button1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, t5);

      if (storeButton_slot) {
        storeButton_slot.m(div3, null);
      }

      current = true;

      if (!mounted) {
        dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(form, "submit", (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.prevent_default)(
        /*submit_handler*/
        ctx[6]));
        mounted = true;
      }
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (title_slot) {
        if (title_slot.p && (!current || dirty &
        /*$$scope*/
        8)) {
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(title_slot, title_slot_template, ctx,
          /*$$scope*/
          ctx[3], !current ? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(
          /*$$scope*/
          ctx[3]) : (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(title_slot_template,
          /*$$scope*/
          ctx[3], dirty, get_title_slot_changes), get_title_slot_context);
        }
      }

      if (content_slot) {
        if (content_slot.p && (!current || dirty &
        /*$$scope*/
        8)) {
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(content_slot, content_slot_template, ctx,
          /*$$scope*/
          ctx[3], !current ? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(
          /*$$scope*/
          ctx[3]) : (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(content_slot_template,
          /*$$scope*/
          ctx[3], dirty, get_content_slot_changes), get_content_slot_context);
        }
      }

      if (storeButton_slot) {
        if (storeButton_slot.p && (!current || dirty &
        /*$$scope*/
        8)) {
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(storeButton_slot, storeButton_slot_template, ctx,
          /*$$scope*/
          ctx[3], !current ? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(
          /*$$scope*/
          ctx[3]) : (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(storeButton_slot_template,
          /*$$scope*/
          ctx[3], dirty, get_storeButton_slot_changes), get_storeButton_slot_context);
        }
      }

      if (!current || dirty &
      /*id*/
      1) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div6, "id",
        /*id*/
        ctx[0]);
      }
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(title_slot, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(content_slot, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(storeButton_slot, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(title_slot, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(content_slot, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(storeButton_slot, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div6);
      /*button0_binding*/

      ctx[5](null);
      if (title_slot) title_slot.d(detaching);
      if (content_slot) content_slot.d(detaching);
      if (storeButton_slot) storeButton_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  var id = $$props.id; // let closeModal = null;

  var dispatch = (0,svelte__WEBPACK_IMPORTED_MODULE_1__.createEventDispatcher)();
  var ref;
  var getRef;
  (0,svelte__WEBPACK_IMPORTED_MODULE_1__.onMount)(function () {
    if (getRef) getRef(ref); // console.log(ref,'ref');

    dispatch("setRef", ref);
  });

  function button0_binding($$value) {
    svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      ref = $$value;
      $$invalidate(1, ref);
    });
  }

  var submit_handler = function submit_handler(e) {
    return dispatch("submit", e);
  };

  $$self.$$set = function ($$props) {
    if ('id' in $$props) $$invalidate(0, id = $$props.id);
    if ('$$scope' in $$props) $$invalidate(3, $$scope = $$props.$$scope);
  };

  return [id, ref, dispatch, $$scope, slots, button0_binding, submit_handler];
}

var Modal = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Modal, _SvelteComponent);

  var _super = _createSuper(Modal);

  function Modal(options) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
      id: 0
    });
    return _this;
  }

  return _createClass(Modal);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "./resources/js/components/Page.svelte":
/*!*********************************************!*\
  !*** ./resources/js/components/Page.svelte ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* resources/js/components/Page.svelte generated by Svelte v3.47.0 */


var get_content_slot_changes = function get_content_slot_changes(dirty) {
  return {};
};

var get_content_slot_context = function get_content_slot_context(ctx) {
  return {};
};

var get_createButton2_slot_changes = function get_createButton2_slot_changes(dirty) {
  return {};
};

var get_createButton2_slot_context = function get_createButton2_slot_context(ctx) {
  return {};
};

var get_createButton_slot_changes = function get_createButton_slot_changes(dirty) {
  return {};
};

var get_createButton_slot_context = function get_createButton_slot_context(ctx) {
  return {};
};

var get_title_slot_changes_1 = function get_title_slot_changes_1(dirty) {
  return {};
};

var get_title_slot_context_1 = function get_title_slot_context_1(ctx) {
  return {};
};

var get_title_slot_changes = function get_title_slot_changes(dirty) {
  return {};
};

var get_title_slot_context = function get_title_slot_context(ctx) {
  return {};
};

function create_fragment(ctx) {
  var section0;
  var h1;
  var t0;
  var ol;
  var li0;
  var t2;
  var li1;
  var t3;
  var section1;
  var div10;
  var div9;
  var div8;
  var div2;
  var div0;
  var t4;
  var t5;
  var div1;
  var t7;
  var div6;
  var div5;
  var div4;
  var div3;
  var t8;
  var div7;
  var t9;
  var current;
  var title_slot_template =
  /*#slots*/
  ctx[1].title;
  var title_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(title_slot_template, ctx,
  /*$$scope*/
  ctx[0], get_title_slot_context);
  var title_slot_template_1 =
  /*#slots*/
  ctx[1].title;
  var title_slot_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(title_slot_template_1, ctx,
  /*$$scope*/
  ctx[0], get_title_slot_context_1);
  var createButton_slot_template =
  /*#slots*/
  ctx[1].createButton;
  var createButton_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(createButton_slot_template, ctx,
  /*$$scope*/
  ctx[0], get_createButton_slot_context);
  var createButton2_slot_template =
  /*#slots*/
  ctx[1].createButton2;
  var createButton2_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(createButton2_slot_template, ctx,
  /*$$scope*/
  ctx[0], get_createButton2_slot_context);
  var content_slot_template =
  /*#slots*/
  ctx[1].content;
  var content_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(content_slot_template, ctx,
  /*$$scope*/
  ctx[0], get_content_slot_context);
  var default_slot_template =
  /*#slots*/
  ctx[1]["default"];
  var default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx,
  /*$$scope*/
  ctx[0], null);
  return {
    c: function c() {
      section0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("section");
      h1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("h1");
      if (title_slot) title_slot.c();
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      ol = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("ol");
      li0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      li0.innerHTML = "<a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a>";
      t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      li1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      if (title_slot_1) title_slot_1.c();
      t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      section1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("section");
      div10 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      if (createButton_slot) createButton_slot.c();
      t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      if (createButton2_slot) createButton2_slot.c();
      t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div1.textContent = " ";
      t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      if (content_slot) content_slot.c();
      t8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      t9 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      if (default_slot) default_slot.c();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li1, "class", "active");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(ol, "class", "breadcrumb");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(section0, "class", "content-header");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "box-tools pull-right");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div1, "clear", "both");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "box-header with-border");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "row");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "id", "example1_wrapper");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "class", "");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div5, "class", "table-responsive");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div6, "class", "box-body");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div7, "class", "box-footer clearfix");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div8, "class", "box box-info");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div9, "class", "col-md-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div10, "class", "row");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(section1, "class", "content");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, section0, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(section0, h1);

      if (title_slot) {
        title_slot.m(h1, null);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(section0, t0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(section0, ol);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ol, li0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ol, t2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(ol, li1);

      if (title_slot_1) {
        title_slot_1.m(li1, null);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t3, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, section1, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(section1, div10);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div10, div9);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div9, div8);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, div2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div0);

      if (createButton_slot) {
        createButton_slot.m(div0, null);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t4);

      if (createButton2_slot) {
        createButton2_slot.m(div0, null);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, t7);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, div6);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div6, div5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, div4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div4, div3);

      if (content_slot) {
        content_slot.m(div3, null);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, t8);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div8, div7);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(section1, t9);

      if (default_slot) {
        default_slot.m(section1, null);
      }

      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (title_slot) {
        if (title_slot.p && (!current || dirty &
        /*$$scope*/
        1)) {
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(title_slot, title_slot_template, ctx,
          /*$$scope*/
          ctx[0], !current ? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(
          /*$$scope*/
          ctx[0]) : (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(title_slot_template,
          /*$$scope*/
          ctx[0], dirty, get_title_slot_changes), get_title_slot_context);
        }
      }

      if (title_slot_1) {
        if (title_slot_1.p && (!current || dirty &
        /*$$scope*/
        1)) {
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(title_slot_1, title_slot_template_1, ctx,
          /*$$scope*/
          ctx[0], !current ? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(
          /*$$scope*/
          ctx[0]) : (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(title_slot_template_1,
          /*$$scope*/
          ctx[0], dirty, get_title_slot_changes_1), get_title_slot_context_1);
        }
      }

      if (createButton_slot) {
        if (createButton_slot.p && (!current || dirty &
        /*$$scope*/
        1)) {
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(createButton_slot, createButton_slot_template, ctx,
          /*$$scope*/
          ctx[0], !current ? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(
          /*$$scope*/
          ctx[0]) : (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(createButton_slot_template,
          /*$$scope*/
          ctx[0], dirty, get_createButton_slot_changes), get_createButton_slot_context);
        }
      }

      if (createButton2_slot) {
        if (createButton2_slot.p && (!current || dirty &
        /*$$scope*/
        1)) {
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(createButton2_slot, createButton2_slot_template, ctx,
          /*$$scope*/
          ctx[0], !current ? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(
          /*$$scope*/
          ctx[0]) : (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(createButton2_slot_template,
          /*$$scope*/
          ctx[0], dirty, get_createButton2_slot_changes), get_createButton2_slot_context);
        }
      }

      if (content_slot) {
        if (content_slot.p && (!current || dirty &
        /*$$scope*/
        1)) {
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(content_slot, content_slot_template, ctx,
          /*$$scope*/
          ctx[0], !current ? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(
          /*$$scope*/
          ctx[0]) : (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(content_slot_template,
          /*$$scope*/
          ctx[0], dirty, get_content_slot_changes), get_content_slot_context);
        }
      }

      if (default_slot) {
        if (default_slot.p && (!current || dirty &
        /*$$scope*/
        1)) {
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[0], !current ? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(
          /*$$scope*/
          ctx[0]) : (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(default_slot_template,
          /*$$scope*/
          ctx[0], dirty, null), null);
        }
      }
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(title_slot, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(title_slot_1, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(createButton_slot, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(createButton2_slot, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(content_slot, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(default_slot, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(title_slot, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(title_slot_1, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(createButton_slot, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(createButton2_slot, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(content_slot, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(default_slot, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(section0);
      if (title_slot) title_slot.d(detaching);
      if (title_slot_1) title_slot_1.d(detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t3);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(section1);
      if (createButton_slot) createButton_slot.d(detaching);
      if (createButton2_slot) createButton2_slot.d(detaching);
      if (content_slot) content_slot.d(detaching);
      if (default_slot) default_slot.d(detaching);
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;

  $$self.$$set = function ($$props) {
    if ('$$scope' in $$props) $$invalidate(0, $$scope = $$props.$$scope);
  };

  return [$$scope, slots];
}

var Page = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Page, _SvelteComponent);

  var _super = _createSuper(Page);

  function Page(options) {
    var _this;

    _classCallCheck(this, Page);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {});
    return _this;
  }

  return _createClass(Page);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

/***/ }),

/***/ "./resources/js/components/Pagination.svelte":
/*!***************************************************!*\
  !*** ./resources/js/components/Pagination.svelte ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-svelte */ "./node_modules/@inertiajs/inertia-svelte/src/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* resources/js/components/Pagination.svelte generated by Svelte v3.47.0 */



function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  child_ctx[3] = i;
  return child_ctx;
} // (29:20) {:else}


function create_else_block(ctx) {
  var t_value =
  /*page*/
  ctx[1].label + "";
  var t;
  return {
    c: function c() {
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*pages*/
      1 && t_value !== (t_value =
      /*page*/
      ctx[1].label + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, t_value);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
    }
  };
} // (27:56) 


function create_if_block_1(ctx) {
  var t;
  return {
    c: function c() {
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("» Next");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
    }
  };
} // (25:20) {#if index == 0}


function create_if_block(ctx) {
  var t;
  return {
    c: function c() {
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("« Previous");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
    }
  };
} // (24:16) <Link href={page.url? page.url : ''}>


function create_default_slot(ctx) {
  var if_block_anchor;

  function select_block_type(ctx, dirty) {
    if (
    /*index*/
    ctx[3] == 0) return create_if_block;
    if (
    /*pages*/
    ctx[0].length - 1 ==
    /*index*/
    ctx[3]) return create_if_block_1;
    return create_else_block;
  }

  var current_block_type = select_block_type(ctx, -1);
  var if_block = current_block_type(ctx);
  return {
    c: function c() {
      if_block.c();
      if_block_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
    },
    m: function m(target, anchor) {
      if_block.m(target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, if_block_anchor, anchor);
    },
    p: function p(ctx, dirty) {
      if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block) {
        if_block.p(ctx, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx);

        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    d: function d(detaching) {
      if_block.d(detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(if_block_anchor);
    }
  };
} // (16:8) {#each pages as page, index}


function create_each_block(ctx) {
  var li;
  var link;
  var t;
  var li_class_value;
  var current;
  link = new _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_1__.Link({
    props: {
      href:
      /*page*/
      ctx[1].url ?
      /*page*/
      ctx[1].url : '',
      $$slots: {
        "default": [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  return {
    c: function c() {
      li = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("li");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(link.$$.fragment);
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li, "class", li_class_value = (
      /*index*/
      ctx[3] == 0 ? " previous " : "") + "paginate_button" + (
      /*page*/
      ctx[1].active ? " active " : "") + (
      /*pages*/
      ctx[0].length - 1 ==
      /*index*/
      ctx[3] ? " next " : ""));
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, li, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(link, li, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(li, t);
      current = true;
    },
    p: function p(ctx, dirty) {
      var link_changes = {};
      if (dirty &
      /*pages*/
      1) link_changes.href =
      /*page*/
      ctx[1].url ?
      /*page*/
      ctx[1].url : '';

      if (dirty &
      /*$$scope, pages*/
      17) {
        link_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      link.$set(link_changes);

      if (!current || dirty &
      /*pages*/
      1 && li_class_value !== (li_class_value = (
      /*index*/
      ctx[3] == 0 ? " previous " : "") + "paginate_button" + (
      /*page*/
      ctx[1].active ? " active " : "") + (
      /*pages*/
      ctx[0].length - 1 ==
      /*index*/
      ctx[3] ? " next " : ""))) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(li, "class", li_class_value);
      }
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(link.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(link.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(li);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(link);
    }
  };
}

function create_fragment(ctx) {
  var div;
  var ul;
  var current;
  var each_value =
  /*pages*/
  ctx[0];
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var out = function out(i) {
    return (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  return {
    c: function c() {
      div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      ul = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("ul");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(ul, "class", "pagination");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "dataTables_paginate paging_simple_numbers");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "id", "DataTables_Table_0_paginate");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, ul);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].m(ul, null);
      }

      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*pages*/
      1) {
        each_value =
        /*pages*/
        ctx[0];

        var _i3;

        for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i3);

          if (each_blocks[_i3]) {
            each_blocks[_i3].p(child_ctx, dirty);

            (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[_i3], 1);
          } else {
            each_blocks[_i3] = create_each_block(child_ctx);

            each_blocks[_i3].c();

            (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[_i3], 1);

            each_blocks[_i3].m(ul, null);
          }
        }

        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

        for (_i3 = each_value.length; _i3 < each_blocks.length; _i3 += 1) {
          out(_i3);
        }

        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
      }
    },
    i: function i(local) {
      if (current) return;

      for (var _i4 = 0; _i4 < each_value.length; _i4 += 1) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[_i4]);
      }

      current = true;
    },
    o: function o(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(each_blocks[_i5]);
      }

      current = false;
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var pages = $$props.pages;

  $$self.$$set = function ($$props) {
    if ('pages' in $$props) $$invalidate(0, pages = $$props.pages);
  };

  return [pages];
}

var Pagination = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Pagination, _SvelteComponent);

  var _super = _createSuper(Pagination);

  function Pagination(options) {
    var _this;

    _classCallCheck(this, Pagination);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
      pages: 0
    });
    return _this;
  }

  return _createClass(Pagination);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-svelte */ "./node_modules/@inertiajs/inertia-svelte/src/index.js");
/* harmony import */ var _inertiajs_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/progress */ "./node_modules/@inertiajs/progress/dist/index.js");
// /**
//  * First we will load all of this project's JavaScript dependencies which
//  * includes Svelte and other libraries. It is a great starting point when
//  * building robust, powerful web applications using Svelte and Laravel.
//  */
// require('./bootstrap');
// import App from "./components/App.svelte";
// const app = new App({
//   target: document.body
// });
// window.app = app;
// export default app;


_inertiajs_progress__WEBPACK_IMPORTED_MODULE_1__.InertiaProgress.init();
(0,_inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_0__.createInertiaApp)({
  resolve: function resolve(name) {
    return __webpack_require__("./resources/js/Pages sync recursive ^\\.\\/.*\\.svelte$")("./".concat(name, ".svelte"));
  },
  setup: function setup(_ref) {
    var el = _ref.el,
        App = _ref.App,
        props = _ref.props;
    new App({
      target: el,
      props: props
    });
  }
});

/***/ }),

/***/ "./resources/js/components/MessageStore.js":
/*!*************************************************!*\
  !*** ./resources/js/components/MessageStore.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/store */ "./node_modules/svelte/store/index.mjs");

var MessageStore = (0,svelte_store__WEBPACK_IMPORTED_MODULE_0__.writable)({
  message: '',
  error: false
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessageStore);

/***/ }),

/***/ "./node_modules/call-bind/callBound.js":
/*!*********************************************!*\
  !*** ./node_modules/call-bind/callBound.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");

var callBind = __webpack_require__(/*! ./ */ "./node_modules/call-bind/index.js");

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ "./node_modules/call-bind/index.js":
/*!*****************************************!*\
  !*** ./node_modules/call-bind/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),

/***/ "./node_modules/deepmerge/dist/cjs.js":
/*!********************************************!*\
  !*** ./node_modules/deepmerge/dist/cjs.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/get-intrinsic/index.js":
/*!*********************************************!*\
  !*** ./node_modules/get-intrinsic/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var hasOwn = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),

/***/ "./node_modules/has-symbols/index.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __webpack_require__(/*! ./shams */ "./node_modules/has-symbols/shams.js");

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};


/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/lodash.isequal/index.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash.isequal/index.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;


/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/nprogress/nprogress.js":
/*!*********************************************!*\
  !*** ./node_modules/nprogress/nprogress.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});



/***/ }),

/***/ "./node_modules/object-inspect/index.js":
/*!**********************************************!*\
  !*** ./node_modules/object-inspect/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol')
    ? Symbol.toStringTag
    : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;

var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
    [].__proto__ === Array.prototype // eslint-disable-line no-proto
        ? function (O) {
            return O.__proto__; // eslint-disable-line no-proto
        }
        : null
);

function addNumericSeparator(num, str) {
    if (
        num === Infinity
        || num === -Infinity
        || num !== num
        || (num && num > -1000 && num < 1000)
        || $test.call(/e/, str)
    ) {
        return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === 'number') {
        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return $replace.call(str, sepRegex, '$&_');
}

var inspectCustom = (__webpack_require__(/*! ./util.inspect */ "?2128").custom);
var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
        throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    }

    if (
        has(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === 'bigint') {
        var bigIntStr = String(obj) + 'n';
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function') {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + $join.call(xs, ', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if ('cause' in obj && !isEnumerable.call(obj, 'cause')) {
            return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
        }
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {
            return obj[inspectSymbol]();
        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function (value, key) {
            mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function (value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
        if (ys.length === 0) { return tag + '{}'; }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + $join.call(ys, ', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return $replace.call(String(s), /"/g, '&quot;');
}

function isArray(obj) { return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isDate(obj) { return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isError(obj) { return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isString(obj) { return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isNumber(obj) { return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }

// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === 'object' && obj instanceof Symbol;
    }
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}

function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), ' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
            symMap['$' + syms[k]] = syms[k];
        }
    }

    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
            // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        } else if ($test.call(/[^\w$]/, key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/qs/lib/formats.js":
/*!****************************************!*\
  !*** ./node_modules/qs/lib/formats.js ***!
  \****************************************/
/***/ ((module) => {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};


/***/ }),

/***/ "./node_modules/qs/lib/index.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ "./node_modules/qs/lib/stringify.js");
var parse = __webpack_require__(/*! ./parse */ "./node_modules/qs/lib/parse.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ "./node_modules/qs/lib/parse.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/parse.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== '__proto__') {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    if (options.allowSparse === true) {
        return obj;
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "./node_modules/qs/lib/stringify.js":
/*!******************************************!*\
  !*** ./node_modules/qs/lib/stringify.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var getSideChannel = __webpack_require__(/*! side-channel */ "./node_modules/side-channel/index.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var split = String.prototype.split;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var sentinel = {};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    format,
    formatter,
    encodeValuesOnly,
    charset,
    sideChannel
) {
    var obj = object;

    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while ((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag) {
        // Where object last appeared in the ref tree
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== 'undefined') {
            if (pos === step) {
                throw new RangeError('Cyclic object value');
            } else {
                findFlag = true; // Break while
            }
        }
        if (typeof tmpSc.get(sentinel) === 'undefined') {
            step = 0;
        }
    }

    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            if (generateArrayPrefix === 'comma' && encodeValuesOnly) {
                var valuesArray = split.call(String(obj), ',');
                var valuesJoined = '';
                for (var i = 0; i < valuesArray.length; ++i) {
                    valuesJoined += (i === 0 ? '' : ',') + formatter(encoder(valuesArray[i], defaults.encoder, charset, 'value', format));
                }
                return [formatter(keyValue) + '=' + valuesJoined];
            }
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : void undefined }];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix
            : prefix + (allowDots ? '.' + key : '[' + key + ']');

        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset,
            valueSideChannel
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    var sideChannel = getSideChannel();
    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset,
            sideChannel
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "./node_modules/qs/lib/utils.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/utils.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
            || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        /* eslint operator-linebreak: [2, "before"] */
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/side-channel/index.js":
/*!********************************************!*\
  !*** ./node_modules/side-channel/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");
var callBound = __webpack_require__(/*! call-bind/callBound */ "./node_modules/call-bind/callBound.js");
var inspect = __webpack_require__(/*! object-inspect */ "./node_modules/object-inspect/index.js");

var $TypeError = GetIntrinsic('%TypeError%');
var $WeakMap = GetIntrinsic('%WeakMap%', true);
var $Map = GetIntrinsic('%Map%', true);

var $weakMapGet = callBound('WeakMap.prototype.get', true);
var $weakMapSet = callBound('WeakMap.prototype.set', true);
var $weakMapHas = callBound('WeakMap.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSet = callBound('Map.prototype.set', true);
var $mapHas = callBound('Map.prototype.has', true);

/*
 * This function traverses the list returning the node corresponding to the
 * given key.
 *
 * That node is also moved to the head of the list, so that if it's accessed
 * again we don't need to traverse the whole list. By doing so, all the recently
 * used nodes can be accessed relatively quickly.
 */
var listGetNode = function (list, key) { // eslint-disable-line consistent-return
	for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
		if (curr.key === key) {
			prev.next = curr.next;
			curr.next = list.next;
			list.next = curr; // eslint-disable-line no-param-reassign
			return curr;
		}
	}
};

var listGet = function (objects, key) {
	var node = listGetNode(objects, key);
	return node && node.value;
};
var listSet = function (objects, key, value) {
	var node = listGetNode(objects, key);
	if (node) {
		node.value = value;
	} else {
		// Prepend the new node to the beginning of the list
		objects.next = { // eslint-disable-line no-param-reassign
			key: key,
			next: objects.next,
			value: value
		};
	}
};
var listHas = function (objects, key) {
	return !!listGetNode(objects, key);
};

module.exports = function getSideChannel() {
	var $wm;
	var $m;
	var $o;
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		get: function (key) { // eslint-disable-line consistent-return
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapGet($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapGet($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listGet($o, key);
				}
			}
		},
		has: function (key) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapHas($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapHas($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listHas($o, key);
				}
			}
			return false;
		},
		set: function (key, value) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if (!$wm) {
					$wm = new $WeakMap();
				}
				$weakMapSet($wm, key, value);
			} else if ($Map) {
				if (!$m) {
					$m = new $Map();
				}
				$mapSet($m, key, value);
			} else {
				if (!$o) {
					/*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */
					$o = { key: {}, next: null };
				}
				listSet($o, key, value);
			}
		}
	};
	return channel;
};


/***/ }),

/***/ "./resources/js/Pages sync recursive ^\\.\\/.*\\.svelte$":
/*!***************************************************!*\
  !*** ./resources/js/Pages/ sync ^\.\/.*\.svelte$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Auth/CheckAuthComponent.svelte": "./resources/js/Pages/Auth/CheckAuthComponent.svelte",
	"./Auth/Login.svelte": "./resources/js/Pages/Auth/Login.svelte",
	"./Components/CrudLayoutComponent.svelte": "./resources/js/Pages/Components/CrudLayoutComponent.svelte",
	"./Components/MessageNotification.svelte": "./resources/js/Pages/Components/MessageNotification.svelte",
	"./Components/UserListComponent.svelte": "./resources/js/Pages/Components/UserListComponent.svelte",
	"./Dashboard/Dashboard.svelte": "./resources/js/Pages/Dashboard/Dashboard.svelte",
	"./Dashboard/Layout.svelte": "./resources/js/Pages/Dashboard/Layout.svelte",
	"./Profile/Profile.svelte": "./resources/js/Pages/Profile/Profile.svelte",
	"./Profile/ProfileComponent.svelte": "./resources/js/Pages/Profile/ProfileComponent.svelte",
	"./Settings/KnowledgeArea.svelte": "./resources/js/Pages/Settings/KnowledgeArea.svelte",
	"./Settings/OladeContractType.svelte": "./resources/js/Pages/Settings/OladeContractType.svelte",
	"./Settings/OladeContractTypeCreate.svelte": "./resources/js/Pages/Settings/OladeContractTypeCreate.svelte",
	"./Settings/OladeContractTypeEdit.svelte": "./resources/js/Pages/Settings/OladeContractTypeEdit.svelte",
	"./Settings/ProgramType.svelte": "./resources/js/Pages/Settings/ProgramType.svelte",
	"./Settings/Province.svelte": "./resources/js/Pages/Settings/Province.svelte",
	"./Settings/ProvinceTownCity.svelte": "./resources/js/Pages/Settings/ProvinceTownCity.svelte",
	"./Test.svelte": "./resources/js/Pages/Test.svelte",
	"./User/UserList.svelte": "./resources/js/Pages/User/UserList.svelte"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/Pages sync recursive ^\\.\\/.*\\.svelte$";

/***/ }),

/***/ "?2128":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./node_modules/svelte/index.mjs":
/*!***************************************!*\
  !*** ./node_modules/svelte/index.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvelteComponent": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.SvelteComponentDev),
/* harmony export */   "SvelteComponentTyped": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.SvelteComponentTyped),
/* harmony export */   "afterUpdate": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.afterUpdate),
/* harmony export */   "beforeUpdate": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.beforeUpdate),
/* harmony export */   "createEventDispatcher": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.createEventDispatcher),
/* harmony export */   "getAllContexts": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.getAllContexts),
/* harmony export */   "getContext": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.getContext),
/* harmony export */   "hasContext": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.hasContext),
/* harmony export */   "onDestroy": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.onDestroy),
/* harmony export */   "onMount": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.onMount),
/* harmony export */   "setContext": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.setContext),
/* harmony export */   "tick": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.tick)
/* harmony export */ });
/* harmony import */ var _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/index.mjs */ "./node_modules/svelte/internal/index.mjs");


/***/ }),

/***/ "./node_modules/svelte/internal/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/svelte/internal/index.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HtmlTag": () => (/* binding */ HtmlTag),
/* harmony export */   "HtmlTagHydration": () => (/* binding */ HtmlTagHydration),
/* harmony export */   "SvelteComponent": () => (/* binding */ SvelteComponent),
/* harmony export */   "SvelteComponentDev": () => (/* binding */ SvelteComponentDev),
/* harmony export */   "SvelteComponentTyped": () => (/* binding */ SvelteComponentTyped),
/* harmony export */   "SvelteElement": () => (/* binding */ SvelteElement),
/* harmony export */   "action_destroyer": () => (/* binding */ action_destroyer),
/* harmony export */   "add_attribute": () => (/* binding */ add_attribute),
/* harmony export */   "add_classes": () => (/* binding */ add_classes),
/* harmony export */   "add_flush_callback": () => (/* binding */ add_flush_callback),
/* harmony export */   "add_location": () => (/* binding */ add_location),
/* harmony export */   "add_render_callback": () => (/* binding */ add_render_callback),
/* harmony export */   "add_resize_listener": () => (/* binding */ add_resize_listener),
/* harmony export */   "add_styles": () => (/* binding */ add_styles),
/* harmony export */   "add_transform": () => (/* binding */ add_transform),
/* harmony export */   "afterUpdate": () => (/* binding */ afterUpdate),
/* harmony export */   "append": () => (/* binding */ append),
/* harmony export */   "append_dev": () => (/* binding */ append_dev),
/* harmony export */   "append_empty_stylesheet": () => (/* binding */ append_empty_stylesheet),
/* harmony export */   "append_hydration": () => (/* binding */ append_hydration),
/* harmony export */   "append_hydration_dev": () => (/* binding */ append_hydration_dev),
/* harmony export */   "append_styles": () => (/* binding */ append_styles),
/* harmony export */   "assign": () => (/* binding */ assign),
/* harmony export */   "attr": () => (/* binding */ attr),
/* harmony export */   "attr_dev": () => (/* binding */ attr_dev),
/* harmony export */   "attribute_to_object": () => (/* binding */ attribute_to_object),
/* harmony export */   "beforeUpdate": () => (/* binding */ beforeUpdate),
/* harmony export */   "bind": () => (/* binding */ bind),
/* harmony export */   "binding_callbacks": () => (/* binding */ binding_callbacks),
/* harmony export */   "blank_object": () => (/* binding */ blank_object),
/* harmony export */   "bubble": () => (/* binding */ bubble),
/* harmony export */   "check_outros": () => (/* binding */ check_outros),
/* harmony export */   "children": () => (/* binding */ children),
/* harmony export */   "claim_component": () => (/* binding */ claim_component),
/* harmony export */   "claim_element": () => (/* binding */ claim_element),
/* harmony export */   "claim_html_tag": () => (/* binding */ claim_html_tag),
/* harmony export */   "claim_space": () => (/* binding */ claim_space),
/* harmony export */   "claim_svg_element": () => (/* binding */ claim_svg_element),
/* harmony export */   "claim_text": () => (/* binding */ claim_text),
/* harmony export */   "clear_loops": () => (/* binding */ clear_loops),
/* harmony export */   "component_subscribe": () => (/* binding */ component_subscribe),
/* harmony export */   "compute_rest_props": () => (/* binding */ compute_rest_props),
/* harmony export */   "compute_slots": () => (/* binding */ compute_slots),
/* harmony export */   "createEventDispatcher": () => (/* binding */ createEventDispatcher),
/* harmony export */   "create_animation": () => (/* binding */ create_animation),
/* harmony export */   "create_bidirectional_transition": () => (/* binding */ create_bidirectional_transition),
/* harmony export */   "create_component": () => (/* binding */ create_component),
/* harmony export */   "create_in_transition": () => (/* binding */ create_in_transition),
/* harmony export */   "create_out_transition": () => (/* binding */ create_out_transition),
/* harmony export */   "create_slot": () => (/* binding */ create_slot),
/* harmony export */   "create_ssr_component": () => (/* binding */ create_ssr_component),
/* harmony export */   "current_component": () => (/* binding */ current_component),
/* harmony export */   "custom_event": () => (/* binding */ custom_event),
/* harmony export */   "dataset_dev": () => (/* binding */ dataset_dev),
/* harmony export */   "debug": () => (/* binding */ debug),
/* harmony export */   "destroy_block": () => (/* binding */ destroy_block),
/* harmony export */   "destroy_component": () => (/* binding */ destroy_component),
/* harmony export */   "destroy_each": () => (/* binding */ destroy_each),
/* harmony export */   "detach": () => (/* binding */ detach),
/* harmony export */   "detach_after_dev": () => (/* binding */ detach_after_dev),
/* harmony export */   "detach_before_dev": () => (/* binding */ detach_before_dev),
/* harmony export */   "detach_between_dev": () => (/* binding */ detach_between_dev),
/* harmony export */   "detach_dev": () => (/* binding */ detach_dev),
/* harmony export */   "dirty_components": () => (/* binding */ dirty_components),
/* harmony export */   "dispatch_dev": () => (/* binding */ dispatch_dev),
/* harmony export */   "each": () => (/* binding */ each),
/* harmony export */   "element": () => (/* binding */ element),
/* harmony export */   "element_is": () => (/* binding */ element_is),
/* harmony export */   "empty": () => (/* binding */ empty),
/* harmony export */   "end_hydrating": () => (/* binding */ end_hydrating),
/* harmony export */   "escape": () => (/* binding */ escape),
/* harmony export */   "escape_attribute_value": () => (/* binding */ escape_attribute_value),
/* harmony export */   "escape_object": () => (/* binding */ escape_object),
/* harmony export */   "escaped": () => (/* binding */ escaped),
/* harmony export */   "exclude_internal_props": () => (/* binding */ exclude_internal_props),
/* harmony export */   "fix_and_destroy_block": () => (/* binding */ fix_and_destroy_block),
/* harmony export */   "fix_and_outro_and_destroy_block": () => (/* binding */ fix_and_outro_and_destroy_block),
/* harmony export */   "fix_position": () => (/* binding */ fix_position),
/* harmony export */   "flush": () => (/* binding */ flush),
/* harmony export */   "getAllContexts": () => (/* binding */ getAllContexts),
/* harmony export */   "getContext": () => (/* binding */ getContext),
/* harmony export */   "get_all_dirty_from_scope": () => (/* binding */ get_all_dirty_from_scope),
/* harmony export */   "get_binding_group_value": () => (/* binding */ get_binding_group_value),
/* harmony export */   "get_current_component": () => (/* binding */ get_current_component),
/* harmony export */   "get_custom_elements_slots": () => (/* binding */ get_custom_elements_slots),
/* harmony export */   "get_root_for_style": () => (/* binding */ get_root_for_style),
/* harmony export */   "get_slot_changes": () => (/* binding */ get_slot_changes),
/* harmony export */   "get_spread_object": () => (/* binding */ get_spread_object),
/* harmony export */   "get_spread_update": () => (/* binding */ get_spread_update),
/* harmony export */   "get_store_value": () => (/* binding */ get_store_value),
/* harmony export */   "globals": () => (/* binding */ globals),
/* harmony export */   "group_outros": () => (/* binding */ group_outros),
/* harmony export */   "handle_promise": () => (/* binding */ handle_promise),
/* harmony export */   "hasContext": () => (/* binding */ hasContext),
/* harmony export */   "has_prop": () => (/* binding */ has_prop),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "insert": () => (/* binding */ insert),
/* harmony export */   "insert_dev": () => (/* binding */ insert_dev),
/* harmony export */   "insert_hydration": () => (/* binding */ insert_hydration),
/* harmony export */   "insert_hydration_dev": () => (/* binding */ insert_hydration_dev),
/* harmony export */   "intros": () => (/* binding */ intros),
/* harmony export */   "invalid_attribute_name_character": () => (/* binding */ invalid_attribute_name_character),
/* harmony export */   "is_client": () => (/* binding */ is_client),
/* harmony export */   "is_crossorigin": () => (/* binding */ is_crossorigin),
/* harmony export */   "is_empty": () => (/* binding */ is_empty),
/* harmony export */   "is_function": () => (/* binding */ is_function),
/* harmony export */   "is_promise": () => (/* binding */ is_promise),
/* harmony export */   "listen": () => (/* binding */ listen),
/* harmony export */   "listen_dev": () => (/* binding */ listen_dev),
/* harmony export */   "loop": () => (/* binding */ loop),
/* harmony export */   "loop_guard": () => (/* binding */ loop_guard),
/* harmony export */   "merge_ssr_styles": () => (/* binding */ merge_ssr_styles),
/* harmony export */   "missing_component": () => (/* binding */ missing_component),
/* harmony export */   "mount_component": () => (/* binding */ mount_component),
/* harmony export */   "noop": () => (/* binding */ noop),
/* harmony export */   "not_equal": () => (/* binding */ not_equal),
/* harmony export */   "now": () => (/* binding */ now),
/* harmony export */   "null_to_empty": () => (/* binding */ null_to_empty),
/* harmony export */   "object_without_properties": () => (/* binding */ object_without_properties),
/* harmony export */   "onDestroy": () => (/* binding */ onDestroy),
/* harmony export */   "onMount": () => (/* binding */ onMount),
/* harmony export */   "once": () => (/* binding */ once),
/* harmony export */   "outro_and_destroy_block": () => (/* binding */ outro_and_destroy_block),
/* harmony export */   "prevent_default": () => (/* binding */ prevent_default),
/* harmony export */   "prop_dev": () => (/* binding */ prop_dev),
/* harmony export */   "query_selector_all": () => (/* binding */ query_selector_all),
/* harmony export */   "raf": () => (/* binding */ raf),
/* harmony export */   "run": () => (/* binding */ run),
/* harmony export */   "run_all": () => (/* binding */ run_all),
/* harmony export */   "safe_not_equal": () => (/* binding */ safe_not_equal),
/* harmony export */   "schedule_update": () => (/* binding */ schedule_update),
/* harmony export */   "select_multiple_value": () => (/* binding */ select_multiple_value),
/* harmony export */   "select_option": () => (/* binding */ select_option),
/* harmony export */   "select_options": () => (/* binding */ select_options),
/* harmony export */   "select_value": () => (/* binding */ select_value),
/* harmony export */   "self": () => (/* binding */ self),
/* harmony export */   "setContext": () => (/* binding */ setContext),
/* harmony export */   "set_attributes": () => (/* binding */ set_attributes),
/* harmony export */   "set_current_component": () => (/* binding */ set_current_component),
/* harmony export */   "set_custom_element_data": () => (/* binding */ set_custom_element_data),
/* harmony export */   "set_data": () => (/* binding */ set_data),
/* harmony export */   "set_data_dev": () => (/* binding */ set_data_dev),
/* harmony export */   "set_input_type": () => (/* binding */ set_input_type),
/* harmony export */   "set_input_value": () => (/* binding */ set_input_value),
/* harmony export */   "set_now": () => (/* binding */ set_now),
/* harmony export */   "set_raf": () => (/* binding */ set_raf),
/* harmony export */   "set_store_value": () => (/* binding */ set_store_value),
/* harmony export */   "set_style": () => (/* binding */ set_style),
/* harmony export */   "set_svg_attributes": () => (/* binding */ set_svg_attributes),
/* harmony export */   "space": () => (/* binding */ space),
/* harmony export */   "spread": () => (/* binding */ spread),
/* harmony export */   "src_url_equal": () => (/* binding */ src_url_equal),
/* harmony export */   "start_hydrating": () => (/* binding */ start_hydrating),
/* harmony export */   "stop_propagation": () => (/* binding */ stop_propagation),
/* harmony export */   "subscribe": () => (/* binding */ subscribe),
/* harmony export */   "svg_element": () => (/* binding */ svg_element),
/* harmony export */   "text": () => (/* binding */ text),
/* harmony export */   "tick": () => (/* binding */ tick),
/* harmony export */   "time_ranges_to_array": () => (/* binding */ time_ranges_to_array),
/* harmony export */   "to_number": () => (/* binding */ to_number),
/* harmony export */   "toggle_class": () => (/* binding */ toggle_class),
/* harmony export */   "transition_in": () => (/* binding */ transition_in),
/* harmony export */   "transition_out": () => (/* binding */ transition_out),
/* harmony export */   "trusted": () => (/* binding */ trusted),
/* harmony export */   "update_await_block_branch": () => (/* binding */ update_await_block_branch),
/* harmony export */   "update_keyed_each": () => (/* binding */ update_keyed_each),
/* harmony export */   "update_slot": () => (/* binding */ update_slot),
/* harmony export */   "update_slot_base": () => (/* binding */ update_slot_base),
/* harmony export */   "validate_component": () => (/* binding */ validate_component),
/* harmony export */   "validate_dynamic_element": () => (/* binding */ validate_dynamic_element),
/* harmony export */   "validate_each_argument": () => (/* binding */ validate_each_argument),
/* harmony export */   "validate_each_keys": () => (/* binding */ validate_each_keys),
/* harmony export */   "validate_slots": () => (/* binding */ validate_slots),
/* harmony export */   "validate_store": () => (/* binding */ validate_store),
/* harmony export */   "xlink_attr": () => (/* binding */ xlink_attr)
/* harmony export */ });
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function noop() {}

var identity = function identity(x) {
  return x;
};

function assign(tar, src) {
  // @ts-ignore
  for (var k in src) {
    tar[k] = src[k];
  }

  return tar;
}

function is_promise(value) {
  return value && _typeof(value) === 'object' && typeof value.then === 'function';
}

function add_location(element, file, line, column, _char) {
  element.__svelte_meta = {
    loc: {
      file: file,
      line: line,
      column: column,
      "char": _char
    }
  };
}

function run(fn) {
  return fn();
}

function blank_object() {
  return Object.create(null);
}

function run_all(fns) {
  fns.forEach(run);
}

function is_function(thing) {
  return typeof thing === 'function';
}

function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && _typeof(a) === 'object' || typeof a === 'function';
}

var src_url_equal_anchor;

function src_url_equal(element_src, url) {
  if (!src_url_equal_anchor) {
    src_url_equal_anchor = document.createElement('a');
  }

  src_url_equal_anchor.href = url;
  return element_src === src_url_equal_anchor.href;
}

function not_equal(a, b) {
  return a != a ? b == b : a !== b;
}

function is_empty(obj) {
  return Object.keys(obj).length === 0;
}

function validate_store(store, name) {
  if (store != null && typeof store.subscribe !== 'function') {
    throw new Error("'".concat(name, "' is not a store with a 'subscribe' method"));
  }
}

function subscribe(store) {
  if (store == null) {
    return noop;
  }

  for (var _len = arguments.length, callbacks = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    callbacks[_key - 1] = arguments[_key];
  }

  var unsub = store.subscribe.apply(store, callbacks);
  return unsub.unsubscribe ? function () {
    return unsub.unsubscribe();
  } : unsub;
}

function get_store_value(store) {
  var value;
  subscribe(store, function (_) {
    return value = _;
  })();
  return value;
}

function component_subscribe(component, store, callback) {
  component.$$.on_destroy.push(subscribe(store, callback));
}

function create_slot(definition, ctx, $$scope, fn) {
  if (definition) {
    var slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
    return definition[0](slot_ctx);
  }
}

function get_slot_context(definition, ctx, $$scope, fn) {
  return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}

function get_slot_changes(definition, $$scope, dirty, fn) {
  if (definition[2] && fn) {
    var lets = definition[2](fn(dirty));

    if ($$scope.dirty === undefined) {
      return lets;
    }

    if (_typeof(lets) === 'object') {
      var merged = [];
      var len = Math.max($$scope.dirty.length, lets.length);

      for (var i = 0; i < len; i += 1) {
        merged[i] = $$scope.dirty[i] | lets[i];
      }

      return merged;
    }

    return $$scope.dirty | lets;
  }

  return $$scope.dirty;
}

function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
  if (slot_changes) {
    var slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
    slot.p(slot_context, slot_changes);
  }
}

function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
  var slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
  update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn);
}

function get_all_dirty_from_scope($$scope) {
  if ($$scope.ctx.length > 32) {
    var dirty = [];
    var length = $$scope.ctx.length / 32;

    for (var i = 0; i < length; i++) {
      dirty[i] = -1;
    }

    return dirty;
  }

  return -1;
}

function exclude_internal_props(props) {
  var result = {};

  for (var k in props) {
    if (k[0] !== '$') result[k] = props[k];
  }

  return result;
}

function compute_rest_props(props, keys) {
  var rest = {};
  keys = new Set(keys);

  for (var k in props) {
    if (!keys.has(k) && k[0] !== '$') rest[k] = props[k];
  }

  return rest;
}

function compute_slots(slots) {
  var result = {};

  for (var key in slots) {
    result[key] = true;
  }

  return result;
}

function once(fn) {
  var ran = false;
  return function () {
    if (ran) return;
    ran = true;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    fn.call.apply(fn, [this].concat(args));
  };
}

function null_to_empty(value) {
  return value == null ? '' : value;
}

function set_store_value(store, ret, value) {
  store.set(value);
  return ret;
}

var has_prop = function has_prop(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

function action_destroyer(action_result) {
  return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}

var is_client = typeof window !== 'undefined';
var now = is_client ? function () {
  return window.performance.now();
} : function () {
  return Date.now();
};
var raf = is_client ? function (cb) {
  return requestAnimationFrame(cb);
} : noop; // used internally for testing

function set_now(fn) {
  now = fn;
}

function set_raf(fn) {
  raf = fn;
}

var tasks = new Set();

function run_tasks(now) {
  tasks.forEach(function (task) {
    if (!task.c(now)) {
      tasks["delete"](task);
      task.f();
    }
  });
  if (tasks.size !== 0) raf(run_tasks);
}
/**
 * For testing purposes only!
 */


function clear_loops() {
  tasks.clear();
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */


function loop(callback) {
  var task;
  if (tasks.size === 0) raf(run_tasks);
  return {
    promise: new Promise(function (fulfill) {
      tasks.add(task = {
        c: callback,
        f: fulfill
      });
    }),
    abort: function abort() {
      tasks["delete"](task);
    }
  };
} // Track which nodes are claimed during hydration. Unclaimed nodes can then be removed from the DOM
// at the end of hydration without touching the remaining nodes.


var is_hydrating = false;

function start_hydrating() {
  is_hydrating = true;
}

function end_hydrating() {
  is_hydrating = false;
}

function upper_bound(low, high, key, value) {
  // Return first index of value larger than input value in the range [low, high)
  while (low < high) {
    var mid = low + (high - low >> 1);

    if (key(mid) <= value) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
}

function init_hydrate(target) {
  if (target.hydrate_init) return;
  target.hydrate_init = true; // We know that all children have claim_order values since the unclaimed have been detached if target is not <head>

  var children = target.childNodes; // If target is <head>, there may be children without claim_order

  if (target.nodeName === 'HEAD') {
    var myChildren = [];

    for (var i = 0; i < children.length; i++) {
      var node = children[i];

      if (node.claim_order !== undefined) {
        myChildren.push(node);
      }
    }

    children = myChildren;
  }
  /*
  * Reorder claimed children optimally.
  * We can reorder claimed children optimally by finding the longest subsequence of
  * nodes that are already claimed in order and only moving the rest. The longest
  * subsequence subsequence of nodes that are claimed in order can be found by
  * computing the longest increasing subsequence of .claim_order values.
  *
  * This algorithm is optimal in generating the least amount of reorder operations
  * possible.
  *
  * Proof:
  * We know that, given a set of reordering operations, the nodes that do not move
  * always form an increasing subsequence, since they do not move among each other
  * meaning that they must be already ordered among each other. Thus, the maximal
  * set of nodes that do not move form a longest increasing subsequence.
  */
  // Compute longest increasing subsequence
  // m: subsequence length j => index k of smallest value that ends an increasing subsequence of length j


  var m = new Int32Array(children.length + 1); // Predecessor indices + 1

  var p = new Int32Array(children.length);
  m[0] = -1;
  var longest = 0;

  for (var _i = 0; _i < children.length; _i++) {
    var current = children[_i].claim_order; // Find the largest subsequence length such that it ends in a value less than our current value
    // upper_bound returns first greater value, so we subtract one
    // with fast path for when we are on the current longest subsequence

    var seqLen = (longest > 0 && children[m[longest]].claim_order <= current ? longest + 1 : upper_bound(1, longest, function (idx) {
      return children[m[idx]].claim_order;
    }, current)) - 1;
    p[_i] = m[seqLen] + 1;
    var newLen = seqLen + 1; // We can guarantee that current is the smallest value. Otherwise, we would have generated a longer sequence.

    m[newLen] = _i;
    longest = Math.max(newLen, longest);
  } // The longest increasing subsequence of nodes (initially reversed)


  var lis = []; // The rest of the nodes, nodes that will be moved

  var toMove = [];
  var last = children.length - 1;

  for (var cur = m[longest] + 1; cur != 0; cur = p[cur - 1]) {
    lis.push(children[cur - 1]);

    for (; last >= cur; last--) {
      toMove.push(children[last]);
    }

    last--;
  }

  for (; last >= 0; last--) {
    toMove.push(children[last]);
  }

  lis.reverse(); // We sort the nodes being moved to guarantee that their insertion order matches the claim order

  toMove.sort(function (a, b) {
    return a.claim_order - b.claim_order;
  }); // Finally, we move the nodes

  for (var _i2 = 0, j = 0; _i2 < toMove.length; _i2++) {
    while (j < lis.length && toMove[_i2].claim_order >= lis[j].claim_order) {
      j++;
    }

    var anchor = j < lis.length ? lis[j] : null;
    target.insertBefore(toMove[_i2], anchor);
  }
}

function append(target, node) {
  target.appendChild(node);
}

function append_styles(target, style_sheet_id, styles) {
  var append_styles_to = get_root_for_style(target);

  if (!append_styles_to.getElementById(style_sheet_id)) {
    var style = element('style');
    style.id = style_sheet_id;
    style.textContent = styles;
    append_stylesheet(append_styles_to, style);
  }
}

function get_root_for_style(node) {
  if (!node) return document;
  var root = node.getRootNode ? node.getRootNode() : node.ownerDocument;

  if (root && root.host) {
    return root;
  }

  return node.ownerDocument;
}

function append_empty_stylesheet(node) {
  var style_element = element('style');
  append_stylesheet(get_root_for_style(node), style_element);
  return style_element.sheet;
}

function append_stylesheet(node, style) {
  append(node.head || node, style);
}

function append_hydration(target, node) {
  if (is_hydrating) {
    init_hydrate(target);

    if (target.actual_end_child === undefined || target.actual_end_child !== null && target.actual_end_child.parentElement !== target) {
      target.actual_end_child = target.firstChild;
    } // Skip nodes of undefined ordering


    while (target.actual_end_child !== null && target.actual_end_child.claim_order === undefined) {
      target.actual_end_child = target.actual_end_child.nextSibling;
    }

    if (node !== target.actual_end_child) {
      // We only insert if the ordering of this node should be modified or the parent node is not target
      if (node.claim_order !== undefined || node.parentNode !== target) {
        target.insertBefore(node, target.actual_end_child);
      }
    } else {
      target.actual_end_child = node.nextSibling;
    }
  } else if (node.parentNode !== target || node.nextSibling !== null) {
    target.appendChild(node);
  }
}

function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}

function insert_hydration(target, node, anchor) {
  if (is_hydrating && !anchor) {
    append_hydration(target, node);
  } else if (node.parentNode !== target || node.nextSibling != anchor) {
    target.insertBefore(node, anchor || null);
  }
}

function detach(node) {
  node.parentNode.removeChild(node);
}

function destroy_each(iterations, detaching) {
  for (var i = 0; i < iterations.length; i += 1) {
    if (iterations[i]) iterations[i].d(detaching);
  }
}

function element(name) {
  return document.createElement(name);
}

function element_is(name, is) {
  return document.createElement(name, {
    is: is
  });
}

function object_without_properties(obj, exclude) {
  var target = {};

  for (var k in obj) {
    if (has_prop(obj, k) // @ts-ignore
    && exclude.indexOf(k) === -1) {
      // @ts-ignore
      target[k] = obj[k];
    }
  }

  return target;
}

function svg_element(name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function text(data) {
  return document.createTextNode(data);
}

function space() {
  return text(' ');
}

function empty() {
  return text('');
}

function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return function () {
    return node.removeEventListener(event, handler, options);
  };
}

function prevent_default(fn) {
  return function (event) {
    event.preventDefault(); // @ts-ignore

    return fn.call(this, event);
  };
}

function stop_propagation(fn) {
  return function (event) {
    event.stopPropagation(); // @ts-ignore

    return fn.call(this, event);
  };
}

function self(fn) {
  return function (event) {
    // @ts-ignore
    if (event.target === this) fn.call(this, event);
  };
}

function trusted(fn) {
  return function (event) {
    // @ts-ignore
    if (event.isTrusted) fn.call(this, event);
  };
}

function attr(node, attribute, value) {
  if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
}

function set_attributes(node, attributes) {
  // @ts-ignore
  var descriptors = Object.getOwnPropertyDescriptors(node.__proto__);

  for (var key in attributes) {
    if (attributes[key] == null) {
      node.removeAttribute(key);
    } else if (key === 'style') {
      node.style.cssText = attributes[key];
    } else if (key === '__value') {
      node.value = node[key] = attributes[key];
    } else if (descriptors[key] && descriptors[key].set) {
      node[key] = attributes[key];
    } else {
      attr(node, key, attributes[key]);
    }
  }
}

function set_svg_attributes(node, attributes) {
  for (var key in attributes) {
    attr(node, key, attributes[key]);
  }
}

function set_custom_element_data(node, prop, value) {
  if (prop in node) {
    node[prop] = typeof node[prop] === 'boolean' && value === '' ? true : value;
  } else {
    attr(node, prop, value);
  }
}

function xlink_attr(node, attribute, value) {
  node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}

function get_binding_group_value(group, __value, checked) {
  var value = new Set();

  for (var i = 0; i < group.length; i += 1) {
    if (group[i].checked) value.add(group[i].__value);
  }

  if (!checked) {
    value["delete"](__value);
  }

  return Array.from(value);
}

function to_number(value) {
  return value === '' ? null : +value;
}

function time_ranges_to_array(ranges) {
  var array = [];

  for (var i = 0; i < ranges.length; i += 1) {
    array.push({
      start: ranges.start(i),
      end: ranges.end(i)
    });
  }

  return array;
}

function children(element) {
  return Array.from(element.childNodes);
}

function init_claim_info(nodes) {
  if (nodes.claim_info === undefined) {
    nodes.claim_info = {
      last_index: 0,
      total_claimed: 0
    };
  }
}

function claim_node(nodes, predicate, processNode, createNode) {
  var dontUpdateLastIndex = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  // Try to find nodes in an order such that we lengthen the longest increasing subsequence
  init_claim_info(nodes);

  var resultNode = function () {
    // We first try to find an element after the previous one
    for (var i = nodes.claim_info.last_index; i < nodes.length; i++) {
      var node = nodes[i];

      if (predicate(node)) {
        var replacement = processNode(node);

        if (replacement === undefined) {
          nodes.splice(i, 1);
        } else {
          nodes[i] = replacement;
        }

        if (!dontUpdateLastIndex) {
          nodes.claim_info.last_index = i;
        }

        return node;
      }
    } // Otherwise, we try to find one before
    // We iterate in reverse so that we don't go too far back


    for (var _i3 = nodes.claim_info.last_index - 1; _i3 >= 0; _i3--) {
      var _node = nodes[_i3];

      if (predicate(_node)) {
        var _replacement = processNode(_node);

        if (_replacement === undefined) {
          nodes.splice(_i3, 1);
        } else {
          nodes[_i3] = _replacement;
        }

        if (!dontUpdateLastIndex) {
          nodes.claim_info.last_index = _i3;
        } else if (_replacement === undefined) {
          // Since we spliced before the last_index, we decrease it
          nodes.claim_info.last_index--;
        }

        return _node;
      }
    } // If we can't find any matching node, we create a new one


    return createNode();
  }();

  resultNode.claim_order = nodes.claim_info.total_claimed;
  nodes.claim_info.total_claimed += 1;
  return resultNode;
}

function claim_element_base(nodes, name, attributes, create_element) {
  return claim_node(nodes, function (node) {
    return node.nodeName === name;
  }, function (node) {
    var remove = [];

    for (var j = 0; j < node.attributes.length; j++) {
      var attribute = node.attributes[j];

      if (!attributes[attribute.name]) {
        remove.push(attribute.name);
      }
    }

    remove.forEach(function (v) {
      return node.removeAttribute(v);
    });
    return undefined;
  }, function () {
    return create_element(name);
  });
}

function claim_element(nodes, name, attributes) {
  return claim_element_base(nodes, name, attributes, element);
}

function claim_svg_element(nodes, name, attributes) {
  return claim_element_base(nodes, name, attributes, svg_element);
}

function claim_text(nodes, data) {
  return claim_node(nodes, function (node) {
    return node.nodeType === 3;
  }, function (node) {
    var dataStr = '' + data;

    if (node.data.startsWith(dataStr)) {
      if (node.data.length !== dataStr.length) {
        return node.splitText(dataStr.length);
      }
    } else {
      node.data = dataStr;
    }
  }, function () {
    return text(data);
  }, true // Text nodes should not update last index since it is likely not worth it to eliminate an increasing subsequence of actual elements
  );
}

function claim_space(nodes) {
  return claim_text(nodes, ' ');
}

function find_comment(nodes, text, start) {
  for (var i = start; i < nodes.length; i += 1) {
    var node = nodes[i];

    if (node.nodeType === 8
    /* comment node */
    && node.textContent.trim() === text) {
      return i;
    }
  }

  return nodes.length;
}

function claim_html_tag(nodes) {
  // find html opening tag
  var start_index = find_comment(nodes, 'HTML_TAG_START', 0);
  var end_index = find_comment(nodes, 'HTML_TAG_END', start_index);

  if (start_index === end_index) {
    return new HtmlTagHydration();
  }

  init_claim_info(nodes);
  var html_tag_nodes = nodes.splice(start_index, end_index - start_index + 1);
  detach(html_tag_nodes[0]);
  detach(html_tag_nodes[html_tag_nodes.length - 1]);
  var claimed_nodes = html_tag_nodes.slice(1, html_tag_nodes.length - 1);

  var _iterator = _createForOfIteratorHelper(claimed_nodes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var n = _step.value;
      n.claim_order = nodes.claim_info.total_claimed;
      nodes.claim_info.total_claimed += 1;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return new HtmlTagHydration(claimed_nodes);
}

function set_data(text, data) {
  data = '' + data;
  if (text.wholeText !== data) text.data = data;
}

function set_input_value(input, value) {
  input.value = value == null ? '' : value;
}

function set_input_type(input, type) {
  try {
    input.type = type;
  } catch (e) {// do nothing
  }
}

function set_style(node, key, value, important) {
  if (value === null) {
    node.style.removeProperty(key);
  } else {
    node.style.setProperty(key, value, important ? 'important' : '');
  }
}

function select_option(select, value) {
  for (var i = 0; i < select.options.length; i += 1) {
    var option = select.options[i];

    if (option.__value === value) {
      option.selected = true;
      return;
    }
  }

  select.selectedIndex = -1; // no option should be selected
}

function select_options(select, value) {
  for (var i = 0; i < select.options.length; i += 1) {
    var option = select.options[i];
    option.selected = ~value.indexOf(option.__value);
  }
}

function select_value(select) {
  var selected_option = select.querySelector(':checked') || select.options[0];
  return selected_option && selected_option.__value;
}

function select_multiple_value(select) {
  return [].map.call(select.querySelectorAll(':checked'), function (option) {
    return option.__value;
  });
} // unfortunately this can't be a constant as that wouldn't be tree-shakeable
// so we cache the result instead


var crossorigin;

function is_crossorigin() {
  if (crossorigin === undefined) {
    crossorigin = false;

    try {
      if (typeof window !== 'undefined' && window.parent) {
        void window.parent.document;
      }
    } catch (error) {
      crossorigin = true;
    }
  }

  return crossorigin;
}

function add_resize_listener(node, fn) {
  var computed_style = getComputedStyle(node);

  if (computed_style.position === 'static') {
    node.style.position = 'relative';
  }

  var iframe = element('iframe');
  iframe.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; ' + 'overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;');
  iframe.setAttribute('aria-hidden', 'true');
  iframe.tabIndex = -1;
  var crossorigin = is_crossorigin();
  var unsubscribe;

  if (crossorigin) {
    iframe.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>";
    unsubscribe = listen(window, 'message', function (event) {
      if (event.source === iframe.contentWindow) fn();
    });
  } else {
    iframe.src = 'about:blank';

    iframe.onload = function () {
      unsubscribe = listen(iframe.contentWindow, 'resize', fn);
    };
  }

  append(node, iframe);
  return function () {
    if (crossorigin) {
      unsubscribe();
    } else if (unsubscribe && iframe.contentWindow) {
      unsubscribe();
    }

    detach(iframe);
  };
}

function toggle_class(element, name, toggle) {
  element.classList[toggle ? 'add' : 'remove'](name);
}

function custom_event(type, detail) {
  var bubbles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var e = document.createEvent('CustomEvent');
  e.initCustomEvent(type, bubbles, false, detail);
  return e;
}

function query_selector_all(selector) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;
  return Array.from(parent.querySelectorAll(selector));
}

var HtmlTag = /*#__PURE__*/function () {
  function HtmlTag() {
    _classCallCheck(this, HtmlTag);

    this.e = this.n = null;
  }

  _createClass(HtmlTag, [{
    key: "c",
    value: function c(html) {
      this.h(html);
    }
  }, {
    key: "m",
    value: function m(html, target) {
      var anchor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if (!this.e) {
        this.e = element(target.nodeName);
        this.t = target;
        this.c(html);
      }

      this.i(anchor);
    }
  }, {
    key: "h",
    value: function h(html) {
      this.e.innerHTML = html;
      this.n = Array.from(this.e.childNodes);
    }
  }, {
    key: "i",
    value: function i(anchor) {
      for (var i = 0; i < this.n.length; i += 1) {
        insert(this.t, this.n[i], anchor);
      }
    }
  }, {
    key: "p",
    value: function p(html) {
      this.d();
      this.h(html);
      this.i(this.a);
    }
  }, {
    key: "d",
    value: function d() {
      this.n.forEach(detach);
    }
  }]);

  return HtmlTag;
}();

var HtmlTagHydration = /*#__PURE__*/function (_HtmlTag) {
  _inherits(HtmlTagHydration, _HtmlTag);

  var _super = _createSuper(HtmlTagHydration);

  function HtmlTagHydration(claimed_nodes) {
    var _this;

    _classCallCheck(this, HtmlTagHydration);

    _this = _super.call(this);
    _this.e = _this.n = null;
    _this.l = claimed_nodes;
    return _this;
  }

  _createClass(HtmlTagHydration, [{
    key: "c",
    value: function c(html) {
      if (this.l) {
        this.n = this.l;
      } else {
        _get(_getPrototypeOf(HtmlTagHydration.prototype), "c", this).call(this, html);
      }
    }
  }, {
    key: "i",
    value: function i(anchor) {
      for (var i = 0; i < this.n.length; i += 1) {
        insert_hydration(this.t, this.n[i], anchor);
      }
    }
  }]);

  return HtmlTagHydration;
}(HtmlTag);

function attribute_to_object(attributes) {
  var result = {};

  var _iterator2 = _createForOfIteratorHelper(attributes),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var attribute = _step2.value;
      result[attribute.name] = attribute.value;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return result;
}

function get_custom_elements_slots(element) {
  var result = {};
  element.childNodes.forEach(function (node) {
    result[node.slot || 'default'] = true;
  });
  return result;
} // we need to store the information for multiple documents because a Svelte application could also contain iframes
// https://github.com/sveltejs/svelte/issues/3624


var managed_styles = new Map();
var active = 0; // https://github.com/darkskyapp/string-hash/blob/master/index.js

function hash(str) {
  var hash = 5381;
  var i = str.length;

  while (i--) {
    hash = (hash << 5) - hash ^ str.charCodeAt(i);
  }

  return hash >>> 0;
}

function create_style_information(doc, node) {
  var info = {
    stylesheet: append_empty_stylesheet(node),
    rules: {}
  };
  managed_styles.set(doc, info);
  return info;
}

function create_rule(node, a, b, duration, delay, ease, fn) {
  var uid = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
  var step = 16.666 / duration;
  var keyframes = '{\n';

  for (var p = 0; p <= 1; p += step) {
    var t = a + (b - a) * ease(p);
    keyframes += p * 100 + "%{".concat(fn(t, 1 - t), "}\n");
  }

  var rule = keyframes + "100% {".concat(fn(b, 1 - b), "}\n}");
  var name = "__svelte_".concat(hash(rule), "_").concat(uid);
  var doc = get_root_for_style(node);

  var _ref = managed_styles.get(doc) || create_style_information(doc, node),
      stylesheet = _ref.stylesheet,
      rules = _ref.rules;

  if (!rules[name]) {
    rules[name] = true;
    stylesheet.insertRule("@keyframes ".concat(name, " ").concat(rule), stylesheet.cssRules.length);
  }

  var animation = node.style.animation || '';
  node.style.animation = "".concat(animation ? "".concat(animation, ", ") : '').concat(name, " ").concat(duration, "ms linear ").concat(delay, "ms 1 both");
  active += 1;
  return name;
}

function delete_rule(node, name) {
  var previous = (node.style.animation || '').split(', ');
  var next = previous.filter(name ? function (anim) {
    return anim.indexOf(name) < 0;
  } // remove specific animation
  : function (anim) {
    return anim.indexOf('__svelte') === -1;
  } // remove all Svelte animations
  );
  var deleted = previous.length - next.length;

  if (deleted) {
    node.style.animation = next.join(', ');
    active -= deleted;
    if (!active) clear_rules();
  }
}

function clear_rules() {
  raf(function () {
    if (active) return;
    managed_styles.forEach(function (info) {
      var stylesheet = info.stylesheet;
      var i = stylesheet.cssRules.length;

      while (i--) {
        stylesheet.deleteRule(i);
      }

      info.rules = {};
    });
    managed_styles.clear();
  });
}

function create_animation(node, from, fn, params) {
  if (!from) return noop;
  var to = node.getBoundingClientRect();
  if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom) return noop;

  var _fn = fn(node, {
    from: from,
    to: to
  }, params),
      _fn$delay = _fn.delay,
      delay = _fn$delay === void 0 ? 0 : _fn$delay,
      _fn$duration = _fn.duration,
      duration = _fn$duration === void 0 ? 300 : _fn$duration,
      _fn$easing = _fn.easing,
      easing = _fn$easing === void 0 ? identity : _fn$easing,
      _fn$start = _fn.start,
      start_time = _fn$start === void 0 ? now() + delay : _fn$start,
      _fn$end = _fn.end,
      end = _fn$end === void 0 ? start_time + duration : _fn$end,
      _fn$tick = _fn.tick,
      tick = _fn$tick === void 0 ? noop : _fn$tick,
      css = _fn.css;

  var running = true;
  var started = false;
  var name;

  function start() {
    if (css) {
      name = create_rule(node, 0, 1, duration, delay, easing, css);
    }

    if (!delay) {
      started = true;
    }
  }

  function stop() {
    if (css) delete_rule(node, name);
    running = false;
  }

  loop(function (now) {
    if (!started && now >= start_time) {
      started = true;
    }

    if (started && now >= end) {
      tick(1, 0);
      stop();
    }

    if (!running) {
      return false;
    }

    if (started) {
      var p = now - start_time;
      var t = 0 + 1 * easing(p / duration);
      tick(t, 1 - t);
    }

    return true;
  });
  start();
  tick(0, 1);
  return stop;
}

function fix_position(node) {
  var style = getComputedStyle(node);

  if (style.position !== 'absolute' && style.position !== 'fixed') {
    var width = style.width,
        height = style.height;
    var a = node.getBoundingClientRect();
    node.style.position = 'absolute';
    node.style.width = width;
    node.style.height = height;
    add_transform(node, a);
  }
}

function add_transform(node, a) {
  var b = node.getBoundingClientRect();

  if (a.left !== b.left || a.top !== b.top) {
    var style = getComputedStyle(node);
    var transform = style.transform === 'none' ? '' : style.transform;
    node.style.transform = "".concat(transform, " translate(").concat(a.left - b.left, "px, ").concat(a.top - b.top, "px)");
  }
}

var current_component;

function set_current_component(component) {
  current_component = component;
}

function get_current_component() {
  if (!current_component) throw new Error('Function called outside component initialization');
  return current_component;
}

function beforeUpdate(fn) {
  get_current_component().$$.before_update.push(fn);
}

function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}

function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}

function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}

function createEventDispatcher() {
  var component = get_current_component();
  return function (type, detail) {
    var callbacks = component.$$.callbacks[type];

    if (callbacks) {
      // TODO are there situations where events could be dispatched
      // in a server (non-DOM) environment?
      var event = custom_event(type, detail);
      callbacks.slice().forEach(function (fn) {
        fn.call(component, event);
      });
    }
  };
}

function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}

function getContext(key) {
  return get_current_component().$$.context.get(key);
}

function getAllContexts() {
  return get_current_component().$$.context;
}

function hasContext(key) {
  return get_current_component().$$.context.has(key);
} // TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism


function bubble(component, event) {
  var _this2 = this;

  var callbacks = component.$$.callbacks[event.type];

  if (callbacks) {
    // @ts-ignore
    callbacks.slice().forEach(function (fn) {
      return fn.call(_this2, event);
    });
  }
}

var dirty_components = [];
var intros = {
  enabled: false
};
var binding_callbacks = [];
var render_callbacks = [];
var flush_callbacks = [];
var resolved_promise = Promise.resolve();
var update_scheduled = false;

function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}

function tick() {
  schedule_update();
  return resolved_promise;
}

function add_render_callback(fn) {
  render_callbacks.push(fn);
}

function add_flush_callback(fn) {
  flush_callbacks.push(fn);
} // flush() calls callbacks in this order:
// 1. All beforeUpdate callbacks, in order: parents before children
// 2. All bind:this callbacks, in reverse order: children before parents.
// 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
//    for afterUpdates called during the initial onMount, which are called in
//    reverse order: children before parents.
// Since callbacks might update component values, which could trigger another
// call to flush(), the following steps guard against this:
// 1. During beforeUpdate, any updated components will be added to the
//    dirty_components array and will cause a reentrant call to flush(). Because
//    the flush index is kept outside the function, the reentrant call will pick
//    up where the earlier call left off and go through all dirty components. The
//    current_component value is saved and restored so that the reentrant call will
//    not interfere with the "parent" flush() call.
// 2. bind:this callbacks cannot trigger new flush() calls.
// 3. During afterUpdate, any updated components will NOT have their afterUpdate
//    callback called a second time; the seen_callbacks set, outside the flush()
//    function, guarantees this behavior.


var seen_callbacks = new Set();
var flushidx = 0; // Do *not* move this inside the flush() function

function flush() {
  var saved_component = current_component;

  do {
    // first, call beforeUpdate functions
    // and update components
    while (flushidx < dirty_components.length) {
      var component = dirty_components[flushidx];
      flushidx++;
      set_current_component(component);
      update(component.$$);
    }

    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;

    while (binding_callbacks.length) {
      binding_callbacks.pop()();
    } // then, once components are updated, call
    // afterUpdate functions. This may cause
    // subsequent updates...


    for (var i = 0; i < render_callbacks.length; i += 1) {
      var callback = render_callbacks[i];

      if (!seen_callbacks.has(callback)) {
        // ...so guard against infinite loops
        seen_callbacks.add(callback);
        callback();
      }
    }

    render_callbacks.length = 0;
  } while (dirty_components.length);

  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }

  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}

function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    var dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}

var promise;

function wait() {
  if (!promise) {
    promise = Promise.resolve();
    promise.then(function () {
      promise = null;
    });
  }

  return promise;
}

function dispatch(node, direction, kind) {
  node.dispatchEvent(custom_event("".concat(direction ? 'intro' : 'outro').concat(kind)));
}

var outroing = new Set();
var outros;

function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros // parent group

  };
}

function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }

  outros = outros.p;
}

function transition_in(block, local) {
  if (block && block.i) {
    outroing["delete"](block);
    block.i(local);
  }
}

function transition_out(block, local, detach, callback) {
  if (block && block.o) {
    if (outroing.has(block)) return;
    outroing.add(block);
    outros.c.push(function () {
      outroing["delete"](block);

      if (callback) {
        if (detach) block.d(1);
        callback();
      }
    });
    block.o(local);
  }
}

var null_transition = {
  duration: 0
};

function create_in_transition(node, fn, params) {
  var config = fn(node, params);
  var running = false;
  var animation_name;
  var task;
  var uid = 0;

  function cleanup() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function go() {
    var _ref2 = config || null_transition,
        _ref2$delay = _ref2.delay,
        delay = _ref2$delay === void 0 ? 0 : _ref2$delay,
        _ref2$duration = _ref2.duration,
        duration = _ref2$duration === void 0 ? 300 : _ref2$duration,
        _ref2$easing = _ref2.easing,
        easing = _ref2$easing === void 0 ? identity : _ref2$easing,
        _ref2$tick = _ref2.tick,
        tick = _ref2$tick === void 0 ? noop : _ref2$tick,
        css = _ref2.css;

    if (css) animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
    tick(0, 1);
    var start_time = now() + delay;
    var end_time = start_time + duration;
    if (task) task.abort();
    running = true;
    add_render_callback(function () {
      return dispatch(node, true, 'start');
    });
    task = loop(function (now) {
      if (running) {
        if (now >= end_time) {
          tick(1, 0);
          dispatch(node, true, 'end');
          cleanup();
          return running = false;
        }

        if (now >= start_time) {
          var t = easing((now - start_time) / duration);
          tick(t, 1 - t);
        }
      }

      return running;
    });
  }

  var started = false;
  return {
    start: function start() {
      if (started) return;
      started = true;
      delete_rule(node);

      if (is_function(config)) {
        config = config();
        wait().then(go);
      } else {
        go();
      }
    },
    invalidate: function invalidate() {
      started = false;
    },
    end: function end() {
      if (running) {
        cleanup();
        running = false;
      }
    }
  };
}

function create_out_transition(node, fn, params) {
  var config = fn(node, params);
  var running = true;
  var animation_name;
  var group = outros;
  group.r += 1;

  function go() {
    var _ref3 = config || null_transition,
        _ref3$delay = _ref3.delay,
        delay = _ref3$delay === void 0 ? 0 : _ref3$delay,
        _ref3$duration = _ref3.duration,
        duration = _ref3$duration === void 0 ? 300 : _ref3$duration,
        _ref3$easing = _ref3.easing,
        easing = _ref3$easing === void 0 ? identity : _ref3$easing,
        _ref3$tick = _ref3.tick,
        tick = _ref3$tick === void 0 ? noop : _ref3$tick,
        css = _ref3.css;

    if (css) animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
    var start_time = now() + delay;
    var end_time = start_time + duration;
    add_render_callback(function () {
      return dispatch(node, false, 'start');
    });
    loop(function (now) {
      if (running) {
        if (now >= end_time) {
          tick(0, 1);
          dispatch(node, false, 'end');

          if (! --group.r) {
            // this will result in `end()` being called,
            // so we don't need to clean up here
            run_all(group.c);
          }

          return false;
        }

        if (now >= start_time) {
          var t = easing((now - start_time) / duration);
          tick(1 - t, t);
        }
      }

      return running;
    });
  }

  if (is_function(config)) {
    wait().then(function () {
      // @ts-ignore
      config = config();
      go();
    });
  } else {
    go();
  }

  return {
    end: function end(reset) {
      if (reset && config.tick) {
        config.tick(1, 0);
      }

      if (running) {
        if (animation_name) delete_rule(node, animation_name);
        running = false;
      }
    }
  };
}

function create_bidirectional_transition(node, fn, params, intro) {
  var config = fn(node, params);
  var t = intro ? 0 : 1;
  var running_program = null;
  var pending_program = null;
  var animation_name = null;

  function clear_animation() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function init(program, duration) {
    var d = program.b - t;
    duration *= Math.abs(d);
    return {
      a: t,
      b: program.b,
      d: d,
      duration: duration,
      start: program.start,
      end: program.start + duration,
      group: program.group
    };
  }

  function go(b) {
    var _ref4 = config || null_transition,
        _ref4$delay = _ref4.delay,
        delay = _ref4$delay === void 0 ? 0 : _ref4$delay,
        _ref4$duration = _ref4.duration,
        duration = _ref4$duration === void 0 ? 300 : _ref4$duration,
        _ref4$easing = _ref4.easing,
        easing = _ref4$easing === void 0 ? identity : _ref4$easing,
        _ref4$tick = _ref4.tick,
        tick = _ref4$tick === void 0 ? noop : _ref4$tick,
        css = _ref4.css;

    var program = {
      start: now() + delay,
      b: b
    };

    if (!b) {
      // @ts-ignore todo: improve typings
      program.group = outros;
      outros.r += 1;
    }

    if (running_program || pending_program) {
      pending_program = program;
    } else {
      // if this is an intro, and there's a delay, we need to do
      // an initial tick and/or apply CSS animation immediately
      if (css) {
        clear_animation();
        animation_name = create_rule(node, t, b, duration, delay, easing, css);
      }

      if (b) tick(0, 1);
      running_program = init(program, duration);
      add_render_callback(function () {
        return dispatch(node, b, 'start');
      });
      loop(function (now) {
        if (pending_program && now > pending_program.start) {
          running_program = init(pending_program, duration);
          pending_program = null;
          dispatch(node, running_program.b, 'start');

          if (css) {
            clear_animation();
            animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
          }
        }

        if (running_program) {
          if (now >= running_program.end) {
            tick(t = running_program.b, 1 - t);
            dispatch(node, running_program.b, 'end');

            if (!pending_program) {
              // we're done
              if (running_program.b) {
                // intro — we can tidy up immediately
                clear_animation();
              } else {
                // outro — needs to be coordinated
                if (! --running_program.group.r) run_all(running_program.group.c);
              }
            }

            running_program = null;
          } else if (now >= running_program.start) {
            var p = now - running_program.start;
            t = running_program.a + running_program.d * easing(p / running_program.duration);
            tick(t, 1 - t);
          }
        }

        return !!(running_program || pending_program);
      });
    }
  }

  return {
    run: function run(b) {
      if (is_function(config)) {
        wait().then(function () {
          // @ts-ignore
          config = config();
          go(b);
        });
      } else {
        go(b);
      }
    },
    end: function end() {
      clear_animation();
      running_program = pending_program = null;
    }
  };
}

function handle_promise(promise, info) {
  var token = info.token = {};

  function update(type, index, key, value) {
    if (info.token !== token) return;
    info.resolved = value;
    var child_ctx = info.ctx;

    if (key !== undefined) {
      child_ctx = child_ctx.slice();
      child_ctx[key] = value;
    }

    var block = type && (info.current = type)(child_ctx);
    var needs_flush = false;

    if (info.block) {
      if (info.blocks) {
        info.blocks.forEach(function (block, i) {
          if (i !== index && block) {
            group_outros();
            transition_out(block, 1, 1, function () {
              if (info.blocks[i] === block) {
                info.blocks[i] = null;
              }
            });
            check_outros();
          }
        });
      } else {
        info.block.d(1);
      }

      block.c();
      transition_in(block, 1);
      block.m(info.mount(), info.anchor);
      needs_flush = true;
    }

    info.block = block;
    if (info.blocks) info.blocks[index] = block;

    if (needs_flush) {
      flush();
    }
  }

  if (is_promise(promise)) {
    var _current_component = get_current_component();

    promise.then(function (value) {
      set_current_component(_current_component);
      update(info.then, 1, info.value, value);
      set_current_component(null);
    }, function (error) {
      set_current_component(_current_component);
      update(info["catch"], 2, info.error, error);
      set_current_component(null);

      if (!info.hasCatch) {
        throw error;
      }
    }); // if we previously had a then/catch block, destroy it

    if (info.current !== info.pending) {
      update(info.pending, 0);
      return true;
    }
  } else {
    if (info.current !== info.then) {
      update(info.then, 1, info.value, promise);
      return true;
    }

    info.resolved = promise;
  }
}

function update_await_block_branch(info, ctx, dirty) {
  var child_ctx = ctx.slice();
  var resolved = info.resolved;

  if (info.current === info.then) {
    child_ctx[info.value] = resolved;
  }

  if (info.current === info["catch"]) {
    child_ctx[info.error] = resolved;
  }

  info.block.p(child_ctx, dirty);
}

var globals = typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : global;

function destroy_block(block, lookup) {
  block.d(1);
  lookup["delete"](block.key);
}

function outro_and_destroy_block(block, lookup) {
  transition_out(block, 1, 1, function () {
    lookup["delete"](block.key);
  });
}

function fix_and_destroy_block(block, lookup) {
  block.f();
  destroy_block(block, lookup);
}

function fix_and_outro_and_destroy_block(block, lookup) {
  block.f();
  outro_and_destroy_block(block, lookup);
}

function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
  var o = old_blocks.length;
  var n = list.length;
  var i = o;
  var old_indexes = {};

  while (i--) {
    old_indexes[old_blocks[i].key] = i;
  }

  var new_blocks = [];
  var new_lookup = new Map();
  var deltas = new Map();
  i = n;

  while (i--) {
    var child_ctx = get_context(ctx, list, i);
    var key = get_key(child_ctx);
    var block = lookup.get(key);

    if (!block) {
      block = create_each_block(key, child_ctx);
      block.c();
    } else if (dynamic) {
      block.p(child_ctx, dirty);
    }

    new_lookup.set(key, new_blocks[i] = block);
    if (key in old_indexes) deltas.set(key, Math.abs(i - old_indexes[key]));
  }

  var will_move = new Set();
  var did_move = new Set();

  function insert(block) {
    transition_in(block, 1);
    block.m(node, next);
    lookup.set(block.key, block);
    next = block.first;
    n--;
  }

  while (o && n) {
    var new_block = new_blocks[n - 1];
    var old_block = old_blocks[o - 1];
    var new_key = new_block.key;
    var old_key = old_block.key;

    if (new_block === old_block) {
      // do nothing
      next = new_block.first;
      o--;
      n--;
    } else if (!new_lookup.has(old_key)) {
      // remove old block
      destroy(old_block, lookup);
      o--;
    } else if (!lookup.has(new_key) || will_move.has(new_key)) {
      insert(new_block);
    } else if (did_move.has(old_key)) {
      o--;
    } else if (deltas.get(new_key) > deltas.get(old_key)) {
      did_move.add(new_key);
      insert(new_block);
    } else {
      will_move.add(old_key);
      o--;
    }
  }

  while (o--) {
    var _old_block = old_blocks[o];
    if (!new_lookup.has(_old_block.key)) destroy(_old_block, lookup);
  }

  while (n) {
    insert(new_blocks[n - 1]);
  }

  return new_blocks;
}

function validate_each_keys(ctx, list, get_context, get_key) {
  var keys = new Set();

  for (var i = 0; i < list.length; i++) {
    var key = get_key(get_context(ctx, list, i));

    if (keys.has(key)) {
      throw new Error('Cannot have duplicate keys in a keyed each');
    }

    keys.add(key);
  }
}

function get_spread_update(levels, updates) {
  var update = {};
  var to_null_out = {};
  var accounted_for = {
    $$scope: 1
  };
  var i = levels.length;

  while (i--) {
    var o = levels[i];
    var n = updates[i];

    if (n) {
      for (var key in o) {
        if (!(key in n)) to_null_out[key] = 1;
      }

      for (var _key3 in n) {
        if (!accounted_for[_key3]) {
          update[_key3] = n[_key3];
          accounted_for[_key3] = 1;
        }
      }

      levels[i] = n;
    } else {
      for (var _key4 in o) {
        accounted_for[_key4] = 1;
      }
    }
  }

  for (var _key5 in to_null_out) {
    if (!(_key5 in update)) update[_key5] = undefined;
  }

  return update;
}

function get_spread_object(spread_props) {
  return _typeof(spread_props) === 'object' && spread_props !== null ? spread_props : {};
} // source: https://html.spec.whatwg.org/multipage/indices.html


var boolean_attributes = new Set(['allowfullscreen', 'allowpaymentrequest', 'async', 'autofocus', 'autoplay', 'checked', 'controls', 'default', 'defer', 'disabled', 'formnovalidate', 'hidden', 'ismap', 'loop', 'multiple', 'muted', 'nomodule', 'novalidate', 'open', 'playsinline', 'readonly', 'required', 'reversed', 'selected']);
var invalid_attribute_name_character = /(?:[\t-\r "'\/=>\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFDD0-\uFDEF\uFEFF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF])/; // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter

function spread(args, attrs_to_add) {
  var attributes = Object.assign.apply(Object, [{}].concat(_toConsumableArray(args)));

  if (attrs_to_add) {
    var classes_to_add = attrs_to_add.classes;
    var styles_to_add = attrs_to_add.styles;

    if (classes_to_add) {
      if (attributes["class"] == null) {
        attributes["class"] = classes_to_add;
      } else {
        attributes["class"] += ' ' + classes_to_add;
      }
    }

    if (styles_to_add) {
      if (attributes.style == null) {
        attributes.style = style_object_to_string(styles_to_add);
      } else {
        attributes.style = style_object_to_string(merge_ssr_styles(attributes.style, styles_to_add));
      }
    }
  }

  var str = '';
  Object.keys(attributes).forEach(function (name) {
    if (invalid_attribute_name_character.test(name)) return;
    var value = attributes[name];
    if (value === true) str += ' ' + name;else if (boolean_attributes.has(name.toLowerCase())) {
      if (value) str += ' ' + name;
    } else if (value != null) {
      str += " ".concat(name, "=\"").concat(value, "\"");
    }
  });
  return str;
}

function merge_ssr_styles(style_attribute, style_directive) {
  var style_object = {};

  var _iterator3 = _createForOfIteratorHelper(style_attribute.split(';')),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var individual_style = _step3.value;
      var colon_index = individual_style.indexOf(':');

      var _name = individual_style.slice(0, colon_index).trim();

      var _value = individual_style.slice(colon_index + 1).trim();

      if (!_name) continue;
      style_object[_name] = _value;
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  for (var name in style_directive) {
    var value = style_directive[name];

    if (value) {
      style_object[name] = value;
    } else {
      delete style_object[name];
    }
  }

  return style_object;
}

var escaped = {
  '"': '&quot;',
  "'": '&#39;',
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};

function escape(html) {
  return String(html).replace(/["'&<>]/g, function (match) {
    return escaped[match];
  });
}

function escape_attribute_value(value) {
  return typeof value === 'string' ? escape(value) : value;
}

function escape_object(obj) {
  var result = {};

  for (var key in obj) {
    result[key] = escape_attribute_value(obj[key]);
  }

  return result;
}

function each(items, fn) {
  var str = '';

  for (var i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }

  return str;
}

var missing_component = {
  $$render: function $$render() {
    return '';
  }
};

function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === 'svelte:component') name += ' this={...}';
    throw new Error("<".concat(name, "> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules"));
  }

  return component;
}

function debug(file, line, column, values) {
  console.log("{@debug} ".concat(file ? file + ' ' : '', "(").concat(line, ":").concat(column, ")")); // eslint-disable-line no-console

  console.log(values); // eslint-disable-line no-console

  return '';
}

var on_destroy;

function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    var parent_component = current_component;
    var $$ = {
      on_destroy: on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({
      $$: $$
    });
    var html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }

  return {
    render: function render() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref5$$$slots = _ref5.$$slots,
          $$slots = _ref5$$$slots === void 0 ? {} : _ref5$$$slots,
          _ref5$context = _ref5.context,
          context = _ref5$context === void 0 ? new Map() : _ref5$context;

      on_destroy = [];
      var result = {
        title: '',
        head: '',
        css: new Set()
      };
      var html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html: html,
        css: {
          code: Array.from(result.css).map(function (css) {
            return css.code;
          }).join('\n'),
          map: null // TODO

        },
        head: result.title + result.head
      };
    },
    $$render: $$render
  };
}

function add_attribute(name, value, _boolean) {
  if (value == null || _boolean && !value) return '';
  var assignment = _boolean && value === true ? '' : "=\"".concat(escape_attribute_value(value.toString()), "\"");
  return " ".concat(name).concat(assignment);
}

function add_classes(classes) {
  return classes ? " class=\"".concat(classes, "\"") : '';
}

function style_object_to_string(style_object) {
  return Object.keys(style_object).filter(function (key) {
    return style_object[key];
  }).map(function (key) {
    return "".concat(key, ": ").concat(style_object[key], ";");
  }).join(' ');
}

function add_styles(style_object) {
  var styles = style_object_to_string(style_object);
  return styles ? " style=\"".concat(styles, "\"") : '';
}

function bind(component, name, callback) {
  var index = component.$$.props[name];

  if (index !== undefined) {
    component.$$.bound[index] = callback;
    callback(component.$$.ctx[index]);
  }
}

function create_component(block) {
  block && block.c();
}

function claim_component(block, parent_nodes) {
  block && block.l(parent_nodes);
}

function mount_component(component, target, anchor, customElement) {
  var _component$$$ = component.$$,
      fragment = _component$$$.fragment,
      on_mount = _component$$$.on_mount,
      on_destroy = _component$$$.on_destroy,
      after_update = _component$$$.after_update;
  fragment && fragment.m(target, anchor);

  if (!customElement) {
    // onMount happens before the initial afterUpdate
    add_render_callback(function () {
      var new_on_destroy = on_mount.map(run).filter(is_function);

      if (on_destroy) {
        on_destroy.push.apply(on_destroy, _toConsumableArray(new_on_destroy));
      } else {
        // Edge case - component was destroyed immediately,
        // most likely as a result of a binding initialising
        run_all(new_on_destroy);
      }

      component.$$.on_mount = [];
    });
  }

  after_update.forEach(add_render_callback);
}

function destroy_component(component, detaching) {
  var $$ = component.$$;

  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
    // preserve final state?)

    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}

function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }

  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}

function init(component, options, instance, create_fragment, not_equal, props, append_styles) {
  var dirty = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : [-1];
  var parent_component = current_component;
  set_current_component(component);
  var $$ = component.$$ = {
    fragment: null,
    ctx: null,
    // state
    props: props,
    update: noop,
    not_equal: not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
    // everything else
    callbacks: blank_object(),
    dirty: dirty,
    skip_bound: false,
    root: options.target || parent_component.$$.root
  };
  append_styles && append_styles($$.root);
  var ready = false;
  $$.ctx = instance ? instance(component, options.props || {}, function (i, ret) {
    var value = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : ret;

    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
      if (ready) make_dirty(component, i);
    }

    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update); // `false` as a special case of no DOM component

  $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

  if (options.target) {
    if (options.hydrate) {
      start_hydrating();
      var nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      $$.fragment && $$.fragment.c();
    }

    if (options.intro) transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor, options.customElement);
    end_hydrating();
    flush();
  }

  set_current_component(parent_component);
}

var SvelteElement;

if (typeof HTMLElement === 'function') {
  SvelteElement = /*#__PURE__*/function (_HTMLElement) {
    _inherits(SvelteElement, _HTMLElement);

    var _super2 = _createSuper(SvelteElement);

    function SvelteElement() {
      var _this3;

      _classCallCheck(this, SvelteElement);

      _this3 = _super2.call(this);

      _this3.attachShadow({
        mode: 'open'
      });

      return _this3;
    }

    _createClass(SvelteElement, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var on_mount = this.$$.on_mount;
        this.$$.on_disconnect = on_mount.map(run).filter(is_function); // @ts-ignore todo: improve typings

        for (var key in this.$$.slotted) {
          // @ts-ignore todo: improve typings
          this.appendChild(this.$$.slotted[key]);
        }
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(attr, _oldValue, newValue) {
        this[attr] = newValue;
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        run_all(this.$$.on_disconnect);
      }
    }, {
      key: "$destroy",
      value: function $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
      }
    }, {
      key: "$on",
      value: function $on(type, callback) {
        // TODO should this delegate to addEventListener?
        var callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return function () {
          var index = callbacks.indexOf(callback);
          if (index !== -1) callbacks.splice(index, 1);
        };
      }
    }, {
      key: "$set",
      value: function $set($$props) {
        if (this.$$set && !is_empty($$props)) {
          this.$$.skip_bound = true;
          this.$$set($$props);
          this.$$.skip_bound = false;
        }
      }
    }]);

    return SvelteElement;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
}
/**
 * Base class for Svelte components. Used when dev=false.
 */


var SvelteComponent = /*#__PURE__*/function () {
  function SvelteComponent() {
    _classCallCheck(this, SvelteComponent);
  }

  _createClass(SvelteComponent, [{
    key: "$destroy",
    value: function $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
  }, {
    key: "$on",
    value: function $on(type, callback) {
      var callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return function () {
        var index = callbacks.indexOf(callback);
        if (index !== -1) callbacks.splice(index, 1);
      };
    }
  }, {
    key: "$set",
    value: function $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  }]);

  return SvelteComponent;
}();

function dispatch_dev(type, detail) {
  document.dispatchEvent(custom_event(type, Object.assign({
    version: '3.47.0'
  }, detail), true));
}

function append_dev(target, node) {
  dispatch_dev('SvelteDOMInsert', {
    target: target,
    node: node
  });
  append(target, node);
}

function append_hydration_dev(target, node) {
  dispatch_dev('SvelteDOMInsert', {
    target: target,
    node: node
  });
  append_hydration(target, node);
}

function insert_dev(target, node, anchor) {
  dispatch_dev('SvelteDOMInsert', {
    target: target,
    node: node,
    anchor: anchor
  });
  insert(target, node, anchor);
}

function insert_hydration_dev(target, node, anchor) {
  dispatch_dev('SvelteDOMInsert', {
    target: target,
    node: node,
    anchor: anchor
  });
  insert_hydration(target, node, anchor);
}

function detach_dev(node) {
  dispatch_dev('SvelteDOMRemove', {
    node: node
  });
  detach(node);
}

function detach_between_dev(before, after) {
  while (before.nextSibling && before.nextSibling !== after) {
    detach_dev(before.nextSibling);
  }
}

function detach_before_dev(after) {
  while (after.previousSibling) {
    detach_dev(after.previousSibling);
  }
}

function detach_after_dev(before) {
  while (before.nextSibling) {
    detach_dev(before.nextSibling);
  }
}

function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
  var modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
  if (has_prevent_default) modifiers.push('preventDefault');
  if (has_stop_propagation) modifiers.push('stopPropagation');
  dispatch_dev('SvelteDOMAddEventListener', {
    node: node,
    event: event,
    handler: handler,
    modifiers: modifiers
  });
  var dispose = listen(node, event, handler, options);
  return function () {
    dispatch_dev('SvelteDOMRemoveEventListener', {
      node: node,
      event: event,
      handler: handler,
      modifiers: modifiers
    });
    dispose();
  };
}

function attr_dev(node, attribute, value) {
  attr(node, attribute, value);
  if (value == null) dispatch_dev('SvelteDOMRemoveAttribute', {
    node: node,
    attribute: attribute
  });else dispatch_dev('SvelteDOMSetAttribute', {
    node: node,
    attribute: attribute,
    value: value
  });
}

function prop_dev(node, property, value) {
  node[property] = value;
  dispatch_dev('SvelteDOMSetProperty', {
    node: node,
    property: property,
    value: value
  });
}

function dataset_dev(node, property, value) {
  node.dataset[property] = value;
  dispatch_dev('SvelteDOMSetDataset', {
    node: node,
    property: property,
    value: value
  });
}

function set_data_dev(text, data) {
  data = '' + data;
  if (text.wholeText === data) return;
  dispatch_dev('SvelteDOMSetData', {
    node: text,
    data: data
  });
  text.data = data;
}

function validate_each_argument(arg) {
  if (typeof arg !== 'string' && !(arg && _typeof(arg) === 'object' && 'length' in arg)) {
    var msg = '{#each} only iterates over array-like objects.';

    if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
      msg += ' You can use a spread to convert this iterable into an array.';
    }

    throw new Error(msg);
  }
}

function validate_slots(name, slot, keys) {
  for (var _i4 = 0, _Object$keys = Object.keys(slot); _i4 < _Object$keys.length; _i4++) {
    var slot_key = _Object$keys[_i4];

    if (!~keys.indexOf(slot_key)) {
      console.warn("<".concat(name, "> received an unexpected slot \"").concat(slot_key, "\"."));
    }
  }
}

function validate_dynamic_element(tag) {
  if (tag && typeof tag !== 'string') {
    throw new Error('<svelte:element> expects "this" attribute to be a string.');
  }
}
/**
 * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
 */


var SvelteComponentDev = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(SvelteComponentDev, _SvelteComponent);

  var _super3 = _createSuper(SvelteComponentDev);

  function SvelteComponentDev(options) {
    _classCallCheck(this, SvelteComponentDev);

    if (!options || !options.target && !options.$$inline) {
      throw new Error("'target' is a required option");
    }

    return _super3.call(this);
  }

  _createClass(SvelteComponentDev, [{
    key: "$destroy",
    value: function $destroy() {
      _get(_getPrototypeOf(SvelteComponentDev.prototype), "$destroy", this).call(this);

      this.$destroy = function () {
        console.warn('Component was already destroyed'); // eslint-disable-line no-console
      };
    }
  }, {
    key: "$capture_state",
    value: function $capture_state() {}
  }, {
    key: "$inject_state",
    value: function $inject_state() {}
  }]);

  return SvelteComponentDev;
}(SvelteComponent);
/**
 * Base class to create strongly typed Svelte components.
 * This only exists for typing purposes and should be used in `.d.ts` files.
 *
 * ### Example:
 *
 * You have component library on npm called `component-library`, from which
 * you export a component called `MyComponent`. For Svelte+TypeScript users,
 * you want to provide typings. Therefore you create a `index.d.ts`:
 * ```ts
 * import { SvelteComponentTyped } from "svelte";
 * export class MyComponent extends SvelteComponentTyped<{foo: string}> {}
 * ```
 * Typing this makes it possible for IDEs like VS Code with the Svelte extension
 * to provide intellisense and to use the component like this in a Svelte file
 * with TypeScript:
 * ```svelte
 * <script lang="ts">
 * 	import { MyComponent } from "component-library";
 * </script>
 * <MyComponent foo={'bar'} />
 * ```
 *
 * #### Why not make this part of `SvelteComponent(Dev)`?
 * Because
 * ```ts
 * class ASubclassOfSvelteComponent extends SvelteComponent<{foo: string}> {}
 * const component: typeof SvelteComponent = ASubclassOfSvelteComponent;
 * ```
 * will throw a type error, so we need to separate the more strictly typed class.
 */


var SvelteComponentTyped = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(SvelteComponentTyped, _SvelteComponentDev);

  var _super4 = _createSuper(SvelteComponentTyped);

  function SvelteComponentTyped(options) {
    _classCallCheck(this, SvelteComponentTyped);

    return _super4.call(this, options);
  }

  return _createClass(SvelteComponentTyped);
}(SvelteComponentDev);

function loop_guard(timeout) {
  var start = Date.now();
  return function () {
    if (Date.now() - start > timeout) {
      throw new Error('Infinite loop detected');
    }
  };
}



/***/ }),

/***/ "./node_modules/svelte/store/index.mjs":
/*!*********************************************!*\
  !*** ./node_modules/svelte/store/index.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "derived": () => (/* binding */ derived),
/* harmony export */   "get": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.get_store_value),
/* harmony export */   "readable": () => (/* binding */ readable),
/* harmony export */   "writable": () => (/* binding */ writable)
/* harmony export */ });
/* harmony import */ var _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal/index.mjs */ "./node_modules/svelte/internal/index.mjs");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var subscriber_queue = [];
/**
 * Creates a `Readable` store that allows reading by subscription.
 * @param value initial value
 * @param {StartStopNotifier}start start and stop notifications for subscriptions
 */

function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */


function writable(value) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.noop;
  var stop;
  var subscribers = new Set();

  function set(new_value) {
    if ((0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal)(value, new_value)) {
      value = new_value;

      if (stop) {
        // store is ready
        var run_queue = !subscriber_queue.length;

        var _iterator = _createForOfIteratorHelper(subscribers),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var subscriber = _step.value;
            subscriber[1]();
            subscriber_queue.push(subscriber, value);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        if (run_queue) {
          for (var i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }

          subscriber_queue.length = 0;
        }
      }
    }
  }

  function update(fn) {
    set(fn(value));
  }

  function subscribe(run) {
    var invalidate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.noop;
    var subscriber = [run, invalidate];
    subscribers.add(subscriber);

    if (subscribers.size === 1) {
      stop = start(set) || _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.noop;
    }

    run(value);
    return function () {
      subscribers["delete"](subscriber);

      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }

  return {
    set: set,
    update: update,
    subscribe: subscribe
  };
}

function derived(stores, fn, initial_value) {
  var single = !Array.isArray(stores);
  var stores_array = single ? [stores] : stores;
  var auto = fn.length < 2;
  return readable(initial_value, function (set) {
    var inited = false;
    var values = [];
    var pending = 0;
    var cleanup = _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.noop;

    var sync = function sync() {
      if (pending) {
        return;
      }

      cleanup();
      var result = fn(single ? values[0] : values, set);

      if (auto) {
        set(result);
      } else {
        cleanup = (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.is_function)(result) ? result : _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.noop;
      }
    };

    var unsubscribers = stores_array.map(function (store, i) {
      return (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.subscribe)(store, function (value) {
        values[i] = value;
        pending &= ~(1 << i);

        if (inited) {
          sync();
        }
      }, function () {
        pending |= 1 << i;
      });
    });
    inited = true;
    sync();
    return function stop() {
      (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.run_all)(unsubscribers);
      cleanup();
    };
  });
}



/***/ }),

/***/ "./node_modules/axios/package.json":
/*!*****************************************!*\
  !*** ./node_modules/axios/package.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/sass/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;