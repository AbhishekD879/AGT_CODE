const initialState='creatAccount'
let close=(state)=>{
    if(state==='creatAccount'){
       return state='signIn'
    }else if(state==='signIn'){
        return state='creatAccount'
    }
        
    
}
let creatAccountStatus=(state=initialState,action)=>{
    switch(action.type){
        case 'CREATE_ACCOUNT':{return(state=close(state))}
         default : return state
    }
}
export default creatAccountStatus;