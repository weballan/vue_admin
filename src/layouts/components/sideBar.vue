<template>
    <div class="sidebar">
        <div class="sidebar-logo">
            <div class="photo">
                <img :src="logoDefaultPhoto" alt="" />
            </div>
        </div>
        <div class="sidebar-list">
            <el-menu
                class="sidebar-el-menu"
                :default-active="$route.path"
                :collapse="!open"
                unique-opened
                router
            >
                <template v-for="(item,index) in $router.options.routes" v-if="isPermissions(item)">

                    <el-submenu :index="index + ''" v-if="!item.leaf">
                        <template slot="title">
                            <i :class="item.meta.icon || ''"></i><span slot="title">{{item.meta.title}}</span>
                        </template>
                        <el-menu-item v-for="child in item.children"
                                      :index="item.path +'/'+ child.path"
                                      :class="{'is-active':$route.name === child.name}"
                                      :key="child.name"
                                      v-if="isPermissions(child)">{{child.meta.title}}
                        </el-menu-item>
                    </el-submenu>

                    <el-menu-item v-if="item.leaf&&item.children.length>0"
                                  :class="{'is-active':($route.matched[0].name === item.name)}"
                                  :index="item.path">{{item.meta.title}}
                    </el-menu-item>
                </template>
            </el-menu>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex';
export default {
    name: "sideBar",
    data(){
        return{
            logoDefaultPhoto:require('@/assets/logo@2x.png'),
        }
    },
    computed:{
        ...mapGetters(['open','userInfo']),
    },
    methods:{
        isPermissions(routeObj){
            if (routeObj.meta.menuId && this.userInfo.menuIdList){
                return this.userInfo.menuIdList.includes(routeObj.meta.menuId)
            }
            return !routeObj.hidden
        },
    },
    components:{

    },
    mounted(){

    }
}
</script>
