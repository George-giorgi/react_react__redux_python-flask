const full_responsive =
    {
        exchangeHover: false,
        burgerClick: false
    }

const responsive = (state = full_responsive, action)=>{
    switch(action.type){
        case "change":
            
            const new_state= {
                ...state,
                exchangeHover: !state.exchangeHover
            }
            
            return new_state

        case "changeExlist":
            const new_state_exlist = {
                ...state,
                exchangeHover: !state.exchangeHover,
                burgerClick: !state.burgerClick
            }
            return new_state_exlist
        case "reset":
            const reset_state = {
                ...state,
                exchangeHover: false,
                burgerClick: false
            }

            return reset_state
        default:

            return state
    }
}

export {responsive}