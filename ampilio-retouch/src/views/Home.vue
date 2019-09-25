<template>
  <div class="home">
    <Jumbotron />
    <Hero />
    <div class="parallax"></div>
    <About />
    <div class="parallax"></div>
    <Manufacturing />
    <div class="parallax"></div>
    <Referens />
    <div class="parallax"></div>
    <Partners />
    <div class="parallax"></div>
    <Work />
  </div>
</template>

<script>
import Jumbotron from '../components/Jumbotron'
import Hero from '../components/Hero'
import About from '../components/About'
import Manufacturing from '../components/Manufacturing'
import Referens from '../components/Referens'
import Partners from '../components/Partners'
import Work from '../components/Work'

export default {
  name: "home",
  components: {
    Jumbotron,
    Hero,
    About,
    Manufacturing,
    Referens,
    Partners,
    Work
  }
};
</script>

<style>
.parallax {
  background-image: url("../assets/images/parallax.jpg");
  filter: opacity(.5);
  min-height: 500px; 
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
