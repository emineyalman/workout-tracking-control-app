<template>
  <v-container>
    <v-card
      v-for="repetition in repetitionList"
      :key="repetition.id"
      :value="repetition.id"
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

      <v-card-actions>
        <select name="apples" id="apples">
          <option
            v-for="apple in appleList"
            :key="apple.id"
            :value="repetition.id"
          >
            {{ apple.number }}
          </option>
        </select>
        <select name="apples" id="apples">
          <option
            v-for="apple in appleList"
            :key="apple.id"
            :value="repetition.id"
          >
            {{ apple.number }}
          </option>
        </select>
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
    appleList: [],
    repetitionList: [],
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
    Promise.all([
      this.$appAxios.get("/repetitions"),
      this.$appAxios.get("/apples"),
    ])
      .then(([repetition_response, apple_response]) => {
        console.log("repetition_response :>> ", repetition_response);
        console.log("apple_response :>> ", apple_response);
        this.repetitionList = repetition_response?.data || [];
        this.appleList = apple_response?.data || [];
      })
      .catch((error) => {
        console.error("Error loading data:", error);
        // Hata durumunda gerekli işlemleri yapabilirsiniz
      });
  },
};
</script>


<style lang="scss" scoped>
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
select {
  width: 40%;
  background: #c696ce;
  border-bottom: 2px solid;
  border-radius: 10px;
  height: 40px;

  option {
    text-align: center;
  }
}
</style>