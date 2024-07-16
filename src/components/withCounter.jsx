import React, {useState} from 'react';

const withCounter = (WrappedComponent, incrementNumber) => {
    const NewComponent = (props) => {
        const [count, setCount] = useState(0);
        const incrementCount = () => {
          setCount(count + incrementNumber);
        };

        //  console.log("name", props.name); // Amit

        return (
          <WrappedComponent
            count={count}
            incrementCount={incrementCount}
            {...props}
          />
        );
    }
    return NewComponent;
}

export default withCounter;



// Class Component

// import React from 'react';

// const UpdatedComponent = (OriginalComponent) => {
//     class NewComponent extends React.Component {
//         constructor(props) {
//             super(props);
//             this.state = {
//                 count: 0
//             }
//         }

//         incrementCount = () => {
//             this.setState(prevState => {
//                 return {count: prevState.count + 1}
//             })
//         }

//         render() {
//             return <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} />
//         }
//     }
//     return NewComponent;
// }

// export default UpdatedComponent;