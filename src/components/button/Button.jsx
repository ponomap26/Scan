import React from "react";
import "./Button.css";

export default class Button extends React.Component {
    render() {
        const {type, stylization, children, disabled} = this.props;
        return(
            <React.Fragment>
                <button type={type} className={"button" + " " + stylization} disabled={disabled}>{children}</button>
            </React.Fragment>
        )
    }
}