# Installation

## Direct Download / CDN

https://unpkg.com/vue-interactjs/dist/vue-interactjs 

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/vue-interactjs@{{ $version }}/dist/vue-interactjs.js
 
Include vue-interactjs after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-interactjs/dist/vue-interactjs.js"></script>
```

## NPM

```sh
$ npm install vue-interactjs
```

## Yarn

```sh
$ yarn add vue-interactjs
```

When used with a module system, you must explicitly install the `vue-interactjs` via `Vue.use()`:

```javascript
import Vue from 'vue'
import vue-interactjs from 'vue-interactjs'

Vue.use(vue-interactjs)
```

You don't need to do this when using global script tags.

## Dev Build

You will have to clone directly from GitHub and build `vue-interactjs` yourself if
you want to use the latest dev build.

```sh
$ git clone https://github.com//vue-interactjs.git node_modules/vue-interactjs
$ cd node_modules/vue-interactjs
$ npm install
$ npm run build
```

