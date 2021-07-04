import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from '../signin/Signin'
const cloud = () => {

    return (
        
        <div>
            {<SignIn/>}

            <div class="grids">
                <div class="left"></div>
                <div class="right"></div>
            </div>

        </div>
    )
}

export default cloud
