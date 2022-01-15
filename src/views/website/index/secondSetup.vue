<template>
    <div class="viewpage" :style="{height:docuHeight-200+'px'}">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="160px" class="demo-ruleForm">
            <div class="column">
                <div class="column-main">
                    <div class="column-form">
                        <el-form-item label="开关" prop="resource">
                            <el-radio-group v-model="ruleForm.resource">
                                <el-radio label="开启"></el-radio>
                                <el-radio label="关闭"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="绑定域名" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="自动识别" prop="resource">
                            <el-radio-group v-model="ruleForm.resource">
                                <el-radio label="开启"></el-radio>
                                <el-radio label="关闭"></el-radio>
                            </el-radio-group>
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
import {docuHeight} from '@/services/globalFun'
export default {
    name: "secondSetup",
    data(){
        return{
            docuHeight:docuHeight,
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
