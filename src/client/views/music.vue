<template>
    <div id="music">
        <h1>{{greeter}}</h1>
    </div>
</template>

<script>
export default {
    data() {
      return {
        greeter: 'music'
      }
    },
    mounted: function (){
        // alert('music')
    }
}
</script>
<style scoped>
    #music {
        color: #2c3e50;
        margin-top: 46px;
    }
</style>