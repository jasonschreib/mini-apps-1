//class component for the entire app
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      currentUser : {
        name: '',
        email: '',
        password: '',
        line1: '',
        line2: '',
        city: '',
        state: '',
        zip: '',
        phone: 0,
        creditCard: 0,
        expiration: '',
        cvv: 0,
        zip: 0
      },
      currentPage : 0
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClickOnCheckout = this.handleClickOnCheckout.bind(this);
    this.handleClickOnNext = this.handleClickOnNext.bind(this);
  }

  //create function to handle change on a form input
  handleInputChange(event) {
    var name = event.target.name;
    var value = event.target.value;
    console.log('VAL', value);
    this.setState( ({
      currentUser : {
        ...this.state.currentUser,
        [name] : value
      }
    }), () => {
      console.log('STATE USER', this.state.currentUser);
    });
  }

  //create function to handle click on 'checkout' button
  handleClickOnCheckout(e) {
    e.preventDefault();
    console.log('Clicked on checkout!!');
    //send post request with data from form
    // axios.post('/newUser', fd)
    //   .then((response) => {
    //     console.log('success!', response);
    //     return response.json();
    //   })
    //   .then((results) => {
    //     console.log('RESULTS', results);
    //   });
    //set state of currentPage to 1
    this.setState({
      currentPage: 1
    })
  }

  //create function to handle click on 'next' button
  handleClickOnNext(event) {
    event.preventDefault();
    console.log('Clicked on the next button');
    //increment the state by one
    this.setState((state) => ({
      currentPage : state.currentPage + 1
    }), () => {
      //console.log the state
      console.log('STATE', this.state);
    });
  }

  //create function to handle click on 'purchase' button

  /*
  Current page with state
  1) create method for checkout button - starting the form
  2) grab each field and make sure it's in state
  3) separate different forms into different components
  */

  render() {
    //determine which page to render based on state
    return (
    <div>
      Hey there!!
      {/* if the state is 0, then render the original checkout page (no form data) and pass in handleClickOnCheckout */}
      {this.state.currentPage === 0 ? <Homepage handleClickOnCheckout={this.handleClickOnCheckout} /> : null}
      {/* if the state is 1, then render the f1 page and pass in handleClickOnNext */}
      {this.state.currentPage === 1 ? <F1 currentUser={this.state.currentUser} handleClickOnNext={this.handleClickOnNext} handleInputChange={this.handleInputChange}/> : null}
      {/* if the state is 2, then render the f2 page and pass in handleClickOnNext */}
      {this.state.currentPage === 2 ? <F1 currentUser={this.state.currentUser} handleClickOnNext={this.handleClickOnNext} handleInputChange={this.handleInputChange}/> : null}
      {/* if the state is 3, then render the f2 page and pass in handleClickOnNext */}
      {/* if the state is 4, then render the f3 page and pass in handleClickOnNext */}

    </div>
    )
  }

}


/*************** Components ****************/



//create functional component for Homepage (checkout) page
var Homepage = (props) => {
  return (
    <div>
      <input type="submit" value="Checkout" onClick={props.handleClickOnCheckout}></input>
    </div>
  )
}

//create functional component for F1
var F1 = (props) => {
  return (
    <div>
      <h1>Form 1</h1>
      <h2>Please enter the following information: Name, email, and password</h2>
      <div>
        <form id="nameForm">
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" value={props.currentUser.name} onChange={props.handleInputChange} required></input>
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" value={props.currentUser.email} onChange={props.handleInputChange} required></input>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password" value={props.currentUser.password} onChange={props.handleInputChange} required></input>
          </div>
          <input type="submit" value="Next" onClick={props.handleClickOnNext}></input>
        </form>
      </div>
    </div>
  )
}

//create functional component for F2


//create functional component for F3


//create functional component for Summary page


ReactDOM.render(< App />, document.getElementById('app'));
