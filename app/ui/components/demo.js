
export default function Demo(props){
    return(
        <div className={`${props.cssclasses}`} id={`${props.id}`}>
            {props.title}
        </div>
    )
}