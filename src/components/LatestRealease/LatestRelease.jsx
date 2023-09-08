import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MyBookCard from '../MyBookCard/MyBookCard'
import { nanoid } from 'nanoid'

export class LatestRelease extends Component {
  render() {
    const genre = this.props.genre
    return (
        <Container>
            <Row>
                {genre.map(gen => (
                    <Col id={nanoid()} md={4} xs={12}>
                            <MyBookCard genre={gen}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )
  }
}

export default LatestRelease