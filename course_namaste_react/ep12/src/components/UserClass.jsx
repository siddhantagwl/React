import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  // the first thing when class loads is a constructor is called
  // then a render is called
  constructor(props) {
    super(props);

    // state is a reserved keyword
    // and this is how variables are
    // declared inside a big state object
    this.state = {
      count: 0,
      userInfo: {
        name: "dummy",
        location: "dummy",
        avatar_url: "avatar",
      },
      //   count2: 2,
    };
    console.log(this.props.name + "constructer called");
  }

  // this function can be made async to call APIs
  async componentDidMount() {
    console.log(this.props.name + "componentDIdMount called");
    // API calls will be made there like useEffectt
    const data = await fetch("https://api.github.com/users/siddhantagwl");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    console.log(this.props.name + "render called");
    return (
      <div className="user-card">
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            // this is NOt HOW TO use.
            // never update state varibles directly
            // this.state.count += 1;

            // CORRECT way
            // react gives setState - which takes in object and in that
            // you will update the count
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increment Count
        </button>

        {/* <h1>Count2: {this.state.count2}</h1> */}
        <img src={this.state.userInfo.avatar_url}></img>
        <h2>Name: {this.state.userInfo.name}</h2>
        <h3>Location: {this.state.userInfo.location}</h3>
        <h3>Contact: siddhantagwl</h3>
        <div>
          LoggedInUser:
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default UserClass;
