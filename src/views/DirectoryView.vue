<template>
  <v-container>
    <v-row align="center" dense no-gutters>
        <v-card elevation="5" cols="4" v-for="item in items" :key="item.title" max-width="340px" class=" contact d-flex child-flex rounded-card pa-5 my-10">
          <v-row justify="center" no-gutters>
            <img :src="item.avatar" height="120px" class="text-align center picture">
          </v-row>
          <v-row class="pa-1 pb-10 ma-3 pt-0" no-gutters>
            <v-card-title class="viewTitle text-start">
              {{item.title}}
            </v-card-title>
            <v-card-subtitle class="text-center">
                {{item.subtitle}}
            </v-card-subtitle>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#e58d18">Contactar</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-row>
        </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DirectoryView",
  data () {
    return {
      items: [
        { title: 'Jason Oner', subtitle:'Contador Públco', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
        { title: 'Travis Howard', subtitle:'Coach de vida', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        { title: 'Ali Connors', subtitle:'Psicóloga', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
        { title: 'Cindy Baker', subtitle:'Doctora general', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
      ],
    }
  },
}
</script>

<style scoped>
.contact{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 300px;
  margin: 20px;
  padding: 25px;
  background-color:#b8b2a6 ;
}
.picture{
  border-radius: 50%;
}
</style>