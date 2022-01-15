<template>
    <div class="column">
        <div class="column-main">
            <div class="column-summary">
                <div>
                    <el-button @click="fieldBtn" type="primary">字段管理</el-button>
                    <el-button type="warning">批量操作</el-button>
                </div>
                <div class="text"></div>
                <div class="inputdiv">
                    <div>
                        <el-input placeholder="请输入关键字" v-model="sendParams.name">
                            <el-button slot="append" icon="el-icon-search"></el-button>
                        </el-input>
                    </div>
                </div>
            </div>
        </div>

        <list-table :send-params="sendParams" :total="total" :list="list"></list-table>
    </div>
</template>

<script>
import listTable from "@/views/website/formManage/list/components/listTable";
export default {
    name: "formManageIndex",
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
            total:50,
            list:[
                {category02:'测试',category03:'男',category04:'2021-01-11',category09:'陈小小',category06:'18838942185',category07:'河南省郑州市中原区冉屯东路煤仓北街正功花园6号楼1单元611',category08:'如果上传图片遇到问题，请打开浏览器开发者工具，查看 console.error 输出的错误信息。'},
                {category02:'1111',category03:'女',category04:'2021-01-11',category09:'陈小小',category06:'13333333333',category07:'河南省郑州市中原区冉屯东路煤仓北街正功花园6号楼1单元611',category08:'如果上传图片遇到问题，请打开浏览器开发者工具，查看 console.error 输出的错误信息。'},
                {category02:'22',category03:'女',category04:'2021-01-11',category09:'陈小小',category06:'13254544747',category07:'河南省郑州市中原区冉屯东路煤仓北街正功花园6号楼1单元611',category08:'如果上传图片遇到问题，请打开浏览器开发者工具，查看 console.error 输出的错误信息。'},
                {category02:'ffdfdsf',category03:'女',category04:'2021-01-11',category09:'陈小小',category06:'13798385074',category07:'河南省郑州市中原区冉屯东路煤仓北街正功花园6号楼1单元611',category08:'如果上传图片遇到问题，请打开浏览器开发者工具，查看 console.error 输出的错误信息。'},
                {category02:'111',category03:'女',category04:'2021-01-11',category09:'陈小小',category06:'13866668888',category07:'河南省郑州市中原区冉屯东路煤仓北街正功花园6号楼1单元611',category08:'如果上传图片遇到问题，请打开浏览器开发者工具，查看 console.error 输出的错误信息。'},
                {category02:'梦里老家',category03:'男',category04:'2021-01-11',category09:'陈小小',category06:'13767389550',category07:'河南省郑州市中原区冉屯东路煤仓北街正功花园6号楼1单元611',category08:'如果上传图片遇到问题，请打开浏览器开发者工具，查看 console.error 输出的错误信息。'},
                {category02:'笑哈哈',category03:'男',category04:'2021-01-11',category09:'陈小小',category06:'13152652573',category07:'河南省郑州市中原区冉屯东路煤仓北街正功花园6号楼1单元611',category08:'如果上传图片遇到问题，请打开浏览器开发者工具，查看 console.error 输出的错误信息。'},
                {category02:'simon',category03:'女',category04:'2021-01-11',category09:'陈小小',category06:'13426478549',category07:'河南省郑州市中原区冉屯东路煤仓北街正功花园6号楼1单元611',category08:'如果上传图片遇到问题，请打开浏览器开发者工具，查看 console.error 输出的错误信息。'},
                {category02:'234242',category03:'男',category04:'2021-01-11',category09:'陈小小',category06:'13344443333',category07:'河南省郑州市中原区冉屯东路煤仓北街正功花园6号楼1单元611',category08:'如果上传图片遇到问题，请打开浏览器开发者工具，查看 console.error 输出的错误信息。'},
                {category02:'11111',category03:'男',category04:'2021-01-11',category09:'陈小小',category06:'17761733511',category07:'河南省郑州市中原区冉屯东路煤仓北街正功花园6号楼1单元611',category08:'如果上传图片遇到问题，请打开浏览器开发者工具，查看 console.error 输出的错误信息。'},

            ],
        }
    },
    methods:{
        fieldBtn(){
            this.$router.replace(`/website/form/field`)
        },
    },
    components:{
        listTable,
    },
    mounted(){

    }
}
</script>
