/*****
 * Created by Allan on 2022/01/05.
 * Contact 84880528@qq.com.
 * 全局方法的存储
 * *****/
export default{
    state:{
        open:true,  //左边菜单是否展开和收缩
        passwordVisible:false,
    },
    //Getter 接受 state 作为其第一个参数,可以接受其他 getter 作为第二个参数
    getters:{
        open:state=>state.open,
        passwordVisible:state=>state.passwordVisible,
    },
    //state 作为第一个参数
    mutations:{
        setOpen(state){
            state.open = !state.open;
        },
        setPasswordVisible(state){
            state.passwordVisible=!state.passwordVisible;
        },
    },
    //Action 提交的是 mutation，而不是直接变更状态
    actions:{
        getOpen({ commit },open){
            commit('setOpen',open);
        },
        getPasswordVisible({ commit },passwordVisible){
            commit('setPasswordVisible',passwordVisible)
        },
    },
}
