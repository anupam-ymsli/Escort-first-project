<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const lockScreenUtils = useLockScreen();
const lockScreen = lockScreenUtils.lockScreen;

onMounted(() => {
  console.log('MOUNTED: DETAIL PAGE ');
});

onUnmounted(() => {
  console.log('unMOUNTED: detail PAGE ');
});

defineOptions({
  name: 'detail',
});

const form = ref();

const formData = reactive({
});
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData" />
</template>
