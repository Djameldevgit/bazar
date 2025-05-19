import React from 'react';
import Select from 'react-select';
import { Form } from 'react-bootstrap';

export function VenteOptionsSelect({ handleChangeInput, postData}) {
    const optionsDeVente = [
        { value: 'Œuvre_originale', label: 'Œuvre originale' },
        { value: 'edition_limitee', label: 'edition limitee' },
        { value: 'Impression_art', label: 'Impression d\'art' },
        { value: 'Licence_de_reproduction', label: 'Licence de reproduction' },
        { value: 'Location_leasing', label: 'Location (leasing)' },
        { value: 'precommande', label: 'precommande' },
      
    ];

    return (
        <Form.Group controlId="venteOptions" className="mb-4">
            <Form.Label>
                Options de commercialisation 
              
            </Form.Label>
            <Select
          options={optionsDeVente}
          onChange={(selectedOption) => handleChangeInput({
            target: {
              name: 'venteOption',
              value: selectedOption?.value || '',
              type: 'text',
              checked: undefined
            }
          })}
          name="venteOption"
          value={postData ? optionsDeVente.find(opt => opt.value === postData.venteOption) : null}
          placeholder="Conditionnement de l'œuvre"
          
        />
            
            
            <Form.Text className="text-muted">
                Définissez comment votre œuvre sera commercialisée
            </Form.Text>
        </Form.Group>
    );
}