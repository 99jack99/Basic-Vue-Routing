<template lang="">
  <div id="head">
    <router-link class="headItem" to="/home">Home</router-link>
    <router-link class="headItem" to="/movies">Movies</router-link>
    <router-link class="headItem" to="/profile">Profile</router-link>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#head {
  background-color: red;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  padding: 1em;

  .headItem{
    text-decoration: none;
    color: black;
    font-size: 1.2em;
    font-weight: bold;
  }

  .headItem:hover{
    color: white;
  }

}
</style>
