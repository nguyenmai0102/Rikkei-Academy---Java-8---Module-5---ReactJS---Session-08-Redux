const initialState = 0;
const count = (state=initialState,action) => {
    console.log(action.payload);
    console.log(action.type);
    // xử lý nhận vào action và state cũ ==> cập nhập state ==> trả ra state mới
    switch(action.type){
        case "COUNT_UP":
            state +=action.payload;
            return state;

        case "COUNT_DOWN":
            state -= action.payload;
            return state;
        default:
            return state;
    }
}
export default count;