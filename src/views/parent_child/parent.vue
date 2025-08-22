<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';

import childSubPagePage from '/src/views/parent_child/child.vue';

const { t } = useI18n();
const lockScreenUtils = useLockScreen();
const lockScreen = lockScreenUtils.lockScreen;

defineOptions({
  name: 'parent',
});

const form = ref();
const parentInput = ref();
const childSubPage = ref();

const formData = reactive({
  parentInput: '',
});

function onChildDataCapture(event) {
  console.log(event);
}
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFormItem

      label="Parent Input "

      prop="parentInput"
    >
      <VueInput

        id="parentInput"

        ref="parentInput"
        v-model="formData.parentInput"

        data-type="string"
      />
    </VueFormItem>

    <childSubPagePage

      id="childSubPage"
      ref="childSubPage"
      last-name="Nikhil"

      :parent-value="formData.parentInput"
      @on-child-emit="onChildDataCapture"
    />
  </VueForm>
</template>
