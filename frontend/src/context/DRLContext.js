import {createContext, useReducer} from 'react'

export const DRLContext = createContext();

export const drlReducer = (state, action) => {
    switch(action.type) {
        case 'SET_ALL_DRL':
            return {
                allDRL: action.payload
            }
        case 'SET_ONE_DRL':
            return {
                allDRL: action.payload
            }
        case 'CREATE_DRL':
            return {
                allDRL: [action.payload, ...state.allDRL]
            }
        default:
            return state
    }
}

export const DRLContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(drlReducer, {
        allDRL: null
    });

    

    return (
        <DRLContext.Provider value={{...state, dispatch}}>
            {children}
        </DRLContext.Provider>
    )
}