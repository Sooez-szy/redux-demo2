/**
 * Created by Administrator on 2016/11/3.
 */
export const INCREMENT_COUNTER = 'INCRENEBT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

//导出加一的方法
export function increment(){
    return{
        type:INCREMENT_COUNTER
    }
}

export function decrement(){
    return {
        type:DECREMENT_COUNTER
    }
}

export function incrementIfOdd () {
    return (dispatch,getState) => {
        //获取state对象中的counter属性值
        const {counter} = getState()

        //偶数则返回
        if(counter %2 ===0){
            return
        }
        //没有就执行加一
        dispatch(increment())
    }
}

export function incrementAsync(delay = 1000){
    return dispath =>{
        setTimeout(()=>{
            dispath(increment())
        },delay)
    }
}


