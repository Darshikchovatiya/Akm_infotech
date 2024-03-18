export const LoginAs = (lo_data, show_data) => {
    return dispatch => {
        let check = 0;
        show_data.map((sd)=>{
            if(sd.email == lo_data.email && sd.password == lo_data.password){
                check = 1;
            }

        })

        if(check == 0){
            dispatch(login_err());
        }
        else{
            dispatch(login_suc(lo_data));
        }
    }
}


const login_suc = (lo_data) => {
    return {
        type: 'loginSuc',
        payload: lo_data 
    }   
}


const login_err = () => {
    return {
        type: 'loginErr'
    }   
}




export const SignupAs = (data) => {
    return {
        type: 'sign_up',
        payload: data
    }
}


