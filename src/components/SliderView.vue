<template>
  <div class="slider-view">
    <happiness :level="mood" />
    <div class="slider-view__triangle" />
    <div class="slider-view__widget">
      <input
        class="slider-view__input"
        type="range"
        min="1"
        max="99"
        step="1"
        v-model="value"
        @change="setMood()"
      />
      <div v-if="moodSet" class="slider-view__badge">✔</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Happiness from "./Happiness";

export default {
  name: "SliderView",
  components: {
    Happiness,
  },
  data() {
    return {
      value: 50,
      moodSet: false,
    };
  },
  computed: {
    ...mapState(["message"]),
    mood() {
      return Math.ceil(Number(this.value) / 20);
    },
  },
  methods: {
    ...mapActions(["loadMessage"]),
    async setMood() {
      await this.loadMessage(this.mood);
      this.moodSet = true;
      // Timeout is set to show confirmation badge
      setTimeout(() => {
        this.$router.push({
          name: "result",
          params: {
            message: this.message,
          },
        });
      }, 800);
    },
  },
};
</script>

<style lang="scss">
@import "../scss/_variables.scss";

.slider-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__badge {
    background-color: $color-success;
    border-radius: $spacer-radius * 15;
    color: white;
    display: flex;
    flex-direction: column;
    font-size: $text-primary;
    justify-content: center;
    margin-left: $spacer-radius * 10;
    margin-right: -$spacer-radius * 30;
    width: $spacer-primary * 10;
  }

  &__triangle {
    width: 0;
    height: 0;
    border-left: $spacer-primary * 5 solid transparent;
    border-right: $spacer-primary * 5 solid transparent;
    border-bottom: $spacer-primary * 5 solid $color-white;
  }

  &__widget {
    background-color: $color-white;
    border-radius: $spacer-primary * 20;
    display: flex;
    padding: $spacer-primary * 10 $spacer-primary * 20;
    width: calc(100% - $spacer-primary * 120);
  }

  // Custom range slider widget
  &__input {
    -webkit-appearance: none;
    background: $color-primary;
    border-radius: $spacer-radius * 4;
    display: block;
    margin: $spacer-primary * 3 $spacer-zero;
    width: 100%;

    &::-moz-range-thumb {
      background-image: url("/assets/img/slider-handle.png");
      border: none;
      cursor: pointer;
      height: $spacer-primary * 10;
      margin-top: $spacer-primary * 4;
      width: $spacer-primary * 10;
    }

    &::-moz-range-track {
      border: none;
      cursor: pointer;
      height: $spacer-radius * 8;
      width: 100%;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      background-image: url("/assets/img/slider-handle.png");
      border: none;
      cursor: pointer;
      height: $spacer-primary * 10;
      margin-top: -$spacer-primary * 4;
      width: $spacer-primary * 10;
    }

    &::-webkit-slider-runnable-track {
      border: none;
      cursor: pointer;
      height: $spacer-radius * 8;
      width: 100%;
    }
  }
}
</style>
