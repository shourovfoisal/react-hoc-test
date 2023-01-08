import React, { useState } from 'react'

const withCounter = (OriginalComponent) => {
    
    // class NewComponent extends React.Component {
        
    //     state = {
    //         count: 0
    //     }
        
    //     incrementCount = () => {
    //         this.setState(prevState => {return { count: prevState.count + 1 }})
    //     }
        
    //     render() {
    //         return <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} />
    //     }
        
    // }
    
    const NewComponent = () => {
        const [count, setCount] = useState(0);
        
        const incrementCount = () => {
            setCount(prev => prev + 1)
        }
        
        return <OriginalComponent count={count} incrementCount={incrementCount} />
         
    }
    
    return NewComponent
}

export default withCounter