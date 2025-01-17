<script setup>
  import pSignatureDraw from './SignatureDraw.vue'
  import pButton from '../button/Button.vue'
  import { ref } from 'vue-demi'
  import EMPTY_IMG from './assets/empty-img.png'

  const result = ref('')
</script>

# Signature Draw

## Usage

### Simple Usage

<preview>
  <p-signature-draw />
</preview>

```vue
<template>
  <p-signature-draw />
</template>
```

### for Initial

<preview class="flex-col">
  <p-signature-draw :width="230" />
</preview>

```vue
<template>
  <p-signature-draw :width="230" />
</template>
```

## Placeholder

<preview class="flex-col">
  <p-signature-draw placeholder="Draw signature here" />
</preview>

```vue
<template>
  <p-signature-draw placeholder="Draw signature here" />
</template>
```
## Color

Set pen color with prop `color`, default is `#000000`

<preview class="flex-col space-y-2">
  <p-signature-draw color="#73185E" />
</preview>

```vue
<template>
  <p-signature-draw color="#73185E" />
</template>
```

## Binding v-model

Result of drawing image is store in `v-model` value. It's encoded in [base64-dataURI][data-uri] format.

<preview class="flex-col space-y-2">
  <p-signature-draw v-model="result" />
</preview>

**result**

<pre class="truncate"><code>{{ result }}</code></pre>
<img class="mt-2 border" :src="result || EMPTY_IMG" width="430" height="230" alt="Result Image" />

```vue
<template>
  <p-signature-draw v-model="result" />
</template>

<script setup>
const result = ref('')
</script>
```

## API

### Props

| Props            |   Type   |     Default     | Description                                         |
|------------------|:--------:|:---------------:|-----------------------------------------------------|
| `width`          | `Number` |      `430`      | Canvas's width                                      |
| `height`         | `Number` |      `230`      | Canvas's width                                      |
| `placeholder`    | `String` |       `-`       | Canvas's placeholder                                |
| `color`          | `String` |    `#000000`    | Pencil color                                        |
| `modelValue`     | `String` |       `-`       | Result of draw image, in [base64-dataURI][data-uri] |
| `resetLabel`     | `String` |     `Reset`     | Reset button's label                                |
| `openDrawLabel`  | `String` | `Click to Draw` | Start draw button's label (in mobile-view)          |
| `closeDrawLabel` | `String` |     `Save`      | Save draw button's label (in mobile-view)           |

### Slots

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" class="text-center">There no slots here</td>
    </tr>
  </tbody>
</table>

### Events

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Arguments</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="3" class="text-center">There no props here</td>
    </tr>
  </tbody>
</table>

[data-uri]: https://en.wikipedia.org/wiki/Data_URI_scheme
