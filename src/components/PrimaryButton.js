import React, { Fragment } from 'react';
import { Button } from "@material-ui/core";
import { withStyles} from '@material-ui/core/styles';

const Btn = withStyles( theme => ({ 
    root : {
        padding: "12px 50px",
        border: "none",
        borderRadius: "0",
        outline: "none",
        background: "white",
        color: "#36CA8E",
        boxShadow: "0 10px 30px -5px rgba(54, 202, 142, .16)",
        marginTop: "40px",
        "&:hover" : {
            background: "#36CA8E",
            color: "white"
        }
    }
}))(Button);

const InvertedBtn = withStyles( theme => ({ 
    root : {
        padding: "12px 50px",
        border: "none",
        borderRadius: "0",
        outline: "none",
        background: "#36CA8E",
        color: "white",
        boxShadow: "0 10px 30px -5px rgba(54, 202, 142, .16)",
        marginTop: "40px",
        "&:hover" : {
            background: "white",
            color: "#36CA8E"
        }
    }
}))(Button);

function PrimaryButton( { text, inverted }){
    return (
        <Fragment>
            { inverted ? <InvertedBtn>{text}</InvertedBtn> : <Btn>{text}</Btn>}
        </Fragment>
    )
}

export default PrimaryButton;
