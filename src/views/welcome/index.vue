<template>
    <div class="welcome">
        <img :src="photo" alt="" />
        <h1>欢迎使用多租户管理系统</h1>
    </div>
</template>

<script>
export default {
    name: "Welcome",
    data(){
        return{
            photo:require('@/assets/welcome.png'),
        }
    },
    methods:{

    },
    components:{

    },
    mounted(){

    }
}
</script>
