<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';

import { useDemo01DataStore } from '@/datastores/demodatastore.js';

const { t } = useI18n();
const lockScreenUtils = useLockScreen();
const lockScreen = lockScreenUtils.lockScreen;

const router = useRouter();

onMounted(() => {
  console.log('Demo01_01 mounted');
  console.log('.............');
  console.log(useDemo01DataStore.getdemo0102Data);
});

defineOptions({
  name: 'demo0101',
});

const form = ref();
const fullName = ref();
const sendDataBtn = ref();

const formData = reactive({
  fullName: '',
});

const sendDataBtnClick = () => {
  openAndSend();
};

function openAndSend() {
  useDemo01DataStore().setDemo0102Data({
    fullName: formData.fullName,
  });

  useMultiTags().updateTag({
    name: 'demo0102',
  });

  router.push({ name: 'demo0102' });
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

    <VueButton id="sendDataBtn" ref="sendDataBtn" icon-position="left" @click="sendDataBtnClick">
      open and send data to Demo01_02
    </VueButton>
  </VueForm>
</template>
