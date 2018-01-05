<template>
    <div id="book">
        <h1>{{greeter}}</h1>
    </div>
</template>

<script>
export default {
    data() {
      return {
        greeter: 'book'
      }
    },
    mounted: function (){
        // alert('book')
    }
}
</script>
<style scoped>
    #book {
        color: #2c3e50;
        margin-top: 46px;
    }
</style>