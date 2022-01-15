<template>
    <div class="column">
        <div class="column-main">
            <div class="column-table">
                <el-table border :stripe="true" :data="list" style="width:100%">
                    <el-table-column label="排序" align="center" width="80">
                        <template slot-scope="scope">
                            <div>
                                <el-input v-model="scope.row.category01" size="mini"></el-input>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="字段名称" align="center" width="200">
                        <template slot-scope="scope">
                            <div>
                                <el-input v-model="scope.row.category02" size="mini"></el-input>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="category03" label="Key" align="center"></el-table-column>
                    <el-table-column prop="category04" label="类型" align="center"></el-table-column>
                    <el-table-column label="验证规则" align="center">
                        <template slot-scope="scope">
                            <el-switch v-model="scope.row.category05" active-color="#13ce66" inactive-color="#9b9b9b"></el-switch>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="column-pagination-main not-boxshadow">
                <div class="page-text">
                    <el-button type="primary">保存字段</el-button>
                </div>
                <div class="page-list">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"fieldOperation",
    data(){
        return{
            list:[
                {category01:'0',category02:'孩子姓名',category03:'name',category04:'普通文本',category05:false},
                {category01:'0',category02:'性别',category03:'sex',category04:'单选框',category05:false},
                {category01:'0',category02:'出生年月',category03:'age',category04:'普通文本-日期',category05:false},
                {category01:'0',category02:'家长姓名',category03:'title',category04:'普通文本',category05:false},
                {category01:'0',category02:'手机号码',category03:'mobile',category04:'普通文本',category05:false},
                {category01:'0',category02:'联系地址',category03:'education',category04:'多行文本框',category05:false},
                {category01:'0',category02:'详细情况',category03:'intro',category04:'多行文本框',category05:false},

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
