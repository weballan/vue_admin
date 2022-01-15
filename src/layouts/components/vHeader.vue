<template>
    <div class="nav-wrapper">
        <div class="nav-fold boxHover" @click="getOpen"><i class="el-icon-s-fold"></i></div>
        <div class="right-menu">
            <div class="right-menu-item">
                <div class="right-menu-schoolname">
                    <el-tooltip class="item" effect="dark" content="郑州市惠济区瑞曼康复训练中心" placement="right-start">
                        <div slot="content">郑州市惠济区瑞曼康复训练<br/>中心</div>
                        <el-dropdown class="right-menu-list">
                            <div class="text-title">郑州市惠济区瑞曼康复训练中心</div>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item @click.native="passwordOpen">机构信息</el-dropdown-item>
                                <el-dropdown-item divided @click.native="passwordOpen">教务中心设置</el-dropdown-item>
                                <el-dropdown-item divided @click.native="logout">消息通知</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-tooltip>
                </div>
            </div>

            <div class="right-menu-item">
                <div class="right-menu-message">
                    <span>...</span>
                    <i class="el-icon-message-solid"></i>
                </div>
            </div>
            <div class="right-menu-item">
                <div class="right-menu-user">
                    <!-- 用户名下拉菜单 -->
                    <el-dropdown>
                        <div>
                            <div class="photo">
                                <img :src="userPhoto" alt="" />
                            </div>
                            <span>张秋雯</span>
                        </div>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item @click.native="passwordOpen" icon="el-icon-user">个人中心</el-dropdown-item>
                            <el-dropdown-item divided @click.native="logout" icon="el-icon-switch-button">退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState,mapGetters,mapActions } from 'vuex';
export default{
    name: "vHeader",
    data(){
        return{
            userPhoto:require('@/assets/male-big.jpeg'),
        }
    },
    methods:{
        ...mapActions(['getOpen']),
        logout(){
            localStorage.removeItem('user');

            this.$router.replace({path:'/login'});
        },
        passwordOpen(){

        },
    },
    components:{

    },
    mounted(){
        if (document.body.clientWidth<1500) {
            this.getOpen();
        }
    }
}
</script>
