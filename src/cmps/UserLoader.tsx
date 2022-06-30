import axios from "axios";
import React, { useState, useEffect } from "react"

export const UserLoader = ({ userId, children}: any) => {
    
    const [ user, setUser ] = useState(null);

    useEffect(()=>{
        (async () => {
                const response = await axios.get(`/users/${userId}`)
                setUser(response.data)
            })();
    },[userId])

    return(
        <>
        {
            React.Children.map(children, child => {
                if(React.isValidElement(child)){
                    return React.cloneElement<any>(child, { user });
                }
                return children;
            })
        }
        </>
    )

}