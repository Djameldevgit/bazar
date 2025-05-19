import Select from 'react-select';

export function ItemsSubCategoryArtsNumeriques({ handleChangeInput, postData }) {
    const optionSubCategoryArtsNumeriques = [
        { value: "collage_numerique", label: "Collage numérique" },
        { value: "image_generee_ia", label: "Image générée par l'IA" },
        { value: "modelisation_3d", label: "Modélisation 3D" },
        { value: "peinture_numerique", label: "Peinture numérique" },
        { value: "photo_montage", label: "Photo montage" },
        { value: "travail_numerique_2d", label: "Travail numérique 2D" },
        { value: "video", label: "Vidéo" },
        { value: "style", label: "Style" }
    ];
  
    return (
        <div className="art-subcategory-container">
            <Select
                options={optionSubCategoryArtsNumeriques}
                onChange={(selectedOption) => handleChangeInput({
                    target: {
                        name: 'subcategory',
                        value: selectedOption?.value || '',
                        type: 'text',
                        checked: undefined
                    }
                })}
                name="subcategory"
                value={postData ? optionSubCategoryArtsNumeriques.find(opt => opt.value === postData.subcategory) : null}
                placeholder="Sélectionner un type d'art numérique"
                isDisabled={!postData?.category}
                className="art-select"
                classNamePrefix="art-select"
                noOptionsMessage={() => "Aucune option disponible"}
                isSearchable={true}
            />
        </div>
    );
}