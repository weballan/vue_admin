/**
 * Created by Allan on 2021/05/11.
 * Contact 84880528@qq.com.
 */
import Frame from '@/layouts/Frame'
export default[
    {
        path:'/welcome',
        meta:{
            title:'首页',
            icon:'el-icon-s-finance',
        },
        redirect:'/welcome/index',
        alias:'/',
        hidden:true,
        leaf:true,
        component:Frame,
        index:'0',
        children:[
            {
                path:'index',
                name:'welcome',
                meta:{
                    title:'首页',
                },
                index:'0-1',
                component:resolve => require(['@/views/welcome/index'], resolve)
            },
        ],
    }
]
