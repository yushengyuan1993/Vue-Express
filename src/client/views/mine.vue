<template>
    <div id="mine">
        <h1>{{greeter}}</h1>
    </div>
</template>

<script>
export default {
    data() {
      return {
        greeter: 'mine'
      }
    },
    mounted: function (){
        // alert('mine')
    }
}
</script>
<style scoped>
    #mine {
        color: #2c3e50;
        margin-top: 46px;
    }
</style>
