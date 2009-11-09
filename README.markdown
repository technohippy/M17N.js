M17N.js
=======

M17N.js is a simple multilingalization library for JavaScript.

How to Use
----------

### Functions

- M17N.setLocale(locale) : the given locale is stored in cookie and the value is used as default next time
- M17N.translate(key) : translate key into M17N.locale languate
- M17N.insertTranslate(key) : insert translated words at the position of the script tag.
- t(key) : alias of M17N.translate(key)
- it(key) : alias of M17N.insertTranslate(key)

### Special ClassName

If you add a special classname (directed M17N.className and its default is `t') to an element, its innerHTML is automatically translated.

Sample
------

    <html>
    <head>
      <title>M17N.js sample</title>
      <script src="../lib/m17n.js"></script>
      <script>
        M17N.resources.ja = {
          greeting: "ご挨拶", hello: "こんにちは", 
          en: "英語にする", ja: "日本語にする"
        };
        M17N.resources.en = {
          greeting: "Say Greetings", hello: "Hello",
          en: "English", ja: "Japanese"
        };
      </script>
    </head>
    <body>
      <button class="t" onclick="alert(t('hello'))">greeting</button>
      <button class="t" onclick="M17N.setLocale('en'); location.reload()">en</button>
      <button class="t" onclick="M17N.setLocale('ja'); location.reload()">ja</button>
    </body>
    </html>

License
-------

The MIT License

Copyright (c) 2009 Ando Yasushi (andyjpn@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

