<template>
    <div class="column">
        <div class="column-main">
            <div class="column-summary">
                <div>
                    <el-button type="primary">新建班级</el-button>
                </div>
                <div class="text"><strong>当前结果：</strong>共计<em>12</em>个班级， 共计在读学员<em>55</em>名</div>
            </div>
        </div>

        <div class="column-main">
            <div class="column-table pdbootom100" :class="[total>20?'pdbootom100':'']">
                <el-table ref="multipleTable" border :stripe="true" :data="list" style="width:100%">
                    <el-table-column label="班级名称" align="center">
                        <template slot-scope="scope">
                            <el-button type="text" size="small">{{scope.row.name}}</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column prop="field01" label="人数" align="center" width="80"></el-table-column>
                    <el-table-column prop="field02" label="教师" align="center" width="120"></el-table-column>
                    <el-table-column prop="field03" label="所属课程" align="center" width="120"></el-table-column>
                    <el-table-column prop="field04" label="开班校区" align="center" width="120"></el-table-column>
                    <el-table-column prop="field05" label="开班日期" align="center" width="120"></el-table-column>
                    <el-table-column label="上课时间" align="center" width="200">
                        <template slot-scope="scope">
                            <div v-html="scope.row.field06"></div>
                        </template>
                    </el-table-column>
                    <el-table-column label="招生状态" align="center" width="100">
                        <template slot-scope="scope">
                            <!--在读-->
                            <div v-if="scope.row.state==='1'" class="feedoc-state color-green">开放招生</div>
                            <!--停课-->
                            <div v-if="scope.row.state==='2'" class="feedoc-state color-red">停课</div>
                            <!--结课-->
                            <div v-if="scope.row.state==='0'" class="feedoc-state color-grey">结课</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" align="center" width="120">
                        <template slot-scope="scope">
                            <el-dropdown>
                          <span class="el-dropdown-link">
                            操作<i class="el-icon-arrow-down el-icon-caret-bottom"></i>
                          </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>分配学员</el-dropdown-item>
                                    <el-dropdown-item>排课</el-dropdown-item>
                                    <el-dropdown-item>结班</el-dropdown-item>
                                    <el-dropdown-item>编辑</el-dropdown-item>
                                    <el-dropdown-item>删除班级</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
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
    name: "tableList",
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
                {name:'二七校区预备班级课2',state:'1',field01:'2/4',field02:'潘晨飞',field03:'班级课',field04:'二七校区',field05:'2021-06-16',field06:'每周周一 14:10-15:35<br />每周周二 14:10-15:35<br />每周周三 14:10-15:35<br />每周周四 14:10-15:35<br />每周周五 14:10-15:35'},
                {name:'二七校区预备班级课2',state:'1',field01:'2/4',field02:'潘晨飞',field03:'班级课',field04:'二七校区',field05:'2021-06-16',field06:'每周周一 14:10-15:35<br />每周周二 14:10-15:35<br />每周周三 14:10-15:35<br />每周周四 14:10-15:35<br />每周周五 14:10-15:35'},
                {name:'二七校区预备班级课2',state:'1',field01:'2/4',field02:'潘晨飞',field03:'班级课',field04:'二七校区',field05:'2021-06-16',field06:'每周周一 14:10-15:35<br />每周周二 14:10-15:35<br />每周周三 14:10-15:35<br />每周周四 14:10-15:35<br />每周周五 14:10-15:35'},
                {name:'二七校区预备班级课2',state:'1',field01:'2/4',field02:'潘晨飞',field03:'班级课',field04:'二七校区',field05:'2021-06-16',field06:'每周周一 14:10-15:35<br />每周周二 14:10-15:35<br />每周周三 14:10-15:35<br />每周周四 14:10-15:35<br />每周周五 14:10-15:35'},
                {name:'二七校区预备班级课2',state:'1',field01:'2/4',field02:'潘晨飞',field03:'班级课',field04:'二七校区',field05:'2021-06-16',field06:'每周周一 14:10-15:35<br />每周周二 14:10-15:35<br />每周周三 14:10-15:35<br />每周周四 14:10-15:35<br />每周周五 14:10-15:35'},
                {name:'二七校区预备班级课2',state:'1',field01:'2/4',field02:'潘晨飞',field03:'班级课',field04:'二七校区',field05:'2021-06-16',field06:'每周周一 14:10-15:35<br />每周周二 14:10-15:35<br />每周周三 14:10-15:35<br />每周周四 14:10-15:35<br />每周周五 14:10-15:35'},
                {name:'二七校区预备班级课2',state:'1',field01:'2/4',field02:'潘晨飞',field03:'班级课',field04:'二七校区',field05:'2021-06-16',field06:'每周周一 14:10-15:35<br />每周周二 14:10-15:35<br />每周周三 14:10-15:35<br />每周周四 14:10-15:35<br />每周周五 14:10-15:35'},
                {name:'二七校区预备班级课2',state:'1',field01:'2/4',field02:'潘晨飞',field03:'班级课',field04:'二七校区',field05:'2021-06-16',field06:'每周周一 14:10-15:35<br />每周周二 14:10-15:35<br />每周周三 14:10-15:35<br />每周周四 14:10-15:35<br />每周周五 14:10-15:35'},
                {name:'二七校区预备班级课2',state:'1',field01:'2/4',field02:'潘晨飞',field03:'班级课',field04:'二七校区',field05:'2021-06-16',field06:'每周周一 14:10-15:35<br />每周周二 14:10-15:35<br />每周周三 14:10-15:35<br />每周周四 14:10-15:35<br />每周周五 14:10-15:35'},
                {name:'二七校区预备班级课2',state:'1',field01:'2/4',field02:'潘晨飞',field03:'班级课',field04:'二七校区',field05:'2021-06-16',field06:'每周周一 14:10-15:35<br />每周周二 14:10-15:35<br />每周周三 14:10-15:35<br />每周周四 14:10-15:35<br />每周周五 14:10-15:35'},
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
