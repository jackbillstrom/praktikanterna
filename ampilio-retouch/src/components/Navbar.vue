<template>
<!-- <nav class="navbar sticky-top navbar-expand-sm bg-light text-dark">
    <div class="container">
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarToggle">
            <router-link to="/" class="navbar-brand"><img src="../assets/images/logo.gif" alt=""></router-link>
            <ul class="navbar-nav ml-auto navbar_hover_color">
                <li class="nav-item"><router-link class="nav-link text-dark" to="/">Home</router-link></li>
                <li class="nav-item"><router-link class="nav-link text-dark" to="/about">Om företaget</router-link></li>
                <li class="nav-item"><router-link class="nav-link text-dark" to="/manufacturing">Tillverkning</router-link></li>
                <li class="nav-item"><router-link class="nav-link text-dark" to="/refs">Referenser</router-link></li>
                <li class="nav-item"><router-link class="nav-link text-dark" to="/partners">Partners</router-link></li>
                <li class="nav-item"><router-link class="nav-link text-dark" to="/work">Arbeta hos oss</router-link></li>
                <li class="nav-item"><router-link class="nav-link text-dark" to="/contact">Kontakt</router-link></li>
            </ul>
        </div>

    </div>
</nav -->

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarToggler">
                <router-link class="navbar-brand" to="/"><img src="../assets/images/logo.gif" alt=""></router-link>
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li class="nav-item"><router-link class="nav-link text-dark" to="/">Home</router-link></li>
                    <li class="nav-item"><router-link class="nav-link text-dark" to="/about">Om företaget</router-link></li>
                    <li class="nav-item"><router-link class="nav-link text-dark" to="/manufacturing">Tillverkning</router-link></li>
                    <li class="nav-item"><router-link class="nav-link text-dark" to="/refs">Referenser</router-link></li>
                    <li class="nav-item"><router-link class="nav-link text-dark" to="/partners">Partners</router-link></li>
                    <li class="nav-item"><router-link class="nav-link text-dark" to="/work">Arbeta hos oss</router-link></li>
                    <li class="nav-item"><router-link class="nav-link text-dark" to="/contact">Kontakt</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
    .navbar_hover_color:hover {
        filter: brightness(50%)
    }
</style>
