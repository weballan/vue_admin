<template>
    <div>
        <div class="column">
            <div class="column-main">
                <div class="detils-head">
                    <el-row :gutter="20">
                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
                            <div class="items">
                                <div class="text">姓名：</div>
                                <div class="text">程紫麟</div>
                            </div>
                        </el-col>
                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
                            <div class="items">
                                <div class="text">性别：</div>
                                <div class="text">男</div>
                            </div>
                        </el-col>
                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
                            <div class="items">
                                <div class="text">关系：</div>
                                <div class="text">母亲</div>
                            </div>
                        </el-col>
                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
                            <div class="items">
                                <div class="text">联系电话：</div>
                                <div class="text">15896826244</div>
                            </div>
                        </el-col>
                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
                            <div class="items">
                                <div class="text">校区：</div>
                                <div class="text">二七校区</div>
                            </div>
                        </el-col>
                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
                            <div class="items">
                                <div class="text">居住区域：</div>
                                <div class="text">河南省郑州市二七区</div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>

        <div class="column">
            <div class="details-tabs">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="订单" name="first">
                        <first-table></first-table>
                    </el-tab-pane>
                    <el-tab-pane label="课程" name="second">
                        <second-table></second-table>
                    </el-tab-pane>
                    <el-tab-pane label="课程表" name="third">
                        <thirdt-table></thirdt-table>
                    </el-tab-pane>
                    <el-tab-pane label="上课记录" name="fourth">
                        <fourth-table></fourth-table>
                    </el-tab-pane>
                    <el-tab-pane label="操作日志" name="fifth">
                        <fifth-table></fifth-table>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script>
import firstTable from "@/views/education/student/details/firstTable";   //订单
import secondTable from "@/views/education/student/details/secondTable";  //课程
import thirdtTable from "@/views/education/student/details/thirdtTable";  //课程表
import fourthTable from "@/views/education/student/details/fourthTable";  //上课记录
import fifthTable from "@/views/education/student/details/fifthTable";   //操作日志
export default {
    name: "studentDetailsIndex",
    data(){
        return{
            activeName:'first',
        }
    },
    methods:{
        handleClick(tab,event){

        },
    },
    components:{
        firstTable,
        secondTable,
        thirdtTable,
        fourthTable,
        fifthTable,
    },
    mounted(){

    }
}
</script>
