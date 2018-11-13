<template>
  <q-page class="flex flex-center">
    <div class="orange-darkest hover:bg-teal-lighter">
     <el-radio v-model="radio" label="1">备选项</el-radio>
     <el-radio v-model="radio" label="2">备选项</el-radio>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import { QPage } from 'quasar'

export default {
  name: 'PageIndex',
  components: {
    QPage
  },

  data() {
    return {
      radio: '1'
    }
  }
}
</script>
