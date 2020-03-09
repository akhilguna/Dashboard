import React from "react";
import {Link, Redirect} from "react-router-dom";

export default class Forgotpassword1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          redirectToReferrer: false,
          email: "",
        };
        this.Forgotpassword = this.Forgotpassword.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.forgotpassword = this.forgotpassword.bind(this);
        this.onChange = this.onChange.bind(this);
      }
    
    
      Forgotpassword = () => {
        const { email } = this.state;
        if (email === 'guna.akhil@mandeeonline.com') {
          return <Redirect to="/Signin"/>
        } else {
          alert("user not found")
        }
      }
      forgotpassword(key, data) {
        debugger
        key.preventDefault();
        const postData = {
          email: this.state.email,
        };
     
    
        if (postData.email === 'guna.akhil@mandeeonline.com') {
          this.setState({ redirectToReferrer: true });
        } else {
          alert("email not found")
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
      }
    render(){
        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/Signin'} />)
        } else if (this.state.redirectToUser) {
            return (<Redirect to={'/'} />)
        }
    return (
        <div class="container bg-mandee">
        <div class="forgot-form col-md-12 mt-5">
            <p class="text-center forgot-password-title">Enter your email address below to reset the password for your account.</p>
            <div class="forgot-password-container">
            <form class="ajax-form " parasails-component="ajax-form" onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <input type="email" name="email" placeholder="sturgeon@example.com" autocomplete="email" focus-first="" class="form-control input100" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="button-signup" parasails-component="ajax-button">
                          <span class="button-text">Send reset link</span>
                        </button>
                    </div>
                    <p class="text-center">{/*<a href="/login">Back to login</a>*/}<Link to="Signin">Signin</Link></p>
            </form>
            </div> 
        </div>
       </div>
    );
  }
}
