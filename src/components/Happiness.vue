<template>
  <div class="happiness">
    <div class="happiness__title">Happiness Slider</div>
    <div class="happiness__face">
      <img :src="faceImg" alt="happy face" />
    </div>
    <div class="happiness__text">I'm feeling...</div>
  </div>
</template>

<script>
export default {
  name: "Happiness",
  props: {
    level: Number,
  },
  data() {
    return {
      faceImg: "/assets/img/faces/3-neutral.svg",
    };
  },
  watch: {
    level() {
      // Could also be done with switch/case
      if (this.level === 1) {
        this.faceImg = "/assets/img/faces/0-not-happy-at-all.svg";
      } else if (this.level === 2) {
        this.faceImg = "/assets/img/faces/1-not-happy.svg";
      } else if (this.level === 3) {
        this.faceImg = "/assets/img/faces/3-neutral.svg";
      } else if (this.level === 4) {
        this.faceImg = "/assets/img/faces/4-pretty-happy.svg";
      } else {
        this.faceImg = "/assets/img/faces/5-super-happy.svg";
      }
    },
  },
};
</script>

<style lang="scss">
.happiness {
  &__text {
    color: white;
    font-size: 40px;
    margin: 30px;
  }

  &__title {
    color: white;
    font-size: 60px;
    margin: 30px;
  }
}
</style>
