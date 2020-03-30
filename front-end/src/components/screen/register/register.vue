<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="indigo" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="indigo" dark flat>
              <v-toolbar-title>Cadastrar Tênis</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form ref="form" lazy-validation>
                <v-text-field v-model="product.value" label="Valor" required></v-text-field>
                <v-text-field v-model="product.name" label="Nome" required></v-text-field>
                <v-text-field v-model="product.brand" label="Marca" required></v-text-field>
                <v-flex xs12 md9>
                  <input
                    type="file"
                    style="display: none"
                    ref="img"
                    accept="image/*"
                    @change="convertImage"
                  />
                  <v-text-field
                    v-model="nameImg"
                    prepend-icon="mdi-image"
                    label="Insira img (160x160)"
                    @click="$refs.img.click()"
                    clearable
                  ></v-text-field>
                </v-flex>

                <v-btn dark color="green" class="mr-4" @click="save">Salvar</v-btn>
                <v-btn to="/home" dark color="orange" class="mr-4">Voltar</v-btn>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import api from "../../../../services/api";

export default {
  data: () => ({
    nameImg: "",
    product: {
      value: "",
      name: "",
      brand: "",
      uriPhoto: ""
    },
    imageData: "" // vamos armazenar o formato base64 da imagem nesta string
  }),

  methods: {
    convertImage: function(event) {
      //getting name arq
      const files = event.target.files;
      if (files[0] !== undefined) {
        this.nameImg = files[0].name;
      }
      // Reference to the DOM input element
      var input = event.target;
      // Verifique se você possui um arquivo antes de tentar lê-lo
      if (input.files && input.files[0]) {
        // cria um novo FileReader para ler esta imagem e converter para o formato base64
        var reader = new FileReader();

        // Defina uma função de retorno de chamada a ser executada quando o FileReader concluir seu trabalho
        reader.onload = e => {
          //função de seta usada aqui, para que "this.imageData" se refira ao componente imageData of Vue
          // Leia a imagem como base64 e defina como imageData
          console.log(e.target.result);
          this.imageData = e.target.result;
        };

        // Inicie o trabalho do leitor - leia o arquivo como um URL de dados (formato base64)
        reader.readAsDataURL(input.files[0]);
      }
    },
    async save() {
      this.product.uriPhoto = this.imageData;
      console.log(this.product);
      this.product.value = parseFloat(this.product.value);
      await api.post("products", this.product);
      this.product = {};
      this.nameImg = "";
    }
  }
};
</script>

<style>
</style>