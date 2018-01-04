<template>
    <div id="mine">
        <h1>{{greeter}}</h1>
        <button @click="clickBtn">点击</button>
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
    },
    methods: {
        clickBtn () {
            this.$http({
                methods: 'get',
                url: 'http://localhost:3000/users'
            })
            .then( res => {
                console.log(res)
            })
            .catch( err => {
                console.log(err)
            })
        }
    }
}
</script>
<style scoped>
    #mine {
        color: #2c3e50;
        margin-top: 46px;
    }
</style>
