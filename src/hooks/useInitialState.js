import { useState } from "react";
import { initialState } from "../initialState";

export const useInitialState = () => {
    const [state, setState] = useState(initialState)

    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }

    const removeToCart = payload => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id)
        })
    }
    
    const addToBuyer = payload => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        })
    }

    return {
        addToCart,
        removeToCart,
        addToBuyer,
        state
    }
};