import React, { useState, useEffect } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import MyBookCard from '../MyBookCard/MyBookCard'
import { nanoid } from 'nanoid'
import { CircleLoader } from 'react-spinners'


const LatestRelease = ({genre}) => {
  const [load,setLoad] = useState(false)
  const [search,setSearch] = useState("")
  const [result,setResult] = useState([])

  
  const searchBook = () => {
    const allBooks = [...genre]
    setResult(allBooks.filter(el => el.title.toLowerCase().includes(search.toLowerCase())))
  }

  useEffect(() => {
    const allBooks = [...genre]
    if(search === "") {
      setResult(allBooks)
    }
    
    const timer = setTimeout(() => {
        setLoad(true)
    },1000);

    return () => clearTimeout(timer);
  },[search,genre]);

  if(load) {
    return (
      <>
        <Container>
          <input type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search book"
          ></input>
          <Button type="button" onClick={searchBook}>Search!</Button>
        </Container>
        <Container>
          <Row>
              {result.map(gen => (
                  <Col key={nanoid()} md={4} xs={12}>
                      <MyBookCard genre={gen}/>
                  </Col>
              ))}
          </Row>
        </Container>
      </>
      )
    } else {
      return (
        <Container>
          <CircleLoader color="#000000"/>
        </Container>
      )
    }
  
}

export default LatestRelease