import { ADD_POST } from "../Type";

const initialState={
    Post_Details:[]
}

const PostReducer = (state=initialState,action) => {
    switch (action.type) {
        case ADD_POST:
            var list = state.Post_Details;
            list.push(action.payload)
        return{
            ...state,
            Post_Details:list
        }
        default:
            return state

        }

    }

export default PostReducer