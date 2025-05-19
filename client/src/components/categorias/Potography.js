import Select from 'react-select';

export function ItemsSubCategoryPhotographie({ handleChangeInput, postData }) {
    const optionSubCategoryPhotographie = [
        { value: "light_painting", label: "Light Painting" },
        { value: "photographie_argentique", label: "Photographie argentique" },
        { value: "photographie_manipulee", label: "Photographie manipulée" },
        { value: "photographie_non_manipulee", label: "Photographie non manipulée" },
        { value: "photographie_numerique", label: "Photographie numérique" }
    ];
  
    return (
        <div>
            <Select
                options={optionSubCategoryPhotographie}
                onChange={(selectedOption) => handleChangeInput({
                    target: {
                        name: 'subcategory',
                        value: selectedOption?.value || '',
                        type: 'text',
                        checked: undefined
                    }
                })}
                name="subcategory"
                value={postData ? optionSubCategoryPhotographie.find(opt => opt.value === postData.subcategory) : null}
                placeholder="Sélectionner un type de photographie"
                isDisabled={!postData?.category}
            />
        </div>
    );
}