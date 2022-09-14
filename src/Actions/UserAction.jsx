import axios from "axios";

export const saveUser = (userName, password) => {
    return async(dispatch) => {
        const response = await axios.post('http://localhost:8089/customer/save',{
            userName: userName,
            password: password
        });
        
        dispatch({
            type: 'SAVE_USER',
            payload: response.data
        })
    }
}

export const setUser = (user)=>{
    return {
        type:'SET_USER',
        payload:user
    }
}
