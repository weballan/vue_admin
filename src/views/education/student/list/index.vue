<template>
    <div>
        <div class="column">
            <div class="column-main">
                <div class="column-search">
                    <div class="column-search-input">
                        <ul>
                            <li>
                                <div class="text">学员状态：</div>
                                <div class="inputdiv">
                                    <el-select v-model="sendParams.status" placeholder="请选择">
                                        <el-option label="全部" value=""></el-option>
                                        <el-option label="在读" value="S"></el-option>
                                        <el-option label="停课" value="F"></el-option>
                                        <el-option label="结课" value="P"></el-option>
                                    </el-select>
                                </div>
                            </li>
                            <li>
                                <div class="text">报读校区：</div>
                                <div class="inputdiv">
                                    <el-select v-model="sendParams.status" placeholder="请选择">
                                        <el-option label="全部" value=""></el-option>
                                        <el-option label="惠济校区" value="S"></el-option>
                                        <el-option label="二区校区" value="F"></el-option>
                                    </el-select>
                                </div>
                            </li>
                            <li>
                                <div class="text">性别：</div>
                                <div class="inputdiv">
                                    <el-select v-model="sendParams.status" placeholder="请选择">
                                        <el-option label="全部" value=""></el-option>
                                        <el-option label="男" value="S"></el-option>
                                        <el-option label="女" value="F"></el-option>
                                    </el-select>
                                </div>
                            </li>
                            <li>
                                <div class="text">新老生：</div>
                                <div class="inputdiv">
                                    <el-select v-model="sendParams.status" placeholder="请选择">
                                        <el-option label="全部" value=""></el-option>
                                        <el-option label="老生" value="S"></el-option>
                                        <el-option label="新生" value="F"></el-option>
                                    </el-select>
                                </div>
                            </li>
                            <li>
                                <div class="text">学员姓名：</div>
                                <div class="inputdiv">
                                    <el-input placeholder="请输入学员姓名" v-model="sendParams.name" clearable></el-input>
                                </div>
                            </li>
                            <li>
                                <div class="text">手机尾号：</div>
                                <div class="inputdiv">
                                    <el-input placeholder="请输入手机号" v-model="sendParams.phone" clearable></el-input>
                                </div>
                            </li>
                            <li>
                                <div class="text">居住区域：</div>
                                <div class="inputdiv">
                                    <el-input placeholder="请输入居住区域" v-model="sendParams.address" clearable></el-input>
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

        <div class="column">
            <div class="column-main">
                <div>
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="学员列表" name="first">
                            <first-table></first-table>
                        </el-tab-pane>
                        <el-tab-pane label="报读列表" name="second">
                            <second-table></second-table>
                        </el-tab-pane>
                        <el-tab-pane label="分班列表" name="third">
                            <third-table></third-table>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firstTable from "@/views/education/student/list/firstTable";  //学员列表
import secondTable from "@/views/education/student/list/secondTable";  //报读列表
import thirdTable from "@/views/education/student/list/thirdTable";  //分班列表
export default {
    name: "studentIndex",
    data(){
        return{
            activeName:'first',
            sendParams:{
                name:'',
                phone:'',
                address:'',
                status:'',
            },
        }
    },
    methods:{
        handleClick(tab, event) {
            console.log(tab, event);
        }
    },
    components:{
        firstTable,
        secondTable,
        thirdTable,
    },
    mounted(){

    }
}
</script>
