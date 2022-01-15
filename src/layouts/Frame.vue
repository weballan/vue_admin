<template>
    <div class="wrapper" :class="{closeSide: !open}">
        <side-bar></side-bar>
        <div class="content-box hasTag">
            <div class="fixed-header">
                <v-header></v-header>
                <tag-view></tag-view>
            </div>
            <div class="app-main">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex';
import sideBar from "@/layouts/components/sideBar";
import vHeader from '@/layouts/components/vHeader'
import tagView from "@/layouts/components/tagView";
export default {
    name:"Frame",
    data(){
        return{
            passwordParams:{
                password:'',
                newPassword:'',
            },
            passwordRules:{
                password:[
                    {required:true,message:'请输入原密码',trigger:'blur'},
                ],
                newPassword:[
                    {required:true,message:'请输入新密码',trigger:'blur'},
                ],
            },
        }
    },
    computed:{
        ...mapGetters(['open','passwordVisible']),
    },
    watch:{

    },
    methods:{
        ...mapActions({
            getApplist:'APP_LIST'
        }),
        passwordExit(){
            this.$store.commit('PASSWORD_VISIBLE');
        },
        passwordBtn(){
            this.$refs.amountForm.validate((valid)=>{
                if(valid){

                }else{
                    return false
                }
            });
        },
    },
    components:{
        sideBar,
        vHeader,
        tagView,
    },
    mounted(){

    }
}
</script>

<style rel="stylesheet" lang="scss">
    @import 'components/css/layouts';
</style>
