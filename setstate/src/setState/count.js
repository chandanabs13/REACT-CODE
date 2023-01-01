import React, {Component} from 'react';

class Count extends Component{
    
        constructor() {
            super()
            this.state = {
                count : 0
            }
        }






//   this will begins count from 0 in comsole becase call back function is called before the state is set
        // Increment(){
        //     this.setState(
        //         {
        //            count :  this.state.count + 1
        //         }
        //     )
        //     console.log(this.state.count)
        // }









// to start with 1 give another parameter to seState function that is call back parameter(the call back function is a arrow function)

// Increment(){
//     this.setState(
//         {
//            count :  this.state.count + 1
//         }, 
//         () => {
//             console.log('call back value',this.state.count)
//         }
//     )
//     console.log(this.state.count)
// }









// for complicated function we cannot use current state (this.state.count) for that we need to use previous state (prevState.count)


Increment(){
    this.setState((prevState) => ({
        count : prevState.count + 1
    }))
    console.log(this.state.count)
}
        

incrementfive(){
    this.Increment();

this.Increment();

this.Increment();

this.Increment();

this.Increment();
}




        render(){
            return(
                <div>
                    <div>Count = {this.state.count}</div>
                    <button onClick={() => this.incrementfive()}>Increment</button>
                </div>

            )
            
        }
    



}
export default Count;