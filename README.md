# Infinite Scroll docs

Documentation for Infinite Scroll, the JavaScript library for automatically adding next pages.

[infinite-scroll.com](https://infinite-scroll.com)

## Install

Building these docs requires [npm](https://npmjs.com) and [Bower](http://bower.io).

``` bash
npm install
bower install
```

## Tasks

+ `gulp` - build the production site, concatenate CSS and JS, minify JS
+ `gulp dev` - build the site, but use separate CSS and JS files for debugging

## Structure

+ `assets/` - files that get copied into `build/`
+ `build/` - where static site gets built
+ `content/` - page content
+ `css/`  - boilerplate CSS
+ `data/` - Site and logo data files.
+ `js/` - boilerplate JS
+ `modules/` - See Modules below
  - `modules/demos` - Demo modules
+ `tasks/` - Gulp tasks to build the site
+ `templates/` - page templates

## Modules

Modules are re-usable components used throughout the site. A module may consist of template, JS, and CSS files.

    modules/
      page-nav/
        page-nav.css
        page-nav.js
        page-nav.hbs

[BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) is used for CSS code style.

``` css
.page-nav {} /* block */
.page-nav__item {} /* element, child */
.page-nav--dark {} /* modifier */
```

JavaScript can be initialized for each element with `data-js` attribute.

``` html
<div class="page-nav" data-js="page-nav">
```

``` js
InfiniteScrollDocs.['page-nav'] = function( elem ) {
  // do something with elem
};
```

---

By [Metafizzy](http://metafizzy.co)
