/*****
 * Created by Allan on 2022/01/05.
 * Contact 84880528@qq.com.
 * *****/
import Vue from 'vue'
import router from '@/router/'
export default{
    state:{
        userInfo:JSON.parse(localStorage.getItem('userInfo')) || {},  //用户信息
    },
    //Getter 接受 state 作为其第一个参数,可以接受其他 getter 作为第二个参数
    getters:{
        userInfo:state=>state.userInfo,
    },
    //state 作为第一个参数
    mutations:{
        setUserInfo(state,data){
            localStorage.setItem('userInfo',JSON.stringify(data));
            state.userInfo=data;
        },
    },
    //Action 提交的是 mutation，而不是直接变更状态
    actions:{
        getUserInfo({ commit },data){
            commit('setUserInfo',data);
        },
    },
}
