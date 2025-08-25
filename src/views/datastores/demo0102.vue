<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';

import { useDemo01DataStore } from '@/datastores/demodatastore.js';

const { t } = useI18n();
const lockScreenUtils = useLockScreen();
const lockScreen = lockScreenUtils.lockScreen;

onMounted(() => {
  console.log('Demo01_02 mounted');
  console.log('.............');
  console.log(useDemo01DataStore.getdemo0102Data);
});

defineOptions({
  name: 'demo0102',
});

const form = ref();

const formData = reactive({
});
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData" />
</template>
