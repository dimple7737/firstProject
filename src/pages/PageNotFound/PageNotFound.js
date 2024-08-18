import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PageNotFound.scss';

function PageNotFound() {
  return (
    <section className="page-not-found">
        <Container>
            <Row>
                <Col md={12} className='text-center'>
                    <h1><span className='primary-color'>4</span>0<span className='secondary-color'>4</span></h1>
                    <h2>Look like you're lost</h2>
                    <h3>the page you are looking for not avaible!</h3>
                    <Link className='btn-primary' to="/">Back to home</Link>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default PageNotFound