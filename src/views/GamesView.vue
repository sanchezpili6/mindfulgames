<template>
  <v-container>
    <v-row>
      <v-col
          cols="12"
          md="4"
      >
        <v-skeleton-loader
            v-bind="attrs"
            type="card-avatar, article, actions"
        ></v-skeleton-loader>

        <v-skeleton-loader
            v-bind="attrs"
            type="date-picker"
        ></v-skeleton-loader>
      </v-col>

      <v-col
          cols="12"
          md="4"
      >
        <v-skeleton-loader
            v-bind="attrs"
            type="article, actions"
        ></v-skeleton-loader>

        <v-skeleton-loader
            v-bind="attrs"
            type="table-heading, list-item-two-line, image, table-tfoot"
        ></v-skeleton-loader>
      </v-col>

      <v-col
          cols="12"
          md="4"
      >
        <v-skeleton-loader
            v-bind="attrs"
            type="list-item-avatar, divider, list-item-three-line, card-heading, image, actions"
        ></v-skeleton-loader>

        <v-skeleton-loader
            v-bind="attrs"
            type="list-item-avatar-three-line, image, article"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-overlay>
      <v-card
          class="mx-auto"
          max-width="344"
      >
        <v-img
            src="https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/314093849_107103272211881_1774120908107051464_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=r3q-0TyfSLwAX-Rf6Lm&tn=TZ6RaYmvzMuEDaTc&_nc_ht=scontent-qro1-1.xx&oh=00_AfBHvcsAoMlUGKLAFQ9reun2zO0NrggTKY9hVBsSQsSGSg&oe=636BD356"
            height="200px"
        ></v-img>
        <v-card-title>
          Si te gustaron los juegos, descarga Kilter en tu celular
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#e58d18" href="https://www.facebook.com/profile.php?id=100087366257315" target="_blank">Ir a Kilter</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="#e58d18" to="/">Volver</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-overlay>
  </v-container>
</template>

<script>
export default {
  name: "GamesView"
}
</script>

<style scoped>

</style>