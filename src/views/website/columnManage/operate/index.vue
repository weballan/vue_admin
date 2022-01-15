<template>
    <div class="viewpage">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="180px" class="demo-ruleForm">
            <div class="column">
                <div class="column-main">
                    <div class="column-title">
                        <h3>基本设置</h3>
                    </div>
                    <div class="column-form">
                        <el-form-item label="栏目名称" prop="name">
                            <el-input v-model="ruleForm.name" placeholder="请输入内容" ></el-input>
                        </el-form-item>
                        <el-form-item label="栏目类型" prop="name">
                            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                                <el-option label="选择栏目类型" value=""></el-option>
                                <el-option label="单页" value="shanghai"></el-option>
                                <el-option label="文章模型" value="beijing"></el-option>
                                <el-option label="产品模型" value="beijing11"></el-option>
                                <el-option label="招聘模型" value="beijing33"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="别名" prop="keeprecord">
                            <el-input v-model="ruleForm.keeprecord" placeholder="请输入内容" ></el-input>
                        </el-form-item>
                        <el-form-item label="绑定域名" prop="domainname">
                            <el-input v-model="ruleForm.domainname" placeholder="例：news.baidu.com" ></el-input>
                        </el-form-item>
                        <el-form-item label="排序" prop="domainname">
                            <el-input v-model="ruleForm.domainname" placeholder="数字越小越靠前" ></el-input>
                        </el-form-item>
                        <el-form-item label="属性设置" prop="domainname">
                            <el-checkbox-group v-model="ruleForm.type">
                                <el-checkbox label="导航显示" name="type"></el-checkbox>
                                <el-checkbox label="新窗口" name="type"></el-checkbox>
                                <el-checkbox label="列表筛选" name="type"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="column-main">
                    <div class="column-title">
                        <h3>SEO设置</h3>
                    </div>
                    <div class="column-form">
                        <el-form-item label="优化标题" prop="name">
                            <el-input v-model="ruleForm.name" placeholder="请输入内容" ></el-input>
                        </el-form-item>
                        <el-form-item label="关键字" prop="name">
                            <el-input v-model="ruleForm.name" placeholder="请输入内容" ></el-input>
                        </el-form-item>
                        <el-form-item label="描述" prop="desc">
                            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                        </el-form-item>
                    </div>
                </div>
            </div>
        </el-form>

        <div class="viewbottom-operate">
            <el-button type="primary">保存</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "columnManageOperate",
    data(){
        return{
            ruleForm:{
                resource:'',
                desc:'临时维护',
                region:'',
                type:[],
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
