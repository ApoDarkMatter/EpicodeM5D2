import React, { useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import MyBookCard from '../MyBookCard/MyBookCard'
import { nanoid } from 'nanoid'

const LatestRelease = ({genre}) => {
  const [load,setLoad] = useState(false)
  const [search,setSearch] = useState("")
  const [result,setResult] = useState(genre)
  const [border,setBorder] = useState(false)
  
  const searchResult = () => {
    if(search === "") {
      setResult(genre)
    } else {
      setResult(genre.filter(el => el.title.toLowerCase().includes(search.toLowerCase())))
    }
  }

  const addBorder = () => {
    console.log(border);
    setBorder(!border);
    console.log(border);
  }
  return (
      <>
        <Container>
          <input type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search book"
          ></input>
          <Button type="button" onClick={searchResult}>Search!</Button>
        </Container>
        <Container>
          <Row>
              {result.map(gen => (
                  <Col key={nanoid()} md={4} xs={12}>
                      <MyBookCard onClick={addBorder} className={border ? '2px solid red' : ''} genre={gen}/>
                  </Col>
              ))}
          </Row>
        </Container>
      </>
  )
}

export default LatestRelease