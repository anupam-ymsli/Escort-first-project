<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';

const props = defineProps(['fullName']);
const emit = defineEmits(['clearFullName', 'selectFullName']);
const { t } = useI18n();
const lockScreenUtils = useLockScreen();
const lockScreen = lockScreenUtils.lockScreen;

const nameList = ref([]);// empty array declaration

defineOptions({
  name: 'child2',
});

const form = ref();
const addBtn = ref();
const nameDropDown = ref();

const formData = reactive({
  nameDropDown: '',
});

const nameDropDownProps = computed(() => {
    	return {
    label: 'fullName',
    value: 'fullName',

  };
});

const addBtnClick = () => {
  addValueToList();
};
const nameDropDownChange = (val, option, oldVal, oldOption) => {
  emit('selectFullName', val);
};

function addValueToList() {
  nameList.value.push({ fullName: props.fullName });
  emit('clearFullName');
}
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueButton id="addBtn" ref="addBtn" icon-position="left" @click="addBtnClick">
      Add Value To List
    </VueButton>

    <VueFormItem

      label="Full Names"

      prop="nameDropDown"
    >
      <VueSelect

        id="nameDropDown"
        ref="nameDropDown"

        v-model="formData.nameDropDown"

        :options="nameList"

        :props="nameDropDownProps"

        @change="nameDropDownChange"
      />
    </VueFormItem>
  </VueForm>
</template>
