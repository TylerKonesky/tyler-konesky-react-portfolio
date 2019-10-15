import React, { useState, useEffect} from "react"

const Clock = () => {
    const [time, setTime] = useState(new Date())

    useEffect( ()=> {
        let second = setInterval( () => setTime(new Date()), 1000)
        return () => clearInterval(second)
    }, [] )

    return(
        <div>
            <h1>{time.toLocaleTimeString()}</h1>
        </div>
    )
}

export default Clock