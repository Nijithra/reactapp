import "../css/PropsComponent.css";
function PropsComponent(props){
    // const styleAttrs={
    //     backgroundColor:"red",
    //     color:"white"
    // }
    
    return(
        <div>
            <h2>Hello, {props.name} <br></br>This is {props.course} class</h2>
        </div>
    )
}

export default PropsComponent;