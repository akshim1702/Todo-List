import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "fixed",
        width: "100%",
        bottom: "0px",
        marginBottom: '0px',
        marginTop: '0px',
        paddingBottom: '0px',
        paddingTop: '0px'
        }
    

    return (
        <footer className="bg-dark text-light" style={footerStyle}>
            <p className="text-center">
                copyright &copy; huhueheuhe.com
            </p>
        </footer>
    )
}
