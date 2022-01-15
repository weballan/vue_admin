/**
 * Created by Allan on 2021/05/11.
 * Contact 84880528@qq.com.
 */
import Vue from 'vue'
import Router from 'vue-router'


// 导入各模块路由配置
import Welcome from './map/welcome'
import Mechanism from './map/mechanism'   //机构中心
import Education from './map/education'   //教务中心
import Website from './map/website'   //网站设置

Vue.use(Router)
// 路由配置列表，注意顺序，NotFound 要定义到最后进行404的匹配拦截
// '...' es6 展开语法，所有数组展开合并成一个新的数组对象
const routes=[
    ...Welcome,
    ...Mechanism,
    ...Education,
    ...Website,
];
export default new Router({
    /*mode:'history',*/
    routes
})

const originalPush = Router.prototype.push
const originalReplace = Router.prototype.replace

Router.prototype.push = function push (location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

Router.prototype.replace = function push (location, onResolve, onReject) {
    if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
    return originalReplace.call(this, location).catch(err => err)
}
