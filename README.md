# Using Vue2.0 CheckList component

## Install

<i>You can use Yarn or NPM</i>
```bash
npm install -S vue2-checklist
```
OR
```bash
yarn add vue2-checklist
```

## Usage

```js
// In components
import Vue2Checklist from 'vue2-checklist'

// In main You can add this
Vue.use(Vue2Checklist)
```

## Props
|Name|Type|Default|Description|
|:----- |:------|:------|:------|
|visible |Boolean |false |visibility of dialog |
|data |Array |- |Table data |
|maxlength |Number |2 |same as maxlength in native select |


## Methods  
|Method Name|Description|Parameters|
|:----- |:------|:------|
|on-cancel |hook function when dialog cancel |dialog state |
|on-change |triggers when the selected value changes |current selected value |

## Example

```vue
<template>
  <div id="app">
    <input type="text" @click="selectAddress">
    <vue2-checklist
      :data="data"
      :visible="dialogVisible"
      :maxlength="maxlength"
      @on-cancel="dialogVisible=false"
      @on-change="handleChange"
    ></vue2-checklist>
  </div>
</template>

<script>

import Vue2Checklist from 'vue2-checklist'
export default {
  data() {
    data: [
      {id: 1, address: '厦门软件园1期' },
      {id: 2, address: '厦门软件园2期' },
      {id: 3, address: '厦门软件园3期' }
    ],
    dialogVisible: false,
    maxlength: 3
  },

  methods: {
    selectAddress() {
      // Prevent keyboard popup
      document.activeElement.blur()
      this.dialogVisible = true
    },
    handleChange(scope) {
      console.log(scope, 'val')
      this.dialogVisible = false
    }
  }
}
</script>

<style scoped>
input {
  border: 1px solid #000;
}
</style>
```

## Development

Vue2Checklist now uses Poi for development

* yarn dev: Run example in development mode
* yarn build: Build component in both format
* yearn test: Run test component

## License

MIT
