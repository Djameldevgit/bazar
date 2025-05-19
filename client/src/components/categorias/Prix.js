import React from 'react';
import { Form } from 'react-bootstrap';


export function PriceInput({ handleChangeInput, postData }) {

    return (
        <Form.Group controlId="numberInput" className="mb-3">
            <Form.Label>Prix (€)</Form.Label>
             

                <Form.Control
                    type="number"
                    name="price"
                    value={postData.price}
                    onChange={handleChangeInput}
                    placeholder="Prix"
                />
           
            <Form.Text className="text-muted">
                Format: 99.99 (max 2 décimales)
            </Form.Text>
        </Form.Group>
    );
}