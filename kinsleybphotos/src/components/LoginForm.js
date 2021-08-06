import { Component, React } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class LoginForm extends Component {
    
    state = {
        username: "",
        password: ""
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
        console.log(this.state)
    }

    render() {
        return (
            <div className="login-form text-center">
                <h3>Welcome back!</h3>
                <br/> 
                <br/>
                <Form className="text-center">
                    <Form.Group >
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" name="username" placeholder="Enter name" onChange={event => this.handleChange(event)} value={this.state.username} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Enter Password" onChange={event => this.handleChange(event)} value={this.state.password} />
                    </Form.Group>
                    <br/>
                    <Button type="submit" variant="outline-dark">
                    Submit
                </Button>
                </Form>
            </div>
        )
    }
}
