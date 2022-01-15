<template>
    <div class="column">
        <div class="column-main">
            <div class="column-summary">
                <div>
                    <el-button @click="addBtn" type="primary">添加分类</el-button>
                </div>

            </div>
        </div>

        <div class="column-main">
            <div class="column-table" :class="[total>20?'pdbootom100':'']">
                <el-table ref="multipleTable" border :stripe="true" :data="list" style="width:100%">
                    <el-table-column prop="category01" label="栏目ID" align="center" width="80"></el-table-column>
                    <el-table-column prop="category02" label="栏目名称	"></el-table-column>
                    <el-table-column prop="category03" label="模型" align="center" width="120"></el-table-column>
                    <el-table-column prop="category04" label="导航显示" align="center" width="120"></el-table-column>
                    <el-table-column label="操作" align="center" width="320">
                        <template slot-scope="scope">
                            <el-button icon="el-icon-set-up" type="text" size="medium">子分类(3)</el-button>
                            <el-button icon="el-icon-position" type="text" size="medium">访问</el-button>
                            <el-button @click="editBtn" icon="el-icon-edit-outline" type="text" size="medium">编辑</el-button>
                            <el-button icon="el-icon-delete" type="text" size="medium">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>

        <page-ation >
            <div slot="text" class="page-text">&nbsp;</div>
            <div slot="list" class="page-list">
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
        </page-ation>
    </div>
</template>

<script>
import pageAtion from '@/components/PageAtion'
export default {
    name: "columnIndex",
    data(){
        return{
            sendParams:{
                name:'',
                phone:'',
                address:'',
                status:'',
                current:1,
                size:20,
            },
            total:0,
            list:[
                {category01:'1',category02:'关于我们',category03:'单页',category04:'1'},
                {category01:'2',category02:'新闻中心',category03:'文章模型',category04:'1'},
                {category01:'3',category02:'产品展示',category03:'产品模型',category04:'1'},
                {category01:'4',category02:'客户案例',category03:'文章模型',category04:'1'},
                {category01:'5',category02:'人才招聘',category03:'招聘模型',category04:'0'},
                {category01:'6',category02:'联系我们',category03:'单页',category04:'1'}
            ],
        }
    },
    methods:{
        editBtn(){
            let routeUrl = this.$router.resolve({
                name:"columnOperate",
                params:{state:'edit'},

            });
            window.open(routeUrl.href,'_self');
        },
        addBtn(){
            let routeUrl = this.$router.resolve({
                name:"columnOperate",
                params:{state:'add'}
            });
            window.open(routeUrl.href,'_self');
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
        pageAtion,
    },
    mounted(){

    }
}
</script>
