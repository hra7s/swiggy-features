import React from "react"


export class UserClass extends React.Component {
constructor(props){
    super(props);
    console.log(props)

}

render() {
    return (
    <div className="border-2 border-green-400 p-4 m-4 text-center">
        <h2>
            Name: {this.props.name}
        </h2>
        <h3>Location: Delhi</h3>
        <h4>Contact: 123445</h4>
    </div>
    )
  }
}

export default UserClass