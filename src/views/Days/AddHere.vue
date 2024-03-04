<template>
  <div>
    <h1>Schedule Page</h1>
    <!-- <ul>
      <li
        v-for="(bookmark, index) in bookmarkList"
        :key="index"
        :items="bookmark"
      >
        {{ bookmark }}
      </li>
    </ul> -->
    <template>
      <v-row>
        <v-col
          v-for="(bookmark, index) in bookmarkList"
          :key="index"
          :items="bookmark"
          cols="12"
          sm="6"
          xl="3"
        >
          <v-sheet border>
            <v-img
              :gradient="`to top right, rgba(255, 255, 255, .1), rgba(${item.raw.color}, .15)`"
              :src="item.raw.src"
              cover
              height="250"
            ></v-img>

            <v-list-item
              :title="item.raw.name"
              lines="two"
              density="comfortable"
              subtitle="Lorem ipsum dil orei namdie dkaf"
            >
              <template v-slot:title>
                <strong class="text-h6">
                  {{ item.raw.name }}
                </strong>
              </template>
            </v-list-item>

            <v-table density="compact" class="text-caption">
              <tbody>
                <tr align="right">
                  <th>DPI:</th>

                  <td>{{ item.raw.dpi }}</td>
                </tr>

                <tr align="right">
                  <th>Buttons:</th>

                  <td>{{ item.raw.buttons }}</td>
                </tr>
              </tbody>
              <div class="add-buttons">
                <v-btn color="purple" @click="addToSchedule(item, 1)"
                  >1.Güne Ekle</v-btn
                >
                <v-btn color="yellow" @click="addToSchedule(item, 2)"
                  >2.Güne Ekle</v-btn
                >
              </div>
            </v-table>
            <div class="text-center">
              <v-menu open-on-hover>
                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </template>
    <!-- <button @click="addToSchedule({ name: 'New Item', option: 'New Option' })">
      Add to Schedule
    </button> -->
  </div>
</template>

<script>
// import { mapGetters } from "vuex";

export default {
  data() {
    return {
      bookmarkList: [],
      categoryList: [],
      itemsPerPage: 9,
      item: {},
      option: 1,
    };
  },
  // methods: {
  //   addToSchedule(item, option) {
  //     this.$store.dispatch("addToSchedule", { item, option });
  //   },
  // },
  // computed: {
  //   ...mapGetters(["getSchedule"]),
  //   schedule() {
  //     return this.getSchedule;
  //   },
  // },
  created() {
    // Bookmark listesini al ve bookmarkList verisine ata
    this.$appAxios.get("/schedule").then((bookmark_list_response) => {
      console.log("bookmark_list_response :>> ", bookmark_list_response);
      this.bookmarkList = bookmark_list_response?.data || [];
    });
  },
};
</script>

<style scoped>
.v-responsive {
  height: 250px;
}
@media (min-width: 600px) {
  .v-col-sm-6 {
    max-width: 33%;
  }
}
.add-buttons {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 2px;
}
</style>