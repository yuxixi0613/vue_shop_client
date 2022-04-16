<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor
      v-for="floor in floorList"
      :key="floor.id"
      :floor="floor"
    ></Floor>
    <!-- <Floor></Floor> -->
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from "./components/ListContainer";
import Recommend from "./components/Recommend";
import Rank from "./components/Rank";
import Like from "./components/Like";
import Floor from "./components/Floor";
import Brand from "./components/Brand";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted() {
    this.getFloorList();
  },
  methods: {
    getFloorList() {
      this.$store.dispatch("getFloorList");
    },
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  },
};
</script>

<style lang="less" scoped>
</style>