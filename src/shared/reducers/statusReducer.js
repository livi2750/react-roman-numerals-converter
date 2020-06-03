
const statusReducers = (state = '...', action) =>{
    switch(action.type){
        case 'CALCULATE':
            return state = 'Convertion Done'
        case 'DONE':
            return state ='...'
        default:
            return state;
    }
}

export default statusReducers;