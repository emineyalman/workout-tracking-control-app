<template>
  <v-container>
    <v-card
      v-for="category in categoryList"
      :key="category.id"
      :value="category.id"
      class="mx-auto"
      max-width="344"
    >
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
        cover
      ></v-img>

      <v-card-title> Dumbbell Squat </v-card-title>

      <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

      <!-- Set sayıları için input alanları -->
      <v-card-actions>
        <v-select
          v-model="daysList.selectedRepetition"
          :items="repetitionOptions"
          label="Repetition"
          outlined
          @change="updateSelectedSet"
        ></v-select>
        <v-select
          v-model="daysList.selectedCount"
          :items="countOptions"
          label="Count"
          outlined
          @change="updateSelectedSet"
        ></v-select>
      </v-card-actions>

      <div class="add-buttons">
        <v-btn color="purple" @click="addToSchedule(item, 1)"
          >1.Güne Ekle</v-btn
        >
        <v-btn color="yellow" @click="addToSchedule(item, 2)"
          >2.Güne Ekle</v-btn
        >
      </div>
      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text> I'm a thing... </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    categoryList: [],
    errorLoadingCategories: false,
    show: false,
    repetitionOptions: ["3", "4"], // Repetition seçenekleri
    countOptions: Array.from({ length: 10 }, (_, i) => String(i + 1)), // Count seçenekleri (1'den 10'a kadar)
    daysList: {
      selectedRepetition: null,
      selectedCount: null,
    },
  }),
  computed: {
    displayedCounts() {
      if (this.selectedRepetition && this.selectedCount) {
        const start = parseInt(this.selectedCount);
        const repetition = parseInt(this.selectedRepetition);
        return Array.from({ length: 10 }, (_, i) => start + i * repetition);
      }
      return [];
    },
  },
  methods: {
    updateSelectedSet() {
      // Seçilen set değiştikçe displayedCounts computed property'si güncellenecek
    },
    onCountClick(count) {
      // Burada butona tıklandığında yapılması gereken işlemleri ekleyebilirsiniz
      console.log("Tıklandı:", count);
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
  mounted() {
    this.$appAxios
      .get("/repetition")
      .then((category_response) => {
        console.log("category_response :>> ", category_response);
        this.categoryList = category_response?.data || [];
      })
      .catch((error) => {
        console.error("Error loading categories:", error);
        this.errorLoadingCategories = true;
      });
  },
};
</script>


<style scoped>
.v-container {
  display: flex;
  flex-wrap: wrap;
}
.bg {
  background-color: black;
}
.btn-days {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  flex-direction: column;
}
</style>