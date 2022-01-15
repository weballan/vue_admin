<template>
    <div class="viewpage" :style="{height:docuHeight-100+'px'}">
        <!--基本信息-->
        <div class="column">
            <div class="column-main">
                <div class="column-title">
                    <h3>基本信息</h3>
                </div>
                <div class="column-row">
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <div class="column-row-items">
                                <div class="text">机构名称</div>
                                <div class="inputdiv"><el-input v-model="sendParams.name" placeholder="请输入内容"></el-input></div>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="column-row-items">
                                <div class="text">机构简称</div>
                                <div class="inputdiv"><el-input v-model="sendParams.shorterName" placeholder="请输入内容"></el-input></div>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="column-row-items">
                                <div class="text">机构类型</div>
                                <div class="textvalue">其他-幼儿康复训练</div>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="column-row-items">
                                <div class="text">机构后缀</div>
                                <div class="textvalue">rmyx</div>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="column-row-items">
                                <div class="text">总部电话</div>
                                <div class="inputdiv"><el-input v-model="sendParams.phone" placeholder="请输入内容"></el-input></div>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="column-row-items">
                                <div class="text">教监电话</div>
                                <div class="inputdiv"><el-input v-model="sendParams.contactPhone" placeholder="请输入内容"></el-input></div>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="column-row-items">
                                <div class="text">系统机构Logo</div>
                                <div class="uploadiv">
                                    <div class="photo">
                                        <img :src="defaLogo" alt="" />
                                    </div>
                                    <div class="photo-tips">
                                        <p>不超过4M</p>
                                        <p>建议长宽比1:1</p>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>

        <!--资产信息-->
        <div class="column">
            <div class="column-main">
                <div class="column-title">
                    <h3>资产信息</h3>
                </div>
                <div class="column-row">
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <div class="column-row-items">
                                <div class="text">版本信息<strong>（到期日期：2026-11-08 23:59:59）</strong></div>
                                <div class="textvalue">专业版</div>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="column-row-items">
                                <div class="text">校区（已用/总数）</div>
                                <div class="textvalue">2/2</div>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="column-row-items">
                                <div class="text">系统账号（已用/总数）</div>
                                <div class="textvalue">49/ 无限</div>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="column-row-items">
                                <div class="text">&nbsp;</div>
                                <div class="textvalue">&nbsp;</div>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="column-row-items">
                                <div class="text">增值服务<strong>（到期日期：2026-11-08 23:59:59）</strong></div>
                                <div class="textvalue">校宝家独立公众号</div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>

        <div class="viewbottom-operate">
            <el-button type="primary">保存</el-button>
        </div>
    </div>
</template>

<script>
import {docuHeight} from '@/services/globalFun'
export default{
    name: "mechanismIndex",
    data(){
        return{
            sendParams:{
                name:'郑州市惠济区瑞曼康复训练中心',
                shorterName:'瑞曼语训',
                phone:'400-666-0402',
                contactPhone:'0371-63787598',
            },
            defaLogo:require('@/assets/photo/01.png'),
            docuHeight:docuHeight
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
