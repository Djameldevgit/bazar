import Select from 'react-select';

export function ItemsSubCategoryArtTextile({ handleChangeInput, postData }) {
    const optionSubCategoryArtTextile = [
        { value: "broderie", label: "Broderie" },
        { value: "fibre_textile", label: "Fibre Textile" },
        { value: "fil", label: "Fil" },
        { value: "patchwork", label: "Patchwork" },
        { value: "string_art", label: "String Art" },
        { value: "tapisserie", label: "Tapisserie" },
        { value: "tissu", label: "Tissu" }
    ];

    return (
        <div className="art-category-container">
            <Select
                options={optionSubCategoryArtTextile}
                onChange={(selectedOption) => handleChangeInput({
                    target: {
                        name: 'subcategory',
                        value: selectedOption?.value || '',
                        type: 'text'
                    }
                })}
                name="subcategory"
                value={optionSubCategoryArtTextile.find(opt => opt.value === (postData?.subcategory || ''))}
                placeholder="Sélectionner une technique textile"
                isDisabled={!postData?.category}
                className="textile-select"
                classNamePrefix="tx-select"
                isSearchable={true}
                noOptionsMessage={() => "Technique non disponible"}
                menuPortalTarget={document.body}
                styles={{
                    menuPortal: base => ({ ...base, zIndex: 9999 }),
                    control: (base) => ({
                        ...base,
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        minHeight: '44px'
                    })
                }}
            />
        </div>
    );
}