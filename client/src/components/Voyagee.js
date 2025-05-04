import Select from 'react-select';
import { Form } from 'react-bootstrap';
import { FaSuitcase, FaUmbrellaBeach, FaKaaba, FaPassport, FaHotel, FaShip, FaEllipsisH } from 'react-icons/fa';

export function VoyageCategory({ handleChangeInput, postData }) {
  const options = [
    { value: 'Voyage_Organise', label: (<><FaSuitcase style={{ marginRight: '8px' }} /> Voyage Organisé</>) },
    { value: 'Location_Vacances', label: (<><FaUmbrellaBeach style={{ marginRight: '8px' }} /> Location Vacances</>) },
    { value: 'hadj_Omra', label: (<><FaKaaba style={{ marginRight: '8px' }} /> Hadj & Omra</>) },
    { value: 'Reservations_Visa', label: (<><FaPassport style={{ marginRight: '8px' }} /> Réservations & Visa</>) },
    { value: 'Sejour', label: (<><FaHotel style={{ marginRight: '8px' }} /> Séjour</>) },
    { value: 'Croisiere', label: (<><FaShip style={{ marginRight: '8px' }} /> Croisière</>) },
    { value: 'Autre', label: (<><FaEllipsisH style={{ marginRight: '8px' }} /> Autre</>) }

  ];

  return (
    <div >
      <Select
        options={options}
        onChange={(selectedOption) => handleChangeInput({
          target: {
            name: 'voyagecategory',
            value: selectedOption?.value || '',
            type: 'text',
            checked: undefined
          }
        })}
        name="voyagecategory"
        value={postData ? options.find(opt => opt.value === postData.voyagecategory) : null}
        placeholder="Sélectionner une sub-catégorie"
      />
    </div>
  );
}

export function TransporteUtilizado({ handleChangeInput, postData }) {
  const options = [
    { value: 'Avion', label: 'Avion' },
    { value: 'Bus', label: 'Bus' },
    { value: 'Train', label: 'Train' },
    { value: 'Voiture', label: 'Voiture' },

  ];

  return (
    <div >
      <Select
        options={options}
        onChange={(selectedOption) => handleChangeInput({
          target: {
            name: 'transporte',
            value: selectedOption?.value || '',
            type: 'text',
            checked: undefined
          }
        })}
        name="transporte"
        value={postData ? options.find(opt => opt.value === postData.transporte) : null}
        placeholder="Sélectionner une sub-catégorie"
      />
    </div>
  );
}







export function ViajesNacionales({ handleChangeInput, postData }) {
  const options = [
    { value: 'Alger', label: 'Alger' },
    { value: 'Oran', label: 'Oran' },
    { value: 'Constantine', label: 'Constantine' },
    { value: 'Annaba', label: 'Annaba' },
    { value: 'Tlemcen', label: 'Tlemcen' },
    { value: 'Bejaia', label: 'Bejaia' },
    { value: 'Setif', label: 'Setif' },
    { value: 'Batna', label: 'Batna' },
    { value: 'Biskra', label: 'Biskra' },
    { value: 'Ghardaia', label: 'Ghardaia' },
    { value: 'Tamanrasset', label: 'Tamanrasset' },
    { value: 'Ouargla', label: 'Ouargla' },
    { value: 'Adrar', label: 'Adrar' },
    { value: 'Tizi Ouzou', label: 'Tizi Ouzou' },
    { value: 'Laghouat', label: 'Laghouat' },
    { value: 'El Oued', label: 'El Oued' },
    { value: 'Skikda', label: 'Skikda' },
    { value: 'Jijel', label: 'Jijel' }

  ];

  return (
    <div >
      <Select
        options={options}
        onChange={(selectedOption) => handleChangeInput({
          target: {
            name: 'viajesnacionales',
            value: selectedOption?.value || '',
            type: 'text',
            checked: undefined
          }
        })}
        name="viajesnacionales"
        value={postData ? options.find(opt => opt.value === postData.viajesnacionales) : null}
        placeholder="Sélectionner une sub-catégorie"
      />
    </div>
  );
}



export function ViajesInterNacionales({ handleChangeInput, postData }) {
  const options = [
    { value: 'Istanbul', label: 'Istanbul' },
    { value: 'Dubaï', label: 'Dubaï' },
    { value: 'Paris', label: 'Paris' },
    { value: 'Marseille', label: 'Marseille' },
    { value: 'Lyon', label: 'Lyon' },
    { value: 'Tunis', label: 'Tunis' },
    { value: 'Cairo', label: 'Cairo' },
    { value: 'Madrid', label: 'Madrid' },
    { value: 'Barcelona', label: 'Barcelona' },
    { value: 'Rome', label: 'Rome' },
    { value: 'Frankfurt', label: 'Frankfurt' },
    { value: 'London', label: 'London' },
    { value: 'Doha', label: 'Doha' },
    { value: 'Brussels', label: 'Brussels' },
    { value: 'Montreal', label: 'Montreal' },
    { value: 'New York', label: 'New York' },
    { value: 'Moscow', label: 'Moscow' },
    { value: 'Beijing', label: 'Beijing' }

  ];

  return (
    <div >
      <Select
        options={options}
        onChange={(selectedOption) => handleChangeInput({
          target: {
            name: 'viajesinternacionales',
            value: selectedOption?.value || '',
            type: 'text',
            checked: undefined
          }
        })}
        name="viajesinternacionales"
        value={postData ? options.find(opt => opt.value === postData.viajesinternacionales) : null}
        placeholder="Sélectionner une sub-catégorie"
      />
    </div>
  );
}

export function Destinacion({ handleChangeInput, postData }) {
  const options = [

    { value: 'Destinations Nationales', label: (<><FaSuitcase style={{ marginRight: '8px' }} /> Destinations Nationales</>) },
    { value: 'Destinations Internationales', label: (<><FaUmbrellaBeach style={{ marginRight: '8px' }} /> Destinations Internationales</>) },
  ];

  return (
    <div >
      <Select
        options={options}
        onChange={(selectedOption) => handleChangeInput({
          target: {
            name: 'destinacion',
            value: selectedOption?.value || '',
            type: 'text',
            checked: undefined
          }
        })}
        name="destinacion"
        value={postData ? options.find(opt => opt.value === postData.destinacion) : null}
        placeholder="Sélectionner une sub-catégorie"
      />
    </div>
  );
}

export function DestinacionHadjOmra({ handleChangeInput, postData }) {
  const options = [
    { value: 'Mina', label: 'Mina' },
    { value: 'Arafat', label: 'Arafat' },
    { value: 'Muzdalifah', label: 'Muzdalifah' },
    { value: 'Jabal al-Nour', label: 'Jabal al-Nour' },
    { value: 'Jabal Thawr', label: 'Jabal Thawr' },
    { value: 'Cueva de Hira', label: 'Cueva de Hira' },
    { value: 'Cementerio de Al-Baqi', label: 'Cementerio de Al-Baqi' },
    { value: 'Quba', label: 'Mezquita de Quba' },
    { value: 'Qiblatain', label: 'Mezquita de Qiblatain' },

  ];

  return (
    <div >
      <Select
        options={options}
        onChange={(selectedOption) => handleChangeInput({
          target: {
            name: 'destinacionhadjomra',
            value: selectedOption?.value || '',
            type: 'text',
            checked: undefined
          }
        })}
        name="destinacionhadjomra"
        value={postData ? options.find(opt => opt.value === postData.destinacionhadjomra) : null}
        placeholder="Sélectionner une sub-catégorie"
      />
    </div>
  );
}



export const Programme = ({ postData, handleChangeInput }) => (
  <Form.Group controlId="programmeTextarea" className="mb-3">
    <Form.Label>Description Programme</Form.Label>
    <Form.Control
      as="textarea"
      name="programme"
      value={postData.programme}
      onChange={handleChangeInput}
      placeholder="programme..."
      rows={5}
      style={{ resize: 'vertical' }}
    />
  </Form.Group>
);

 