import React from 'react';
import { Form } from 'react-bootstrap';

export function MesureInput({ handleChangeInput, postData }) {
    return (
        <Form.Group controlId="measurementInput" className="mb-3">
            <Form.Label>Mesure</Form.Label>
            <Form.Control
                type="number"
                name="measurementValue"
                value={postData.measurementValue || ''}
                onChange={handleChangeInput}
                placeholder="Valeur numérique"
                min="0"
                step="any"
                className="measurement-input"
            />
            <Form.Text className="text-muted">
                Entrez la valeur sans unité (ex: 150)
            </Form.Text>
        </Form.Group>
    );
}