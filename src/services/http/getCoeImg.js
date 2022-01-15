/**
 * Created by Allan on 2021/04/28.
 * Contact 84880528@qq.com.
 */
import axios from 'axios'
import Vue from "vue";
import store from "@/store/";
//post 请求默认的请求头
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
Vue.prototype.$axios = axios;  //将axios挂载在Vue实例原型上
axios.defaults.baseURL = '/collection-india/';

//axios 请求拦截器，每次请求带上 Authorization.
axios.interceptors.request.use(config => {
        config.headers.Authorization=store.state.user.token;
        return config;
    },
    err => {
        return Promise.reject(err);
    });

export const getCodeImg=function(){
    return axios.get('/captcha.jpg?t='+new Date().getTime(),{
        responseType: 'arraybuffer'
    }).then(response=>{
        return 'data:image/png;base64,' + btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
    })
};

