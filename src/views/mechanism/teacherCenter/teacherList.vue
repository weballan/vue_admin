<template>
    <div>
        <div class="column-summary">
            <div>
                <el-button type="primary">新建教室</el-button>
            </div>
            <div class="text"><strong>当前结果：</strong>共计<em>20</em>个教室</div>
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
                <el-table-column prop="name" label="教室名称" align="center"></el-table-column>
                <el-table-column prop="school" label="校区" align="center"></el-table-column>
                <el-table-column prop="layout" label="座位编排" align="center"></el-table-column>
                <el-table-column prop="number" label="可容纳人数" align="center"></el-table-column>
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
        <el-dialog title="编辑教室" :visible.sync="editVisible" width="50%" :close-on-click-modal="false">
            <div class="common-poplist" style="width:80%">
                <el-form :model="addParams" :rules="addRules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="教室名称" prop="name">
                        <el-input v-model.trim="addParams.name"></el-input>
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
    name: "teacherList",
    data(){
        return{
            editVisible:false,
            addParams:{
                name:'',
                school:'',
            },
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
                {name:'四中心 测评室',school:'二七校区',layout:'',number:''},
                {name:'四中心 个训教室8',school:'二七校区',layout:'',number:''},
                {name:'四中心 个训教室7',school:'二七校区',layout:'',number:''},
                {name:'四中心 个训教室6',school:'二七校区',layout:'',number:''},
                {name:'四中心 个训教室5',school:'二七校区',layout:'',number:''},
                {name:'四中心 个训教室4',school:'二七校区',layout:'',number:''},
                {name:'四中心 个训教室3',school:'二七校区',layout:'',number:''},
                {name:'四中心 个训教室2',school:'二七校区',layout:'',number:''},
                {name:'四中心 个训教室1',school:'二七校区',layout:'',number:''},
                {name:'四中心 班级教室',school:'二七校区',layout:'',number:''},
                {name:'综合教室',school:'二七校区',layout:'',number:''},
                {name:'二中心 班级教室',school:'二七校区',layout:'',number:''},
                {name:'二中心 个训教室8',school:'二七校区',layout:'',number:''},
                {name:'二中心 个训教室7',school:'二七校区',layout:'',number:''},
                {name:'二中心 个训教室6',school:'二七校区',layout:'',number:''},
                {name:'二中心 个训教室5',school:'二七校区',layout:'',number:''},
                {name:'二中心 个训教室4',school:'二七校区',layout:'',number:''},
                {name:'二中心 个训教室3',school:'二七校区',layout:'',number:''},
                {name:'二中心 个训教室2',school:'二七校区',layout:'',number:''},
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
