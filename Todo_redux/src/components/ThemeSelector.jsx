import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../Redux/slices/themeSlice';

function ThemeSelector() {

    const dispatch = useDispatch();

    const theme = useSelector((state) => {
        return state.theme.theme
    })


    return (
        <div>
            <p>theme: {theme}</p>
            <button onClick={() => dispatch(changeTheme())}>change theme</button>
        </div>
    )
}

export default ThemeSelector