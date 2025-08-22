<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const lockScreenUtils = useLockScreen();
const lockScreen = lockScreenUtils.lockScreen;

const router = useRouter();

onMounted(() => {
  console.log('MOUNTED: HEADER PAGE ');
});

onUnmounted(() => {
  console.log('unMOUNTED: HEADER PAGE ');
});

defineOptions({
  name: 'header',
});

const form = ref();
const openDtlPage = ref();
const openNonActivePageBtn = ref();
const closeDtlPageBtn = ref();
const closeCurrentPageBtn = ref();
const updatetoDetailTabBtn = ref();
const refreshBtn = ref();
const viy2InputBox_V3NNm = ref();

const formData = reactive({
  datafieldviy2InputBox_V3NNm: '',
});

const openDtlPageClick = () => {
  openDetailPage();
};
const openNonActivePageBtnClick = () => {
  openNonActivePage();
};
const closeDtlPageBtnClick = () => {
  closeDtlPage();
};
const closeCurrentPageBtnClick = () => {
  closeCurrentPage();
};
const updatetoDetailTabBtnClick = () => {
  updatetoDetailTab();
};
const refreshBtnClick = () => {
  refreshPage();
};

function openDetailPage() {
  // router.push('detail');
  router.push({ name: 'detail', query: { id: 'ID001' } });
}

function openNonActivePage() {
  useMultiTags().openTag({
    name: 'detail',
  });

// Use router.push to activate it when needed if we dont want to active it while opening it then
// we are not going to use router .push
// router.push({ name: 'detail'});
}
function closeCurrentPage() {
  useMultiTags().closeTag();
  router.push('/'); // nevigate to home page
}

function closeDtlPage() {
  useMultiTags().closeTag('detail');
  router.push('/');
}

function refreshPage() {
  useMultiTags().refreshCurrent();
}

function updatetoDetailTab() {
  useMultiTags().updateTag({
    name: 'detail',
  });

  // When the parameters are the same as the updated tag, it will open in the current tag instead of creating a new one
  router.push({ name: 'detail' });
  useMultiTags().removeTagCache({ name: 'header' }); // erase all the data manually entered by user .....actually it works like a refresh
}
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueButton id="openDtlPage" ref="openDtlPage" icon-position="left" @click="openDtlPageClick">
      open detail page
    </VueButton>
    <VueButton id="openNonActivePageBtn" ref="openNonActivePageBtn" icon-position="left" @click="openNonActivePageBtnClick">
      open non active page
    </VueButton>
    <VueButton id="closeDtlPageBtn" ref="closeDtlPageBtn" icon-position="left" @click="closeDtlPageBtnClick">
      Close Detail  Page
    </VueButton>
    <VueButton id="closeCurrentPageBtn" ref="closeCurrentPageBtn" icon-position="left" @click="closeCurrentPageBtnClick">
      Close Current Page
    </VueButton>
    <VueButton id="updatetoDetailTabBtn" ref="updatetoDetailTabBtn" icon-position="left" @click="updatetoDetailTabBtnClick">
      Update To Detail Tab
    </VueButton>
    <VueButton id="refreshBtn" ref="refreshBtn" icon-position="left" @click="refreshBtnClick">
      Refresh
    </VueButton>

    <VueFormItem

      label="Name"

      prop="datafieldviy2InputBox_V3NNm"
    >
      <VueInput

        id="viy2InputBox_V3NNm"

        ref="viy2InputBox_V3NNm"
        v-model="formData.datafieldviy2InputBox_V3NNm"

        data-type="string"
      />
    </VueFormItem>
  </VueForm>
</template>
