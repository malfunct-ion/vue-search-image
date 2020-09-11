<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
      </v-col>
      <v-col cols="12">
        <v-text-field
          label="Cari gambar, vektor, dan video"
          prepend-inner-icon="mdi-magnify"
          outlined
          v-model="keyword"
          @keyup.enter="search"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-col cols="12" md="4" sm="4" v-for="image in images.hits" :key="image.id">
            <div class="img-border">
              <v-img :src="image.largeImageURL" aspect-ratio="1.7" class="img-item"></v-img>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ImgSearch",
  data() {
    return {
      keyword: "",
    };
  },
  computed: {
    images() {
      return this.$store.state.images;
    },
  },
  methods: {
    search() {
      this.$store.dispatch("GetDataImages", this.keyword);
    },
  },
  mounted() {
    this.$store.dispatch("GetDataImages");
  },
};
</script>

<style>
.img-border {
  overflow: hidden;
}
.img-border > .img-item {
  width: 100%;
  cursor: pointer;
}
.img-item:hover {
  transform: scale(1.5);
}
</style>
