/**
 * Created by Allan on 2021/04/28.
 * Contact 84880528@qq.com.
 */
import { MessageBox } from 'element-ui';
import store from '@/store/'

/*****
 * 处理 http 成功状态
 * @param  axios response 对象
 * @return 成功状态下返回data 数据，如果包含错误信息，则将后台返回的完整的错误信息 reject 出去。{code:'401', message:'这是一个错误', errors:[] }.
 * *****/
const successHandler = response =>{
    var code = response.data.code;
    if(code==='000000'){
        //从respons header获取最新token并跟印象
        let token = response.headers['authorization'];
        if(token){
            store.dispatch('USER_SIGNIN',{token:token});
        }
        //success
        return Promise.resolve(response.data);
    }else if(code==='999998'){
        return store.dispatch('USER_SIGNOUT');
    } else if(code === '402') {
        return store.dispatch('USER_SIGNOUT');
    }
    return Promise.reject(response.data);

};


/*****
 * 处理http 失败状态
 * @param  axios error ,处理不同错误时的错误消息，确保返回出去为统一的格式。方便处理
 * @return 将完整的错误信息 reject 出去 {code:'401', message:'这是一个错误', errors:[] }
 * *****/
const errHandler = (error) => {
    console.log('请求到error',error)
    // 浏览器返回的错误在 error.response 里面获取，服务器返回的提示信息 直接包含在 error 里面。

    if (error.code) {
        if(error.code === '500'){
            return Promise.reject({code:500,message:'服务器内部错误，请刷新重试！'});
        } else if(error.code==='404'){
            return Promise.reject({code:404,message:'数据接口不存在，请联系管理员！'})
        }

        return Promise.reject({code:error.response.status,message:error.response.statusText});
    }

    return Promise.reject(error);

};

export  { successHandler, errHandler };
