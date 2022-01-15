<template>
    <div>
        <div class="column-text">
            <div class="text"><strong>当前结果：</strong>学员总计<em>60</em>名， 报读课程数总计<em>129</em> ，实缴金额总计<em>2162160.00</em>元</div>
        </div>
        <div class="column-table pdbootom100" :class="[total>20?'pdbootom100':'']">
            <el-table ref="multipleTable" border :stripe="true" :data="list" style="width:100%">
                <el-table-column label="学员姓名" align="center" width="120">
                    <template slot-scope="scope">
                        <el-button type="text" size="small">{{scope.row.name}}</el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="relation" label="关系" align="center" width="80"></el-table-column>
                <el-table-column prop="phone" label="联系电话" align="center" width="140"></el-table-column>
                <el-table-column prop="field01" label="报读课程" align="center"></el-table-column>
                <el-table-column prop="field02" label="授课模式" align="center"></el-table-column>
                <el-table-column prop="field03" label="购买数量" align="center"></el-table-column>
                <el-table-column prop="field04" label="已用数量" align="center"></el-table-column>
                <el-table-column prop="field05" label="剩余数量" align="center"></el-table-column>
                <el-table-column prop="field06" label="总学费" align="center"></el-table-column>
                <el-table-column prop="field07" label="实缴费用" align="center"></el-table-column>
                <el-table-column prop="field08" label="已用学费" align="center"></el-table-column>
                <el-table-column prop="field09" label="剩余学费" align="center"></el-table-column>
                <el-table-column prop="school" label="报读校区" align="center" width="160"></el-table-column>
                <el-table-column label="学员状态" align="center" width="100">
                    <template slot-scope="scope">
                        <!--在读-->
                        <div v-if="scope.row.state==='1'" class="feedoc-state color-green">在读</div>
                        <!--停课-->
                        <div v-if="scope.row.state==='2'" class="feedoc-state color-red">停课</div>
                        <!--结课-->
                        <div v-if="scope.row.state==='0'" class="feedoc-state color-grey">结课</div>
                    </template>
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
    name: "secondTable",
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
                {name:'程紫麟',sex:'男',relation:'母亲',phone:'18907052268',state:'1',school:'二七校区',field01:'班级课',field02:'班课',field03:'98.00课时',field04:'10.00课时',field05:'88.00课时',field06:'4900.00',field07:'4900.00',field08:'500.00',field09:'4400.00'},
                {name:'徐锦瑞',sex:'男',relation:'母亲',phone:'18907052268',state:'1',school:'二七校区',field01:'班级课',field02:'班课',field03:'98.00课时',field04:'10.00课时',field05:'88.00课时',field06:'4900.00',field07:'4900.00',field08:'500.00',field09:'4400.00'},
                {name:'司晨皓',sex:'男',relation:'母亲',phone:'18907052268',state:'1',school:'二七校区',field01:'班级课',field02:'班课',field03:'98.00课时',field04:'10.00课时',field05:'88.00课时',field06:'4900.00',field07:'4900.00',field08:'500.00',field09:'4400.00'},
                {name:'赵泽睿',sex:'男',relation:'母亲',phone:'18907052268',state:'1',school:'二七校区',field01:'班级课',field02:'班课',field03:'98.00课时',field04:'10.00课时',field05:'88.00课时',field06:'4900.00',field07:'4900.00',field08:'500.00',field09:'4400.00'},
                {name:'李千羽',sex:'男',relation:'母亲',phone:'18907052268',state:'1',school:'二七校区',field01:'班级课',field02:'班课',field03:'98.00课时',field04:'10.00课时',field05:'88.00课时',field06:'4900.00',field07:'4900.00',field08:'500.00',field09:'4400.00'},
                {name:'龚楚熹 ',sex:'男',relation:'母亲',phone:'18907052268',state:'0',school:'二七校区',field01:'班级课',field02:'班课',field03:'98.00课时',field04:'10.00课时',field05:'88.00课时',field06:'4900.00',field07:'4900.00',field08:'500.00',field09:'4400.00'},
                {name:'龚楚熹 ',sex:'男',relation:'母亲',phone:'18907052268',state:'2',school:'二七校区',field01:'班级课',field02:'班课',field03:'98.00课时',field04:'10.00课时',field05:'88.00课时',field06:'4900.00',field07:'4900.00',field08:'500.00',field09:'4400.00'},
                {name:'龚楚熹 ',sex:'男',relation:'母亲',phone:'18907052268',state:'2',school:'二七校区',field01:'班级课',field02:'班课',field03:'98.00课时',field04:'10.00课时',field05:'88.00课时',field06:'4900.00',field07:'4900.00',field08:'500.00',field09:'4400.00'},
                {name:'龚楚熹 ',sex:'男',relation:'母亲',phone:'18907052268',state:'1',school:'二七校区',field01:'班级课',field02:'班课',field03:'98.00课时',field04:'10.00课时',field05:'88.00课时',field06:'4900.00',field07:'4900.00',field08:'500.00',field09:'4400.00'},
                {name:'龚楚熹 ',sex:'男',relation:'母亲',phone:'18907052268',state:'1',school:'二七校区',field01:'班级课',field02:'班课',field03:'98.00课时',field04:'10.00课时',field05:'88.00课时',field06:'4900.00',field07:'4900.00',field08:'500.00',field09:'4400.00'},
                {name:'龚楚熹 ',sex:'男',relation:'母亲',phone:'18907052268',state:'1',school:'二七校区',field01:'班级课',field02:'班课',field03:'98.00课时',field04:'10.00课时',field05:'88.00课时',field06:'4900.00',field07:'4900.00',field08:'500.00',field09:'4400.00'},
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
