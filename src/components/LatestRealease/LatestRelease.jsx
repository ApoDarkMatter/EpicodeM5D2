import React, { useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import MyBookCard from '../MyBookCard/MyBookCard'
import { nanoid } from 'nanoid'

const LatestRelease = ({genre}) => {
  const [load,setLoad] = useState(false)
  const [books,setBooks] = useState(genre)
  const [search,setSearch] = useState("")
  const [border,setBorder] = useState(false)
  
  const searchResult = () => {

  }
  return (
      <>
        <Container>
          <input type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search book"
          ></input>
          <Button type="button" onClick={searchResult()}>Search!</Button>
        </Container>
        <Container>
          <Row>
              {books.map(gen => (
                  <Col key={nanoid()} md={4} xs={12}>
                      <MyBookCard genre={gen}/>
                  </Col>
              ))}
          </Row>
        </Container>
      </>
  )
}

export default LatestRelease