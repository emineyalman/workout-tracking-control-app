<template>
  <div>
    <v-container>
      <v-data-iterator :items="mice" :items-per-page="itemsPerPage">
        <template v-slot:header="{ page, pageCount, prevPage, nextPage }">
          <h1
            class="text-h4 font-weight-bold d-flex justify-space-between mb-4 align-center"
          >
            <div class="text-truncate">All Exercises</div>

            <div class="d-flex align-center">
              <v-btn class="me-8" variant="text" @click="onClickSeeAll">
                <span class="text-decoration-underline text-none">See all</span>
              </v-btn>
              <div class="d-inline-flex">
                <v-btn
                  :disabled="page === 1"
                  icon="mdi-arrow-left"
                  size="small"
                  variant="tonal"
                  class="me-2"
                  @click="prevPage"
                ></v-btn>

                <v-btn
                  :disabled="page === pageCount"
                  icon="mdi-arrow-right"
                  size="small"
                  variant="tonal"
                  @click="nextPage"
                ></v-btn>
              </div>
            </div>
          </h1>
        </template>

        <template v-slot:newItem="{ items }">
          <v-row>
            <v-col v-for="(item, i) in items" :key="i" cols="12" sm="6" xl="3">
              <v-sheet border>
                <!-- ... -->

                <div class="text-center">
                  <v-menu open-on-hover>
                    <v-btn id="menu-activator" color="primary">
                      Sibling activator
                    </v-btn>

                    <v-menu activator="#menu-activator">
                      <v-list>
                        <v-list-item
                          v-for="(button, el) in buttons"
                          :key="button"
                          :value="el"
                        >
                          <v-list-item-title>{{
                            button.title
                          }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-menu>
                </div>
              </v-sheet>
            </v-col>
          </v-row>
        </template>

        <template v-slot:default="{ items }">
          <v-row>
            <v-col v-for="(item, i) in items" :key="i" cols="12" sm="6" xl="3">
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

        <template v-slot:footer="{ page, pageCount }">
          <v-footer
            color="surface-variant"
            class="justify-space-between text-body-2 mt-4"
          >
            Total mice: {{ mice.length }}

            <div>Page {{ page }} of {{ pageCount }}</div>
          </v-footer>
        </template>
      </v-data-iterator>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categoryList: [],
      itemsPerPage: 9,
      item: {},
      option: 1,
      mice: [
        {
          name: "Logitech G Pro X",
          color: "14, 151, 210",
          dpi: 16000,
          buttons: 8,
          weight: "63g",
          wireless: true,
          price: 149.99,
          description: "Logitech G Pro X",
          src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/1.png",
          id: "1206",
        },
        {
          name: "Razer DeathAdder V2",
          color: "12, 146, 47",
          dpi: 20000,
          buttons: 8,
          weight: "82g",
          wireless: false,
          price: 69.99,
          description: "Razer DeathAdder V2",
          src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/2.png",
          id: "ef39",
        },
        {
          name: "Corsair Dark Core RGB",
          color: "107, 187, 226",
          dpi: 18000,
          buttons: 9,
          weight: "133g",
          wireless: true,
          price: 89.99,
          description: "Corsair Dark Core RGB",
          src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/3.png",
          id: "af63",
        },
        {
          name: "SteelSeries Rival 3",
          color: "228, 196, 69",
          dpi: 8500,
          buttons: 6,
          weight: "77g",
          wireless: false,
          price: 29.99,
          description: "SteelSeries Rival 3",
          src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/4.png",
          id: "2316",
        },
        {
          name: "HyperX Pulsefire FPS Pro",
          color: "156, 82, 251",
          dpi: 16000,
          buttons: 6,
          weight: "95g",
          wireless: false,
          price: 44.99,
          description: "HyperX Pulsefire FPS Pro",
          src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/5.png",
          id: "8d53",
        },
        {
          name: "Zowie EC2",
          color: "166, 39, 222",
          dpi: 3200,
          buttons: 5,
          weight: "90g",
          wireless: false,
          price: 69.99,
          description: "Zowie EC2",
          src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/6.png",
          id: "3a3f",
        },
        {
          name: "Roccat Kone AIMO",
          color: "131, 9, 10",
          dpi: 16000,
          buttons: 10,
          weight: "130g",
          wireless: false,
          price: 79.99,
          description: "Roccat Kone AIMO",
          src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/7.png",
          id: "acf4",
        },
        {
          name: "Logitech G903",
          color: "232, 94, 102",
          dpi: 12000,
          buttons: 11,
          weight: "110g",
          wireless: true,
          price: 129.99,
          description: "Logitech G903",
          src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/8.png",
          id: "3a91",
        },
        {
          name: "Cooler Master MM711",
          color: "58, 192, 239",
          dpi: 16000,
          buttons: 6,
          weight: "60g",
          wireless: false,
          price: 49.99,
          description: "Cooler Master MM711",
          src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/9.png",
          id: "5438",
        },
        {
          name: "Glorious Model O",
          color: "161, 252, 250",
          dpi: 12000,
          buttons: 6,
          weight: "67g",
          wireless: false,
          price: 49.99,
          description: "Glorious Model O",
          src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/10.png",
          id: "313c",
        },
        {
          name: "HP Omen Photon",
          color: "201, 1, 2",
          dpi: 16000,
          buttons: 11,
          weight: "128g",
          wireless: true,
          price: 99.99,
          description: "HP Omen Photon",
          src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/11.png",
          id: "8c04",
        },
        {
          name: "Asus ROG Chakram",
          color: "10, 181, 19",
          dpi: 16000,
          buttons: 9,
          weight: "121g",
          wireless: true,
          price: 159.99,
          description: "Asus ROG Chakram",
          src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/12.png",
          id: "cce5",
        },
        {
          name: "Razer Naga X",
          color: "100, 101, 102",
          dpi: 16000,
          buttons: 16,
          weight: "85g",
          wireless: false,
          price: 79.99,
          description: "Razer Naga X",
          src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/13.png",
          id: "2cb6",
        },
        {
          name: "Mad Catz R.A.T. 8+",
          color: "136, 241, 242",
          dpi: 16000,
          buttons: 11,
          weight: "145g",
          wireless: false,
          price: 99.99,
          description: "Mad Catz R.A.T. 8+",
          src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/14.png",
          id: "49d1",
        },
        {
          name: "Alienware 610M",
          color: "109, 110, 114",
          dpi: 16000,
          buttons: 7,
          weight: "120g",
          wireless: true,
          price: 99.99,
          description: "Alienware 610M",
          src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/15.png",
          id: "8e88",
        },
      ],
      buttons: [{ title: "1.Days Add" }, { title: "2.Days Add" }],
    };
  },
  // created() {
  //   this.$appAxios.get("/mice").then((mice_response) => {
  //     console.log("mice_response :>> ", mice_response);
  //     this.miceList = mice_response?.data || [];
  //   });
  // },
  methods: {
    onClickSeeAll() {
      this.itemsPerPage = this.itemsPerPage === 4 ? this.mice.length : 4;
    },
    addToSchedule(item, option) {
      // Burada seçilen öğenin verisini kullanarak Axios ile bir istek gönderin
      this.$appAxios
        .post("/schedule", {
          item: item,
          option: option,
        })
        .then((response) => {
          // İstek başarılı olduğunda yapılacak işlemler
          console.log("response :>> ", response);
          this.categoryList = response?.data || [];
        });
    },
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

<!-- <div>
  {{ item }}
    <v-btn
      id="menu-activator"
      color="primary"
    >
      Sibling activator
    </v-btn>

    <v-menu activator="#menu-activator">
      <v-list>
        <v-list-item
          v-for="(button, el) in buttons"
          :key="button"
          :value="el"
        >
          <v-list-item-title>{{ button.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div> -->