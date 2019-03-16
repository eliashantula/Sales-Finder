import React, { Component } from "react";
import {
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from "reactstrap";
import { testLogin } from './actions'
import { connect } from "react-redux";
import serialize from "form-serialize";
class SignIn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { login } = this.props
        console.log(login)
        return (
        	<div>
            <Form onSubmit={login} className="loginForm">
				<FormGroup style={{marginBottom: "0px"}}>
					<Label for="emailAddress" sm={2}>
						Email
					</Label>
					
						<Input type="email" name="email" id="emailAddress" />
				
				</FormGroup>
				<FormGroup style={{marginBottom: "0px"}}>
					<Label for="pass" sm={2}>
						Password
					</Label>
					
						<Input type="password" name="password" id="pass" />
				
				</FormGroup>
				<Button
					type="submit"
					
					style={{ fontSize: "8px", backgroundColor: "blue" }}
				>
					Submit{" "}
				</Button>
			</Form>
			</div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        login: (e) => {
            e.preventDefault()
            let form = e.currentTarget
            let data = serialize(form, {hash: true})
            console.log(data)
            dispatch(testLogin(data))
        }
    }


}

export default connect(

    null, mapDispatchToProps
)(SignIn);