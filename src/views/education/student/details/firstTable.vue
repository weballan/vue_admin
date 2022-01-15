<template>
    <div class="column-main">
        <div class="column-text">
            <div class="text"><strong>当前结果：</strong>总计<em>2</em>条记录， 应收款项总计<em>32000.00</em></div>
        </div>

        <div class="column-table">
            <el-table ref="multipleTable" border :stripe="true" :data="list" style="width:100%">
                <el-table-column prop="field01" label="订单号" align="center"></el-table-column>
                <el-table-column prop="field02" label="联系方式" align="center" width="140"></el-table-column>
                <el-table-column prop="field03" label="订单类型" align="center"></el-table-column>
                <el-table-column prop="field04" label="交易内容" align="center" width="200"></el-table-column>
                <el-table-column label="应收/应退" align="center" width="140">
                    <template slot-scope="scope">
                        <div class="money-state">
                            <span class="charge">收</span><strong>{{scope.row.field05}}</strong>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="field06" label="实收/实退" align="center" width="140"></el-table-column>
                <el-table-column prop="field07" label="经办校区" align="center"></el-table-column>
                <el-table-column prop="field08" label="经办日期" align="center" width="120"></el-table-column>
                <el-table-column prop="field09" label="经办人" align="center"></el-table-column>
                <el-table-column label="操作" align="center" width="140">
                    <template slot-scope="scope">
                        <el-button icon="el-icon-printer" type="text" size="small">打印</el-button>
                        <el-button icon="el-icon-document" type="text" size="small">日志</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    name: "firstTable",
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
            list:[
                {field01:'711',field02:'15905674388',field03:'报名',field04:'家长指导课，二七校区教学四中心家长指导课班',field05:'6000.00',field06:'6000.00',field07:'二七校区',field08:'2021-06-09',field09:'李瑞娟'},
                {field01:'536',field02:'15905674388',field03:'报名',field04:'一星个训课(1/1)，150元(1课时)*130=19500元',field05:'26000.00',field06:'26000.00',field07:'二七校区',field08:'2021-05-31',field09:'李瑞娟'},

            ],
        }
    },
    methods:{

    },
    components:{

    },
    mounted(){

    }
}
</script>
