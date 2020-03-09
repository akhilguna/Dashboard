import React from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
export default class Login2 extends React.Component {
   /*constructor(props){
       super(props);
       this.state={
        email:"",
        password:"",
        loginErrors:false,
        
    };
    this.onSubmit=this.onSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
   }
   handleChange(event){
    this.setState({
        [event.target.name]:event.target.value,
    });
   }
   
   handleSubmit(event){
    const{
      email,
      password
    } = this.state
    axios.post("http://localhost:3000/",{
        user:{
          email:email,
          password:password,              
        }
    },
        { withCredentials: true}).then(response => {
            console.log("registration res", response);
        })
        .catch(error => {
           console.log("login error",error)
        })
    event.preventDefault();
} 
*/

/*constructor(props) {
    super(props);
    this.state = {

      redirectToReferrer: false,
      password: "",
      email: "",
    };
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.Login = this.Login.bind(this);
    this.onChange = this.onChange.bind(this);
  }


  Login = () => {
    const { email, password } = this.state;
    if (email === 'guna.akhil@mandeeonline.com' && password === '12345') {
      return <Redirect to="/Dashboard" />
    } else {
      alert("user not found")
    }
  }
  login(key, data) {
    debugger
    key.preventDefault();
    const postData = {
      email: this.state.email,
      password: this.state.password
    };
 

    if (postData.email === 'guna.akhil@mandeeonline.com' && postData.password === '12345') {
      this.setState({ redirectToReferrer: true });
    } else {

      alert("password is incorrect")
    }
  } 
 
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleChange(e) {
    localStorage.setItem('myValueInLocalStorage', e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
  }*/
  constructor() {
    super();
    this.state = {
        Email: '',
        Password: '',
        persons: [],
        email:'',
        password:''
    }
    this.Password = this.Password.bind(this);
    this.Email = this.Email.bind(this);
    this.login = this.login.bind(this);
}
Email(event) {
    this.setState({ Email: event.target.value })
}
Password(event) {
    this.setState({ Password: event.target.value })
}
login(event) {
    debugger;
    fetch('http://mis.mandeeonline.com:3000/api/user/current', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Email: this.state.Email,
            Password: this.state.Password
        })
    }).then((Response) => Response.json())
        .then((result) => {
            console.log(result);
            if (result.Status == 'Invalid')
                alert('Invalid User');
            else
                this.props.history.push("/Dashboard");
        })
      }
      componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }
      handleChange = event => {
        this.setState({  email:event.target.value, password:event.target.value});
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
      const user = {
          email:this.state.email,
          password:this.state.password
      };

      axios.post(`http://mis.mandeeonline.com/login`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }
    render(){
        /*if (this.state.redirectToReferrer) {
            return (<Redirect to={'/Dashboard'} />)
          } else if (this.state.redirectToUser) {
            return (<Redirect to={'/'} />)
          }*/
    return (
        <div class="container bg-mandee">
            <h1 class="text-center title">MIS</h1>
             <div class="login-form-container"> 
             <form class="ajax-form" parasails-component="ajax-form" onSubmit={this.handleSubmit} >
                 <div class="form-group"><input type="email" name="email" placeholder="Email address" autocomplete="email" focus-first="" class="form-control input100" onChange={this.Email}/>
                 </div>
                 <div class="form-group"><input type="password" name="password" placeholder="Password" autocomplete="current-password" class="form-control input100"  /></div>
                 <div class="form-group form-check"><input type="checkbox" id="remember" name="rememberMe" class="form-check-input" onChange={this.handleChange}/> 
                  <label for="remember" class="form-check-label">Remember me</label>
                 </div>
                 <div class="form-group"><button type="submit" onClick={this.login} class="button-signup" parasails-component="ajax-button">
                     <span class="button-text">Sign in</span></button>
                </div>
            </form> 
            <p class="text-center">{/*<a href="/password/forgot">Forgot your password?</a>*/} <Link to="/Forgotpassword">Forgot your password</Link></p>
    </div>
    <ul>{ this.state.persons.map(person => <li>{person.name}</li>)}</ul>
    <ul>{ this.state.persons.map(person => <li>{person.username}</li>)}</ul>
    <ul>{ this.state.persons.map(person => <li>{person.address.street}</li>)}</ul>
    {/*<div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="email" name="email" onChange={this.handleChange} />

          </label>
          <label>
            Person Name:
            <input type="password" name="password" onChange={this.handleChange} />

          </label>
          <button type="submit">Add</button>
        </form>
    </div>*/}
    </div>
    );
  }
}