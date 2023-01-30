const initialState =[1,3,5,7];
const list = (state=initialState, action)=>{
    switch(action.type){
        case "RANDOM":
        state = [...state, parseInt(Math.random()*10)];
        return state;
        default:
            return state;
    }
    return state;
}
export default list;