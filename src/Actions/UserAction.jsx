import axios from "axios";

export const saveUser = (user) => {
    return async(dispatch) => {
        const data = await axios.post('http://localhost:8089/customer/save', user).then((response)=> response.data).catch((error)=> console.log(error));
        
        dispatch({
            type: 'SAVE_USER',
            payload: data
        })
    }
}

export const setUser = (user)=>{
    return {
        type:'SET_USER',
        payload:user
    }
}
