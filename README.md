feltnerm-pelican-theme
----

This the front-end module of my
[Pelican](http://pelican.readthedocs.org)-powered
[blog](blog.feltnerm.com).

# Getting Started

To use, set your [pelican theme](http://pelican.readthedocs.org/en/3.5.0/settings.html#themes) to this theme. A few of (my current) methods for accomplishing this are:

## `npm`

`% npm install --save feltnerm-pelican-theme`

Iff `./node_modules` is a direct child of your Pelican working-directory, then in `pelicanconf.py` you add/modify the following:

`THEME = 'node_modules/feltnerm-pelican-theme'`

# Layout

## CSS

- *Sources:* `./src/css`
- *Bundle Destination:* `./build/bundle.css`
- *Relevant Tasks*: `build_css`, `dev_css`, `watch_css`
- *Dependencies*: [normalize.css](https://github.com/necolas/normalize.css), [typeset.css](https://github.com/joshuarudd/typeset.css), [flexboxgrid.css](https://github.com/kristoferjoseph/flexboxgrid)

Normalize is used (as it should), Typset is used for typographic things such
as post bodies, and flexboxgrid is a simple wrapper for grid-based layouts
using [flexbox](http://caniuse.com/#search=flexbox) (sorry <=IE10 users).

## JavaScript

- *Sources:* `./src/js`
- *Bundle Destination:* `./build/bundle.js`
- *Relevant Tasks*: `build_js`, `dev_js`, `watch_js`
- *Dependencies*:

## Templates

Templates are written using [Jinja](http://jinja.pocoo.org/) and follow the
[pelican template conventions](http://pelican.readthedocs.org/en/3.5.0/themes.html#templates-and-variables). They are 'compiled' with pelican. See the
pelican theme documentation for more details.

Templates should follow semantic HTML5 (header, footer, nav, article, aside, section, etc.), and
attempt to follow the [microdata HTML5 standard](https://html.spec.whatwg.org/multipage/microdata.html) as best as possible.

I am not entirely sure of the benefits of microdata in HTML documents yet, but consider this an experiment.
Part of me wonders if it'd be
possible to make static HTML pages into APIs if their markup was _more_ machine readable.

Many of the templates have basic microdata elements defined, but if one is
missing please submit an issue/pull-request!

# Development

All sources are combined into a bundle in `./static`. `dev*` tasks will create
a sourcemap for non-third-party dependencies, and `build*` tasks will instead
generate a minified version with no sourcemaps.

## Tasks

### <a name="tasks_build">`build`</a>

Runs [`build_css`](#task_build_css) and [`build_js`](#task_build_js).

### <a name="tasks_build_css">`build_css`</a>

Concatenates CSS sources and third-party dependencies, runs them through
[autoprefixer](https://github.com/postcss/autoprefixer), and minifies everything with [cssmin](https://code.google.com/p/cssmin/) into
`./static/bundle.css`.

This will always be the script that generates the CSS bundle in
`origin/master` and `npm`.

### <a name="tasks_build_js">`build_js`</a>

Runs [browserify]((http://browserify.org/) and [uglify-js]((https://github.com/mishoo/UglifyJS) over the sources and creates a
standalone bundle. (Hint: try `console.log(feltnerm);`) in your browser's
javascript console).

This will always be the script that generates the JS bundle in
`origin/master` and `npm`.

### <a name="tasks_dev">`dev`</a>

Runs [`dev_css`](#task_dev_css) and [`dev_js`](#task_dev_js).

### <a name="tasks_dev_css">`dev_css`</a>

Concatenates CSS third-party dependencies, runs CSS sources through
[autoprefixer](https://github.com/postcss/autoprefixer), and outputs everything into `./static/bundle.css`.

### <a name="tasks_dev_js">`dev_js`</a>

Runs [browserify](http://browserify.org/) and [uglify-js](https://github.com/mishoo/UglifyJS) over the sources and creates a
standalone bundle with a sourcemap included.

### <a name="task_watch">`watch`</a>

Runs [`watch_css`](#task_watch_css) and [`watch_js`](#task_watch_js).

### <a name="task_watch_css">`watch_css`</a>

Runs [`dev_css`](#task_dev_css) with [`nodemon`]().

### <a name="task_watch_js">`watch_js`</a>

Runs [`dev_js`](#task_dev_js) with [`nodemon`]().
