function ColumnWidth2(props){
    return(
        <div className={"col-sm-2 "+props.className}>{props.children}</div>
    )
}
export default ColumnWidth2;