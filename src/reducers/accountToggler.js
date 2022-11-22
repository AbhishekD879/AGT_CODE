const initialState='close'
let close=(state)=>{
    if(state==='close'){
       return state='open'
    }else if(state==='open'){
        return state='close'
    }
        
    
}
let accountclose=(state=initialState,action)=>{
    switch(action.type){
        case 'ACCOUNT_TOGGLE':{return(state=close(state))}
         default : return state
    }
}
export default accountclose;