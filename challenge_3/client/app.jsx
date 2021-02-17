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
      }
    }
  }

  // handleClickOnCheckout = this.handleClickOnCheckout.bind(this);

  //create function to handle click on 'checkout' button
  handleClickOnCheckout(e) {
    e.preventDefault();
    console.log('Clicked on checkout!!');
    var formData = document.getElementById("nameForm");
    //create the data object to be passed to server
    var fd = {
      'name': formData.elements[0].value,
      'email': formData.elements[1].value,
      'password': formData.elements[2].value
    };
    //send post request with data from form
    axios.post('/newUser', fd)
      .then((response) => {
        console.log('success!', response);
        return response.json();
      })
      .then((results) => {
        console.log('RESULTS', results);
        ////add the data to state of the app
        this.setState({
          currentUser : {
            name: data.config.data.name,
            email: data.config.data.email,
            password: data.config.data.password
          }
        });
        console.log(this.state);
      });
        //upon success of the post request, bring the user to the next page in the checkout cycle
  }

  //create function to handle click on 'next' button


  //create function to handle click on 'purchase' button



  render() {
    return (
      <div>
        <h1>Form 1</h1>
        <h2>Please enter the following information: Name, email, and password</h2>
        <div>
          <form id="nameForm">
            <div>
              <label htmlFor="name">Name: </label>
              <input type="text" id="name" name="name" required></input>
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input type="email" id="email" name="email" required></input>
            </div>
            <div>
              <label htmlFor="password">Password: </label>
              <input type="password" id="password" name="password" required></input>
            </div>
            <input type="submit" value="Checkout" onClick={this.handleClickOnCheckout}></input>
          </form>

        </div>

      </div>
    )
  }
  //create functional component for F1

}

ReactDOM.render(< App />, document.getElementById('app'));
