<script setup>
  import pButton from './Button.vue'
  import IconBee from '@carbon/icons-vue/lib/bee/20'
</script>

# Button

## Usage

### Simple Button

<preview>
  <p-button>Click me</p-button>
</preview>

```vue
<template>
  <p-button>Click me</p-button>
</template>
```

### Button with icon

<preview>
  <p-button icon><IconBee /></p-button>
</preview>

```vue
<template>
  <p-button icon><IconBee /></p-button>
</template>

<script setup>
  import IconBee from '@carbon/icons-vue/lib/bee/20'
</script>
```

### Button with icon + text

<preview class="flex-col items-center space-gap-3 md:flex-row">
  <p-button><IconBee /> Click Me</p-button>
  <p-button>Click Me <IconBee /></p-button>
</preview>

```vue
<template>
  <p-button><IconBee /> Click Me</p-button>
  <p-button>Click Me <IconBee /></p-button>
</template>

<script setup>
  import IconBee from '@carbon/icons-vue/lib/bee/20'
</script>
```

## Variants

Button has 4 variants, `solid`, `outline`, `ghost`, `link`. Default is `solid`

<preview>
  <div class="grid grid-cols-2 gap-3 lg:grid-cols-4">
    <p-button variant="solid">Click me</p-button>
    <p-button variant="outline">Click me</p-button>
    <p-button variant="ghost">Click me</p-button>
    <p-button variant="link">Click me</p-button>
  </div>
</preview>

```vue
<template>
  <p-button variant="solid">Click me</p-button>
  <p-button variant="outline">Click me</p-button>
  <p-button variant="ghost">Click me</p-button>
  <p-button variant="link">Click me</p-button>
</template>
```

## Colors

Button available in 7 different colors `primary`, `secondary`, `success`, `info`, `warning`, `danger`, `gold`. default is `primary`

<preview>
  <div class="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
    <p-button color="primary">Click me</p-button>
    <p-button color="secondary">Click me</p-button>
    <p-button color="success">Click me</p-button>
    <p-button color="info">Click me</p-button>
    <p-button color="warning">Click me</p-button>
    <p-button color="danger">Click me</p-button>
    <p-button color="gold">Click me</p-button>
  </div>
</preview>

```vue
<template>
  <p-button color="primary">Click me</p-button>
  <p-button color="secondary">Click me</p-button>
  <p-button color="success">Click me</p-button>
  <p-button color="info">Click me</p-button>
  <p-button color="warning">Click me</p-button>
  <p-button color="danger">Click me</p-button>
  <p-button color="gold">Click me</p-button>
</template>
```

It's also work with other variants (except `ghost`).

<preview label="outline variant">
  <div class="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
    <p-button variant="outline" color="primary">Click me</p-button>
    <p-button variant="outline" color="secondary">Click me</p-button>
    <p-button variant="outline" color="success">Click me</p-button>
    <p-button variant="outline" color="info">Click me</p-button>
    <p-button variant="outline" color="warning">Click me</p-button>
    <p-button variant="outline" color="danger">Click me</p-button>
    <p-button variant="outline" color="gold">Click me</p-button>
  </div>
</preview>

<preview label="link variant">
  <div class="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
    <p-button variant="link" color="primary">Click me</p-button>
    <p-button variant="link" color="secondary">Click me</p-button>
    <p-button variant="link" color="success">Click me</p-button>
    <p-button variant="link" color="info">Click me</p-button>
    <p-button variant="link" color="warning">Click me</p-button>
    <p-button variant="link" color="danger">Click me</p-button>
    <p-button variant="link" color="gold">Click me</p-button>
  </div>
</preview>

```vue
<template>
  <p-button variant="outline" color="primary">Click me</p-button>
  <p-button variant="outline" color="secondary">Click me</p-button>
  <p-button variant="outline" color="success">Click me</p-button>
  <p-button variant="outline" color="info">Click me</p-button>
  <p-button variant="outline" color="warning">Click me</p-button>
  <p-button variant="outline" color="danger">Click me</p-button>
  <p-button variant="outline" color="gold">Click me</p-button>

  <p-button variant="link" color="primary">Click me</p-button>
  <p-button variant="link" color="secondary">Click me</p-button>
  <p-button variant="link" color="success">Click me</p-button>
  <p-button variant="link" color="info">Click me</p-button>
  <p-button variant="link" color="warning">Click me</p-button>
  <p-button variant="link" color="danger">Click me</p-button>
  <p-button variant="link" color="gold">Click me</p-button>
</template>
```

## Sizing

3 sizes you can use: `xs`, `sm`, `md`, `lg`. default is `md`

<preview class="flex-col items-center gap-3 md:flex-row">
  <p-button size="xs">Click me</p-button>
  <p-button size="sm">Click me</p-button>
  <p-button size="md">Click me</p-button>
  <p-button size="lg">Click me</p-button>
</preview>

```vue
<template>
  <p-button size="xs">Click me</p-button>
  <p-button size="sm">Click me</p-button>
  <p-button size="md">Click me</p-button>
  <p-button size="lg">Click me</p-button>
</template>
```

## Pill mode

You can add prop `pill` to make button more rounded

<preview class="flex-col items-center gap-3 md:flex-row">
  <p-button size="xs" pill>Click me</p-button>
  <p-button size="sm" pill>Click me</p-button>
  <p-button size="md" pill>Click me</p-button>
  <p-button size="lg" pill>Click me</p-button>
</preview>

```vue
<template>
  <p-button size="xs" pill>Click me</p-button>
  <p-button size="sm" pill>Click me</p-button>
  <p-button size="md" pill>Click me</p-button>
  <p-button size="lg" pill>Click me</p-button>
</template>
```

## Icon mode

You can add prop `icon` to make button more square, it's suitable for button with icon only

<preview class="items-center gap-3">
  <p-button size="xs" icon><IconBee /></p-button>
  <p-button size="sm" icon><IconBee /></p-button>
  <p-button size="md" icon><IconBee /></p-button>
  <p-button size="lg" icon><IconBee /></p-button>
</preview>

```vue
<template>
  <p-button size="xs" icon><IconBee /></p-button>
  <p-button size="sm" icon><IconBee /></p-button>
  <p-button size="md" icon><IconBee /></p-button>
  <p-button size="lg" icon><IconBee /></p-button>
</template>
```

You can also combine with `pill` mode to make round button

<preview class="items-center gap-3">
  <p-button size="xs" icon pill><IconBee /></p-button>
  <p-button size="sm" icon pill><IconBee /></p-button>
  <p-button size="md" icon pill><IconBee /></p-button>
  <p-button size="lg" icon pill><IconBee /></p-button>
</preview>

```vue
<template>
  <p-button size="xs" icon pill><IconBee /></p-button>
  <p-button size="sm" icon pill><IconBee /></p-button>
  <p-button size="md" icon pill><IconBee /></p-button>
  <p-button size="lg" icon pill><IconBee /></p-button>
</template>
```

## Disable state

<preview label="link variant">
  <div class="grid grid-cols-2 gap-3 lg:grid-cols-4">
    <p-button variant="solid" disabled>Click me</p-button>
    <p-button variant="outline" color="gold" disabled>Click me</p-button>
    <p-button variant="ghost" disabled>Click me</p-button>
    <p-button variant="link" disabled>Click me</p-button>
  </div>
</preview>

```vue
<template>
  <p-button variant="solid" disabled>Click me</p-button>
  <p-button variant="outline" disabled>Click me</p-button>
  <p-button variant="ghost" disabled>Click me</p-button>
  <p-button variant="link" disabled>Click me</p-button>
</template>
```

## API

### Props

| Props      |   Type    |  Default  | Description                                                                                                 |
|------------|:---------:|:---------:|-------------------------------------------------------------------------------------------------------------|
| `variant`  | `String`  |  `solid`  | Button style variant, valid value is `solid`, `outline`, `ghost`, `link`                                    |
| `color`    | `String`  | `primary` | Button color variant, valid value is `primary`, `secondary`, `success`, `info`, `warning`, `danger`, `gold` |
| `size`     | `String`  |   `md`    | Size of button, valid value is `xs`, `sm`, `md`, `lg`                                                             |
| `pill`     | `Boolean` |  `false`  | Enable pill mode                                                                                            |
| `icon`     | `Boolean` |  `false`  | Enable icon mode                                                                                            |
| `disabled` | `Boolean` |  `false`  | Disable state                                                                                               |

### Slots

| Name      | Description                |
|-----------|----------------------------|
| `default` | Content to place in button |

### Events

| Name    | Arguments               | Description                  |
|---------|-------------------------|------------------------------|
| `click` | Native DOM Event object | Event when button is clicked |
