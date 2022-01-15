<template>
    <div class="column-main">
        <div class="column-table">
            <el-table border :stripe="true" :data="list" style="width:100%">
                <el-table-column type="selection"  align="center" width="60"></el-table-column>
                <el-table-column type="index" :index="(sendParams.current-1) * sendParams.size+1" label="序号" align="center" width="60"></el-table-column>
                <el-table-column prop="category02" label="孩子姓名" align="center" width="120"></el-table-column>
                <el-table-column prop="category03" label="性别" align="center" width="80"></el-table-column>
                <el-table-column prop="category04" label="出生年月" align="center" width="120"></el-table-column>
                <el-table-column prop="category09" label="家长姓名" align="center" width="100"></el-table-column>
                <el-table-column prop="category06" label="手机号码" align="center" width="120"></el-table-column>
                <el-table-column prop="category07" label="联系地址" align="center"></el-table-column>
                <el-table-column prop="category08" label="详细情况" align="center"></el-table-column>
                <el-table-column label="置顶" align="center" width="80">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.category05" active-color="#13ce66" inactive-color="#9b9b9b"></el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center" width="100">
                    <template slot-scope="scope">
                        <el-button icon="el-icon-delete" type="text" size="medium">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="column-pagination-main not-boxshadow">
            <div class="page-text">
                &nbsp;
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
