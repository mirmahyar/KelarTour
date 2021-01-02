import React, { Component } from 'react'

const TourContext = React.createContext();


 class TourProvider extends Component {
    state= {};
    render() {
        return (
           <TourContext.Provider value={"hello"}>
            {this.props.children}
           </TourContext.Provider>
        )
    }
}

const TourConsumer = TourContext.Consumer;

export {TourProvider, TourConsumer, TourContext}
