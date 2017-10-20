import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import { registerRequest } from '../../UserActions';

// Import Components
import UserRegisterForm from '../../components/UserRegisterForm'


class UserRegisterPage extends Component {

    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleRegister(user) {
        this.props.dispatch(registerRequest(user));
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={{ size: 6, offset: 3 }}>
                            <UserRegisterForm register={this.handleRegister} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

// Retrieve data from store as props
function mapStateToProps(state) {
    return { user: state.users.user };
}

export default connect(mapStateToProps)(UserRegisterPage);
