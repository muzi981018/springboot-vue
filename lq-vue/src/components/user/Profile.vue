<template>
  <div>
    <h1>Lifsa</h1>
    {{id}}
<!--    {{$route.params.id}}-->
  </div>


</template>

<script>
export default {
  props: ['id'],
  name: 'Profile',
  beforeRouteEnter: (to,from,next)=>{
    next()

  },
  beforeRouteLeave: (to,from,next)=>{
    next()

  }
}
</script>

<style>

</style>
