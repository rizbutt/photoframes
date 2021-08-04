import { post } from 'jquery';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function Redirect({to}) {
    const router = useRouter();
    console.log(to);
    useEffect(()=>{ 
        router.push(
            to
        )
    }, []);
    
    return null;
}

class FetchUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loading: false, user: '' };
        
    }
 
    
    async componentWillMount(){
        //const userlevel = localStorage.getItem("user");
        //this.setState({user: userlevel, loading: false})
    }

    render(props){
        if(this.state.user === 'user' || !this.state.user)
            return <Redirect to="/page/admin/dashboard" />;
        else()
        return <Redirect to="/" />;
    };
    
}
export default FetchUser;