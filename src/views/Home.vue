<template>
  <div class="home">
    <h1>School Register Online</h1>
    <HomeForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeForm from '@/components/HomeForm.vue'

export default {
  name: 'Home',
  components: {
    HomeForm
  },
}
</script>

<style scoped>

.home{
    margin: 20px;
    color: #020033;
    text-align: center;
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
}

h1{
    margin-left:20px;
    font-weight: 600
}

</style>
