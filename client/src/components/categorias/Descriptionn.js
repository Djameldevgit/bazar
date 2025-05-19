import React from 'react';
import { Form } from 'react-bootstrap';


export function DescriptionInput({ handleChangeInput, postData }) {

    return (
        <Form.Group controlId="numberInput" className="mb-3">
         
            <Form.Label>Description</Form.Label>
      <Form.Control
        as="textarea"
        name="description"
        value={postData.description}
        onChange={handleChangeInput}
        placeholder="Description..."
        rows={5}
        style={{ resize: 'vertical' }}
      />
       
        </Form.Group>
    );
}
 

