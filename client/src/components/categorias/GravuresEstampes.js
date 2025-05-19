import Select from 'react-select';

export function ItemsSubCategoryGravures({ handleChangeInput, postData }) {
    const optionSubCategoryGravures = [
        { value: "collagraphie", label: "Collagraphie" },
        { value: "eau_forte", label: "Eau-forte" },
        { value: "embossage", label: "Embossage" },
        { value: "gravure", label: "Gravure" },
        { value: "impression_numerique", label: "Impression numérique" },
        { value: "linogravures", label: "Linogravures" },
        { value: "lithographie", label: "Lithographie" },
        { value: "monotype", label: "Monotype" },
        { value: "serigraphie", label: "Sérigraphie" },
        { value: "tirage_argentique", label: "Tirage argentique" },
        { value: "xylographie", label: "Xylographie" }
    ];
  
    return (
        <div>
            <Select
                options={optionSubCategoryGravures}
                onChange={(selectedOption) => handleChangeInput({
                    target: {
                        name: 'subcategory',
                        value: selectedOption?.value || '',
                        type: 'text',
                        checked: undefined
                    }
                })}
                name="subcategory"
                value={postData ? optionSubCategoryGravures.find(opt => opt.value === postData.subcategory) : null}
                placeholder="Sélectionner une technique de gravure"
                isDisabled={!postData?.category}
                className="basic-select"
                classNamePrefix="select"
            />
        </div>
    );
}