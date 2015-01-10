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
- *Relevant Tasks*: `build`
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

All sources are combined into a bundle in `./static`.

## Tasks

### <a name="tasks_build">`build`</a>

Runs [browserify]((http://browserify.org/) and [minifyify]((https://npmjs.com/packages/minifyify) over the sources and creates a
standalone bundle with sourcemap.

This will always be the script that generates the JS bundle in
`origin/master` and `npm`.
