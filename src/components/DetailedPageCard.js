import React from 'react'

export default function DetailedPageCard(props) {
    return  <div style={{backgroundColor: props.backgroundColor,
                        color: props.color,
                        margin: "20px",
                        padding: "15px",
                        border: "1px solid black",
                        }}>
                <h1>{props.title}</h1>
                <p>{props.description}</p> 
            </div>
}