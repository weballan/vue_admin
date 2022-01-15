/**
 * Created by Allan on 2021/04/28.
 * Contact 84880528@qq.com.
 */
import Vue from 'vue'
import {errHandler, successHandler} from "./config"
import axios from 'axios'
import Qs from 'qs'
Vue.prototype.$axios = axios;  //将axios挂载在Vue实例原型上
axios.defaults.baseURL = '/creditloan-india/';

//axios 请求拦截器，每次请求带上 Authorization.
axios.interceptors.request.use(config => {
        config.headers.Authorization='2342';
        return config;
    },
    err => {
        return Promise.reject(err);
    });
/****
 * @param url         字符串，请求地址
 * @param method      字符串，请求类型，默认为 get 请求
 * @param params      是即将与请求一起发送的 URL 参数，必须是一个无格式对象(plain object)或 URLSearchParams 对象
 * @param data        是作为请求主体被发送的数据，只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
 * @param headers     是即将被发送的自定义请求头  {'X-Requested-With': 'XMLHttpRequest'}
 * @return Promise    返回 resolve 和 reject 状态的 Promise对象
 * *****/

export default (url, {method = 'get', params = null, data = null, headers = {},reqType='form'} = {}) => {
    let contentType='application/x-www-form-urlencoded';
    if(reqType==='json'){
        contentType='application/json'
    }else if (reqType==='file') {
        contentType='multipart/form-data'
    }else{
        data=Qs.stringify(data);
    }
    headers['Content-Type']=contentType+';charset=utf-8';
    return axios({
        method: method,
        url:url+'?t='+new Date().getTime(),
        data:data,
        params:params,
        headers:headers,
        //withCredentials:true,   //表示跨域请求时是否需要使用凭证
        timeout: 10000    //设置超时时间
    }).then(successHandler).catch(errHandler)
};
