import React from 'react'
import moment from "moment";

export default function Story(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.content}</p>
            <img src={props.url} width="400" height="400"></img>
            <p>{moment(props.createdAt).format("DD-MM-YYYY")}</p>
        </div>
    )
}
