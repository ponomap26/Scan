import React from "react";
import "./Title.css"

export default class Title extends React.Component {
    render() {
        const {type, children, fontSize, lineHeight} = this.props;

        const styles = {
            fontSize: fontSize, 
            lineHeight: lineHeight
        }
        return (
            <React.Fragment>
                {type === "h1" ? <h1 style={styles} className="title">{children}</h1> : <h2 style={styles} className="title">{children}</h2>}
            </React.Fragment>
        )
    }
}
