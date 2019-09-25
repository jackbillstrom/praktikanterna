<template>
  <div class="jumbotron jumbotron-fluid text-left">
      <div class="ml-5">
        <h1 class="display-4 text-light">En stark stomme inom byggindustrin</h1>
        <p class="lead text-light">Vi tillverkar det mesta inom byggnadssmide till byggbranschen.</p>
        <hr class="my-4">
        <router-link class="btn btn-secondary btn-lg" to="/" role="button">Vill du veta mer?</router-link>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .jumbotron {
        position: relative;
        z-index: 1;
    }
    .jumbotron::before {
        z-index: -1 ;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('../assets/images/jumbotron_bg.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        filter: brightness(70%);
}
</style>