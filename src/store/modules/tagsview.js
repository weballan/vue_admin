/*****
 * Created by Allan on 2021/04/27.
 * Contact 84880528@qq.com.
 * *****/
export const ADD_TAGS='ADD_TAGS';
export const REMOVE_TAGS='REMOVE_TAGS';
export const CLEAR_TAGS='CLEAR_TAGS';
export default{
    state:{
        tagList: [

        ]
    },
    //Getter 接受 state 作为其第一个参数,可以接受其他 getter 作为第二个参数
    getters:{
        tagList:state=>state.tagList,
    },
    //state 作为第一个参数
    mutations:{
        [ADD_TAGS](state, route){
            const index = state.tagList.findIndex(item => item.path == route.path);
            if(index===-1){
                state.tagList.push({
                    ...route
                })
            }
        },
        [REMOVE_TAGS](state, path){
            const index = state.tagList.findIndex(item => item.path === path);
            state.tagList.splice(index, 1);
        },
        [CLEAR_TAGS](state, data){
            state.tagList=[

            ];
        },
    },
    //Action 提交的是 mutation，而不是直接变更状态
    actions:{
        [ADD_TAGS]({ commit },route){
            commit(ADD_TAGS,route);
        },
        [REMOVE_TAGS]({ state, commit }, path){
            return new Promise((resolve, reject) => {
                commit(REMOVE_TAGS, path);
                resolve(state.tagList);
            });
        },
        [CLEAR_TAGS]({ commit }){
            commit(CLEAR_TAGS);
        }
    },
}
