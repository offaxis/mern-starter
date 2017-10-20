import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, CardHeader, CardBlock, ButtonGroup, Button } from 'reactstrap';

// Import Components

class UserProfilePage extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
            {
                this.props.user
                ?

                        <Card>
                            <CardHeader>
                                <h1>{this.props.user.firstname} {this.props.user.lastname}</h1>
                            </CardHeader>
                            <CardBlock>
                                <Row>
                                    <Col>
                                        Email : {this.props.user.email}<br />
                                    </Col>
                                    <Col>
                                    </Col>
                                </Row>
                            </CardBlock>
                        </Card>
                : null
            }
            </div>
        );
    }
}

// Retrieve data from store as props
function mapStateToProps(state) {
    return { user: state.users.user };
}

export default connect(mapStateToProps)(UserProfilePage);
