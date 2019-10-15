import React from 'react'

const Toggle = () => {
    const [ toggle, setToggle ] = React.useState(true)

    return(
        <div>
            <h1>{toggle ? "hello" : "goodbye"}</h1>
            <button onClick={ () => setToggle(!toggle)}>toggle</button>
        </div>
    )
}

export default Toggle