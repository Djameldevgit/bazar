import Select from 'react-select';

export function ItemsSubCategorySculpture({ handleChangeInput, postData }) {
    const optionSubCategorySculpture = [
        { value: "acier_inoxydable", label: "Acier inoxydable" },
        { value: "aluminium", label: "Aluminium" },
        { value: "argile", label: "Argile" },
        { value: "autre", label: "Autre" },
        { value: "beton", label: "Béton" },
        { value: "beton_cellulaire", label: "Béton cellulaire" },
        { value: "bois", label: "Bois" },
        { value: "bronze", label: "Bronze" },
        { value: "carton", label: "Carton" },
        { value: "ceramique", label: "Céramique" },
        { value: "ciment", label: "Ciment" },
        { value: "coulage", label: "Coulage" },
        { value: "cuir", label: "Cuir" },
        { value: "fil_de_fer", label: "Fil de fer" },
        { value: "glace", label: "Glace" },
        { value: "metaux", label: "Métaux" },
        { value: "mosaique", label: "Mosaïque" },
        { value: "os", label: "Os" },
        { value: "papier", label: "Papier" },
        { value: "papier_mache", label: "Papier mâché" },
        { value: "pate_polymere", label: "Pâte polymère" },
        { value: "pierre", label: "Pierre" },
        { value: "plastique", label: "Plastique" },
        { value: "platre", label: "Plâtre" },
        { value: "resine", label: "Résine" },
        { value: "sable", label: "Sable" },
        { value: "savon", label: "Savon" },
        { value: "terre_cuite", label: "Terre cuite" },
        { value: "verre", label: "Verre" }
    ];
  
    return (
        <div>
            <Select
                options={optionSubCategorySculpture}
                onChange={(selectedOption) => handleChangeInput({
                    target: {
                        name: 'subcategory',
                        value: selectedOption?.value || '',
                        type: 'text',
                        checked: undefined
                    }
                })}
                name="subcategory"
                value={postData ? optionSubCategorySculpture.find(opt => opt.value === postData.subcategory) : null}
                placeholder="Sélectionner un matériau"
                isDisabled={!postData?.category}
            />
        </div>
    );
}