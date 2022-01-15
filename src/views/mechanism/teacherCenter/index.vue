<template>
    <div class="column">
        <div class="column-main">
            <div>
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="教室设置" name="first">
                        <teacher-list></teacher-list>
                    </el-tab-pane>
                    <el-tab-pane label="上课时间设置" name="second">
                        <coursetime-list></coursetime-list>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script>
import teacherList from "@/views/mechanism/teacherCenter/teacherList";   //教室设置
import coursetimeList from "@/views/mechanism/teacherCenter/coursetimeList";   //上课时间设置
export default {
    name: "teacherCenter",
    data(){
        return{
            activeName:'first',

        }
    },
    methods:{
        handleClick(tab, event) {
            console.log(tab, event);
        }
    },
    components:{
        teacherList,
        coursetimeList,
    },
    mounted(){

    }
}
</script>
