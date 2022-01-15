<template>
    <div class="column-main">
        <div class="column-summary">
            <div>
                <el-button type="primary">添加学员</el-button>
            </div>
            <div class="text"><strong>当前结果：</strong>在读学生<em>2</em>， 满班率<em>100.00%</em></div>
        </div>

        <div class="column-table">
            <el-table ref="multipleTable" border :stripe="true" :data="list" style="width:100%">
                <el-table-column prop="field01" label="学员姓名" align="center" width="120"></el-table-column>
                <el-table-column prop="field02" label="性别" align="center" width="80"></el-table-column>
                <el-table-column prop="field03" label="关系" align="center" width="80"></el-table-column>
                <el-table-column prop="field04" label="联系方式" align="center" width="140"></el-table-column>
                <el-table-column prop="field05" label="已用数量" align="center" width="140"></el-table-column>
                <el-table-column prop="field06" label="剩余数量" align="center" width="140"></el-table-column>
                <el-table-column prop="field07" label="居住区域" ></el-table-column>
                <el-table-column label="操作" align="center" width="120">
                    <template slot-scope="scope">
                        <el-dropdown>
                          <span class="el-dropdown-link">
                            操作<i class="el-icon-arrow-down el-icon-caret-bottom"></i>
                          </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>调班</el-dropdown-item>
                                <el-dropdown-item>续费</el-dropdown-item>
                                <el-dropdown-item>结课</el-dropdown-item>
                                <el-dropdown-item>删除</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
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
                {field01:'万展一',field02:'男',field03:'母亲',field04:'15903751132',field05:'66.00天',field06:'7.00天',field07:'河南汝州'},
                {field01:'李沐阳',field02:'男',field03:'母亲',field04:'15735701167',field05:'66.00天',field06:'372.00天',field07:'山西省翼城县'},
                {field01:'杨展',field02:'男',field03:'母亲',field04:'13937825809',field05:'66.00天',field06:'7.00天',field07:'河南省杞县'},
                {field01:'李皓然',field02:'男',field03:'母亲',field04:'18661561447',field05:'66.00天',field06:'7.00天',field07:'山东省菏泽市单县北城街道孙草庙'},
                {field01:'王逸豪',field02:'男',field03:'母亲',field04:'13833034658',field05:'66.00天',field06:'7.00天',field07:'河北省保定市容城县东北阳村'},
                {field01:'韩远恒',field02:'男',field03:'母亲',field04:'15955097002',field05:'66.00天',field06:'7.00天',field07:'新郑'},
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
