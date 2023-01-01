// import React , {Component} from 'react';

// class Welcome extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>Welcome {this.props.name}</h1>
//             </div>
//         )
//     }
// }

// export default Welcome;





// this can be return using clss destructuring method


import React , {Component} from 'react';

class Welcome extends Component{
    render(){
        const {name} = this.props;
        return(
            <div>
                <h1>Welcome {name}</h1>
            </div>
        )
    }
}

export default Welcome;