M17N = {
  locale: 'en',
  className: 't',
  resources: {
    ja: {},
    en: {}
  },
  translate: function(key) {
    var resource = M17N.resources[M17N.locale];
    if (resource) {
      return resource[key];
    }
    else {
      return key;
    }
  },
  insertTranslate: function(key) {
    document.write(M17N.translate(key));
  },
  setLocale: function(locale) {
    if (M17N.acceptableLocale(locale)) {
      document.cookie = 'locale=' + locale;
      return locale;
    }
    else {
      return null;
    }
  },
  locales: function() {
    var ret = [];
    for (var key in M17N.resources) {
      ret.push(key);
    }
    return ret;
  },
  acceptableLocale: function(locale) {
    var locales = M17N.locales();
    var ret = false;
    for (var i = 0; locales.length; i++) {
      if (locales[i] == locale) {
        ret = true;
        break;
      }
    }
    return ret;
  }
}

t = M17N.translate;
it = M17N.insertTranslate;

(function() {
  function addEventListener(element, event, handler) {
    if (element.addEventListener) {
      element.addEventListener(event, handler, true);
    }
    else if (elelemnt.attachEvent) {
      element.attacheEvent('on' + event, handler);
    }
    else {
      throw 'This browser is not supported';
    }
  }

  function transformAll(element) {
    var node = element || document.body; 
    if (node && node.nodeType == 1) { // element
      var classnames = node.className.split(' ');
      var found = false;
      for (var i = 0; i < classnames.length; i++) {
        if (classnames[i] == 't') {
          found = true;
          break;
        }
      }
      if (found) {
        element.innerHTML = M17N.translate(element.innerHTML);
      }
      var children = node.childNodes;
      for (var i = 0; i < children.length; i++) {
        transformAll(children[i]);
      }
    }
  }

  function setDefaultLocale() {
    var locale = null;
    if (document.cookie) {
      locale = document.cookie.split('=')[1];
      if (!M17N.acceptableLocale(locale)) locale = null; 
    }
    if (!locale) locale = navigator.language.substr(0, 2);
    if (M17N.acceptableLocale(locale)) M17N.locale = locale;
  }

  addEventListener(window, 'load', function(e) {setDefaultLocale(); transformAll()});
})();
