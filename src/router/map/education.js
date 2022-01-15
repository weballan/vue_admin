/**
 * Created by Allan on 2021/07/28.
 * Contact 84880528@qq.com.
 */
import Frame from '@/layouts/Frame'
export default[
    {
        path:'/education',
        meta:{
            title:'教务中心',
            icon:'el-icon-notebook-2',
            menuId:'14'
        },
        component:Frame,
        children:[
            {
                path:'student',
                name:'student',
                meta:{
                    title:'学员',
                    keepAlive:true,
                    menuId:'3'
                },
                component:resolve => require(['@/views/education/student/list/index'], resolve)
            },
            {
                path:'student/details',
                name:'studentDetails',
                meta:{
                    title:'学员详情',
                },
                hidden:true,
                component:resolve => require(['@/views/education/student/details/index'], resolve)
            },
            {
                path:'class',
                name:'class',
                meta:{
                    title:'班级',
                    keepAlive:true,
                    menuId:'3'
                },
                component:resolve => require(['@/views/education/class/list/index'], resolve)
            },
            {
                path:'class/details',
                name:'classDetails',
                meta:{
                    title:'班级详情',
                },
                hidden:true,
                component:resolve => require(['@/views/education/class/details/index'], resolve)
            },
            {
                path:'onetoone',
                name:'oneToOne',
                meta:{
                    title:'一对一',
                    keepAlive:true,
                    menuId:'3'
                },
                component:resolve => require(['@/views/education/oneToOne/index'], resolve)
            },
            {
                path:'schedule',
                name:'schedule',
                meta:{
                    title:'排课',
                    keepAlive:true,
                    menuId:'3'
                },
                component:resolve => require(['@/views/education/schedule/index'], resolve)
            },
            {
                path:'lesson',
                name:'lesson',
                meta:{
                    title:'课程',
                    keepAlive:true,
                    menuId:'3'
                },
                component:resolve => require(['@/views/education/lesson/index'], resolve)
            },
        ],
    }
]
