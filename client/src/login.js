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
class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { login } = this.props
        console.log(login)
        return (
            <Form onSubmit={login}>
				<FormGroup>
					<Label for="emailAddress" sm={2}>
						Email
					</Label>
					<Col sm={10}>
						<Input type="email" name="email" id="emailAddress" />
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label for="pass" sm={2}>
						Password
					</Label>
					<Col sm={10}>
						<Input type="password" name="password" id="pass" />
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label for="passwordVerification" sm={2}>
						Re-enter Password
					</Label>
					<Col sm={10}>
						<Input
							type="password"
							name="password"
							id="passwordVerification"
							
						/>
					</Col>
				</FormGroup>
				<Button
					type="submit"
					
					style={{ fontSize: "8px", backgroundColor: "blue" }}
				>
					Submit{" "}
				</Button>
			</Form>
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
)(Login);