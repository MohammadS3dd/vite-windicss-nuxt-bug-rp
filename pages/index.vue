<template>
  <div class="flex flex-col relative overflow-hidden bg-blue-50" dir="rtl">
    <productCommentSlider />
  </div>
</template>

<script>
// import mainProductSlider from '@/components/sliders/mainProductSlider'
import productCommentSlider from '@/components/sliders/product-comment-slider.vue'

export default {
  components: {
    // mainProductSlider,
    productCommentSlider,
  },
  layout: 'mobileProduct',
}
</script>

<style></style>
