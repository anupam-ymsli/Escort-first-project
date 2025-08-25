<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';

const { t } = useI18n();
const lockScreenUtils = useLockScreen();
const lockScreen = lockScreenUtils.lockScreen;

defineOptions({
  name: 'table2',
});

const form = ref();
const employeeTable = ref();
const retrieve = ref();
const add = ref();
const deleteRow = ref();
const saveBtn = ref();

const formData = reactive({
});

const employeeTableEditConfig = reactive({
  trigger: 'click',

});

const employeeTableMouseConfig = reactive({

  extension: true,

});

const employeeTableRowConfig = reactive({
  isCurrent: true,
});

const employeeDataSetApi = useApi({
  method: 'post',
  localData: [
    { emplyeeCode: 'YN151', firstName: 'Anupam1', lastName: 'rajput1', age: '10', gender: 'M', dob: '20040412' },
    { emplyeeCode: 'YN152', firstName: 'Anupam2', lastName: 'rajput2', age: '11', gender: 'F', dob: '20040412' },
    { emplyeeCode: 'YN153', firstName: 'Anupam3', lastName: 'rajput3', age: '12', gender: 'F', dob: '20040412' },
    { emplyeeCode: 'YN154', firstName: 'Anupam4', lastName: 'rajput4', age: '13', gender: 'M', dob: '20040412' },

  ],

}, {
  manual: true,
});
const employeeDataSet = employeeDataSetApi.data;

const employeeTableEmployeeCodeEditRender = computed(() => {
  return {
    enabled: false,
  };
});

const employeeTableFirstNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});

const employeeTableLastNameEditRender = computed(() => {
  return {
    enabled: false,
  };
});

const employeeTableAgeEditRender = computed(() => {
  return {
    enabled: false,
  };
});

const employeeTableGenderEditRender = computed(() => {
  return {
    enabled: true,
    attrs: {

      activeText: 'Female',
      inactiveText: 'Male',
      activeValue: 'F',
      inactiveValue: 'M',

    },
  };
});

const employeeTableDobEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {

      valueFormat: 'yymmdd',
      format: 'ddmmyy',

    },
  };
});

const retrieveClick = () => {
  retrieveData();
};
const addClick = () => {
  onAddValue();
};
const deleteRowClick = () => {
  onDeleteRow();
};
const saveBtnClick = () => {
  onSave();
};

function retrieveData() {
  employeeDataSetApi.runAsync();
}

function onAddValue() {
  const data = { employeeCode: 'yn101', firstName: 'kalpana', lastName: 'san', age: '20', gender: 'M', dob: '20080828' };
  employeeTable.value.insertAt(data);
}
function onDeleteRow() {
  const selectedRow = employeeTable.value.getCurrentRecord();
  employeeTable.value.remove(selectedRow);
}

function onSave() {
  const data = employeeTable.value.getTableData();
  // console.log(data.fullData());
  console.log(data.visibleData);
}
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueTable

      id="employeeTable"

      ref="employeeTable"

      :stripe="true"

      :border="true"
      :show-header="true"

      :data="employeeDataSet"

      :edit-config="employeeTableEditConfig"
      :mouse-config="employeeTableMouseConfig"
      :row-config="employeeTableRowConfig"
    >
      <VueIndexColumn

        align="center"

        width="50px"

        min-width="50px"

        header-align="center"

        title="S no."
      />

      <VueInputColumn

        :edit-render="employeeTableEmployeeCodeEditRender"

        field="employeeCode"

        width="200px"

        title="Employee Code"
      />
      <VueInputColumn

        :edit-render="employeeTableFirstNameEditRender"

        field="firstName"

        :title="t('label.firstName')"

        width="150px"
      />
      <VueInputColumn

        :edit-render="employeeTableLastNameEditRender"

        field="lastName"

        :title="t('label.lastName')"

        width="150px"
      />
      <VueNumberColumn

        :edit-render="employeeTableAgeEditRender"

        field="age"

        :title="t('label.age')"

        width="100px"
      />

      <VueSwitchColumn

        :edit-render="employeeTableGenderEditRender"

        field="gender"

        width="200px"

        :title="t('label.gender')"
      />
      <VueDateTimeColumn

        :edit-render="employeeTableDobEditRender"

        field="dob"

        :title="t('label.dob')"

        width="100px"
      />
    </VueTable>

    <VueButton id="retrieve" ref="retrieve" icon-position="left" @click="retrieveClick">
      Retrieve
    </VueButton>
    <VueButton id="add" ref="add" icon-position="left" @click="addClick">
      Add
    </VueButton>
    <VueButton id="deleteRow" ref="deleteRow" icon-position="left" @click="deleteRowClick">
      Delete
    </VueButton>
    <VueButton id="saveBtn" ref="saveBtn" icon-position="left" @click="saveBtnClick">
      Save
    </VueButton>
  </VueForm>
</template>
