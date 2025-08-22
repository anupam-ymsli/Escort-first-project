<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';

const props = defineProps(['lastName', 'parentValue']);
const emit = defineEmits(['onChildEmit']);
const { t } = useI18n();
const lockScreenUtils = useLockScreen();
const lockScreen = lockScreenUtils.lockScreen;

defineOptions({
  name: 'child',
});

const form = ref();
const childInput = ref();
const getBtn = ref();
const emitBtn = ref();

const formData = reactive({
  childInput: '',
});

const getBtnClick = () => {
  getValueFromParent();
};
const emitBtnClick = () => {
  emitValueToParent();
};

function getValueFromParent() {
  console.log(props);
  console.log(props.lastName);
  console.log(props.parentValue);
}

function emitValueToParent() {
  emit('onChildEmit', formData.childInput);
}
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFormItem

      label="Child Component "

      prop="childInput"
    >
      <VueInput

        id="childInput"

        ref="childInput"
        v-model="formData.childInput"

        data-type="string"
      />
    </VueFormItem>

    <VueButton id="getBtn" ref="getBtn" icon-position="left" @click="getBtnClick">
      Get Value From Parent
    </VueButton>
    <VueButton id="emitBtn" ref="emitBtn" icon-position="left" @click="emitBtnClick">
      Emit Value to Parent
    </VueButton>
  </VueForm>
</template>
