import { Form   } from 'react-bootstrap';
import Select from 'react-select';
export function TalleSelect({ handleChangeInput, postData }) {
 
    const sizes = [
        { value: 'petit', label: 'Petit (jusqu\'à 50cm)' },
        { value: 'moyen', label: 'Moyen (50-100cm)' },
        { value: 'grand', label: 'Grand (100-150cm)' },
        { value: 'tres_grand', label: 'Très grand (+150cm)' }
    ];

  

    return (
        
      <Form.Group controlId="numberInput" className="mb-3">
         
            <Form.Label>Talle</Form.Label>
        <Select
          options={sizes}
          onChange={(selectedOption) => handleChangeInput({
            target: {
              name: 'subCategorytalle',
              value: selectedOption?.value || '',
              type: 'text',
              checked: undefined
            }
          })}
          name="subCategorytalle"
          value={postData ? sizes.find(opt => opt.value === postData.subcategorytalle) : null}
          placeholder="Taille de l'œuvre "
          
        />
        </Form.Group> 
      
      
 
    );
}