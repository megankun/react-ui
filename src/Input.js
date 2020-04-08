import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
import React, { useState } from 'react';
//
function Input() {
    //
    // const iris = props.screen;
    // console.log('props.screen',props.screen)
    const [iris, setIris] = 
        useState({ sepal_length: '', sepal_width: '', petal_length: '', petal_width: '', species: '' });
    const [apiresult, setApiresult] = useState([]);
    const [showLoading, setShowLoading] = useState(true);
    //
    const apiUrl = "http://localhost:5000/run"
    //
    const sendIris = (e) => {
        setShowLoading(true);
        e.preventDefault();
        const data = {sepal_length: iris.sepal_length, 
            sepal_width: iris.sepal_width, petal_length: iris.petal_length, 
            petal_width: iris.petal_width, species: iris.species };
        //
        axios.post(apiUrl, data)
        .then((result) => {
            setShowLoading(false);
            console.log('results from api:',result.data)
            setApiresult(result.data);
            
        }).catch((error) => setShowLoading(true));
    };
    //
    const onChange = (e) => {
        e.persist();
        setIris({...iris, [e.target.name]: e.target.value});
      }
    
    return (
        <div>
          {            
              <div className="card">
                <Jumbotron>
                    <Form onSubmit={sendIris}>
                      <Form.Group>
                        <Form.Label> Sepal Length</Form.Label>
                        <Form.Control type="text" name="sepal_length" id="sepal_length" placeholder="Enter Sepal Lenght" value={iris.sepal_length} onChange={onChange} />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label> Sepal Width</Form.Label>
                        <Form.Control type="text" name="sepal_width" id="sepal_width" placeholder="Enter Sepal Width" value={iris.sepal_width} onChange={onChange} />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label> Petal Length</Form.Label>
                        <Form.Control type="text" name="petal_length" id="petal_length" placeholder="Enter Petal Length" value={iris.petal_length} onChange={onChange} />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label> Petal Width</Form.Label>
                        <Form.Control type="text" name="petal_width" id="petal_width" placeholder="Enter Petal Width" value={iris.petal_width} onChange={onChange} />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label> Species</Form.Label>
                        <Form.Control type="text" name="species" id="species" placeholder="Enter Species" value={iris.species} onChange={onChange} />
                      </Form.Group>
                                    
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </Jumbotron>
                </div>
          }
        { showLoading === true
          ? <div>
              {showLoading && <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner> }
            </div>
           : <div>
              <h1>Prediction Results</h1>
              <h2> the values for species will be:</h2>
              <li>setosa: 1,0,0</li> 
              <li>virginica: 0,1,0</li>
              <li>versicolor: 0,0,1 </li>
  
              <table className="App-table">
                <thead>
                  <tr>
                    <th>Test 1</th>
                    <th>Test 2</th>
                    <th>Test 3</th>
                  </tr>
                </thead>
                
                <tbody>
                apiresult.Lenght > 0 ?
                <div>
                  <tr>
                    <td className="App-td">
                      { apiresult.row1.map((value, index) => (
                        <p key={index}>{value}</p>
                      ))}
                    </td>
                    <td className="App-td">
                    { apiresult.row2.map((value, index) => (
                      <p key={index}>{value}</p>
                    ))}
                    </td>
                    <td className="App-td">
                    { apiresult.row3.map((value, index) => (
                      <p key={index}>{value}</p>
                    ))}
                    </td>
  
                  </tr>
                  </div>
                  : <p>Without data.</p>
                </tbody>
              </table>
                
            </div>
        //    : 
        //   < div>
        //     {showLoading && <Spinner animation="border" role="status">
        //       <span className="sr-only">Waiting for results...</span>
        //     </Spinner> }
        //   </div> 
        }
      </div>
    );
}

export default withRouter(Input);
