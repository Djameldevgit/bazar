import Select from 'react-select';

export function ItemsSubCategoryCollages({ handleChangeInput, postData }) {
    const optionSubCategoryCollages = [
        { value: "abstrait", label: "Abstrait" },
        { value: "art_brut", label: "Art brut" },
        { value: "art_conceptuel", label: "Art conceptuel" },
        { value: "art_naif", label: "Art naïf" },
        { value: "art_oriental", label: "Art oriental" },
        { value: "art_premier", label: "Art premier" },
        { value: "art_spirituel", label: "Art spirituel" },
        { value: "calligraphie", label: "Calligraphie" },
        { value: "classicisme", label: "Classicisme" },
        { value: "cubisme", label: "Cubisme" },
        { value: "expressionnisme", label: "Expressionnisme" },
        { value: "fauvisme", label: "Fauvisme" },
        { value: "figuratif", label: "Figuratif" },
        { value: "geometrique", label: "Géométrique" },
        { value: "hyperrealisme", label: "Hyperréalisme" },
        { value: "illustration", label: "Illustration" },
        { value: "impressionnisme", label: "Impressionnisme" },
        { value: "land_art", label: "Land Art" },
        { value: "minimalisme", label: "Minimalisme" },
        { value: "pop_art", label: "Pop Art" },
        { value: "street_art", label: "Street Art" },
        { value: "surrealisme", label: "Surréalisme" },
        { value: "symbolisme", label: "Symbolisme" }
    ];

    return (
        <div className="art-subcategory-wrapper">
            <Select
                options={optionSubCategoryCollages}
                onChange={(selectedOption) => handleChangeInput({
                    target: {
                        name: 'subcategory',
                        value: selectedOption?.value || '',
                        type: 'text'
                    }
                })}
                name="subcategory"
                value={optionSubCategoryCollages.find(opt => opt.value === (postData?.subcategory || ''))}
                placeholder="Sélectionner un mouvement artistique"
                isDisabled={!postData?.category}
                className="art-movement-select"
                classNamePrefix="ams"
                isSearchable={true}
                noOptionsMessage={() => "Mouvement non disponible"}
                loadingMessage={() => "Chargement..."}
                menuPosition="fixed"
                styles={{
                    menu: provided => ({ ...provided, zIndex: 9999 })
                }}
            />
        </div>
    );
}