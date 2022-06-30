import axios from "axios";
import React, { useState, useEffect, ReactElement } from "react"
import { IUser } from "./cmps/UserInfo";

export const CurrentUserLoader = ({children}: any) => {
    
    const [ user, setUser ] = useState(null);

    useEffect(()=>{
            (async () => {
                const response = await axios.get('/current-user')
                setUser(response.data)
            })();
    },[])

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