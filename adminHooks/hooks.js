import React from "react"

export default {
    logo: () => {
        console.log("Logo hooks loaded")
    },
    pages: () => {
        console.log("Pages hooks loaded")
        window.React = React;
        return []
    }
}