const StyledText = (props) => {
    return (
        <div style={{
            width: "500px",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "gray",
            borderRadius: "20px"
        }}>
        <p style={{color: props.color, textTransform: "uppercase"}}>{props.text}</p>
        </div>

    )
}

export default StyledText