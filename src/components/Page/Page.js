import React from 'react'
import "./Page.css"

const Page = (props) => {
    return (
        <div className="page-container">
            <div className="page-content">{props.children}</div>
        </div>
    )
}

export default Page;
