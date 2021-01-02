import React, { Component } from 'react'
import {TourContext} from '../context'

export default class FeaturedTours extends Component {
    static contextType = TourContext
    render() {
        const value = this.context;


        return (
            <div>
                hello from Featured Tours {value}
            </div>
        )
    }
}
