import Select from 'react-select';
import { useMemo } from 'react';
import {Form} from 'react-bootstrap'
export function ItemsSubCategoryTheme({ handleChangeInput, postData, isCategorySelected = true }) {
    const themeOptions = useMemo(() => [
        // Abstrait
        { value: "abstrait", label: "Abstrait", group: "Style" },
        { value: "colore", label: "Coloré", group: "Style" },
        { value: "graffiti", label: "Graffiti", group: "Style" },
        { value: "geometrique", label: "Géométrique", group: "Style" },

        // Animaux
        { value: "animal", label: "Animal", group: "Animaux" },
        { value: "chat", label: "Chat", group: "Animaux" },
        { value: "cheval", label: "Cheval", group: "Animaux" },
        { value: "chien", label: "Chien", group: "Animaux" },
        { value: "oiseau", label: "Oiseau", group: "Animaux" },
        { value: "poisson", label: "Poisson", group: "Animaux" },

        // Culture Pop
        { value: "culture_populaire", label: "Culture populaire", group: "Culture" },
        { value: "bandes_dessinees", label: "Bandes dessinées", group: "Culture" },
        { value: "cinema", label: "Cinéma", group: "Culture" },
        { value: "dessin_anime", label: "Dessin animé", group: "Culture" },
        { value: "jeu_video", label: "Jeu vidéo", group: "Culture" },
        { value: "mode", label: "Mode", group: "Culture" },

        // Cultures du monde
        { value: "afrique", label: "Afrique", group: "Monde" },
        { value: "amerique", label: "Amérique", group: "Monde" },
        { value: "asie", label: "Asie", group: "Monde" },
        { value: "tribal", label: "Tribal", group: "Monde" },

        // Fantastique
        { value: "fantastique", label: "Fantastique", group: "Fantasy" },
        { value: "conte_de_fee", label: "Conte de fée", group: "Fantasy" },
        { value: "dark_fantasy", label: "Dark-Fantasy", group: "Fantasy" },
        { value: "gothique", label: "Gothique", group: "Fantasy" },
        { value: "science_fiction", label: "Science-fiction", group: "Fantasy" },

        // Histoire
        { value: "histoire", label: "Histoire", group: "Société" },
        { value: "guerre", label: "Guerre", group: "Société" },
        { value: "politique", label: "Politique", group: "Société" },
        { value: "humour", label: "Humour", group: "Société" },
        { value: "caricature", label: "Caricature", group: "Société" },

        // Nature
        { value: "nature", label: "Nature", group: "Nature" },
        { value: "arbre", label: "Arbre", group: "Nature" },
        { value: "champignon", label: "Champignon", group: "Nature" },
        { value: "fleur", label: "Fleur", group: "Nature" },
        { value: "nature_morte", label: "Nature morte", group: "Nature" },
        { value: "vanite", label: "Vanité", group: "Nature" },

        // Nus
        { value: "nu", label: "Nu", group: "Figure Humaine" },
        { value: "nus_masculins", label: "Nus Masculins", group: "Figure Humaine" },
        { value: "nus_feminins", label: "Nus féminins", group: "Figure Humaine" },
        { value: "nus_erotiques", label: "Nus érotiques", group: "Figure Humaine" },

        // Paysage
        { value: "paysage", label: "Paysage", group: "Paysage" },
        { value: "campagne", label: "Campagne", group: "Paysage" },
        { value: "desert", label: "Désert", group: "Paysage" },
        { value: "foret", label: "Forêt", group: "Paysage" },
        { value: "montagne", label: "Montagne", group: "Paysage" },

        // Portrait
        { value: "portrait", label: "Portrait", group: "Portrait" },
        { value: "portraits_de_celebrites", label: "Portraits de célébrités", group: "Portrait" },
        { value: "portraits_de_femmes", label: "Portraits de femmes", group: "Portrait" },
        { value: "portraits_denfants", label: "Portraits d'enfants", group: "Portrait" },
        { value: "portraits_dhommes", label: "Portraits d'hommes", group: "Portrait" },

        // Spiritualité
        { value: "spiritualite", label: "Spiritualité", group: "Religion" },
        { value: "esoterisme", label: "Esotérisme", group: "Religion" },
        { value: "icones_religieuses", label: "Icônes religieuses", group: "Religion" },
        { value: "mythologie", label: "Mythologie", group: "Religion" },
        { value: "religion", label: "Religion", group: "Religion" },

        // Sport
        { value: "sport", label: "Sport", group: "Activités" },
        { value: "art_martial", label: "Art martial", group: "Activités" },
        { value: "danse", label: "Danse", group: "Activités" },
        { value: "football", label: "Football", group: "Activités" },
        { value: "rugby", label: "Rugby", group: "Activités" },
        { value: "tennis", label: "Tennis", group: "Activités" },

        // Technologie
        { value: "technologie", label: "Technologie", group: "Technologie" },
        { value: "industrie", label: "Industrie", group: "Technologie" },
        { value: "robot", label: "Robot", group: "Technologie" },
        { value: "science", label: "Science", group: "Technologie" },

        // Urbain
        { value: "urbain", label: "Urbain", group: "Architecture" },
        { value: "architecture", label: "Architecture", group: "Architecture" },
        { value: "monument", label: "Monument", group: "Architecture" },
        { value: "ville", label: "Ville", group: "Architecture" },

        // Véhicules
        { value: "vehicule", label: "Véhicule", group: "Transport" },
        { value: "avion", label: "Avion", group: "Transport" },
        { value: "moto", label: "Moto", group: "Transport" },
        { value: "train", label: "Train", group: "Transport" },
        { value: "voiture", label: "Voiture", group: "Transport" },
        { value: "velo", label: "Vélo", group: "Transport" }
    ], []);

    const groupedOptions = useMemo(() => [
        {
            label: "Styles Artistiques",
            options: themeOptions.filter(opt => opt.group === "Style")
        },
        {
            label: "Nature et Paysages",
            options: themeOptions.filter(opt => ["Nature", "Paysage"].includes(opt.group))
        },
        {
            label: "Figure Humaine",
            options: themeOptions.filter(opt => ["Figure Humaine", "Portrait"].includes(opt.group))
        },
        {
            label: "Culture et Société",
            options: themeOptions.filter(opt => ["Culture", "Société", "Religion"].includes(opt.group))
        },
        {
            label: "Activités et Loisirs",
            options: themeOptions.filter(opt => ["Activités", "Transport"].includes(opt.group))
        },
        {
            label: "Monde Fantastique",
            options: themeOptions.filter(opt => ["Fantasy", "Technologie"].includes(opt.group))
        },
        {
            label: "Divers",
            options: themeOptions.filter(opt => !["Style", "Nature", "Paysage", "Figure Humaine", "Portrait",
                "Culture", "Société", "Religion", "Activités", "Transport",
                "Fantasy", "Technologie"].includes(opt.group))
        }
    ], [themeOptions]);

    return (
        <div className="theme-select-container">
            <Form.Text className="text-muted">
                Theme
            </Form.Text>
            <Select
                options={groupedOptions}
                onChange={(selectedOption) => handleChangeInput({
                    target: {
                        name: 'theme',
                        value: selectedOption?.value || '',
                        type: 'text'
                    }
                })}
                name="theme"
                value={themeOptions.find(opt => opt.value === (postData?.theme || ''))}
                placeholder="Choisir un thème artistique..."
                isDisabled={!isCategorySelected}
                className="theme-select"
                classNamePrefix="theme-select"
                isSearchable={true}
                noOptionsMessage={() => "Aucun thème correspondant"}
                menuPortalTarget={document.body}
                styles={{
                    menuPortal: base => ({ ...base, zIndex: 9999 }),
                    control: (base, { isFocused }) => ({
                        ...base,
                        borderWidth: '2px',
                        borderColor: isFocused ? '#7c3aed' : '#d1d5db',
                        boxShadow: isFocused ? '0 0 0 2px rgba(124, 58, 237, 0.2)' : 'none',
                        '&:hover': {
                            borderColor: '#7c3aed'
                        },
                        minHeight: '44px',
                        borderRadius: '10px',
                        fontSize: '15px'
                    }),
                    groupHeading: base => ({
                        ...base,
                        fontWeight: 700,
                        color: '#5b21b6',
                        fontSize: '0.85rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }),
                    option: (base, { isSelected, isFocused }) => ({
                        ...base,
                        backgroundColor: isSelected ? '#7c3aed' : isFocused ? '#ede9fe' : 'white',
                        color: isSelected ? 'white' : '#1f2937',
                        fontSize: '14px',
                        '&:active': {
                            backgroundColor: '#6d28d9'
                        }
                    }),
                    menu: base => ({
                        ...base,
                        borderRadius: '10px',
                        border: '1px solid #e5e7eb',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    })
                }}
                components={{
                    IndicatorSeparator: () => null,
                    DropdownIndicator: ({ innerProps }) => (
                        <div {...innerProps} className="pr-3 text-purple-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    )
                }}
                menuPlacement="auto"
                menuPosition="fixed"
                maxMenuHeight={400}
                virtualized
            />
        </div>
    );
}