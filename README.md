Github Widget
=============

A jQuery plugin to show your Github repositories.

Usage
=============

First, include the JavaScript file in your webpage, and put css files and fonts in the right place.

HTML Makeup
-------------
```html
<div id="github-widget" data-user="github" data-count="10" data-sortby="pushed_at"></div>
```
`data-*` attributes are optional, you can pass them when calling the function `githubwidget` if you like.

Script
-------------
```javascript
jQuery(document).ready(function ($) {
    $('#github-widget').githubwidget({
        user: 'github',
        count: 0,
        sortby: 'pushed_at'
    })
});
```
`user` for your Github username, `count` for how many repositories you want to show (show all repositories if count equals 0). `sortby` for sort the result in that order.

LICENSE
=============
The MIT License (MIT)

Copyright (c) 2013 messense

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
