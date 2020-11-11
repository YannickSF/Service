<template>
  <div>
    <div class="card box">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="@/assets/dtdsi.png" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Differents Types de Sites Internets</p>
            <p class="subtitle is-6">by @_yannicksf</p>
          </div>
        </div>

        <div class="content">
          Une infographie qui résume les différentes catégories de sites
          internets.
          <br />
          <br />
          <time>(2min .. lecture)</time>
        </div>
        <footer class="card-footer">
          <div class="field" style="margin-top: 3%; margin-left: 21%;">
            <div class="control">
              <button v-on:click="show()" class="button is-warning is-large is-fullwidth" >
                Recevoir
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>

    <modal name="download" :width="600" :height="300" :adaptive="true">
      <div
        class="container box"
        style="margin-top: 5%; margin-left 5%; margin-right 5%;" >
        <p class="title">Différents Sites Internets</p>
        <p class="subtitle">
          Laissez nous votre email, pour recevoir l'infographie.
        </p>
        <br />
        <div class="control is-expanded">
          <input
            id="sub_mail"
            class="input is-rounded"
            type="text"
            placeholder="Email" />
        </div>
        <div style="margin-top: 3%;">
          <button v-on:click="push()"
            class="button is-warning"
            style="margin-right: 2%;">
            Recevoir
          </button>
          <button v-on:click="hide()" class="button is-danger">
            Fermer
          </button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NWInfoG1",
  data: function() {
    return {};
  },
  methods: {
    show() {
      this.$modal.show("download");
    },
    push() {
      if (document.getElementById("sub_mail") != "") {
        axios.post(
          "https://shareit-e2d7.restdb.io/rest/yannicksf",
          { email: document.getElementById("sub_mail").value, box: "infg1" },
          {
            headers: {
              "cache-control": "no-cache",
              "x-apikey": "7d1510debd203c8a439dc2d1cc0f31d86032e",
              "content-type": "application/json",
            },
          }
        );
        this.$modal.hide("download");
      }
    },
    hide() {
      this.$modal.hide("download");
    },
  },
};
</script>
