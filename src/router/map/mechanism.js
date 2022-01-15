/**
 * Created by Allan on 2021/07/25.
 * Contact 84880528@qq.com.
 */
import Frame from '@/layouts/Frame'
export default[
    {
        path:'/mechanism',
        meta:{
            title:'机构中心',
            icon:'el-icon-monitor',
            menuId:'14'
        },
        component:Frame,
        children:[
            {
                path:'index',
                name:'mechanismIndex',
                meta:{
                    title:'机构信息',
                    keepAlive:true,
                    menuId:'1'
                },
                component:resolve => require(['@/views/mechanism/index/index'], resolve)
            },
            {
                path:'teachercenter',
                name:'teacherCenter',
                meta:{
                    title:'教务中心设置',
                    keepAlive:true,
                    menuId:'2'
                },
                component:resolve => require(['@/views/mechanism/teacherCenter/index'], resolve)
            },
        ],
    }
]



