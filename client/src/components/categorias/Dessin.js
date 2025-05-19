import Select from 'react-select';

export function ItemsSubCategoryDessin({ handleChangeInput, postData }) {
    const optionSubCategoryDessin = [
        { value: "acrylique", label: "Acrylique" },
        { value: "aerographe", label: "Aérographe" },
        { value: "aquarelle", label: "Aquarelle" },
        { value: "autre", label: "Autre" },
        { value: "bombe_aerosol", label: "Bombe aérosol" },
        { value: "carte_a_gratter", label: "Carte à gratter" },
        { value: "cire", label: "Cire" },
        { value: "conte", label: "Conté" },
        { value: "craie", label: "Craie" },
        { value: "crayon", label: "Crayon" },
        { value: "email", label: "Émail" },
        { value: "encaustique", label: "Encaustique" },
        { value: "encre", label: "Encre" },
        { value: "fusain", label: "Fusain" },
        { value: "gouache", label: "Gouache" },
        { value: "graphite", label: "Graphite" },
        { value: "huile", label: "Huile" },
        { value: "laque", label: "Laque" },
        { value: "marqueur", label: "Marqueur" },
        { value: "pastel", label: "Pastel" },
        { value: "peinture_vitrail", label: "Peinture vitrail" },
        { value: "pigments", label: "Pigments" },
        { value: "pochoir", label: "Pochoir" },
        { value: "pointe_d_argent", label: "Pointe d'argent" },
        { value: "stylo_bille", label: "Stylo à bille" },
        { value: "stylo_gel", label: "Stylo gel" },
        { value: "tempera", label: "Tempera" }
    ];
  
    return (
        <div>
            <Select
                options={optionSubCategoryDessin}
                onChange={(selectedOption) => handleChangeInput({
                    target: {
                        name: 'subcategory',
                        value: selectedOption?.value || '',
                        type: 'text',
                        checked: undefined
                    }
                })}
                name="subcategory"
                value={postData ? optionSubCategoryDessin.find(opt => opt.value === postData.subcategory) : null}
                placeholder="Sélectionner une technique de dessin"
                isDisabled={!postData?.category}
                className="basic-select"
                classNamePrefix="select"
            />
        </div>
    );
}