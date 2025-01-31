import User from "../components/User";
import UserClass from "../components/UserClass";

import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor")
  }

  componentDidMount() {
    // console.log("Parent componentDidMount")
  }
  render() {
    // console.log("Parent render")

    return (
      <div>
        <h1>About Us Page Component</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1 className="font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <UserClass name={"muhajir from class"} location={"Madurai"} />
      </div>
    );
  }
}

export default About;
