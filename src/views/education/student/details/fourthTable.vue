<template>
    <div class="column-main">
        <div class="column-text">
            <div class="text"><strong>当前结果：</strong>共计<em>98</em>条结果</div>
        </div>
        <div class="column-table pdbootom100">
            <el-table ref="multipleTable" border :stripe="true" :data="list" style="width:100%">
                <el-table-column prop="field01" label="上课日期" width="120"></el-table-column>
                <el-table-column prop="field02" label="班级/一对一名称"></el-table-column>
                <el-table-column prop="field03" label="课程" align="center" width="120"></el-table-column>
                <el-table-column prop="field04" label="到课状态" align="center" width="100"></el-table-column>
                <el-table-column prop="field05" label="扣除课时" align="center" width="80"></el-table-column>
                <el-table-column prop="field06" label="教师" align="center" width="100"></el-table-column>
                <el-table-column label="操作" align="center" width="120">
                    <el-button icon="el-icon-printer" type="text" size="small">编辑上课记录</el-button>
                </el-table-column>
            </el-table>
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
    name: "fourthTable",
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
                {field01:'2021-07-30',field02:'二七校区教学四中心家长指导课班',field03:'家长指导课',field04:'到课',field05:'2',field06:'周慧敏'},
                {field01:'2021-07-30',field02:'二七校区教学四中心家长指导课班',field03:'家长指导课',field04:'到课',field05:'2',field06:'周慧敏'},
                {field01:'2021-07-30',field02:'二七校区教学四中心家长指导课班',field03:'家长指导课',field04:'到课',field05:'2',field06:'周慧敏'},
                {field01:'2021-07-30',field02:'二七校区教学四中心家长指导课班',field03:'家长指导课',field04:'到课',field05:'2',field06:'周慧敏'},
                {field01:'2021-07-30',field02:'二七校区教学四中心家长指导课班',field03:'家长指导课',field04:'到课',field05:'2',field06:'周慧敏'},
                {field01:'2021-07-30',field02:'二七校区教学四中心家长指导课班',field03:'家长指导课',field04:'到课',field05:'2',field06:'周慧敏'},
                {field01:'2021-07-30',field02:'二七校区教学四中心家长指导课班',field03:'家长指导课',field04:'到课',field05:'2',field06:'周慧敏'},
                {field01:'2021-07-30',field02:'二七校区教学四中心家长指导课班',field03:'家长指导课',field04:'到课',field05:'2',field06:'周慧敏'},
                {field01:'2021-07-30',field02:'二七校区教学四中心家长指导课班',field03:'家长指导课',field04:'到课',field05:'2',field06:'周慧敏'},
                {field01:'2021-07-30',field02:'二七校区教学四中心家长指导课班',field03:'家长指导课',field04:'到课',field05:'2',field06:'周慧敏'},
                {field01:'2021-07-30',field02:'二七校区教学四中心家长指导课班',field03:'家长指导课',field04:'到课',field05:'2',field06:'周慧敏'},
                {field01:'2021-07-30',field02:'二七校区教学四中心家长指导课班',field03:'家长指导课',field04:'到课',field05:'2',field06:'周慧敏'},
                {field01:'2021-07-30',field02:'二七校区教学四中心家长指导课班',field03:'家长指导课',field04:'到课',field05:'2',field06:'周慧敏'},
                {field01:'2021-07-30',field02:'二七校区教学四中心家长指导课班',field03:'家长指导课',field04:'到课',field05:'2',field06:'周慧敏'},
                {field01:'2021-07-30',field02:'二七校区教学四中心家长指导课班',field03:'家长指导课',field04:'到课',field05:'2',field06:'周慧敏'},
                {field01:'2021-07-30',field02:'二七校区教学四中心家长指导课班',field03:'家长指导课',field04:'到课',field05:'2',field06:'周慧敏'},
                {field01:'2021-07-30',field02:'二七校区教学四中心家长指导课班',field03:'家长指导课',field04:'到课',field05:'2',field06:'周慧敏'},
                {field01:'2021-07-30',field02:'二七校区教学四中心家长指导课班',field03:'家长指导课',field04:'到课',field05:'2',field06:'周慧敏'},
                {field01:'2021-07-30',field02:'二七校区教学四中心家长指导课班',field03:'家长指导课',field04:'到课',field05:'2',field06:'周慧敏'},
                {field01:'2021-07-30',field02:'二七校区教学四中心家长指导课班',field03:'家长指导课',field04:'到课',field05:'2',field06:'周慧敏'},
                {field01:'2021-07-30',field02:'二七校区教学四中心家长指导课班',field03:'家长指导课',field04:'到课',field05:'2',field06:'周慧敏'},
                {field01:'2021-07-30',field02:'二七校区教学四中心家长指导课班',field03:'家长指导课',field04:'到课',field05:'2',field06:'周慧敏'},
                {field01:'2021-07-30',field02:'二七校区教学四中心家长指导课班',field03:'家长指导课',field04:'到课',field05:'2',field06:'周慧敏'},
                {field01:'2021-07-30',field02:'二七校区教学四中心家长指导课班',field03:'家长指导课',field04:'到课',field05:'2',field06:'周慧敏'},
                {field01:'2021-07-30',field02:'二七校区教学四中心家长指导课班',field03:'家长指导课',field04:'到课',field05:'2',field06:'周慧敏'},
                {field01:'2021-07-30',field02:'二七校区教学四中心家长指导课班',field03:'家长指导课',field04:'到课',field05:'2',field06:'周慧敏'},
                {field01:'2021-07-30',field02:'二七校区教学四中心家长指导课班',field03:'家长指导课',field04:'到课',field05:'2',field06:'周慧敏'},
                {field01:'2021-07-30',field02:'二七校区教学四中心家长指导课班',field03:'家长指导课',field04:'到课',field05:'2',field06:'周慧敏'},
                {field01:'2021-07-30',field02:'二七校区教学四中心家长指导课班',field03:'家长指导课',field04:'到课',field05:'2',field06:'周慧敏'},
                {field01:'2021-07-30',field02:'二七校区教学四中心家长指导课班',field03:'家长指导课',field04:'到课',field05:'2',field06:'周慧敏'},
                {field01:'2021-07-30',field02:'二七校区教学四中心家长指导课班',field03:'家长指导课',field04:'到课',field05:'2',field06:'周慧敏'},
            ],
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
        pageAtion,
    },
    mounted(){

    }
}
</script>
