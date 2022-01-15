<template>
    <div class="column">
        <div class="form-tabs">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="基本设置" name="first">
                    <div class="column-main">
                        <div class="column-form">
                            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="标题：" prop="name">
                                    <el-input v-model="ruleForm.name" placeholder="请输入内容" ></el-input>
                                </el-form-item>
                                <el-form-item label="正文：" prop="name">
                                    <div id="div1"></div>
                                </el-form-item>
                                <el-form-item label="缩略图：" prop="uploadImg">
                                    <el-input v-model="ruleForm.uploadImg" >
                                        <template slot="append">
                                            <el-upload
                                                class="upload-demo"
                                                action="https://jsonplaceholder.typicode.com/posts/"
                                                :on-preview="handlePreview"
                                                :on-remove="handleRemove"
                                                :before-remove="beforeRemove"
                                                multiple
                                                :limit="1"
                                                :on-exceed="handleExceed"
                                                :show-file-list="false"
                                                :file-list="fileList">
                                                <el-button type="primary" icon="el-icon-upload">点击上传</el-button>
                                            </el-upload>
                                        </template>
                                    </el-input>
                                </el-form-item>
                                <el-form-item label="摘要：" prop="name">
                                    <el-input v-model="ruleForm.name" type="textarea" :autosize="{minRows:4}" maxlength="200" show-word-limit placeholder="请输入内容" ></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" >保存</el-button>
                                    <el-button >返回</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="SEO设置" name="second">
                    <div class="column-main">
                        <div class="column-form">
                            <el-form label-width="100px" class="demo-ruleForm">
                                <el-form-item label="优化标题：" prop="name">
                                    <el-input v-model="ruleForm.name" placeholder="请输入内容" ></el-input>
                                </el-form-item>
                                <el-form-item label="关键字：" prop="name">
                                    <el-input v-model="ruleForm.name" type="textarea" :autosize="{minRows:4}" maxlength="200" show-word-limit placeholder="请输入内容" ></el-input>
                                </el-form-item>
                                <el-form-item label="描述：" prop="name">
                                    <el-input v-model="ruleForm.name" type="textarea" :autosize="{minRows:4}" maxlength="200" show-word-limit placeholder="请输入内容" ></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" >保存</el-button>
                                    <el-button >返回</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="可选设置" name="third">
                    <div class="column-main">
                        <div class="column-form">
                            <el-form label-width="100px" class="demo-ruleForm">
                                <el-form-item label="排序：" prop="name">
                                    <el-input v-model="ruleForm.index" placeholder="请输入内容" ></el-input>
                                    <div style="color:#9b9b9b">数字越大越靠前</div>
                                </el-form-item>
                                <el-form-item label="置顶：" prop="name">
                                    <el-radio-group v-model="ruleForm.radio">
                                        <el-radio :label="1">否</el-radio>
                                        <el-radio :label="0">是</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="推荐：" prop="name">
                                    <el-radio-group v-model="ruleForm.radio">
                                        <el-radio :label="1">否</el-radio>
                                        <el-radio :label="0">是</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="发布日期：" prop="name">
                                    <el-date-picker
                                        v-model="ruleForm.date"
                                        type="datetime"
                                        placeholder="选择日期">
                                    </el-date-picker>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" >保存</el-button>
                                    <el-button >返回</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import E from "wangeditor";
export default {
    name: "index",
    data(){
        return{
            ruleForm:{
                name:'',
                uploadImg:'',
                index:0,
                radio:1,
                date:'',
            },
            rules:{},
            editor:null,
            editorData:'',
            activeName:'first',
            fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        }
    },
    methods:{
        handleClick(tab, event) {
            console.log(tab, event);
        },
        //点击文件列表中已上传的文件时的钩子
        handleExceed(files, fileList){
            this.ruleForm.uploadImg=files[0].name;
            console.log('点击文件列表中已上传的文件时的钩子',files)
        },
        //删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。
        beforeRemove(file, fileList){
            console.log('删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。',file,fileList)
        },
        //点击文件列表中已上传的文件时的钩子
        handlePreview(file){
            console.log('文件列表中已上传的文件时的钩子',file)
        },
        //文件列表移除文件时的钩子
        handleRemove(file, fileList){
            console.log('文件列表移除文件时的钩子',file)
        },
    },
    components:{

    },
    mounted(){
        this.$nextTick(()=>{
            const editor = new E("#div1");

            // 配置 onchange 回调函数，将数据同步到 vue 中
            editor.config.onchange = (newHtml) => {
                this.editorData = newHtml
            }
            editor.config.uploadFileName = "file";
            editor.config.uploadImgServer = '/upload';
            editor.config.uploadImgShowBase64 = true;
            editor.config.uploadImgHooks={
                // 上传图片之前
                before:(xhr)=>{
                    return{

                    }
                },
                // 图片上传并返回了结果，图片插入已成功
                success:(xhr)=>{

                },
                // 图片上传并返回了结果，但图片插入时出错了
                fail:(xhr,editor,resData)=>{

                },
                // 上传图片出错，一般为 http 请求的错误
                error:(xhr,editor,resData)=>{

                },
                // 上传图片超时
                timeout:(xhr)=>{

                },
                // 图片上传并返回了结果，想要自己把图片插入到编辑器中
                // 例如服务器端返回的不是 { errno: 0, data: [...] } 这种格式，可使用 customInsert
                customInsert:(insertImgFn, result)=>{
                    console.log('customInsert', result)
                    // insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可
                    insertImgFn(result.data[0])
                }
            }

            editor.create();
            this.editor = editor;
        })
    },
    beforeDestroy(){
        // 调用销毁 API 对当前编辑器实例进行销毁
        this.editor.destroy()
        this.editor = null
    },
}
</script>
