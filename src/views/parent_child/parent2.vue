<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';

import childSubPagePage from '/src/views/parent_child/child2.vue';

const { t } = useI18n();
const lockScreenUtils = useLockScreen();
const lockScreen = lockScreenUtils.lockScreen;

const selectedName = ref('this is default selected name');

defineOptions({
  name: 'parent2',
});

const form = ref();
const fullName = ref();
const childSubPage = ref();

const formData = reactive({
  fullName: '',
});

function functionToClearFullName() {
  formData.fullName = '';
}

function functionToCaptureSelectedName(event) {
  //    alert(event);
  selectedName.value = event;
}
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFormItem

      label="Full Name"

      prop="fullName"
    >
      <VueInput

        id="fullName"

        ref="fullName"
        v-model="formData.fullName"

        data-type="string"
      />
    </VueFormItem>

    <VueText id="selectedValue" ref="selectedValue" :style="{ width: '100%', display: 'inline-block' }" v-html="selectedName" />
    <childSubPagePage

      id="childSubPage"
      ref="childSubPage"
      :full-name="formData.fullName"

      @clear-full-name="functionToClearFullName"
      @select-full-name="functionToCaptureSelectedName"
    />
  </VueForm>
</template>
