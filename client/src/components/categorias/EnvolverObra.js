import React from 'react';
import { Form  } from 'react-bootstrap';
import Select from 'react-select';
export function Envolverlaobra({ handleChangeInput, postData }) {
    const  Optionsenvolverobra = [
        { value: 'toile', label: 'Toile sur châssis (sans cadre)' },
        { value: 'toile_encadree', label: 'Toile encadrée' },
        { value: 'papier', label: 'Œuvre sur papier (sous verre)' },
        { value: 'papier_plaque', label: 'Papier contrecollé sur plaque' },
        { value: 'boite', label: 'Boîte de protection' },
        { value: 'tube', label: 'Roulée dans un tube' },
        { value: 'caisse', label: 'Caisse en bois sur mesure' },
        { value: 'sculpture_boite', label: 'Sculpture en boîte protectrice' },
        { value: 'montage_plexi', label: 'Montage sous plexiglas' },
        { value: 'autre', label: 'Autre conditionnement' }
    ];

    return (
        <div>
            <Form.Text className="text-muted">
                Indiquez comment votre œuvre sera protégée pour l'envoi
            </Form.Text>
        <Select
          options={Optionsenvolverobra}
          onChange={(selectedOption) => handleChangeInput({
            target: {
              name: 'envolverobra',
              value: selectedOption?.value || '',
              type: 'text',
              checked: undefined
            }
          })}
          name="envolverobra"
          value={postData ? Optionsenvolverobra.find(opt => opt.value === postData.envolverobra) : null}
          placeholder="Conditionnement de l'œuvre"
          
        />
      </div>

 
    );
}