function ColumnWidth3(props){
    return(
        <div className={"col-sm-3 "+props.className}>{props.children}</div>
    )
}
export default ColumnWidth3;