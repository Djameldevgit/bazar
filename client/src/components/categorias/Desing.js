import Select from 'react-select';

export function ItemsSubCategoryDesign({ handleChangeInput, postData }) {
    const optionSubCategoryDesign = [
        { value: "accessoires", label: "Accessoires" },
        { value: "art_de_la_table", label: "Art de la table" },
        { value: "bijoux", label: "Bijoux" },
        { value: "luminaire", label: "Luminaire" },
        { value: "meuble", label: "Meuble" },
        { value: "vetements", label: "Vêtements" }
    ];

    return (
        <div className="design-category-container">
            <Select
                options={optionSubCategoryDesign}
                onChange={(selectedOption) => handleChangeInput({
                    target: {
                        name: 'subcategory',
                        value: selectedOption?.value || '',
                        type: 'text'
                    }
                })}
                name="subcategory"
                value={optionSubCategoryDesign.find(opt => opt.value === (postData?.subcategory || ''))}
                placeholder="Sélectionner un domaine du design"
                isDisabled={!postData?.category}
                className="design-select"
                classNamePrefix="ds-select"
                isSearchable={true}
                noOptionsMessage={() => "Option non disponible"}
                menuPortalTarget={document.body}
                styles={{
                    menuPortal: base => ({ ...base, zIndex: 9999 }),
                    control: (base, state) => ({
                        ...base,
                        borderWidth: '2px',
                        borderColor: state.isFocused ? '#4f46e5' : '#e2e8f0',
                        boxShadow: 'none',
                        '&:hover': {
                            borderColor: '#4f46e5'
                        },
                        minHeight: '44px'
                    }),
                    option: (base, state) => ({
                        ...base,
                        backgroundColor: state.isSelected ? '#4f46e5' : state.isFocused ? '#eef2ff' : 'white',
                        color: state.isSelected ? 'white' : '#1e293b'
                    })
                }}
                components={{
                    IndicatorSeparator: () => null
                }}
            />
        </div>
    );
}