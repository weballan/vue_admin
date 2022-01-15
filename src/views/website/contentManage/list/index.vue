<template>
    <div class="column">
        <div class="column-structure">
            <div class="column-structure-menu">
                <div class="column-structure-tree" :style="{height:treeHeight}">
                    <el-tree :data="menuList" :props="defaultProps" accordion @node-click="handleNodeClick"></el-tree>
                </div>
            </div>
            <div class="column-structure-main" ref="tructureMain">
                <div class="column-main">
                    <div id="div1">

                    </div>
                    <div class="columnpd">
                        <el-button type="primary">保存</el-button>
                    </div>
                </div>

                <list-table :list="list" :send-params="sendParams" :total="total"></list-table>

            </div>
        </div>
    </div>
</template>

<script>
import E from "wangeditor";
import listTable from "@/views/website/contentManage/list/components/listTable";
export default {
    name: "contentManagIndex",
    data(){
        return{
            sendParams:{
                state:'0',
                name:'',
                size:20,
                current:1,
            },
            total:0,
            list:[
                {category01:'1',category02:'家装知识：家装要环保辅材也很重要',category03:'公司动态',category04:'121',category05:false,category06:false,category07:true,category08:'0'},
                {category01:'2',category02:'家居必备小常识 橱柜实用设计技巧',category03:'公司动态',category04:'232',category05:false,category06:false,category07:true,category08:'0'},
                {category01:'3',category02:'测试阅读权限',category03:'城市规划',category04:'353',category05:false,category06:false,category07:true,category08:'0'},
                {category01:'4',category02:'如何运用风水布局佩戴首饰催旺梨花【收费阅读】',category03:'公司动态',category04:'44',category05:false,category06:false,category07:false,category08:'0'},
                {category01:'5',category02:'2019AWE美的馆看什么？5分钟王自如带你深度直击现场',category03:'公司动态',category04:'21',category05:false,category06:false,category07:true,category08:'0'},
                {category01:'6',category02:'增量红利变为存量裂变，数字升级把握先机',category03:'城市规划',category04:'54',category05:false,category06:false,category07:true,category08:'0'}
            ],
            defaultProps: {
                children:'children',
                label:'title'
            },
            treeHeight:'',
            menuList:[
                {title:'关于我们',menuId:'0',children:[
                        {title:'公司简介',menuId:'6',type:'singlePage'},
                        {title:'企业文化',menuId:'7',type:'singlePage'},
                        {title:'荣誉资质',menuId:'6',type:'singlePage'},
                    ]},
                {title:'新闻中心',menuId:'1',children:[
                        {title:'公司动态',menuId:'1-1',type:'article'},
                        {title:'行业资讯',menuId:'1-2',type:'article'},
                    ]},
                {title:'产品展示',menuId:'2',children:[
                        {title:'生活家电',menuId:'2-1',children:[
                                {title:'电水壶',menuId:'2-1-1',type:'product'},
                                {title:'挂烫机',menuId:'2-1-2',type:'product'},
                                {title:'吸尘器',menuId:'2-1-3',type:'product'},
                            ]},
                        {title:'智能家电',menuId:'2-2',type:'product'},
                        {title:'配件产品',menuId:'2-3',type:'product'},
                    ]},
                {title:'客户案例',menuId:'3',children:[
                        {title:'城市规划',menuId:'3-1',type:'article'},
                        {title:'居住建设',menuId:'3-2',type:'article'},
                        {title:'公共建设',menuId:'3-3',type:'article'},
                    ]},
                {title:'联系我们',menuId:'4',type:'singlePage'},
            ],
            editor:null,
            editorData:'',
            menuId:'',
        }
    },
    methods:{
        // 通过代码获取编辑器内容
        getEditorData() {
            let data = this.editor.txt.html();
            console.log('通过代码获取编辑器内容',data)
        },

        handleNodeClick(data){
            console.log(data);
        },

    },
    components:{
        listTable,
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
            this.editor = editor
            this.treeHeight=window.getComputedStyle(this.$refs.tructureMain).height;
        })
    },
    beforeDestroy(){
        // 调用销毁 API 对当前编辑器实例进行销毁
        this.editor.destroy()
        this.editor = null
    },
}
</script>
