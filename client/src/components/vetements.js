import { Form } from 'react-bootstrap';
import Select from 'react-select';

// Location / Vente
export const LocationVenteVetements = ({ postData, handleChangeInput, locatioventevetemeness }) => (
  <Form.Group className="mb-3">
    <Form.Label>Location / Vente</Form.Label>
    <Select
      name="locatioventevetemenes"
      value={locatioventevetemeness.find(opt => opt.value === postData.attributes.locatioventevetemenes)}
      onChange={(selected) =>
        handleChangeInput({
          target: { name: "locatioventevetemenes", value: selected.value }
        })
      }
      options={locatioventevetemeness}
      placeholder="Location / Vente"
      classNamePrefix="select"
    />
  </Form.Group>
);

// Gros / Détails
export const GrosDetails = ({ postData, handleChangeInput, grosdetailOptions }) => (
  <Form.Group className="mb-3">
    <Form.Label>Gros / Détails</Form.Label>
    <Select
      name="grosdetailOptions"
      value={grosdetailOptions.find(opt => opt.value === postData.attributes.grosdetailOptions)}
      onChange={(selected) =>
        handleChangeInput({
          target: { name: "grosdetailOptions", value: selected.value }
        })
      }
      options={grosdetailOptions}
      placeholder="Gros / Détails"
      classNamePrefix="select"
    />
  </Form.Group>
);

// Papiers
export const PapiersSelect = ({ postData, handleChangeInput, papiersOption }) => (
  <Form.Group className="mb-3">
    <Form.Label>Papiers</Form.Label>
    <Select
      name="papiers"
      value={papiersOption.find(opt => opt.value === postData.attributes.papiers)}
      onChange={(selected) =>
        handleChangeInput({
          target: { name: "papiers", value: selected.value }
        })
      }
      options={papiersOption}
      placeholder="Papiers"
      classNamePrefix="select"
    />
  </Form.Group>
);
