import React, {useEffect} from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { Container, Row, Form, Label, Input ,Col} from 'reactstrap';
import { useRouter } from 'next/router';
//import { Redirect } from "react-router-dom";
import { Router, Route, Redirect } from "react-router-dom";



// function Redirect({to}) {
//     const router = useRouter();
//     //const history = useHistory();
//     //console.log(to);
//     useEffect(()=>{ 
//         router.push(
//             {to}
//         )
//     }, [{to}]);
    
//     return null;
// }
class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {loading: false, user: []  };
               
        this.handleSubmit = this.handleSubmit.bind(this);
        this.userLogin = this.userLogin.bind(this);
       
        
      }
      state = {
        user: [],
        loading: true
    }
      

      async userLogin (data) {
        const { username, password } = this.state;
        const { history } = this.props;
        const loginapi = 'http://localhost:8000/api/login';
        const response = await fetch(loginapi, {
            method:'POST',
            body: data,
        });
        const userdetail = await response.json();

        
       
        if(!this.state.user['user_admin']){
            //console.log(this.props.user);
             localStorage.setItem("user", "admin");
             localStorage.setItem("token", this.state.user['access_token'] );
          
        }
        localStorage.setItem("user", "admin");
        localStorage.setItem("token", this.state.user['access_token'] );
        
      }



      handleSubmit(e) {
        e.preventDefault();
       
        let loginfrm = document.getElementById('userlogin');
        const data = new FormData(loginfrm);
        this.userLogin(data);

    }
    

      render(){
        
        console.log(this.state.user)
          return(
              
            <CommonLayout parent="home" title="login">

            <section className="login-page section-b-space">
                <Container>
                    <Row>
                        <Col lg="6">
                            <h3>Login</h3>
                            <div className="theme-card">
                                <Form className="theme-form" id='userlogin' name='userlogin' onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <Label for="email">Email</Label>
                                        <Input type="text" className="form-control" id="email" name="email" placeholder="Email" required="" />
                                    </div>
                                    <div className="form-group">
                                        <Label for="review">Password</Label>
                                        <Input type="password" className="form-control" name="password" id="password"
                                            placeholder="Enter your password" required="" />
                                    </div><input type="submit" className="btn btn-solid" name="Login" />
                                </Form>
                            </div>
                        </Col>
                        <Col lg="6" className="right-login">
                            <h3>New Customer</h3>
                            <div className="theme-card authentication-right">
                                <h6 className="title-font">Create A Account</h6>
                                <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be
                            able to order from our shop. To start shopping click register.</p><a href="/page/register"
                                    className="btn btn-solid">Create an Account</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
          )
      }
}

export default Login;