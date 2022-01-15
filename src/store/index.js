/*****
 * Created by Allan on 2021/05/19.
 * Contact 84880528@qq.com.
 * *****/
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import tagsview from "./modules/tagsview";
import global from "./modules/global";

Vue.use(Vuex);

//导入modules文件夹下所有的js文件
const modulesFiles = require.context('./modules', true, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
    const value = modulesFiles(modulePath);
    modules[moduleName] = value.default;
    return modules;
}, {});

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production', //在非生产环境下，使用严格模式
    modules:{
        user,
        tagsview,
        global,
    }
})
