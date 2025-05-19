import Select from 'react-select';
 
export function UniteMesure({ handleChangeInput, postData }) {
  const measurementUnits = [
    { value: 'cm', label: 'Centimètres (cm)' },
    { value: 'm', label: 'Mètres (m)' },
    { value: 'cm2', label: 'Centimètres carrés (cm²)' },
    { value: 'm2', label: 'Mètres carrés (m²)' },
    { value: 'mm', label: 'Millimètres (mm)' },
    { value: 'in', label: 'Pouces (in)' }
  ];

  return (
    <div className="unit-selector-container">
      <Select
        options={measurementUnits}
        onChange={(selectedOption) => handleChangeInput({
          target: {
            name: 'measurementUnit', // Nombre diferente para no confundir con el tamaño
            value: selectedOption?.value || '',
            type: 'text'
          }
        })}
        name="measurementUnit"
        value={measurementUnits.find(opt => opt.value === postData?.measurementUnit) || null}
        placeholder="Sélectionnez l'unité"
        className="unit-select"
        classNamePrefix="us"
        isSearchable={false}
        noOptionsMessage={() => "Aucune unité disponible"}
        styles={{
          control: (base) => ({
            ...base,
            minHeight: '42px',
            borderColor: '#ced4da',
            '&:hover': { borderColor: '#80bdff' }
          })
        }}
      />
    </div>
  );
}