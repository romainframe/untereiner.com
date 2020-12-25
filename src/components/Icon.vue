<template>
  <unicon class="mx-1 my-1" :name="this.name" role="button" @click="openUrl()" :fill="this.color" icon-style="monochrome"></unicon>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "royalblue"
    },
    name: {
      type: String,
      required: true,
    }
  },
  methods: {
    openUrl() {
		  window.open(this.url, "_blank");
    }
  }
}
</script>

