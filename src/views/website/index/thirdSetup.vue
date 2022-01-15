<template>
    <div class="viewpage">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="160px" class="demo-ruleForm">
            <div class="column">
                <div class="column-main">
                    <div class="column-form">
                        <el-form-item label="公司名称" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="服务热线" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="传真号码" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="手机号码" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="电子邮箱" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="公司地址" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                    </div>
                </div>
            </div>

            <div class="viewbottom-operate">
                <el-button type="primary">保存</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "thirdSetup",
    data(){
        return{
            ruleForm:{
                resource:'',
                desc:'临时维护',
            },
            rules:{

            },
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
