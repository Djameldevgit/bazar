import { Form } from 'react-bootstrap';

export const SuperficieInput = ({ postData, handleChangeInput }) => (
  <Form.Group controlId="superficieInput" className="mb-3">
    <Form.Label>Superficie</Form.Label>
    <Form.Control
      type="text"
      name="superficie"
      value={postData.attributes.superficie}
      onChange={handleChangeInput}
      placeholder="Superficie"
    />
  </Form.Group>
);

export const EtageInput = ({ postData, handleChangeInput }) => (
  <Form.Group controlId="etageInput" className="mb-3">
    <Form.Label>Étage</Form.Label>
    <Form.Control
      type="text"
      name="etage"
      value={postData.attributes.etage}
      onChange={handleChangeInput}
      placeholder="Étage"
    />
  </Form.Group>
);

export const PieceInput = ({ postData, handleChangeInput }) => (
  <Form.Group controlId="pieceInput" className="mb-3">
    <Form.Label>Pièces</Form.Label>
    <Form.Control
      type="text"
      name="piece"
      value={postData.attributes.piece}
      onChange={handleChangeInput}
      placeholder="Nombre de pièces"
    />
  </Form.Group>
);
