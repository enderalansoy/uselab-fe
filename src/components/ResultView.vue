<template>
  <div class="result-view">
    <p class="result-view__text">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "ResultView",
  props: {
    message: String,
  },
};
</script>

<style lang="scss">
@import "../scss/_variables.scss";

.result-view {
  align-items: center;
  background-color: $color-secondary;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;

  &__text {
    font-size: 60px;
  }
}
</style>
