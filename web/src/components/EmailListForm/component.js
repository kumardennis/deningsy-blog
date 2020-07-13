import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.scss';

const EmailListForm = () => {
  const [email, setEmail] = useState('');
  const [listFields, setListFields] = useState({FNAME: '', LNAME: ''});

  const handleSubmit = (event) => {
    event.preventDefault();

    addToMailchimp(email, listFields)
      .then((data) => {
        console.log(data.msg);
        toast[data.result](data.msg, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        console.log('oops! an error : ', error);
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };

  const handleFnameChange = (event) => {
    setListFields({...listFields, FNAME: event.currentTarget.value});
  };

  const handleLnameChange = (event) => {
    setListFields({...listFields, LNAME: event.currentTarget.value});
  };

  return (
    <div>
      <Container>
        <h3 className='topic'>Subscribe to our mailing list!</h3>
        <Container className='form-container'>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Col>
                <Form.Group controlId='formBasicFName'>
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    onChange={handleFnameChange}
                    type='text'
                    placeholder='Enter first name'
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='formBasicLName'>
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    onChange={handleLnameChange}
                    type='text'
                    placeholder='Enter last name'
                  />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group controlId='formBasicEmail'>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onChange={handleEmailChange}
                    type='email'
                    placeholder='Enter email'
                  />
                  <Form.Text className='text-muted'>
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
              </Col>
            </Form.Row>

            <Button className='custom-btn' type='submit'>
              Submit
            </Button>
          </Form>
        </Container>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default EmailListForm;
