/**
 * Created by Allan on 2021/08/20.
 * Contact 84880528@qq.com.
 */
import Frame from '@/layouts/Frame'
export default[
    {
        path:'/website',
        meta:{
            title:'网站设置',
            icon:'el-icon-stopwatch',
            menuId:'14'
        },
        component:Frame,
        children:[
            {
                path:'index',
                name:'website',
                meta:{
                    title:'网站设置',
                    keepAlive:true,
                    menuId:'3'
                },
                component:resolve => require(['@/views/website/index/index'], resolve)
            },
            {
                path:'column',
                name:'columnManage',
                meta:{
                    title:'栏目管理',
                    keepAlive:true,
                    menuId:'3'
                },
                component:resolve => require(['@/views/website/columnManage/list/index'], resolve)
            },
            {
                path:'column/operate/:state',
                name:'columnOperate',
                meta:{
                    title:'编辑栏目',
                },
                hidden:true,
                component:resolve => require(['@/views/website/columnManage/operate/index'], resolve)
            },
            {
                path:'content',
                name:'contentManage',
                meta:{
                    title:'内容管理',
                    keepAlive:true,
                    menuId:'3'
                },
                component:resolve => require(['@/views/website/contentManage/list/index'], resolve)
            },
            {
                path:'content/details',
                name:'manageDetails',
                meta:{
                    title:'内容管理',
                },
                hidden:true,
                component:resolve => require(['@/views/website/contentManage/details/index'], resolve)
            },
            {
                path:'form',
                name:'formManage',
                meta:{
                    title:'留言管理',
                    keepAlive:true,
                    menuId:'3'
                },
                component:resolve => require(['@/views/website/formManage/list/index'], resolve)
            },
            {
                path:'form/field',
                name:'fieldOperation',
                meta:{
                    title:'字段操作',
                },
                hidden:true,
                component:resolve => require(['@/views/website/formManage/fieldOperation/index'], resolve)
            },
        ],
    }
]
