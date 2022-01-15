<template>
    <div>
        <div class="column-summary">
            <div>
                <el-button type="primary">新建上课时间</el-button>
            </div>
            <div class="text"><strong>当前结果：</strong>共计<em>4</em>个上课时间</div>
            <div class="inputdiv">
                <div>
                    <el-select v-model="addParams.school" placeholder="请选择校区">
                        <el-option label="惠济校区" value="shanghai"></el-option>
                        <el-option label="二七校区" value="beijing"></el-option>
                    </el-select>
                </div>
            </div>
        </div>

        <div class="column-table pdbootom100" :class="[total>20?'pdbootom100':'']">
            <el-table ref="multipleTable" border :stripe="true" :data="list" style="width:100%">
                <el-table-column type="index" :index="(sendParams.current-1) * sendParams.size+1" label="序号" align="center" width="60"></el-table-column>
                <el-table-column prop="time" label="上课时间" align="center"></el-table-column>
                <el-table-column prop="school" label="校区" align="center"></el-table-column>
                <el-table-column fixed="right" label="操作" align="center" width="160">
                    <template slot-scope="scope">
                        <el-button @click="editVisible=true" icon="el-icon-edit-outline" type="text" size="small">编辑</el-button>
                        <el-button @click="deleConfirm" icon="el-icon-delete" type="text" size="small">删除</el-button>
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

        <!--编辑-->
        <el-dialog title="新建上课时间" :visible.sync="editVisible" width="50%" :close-on-click-modal="false">
            <div class="common-poplist" style="width:80%">
                <el-form :model="addParams" :rules="addRules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="上课时间" prop="name">
                        <div class="time-select">
                            <div class="time-select-items">
                                <el-time-select placeholder="选择开始上课时间" v-model="addParams.beginDate"></el-time-select>
                            </div>
                            <div class="time-select-items">
                                <el-time-select placeholder="选择截至上课时间" v-model="addParams.endDate"></el-time-select>
                            </div>
                        </div>
                    </el-form-item>
                    <el-form-item label="校区" prop="school">
                        <el-select v-model="addParams.school" placeholder="请选择校区">
                            <el-option label="惠济校区" value="shanghai"></el-option>
                            <el-option label="二七校区" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </div>
            <div class="common-popbtn">
                <el-button @click="editVisible=false" size="medium">取消</el-button>
                <el-button @click="editVisible=false" size="medium" type="primary">确认</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import pageAtion from '@/components/PageAtion'
export default {
    name: "coursetimeList",
    data(){
        return{
            editVisible:false,
            addParams:{
                name:'',
                school:'',
                beginDate: '',   //开始时间 格式：yyyy-MM-dd
                endDate: '',  //结束时间 格式：yyyy-MM-dd
            },
            currentDate:[],
            addRules:{
                name:[
                    {required:true,message:'请输入教室名称',trigger:'blur'},
                ],
                school:[
                    {required:true,message:'请输入校区',trigger:'blur'},
                ],
            },
            sendParams:{
                current:1,
                size:20,
            },
            total:0,
            list:[
                {time:'08:25-09:50',school:'全部校区'},
                {time:'10:15-11:40',school:'全部校区'},
                {time:'14:10-15:35',school:'全部校区'},
                {time:'16:00-17:25',school:'全部校区'},
            ],
        }
    },
    methods:{
        //删除当前数据
        deleConfirm(){
            this.$confirm('删除数据后不能恢复，请确认', '提示', {
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            })
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
