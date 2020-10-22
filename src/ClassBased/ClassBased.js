import React,{Component} from 'react';


//Function based
// function FucntionName(){
//     return (
//         <div>
//             <p>Something</p>
//         </div>
//     );
// }

//export default FucntionName;


//rending components using props
class ClassName extends Component{
    render(){
        return(
            <div>
                <p>Something 1</p>
            </div>
        )
    }
}

//state is done differently 
//legacy code - Class components 
//must use extend Component or deconstruct 
//Always include a render(){return()}

export default ClassName