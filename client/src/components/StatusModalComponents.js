import Select from 'react-select';
import { Form } from 'react-bootstrap';
 

export const MarcaTelefono = ({ postData, handleMarcasChange, handleModelosChange, marcasOptionss, modelosOptionss }) => (
    <div>
      <div className="form-group">
        <small className="text-primary">Selecciona la marca</small>
        <select
          className="form-control"
          name="marcas"
          value={postData.marcas}
          onChange={handleMarcasChange}
        >
          <option value="">Sélectionnez une marque</option>
          {marcasOptionss}
        </select>
      </div>
  
      <div className="form-group">
        <select
          className="form-control"
          name="modelos"
          value={postData.modelos}
          onChange={handleModelosChange}
        >
          <option value="">Sélectionnez le modèle</option>
          {modelosOptionss}
        </select>
      </div>
    </div>
  );
  
  // Componente: Marca y modelo de voitures
  export const MarcaVoiture = ({ postData, handleMarcaChange, handleModeloChange, marcasOptions, modelosOptions }) => (
    <div>
      <div className="form-group">
        <small className="text-primary">Selecciona la marca</small>
        <select
          className="form-control"
          name="marca"
          value={postData.marca}
          onChange={handleMarcaChange}
        >
          <option value="">Sélectionnez une marque</option>
          {marcasOptions}
        </select>
      </div>
  
      <div className="form-group">
        <small className="text-primary">Selecciona el modelo</small>
        <select
          className="form-control"
          name="modelo"
          value={postData.modelo}
          onChange={handleModeloChange}
        >
          <option value="">Sélectionnez le modèle</option>
          {modelosOptions}
        </select>
      </div>
    </div>
  );
  
  // Componente: Wilaya y commune
  export const WilayaCommune = ({ postData, handleWilayaChange, handleCommuneChange, wilayasOptions, communesOptions }) => (
    <div>
      <div className="form-group">
        <small className="text-primary">Adresse du bien obligatoire</small>
        <select
          className="form-control"
          name="wilaya"
          value={postData.wilaya}
          onChange={handleWilayaChange}
        >
          <option value="">Sélectionnez une wilaya</option>
          {wilayasOptions}
        </select>
      </div>
  
      <div className="form-group">
        <select
          className="form-control"
          name="commune"
          value={postData.commune}
          onChange={handleCommuneChange}
        >
          <option value="">Sélectionnez la commune</option>
          {communesOptions}
        </select>
      </div>
    </div>
  );
  

export const Description = ({ postData, handleChangeInput }) => (
    <Form.Group controlId="descriptionTextarea" className="mb-3">
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
 

export const PrixInput = ({ postData, handleChangeInput }) => (
  <Form.Group controlId="numberInput" className="mb-3">
    <Form.Label>Prix</Form.Label>
    <Form.Control
      type="number"
      name="price"
      value={postData.price}
      onChange={handleChangeInput}
      placeholder="Prix"
    />
  </Form.Group>
);

export const UnitePrixSelect = ({ postData, handleChangeInput, priceUnitOptions }) => (
  <Form.Group className="mb-3">
    <Form.Label>Unité de prix</Form.Label>
    <Select
      name="unidaddeprecio"
      value={priceUnitOptions.find(opt => opt.value === postData.unidaddeprecio)}
      onChange={(selected) =>
        handleChangeInput({
          target: {
            name: 'unidaddeprecio',
            value: selected.value
          }
        })
      }
      options={priceUnitOptions}
      placeholder="Unité de prix"
      classNamePrefix="select"
    />
  </Form.Group>
);

export const TypeOffreSelect = ({ postData, handleChangeInput, offerTypeOptions }) => (
  <Form.Group className="mb-3">
    <Form.Label>Type D'offre</Form.Label>
    <Select
      name="oferta"
      value={offerTypeOptions.find(opt => opt.value === postData.oferta)}
      onChange={(selected) =>
        handleChangeInput({
          target: {
            name: 'oferta',
            value: selected.value
          }
        })
      }
      options={offerTypeOptions}
      placeholder="Type D'offre"
      classNamePrefix="select"
    />
  </Form.Group>
);

export const ChangeSelect = ({ postData, handleChangeInput, changeTypeOptions }) => (
  <Form.Group className="mb-3">
    <Form.Label>Change</Form.Label>
    <Select
      name="change"
      value={changeTypeOptions.find(opt => opt.value === postData.change)}
      onChange={(selected) =>
        handleChangeInput({
          target: {
            name: 'change',
            value: selected.value
          }
        })
      }
      options={changeTypeOptions}
      placeholder="Change"
      classNamePrefix="select"
    />
  </Form.Group>
);
// Campo Quartier (texto)
export const QuartierInput = ({ postData, handleChangeInput }) => (
    <Form.Group controlId="numberInput" className="mb-3">
      <Form.Label>Quartier</Form.Label>
      <Form.Control
        type="text"
        name="quartier"
        value={postData.quartier}
        onChange={handleChangeInput}
        placeholder="Quartier"
      />
    </Form.Group>
  );
  
  // Campo Téléphone (número)
  export const TelephoneInput = ({ postData, handleChangeInput }) => (
    <Form.Group controlId="telefonoInput" className="mb-3">
      <Form.Label>Téléphone</Form.Label>
      <Form.Control
        type="number"
        name="telefono"
        value={postData.telefono}
        onChange={handleChangeInput}
        placeholder="Téléphone"
      />
    </Form.Group>
  );
  
  // Campo Email (correo)
  export const EmailInput = ({ postData, handleChangeInput }) => (
    <Form.Group controlId="emailInput" className="mb-3">
      <Form.Label>Email</Form.Label>
      <Form.Control
        type="email"
        name="email"
        value={postData.email}
        onChange={handleChangeInput}
        placeholder="Adresse mail"
      />
    </Form.Group>
  );
  