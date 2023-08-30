import React from 'react'
// import Form from '../Form'
// import { useState } from 'react'

const Error = ({err}) => {
    // const [err, setError] = useState(false)

    return (
        <>
            {/* <Form setError={setError}/> */}
            
            {
                err &&
                <div className='error'>
                    No City Found!!!
                </div>
            }
        </>
    )
}

export default Error