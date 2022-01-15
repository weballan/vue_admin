<template>
    <div class="viewpage">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="160px" class="demo-ruleForm">
            <div class="column">
                <div class="column-main">
                    <div class="column-title">
                        <h3>网站设置</h3>
                    </div>
                    <div class="column-form">
                        <el-form-item label="网站开关" prop="resource">
                            <el-radio-group v-model="ruleForm.resource">
                                <el-radio label="网站开启"></el-radio>
                                <el-radio label="网站关闭"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="关闭原因" prop="desc">
                            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                        </el-form-item>
                        <el-form-item label="网站名称" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="ICP备案号" prop="keeprecord">
                            <el-input v-model="ruleForm.keeprecord"></el-input>
                        </el-form-item>
                        <el-form-item label="站点域名" prop="domainname">
                            <el-input v-model="ruleForm.domainname"></el-input>
                        </el-form-item>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="column-main">
                    <div class="column-title">
                        <h3>优化设置</h3>
                    </div>
                    <div class="column-form">
                        <el-form-item label="优化标题" prop="domainname">
                            <el-input v-model="ruleForm.domainname"></el-input>
                        </el-form-item>
                        <el-form-item label="网站关键字" prop="desc">
                            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                        </el-form-item>
                        <el-form-item label="网站描述" prop="desc">
                            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                        </el-form-item>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="column-main">
                    <div class="column-title">
                        <h3>流量统计</h3>
                    </div>
                    <div class="column-form">
                        <el-form-item label="统计代码" prop="desc">
                            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
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
    name: "firstSetup",
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
