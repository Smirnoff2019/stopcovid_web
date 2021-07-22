/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/admin/app.js":
/*!***********************************!*\
  !*** ./resources/js/admin/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./modules/index.js */ "./resources/js/admin/modules/index.js");

__webpack_require__(/*! ./clipboard/index.js */ "./resources/js/admin/clipboard/index.js");

__webpack_require__(/*! ./components/buttons.js */ "./resources/js/admin/components/buttons.js");

__webpack_require__(/*! ./preloader/main.js */ "./resources/js/admin/preloader/main.js");

__webpack_require__(/*! ./ckeditor/index.js */ "./resources/js/admin/ckeditor/index.js");

__webpack_require__(/*! ./tables/tables.js */ "./resources/js/admin/tables/tables.js"); // require('./modules/');

/***/ }),

/***/ "./resources/js/admin/ckeditor/index.js":
/*!**********************************************!*\
  !*** ./resources/js/admin/ckeditor/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  $(document).ready(function () {
    $('#ckeditor-field').each(function () {
      var $this = $(this);
      var ckeditorField = CKEDITOR.replace('ckeditor-field');

      if (ckeditorField) {
        ckeditorField.on('change', function (evt) {
          var data = evt.editor.getData();
          $this.text(data);
        });
      }
    });
  });
})(jQuery);

/***/ }),

/***/ "./resources/js/admin/clipboard/index.js":
/*!***********************************************!*\
  !*** ./resources/js/admin/clipboard/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

;

(function ($) {
  // ClipboardJS
  // Подробнее => https://itchief.ru/lessons/javascript/javascript-clipboard 
  var clipboard = new ClipboardJS('.js-btn-clipboard').on('success', function (e) {
    $(e.trigger).find('.clipboard-status').addClass('active');
    e.clearSelection();
  }).on('error', function (e) {
    console.error('Действие:', e.action);
    console.error('Триггер:', e.trigger);
  });
})(jQuery);

/***/ }),

/***/ "./resources/js/admin/components/buttons.js":
/*!**************************************************!*\
  !*** ./resources/js/admin/components/buttons.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

;

(function ($) {
  (function () {
    $('.js-iconSection-collapse').each(function (index, item) {
      $(item).click(function (e) {
        e.preventDefault();
        var id = $(this).attr('href');
        $(id).slideToggle(250);
        $(this).find('i').toggleClass('fa-angle-down fa-angle-up');
      });
    });
  })();

  (function () {
    var sidebarSections = $('.main-sidebar .sidebar-section.treeview');
    sidebarSections.each(function (index, item) {
      var $head = $(item).find('.head');
      var $body = $(item).find('.body');

      if (!$(item).hasClass('active')) {
        $body.slideUp(0);
      }

      $head.click(function (e) {
        console.log("e", e);
        $(item).toggleClass('active');
        $body.slideToggle(300);
        console.log("$(item)", $(item));
      });
    });
  })();

  (function () {
    $('a[href="#"]').each(function (index, item) {
      $(item).click(function (e) {
        return e.preventDefault();
      });
    });
  })();

  (function () {
    $('.js-close-btn').each(function (index, item) {
      $(item).click(function (e) {
        e.preventDefault();
        $($(this).data('close')).fadeOut(300);
      });
    });
  })();

  (function () {
    $('.rainbow-box .code-header .controlls').each(function (index, item) {
      $(item).click(function () {
        $(this).closest('.rainbow-box').find('code').slideToggle(300);
      });
    });
  })();

  (function () {
    $('#render-media-library').ImagesLibrary(function (request) {
      console.log("ImagesLibrary request", request);
    });
  })();

  (function () {
    $('.js-click-triger-btn').on('click input', function (event) {
      event.preventDefault();
      var trigerElemId = $(this).data('trigerid');
      console.log("trigerElemId", trigerElemId);
      $("#".concat(trigerElemId)).click();
    });
  })();
})(jQuery);

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/index.js":
/*!**********************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./master/index.js */ "./resources/js/admin/modules/ImageLibrary/master/index.js");

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Components/GalleryItem.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Components/GalleryItem.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function GalleryItemComponent(itemData) {
  var id = itemData.id,
      url = itemData.url,
      title = itemData.title,
      description = itemData.description;
  return $('<li>').addClass('attachment').attr('role', 'radio').attr('data-id', id).append(function () {
    return [$('<div>').addClass('attachment-preview').append(function () {
      return [$('<div>').addClass('thumbnail').append(function () {
        return $('<div>').addClass('centered').append(function () {
          return $('<img>').attr('src', url).attr('alt', '');
        });
      }), $('<div>').addClass('uploading-progress').append(function () {
        return $('<div>').addClass('progress-field').append(function () {
          return $('<div>').addClass('progress-line');
        });
      })];
    }), $('<button>').addClass('check fa fa-check')];
  });
}

/* harmony default export */ __webpack_exports__["default"] = (GalleryItemComponent);

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Controllers/AttachmentUploadingModController.js":
/*!********************************************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Controllers/AttachmentUploadingModController.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseController.js */ "./resources/js/admin/modules/ImageLibrary/master/Controllers/BaseController.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var AttachmentUploadingModController = /*#__PURE__*/function (_BaseController) {
  _inherits(AttachmentUploadingModController, _BaseController);

  var _super = _createSuper(AttachmentUploadingModController);

  function AttachmentUploadingModController(attachmentItem) {
    var _this;

    _classCallCheck(this, AttachmentUploadingModController);

    _this = _super.call(this, attachmentItem);
    _this.attachment = attachmentItem;
    _this.progressValue = 0;
    return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
  }

  _createClass(AttachmentUploadingModController, [{
    key: "boot",
    value: function boot(attachmentItem) {
      attachmentItem.setUploadingStatus();
      return this;
    }
  }, {
    key: "start",
    value: function start() {
      var $item = this.attachment;
      $item.setUploadingStatus();
      this.progressProcessing();
      return this;
    }
  }, {
    key: "stop",
    value: function stop() {
      var $item = this.attachment;
      var $progressLine = $item.find('.progress-line');
      this.stopUploadingProgress();
      $progressLine.css({
        width: "100%"
      });
      setTimeout(function () {
        $item.removeUploadingStatus();
      }, 200);
      return this;
    }
  }, {
    key: "handError",
    value: function handError() {
      var $item = this.attachment;
      $item.setError();
      return this;
    }
  }, {
    key: "progressProcessing",
    value: function progressProcessing() {
      var _this2 = this;

      var $item = this.attachment;
      var $progressLine = $item.find('.progress-line');
      var speed = 50;
      var limit = 95;
      this.timer = setInterval(function () {
        if (_this2.progressValue < limit) {
          $progressLine.css({
            width: "".concat(++_this2.progressValue, "%")
          });
        } else {
          _this2.stopUploadingProgress();
        }
      }, speed);
      return this;
    }
  }, {
    key: "stopUploadingProgress",
    value: function stopUploadingProgress() {
      clearInterval(this.timer);
      return this;
    }
  }, {
    key: "updateState",
    value: function updateState(data) {
      this.attachment.setState(data);
      return this;
    }
  }]);

  return AttachmentUploadingModController;
}(_BaseController_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (AttachmentUploadingModController);

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Controllers/BaseController.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Controllers/BaseController.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BaseController = /*#__PURE__*/function () {
  function BaseController() {
    _classCallCheck(this, BaseController);

    this.boot.apply(this, arguments);
  }

  _createClass(BaseController, [{
    key: "boot",
    value: function boot() {}
  }, {
    key: "callError",
    value: function callError() {
      var $message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'An error has occurred!';
      throw new Error($message);
      return;
    }
  }]);

  return BaseController;
}();

/* harmony default export */ __webpack_exports__["default"] = (BaseController);

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Controllers/CloseWidgetEventController.js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Controllers/CloseWidgetEventController.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseController.js */ "./resources/js/admin/modules/ImageLibrary/master/Controllers/BaseController.js");
/* harmony import */ var _Services_AppRequestService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/AppRequestService.js */ "./resources/js/admin/modules/ImageLibrary/master/Services/AppRequestService.js");
/* harmony import */ var _Services_SelectedImage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/SelectedImage.js */ "./resources/js/admin/modules/ImageLibrary/master/Services/SelectedImage.js");
/* harmony import */ var _Models_Widget_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/Widget.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/Widget.js");
/* harmony import */ var _Models_WidgetCloseBtn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Models/WidgetCloseBtn.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/WidgetCloseBtn.js");
/* harmony import */ var _Models_ReturnImageDataBtn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Models/ReturnImageDataBtn.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/ReturnImageDataBtn.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var CloseWidgetEventController = /*#__PURE__*/function (_BaseController) {
  _inherits(CloseWidgetEventController, _BaseController);

  var _super = _createSuper(CloseWidgetEventController);

  function CloseWidgetEventController() {
    _classCallCheck(this, CloseWidgetEventController);

    return _super.apply(this, arguments);
  }

  _createClass(CloseWidgetEventController, [{
    key: "boot",
    value: function boot() {
      this.widgetCloseBtnObserver();
      this.returnImageDataBtnObserver();
    }
  }, {
    key: "returnImageDataBtnObserver",
    value: function returnImageDataBtnObserver() {
      var _this = this;

      _Models_ReturnImageDataBtn_js__WEBPACK_IMPORTED_MODULE_5__["default"].on('click input', function (event) {
        _Models_ReturnImageDataBtn_js__WEBPACK_IMPORTED_MODULE_5__["default"].isActive(function () {
          if (_Services_SelectedImage_js__WEBPACK_IMPORTED_MODULE_2__["default"].hasImage()) {
            var $image = _Services_SelectedImage_js__WEBPACK_IMPORTED_MODULE_2__["default"].get();
            var imageData = $image.formatStateDataToRequest();
            _Services_AppRequestService_js__WEBPACK_IMPORTED_MODULE_1__["default"].pushRequest(imageData);

            _this.closeWidgetHandler();
          }
        });
      });
    }
  }, {
    key: "widgetCloseBtnObserver",
    value: function widgetCloseBtnObserver() {
      Object(_Models_WidgetCloseBtn_js__WEBPACK_IMPORTED_MODULE_4__["default"])().on('click input', this.closeWidgetHandler);
    }
  }, {
    key: "closeWidgetHandler",
    value: function closeWidgetHandler(event) {
      _Models_Widget_js__WEBPACK_IMPORTED_MODULE_3__["default"].closeWidget();
    }
  }]);

  return CloseWidgetEventController;
}(_BaseController_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (CloseWidgetEventController);

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Controllers/DragAndDropController.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Controllers/DragAndDropController.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseController.js */ "./resources/js/admin/modules/ImageLibrary/master/Controllers/BaseController.js");
/* harmony import */ var _UploadFilesController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UploadFilesController.js */ "./resources/js/admin/modules/ImageLibrary/master/Controllers/UploadFilesController.js");
/* harmony import */ var _Services_GalleryContent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/GalleryContent.js */ "./resources/js/admin/modules/ImageLibrary/master/Services/GalleryContent.js");
/* harmony import */ var _Services_DropFilesCatcher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/DropFilesCatcher.js */ "./resources/js/admin/modules/ImageLibrary/master/Services/DropFilesCatcher.js");
/* harmony import */ var _Services_InputFilesCatcher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/InputFilesCatcher.js */ "./resources/js/admin/modules/ImageLibrary/master/Services/InputFilesCatcher.js");
/* harmony import */ var _Models_AttachmentsGallery_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Models/AttachmentsGallery.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsGallery.js");
/* harmony import */ var _Models_Widget_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Models/Widget.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/Widget.js");
/* harmony import */ var _Models_DragAndDropArea_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Models/DragAndDropArea.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/DragAndDropArea.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }










var DragAndDropController = /*#__PURE__*/function (_BaseController) {
  _inherits(DragAndDropController, _BaseController);

  var _super = _createSuper(DragAndDropController);

  function DragAndDropController() {
    _classCallCheck(this, DragAndDropController);

    return _super.call(this);
  }

  _createClass(DragAndDropController, [{
    key: "boot",
    value: function boot() {
      this.dragSection = _Models_Widget_js__WEBPACK_IMPORTED_MODULE_6__["default"].find('.media-modal-drag-area');
      this.dragLeaveArea = _Models_Widget_js__WEBPACK_IMPORTED_MODULE_6__["default"].find('.drag-area-border');
      this.dragOverArea = _Models_Widget_js__WEBPACK_IMPORTED_MODULE_6__["default"].find('.media-modal-frame');
      this.dropArea = this.dragLeaveArea;
      this.body = $('body'); // this.fileInput = $('#attachment-image-input');

      this.clearFixEvents();
      this.dragOverEventObserver();
      this.dragLeaveEventObserver();
      this.dropEventObserver();
    }
  }, {
    key: "dragOverEventObserver",
    value: function dragOverEventObserver() {
      this.dragOverArea.on('dragenter dragover', function (event) {
        _Models_DragAndDropArea_js__WEBPACK_IMPORTED_MODULE_7__["default"].showArea();
      });
      return this;
    }
  }, {
    key: "dragLeaveEventObserver",
    value: function dragLeaveEventObserver() {
      this.dragLeaveArea.on('dragleave drop', function (event) {
        _Models_DragAndDropArea_js__WEBPACK_IMPORTED_MODULE_7__["default"].hideArea();
      });
      return this;
    }
  }, {
    key: "dropEventObserver",
    value: function dropEventObserver() {
      this.dropArea.on('drop', function (event) {
        var files = new _Services_DropFilesCatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"](event).getFiles();
        console.log("files", files);
        var uploadFilesController = new _UploadFilesController_js__WEBPACK_IMPORTED_MODULE_1__["default"](files);
        _Models_Widget_js__WEBPACK_IMPORTED_MODULE_6__["default"].find('#media-modal-library-tab').click();
      });
      return this;
    }
  }, {
    key: "clearFixEvents",
    value: function clearFixEvents() {
      var _this = this;

      ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function (eventName) {
        _this.dragLeaveArea.on(eventName, function (event) {
          _this.preventDefaultsHandler(event);
        });

        _this.dragOverArea.on(eventName, function (event) {
          console.log("clearFixEvents dragOverArea event", event);

          _this.preventDefaultsHandler(event);
        });

        _this.body.on(eventName, function (event) {
          _this.preventDefaultsHandler(event);
        });
      });
      return this;
    }
  }, {
    key: "preventDefaultsHandler",
    value: function preventDefaultsHandler(event) {
      event.preventDefault();
      event.stopPropagation();
      return this;
    }
  }]);

  return DragAndDropController;
}(_BaseController_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (DragAndDropController);

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Controllers/GalleryController.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Controllers/GalleryController.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseController.js */ "./resources/js/admin/modules/ImageLibrary/master/Controllers/BaseController.js");
/* harmony import */ var _GalleryItemController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GalleryItemController.js */ "./resources/js/admin/modules/ImageLibrary/master/Controllers/GalleryItemController.js");
/* harmony import */ var _Services_AjaxService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/AjaxService.js */ "./resources/js/admin/modules/ImageLibrary/master/Services/AjaxService.js");
/* harmony import */ var _Services_GalleryContentLoadingService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/GalleryContentLoadingService.js */ "./resources/js/admin/modules/ImageLibrary/master/Services/GalleryContentLoadingService.js");
/* harmony import */ var _Services_GalleryContent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/GalleryContent.js */ "./resources/js/admin/modules/ImageLibrary/master/Services/GalleryContent.js");
/* harmony import */ var _Services_GalleryItemCreator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/GalleryItemCreator.js */ "./resources/js/admin/modules/ImageLibrary/master/Services/GalleryItemCreator.js");
/* harmony import */ var _Models_AttachmentsGallery_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Models/AttachmentsGallery.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsGallery.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var GalleryController = /*#__PURE__*/function (_BaseController) {
  _inherits(GalleryController, _BaseController);

  var _super = _createSuper(GalleryController);

  function GalleryController() {
    var _this;

    _classCallCheck(this, GalleryController);

    _this = _super.call(this);
    _this.canAjaxSend = true;
    return _this;
  }

  _createClass(GalleryController, [{
    key: "boot",
    value: function boot() {
      var Gallery = _Models_AttachmentsGallery_js__WEBPACK_IMPORTED_MODULE_6__["default"];
      this.events(Gallery);
    }
  }, {
    key: "events",
    value: function events(Gallery) {
      var _this2 = this;

      Gallery.scroll(function (event) {
        var $elem = $(event.target);
        var oversideFactor = 50;
        var galleryParentHeight = $elem.parent().height();
        var galleryHeight = $elem.height();
        var galleryScrollTop = $elem.scrollTop();
        var scrollHeight = $elem.prop('scrollHeight');
        var curentScrollPosition = galleryHeight + galleryScrollTop;
        var heightDelta = scrollHeight - curentScrollPosition;
        var isScrollToEnd = heightDelta < oversideFactor;

        if (isScrollToEnd && _this2.canAjaxSend) {
          _this2.loadMoreImages();
        }
      });
    }
  }, {
    key: "loadMoreImages",
    value: function loadMoreImages() {
      var _this3 = this;

      this.canAjaxSend = false;
      _Models_AttachmentsGallery_js__WEBPACK_IMPORTED_MODULE_6__["default"].showLoader();
      _Services_GalleryContentLoadingService_js__WEBPACK_IMPORTED_MODULE_3__["default"].loadNextPage(function (request) {
        var imagesList = request.data;
        _Services_GalleryContent_js__WEBPACK_IMPORTED_MODULE_4__["default"].addImages(imagesList);

        _toConsumableArray(imagesList).map(function (itemData) {
          var $galleryItem = new _Services_GalleryItemCreator_js__WEBPACK_IMPORTED_MODULE_5__["default"](itemData);
          var $galleryItemController = new _GalleryItemController_js__WEBPACK_IMPORTED_MODULE_1__["default"]($galleryItem);
        });

        _Models_AttachmentsGallery_js__WEBPACK_IMPORTED_MODULE_6__["default"].hideLoader();
        setTimeout(function () {
          _this3.canAjaxSend = true;
        }, 200);
      }, function (res) {
        if (res === false) {
          _Models_AttachmentsGallery_js__WEBPACK_IMPORTED_MODULE_6__["default"].hideLoader();
        }
      });
    }
  }]);

  return GalleryController;
}(_BaseController_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (GalleryController);

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Controllers/GalleryItemController.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Controllers/GalleryItemController.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseController.js */ "./resources/js/admin/modules/ImageLibrary/master/Controllers/BaseController.js");
/* harmony import */ var _Services_SelectedImage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/SelectedImage.js */ "./resources/js/admin/modules/ImageLibrary/master/Services/SelectedImage.js");
/* harmony import */ var _Components_GalleryItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/GalleryItem.js */ "./resources/js/admin/modules/ImageLibrary/master/Components/GalleryItem.js");
/* harmony import */ var _Models_AttachmentsGallery_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/AttachmentsGallery.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsGallery.js");
/* harmony import */ var _Models_AttachmentModel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Models/AttachmentModel.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentModel.js");
/* harmony import */ var _Models_AttachmentsInfoPanell_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Models/AttachmentsInfoPanell.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell.js");
/* harmony import */ var _Models_ReturnImageDataBtn_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Models/ReturnImageDataBtn.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/ReturnImageDataBtn.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var GalleryItemController = /*#__PURE__*/function (_BaseController) {
  _inherits(GalleryItemController, _BaseController);

  var _super = _createSuper(GalleryItemController);

  function GalleryItemController(attachmentItem) {
    var _this;

    _classCallCheck(this, GalleryItemController);

    _this = _super.call(this, attachmentItem);
    _this.attachmentItem = attachmentItem;
    return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
  }

  _createClass(GalleryItemController, [{
    key: "boot",
    value: function boot(attachmentItem) {
      this.events(attachmentItem);
    }
  }, {
    key: "events",
    value: function events($item) {
      $item.on('click input', function (event) {
        if ($item.isUntouchable()) return;
        $item.select(function (elem) {
          if (elem.isSelected()) {
            _Models_AttachmentsInfoPanell_js__WEBPACK_IMPORTED_MODULE_5__["default"].activate(elem.state);
            _Services_SelectedImage_js__WEBPACK_IMPORTED_MODULE_1__["default"].set(elem);
            _Models_ReturnImageDataBtn_js__WEBPACK_IMPORTED_MODULE_6__["default"].setState({
              status: true
            });
          } else {
            _Models_AttachmentsInfoPanell_js__WEBPACK_IMPORTED_MODULE_5__["default"].deactivate(elem.state);
            _Services_SelectedImage_js__WEBPACK_IMPORTED_MODULE_1__["default"].remove();
            _Models_ReturnImageDataBtn_js__WEBPACK_IMPORTED_MODULE_6__["default"].setState({
              status: false
            });
          }
        });
      });
    }
  }]);

  return GalleryItemController;
}(_BaseController_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (GalleryItemController);

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Controllers/OpenWidgetEventController.js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Controllers/OpenWidgetEventController.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseController.js */ "./resources/js/admin/modules/ImageLibrary/master/Controllers/BaseController.js");
/* harmony import */ var _GalleryItemController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GalleryItemController.js */ "./resources/js/admin/modules/ImageLibrary/master/Controllers/GalleryItemController.js");
/* harmony import */ var _Services_AjaxService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/AjaxService.js */ "./resources/js/admin/modules/ImageLibrary/master/Services/AjaxService.js");
/* harmony import */ var _Services_GalleryContentLoadingService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/GalleryContentLoadingService.js */ "./resources/js/admin/modules/ImageLibrary/master/Services/GalleryContentLoadingService.js");
/* harmony import */ var _Services_GalleryContent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/GalleryContent.js */ "./resources/js/admin/modules/ImageLibrary/master/Services/GalleryContent.js");
/* harmony import */ var _Services_GalleryItemCreator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/GalleryItemCreator.js */ "./resources/js/admin/modules/ImageLibrary/master/Services/GalleryItemCreator.js");
/* harmony import */ var _Models_Widget_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Models/Widget.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/Widget.js");
/* harmony import */ var _Models_AttachmentsGallery_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Models/AttachmentsGallery.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsGallery.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }










var OpenWidgetEventController = /*#__PURE__*/function (_BaseController) {
  _inherits(OpenWidgetEventController, _BaseController);

  var _super = _createSuper(OpenWidgetEventController);

  function OpenWidgetEventController() {
    _classCallCheck(this, OpenWidgetEventController);

    return _super.apply(this, arguments);
  }

  _createClass(OpenWidgetEventController, [{
    key: "boot",
    value: function boot() {
      this.clearGalleryContent();
      _Models_Widget_js__WEBPACK_IMPORTED_MODULE_6__["default"].openWidget();
      this.loadGalleryContent();
    }
  }, {
    key: "clearGalleryContent",
    value: function clearGalleryContent() {
      _Models_AttachmentsGallery_js__WEBPACK_IMPORTED_MODULE_7__["default"].showLoader();
      _Models_AttachmentsGallery_js__WEBPACK_IMPORTED_MODULE_7__["default"].clear();
    }
  }, {
    key: "loadGalleryContent",
    value: function loadGalleryContent() {
      _Services_GalleryContentLoadingService_js__WEBPACK_IMPORTED_MODULE_3__["default"].loadFirstPage(function (request) {
        var imagesList = request.data;
        _Services_GalleryContent_js__WEBPACK_IMPORTED_MODULE_4__["default"].addImages(imagesList);

        _toConsumableArray(imagesList).map(function (itemData) {
          var $galleryItem = new _Services_GalleryItemCreator_js__WEBPACK_IMPORTED_MODULE_5__["default"](itemData);
          var $galleryItemController = new _GalleryItemController_js__WEBPACK_IMPORTED_MODULE_1__["default"]($galleryItem);
        });

        _Models_AttachmentsGallery_js__WEBPACK_IMPORTED_MODULE_7__["default"].delay(10).hideLoader();
      });
    }
  }]);

  return OpenWidgetEventController;
}(_BaseController_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (OpenWidgetEventController);

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Controllers/UploadFilesController.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Controllers/UploadFilesController.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseController.js */ "./resources/js/admin/modules/ImageLibrary/master/Controllers/BaseController.js");
/* harmony import */ var _GalleryItemController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GalleryItemController.js */ "./resources/js/admin/modules/ImageLibrary/master/Controllers/GalleryItemController.js");
/* harmony import */ var _AttachmentUploadingModController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AttachmentUploadingModController.js */ "./resources/js/admin/modules/ImageLibrary/master/Controllers/AttachmentUploadingModController.js");
/* harmony import */ var _Services_GalleryContentLoadingService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/GalleryContentLoadingService.js */ "./resources/js/admin/modules/ImageLibrary/master/Services/GalleryContentLoadingService.js");
/* harmony import */ var _Services_GalleryContent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/GalleryContent.js */ "./resources/js/admin/modules/ImageLibrary/master/Services/GalleryContent.js");
/* harmony import */ var _Services_GalleryItemCreator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/GalleryItemCreator.js */ "./resources/js/admin/modules/ImageLibrary/master/Services/GalleryItemCreator.js");
/* harmony import */ var _Models_AttachmentsGallery_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Models/AttachmentsGallery.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsGallery.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var UploadFilesController = /*#__PURE__*/function (_BaseController) {
  _inherits(UploadFilesController, _BaseController);

  var _super = _createSuper(UploadFilesController);

  function UploadFilesController(files) {
    var _this;

    _classCallCheck(this, UploadFilesController);

    _this = _super.call(this, files);
    var url = $('meta[name="media-upload-action"]').prop('content');
    _this.uploadUrl = url;
    _this.files = files;
    return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
  }

  _createClass(UploadFilesController, [{
    key: "boot",
    value: function boot(files) {
      var _this2 = this;

      _toConsumableArray(files).map(function (file) {
        _this2.uploadFile(file);
      });

      return this;
    }
  }, {
    key: "uploadFile",
    value: function uploadFile($file) {
      var _this3 = this;

      var reader = new FileReader();
      reader.readAsDataURL($file);

      reader.onloadend = function (event) {
        var imageUrl = reader.result;
        var itemData = {
          id: null,
          url: imageUrl
        };
        var $galleryItem = new _Services_GalleryItemCreator_js__WEBPACK_IMPORTED_MODULE_5__["default"](itemData, false);
        var $galleryItemController = new _GalleryItemController_js__WEBPACK_IMPORTED_MODULE_1__["default"]($galleryItem);
        var $uploadingMod = new _AttachmentUploadingModController_js__WEBPACK_IMPORTED_MODULE_2__["default"]($galleryItem);

        _this3.uploadImageToServer($file, $uploadingMod);
      };
    }
  }, {
    key: "uploadImageToServer",
    value: function uploadImageToServer($file, $progressMod) {
      $progressMod.start();
      var AjaxData = new FormData();
      AjaxData.append('file', $file);
      var apiUrl = this.uploadUrl;
      var csrf_token = $('meta[name="csrf-token"]').prop('content');
      $.ajax({
        headers: {
          'X-CSRF-TOKEN': csrf_token
        },
        url: apiUrl,
        type: 'post',
        dataType: 'json',
        contentType: false,
        processData: false,
        data: AjaxData
      }).done(function (request) {
        $progressMod.stop();
        $progressMod.updateState(request);
      }).fail(function (request) {}).always(function (request) {});
    }
  }]);

  return UploadFilesController;
}(_BaseController_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (UploadFilesController);

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Controllers/WidgetSettingsController.js":
/*!************************************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Controllers/WidgetSettingsController.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseController.js */ "./resources/js/admin/modules/ImageLibrary/master/Controllers/BaseController.js");
/* harmony import */ var _Models_AttachmentsGallery_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Models/AttachmentsGallery.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsGallery.js");
/* harmony import */ var _Models_WidgetSettings_AttachmentColumns_TypesField_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/WidgetSettings/AttachmentColumns/TypesField.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/WidgetSettings/AttachmentColumns/TypesField.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var WidgetSettingsController = /*#__PURE__*/function (_BaseController) {
  _inherits(WidgetSettingsController, _BaseController);

  var _super = _createSuper(WidgetSettingsController);

  function WidgetSettingsController() {
    _classCallCheck(this, WidgetSettingsController);

    return _super.call(this);
  }

  _createClass(WidgetSettingsController, [{
    key: "boot",
    value: function boot() {
      this.galleryListColumnsViewTypes();
    }
  }, {
    key: "galleryListColumnsViewTypes",
    value: function galleryListColumnsViewTypes() {
      _Models_WidgetSettings_AttachmentColumns_TypesField_js__WEBPACK_IMPORTED_MODULE_2__["default"].renderTypesOptions();
      _Models_WidgetSettings_AttachmentColumns_TypesField_js__WEBPACK_IMPORTED_MODULE_2__["default"].on('change', function (e) {
        var value = $(this).val();
        _Models_WidgetSettings_AttachmentColumns_TypesField_js__WEBPACK_IMPORTED_MODULE_2__["default"].setState({
          type: value
        });
        _Models_WidgetSettings_AttachmentColumns_TypesField_js__WEBPACK_IMPORTED_MODULE_2__["default"].eachTypes(function (className) {
          _Models_AttachmentsGallery_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeClass(className);
        });
        var typeData = _Models_WidgetSettings_AttachmentColumns_TypesField_js__WEBPACK_IMPORTED_MODULE_2__["default"].getTypeClassName(value);
        var className = typeData.value;
        _Models_AttachmentsGallery_js__WEBPACK_IMPORTED_MODULE_1__["default"].addClass(className);
      });
    }
  }]);

  return WidgetSettingsController;
}(_BaseController_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (WidgetSettingsController);

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Helpers/CheckTypeHelper.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Helpers/CheckTypeHelper.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// [
// 	{
// 		name:'getTypeName',
// 		fun: getTypeName
// 	},
// 	{
// 		name:'checkValuesByType',
// 		fun: checkValuesByType
// 	},
// 	{
// 		name:'checkValueType',
// 		fun: checkValueType
// 	},
// 	{
// 		name:'isArray',
// 		fun: isArray
// 	},
// 	{
// 		name:'isFunction',
// 		fun: isFunction
// 	},
// 	{
// 		name:'isObject',
// 		fun: isObject
// 	},
// 	{
// 		name:'isString',
// 		fun: isString
// 	},
// 	{
// 		name:'isNumber',
// 		fun: isNumber
// 	},
// ]
function getTypeName(value) {
  var regex = /^\[object (\S+?)\]$/;
  var matches = Object.prototype.toString.call(value).match(regex) || [];
  return (matches[1] || 'undefined').toLowerCase();
}

function checkValuesByType(typeName, values) {
  if (typeName) {
    var result = _toConsumableArray(values).reduce(function (previousValue, value, index, array) {
      var res = getTypeName(value) == typeName ? 0 : -1;
      return previousValue += res;
    }, 0);

    return result >= 0;
  }

  throw new Error('typeName not found!');
}

function checkValueType(typeName, value) {
  if (typeName) {
    return getTypeName(value) === typeName;
  }

  throw new Error('typeName not found!');
}

function createHelperFunction(typeName) {
  var fName = "is".concat(typeName);
  var rTypeName = typeName.toLowerCase();
  return window[fName] = function (value, callback) {
    var result = checkValueType(rTypeName, value);

    if (result && checkValueType('function', callback)) {
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      callback.apply(void 0, args);
    }

    return result;
  };
  return typeName;
}

;
var helpers = {};

var _helpers = ['Array', 'Function', 'Object', 'String', 'Number', 'Boolean'].map(function (typeName) {
  var f = createHelperFunction(typeName);
  helpers["is".concat(typeName)] = f;
  return f;
});

/* harmony default export */ __webpack_exports__["default"] = (helpers);

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentModel.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentModel.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModel.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/BaseModel.js");
/* harmony import */ var _AttachmentsGallery_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AttachmentsGallery.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsGallery.js");
/* harmony import */ var _AttachmentsInfoPanell_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AttachmentsInfoPanell.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell.js");




var AttachmentModel = function AttachmentModel(elem) {
  var $this = elem;
  Object(_BaseModel_js__WEBPACK_IMPORTED_MODULE_0__["default"])($this);
  $this.classList = {
    selected: 'selected',
    uploading: 'uploading',
    error: 'error'
  };
  $this.selectedStatus = $this.hasClass($this.classList.selected);
  $this.untouchable = false; // ==============================================================
  // Methods
  // ==============================================================

  $this.isSelected = function (callback) {
    if ($this.selectedStatus) {
      $this.callbackHandler(callback);
    }

    return $this.selectedStatus;
  };

  $this.isUntouchable = function (callback) {
    if ($this.untouchable) {
      $this.callbackHandler(callback);
    }

    return $this.untouchable;
  };

  $this.select = function (callback) {
    var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
    var className = $this.classList.selected;
    var activeStatus = $this.hasClass($this.classList.selected);
    _AttachmentsGallery_js__WEBPACK_IMPORTED_MODULE_1__["default"].itemsList(function (itemsList) {
      itemsList.each(function (index, item) {
        var $item = AttachmentModel($(item));
        $item.unselect();
      });
    });

    if (activeStatus) {
      $this.removeClass(className);
      $this.selectedStatus = false;
    } else {
      $this.addClass(className);
      $this.selectedStatus = true;
    }

    $this.callbackHandler(callback);
    return $this;
  };

  $this.unselect = function (callback) {
    var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
    var className = $this.classList.selected;
    $this.removeClass(className);
    $this.selectedStatus = false;
    $this.callbackHandler(callback);
    return $this;
  };

  $this.bindSelect = function (callback) {
    var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

    if ($this.selectedStatus) {
      $this.select();
    } else {
      $this.unselect();
    }

    $this.callbackHandler(callback);
    return $this;
  };

  $this.formatStateDataToRequest = function () {
    var _$this$state = $this.state,
        id = _$this$state.id,
        title = _$this$state.title,
        description = _$this$state.description,
        name = _$this$state.name,
        format = _$this$state.format,
        url = _$this$state.url;
    return {
      id: id,
      title: title,
      description: description,
      name: name,
      format: format,
      url: url
    };
  };

  $this.setUploadingStatus = function (callback) {
    $this.untouchable = true;
    $this.addClass($this.classList.uploading);
    $this.callbackHandler(callback);
    return $this;
  };

  $this.removeUploadingStatus = function (callback) {
    $this.untouchable = false;
    $this.removeClass($this.classList.uploading);
    $this.callbackHandler(callback);
    return $this;
  };

  $this.setError = function (callback) {
    $this.untouchable = true;
    $this.removeClass($this.classList.selected);
    $this.removeClass($this.classList.uploading);
    $this.addClass($this.classList.error);
    $this.callbackHandler(callback);
    return $this;
  }; // ==============================================================


  return $this;
};

/* harmony default export */ __webpack_exports__["default"] = (AttachmentModel);

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsGallery.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsGallery.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModel.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/BaseModel.js");
/* harmony import */ var _Widget_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Widget.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/Widget.js");



var AttachmentsGallery = function AttachmentsGallery(elem) {
  var $this = elem || _Widget_js__WEBPACK_IMPORTED_MODULE_1__["default"].gallery;
  Object(_BaseModel_js__WEBPACK_IMPORTED_MODULE_0__["default"])($this);
  $this.loadingClassName = 'loading'; // ==============================================================
  // Methods
  // ==============================================================

  $this.clear = function (callback) {
    $this.html('');
    $this.callbackHandler(callback);
    return $this;
  };

  $this.itemsList = function (callback) {
    var itemsList = $this.find('.attachment');
    $this.callbackHandler(callback, itemsList, $this);
    return itemsList;
  };

  $this.showLoader = function (callback) {
    var $parent = $this.parent();
    var className = $this.loadingClassName;
    $parent.addClass(className);
    $this.callbackHandler(callback);
    return $this;
  };

  $this.hideLoader = function (callback) {
    var $parent = $this.parent();
    var className = $this.loadingClassName;
    $parent.removeClass(className);
    $this.callbackHandler(callback);
    return $this;
  }; // ==============================================================


  return $this;
};

/* harmony default export */ __webpack_exports__["default"] = (AttachmentsGallery());

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModel.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/BaseModel.js");
/* harmony import */ var _Widget_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Widget.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/Widget.js");
/* harmony import */ var _AttachmentsInfoPanell_InfoPanellPrompt_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AttachmentsInfoPanell/InfoPanellPrompt.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell/InfoPanellPrompt.js");
/* harmony import */ var _AttachmentsInfoPanell_InfoPanellForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AttachmentsInfoPanell/InfoPanellForm.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell/InfoPanellForm.js");





var AttachmentsInfoPanell = function AttachmentsInfoPanell(elem) {
  var $this = elem || _Widget_js__WEBPACK_IMPORTED_MODULE_1__["default"].infoPanell;
  Object(_BaseModel_js__WEBPACK_IMPORTED_MODULE_0__["default"])($this);
  $this.infoPanellPromptSelector = '#attachments-info-prompt';
  $this.infoPanellPrompt = $this.find($this.infoPanellPromptSelector);
  $this.infoPanellFormSelector = '#attachments-info-form';
  $this.infoPanellForm = $this.find($this.infoPanellFormSelector); // ==============================================================
  // Methods
  // ==============================================================

  $this.activate = function (data) {
    _AttachmentsInfoPanell_InfoPanellForm_js__WEBPACK_IMPORTED_MODULE_3__["default"].setState(data);
    _AttachmentsInfoPanell_InfoPanellPrompt_js__WEBPACK_IMPORTED_MODULE_2__["default"].hidePanell();
    _AttachmentsInfoPanell_InfoPanellForm_js__WEBPACK_IMPORTED_MODULE_3__["default"].delay(_AttachmentsInfoPanell_InfoPanellForm_js__WEBPACK_IMPORTED_MODULE_3__["default"].animationTime).showPanell();
    return $this;
  };

  $this.deactivate = function (data) {
    _AttachmentsInfoPanell_InfoPanellForm_js__WEBPACK_IMPORTED_MODULE_3__["default"].setState(data);
    _AttachmentsInfoPanell_InfoPanellForm_js__WEBPACK_IMPORTED_MODULE_3__["default"].hidePanell();
    _AttachmentsInfoPanell_InfoPanellPrompt_js__WEBPACK_IMPORTED_MODULE_2__["default"].delay(_AttachmentsInfoPanell_InfoPanellForm_js__WEBPACK_IMPORTED_MODULE_3__["default"].animationTime).showPanell();
    return $this;
  }; // ==============================================================


  return $this;
};

/* harmony default export */ __webpack_exports__["default"] = (AttachmentsInfoPanell());

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell/InfoPanellForm.js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell/InfoPanellForm.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BaseModel.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/BaseModel.js");
/* harmony import */ var _Widget_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Widget.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/Widget.js");
/* harmony import */ var _InfoPanellForm_Image_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InfoPanellForm/Image.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell/InfoPanellForm/Image.js");
/* harmony import */ var _InfoPanellForm_Link_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InfoPanellForm/Link.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell/InfoPanellForm/Link.js");
/* harmony import */ var _InfoPanellForm_Title_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InfoPanellForm/Title.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell/InfoPanellForm/Title.js");
/* harmony import */ var _InfoPanellForm_Description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InfoPanellForm/Description.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell/InfoPanellForm/Description.js");
/* harmony import */ var _InfoPanellForm_CreatedAt_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InfoPanellForm/CreatedAt.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell/InfoPanellForm/CreatedAt.js");
/* harmony import */ var _InfoPanellForm_Name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./InfoPanellForm/Name.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell/InfoPanellForm/Name.js");









var InfoPanellForm = function InfoPanellForm(elem) {
  var $this = elem || _Widget_js__WEBPACK_IMPORTED_MODULE_1__["default"].infoPanell.find('#attachments-info-form');
  Object(_BaseModel_js__WEBPACK_IMPORTED_MODULE_0__["default"])($this);
  $this.imageSelector = '#attachments-info-image';
  $this.image = $this.find($this.imageSelector);
  $this.titleSelector = '#attachments-info-title';
  $this.title = $this.find($this.titleSelector);
  $this.descriptionSelector = '#attachments-info-description';
  $this.description = $this.find($this.descriptionSelector);
  $this.linkSelector = '#attachments-info-link';
  $this.link = $this.find($this.linkSelector);
  $this.createdAtSelector = '#attachments-info-created_at';
  $this.createdAt = $this.find($this.createdAtSelector);
  $this.nameSelector = '#attachments-info-name';
  $this.name = $this.find($this.nameSelector);
  $this.userSelector = '#attachments-info-user';
  $this.user = $this.find($this.userSelector);
  $this.animationTime = 300; // ==============================================================
  // Methods
  // ==============================================================

  $this.showPanell = function (callback) {
    $this.fadeIn($this.animationTime);
    $this.callbackHandler(callback);
    return $this;
  };

  $this.hidePanell = function (callback) {
    $this.fadeOut($this.animationTime);
    $this.callbackHandler(callback);
    return $this;
  };

  $this.updateFormData = function ($elem) {
    var state = $this.state;
    Object(_InfoPanellForm_Image_js__WEBPACK_IMPORTED_MODULE_2__["default"])($this.image).setState(state);
    Object(_InfoPanellForm_Link_js__WEBPACK_IMPORTED_MODULE_3__["default"])($this.link).setState(state);
    Object(_InfoPanellForm_Title_js__WEBPACK_IMPORTED_MODULE_4__["default"])($this.title).setState(state);
    Object(_InfoPanellForm_Description_js__WEBPACK_IMPORTED_MODULE_5__["default"])($this.description).setState(state);
    Object(_InfoPanellForm_CreatedAt_js__WEBPACK_IMPORTED_MODULE_6__["default"])($this.createdAt).setState(state);
    Object(_InfoPanellForm_Name_js__WEBPACK_IMPORTED_MODULE_7__["default"])($this.name).setState(state);
    return $this;
  }; // ==============================================================


  $this.stateHandlers = [$this.updateFormData];
  return $this;
};

/* harmony default export */ __webpack_exports__["default"] = (InfoPanellForm());

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell/InfoPanellForm/CreatedAt.js":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell/InfoPanellForm/CreatedAt.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../BaseModel.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/BaseModel.js");
/* harmony import */ var _InfoPanellForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../InfoPanellForm.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell/InfoPanellForm.js");



var CreatedAt = function CreatedAt(elem) {
  var $this = elem || _InfoPanellForm_js__WEBPACK_IMPORTED_MODULE_1__["default"].createdAt;
  Object(_BaseModel_js__WEBPACK_IMPORTED_MODULE_0__["default"])($this);
  $this.state = {
    created_at: null
  }; // ==============================================================
  // Methods
  // ==============================================================

  $this.changeDate = function ($elem) {
    var created_at = $this.state.created_at;
    var date = new Date(created_at).toDateString();
    $this.text(date || 'Нет данных');
    return $this;
  }; // ==============================================================


  $this.stateHandlers = [$this.changeDate];
  return $this;
};

/* harmony default export */ __webpack_exports__["default"] = (CreatedAt);

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell/InfoPanellForm/Description.js":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell/InfoPanellForm/Description.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../BaseModel.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/BaseModel.js");
/* harmony import */ var _InfoPanellForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../InfoPanellForm.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell/InfoPanellForm.js");



var Description = function Description(elem) {
  var $this = elem || _InfoPanellForm_js__WEBPACK_IMPORTED_MODULE_1__["default"].description;
  Object(_BaseModel_js__WEBPACK_IMPORTED_MODULE_0__["default"])($this);
  $this.state = {
    description: null
  }; // ==============================================================
  // Methods
  // ==============================================================

  $this.changeDescription = function ($elem) {
    var description = $this.state.description;
    $this.val(description);
    return $this;
  }; // ==============================================================


  $this.stateHandlers = [$this.changeDescription];
  return $this;
};

/* harmony default export */ __webpack_exports__["default"] = (Description);

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell/InfoPanellForm/Image.js":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell/InfoPanellForm/Image.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../BaseModel.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/BaseModel.js");
/* harmony import */ var _InfoPanellForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../InfoPanellForm.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell/InfoPanellForm.js");



var Image = function Image(elem) {
  var $this = elem || _InfoPanellForm_js__WEBPACK_IMPORTED_MODULE_1__["default"].image;
  Object(_BaseModel_js__WEBPACK_IMPORTED_MODULE_0__["default"])($this);
  $this.state = {
    url: null,
    title: null
  }; // ==============================================================
  // Methods
  // ==============================================================

  $this.resetAttrValues = function ($elem) {
    var _$this$state = $this.state,
        url = _$this$state.url,
        title = _$this$state.title;
    $this.attr('src', url);
    $this.attr('alt', title);
    return $this;
  }; // ==============================================================


  $this.stateHandlers = [$this.resetAttrValues];
  return $this;
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell/InfoPanellForm/Link.js":
/*!************************************************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell/InfoPanellForm/Link.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../BaseModel.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/BaseModel.js");
/* harmony import */ var _InfoPanellForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../InfoPanellForm.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell/InfoPanellForm.js");



var Link = function Link(elem) {
  var $this = elem || _InfoPanellForm_js__WEBPACK_IMPORTED_MODULE_1__["default"].link;
  Object(_BaseModel_js__WEBPACK_IMPORTED_MODULE_0__["default"])($this);
  $this.state = {
    url: null
  }; // ==============================================================
  // Methods
  // ==============================================================

  $this.resetAttrValues = function ($elem) {
    var url = $this.state.url;
    var urlTitle = "".concat(url.substr(0, 35), "...");
    $this.attr('href', url);
    $this.text(urlTitle);
    return $this;
  }; // ==============================================================


  $this.stateHandlers = [$this.resetAttrValues];
  return $this;
};

/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell/InfoPanellForm/Name.js":
/*!************************************************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell/InfoPanellForm/Name.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../BaseModel.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/BaseModel.js");
/* harmony import */ var _InfoPanellForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../InfoPanellForm.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell/InfoPanellForm.js");



var Name = function Name(elem) {
  var $this = elem || _InfoPanellForm_js__WEBPACK_IMPORTED_MODULE_1__["default"].name;
  Object(_BaseModel_js__WEBPACK_IMPORTED_MODULE_0__["default"])($this);
  $this.state = {
    name: null
  }; // ==============================================================
  // Methods
  // ==============================================================

  $this.changeName = function ($elem) {
    var _$this$state = $this.state,
        name = _$this$state.name,
        format = _$this$state.format;
    $this.text("".concat(name, ".").concat(format));
    return $this;
  }; // ==============================================================


  $this.stateHandlers = [$this.changeName];
  return $this;
};

/* harmony default export */ __webpack_exports__["default"] = (Name);

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell/InfoPanellForm/Title.js":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell/InfoPanellForm/Title.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../BaseModel.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/BaseModel.js");
/* harmony import */ var _InfoPanellForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../InfoPanellForm.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell/InfoPanellForm.js");



var Title = function Title(elem) {
  var $this = elem || _InfoPanellForm_js__WEBPACK_IMPORTED_MODULE_1__["default"].title;
  Object(_BaseModel_js__WEBPACK_IMPORTED_MODULE_0__["default"])($this);
  $this.state = {
    title: null
  }; // ==============================================================
  // Methods
  // ==============================================================

  $this.changeTitle = function ($elem) {
    var title = $this.state.title;
    $this.val(title);
    return $this;
  }; // ==============================================================


  $this.stateHandlers = [$this.changeTitle];
  return $this;
};

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell/InfoPanellPrompt.js":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsInfoPanell/InfoPanellPrompt.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BaseModel.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/BaseModel.js");
/* harmony import */ var _Widget_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Widget.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/Widget.js");



var InfoPanellPrompt = function InfoPanellPrompt(elem) {
  var $this = elem || _Widget_js__WEBPACK_IMPORTED_MODULE_1__["default"].infoPanell.find('#attachments-info-prompt');
  Object(_BaseModel_js__WEBPACK_IMPORTED_MODULE_0__["default"])($this);
  $this.animationTime = 300; // ==============================================================
  // Methods
  // ==============================================================

  $this.showPanell = function (callback) {
    $this.fadeIn($this.animationTime);
    $this.callbackHandler(callback);
    return $this;
  };

  $this.hidePanell = function (callback) {
    $this.fadeOut($this.animationTime);
    $this.callbackHandler(callback);
    return $this;
  }; // ==============================================================


  return $this;
};

/* harmony default export */ __webpack_exports__["default"] = (InfoPanellPrompt());

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Models/BaseModel.js":
/*!****************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Models/BaseModel.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function BaseModel(elem) {
  elem.state = {};
  elem.stateHandlers = []; // ==============================================================
  // Methods
  // ==============================================================

  elem.callError = function () {
    var $message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'An error has occurred!';
    throw new Error($message);
    return;
  };

  elem.setState = function (data, callback) {
    for (var key in data) {
      elem.state[key] = data[key];
    }

    elem.stateHandler();
    elem.callbackHandler(callback);
    return elem;
  };

  elem.stateHandler = function (callback) {
    _toConsumableArray(elem.getStateHandlers()).map(function (item) {
      item(elem);
    });

    elem.callbackHandler(callback);
    return elem;
  };

  elem.callbackHandler = function (callback) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    isFunction(callback, function () {
      var _args = [].concat(args).length > 0 ? [].concat(args) : [elem];

      callback.apply(void 0, _toConsumableArray(_args));
    });
    return elem;
  };

  elem.getStateHandlers = function () {
    return this.stateHandlers;
  }; // ==============================================================


  return elem;
}

/* harmony default export */ __webpack_exports__["default"] = (BaseModel);

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Models/DragAndDropArea.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Models/DragAndDropArea.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModel.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/BaseModel.js");
/* harmony import */ var _Widget_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Widget.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/Widget.js");



var DragAndDropArea = function DragAndDropArea(elem) {
  var $this = elem || _Widget_js__WEBPACK_IMPORTED_MODULE_1__["default"].find('.media-modal-drag-area');
  Object(_BaseModel_js__WEBPACK_IMPORTED_MODULE_0__["default"])($this);
  $this.activeClassName = 'active';
  $this.dropArea = $this.find('.drag-area-border');
  $this.state = {
    status: false
  }; // ==============================================================
  // Methods
  // ==============================================================

  $this.showArea = function (callback) {
    var className = $this.activeClassName;
    $this.addClass(className);
    $this.callbackHandler(callback);
    return $this;
  };

  $this.hideArea = function (callback) {
    var className = $this.activeClassName;
    $this.removeClass(className);
    $this.callbackHandler(callback);
    return $this;
  }; // ==============================================================


  $this.stateHandlers = [];
  return $this;
};

/* harmony default export */ __webpack_exports__["default"] = (DragAndDropArea());

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Models/MediaFrameSettingsMenu.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Models/MediaFrameSettingsMenu.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModel.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/BaseModel.js");
/* harmony import */ var _Widget_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Widget.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/Widget.js");



var MediaFrameSettingsMenu = function MediaFrameSettingsMenu(elem) {
  var $this = elem || _Widget_js__WEBPACK_IMPORTED_MODULE_1__["default"].find('#media-frame-settings');
  Object(_BaseModel_js__WEBPACK_IMPORTED_MODULE_0__["default"])($this);
  $this.state = {}; // ==============================================================
  // Methods
  // ==============================================================
  // ==============================================================

  $this.stateHandlers = [];
  return $this;
};

/* harmony default export */ __webpack_exports__["default"] = (MediaFrameSettingsMenu());

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Models/ReturnImageDataBtn.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Models/ReturnImageDataBtn.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModel.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/BaseModel.js");
/* harmony import */ var _Widget_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Widget.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/Widget.js");



var ReturnImageDataBtn = function ReturnImageDataBtn(elem) {
  var $this = elem || _Widget_js__WEBPACK_IMPORTED_MODULE_1__["default"].find('#widget-return-image');
  Object(_BaseModel_js__WEBPACK_IMPORTED_MODULE_0__["default"])($this);
  $this.classList = {
    active: 'btn-primary',
    deactive: 'btn-secondary'
  };
  $this.state = {
    status: false
  }; // ==============================================================
  // Methods
  // ==============================================================

  $this.activate = function (callback) {
    $this.setState({
      status: true
    });
    $this.callbackHandler(callback);
    return $this;
  };

  $this.deactivate = function (callback) {
    $this.setState({
      status: true
    });
    $this.callbackHandler(callback);
    return $this;
  };

  $this.changeBtnClass = function (callback) {
    var status = $this.state.status;
    var _$this$classList = $this.classList,
        active = _$this$classList.active,
        deactive = _$this$classList.deactive;
    $this.removeClass(status ? deactive : active).addClass(status ? active : deactive);
    $this.callbackHandler(callback);
    return $this;
  };

  $this.isActive = function (callback) {
    var status = $this.state.status;
    $this.callbackHandler(callback);
    return status;
  }; // ==============================================================


  $this.stateHandlers = [$this.changeBtnClass];
  return $this;
};

/* harmony default export */ __webpack_exports__["default"] = (ReturnImageDataBtn());

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Models/Widget.js":
/*!*************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Models/Widget.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModel.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/BaseModel.js");


var Widget = function Widget(elem) {
  var $this = elem || $('#media-library-widget');
  Object(_BaseModel_js__WEBPACK_IMPORTED_MODULE_0__["default"])($this);
  $this.gallerySelector = '.attachments-list';
  $this.gallery = $this.find($this.gallerySelector);
  $this.infoPanellSelector = '.attachments-info';
  $this.infoPanell = $this.find($this.infoPanellSelector); // ==============================================================
  // Methods
  // ==============================================================

  $this.openWidget = function () {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
    var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
    $this.fadeIn(time);
    $this.callbackHandler(callback);
    return $this;
  };

  $this.closeWidget = function () {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
    var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
    $this.fadeOut(time);
    $this.callbackHandler(callback);
    return $this;
  }; // ==============================================================


  return $this;
};

/* harmony default export */ __webpack_exports__["default"] = (Widget());

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Models/WidgetCloseBtn.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Models/WidgetCloseBtn.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModel.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/BaseModel.js");


var WidgetCloseBtn = function WidgetCloseBtn(elem) {
  var $this = elem || $('#media-library-widget-close-btn');
  Object(_BaseModel_js__WEBPACK_IMPORTED_MODULE_0__["default"])($this); // ==============================================================
  // Methods
  // ==============================================================
  // ==============================================================

  return $this;
};

/* harmony default export */ __webpack_exports__["default"] = (WidgetCloseBtn);

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Models/WidgetSettings/AttachmentColumns.js":
/*!***************************************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Models/WidgetSettings/AttachmentColumns.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BaseModel.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/BaseModel.js");
/* harmony import */ var _Widget_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Widget.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/Widget.js");
/* harmony import */ var _MediaFrameSettingsMenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MediaFrameSettingsMenu.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/MediaFrameSettingsMenu.js");
/* harmony import */ var _AttachmentsGallery_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AttachmentsGallery.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsGallery.js");





var AttachmentColumns = function AttachmentColumns(elem) {
  var $this = elem || _MediaFrameSettingsMenu_js__WEBPACK_IMPORTED_MODULE_2__["default"].find('#attachment-columns-module');
  Object(_BaseModel_js__WEBPACK_IMPORTED_MODULE_0__["default"])($this); // ==============================================================
  // Methods
  // ==============================================================
  // ==============================================================

  $this.stateHandlers = [];
  return $this;
};

/* harmony default export */ __webpack_exports__["default"] = (AttachmentColumns());

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Models/WidgetSettings/AttachmentColumns/TypesField.js":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Models/WidgetSettings/AttachmentColumns/TypesField.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../BaseModel.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/BaseModel.js");
/* harmony import */ var _Widget_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Widget.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/Widget.js");
/* harmony import */ var _MediaFrameSettingsMenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../MediaFrameSettingsMenu.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/MediaFrameSettingsMenu.js");
/* harmony import */ var _AttachmentsGallery_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../AttachmentsGallery.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsGallery.js");
/* harmony import */ var _AttachmentColumns_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AttachmentColumns.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/WidgetSettings/AttachmentColumns.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







var TypesField = function TypesField(elem) {
  var $this = elem || _AttachmentColumns_js__WEBPACK_IMPORTED_MODULE_4__["default"].find('#select-attachment-columns');
  Object(_BaseModel_js__WEBPACK_IMPORTED_MODULE_0__["default"])($this);
  $this.types = [{
    value: 'attachment-columns-lv1',
    title: 'Мелкие иконки'
  }, {
    value: 'attachment-columns-lv2',
    title: 'Средние иконки'
  }, {
    value: 'attachment-columns-lv3',
    title: 'Большие иконки'
  }];
  $this.state = {
    type: 0
  }; // ==============================================================
  // Methods
  // ==============================================================

  $this.renderTypesOptions = function (callback) {
    var activeType = $this.state.type;
    var typesList = $this.types;

    var optionsList = _toConsumableArray(typesList).map(function (type, index) {
      var title = type.title,
          value = type.value;
      var selected = index === activeType;
      return $this.renderOption({
        title: title,
        value: index,
        selected: selected
      });
    });

    $this.callbackHandler(callback);
    return $this;
  };

  $this.renderOption = function (data) {
    var title = data.title,
        value = data.value,
        selected = data.selected;
    var $option = $('<option>').attr('value', value).attr('selected', selected).text(title);
    $this.append($option);
    return $option;
  };

  $this.getTypeClassName = function (value) {
    return $this.types[+value];
  };

  $this.eachTypes = function (callback) {
    var typesList = $this.types;

    _toConsumableArray(typesList).map(function (type) {
      var className = type.value;
      $this.callbackHandler(callback, className);
    });

    return $this;
  }; // ==============================================================


  $this.stateHandlers = [];
  return $this;
};

/* harmony default export */ __webpack_exports__["default"] = (TypesField());

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Providers/AppProvider.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Providers/AppProvider.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseProvider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseProvider.js */ "./resources/js/admin/modules/ImageLibrary/master/Providers/BaseProvider.js");
/* harmony import */ var _Controllers_OpenWidgetEventController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Controllers/OpenWidgetEventController.js */ "./resources/js/admin/modules/ImageLibrary/master/Controllers/OpenWidgetEventController.js");
/* harmony import */ var _Controllers_CloseWidgetEventController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controllers/CloseWidgetEventController.js */ "./resources/js/admin/modules/ImageLibrary/master/Controllers/CloseWidgetEventController.js");
/* harmony import */ var _Controllers_GalleryController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controllers/GalleryController.js */ "./resources/js/admin/modules/ImageLibrary/master/Controllers/GalleryController.js");
/* harmony import */ var _Controllers_WidgetSettingsController_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Controllers/WidgetSettingsController.js */ "./resources/js/admin/modules/ImageLibrary/master/Controllers/WidgetSettingsController.js");
/* harmony import */ var _Controllers_DragAndDropController_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Controllers/DragAndDropController.js */ "./resources/js/admin/modules/ImageLibrary/master/Controllers/DragAndDropController.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var AppProvider = /*#__PURE__*/function (_BaseProvider) {
  _inherits(AppProvider, _BaseProvider);

  var _super = _createSuper(AppProvider);

  function AppProvider() {
    _classCallCheck(this, AppProvider);

    return _super.apply(this, arguments);
  }

  _createClass(AppProvider, [{
    key: "boot",
    value: function boot() {
      new _Controllers_OpenWidgetEventController_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      new _Controllers_GalleryController_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
      new _Controllers_WidgetSettingsController_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
      new _Controllers_DragAndDropController_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
      new _Controllers_CloseWidgetEventController_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    }
  }]);

  return AppProvider;
}(_BaseProvider_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (AppProvider);

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Providers/BaseProvider.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Providers/BaseProvider.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BaseProvider = /*#__PURE__*/function () {
  function BaseProvider() {
    _classCallCheck(this, BaseProvider);

    this.boot();
  }

  _createClass(BaseProvider, [{
    key: "boot",
    value: function boot() {}
  }]);

  return BaseProvider;
}();

/* harmony default export */ __webpack_exports__["default"] = (BaseProvider);

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Services/AjaxService.js":
/*!********************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Services/AjaxService.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseService.js */ "./resources/js/admin/modules/ImageLibrary/master/Services/BaseService.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var AjaxService = /*#__PURE__*/function (_BaseService) {
  _inherits(AjaxService, _BaseService);

  var _super = _createSuper(AjaxService);

  function AjaxService(url) {
    var _this;

    _classCallCheck(this, AjaxService);

    _this = _super.call(this);
    _this.url = url;
    _this.requestHooks = [];
    return _this;
  }

  _createClass(AjaxService, [{
    key: "post",
    value: function post() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var config = {
        url: this.url,
        method: 'post',
        data: data
      };

      for (var _len = arguments.length, callbacks = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        callbacks[_key - 1] = arguments[_key];
      }

      this._ajax.apply(this, [config].concat(callbacks));

      return this;
    }
  }, {
    key: "get",
    value: function get() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var config = {
        url: this.url,
        method: 'get',
        data: data
      };

      for (var _len2 = arguments.length, callbacks = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        callbacks[_key2 - 1] = arguments[_key2];
      }

      this._ajax.apply(this, [config].concat(callbacks));

      return this;
    }
  }, {
    key: "request",
    value: function request() {
      var _this2 = this;

      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (e) {};
      isFunction(callback, function () {
        _this2.requestHooks.push(callback);
      });
      return this;
    }
  }, {
    key: "_doRequestHooks",
    value: function _doRequestHooks() {
      var _this3 = this;

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      _toConsumableArray(this.requestHooks).map(function (callback) {
        return _this3._doCallback.apply(_this3, [callback].concat(args));
      });

      return this;
    }
  }, {
    key: "_doCallback",
    value: function _doCallback() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }

      isFunction(callback, function () {
        callback.apply(void 0, args);
      });
      return this;
    }
  }, {
    key: "_ajax",
    value: function _ajax(config) {
      var _this4 = this;

      var url = config.url,
          method = config.method,
          data = config.data;

      for (var _len5 = arguments.length, callbacks = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        callbacks[_key5 - 1] = arguments[_key5];
      }

      var _ref = [].concat(callbacks),
          doneCallback = _ref[0],
          failCallback = _ref[1],
          alwaysCallback = _ref[2];

      jQuery.ajax({
        url: url,
        type: method || "GET",
        dataType: 'json',
        contentType: false,
        processData: false,
        data: data || null
      }).done(function () {
        for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          args[_key6] = arguments[_key6];
        }

        _this4._doCallback.apply(_this4, [doneCallback].concat(args));

        _this4._doRequestHooks.apply(_this4, args);
      }).fail(function () {
        for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
          args[_key7] = arguments[_key7];
        }

        _this4._doCallback.apply(_this4, [failCallback].concat(args));

        _this4._doRequestHooks.apply(_this4, args);
      }).always(function () {
        for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
          args[_key8] = arguments[_key8];
        }

        _this4._doCallback.apply(_this4, [alwaysCallback].concat(args));

        _this4._doRequestHooks.apply(_this4, args);
      });
      return this;
    }
  }]);

  return AjaxService;
}(_BaseService_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (AjaxService);

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Services/AppRequestService.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Services/AppRequestService.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseService.js */ "./resources/js/admin/modules/ImageLibrary/master/Services/BaseService.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var AppRequestService = /*#__PURE__*/function (_BaseService) {
  _inherits(AppRequestService, _BaseService);

  var _super = _createSuper(AppRequestService);

  function AppRequestService() {
    var _this;

    _classCallCheck(this, AppRequestService);

    _this = _super.call(this);
    _this.requestCallbacks = [];
    return _this;
  }

  _createClass(AppRequestService, [{
    key: "addHandler",
    value: function addHandler(callback) {
      var _this2 = this;

      isFunction(callback, function () {
        _this2.requestCallbacks.push(callback);
      });
      return this;
    }
  }, {
    key: "pushRequest",
    value: function pushRequest(data) {
      _toConsumableArray(this.requestCallbacks).map(function (callback) {
        callback(data);
      });

      return this;
    }
  }]);

  return AppRequestService;
}(_BaseService_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (new AppRequestService());

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Services/BaseService.js":
/*!********************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Services/BaseService.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BaseService = /*#__PURE__*/function () {
  function BaseService() {
    _classCallCheck(this, BaseService);

    this.boot();
  }

  _createClass(BaseService, [{
    key: "boot",
    value: function boot() {}
  }]);

  return BaseService;
}();

/* harmony default export */ __webpack_exports__["default"] = (BaseService);

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Services/DropFilesCatcher.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Services/DropFilesCatcher.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseService.js */ "./resources/js/admin/modules/ImageLibrary/master/Services/BaseService.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var DropFilesCatcher = /*#__PURE__*/function (_BaseService) {
  _inherits(DropFilesCatcher, _BaseService);

  var _super = _createSuper(DropFilesCatcher);

  function DropFilesCatcher(event) {
    var _this;

    _classCallCheck(this, DropFilesCatcher);

    _this = _super.call(this);

    _this.findFiles(event);

    return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
  }

  _createClass(DropFilesCatcher, [{
    key: "findFiles",
    value: function findFiles(event) {
      this.filesData = event.originalEvent.dataTransfer;
      this.fileList = this.filesData.files;
      return this;
    }
  }, {
    key: "getFiles",
    value: function getFiles() {
      return this.fileList;
    }
  }, {
    key: "getData",
    value: function getData() {
      return this.filesData;
    }
  }]);

  return DropFilesCatcher;
}(_BaseService_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (DropFilesCatcher);

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Services/GalleryContent.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Services/GalleryContent.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseService.js */ "./resources/js/admin/modules/ImageLibrary/master/Services/BaseService.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var GalleryContent = /*#__PURE__*/function (_BaseService) {
  _inherits(GalleryContent, _BaseService);

  var _super = _createSuper(GalleryContent);

  function GalleryContent() {
    var _this;

    _classCallCheck(this, GalleryContent);

    _this = _super.call(this);
    _this.imagesList = [];
    return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
  }

  _createClass(GalleryContent, [{
    key: "addImages",
    value: function addImages(imagesList) {
      var _this2 = this;

      isArray(imagesList, function (e) {
        var _this2$imagesList;

        (_this2$imagesList = _this2.imagesList).push.apply(_this2$imagesList, _toConsumableArray(imagesList));
      });
      return this;
    }
  }, {
    key: "getAllImages",
    value: function getAllImages() {
      return this.imagesList;
    }
  }, {
    key: "findImage",
    value: function findImage(searchId) {
      var imagesList = this.getAllImages();
      return imagesList.filter(function (item, index, array) {
        return searchId === item.id;
      });
    }
  }]);

  return GalleryContent;
}(_BaseService_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (new GalleryContent());

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Services/GalleryContentLoadingService.js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Services/GalleryContentLoadingService.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AjaxService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AjaxService.js */ "./resources/js/admin/modules/ImageLibrary/master/Services/AjaxService.js");
/* harmony import */ var _BaseService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseService.js */ "./resources/js/admin/modules/ImageLibrary/master/Services/BaseService.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var GalleryContentLoadingService = /*#__PURE__*/function (_BaseService) {
  _inherits(GalleryContentLoadingService, _BaseService);

  var _super = _createSuper(GalleryContentLoadingService);

  function GalleryContentLoadingService() {
    var _this;

    _classCallCheck(this, GalleryContentLoadingService);

    _this = _super.call(this);
    var url = $('meta[name="media-images-action"]').prop('content');
    _this.url = url;
    _this.current_page = 1;
    _this.last_page = 1;
    _this.first_page_url = null;
    _this.next_page_url = null;
    _this.last_page_url = null;
    return _this;
  }

  _createClass(GalleryContentLoadingService, [{
    key: "isCanLoad",
    value: function isCanLoad() {
      return this.current_page < this.last_page;
    }
  }, {
    key: "updateDataState",
    value: function updateDataState(data) {
      var current_page = data.current_page,
          last_page = data.last_page,
          first_page_url = data.first_page_url,
          next_page_url = data.next_page_url,
          last_page_url = data.last_page_url;
      this.current_page = current_page;
      this.last_page = last_page;
      this.first_page_url = first_page_url;
      this.next_page_url = next_page_url;
      this.last_page_url = last_page_url;
    }
  }, {
    key: "loadFirstPage",
    value: function loadFirstPage(callback) {
      var _this2 = this;

      var url = this.url;
      var Ajax = new _AjaxService_js__WEBPACK_IMPORTED_MODULE_0__["default"](url);
      Ajax.get(null, function (request) {
        _this2.updateDataState(request);

        isFunction(callback, function (args) {
          callback(request);
        });
      });
    }
  }, {
    key: "loadNextPage",
    value: function loadNextPage(callback, failCallback) {
      var _this3 = this;

      if (!this.isCanLoad()) {
        isFunction(failCallback, function (args) {
          failCallback(_this3.isCanLoad());
        });
        return false;
      }

      var url = this.next_page_url;
      var Ajax = new _AjaxService_js__WEBPACK_IMPORTED_MODULE_0__["default"](url);
      Ajax.get(null, function (request) {
        _this3.updateDataState(request);

        isFunction(callback, function (args) {
          callback(request);
        });
      }, failCallback);
    }
  }]);

  return GalleryContentLoadingService;
}(_BaseService_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (new GalleryContentLoadingService());

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Services/GalleryItemCreator.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Services/GalleryItemCreator.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseService.js */ "./resources/js/admin/modules/ImageLibrary/master/Services/BaseService.js");
/* harmony import */ var _Components_GalleryItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/GalleryItem.js */ "./resources/js/admin/modules/ImageLibrary/master/Components/GalleryItem.js");
/* harmony import */ var _Models_AttachmentModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/AttachmentModel.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentModel.js");
/* harmony import */ var _Models_AttachmentsGallery_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/AttachmentsGallery.js */ "./resources/js/admin/modules/ImageLibrary/master/Models/AttachmentsGallery.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var GalleryItemCreator = /*#__PURE__*/function (_BaseService) {
  _inherits(GalleryItemCreator, _BaseService);

  var _super = _createSuper(GalleryItemCreator);

  function GalleryItemCreator(itemData) {
    var _this;

    var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    _classCallCheck(this, GalleryItemCreator);

    _this = _super.call(this, itemData, direction);
    _this.itemData = itemData;
    _this.direction = direction;
    _this.item = _this.createGalleryItem(itemData, direction);
    return _possibleConstructorReturn(_this, _this.item);
  }

  _createClass(GalleryItemCreator, [{
    key: "createGalleryItem",
    value: function createGalleryItem(itemData, direction) {
      var $galleryItem = Object(_Components_GalleryItem_js__WEBPACK_IMPORTED_MODULE_1__["default"])(itemData);
      var $attachmentItem = Object(_Models_AttachmentModel_js__WEBPACK_IMPORTED_MODULE_2__["default"])($galleryItem);
      $attachmentItem.setState(itemData);

      if (direction) {
        _Models_AttachmentsGallery_js__WEBPACK_IMPORTED_MODULE_3__["default"].append($galleryItem);
      } else {
        _Models_AttachmentsGallery_js__WEBPACK_IMPORTED_MODULE_3__["default"].prepend($galleryItem);
      }

      return $attachmentItem;
    }
  }]);

  return GalleryItemCreator;
}(_BaseService_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (GalleryItemCreator);

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Services/InputFilesCatcher.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Services/InputFilesCatcher.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseService.js */ "./resources/js/admin/modules/ImageLibrary/master/Services/BaseService.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var InputFilesCatcher = /*#__PURE__*/function (_BaseService) {
  _inherits(InputFilesCatcher, _BaseService);

  var _super = _createSuper(InputFilesCatcher);

  function InputFilesCatcher(event) {
    var _this;

    _classCallCheck(this, InputFilesCatcher);

    _this = _super.call(this);

    _this.findFiles(event);

    return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
  }

  _createClass(InputFilesCatcher, [{
    key: "findFiles",
    value: function findFiles(event) {
      this.filesData = event.target;
      this.fileList = this.filesData.files;
      return this;
    }
  }, {
    key: "getFiles",
    value: function getFiles() {
      return this.fileList;
    }
  }, {
    key: "getData",
    value: function getData() {
      return this.filesData;
    }
  }]);

  return InputFilesCatcher;
}(_BaseService_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (InputFilesCatcher);

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/Services/SelectedImage.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/Services/SelectedImage.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseService.js */ "./resources/js/admin/modules/ImageLibrary/master/Services/BaseService.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var SelectedImage = /*#__PURE__*/function (_BaseService) {
  _inherits(SelectedImage, _BaseService);

  var _super = _createSuper(SelectedImage);

  function SelectedImage() {
    var _this;

    _classCallCheck(this, SelectedImage);

    _this = _super.call(this);
    _this.image = null;
    return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
  }

  _createClass(SelectedImage, [{
    key: "get",
    value: function get() {
      return this.image;
    }
  }, {
    key: "set",
    value: function set(image) {
      var _this2 = this;

      isObject(image, function () {
        _this2.image = image;
      });
      return this;
    }
  }, {
    key: "remove",
    value: function remove() {
      this.image = null;
      return this;
    }
  }, {
    key: "hasImage",
    value: function hasImage() {
      return this.get() ? true : false;
    }
  }]);

  return SelectedImage;
}(_BaseService_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (new SelectedImage());

/***/ }),

/***/ "./resources/js/admin/modules/ImageLibrary/master/index.js":
/*!*****************************************************************!*\
  !*** ./resources/js/admin/modules/ImageLibrary/master/index.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Helpers_CheckTypeHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Helpers/CheckTypeHelper.js */ "./resources/js/admin/modules/ImageLibrary/master/Helpers/CheckTypeHelper.js");
/* harmony import */ var _Services_AppRequestService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services/AppRequestService.js */ "./resources/js/admin/modules/ImageLibrary/master/Services/AppRequestService.js");
/* harmony import */ var _Providers_AppProvider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Providers/AppProvider.js */ "./resources/js/admin/modules/ImageLibrary/master/Providers/AppProvider.js");
// Helpers
 // Services

 // Providers



(function ($) {
  function App(appRequestCallback) {
    _Services_AppRequestService_js__WEBPACK_IMPORTED_MODULE_1__["default"].addHandler(appRequestCallback);
    new _Providers_AppProvider_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
  }

  jQuery.fn.ImagesLibrary = function (callback) {
    return this.each(function (index, item) {
      $(item).on('click input', function (e) {
        e.preventDefault();
        App(callback);
      });
    });
  };

  jQuery.fn.startImagesLibrary = function (callback) {
    return this.each(function (index, item) {
      App(callback);
    });
  };
})(jQuery);

/***/ }),

/***/ "./resources/js/admin/modules/index.js":
/*!*********************************************!*\
  !*** ./resources/js/admin/modules/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./ImageLibrary/index.js */ "./resources/js/admin/modules/ImageLibrary/index.js");

/***/ }),

/***/ "./resources/js/admin/preloader/main.js":
/*!**********************************************!*\
  !*** ./resources/js/admin/preloader/main.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

;

(function ($) {
  (function () {
    $('.main-preloader').each(function (index, item) {
      $(item).fadeOut(250);
    });
  })();
})(jQuery);

/***/ }),

/***/ "./resources/js/admin/tables/tables.js":
/*!*********************************************!*\
  !*** ./resources/js/admin/tables/tables.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $('#example').DataTable({
    'paging': false,
    'lengthChange': false,
    'searching': true,
    'ordering': true,
    'info': false,
    'autoWidth': false,
    'showing': false
  }); //переменные

  var button = $('<button class="table-btn"></button>').html('<i class="fa fa-navicon"></i>');
  var menu = $('<td class="child" colspan="5" role="row"></td>').html('<a>Подробнее</a>', '<a>Редактирование</a>', '<a>Удаление</a>'); // .html('<a>Редактирование</a>')
  // .html('<a>Удаление</a>');

  $(' tbody tr td:first-child ').each(function () {
    $(this).addClass(' active ');
    $(this).css({
      'padding-left': "30px"
    }).append(button);
  });
  $(".table-btn").css({
    "left": "15px",
    "position": "absolute",
    "color": "white",
    "border": "2px solid white",
    "border-radius": "14px",
    "box-shadow": "rgb(68, 68, 68) 0px 0px 3px",
    "text-indent": "0 !important",
    //"line-height": "14px",
    "text": "+",
    "justify-content": "center",
    "background-color": "#31b131"
  });
  $(' tr ').append(menu);
  $('.child').css({
    //'padding': '0.5em 1em',
    //'height': '20px',
    'display': 'none' //'width': '14px',

  });
  $(' tr ').on(' click ', function () {
    $(this).each(function () {
      console.log(this);
      $('.child').slideToggle(5000);
    });
  });
  console.log('$(".table-btn")', $(".table-btn")); // $(".table-btn").click( function() {
  //     alert('Вы нажали на элемент "foo"');
  // });
  // $(' tr ').on(' click ', function () {
  //     $( this ).wrap( menu );
  //     $(this).after(menu);
  // });
});

/***/ }),

/***/ "./resources/sass/admin.scss":
/*!***********************************!*\
  !*** ./resources/sass/admin.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*********************************************************************!*\
  !*** multi ./resources/js/admin/app.js ./resources/sass/admin.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\laravel\stopcovid-web\resources\js\admin\app.js */"./resources/js/admin/app.js");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\laravel\stopcovid-web\resources\sass\admin.scss */"./resources/sass/admin.scss");


/***/ })

/******/ });