import React from 'react'
const GOODMORNING=(props)=>{
    console.log(props)
    return (
        <div>
    <h1>Good Morning {props.name}
    {props.children}</h1>
    <img src="Good_morning.jpg" style={{width:100}}></img>
    </div>
    )
    //without JSX
    // return React.createElement(
    //     'div',
    //     // null,
    //     {id:'gm',className:'dummyclass',tagName:'p'},
    //     React.createElement('h1',null,'Good morning')
    // )
}
export default GOODMORNING