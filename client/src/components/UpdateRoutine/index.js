import React from 'react'
import { Redirect } from 'react-router-dom'
import { updateProduct }  from '../../services/apiService'
import Axios from 'axios'


class UpdateProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            update: false
        }
    }

    handleChange = (e) => {
        const currentElement = e.target
        const { name, value } = currentElement
        const newState = {}
        newState[name] = value
        this.setState(newState)
    }



    render() {
        return(
            <div></div>
        )
    }
}
