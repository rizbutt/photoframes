import React, { useState, useRef } from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { Container, Row, Form, Label, Input ,Col} from 'reactstrap';
import { useRouter } from 'next/router';

const Login = () => {
    const [user, SetUser] = useState('gusest');
        
      
    const router = useRouter();
    const loginapi = async(data) => {

         const loginapi = 'http://localhost:8000/api/login';
         const response = await fetch(loginapi, {
             method:'POST',
             body: data,
         });
        const userdetail = await response.json();
        this.setState({user: userdetail, loading: false})
        const  token  = userdetail['token'];
        localStorage.setItem('token', token);
        const isAdmin = userdetail['user_admin'];
        if(isAdmin == 1){
            
            router.push({
                pathname: '/page/admin/dashboard',
            });
        }else{
            router.push({
                pathname: '/page/Picsforframe',
            }); 
        }
    
    }
    const submit = e => {
        e.preventDefault();
       
        let loginfrm = document.getElementById('userlogin');
        const data = new FormData(loginfrm);
        loginapi(data);

    }
    return (
        <CommonLayout parent="home" title="login">
            <section className="login-page section-b-space">
                <Container>
                    <Row>
                        <Col lg="6">
                            <h3>Login</h3>
                            <div className="theme-card">
                                <Form className="theme-form" id='userlogin' name='userlogin' onSubmit={submit}>
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

export default Login;