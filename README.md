# Infinite Scroll docs

Documentation for Infinite Scroll, the JavaScript library for automatically adding next pages.

[infinite-scroll.com](https://infinite-scroll.com)

## Install

Building these docs requires [npm](https://npmjs.com).

``` bash
npm install
```

## Scripts

Run with npm: `npm run dev`.

- `build` - build production version of site
- `dev` - built development version of site
- `lint` - lint JS and CSS "npm run lint:js && npm run lint:css",
- `lint:js` - lint JS. Run `npm run lint:js -- --fix` to make automatic fixes
- `lint:js` - lint CSS. Run `npm run lint:css -- --fix` to make automatic fixes

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

[BEM](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) is used for CSS code style.

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

By [Metafizzy](https://metafizzy.co)
