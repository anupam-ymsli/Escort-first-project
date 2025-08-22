<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useApi } from '@/composables/useApi';

const { t } = useI18n();
const lockScreenUtils = useLockScreen();
const lockScreen = lockScreenUtils.lockScreen;

defineOptions({
  name: 'api1',
});

const form = ref();
const viy2Select_PeNWX = ref();

const formData = reactive({
  datafieldviy2Select_PeNWX: '',
});

const viy2Select_PeNWXOpts = reactive([
  {
      				label:
      					'Option 1',
      				value:
      					'Option 1',
      			},
  {
      				label:
      					'Option 2',
      				value:
      					'Option 2',
      			},
  {
      				label:
      					'Option 3',
      				value:
      					'Option 3',
      			},
]);

const matchModeDataSetApi = useApi({
  url: 'http://localhost:8180/api_calling',
  method: 'post',
  data: () => {
    return {
      // this is the data that is being send with the post request
      sysOwnerCd: '6105',
      codeValueList: [
        { codeId: '99', codeKey1: '1' },
      ],
    };
  },

}, {
  onSuccess: (data, params) => {
    console.log(data);
  },
});
const matchModeDataSet = matchModeDataSetApi.data;
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFormItem

      prop="datafieldviy2Select_PeNWX"
    >
      <VueSelect

        id="viy2Select_PeNWX"
        ref="viy2Select_PeNWX"

        v-model="formData.datafieldviy2Select_PeNWX"

        :options="viy2Select_PeNWXOpts"
      />
    </VueFormItem>
  </VueForm>
</template>
