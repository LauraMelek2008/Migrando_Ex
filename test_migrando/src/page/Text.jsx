import React from "react";
import { ThemeProvider } from "../ThemeContext";
import { ThemeEffect } from "../ThemeEffect";

function TextContext (){
ThemeEffect()
    return(
<div>
    
</div>
    )

}


function Text (){

    return(
<ThemeProvider>
    <TextContext/>
</ThemeProvider>
    )

}

export default Text;