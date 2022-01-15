<template>
    <div>
        <div class="column">
            <div class="column-main" style="padding:20px 20px 0 20px">
                <div>
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="基本设置" name="first">

                        </el-tab-pane>
                        <el-tab-pane label="手机站" name="second">

                        </el-tab-pane>
                        <el-tab-pane label="联系方式" name="third">

                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </div>

        <first-setup v-show="activeName==='first'"></first-setup>
        <second-setup v-show="activeName==='second'"></second-setup>
        <third-setup v-show="activeName==='third'"></third-setup>
    </div>
</template>

<script>
import firstSetup from "@/views/website/index/firstSetup";  //基本设置
import secondSetup from "@/views/website/index/secondSetup";  //手机站
import thirdSetup from "@/views/website/index/thirdSetup";  //联系方式
export default {
    name: "websiteIndex",
    data(){
        return{
            activeName:'first',
        }
    },
    methods:{
        handleClick(tab, event) {
            this.activeName=tab.name;
            console.log(tab, event);
        }
    },
    components:{
        firstSetup,
        secondSetup,
        thirdSetup,
    },
    mounted(){

    }
}
</script>
