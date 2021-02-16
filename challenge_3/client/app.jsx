class App extends React.Component {
  constructor(props) {
    super(props);
    //TODO: STATE
  }

  // handleClickOnCheckout = this.handleClickOnCheckout.bind(this);

  //create function to handle click on 'checkout' button
  handleClickOnCheckout(e) {
    e.preventDefault();
    console.log('Clicked on checkout!!');
  }

  //create function to handle click on 'next' button


  //create function to handle click on 'purchase' button



  render() {
    return (
      <div>
        <h1>Form 1</h1>
        <h2>Please enter the following information: Name, email, and password</h2>
        <form>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name"></input>
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email"></input>
          </div>
          <div>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password"></input>
          </div>
          <input type="submit" value="Checkout" onClick={this.handleClickOnCheckout}></input>
        </form>
      </div>
    )
  }
  //create functional component for F1

}

ReactDOM.render(< App/>, document.getElementById('app'));
