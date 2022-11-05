<template>
  <v-card>
    <v-card-title>
      <v-spacer></v-spacer>
      Checa los recursos que tenemos disponibles
      <v-spacer></v-spacer>
    </v-card-title>
    <v-card-text>
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
              Qué es el círculo del bienestar?
              <v-spacer></v-spacer>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#e58d18" to="/solitaria">Leer</v-btn>
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
                Lo que los especialistas dicen de tu diagnóstico
              <v-spacer></v-spacer>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#e58d18" to="/solitaria">Leer</v-btn>
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
              Cómo encontrar un balance en tu vida
              <v-spacer></v-spacer>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#e58d18" to="/solitaria">Leer</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ResourcesView"
}
</script>

<style scoped>

</style>