import React from "react";

class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
        <img src={this.state.person.picture.large} alt="" />
        <row>
          <p>Name :</p>
          <p>
            {this.state.person.name.title} . {this.state.person.name.first}{" "}
            {this.state.person.name.last}
          </p>
        </row>
      </div>
    );
  }
}
export default FetchRandomUser;
