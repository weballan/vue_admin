<template>
    <div>
        <div class="column-main">
            <div class="column-summary">
                <div>
                    <el-button @click="addBtn" type="primary">添加内容</el-button>
                    <el-button @click="addBtn" type="primary">批量操作</el-button>
                </div>
                <div class="text">
                    <el-radio-group v-model="sendParams.state" fill="#F37B1D">
                        <el-radio-button label="0">全部</el-radio-button>
                        <el-radio-button label="1">草稿</el-radio-button>
                        <el-radio-button label="2">已发</el-radio-button>
                    </el-radio-group>
                </div>
                <div class="inputdiv">
                    <div>
                        <el-input placeholder="请输入内容" v-model="sendParams.name">
                            <el-button slot="append" icon="el-icon-search"></el-button>
                        </el-input>
                    </div>
                </div>
            </div>
        </div>
        <div class="column-main">
            <div class="column-table">
                <el-table ref="multipleTable"  border :stripe="true" :data="list" style="width:100%">
                    <el-table-column type="selection"  align="center" width="80"></el-table-column>
                    <el-table-column prop="category01" label="排序" align="center" width="80">
                        <template slot-scope="scope">
                            <div>
                                <el-input v-model="scope.row.category08" size="mini"></el-input>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="标题" align="center" >
                        <template slot-scope="scope">
                            <div class="text"><strong>{{scope.row.category02}}</strong></div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="category03" label="栏目名称" align="center" width="120"></el-table-column>
                    <el-table-column prop="category04" label="人气" align="center" width="80"></el-table-column>
                    <el-table-column label="置顶" align="center" width="80">
                        <template slot-scope="scope">
                            <el-switch v-model="scope.row.category05" active-color="#13ce66" inactive-color="#9b9b9b"></el-switch>
                        </template>
                    </el-table-column>
                    <el-table-column label="推荐" align="center" width="80">
                        <template slot-scope="scope">
                            <el-switch v-model="scope.row.category06" active-color="#13ce66" inactive-color="#9b9b9b"></el-switch>
                        </template>
                    </el-table-column>
                    <el-table-column label="状态" align="center" width="80">
                        <template slot-scope="scope">
                            <el-switch v-model="scope.row.category07" active-color="#13ce66" inactive-color="#9b9b9b"></el-switch>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" align="center" width="160">
                        <template slot-scope="scope">
                            <el-button icon="el-icon-edit-outline" type="text" size="medium">编辑</el-button>
                            <el-button icon="el-icon-delete" type="text" size="medium">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="column-pagination-main not-boxshadow">
                <div class="page-text">
                    <el-button @click="addBtn" type="primary">保存排序</el-button>
                </div>
                <div class="page-list">
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="sendParams.current"
                        :page-sizes="[10,20,50,100]"
                        :page-size="sendParams.size"
                        background
                        layout="total,sizes,prev,pager,next,jumper"
                        :total="total">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "listTable",
    data(){
        return{

        }
    },
    props:{
        list:{
            type:Array,
            default:()=>{
                return []
            }
        },
        sendParams:{
            type:Object,
            default:()=>{
                return {}
            }
        },
        total:{
            type:Number,
            default:0,
        }
    },
    methods:{
        addBtn(){
            this.$router.replace(`/website/content/details`)
        },
        handleSizeChange(val) {
            this.sendParams.size=val;

            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.sendParams.current=val;

            console.log(`当前页: ${val}`);
        },
    },
    components:{

    },
    mounted(){

    }
}
</script>
