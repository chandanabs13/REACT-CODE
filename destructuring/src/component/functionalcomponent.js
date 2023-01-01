import React from 'react';

// const Greet = (props) => {
//     return <h1>Hello {props.name} welcome to {props.company}</h1>;
// }

// export default Greet;





// the above functional component can be return usinf destructuring 
// 1st way of destructuring

// const Greet = ({name,company}) => {
//     // const {}
//     return (
//         <divv>
//     <h1>Hello {name} welcome to {company}</h1>
//     </divv>
//     )
// }

// export default Greet;








// 2nd way of destructuring


const Greet = (props) => {
    const {name,company} = props;
    return (
        <divv>
    <h1>Hello {name} welcome to {company}</h1>
    </divv>
    )
}

export default Greet;
