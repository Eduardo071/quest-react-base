const Button = (props) => {
    return (
        <button
            style={
                {
                    width: "150px", height: "35px", backgroundColor: "cornflowerblue", borderStyle: "none", borderRadius: "8px"
                }
            }
            onClick={
                () => {
                    alert('A label desse botão é ' + props.label)
                }
                
            }
        >{props.label}</button>
    )
}



Button.defaultProps = {
    label: 'Clique aqui'
}

export default Button