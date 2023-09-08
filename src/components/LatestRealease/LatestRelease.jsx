import React, { useState, useEffect } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import MyBookCard from '../MyBookCard/MyBookCard'
import { nanoid } from 'nanoid'
import { ClimbingBoxLoader } from "react-spinners";


const LatestRelease = ({genre}) => {
  const [load,setLoad] = useState(false)
  const [search,setSearch] = useState("")
  const [result,setResult] = useState(genre)
  
  const searchResult = () => {
    if(search === "") {
      setResult(genre)
    } else {
      setResult(genre.filter(el => el.title.toLowerCase().includes(search.toLowerCase())))
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
        setLoad(true)
    },1000);

    return () => clearTimeout(timer);
  },[]);

  if(load) {
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
                      <MyBookCard genre={gen}/>
                  </Col>
              ))}
          </Row>
        </Container>
      </>
    )
  } else {
    <Container>
      <ClimbingBoxLoader />
    </Container>
  }
  
}

export default LatestRelease