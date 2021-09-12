
const apiUrl = "https://randomuser.me/api/?results=1";

export const AddNew = (state , payload)=>{
    console.log("Add Action  ")
  
    state.push(payload) ;
    return  state;
  }




export const deleteUser = (state , payload)=>{
    console.log("Delete Action")
    const isPresent  = (el) => el.login.uuid == payload.login.uuid;
    const index = state.findIndex(isPresent)
    console.log("isPresent",index);
    if(index >= 0){
         state.splice(index,1);
    }    
    return  state;
  }

export const updateUser = (state, payload)=>{
    console.log("Update Action")
    state[0] = payload;
    return state;
}