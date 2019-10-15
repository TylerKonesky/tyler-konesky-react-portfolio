import React, { Component } from "react";

export default function(props){
    return(
        <div>
           Portfolio detail for: {props.match.params.slug}
        </div>
    )
}