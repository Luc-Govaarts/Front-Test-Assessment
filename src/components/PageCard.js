import React from 'react'
import Button from './Button'

export default function PageCard(props) {
    const userId = props.id
    const backgroundColor = props.backgroundColor
    const color = props.color
    return (
        <div style={{backgroundColor: backgroundColor,
                    color: color,
                    width: "350px",
                    height: "300px",
                    float: "left",
                    margin: "20px",
                    padding: "15px",
                    border: "1px solid black",
                    }}>
            <h2>{props.title}</h2>
            <h4>{props.description}</h4>  
            <Button goto={`/pages/${userId}`}
            display={`Visit Page`}/>    
        </div>
    )
}
