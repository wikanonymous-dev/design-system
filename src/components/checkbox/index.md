<script setup>
  import Banner from "../banner/Banner.vue"
  import pCheckbox from "./Checkbox.vue"
  import pCaption from "../caption/Caption.vue"
  import { ref, computed } from "vue-demi"

  const value    = ref(false)
  const value2   = ref(false)
  const modelA   = ref(false)
  const modelB   = ref('disagree')
  const selected = ref([])

  const items  = ref(['apple', 'grape', 'orange'])
  const result = ref(['apple'])

  const selectAll = computed({
    get () {
      return result.value.length === items.value.length
    },
    set (value) {
      if (selectAll.value !== value)
        result.value = value ? [...items.value] : []
    },
  })

  const indeterminate = computed(() => {
    return result.value.length > 0
      && result.value.length < items.value.length
  })
</script>

# Checkbox

## Usage

### Simple Usage

<preview>
  <p-checkbox>Checklist Label</p-checkbox>
</preview>

```vue
<template>
  <p-checkbox>Checklist Label</p-checkbox>
</template>
```

### With Subtext

<preview>
  <p-checkbox>
    <div>Checklist Label</div>
    <p-caption>Text</p-caption>
  </p-checkbox>
</preview>

```vue
<template>
  <p-checkbox>
    <div>Checklist Label</div>
    <p-caption>Text</p-caption>
  </p-checkbox>
</template>
```

## Disabled State

<preview>
  <p-checkbox disabled>
    Checkbox Label
  </p-checkbox>
</preview>

```vue
<template>
  <p-checkbox disabled>
    Checkbox Label
  </p-checkbox>
</template>
```

## Readonly State

<preview>
  <p-checkbox readonly>
    Checkbox Label
  </p-checkbox>
</preview>

```vue
<template>
  <p-checkbox readonly>
    Checkbox Label
  </p-checkbox>
</template>
```

## Binding v-model

<preview class="flex-col items-center gap-3">
  <p-checkbox v-model="modelA">Checkbox Label</p-checkbox>
</preview>

**Result :**

<pre><code>{{ modelA }}</code></pre>

```vue
<template>
  <p-checkbox v-model="modelA">Text</p-checkbox>
</template>
```

### Custom v-model value

By default, value of toggle is always `Boolean`, but you can change it with `value` and `unchecked-value`.

<preview class="flex-col items-center gap-3">
  <p-checkbox v-model="modelB" value="agree" unchecked-value="disagree">
    I agree with Term and Condition
  </p-checkbox>
</preview>

**Result :**

<pre><code>{{ modelB }}</code></pre>

```vue
<template>
  <p-checkbox
    v-model="model"
    value="agree"
    unchecked-value="disagree">
    Active
  </p-checkbox>
</template>
```

### Array v-model

If v-model **state** is an *array* it will append the value instead of replacing it.

<Banner><strong>Warn!</strong> selected order is not guaranteed</Banner>

<preview class="flex-col items-center">
  <div class="flex flex-col gap-3">
    <p-checkbox v-model="selected" value="apple">Apple</p-checkbox>
    <p-checkbox v-model="selected" value="grape">Grape</p-checkbox>
    <p-checkbox v-model="selected" value="pineapple">Pineapple</p-checkbox>
    <p-checkbox v-model="selected" :value="{ id: 1, name: 'Tarjono' }">Object</p-checkbox>
    <p-checkbox v-model="selected" :value="['Item 1']">Array</p-checkbox>
  </div>
</preview>

**Selected :**

<pre class="whitespace-normal"><code>{{ selected }}</code></pre>

```vue
<template>
  <div class="flex flex-col gap-3">
    <p-checkbox v-model="selected" value="apple">Apple</p-checkbox>
    <p-checkbox v-model="selected" value="grape">Grape</p-checkbox>
    <p-checkbox v-model="selected" value="pineapple">Pineapple</p-checkbox>
    <p-checkbox v-model="selected" :value="{ id: 1, name: 'Tarjono' }">Object</p-checkbox>
    <p-checkbox v-model="selected" :value="['Item 1']">Array</p-checkbox>
  </div>
</template>
```

## Indeterminate (3-state)

Indeterminate is condition between `checked` and `unchecked`. It's usefull for case like: **selectAll** feature.

<preview class="flex-col items-center">
  <div class="flex flex-col gap-3">
    <p-checkbox
      v-model="selectAll"
      :indeterminate="indeterminate">
      Select All
    </p-checkbox>
    <template v-for="item of items">
      <p-checkbox v-model="result" :value="item" class="ml-4">
        {{ item }}
      </p-checkbox>
    </template>
  </div>
</preview>

**Result :**

<pre class="whitespace-normal"><code>{{ result }}</code></pre>

```vue
<template>
  <div class="flex flex-col gap-3">
    <p-checkbox
      v-model="selectAll"
      :indeterminate="indeterminate">
      Select All
    </p-checkbox>

    <template v-for="item of items">
      <p-checkbox v-model="result" :value="item" class="ml-4">
        {{ item }}
      </p-checkbox>
    </template>
  </div>
</template>

<script setup>
  const items  = ref(['apple', 'grape', 'orange'])
  const result = ref([])

  const selectAll = computed({
    get () {
      return result.value.length === items.value.length
    },
    set (value) {
      if (selectAll.value !== value)
        result.value = value ? [...items.value] : []
    },
  })

  const indeterminate = computed(() => {
    return result.value.length > 0
      && result.value.length < items.value.length
  })
</script>
```

## API

### Props

| Props            |   Type    | Default | Description                                                                |
|------------------|:---------:|:-------:|----------------------------------------------------------------------------|
| `checked`        | `Boolean` | `false` | Checked condition. if it is `true`, Checkbox will be checked on first time |
| `value`          |   `Any`   | `true`  | Checked value                                                              |
| `uncheckedValue` |   `Any`   | `false` | Unchecked value                                                            |
| `disabled`       | `Boolean` | `false` | Disabled state                                                             |
| `readonly`       | `Boolean` | `false` | Readonly state                                                             |
| `indeterminate`  | `Boolean` | `false` | Indeterminate state                                                        |
| `modelValue`     |   `Any`   |   `-`   | `v-model` value                                                            |

### Slots

| Name      | Description                |
|-----------|----------------------------|
| `default` | Content to place in toggle |

### Events

| Name     | Arguments | Description              |
|----------|-----------|--------------------------|
| `change` | Boolean   | Event when value changed |

## See Also
- [Toggle][toggle]
- [Radio][radio]

[Toggle]: /components/toggle/index
[Radio]: /components/radio/index