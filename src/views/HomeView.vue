<template>
  <div class="home">
    <v-card class="games_card mx-auto" height="500px">
      <v-card-title>Tus juegos de hoy</v-card-title>
      <v-row>
        <v-col>
          <v-card
              class="mx-auto"
              max-width="344"
          >
            <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
            ></v-img>

            <v-card-title>
              <v-spacer></v-spacer>
              Red Flags
              <v-spacer></v-spacer>
            </v-card-title>

            <v-card-subtitle>
              Salud
            </v-card-subtitle>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#e58d18" to="/red_flags">Jugar</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <v-card
              class="mx-auto"
              max-width="344"
          >
            <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
            ></v-img>

            <v-card-title>
              <v-spacer></v-spacer>
              Glucosa
              <v-spacer></v-spacer>
            </v-card-title>

            <v-card-subtitle>
              Salud
            </v-card-subtitle>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#e58d18" to="/glucosa">Jugar</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <v-card
              class="mx-auto"
              max-width="344"
          >
            <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
            ></v-img>

            <v-card-title>
              <v-spacer></v-spacer>
              Solitaria
              <v-spacer></v-spacer>
            </v-card-title>

            <v-card-subtitle>
              Salud
            </v-card-subtitle>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#e58d18" to="/solitaria">Jugar</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-card-actions style="align-content: flex-end">
        <v-spacer></v-spacer>
        <v-btn class="my-12" color="#e58d18" to="/games">Ver todos</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',
  data() {
    return {
      games: [
        { text: 'Solitaria', value: '/solitaria' },
        { text: 'Glucosa', value: '/glucosa' },
        { text: 'Red Flags', value: '/red_flags' },
      ]
    }
  }
}
</script>


<style scoped>
.home {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
}

.games_card {
  width: 90%;
}

</style>