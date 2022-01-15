<template>
    <div class="column-main">
        <div class="column-text">
            <div class="text"><strong>当前结果：</strong>共计<em>5</em>条结果</div>
        </div>
        <div class="column-table pdbootom100">
            <el-table ref="multipleTable" border :stripe="true" :data="list" style="width:100%">
                <el-table-column type="index" :index="(sendParams.current-1) * sendParams.size+1" label="序号" align="center" width="60"></el-table-column>
                <el-table-column prop="field01" label="操作时间" align="center" width="160"></el-table-column>
                <el-table-column prop="field02" label="操作人" align="center" width="100"></el-table-column>
                <el-table-column prop="field03" label="操作类型" align="center" width="120"></el-table-column>
                <el-table-column prop="field04" label="操作内容" ></el-table-column>
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
    name: "fifthTable",
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
                {field01:'2021-06-15 18:43',field02:'张秋雯',field03:'调班日志',field04:'学员从班级“二七校区精品班上午三四节”转出'},
                {field01:'2021-06-15 18:43',field02:'张秋雯',field03:'调班日志',field04:'学员分到班级“二七校区教学四中心家长指导课班”'},
                {field01:'2021-06-09 12:56',field02:'张秋雯',field03:'分班日志',field04:'学员分到班级“二七校区精品班下午一二节”'},
                {field01:'2021-05-31 11:04',field02:'李瑞娟',field03:'分班日志',field04:'学员分到班级“李昶佑_一星个训课(1/1)（1对1）”'},
                {field01:'2021-05-31 11:04',field02:'李瑞娟',field03:'分班日志',field04:'学员分到班级“二七校区精品班上午三四节”'},
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
