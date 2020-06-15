import React from 'react'

export default function PageCard(props) {
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
        </div>
    )
}
