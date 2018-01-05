<template>
    <div id="mine">
        <h1>{{greeter}}</h1>
        <button type="button" @click="clickBtn">点击</button>
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
			console.log(this.$http.defaults.baseURL);
            axios.get('http://111.231.78.140:8088/users')
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
