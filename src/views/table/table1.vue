<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const lockScreenUtils = useLockScreen();
const lockScreen = lockScreenUtils.lockScreen;

defineOptions({
  name: 'table1',
});

const form = ref();
const viy2Table_2Om6V = ref();

const formData = reactive({
});

const viy2Table_2Om6VEditConfig = reactive({
  trigger: 'click',

});

const viy2Table_2Om6VMouseConfig = reactive({

  extension: true,

});

const viy2Table_2Om6VFirstNameEditRender = computed(() => {
  return {
    enabled: true,
  };
});

const viy2Table_2Om6VAgeEditRender = computed(() => {
  return {
    enabled: false,
  };
});
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueTable

      id="viy2Table_2Om6V"
      ref="viy2Table_2Om6V"

      :edit-config="viy2Table_2Om6VEditConfig"
      :mouse-config="viy2Table_2Om6VMouseConfig"
    >
      <VueIndexColumn

        align="center"

        width="50px"

        min-width="50px"

        header-align="center"

        title="S no"
      />

      <VueInputColumn

        :edit-render="viy2Table_2Om6VFirstNameEditRender"

        field="firstName"

        width="200px"

        title="First Name"
      />
      <VueNumberColumn

        :edit-render="viy2Table_2Om6VAgeEditRender"

        field="age"

        width="200px"

        title="Age"
      />
    </VueTable>
  </VueForm>
</template>
