<template>
    <div>
        <div class="column">
            <div class="column-main">
                <div class="column-search">
                    <div class="column-search-input">
                        <ul>
                            <li>
                                <div class="text">校区：</div>
                                <div class="inputdiv">
                                    <el-select v-model="sendParams.status" placeholder="请选择">
                                        <el-option label="全部" value=""></el-option>
                                        <el-option label="惠济校区" value="S"></el-option>
                                        <el-option label="二区校区" value="F"></el-option>
                                    </el-select>
                                </div>
                            </li>
                            <li>
                                <div class="text">课程类别：</div>
                                <div class="inputdiv">
                                    <el-select v-model="sendParams.status" placeholder="请选择">
                                        <el-option label="全部" value=""></el-option>
                                        <el-option label="家长指导课" value="S"></el-option>
                                        <el-option label="融合课" value="F"></el-option>
                                        <el-option label="班级课" value="P"></el-option>
                                    </el-select>
                                </div>
                            </li>
                            <li>
                                <div class="text">上课星期：</div>
                                <div class="inputdiv">
                                    <el-select v-model="sendParams.status" placeholder="请选择">
                                        <el-option label="全部" value=""></el-option>
                                        <el-option label="周一" value="S"></el-option>
                                        <el-option label="周二" value="F"></el-option>
                                        <el-option label="周三" value="F"></el-option>
                                        <el-option label="周四" value="F"></el-option>
                                        <el-option label="周五" value="F"></el-option>
                                        <el-option label="周六" value="F"></el-option>
                                        <el-option label="周日" value="F"></el-option>
                                    </el-select>
                                </div>
                            </li>
                            <li>
                                <div class="text">班级状态：</div>
                                <div class="inputdiv">
                                    <el-select v-model="sendParams.status" placeholder="请选择">
                                        <el-option label="全部" value=""></el-option>
                                        <el-option label="未开班" value="S"></el-option>
                                        <el-option label="开班中" value="F"></el-option>
                                        <el-option label="已结班" value="P"></el-option>
                                    </el-select>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="column-search-btn">
                        <el-button  type="primary" icon="el-icon-search">查询</el-button>
                        <el-button  type="primary" icon="el-icon-refresh">重置</el-button>
                    </div>
                </div>
            </div>
        </div>

        <table-list></table-list>
    </div>
</template>

<script>
import tableList from "@/views/education/class/list/tableList";
export default {
    name: "classIndex",
    data(){
        return{
            sendParams:{
                name:'',
                phone:'',
                address:'',
                status:'',
            },
        }
    },
    methods:{

    },
    components:{
        tableList,
    },
    mounted(){

    }
}
</script>
