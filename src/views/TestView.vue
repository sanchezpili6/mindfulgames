<template>
  <v-card>
    <v-card-title>
      <v-spacer></v-spacer>
      Para conocer tu puntaje del círculo de bienestar, debes contestar el siguiente cuestionario.
      <v-spacer></v-spacer>
    </v-card-title>
    <v-card-subtitle>
      <v-row>
        <v-spacer></v-spacer>
        Una vez que lo hayas contestado, llena aquí tu puntaje para que podamos mostrarte tu círculo de bienestar.
        <v-spacer></v-spacer>
      </v-row>
      <v-row>

      </v-row>
    </v-card-subtitle>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="#e58d18" href="https://www.onesolution.mx/testonesolution3.php" target="_blank">Cuestionario</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
    <v-card-text>
      <v-row>
        <v-spacer></v-spacer>
        <v-text-field
            v-model="score"
            label="Trabajo"
            outlined
            dense
        ></v-text-field>
        <v-spacer></v-spacer>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-text-field
            v-model="score"
            label="Salud"
            outlined
            dense
        ></v-text-field>
        <v-spacer></v-spacer>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-text-field
            v-model="score"
            label="Entorno Físico"
            outlined
            dense
        ></v-text-field>
        <v-spacer></v-spacer>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-text-field
            v-model="score"
            label="Desarrollo personal"
            outlined
            dense
        ></v-text-field>
        <v-spacer></v-spacer>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-text-field
            v-model="score"
            label="Relaciones"
            outlined
            dense
        ></v-text-field>
        <v-spacer></v-spacer>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-text-field
            v-model="score"
            label="Romance"
            outlined
            dense
        ></v-text-field>
        <v-spacer></v-spacer>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-text-field
            v-model="score"
            label="Dinero"
            outlined
            dense
        ></v-text-field>
        <v-spacer></v-spacer>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-text-field
            v-model="score"
            label="Diversión"
            outlined
            dense
        ></v-text-field>
        <v-spacer></v-spacer>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="#e58d18" >Guardar</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "TestView"
}
</script>

<style scoped>

</style>