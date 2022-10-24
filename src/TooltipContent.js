import React from 'react';

export default function TooltipContent(props){

    // destructuring props
    const {position, content} = props;

    return(
        <span class={`tooltiptext ${position}`}>{content}</span>
    )

}