import axios from "axios";
import React, { useState, useEffect } from "react"

export const ReourceLoader = ({ resourceUrl, resourceName,children}: any) => {
    
    const [ state, setState ] = useState(null);

    useEffect(()=>{
        (async () => {
                const response = await axios.get(resourceUrl)
                setState(response.data)
            })();
    },[resourceUrl])

    return(
        <>
        {
            React.Children.map(children, child => {
                if(React.isValidElement(child)){
                    return React.cloneElement<any>(child, { [resourceName]: state });
                }
                return children;
            })
        }
        </>
    )

}