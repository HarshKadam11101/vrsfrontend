export const UserReducer=(user = '',action) =>{
    switch(action.type){
        case 'SAVE_USER':
            user=action.payload;
            console.log(action.payload);
        console.log("Error");
        return (user);
        case 'SET_USER':
            user=action.payload;
            localStorage.setItem('user',user);
            return(user);
        default :
        localStorage.getItem('user');
        return(user);
    }
}