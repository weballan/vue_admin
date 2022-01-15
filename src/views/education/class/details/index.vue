<template>
    <div>
        <div class="column">
            <div class="column-main">
                <div class="detils-head">
                    <el-row :gutter="20">
                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
                            <div class="items">
                                <div class="text">所属课程：</div>
                                <div class="text">班级课</div>
                            </div>
                        </el-col>
                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
                            <div class="items">
                                <div class="text">收费标准：</div>
                                <div class="text">按课时（50元/课时）</div>
                            </div>
                        </el-col>
                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
                            <div class="items">
                                <div class="text">上课校区：</div>
                                <div class="text">二七校区</div>
                            </div>
                        </el-col>
                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
                            <div class="items">
                                <div class="text">开班日期：</div>
                                <div class="text">2021-06-16</div>
                            </div>
                        </el-col>
                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
                            <div class="items">
                                <div class="text">结班日期：</div>
                                <div class="text"></div>
                            </div>
                        </el-col>
                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
                            <div class="items">
                                <div class="text">班级人数：</div>
                                <div class="head-switch">
                                    <el-progress :show-text="false" :stroke-width="14" :percentage="50" status="success"></el-progress>
                                </div>
                                <div class="text">2/4 （招生中）</div>
                            </div>
                        </el-col>
                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
                            <div class="items">
                                <div class="text">教师：</div>
                                <div class="text">潘晨飞</div>
                            </div>
                        </el-col>
                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
                            <div class="items">
                                <div class="text">教室：</div>
                                <div class="text">四中心 测评室</div>
                            </div>
                        </el-col>
                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
                            <div class="items">
                                <div class="text">上课时间：</div>
                                <div class="text" v-html="classtimeTxt"></div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>

        <div class="column">
            <div class="details-tabs">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="学员" name="first">
                        <first-table></first-table>
                    </el-tab-pane>
                    <el-tab-pane label="排课" name="second">
                        <second-table></second-table>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script>
import firstTable from "@/views/education/class/details/firstTable";   //学员
import secondTable from "@/views/education/class/details/secondTable";  //排课
export default {
    name: "classDetailIndex",
    data(){
        return{
            classtimeTxt:'每周周一 14:10-15:35<br />每周周二 14:10-15:35<br />每周周三 14:10-15:35<br />每周周四 14:10-15:35<br />每周周五 14:10-15:35',
            activeName:'first',
        }
    },
    methods:{
        handleClick(tab,event){

        },
    },
    components:{
        firstTable,
        secondTable
    },
    mounted(){

    }
}
</script>
