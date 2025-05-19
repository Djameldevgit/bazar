import Select from 'react-select';
import { useMemo } from 'react';

export function ItemsSubCategoryStyle({ handleChangeInput, postData, isCategorySelected = true }) {
    const artStyles = useMemo(() => [
        { value: "abstrait", label: "Abstrait", group: "Moderno" },
        { value: "art_brut", label: "Art brut", group: "Contemporáneo" },
        { value: "art_conceptuel", label: "Art conceptuel", group: "Conceptual" },
        { value: "art_naif", label: "Art naïf", group: "Popular" },
        { value: "art_oriental", label: "Art oriental", group: "Tradicional" },
        { value: "art_premier", label: "Art premier", group: "Indígena" },
        { value: "art_spirituel", label: "Art spirituel", group: "Espiritual" },
        { value: "calligraphie", label: "Calligraphie", group: "Clásico" },
        { value: "classicisme", label: "Classicisme", group: "Clásico" },
        { value: "cubisme", label: "Cubisme", group: "Vanguardista" },
        { value: "expressionnisme", label: "Expressionnisme", group: "Moderno" },
        { value: "fauvisme", label: "Fauvisme", group: "Vanguardista" },
        { value: "figuratif", label: "Figuratif", group: "Tradicional" },
        { value: "geometrique", label: "Géométrique", group: "Moderno" },
        { value: "hyperrealisme", label: "Hyperréalisme", group: "Contemporáneo" },
        { value: "illustration", label: "Illustration", group: "Comercial" },
        { value: "impressionnisme", label: "Impressionnisme", group: "Moderno" },
        { value: "land_art", label: "Land Art", group: "Contemporáneo" },
        { value: "minimalisme", label: "Minimalisme", group: "Moderno" },
        { value: "pop_art", label: "Pop Art", group: "Contemporáneo" },
        { value: "street_art", label: "Street Art", group: "Urbano" },
        { value: "surrealisme", label: "Surréalisme", group: "Vanguardista" },
        { value: "symbolisme", label: "Symbolisme", group: "Moderno" }
    ], []);

    const groupedOptions = useMemo(() => [
        {
            label: "Estilos Modernos",
            options: artStyles.filter(style => style.group === "Moderno")
        },
        {
            label: "Vanguardias Históricas",
            options: artStyles.filter(style => style.group === "Vanguardista")
        },
        {
            label: "Arte Contemporáneo",
            options: artStyles.filter(style => style.group === "Contemporáneo")
        },
        {
            label: "Estilos Clásicos",
            options: artStyles.filter(style => ["Clásico", "Tradicional"].includes(style.group))
        },
        {
            label: "Otros Estilos",
            options: artStyles.filter(style => !["Moderno", "Vanguardista", "Contemporáneo", "Clásico", "Tradicional"].includes(style.group))
        }
    ], [artStyles]);

    return (
        <div className="style-select-container" data-testid="style-select">
            <Select
                options={groupedOptions}
                onChange={(selectedOption) => handleChangeInput({
                    target: {
                        name: 'artStyle',
                        value: selectedOption?.value || '',
                        type: 'text'
                    }
                })}
                name="artStyle"
                value={artStyles.find(style => style.value === (postData?.artStyle || ''))}
                placeholder="Sélectionnez un mouvement artistique"
                isDisabled={!isCategorySelected}
                className="style-select"
                classNamePrefix="style-select"
                isSearchable={true}
                noOptionsMessage={() => "Aucun style correspondant"}
                menuPortalTarget={document.body}
                styles={{
                    menuPortal: base => ({ ...base, zIndex: 9999 }),
                    control: (base, { isFocused }) => ({
                        ...base,
                        borderColor: isFocused ? '#6366f1' : '#e5e7eb',
                        boxShadow: isFocused ? '0 0 0 1px #6366f1' : 'none',
                        '&:hover': {
                            borderColor: '#818cf8'
                        },
                        minHeight: '44px',
                        borderRadius: '8px'
                    }),
                    groupHeading: base => ({
                        ...base,
                        fontWeight: 600,
                        color: '#4338ca',
                        fontSize: '0.875rem'
                    }),
                    option: (base, { isSelected, isFocused }) => ({
                        ...base,
                        backgroundColor: isSelected ? '#4f46e5' : isFocused ? '#e0e7ff' : 'white',
                        color: isSelected ? 'white' : '#1f2937',
                        '&:active': {
                            backgroundColor: '#6366f1'
                        }
                    })
                }}
                components={{
                    IndicatorSeparator: () => null,
                    DropdownIndicator: ({ innerProps }) => (
                        <div {...innerProps} className="text-indigo-600 pr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </div>
                    )
                }}
                menuPlacement="auto"
                menuPosition="fixed"
                maxMenuHeight={300}
            />
        </div>
    );
}