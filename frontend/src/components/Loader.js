import React from 'react'
import { Spinner } from "react-bootstrap";

function Loader() {
    return (
        <Spinner
            animation='border' 
            role='status'
            style={{
                height:'100px',
                widows:'100px',
                margin:'auto',
                display:'block'
            }}
        >
            <span className='sr-only'>Carregando...</span>
        </Spinner>
    )
}

export default Loader
