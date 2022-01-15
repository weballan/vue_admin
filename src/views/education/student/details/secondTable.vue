<template>
    <div class="column-main">
        <div class="course-list">
            <ul>
                <li>
                    <div class="course-item">
                        <div class="course-itemhead">
                            <div class="course-itemhead-txt">
                                <div class="course-itemhead-texttag">
                                    <div class="texttag color-blue">班</div>
                                </div>
                                <div class="course-itemhead-texttag">
                                    <div class="texttag color-blue">按课时</div>
                                </div>
                                <div class="course-itemhead-textitem">
                                    <h3>家长指导课</h3>
                                    <p>校区：二七校区</p>
                                </div>
                            </div>
                            <div class="course-itemhead-btn">
                                <el-button size="mini">续费</el-button>
                                <el-button size="mini">转课</el-button>
                                <el-button size="mini">停课</el-button>
                                <el-button size="mini">退费</el-button>
                                <el-button size="mini">结课</el-button>
                                <el-button size="mini">分班</el-button>
                            </div>
                        </div>
                        <div class="course-item-main">
                            <div class="course-item-left">
                                <div class="text"><span>报名时间</span><strong>2021-05-31</strong></div>
                                <div class="text"><span>剩余课时</span><strong>44.00（总计130.00 ）</strong></div>
                                <div class="text"><span>剩余学费</span><strong>6600.00 （总计19500.00 ）</strong></div>
                            </div>
                            <div class="course-item-right">
                                <div class="column-table">
                                    <el-table ref="multipleTable" border :data="list" style="width:100%">
                                        <el-table-column label="状态" align="center" width="80">
                                            <template slot-scope="scope">
                                                <div v-if="scope.row.field01==='0'" class="feedoc-state color-green">在读</div>
                                            </template>
                                        </el-table-column>
                                        <el-table-column prop="field02" label="班级名称"></el-table-column>
                                        <el-table-column prop="field03" label="教师" align="center" width="100"></el-table-column>
                                        <el-table-column prop="field04" label="开班日期" align="center" width="120"></el-table-column>
                                        <el-table-column prop="field05" label="已用课时" align="center" width="100"></el-table-column>
                                    </el-table>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="course-item">
                        <div class="course-itemhead">
                            <div class="course-itemhead-txt">
                                <div class="course-itemhead-texttag">
                                    <div class="texttag color-blue">班</div>
                                </div>
                                <div class="course-itemhead-texttag">
                                    <div class="texttag color-blue">按课时</div>
                                </div>
                                <div class="course-itemhead-textitem">
                                    <h3>家长指导课</h3>
                                    <p>校区：二七校区</p>
                                </div>
                            </div>
                            <div class="course-itemhead-btn">
                                <el-button size="mini">续费</el-button>
                                <el-button size="mini">转课</el-button>
                                <el-button size="mini">停课</el-button>
                                <el-button size="mini">退费</el-button>
                                <el-button size="mini">结课</el-button>
                                <el-button size="mini">分班</el-button>
                            </div>
                        </div>
                        <div class="course-item-main">
                            <div class="course-item-left">
                                <div class="text"><span>报名时间</span><strong>2021-05-31</strong></div>
                                <div class="text"><span>剩余课时</span><strong>44.00（总计130.00 ）</strong></div>
                                <div class="text"><span>剩余学费</span><strong>6600.00 （总计19500.00 ）</strong></div>
                            </div>
                            <div class="course-item-right">
                                <div class="column-table">
                                    <el-table ref="multipleTable" border :data="list" style="width:100%">
                                        <el-table-column label="状态" align="center" width="80">
                                            <template slot-scope="scope">
                                                <div v-if="scope.row.field01==='0'" class="feedoc-state color-green">在读</div>
                                            </template>
                                        </el-table-column>
                                        <el-table-column prop="field02" label="班级名称"></el-table-column>
                                        <el-table-column prop="field03" label="教师" align="center" width="100"></el-table-column>
                                        <el-table-column prop="field04" label="开班日期" align="center" width="120"></el-table-column>
                                        <el-table-column prop="field05" label="已用课时" align="center" width="100"></el-table-column>
                                    </el-table>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "secondTable",
    data(){
        return{
            list:[
                {field01:'0',field02:'二七校区精品班下午一二节',field03:'靳婕妤',field04:'2020-12-02',field05:'64.00'},
                {field01:'',field02:'',field03:'',field04:'',field05:''},
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
