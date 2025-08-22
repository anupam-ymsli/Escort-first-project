<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';

const { t } = useI18n();
const lockScreenUtils = useLockScreen();
const lockScreen = lockScreenUtils.lockScreen;

defineOptions({
  name: 'form1',
});

const form = ref();
const fname = ref();
const lname = ref();
const dob = ref();
const age = ref();
const gender = ref();
const hobbies = ref();
const yoe = ref();
const yoe2 = ref();
const description = ref();
const printBtn = ref();
const setValue = ref();

const formData = reactive({
  firstName: 'Anupam', lastName: 'Rajput ', dob: '', age: 0, gender: '', hobbies: [], yoe: '', description: '',
});

const rules = reactive({
  fnameRules: [
    {
      required: true,

      message: computed(() => {
        return t('validation.error.required');
      }),

      trigger: 'change',

      enabled: true,

    },

  ],

});

const yoeProps = computed(() => {
    	return {
    label: 'name',
    value: 'value',

  };
});

const yoeDataSourceApi = useApi({
  method: 'post',
  localData: [
    { name: '<1year', value: 100 },
    { name: '<2year', value: 200 },
    { name: '<3year', value: 300 },
    { name: '<4year', value: 400 },
  ],

});
const yoeDataSource = yoeDataSourceApi.data;
const genderDataSetApi = useApi({
  method: 'post',
  localData: [
    { storedValue: 'M', displayedValue: 'Malee' },
    { storedValue: 'F', displayedValue: 'Femalee' },
  ],

});
const genderDataSet = genderDataSetApi.data;
const hobbiesDataSetApi = useApi({
  method: 'post',
  localData: [
    { name: 'Cricket', value: 1 },
    { name: 'Baseball', value: 2 },
    { name: 'Basketball', value: 3 },

  ],

});
const hobbiesDataSet = hobbiesDataSetApi.data;
const yoeDroprdown2DataSetApi = useApi({
  method: 'post',
  localData: [
    { text: '1' },
    { text: '2' },
    { text: '3' },
    { text: '4' },
  ],

});
const yoeDroprdown2DataSet = yoeDroprdown2DataSetApi.data;

const descriptionBlur = (event) => {
  console.log('you just blur me ');
  console.log(event);
};
const descriptionFocus = (event) => {
  console.log('u just focused me ');
};
const descriptionInput = (value) => {
  console.log(value);
};
const printBtnClick = () => {
  // console.log(formData.firstName);
  //  console.log(formData.lastName);
  printFormData();
};
const setValueClick = () => {
  formData.firstName = 'harry';
  formData.lastName = 'jackson';
};

function printFormData() {
  console.log(formData.firstName);
  console.log(formData.lastName);
  console.log(formData.gender);
  console.log(formData.hobbies);
  console.log(formData.yoe);
}
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueText id="heading" ref="heading" type="success" size="large" :style="{ width: '100%', display: 'inline-block', textAlign: 'left', alignSelf: 'center' }">
      First lecture on form component
    </VueText>

    <VueFormItem

      :label="t('label.firstName')"

      prop="firstName"

      :rules="rules.fnameRules"
    >
      <VueInput

        id="fname"

        ref="fname"

        v-model="formData.firstName"
        data-type="string"

        :autofocus="true"
      />
    </VueFormItem>

    <VueFormItem

      :label="t('label.lastName')"

      prop="lastName"
    >
      <VueInput

        id="lname"

        ref="lname"
        v-model="formData.lastName"

        data-type="string"
      />
    </VueFormItem>

    <VueFormItem

      :label="t('label.dob')"

      prop="dob"
    >
      <VueDatePicker

        id="dob"

        ref="dob"
        v-model="formData.dob"

        separator="p"
      />
    </VueFormItem>

    <VueFormItem

      :label="t('label.age')"

      prop="age"
    >
      <VueInputNumber

        id="age"

        ref="age"

        v-model="formData.age"
        :step="1"

        :controls="true"
      />
    </VueFormItem>

    <VueFormItem

      :label="t('label.gender')"

      prop="gender"
    >
      <VueRadioGroup

        id="gender"

        ref="gender"
        v-model="formData.gender"

        direction="horizontal"

        split-size="default"
      >
        <VueRadio
          v-for="option in genderDataSet"
          :key="option.storedValue"
          :label="option.storedValue"
          :name="option.name"
          :disabled="option.disabled"
        >
          {{ option.displayedValue }}
        </VueRadio>
      </VueRadioGroup>
    </VueFormItem>

    <VueFormItem

      :label="t('label.hobbies')"

      prop="hobbies"
    >
      <VueCheckboxGroup

        id="hobbies"

        ref="hobbies"
        v-model="formData.hobbies"

        :process-variable="false"

        split-size="default"
      >
        <VueCheckbox
          v-for="option in hobbiesDataSet"
          :key="option.value"
          :label="option.value"
          :name="option.name"
          :disabled="option.disabled"
        >
          {{ option.name }}
        </VueCheckbox>
      </VueCheckboxGroup>
    </VueFormItem>

    <VueFormItem

      :label="t('label.yoe')"

      prop="yoe"
    >
      <VueSelect

        id="yoe"
        ref="yoe"

        v-model="formData.yoe"

        :options="yoeDataSource"

        :props="yoeProps"
      />
    </VueFormItem>

    <VueDropdown

      id="yoe2"

      ref="yoe2"

      :split-button="true"
      trigger="click"
    >
      <VueIcon class="vue-icon--left" />
      Years of Experience
      <template #dropdown>
        <VueDropdownMenu>
          <VueDropdownItem
            v-for="item in yoeDroprdown2DataSet"
            :command="item.command"
            :disabled="item.disabled"
            :divided="item.divided"
            :icon="item.icon"
          >
            {{ item.text }}
          </VueDropdownItem>
        </VueDropdownMenu>
      </template>
    </VueDropdown>

    <VueFormItem

      :label="t('label.description')"

      prop="description"
    >
      <VueInput
        id="description"

        ref="description"

        v-model="formData.description"
        type="textarea"

        placeholder="enter description......"

        @blur="descriptionBlur"

        @focus="descriptionFocus"

        @input="descriptionInput"
      />
    </VueFormItem>

    <VueButton id="printBtn" ref="printBtn" icon-position="left" @click="printBtnClick">
      {{ t('button.print') }}
    </VueButton>
    <VueButton id="setValue" ref="setValue" icon-position="left" @click="setValueClick">
      {{ t('button.set') }}
    </VueButton>
  </VueForm>
</template>
