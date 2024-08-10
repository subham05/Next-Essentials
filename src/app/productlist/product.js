"use client"
 export default function Product(props){
    return (
        <div>
            <button onClick={()=> alert(props.price)}>Click Me</button>
        </div>
    )
 }