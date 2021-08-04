import React, { useState, useRef } from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { Input, Container, Row, Form, Label ,Col} from 'reactstrap';
import { delBasePath } from 'next/dist/next-server/lib/router/router';
import { useRouter } from 'next/router';


const Register = (props) => {
    const [user, setUser] = useState(props.user)
    const register = useRef(null);
    const router = useRouter();
   const registerdayat = async (data) =>{
    const registerapi = 'http://localhost:8000/api/register';
    const response = await fetch(registerapi, {
        method:'POST',
        body: data,
    });
    const userdetail = await response.json();
    console.log(userdetail);
    router.push({
        pathname: '/page/Picsforframe',
    });
}
    const submit = e => {
        e.preventDefault();
       
        let registerfrm = document.getElementById('userigester');
        const data = new FormData(registerfrm);
        registerdayat(data);

    }
    return (
        <CommonLayout parent="home" title="register">
            <section className="register-page section-b-space">
                <Container>
                    <Row>
                        <Col lg="12">
                            <h3>create account</h3>
                            <div className="theme-card">
                                <Form className="theme-form" id='userigester' name='userigester' ref={register}  onSubmit={submit}>
                                    <Row>
                                        <Col md="6">
                                            <Label for="email">Name</Label>
                                            <Input type="text" name="name" defaultValue={register.name} className="form-control" id="name" placeholder="Name"
                                                required="" />
                                        </Col>
                                        <Col md="6">
                                        <Label for="email">email</Label>
                                            <Input type="text" name="email" defaultValue={register.email} className="form-control" id="email" placeholder="Email" required="" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6">
                                        <Label for="review">Password</Label>
                                            <Input type="password" name="password" defaultValue={register.password} className="form-control" id="password"
                                                placeholder="Enter your password" required="" />
                                            
                                        </Col>
                                        <Col md="6">
                                            <Label for="review">Confirm Password</Label>
                                            <Input type="password" name="c_password" defaultValue={register.c_password} className="form-control" id="c_password"
                                                placeholder="Enter your password" required="" />
                                        </Col>
                                        <input type="submit" className="btn btn-solid" name='create Account' />
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    )
}

export default Register