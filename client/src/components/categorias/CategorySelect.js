import Select from 'react-select';

 
export function ItemsCategory({ handleChangeInput, postData }) {
    const artCategories = [
        { value: "Peinture", label: "Peinture" },
        { value: "Sculpture", label: "Sculpture" },
        { value: "Photographie", label: "Photographie" },
        { value: "Dessin", label: "Dessin" },
        { value: "Gravures Estampes", label: "Gravures & estampes" },
        { value: "Arts Numeriques", label: "Arts numériques" },
        { value: "Collages", label: "Collages" },
        { value: "Art textile", label: "Art textile" },
        { value: "Design", label: "Design" }
    ];
  
    return (
        <div>
            <Select
                options={artCategories}
                onChange={(selectedOption) => handleChangeInput({
                    target: {
                        name: 'category',
                        value: selectedOption?.value || '',
                        type: 'text',
                        checked: undefined
                    }
                })}
                name="category"
                value={postData ? artCategories.find(opt => opt.value === postData.category) : null}
                placeholder="Sélectionner une catégorie"
                className="basic-select"
                classNamePrefix="select"
            />
        </div>
    );
}
 