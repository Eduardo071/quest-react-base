const Box = (props) => {
   return(
    <div style={{
        width: "500px",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
        borderRadius: "20px"
    }}>{props.itens}</div>
   ) 
} 

export default Box